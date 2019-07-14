/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jpack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./es/components/index.js":
/*!********************************!*\
  !*** ./es/components/index.js ***!
  \********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./es/components/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"]; });





/***/ }),

/***/ "./es/components/navigation/index.js":
/*!*******************************************!*\
  !*** ./es/components/navigation/index.js ***!
  \*******************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/dom */ "./es/utilities/dom/index.js");
/* harmony import */ var _objects_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/request */ "./es/objects/request/index.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ "./es/utilities/events/index.js");





/**
 * Allows you to simulate a page change by using an XHR request to grab content and replace it on the current page
 *
 * Automatically updates the browser's history, swaps out meta tags, updates the title, and more
 *
 * Use onLoad and onUnload hooks to add additional logic for things like triggering a google analytics page view
 *  or scrolling to the top of the new page
 *
 * @type {{triggerOnLoad: (function(*=, *=): navigation), setPassthroughData: (function(*): navigation), _incomingElementSelector: string, setLoaderDelay: (function(*=): navigation), fullReload: navigation.fullReload, triggerUnload: (function(*=): navigation), reload: (function(*=): navigation), load: navigation.load, clearPassthroughData: (function(): navigation), replacePageContent(*=, *=, *=, *=, *=): *, hideLoader: (function(): navigation), loaderEnabled: boolean, showLoader: (function(): navigation), setReplaceElement: navigation.setReplaceElement, _loaderDelay: number, getReplaceElement: (function(): string), redirect: navigation.redirect, getLoaderDelay: (function(): number), onUnload: (function(*=): navigation), initHistoryHandlers: (function(): navigation), _passthroughData: null, setIncomingElement: navigation.setIncomingElement, parseHTML(*=, *=): {metas: HTMLCollectionOf<HTMLElementTagNameMap, string[]>, route: (*|any|Element), links: HTMLCollectionOf<HTMLElementTagNameMap, string[]>, html: string, title: string, body_classes: DOMTokenList}, setTitle: (function(*): navigation), getPassThroughData: (function(*): null), onNavigationFailure: (function(*=): navigation), _replaceElementSelector: string, getRouteFromMeta: (function(*=): (any | Element)), getLoaderEl: navigation.getLoaderEl, onLoad: (function(*=): navigation), triggerNavigationFailure: (function(*=): navigation), getIncomingElement: (function(): string)}}
 */
const navigation = {

    /**
     * Stores data to be provided to the onload callback after navigating to another page using .load()
     */
    _passthroughData: null,

    /**
     * Sets data to be provided to the next page
     *  this data persists until cleared manually and will be provided to ALL subsequent onLoad handlers
     *   (or it can be grabbed manually from this object at any time)
     *
     * @param data
     * @returns {navigation}
     */
    setPassthroughData: function(data)
    {
        this._passthroughData = data;
        return this;
    },

    /**
     * Clears data provided for the next page
     *
     * @returns {navigation}
     */
    clearPassthroughData: function()
    {
        this.setPassthroughData(null);
        return this;
    },

    /**
     * Returns any data that has been set for passing to subsequent pages
     *
     * @param data
     * @returns {null}
     */
    getPassThroughData: function(data){
        return this._passthroughData;
    },

    /**
     * The element in the response which contains the HTML you want to pull and put on the current page
     */
    _incomingElementSelector: 'body',

    /**
     * Sets the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @param selector_string
     */
    setIncomingElement: function(selector_string){
        if( typeof selector_string !== 'string' ) throw `${selector_string} is not a string`;
        this._incomingElementSelector = selector_string;
    },

    /**
     * Returns the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @returns {string}
     */
    getIncomingElement: function(){
        return this._incomingElementSelector;
    },

    /**
     * This element on the current page will be replaced with incoming HTML
     */
    _replaceElementSelector: 'body',

    /**
     * Sets the selector string for the element on the current page that will be replaced with incoming HTML
     *
     * @param selector_string
     */
    setReplaceElement: function(selector_string){
        if( typeof selector_string !== 'string' ) throw `${selector_string} is not a string`;
        this._replaceElementSelector = selector_string;
    },

    /**
     * Returns the selectors string for the element on the current page that will be replaced with incoming HTML
     *
     * @returns {string}
     */
    getReplaceElement: function(){
        return this._replaceElementSelector;
    },

    /**
     * Grabs HTML from a URL and replaces content on the current page
     *
     * 1) Shows a loader (if enabled)
     * 2) Requests content from the provided URL
     * 3) Replaces it on the page (and all the magic replacePageContent does, see comments on that method below)
     * 4) If there's a callback provided, it'll be run afterwards (it receives the newly replaced element as a param)
     *
     * On error, it triggers a navigation failure and provides the error message
     *
     * @param url
     * @param callback
     * @param incoming_el
     * @param replace_el
     * @param push_state
     */
    load: function(url, callback, incoming_el, replace_el, push_state){
        if( typeof url !== 'string' ) throw `Provided URL (${url}) is not a string`;

        incoming_el = typeof incoming_el == 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;
        push_state = typeof push_state === 'undefined' ? true : push_state;

        if( typeof incoming_el !== 'string' ) throw `Provided incoming_el (${incoming_el}) is not a string`;
        if( typeof replace_el !== 'string' ) throw `Provided replace_el (${replace_el}) is not a string`;

        navigation.showLoader();

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
            navigation.hideLoader();

            navigation.replacePageContent(response.data, url, incoming_el, replace_el, push_state);

            //if a callback was provided, run it and provide the parent element
            if (typeof callback === 'function') {
                //wait for the onunload callbacks to run and the new content to be put on the page first
                window.setTimeout(function(){
                    callback(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), incoming_el, navigation.getPassThroughData());
                }, 105);
            }
        })
        .catch(function (error) {
            navigation.hideLoader();
            navigation.triggerNavigationFailure(error);
            throw error;
        });
    },

    /**
     * Whether or not the loader at the top is enabled to display on slow requests
     */
    loaderEnabled: true,

    //how long to delay during a slow request before showing the loader (in milliseconds)
    _loaderDelay: 300,

    /**
     * Sets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * Set to 0 if you want it to always show
     *
     * @param delay_in_ms
     * @returns {navigation}
     */
    setLoaderDelay: function(delay_in_ms){
        if( typeof delay_in_ms !== "number" ) throw `${delay_in_ms} is not an integer`;
        this._loaderDelay = delay_in_ms;
        return this;
    },

    /**
     * Gets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * @returns {number}
     */
    getLoaderDelay: function(){
        return this._loaderDelay;
    },

    /**
     * Classes for the loader
     * Defaults are for bootstrap (with the exception of page-navigation-loader)
     */
    _loaderClasses: 'progress page-navigation-loader',
    _loaderInnerDivClasses: 'progress-bar progress-bar-striped progress-bar-animated',

    /**
     * If enabled, adds a loader to the page and caches a reference to it, then returns that reference
     *
     * @returns Element
     */
    getLoaderEl: function(){
        if( !this.loaderEnabled ) return;
        if( navigation.navLoaderCached ) return navigation.navLoaderCached;

        //prepend the loader elements
        let div = document.createElement('div');
        div.classList = this._loaderClasses;
        let inner_div = document.createElement('div');
        inner_div.classList = this._loaderInnerDivClasses;
        div.append(inner_div);
        document.body.prepend(div);

        //get and cache a reference to it for future requests
        navigation.navLoaderCached = _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement('.page-navigation-loader');

        return navigation.navLoaderCached;
    },

    /**
     * Shows a loader at the top of the page if the request takes more than the delay set above to complete
     */
    showLoader: function(){
        if( !this.loaderEnabled ) return;

        navigation.loader_timeout = window.setTimeout(function(){
            navigation.getLoaderEl().classList.add('active');
        }, this.getLoaderDelay());

        return this;
    },

    /**
     * Hides the loader at the top of the page
     */
    hideLoader: function(){
        if( !this.loaderEnabled ) return;

        //if the loader still hasn't shown yet, prevent it because the request was very fast
        window.clearTimeout(navigation.loader_timeout);

        //hide the loader
        navigation.getLoaderEl().classList.remove('active');

        return this;
    },

    /**
     * Parses the incoming HTML to grab key components like meta tags and the inner content of the parent element
     *
     * If no parent element is provided, it will just return the provided html
     *
     * @param html
     * @param parent_el
     * @returns {{metas: HTMLCollectionOf<HTMLElementTagNameMap[string]>, route: (*|any|Element), links: HTMLCollectionOf<HTMLElementTagNameMap[string]>, html: string, title: string, body_classes: DOMTokenList}}
     */
    parseHTML(html, parent_el)
    {
        //default to null if not provided
        parent_el = typeof parent_el === 'undefined' ? null : parent_el;

        //must be a string or null
        if( typeof parent_el !== 'string' && parent_el !== null ) throw `Provided parent_el (${parent_el}) is not a string or null`;

        //parse the incoming dom
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        //get page title
        var title = doc.querySelector('title');
        title = title ? title.innerText : null;

        //get any meta tags
        var metas = doc.head.getElementsByTagName('meta');
        //get the canonical link
        var links = doc.querySelectorAll('link[rel="canonical"]');
        //get body classes
        var body_classes = doc.body.classList;

        //default to the incoming HTML
        var new_html = html;

        //if a parent element was provided, find it
        if( parent_el ){
            var sel = doc.querySelector(parent_el);
            //if couldn't find the element
            if( !sel ){
                throw `Could not find parent selector ${parent_el}`;
            }
            //grab the outerHTML
            new_html = sel.outerHTML;
        }

        //get the new page's route from the meta tag (if it exists)
        var route = navigation.getRouteFromMeta(doc);

        // Garbage collection, you don't need this anymore.
        parser = doc = null;

        return {
            title:title,
            route: route,
            metas:metas,
            links:links,
            body_classes:body_classes,
            html:new_html
        };
    },

    /**
     * Gets the current route from the meta tag, if it exists
     *
     * If you don't provide HTML, it'll grab it from the current DOM
     *
     * @param html
     * @returns {any | Element}
     */
    getRouteFromMeta: function(html){
        html = typeof html === 'undefined' ? document.head : html;
        var route = html.querySelector('[name="current_route"]');
        route = route ? route.content : null;
        return route;
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
     * @param incoming_el
     * @param replace_el
     * @param push_state
     */
    replacePageContent(html, url, incoming_el, replace_el, push_state)
    {
        push_state = typeof push_state === 'undefined' ? true : push_state;

        incoming_el = typeof incoming_el === 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;

        if( typeof url !== 'string' ) throw `Provided url (${url}) is not a string`;
        if( typeof incoming_el !== 'string' ) throw `Provided incoming_el (${incoming_el}) is not a string`;
        if( typeof replace_el !== 'string' ) throw `Provided replace_el (${replace_el}) is not a string`;

        //trigger nav complete event
        //get replace_el again because it was replaced
        navigation.triggerUnload(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el, this.getRouteFromMeta());

        //very slight 100ms delay to let the on unload handlers run first
        window.setTimeout(function(){
            var parsed = navigation.parseHTML(html, incoming_el);

            //if there is HTML to put on the page
            if( parsed.html.length ) {

                //remove all meta tags and replace from new page
                _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('meta');
                document.head.append(parsed.metas);

                //add the canonical link
                // - possibly other tags will need to be whitelisted in the future.
                // - the main concern is not putting JS/CSS into the current page that shouldn't be
                _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('[rel="canonical"]');
                Array.from(parsed.links).forEach(function(link){
                    document.head.append(link);
                });

                //add body classes
                document.body.classList = parsed.body_classes;

                //push the state to the browser's history
                push_state && history.pushState({url: url}, parsed.title, url);

                //update the tab/page title
                navigation.setTitle(parsed.title);

                //replace content on the page
                const new_content = _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].replaceElWithHTML(replace_el, parsed.html);

                //trigger nav complete event
                //get replace_el again because it was replaced
                navigation.triggerOnLoad(new_content, incoming_el, parsed.route);
            }
        }, 100);

        return this;
    },

    /**
     * Refreshes the current page using .load()
     *
     * @returns {navigation}
     */
    reload: function(callback){
        callback = typeof callback !== 'function' ? null : callback;
        navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), callback);
        return this;
    },

    /**
     * Performs a full refresh of the current URL
     *
     * @returns {navigation}
     */
    fullReload: function(){
        navigation.showLoader();
        window.location.reload();
    },

    /**
     * Sends the user to a new page without XHR
     *
     * @param url
     */
    redirect: function(url){
        navigation.showLoader();
        window.location.href = url;
    },

    /**
     * Sets the title of the page
     *
     * @param title
     * @returns {navigation}
     */
    setTitle: function(title){
        document.title = title;
        return this;
    },

    /**
     * When a new page loads, you probably want to kickoff some page-specific JS.
     *
     * The callback receives the event.
     * The event has a property called "detail" which will contain:
     *  1) The replace_el (the element who's content was swapped out)
     *  2) The route (you can define this in a meta tag called "current_route" which will be automatically grabbed and passed along)
     *  3) Any data you set using .setPassthroughData()
     *
     * @param callback
     * @returns {navigation}
     */
    onLoad: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.complete', callback);
        return this;
    },

    /**
     * When leaving a page you might need to destroy some plugins or something
     *
     * @param callback
     * @returns {navigation}
     */
    onUnload: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.started', callback);
        return this;
    },

    /**
     * When the new page fails to load, you should probably tell the user
     *
     * @param callback
     * @returns {navigation}
     */
    onNavigationFailure: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.failed', callback);
        return this;
    },

    /**
     * We're on a new page, tell the world.
     *
     * Also includes the route of the new page (if it exists in a meta tag) so that you can kick off JS specific to that page
     *
     * @param el
     * @param el_selector
     * @param route
     */
    triggerOnLoad: function(el, el_selector, route){
        route = typeof route !== 'undefined' ? route : navigation.getRouteFromMeta();
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.complete', {
            el:el,
            el_selector:el_selector,
            route:route,
            data:this.getPassThroughData()
        });

        return this;
    },

    /**
     * We're leaving the last page, tell the world.
     *
     * @param el
     */
    triggerUnload: function(el, el_selector, route){
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.started', {el:el, el_selector:el_selector, route:route});

        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     */
    triggerNavigationFailure: function(error){
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.failed', {error:error});

        return this;
    },

    /**
     * Attaches event handlers to track the browser's history buttons (back/forward)
     *
     * @todo: Investigate possible issue with chrome caching back button contents and not loading the entire page
     */
    initHistoryHandlers: function(){
        //forward button
        window.onpushstate = function(e) {
            console.log(e);
            navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function(e) {
            console.log(e);
            navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString(), null, null, null, false);
        };

        return this;
    },
};

