import axios from 'axios';
import {dom} from "../dom";
import {request} from "../request";
import {clone} from "../clone";
import {type_checks} from "../type_checks";

const navigationDefaults = {
    trackHistory:false,
    pushState:true,
    loaderEnabled:true,
    loaderDelay:300,
    incomingElement:'body',
    replaceElement:'body',
    loaderClasses:'progress page-navigation-loader',
    loaderInnerDivClasses:'progress-bar progress-bar-striped progress-bar-animated',
};

/**
 * Allows you to simulate a page change by using an XHR request to grab content and replace it on the current page
 *
 * Automatically updates the browser's history, swaps out meta tags, updates the title, and more
 *
 * Use onload and onUnload hooks to add additional logic for things like triggering a google analytics page view
 *  or scrolling to the top of the new page
 */
export const navigation = {
    /**
     * Sets config options in bulk by extending the current values
     *
     * @param data
     * @returns this
     */
    setConfig: function(data = {}){
        data = {...this.getConfig(), ...data};

        this.trackHistory = data.trackHistory;
        this.pushState = data.pushState;
        this.loaderEnabled = data.loaderEnabled;

        this.setLoaderDelay(data.loaderDelay);
        this.setIncomingElement(data.incomingElement);
        this.setReplaceElement(data.replaceElement);

        this._loaderClasses = data.loaderClasses;
        this._loaderInnerDivClasses = data.loaderInnerDivClasses;

        return this;
    },

    /**
     * Resets config to defaults
     *
     * @returns this;
     */
    resetConfig: function(){
        this.setConfig(navigationDefaults);
        return this;
    },

    /**
     * Returns the basic config options as an object
     * @returns {{loaderInnerDivClasses: (*|string), pushState: *, loaderDelay: *, loaderClasses: string, trackHistory: *, loaderEnabled: *, replaceElement: (*|string), incomingElement: (*|string)}}
     */
    getConfig: function(){
        return {
            trackHistory:this.trackHistory,
            pushState:this.pushState,
            loaderEnabled:this.loaderEnabled,
            loaderDelay:this.getLoaderDelay(),
            incomingElement:this.getIncomingElement(),
            replaceElement:this.getReplaceElement(),
            loaderClasses:this._loaderClasses,
            loaderInnerDivClasses:this._loaderInnerDivClasses
        };
    },

    /**
     * Whether or not to keep track of the pages that were loaded in an array
     */
    trackHistory: navigationDefaults.trackHistory,
    
    /**
     * Grabs all pages that were loaded previously (does not persist if the page is reloaded)
     *
     * @returns {*}
     */
    getHistory: function(){
        return clone.getValueOrClone(this._history);
    },
    /**
     * Gets the last page's url and route
     *
     * @returns {T}
     */
    getLastHistoryRecord(){
        return this._history.pop();
    },
    _addHistoryItem(url, route){
        if( !this.trackHistory ) return false;
        if( typeof url !== 'string' ) throw `${url} must be a string`;
        route = typeof route === "undefined" ? this.getRouteFromMeta() : route;
        this._history.push({'url':url, 'route':route});
        return this;
    },
    _history: [],

    /**
     * Sets data to be provided to the next page's onload callback
     *  this data persists until cleared manually and will be provided to ALL subsequent onload handlers
     *   (or it can be grabbed manually from this object at any time)
     *
     * @param data
     * @returns {navigation}
     */
    setData: function (data = {}) {
        if( typeof data !== 'object' || data === null ) throw `${data} must be an object`;
        this._data = clone.getValueOrClone(data);
        return this;
    },
    /**
     * Gets all data
     *
     * @returns object
     */
    getData: function () {
        return clone.getValueOrClone(this._data);
    },
    /**
     * Sets a single value in your data object
     *
     * @param key
     * @param val
     */
    setDataItem: function(key, val){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        this._data[key] = clone.getValueOrClone(val);
        return this;
    },
    /**
     * Gets a single value from your data object or if it doesn't exist it'll return null
     *
     * @param key
     * @returns mixed
     */
    getDataItem: function(key){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        //if not defined or null, return null
        if( typeof this._data[key] === 'undefined' || this._data[key] === null ) return null;
        return clone.getValueOrClone(this._data[key]);
    },
    /**
     * Remove all data
     *
     * @returns {navigation}
     */
    clearData: function () {
        this.setData({});
        return this;
    },
    /**
     * Remove a single value
     *
     * @param key
     * @returns {navigation}
     */
    clearDataItem: function(key){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        if( typeof this._data[key] !== 'undefined' ){
            delete this._data[key];
        }
        return this;
    },
    _data: {},

    /**
     * Sets the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @param selector_string
     */
    setIncomingElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} must be a string`;
        this._incomingElement = selector_string;
    },
    _incomingElement: navigationDefaults.incomingElement,
    /**
     * @returns {string}
     */
    getIncomingElement: function () {
        return this._incomingElement;
    },

    /**
     * Sets the selector string for the element on the current page that will be replaced with incoming HTML
     *
     * @param selector_string
     */
    setReplaceElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} must be a string`;
        this._replaceElement = selector_string;
    },
    _replaceElement: navigationDefaults.replaceElement,
    /**
     * @returns {string}
     */
    getReplaceElement: function () {
        return this._replaceElement;
    },

    /**
     * Whether or not to push the page that was loaded to the browser's history
     */
    pushState: navigationDefaults.pushState,

    /**
     * Grabs HTML from a URL and replaces content on the current page
     *
     * 1) Shows a loader (if enabled)
     * 2) Requests content from the provided URL
     * 3) Replaces it on the page (and all the magic replacePageContent does, see comments on that method below)
     * 4) If there's a callback provided, it'll be run afterwards (it receives the newly replaced element as a param)
     *
     * On error, it triggers onFail callbacks you've attached and provides the error message
     *
     * @param url
     * @param data
     * @param onload
     * @param options:{incomingElement, replaceElement, pushState}
     */
    load: function (url, data = {}, onload, options = {}) {
        const self = this;

        //validate options has these keys (or none at all)
        type_checks.isDataObject(options, ['incomingElement', 'replaceElement', 'pushState'], false, true, true);

        //override global data with passed data
        data = {...self.getData(), ...data};

        //set values
        const incomingElementSelector = typeof options.incomingElement !== "undefined" ? options.incomingElement : this.getIncomingElement();
        const replaceElementSelector = typeof options.replaceElement !== "undefined" ? options.replaceElement : this.getReplaceElement();
        const replaceElement = dom.getElement(replaceElementSelector, true);
        const pushState = typeof options.pushState !== "undefined" ? options.pushState : this.pushState;

        //cache route (axios is async)
        const current_route = self.getRouteFromMeta();

        //run onBeforeRequest callbacks and if any return false, don't send the request
        if( !self._triggerOnBeforeRequest(replaceElement, replaceElementSelector, incomingElementSelector, current_route, data) ){
            return false;
        }

        self.showLoader();

        axios.get(url).then(function (response) {
            self.hideLoader();
            self._replacePageContent(response.data, url, incomingElementSelector, replaceElementSelector, pushState, current_route, data, onload);
        }).catch(function (error) {
            self.hideLoader();

            //at this point, it can only be a string error message or an axios error object
            //so set both values accordingly
            const axios_error = typeof error === "object" && error !== null && error.isAxiosError ? error : null;
            error = axios_error !== null ? axios_error.response.statusText : error;

            self._triggerFail(error, url, data, axios_error);
            throw error;
        });

        return this;
    },

    /**
     * Whether or not the loader at the top is enabled to display on slow requests
     */
    loaderEnabled: navigationDefaults.loaderEnabled,

    /**
     * Sets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * Set to 0 if you want it to always show
     *
     * @param delay_in_ms
     * @returns {navigation}
     */
    setLoaderDelay: function (delay_in_ms = 300) {
        if (typeof delay_in_ms !== "number") throw `${delay_in_ms} must be an integer`;
        this._loaderDelay = delay_in_ms;
        return this;
    },
    _loaderDelay: navigationDefaults.loaderDelay,
    getLoaderDelay: function () {
        return this._loaderDelay;
    },

    /**
     * Shows a loader at the top of the page if the request takes more than the delay set above to complete
     */
    showLoader: function () {
        const self = this;

        if (!self.loaderEnabled) return;

        self.loader_timeout = window.setTimeout(function () {
            self._getLoaderEl().classList.add('active');
        }, self.getLoaderDelay());

        return this;
    },

    /**
     * Hides the loader at the top of the page
     */
    hideLoader: function () {
        var self = this;

        if (!self.loaderEnabled) return;

        //if the loader still hasn't shown yet, prevent it because the request was very fast
        window.clearTimeout(self.loader_timeout);

        //hide the loader
        self._getLoaderEl().classList.remove('active');

        return this;
    },

    /**
     * Classes for the loader
     * Defaults are for bootstrap (with the exception of page-navigation-loader)
     */
    _loaderClasses: navigationDefaults.loaderClasses,
    _loaderInnerDivClasses: navigationDefaults.loaderInnerDivClasses,

    /**
     * If enabled, adds a loader to the page and caches a reference to it, then returns that reference
     *
     * @returns Element
     */
    _getLoaderEl: function () {
        const self = this;

        if (!self.loaderEnabled) return;
        if (self.navLoaderCached) return self.navLoaderCached;

        //prepend the loader elements
        let div = document.createElement('div');
        div.classList = self._loaderClasses;
        let inner_div = document.createElement('div');
        inner_div.classList = self._loaderInnerDivClasses;
        div.append(inner_div);
        document.body.prepend(div);

        //get and cache a reference to it for future requests
        self.navLoaderCached = dom.getElement('.page-navigation-loader');

        return self.navLoaderCached;
    },

    /**
     * Gets the current route from the meta tag, if it exists
     *
     * If you don't provide HTML, it'll grab it from the current DOM
     *
     * @param html
     * @returns {any | Element}
     */
    getRouteFromMeta: function (html = document.head) {
        var route = html.querySelector('[name="current_route"]');
        route = route ? route.content : null;
        return route;
    },

    /**
     * Refreshes the current page using .load()
     *
     * @returns {navigation}
     */
    reload: function (callback) {
        callback = typeof callback !== 'function' ? null : callback;
        this.load(request.getFullURL(), {}, callback);
        return this;
    },

    /**
     * Performs a full refresh of the current URL
     *
     * @returns {navigation}
     */
    fullReload: function () {
        this.showLoader();
        window.location.reload();
    },

    /**
     * Sends the user to a new page without XHR
     *
     * @param url
     */
    redirect: function (url) {
        this.showLoader();
        window.location.href = url;
    },

    /**
     * When arriving at a new page, you might need to instantiate some stuff
     *
     * @param callback
     * @returns {navigation}
     */
    _onloadCallbacks: [],
    onload: function (callback) {
        if( typeof callback !== 'function' ) throw `${callback} must be a function`;
        this._onloadCallbacks.push(callback);
        return this;
    },
    removeOnload: function(callback){
        this._onloadCallbacks.filter(function(ele){
            return ele !== callback;
        });
        return this;
    },

    /**
     * When leaving a page you might need to destroy some plugins or something
     *
     * @param callback
     * @returns {navigation}
     */
    _onUnloadCallbacks: [],
    onUnload: function (callback) {
        if( typeof callback !== 'function' ) throw `${callback} must be a function`;
        this._onUnloadCallbacks.push(callback);
        return this;
    },
    removeOnUnload: function(callback){
        this._onUnloadCallbacks.filter(function(ele){
            return ele !== callback;
        });
        return this;
    },

    /**
     * When the new page fails to load, you should probably tell the user/try again/log the issue
     *
     * @param callback
     * @returns {navigation}
     */
    _onFailCallbacks: [],
    onFail: function (callback) {
        if( typeof callback !== 'function' ) throw `${callback} must be a function`;
        this._onFailCallbacks.push(callback);
        return this;
    },
    removeOnFail: function(callback){
        this._onFailCallbacks.filter(function(ele){
            return ele !== callback;
        });
        return this;
    },

    /**
     *
     * Add as many callbacks as you'd like to run right before the request is made
     *
     * If any of them return false, the request will be prevented
     *
     * @param callback
     * @returns self
     */
    onBeforeRequest: function(callback){
        if( typeof callback !== 'function' ) throw `${callback} must be a function`;
        this._onBeforeRequestCallbacks.push(callback);
        return this;
    },
    removeOnBeforeRequest: function(callback){
        this._onBeforeRequestCallbacks.filter(function(ele){
            return ele !== callback;
        });
        return this;
    },
    _onBeforeRequestCallbacks: [],

    /**
     * We're on a new page, tell the world.
     *
     * Also includes the route of the new page (if it exists in a meta tag) so that you can kick off JS specific to that page
     *
     * @param el
     * @param el_selector
     * @param replaced_selector
     * @param route
     * @param data
     */
    _triggerOnload: function (el, el_selector, replaced_selector, route, data) {
        this._onloadCallbacks.forEach(function(callback){
            callback(el, data, {
                selector:el,
                replacedSelector:replaced_selector,
                route: route
            });
        });
        return this;
    },

    /**
     * We're leaving the last page, tell the world.
     *
     * @param el
     * @param el_selector
     * @param route
     * @param data
     */
    _triggerUnload: function (el, el_selector, route, data) {
        this._onUnloadCallbacks.forEach(function(callback){
            callback(el, data, {
                selector:el_selector,
                route: route
            });
        });
        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     * @param url
     * @param data
     * @param axios_error
     * @returns {navigation}
     */
    _triggerFail: function (error, url, data, axios_error) {
        this._onFailCallbacks.forEach(function(callback){
            callback(error, url, data, axios_error);
        });
        return this;
    },

    /**
     * We're about to load the next page
     *
     * @param el
     * @param el_selector
     * @param incoming_selector
     * @param route
     * @param data
     */
    _triggerOnBeforeRequest: function (el, el_selector, incoming_selector, route, data) {
        let prevent_request = false;
        this._onBeforeRequestCallbacks.forEach(function(callback){
            //run the callback and get the result
            const result = callback(el, data, {
                selector:el_selector,
                incomingSelector:incoming_selector,
                route: route
            });
            //if the result was provided as false, prevent the request
            if( typeof result === "boolean" && !result ){
                prevent_request = true;
            }
        });
        return !prevent_request;
    },

    /**
     * Attaches event handlers to track the browser's history buttons (back/forward)
     *
     * @todo: Investigate possible issue with chrome caching back button contents and not loading the entire page
     */
    initHistoryHandlers: function () {
        var self = this;

        //forward button
        window.onpushstate = function (e) {
            self.load(request.getURIWithQueryString());
        };

        //back button
        window.onpopstate = function (e) {
            self.load(request.getURIWithQueryString(), {}, null, {
                pushState:false
            });
        };

        return this;
    },

    /**
     * Replaces content on the current page with new HTML
     *
     * 1) Triggers unload()
     * 2) Waits 100ms
     * 3) Parses the incoming HTML to grab key components
     * 4) Replaces all meta tags (important for social media sharing among other things)
     * 5) Replaces the canonical tag
     * 6) Replaces any classes on the body since they are generally used to indicate which page you're on
     * 7) Pushes to the browser's history
     * 8) Sets the page title
     * 9) Replaces content in the DOM
     * 10) Triggers onload()
     *
     * @param html
     * @param url
     * @param incoming_el_selector
     * @param replace_el_selector
     * @param push_state
     * @param current_route
     * @param data
     * @param one_time_callback
     */
    _replacePageContent(html, url, incoming_el_selector, replace_el_selector, push_state = true, current_route = null, data = {}, one_time_callback = null) {
        const self = this;

        //defaults
        incoming_el_selector = typeof incoming_el_selector === "undefined" ? this.getIncomingElement() : incoming_el_selector;
        replace_el_selector = typeof replace_el_selector === "undefined" ? this.getReplaceElement() : replace_el_selector;

        //validate incoming data
        if (typeof url !== 'string') throw `Provided url (${url}) must be a string`;
        if (typeof incoming_el_selector !== 'string') throw `incoming_el_selector (${incoming_el_selector}) must be a string`;
        if (typeof replace_el_selector !== 'string') throw `replace_el_selector (${replace_el_selector}) must be a string`;

        const replace_el = dom.getElement(replace_el_selector, true); //error if not found

        //trigger the unload callbacks
        self._triggerUnload(replace_el, replace_el_selector, current_route, data);

        //parse the response to grab anything that we need (title, meta, content, route, etc)
        var parsed = self._parseHTML(html, incoming_el_selector);

        //if there is HTML to put on the page
        if (parsed.html.length) {

            //remove all meta tags and replace from new page
            dom.remove('meta');
            parsed.metas.forEach(function(meta){
                document.head.append(meta);
            });

            //add the canonical link
            // - possibly other tags will need to be whitelisted in the future.
            // - the main concern is not putting JS/CSS into the current page that shouldn't be
            dom.remove('[rel="canonical"]');
            Array.from(parsed.links).forEach(function (link) {
                document.head.append(link);
            });

            //add body classes
            document.body.classList = parsed.body_classes;

            //push the state to the browser's history
            push_state && history.pushState({url: url}, parsed.title, url);

            //update the tab/page title
            self._setTitle(parsed.title);

            //replace content on the page
            const new_content = dom.replaceElWithHTML(replace_el, parsed.html);

            //trigger nav complete event
            self._triggerOnload(new_content, incoming_el_selector, replace_el_selector, parsed.route, data);

            //if a callback was provided, run it and provide the parent element
            if (typeof one_time_callback === 'function') {
                one_time_callback(new_content, incoming_el_selector, replace_el_selector, current_route, data);
            }

            //add to history (if enabled)
            this._addHistoryItem(url, parsed.route);

            //if the replace_el_selector is not the same as getReplaceElement(),
            // then it should be updated to whatever the incoming_el_selector is because it no longer exists
            if (self.getReplaceElement() !== replace_el_selector) {
                self.setReplaceElement(incoming_el_selector);
            }
        }

        return this;
    },

    /**
     * Parses the incoming HTML (or JSON object) to grab key components like meta tags and the inner content of the parent element
     *
     * If no parent element is provided, it will just return the provided html
     *
     * @param html
     * @param parent_el
     * @returns {{metas: HTMLCollectionOf<HTMLElementTagNameMap[string]>, route: (*|any|Element), links: NodeListOf<Element>, html: HtmlOptions | string, title: any | HTMLTitleElement, body_classes: DOMTokenList}}
     * @private
     */
    _parseHTML(html, parent_el = null) {
        var self = this;

        //must be a string or null
        if (typeof parent_el !== 'string' && parent_el !== null) throw `Provided parent_el (${parent_el}) must be a string or null`;

        route = null;
        if( typeof html === "object" && html !== null ){
            if( html.html ){
                if( html.route ){
                    route = html.route;
                }
                html = html.html;
            }else{
                throw `Incoming JSON object does not contain HTML key`;
            }
        }

        //parse the incoming dom
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        //get page title
        var title = doc.querySelector('title');
        title = title ? title.innerText : null;

        //get any meta tags
        var metas = Array.from(doc.head.getElementsByTagName('meta'));
        //get the canonical link
        var links = doc.querySelectorAll('link[rel="canonical"]');
        //get body classes
        var body_classes = doc.body.classList.toString();

        //default to the incoming HTML
        var new_html = html;

        //if a parent element was provided, find it
        if (parent_el) {
            var sel = doc.querySelector(parent_el);
            //if couldn't find the element
            if (!sel) {
                throw `Could not find parent selector ${parent_el}`;
            }
            //grab the outerHTML
            new_html = sel.outerHTML;
        }

        //if route didn't exist in the incoming JSON object, grab from the HTML
        var route = route ? route : self.getRouteFromMeta(doc);

        // Garbage collection, you don't need this anymore.
        parser = doc = null;

        return {
            title: title,
            route: route,
            metas: metas,
            links: links,
            body_classes: body_classes,
            html: new_html
        };
    },

    /**
     * Sets the title of the page
     *
     * @param title
     * @returns {navigation}
     */
    _setTitle: function (title) {
        document.title = title;
        return this;
    },
};