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
        navigation.triggerUnload(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el);

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
    triggerUnload: function(el){
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.started', {el:el});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9jb21wb25lbnRzL25hdmlnYXRpb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9hYnN0cmFjdF9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9vYmplY3RzL3JlcXVlc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvb2JqZWN0cy9zaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL29iamVjdHMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9wbHVnaW5fd3JhcHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXRpbGl0aWVzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3V0aWxpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91dGlsaXRpZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanBhY2suanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7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Y2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcGFjay5qc1wiKTtcbiIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4vbmF2aWdhdGlvblwiO1xuXG5leHBvcnQge25hdmlnYXRpb259OyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9kb21cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uLy4uL29iamVjdHMvcmVxdWVzdFwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvZXZlbnRzXCI7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBzaW11bGF0ZSBhIHBhZ2UgY2hhbmdlIGJ5IHVzaW5nIGFuIFhIUiByZXF1ZXN0IHRvIGdyYWIgY29udGVudCBhbmQgcmVwbGFjZSBpdCBvbiB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBicm93c2VyJ3MgaGlzdG9yeSwgc3dhcHMgb3V0IG1ldGEgdGFncywgdXBkYXRlcyB0aGUgdGl0bGUsIGFuZCBtb3JlXG4gKlxuICogVXNlIG9uTG9hZCBhbmQgb25VbmxvYWQgaG9va3MgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZm9yIHRoaW5ncyBsaWtlIHRyaWdnZXJpbmcgYSBnb29nbGUgYW5hbHl0aWNzIHBhZ2Ugdmlld1xuICogIG9yIHNjcm9sbGluZyB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICpcbiAqIEB0eXBlIHt7dHJpZ2dlck9uTG9hZDogKGZ1bmN0aW9uKCo9LCAqPSk6IG5hdmlnYXRpb24pLCBzZXRQYXNzdGhyb3VnaERhdGE6IChmdW5jdGlvbigqKTogbmF2aWdhdGlvbiksIF9pbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcjogc3RyaW5nLCBzZXRMb2FkZXJEZWxheTogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGZ1bGxSZWxvYWQ6IG5hdmlnYXRpb24uZnVsbFJlbG9hZCwgdHJpZ2dlclVubG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIHJlbG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGxvYWQ6IG5hdmlnYXRpb24ubG9hZCwgY2xlYXJQYXNzdGhyb3VnaERhdGE6IChmdW5jdGlvbigpOiBuYXZpZ2F0aW9uKSwgcmVwbGFjZVBhZ2VDb250ZW50KCo9LCAqPSwgKj0sICo9LCAqPSk6ICosIGhpZGVMb2FkZXI6IChmdW5jdGlvbigpOiBuYXZpZ2F0aW9uKSwgbG9hZGVyRW5hYmxlZDogYm9vbGVhbiwgc2hvd0xvYWRlcjogKGZ1bmN0aW9uKCk6IG5hdmlnYXRpb24pLCBzZXRSZXBsYWNlRWxlbWVudDogbmF2aWdhdGlvbi5zZXRSZXBsYWNlRWxlbWVudCwgX2xvYWRlckRlbGF5OiBudW1iZXIsIGdldFJlcGxhY2VFbGVtZW50OiAoZnVuY3Rpb24oKTogc3RyaW5nKSwgcmVkaXJlY3Q6IG5hdmlnYXRpb24ucmVkaXJlY3QsIGdldExvYWRlckRlbGF5OiAoZnVuY3Rpb24oKTogbnVtYmVyKSwgb25VbmxvYWQ6IChmdW5jdGlvbigqPSk6IG5hdmlnYXRpb24pLCBpbml0SGlzdG9yeUhhbmRsZXJzOiAoZnVuY3Rpb24oKTogbmF2aWdhdGlvbiksIF9wYXNzdGhyb3VnaERhdGE6IG51bGwsIHNldEluY29taW5nRWxlbWVudDogbmF2aWdhdGlvbi5zZXRJbmNvbWluZ0VsZW1lbnQsIHBhcnNlSFRNTCgqPSwgKj0pOiB7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwLCBzdHJpbmdbXT4sIHJvdXRlOiAoKnxhbnl8RWxlbWVudCksIGxpbmtzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcCwgc3RyaW5nW10+LCBodG1sOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGJvZHlfY2xhc3NlczogRE9NVG9rZW5MaXN0fSwgc2V0VGl0bGU6IChmdW5jdGlvbigqKTogbmF2aWdhdGlvbiksIGdldFBhc3NUaHJvdWdoRGF0YTogKGZ1bmN0aW9uKCopOiBudWxsKSwgb25OYXZpZ2F0aW9uRmFpbHVyZTogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIF9yZXBsYWNlRWxlbWVudFNlbGVjdG9yOiBzdHJpbmcsIGdldFJvdXRlRnJvbU1ldGE6IChmdW5jdGlvbigqPSk6IChhbnkgfCBFbGVtZW50KSksIGdldExvYWRlckVsOiBuYXZpZ2F0aW9uLmdldExvYWRlckVsLCBvbkxvYWQ6IChmdW5jdGlvbigqPSk6IG5hdmlnYXRpb24pLCB0cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmU6IChmdW5jdGlvbigqPSk6IG5hdmlnYXRpb24pLCBnZXRJbmNvbWluZ0VsZW1lbnQ6IChmdW5jdGlvbigpOiBzdHJpbmcpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgZGF0YSB0byBiZSBwcm92aWRlZCB0byB0aGUgb25sb2FkIGNhbGxiYWNrIGFmdGVyIG5hdmlnYXRpbmcgdG8gYW5vdGhlciBwYWdlIHVzaW5nIC5sb2FkKClcbiAgICAgKi9cbiAgICBfcGFzc3Rocm91Z2hEYXRhOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBuZXh0IHBhZ2VcbiAgICAgKiAgdGhpcyBkYXRhIHBlcnNpc3RzIHVudGlsIGNsZWFyZWQgbWFudWFsbHkgYW5kIHdpbGwgYmUgcHJvdmlkZWQgdG8gQUxMIHN1YnNlcXVlbnQgb25Mb2FkIGhhbmRsZXJzXG4gICAgICogICAob3IgaXQgY2FuIGJlIGdyYWJiZWQgbWFudWFsbHkgZnJvbSB0aGlzIG9iamVjdCBhdCBhbnkgdGltZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgc2V0UGFzc3Rocm91Z2hEYXRhOiBmdW5jdGlvbihkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcGFzc3Rocm91Z2hEYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBkYXRhIHByb3ZpZGVkIGZvciB0aGUgbmV4dCBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBjbGVhclBhc3N0aHJvdWdoRGF0YTogZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRQYXNzdGhyb3VnaERhdGEobnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFueSBkYXRhIHRoYXQgaGFzIGJlZW4gc2V0IGZvciBwYXNzaW5nIHRvIHN1YnNlcXVlbnQgcGFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgZ2V0UGFzc1Rocm91Z2hEYXRhOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhc3N0aHJvdWdoRGF0YTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICovXG4gICAgX2luY29taW5nRWxlbWVudFNlbGVjdG9yOiAnYm9keScsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24oc2VsZWN0b3Jfc3RyaW5nKXtcbiAgICAgICAgaWYoIHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICovXG4gICAgX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uKHNlbGVjdG9yX3N0cmluZyl7XG4gICAgICAgIGlmKCB0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yX3N0cmluZ30gaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VsZWN0b3JzIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR3JhYnMgSFRNTCBmcm9tIGEgVVJMIGFuZCByZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIDEpIFNob3dzIGEgbG9hZGVyIChpZiBlbmFibGVkKVxuICAgICAqIDIpIFJlcXVlc3RzIGNvbnRlbnQgZnJvbSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgICogMykgUmVwbGFjZXMgaXQgb24gdGhlIHBhZ2UgKGFuZCBhbGwgdGhlIG1hZ2ljIHJlcGxhY2VQYWdlQ29udGVudCBkb2VzLCBzZWUgY29tbWVudHMgb24gdGhhdCBtZXRob2QgYmVsb3cpXG4gICAgICogNCkgSWYgdGhlcmUncyBhIGNhbGxiYWNrIHByb3ZpZGVkLCBpdCdsbCBiZSBydW4gYWZ0ZXJ3YXJkcyAoaXQgcmVjZWl2ZXMgdGhlIG5ld2x5IHJlcGxhY2VkIGVsZW1lbnQgYXMgYSBwYXJhbSlcbiAgICAgKlxuICAgICAqIE9uIGVycm9yLCBpdCB0cmlnZ2VycyBhIG5hdmlnYXRpb24gZmFpbHVyZSBhbmQgcHJvdmlkZXMgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gaW5jb21pbmdfZWxcbiAgICAgKiBAcGFyYW0gcmVwbGFjZV9lbFxuICAgICAqIEBwYXJhbSBwdXNoX3N0YXRlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24odXJsLCBjYWxsYmFjaywgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHB1c2hfc3RhdGUpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgVVJMICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcbiAgICAgICAgcHVzaF9zdGF0ZSA9IHR5cGVvZiBwdXNoX3N0YXRlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBwdXNoX3N0YXRlO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgbmF2aWdhdGlvbi5yZXBsYWNlUGFnZUNvbnRlbnQocmVzcG9uc2UuZGF0YSwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSk7XG5cbiAgICAgICAgICAgIC8vaWYgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHJ1biBpdCBhbmQgcHJvdmlkZSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvL3dhaXQgZm9yIHRoZSBvbnVubG9hZCBjYWxsYmFja3MgdG8gcnVuIGFuZCB0aGUgbmV3IGNvbnRlbnQgdG8gYmUgcHV0IG9uIHRoZSBwYWdlIGZpcnN0XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIGluY29taW5nX2VsLCBuYXZpZ2F0aW9uLmdldFBhc3NUaHJvdWdoRGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9LCAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24udHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlKGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICBfbG9hZGVyRGVsYXk6IDMwMCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24oZGVsYXlfaW5fbXMpe1xuICAgICAgICBpZiggdHlwZW9mIGRlbGF5X2luX21zICE9PSBcIm51bWJlclwiICkgdGhyb3cgYCR7ZGVsYXlfaW5fbXN9IGlzIG5vdCBhbiBpbnRlZ2VyYDtcbiAgICAgICAgdGhpcy5fbG9hZGVyRGVsYXkgPSBkZWxheV9pbl9tcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJEZWxheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3NlcyBmb3IgdGhlIGxvYWRlclxuICAgICAqIERlZmF1bHRzIGFyZSBmb3IgYm9vdHN0cmFwICh3aXRoIHRoZSBleGNlcHRpb24gb2YgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcilcbiAgICAgKi9cbiAgICBfbG9hZGVyQ2xhc3NlczogJ3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIF9sb2FkZXJJbm5lckRpdkNsYXNzZXM6ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyxcblxuICAgIC8qKlxuICAgICAqIElmIGVuYWJsZWQsIGFkZHMgYSBsb2FkZXIgdG8gdGhlIHBhZ2UgYW5kIGNhY2hlcyBhIHJlZmVyZW5jZSB0byBpdCwgdGhlbiByZXR1cm5zIHRoYXQgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuICAgICAgICBpZiggbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQgKSByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG5cbiAgICAgICAgLy9wcmVwZW5kIHRoZSBsb2FkZXIgZWxlbWVudHNcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVyQ2xhc3NlcztcbiAgICAgICAgbGV0IGlubmVyX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcl9kaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuICAgICAgICBkaXYuYXBwZW5kKGlubmVyX2Rpdik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBjYWNoZSBhIHJlZmVyZW5jZSB0byBpdCBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkID0gZG9tLmdldEVsZW1lbnQoJy5wYWdlLW5hdmlnYXRpb24tbG9hZGVyJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG5cbiAgICAgICAgbmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmdldExvYWRlckVsKCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIHRoaXMuZ2V0TG9hZGVyRGVsYXkoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGhpZGVMb2FkZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgdGhlIGxvYWRlciBzdGlsbCBoYXNuJ3Qgc2hvd24geWV0LCBwcmV2ZW50IGl0IGJlY2F1c2UgdGhlIHJlcXVlc3Qgd2FzIHZlcnkgZmFzdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5hdmlnYXRpb24ubG9hZGVyX3RpbWVvdXQpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgbG9hZGVyXG4gICAgICAgIG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIGh0bWw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgYm9keV9jbGFzc2VzOiBET01Ub2tlbkxpc3R9fVxuICAgICAqL1xuICAgIHBhcnNlSFRNTChodG1sLCBwYXJlbnRfZWwpXG4gICAge1xuICAgICAgICAvL2RlZmF1bHQgdG8gbnVsbCBpZiBub3QgcHJvdmlkZWRcbiAgICAgICAgcGFyZW50X2VsID0gdHlwZW9mIHBhcmVudF9lbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50X2VsO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmKCB0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwgKSB0aHJvdyBgUHJvdmlkZWQgcGFyZW50X2VsICgke3BhcmVudF9lbH0pIGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBkb21cbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9nZXQgcGFnZSB0aXRsZVxuICAgICAgICB2YXIgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZSA/IHRpdGxlLmlubmVyVGV4dCA6IG51bGw7XG5cbiAgICAgICAgLy9nZXQgYW55IG1ldGEgdGFnc1xuICAgICAgICB2YXIgbWV0YXMgPSBkb2MuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICAgICAgICAvL2dldCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgdmFyIGxpbmtzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgIC8vZ2V0IGJvZHkgY2xhc3Nlc1xuICAgICAgICB2YXIgYm9keV9jbGFzc2VzID0gZG9jLmJvZHkuY2xhc3NMaXN0O1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICB2YXIgbmV3X2h0bWwgPSBodG1sO1xuXG4gICAgICAgIC8vaWYgYSBwYXJlbnQgZWxlbWVudCB3YXMgcHJvdmlkZWQsIGZpbmQgaXRcbiAgICAgICAgaWYoIHBhcmVudF9lbCApe1xuICAgICAgICAgICAgdmFyIHNlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHBhcmVudF9lbCk7XG4gICAgICAgICAgICAvL2lmIGNvdWxkbid0IGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmKCAhc2VsICl7XG4gICAgICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBhcmVudCBzZWxlY3RvciAke3BhcmVudF9lbH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBvdXRlckhUTUxcbiAgICAgICAgICAgIG5ld19odG1sID0gc2VsLm91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBuZXcgcGFnZSdzIHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnIChpZiBpdCBleGlzdHMpXG4gICAgICAgIHZhciByb3V0ZSA9IG5hdmlnYXRpb24uZ2V0Um91dGVGcm9tTWV0YShkb2MpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvbiwgeW91IGRvbid0IG5lZWQgdGhpcyBhbnltb3JlLlxuICAgICAgICBwYXJzZXIgPSBkb2MgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIG1ldGFzOm1ldGFzLFxuICAgICAgICAgICAgbGlua3M6bGlua3MsXG4gICAgICAgICAgICBib2R5X2NsYXNzZXM6Ym9keV9jbGFzc2VzLFxuICAgICAgICAgICAgaHRtbDpuZXdfaHRtbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnLCBpZiBpdCBleGlzdHNcbiAgICAgKlxuICAgICAqIElmIHlvdSBkb24ndCBwcm92aWRlIEhUTUwsIGl0J2xsIGdyYWIgaXQgZnJvbSB0aGUgY3VycmVudCBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge2FueSB8IEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0Um91dGVGcm9tTWV0YTogZnVuY3Rpb24oaHRtbCl7XG4gICAgICAgIGh0bWwgPSB0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5oZWFkIDogaHRtbDtcbiAgICAgICAgdmFyIHJvdXRlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImN1cnJlbnRfcm91dGVcIl0nKTtcbiAgICAgICAgcm91dGUgPSByb3V0ZSA/IHJvdXRlLmNvbnRlbnQgOiBudWxsO1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aXRoIG5ldyBIVE1MXG4gICAgICpcbiAgICAgKiAxKSBUcmlnZ2VycyB1bmxvYWQoKVxuICAgICAqIDIpIFdhaXRzIDEwMG1zXG4gICAgICogMykgUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHNcbiAgICAgKiA0KSBSZXBsYWNlcyBhbGwgbWV0YSB0YWdzIChpbXBvcnRhbnQgZm9yIHNvY2lhbCBtZWRpYSBzaGFyaW5nIGFtb25nIG90aGVyIHRoaW5ncylcbiAgICAgKiA1KSBSZXBsYWNlcyB0aGUgY2Fub25pY2FsIHRhZ1xuICAgICAqIDYpIFJlcGxhY2VzIGFueSBjbGFzc2VzIG9uIHRoZSBib2R5IHNpbmNlIHRoZXkgYXJlIGdlbmVyYWxseSB1c2VkIHRvIGluZGljYXRlIHdoaWNoIHBhZ2UgeW91J3JlIG9uXG4gICAgICogNykgUHVzaGVzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAqIDgpIFNldHMgdGhlIHBhZ2UgdGl0bGVcbiAgICAgKiA5KSBSZXBsYWNlcyBjb250ZW50IGluIHRoZSBET01cbiAgICAgKiAxMCkgVHJpZ2dlcnMgb25sb2FkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICByZXBsYWNlUGFnZUNvbnRlbnQoaHRtbCwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSlcbiAgICB7XG4gICAgICAgIHB1c2hfc3RhdGUgPSB0eXBlb2YgcHVzaF9zdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogcHVzaF9zdGF0ZTtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcblxuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgLy9nZXQgcmVwbGFjZV9lbCBhZ2FpbiBiZWNhdXNlIGl0IHdhcyByZXBsYWNlZFxuICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJVbmxvYWQoZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIHJlcGxhY2VfZWwpO1xuXG4gICAgICAgIC8vdmVyeSBzbGlnaHQgMTAwbXMgZGVsYXkgdG8gbGV0IHRoZSBvbiB1bmxvYWQgaGFuZGxlcnMgcnVuIGZpcnN0XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoaHRtbCwgaW5jb21pbmdfZWwpO1xuXG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzIEhUTUwgdG8gcHV0IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICBpZiggcGFyc2VkLmh0bWwubGVuZ3RoICkge1xuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG1ldGEgdGFncyBhbmQgcmVwbGFjZSBmcm9tIG5ldyBwYWdlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnbWV0YScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHBhcnNlZC5tZXRhcyk7XG5cbiAgICAgICAgICAgICAgICAvL2FkZCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgICAgICAgICAvLyAtIHBvc3NpYmx5IG90aGVyIHRhZ3Mgd2lsbCBuZWVkIHRvIGJlIHdoaXRlbGlzdGVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAgICAgLy8gLSB0aGUgbWFpbiBjb25jZXJuIGlzIG5vdCBwdXR0aW5nIEpTL0NTUyBpbnRvIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCBzaG91bGRuJ3QgYmVcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlKCdbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJzZWQubGlua3MpLmZvckVhY2goZnVuY3Rpb24obGluayl7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxpbmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgYm9keSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QgPSBwYXJzZWQuYm9keV9jbGFzc2VzO1xuXG4gICAgICAgICAgICAgICAgLy9wdXNoIHRoZSBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgICAgICAgICAgICBwdXNoX3N0YXRlICYmIGhpc3RvcnkucHVzaFN0YXRlKHt1cmw6IHVybH0sIHBhcnNlZC50aXRsZSwgdXJsKTtcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSB0YWIvcGFnZSB0aXRsZVxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uc2V0VGl0bGUocGFyc2VkLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBjb250ZW50IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X2NvbnRlbnQgPSBkb20ucmVwbGFjZUVsV2l0aEhUTUwocmVwbGFjZV9lbCwgcGFyc2VkLmh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgIC8vZ2V0IHJlcGxhY2VfZWwgYWdhaW4gYmVjYXVzZSBpdCB3YXMgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJPbkxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsLCBwYXJzZWQucm91dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldFRpdGxlOiBmdW5jdGlvbih0aXRsZSl7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IHBhZ2UgbG9hZHMsIHlvdSBwcm9iYWJseSB3YW50IHRvIGtpY2tvZmYgc29tZSBwYWdlLXNwZWNpZmljIEpTLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIHJlY2VpdmVzIHRoZSBldmVudC5cbiAgICAgKiBUaGUgZXZlbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIFwiZGV0YWlsXCIgd2hpY2ggd2lsbCBjb250YWluOlxuICAgICAqICAxKSBUaGUgcmVwbGFjZV9lbCAodGhlIGVsZW1lbnQgd2hvJ3MgY29udGVudCB3YXMgc3dhcHBlZCBvdXQpXG4gICAgICogIDIpIFRoZSByb3V0ZSAoeW91IGNhbiBkZWZpbmUgdGhpcyBpbiBhIG1ldGEgdGFnIGNhbGxlZCBcImN1cnJlbnRfcm91dGVcIiB3aGljaCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ3JhYmJlZCBhbmQgcGFzc2VkIGFsb25nKVxuICAgICAqICAzKSBBbnkgZGF0YSB5b3Ugc2V0IHVzaW5nIC5zZXRQYXNzdGhyb3VnaERhdGEoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmNvbXBsZXRlJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uVW5sb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBuZXcgcGFnZSBmYWlscyB0byBsb2FkLCB5b3Ugc2hvdWxkIHByb2JhYmx5IHRlbGwgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyT25Mb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJvdXRlKXtcbiAgICAgICAgcm91dGUgPSB0eXBlb2Ygcm91dGUgIT09ICd1bmRlZmluZWQnID8gcm91dGUgOiBuYXZpZ2F0aW9uLmdldFJvdXRlRnJvbU1ldGEoKTtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5jb21wbGV0ZScsIHtcbiAgICAgICAgICAgIGVsOmVsLFxuICAgICAgICAgICAgZWxfc2VsZWN0b3I6ZWxfc2VsZWN0b3IsXG4gICAgICAgICAgICByb3V0ZTpyb3V0ZSxcbiAgICAgICAgICAgIGRhdGE6dGhpcy5nZXRQYXNzVGhyb3VnaERhdGEoKVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgbGVhdmluZyB0aGUgbGFzdCBwYWdlLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqL1xuICAgIHRyaWdnZXJVbmxvYWQ6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywge2VsOmVsfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gZmFpbGVkLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqL1xuICAgIHRyaWdnZXJOYXZpZ2F0aW9uRmFpbHVyZTogZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICBldmVudHMudHJpZ2dlcignYm9keScsICduYXZpZ2F0aW9uLmZhaWxlZCcsIHtlcnJvcjplcnJvcn0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byB0cmFjayB0aGUgYnJvd3NlcidzIGhpc3RvcnkgYnV0dG9ucyAoYmFjay9mb3J3YXJkKVxuICAgICAqXG4gICAgICogQHRvZG86IEludmVzdGlnYXRlIHBvc3NpYmxlIGlzc3VlIHdpdGggY2hyb21lIGNhY2hpbmcgYmFjayBidXR0b24gY29udGVudHMgYW5kIG5vdCBsb2FkaW5nIHRoZSBlbnRpcmUgcGFnZVxuICAgICAqL1xuICAgIGluaXRIaXN0b3J5SGFuZGxlcnM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIC8vZm9yd2FyZCBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucHVzaHN0YXRlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmxvYWQocmVxdWVzdC5nZXRVUklXaXRoUXVlcnlTdHJpbmcoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9iYWNrIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCksIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzLCBzdHJpbmdzfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBhYnN0cmFjdF9vYmplY3QgPSB7XG4gICAgLy9rZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zICh1c2VkIHRvIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGUgaXQgd2hlbiB5b3UgcnVuIHBvcHVsYXRlKGRhdGEpO1xuICAgIC8vb3ZlcndyaXRlIHRoaXMgaW4gZWFjaCBleHRlbmRpbmcgY2xhc3MhXG4gICAga2V5czogW10sXG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZXMgdGhlIHVzZXIgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcG9wdWxhdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMua2V5cywgZmFsc2UsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZm9yIGVhY2gga2V5IHRoYXQgaXMgc2V0IGluIHRoZSBkYXRhIG9iamVjdCwgc2V0IHRoZSB2YWx1ZSBvbiB0aGlzXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCJpbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7c2l0ZX0gZnJvbSBcIi4vc2l0ZVwiO1xuaW1wb3J0IHt1c2VyfSBmcm9tIFwiLi91c2VyXCI7XG5cbmV4cG9ydCB7cmVxdWVzdCwgc2l0ZSwgdXNlcn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKlxuICogQHR5cGUge3tnZXREb21haW46IChmdW5jdGlvbigpOiBzdHJpbmcpLCBnZXREb21haW5XaXRoUHJvdG9jb2w6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBxdWVyeTogVVJMU2VhcmNoUGFyYW1zLCBpc0h0dHBzOiAoZnVuY3Rpb24oKTogYm9vbGVhbiksIGdldFVSSTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGdldEZ1bGxVUkw6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBhcHBlbmRTbGFzaDogKGZ1bmN0aW9uKCk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1ZXJ5IHN0cmluZyB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFVSTFNlYXJjaFBhcmFtc1xuICAgICAqL1xuICAgIHF1ZXJ5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHJlcXVlc3Qgd2FzIG1hZGUgc2VjdXJlbHkgb3ZlciBTU0wgKGh0dHBzIGluc3RlYWQgb2YgaHR0cClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSHR0cHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgfHwgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbldpdGhQcm90b2NvbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJJXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkkgd2l0aCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSVdpdGhRdWVyeVN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgVVJMXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20vcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGdWxsVVJMOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbGFzaCB0byBhIHN0cmluZyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tIGJlY29tZXMgaHR0cHM6Ly9teS1kb21haW4uY29tL1xuICAgICAqIEV4YW1wbGU6IC9teS1wcm9kdWN0IGJlY29tZXMgL215LXByb2R1Y3QvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhcHBlbmRTbGFzaDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG59OyIsImltcG9ydCB7YWJzdHJhY3Rfb2JqZWN0fSBmcm9tIFwiLi4vYWJzdHJhY3Rfb2JqZWN0XCI7XG5pbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVfY2hlY2tzXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xubGV0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG4vL292ZXJyaWRlIGRlZmF1bHRzIGZyb20gJHNpdGUgKGlmIGRlZmluZWQpXG5pZiggdHlwZW9mICRzaXRlID09PSBcIm9iamVjdFwiICkgc2l0ZV9kZWZhdWx0cyA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi4kc2l0ZX07XG5cbi8qKlxuICpcbiAqIFByb3ZpZGVzIHlvdSB3aXRoIGVhc3kgYWNjZXNzIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHdlYnNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIEB0eXBlIHt7c2V0TmFtZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgZ2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCopOiBudWxsKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6ICopLCBwb3B1bGF0ZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgc2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCosICopOiBzaXRlKSwgbmFtZTogbnVsbCwgc2V0SWQ6IChmdW5jdGlvbigqKTogc2l0ZSksIGdldElkOiAoZnVuY3Rpb24oKTogKiksIGlkOiBudWxsLCBjb25maWc6IChzaXRlX2RlZmF1bHRzLmNvbmZpZ3x7fSksIGdldENvbmZpZzogKGZ1bmN0aW9uKCk6ICopLCBzZXRDb25maWc6IChmdW5jdGlvbigqKTogc2l0ZSl9fVxuICovXG5leHBvcnQgY29uc3Qgc2l0ZSA9IHsuLi5hYnN0cmFjdF9vYmplY3QsIC4uLntcbiAgICBrZXlzOiBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ10sXG5cbiAgICBnZXRJZDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH0sXG4gICAgc2V0SWQ6IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vZ2V0cyB0aGUgd2Vic2l0ZSdzIG5hbWVcbiAgICBnZXROYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9LFxuICAgIHNldE5hbWU6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgY29uZmlnIGRhdGFcbiAgICBnZXRDb25maWc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWc6IGZ1bmN0aW9uKGNvbmZpZyl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGNvbmZpZywgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYW4gaW5kaXZpZHVhbCBjb25maWcgdmFsdWUgb3IgbnVsbCBpZiBpdCdzIG5vdCBkZWZpbmVkXG4gICAgZ2V0Q29uZmlnSXRlbTogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB0aGlzLl9jb25maWdba2V5XTtcbiAgICB9LFxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtOiBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59fS5wb3B1bGF0ZShzaXRlX2RlZmF1bHRzKTsiLCJpbXBvcnQge2Fic3RyYWN0X29iamVjdH0gZnJvbSBcIi4uL2Fic3RyYWN0X29iamVjdFwiO1xuaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlX2NoZWNrc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmxldCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuLy9vdmVycmlkZSBkZWZhdWx0cyBmcm9tICR1c2VyIChpZiBkZWZpbmVkKVxuaWYoIHR5cGVvZiAkdXNlciA9PT0gXCJvYmplY3RcIiApIHVzZXJfZGVmYXVsdHMgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uJHVzZXJ9O1xuXG4vKipcbiAqXG4gKiBQcm92aWRlcyB5b3Ugd2l0aCBlYXN5IGFjY2VzcyB0byB1c2VyIGluZm9ybWF0aW9uIGFuZCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gcGVybWlzc2lvbiBjaGVja3NcbiAqXG4gKiBAdHlwZSB7e2dldElzR3Vlc3Q6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGhvbmU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TG5hbWU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIHNldElzR3Vlc3Q6IChmdW5jdGlvbigqKTogdXNlciksIGtleXM6IHN0cmluZ1tdLCBhZGRQZXJtaXNzaW9uOiAoZnVuY3Rpb24oKj0pOiB1c2VyKSwgZ2V0SWQ6IChmdW5jdGlvbigpOiAqKSwgc2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigqKTogdXNlciksIHNldFBlcm1pc3Npb25zOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXRVc2VybmFtZTogKGZ1bmN0aW9uKCk6ICopLCBzZXRGbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0Rm5hbWU6IChmdW5jdGlvbigpOiAqKSwgc2V0SWQ6IChmdW5jdGlvbigqKTogdXNlciksIHNldFVzZXJuYW1lOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXRMbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGVybWlzc2lvbnM6IChmdW5jdGlvbigpOiAqKSwgc2V0UGhvbmU6IChmdW5jdGlvbigqKTogdXNlciksIHJlbW92ZVBlcm1pc3Npb246IChmdW5jdGlvbigqKTogdXNlciksIGdldERhdGFJdGVtKCopOiBudWxsLCBzZXRJc0FkbWluOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXREYXRhSXRlbSgqLCAqKTogKiwgZ2V0SXNBZG1pbjogKGZ1bmN0aW9uKCk6ICopLCBzZXRFbWFpbDogKGZ1bmN0aW9uKCopOiB1c2VyKSwgaGFzUGVybWlzc2lvbjogKGZ1bmN0aW9uKCo9KTogKCp8Ym9vbGVhbikpLCBnZXRFbWFpbDogKGZ1bmN0aW9uKCk6ICopfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZXIgPSB7Li4uYWJzdHJhY3Rfb2JqZWN0LCAuLi57XG4gICAgLy91c2VyIG9iamVjdCBrZXlzXG4gICAga2V5czogWydpZCcsICdpc0d1ZXN0JywgJ2lzQWRtaW4nLCAndXNlcm5hbWUnLCAnZm5hbWUnLCAnbG5hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAncGVybWlzc2lvbnMnLCAnYWRkaXRpb25hbERhdGEnXSxcblxuICAgIHNldElkOiBmdW5jdGlvbihpZCl7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9LFxuXG4gICAgc2V0SXNHdWVzdDogZnVuY3Rpb24oaXNfZ3Vlc3Qpe1xuICAgICAgICB0aGlzLl9pc0d1ZXN0ID0gaXNfZ3Vlc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0SXNHdWVzdDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzR3Vlc3Q7XG4gICAgfSxcblxuICAgIHNldElzQWRtaW46IGZ1bmN0aW9uKGlzX2FkbWluKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElzQWRtaW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FkbWluO1xuICAgIH0sXG5cbiAgICBzZXRVc2VybmFtZTogZnVuY3Rpb24odXNlcm5hbWUpe1xuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFVzZXJuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfSxcblxuICAgIGdldEZuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZm5hbWU7XG4gICAgfSxcbiAgICBzZXRGbmFtZTogZnVuY3Rpb24oZmlyc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2ZuYW1lID0gZmlyc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdldExuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfSxcbiAgICBzZXRMbmFtZTogZnVuY3Rpb24obGFzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fbG5hbWUgPSBsYXN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGAke3VzZXIuZ2V0Rm5hbWUoKX0gJHt1c2VyLmdldExuYW1lKCl9YDtcbiAgICB9LFxuXG4gICAgZ2V0RW1haWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9LFxuICAgIHNldEVtYWlsOiBmdW5jdGlvbihlbWFpbCl7XG4gICAgICAgIHRoaXMuX2VtYWlsID0gZW1haWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQaG9uZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lO1xuICAgIH0sXG4gICAgc2V0UGhvbmU6IGZ1bmN0aW9uKHBob25lKXtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIGdldFBlcm1pc3Npb25zOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnM7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9uczogZnVuY3Rpb24ocGVybWlzc2lvbnMpe1xuICAgICAgICBpZiggIUFycmF5LmlzQXJyYXkocGVybWlzc2lvbnMpICkgdGhyb3cgXCJzZXRQZXJtaXNzaW9ucyByZXF1aXJlcyBhbiBhcnJheVwiO1xuXG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9hZGRzIGEgc2luZ2xlIHBlcm1pc3Npb24gdG8gdGhpcyB1c2VyXG4gICAgYWRkUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9SZW1vdmVzIGEgc2luZ2xlIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVzZXJcbiAgICByZW1vdmVQZXJtaXNzaW9uOiBmdW5jdGlvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgdGhpcy5zZXRQZXJtaXNzaW9ucyh0aGlzLl9wZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IHBlcm1pc3Npb247XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uOiBmdW5jdGlvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVybWlzc2lvbnMoKS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIGdldEFkZGl0aW9uYWxEYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbERhdGE7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0QWRkaXRpb25hbERhdGE6IGZ1bmN0aW9uKGFkZGl0aW9uYWxfZGF0YSl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGFkZGl0aW9uYWxfZGF0YSwgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YSA9IGFkZGl0aW9uYWxfZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XTtcbiAgICB9LFxuICAgIC8vc2V0cyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIHNldERhdGFJdGVtKGtleSwgdmFsKXtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufX0ucG9wdWxhdGUodXNlcl9kZWZhdWx0cyk7IC8vaW1tZWRpYXRlbHkgcG9wdWxhdGUgZnJvbSB1c2VyX2RlZmF1bHRzIiwiZXhwb3J0IHt9IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKlxuICogQHR5cGUge3tnZXRFbGVtZW50czogKGZ1bmN0aW9uKCo9LCAqPSk6IEFycmF5KSwgZ2V0RWxlbWVudDogZG9tLmdldEVsZW1lbnQsIGV4aXN0czogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKSwgbXVsdGlwbGVFeGlzdDogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKX19XG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lLCBlcnJvcl9vbl9tdWx0aXBsZSl7XG4gICAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGVsLmxlbmd0aCA+IDEgJiYgZXJyb3Jfb25fbXVsdGlwbGUgKSB0aHJvdyBcIlRvbyBtYW55IERPTSBlbGVtZW50cyBmb3VuZCBpbiBnZXRFbGVtZW50IGZvciBcIitKU09OLnN0cmluZ2lmeShlbCk7XG5cbiAgICAgICAgcmV0dXJuIGVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lKXtcbiAgICAgICAgLy9kZWZhdWx0IHRvIGZhbHNlXG4gICAgICAgIGVycm9yX29uX25vbmUgPSB0eXBlb2YgZXJyb3Jfb25fbm9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogZXJyb3Jfb25fbm9uZTtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWQgb3IgZG9lc24ndCBleGlzdFxuICAgICAgICBpZiggdHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbCApe1xuICAgICAgICAgICAgLy9kbyBub3RoaW5nLCBkZWZhdWx0IGlzIGVtcHR5IGFycmF5XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBpdCdzIGFuIEVsZW1lbnQgb3IgSFRNTERvY3VtZW50IChhIHNpbmd1bGFyIERPTSBlbGVtZW50KVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgKXtcbiAgICAgICAgICAgIC8vYWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIHN0cmluZyB3YXMgcHJvdmlkZWRcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBOb2RlTGlzdCByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCk7XG4gICAgICAgICAgICBlbF9hcnJheSA9IGVsX2FycmF5ID8gQXJyYXkuZnJvbShlbF9hcnJheSkgOiBlbF9hcnJheTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGEganF1ZXJ5IG9iamVjdCB3YXMgcHJvdmlkZWRcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBqUXVlcnkgKXtcbiAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW55dGhpbmdcbiAgICAgICAgICAgIGlmKCBlbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgZWxfYXJyYXkgPSBlbC50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9vdGhlcndpc2UsIHdoYXQgdGhlIGhlY2sgZGlkIHlvdSBwYXNzPyBUaHJvdyBlcnJvci4uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCB2YWx1ZSBwcm92aWRlZCB0byBnZXRFbGVtZW50czogXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggJiYgZXJyb3Jfb25fbm9uZSApe1xuICAgICAgICAgICAgdGhyb3cgXCJGYWlsZWQgdG8gZ2V0IGFycmF5IG9mIERPTSBlbGVtZW50cyBmb3IgXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ob3BlZnVsbHkgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGUgb3JpZ2luYWxseSBwcm92aWRlZCBlbCBpcyBhIHNpbmd1bGFyIG5hdGl2ZSBET00gb2JqZWN0XG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVpY2sgbWV0aG9kIGZvciByZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtkb219XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIGxldCBlbF9hcnJheSA9IHRoaXMuZ2V0RWxlbWVudHMoZWwpO1xuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgZG9tIGVsZW1lbnQgd2l0aCBIVE1MXG4gICAgICpcbiAgICAgKiB1c2VzIC5nZXRFbGVtZW50KCkgc28gZWwgY2FuIGJlIGp1c3QgYWJvdXQgYW55dGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX1cbiAgICAgKi9cbiAgICByZXBsYWNlRWxXaXRoSFRNTDogZnVuY3Rpb24oZWwsIGh0bWwpe1xuICAgICAgICBpZiggdHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7aHRtbH0gaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudChlbCk7XG5cbiAgICAgICAgLy9jcmVhdGUgZWxlbWVudCBmcm9tIEhUTUxcbiAgICAgICAgbGV0IG5ld19lbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2luc2VydCB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIHRoZSBjdXJyZW50XG4gICAgICAgIG5ld19lbCA9IGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld19lbC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXNbMF0sIGVsKTtcblxuICAgICAgICAvL3JlbW92ZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIGVsLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vcmV0dXJuIHRoZSBuZXcgb25lXG4gICAgICAgIHJldHVybiBuZXdfZWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBleGlzdHNcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZXhpc3RzOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzKGVsKS5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBtdWx0aXBsZUV4aXN0OiBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEVsZW1lbnRzKGVsKS5sZW5ndGggPiAxO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLyoqXG4gKiBTaG9ydGhhbmQvY29uc2lzdGVudCBldmVudCBsaXN0ZW5lciBtYW5hZ2VtZW50XG4gKlxuICogQHR5cGUge3tvbkNsaWNrOiAoZnVuY3Rpb24oKj0sICo9KTogKCp8QXJyYXl8ZWwpKSwgb25DaGFuZ2U6IChmdW5jdGlvbigqPSwgKj0pOiAoKnwqfCpbXSkpLCBvZmZDaGFuZ2U6IChmdW5jdGlvbigqPSwgKj0pOiAoKnwqfCpbXSkpLCBvZmZFdmVudFByZXZlbnREZWZhdWx0OiBldmVudHMub2ZmRXZlbnRQcmV2ZW50RGVmYXVsdCwgb2ZmQ2xpY2soKj0sICo9KTogKEFycmF5fGVsKSwgb25TdWJtaXQ6IChmdW5jdGlvbigqPSwgKj0pOiAoKnxBcnJheXxlbCkpLCBvZmZTdWJtaXQ6IChmdW5jdGlvbigqPSwgKj0pOiAoKnxBcnJheXxlbCkpLCBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGV2ZW50cy5vbkV2ZW50UHJldmVudERlZmF1bHQsIHRyaWdnZXI6IGV2ZW50cy50cmlnZ2VyLCBvZmY6IGV2ZW50cy5vZmYsIG9uOiBldmVudHMub259fVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZDbGljayhlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZTdWJtaXQ6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWlubHkgaGVyZSBmb3IgY29uc2lzdGVuY3lcbiAgICAgKlxuICAgICAqIFNob3J0aGFuZCBvbi1jaGFuZ2UgaGFuZGxlclxuICAgICAqIERPRVMgTk9UIHByZXZlbnREZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHVzdWFsbHkgbm90IGRlc2lyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vbihlbCwgJ2NoYW5nZScsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLWNoYW5nZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmQ2hhbmdlOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZihlbCwgJ2NoYW5nZScsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIGFuZCBwcmV2ZW50cyB0aGUgZGVmYXVsdCBldmVudHMgZnJvbSBvY2N1cnJpbmdcbiAgICAgKiAgKGxpa2UgZm9ybXMgc3VibWl0dGluZyBvciBhIGxpbmsgYnJpbmdpbmcgeW91IHRvIGFub3RoZXIgcGFnZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBbZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZFdmVudFByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuXG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIFtlXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBsaXN0ZW5lclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYW4gZXZlbnQgb24gYW4gZWxlbWVudC9lbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGV2ZW50X29wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihlbCwgZXZlbnQsIGV2ZW50X29wdGlvbnMpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50X29wdGlvbnMgPSB0eXBlb2YgZXZlbnRfb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBldmVudF9vcHRpb25zO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGV2ZW50X29wdGlvbnMgfSk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gXCIuL3N0cmluZ3NcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi9ldmVudHNcIjtcblxuZXhwb3J0IHt0eXBlX2NoZWNrcywgc3RyaW5ncywgZG9tLCBldmVudHN9OyIsIi8qKlxuICogTWV0aG9kcyBmb3IgcGVyZm9ybWluZyBjb21tb24gc3RyaW5nIG1hbmlwdWxhdGlvbnNcbiAqXG4gKiBAdHlwZSB7e2dldHRlcjogKGZ1bmN0aW9uKCo9KTogc3RyaW5nKSwgdWNmaXJzdDogKGZ1bmN0aW9uKCo9KTogKCp8c3RyaW5nKSksIHNldHRlcjogKGZ1bmN0aW9uKCo9KTogc3RyaW5nKX19XG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5nZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdnZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0dGVyOiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gJ2dldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5zZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdzZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2V0dGVyOiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gJ3NldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdWNmaXJzdCgpIGZ1bmN0aW9uYWxpdHkgdG8gSlMgKGxpa2UgUEhQKVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICB1Y2ZpcnN0OiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gc3RyaW5nICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpK3N0cmluZy5zbGljZSgxKTtcbiAgICB9XG59OyIsIi8qKlxuICogTWV0aG9kcyBmb3IgY2hlY2tpbmcgZGF0YSB0eXBlcyB3aXRoIG1vcmUgc3BlY2lmaWNpdHlcbiAqXG4gKiBAdHlwZSB7e2lzRGF0YU9iamVjdDogdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0fX1cbiAqL1xuZXhwb3J0IGNvbnN0IHR5cGVfY2hlY2tzID0ge1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgcHJvdmlkZWQga2V5IGluIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgaGF2ZSBhbGwga2V5c1xuICAgICAqIE9wdGlvbmFsbHkgY2Fubm90IGhhdmUgYW55IGtleXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IHRocm93cyBhbiBlcnJvciBpZiBhbnkgY2hlY2sgZmFpbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBrZXlzIC0gZGVmYXVsdDogZG9uJ3QgdmVyaWZ5IGtleXNcbiAgICAgKiBAcGFyYW0gcmVxdWlyZV9hbGxfa2V5cyAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHBhcmFtIGJsb2NrX290aGVyX2tleXMgLSBkZWZhdWx0IGZhbHNlXG4gICAgICogQHBhcmFtIHRocm93X2Vycm9yIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0RhdGFPYmplY3Q6IGZ1bmN0aW9uKHZhbHVlLCBrZXlzLCByZXF1aXJlX2FsbF9rZXlzLCBibG9ja19vdGhlcl9rZXlzLCB0aHJvd19lcnJvcil7XG4gICAgICAgIC8vZGVmYXVsdCBmb3IgdGhyb3dfZXJyb3IgaXMgZmFsc2VcbiAgICAgICAgdGhyb3dfZXJyb3IgPSB0eXBlb2YgdGhyb3dfZXJyb3IgIT09IFwidW5kZWZpbmVkXCIgPyB0aHJvd19lcnJvciA6IGZhbHNlO1xuXG4gICAgICAgIC8vZGVmYXVsdCBmb3IgcmVxdWlyZV9hbGxfa2V5cyBpcyBmYWxzZVxuICAgICAgICByZXF1aXJlX2FsbF9rZXlzID0gdHlwZW9mIHJlcXVpcmVfYWxsX2tleXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXF1aXJlX2FsbF9rZXlzIDogZmFsc2U7XG5cbiAgICAgICAgLy9mb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkX3ZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICAgICAgICAvL2RlZmF1bHQgZXJyb3JfbXNnXG4gICAgICAgIGNvbnN0IGVycm9yX21zZyA9IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kZXRlcm1pbmUgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGNvbnN0IGlzX29iamVjdCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgICAvL2lmIG5vdCBhbiBvYmplY3QsIG51bGwsIG9yIGFuIGFycmF5XG4gICAgICAgIGlmKCAhaXNfb2JqZWN0IHx8IHZhbHVlID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHdlIG5lZWQgdG8gdmVyaWZ5IHRoZSBrZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGtleXMpICkge1xuICAgICAgICAgICAgbGV0IGZvdW5kX2tleSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG1pc3Npbmdfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9rZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5IHdhcyBmb3VuZCwgd2UgZm91bmQgYXRsZWFzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVfa2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kX2tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWYgaXQncyBub3QgZm91bmQsIHdlIGNhbid0IHNheSBhbGwga2V5cyBleGlzdCBpbiB0aGlzIG9iamVjdFxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npbmdfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vaWYgbm90IG9uZSBvZiB0aGUga2V5cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgICBpZiggIWZvdW5kX2tleSApe1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZzogYCtrZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRpZG4ndCBmaW5kIGFsbCB0aGUga2V5c1xuICAgICAgICAgICAgaWYoIHJlcXVpcmVfYWxsX2tleXMgJiYgbWlzc2luZ19rZXlzLmxlbmd0aCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBtaXNzaW5nIGRhdGE6IGArbWlzc2luZ19rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRvbid0IGFsbG93IGFueSBrZXlzIE5PVCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAgICAgICAgaWYoIGJsb2NrX290aGVyX2tleXMgKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5yZWNvZ25pemVkX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoICFrZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVjb2duaXplZF9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIHVucmVjb2duaXplZF9rZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGNvbnRhaW5zIGludmFsaWQgZGF0YTogYCt1bnJlY29nbml6ZWRfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hbGwgY2hlY2tzIHBhc3NlZCEgY29uZ3JhdHMsIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuLi9lcy9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIG9iamVjdHMgZnJvbSAnLi4vZXMvb2JqZWN0cyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5fd3JhcHBlcnMgZnJvbSAnLi4vZXMvcGx1Z2luX3dyYXBwZXJzJztcbmltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tICcuLi9lcy91dGlsaXRpZXMnO1xuXG4vKipcbiAqIEFsbCBqcGFjayBjb21wb25lbnRzIGFyZSBmbGF0dGVuZWQgb3V0IG9mIHRoZWlyIG5hbWVzcGFjZXMgYW5kIHNldCBvbiB3aW5kb3dcbiAqXG4gKiBUaGlzIG1lYW5zIGluc3RlYWQgb2YgY2FsbGluZyBqcGFjay5vYmplY3RzLnVzZXIuZ2V0SWQoKSwgeW91IGNhbiBqdXN0IGNhbGwgdXNlci5nZXRJZCgpXG4gKlxuICogT3IgbGV0J3Mgc2F5IHlvdSBwYXNzIGEgbmFtZXNwYWNlIGxpa2UgXCJqcFwiLCB0aGVuIHlvdSBjYW4gY2FsbDoganAudXNlci5nZXRJZCgpXG4gKlxuICogTm90IHJlY29tbWVuZGVkIChhdGxlYXN0IG5vdCB3aXRob3V0IGEgbmFtZXNwYWNlKVxuICpcbiAqL1xuY29uc3QgZ29HbG9iYWwgPSBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlKycuJyA6IG51bGw7XG5cbiAgICAvL2xvb3AgdGhyb3VnaCBjb21wb25lbnRzLCBvYmplY3RzLCBwbHVnaW5fd3JhcHBlcnMsIGFuZCB1dGlsaXRpZXNcbiAgICBbY29tcG9uZW50cyxvYmplY3RzLHBsdWdpbl93cmFwcGVycyx1dGlsaXRpZXNdLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KXtcbiAgICAgICAgLy9mb3IgZWFjaCBjb21wb25lbnQgd2l0aGluIHRob3NlXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgLy9nZXQgYWN0dWFsIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgICAgICAgICAvL2V4YW1wbGU6IG9iamVjdHMudXNlciBiZWNvbWVzIHdpbmRvdy51c2VyXG4gICAgICAgICAgICAgICAgLy91c2FnZSBhZnRlciBydW5uaW5nIHRoaXM6IHVzZXIuZ2V0SWQoKVxuICAgICAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2UrcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGpwYWNrID0ge2NvbXBvbmVudHMsIG9iamVjdHMsIHBsdWdpbl93cmFwcGVycywgdXRpbGl0aWVzLCBnb0dsb2JhbDogZ29HbG9iYWx9O1xuXG4vL3NldCBqcGFjayBnbG9iYWxseSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGFueXdoZXJlXG5nbG9iYWwuanBhY2sgPSBqcGFjazsiLCJtb2R1bGUuZXhwb3J0cyA9IGF4aW9zOyIsIm1vZHVsZS5leHBvcnRzID0gdXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGw7Il0sInNvdXJjZVJvb3QiOiIifQ==