/***/ }),

/***/ "./es/objects/abstract_object.js":
/*!***************************************!*\
  !*** ./es/objects/abstract_object.js ***!
  \***************************************/
/*! exports provided: abstract_object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abstract_object", function() { return abstract_object; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./es/utilities/index.js");


const abstract_object = {
    //keys this object contains (used to automatically populate it when you run populate(data);
    //overwrite this in each extending class!
    keys: [],

    /**
     * populates the user object with the provided data
     *
     * @param data
     */
    populate: function(data){
        const self = this;

        //validate the incoming data object and make sure it only contains these keys
        !_utilities__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(data, this.keys, false, true, true);

        //for each key that is set in the data object, set the value on this
        this.keys.forEach(function(key){
            if( typeof data[key] !== "undefined" ) self[_utilities__WEBPACK_IMPORTED_MODULE_0__["strings"].setter(key)](data[key]);
        });

        return this;
    }
};

/***/ }),

/***/ "./es/objects/index.js":
/*!*****************************!*\
  !*** ./es/objects/index.js ***!
  \*****************************/
/*! exports provided: request, site, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./es/objects/request/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site */ "./es/objects/site/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "site", function() { return _site__WEBPACK_IMPORTED_MODULE_1__["site"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./es/objects/user/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["user"]; });







/***/ }),

/***/ "./es/objects/request/index.js":
/*!*************************************!*\
  !*** ./es/objects/request/index.js ***!
  \*************************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
__webpack_require__(/*! url-search-params-polyfill */ "url-search-params-polyfill");

/**
 * Allows you to get details about the current request easily, including querystring variables
 *
 * @type {{getDomain: (function(): string), getDomainWithProtocol: (function(): string), query: URLSearchParams, isHttps: (function(): boolean), getURI: (function(): string), getFullURL: (function(): string), appendSlash: (function(): string)}}
 */
const request = {
    /**
     * Returns an object with methods for interacting with the query string variables
     *
     * @returns URLSearchParams
     */
    query: new URLSearchParams(window.location.search),

    /**
     * Returns true if the current request was made securely over SSL (https instead of http)
     *
     * @returns {boolean}
     */
    isHttps: function(){
        return window.location.protocol === 'https:';
    },

    /**
     * Returns the current domain
     *
     * Example: my-domain.com
     *
     * @returns {string}
     */
    getDomain: function(){
        return window.location.hostname || window.location.host;
    },

    /**
     * Returns the current protocol and domain
     *
     * Example: https://my-domain.com
     *
     * @returns {string}
     */
    getDomainWithProtocol: function(){
        return window.location.origin;
    },

    /**
     * Returns the current URI
     *
     * Example: /products
     *
     * @returns {string}
     */
    getURI: function(){
        return window.location.pathname;
    },

    /**
     * Returns the URI with query string
     *
     * Example: /products?id=1
     *
     * @returns {string}
     */
    getURIWithQueryString: function(){
        return window.location.pathname + window.location.search;
    },

    /**
     * Returns the full URL
     *
     * Example: https://my-domain.com/products?id=1
     *
     * @returns {string}
     */
    getFullURL: function(){
        return window.location.href;
    },

    /**
     * Appends a slash to a string if it doesn't already have it
     *
     * Example: https://my-domain.com becomes https://my-domain.com/
     * Example: /my-product becomes /my-product/
     *
     * @param url
     * @returns {string}
     */
    appendSlash: function(url){
        return url[url.length-1] !== '/' ? url+'/' : url;
    },
};

/***/ }),

/***/ "./es/objects/site/index.js":
/*!**********************************!*\
  !*** ./es/objects/site/index.js ***!
  \**********************************/
/*! exports provided: site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site", function() { return site; });
/* harmony import */ var _abstract_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract_object */ "./es/objects/abstract_object.js");
/* harmony import */ var _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/type_checks */ "./es/utilities/type_checks/index.js");



//create an object of default values
let site_defaults = {
    id: null,
    name:null,
    config:{},
};
//override defaults from $site (if defined)
if( typeof $site === "object" ) site_defaults = {...site_defaults, ...$site};

/**
 *
 * Provides you with easy access to information about the current website (for multi-tenant applications)
 *
 * @type {{setName: (function(*): site), getConfigItem: (function(*): null), getName: (function(): *), populate: (function(*): site), setConfigItem: (function(*, *): site), name: null, setId: (function(*): site), getId: (function(): *), id: null, config: (site_defaults.config|{}), getConfig: (function(): *), setConfig: (function(*): site)}}
 */
const site = {..._abstract_object__WEBPACK_IMPORTED_MODULE_0__["abstract_object"], ...{
    keys: ['id', 'name', 'config'],

    getId: function(){
        return this._id;
    },
    setId: function(id){
        this._id = id;
        return this;
    },

    //gets the website's name
    getName: function(){
        return this._name;
    },
    setName: function(name){
        this._name = name;
        return this;
    },

    //returns all config data
    getConfig: function(){
        return this._config;
    },
    //sets all config data using the provided object
    setConfig: function(config){
        //must be a data object, even if it's empty
        _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__["type_checks"].isDataObject(config, null, false, false, true);

        this._config = config;
        return this;
    },

    //returns an individual config value or null if it's not defined
    getConfigItem: function(key){
        return typeof this._config[key] === "undefined" ? null : this._config[key];
    },
    //adds or updates a value in the config object
    setConfigItem: function(key, val){
        this._config[key] = val;
        return this;
    }
}}.populate(site_defaults);

/***/ }),

/***/ "./es/objects/user/index.js":
/*!**********************************!*\
  !*** ./es/objects/user/index.js ***!
  \**********************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var _abstract_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract_object */ "./es/objects/abstract_object.js");
/* harmony import */ var _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/type_checks */ "./es/utilities/type_checks/index.js");



//create an object of default values
let user_defaults = {
    id: null,
    isGuest:false,
    isAdmin:false,
    username:null,
    fname:null,
    lname:null,
    email:null,
    phone:null,
    permissions:[],
    additionalData:{},
};
//override defaults from $user (if defined)
if( typeof $user === "object" ) user_defaults = {...user_defaults, ...$user};

/**
 *
 * Provides you with easy access to user information and allows you to perform permission checks
 *
 * @type {{getIsGuest: (function(): *), getPhone: (function(): *), getLname: (function(): *), getName: (function(): string), setIsGuest: (function(*): user), keys: string[], addPermission: (function(*=): user), getId: (function(): *), setAdditionalData: (function(*): user), setPermissions: (function(*): user), getUsername: (function(): *), setFname: (function(*): user), getFname: (function(): *), setId: (function(*): user), setUsername: (function(*): user), setLname: (function(*): user), getAdditionalData: (function(): *), getPermissions: (function(): *), setPhone: (function(*): user), removePermission: (function(*): user), getDataItem(*): null, setIsAdmin: (function(*): user), setDataItem(*, *): *, getIsAdmin: (function(): *), setEmail: (function(*): user), hasPermission: (function(*=): (*|boolean)), getEmail: (function(): *)}}
 */
const user = {..._abstract_object__WEBPACK_IMPORTED_MODULE_0__["abstract_object"], ...{
    //user object keys
    keys: ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData'],

    setId: function(id){
        this._id = id;
        return this;
    },
    getId: function(){
        return this._id;
    },

    setIsGuest: function(is_guest){
        this._isGuest = is_guest;
        return this;
    },
    getIsGuest: function(){
        return this._isGuest;
    },

    setIsAdmin: function(is_admin){
        this._isAdmin = is_admin;
        return this;
    },
    getIsAdmin: function(){
        return this._isAdmin;
    },

    setUsername: function(username){
        this._username = username;
        return this;
    },
    getUsername: function(){
        return this._username;
    },

    getFname: function(){
        return this._fname;
    },
    setFname: function(first_name){
        this._fname = first_name;
        return this;
    },

    getLname: function(){
        return this._lname;
    },
    setLname: function(last_name){
        this._lname = last_name;
        return this;
    },

    //quick way to get fname and lname
    getName: function(){
        return `${user.getFname()} ${user.getLname()}`;
    },

    getEmail: function(){
        return this._email;
    },
    setEmail: function(email){
        this._email = email;
        return this;
    },

    getPhone: function(){
        return this._phone;
    },
    setPhone: function(phone){
        this._phone = phone;
        return this;
    },

    //returns all permissions for this user
    getPermissions: function(){
        return this._permissions;
    },
    //sets all permissions for this user
    setPermissions: function(permissions){
        if( !Array.isArray(permissions) ) throw "setPermissions requires an array";

        this._permissions = permissions;
        return this;
    },
    //adds a single permission to this user
    addPermission: function(permission){
        this._permissions.push(permission);
        return this;
    },
    //Removes a single permission from this user
    removePermission: function(permission){
        this.setPermissions(this._permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    },
    //returns true if the user has the provided permission
    hasPermission: function(permission){
        return this.getPermissions().includes(permission);
    },

    //returns all additional data for this user
    getAdditionalData: function(){
        return this._additionalData;
    },
    //sets all additional data for this user
    setAdditionalData: function(additional_data){
        //must be a data object, even if it's empty
        _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__["type_checks"].isDataObject(additional_data, null, false, false, true);

        this._additionalData = additional_data;
        return this;
    },
    //returns a single additional data value for this user
    getDataItem(key){
        return typeof this._additionalData[key] === "undefined" ? null : this._additionalData[key];
    },
    //sets a single additional data value for this user
    setDataItem(key, val){
        this._additionalData[key] = val;
        return this;
    }
}}.populate(user_defaults); //immediately populate from user_defaults

/***/ }),

