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

/***/ "./es/AbstractClass.js":
/*!*****************************!*\
  !*** ./es/AbstractClass.js ***!
  \*****************************/
/*! exports provided: AbstractClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractClass", function() { return AbstractClass; });
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type_checks */ "./es/type_checks/index.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ "./es/strings/index.js");



class AbstractClass{
    constructor(){
    }

    /**
     * populates the user object with the provided data
     *
     * @param data
     */
    populate(data){
        const self = this;

        if( typeof this._keys === "undefined" ) throw `Cannot populate object if _keys property is not set`;

        //validate the incoming data object and make sure it only contains these keys
        !_type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(data, this._keys, false, true, true);

        //for each key that is set in the data object, set the value on this
        this._keys.forEach(function(key){
            if( typeof data[key] !== "undefined" ) self[_strings__WEBPACK_IMPORTED_MODULE_1__["strings"].setter(key)](data[key]);
        });

        return this;
    }
}

/***/ }),

/***/ "./es/dom/index.js":
/*!*************************!*\
  !*** ./es/dom/index.js ***!
  \*************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/**
 * HTML DOM helpers
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
        const foundEl = this.getElements(el, error_on_none);

        if( foundEl.length > 1 && error_on_multiple ) throw `More than 1 result found for "${el}"`;

        if( !foundEl.length ) return null;

        return foundEl[0];
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

        if( typeof el === "undefined" || !el ){
            //do nothing, default is empty array
        }
        else if( el instanceof Element || el instanceof HTMLDocument ){
            //add to the array
            el_array.push(el);
        }
        else if (typeof el === 'string') {
            //convert the NodeList returned by querySelectorAll into an array
            el_array = document.querySelectorAll(el);
            el_array = el_array ? Array.from(el_array) : el_array;
        }
        else if( el instanceof jQuery ){
            //if it contains anything
            if( el.length ){
                //get all the elements in an array
                el_array = el.toArray();
            }
        }
        else if( el instanceof NodeList || el instanceof HTMLCollection ){
            el_array = Array.from(el);
        }
        //if it's an array, validate each element
        else if( Array.isArray(el) ){
            el.forEach(function(this_el){
                this_el = dom.getElement(this_el);
                if( this_el ) el_array.push(this_el);
            });
        }
        //otherwise, what the heck did you pass? Throw error...
        else {
            throw `Invalid value: "${el}"`;
        }

        if( !el_array.length && error_on_none ) throw `Failed to find "${el}"`;

        return el_array;
    },

    /**
     * Quick method for removing elements from the DOM
     *
     * @param el
     * @param error_if_not_found
     * @returns {dom}
     */
    remove: function(el, error_if_not_found){
        let el_array = this.getElements(el);
        if( !el_array.length ){
            if( error_if_not_found ) throw `Could not find "${el}"`;
            return this;
        }
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
     * @param error_if_not_found
     * @returns {ChildNode}|null
     */
    replaceElWithHTML: function(el, html, error_if_not_found){
        if( typeof html !== 'string' ) throw `${html} is not a string`;

        const foundEl = this.getElement(el);

        if( !el ){
            if( error_if_not_found ) throw `Could not find "${el}"`;
            return null;
        }

        //create element from HTML
        let newEl = (new DOMParser()).parseFromString(html, "text/html");

        //insert the new element before the current
        newEl = foundEl.parentNode.insertBefore(newEl.documentElement.querySelector('body').childNodes[0], foundEl);

        //remove original element
        foundEl.remove();

        //return the new one
        return newEl;
    },

    /**
     * Determines if an element is visible or not
     *
     * @param el
     * @param error_if_not_found
     * @param error_on_multiple
     * @returns {boolean}
     */
    isVisible(el, error_if_not_found, error_on_multiple) {
        el = this.getElement(el, error_if_not_found, error_on_multiple);

        if( el === null ){
            if( error_if_not_found ) throw `Could not find "${el}"`;
            return false;
        }

        const style = getComputedStyle(el);

        //check display, visibility, and opacity first since they're the most common
        if (style.display === 'none') return false;
        if (style.visibility !== 'visible') return false;
        if (style.opacity === 0) return false;

        //see if the element has a size
        if(el.offsetWidth + el.offsetHeight + el.getBoundingClientRect().height + el.getBoundingClientRect().width === 0) return false;

        //get the outside corners of the element
        const elRect = el.getBoundingClientRect();
        const el_bounds = {
            'top-left': {
                x: elRect.left,
                y: elRect.top
            },
            'top-right': {
                x: elRect.right,
                y: elRect.top
            },
            'bottom-left': {
                x: elRect.left,
                y: elRect.bottom
            },
            'bottom-right': {
                x: elRect.right,
                y: elRect.bottom
            },
            'center': {
                x: elRect.left + el.offsetWidth / 2,
                y: elRect.top + el.offsetHeight / 2
            }
        };

        let inside_viewport = true;
        //make sure the element is inside the viewport
        Object.keys(el_bounds).forEach(function(key){
            var point = el_bounds[key];

            if (point.x < 0) inside_viewport = false; return false;
            if (point.x > (document.documentElement.clientWidth || window.innerWidth)) inside_viewport = false; return false;
            if (point.y < 0) inside_viewport = false; return false;
            if (point.y > (document.documentElement.clientHeight || window.innerHeight)) inside_viewport = false; return false;

            let pointEl = document.elementFromPoint(point.x, point.y);
            if (pointEl !== null) {
                do {
                    if (pointEl === el) return true;
                } while (pointEl = pointEl.parentNode);
            }
        });

        return inside_viewport;
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

/***/ "./es/events/index.js":
/*!****************************!*\
  !*** ./es/events/index.js ***!
  \****************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./es/dom/index.js");


/**
 * Shorthand preventDefault events (and others for consistency)
 */
const events = {

    /**
     * Sets these functions globally so you can use them without a namespace or with a custom one
     *
     * Use at your own risk - may cause conflicts!
     *
     * Example:
     *     jpack.events.setGlobal();
     *     onClick('a', function(){
     *        //do something (the href is prevented)
     *     });
     */
    setGlobal: function(namespace){
        var self = this;

        namespace = typeof namespace === 'string' ? namespace : null;

        //for each function within events
        for (var property in self) {
            //set everything that's a real method in events, except this one
            if (self.hasOwnProperty(property) && property !== 'setGlobal') {
                //set them on window so they're available globally
                if( namespace ){
                    if( typeof window[namespace] === "undefined" ){ window[namespace] = {}; }
                    window[namespace][property] = self[property];
                }else{
                    window[property] = self[property];
                }
            }
        }
    },

    /**
     * Shorthand on-click handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onClick: function(el, handler){
        return events.onEventPreventDefault(el, 'click', handler);
    },

    /**
     * Shorthand on-submit handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onSubmit: function(el, handler){
        return events.onEventPreventDefault(el, 'submit', handler);
    },

    /**
     * Attaches an event handler and prevents the default events from occurring
     *  (like forms submitting or a link bringing you to another page)
     *
     *  Returns the generated handler for future removal
     *
     * @param el
     * @param event
     * @param handler
     * @returns function
     */
    onEventPreventDefault: function(el, event, handler) {
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        const preventedHandler = function(e){
            //Need to understand this better, but it appears when tied to the body element this function
            // receives an array of events with a single item in it?
            if( Array.isArray(e) ) e = e[0];
            e.preventDefault();
            handler.call(this, e);
            return false;
        };

        el_array.forEach(function(el){
            el.addEventListener(event, preventedHandler);
        });

        return preventedHandler;
    },

    /**
     * Adds an event handler
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
     * Removes an event handler
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

/***/ "./es/forms/FormFromURL.js":
/*!*********************************!*\
  !*** ./es/forms/FormFromURL.js ***!
  \*********************************/
/*! exports provided: FormFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFromURL", function() { return FormFromURL; });
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navigation */ "./es/navigation/index.js");
/* harmony import */ var _XHRForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./XHRForm */ "./es/forms/XHRForm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "./es/dom/index.js");





//defaults for the FormFromURL class
const FormFromURLDefaults = {
    incomingElementSelector: null, //the form element or wrapper that you want to retrieve from the URL
    insertIntoElement: null, //what element to put the form into
    onload: function(form){ return this; }, //once the form is loaded onto the page
};

/**
 *
 * FormFromURL
 *
 * This class allows you to grab a form from a URL and returns it to the current page
 *
 * Also handles form submission using XHR and can open a modal to display the form
 *
 */
class FormFromURL extends _XHRForm__WEBPACK_IMPORTED_MODULE_1__["XHRForm"] {

    /**
     * @param url - string
     * @param options - object{incomingElementSelector,insertIntoElement, onload}
     */
    constructor(url, options){
        super(null, options);

        if( typeof url !== "string" ) throw `${url} is not a string`;

        //if options are undefined, set them
        options = typeof options === "undefined" ? {} : options;
        if( typeof options !== "object" ) throw `${options} is not an object`;

        //extend defaults with provided options
        options = {...FormFromURLDefaults, ...options};

        this.setURL(url);
        this.setIncomingElementSelector(options.incomingElementSelector);
        this.setInsertIntoElement(options.insertIntoElement);
        this.onload(options.onload);
    }

    /**
     * Override the parent because it's not required for this class
     *
     * Still keeping it functional but removing all validation
     *
     * @param form
     * @returns {XHRForm}
     */
    setForm(form){
        this._form = form;
        return this;
    }

    /**
     * Set the URL from which the form will be retrieved
     *
     * @param url
     * @returns {form}
     */
    setURL(url){
        if( typeof url !== 'string' ) throw `${url} is not a string`;
        this._url = url;
        return this;
    }

    /**
     * Get the form's URL
     *
     * @returns {*|string}
     */
    getURL(){
        return this._url;
    }

    /**
     * Overrides XHRForm.getFinalSubmitURL to include the URL the form was requested from as an additional fallback
     *
     * @param form
     * @returns {*|string}
     */
    getFinalSubmitURL(form){
        let url = this.getSubmitURL(form);

        //if a function, run it
        if( typeof this._submitURL === "function" ) return this._submitURL(form);

        //if url is null, grab from the form, only if explicitly set
        if( url === null ){
            if( form.attributes.action ){
                url = form.action;
            }
        }

        //if the URL is still null, grab the URL the form was retrieved from
        url = !url ? this.getURL() : url;

        //if the url is STILL null, grab the form's default action (current page)
        if( url === null ){
            url = form.action;
        }

        return url;
    }

    /**
     * If the URL provided returns HTML, this selector will be used to pull the form out
     *
     * If left null, it will assume the entire response is the form's HTML
     *
     * @param selector: string|null
     * @returns {form}
     */
    setIncomingElementSelector(selector){
        if( selector !== null && typeof selector !== 'string' ) throw `${selector} is not a string or null value`;
        this._incomingElementSelector = selector;
        return this;
    }

    /**
     * Returns a selector for the form or a parent of it that will be returned from the URL
     *
     * @returns {*|string}
     */
    getIncomingElementSelector(){
        return this._incomingElementSelector;
    }

    /**
     * Allows you to set a parent element that the form will be inserted into using the default insertForm method
     * Alternatively, you can leave this and override insertForm() and have more control over where it should go
     *
     * Uses dom.getElement() so you can pass a string, jQuery object, object, etc
     * However if more than 1 element is detected, an error will be thrown
     *
     * @param element
     */
    setInsertIntoElement(element){
        this._insertIntoElement = element;
    }

    /**
     * Returns the element the form will be inserted into
     *
     * @returns {*}
     */
    getInsertIntoElement(){
        return this._insertIntoElement;
    }


    /**
     * Get the form from the URL and pass to insertForm
     *
     * There are three main ways to provide the form from your server:
     * 1) Straight HTML. The entire response is the form and that's it.
     * 2) Straight HTML, but the form is only a part of the response so it needs to be parsed out based on a selector.
     * 3) A JSON object containing the key "html" like this: {"html":"<form>your form here</form>"}
     *
     */
    getForm(){
        const self = this;

        _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"].showLoader();
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(this.getURL()).then(function (response) {
            _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"].hideLoader();

            let data = response.data;

            //just in case the server returned the wrong response type and it's actually JSON - ignore errors
            try{ data = typeof data === 'string' ? JSON.parse(data) : data; } catch(e){ }

            //if the response is a string (probably HTML)
            if( typeof data === 'string' ){
                if( typeof self.getIncomingElementSelector() === 'string' ){
                    //parse the incoming HTML
                    const parsed = _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"].parseHTML(data, self.getIncomingElementSelector());
                    //provide the form's HTML in an object containing other details like the route and the full response to insertForm
                    return self.insertForm(parsed, data);
                }
                //otherwise the entire response is assumed to be the form
                return self.insertForm({html:data});
            }
            //if the response is an object (probably JSON)
            else if( typeof data === 'object' ){
                //if HTML was provided in the object
                if( typeof data.html !== "undefined" ){
                    return self.insertForm({html:data.html}, data);
                }
            }

            throw `Unexpected server response ${data}`;
        })
            .catch(function (error) {
                _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"].hideLoader();
                throw error;
            });
    }

    /**
     * Allows you to insert the form wherever you want on the page
     *  Override this method to customize where the form is inserted
     *  (maybe you want to open a modal first and place it there?)
     *
     *  parsed_content.html will always be the HTML
     *
     *  parsed_content may contain other data like route and title if the form was pulled out of
     *     a full HTML page which contains those items
     *
     *  response is the full server response (html string or object from JSON - not provided if the response is only the form's HTML)
     *
     *  form is provided if this is after the form was submitted and HTML was returned form the server
     *
     *  @param parsed_content
     *  @param response
     *  @param form
     *  @returns {*|Element|HTMLDocument}
     */
    insertForm(parsed_content, response, form){
        //selector for where the form will go
        let el = this.getInsertIntoElement();

        //if not provided
        if( el === null ) throw 'Cannot determine where to insert form. Overwrite insertForm() or provide insertIntoElement';

        //get the container element - error if not found
        el = _dom__WEBPACK_IMPORTED_MODULE_3__["dom"].getElement(el, true);

        //put the form in the container element
        el.innerHTML = parsed_content.html;

        //find the newly added form
        form = el.querySelector('form');

        //attach an on-submit listener to send the form's values via XHR
        this.attachSubmitHandler(form);

        //run the onload callback now that the form is there
        this.triggerOnload(form);

        return el;
    }

    /**
     * Use this method to modify the form immediately after it's displayed
     *
     * You'll likely want to attach plugins for datepickers/dropdowns, or maybe hide a field based on the value of another
     *
     * @param callback
     * @returns {form}
     */
    onload(callback){
        if( typeof callback !== 'function' ) throw `${callback} is not a function`;
        if( typeof this._onload === "undefined" ) this._onload = [];
        this._onload.push(callback);
        return this;
    }

    /**
     * Clears all onload callbacks you've set
     *
     * @returns {FormFromURL}
     */
    clearOnloadCallbacks(){
        this._onload = [];
        return this;
    }

    /**
     * @param form
     */
    triggerOnload(form){
        if(typeof this._onload === "undefined" ) return false;

        this._onload.forEach(function(onload){
            onload(form);
        });
        return this;
    }
}

/***/ }),

/***/ "./es/forms/XHRForm.js":
/*!*****************************!*\
  !*** ./es/forms/XHRForm.js ***!
  \*****************************/
/*! exports provided: XHRForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "XHRForm", function() { return XHRForm; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./es/dom/index.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navigation */ "./es/navigation/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");

//defaults for the XHRForm class
const XHRFormDefaults = {
    xhrSubmit: true, //submit the form using XHR instead of the default action
    submitURL:null, //will be grabbed from the form's action attribute, or fallback to the URL the form was retrieved from
    submitMethod:null, //will be grabbed from the form's method attribute, or fallback to "POST"
    onError: function(error, response, form){ alert(error); }, //called when the form is submitted and fails
    onSuccess: function(response, form){ //called when the form is submitted successfully
        if(typeof response.success === "string"){ alert(response.success); }
        else{ alert("Your submission has been received"); }
    },
    //validate the form, display any errors and return false to block submission
    validateForm: function(form){
        //add .was-validated for bootstrap to show errors
        form.classList.add('was-validated');

        //if there are any :invalid elements, the form is not valid
        const is_valid = !form.querySelector(':invalid');

        //if it's valid, clear the validation indicators
        if( is_valid ) form.classList.remove('was-validated');

        return is_valid;
    }
};

/**
 * XHRForm
 *
 * This class allows you to submit a form via XHR and easily handle the results
 */
class XHRForm {

    /**
     * Form can be just about any datatype - uses dom.getElement()
     *
     * @param form
     * @param options
     */
    constructor(form, options){

        //if options are undefined, set them
        options = typeof options === "undefined" ? {} : options;
        if( typeof options !== "object" ) throw `${options} is not an object`;

        //extend defaults with provided options
        options = {...XHRFormDefaults, ...options};

        this.setForm(form);
        this.setValidateCallback(options.validateForm);
        this.setXHRSubmit(options.xhrSubmit);
        this.setSubmitMethod(options.submitMethod);
        this.setSubmitURL(options.submitURL);
        this.onSuccess(options.onSuccess);
        this.onError(options.onError);
    }

    /**
     *
     * @param callback
     * @returns {XHRForm}
     */
    setValidateCallback(callback){
        if( typeof callback !== "function" ) throw `${callback} is not a function`;
        this._validateCallback = callback;
        return this;
    }

    /**
     * Runs the validate callback and passes the form
     *
     * @returns {null}
     */
    validate(form){
        if( typeof form === "undefined" ) form = this.getForm();
        return this._validateCallback(form);
    }

    /**
     * Set the form element
     *
     * @param form
     * @returns {XHRForm}
     */
    setForm(form){
        if( !form || typeof form === 'undefined' ) throw `Form element is required`;

        form = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElement(form, true, true);
        if( !form ) throw `Invalid form element received`;

        this._form = form;

        return this;
    }

    /**
     * Get the form element
     *
     * @returns {*|Element|HTMLDocument}
     */
    getForm(){
        return this._form;
    }

    /**
     * Whether or not you want the form to be submitted using an XHR request
     *
     * @param enabled - bool
     */
    setXHRSubmit(enabled){
        this._xhrSubmit = !!enabled;
        return this;
    }

    /**
     * How to submit the form - if set to null, the method will be pulled from the form's
     *  method attribute or fallback to "POST"
     *
     * @param method
     * @returns {form}
     */
    setSubmitMethod(method){
        if( typeof method !== "string" && method !== null ) throw `${method} is not a string or null`;
        this._submitMethod = method;
        return this;
    }

    /**
     * Gets the form submission method (POST, GET, etc)
     *
     * @returns {*|string}
     */
    getSubmitMethod(){
        return this._submitMethod;
    }

    /**
     * The URL to submit the form to
     *
     * If null, the form's action attribute will be used.
     * Use a function if you want to dynamically generate the URL just prior to the request
     *  - the function will receive the form as a param
     * Generally speaking a string is sufficient
     *
     * @param url
     * @returns {form}
     */
    setSubmitURL(url){
        if( typeof url !== "string"
            && typeof url !== "function"
            && url !== null ) throw `${url} is not a string, function, or null`;

        this._submitURL = url;
        return this;
    }

    /**
     * Gets the URL the form will be submitted to
     *
     * @returns {*|string|*}
     */
    getSubmitURL(){
        return this._submitURL;
    }

    /**
     * Gets the actual submit URL after running the function (if it is one), and turning to fallbacks
     *
     * @param form
     * @returns {*|string}
     */
    getFinalSubmitURL(form){
        let url = this.getSubmitURL(form);

        //if a function, run it
        if( typeof this._submitURL === "function" ) return this._submitURL(form);

        //if the URL is null, grab from the form
        if( url === null ){
            return form.action;
        }

        return url;
    }

    /**
     * Attaches the on submit handler (only if xhrSubmit is true)
     *
     * Pass the form or form selector
     */
    attachSubmitHandler(form){
        if( !this._xhrSubmit ) return;

        //if not passed, get it from this object
        if( typeof form === "undefined" ) {
            form = this.getForm();
        }else {
            form = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElement(form);
        }

        if( !form ) throw `Form element not received, cannot attach submit handler`;

        const self = this;

        form.addEventListener('submit', function(e){
            //if xhr submit is disabled, don't block the default action
            if( !self._xhrSubmit ) return true;
            e.preventDefault();
            self.submitForm(form);
            return false;
        });

        return this;
    }

    /**
     * Set a callback function to run when the form is submitted successfully
     *
     * Your function will receive 2 params, the first is the response from the server and the second is the form on the page
     *
     * @param callback
     * @returns {form}
     */
    onSuccess(callback){
        if( typeof callback !== "function" ) throw `${callback} is not a function`;
        if( typeof this._onSuccess === "undefined" ) this._onSuccess = [];
        this._onSuccess.push(callback);
        return this;
    }