/***/ "./es/plugin_wrappers/index.js":
/*!*************************************!*\
  !*** ./es/plugin_wrappers/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./es/utilities/dom/index.js":
/*!***********************************!*\
  !*** ./es/utilities/dom/index.js ***!
  \***********************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/**
 * HTML DOM helpers
 *
 * @type {{getElements: (function(*=, *=): Array), getElement: dom.getElement, exists: (function(*=): number), multipleExist: (function(*=): number)}}
 */
const dom = {
    /**
     * Converts a provided string, jQuery dom object, etc into a single native DOM object
     *
     * @param el
     * @param error_on_none - throw an error if none exist
     * @param error_on_multiple - throw an error if more than 1 exists
     * @returns Element|HTMLDocument|null
     */
    getElement: function(el, error_on_none, error_on_multiple){
        el = this.getElements(el, error_on_none);

        if( el.length > 1 && error_on_multiple ) throw "Too many DOM elements found in getElement for "+JSON.stringify(el);

        return el[0];
    },

    /**
     * Converts a provided string, jQuery dom object, etc into an array of native DOM elements
     *
     * @param el (string, object, array, jQuery object, etc)
     * @param error_on_none - throw an error if no elements were found, default: false
     * @returns []
     */
    getElements: function(el, error_on_none){
        //default to false
        error_on_none = typeof error_on_none === "undefined" ? false : error_on_none;

        //default to empty
        let el_array = [];

        //if not provided or doesn't exist
        if( typeof el === "undefined" || !el ){
            //do nothing, default is empty array
        }
        //if it's an Element or HTMLDocument (a singular DOM element)
        else if( el instanceof Element || el instanceof HTMLDocument ){
            //add to the array
            el_array.push(el);
        }
        //if a string was provided
        else if (typeof el === 'string') {
            //convert the NodeList returned by querySelectorAll into an array
            el_array = document.querySelectorAll(el);
            el_array = el_array ? Array.from(el_array) : el_array;
        }
        //if a jquery object was provided
        else if( el instanceof jQuery ){
            //if it contains anything
            if( el.length ){
                //get all the elements in an array
                el_array = el.toArray();
            }
        }
        //otherwise, what the heck did you pass? Throw error...
        else {
            throw "Invalid value provided to getElements: "+JSON.stringify(el);
        }

        if( !el_array.length && error_on_none ){
            throw "Failed to get array of DOM elements for "+JSON.stringify(el);
        }

        //hopefully it's safe to assume the originally provided el is a singular native DOM object
        return el_array;
    },

    /**
     * Quick method for removing elements from the DOM
     *
     * @param el
     * @returns {dom}
     */
    remove: function(el){
        let el_array = this.getElements(el);
        el_array.forEach(function(el){
            el.parentNode.removeChild(el);
        });
        return this;
    },

    /**
     * Replaces a dom element with HTML
     *
     * uses .getElement() so el can be just about anything
     *
     * @param el
     * @param html
     * @returns {ChildNode}
     */
    replaceElWithHTML: function(el, html){
        if( typeof html !== 'string' ) throw `${html} is not a string`;

        el = this.getElement(el);

        //create element from HTML
        let new_el = (new DOMParser()).parseFromString(html, "text/html");

        //insert the new element before the current
        new_el = el.parentNode.insertBefore(new_el.documentElement.querySelector('body').childNodes[0], el);

        //remove original element
        el.remove();

        //return the new one
        return new_el;
    },

    /**
     * Returns true if the provided element exists
     *
     * Pass anything you want, it uses getElements
     *
     * @param el
     * @returns {number}
     */
    exists: function(el){
        return this.getElements(el).length;
    },

    /**
     * Returns true if there are multiple instances of the provided element
     *
     * Pass anything you want, it uses getElements
     *
     * @param el
     * @returns {boolean}
     */
    multipleExist: function(el){
        return this.getElements(el).length > 1;
    },
};


/***/ }),

/***/ "./es/utilities/events/index.js":
/*!**************************************!*\
  !*** ./es/utilities/events/index.js ***!
  \**************************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./es/utilities/dom/index.js");


/**
 * Shorthand/consistent event listener management
 *
 * @type {{onClick: (function(*=, *=): (*|Array|el)), onChange: (function(*=, *=): (*|*|*[])), offChange: (function(*=, *=): (*|*|*[])), offEventPreventDefault: events.offEventPreventDefault, offClick(*=, *=): (Array|el), onSubmit: (function(*=, *=): (*|Array|el)), offSubmit: (function(*=, *=): (*|Array|el)), onEventPreventDefault: events.onEventPreventDefault, trigger: events.trigger, off: events.off, on: events.on}}
 */
const events = {

    /**
     * Shorthand on-click handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onClick: function(el, handler){
        return this.onEventPreventDefault(el, 'click', handler);
    },

    /**
     * Removes an on-click handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offClick(el, handler){
        return this.offEventPreventDefault(el, 'click', handler);
    },

    /**
     * Shorthand on-submit handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onSubmit: function(el, handler){
        return this.onEventPreventDefault(el, 'submit', handler);
    },

    /**
     * Removes an on-submit handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offSubmit: function(el, handler){
        return this.offEventPreventDefault(el, 'submit', handler);
    },

    /**
     * Mainly here for consistency
     *
     * Shorthand on-change handler
     * DOES NOT preventDefault because that's usually not desired
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onChange: function(el, handler){
        return this.on(el, 'change', handler);
    },

    /**
     * Removes an on-change handler
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offChange: function(el, handler){
        return this.off(el, 'change', handler);
    },

    /**
     * Attaches an event handler and prevents the default events from occurring
     *  (like forms submitting or a link bringing you to another page)
     *
     * @param el
     * @param event
     * @param handler
     * @returns array|el
     */
    onEventPreventDefault: function(el, event, handler) {
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        el_array.forEach(function(el){
            el.addEventListener(event, function(e){
                e.preventDefault();
                handler.call(this, [e]);
                return false;
            });
        });


        return el_array;
    },

    /**
     * Removes an event handler with preventDefault
     *
     * @param el
     * @param event
     * @param handler
     * @returns array|el
     */
    offEventPreventDefault: function(el, event, handler){

        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        el_array.forEach(function(el) {
            el.removeEventListener(event, function (e) {
                e.preventDefault();
                handler.call(this, [e]);
                return false;
            });
        });

        return el_array;
    },

    /**
     * Adds an event listener
     *
     * @param el
     * @param event
     * @param handler
     * @returns {*|*[]|*}
     */
    on: function(el, event, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.addEventListener(event, handler);
        });

        return el_array;
    },

    /**
     * Removes an event listener
     *
     * @param el
     * @param event
     * @param handler
     * @returns {*|*[]|*}
     */
    off: function(el, event, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.removeEventListener(event, handler);
        });

        return el_array;
    },

    /**
     * Trigger an event on an element/elements
     *
     * @param el
     * @param event
     * @param event_options
     * @returns {*|*[]|*}
     */
    trigger: function(el, event, event_options){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        event_options = typeof event_options === "undefined" ? null : event_options;

        //create the event
        event = new CustomEvent(event, { detail: event_options });

        el_array.forEach(function(el){
            el.dispatchEvent(event);
        });

        return el_array;
    },
};

/***/ }),

/***/ "./es/utilities/index.js":
/*!*******************************!*\
  !*** ./es/utilities/index.js ***!
  \*******************************/
/*! exports provided: type_checks, strings, dom, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type_checks */ "./es/utilities/type_checks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type_checks", function() { return _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ "./es/utilities/strings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _strings__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./es/utilities/dom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return _dom__WEBPACK_IMPORTED_MODULE_2__["dom"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./es/utilities/events/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_3__["events"]; });








/***/ }),

/***/ "./es/utilities/strings/index.js":
/*!***************************************!*\
  !*** ./es/utilities/strings/index.js ***!
  \***************************************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * Methods for performing common string manipulations
 *
 * @type {{getter: (function(*=): string), ucfirst: (function(*=): (*|string)), setter: (function(*=): string)}}
 */
const strings = {
    /**
     * Creates a getter method name from a string
     *
     * Example: strings.getter('name') returns 'getName'
     *
     * @param string
     * @returns {string}
     */
    getter: function(string){
        return 'get'+this.ucfirst(string);
    },

    /**
     * Creates a setter method name from a string
     *
     * Example: strings.setter('name') returns 'setName'
     *
     * @param string
     * @returns {string}
     */
    setter: function(string){
        return 'set'+this.ucfirst(string);
    },

    /**
     * Adds ucfirst() functionality to JS (like PHP)
     *
     * @param string
     * @returns {*|string}
     */
    ucfirst: function(string){
        return string && string[0].toUpperCase()+string.slice(1);
    }
};

/***/ }),

/***/ "./es/utilities/type_checks/index.js":
/*!*******************************************!*\
  !*** ./es/utilities/type_checks/index.js ***!
  \*******************************************/
/*! exports provided: type_checks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type_checks", function() { return type_checks; });
/**
 * Methods for checking data types with more specificity
 *
 * @type {{isDataObject: type_checks.isDataObject}}
 */
const type_checks = {
    /**
     * Determines if a provided value is an object
     *
     * Optionally must contain at least 1 provided key in keys array
     * Optionally must have all keys
     * Optionally cannot have any keys that aren't in the keys array
     * Optionally throws an error if any check fails
     *
     * @param value
     * @param keys - default: don't verify keys
     * @param require_all_keys - default: false
     * @param block_other_keys - default false
     * @param throw_error - default: false
     * @returns {boolean}
     */
    isDataObject: function(value, keys, require_all_keys, block_other_keys, throw_error){
        //default for throw_error is false
        throw_error = typeof throw_error !== "undefined" ? throw_error : false;

        //default for require_all_keys is false
        require_all_keys = typeof require_all_keys !== "undefined" ? require_all_keys : false;

        //for error messages
        var stringified_val = JSON.stringify(value);

        //default error_msg
        const error_msg = `${stringified_val} is not an object`;

        //if not provided
        if( typeof value === "undefined" ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //determine if it is an object
        const is_object = typeof value === "object";

        //if not an object, null, or an array
        if( !is_object || value === null || Array.isArray(value) ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //if we need to verify the keys this object contains
        if( Array.isArray(keys) ) {
            let found_key = false;
            let missing_keys = [];

            const value_keys = Object.keys(value);

            keys.forEach(function(key) {
                //if the key was found, we found atleast one
                if( value_keys.includes(key) ){
                    found_key = true;
                }
                //if it's not found, we can't say all keys exist in this object
                else{
                    missing_keys.push(key);
                }
            });

            //if not one of the keys were found
            if( !found_key ){
                if( throw_error ) throw `${stringified_val} does not contain at least one of the following: `+keys.join(', ');
                return false;
            }

            //if we didn't find all the keys
            if( require_all_keys && missing_keys.length )
            {
                if( throw_error ) throw `${stringified_val} is missing data: `+missing_keys.join(', ');
                return false;
            }

            //if we don't allow any keys NOT in the keys array
            if( block_other_keys ){
                let unrecognized_keys = [];

                value_keys.forEach(function(key) {
                    if( !keys.includes(key) ){
                        unrecognized_keys.push(key);
                    }
                });

                if( unrecognized_keys.length ){
                    if( throw_error ) throw `${stringified_val} contains invalid data: `+unrecognized_keys.join(', ');
                    return false;
                }
            }
        }

        //all checks passed! congrats, it's an object
        return true;
    }
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/jpack.js":
/*!**********************!*\
  !*** ./src/jpack.js ***!
  \**********************/
/*! exports provided: jpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jpack", function() { return jpack; });
/* harmony import */ var _es_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../es/components */ "./es/components/index.js");
/* harmony import */ var _es_objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../es/objects */ "./es/objects/index.js");
/* harmony import */ var _es_plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../es/plugin_wrappers */ "./es/plugin_wrappers/index.js");
/* harmony import */ var _es_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../es/utilities */ "./es/utilities/index.js");