    /**
     * Removes all onSuccess callbacks you've set
     */
    clearOnSuccessCallbacks(){
        this._onSuccess = [];
        return this;
    }

    /**
     * Triggers all onSuccess callbacks
     *
     * @param response
     * @param form
     */
    triggerOnSuccess(response, form){
        if(typeof this._onSuccess === "undefined" ) return false;
        this._onSuccess.forEach(function(onSuccess){
            onSuccess(response, form);
        });
        return this;
    }

    /**
     * Add a callback function to run when the form is submitted successfully
     *
     * @param callback
     * @returns {FormFromURL}
     */
    onError(callback){
        if( typeof callback !== "function" ) throw `${callback} is not a function`;
        if( typeof this._onError === "undefined" ) this._onError = [];
        this._onError.push(callback);
        return this;
    }

    /**
     * Clears all onError callbacks you've set
     * @returns {XHRForm}
     */
    clearOnErrorCallbacks(){
        this._onError = [];
        return this;
    }

    /**
     * Triggers the onError callbacks
     *
     * @param error
     * @param response
     * @param form
     * @returns {XHRForm}
     */
    triggerOnError(error, response, form){
        if(typeof this._onError === "undefined" ) return false;
        this._onError.forEach(function(onError){
            onError(error, response, form);
        });
        return this;
    }

    /**
     * Submits the form using XHR
     *
     * 1) Determines the URL
     * 2) Determines the method (GET, POST, PATCH, etc)
     * 3) Determines if the form is valid
     * 4) Gets the form's values
     * 5) Submits the form
     * 6) Replaces the form, runs onError, or runs onSuccess based on the response (see next line)
     *  Response Type = Action Taken
     *    string html with form inside = replace form
     *    string html with incomingElementSelector set, but not found = kickoff onError
     *    string - replace form on page with entire response
     *    object.html = replace form
     *    object.error = kickoff onError
     *    object in general = kickoff onSuccess
     *
     * @param form
     * @returns {form|boolean}
     */
    submitForm(form) {
        //block multiple form submissions at the same time until this one is complete
        if( typeof this._processing === "undefined" ) this._processing = false;
        if( this._processing ) return false;

        this._processing = true;

        //cache for use inside other scopes
        const self = this;

        //get the provided submit URL
        let url = this.getFinalSubmitURL(form);

        //get the provided submit method
        let method = this.getSubmitMethod();
        //if it's null, grab it from the form
        if( method === null ){
            if( typeof form.attributes.method !== 'undefined' ){ //check that it was set explicitly
                method = form.method; //grab JUST the value
            }
        }
        //default to post if we still don't have a method and lowercase anything that was provided
        method = !method ? 'post' : method.toLowerCase();

        //if not valid, stop here until they resubmit
        if (!this.validate(form)){
            this._processing = false;
            return false;
        }

        _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"].showLoader();

        //get form values
        const form_values = Array.from(
            this.getFormValues(form),
            e => e.map(encodeURIComponent).join('=')
        ).join('&');

        axios__WEBPACK_IMPORTED_MODULE_2___default()({
            url: url,
            method: method,
            data: form_values,
        }).then(function (response) {
            _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"].hideLoader();
            self._processing = false;

            let data = response.data;

            //just in case the server returned the wrong response type and it's actually JSON - ignore errors
            try{ data = typeof data === 'string' ? JSON.parse(data) : data; } catch(e){ }

            //if the response is a string, it's probably/hopefully the form with inline errors
            if( typeof data === 'string' ){
                //if we are looking for an element within the response
                if( typeof self.getIncomingElementSelector() === 'string' ){
                    //parse the incoming HTML
                    const parsed = _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"].parseHTML(data, self.getIncomingElementSelector());
                    //if the form was not found in it, let's assume it doesn't contain the form. If not, then maybe
                    if( !parsed.html.length ){
                        return self.triggerOnError(`${self.getIncomingElementSelector()} could not be found in response from the server`, data, form);
                    }
                    //provide the form's HTML in an object containing other details like the route and the full response to insertForm
                    return self.insertForm(parsed, data, form);
                }
                return self.insertForm({html:data}, data, form);
            }
            //if the response is an object, it's probably JSON
            else if( typeof data === 'object' ){
                //if it contains the HTML, just pop it back on the page
                if( data.html ){
                    return self.insertForm({html:data.html}, data, form);
                }

                //if it contains an error message, trigger the callback
                if( data.error ){
                    return self.triggerOnError(data.error, data, form);
                }

                //if it doesn't APPEAR to be the form again, or an error, let's call it a success
                return self.triggerOnSuccess(data, form)
            }
        })
        .catch(function (error) {
            _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"].hideLoader();
            self._processing = false;
            throw error;
        });

        return this;
    }

    /**
     * Returns an object containing all form values to be submitted
     *
     * Override/extend this if you want to manipulate the data prior to submission
     *
     * @returns FormData
     */
    getFormValues(form){
        return new FormData(form);
    }
}

/***/ }),

/***/ "./es/forms/index.js":
/*!***************************!*\
  !*** ./es/forms/index.js ***!
  \***************************/
/*! exports provided: XHRForm, FormFromURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _XHRForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./XHRForm */ "./es/forms/XHRForm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "XHRForm", function() { return _XHRForm__WEBPACK_IMPORTED_MODULE_0__["XHRForm"]; });

/* harmony import */ var _FormFromURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormFromURL */ "./es/forms/FormFromURL.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormFromURL", function() { return _FormFromURL__WEBPACK_IMPORTED_MODULE_1__["FormFromURL"]; });






/***/ }),

/***/ "./es/navigation/index.js":
/*!********************************!*\
  !*** ./es/navigation/index.js ***!
  \********************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./es/dom/index.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../request */ "./es/request/index.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../events */ "./es/events/index.js");





/**
 * Allows you to simulate a page change by using an XHR request to grab content and replace it on the current page
 *
 * Automatically updates the browser's history, swaps out meta tags, updates the title, and more
 *
 * Use onLoad and onUnload hooks to add additional logic for things like triggering a google analytics page view
 *  or scrolling to the top of the new page
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
    setPassthroughData: function (data) {
        this._passthroughData = data;
        return this;
    },

    /**
     * Clears data provided for the next page
     *
     * @returns {navigation}
     */
    clearPassthroughData: function () {
        this.setPassthroughData(null);
        return this;
    },

    /**
     * Returns any data that has been set for passing to subsequent pages
     *
     * @param data
     * @returns {null}
     */
    getPassThroughData: function (data) {
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
    setIncomingElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} is not a string`;
        this._incomingElementSelector = selector_string;
    },

    /**
     * Returns the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @returns {string}
     */
    getIncomingElement: function () {
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
    setReplaceElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} is not a string`;
        this._replaceElementSelector = selector_string;
    },

    /**
     * Returns the selectors string for the element on the current page that will be replaced with incoming HTML
     *
     * @returns {string}
     */
    getReplaceElement: function () {
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
    load: function (url, callback, incoming_el, replace_el, push_state) {
        if (typeof url !== 'string') throw `Provided URL (${url}) is not a string`;

        incoming_el = typeof incoming_el == 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;
        push_state = typeof push_state === 'undefined' ? true : push_state;

        if (typeof incoming_el !== 'string') throw `Provided incoming_el (${incoming_el}) is not a string`;
        if (typeof replace_el !== 'string') throw `Provided replace_el (${replace_el}) is not a string`;

        navigation.showLoader();

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
            navigation.hideLoader();

            navigation.replacePageContent(response.data, url, incoming_el, replace_el, push_state);

            //if a callback was provided, run it and provide the parent element
            if (typeof callback === 'function') {
                //wait for the onunload callbacks to run and the new content to be put on the page first
                window.setTimeout(function () {
                    callback(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), incoming_el, navigation.getPassThroughData());
                }, 105);
            }
        }).catch(function (axios_error) {
            navigation.hideLoader();
            navigation.triggerNavigationFailure(axios_error.response.statusText, axios_error);
            throw axios_error.response.statusText;
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
    setLoaderDelay: function (delay_in_ms) {
        if (typeof delay_in_ms !== "number") throw `${delay_in_ms} is not an integer`;
        this._loaderDelay = delay_in_ms;
        return this;
    },

    /**
     * Gets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * @returns {number}
     */
    getLoaderDelay: function () {
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
    getLoaderEl: function () {
        if (!this.loaderEnabled) return;
        if (navigation.navLoaderCached) return navigation.navLoaderCached;

        //prepend the loader elements
        let div = document.createElement('div');
        div.classList = this._loaderClasses;
        let inner_div = document.createElement('div');
        inner_div.classList = this._loaderInnerDivClasses;
        div.append(inner_div);
        document.body.prepend(div);

        //get and cache a reference to it for future requests
        navigation.navLoaderCached = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement('.page-navigation-loader');

        return navigation.navLoaderCached;
    },

    /**
     * Shows a loader at the top of the page if the request takes more than the delay set above to complete
     */
    showLoader: function () {
        if (!this.loaderEnabled) return;

        navigation.loader_timeout = window.setTimeout(function () {
            navigation.getLoaderEl().classList.add('active');
        }, this.getLoaderDelay());

        return this;
    },

    /**
     * Hides the loader at the top of the page
     */
    hideLoader: function () {
        if (!this.loaderEnabled) return;

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
    parseHTML(html, parent_el) {
        //default to null if not provided
        parent_el = typeof parent_el === 'undefined' ? null : parent_el;

        //must be a string or null
        if (typeof parent_el !== 'string' && parent_el !== null) throw `Provided parent_el (${parent_el}) is not a string or null`;

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
        if (parent_el) {
            var sel = doc.querySelector(parent_el);
            //if couldn't find the element
            if (!sel) {
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
            title: title,
            route: route,
            metas: metas,
            links: links,
            body_classes: body_classes,
            html: new_html
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
    getRouteFromMeta: function (html) {
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
    replacePageContent(html, url, incoming_el, replace_el, push_state) {
        var self = this;

        push_state = typeof push_state === 'undefined' ? true : push_state;

        incoming_el = typeof incoming_el === 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;

        if (typeof url !== 'string') throw `Provided url (${url}) is not a string`;
        if (typeof incoming_el !== 'string') throw `Provided incoming_el (${incoming_el}) is not a string`;
        if (typeof replace_el !== 'string') throw `Provided replace_el (${replace_el}) is not a string`;

        //trigger nav complete event
        //get replace_el again because it was replaced
        navigation.triggerUnload(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el, this.getRouteFromMeta());

        //very slight 100ms delay to let the on unload handlers run first
        window.setTimeout(function () {
            var parsed = navigation.parseHTML(html, incoming_el);

            //if there is HTML to put on the page
            if (parsed.html.length) {

                //remove all meta tags and replace from new page
                _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('meta');
                document.head.append(parsed.metas);

                //add the canonical link
                // - possibly other tags will need to be whitelisted in the future.
                // - the main concern is not putting JS/CSS into the current page that shouldn't be
                _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('[rel="canonical"]');
                Array.from(parsed.links).forEach(function (link) {
                    document.head.append(link);
                });

                //add body classes
                document.body.classList = parsed.body_classes;

                //push the state to the browser's history
                push_state && history.pushState({url: url}, parsed.title, url);

                //update the tab/page title
                navigation.setTitle(parsed.title);

                //replace content on the page
                const new_content = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].replaceElWithHTML(replace_el, parsed.html);

                //trigger nav complete event
                navigation.triggerOnLoad(new_content, incoming_el, replace_el, parsed.route);

                //if the replace_el is the same as getReplaceElement(),
                // then it should be updated to whatever the incoming_el is because it no longer exists
                if (self.getReplaceElement() !== replace_el) {
                    self.setReplaceElement(incoming_el);
                }
            }
        }, 100);

        return this;
    },

    /**
     * Refreshes the current page using .load()
     *
     * @returns {navigation}
     */
    reload: function (callback) {
        callback = typeof callback !== 'function' ? null : callback;
        navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), callback);
        return this;
    },

    /**
     * Performs a full refresh of the current URL
     *
     * @returns {navigation}
     */
    fullReload: function () {
        navigation.showLoader();
        window.location.reload();
    },

    /**
     * Sends the user to a new page without XHR
     *
     * @param url
     */
    redirect: function (url) {
        navigation.showLoader();
        window.location.href = url;
    },

    /**
     * Sets the title of the page
     *
     * @param title
     * @returns {navigation}
     */
    setTitle: function (title) {
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
    onLoad: function (callback) {
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.complete', callback);
        return this;
    },

    /**
     * When leaving a page you might need to destroy some plugins or something
     *
     * @param callback
     * @returns {navigation}
     */
    onUnload: function (callback) {
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.started', callback);
        return this;
    },

    /**
     * When the new page fails to load, you should probably tell the user
     *
     * @param callback
     * @returns {navigation}
     */
    onNavigationFailure: function (callback) {
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.failed', callback);
        return this;
    },

    /**
     * We're on a new page, tell the world.
     *
     * Also includes the route of the new page (if it exists in a meta tag) so that you can kick off JS specific to that page
     *
     * @param el
     * @param el_selector
     * @param replaced_selector
     * @param route
     */
    triggerOnLoad: function (el, el_selector, replaced_selector, route) {
        route = typeof route !== 'undefined' ? route : navigation.getRouteFromMeta();
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.complete', {
            el: el,
            el_selector: el_selector,
            replaced_selector: replaced_selector,
            route: route,
            data: this.getPassThroughData()
        });

        return this;
    },

    /**
     * We're leaving the last page, tell the world.
     *
     * @param el
     * @param el_selector
     * @param route
     */
    triggerUnload: function (el, el_selector, route) {
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.started', {el: el, el_selector: el_selector, route: route});
        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     * @param axios_error
     */
    triggerNavigationFailure: function (error, axios_error) {
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.failed', {error: error, axios_error: axios_error});
        return this;
    },

    /**
     * Attaches event handlers to track the browser's history buttons (back/forward)
     *
     * @todo: Investigate possible issue with chrome caching back button contents and not loading the entire page
     */
    initHistoryHandlers: function () {
        //forward button
        window.onpushstate = function (e) {
            navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function (e) {
            navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString(), null, null, null, false);
        };

        return this;
    },
};

/***/ }),

/***/ "./es/request/index.js":
/*!*****************************!*\
  !*** ./es/request/index.js ***!
  \*****************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
__webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");

/**
 * Allows you to get details about the current request easily, including querystring variables
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

/***/ "./es/site/index.js":
/*!**************************!*\
  !*** ./es/site/index.js ***!
  \**************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Site", function() { return Site; });
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type_checks */ "./es/type_checks/index.js");
/* harmony import */ var _AbstractClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractClass */ "./es/AbstractClass.js");



//create an object of default values
const site_defaults = {
    id: null,
    name:null,
    config:{},
};

/**
 *
 * Site (for multi-tenant applications)
 *
 * Class for storing and interacting with the current website's id, name, and config options
 *
 */
class Site extends _AbstractClass__WEBPACK_IMPORTED_MODULE_1__["AbstractClass"] {
    constructor(data){
        super();

        this._keys = ['id', 'name', 'config'];

        if( typeof data === "undefined" ) return this;

        //extend user_defaults with incoming data
        data = {...site_defaults, ...data};

        this.populate(data);
    }

    getId() {
        return this._id;
    }

    setId(id) {
        this._id = id;
        return this;
    }

    //gets the website's name
    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
        return this;
    }

    //returns all config data
    getConfig() {
        return this._config;
    }

    //sets all config data using the provided object
    setConfig(config) {
        //must be a data object, even if it's empty
        _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(config, null, false, false, true);

        this._config = config;
        return this;
    }

    //returns an individual config value or null if it's not defined
    getConfigItem(key) {
        return typeof this._config[key] === "undefined" ? null : this._config[key];
    }

    //adds or updates a value in the config object
    setConfigItem(key, val) {
        this._config[key] = val;
        return this;
    }
}

/***/ }),

/***/ "./es/strings/index.js":
/*!*****************************!*\
  !*** ./es/strings/index.js ***!
  \*****************************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * Methods for performing common string manipulations
 *
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

/***/ "./es/toggle/ToggleOnMobile.js":
/*!*************************************!*\
  !*** ./es/toggle/ToggleOnMobile.js ***!
  \*************************************/
/*! exports provided: ToggleOnMobile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleOnMobile", function() { return ToggleOnMobile; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./es/events/index.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./es/dom/index.js");



/**
 * Toggles an element on click of a button, click outside the element (if it's visible), or on window resize
 *
 * The breakpoint is based on visibility of the button.
 *   If the button is visible, the element will not be (unless the button is clicked)
 *   If the button is hidden, the element will be visible
 *
 * No styles are provided with this component so feel free to go crazy.
 *   There's a lot you can do when a single class is toggled.
 *
 * Use cases:
 * 1) Change from a sidebar on desktop to a popup on mobile
 * 2) Change from an inline menu on desktop to a slide-in on mobile
 * ...I'm sure you can think of some
 *
 */
class ToggleOnMobile{
    /**
     *
     * @param btn
     * @param toggle_el
     * @param toggle_class
     * @param hide_on_outside_click
     */
    constructor(btn, toggle_el, toggle_class, hide_on_outside_click){
        //set the elements
        this.btn = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(btn, true, true);
        this.toggle_el = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(toggle_el, true, true);

        //default to true
        this.hide_on_outside_click = typeof hide_on_outside_click !== "boolean" ? true : hide_on_outside_click;

        //if not a string, default to "visible"
        this.toggle_class = typeof toggle_class !== 'string' ? 'visible' : toggle_class;
    }

    /**
     * Adds event handlers and runs onWindowResize immediately to set the initial class
     */
    init(){
        //to be used inside the event handlers
        const self = this;

        //create a throttled window resize handler
        let throttle;
        this.onWindowResize = function(){
            window.clearTimeout(throttle);
            window.setTimeout(function(){
                if( _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].isVisible(self.btn) ){
                    self.toggle_el.classList.remove(self.toggle_class);
                }else {
                    self.toggle_el.classList.add(self.toggle_class);
                }
            }, 200);
        };

        if( this.hide_on_outside_click ) {
            this.onClickOutside = function (e) {
                let target_el = e.target;

                //do nothing if the click was on the button
                if (target_el === self.btn) return false;

                //do nothing if the click was inside the button
                do {
                    if (self.btn === target_el) return false;
                } while (target_el = target_el.parentNode);

                target_el = e.target;

                //do nothing if the click was on the element we are toggling
                if (target_el === self.toggle_el) return false;

                //do nothing if the click was inside the element we are toggling
                do {
                    if (self.toggle_el === target_el) return false;
                } while (target_el = target_el.parentNode);

                //otherwise hide it
                self.toggle_el.classList.remove(self.toggle_class);
            };

            _events__WEBPACK_IMPORTED_MODULE_0__["events"].on('body', 'click', this.onClickOutside);
        }

        this.onClickToggleBtn = _events__WEBPACK_IMPORTED_MODULE_0__["events"].onClick(this.btn, function(){
            self.toggle_el.classList.toggle(self.toggle_class);
        });

        window.addEventListener('resize', this.onWindowResize);

        this.onWindowResize();

        return this;
    }

    /**
     * Removes all event listeners
     */
    destroy(){
        if( this.hide_on_outside_click ) {
            _events__WEBPACK_IMPORTED_MODULE_0__["events"].off('body', 'click', this.onClickOutside);
        }
        _events__WEBPACK_IMPORTED_MODULE_0__["events"].off(this.btn, 'click', this.onClickToggleBtn);
        window.removeEventListener('resize', this.onWindowResize);
    }
}

/***/ }),

/***/ "./es/type_checks/index.js":
/*!*********************************!*\
  !*** ./es/type_checks/index.js ***!
  \*********************************/
/*! exports provided: type_checks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type_checks", function() { return type_checks; });
/**
 * Methods for checking data types with more specificity
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

/***/ "./es/user/index.js":
/*!**************************!*\
  !*** ./es/user/index.js ***!
  \**************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type_checks */ "./es/type_checks/index.js");
/* harmony import */ var _AbstractClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../AbstractClass */ "./es/AbstractClass.js");