/**
 * All jpack components are flattened out of their namespaces and set on window
 *
 * This means instead of calling jpack.objects.user.getId(), you can just call user.getId()
 *
 * Or let's say you pass a namespace like "jp", then you can call: jp.user.getId()
 *
 * Not recommended (atleast not without a namespace)
 *
 */
const goGlobal = function(namespace){
    namespace = typeof namespace === 'string' ? namespace+'.' : null;

    //loop through components, objects, plugin_wrappers, and utilities
    [_es_components__WEBPACK_IMPORTED_MODULE_0__,_es_objects__WEBPACK_IMPORTED_MODULE_1__,_es_plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__,_es_utilities__WEBPACK_IMPORTED_MODULE_3__].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //example: objects.user becomes window.user
                //usage after running this: user.getId()
                window[namespace+property] = object[property];
            }
        }
    });
};

const jpack = {components: _es_components__WEBPACK_IMPORTED_MODULE_0__, objects: _es_objects__WEBPACK_IMPORTED_MODULE_1__, plugin_wrappers: _es_plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__, utilities: _es_utilities__WEBPACK_IMPORTED_MODULE_3__, goGlobal: goGlobal};

//set jpack globally so that it can be used anywhere
global.jpack = jpack;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "url-search-params-polyfill":
/*!*********************************************!*\
  !*** external "url-search-params-polyfill" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = url-search-params-polyfill;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9hYnN0cmFjdF9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9vYmplY3RzL3JlcXVlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9zaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL29iamVjdHMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9wbHVnaW5fd3JhcHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXRpbGl0aWVzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3V0aWxpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanBhY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCB7bmF2aWdhdGlvbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9yZXF1ZXN0XCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIjtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIHNpbXVsYXRlIGEgcGFnZSBjaGFuZ2UgYnkgdXNpbmcgYW4gWEhSIHJlcXVlc3QgdG8gZ3JhYiBjb250ZW50IGFuZCByZXBsYWNlIGl0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIGJyb3dzZXIncyBoaXN0b3J5LCBzd2FwcyBvdXQgbWV0YSB0YWdzLCB1cGRhdGVzIHRoZSB0aXRsZSwgYW5kIG1vcmVcbiAqXG4gKiBVc2Ugb25Mb2FkIGFuZCBvblVubG9hZCBob29rcyB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBmb3IgdGhpbmdzIGxpa2UgdHJpZ2dlcmluZyBhIGdvb2dsZSBhbmFseXRpY3MgcGFnZSB2aWV3XG4gKiAgb3Igc2Nyb2xsaW5nIHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gKlxuICogQHR5cGUge3t0cmlnZ2VyT25Mb2FkOiAoZnVuY3Rpb24oKj0sICo9KTogbmF2aWdhdGlvbiksIHNldFBhc3N0aHJvdWdoRGF0YTogKGZ1bmN0aW9uKCopOiBuYXZpZ2F0aW9uKSwgX2luY29taW5nRWxlbWVudFNlbGVjdG9yOiBzdHJpbmcsIHNldExvYWRlckRlbGF5OiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgZnVsbFJlbG9hZDogbmF2aWdhdGlvbi5mdWxsUmVsb2FkLCB0cmlnZ2VyVW5sb2FkOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgcmVsb2FkOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgbG9hZDogbmF2aWdhdGlvbi5sb2FkLCBjbGVhclBhc3N0aHJvdWdoRGF0YTogKGZ1bmN0aW9uKCk6IG5hdmlnYXRpb24pLCByZXBsYWNlUGFnZUNvbnRlbnQoKj0sICo9LCAqPSwgKj0sICo9KTogKiwgaGlkZUxvYWRlcjogKGZ1bmN0aW9uKCk6IG5hdmlnYXRpb24pLCBsb2FkZXJFbmFibGVkOiBib29sZWFuLCBzaG93TG9hZGVyOiAoZnVuY3Rpb24oKTogbmF2aWdhdGlvbiksIHNldFJlcGxhY2VFbGVtZW50OiBuYXZpZ2F0aW9uLnNldFJlcGxhY2VFbGVtZW50LCBfbG9hZGVyRGVsYXk6IG51bWJlciwgZ2V0UmVwbGFjZUVsZW1lbnQ6IChmdW5jdGlvbigpOiBzdHJpbmcpLCByZWRpcmVjdDogbmF2aWdhdGlvbi5yZWRpcmVjdCwgZ2V0TG9hZGVyRGVsYXk6IChmdW5jdGlvbigpOiBudW1iZXIpLCBvblVubG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGluaXRIaXN0b3J5SGFuZGxlcnM6IChmdW5jdGlvbigpOiBuYXZpZ2F0aW9uKSwgX3Bhc3N0aHJvdWdoRGF0YTogbnVsbCwgc2V0SW5jb21pbmdFbGVtZW50OiBuYXZpZ2F0aW9uLnNldEluY29taW5nRWxlbWVudCwgcGFyc2VIVE1MKCo9LCAqPSk6IHttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXAsIHN0cmluZ1tdPiwgcm91dGU6ICgqfGFueXxFbGVtZW50KSwgbGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwLCBzdHJpbmdbXT4sIGh0bWw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgYm9keV9jbGFzc2VzOiBET01Ub2tlbkxpc3R9LCBzZXRUaXRsZTogKGZ1bmN0aW9uKCopOiBuYXZpZ2F0aW9uKSwgZ2V0UGFzc1Rocm91Z2hEYXRhOiAoZnVuY3Rpb24oKik6IG51bGwpLCBvbk5hdmlnYXRpb25GYWlsdXJlOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I6IHN0cmluZywgZ2V0Um91dGVGcm9tTWV0YTogKGZ1bmN0aW9uKCo9KTogKGFueSB8IEVsZW1lbnQpKSwgZ2V0TG9hZGVyRWw6IG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwsIG9uTG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIHRyaWdnZXJOYXZpZ2F0aW9uRmFpbHVyZTogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGdldEluY29taW5nRWxlbWVudDogKGZ1bmN0aW9uKCk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBvbmxvYWQgY2FsbGJhY2sgYWZ0ZXIgbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqL1xuICAgIF9wYXNzdGhyb3VnaERhdGE6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZVxuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbkxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRQYXNzdGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpXG4gICAge1xuICAgICAgICB0aGlzLl9wYXNzdGhyb3VnaERhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGRhdGEgcHJvdmlkZWQgZm9yIHRoZSBuZXh0IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyUGFzc3Rocm91Z2hEYXRhOiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB0aGlzLnNldFBhc3N0aHJvdWdoRGF0YShudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW55IGRhdGEgdGhhdCBoYXMgYmVlbiBzZXQgZm9yIHBhc3NpbmcgdG8gc3Vic2VxdWVudCBwYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXNzVGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3Rocm91Z2hEYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKi9cbiAgICBfaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbihzZWxlY3Rvcl9zdHJpbmcpe1xuICAgICAgICBpZiggdHlwZW9mIHNlbGVjdG9yX3N0cmluZyAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKi9cbiAgICBfcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRSZXBsYWNlRWxlbWVudDogZnVuY3Rpb24oc2VsZWN0b3Jfc3RyaW5nKXtcbiAgICAgICAgaWYoIHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RvcnMgc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHcmFicyBIVE1MIGZyb20gYSBVUkwgYW5kIHJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogMSkgU2hvd3MgYSBsb2FkZXIgKGlmIGVuYWJsZWQpXG4gICAgICogMikgUmVxdWVzdHMgY29udGVudCBmcm9tIHRoZSBwcm92aWRlZCBVUkxcbiAgICAgKiAzKSBSZXBsYWNlcyBpdCBvbiB0aGUgcGFnZSAoYW5kIGFsbCB0aGUgbWFnaWMgcmVwbGFjZVBhZ2VDb250ZW50IGRvZXMsIHNlZSBjb21tZW50cyBvbiB0aGF0IG1ldGhvZCBiZWxvdylcbiAgICAgKiA0KSBJZiB0aGVyZSdzIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGl0J2xsIGJlIHJ1biBhZnRlcndhcmRzIChpdCByZWNlaXZlcyB0aGUgbmV3bHkgcmVwbGFjZWQgZWxlbWVudCBhcyBhIHBhcmFtKVxuICAgICAqXG4gICAgICogT24gZXJyb3IsIGl0IHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBmYWlsdXJlIGFuZCBwcm92aWRlcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbih1cmwsIGNhbGxiYWNrLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCBVUkwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiggdHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIHJlcGxhY2VfZWwgKCR7cmVwbGFjZV9lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnJlcGxhY2VQYWdlQ29udGVudChyZXNwb25zZS5kYXRhLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKTtcblxuICAgICAgICAgICAgLy9pZiBhIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgcnVuIGl0IGFuZCBwcm92aWRlIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vd2FpdCBmb3IgdGhlIG9udW5sb2FkIGNhbGxiYWNrcyB0byBydW4gYW5kIHRoZSBuZXcgY29udGVudCB0byBiZSBwdXQgb24gdGhlIHBhZ2UgZmlyc3RcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgaW5jb21pbmdfZWwsIG5hdmlnYXRpb24uZ2V0UGFzc1Rocm91Z2hEYXRhKCkpO1xuICAgICAgICAgICAgICAgIH0sIDEwNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmUoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbG9hZGVyIGF0IHRoZSB0b3AgaXMgZW5hYmxlZCB0byBkaXNwbGF5IG9uIHNsb3cgcmVxdWVzdHNcbiAgICAgKi9cbiAgICBsb2FkZXJFbmFibGVkOiB0cnVlLFxuXG4gICAgLy9ob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIF9sb2FkZXJEZWxheTogMzAwLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogU2V0IHRvIDAgaWYgeW91IHdhbnQgaXQgdG8gYWx3YXlzIHNob3dcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxheV9pbl9tc1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldExvYWRlckRlbGF5OiBmdW5jdGlvbihkZWxheV9pbl9tcyl7XG4gICAgICAgIGlmKCB0eXBlb2YgZGVsYXlfaW5fbXMgIT09IFwibnVtYmVyXCIgKSB0aHJvdyBgJHtkZWxheV9pbl9tc30gaXMgbm90IGFuIGludGVnZXJgO1xuICAgICAgICB0aGlzLl9sb2FkZXJEZWxheSA9IGRlbGF5X2luX21zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRMb2FkZXJEZWxheTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlckRlbGF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGFzc2VzIGZvciB0aGUgbG9hZGVyXG4gICAgICogRGVmYXVsdHMgYXJlIGZvciBib290c3RyYXAgKHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBwYWdlLW5hdmlnYXRpb24tbG9hZGVyKVxuICAgICAqL1xuICAgIF9sb2FkZXJDbGFzc2VzOiAncHJvZ3Jlc3MgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcicsXG4gICAgX2xvYWRlcklubmVyRGl2Q2xhc3NlczogJ3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnLFxuXG4gICAgLyoqXG4gICAgICogSWYgZW5hYmxlZCwgYWRkcyBhIGxvYWRlciB0byB0aGUgcGFnZSBhbmQgY2FjaGVzIGEgcmVmZXJlbmNlIHRvIGl0LCB0aGVuIHJldHVybnMgdGhhdCByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXRMb2FkZXJFbDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG4gICAgICAgIGlmKCBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZCApIHJldHVybiBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZDtcblxuICAgICAgICAvL3ByZXBlbmQgdGhlIGxvYWRlciBlbGVtZW50c1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSB0aGlzLl9sb2FkZXJDbGFzc2VzO1xuICAgICAgICBsZXQgaW5uZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyX2Rpdi5jbGFzc0xpc3QgPSB0aGlzLl9sb2FkZXJJbm5lckRpdkNsYXNzZXM7XG4gICAgICAgIGRpdi5hcHBlbmQoaW5uZXJfZGl2KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdik7XG5cbiAgICAgICAgLy9nZXQgYW5kIGNhY2hlIGEgcmVmZXJlbmNlIHRvIGl0IGZvciBmdXR1cmUgcmVxdWVzdHNcbiAgICAgICAgbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQgPSBkb20uZ2V0RWxlbWVudCgnLnBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInKTtcblxuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgaWYgdGhlIHJlcXVlc3QgdGFrZXMgbW9yZSB0aGFuIHRoZSBkZWxheSBzZXQgYWJvdmUgdG8gY29tcGxldGVcbiAgICAgKi9cbiAgICBzaG93TG9hZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiggIXRoaXMubG9hZGVyRW5hYmxlZCApIHJldHVybjtcblxuICAgICAgICBuYXZpZ2F0aW9uLmxvYWRlcl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgdGhpcy5nZXRMb2FkZXJEZWxheSgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gICAgICovXG4gICAgaGlkZUxvYWRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG5cbiAgICAgICAgLy9pZiB0aGUgbG9hZGVyIHN0aWxsIGhhc24ndCBzaG93biB5ZXQsIHByZXZlbnQgaXQgYmVjYXVzZSB0aGUgcmVxdWVzdCB3YXMgdmVyeSBmYXN0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCk7XG5cbiAgICAgICAgLy9oaWRlIHRoZSBsb2FkZXJcbiAgICAgICAgbmF2aWdhdGlvbi5nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50cyBsaWtlIG1ldGEgdGFncyBhbmQgdGhlIGlubmVyIGNvbnRlbnQgb2YgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBJZiBubyBwYXJlbnQgZWxlbWVudCBpcyBwcm92aWRlZCwgaXQgd2lsbCBqdXN0IHJldHVybiB0aGUgcHJvdmlkZWQgaHRtbFxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gcGFyZW50X2VsXG4gICAgICogQHJldHVybnMge3ttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIHJvdXRlOiAoKnxhbnl8RWxlbWVudCksIGxpbmtzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtzdHJpbmddPiwgaHRtbDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICovXG4gICAgcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbClcbiAgICB7XG4gICAgICAgIC8vZGVmYXVsdCB0byBudWxsIGlmIG5vdCBwcm92aWRlZFxuICAgICAgICBwYXJlbnRfZWwgPSB0eXBlb2YgcGFyZW50X2VsID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBwYXJlbnRfZWw7XG5cbiAgICAgICAgLy9tdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxcbiAgICAgICAgaWYoIHR5cGVvZiBwYXJlbnRfZWwgIT09ICdzdHJpbmcnICYmIHBhcmVudF9lbCAhPT0gbnVsbCApIHRocm93IGBQcm92aWRlZCBwYXJlbnRfZWwgKCR7cGFyZW50X2VsfSkgaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuXG4gICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIGRvbVxuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2dldCBwYWdlIHRpdGxlXG4gICAgICAgIHZhciB0aXRsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuICAgICAgICB0aXRsZSA9IHRpdGxlID8gdGl0bGUuaW5uZXJUZXh0IDogbnVsbDtcblxuICAgICAgICAvL2dldCBhbnkgbWV0YSB0YWdzXG4gICAgICAgIHZhciBtZXRhcyA9IGRvYy5oZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgICAgIC8vZ2V0IHRoZSBjYW5vbmljYWwgbGlua1xuICAgICAgICB2YXIgbGlua3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJjYW5vbmljYWxcIl0nKTtcbiAgICAgICAgLy9nZXQgYm9keSBjbGFzc2VzXG4gICAgICAgIHZhciBib2R5X2NsYXNzZXMgPSBkb2MuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgIHZhciBuZXdfaHRtbCA9IGh0bWw7XG5cbiAgICAgICAgLy9pZiBhIHBhcmVudCBlbGVtZW50IHdhcyBwcm92aWRlZCwgZmluZCBpdFxuICAgICAgICBpZiggcGFyZW50X2VsICl7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50X2VsKTtcbiAgICAgICAgICAgIC8vaWYgY291bGRuJ3QgZmluZCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgaWYoICFzZWwgKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGFyZW50IHNlbGVjdG9yICR7cGFyZW50X2VsfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2dyYWIgdGhlIG91dGVySFRNTFxuICAgICAgICAgICAgbmV3X2h0bWwgPSBzZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGhlIG5ldyBwYWdlJ3Mgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgdmFyIHJvdXRlID0gbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKGRvYyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uLCB5b3UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmUuXG4gICAgICAgIHBhcnNlciA9IGRvYyA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOnRpdGxlLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgbWV0YXM6bWV0YXMsXG4gICAgICAgICAgICBsaW5rczpsaW5rcyxcbiAgICAgICAgICAgIGJvZHlfY2xhc3Nlczpib2R5X2NsYXNzZXMsXG4gICAgICAgICAgICBodG1sOm5ld19odG1sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcsIGlmIGl0IGV4aXN0c1xuICAgICAqXG4gICAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgSFRNTCwgaXQnbGwgZ3JhYiBpdCBmcm9tIHRoZSBjdXJyZW50IERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcmV0dXJucyB7YW55IHwgRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRSb3V0ZUZyb21NZXRhOiBmdW5jdGlvbihodG1sKXtcbiAgICAgICAgaHRtbCA9IHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmhlYWQgOiBodG1sO1xuICAgICAgICB2YXIgcm91dGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY3VycmVudF9yb3V0ZVwiXScpO1xuICAgICAgICByb3V0ZSA9IHJvdXRlID8gcm91dGUuY29udGVudCA6IG51bGw7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpdGggbmV3IEhUTUxcbiAgICAgKlxuICAgICAqIDEpIFRyaWdnZXJzIHVubG9hZCgpXG4gICAgICogMikgV2FpdHMgMTAwbXNcbiAgICAgKiAzKSBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50c1xuICAgICAqIDQpIFJlcGxhY2VzIGFsbCBtZXRhIHRhZ3MgKGltcG9ydGFudCBmb3Igc29jaWFsIG1lZGlhIHNoYXJpbmcgYW1vbmcgb3RoZXIgdGhpbmdzKVxuICAgICAqIDUpIFJlcGxhY2VzIHRoZSBjYW5vbmljYWwgdGFnXG4gICAgICogNikgUmVwbGFjZXMgYW55IGNsYXNzZXMgb24gdGhlIGJvZHkgc2luY2UgdGhleSBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gaW5kaWNhdGUgd2hpY2ggcGFnZSB5b3UncmUgb25cbiAgICAgKiA3KSBQdXNoZXMgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICogOCkgU2V0cyB0aGUgcGFnZSB0aXRsZVxuICAgICAqIDkpIFJlcGxhY2VzIGNvbnRlbnQgaW4gdGhlIERPTVxuICAgICAqIDEwKSBUcmlnZ2VycyBvbmxvYWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqL1xuICAgIHJlcGxhY2VQYWdlQ29udGVudChodG1sLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKVxuICAgIHtcbiAgICAgICAgcHVzaF9zdGF0ZSA9IHR5cGVvZiBwdXNoX3N0YXRlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBwdXNoX3N0YXRlO1xuXG4gICAgICAgIGluY29taW5nX2VsID0gdHlwZW9mIGluY29taW5nX2VsID09PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCB1cmwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiggdHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIHJlcGxhY2VfZWwgKCR7cmVwbGFjZV9lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAvL2dldCByZXBsYWNlX2VsIGFnYWluIGJlY2F1c2UgaXQgd2FzIHJlcGxhY2VkXG4gICAgICAgIG5hdmlnYXRpb24udHJpZ2dlclVubG9hZChkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgcmVwbGFjZV9lbCwgdGhpcy5nZXRSb3V0ZUZyb21NZXRhKCkpO1xuXG4gICAgICAgIC8vdmVyeSBzbGlnaHQgMTAwbXMgZGVsYXkgdG8gbGV0IHRoZSBvbiB1bmxvYWQgaGFuZGxlcnMgcnVuIGZpcnN0XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoaHRtbCwgaW5jb21pbmdfZWwpO1xuXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzIEhUTUwgdG8gcHV0IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICBpZiggcGFyc2VkLmh0bWwubGVuZ3RoICkge1xuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG1ldGEgdGFncyBhbmQgcmVwbGFjZSBmcm9tIG5ldyBwYWdlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnbWV0YScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHBhcnNlZC5tZXRhcyk7XG5cbiAgICAgICAgICAgICAgICAvL2FkZCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgICAgICAgICAvLyAtIHBvc3NpYmx5IG90aGVyIHRhZ3Mgd2lsbCBuZWVkIHRvIGJlIHdoaXRlbGlzdGVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAgICAgLy8gLSB0aGUgbWFpbiBjb25jZXJuIGlzIG5vdCBwdXR0aW5nIEpTL0NTUyBpbnRvIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCBzaG91bGRuJ3QgYmVcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlKCdbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJzZWQubGlua3MpLmZvckVhY2goZnVuY3Rpb24obGluayl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxpbmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgYm9keSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QgPSBwYXJzZWQuYm9keV9jbGFzc2VzO1xuXG4gICAgICAgICAgICAgICAgLy9wdXNoIHRoZSBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgICAgICAgICAgICBwdXNoX3N0YXRlICYmIGhpc3RvcnkucHVzaFN0YXRlKHt1cmw6IHVybH0sIHBhcnNlZC50aXRsZSwgdXJsKTtcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSB0YWIvcGFnZSB0aXRsZVxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uc2V0VGl0bGUocGFyc2VkLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBjb250ZW50IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X2NvbnRlbnQgPSBkb20ucmVwbGFjZUVsV2l0aEhUTUwocmVwbGFjZV9lbCwgcGFyc2VkLmh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgIC8vZ2V0IHJlcGxhY2VfZWwgYWdhaW4gYmVjYXVzZSBpdCB3YXMgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJPbkxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsLCBwYXJzZWQucm91dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldFRpdGxlOiBmdW5jdGlvbih0aXRsZSl7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IHBhZ2UgbG9hZHMsIHlvdSBwcm9iYWJseSB3YW50IHRvIGtpY2tvZmYgc29tZSBwYWdlLXNwZWNpZmljIEpTLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIHJlY2VpdmVzIHRoZSBldmVudC5cbiAgICAgKiBUaGUgZXZlbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIFwiZGV0YWlsXCIgd2hpY2ggd2lsbCBjb250YWluOlxuICAgICAqICAxKSBUaGUgcmVwbGFjZV9lbCAodGhlIGVsZW1lbnQgd2hvJ3MgY29udGVudCB3YXMgc3dhcHBlZCBvdXQpXG4gICAgICogIDIpIFRoZSByb3V0ZSAoeW91IGNhbiBkZWZpbmUgdGhpcyBpbiBhIG1ldGEgdGFnIGNhbGxlZCBcImN1cnJlbnRfcm91dGVcIiB3aGljaCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ3JhYmJlZCBhbmQgcGFzc2VkIGFsb25nKVxuICAgICAqICAzKSBBbnkgZGF0YSB5b3Ugc2V0IHVzaW5nIC5zZXRQYXNzdGhyb3VnaERhdGEoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmNvbXBsZXRlJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uVW5sb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBuZXcgcGFnZSBmYWlscyB0byBsb2FkLCB5b3Ugc2hvdWxkIHByb2JhYmx5IHRlbGwgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyT25Mb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJvdXRlKXtcbiAgICAgICAgcm91dGUgPSB0eXBlb2Ygcm91dGUgIT09ICd1bmRlZmluZWQnID8gcm91dGUgOiBuYXZpZ2F0aW9uLmdldFJvdXRlRnJvbU1ldGEoKTtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5jb21wbGV0ZScsIHtcbiAgICAgICAgICAgIGVsOmVsLFxuICAgICAgICAgICAgZWxfc2VsZWN0b3I6ZWxfc2VsZWN0b3IsXG4gICAgICAgICAgICByb3V0ZTpyb3V0ZSxcbiAgICAgICAgICAgIGRhdGE6dGhpcy5nZXRQYXNzVGhyb3VnaERhdGEoKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgbGVhdmluZyB0aGUgbGFzdCBwYWdlLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqL1xuICAgIHRyaWdnZXJVbmxvYWQ6IGZ1bmN0aW9uKGVsLCBlbF9zZWxlY3Rvciwgcm91dGUpe1xuICAgICAgICBldmVudHMudHJpZ2dlcignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCB7ZWw6ZWwsIGVsX3NlbGVjdG9yOmVsX3NlbGVjdG9yLCByb3V0ZTpyb3V0ZX0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIGZhaWxlZCwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKi9cbiAgICB0cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5mYWlsZWQnLCB7ZXJyb3I6ZXJyb3J9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gdHJhY2sgdGhlIGJyb3dzZXIncyBoaXN0b3J5IGJ1dHRvbnMgKGJhY2svZm9yd2FyZClcbiAgICAgKlxuICAgICAqIEB0b2RvOiBJbnZlc3RpZ2F0ZSBwb3NzaWJsZSBpc3N1ZSB3aXRoIGNocm9tZSBjYWNoaW5nIGJhY2sgYnV0dG9uIGNvbnRlbnRzIGFuZCBub3QgbG9hZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgICAgKi9cbiAgICBpbml0SGlzdG9yeUhhbmRsZXJzOiBmdW5jdGlvbigpe1xuICAgICAgICAvL2ZvcndhcmQgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnB1c2hzdGF0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vYmFjayBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrcywgc3RyaW5nc30gZnJvbSBcIi4uL3V0aWxpdGllc1wiO1xuXG5leHBvcnQgY29uc3QgYWJzdHJhY3Rfb2JqZWN0ID0ge1xuICAgIC8va2V5cyB0aGlzIG9iamVjdCBjb250YWlucyAodXNlZCB0byBhdXRvbWF0aWNhbGx5IHBvcHVsYXRlIGl0IHdoZW4geW91IHJ1biBwb3B1bGF0ZShkYXRhKTtcbiAgICAvL292ZXJ3cml0ZSB0aGlzIGluIGVhY2ggZXh0ZW5kaW5nIGNsYXNzIVxuICAgIGtleXM6IFtdLFxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGVzIHRoZSB1c2VyIG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHBvcHVsYXRlOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy92YWxpZGF0ZSB0aGUgaW5jb21pbmcgZGF0YSBvYmplY3QgYW5kIG1ha2Ugc3VyZSBpdCBvbmx5IGNvbnRhaW5zIHRoZXNlIGtleXNcbiAgICAgICAgIXR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChkYXRhLCB0aGlzLmtleXMsIGZhbHNlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL2ZvciBlYWNoIGtleSB0aGF0IGlzIHNldCBpbiB0aGUgZGF0YSBvYmplY3QsIHNldCB0aGUgdmFsdWUgb24gdGhpc1xuICAgICAgICB0aGlzLmtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhW2tleV0gIT09IFwidW5kZWZpbmVkXCIgKSBzZWxmW3N0cmluZ3Muc2V0dGVyKGtleSldKGRhdGFba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn07IiwiaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi9yZXF1ZXN0XCI7XG5pbXBvcnQge3NpdGV9IGZyb20gXCIuL3NpdGVcIjtcbmltcG9ydCB7dXNlcn0gZnJvbSBcIi4vdXNlclwiO1xuXG5leHBvcnQge3JlcXVlc3QsIHNpdGUsIHVzZXJ9OyIsInJlcXVpcmUoJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJyk7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBnZXQgZGV0YWlscyBhYm91dCB0aGUgY3VycmVudCByZXF1ZXN0IGVhc2lseSwgaW5jbHVkaW5nIHF1ZXJ5c3RyaW5nIHZhcmlhYmxlc1xuICpcbiAqIEB0eXBlIHt7Z2V0RG9tYWluOiAoZnVuY3Rpb24oKTogc3RyaW5nKSwgZ2V0RG9tYWluV2l0aFByb3RvY29sOiAoZnVuY3Rpb24oKTogc3RyaW5nKSwgcXVlcnk6IFVSTFNlYXJjaFBhcmFtcywgaXNIdHRwczogKGZ1bmN0aW9uKCk6IGJvb2xlYW4pLCBnZXRVUkk6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBnZXRGdWxsVVJMOiAoZnVuY3Rpb24oKTogc3RyaW5nKSwgYXBwZW5kU2xhc2g6IChmdW5jdGlvbigpOiBzdHJpbmcpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBxdWVyeSBzdHJpbmcgdmFyaWFibGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBVUkxTZWFyY2hQYXJhbXNcbiAgICAgKi9cbiAgICBxdWVyeTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCByZXF1ZXN0IHdhcyBtYWRlIHNlY3VyZWx5IG92ZXIgU1NMIChodHRwcyBpbnN0ZWFkIG9mIGh0dHApXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0h0dHBzOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IG15LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW5XaXRoUHJvdG9jb2w6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSSVxuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgVVJJIHdpdGggcXVlcnkgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUklXaXRoUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmdWxsIFVSTFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RnVsbFVSTDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc2xhc2ggdG8gYSBzdHJpbmcgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbSBiZWNvbWVzIGh0dHBzOi8vbXktZG9tYWluLmNvbS9cbiAgICAgKiBFeGFtcGxlOiAvbXktcHJvZHVjdCBiZWNvbWVzIC9teS1wcm9kdWN0L1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXBwZW5kU2xhc2g6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIHJldHVybiB1cmxbdXJsLmxlbmd0aC0xXSAhPT0gJy8nID8gdXJsKycvJyA6IHVybDtcbiAgICB9LFxufTsiLCJpbXBvcnQge2Fic3RyYWN0X29iamVjdH0gZnJvbSBcIi4uL2Fic3RyYWN0X29iamVjdFwiO1xuaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlX2NoZWNrc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmxldCBzaXRlX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG5hbWU6bnVsbCxcbiAgICBjb25maWc6e30sXG59O1xuLy9vdmVycmlkZSBkZWZhdWx0cyBmcm9tICRzaXRlIChpZiBkZWZpbmVkKVxuaWYoIHR5cGVvZiAkc2l0ZSA9PT0gXCJvYmplY3RcIiApIHNpdGVfZGVmYXVsdHMgPSB7Li4uc2l0ZV9kZWZhdWx0cywgLi4uJHNpdGV9O1xuXG4vKipcbiAqXG4gKiBQcm92aWRlcyB5b3Ugd2l0aCBlYXN5IGFjY2VzcyB0byBpbmZvcm1hdGlvbiBhYm91dCB0aGUgY3VycmVudCB3ZWJzaXRlIChmb3IgbXVsdGktdGVuYW50IGFwcGxpY2F0aW9ucylcbiAqXG4gKiBAdHlwZSB7e3NldE5hbWU6IChmdW5jdGlvbigqKTogc2l0ZSksIGdldENvbmZpZ0l0ZW06IChmdW5jdGlvbigqKTogbnVsbCksIGdldE5hbWU6IChmdW5jdGlvbigpOiAqKSwgcG9wdWxhdGU6IChmdW5jdGlvbigqKTogc2l0ZSksIHNldENvbmZpZ0l0ZW06IChmdW5jdGlvbigqLCAqKTogc2l0ZSksIG5hbWU6IG51bGwsIHNldElkOiAoZnVuY3Rpb24oKik6IHNpdGUpLCBnZXRJZDogKGZ1bmN0aW9uKCk6ICopLCBpZDogbnVsbCwgY29uZmlnOiAoc2l0ZV9kZWZhdWx0cy5jb25maWd8e30pLCBnZXRDb25maWc6IChmdW5jdGlvbigpOiAqKSwgc2V0Q29uZmlnOiAoZnVuY3Rpb24oKik6IHNpdGUpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHNpdGUgPSB7Li4uYWJzdHJhY3Rfb2JqZWN0LCAuLi57XG4gICAga2V5czogWydpZCcsICduYW1lJywgJ2NvbmZpZyddLFxuXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9LFxuICAgIHNldElkOiBmdW5jdGlvbihpZCl7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL2dldHMgdGhlIHdlYnNpdGUncyBuYW1lXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfSxcbiAgICBzZXROYW1lOiBmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYWxsIGNvbmZpZyBkYXRhXG4gICAgZ2V0Q29uZmlnOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBjb25maWcgZGF0YSB1c2luZyB0aGUgcHJvdmlkZWQgb2JqZWN0XG4gICAgc2V0Q29uZmlnOiBmdW5jdGlvbihjb25maWcpe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChjb25maWcsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFuIGluZGl2aWR1YWwgY29uZmlnIHZhbHVlIG9yIG51bGwgaWYgaXQncyBub3QgZGVmaW5lZFxuICAgIGdldENvbmZpZ0l0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fY29uZmlnW2tleV07XG4gICAgfSxcbiAgICAvL2FkZHMgb3IgdXBkYXRlcyBhIHZhbHVlIGluIHRoZSBjb25maWcgb2JqZWN0XG4gICAgc2V0Q29uZmlnSXRlbTogZnVuY3Rpb24oa2V5LCB2YWwpe1xuICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufX0ucG9wdWxhdGUoc2l0ZV9kZWZhdWx0cyk7IiwiaW1wb3J0IHthYnN0cmFjdF9vYmplY3R9IGZyb20gXCIuLi9hYnN0cmFjdF9vYmplY3RcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvdHlwZV9jaGVja3NcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5sZXQgdXNlcl9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBpc0d1ZXN0OmZhbHNlLFxuICAgIGlzQWRtaW46ZmFsc2UsXG4gICAgdXNlcm5hbWU6bnVsbCxcbiAgICBmbmFtZTpudWxsLFxuICAgIGxuYW1lOm51bGwsXG4gICAgZW1haWw6bnVsbCxcbiAgICBwaG9uZTpudWxsLFxuICAgIHBlcm1pc3Npb25zOltdLFxuICAgIGFkZGl0aW9uYWxEYXRhOnt9LFxufTtcbi8vb3ZlcnJpZGUgZGVmYXVsdHMgZnJvbSAkdXNlciAoaWYgZGVmaW5lZClcbmlmKCB0eXBlb2YgJHVzZXIgPT09IFwib2JqZWN0XCIgKSB1c2VyX2RlZmF1bHRzID0gey4uLnVzZXJfZGVmYXVsdHMsIC4uLiR1c2VyfTtcblxuLyoqXG4gKlxuICogUHJvdmlkZXMgeW91IHdpdGggZWFzeSBhY2Nlc3MgdG8gdXNlciBpbmZvcm1hdGlvbiBhbmQgYWxsb3dzIHlvdSB0byBwZXJmb3JtIHBlcm1pc3Npb24gY2hlY2tzXG4gKlxuICogQHR5cGUge3tnZXRJc0d1ZXN0OiAoZnVuY3Rpb24oKTogKiksIGdldFBob25lOiAoZnVuY3Rpb24oKTogKiksIGdldExuYW1lOiAoZnVuY3Rpb24oKTogKiksIGdldE5hbWU6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBzZXRJc0d1ZXN0OiAoZnVuY3Rpb24oKik6IHVzZXIpLCBrZXlzOiBzdHJpbmdbXSwgYWRkUGVybWlzc2lvbjogKGZ1bmN0aW9uKCo9KTogdXNlciksIGdldElkOiAoZnVuY3Rpb24oKTogKiksIHNldEFkZGl0aW9uYWxEYXRhOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXRQZXJtaXNzaW9uczogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0VXNlcm5hbWU6IChmdW5jdGlvbigpOiAqKSwgc2V0Rm5hbWU6IChmdW5jdGlvbigqKTogdXNlciksIGdldEZuYW1lOiAoZnVuY3Rpb24oKTogKiksIHNldElkOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXRVc2VybmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgc2V0TG5hbWU6IChmdW5jdGlvbigqKTogdXNlciksIGdldEFkZGl0aW9uYWxEYXRhOiAoZnVuY3Rpb24oKTogKiksIGdldFBlcm1pc3Npb25zOiAoZnVuY3Rpb24oKTogKiksIHNldFBob25lOiAoZnVuY3Rpb24oKik6IHVzZXIpLCByZW1vdmVQZXJtaXNzaW9uOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXREYXRhSXRlbSgqKTogbnVsbCwgc2V0SXNBZG1pbjogKGZ1bmN0aW9uKCopOiB1c2VyKSwgc2V0RGF0YUl0ZW0oKiwgKik6ICosIGdldElzQWRtaW46IChmdW5jdGlvbigpOiAqKSwgc2V0RW1haWw6IChmdW5jdGlvbigqKTogdXNlciksIGhhc1Blcm1pc3Npb246IChmdW5jdGlvbigqPSk6ICgqfGJvb2xlYW4pKSwgZ2V0RW1haWw6IChmdW5jdGlvbigpOiAqKX19XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VyID0gey4uLmFic3RyYWN0X29iamVjdCwgLi4ue1xuICAgIC8vdXNlciBvYmplY3Qga2V5c1xuICAgIGtleXM6IFsnaWQnLCAnaXNHdWVzdCcsICdpc0FkbWluJywgJ3VzZXJuYW1lJywgJ2ZuYW1lJywgJ2xuYW1lJywgJ2VtYWlsJywgJ3Bob25lJywgJ3Blcm1pc3Npb25zJywgJ2FkZGl0aW9uYWxEYXRhJ10sXG5cbiAgICBzZXRJZDogZnVuY3Rpb24oaWQpe1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElkOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfSxcblxuICAgIHNldElzR3Vlc3Q6IGZ1bmN0aW9uKGlzX2d1ZXN0KXtcbiAgICAgICAgdGhpcy5faXNHdWVzdCA9IGlzX2d1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElzR3Vlc3Q6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0d1ZXN0O1xuICAgIH0sXG5cbiAgICBzZXRJc0FkbWluOiBmdW5jdGlvbihpc19hZG1pbil7XG4gICAgICAgIHRoaXMuX2lzQWRtaW4gPSBpc19hZG1pbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRJc0FkbWluOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBZG1pbjtcbiAgICB9LFxuXG4gICAgc2V0VXNlcm5hbWU6IGZ1bmN0aW9uKHVzZXJuYW1lKXtcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRVc2VybmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICAgIH0sXG5cbiAgICBnZXRGbmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZuYW1lO1xuICAgIH0sXG4gICAgc2V0Rm5hbWU6IGZ1bmN0aW9uKGZpcnN0X25hbWUpe1xuICAgICAgICB0aGlzLl9mbmFtZSA9IGZpcnN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRMbmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xuYW1lO1xuICAgIH0sXG4gICAgc2V0TG5hbWU6IGZ1bmN0aW9uKGxhc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2xuYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy9xdWljayB3YXkgdG8gZ2V0IGZuYW1lIGFuZCBsbmFtZVxuICAgIGdldE5hbWU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBgJHt1c2VyLmdldEZuYW1lKCl9ICR7dXNlci5nZXRMbmFtZSgpfWA7XG4gICAgfSxcblxuICAgIGdldEVtYWlsOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gICAgfSxcbiAgICBzZXRFbWFpbDogZnVuY3Rpb24oZW1haWwpe1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGhvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG9uZTtcbiAgICB9LFxuICAgIHNldFBob25lOiBmdW5jdGlvbihwaG9uZSl7XG4gICAgICAgIHRoaXMuX3Bob25lID0gcGhvbmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBnZXRQZXJtaXNzaW9uczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgc2V0UGVybWlzc2lvbnM6IGZ1bmN0aW9uKHBlcm1pc3Npb25zKXtcbiAgICAgICAgaWYoICFBcnJheS5pc0FycmF5KHBlcm1pc3Npb25zKSApIHRocm93IFwic2V0UGVybWlzc2lvbnMgcmVxdWlyZXMgYW4gYXJyYXlcIjtcblxuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb246IGZ1bmN0aW9uKHBlcm1pc3Npb24pe1xuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucy5wdXNoKHBlcm1pc3Npb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vUmVtb3ZlcyBhIHNpbmdsZSBwZXJtaXNzaW9uIGZyb20gdGhpcyB1c2VyXG4gICAgcmVtb3ZlUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuc2V0UGVybWlzc2lvbnModGhpcy5fcGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHVzZXIgaGFzIHRoZSBwcm92aWRlZCBwZXJtaXNzaW9uXG4gICAgaGFzUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBlcm1pc3Npb25zKCkuaW5jbHVkZXMocGVybWlzc2lvbik7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxEYXRhO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIHNldEFkZGl0aW9uYWxEYXRhOiBmdW5jdGlvbihhZGRpdGlvbmFsX2RhdGEpe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChhZGRpdGlvbmFsX2RhdGEsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9yZXR1cm5zIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0RGF0YUl0ZW0oa2V5KXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV07XG4gICAgfSxcbiAgICAvL3NldHMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBzZXREYXRhSXRlbShrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn19LnBvcHVsYXRlKHVzZXJfZGVmYXVsdHMpOyAvL2ltbWVkaWF0ZWx5IHBvcHVsYXRlIGZyb20gdXNlcl9kZWZhdWx0cyIsImV4cG9ydCB7fSIsIi8qKlxuICogSFRNTCBET00gaGVscGVyc1xuICpcbiAqIEB0eXBlIHt7Z2V0RWxlbWVudHM6IChmdW5jdGlvbigqPSwgKj0pOiBBcnJheSksIGdldEVsZW1lbnQ6IGRvbS5nZXRFbGVtZW50LCBleGlzdHM6IChmdW5jdGlvbigqPSk6IG51bWJlciksIG11bHRpcGxlRXhpc3Q6IChmdW5jdGlvbigqPSk6IG51bWJlcil9fVxuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYSBzaW5nbGUgbmF0aXZlIERPTSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm9uZSBleGlzdFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZSAtIHRocm93IGFuIGVycm9yIGlmIG1vcmUgdGhhbiAxIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIEVsZW1lbnR8SFRNTERvY3VtZW50fG51bGxcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50OiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSwgZXJyb3Jfb25fbXVsdGlwbGUpe1xuICAgICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudHMoZWwsIGVycm9yX29uX25vbmUpO1xuXG4gICAgICAgIGlmKCBlbC5sZW5ndGggPiAxICYmIGVycm9yX29uX211bHRpcGxlICkgdGhyb3cgXCJUb28gbWFueSBET00gZWxlbWVudHMgZm91bmQgaW4gZ2V0RWxlbWVudCBmb3IgXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuXG4gICAgICAgIHJldHVybiBlbFswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhbiBhcnJheSBvZiBuYXRpdmUgRE9NIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWwgKHN0cmluZywgb2JqZWN0LCBhcnJheSwgalF1ZXJ5IG9iamVjdCwgZXRjKVxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm8gZWxlbWVudHMgd2VyZSBmb3VuZCwgZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyBbXVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRzOiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSl7XG4gICAgICAgIC8vZGVmYXVsdCB0byBmYWxzZVxuICAgICAgICBlcnJvcl9vbl9ub25lID0gdHlwZW9mIGVycm9yX29uX25vbmUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IGVycm9yX29uX25vbmU7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIGVtcHR5XG4gICAgICAgIGxldCBlbF9hcnJheSA9IFtdO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkIG9yIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgaWYoIHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhZWwgKXtcbiAgICAgICAgICAgIC8vZG8gbm90aGluZywgZGVmYXVsdCBpcyBlbXB0eSBhcnJheVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBFbGVtZW50IG9yIEhUTUxEb2N1bWVudCAoYSBzaW5ndWxhciBET00gZWxlbWVudClcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgYSBzdHJpbmcgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vY29udmVydCB0aGUgTm9kZUxpc3QgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBlbF9hcnJheSA/IEFycmF5LmZyb20oZWxfYXJyYXkpIDogZWxfYXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIGpxdWVyeSBvYmplY3Qgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgdmFsdWUgcHJvdmlkZWQgdG8gZ2V0RWxlbWVudHM6IFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKXtcbiAgICAgICAgICAgIHRocm93IFwiRmFpbGVkIHRvIGdldCBhcnJheSBvZiBET00gZWxlbWVudHMgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaG9wZWZ1bGx5IGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgZWwgaXMgYSBzaW5ndWxhciBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1aWNrIG1ldGhvZCBmb3IgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwpe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGRvbSBlbGVtZW50IHdpdGggSFRNTFxuICAgICAqXG4gICAgICogdXNlcyAuZ2V0RWxlbWVudCgpIHNvIGVsIGNhbiBiZSBqdXN0IGFib3V0IGFueXRoaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHtDaGlsZE5vZGV9XG4gICAgICovXG4gICAgcmVwbGFjZUVsV2l0aEhUTUw6IGZ1bmN0aW9uKGVsLCBodG1sKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwpO1xuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZnJvbSBIVE1MXG4gICAgICAgIGxldCBuZXdfZWwgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9pbnNlcnQgdGhlIG5ldyBlbGVtZW50IGJlZm9yZSB0aGUgY3VycmVudFxuICAgICAgICBuZXdfZWwgPSBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdfZWwuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzWzBdLCBlbCk7XG5cbiAgICAgICAgLy9yZW1vdmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICBlbC5yZW1vdmUoKTtcblxuICAgICAgICAvL3JldHVybiB0aGUgbmV3IG9uZVxuICAgICAgICByZXR1cm4gbmV3X2VsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kL2NvbnNpc3RlbnQgZXZlbnQgbGlzdGVuZXIgbWFuYWdlbWVudFxuICpcbiAqIEB0eXBlIHt7b25DbGljazogKGZ1bmN0aW9uKCo9LCAqPSk6ICgqfEFycmF5fGVsKSksIG9uQ2hhbmdlOiAoZnVuY3Rpb24oKj0sICo9KTogKCp8KnwqW10pKSwgb2ZmQ2hhbmdlOiAoZnVuY3Rpb24oKj0sICo9KTogKCp8KnwqW10pKSwgb2ZmRXZlbnRQcmV2ZW50RGVmYXVsdDogZXZlbnRzLm9mZkV2ZW50UHJldmVudERlZmF1bHQsIG9mZkNsaWNrKCo9LCAqPSk6IChBcnJheXxlbCksIG9uU3VibWl0OiAoZnVuY3Rpb24oKj0sICo9KTogKCp8QXJyYXl8ZWwpKSwgb2ZmU3VibWl0OiAoZnVuY3Rpb24oKj0sICo9KTogKCp8QXJyYXl8ZWwpKSwgb25FdmVudFByZXZlbnREZWZhdWx0OiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0LCB0cmlnZ2VyOiBldmVudHMudHJpZ2dlciwgb2ZmOiBldmVudHMub2ZmLCBvbjogZXZlbnRzLm9ufX1cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tY2xpY2sgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmQ2xpY2soZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZFdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdzdWJtaXQnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1zdWJtaXQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdzdWJtaXQnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFpbmx5IGhlcmUgZm9yIGNvbnNpc3RlbmN5XG4gICAgICpcbiAgICAgKiBTaG9ydGhhbmQgb24tY2hhbmdlIGhhbmRsZXJcbiAgICAgKiBET0VTIE5PVCBwcmV2ZW50RGVmYXVsdCBiZWNhdXNlIHRoYXQncyB1c3VhbGx5IG5vdCBkZXNpcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub24oZWwsICdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1jaGFuZ2UgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkNoYW5nZTogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmYoZWwsICdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBhbmQgcHJldmVudHMgdGhlIGRlZmF1bHQgZXZlbnRzIGZyb20gb2NjdXJyaW5nXG4gICAgICogIChsaWtlIGZvcm1zIHN1Ym1pdHRpbmcgb3IgYSBsaW5rIGJyaW5naW5nIHlvdSB0byBhbm90aGVyIHBhZ2UpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25FdmVudFByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgW2VdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcblxuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBbZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBldmVudF9vcHRpb25zXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oZWwsIGV2ZW50LCBldmVudF9vcHRpb25zKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudF9vcHRpb25zID0gdHlwZW9mIGV2ZW50X29wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogZXZlbnRfb3B0aW9ucztcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBldmVudF9vcHRpb25zIH0pO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi9zdHJpbmdzXCI7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCB7dHlwZV9jaGVja3MsIHN0cmluZ3MsIGRvbSwgZXZlbnRzfTsiLCIvKipcbiAqIE1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29tbW9uIHN0cmluZyBtYW5pcHVsYXRpb25zXG4gKlxuICogQHR5cGUge3tnZXR0ZXI6IChmdW5jdGlvbigqPSk6IHN0cmluZyksIHVjZmlyc3Q6IChmdW5jdGlvbigqPSk6ICgqfHN0cmluZykpLCBzZXR0ZXI6IChmdW5jdGlvbigqPSk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3MuZ2V0dGVyKCduYW1lJykgcmV0dXJucyAnZ2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdnZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3Muc2V0dGVyKCduYW1lJykgcmV0dXJucyAnc2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdzZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHVjZmlyc3QoKSBmdW5jdGlvbmFsaXR5IHRvIEpTIChsaWtlIFBIUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgdWNmaXJzdDogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxufTsiLCIvKipcbiAqIE1ldGhvZHMgZm9yIGNoZWNraW5nIGRhdGEgdHlwZXMgd2l0aCBtb3JlIHNwZWNpZmljaXR5XG4gKlxuICogQHR5cGUge3tpc0RhdGFPYmplY3Q6IHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdH19XG4gKi9cbmV4cG9ydCBjb25zdCB0eXBlX2NoZWNrcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcHJvdmlkZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgY29udGFpbiBhdCBsZWFzdCAxIHByb3ZpZGVkIGtleSBpbiBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSBtdXN0IGhhdmUgYWxsIGtleXNcbiAgICAgKiBPcHRpb25hbGx5IGNhbm5vdCBoYXZlIGFueSBrZXlzIHRoYXQgYXJlbid0IGluIHRoZSBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IGNoZWNrIGZhaWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0ga2V5cyAtIGRlZmF1bHQ6IGRvbid0IHZlcmlmeSBrZXlzXG4gICAgICogQHBhcmFtIHJlcXVpcmVfYWxsX2tleXMgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEBwYXJhbSBibG9ja19vdGhlcl9rZXlzIC0gZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwYXJhbSB0aHJvd19lcnJvciAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEYXRhT2JqZWN0OiBmdW5jdGlvbih2YWx1ZSwga2V5cywgcmVxdWlyZV9hbGxfa2V5cywgYmxvY2tfb3RoZXJfa2V5cywgdGhyb3dfZXJyb3Ipe1xuICAgICAgICAvL2RlZmF1bHQgZm9yIHRocm93X2Vycm9yIGlzIGZhbHNlXG4gICAgICAgIHRocm93X2Vycm9yID0gdHlwZW9mIHRocm93X2Vycm9yICE9PSBcInVuZGVmaW5lZFwiID8gdGhyb3dfZXJyb3IgOiBmYWxzZTtcblxuICAgICAgICAvL2RlZmF1bHQgZm9yIHJlcXVpcmVfYWxsX2tleXMgaXMgZmFsc2VcbiAgICAgICAgcmVxdWlyZV9hbGxfa2V5cyA9IHR5cGVvZiByZXF1aXJlX2FsbF9rZXlzICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWlyZV9hbGxfa2V5cyA6IGZhbHNlO1xuXG4gICAgICAgIC8vZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHZhciBzdHJpbmdpZmllZF92YWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IGVycm9yX21zZ1xuICAgICAgICBjb25zdCBlcnJvcl9tc2cgPSBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG5vdCBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZGV0ZXJtaW5lIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgICAgICBjb25zdCBpc19vYmplY3QgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgICAgLy9pZiBub3QgYW4gb2JqZWN0LCBudWxsLCBvciBhbiBhcnJheVxuICAgICAgICBpZiggIWlzX29iamVjdCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB3ZSBuZWVkIHRvIHZlcmlmeSB0aGUga2V5cyB0aGlzIG9iamVjdCBjb250YWluc1xuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShrZXlzKSApIHtcbiAgICAgICAgICAgIGxldCBmb3VuZF9rZXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBtaXNzaW5nX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVfa2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGtleSB3YXMgZm91bmQsIHdlIGZvdW5kIGF0bGVhc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlX2tleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF9rZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2lmIGl0J3Mgbm90IGZvdW5kLCB3ZSBjYW4ndCBzYXkgYWxsIGtleXMgZXhpc3QgaW4gdGhpcyBvYmplY3RcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2lmIG5vdCBvbmUgb2YgdGhlIGtleXMgd2VyZSBmb3VuZFxuICAgICAgICAgICAgaWYoICFmb3VuZF9rZXkgKXtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmc6IGAra2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkaWRuJ3QgZmluZCBhbGwgdGhlIGtleXNcbiAgICAgICAgICAgIGlmKCByZXF1aXJlX2FsbF9rZXlzICYmIG1pc3Npbmdfa2V5cy5sZW5ndGggKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbWlzc2luZyBkYXRhOiBgK21pc3Npbmdfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkb24ndCBhbGxvdyBhbnkga2V5cyBOT1QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgICAgICAgIGlmKCBibG9ja19vdGhlcl9rZXlzICl7XG4gICAgICAgICAgICAgICAgbGV0IHVucmVjb2duaXplZF9rZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICB2YWx1ZV9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAha2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlY29nbml6ZWRfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCB1bnJlY29nbml6ZWRfa2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBjb250YWlucyBpbnZhbGlkIGRhdGE6IGArdW5yZWNvZ25pemVkX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWxsIGNoZWNrcyBwYXNzZWQhIGNvbmdyYXRzLCBpdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59OyIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi4vZXMvY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBvYmplY3RzIGZyb20gJy4uL2VzL29iamVjdHMnO1xuaW1wb3J0ICogYXMgcGx1Z2luX3dyYXBwZXJzIGZyb20gJy4uL2VzL3BsdWdpbl93cmFwcGVycyc7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSAnLi4vZXMvdXRpbGl0aWVzJztcblxuLyoqXG4gKiBBbGwganBhY2sgY29tcG9uZW50cyBhcmUgZmxhdHRlbmVkIG91dCBvZiB0aGVpciBuYW1lc3BhY2VzIGFuZCBzZXQgb24gd2luZG93XG4gKlxuICogVGhpcyBtZWFucyBpbnN0ZWFkIG9mIGNhbGxpbmcganBhY2sub2JqZWN0cy51c2VyLmdldElkKCksIHlvdSBjYW4ganVzdCBjYWxsIHVzZXIuZ2V0SWQoKVxuICpcbiAqIE9yIGxldCdzIHNheSB5b3UgcGFzcyBhIG5hbWVzcGFjZSBsaWtlIFwianBcIiwgdGhlbiB5b3UgY2FuIGNhbGw6IGpwLnVzZXIuZ2V0SWQoKVxuICpcbiAqIE5vdCByZWNvbW1lbmRlZCAoYXRsZWFzdCBub3Qgd2l0aG91dCBhIG5hbWVzcGFjZSlcbiAqXG4gKi9cbmNvbnN0IGdvR2xvYmFsID0gZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSsnLicgOiBudWxsO1xuXG4gICAgLy9sb29wIHRocm91Z2ggY29tcG9uZW50cywgb2JqZWN0cywgcGx1Z2luX3dyYXBwZXJzLCBhbmQgdXRpbGl0aWVzXG4gICAgW2NvbXBvbmVudHMsb2JqZWN0cyxwbHVnaW5fd3JhcHBlcnMsdXRpbGl0aWVzXS5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCl7XG4gICAgICAgIC8vZm9yIGVhY2ggY29tcG9uZW50IHdpdGhpbiB0aG9zZVxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIC8vZ2V0IGFjdHVhbCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgLy9leGFtcGxlOiBvYmplY3RzLnVzZXIgYmVjb21lcyB3aW5kb3cudXNlclxuICAgICAgICAgICAgICAgIC8vdXNhZ2UgYWZ0ZXIgcnVubmluZyB0aGlzOiB1c2VyLmdldElkKClcbiAgICAgICAgICAgICAgICB3aW5kb3dbbmFtZXNwYWNlK3Byb3BlcnR5XSA9IG9iamVjdFtwcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBqcGFjayA9IHtjb21wb25lbnRzLCBvYmplY3RzLCBwbHVnaW5fd3JhcHBlcnMsIHV0aWxpdGllcywgZ29HbG9iYWw6IGdvR2xvYmFsfTtcblxuLy9zZXQganBhY2sgZ2xvYmFsbHkgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBhbnl3aGVyZVxuZ2xvYmFsLmpwYWNrID0ganBhY2s7IiwibW9kdWxlLmV4cG9ydHMgPSBheGlvczsiLCJtb2R1bGUuZXhwb3J0cyA9IHVybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsOyJdLCJzb3VyY2VSb290IjoiIn0=