//create an object of default values
const user_defaults = {
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

/**
 *
 * User
 *
 * Class for storing and interacting with a user and their permissions
 *
 */
class User extends _AbstractClass__WEBPACK_IMPORTED_MODULE_1__["AbstractClass"]{
    constructor(data) {
        super();
        
        this._keys = ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData']; 
        
        if( typeof data === "undefined" ) return this;

        //extend user_defaults with incoming data
        data = {...user_defaults, ...data};
        
        this.populate(data);
    }

    setId(id){
        this._id = id;
        return this;
    }
    getId(){
        return this._id;
    }

    setIsGuest(is_guest){
        this._isGuest = is_guest;
        return this;
    }
    getIsGuest(){
        return this._isGuest;
    }

    setIsAdmin(is_admin){
        this._isAdmin = is_admin;
        return this;
    }
    getIsAdmin(){
        return this._isAdmin;
    }

    setUsername(username){
        this._username = username;
        return this;
    }
    getUsername(){
        return this._username;
    }

    getFname(){
        return this._fname;
    }
    setFname(first_name){
        this._fname = first_name;
        return this;
    }

    getLname(){
        return this._lname;
    }
    setLname(last_name){
        this._lname = last_name;
        return this;
    }

    //quick way to get fname and lname
    getName(){
        return this.getFname() + ' ' + this.getLname();
    }

    getEmail(){
        return this._email;
    }
    setEmail(email){
        this._email = email;
        return this;
    }

    getPhone(){
        return this._phone;
    }
    setPhone(phone){
        this._phone = phone;
        return this;
    }

    //returns all permissions for this user
    getPermissions(){
        return this._permissions;
    }
    //sets all permissions for this user
    setPermissions(permissions){
        if( !Array.isArray(permissions) ) throw "setPermissions requires an array";

        this._permissions = permissions;
        return this;
    }
    //adds a single permission to this user
    addPermission(permission){
        this._permissions.push(permission);
        return this;
    }
    //Removes a single permission from this user
    removePermission(permission){
        this.setPermissions(this._permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    }
    //returns true if the user has the provided permission
    hasPermission(permission){
        return this.getPermissions().includes(permission);
    }

    //returns all additional data for this user
    getAdditionalData(){
        return this._additionalData;
    }
    //sets all additional data for this user
    setAdditionalData(additional_data){
        //must be a data object, even if it's empty
        _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(additional_data, null, false, false, true);

        this._additionalData = additional_data;
        return this;
    }
    //returns a single additional data value for this user
    getDataItem(key){
        return typeof this._additionalData[key] === "undefined" ? null : this._additionalData[key];
    }
    //sets a single additional data value for this user
    setDataItem(key, val){
        this._additionalData[key] = val;
        return this;
    }
}

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function(){var k;function m(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var p="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},q="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;function r(){r=function(){};q.Symbol||(q.Symbol=u)}function v(a,b){this.s=a;p(this,"description",{configurable:!0,writable:!0,value:b})}
v.prototype.toString=function(){return this.s};var u=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new v("jscomp_symbol_"+(c||"")+"_"+b++,c)}var b=0;return a}();function w(){r();var a=q.Symbol.iterator;a||(a=q.Symbol.iterator=q.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&p(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return x(m(this))}});w=function(){}}
function x(a){w();a={next:a};a[q.Symbol.iterator]=function(){return this};return a}function y(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:m(a)}}var z;if("function"==typeof Object.setPrototypeOf)z=Object.setPrototypeOf;else{var A;a:{var B={v:!0},C={};try{C.__proto__=B;A=C.v;break a}catch(a){}A=!1}z=A?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var D=z;
function E(){this.h=!1;this.c=null;this.o=void 0;this.b=1;this.m=this.w=0;this.g=null}function F(a){if(a.h)throw new TypeError("Generator is already running");a.h=!0}E.prototype.i=function(a){this.o=a};E.prototype.j=function(a){this.g={A:a,B:!0};this.b=this.w||this.m};E.prototype["return"]=function(a){this.g={"return":a};this.b=this.m};function G(a,b,c){a.b=c;return{value:b}}function H(a){this.C=a;this.l=[];for(var b in a)this.l.push(b);this.l.reverse()}function I(a){this.a=new E;this.D=a}
I.prototype.i=function(a){F(this.a);if(this.a.c)return J(this,this.a.c.next,a,this.a.i);this.a.i(a);return K(this)};function L(a,b){F(a.a);var c=a.a.c;if(c)return J(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.a["return"]);a.a["return"](b);return K(a)}I.prototype.j=function(a){F(this.a);if(this.a.c)return J(this,this.a.c["throw"],a,this.a.i);this.a.j(a);return K(this)};
function J(a,b,c,d){try{var e=b.call(a.a.c,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.a.h=!1,e;var f=e.value}catch(g){return a.a.c=null,a.a.j(g),K(a)}a.a.c=null;d.call(a.a,f);return K(a)}function K(a){for(;a.a.b;)try{var b=a.D(a.a);if(b)return a.a.h=!1,{value:b.value,done:!1}}catch(c){a.a.o=void 0,a.a.j(c)}a.a.h=!1;if(a.a.g){b=a.a.g;a.a.g=null;if(b.B)throw b.A;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function M(a){this.next=function(b){return a.i(b)};this["throw"]=function(b){return a.j(b)};this["return"]=function(b){return L(a,b)};w();this[Symbol.iterator]=function(){return this}}function N(a,b){var c=new M(new I(b));D&&D(c,a.prototype);return c}
if("function"===typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){"content-type"===d.toLowerCase()&&(this.u=!0);return aa.call(this,d,e)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&
(T.navigator.sendBeacon=function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/url-search-params-polyfill/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/url-search-params-polyfill/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function(self) {
    'use strict';

    var nativeURLSearchParams = (self.URLSearchParams && self.URLSearchParams.prototype.get) ? self.URLSearchParams : null,
        isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
        // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
        decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+'),
        __URLSearchParams__ = "__URLSearchParams__",
        // Fix bug in Edge which cannot encode ' &' correctly
        encodesAmpersandsCorrectly = nativeURLSearchParams ? (function() {
            var ampersandTest = new nativeURLSearchParams();
            ampersandTest.append('s', ' &');
            return ampersandTest.toString() === 's=+%26';
        })() : true,
        prototype = URLSearchParamsPolyfill.prototype,
        iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
        return;
    }


    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill(search) {
        search = search || "";

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
            search = search.toString();
        }
        this [__URLSearchParams__] = parseToDict(search);
    }


    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function(name, value) {
        appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype['delete'] = function(name) {
        delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function(name) {
        return name in this [__URLSearchParams__];
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set(name, value) {
        this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };

    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var forSureUsePolyfill = !decodesPlusesCorrectly;
    var useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy)
    /*
     * Apply polifill to global object and append other prototype into it
     */
    Object.defineProperty(self, 'URLSearchParams', {
        value: (useProxy ?
            // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
            new Proxy(nativeURLSearchParams, {
                construct: function(target, args) {
                    return new target((new URLSearchParamsPolyfill(args[0]).toString()));
                }
            }) :
            URLSearchParamsPolyfill)
    });

    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function(name) {
            dict[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };

    /**
     * Sort all name-value pairs
     */
    USPProto.sort = USPProto.sort || function() {
        var dict = parseToDict(this.toString()), keys = [], k, i, j;
        for (k in dict) {
            keys.push(k);
        }
        keys.sort();

        for (i = 0; i < keys.length; i++) {
            this['delete'](keys[i]);
        }
        for (i = 0; i < keys.length; i++) {
            var key = keys[i], values = dict[key];
            for (j = 0; j < values.length; j++) {
                this.append(key, values[j]);
            }
        }
    };

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.keys = USPProto.keys || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push(name);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.values = USPProto.values || function() {
        var items = [];
        this.forEach(function(item) {
            items.push(item);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.entries = USPProto.entries || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name, item]);
        });
        return makeIterator(items);
    };


    if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }


    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }

    function decode(str) {
        return str
            .replace(/[ +]/g, '%20')
            .replace(/(%[a-f0-9]{2})+/ig, function(match) {
                return decodeURIComponent(match);
            });
    }

    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {done: value === undefined, value: value};
            }
        };

        if (iterable) {
            iterator[self.Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    }

    function parseToDict(search) {
        var dict = {};

        if (typeof search === "object") {
            // if `search` is an array, treat it as a sequence
            if (isArray(search)) {
                for (var i = 0; i < search.length; i++) {
                    var item = search[i];
                    if (isArray(item) && item.length === 2) {
                        appendTo(dict, item[0], item[1]);
                    } else {
                        throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                    }
                }

            } else {
                for (var key in search) {
                    if (search.hasOwnProperty(key)) {
                        appendTo(dict, key, search[key]);
                    }
                }
            }

        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs [j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

                } else {
                    if (value) {
                        appendTo(dict, decode(value), '');
                    }
                }
            }
        }

        return dict;
    }

    function appendTo(dict, name, value) {
        var val = typeof value === 'string' ? value : (
            value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value)
        )

        if (name in dict) {
            dict[name].push(val);
        } else {
            dict[name] = [val];
        }
    }

    function isArray(val) {
        return !!val && '[object Array]' === Object.prototype.toString.call(val);
    }

})(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

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
/* harmony import */ var _es_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../es/dom */ "./es/dom/index.js");
/* harmony import */ var _es_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../es/events */ "./es/events/index.js");
/* harmony import */ var _es_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../es/forms */ "./es/forms/index.js");
/* harmony import */ var _es_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../es/navigation */ "./es/navigation/index.js");
/* harmony import */ var _es_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../es/request */ "./es/request/index.js");
/* harmony import */ var _es_site__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../es/site */ "./es/site/index.js");
/* harmony import */ var _es_strings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../es/strings */ "./es/strings/index.js");
/* harmony import */ var _es_type_checks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../es/type_checks */ "./es/type_checks/index.js");
/* harmony import */ var _es_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../es/user */ "./es/user/index.js");
/* harmony import */ var _es_toggle_ToggleOnMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../es/toggle/ToggleOnMobile */ "./es/toggle/ToggleOnMobile.js");











//create a key:val object of all components
const components = {
    dom:_es_dom__WEBPACK_IMPORTED_MODULE_0__["dom"],
    events:_es_events__WEBPACK_IMPORTED_MODULE_1__["events"],
    XHRForm:_es_forms__WEBPACK_IMPORTED_MODULE_2__["XHRForm"],
    FormFromURL:_es_forms__WEBPACK_IMPORTED_MODULE_2__["FormFromURL"],
    navigation:_es_navigation__WEBPACK_IMPORTED_MODULE_3__["navigation"],
    request:_es_request__WEBPACK_IMPORTED_MODULE_4__["request"],
    Site:_es_site__WEBPACK_IMPORTED_MODULE_5__["Site"],
    strings:_es_strings__WEBPACK_IMPORTED_MODULE_6__["strings"],
    type_checks:_es_type_checks__WEBPACK_IMPORTED_MODULE_7__["type_checks"],
    User:_es_user__WEBPACK_IMPORTED_MODULE_8__["User"],
    ToggleOnMobile:_es_toggle_ToggleOnMobile__WEBPACK_IMPORTED_MODULE_9__["ToggleOnMobile"]
};

/**
 * Call this function to tie all jpack components directly to the window for global use
 *
 * This means instead of calling jpack.strings.ucfirst(), you can just call strings.ucfirst()
 *
 * This is not recommended because jpack's names may be too generic and conflict.
 *
 * If you want to set a different namespace than jpack, that's fine, but not using a namespace at all can be risky
 *
 * For example:
 *
 * setGlobal("$") - then you can call: $.strings.ucfirst()
 * setGlobal("_") - then you can call: _.strings.ucfirst()
 * setGlobal("PeasAreGross") - then you can call: PeasAreGross.strings.ucfirst()
 *
 */
const setGlobal = function(namespace){
    namespace = typeof namespace === 'string' ? namespace : null;

    //for each function within events
    for (const key in components) {
        //set them on window so they're available globally
        if( namespace ){
            if( typeof window[namespace] === "undefined" ){ window[namespace] = {}; }
            window[namespace][key] = components[key];
        }else{
            window[key] = components[key];
        }
    }
};

//extend components to include the setGlobal method
const jpack = {...components, ...{setGlobal: setGlobal}};

//set jpack globally so that it can be used anywhere
global.jpack = jpack;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBLGVBQWUsd0NBQUc7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUk7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHdDQUFHO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHdCQUF3QjtBQUNuRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLGVBQWUsbUJBQW1COztBQUV6QztBQUNBLHFCIiwiZmlsZSI6ImpwYWNrLmJ1bmRsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcGFjay5qc1wiKTtcbiIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gXCIuL3N0cmluZ3NcIjtcblxuZXhwb3J0IGNsYXNzIEFic3RyYWN0Q2xhc3N7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZXMgdGhlIHVzZXIgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcG9wdWxhdGUoZGF0YSl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fa2V5cyA9PT0gXCJ1bmRlZmluZWRcIiApIHRocm93IGBDYW5ub3QgcG9wdWxhdGUgb2JqZWN0IGlmIF9rZXlzIHByb3BlcnR5IGlzIG5vdCBzZXRgO1xuXG4gICAgICAgIC8vdmFsaWRhdGUgdGhlIGluY29taW5nIGRhdGEgb2JqZWN0IGFuZCBtYWtlIHN1cmUgaXQgb25seSBjb250YWlucyB0aGVzZSBrZXlzXG4gICAgICAgICF0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoZGF0YSwgdGhpcy5fa2V5cywgZmFsc2UsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZm9yIGVhY2gga2V5IHRoYXQgaXMgc2V0IGluIHRoZSBkYXRhIG9iamVjdCwgc2V0IHRoZSB2YWx1ZSBvbiB0aGlzXG4gICAgICAgIHRoaXMuX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhW2tleV0gIT09IFwidW5kZWZpbmVkXCIgKSBzZWxmW3N0cmluZ3Muc2V0dGVyKGtleSldKGRhdGFba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCIvKipcbiAqIEhUTUwgRE9NIGhlbHBlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGEgc2luZ2xlIG5hdGl2ZSBET00gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vbmUgZXhpc3RcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbXVsdGlwbGUgLSB0aHJvdyBhbiBlcnJvciBpZiBtb3JlIHRoYW4gMSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50fEhUTUxEb2N1bWVudHxudWxsXG4gICAgICovXG4gICAgZ2V0RWxlbWVudDogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUsIGVycm9yX29uX211bHRpcGxlKXtcbiAgICAgICAgY29uc3QgZm91bmRFbCA9IHRoaXMuZ2V0RWxlbWVudHMoZWwsIGVycm9yX29uX25vbmUpO1xuXG4gICAgICAgIGlmKCBmb3VuZEVsLmxlbmd0aCA+IDEgJiYgZXJyb3Jfb25fbXVsdGlwbGUgKSB0aHJvdyBgTW9yZSB0aGFuIDEgcmVzdWx0IGZvdW5kIGZvciBcIiR7ZWx9XCJgO1xuXG4gICAgICAgIGlmKCAhZm91bmRFbC5sZW5ndGggKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gZm91bmRFbFswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhbiBhcnJheSBvZiBuYXRpdmUgRE9NIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWwgKHN0cmluZywgb2JqZWN0LCBhcnJheSwgalF1ZXJ5IG9iamVjdCwgZXRjKVxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm8gZWxlbWVudHMgd2VyZSBmb3VuZCwgZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyBbXVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRzOiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSl7XG4gICAgICAgIC8vZGVmYXVsdCB0byBmYWxzZVxuICAgICAgICBlcnJvcl9vbl9ub25lID0gdHlwZW9mIGVycm9yX29uX25vbmUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IGVycm9yX29uX25vbmU7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIGVtcHR5XG4gICAgICAgIGxldCBlbF9hcnJheSA9IFtdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZWwgPT09IFwidW5kZWZpbmVkXCIgfHwgIWVsICl7XG4gICAgICAgICAgICAvL2RvIG5vdGhpbmcsIGRlZmF1bHQgaXMgZW1wdHkgYXJyYXlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgKXtcbiAgICAgICAgICAgIC8vYWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBOb2RlTGlzdCByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCk7XG4gICAgICAgICAgICBlbF9hcnJheSA9IGVsX2FycmF5ID8gQXJyYXkuZnJvbShlbF9hcnJheSkgOiBlbF9hcnJheTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIGpRdWVyeSApe1xuICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyBhbnl0aGluZ1xuICAgICAgICAgICAgaWYoIGVsLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCB0aGUgZWxlbWVudHMgaW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICBlbF9hcnJheSA9IGVsLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gKXtcbiAgICAgICAgICAgIGVsX2FycmF5ID0gQXJyYXkuZnJvbShlbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBpdCdzIGFuIGFycmF5LCB2YWxpZGF0ZSBlYWNoIGVsZW1lbnRcbiAgICAgICAgZWxzZSBpZiggQXJyYXkuaXNBcnJheShlbCkgKXtcbiAgICAgICAgICAgIGVsLmZvckVhY2goZnVuY3Rpb24odGhpc19lbCl7XG4gICAgICAgICAgICAgICAgdGhpc19lbCA9IGRvbS5nZXRFbGVtZW50KHRoaXNfZWwpO1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzX2VsICkgZWxfYXJyYXkucHVzaCh0aGlzX2VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBgSW52YWxpZCB2YWx1ZTogXCIke2VsfVwiYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKSB0aHJvdyBgRmFpbGVkIHRvIGZpbmQgXCIke2VsfVwiYDtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1aWNrIG1ldGhvZCBmb3IgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge2RvbX1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKGVsLCBlcnJvcl9pZl9ub3RfZm91bmQpe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9pZl9ub3RfZm91bmQgKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgXCIke2VsfVwiYDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBkb20gZWxlbWVudCB3aXRoIEhUTUxcbiAgICAgKlxuICAgICAqIHVzZXMgLmdldEVsZW1lbnQoKSBzbyBlbCBjYW4gYmUganVzdCBhYm91dCBhbnl0aGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX18bnVsbFxuICAgICAqL1xuICAgIHJlcGxhY2VFbFdpdGhIVE1MOiBmdW5jdGlvbihlbCwgaHRtbCwgZXJyb3JfaWZfbm90X2ZvdW5kKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgY29uc3QgZm91bmRFbCA9IHRoaXMuZ2V0RWxlbWVudChlbCk7XG5cbiAgICAgICAgaWYoICFlbCApe1xuICAgICAgICAgICAgaWYoIGVycm9yX2lmX25vdF9mb3VuZCApIHRocm93IGBDb3VsZCBub3QgZmluZCBcIiR7ZWx9XCJgO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBlbGVtZW50IGZyb20gSFRNTFxuICAgICAgICBsZXQgbmV3RWwgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9pbnNlcnQgdGhlIG5ldyBlbGVtZW50IGJlZm9yZSB0aGUgY3VycmVudFxuICAgICAgICBuZXdFbCA9IGZvdW5kRWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzWzBdLCBmb3VuZEVsKTtcblxuICAgICAgICAvL3JlbW92ZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIGZvdW5kRWwucmVtb3ZlKCk7XG5cbiAgICAgICAgLy9yZXR1cm4gdGhlIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIG5ld0VsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBvciBub3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbXVsdGlwbGVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc1Zpc2libGUoZWwsIGVycm9yX2lmX25vdF9mb3VuZCwgZXJyb3Jfb25fbXVsdGlwbGUpIHtcbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIGVycm9yX2lmX25vdF9mb3VuZCwgZXJyb3Jfb25fbXVsdGlwbGUpO1xuXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGVycm9yX2lmX25vdF9mb3VuZCApIHRocm93IGBDb3VsZCBub3QgZmluZCBcIiR7ZWx9XCJgO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgICAgICAvL2NoZWNrIGRpc3BsYXksIHZpc2liaWxpdHksIGFuZCBvcGFjaXR5IGZpcnN0IHNpbmNlIHRoZXkncmUgdGhlIG1vc3QgY29tbW9uXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICd2aXNpYmxlJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUub3BhY2l0eSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vc2VlIGlmIHRoZSBlbGVtZW50IGhhcyBhIHNpemVcbiAgICAgICAgaWYoZWwub2Zmc2V0V2lkdGggKyBlbC5vZmZzZXRIZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBvdXRzaWRlIGNvcm5lcnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGVsX2JvdW5kcyA9IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvcC1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdib3R0b20tbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LmJvdHRvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjZW50ZXInOiB7XG4gICAgICAgICAgICAgICAgeDogZWxSZWN0LmxlZnQgKyBlbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW5zaWRlX3ZpZXdwb3J0ID0gdHJ1ZTtcbiAgICAgICAgLy9tYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydFxuICAgICAgICBPYmplY3Qua2V5cyhlbF9ib3VuZHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IGVsX2JvdW5kc1trZXldO1xuXG4gICAgICAgICAgICBpZiAocG9pbnQueCA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueCA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPCAwKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICBpZiAocG9pbnRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50RWwgPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChwb2ludEVsID0gcG9pbnRFbC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc2lkZV92aWV3cG9ydDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGV4aXN0c1xuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG11bHRpcGxlRXhpc3Q6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aCA+IDE7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFNob3J0aGFuZCBwcmV2ZW50RGVmYXVsdCBldmVudHMgKGFuZCBvdGhlcnMgZm9yIGNvbnNpc3RlbmN5KVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGVzZSBmdW5jdGlvbnMgZ2xvYmFsbHkgc28geW91IGNhbiB1c2UgdGhlbSB3aXRob3V0IGEgbmFtZXNwYWNlIG9yIHdpdGggYSBjdXN0b20gb25lXG4gICAgICpcbiAgICAgKiBVc2UgYXQgeW91ciBvd24gcmlzayAtIG1heSBjYXVzZSBjb25mbGljdHMhXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgICBqcGFjay5ldmVudHMuc2V0R2xvYmFsKCk7XG4gICAgICogICAgIG9uQ2xpY2soJ2EnLCBmdW5jdGlvbigpe1xuICAgICAqICAgICAgICAvL2RvIHNvbWV0aGluZyAodGhlIGhyZWYgaXMgcHJldmVudGVkKVxuICAgICAqICAgICB9KTtcbiAgICAgKi9cbiAgICBzZXRHbG9iYWw6IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2V0IGV2ZXJ5dGhpbmcgdGhhdCdzIGEgcmVhbCBtZXRob2QgaW4gZXZlbnRzLCBleGNlcHQgdGhpcyBvbmVcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gJ3NldEdsb2JhbCcpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW3Byb3BlcnR5XSA9IHNlbGZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gZXZlbnRzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIGFuZCBwcmV2ZW50cyB0aGUgZGVmYXVsdCBldmVudHMgZnJvbSBvY2N1cnJpbmdcbiAgICAgKiAgKGxpa2UgZm9ybXMgc3VibWl0dGluZyBvciBhIGxpbmsgYnJpbmdpbmcgeW91IHRvIGFub3RoZXIgcGFnZSlcbiAgICAgKlxuICAgICAqICBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgaGFuZGxlciBmb3IgZnV0dXJlIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRlZEhhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vTmVlZCB0byB1bmRlcnN0YW5kIHRoaXMgYmV0dGVyLCBidXQgaXQgYXBwZWFycyB3aGVuIHRpZWQgdG8gdGhlIGJvZHkgZWxlbWVudCB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyByZWNlaXZlcyBhbiBhcnJheSBvZiBldmVudHMgd2l0aCBhIHNpbmdsZSBpdGVtIGluIGl0P1xuICAgICAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoZSkgKSBlID0gZVswXTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHByZXZlbnRlZEhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJldmVudGVkSGFuZGxlcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBldmVudF9vcHRpb25zXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oZWwsIGV2ZW50LCBldmVudF9vcHRpb25zKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudF9vcHRpb25zID0gdHlwZW9mIGV2ZW50X29wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogZXZlbnRfb3B0aW9ucztcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBldmVudF9vcHRpb25zIH0pO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxufTsiLCJpbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1hIUkZvcm19IGZyb20gXCIuL1hIUkZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8vZGVmYXVsdHMgZm9yIHRoZSBGb3JtRnJvbVVSTCBjbGFzc1xuY29uc3QgRm9ybUZyb21VUkxEZWZhdWx0cyA9IHtcbiAgICBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjogbnVsbCwgLy90aGUgZm9ybSBlbGVtZW50IG9yIHdyYXBwZXIgdGhhdCB5b3Ugd2FudCB0byByZXRyaWV2ZSBmcm9tIHRoZSBVUkxcbiAgICBpbnNlcnRJbnRvRWxlbWVudDogbnVsbCwgLy93aGF0IGVsZW1lbnQgdG8gcHV0IHRoZSBmb3JtIGludG9cbiAgICBvbmxvYWQ6IGZ1bmN0aW9uKGZvcm0peyByZXR1cm4gdGhpczsgfSwgLy9vbmNlIHRoZSBmb3JtIGlzIGxvYWRlZCBvbnRvIHRoZSBwYWdlXG59O1xuXG4vKipcbiAqXG4gKiBGb3JtRnJvbVVSTFxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBncmFiIGEgZm9ybSBmcm9tIGEgVVJMIGFuZCByZXR1cm5zIGl0IHRvIHRoZSBjdXJyZW50IHBhZ2VcbiAqXG4gKiBBbHNvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9uIHVzaW5nIFhIUiBhbmQgY2FuIG9wZW4gYSBtb2RhbCB0byBkaXNwbGF5IHRoZSBmb3JtXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRm9ybUZyb21VUkwgZXh0ZW5kcyBYSFJGb3JtIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB1cmwgLSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9iamVjdHtpbmNvbWluZ0VsZW1lbnRTZWxlY3RvcixpbnNlcnRJbnRvRWxlbWVudCwgb25sb2FkfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiICkgdGhyb3cgYCR7dXJsfSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vaWYgb3B0aW9ucyBhcmUgdW5kZWZpbmVkLCBzZXQgdGhlbVxuICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IG9wdGlvbnM7XG4gICAgICAgIGlmKCB0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiApIHRocm93IGAke29wdGlvbnN9IGlzIG5vdCBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vZXh0ZW5kIGRlZmF1bHRzIHdpdGggcHJvdmlkZWQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gey4uLkZvcm1Gcm9tVVJMRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0VVJMKHVybCk7XG4gICAgICAgIHRoaXMuc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Iob3B0aW9ucy5pbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuc2V0SW5zZXJ0SW50b0VsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvRWxlbWVudCk7XG4gICAgICAgIHRoaXMub25sb2FkKG9wdGlvbnMub25sb2FkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgcGFyZW50IGJlY2F1c2UgaXQncyBub3QgcmVxdWlyZWQgZm9yIHRoaXMgY2xhc3NcbiAgICAgKlxuICAgICAqIFN0aWxsIGtlZXBpbmcgaXQgZnVuY3Rpb25hbCBidXQgcmVtb3ZpbmcgYWxsIHZhbGlkYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgc2V0Rm9ybShmb3JtKXtcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgVVJMIGZyb20gd2hpY2ggdGhlIGZvcm0gd2lsbCBiZSByZXRyaWV2ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBzZXRVUkwodXJsKXtcbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7dXJsfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSdzIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyBYSFJGb3JtLmdldEZpbmFsU3VibWl0VVJMIHRvIGluY2x1ZGUgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmVxdWVzdGVkIGZyb20gYXMgYW4gYWRkaXRpb25hbCBmYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSl7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIHVybCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm0sIG9ubHkgaWYgZXhwbGljaXRseSBzZXRcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGZvcm0uYXR0cmlidXRlcy5hY3Rpb24gKXtcbiAgICAgICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBzdGlsbCBudWxsLCBncmFiIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgICAgIHVybCA9ICF1cmwgPyB0aGlzLmdldFVSTCgpIDogdXJsO1xuXG4gICAgICAgIC8vaWYgdGhlIHVybCBpcyBTVElMTCBudWxsLCBncmFiIHRoZSBmb3JtJ3MgZGVmYXVsdCBhY3Rpb24gKGN1cnJlbnQgcGFnZSlcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBVUkwgcHJvdmlkZWQgcmV0dXJucyBIVE1MLCB0aGlzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZCB0byBwdWxsIHRoZSBmb3JtIG91dFxuICAgICAqXG4gICAgICogSWYgbGVmdCBudWxsLCBpdCB3aWxsIGFzc3VtZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtJ3MgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yOiBzdHJpbmd8bnVsbFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudFNlbGVjdG9yKHNlbGVjdG9yKXtcbiAgICAgICAgaWYoIHNlbGVjdG9yICE9PSBudWxsICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcn0gaXMgbm90IGEgc3RyaW5nIG9yIG51bGwgdmFsdWVgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2VsZWN0b3IgZm9yIHRoZSBmb3JtIG9yIGEgcGFyZW50IG9mIGl0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoZSBVUkxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBzZXQgYSBwYXJlbnQgZWxlbWVudCB0aGF0IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50byB1c2luZyB0aGUgZGVmYXVsdCBpbnNlcnRGb3JtIG1ldGhvZFxuICAgICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gbGVhdmUgdGhpcyBhbmQgb3ZlcnJpZGUgaW5zZXJ0Rm9ybSgpIGFuZCBoYXZlIG1vcmUgY29udHJvbCBvdmVyIHdoZXJlIGl0IHNob3VsZCBnb1xuICAgICAqXG4gICAgICogVXNlcyBkb20uZ2V0RWxlbWVudCgpIHNvIHlvdSBjYW4gcGFzcyBhIHN0cmluZywgalF1ZXJ5IG9iamVjdCwgb2JqZWN0LCBldGNcbiAgICAgKiBIb3dldmVyIGlmIG1vcmUgdGhhbiAxIGVsZW1lbnQgaXMgZGV0ZWN0ZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHNldEluc2VydEludG9FbGVtZW50KGVsZW1lbnQpe1xuICAgICAgICB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGUgZm9ybSB3aWxsIGJlIGluc2VydGVkIGludG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEluc2VydEludG9FbGVtZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBmcm9tIHRoZSBVUkwgYW5kIHBhc3MgdG8gaW5zZXJ0Rm9ybVxuICAgICAqXG4gICAgICogVGhlcmUgYXJlIHRocmVlIG1haW4gd2F5cyB0byBwcm92aWRlIHRoZSBmb3JtIGZyb20geW91ciBzZXJ2ZXI6XG4gICAgICogMSkgU3RyYWlnaHQgSFRNTC4gVGhlIGVudGlyZSByZXNwb25zZSBpcyB0aGUgZm9ybSBhbmQgdGhhdCdzIGl0LlxuICAgICAqIDIpIFN0cmFpZ2h0IEhUTUwsIGJ1dCB0aGUgZm9ybSBpcyBvbmx5IGEgcGFydCBvZiB0aGUgcmVzcG9uc2Ugc28gaXQgbmVlZHMgdG8gYmUgcGFyc2VkIG91dCBiYXNlZCBvbiBhIHNlbGVjdG9yLlxuICAgICAqIDMpIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5IFwiaHRtbFwiIGxpa2UgdGhpczoge1wiaHRtbFwiOlwiPGZvcm0+eW91ciBmb3JtIGhlcmU8L2Zvcm0+XCJ9XG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICBheGlvcy5nZXQodGhpcy5nZXRVUkwoKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIC8vanVzdCBpbiBjYXNlIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgdGhlIHdyb25nIHJlc3BvbnNlIHR5cGUgYW5kIGl0J3MgYWN0dWFsbHkgSlNPTiAtIGlnbm9yZSBlcnJvcnNcbiAgICAgICAgICAgIHRyeXsgZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhOyB9IGNhdGNoKGUpeyB9XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGEgc3RyaW5nIChwcm9iYWJseSBIVE1MKVxuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vcHJvdmlkZSB0aGUgZm9ybSdzIEhUTUwgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb3RoZXIgZGV0YWlscyBsaWtlIHRoZSByb3V0ZSBhbmQgdGhlIGZ1bGwgcmVzcG9uc2UgdG8gaW5zZXJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHBhcnNlZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vb3RoZXJ3aXNlIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgYXNzdW1lZCB0byBiZSB0aGUgZm9ybVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYW4gb2JqZWN0IChwcm9iYWJseSBKU09OKVxuICAgICAgICAgICAgZWxzZSBpZiggdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICl7XG4gICAgICAgICAgICAgICAgLy9pZiBIVE1MIHdhcyBwcm92aWRlZCBpbiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhLmh0bWwgIT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhLmh0bWx9LCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAke2RhdGF9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gaW5zZXJ0IHRoZSBmb3JtIHdoZXJldmVyIHlvdSB3YW50IG9uIHRoZSBwYWdlXG4gICAgICogIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGUgZm9ybSBpcyBpbnNlcnRlZFxuICAgICAqICAobWF5YmUgeW91IHdhbnQgdG8gb3BlbiBhIG1vZGFsIGZpcnN0IGFuZCBwbGFjZSBpdCB0aGVyZT8pXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQuaHRtbCB3aWxsIGFsd2F5cyBiZSB0aGUgSFRNTFxuICAgICAqXG4gICAgICogIHBhcnNlZF9jb250ZW50IG1heSBjb250YWluIG90aGVyIGRhdGEgbGlrZSByb3V0ZSBhbmQgdGl0bGUgaWYgdGhlIGZvcm0gd2FzIHB1bGxlZCBvdXQgb2ZcbiAgICAgKiAgICAgYSBmdWxsIEhUTUwgcGFnZSB3aGljaCBjb250YWlucyB0aG9zZSBpdGVtc1xuICAgICAqXG4gICAgICogIHJlc3BvbnNlIGlzIHRoZSBmdWxsIHNlcnZlciByZXNwb25zZSAoaHRtbCBzdHJpbmcgb3Igb2JqZWN0IGZyb20gSlNPTiAtIG5vdCBwcm92aWRlZCBpZiB0aGUgcmVzcG9uc2UgaXMgb25seSB0aGUgZm9ybSdzIEhUTUwpXG4gICAgICpcbiAgICAgKiAgZm9ybSBpcyBwcm92aWRlZCBpZiB0aGlzIGlzIGFmdGVyIHRoZSBmb3JtIHdhcyBzdWJtaXR0ZWQgYW5kIEhUTUwgd2FzIHJldHVybmVkIGZvcm0gdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogIEBwYXJhbSBwYXJzZWRfY29udGVudFxuICAgICAqICBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiAgQHBhcmFtIGZvcm1cbiAgICAgKiAgQHJldHVybnMgeyp8RWxlbWVudHxIVE1MRG9jdW1lbnR9XG4gICAgICovXG4gICAgaW5zZXJ0Rm9ybShwYXJzZWRfY29udGVudCwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICAvL3NlbGVjdG9yIGZvciB3aGVyZSB0aGUgZm9ybSB3aWxsIGdvXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKTtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggZWwgPT09IG51bGwgKSB0aHJvdyAnQ2Fubm90IGRldGVybWluZSB3aGVyZSB0byBpbnNlcnQgZm9ybS4gT3ZlcndyaXRlIGluc2VydEZvcm0oKSBvciBwcm92aWRlIGluc2VydEludG9FbGVtZW50JztcblxuICAgICAgICAvL2dldCB0aGUgY29udGFpbmVyIGVsZW1lbnQgLSBlcnJvciBpZiBub3QgZm91bmRcbiAgICAgICAgZWwgPSBkb20uZ2V0RWxlbWVudChlbCwgdHJ1ZSk7XG5cbiAgICAgICAgLy9wdXQgdGhlIGZvcm0gaW4gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHBhcnNlZF9jb250ZW50Lmh0bWw7XG5cbiAgICAgICAgLy9maW5kIHRoZSBuZXdseSBhZGRlZCBmb3JtXG4gICAgICAgIGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAgLy9hdHRhY2ggYW4gb24tc3VibWl0IGxpc3RlbmVyIHRvIHNlbmQgdGhlIGZvcm0ncyB2YWx1ZXMgdmlhIFhIUlxuICAgICAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSk7XG5cbiAgICAgICAgLy9ydW4gdGhlIG9ubG9hZCBjYWxsYmFjayBub3cgdGhhdCB0aGUgZm9ybSBpcyB0aGVyZVxuICAgICAgICB0aGlzLnRyaWdnZXJPbmxvYWQoZm9ybSk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGZvcm0gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQncyBkaXNwbGF5ZWRcbiAgICAgKlxuICAgICAqIFlvdSdsbCBsaWtlbHkgd2FudCB0byBhdHRhY2ggcGx1Z2lucyBmb3IgZGF0ZXBpY2tlcnMvZHJvcGRvd25zLCBvciBtYXliZSBoaWRlIGEgZmllbGQgYmFzZWQgb24gdGhlIHZhbHVlIG9mIGFub3RoZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9ubG9hZChjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29ubG9hZCA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29ubG9hZCA9IFtdO1xuICAgICAgICB0aGlzLl9vbmxvYWQucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgb25sb2FkIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUZyb21VUkx9XG4gICAgICovXG4gICAgY2xlYXJPbmxvYWRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgdHJpZ2dlck9ubG9hZChmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29ubG9hZCA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9vbmxvYWQuZm9yRWFjaChmdW5jdGlvbihvbmxvYWQpe1xuICAgICAgICAgICAgb25sb2FkKGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbnJlcXVpcmUoJ2Zvcm1kYXRhLXBvbHlmaWxsJyk7XG5cbi8vZGVmYXVsdHMgZm9yIHRoZSBYSFJGb3JtIGNsYXNzXG5jb25zdCBYSFJGb3JtRGVmYXVsdHMgPSB7XG4gICAgeGhyU3VibWl0OiB0cnVlLCAvL3N1Ym1pdCB0aGUgZm9ybSB1c2luZyBYSFIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBhY3Rpb25cbiAgICBzdWJtaXRVUkw6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgc3VibWl0TWV0aG9kOm51bGwsIC8vd2lsbCBiZSBncmFiYmVkIGZyb20gdGhlIGZvcm0ncyBtZXRob2QgYXR0cmlidXRlLCBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSwgZm9ybSl7IGFsZXJ0KGVycm9yKTsgfSwgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgYW5kIGZhaWxzXG4gICAgb25TdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgZm9ybSl7IC8vY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICBpZih0eXBlb2YgcmVzcG9uc2Uuc3VjY2VzcyA9PT0gXCJzdHJpbmdcIil7IGFsZXJ0KHJlc3BvbnNlLnN1Y2Nlc3MpOyB9XG4gICAgICAgIGVsc2V7IGFsZXJ0KFwiWW91ciBzdWJtaXNzaW9uIGhhcyBiZWVuIHJlY2VpdmVkXCIpOyB9XG4gICAgfSxcbiAgICAvL3ZhbGlkYXRlIHRoZSBmb3JtLCBkaXNwbGF5IGFueSBlcnJvcnMgYW5kIHJldHVybiBmYWxzZSB0byBibG9jayBzdWJtaXNzaW9uXG4gICAgdmFsaWRhdGVGb3JtOiBmdW5jdGlvbihmb3JtKXtcbiAgICAgICAgLy9hZGQgLndhcy12YWxpZGF0ZWQgZm9yIGJvb3RzdHJhcCB0byBzaG93IGVycm9yc1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcblxuICAgICAgICAvL2lmIHRoZXJlIGFyZSBhbnkgOmludmFsaWQgZWxlbWVudHMsIHRoZSBmb3JtIGlzIG5vdCB2YWxpZFxuICAgICAgICBjb25zdCBpc192YWxpZCA9ICFmb3JtLnF1ZXJ5U2VsZWN0b3IoJzppbnZhbGlkJyk7XG5cbiAgICAgICAgLy9pZiBpdCdzIHZhbGlkLCBjbGVhciB0aGUgdmFsaWRhdGlvbiBpbmRpY2F0b3JzXG4gICAgICAgIGlmKCBpc192YWxpZCApIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIHJldHVybiBpc192YWxpZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFhIUkZvcm1cbiAqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc3VibWl0IGEgZm9ybSB2aWEgWEhSIGFuZCBlYXNpbHkgaGFuZGxlIHRoZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBjbGFzcyBYSFJGb3JtIHtcblxuICAgIC8qKlxuICAgICAqIEZvcm0gY2FuIGJlIGp1c3QgYWJvdXQgYW55IGRhdGF0eXBlIC0gdXNlcyBkb20uZ2V0RWxlbWVudCgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZm9ybSwgb3B0aW9ucyl7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiICkgdGhyb3cgYCR7b3B0aW9uc30gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uWEhSRm9ybURlZmF1bHRzLCAuLi5vcHRpb25zfTtcblxuICAgICAgICB0aGlzLnNldEZvcm0oZm9ybSk7XG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGVDYWxsYmFjayhvcHRpb25zLnZhbGlkYXRlRm9ybSk7XG4gICAgICAgIHRoaXMuc2V0WEhSU3VibWl0KG9wdGlvbnMueGhyU3VibWl0KTtcbiAgICAgICAgdGhpcy5zZXRTdWJtaXRNZXRob2Qob3B0aW9ucy5zdWJtaXRNZXRob2QpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdFVSTChvcHRpb25zLnN1Ym1pdFVSTCk7XG4gICAgICAgIHRoaXMub25TdWNjZXNzKG9wdGlvbnMub25TdWNjZXNzKTtcbiAgICAgICAgdGhpcy5vbkVycm9yKG9wdGlvbnMub25FcnJvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRWYWxpZGF0ZUNhbGxiYWNrKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IGlzIG5vdCBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSB2YWxpZGF0ZSBjYWxsYmFjayBhbmQgcGFzc2VzIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZShmb3JtKXtcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVDYWxsYmFjayhmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGZvcm0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICBpZiggIWZvcm0gfHwgdHlwZW9mIGZvcm0gPT09ICd1bmRlZmluZWQnICkgdGhyb3cgYEZvcm0gZWxlbWVudCBpcyByZXF1aXJlZGA7XG5cbiAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0sIHRydWUsIHRydWUpO1xuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgSW52YWxpZCBmb3JtIGVsZW1lbnQgcmVjZWl2ZWRgO1xuXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHlvdSB3YW50IHRoZSBmb3JtIHRvIGJlIHN1Ym1pdHRlZCB1c2luZyBhbiBYSFIgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVuYWJsZWQgLSBib29sXG4gICAgICovXG4gICAgc2V0WEhSU3VibWl0KGVuYWJsZWQpe1xuICAgICAgICB0aGlzLl94aHJTdWJtaXQgPSAhIWVuYWJsZWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvdyB0byBzdWJtaXQgdGhlIGZvcm0gLSBpZiBzZXQgdG8gbnVsbCwgdGhlIG1ldGhvZCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBmb3JtJ3NcbiAgICAgKiAgbWV0aG9kIGF0dHJpYnV0ZSBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdE1ldGhvZChtZXRob2Qpe1xuICAgICAgICBpZiggdHlwZW9mIG1ldGhvZCAhPT0gXCJzdHJpbmdcIiAmJiBtZXRob2QgIT09IG51bGwgKSB0aHJvdyBgJHttZXRob2R9IGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fc3VibWl0TWV0aG9kID0gbWV0aG9kO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBmb3JtIHN1Ym1pc3Npb24gbWV0aG9kIChQT1NULCBHRVQsIGV0YylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRNZXRob2QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdE1ldGhvZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIHRvIHN1Ym1pdCB0aGUgZm9ybSB0b1xuICAgICAqXG4gICAgICogSWYgbnVsbCwgdGhlIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBVc2UgYSBmdW5jdGlvbiBpZiB5b3Ugd2FudCB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGUgVVJMIGp1c3QgcHJpb3IgdG8gdGhlIHJlcXVlc3RcbiAgICAgKiAgLSB0aGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRoZSBmb3JtIGFzIGEgcGFyYW1cbiAgICAgKiBHZW5lcmFsbHkgc3BlYWtpbmcgYSBzdHJpbmcgaXMgc3VmZmljaWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgJiYgdHlwZW9mIHVybCAhPT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAmJiB1cmwgIT09IG51bGwgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZywgZnVuY3Rpb24sIG9yIG51bGxgO1xuXG4gICAgICAgIHRoaXMuX3N1Ym1pdFVSTCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgVVJMIHRoZSBmb3JtIHdpbGwgYmUgc3VibWl0dGVkIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRVUkwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhY3R1YWwgc3VibWl0IFVSTCBhZnRlciBydW5uaW5nIHRoZSBmdW5jdGlvbiAoaWYgaXQgaXMgb25lKSwgYW5kIHR1cm5pbmcgdG8gZmFsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmV0dXJuIGZvcm0uYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgb24gc3VibWl0IGhhbmRsZXIgKG9ubHkgaWYgeGhyU3VibWl0IGlzIHRydWUpXG4gICAgICpcbiAgICAgKiBQYXNzIHRoZSBmb3JtIG9yIGZvcm0gc2VsZWN0b3JcbiAgICAgKi9cbiAgICBhdHRhY2hTdWJtaXRIYW5kbGVyKGZvcm0pe1xuICAgICAgICBpZiggIXRoaXMuX3hoclN1Ym1pdCApIHJldHVybjtcblxuICAgICAgICAvL2lmIG5vdCBwYXNzZWQsIGdldCBpdCBmcm9tIHRoaXMgb2JqZWN0XG4gICAgICAgIGlmKCB0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICAgICAgICAgIGZvcm0gPSB0aGlzLmdldEZvcm0oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFmb3JtICkgdGhyb3cgYEZvcm0gZWxlbWVudCBub3QgcmVjZWl2ZWQsIGNhbm5vdCBhdHRhY2ggc3VibWl0IGhhbmRsZXJgO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAvL2lmIHhociBzdWJtaXQgaXMgZGlzYWJsZWQsIGRvbid0IGJsb2NrIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgICAgaWYoICFzZWxmLl94aHJTdWJtaXQgKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGYuc3VibWl0Rm9ybShmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAqXG4gICAgICogWW91ciBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgMiBwYXJhbXMsIHRoZSBmaXJzdCBpcyB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBmb3JtIG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9uU3VjY2VzcyBjYWxsYmFja3MgeW91J3ZlIHNldFxuICAgICAqL1xuICAgIGNsZWFyT25TdWNjZXNzQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzLmZvckVhY2goZnVuY3Rpb24ob25TdWNjZXNzKXtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUZyb21VUkx9XG4gICAgICovXG4gICAgb25FcnJvcihjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25FcnJvciA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgdGhpcy5fb25FcnJvci5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbkVycm9yIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgY2xlYXJPbkVycm9yQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIG9uRXJyb3IgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHRyaWdnZXJPbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vbkVycm9yLmZvckVhY2goZnVuY3Rpb24ob25FcnJvcil7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXRzIHRoZSBmb3JtIHVzaW5nIFhIUlxuICAgICAqXG4gICAgICogMSkgRGV0ZXJtaW5lcyB0aGUgVVJMXG4gICAgICogMikgRGV0ZXJtaW5lcyB0aGUgbWV0aG9kIChHRVQsIFBPU1QsIFBBVENILCBldGMpXG4gICAgICogMykgRGV0ZXJtaW5lcyBpZiB0aGUgZm9ybSBpcyB2YWxpZFxuICAgICAqIDQpIEdldHMgdGhlIGZvcm0ncyB2YWx1ZXNcbiAgICAgKiA1KSBTdWJtaXRzIHRoZSBmb3JtXG4gICAgICogNikgUmVwbGFjZXMgdGhlIGZvcm0sIHJ1bnMgb25FcnJvciwgb3IgcnVucyBvblN1Y2Nlc3MgYmFzZWQgb24gdGhlIHJlc3BvbnNlIChzZWUgbmV4dCBsaW5lKVxuICAgICAqICBSZXNwb25zZSBUeXBlID0gQWN0aW9uIFRha2VuXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBmb3JtIGluc2lkZSA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIHN0cmluZyBodG1sIHdpdGggaW5jb21pbmdFbGVtZW50U2VsZWN0b3Igc2V0LCBidXQgbm90IGZvdW5kID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgc3RyaW5nIC0gcmVwbGFjZSBmb3JtIG9uIHBhZ2Ugd2l0aCBlbnRpcmUgcmVzcG9uc2VcbiAgICAgKiAgICBvYmplY3QuaHRtbCA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIG9iamVjdC5lcnJvciA9IGtpY2tvZmYgb25FcnJvclxuICAgICAqICAgIG9iamVjdCBpbiBnZW5lcmFsID0ga2lja29mZiBvblN1Y2Nlc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge2Zvcm18Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgLy9ibG9jayBtdWx0aXBsZSBmb3JtIHN1Ym1pc3Npb25zIGF0IHRoZSBzYW1lIHRpbWUgdW50aWwgdGhpcyBvbmUgaXMgY29tcGxldGVcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9wcm9jZXNzaW5nID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICBpZiggdGhpcy5fcHJvY2Vzc2luZyApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAvL2NhY2hlIGZvciB1c2UgaW5zaWRlIG90aGVyIHNjb3Blc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IFVSTFxuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRGaW5hbFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IG1ldGhvZFxuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5nZXRTdWJtaXRNZXRob2QoKTtcbiAgICAgICAgLy9pZiBpdCdzIG51bGwsIGdyYWIgaXQgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggbWV0aG9kID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGZvcm0uYXR0cmlidXRlcy5tZXRob2QgIT09ICd1bmRlZmluZWQnICl7IC8vY2hlY2sgdGhhdCBpdCB3YXMgc2V0IGV4cGxpY2l0bHlcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmb3JtLm1ldGhvZDsgLy9ncmFiIEpVU1QgdGhlIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9kZWZhdWx0IHRvIHBvc3QgaWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIG1ldGhvZCBhbmQgbG93ZXJjYXNlIGFueXRoaW5nIHRoYXQgd2FzIHByb3ZpZGVkXG4gICAgICAgIG1ldGhvZCA9ICFtZXRob2QgPyAncG9zdCcgOiBtZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvL2lmIG5vdCB2YWxpZCwgc3RvcCBoZXJlIHVudGlsIHRoZXkgcmVzdWJtaXRcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKGZvcm0pKXtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIC8vZ2V0IGZvcm0gdmFsdWVzXG4gICAgICAgIGNvbnN0IGZvcm1fdmFsdWVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybVZhbHVlcyhmb3JtKSxcbiAgICAgICAgICAgIGUgPT4gZS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9JylcbiAgICAgICAgKS5qb2luKCcmJyk7XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1fdmFsdWVzLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcsIGl0J3MgcHJvYmFibHkvaG9wZWZ1bGx5IHRoZSBmb3JtIHdpdGggaW5saW5lIGVycm9yc1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIC8vaWYgd2UgYXJlIGxvb2tpbmcgZm9yIGFuIGVsZW1lbnQgd2l0aGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIGZvcm0gd2FzIG5vdCBmb3VuZCBpbiBpdCwgbGV0J3MgYXNzdW1lIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZm9ybS4gSWYgbm90LCB0aGVuIG1heWJlXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhcGFyc2VkLmh0bWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihgJHtzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJgLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9LCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBKU09OXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIHRoZSBIVE1MLCBqdXN0IHBvcCBpdCBiYWNrIG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgaWYoIGRhdGEuaHRtbCApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW4gZXJyb3IgbWVzc2FnZSwgdHJpZ2dlciB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5lcnJvciApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihkYXRhLmVycm9yLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmIGl0IGRvZXNuJ3QgQVBQRUFSIHRvIGJlIHRoZSBmb3JtIGFnYWluLCBvciBhbiBlcnJvciwgbGV0J3MgY2FsbCBpdCBhIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25TdWNjZXNzKGRhdGEsIGZvcm0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgc2VsZi5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZvcm0gdmFsdWVzIHRvIGJlIHN1Ym1pdHRlZFxuICAgICAqXG4gICAgICogT3ZlcnJpZGUvZXh0ZW5kIHRoaXMgaWYgeW91IHdhbnQgdG8gbWFuaXB1bGF0ZSB0aGUgZGF0YSBwcmlvciB0byBzdWJtaXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBGb3JtRGF0YVxuICAgICAqL1xuICAgIGdldEZvcm1WYWx1ZXMoZm9ybSl7XG4gICAgICAgIHJldHVybiBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgfVxufSIsImltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IHtGb3JtRnJvbVVSTH0gZnJvbSBcIi4vRm9ybUZyb21VUkxcIjtcblxuZXhwb3J0IHtYSFJGb3JtLCBGb3JtRnJvbVVSTH0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL3JlcXVlc3RcIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBzaW11bGF0ZSBhIHBhZ2UgY2hhbmdlIGJ5IHVzaW5nIGFuIFhIUiByZXF1ZXN0IHRvIGdyYWIgY29udGVudCBhbmQgcmVwbGFjZSBpdCBvbiB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBicm93c2VyJ3MgaGlzdG9yeSwgc3dhcHMgb3V0IG1ldGEgdGFncywgdXBkYXRlcyB0aGUgdGl0bGUsIGFuZCBtb3JlXG4gKlxuICogVXNlIG9uTG9hZCBhbmQgb25VbmxvYWQgaG9va3MgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZm9yIHRoaW5ncyBsaWtlIHRyaWdnZXJpbmcgYSBnb29nbGUgYW5hbHl0aWNzIHBhZ2Ugdmlld1xuICogIG9yIHNjcm9sbGluZyB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBvbmxvYWQgY2FsbGJhY2sgYWZ0ZXIgbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqL1xuICAgIF9wYXNzdGhyb3VnaERhdGE6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZVxuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbkxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRQYXNzdGhyb3VnaERhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHRoaXMuX3Bhc3N0aHJvdWdoRGF0YSA9IGRhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgZGF0YSBwcm92aWRlZCBmb3IgdGhlIG5leHQgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgY2xlYXJQYXNzdGhyb3VnaERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zZXRQYXNzdGhyb3VnaERhdGEobnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFueSBkYXRhIHRoYXQgaGFzIGJlZW4gc2V0IGZvciBwYXNzaW5nIHRvIHN1YnNlcXVlbnQgcGFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgZ2V0UGFzc1Rocm91Z2hEYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3Rocm91Z2hEYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKi9cbiAgICBfaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKi9cbiAgICBfcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRSZXBsYWNlRWxlbWVudDogZnVuY3Rpb24gKHNlbGVjdG9yX3N0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yX3N0cmluZyAhPT0gJ3N0cmluZycpIHRocm93IGAke3NlbGVjdG9yX3N0cmluZ30gaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VsZWN0b3JzIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHcmFicyBIVE1MIGZyb20gYSBVUkwgYW5kIHJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogMSkgU2hvd3MgYSBsb2FkZXIgKGlmIGVuYWJsZWQpXG4gICAgICogMikgUmVxdWVzdHMgY29udGVudCBmcm9tIHRoZSBwcm92aWRlZCBVUkxcbiAgICAgKiAzKSBSZXBsYWNlcyBpdCBvbiB0aGUgcGFnZSAoYW5kIGFsbCB0aGUgbWFnaWMgcmVwbGFjZVBhZ2VDb250ZW50IGRvZXMsIHNlZSBjb21tZW50cyBvbiB0aGF0IG1ldGhvZCBiZWxvdylcbiAgICAgKiA0KSBJZiB0aGVyZSdzIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGl0J2xsIGJlIHJ1biBhZnRlcndhcmRzIChpdCByZWNlaXZlcyB0aGUgbmV3bHkgcmVwbGFjZWQgZWxlbWVudCBhcyBhIHBhcmFtKVxuICAgICAqXG4gICAgICogT24gZXJyb3IsIGl0IHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBmYWlsdXJlIGFuZCBwcm92aWRlcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbiAodXJsLCBjYWxsYmFjaywgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHB1c2hfc3RhdGUpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgVVJMICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcbiAgICAgICAgcHVzaF9zdGF0ZSA9IHR5cGVvZiBwdXNoX3N0YXRlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBwdXNoX3N0YXRlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgcmVwbGFjZV9lbCAoJHtyZXBsYWNlX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcblxuICAgICAgICBheGlvcy5nZXQodXJsKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIG5hdmlnYXRpb24ucmVwbGFjZVBhZ2VDb250ZW50KHJlc3BvbnNlLmRhdGEsIHVybCwgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHB1c2hfc3RhdGUpO1xuXG4gICAgICAgICAgICAvL2lmIGEgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCBydW4gaXQgYW5kIHByb3ZpZGUgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy93YWl0IGZvciB0aGUgb251bmxvYWQgY2FsbGJhY2tzIHRvIHJ1biBhbmQgdGhlIG5ldyBjb250ZW50IHRvIGJlIHB1dCBvbiB0aGUgcGFnZSBmaXJzdFxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIGluY29taW5nX2VsLCBuYXZpZ2F0aW9uLmdldFBhc3NUaHJvdWdoRGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9LCAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoYXhpb3NfZXJyb3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmUoYXhpb3NfZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCwgYXhpb3NfZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgYXhpb3NfZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dDtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBpcyBlbmFibGVkIHRvIGRpc3BsYXkgb24gc2xvdyByZXF1ZXN0c1xuICAgICAqL1xuICAgIGxvYWRlckVuYWJsZWQ6IHRydWUsXG5cbiAgICAvL2hvdyBsb25nIHRvIGRlbGF5IGR1cmluZyBhIHNsb3cgcmVxdWVzdCBiZWZvcmUgc2hvd2luZyB0aGUgbG9hZGVyIChpbiBtaWxsaXNlY29uZHMpXG4gICAgX2xvYWRlckRlbGF5OiAzMDAsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGhvdyBsb25nIHRvIGRlbGF5IGR1cmluZyBhIHNsb3cgcmVxdWVzdCBiZWZvcmUgc2hvd2luZyB0aGUgbG9hZGVyIChpbiBtaWxsaXNlY29uZHMpXG4gICAgICpcbiAgICAgKiBTZXQgdG8gMCBpZiB5b3Ugd2FudCBpdCB0byBhbHdheXMgc2hvd1xuICAgICAqXG4gICAgICogQHBhcmFtIGRlbGF5X2luX21zXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgc2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uIChkZWxheV9pbl9tcykge1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5X2luX21zICE9PSBcIm51bWJlclwiKSB0aHJvdyBgJHtkZWxheV9pbl9tc30gaXMgbm90IGFuIGludGVnZXJgO1xuICAgICAgICB0aGlzLl9sb2FkZXJEZWxheSA9IGRlbGF5X2luX21zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRMb2FkZXJEZWxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyRGVsYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsYXNzZXMgZm9yIHRoZSBsb2FkZXJcbiAgICAgKiBEZWZhdWx0cyBhcmUgZm9yIGJvb3RzdHJhcCAod2l0aCB0aGUgZXhjZXB0aW9uIG9mIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXIpXG4gICAgICovXG4gICAgX2xvYWRlckNsYXNzZXM6ICdwcm9ncmVzcyBwYWdlLW5hdmlnYXRpb24tbG9hZGVyJyxcbiAgICBfbG9hZGVySW5uZXJEaXZDbGFzc2VzOiAncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcsXG5cbiAgICAvKipcbiAgICAgKiBJZiBlbmFibGVkLCBhZGRzIGEgbG9hZGVyIHRvIHRoZSBwYWdlIGFuZCBjYWNoZXMgYSByZWZlcmVuY2UgdG8gaXQsIHRoZW4gcmV0dXJucyB0aGF0IHJlZmVyZW5jZVxuICAgICAqXG4gICAgICogQHJldHVybnMgRWxlbWVudFxuICAgICAqL1xuICAgIGdldExvYWRlckVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXJFbmFibGVkKSByZXR1cm47XG4gICAgICAgIGlmIChuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZCkgcmV0dXJuIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkO1xuXG4gICAgICAgIC8vcHJlcGVuZCB0aGUgbG9hZGVyIGVsZW1lbnRzXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdCA9IHRoaXMuX2xvYWRlckNsYXNzZXM7XG4gICAgICAgIGxldCBpbm5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJfZGl2LmNsYXNzTGlzdCA9IHRoaXMuX2xvYWRlcklubmVyRGl2Q2xhc3NlcztcbiAgICAgICAgZGl2LmFwcGVuZChpbm5lcl9kaXYpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoZGl2KTtcblxuICAgICAgICAvL2dldCBhbmQgY2FjaGUgYSByZWZlcmVuY2UgdG8gaXQgZm9yIGZ1dHVyZSByZXF1ZXN0c1xuICAgICAgICBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZCA9IGRvbS5nZXRFbGVtZW50KCcucGFnZS1uYXZpZ2F0aW9uLWxvYWRlcicpO1xuXG4gICAgICAgIHJldHVybiBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBpZiB0aGUgcmVxdWVzdCB0YWtlcyBtb3JlIHRoYW4gdGhlIGRlbGF5IHNldCBhYm92ZSB0byBjb21wbGV0ZVxuICAgICAqL1xuICAgIHNob3dMb2FkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlckVuYWJsZWQpIHJldHVybjtcblxuICAgICAgICBuYXZpZ2F0aW9uLmxvYWRlcl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9LCB0aGlzLmdldExvYWRlckRlbGF5KCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBoaWRlTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5sb2FkZXJFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgLy9pZiB0aGUgbG9hZGVyIHN0aWxsIGhhc24ndCBzaG93biB5ZXQsIHByZXZlbnQgaXQgYmVjYXVzZSB0aGUgcmVxdWVzdCB3YXMgdmVyeSBmYXN0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCk7XG5cbiAgICAgICAgLy9oaWRlIHRoZSBsb2FkZXJcbiAgICAgICAgbmF2aWdhdGlvbi5nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50cyBsaWtlIG1ldGEgdGFncyBhbmQgdGhlIGlubmVyIGNvbnRlbnQgb2YgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBJZiBubyBwYXJlbnQgZWxlbWVudCBpcyBwcm92aWRlZCwgaXQgd2lsbCBqdXN0IHJldHVybiB0aGUgcHJvdmlkZWQgaHRtbFxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gcGFyZW50X2VsXG4gICAgICogQHJldHVybnMge3ttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIHJvdXRlOiAoKnxhbnl8RWxlbWVudCksIGxpbmtzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtzdHJpbmddPiwgaHRtbDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICovXG4gICAgcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbCkge1xuICAgICAgICAvL2RlZmF1bHQgdG8gbnVsbCBpZiBub3QgcHJvdmlkZWRcbiAgICAgICAgcGFyZW50X2VsID0gdHlwZW9mIHBhcmVudF9lbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50X2VsO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwpIHRocm93IGBQcm92aWRlZCBwYXJlbnRfZWwgKCR7cGFyZW50X2VsfSkgaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuXG4gICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIGRvbVxuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2dldCBwYWdlIHRpdGxlXG4gICAgICAgIHZhciB0aXRsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuICAgICAgICB0aXRsZSA9IHRpdGxlID8gdGl0bGUuaW5uZXJUZXh0IDogbnVsbDtcblxuICAgICAgICAvL2dldCBhbnkgbWV0YSB0YWdzXG4gICAgICAgIHZhciBtZXRhcyA9IGRvYy5oZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgICAgIC8vZ2V0IHRoZSBjYW5vbmljYWwgbGlua1xuICAgICAgICB2YXIgbGlua3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJjYW5vbmljYWxcIl0nKTtcbiAgICAgICAgLy9nZXQgYm9keSBjbGFzc2VzXG4gICAgICAgIHZhciBib2R5X2NsYXNzZXMgPSBkb2MuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgIHZhciBuZXdfaHRtbCA9IGh0bWw7XG5cbiAgICAgICAgLy9pZiBhIHBhcmVudCBlbGVtZW50IHdhcyBwcm92aWRlZCwgZmluZCBpdFxuICAgICAgICBpZiAocGFyZW50X2VsKSB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50X2VsKTtcbiAgICAgICAgICAgIC8vaWYgY291bGRuJ3QgZmluZCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKCFzZWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGFyZW50IHNlbGVjdG9yICR7cGFyZW50X2VsfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2dyYWIgdGhlIG91dGVySFRNTFxuICAgICAgICAgICAgbmV3X2h0bWwgPSBzZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGhlIG5ldyBwYWdlJ3Mgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgdmFyIHJvdXRlID0gbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKGRvYyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uLCB5b3UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmUuXG4gICAgICAgIHBhcnNlciA9IGRvYyA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIG1ldGFzOiBtZXRhcyxcbiAgICAgICAgICAgIGxpbmtzOiBsaW5rcyxcbiAgICAgICAgICAgIGJvZHlfY2xhc3NlczogYm9keV9jbGFzc2VzLFxuICAgICAgICAgICAgaHRtbDogbmV3X2h0bWxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCByb3V0ZSBmcm9tIHRoZSBtZXRhIHRhZywgaWYgaXQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBJZiB5b3UgZG9uJ3QgcHJvdmlkZSBIVE1MLCBpdCdsbCBncmFiIGl0IGZyb20gdGhlIGN1cnJlbnQgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHthbnkgfCBFbGVtZW50fVxuICAgICAqL1xuICAgIGdldFJvdXRlRnJvbU1ldGE6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgIGh0bWwgPSB0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5oZWFkIDogaHRtbDtcbiAgICAgICAgdmFyIHJvdXRlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImN1cnJlbnRfcm91dGVcIl0nKTtcbiAgICAgICAgcm91dGUgPSByb3V0ZSA/IHJvdXRlLmNvbnRlbnQgOiBudWxsO1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aXRoIG5ldyBIVE1MXG4gICAgICpcbiAgICAgKiAxKSBUcmlnZ2VycyB1bmxvYWQoKVxuICAgICAqIDIpIFdhaXRzIDEwMG1zXG4gICAgICogMykgUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHNcbiAgICAgKiA0KSBSZXBsYWNlcyBhbGwgbWV0YSB0YWdzIChpbXBvcnRhbnQgZm9yIHNvY2lhbCBtZWRpYSBzaGFyaW5nIGFtb25nIG90aGVyIHRoaW5ncylcbiAgICAgKiA1KSBSZXBsYWNlcyB0aGUgY2Fub25pY2FsIHRhZ1xuICAgICAqIDYpIFJlcGxhY2VzIGFueSBjbGFzc2VzIG9uIHRoZSBib2R5IHNpbmNlIHRoZXkgYXJlIGdlbmVyYWxseSB1c2VkIHRvIGluZGljYXRlIHdoaWNoIHBhZ2UgeW91J3JlIG9uXG4gICAgICogNykgUHVzaGVzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAqIDgpIFNldHMgdGhlIHBhZ2UgdGl0bGVcbiAgICAgKiA5KSBSZXBsYWNlcyBjb250ZW50IGluIHRoZSBET01cbiAgICAgKiAxMCkgVHJpZ2dlcnMgb25sb2FkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICByZXBsYWNlUGFnZUNvbnRlbnQoaHRtbCwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgcHVzaF9zdGF0ZSA9IHR5cGVvZiBwdXNoX3N0YXRlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBwdXNoX3N0YXRlO1xuXG4gICAgICAgIGluY29taW5nX2VsID0gdHlwZW9mIGluY29taW5nX2VsID09PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdGhyb3cgYFByb3ZpZGVkIHVybCAoJHt1cmx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIGluY29taW5nX2VsICE9PSAnc3RyaW5nJykgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYgKHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJykgdGhyb3cgYFByb3ZpZGVkIHJlcGxhY2VfZWwgKCR7cmVwbGFjZV9lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAvL2dldCByZXBsYWNlX2VsIGFnYWluIGJlY2F1c2UgaXQgd2FzIHJlcGxhY2VkXG4gICAgICAgIG5hdmlnYXRpb24udHJpZ2dlclVubG9hZChkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgcmVwbGFjZV9lbCwgdGhpcy5nZXRSb3V0ZUZyb21NZXRhKCkpO1xuXG4gICAgICAgIC8vdmVyeSBzbGlnaHQgMTAwbXMgZGVsYXkgdG8gbGV0IHRoZSBvbiB1bmxvYWQgaGFuZGxlcnMgcnVuIGZpcnN0XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBwYXJzZWQgPSBuYXZpZ2F0aW9uLnBhcnNlSFRNTChodG1sLCBpbmNvbWluZ19lbCk7XG5cbiAgICAgICAgICAgIC8vaWYgdGhlcmUgaXMgSFRNTCB0byBwdXQgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIGlmIChwYXJzZWQuaHRtbC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmUoJ21ldGEnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAgICAgLy8gLSBwb3NzaWJseSBvdGhlciB0YWdzIHdpbGwgbmVlZCB0byBiZSB3aGl0ZWxpc3RlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyc2VkLmxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxpbmspO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgYm9keSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QgPSBwYXJzZWQuYm9keV9jbGFzc2VzO1xuXG4gICAgICAgICAgICAgICAgLy9wdXNoIHRoZSBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgICAgICAgICAgICBwdXNoX3N0YXRlICYmIGhpc3RvcnkucHVzaFN0YXRlKHt1cmw6IHVybH0sIHBhcnNlZC50aXRsZSwgdXJsKTtcblxuICAgICAgICAgICAgICAgIC8vdXBkYXRlIHRoZSB0YWIvcGFnZSB0aXRsZVxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uc2V0VGl0bGUocGFyc2VkLnRpdGxlKTtcblxuICAgICAgICAgICAgICAgIC8vcmVwbGFjZSBjb250ZW50IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3X2NvbnRlbnQgPSBkb20ucmVwbGFjZUVsV2l0aEhUTUwocmVwbGFjZV9lbCwgcGFyc2VkLmh0bWwpO1xuXG4gICAgICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24udHJpZ2dlck9uTG9hZChuZXdfY29udGVudCwgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHBhcnNlZC5yb3V0ZSk7XG5cbiAgICAgICAgICAgICAgICAvL2lmIHRoZSByZXBsYWNlX2VsIGlzIHRoZSBzYW1lIGFzIGdldFJlcGxhY2VFbGVtZW50KCksXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBpdCBzaG91bGQgYmUgdXBkYXRlZCB0byB3aGF0ZXZlciB0aGUgaW5jb21pbmdfZWwgaXMgYmVjYXVzZSBpdCBubyBsb25nZXIgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZ2V0UmVwbGFjZUVsZW1lbnQoKSAhPT0gcmVwbGFjZV9lbCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNldFJlcGxhY2VFbGVtZW50KGluY29taW5nX2VsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgY3VycmVudCBwYWdlIHVzaW5nIC5sb2FkKClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHJlbG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nID8gbnVsbCA6IGNhbGxiYWNrO1xuICAgICAgICBuYXZpZ2F0aW9uLmxvYWQocmVxdWVzdC5nZXRGdWxsVVJMKCksIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgZnVsbCByZWZyZXNoIG9mIHRoZSBjdXJyZW50IFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgZnVsbFJlbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgc2V0VGl0bGU6IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhIG5ldyBwYWdlIGxvYWRzLCB5b3UgcHJvYmFibHkgd2FudCB0byBraWNrb2ZmIHNvbWUgcGFnZS1zcGVjaWZpYyBKUy5cbiAgICAgKlxuICAgICAqIFRoZSBjYWxsYmFjayByZWNlaXZlcyB0aGUgZXZlbnQuXG4gICAgICogVGhlIGV2ZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBcImRldGFpbFwiIHdoaWNoIHdpbGwgY29udGFpbjpcbiAgICAgKiAgMSkgVGhlIHJlcGxhY2VfZWwgKHRoZSBlbGVtZW50IHdobydzIGNvbnRlbnQgd2FzIHN3YXBwZWQgb3V0KVxuICAgICAqICAyKSBUaGUgcm91dGUgKHlvdSBjYW4gZGVmaW5lIHRoaXMgaW4gYSBtZXRhIHRhZyBjYWxsZWQgXCJjdXJyZW50X3JvdXRlXCIgd2hpY2ggd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdyYWJiZWQgYW5kIHBhc3NlZCBhbG9uZylcbiAgICAgKiAgMykgQW55IGRhdGEgeW91IHNldCB1c2luZyAuc2V0UGFzc3Rocm91Z2hEYXRhKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmNvbXBsZXRlJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uVW5sb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uc3RhcnRlZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIG5ldyBwYWdlIGZhaWxzIHRvIGxvYWQsIHlvdSBzaG91bGQgcHJvYmFibHkgdGVsbCB0aGUgdXNlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25OYXZpZ2F0aW9uRmFpbHVyZTogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmZhaWxlZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIG9uIGEgbmV3IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQWxzbyBpbmNsdWRlcyB0aGUgcm91dGUgb2YgdGhlIG5ldyBwYWdlIChpZiBpdCBleGlzdHMgaW4gYSBtZXRhIHRhZykgc28gdGhhdCB5b3UgY2FuIGtpY2sgb2ZmIEpTIHNwZWNpZmljIHRvIHRoYXQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcGxhY2VkX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgdHJpZ2dlck9uTG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3RvciwgcmVwbGFjZWRfc2VsZWN0b3IsIHJvdXRlKSB7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlICE9PSAndW5kZWZpbmVkJyA/IHJvdXRlIDogbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKCk7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uY29tcGxldGUnLCB7XG4gICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICBlbF9zZWxlY3RvcjogZWxfc2VsZWN0b3IsXG4gICAgICAgICAgICByZXBsYWNlZF9zZWxlY3RvcjogcmVwbGFjZWRfc2VsZWN0b3IsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgICAgICBkYXRhOiB0aGlzLmdldFBhc3NUaHJvdWdoRGF0YSgpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBsZWF2aW5nIHRoZSBsYXN0IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgdHJpZ2dlclVubG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3Rvciwgcm91dGUpIHtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywge2VsOiBlbCwgZWxfc2VsZWN0b3I6IGVsX3NlbGVjdG9yLCByb3V0ZTogcm91dGV9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gZmFpbGVkLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSBheGlvc19lcnJvclxuICAgICAqL1xuICAgIHRyaWdnZXJOYXZpZ2F0aW9uRmFpbHVyZTogZnVuY3Rpb24gKGVycm9yLCBheGlvc19lcnJvcikge1xuICAgICAgICBldmVudHMudHJpZ2dlcignYm9keScsICduYXZpZ2F0aW9uLmZhaWxlZCcsIHtlcnJvcjogZXJyb3IsIGF4aW9zX2Vycm9yOiBheGlvc19lcnJvcn0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gdHJhY2sgdGhlIGJyb3dzZXIncyBoaXN0b3J5IGJ1dHRvbnMgKGJhY2svZm9yd2FyZClcbiAgICAgKlxuICAgICAqIEB0b2RvOiBJbnZlc3RpZ2F0ZSBwb3NzaWJsZSBpc3N1ZSB3aXRoIGNocm9tZSBjYWNoaW5nIGJhY2sgYnV0dG9uIGNvbnRlbnRzIGFuZCBub3QgbG9hZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgICAgKi9cbiAgICBpbml0SGlzdG9yeUhhbmRsZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vZm9yd2FyZCBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucHVzaHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2JhY2sgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVlcnkgc3RyaW5nIHZhcmlhYmxlc1xuICAgICAqXG4gICAgICogQHJldHVybnMgVVJMU2VhcmNoUGFyYW1zXG4gICAgICovXG4gICAgcXVlcnk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCB3YXMgbWFkZSBzZWN1cmVseSBvdmVyIFNTTCAoaHR0cHMgaW5zdGVhZCBvZiBodHRwKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIdHRwczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBteS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluV2l0aFByb3RvY29sOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUklcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUkk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSSSB3aXRoIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBVUkxcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbS9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxVUkw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNsYXNoIHRvIGEgc3RyaW5nIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20gYmVjb21lcyBodHRwczovL215LWRvbWFpbi5jb20vXG4gICAgICogRXhhbXBsZTogL215LXByb2R1Y3QgYmVjb21lcyAvbXktcHJvZHVjdC9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFwcGVuZFNsYXNoOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICByZXR1cm4gdXJsW3VybC5sZW5ndGgtMV0gIT09ICcvJyA/IHVybCsnLycgOiB1cmw7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2xhc3N9IGZyb20gXCIuLi9BYnN0cmFjdENsYXNzXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xuY29uc3Qgc2l0ZV9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOm51bGwsXG4gICAgY29uZmlnOnt9LFxufTtcblxuLyoqXG4gKlxuICogU2l0ZSAoZm9yIG11bHRpLXRlbmFudCBhcHBsaWNhdGlvbnMpXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggdGhlIGN1cnJlbnQgd2Vic2l0ZSdzIGlkLCBuYW1lLCBhbmQgY29uZmlnIG9wdGlvbnNcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTaXRlIGV4dGVuZHMgQWJzdHJhY3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IFsnaWQnLCAnbmFtZScsICdjb25maWcnXTtcblxuICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gdGhpcztcblxuICAgICAgICAvL2V4dGVuZCB1c2VyX2RlZmF1bHRzIHdpdGggaW5jb21pbmcgZGF0YVxuICAgICAgICBkYXRhID0gey4uLnNpdGVfZGVmYXVsdHMsIC4uLmRhdGF9O1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJZChpZCkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2dldHMgdGhlIHdlYnNpdGUncyBuYW1lXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIGNvbmZpZyBkYXRhXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIC8vc2V0cyBhbGwgY29uZmlnIGRhdGEgdXNpbmcgdGhlIHByb3ZpZGVkIG9iamVjdFxuICAgIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgLy9tdXN0IGJlIGEgZGF0YSBvYmplY3QsIGV2ZW4gaWYgaXQncyBlbXB0eVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoY29uZmlnLCBudWxsLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFuIGluZGl2aWR1YWwgY29uZmlnIHZhbHVlIG9yIG51bGwgaWYgaXQncyBub3QgZGVmaW5lZFxuICAgIGdldENvbmZpZ0l0ZW0oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fY29uZmlnW2tleV07XG4gICAgfVxuXG4gICAgLy9hZGRzIG9yIHVwZGF0ZXMgYSB2YWx1ZSBpbiB0aGUgY29uZmlnIG9iamVjdFxuICAgIHNldENvbmZpZ0l0ZW0oa2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCIvKipcbiAqIE1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29tbW9uIHN0cmluZyBtYW5pcHVsYXRpb25zXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3MuZ2V0dGVyKCduYW1lJykgcmV0dXJucyAnZ2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdnZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3Muc2V0dGVyKCduYW1lJykgcmV0dXJucyAnc2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdzZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHVjZmlyc3QoKSBmdW5jdGlvbmFsaXR5IHRvIEpTIChsaWtlIFBIUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgdWNmaXJzdDogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxufTsiLCJpbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL2V2ZW50c1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLyoqXG4gKiBUb2dnbGVzIGFuIGVsZW1lbnQgb24gY2xpY2sgb2YgYSBidXR0b24sIGNsaWNrIG91dHNpZGUgdGhlIGVsZW1lbnQgKGlmIGl0J3MgdmlzaWJsZSksIG9yIG9uIHdpbmRvdyByZXNpemVcbiAqXG4gKiBUaGUgYnJlYWtwb2ludCBpcyBiYXNlZCBvbiB2aXNpYmlsaXR5IG9mIHRoZSBidXR0b24uXG4gKiAgIElmIHRoZSBidXR0b24gaXMgdmlzaWJsZSwgdGhlIGVsZW1lbnQgd2lsbCBub3QgYmUgKHVubGVzcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQpXG4gKiAgIElmIHRoZSBidXR0b24gaXMgaGlkZGVuLCB0aGUgZWxlbWVudCB3aWxsIGJlIHZpc2libGVcbiAqXG4gKiBObyBzdHlsZXMgYXJlIHByb3ZpZGVkIHdpdGggdGhpcyBjb21wb25lbnQgc28gZmVlbCBmcmVlIHRvIGdvIGNyYXp5LlxuICogICBUaGVyZSdzIGEgbG90IHlvdSBjYW4gZG8gd2hlbiBhIHNpbmdsZSBjbGFzcyBpcyB0b2dnbGVkLlxuICpcbiAqIFVzZSBjYXNlczpcbiAqIDEpIENoYW5nZSBmcm9tIGEgc2lkZWJhciBvbiBkZXNrdG9wIHRvIGEgcG9wdXAgb24gbW9iaWxlXG4gKiAyKSBDaGFuZ2UgZnJvbSBhbiBpbmxpbmUgbWVudSBvbiBkZXNrdG9wIHRvIGEgc2xpZGUtaW4gb24gbW9iaWxlXG4gKiAuLi5JJ20gc3VyZSB5b3UgY2FuIHRoaW5rIG9mIHNvbWVcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2dnbGVPbk1vYmlsZXtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBidG5cbiAgICAgKiBAcGFyYW0gdG9nZ2xlX2VsXG4gICAgICogQHBhcmFtIHRvZ2dsZV9jbGFzc1xuICAgICAqIEBwYXJhbSBoaWRlX29uX291dHNpZGVfY2xpY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidG4sIHRvZ2dsZV9lbCwgdG9nZ2xlX2NsYXNzLCBoaWRlX29uX291dHNpZGVfY2xpY2spe1xuICAgICAgICAvL3NldCB0aGUgZWxlbWVudHNcbiAgICAgICAgdGhpcy5idG4gPSBkb20uZ2V0RWxlbWVudChidG4sIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9lbCA9IGRvbS5nZXRFbGVtZW50KHRvZ2dsZV9lbCwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRydWVcbiAgICAgICAgdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgPSB0eXBlb2YgaGlkZV9vbl9vdXRzaWRlX2NsaWNrICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiBoaWRlX29uX291dHNpZGVfY2xpY2s7XG5cbiAgICAgICAgLy9pZiBub3QgYSBzdHJpbmcsIGRlZmF1bHQgdG8gXCJ2aXNpYmxlXCJcbiAgICAgICAgdGhpcy50b2dnbGVfY2xhc3MgPSB0eXBlb2YgdG9nZ2xlX2NsYXNzICE9PSAnc3RyaW5nJyA/ICd2aXNpYmxlJyA6IHRvZ2dsZV9jbGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGFuZCBydW5zIG9uV2luZG93UmVzaXplIGltbWVkaWF0ZWx5IHRvIHNldCB0aGUgaW5pdGlhbCBjbGFzc1xuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy90byBiZSB1c2VkIGluc2lkZSB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9jcmVhdGUgYSB0aHJvdHRsZWQgd2luZG93IHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgIGxldCB0aHJvdHRsZTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRocm90dGxlKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYoIGRvbS5pc1Zpc2libGUoc2VsZi5idG4pICl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LmFkZChzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiggdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0X2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBvbiB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi5idG4pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5idG4gPT09IHRhcmdldF9lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldF9lbCA9IHRhcmdldF9lbC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldF9lbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgb24gdGhlIGVsZW1lbnQgd2UgYXJlIHRvZ2dsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi50b2dnbGVfZWwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgZWxlbWVudCB3ZSBhcmUgdG9nZ2xpbmdcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRvZ2dsZV9lbCA9PT0gdGFyZ2V0X2VsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0X2VsID0gdGFyZ2V0X2VsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgaGlkZSBpdFxuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2xpY2tUb2dnbGVCdG4gPSBldmVudHMub25DbGljayh0aGlzLmJ0biwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC50b2dnbGUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgaWYoIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrICkge1xuICAgICAgICAgICAgZXZlbnRzLm9mZignYm9keScsICdjbGljaycsIHRoaXMub25DbGlja091dHNpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50cy5vZmYodGhpcy5idG4sICdjbGljaycsIHRoaXMub25DbGlja1RvZ2dsZUJ0bik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMsIGJsb2NrX290aGVyX2tleXMsIHRocm93X2Vycm9yKXtcbiAgICAgICAgLy9kZWZhdWx0IGZvciB0aHJvd19lcnJvciBpcyBmYWxzZVxuICAgICAgICB0aHJvd19lcnJvciA9IHR5cGVvZiB0aHJvd19lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiA/IHRocm93X2Vycm9yIDogZmFsc2U7XG5cbiAgICAgICAgLy9kZWZhdWx0IGZvciByZXF1aXJlX2FsbF9rZXlzIGlzIGZhbHNlXG4gICAgICAgIHJlcXVpcmVfYWxsX2tleXMgPSB0eXBlb2YgcmVxdWlyZV9hbGxfa2V5cyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcXVpcmVfYWxsX2tleXMgOiBmYWxzZTtcblxuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG4gICAgICAgIC8vaWYgbm90IGFuIG9iamVjdCwgbnVsbCwgb3IgYW4gYXJyYXlcbiAgICAgICAgaWYoICFpc19vYmplY3QgfHwgdmFsdWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgd2UgbmVlZCB0byB2ZXJpZnkgdGhlIGtleXMgdGhpcyBvYmplY3QgY29udGFpbnNcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoa2V5cykgKSB7XG4gICAgICAgICAgICBsZXQgZm91bmRfa2V5ID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbWlzc2luZ19rZXlzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXkgd2FzIGZvdW5kLCB3ZSBmb3VuZCBhdGxlYXN0IG9uZVxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZV9rZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfa2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZiBpdCdzIG5vdCBmb3VuZCwgd2UgY2FuJ3Qgc2F5IGFsbCBrZXlzIGV4aXN0IGluIHRoaXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ19rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9pZiBub3Qgb25lIG9mIHRoZSBrZXlzIHdlcmUgZm91bmRcbiAgICAgICAgICAgIGlmKCAhZm91bmRfa2V5ICl7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBgK2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZGlkbid0IGZpbmQgYWxsIHRoZSBrZXlzXG4gICAgICAgICAgICBpZiggcmVxdWlyZV9hbGxfa2V5cyAmJiBtaXNzaW5nX2tleXMubGVuZ3RoIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG1pc3NpbmcgZGF0YTogYCttaXNzaW5nX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZG9uJ3QgYWxsb3cgYW55IGtleXMgTk9UIGluIHRoZSBrZXlzIGFycmF5XG4gICAgICAgICAgICBpZiggYmxvY2tfb3RoZXJfa2V5cyApe1xuICAgICAgICAgICAgICAgIGxldCB1bnJlY29nbml6ZWRfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFsdWVfa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiggIWtleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5yZWNvZ25pemVkX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiggdW5yZWNvZ25pemVkX2tleXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gY29udGFpbnMgaW52YWxpZCBkYXRhOiBgK3VucmVjb2duaXplZF9rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2FsbCBjaGVja3MgcGFzc2VkISBjb25ncmF0cywgaXQncyBhbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuXG4vKipcbiAqXG4gKiBVc2VyXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggYSB1c2VyIGFuZCB0aGVpciBwZXJtaXNzaW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ2lzR3Vlc3QnLCAnaXNBZG1pbicsICd1c2VybmFtZScsICdmbmFtZScsICdsbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdwZXJtaXNzaW9ucycsICdhZGRpdGlvbmFsRGF0YSddOyBcbiAgICAgICAgXG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiB0aGlzO1xuXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uZGF0YX07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHNldElkKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJc0d1ZXN0KGlzX2d1ZXN0KXtcbiAgICAgICAgdGhpcy5faXNHdWVzdCA9IGlzX2d1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNHdWVzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHdWVzdDtcbiAgICB9XG5cbiAgICBzZXRJc0FkbWluKGlzX2FkbWluKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNBZG1pbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBZG1pbjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSl7XG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRVc2VybmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Rm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZuYW1lO1xuICAgIH1cbiAgICBzZXRGbmFtZShmaXJzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fZm5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRMbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfVxuICAgIHNldExuYW1lKGxhc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2xuYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGbmFtZSgpICsgJyAnICsgdGhpcy5nZXRMbmFtZSgpO1xuICAgIH1cblxuICAgIGdldEVtYWlsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9XG4gICAgc2V0RW1haWwoZW1haWwpe1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRQaG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGhvbmU7XG4gICAgfVxuICAgIHNldFBob25lKHBob25lKXtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0UGVybWlzc2lvbnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9ucyl7XG4gICAgICAgIGlmKCAhQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykgKSB0aHJvdyBcInNldFBlcm1pc3Npb25zIHJlcXVpcmVzIGFuIGFycmF5XCI7XG5cbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1JlbW92ZXMgYSBzaW5nbGUgcGVybWlzc2lvbiBmcm9tIHRoaXMgdXNlclxuICAgIHJlbW92ZVBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuc2V0UGVybWlzc2lvbnModGhpcy5fcGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJtaXNzaW9ucygpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbERhdGE7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBzZXRBZGRpdGlvbmFsRGF0YShhZGRpdGlvbmFsX2RhdGEpe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChhZGRpdGlvbmFsX2RhdGEsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XTtcbiAgICB9XG4gICAgLy9zZXRzIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0RGF0YUl0ZW0oa2V5LCB2YWwpe1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHV0aWxzLmZvckVhY2goWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ10sIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J10sIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsXG4gICAgJ3NvY2tldFBhdGgnXG4gIF0sIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIC8vIE9ubHkgTm9kZS5KUyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCI7KGZ1bmN0aW9uKCl7dmFyIGs7ZnVuY3Rpb24gbShhKXt2YXIgYj0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fX12YXIgcD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9LHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcztmdW5jdGlvbiByKCl7cj1mdW5jdGlvbigpe307cS5TeW1ib2x8fChxLlN5bWJvbD11KX1mdW5jdGlvbiB2KGEsYil7dGhpcy5zPWE7cCh0aGlzLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX1cbnYucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc307dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGMpe2lmKHRoaXMgaW5zdGFuY2VvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG5ldyB2KFwianNjb21wX3N5bWJvbF9cIisoY3x8XCJcIikrXCJfXCIrYisrLGMpfXZhciBiPTA7cmV0dXJuIGF9KCk7ZnVuY3Rpb24gdygpe3IoKTt2YXIgYT1xLlN5bWJvbC5pdGVyYXRvcjthfHwoYT1xLlN5bWJvbC5pdGVyYXRvcj1xLlN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZwKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4geChtKHRoaXMpKX19KTt3PWZ1bmN0aW9uKCl7fX1cbmZ1bmN0aW9uIHgoYSl7dygpO2E9e25leHQ6YX07YVtxLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9ZnVuY3Rpb24geShhKXt2YXIgYj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJmFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYj9iLmNhbGwoYSk6e25leHQ6bShhKX19dmFyIHo7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKXo9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIEE7YTp7dmFyIEI9e3Y6ITB9LEM9e307dHJ5e0MuX19wcm90b19fPUI7QT1DLnY7YnJlYWsgYX1jYXRjaChhKXt9QT0hMX16PUE/ZnVuY3Rpb24oYSxiKXthLl9fcHJvdG9fXz1iO2lmKGEuX19wcm90b19fIT09Yil0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIEQ9ejtcbmZ1bmN0aW9uIEUoKXt0aGlzLmg9ITE7dGhpcy5jPW51bGw7dGhpcy5vPXZvaWQgMDt0aGlzLmI9MTt0aGlzLm09dGhpcy53PTA7dGhpcy5nPW51bGx9ZnVuY3Rpb24gRihhKXtpZihhLmgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7YS5oPSEwfUUucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7dGhpcy5vPWF9O0UucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7dGhpcy5nPXtBOmEsQjohMH07dGhpcy5iPXRoaXMud3x8dGhpcy5tfTtFLnByb3RvdHlwZVtcInJldHVyblwiXT1mdW5jdGlvbihhKXt0aGlzLmc9e1wicmV0dXJuXCI6YX07dGhpcy5iPXRoaXMubX07ZnVuY3Rpb24gRyhhLGIsYyl7YS5iPWM7cmV0dXJue3ZhbHVlOmJ9fWZ1bmN0aW9uIEgoYSl7dGhpcy5DPWE7dGhpcy5sPVtdO2Zvcih2YXIgYiBpbiBhKXRoaXMubC5wdXNoKGIpO3RoaXMubC5yZXZlcnNlKCl9ZnVuY3Rpb24gSShhKXt0aGlzLmE9bmV3IEU7dGhpcy5EPWF9XG5JLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0YodGhpcy5hKTtpZih0aGlzLmEuYylyZXR1cm4gSih0aGlzLHRoaXMuYS5jLm5leHQsYSx0aGlzLmEuaSk7dGhpcy5hLmkoYSk7cmV0dXJuIEsodGhpcyl9O2Z1bmN0aW9uIEwoYSxiKXtGKGEuYSk7dmFyIGM9YS5hLmM7aWYoYylyZXR1cm4gSihhLFwicmV0dXJuXCJpbiBjP2NbXCJyZXR1cm5cIl06ZnVuY3Rpb24oZCl7cmV0dXJue3ZhbHVlOmQsZG9uZTohMH19LGIsYS5hW1wicmV0dXJuXCJdKTthLmFbXCJyZXR1cm5cIl0oYik7cmV0dXJuIEsoYSl9SS5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtGKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEoodGhpcyx0aGlzLmEuY1tcInRocm93XCJdLGEsdGhpcy5hLmkpO3RoaXMuYS5qKGEpO3JldHVybiBLKHRoaXMpfTtcbmZ1bmN0aW9uIEooYSxiLGMsZCl7dHJ5e3ZhciBlPWIuY2FsbChhLmEuYyxjKTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJdGVyYXRvciByZXN1bHQgXCIrZStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO2lmKCFlLmRvbmUpcmV0dXJuIGEuYS5oPSExLGU7dmFyIGY9ZS52YWx1ZX1jYXRjaChnKXtyZXR1cm4gYS5hLmM9bnVsbCxhLmEuaihnKSxLKGEpfWEuYS5jPW51bGw7ZC5jYWxsKGEuYSxmKTtyZXR1cm4gSyhhKX1mdW5jdGlvbiBLKGEpe2Zvcig7YS5hLmI7KXRyeXt2YXIgYj1hLkQoYS5hKTtpZihiKXJldHVybiBhLmEuaD0hMSx7dmFsdWU6Yi52YWx1ZSxkb25lOiExfX1jYXRjaChjKXthLmEubz12b2lkIDAsYS5hLmooYyl9YS5hLmg9ITE7aWYoYS5hLmcpe2I9YS5hLmc7YS5hLmc9bnVsbDtpZihiLkIpdGhyb3cgYi5BO3JldHVybnt2YWx1ZTpiW1wicmV0dXJuXCJdLGRvbmU6ITB9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19XG5mdW5jdGlvbiBNKGEpe3RoaXMubmV4dD1mdW5jdGlvbihiKXtyZXR1cm4gYS5pKGIpfTt0aGlzW1widGhyb3dcIl09ZnVuY3Rpb24oYil7cmV0dXJuIGEuaihiKX07dGhpc1tcInJldHVyblwiXT1mdW5jdGlvbihiKXtyZXR1cm4gTChhLGIpfTt3KCk7dGhpc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIE4oYSxiKXt2YXIgYz1uZXcgTShuZXcgSShiKSk7RCYmRChjLGEucHJvdG90eXBlKTtyZXR1cm4gY31cbmlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBCbG9iJiYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiBGb3JtRGF0YXx8IUZvcm1EYXRhLnByb3RvdHlwZS5rZXlzKSl7dmFyIE89ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKyliKGFbY10pfSxQPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYiBpbnN0YW5jZW9mIEJsb2I/W1N0cmluZyhhKSxiLHZvaWQgMCE9PWM/YytcIlwiOlwic3RyaW5nXCI9PT10eXBlb2YgYi5uYW1lP2IubmFtZTpcImJsb2JcIl06W1N0cmluZyhhKSxTdHJpbmcoYildfSxRPWZ1bmN0aW9uKGEsYil7aWYoYS5sZW5ndGg8Yil0aHJvdyBuZXcgVHlwZUVycm9yKGIrXCIgYXJndW1lbnQgcmVxdWlyZWQsIGJ1dCBvbmx5IFwiK2EubGVuZ3RoK1wiIHByZXNlbnQuXCIpO30sUz1mdW5jdGlvbihhKXt2YXIgYj15KGEpO2E9Yi5uZXh0KCkudmFsdWU7Yj1iLm5leHQoKS52YWx1ZTthIGluc3RhbmNlb2YgQmxvYiYmKGE9bmV3IEZpbGUoW2FdLGIse3R5cGU6YS50eXBlLGxhc3RNb2RpZmllZDphLmxhc3RNb2RpZmllZH0pKTtcbnJldHVybiBhfSxUPVwib2JqZWN0XCI9PT10eXBlb2Ygd2luZG93P3dpbmRvdzpcIm9iamVjdFwiPT09dHlwZW9mIHNlbGY/c2VsZjp0aGlzLFU9VC5Gb3JtRGF0YSxWPVQuWE1MSHR0cFJlcXVlc3QmJlQuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQsVz1ULlJlcXVlc3QmJlQuZmV0Y2gsWD1ULm5hdmlnYXRvciYmVC5uYXZpZ2F0b3Iuc2VuZEJlYWNvbjtyKCk7dmFyIFk9VC5TeW1ib2wmJlN5bWJvbC50b1N0cmluZ1RhZztZJiYoQmxvYi5wcm90b3R5cGVbWV18fChCbG9iLnByb3RvdHlwZVtZXT1cIkJsb2JcIiksXCJGaWxlXCJpbiBUJiYhRmlsZS5wcm90b3R5cGVbWV0mJihGaWxlLnByb3RvdHlwZVtZXT1cIkZpbGVcIikpO3RyeXtuZXcgRmlsZShbXSxcIlwiKX1jYXRjaChhKXtULkZpbGU9ZnVuY3Rpb24oYixjLGQpe2I9bmV3IEJsb2IoYixkKTtkPWQmJnZvaWQgMCE9PWQubGFzdE1vZGlmaWVkP25ldyBEYXRlKGQubGFzdE1vZGlmaWVkKTpuZXcgRGF0ZTtPYmplY3QuZGVmaW5lUHJvcGVydGllcyhiLFxue25hbWU6e3ZhbHVlOmN9LGxhc3RNb2RpZmllZERhdGU6e3ZhbHVlOmR9LGxhc3RNb2RpZmllZDp7dmFsdWU6K2R9LHRvU3RyaW5nOnt2YWx1ZTpmdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGaWxlXVwifX19KTtZJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYixZLHt2YWx1ZTpcIkZpbGVcIn0pO3JldHVybiBifX1yKCk7dygpO3ZhciBaPWZ1bmN0aW9uKGEpe3RoaXMuZj1PYmplY3QuY3JlYXRlKG51bGwpO2lmKCFhKXJldHVybiB0aGlzO3ZhciBiPXRoaXM7TyhhLmVsZW1lbnRzLGZ1bmN0aW9uKGMpe2lmKGMubmFtZSYmIWMuZGlzYWJsZWQmJlwic3VibWl0XCIhPT1jLnR5cGUmJlwiYnV0dG9uXCIhPT1jLnR5cGUpaWYoXCJmaWxlXCI9PT1jLnR5cGUpe3ZhciBkPWMuZmlsZXMmJmMuZmlsZXMubGVuZ3RoP2MuZmlsZXM6W25ldyBGaWxlKFtdLFwiXCIse3R5cGU6XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIn0pXTtPKGQsZnVuY3Rpb24oZSl7Yi5hcHBlbmQoYy5uYW1lLGUpfSl9ZWxzZVwic2VsZWN0LW11bHRpcGxlXCI9PT1cbmMudHlwZXx8XCJzZWxlY3Qtb25lXCI9PT1jLnR5cGU/TyhjLm9wdGlvbnMsZnVuY3Rpb24oZSl7IWUuZGlzYWJsZWQmJmUuc2VsZWN0ZWQmJmIuYXBwZW5kKGMubmFtZSxlLnZhbHVlKX0pOlwiY2hlY2tib3hcIj09PWMudHlwZXx8XCJyYWRpb1wiPT09Yy50eXBlP2MuY2hlY2tlZCYmYi5hcHBlbmQoYy5uYW1lLGMudmFsdWUpOihkPVwidGV4dGFyZWFcIj09PWMudHlwZT9jLnZhbHVlLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpLnJlcGxhY2UoL1xcbi9nLFwiXFxyXFxuXCIpOmMudmFsdWUsYi5hcHBlbmQoYy5uYW1lLGQpKX0pfTtrPVoucHJvdG90eXBlO2suYXBwZW5kPWZ1bmN0aW9uKGEsYixjKXtRKGFyZ3VtZW50cywyKTt2YXIgZD15KFAuYXBwbHkobnVsbCxhcmd1bWVudHMpKTthPWQubmV4dCgpLnZhbHVlO2I9ZC5uZXh0KCkudmFsdWU7Yz1kLm5leHQoKS52YWx1ZTtkPXRoaXMuZjtkW2FdfHwoZFthXT1bXSk7ZFthXS5wdXNoKFtiLGNdKX07a1tcImRlbGV0ZVwiXT1mdW5jdGlvbihhKXtRKGFyZ3VtZW50cyxcbjEpO2RlbGV0ZSB0aGlzLmZbU3RyaW5nKGEpXX07ay5lbnRyaWVzPWZ1bmN0aW9uIGIoKXt2YXIgYz10aGlzLGQsZSxmLGcsaCx0O3JldHVybiBOKGIsZnVuY3Rpb24obCl7c3dpdGNoKGwuYil7Y2FzZSAxOmQ9Yy5mLGY9bmV3IEgoZCk7Y2FzZSAyOnZhciBuO2E6e2ZvcihuPWY7MDxuLmwubGVuZ3RoOyl7dmFyIFI9bi5sLnBvcCgpO2lmKFIgaW4gbi5DKXtuPVI7YnJlYWsgYX19bj1udWxsfWlmKG51bGw9PShlPW4pKXtsLmI9MDticmVha31nPXkoZFtlXSk7aD1nLm5leHQoKTtjYXNlIDU6aWYoaC5kb25lKXtsLmI9MjticmVha310PWgudmFsdWU7cmV0dXJuIEcobCxbZSxTKHQpXSw2KTtjYXNlIDY6aD1nLm5leHQoKSxsLmI9NX19KX07ay5mb3JFYWNoPWZ1bmN0aW9uKGIsYyl7UShhcmd1bWVudHMsMSk7Zm9yKHZhciBkPXkodGhpcyksZT1kLm5leHQoKTshZS5kb25lO2U9ZC5uZXh0KCkpe3ZhciBmPXkoZS52YWx1ZSk7ZT1mLm5leHQoKS52YWx1ZTtmPWYubmV4dCgpLnZhbHVlO1xuYi5jYWxsKGMsZixlLHRoaXMpfX07ay5nZXQ9ZnVuY3Rpb24oYil7UShhcmd1bWVudHMsMSk7dmFyIGM9dGhpcy5mO2I9U3RyaW5nKGIpO3JldHVybiBjW2JdP1MoY1tiXVswXSk6bnVsbH07ay5nZXRBbGw9ZnVuY3Rpb24oYil7UShhcmd1bWVudHMsMSk7cmV0dXJuKHRoaXMuZltTdHJpbmcoYildfHxbXSkubWFwKFMpfTtrLmhhcz1mdW5jdGlvbihiKXtRKGFyZ3VtZW50cywxKTtyZXR1cm4gU3RyaW5nKGIpaW4gdGhpcy5mfTtrLmtleXM9ZnVuY3Rpb24gYygpe3ZhciBkPXRoaXMsZSxmLGcsaCx0O3JldHVybiBOKGMsZnVuY3Rpb24obCl7MT09bC5iJiYoZT15KGQpLGY9ZS5uZXh0KCkpO2lmKDMhPWwuYil7aWYoZi5kb25lKXtsLmI9MDtyZXR1cm59Zz1mLnZhbHVlO2g9eShnKTt0PWgubmV4dCgpLnZhbHVlO3JldHVybiBHKGwsdCwzKX1mPWUubmV4dCgpO2wuYj0yfSl9O2suc2V0PWZ1bmN0aW9uKGMsZCxlKXtRKGFyZ3VtZW50cywyKTt2YXIgZj1QLmFwcGx5KG51bGwsYXJndW1lbnRzKTtcbnRoaXMuZltmWzBdXT1bW2ZbMV0sZlsyXV1dfTtrLnZhbHVlcz1mdW5jdGlvbiBkKCl7dmFyIGU9dGhpcyxmLGcsaCx0LGw7cmV0dXJuIE4oZCxmdW5jdGlvbihuKXsxPT1uLmImJihmPXkoZSksZz1mLm5leHQoKSk7aWYoMyE9bi5iKXtpZihnLmRvbmUpe24uYj0wO3JldHVybn1oPWcudmFsdWU7dD15KGgpO3QubmV4dCgpO2w9dC5uZXh0KCkudmFsdWU7cmV0dXJuIEcobixsLDMpfWc9Zi5uZXh0KCk7bi5iPTJ9KX07Wi5wcm90b3R5cGUuX2FzTmF0aXZlPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPW5ldyBVLGU9eSh0aGlzKSxmPWUubmV4dCgpOyFmLmRvbmU7Zj1lLm5leHQoKSl7dmFyIGc9eShmLnZhbHVlKTtmPWcubmV4dCgpLnZhbHVlO2c9Zy5uZXh0KCkudmFsdWU7ZC5hcHBlbmQoZixnKX1yZXR1cm4gZH07Wi5wcm90b3R5cGUuX2Jsb2I9ZnVuY3Rpb24oKXtmb3IodmFyIGQ9XCItLS0tZm9ybWRhdGEtcG9seWZpbGwtXCIrTWF0aC5yYW5kb20oKSxlPVtdLGY9eSh0aGlzKSxnPWYubmV4dCgpOyFnLmRvbmU7Zz1cbmYubmV4dCgpKXt2YXIgaD15KGcudmFsdWUpO2c9aC5uZXh0KCkudmFsdWU7aD1oLm5leHQoKS52YWx1ZTtlLnB1c2goXCItLVwiK2QrXCJcXHJcXG5cIik7aCBpbnN0YW5jZW9mIEJsb2I/ZS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiOyBmaWxlbmFtZT1cIicraC5uYW1lKydcIlxcclxcbicsXCJDb250ZW50LVR5cGU6IFwiKyhoLnR5cGV8fFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCIpK1wiXFxyXFxuXFxyXFxuXCIsaCxcIlxcclxcblwiKTplLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCJcXHJcXG5cXHJcXG4nK2grXCJcXHJcXG5cIil9ZS5wdXNoKFwiLS1cIitkK1wiLS1cIik7cmV0dXJuIG5ldyBCbG9iKGUse3R5cGU6XCJtdWx0aXBhcnQvZm9ybS1kYXRhOyBib3VuZGFyeT1cIitkfSl9O1oucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbnRyaWVzKCl9O1oucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEZvcm1EYXRhXVwifTtcblkmJihaLnByb3RvdHlwZVtZXT1cIkZvcm1EYXRhXCIpO2lmKFYpe3ZhciBhYT1ULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyO1QuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI9ZnVuY3Rpb24oZCxlKXtcImNvbnRlbnQtdHlwZVwiPT09ZC50b0xvd2VyQ2FzZSgpJiYodGhpcy51PSEwKTtyZXR1cm4gYWEuY2FsbCh0aGlzLGQsZSl9O1QuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZCl7ZCBpbnN0YW5jZW9mIFo/KGQ9ZC5fYmxvYigpLHRoaXMudXx8dGhpcy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsZC50eXBlKSxWLmNhbGwodGhpcyxkKSk6Vi5jYWxsKHRoaXMsZCl9fWlmKFcpe3ZhciBiYT1ULmZldGNoO1QuZmV0Y2g9ZnVuY3Rpb24oZCxlKXtlJiZlLmJvZHkmJmUuYm9keSBpbnN0YW5jZW9mIFomJihlLmJvZHk9ZS5ib2R5Ll9ibG9iKCkpO3JldHVybiBiYS5jYWxsKHRoaXMsZCxlKX19WCYmXG4oVC5uYXZpZ2F0b3Iuc2VuZEJlYWNvbj1mdW5jdGlvbihkLGUpe2UgaW5zdGFuY2VvZiBaJiYoZT1lLl9hc05hdGl2ZSgpKTtyZXR1cm4gWC5jYWxsKHRoaXMsZCxlKX0pO1QuRm9ybURhdGE9Wn07XG59KSgpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICpcbiAqXG4gKiBAYXV0aG9yIEplcnJ5IEJlbmR5IDxqZXJyeUBpY2V3aW5nY2MuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKlxuICovXG5cbihmdW5jdGlvbihzZWxmKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA9IChzZWxmLlVSTFNlYXJjaFBhcmFtcyAmJiBzZWxmLlVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZ2V0KSA/IHNlbGYuVVJMU2VhcmNoUGFyYW1zIDogbnVsbCxcbiAgICAgICAgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgKG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoe2E6IDF9KSkudG9TdHJpbmcoKSA9PT0gJ2E9MScsXG4gICAgICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIHNhZmFyaSAxMC4xIChhbmQgZWFybGllcikgdGhhdCBpbmNvcnJlY3RseSBkZWNvZGVzIGAlMkJgIGFzIGFuIGVtcHR5IHNwYWNlIGFuZCBub3QgYSBwbHVzLlxuICAgICAgICBkZWNvZGVzUGx1c2VzQ29ycmVjdGx5ID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKCdzPSUyQicpLmdldCgncycpID09PSAnKycpLFxuICAgICAgICBfX1VSTFNlYXJjaFBhcmFtc19fID0gXCJfX1VSTFNlYXJjaFBhcmFtc19fXCIsXG4gICAgICAgIC8vIEZpeCBidWcgaW4gRWRnZSB3aGljaCBjYW5ub3QgZW5jb2RlICcgJicgY29ycmVjdGx5XG4gICAgICAgIGVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5ID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zID8gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFtcGVyc2FuZFRlc3QgPSBuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBhbXBlcnNhbmRUZXN0LmFwcGVuZCgncycsICcgJicpO1xuICAgICAgICAgICAgcmV0dXJuIGFtcGVyc2FuZFRlc3QudG9TdHJpbmcoKSA9PT0gJ3M9KyUyNic7XG4gICAgICAgIH0pKCkgOiB0cnVlLFxuICAgICAgICBwcm90b3R5cGUgPSBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbC5wcm90b3R5cGUsXG4gICAgICAgIGl0ZXJhYmxlID0gISEoc2VsZi5TeW1ib2wgJiYgc2VsZi5TeW1ib2wuaXRlcmF0b3IpO1xuXG4gICAgaWYgKG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiBpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciAmJiBkZWNvZGVzUGx1c2VzQ29ycmVjdGx5ICYmIGVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1ha2UgYSBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHN0cmluZ3xVUkxTZWFyY2hQYXJhbXN9IHNlYXJjaFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKHNlYXJjaCkge1xuICAgICAgICBzZWFyY2ggPSBzZWFyY2ggfHwgXCJcIjtcblxuICAgICAgICAvLyBzdXBwb3J0IGNvbnN0cnVjdCBvYmplY3Qgd2l0aCBhbm90aGVyIFVSTFNlYXJjaFBhcmFtcyBpbnN0YW5jZVxuICAgICAgICBpZiAoc2VhcmNoIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zIHx8IHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKSB7XG4gICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2gudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSA9IHBhcnNlVG9EaWN0KHNlYXJjaCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc3BlY2lmaWVkIGtleS92YWx1ZSBwYWlyIGFzIGEgbmV3IHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBhcHBlbmRUbyh0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLCBhbmQgaXRzIGFzc29jaWF0ZWQgdmFsdWUsXG4gICAgICogZnJvbSB0aGUgbGlzdCBvZiBhbGwgc2VhcmNoIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIHByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSBbbmFtZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHZhbHVlIGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdFtuYW1lXVswXSA6IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSB2YWx1ZXMgYXNzb2NpYXRpb24gd2l0aCBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdCBbbmFtZV0uc2xpY2UoMCkgOiBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBzdWNoIGEgc2VhcmNoIHBhcmFtZXRlciBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHRvIGEgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciB0b1xuICAgICAqIHRoZSBnaXZlbiB2YWx1ZS4gSWYgdGhlcmUgd2VyZSBzZXZlcmFsIHZhbHVlcywgZGVsZXRlIHRoZVxuICAgICAqIG90aGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgcHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXVtuYW1lXSA9IFsnJyArIHZhbHVlXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBjb250YWluZyBhIHF1ZXJ5IHN0cmluZyBzdWl0YWJsZSBmb3IgdXNlIGluIGEgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzW19fVVJMU2VhcmNoUGFyYW1zX19dLCBxdWVyeSA9IFtdLCBpLCBrZXksIG5hbWUsIHZhbHVlO1xuICAgICAgICBmb3IgKGtleSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBuYW1lID0gZW5jb2RlKGtleSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCB2YWx1ZSA9IGRpY3Rba2V5XTsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucHVzaChuYW1lICsgJz0nICsgZW5jb2RlKHZhbHVlW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlcmUgaXMgYSBidWcgaW4gU2FmYXJpIDEwLjEgYW5kIGBQcm94eWBpbmcgaXQgaXMgbm90IGVub3VnaC5cbiAgICB2YXIgZm9yU3VyZVVzZVBvbHlmaWxsID0gIWRlY29kZXNQbHVzZXNDb3JyZWN0bHk7XG4gICAgdmFyIHVzZVByb3h5ID0gKCFmb3JTdXJlVXNlUG9seWZpbGwgJiYgbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmICFpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciAmJiBzZWxmLlByb3h5KVxuICAgIC8qXG4gICAgICogQXBwbHkgcG9saWZpbGwgdG8gZ2xvYmFsIG9iamVjdCBhbmQgYXBwZW5kIG90aGVyIHByb3RvdHlwZSBpbnRvIGl0XG4gICAgICovXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsICdVUkxTZWFyY2hQYXJhbXMnLCB7XG4gICAgICAgIHZhbHVlOiAodXNlUHJveHkgP1xuICAgICAgICAgICAgLy8gU2FmYXJpIDEwLjAgZG9lc24ndCBzdXBwb3J0IFByb3h5LCBzbyBpdCB3b24ndCBleHRlbmQgVVJMU2VhcmNoUGFyYW1zIG9uIHNhZmFyaSAxMC4wXG4gICAgICAgICAgICBuZXcgUHJveHkobmF0aXZlVVJMU2VhcmNoUGFyYW1zLCB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0OiBmdW5jdGlvbih0YXJnZXQsIGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyB0YXJnZXQoKG5ldyBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChhcmdzWzBdKS50b1N0cmluZygpKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwpXG4gICAgfSk7XG5cbiAgICB2YXIgVVNQUHJvdG8gPSBzZWxmLlVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGU7XG5cbiAgICBVU1BQcm90by5wb2x5ZmlsbCA9IHRydWU7XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHRoaXNBcmdcbiAgICAgKi9cbiAgICBVU1BQcm90by5mb3JFYWNoID0gVVNQUHJvdG8uZm9yRWFjaCB8fCBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgICAgICB2YXIgZGljdCA9IHBhcnNlVG9EaWN0KHRoaXMudG9TdHJpbmcoKSk7XG4gICAgICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGRpY3QpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgZGljdFtuYW1lXS5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNvcnQgYWxsIG5hbWUtdmFsdWUgcGFpcnNcbiAgICAgKi9cbiAgICBVU1BQcm90by5zb3J0ID0gVVNQUHJvdG8uc29ydCB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpLCBrZXlzID0gW10sIGssIGksIGo7XG4gICAgICAgIGZvciAoayBpbiBkaWN0KSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goayk7XG4gICAgICAgIH1cbiAgICAgICAga2V5cy5zb3J0KCk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXNbJ2RlbGV0ZSddKGtleXNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXSwgdmFsdWVzID0gZGljdFtrZXldO1xuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IHZhbHVlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kKGtleSwgdmFsdWVzW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIGtleXMgb2ZcbiAgICAgKiB0aGUga2V5L3ZhbHVlIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBVU1BQcm90by5rZXlzID0gVVNQUHJvdG8ua2V5cyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBuYW1lKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKG5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwgdmFsdWVzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8udmFsdWVzID0gVVNQUHJvdG8udmFsdWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXkvdmFsdWVcbiAgICAgKiBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8uZW50cmllcyA9IFVTUFByb3RvLmVudHJpZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChbbmFtZSwgaXRlbV0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuXG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgIFVTUFByb3RvW3NlbGYuU3ltYm9sLml0ZXJhdG9yXSA9IFVTUFByb3RvW3NlbGYuU3ltYm9sLml0ZXJhdG9yXSB8fCBVU1BQcm90by5lbnRyaWVzO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZW5jb2RlKHN0cikge1xuICAgICAgICB2YXIgcmVwbGFjZSA9IHtcbiAgICAgICAgICAgICchJzogJyUyMScsXG4gICAgICAgICAgICBcIidcIjogJyUyNycsXG4gICAgICAgICAgICAnKCc6ICclMjgnLFxuICAgICAgICAgICAgJyknOiAnJTI5JyxcbiAgICAgICAgICAgICd+JzogJyU3RScsXG4gICAgICAgICAgICAnJTIwJzogJysnLFxuICAgICAgICAgICAgJyUwMCc6ICdcXHgwMCdcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHIpLnJlcGxhY2UoL1shJ1xcKFxcKX5dfCUyMHwlMDAvZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBsYWNlW21hdGNoXTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVjb2RlKHN0cikge1xuICAgICAgICByZXR1cm4gc3RyXG4gICAgICAgICAgICAucmVwbGFjZSgvWyArXS9nLCAnJTIwJylcbiAgICAgICAgICAgIC5yZXBsYWNlKC8oJVthLWYwLTldezJ9KSsvaWcsIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChtYXRjaCk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlSXRlcmF0b3IoYXJyKSB7XG4gICAgICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGFyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgICAgIGl0ZXJhdG9yW3NlbGYuU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcGFyc2VUb0RpY3Qoc2VhcmNoKSB7XG4gICAgICAgIHZhciBkaWN0ID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWFyY2ggPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIC8vIGlmIGBzZWFyY2hgIGlzIGFuIGFycmF5LCB0cmVhdCBpdCBhcyBhIHNlcXVlbmNlXG4gICAgICAgICAgICBpZiAoaXNBcnJheShzZWFyY2gpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSBzZWFyY2hbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KGl0ZW0pICYmIGl0ZW0ubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBpdGVtWzBdLCBpdGVtWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdVUkxTZWFyY2hQYXJhbXMnOiBTZXF1ZW5jZSBpbml0aWFsaXplciBtdXN0IG9ubHkgY29udGFpbiBwYWlyIGVsZW1lbnRzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBzZWFyY2gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlYXJjaC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBrZXksIHNlYXJjaFtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGZpcnN0ICc/J1xuICAgICAgICAgICAgaWYgKHNlYXJjaC5pbmRleE9mKFwiP1wiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHBhaXJzID0gc2VhcmNoLnNwbGl0KFwiJlwiKTtcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFpcnMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYWlycyBbal0sXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gdmFsdWUuaW5kZXhPZignPScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKC0xIDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlLnNsaWNlKDAsIGluZGV4KSksIGRlY29kZSh2YWx1ZS5zbGljZShpbmRleCArIDEpKSk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZSksICcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkaWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFwcGVuZFRvKGRpY3QsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWwgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiAoXG4gICAgICAgICAgICB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHR5cGVvZiB2YWx1ZS50b1N0cmluZyA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLnRvU3RyaW5nKCkgOiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChuYW1lIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0ucHVzaCh2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGljdFtuYW1lXSA9IFt2YWxdO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgICAgICAgcmV0dXJuICEhdmFsICYmICdbb2JqZWN0IEFycmF5XScgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpO1xuICAgIH1cblxufSkodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgPyBnbG9iYWwgOiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0aGlzKSk7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2VzL2RvbVwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9lcy9ldmVudHNcIjtcbmltcG9ydCB7WEhSRm9ybSwgRm9ybUZyb21VUkx9IGZyb20gXCIuLi9lcy9mb3Jtc1wiO1xuaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vZXMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vZXMvcmVxdWVzdFwiO1xuaW1wb3J0IHtTaXRlfSBmcm9tIFwiLi4vZXMvc2l0ZVwiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi4vZXMvc3RyaW5nc1wiO1xuaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL2VzL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9lcy91c2VyXCI7XG5pbXBvcnQge1RvZ2dsZU9uTW9iaWxlfSBmcm9tIFwiLi4vZXMvdG9nZ2xlL1RvZ2dsZU9uTW9iaWxlXCI7XG5cbi8vY3JlYXRlIGEga2V5OnZhbCBvYmplY3Qgb2YgYWxsIGNvbXBvbmVudHNcbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgZG9tOmRvbSxcbiAgICBldmVudHM6ZXZlbnRzLFxuICAgIFhIUkZvcm06WEhSRm9ybSxcbiAgICBGb3JtRnJvbVVSTDpGb3JtRnJvbVVSTCxcbiAgICBuYXZpZ2F0aW9uOm5hdmlnYXRpb24sXG4gICAgcmVxdWVzdDpyZXF1ZXN0LFxuICAgIFNpdGU6U2l0ZSxcbiAgICBzdHJpbmdzOnN0cmluZ3MsXG4gICAgdHlwZV9jaGVja3M6dHlwZV9jaGVja3MsXG4gICAgVXNlcjpVc2VyLFxuICAgIFRvZ2dsZU9uTW9iaWxlOlRvZ2dsZU9uTW9iaWxlXG59O1xuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB0byB0aWUgYWxsIGpwYWNrIGNvbXBvbmVudHMgZGlyZWN0bHkgdG8gdGhlIHdpbmRvdyBmb3IgZ2xvYmFsIHVzZVxuICpcbiAqIFRoaXMgbWVhbnMgaW5zdGVhZCBvZiBjYWxsaW5nIGpwYWNrLnN0cmluZ3MudWNmaXJzdCgpLCB5b3UgY2FuIGp1c3QgY2FsbCBzdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UganBhY2sncyBuYW1lcyBtYXkgYmUgdG9vIGdlbmVyaWMgYW5kIGNvbmZsaWN0LlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHNldCBhIGRpZmZlcmVudCBuYW1lc3BhY2UgdGhhbiBqcGFjaywgdGhhdCdzIGZpbmUsIGJ1dCBub3QgdXNpbmcgYSBuYW1lc3BhY2UgYXQgYWxsIGNhbiBiZSByaXNreVxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIHNldEdsb2JhbChcIiRcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogJC5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiX1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBfLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJQZWFzQXJlR3Jvc3NcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogUGVhc0FyZUdyb3NzLnN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICovXG5jb25zdCBzZXRHbG9iYWwgPSBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgIC8vZm9yIGVhY2ggZnVuY3Rpb24gd2l0aGluIGV2ZW50c1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICB3aW5kb3dbbmFtZXNwYWNlXVtrZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdpbmRvd1trZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9leHRlbmQgY29tcG9uZW50cyB0byBpbmNsdWRlIHRoZSBzZXRHbG9iYWwgbWV0aG9kXG5leHBvcnQgY29uc3QganBhY2sgPSB7Li4uY29tcG9uZW50cywgLi4ue3NldEdsb2JhbDogc2V0R2xvYmFsfX07XG5cbi8vc2V0IGpwYWNrIGdsb2JhbGx5IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYW55d2hlcmVcbmdsb2JhbC5qcGFjayA9IGpwYWNrOyJdLCJzb3VyY2VSb290IjoiIn0=