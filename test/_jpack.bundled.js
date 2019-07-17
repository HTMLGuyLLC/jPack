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
            el.addEventListener(event, preventedHandler, false);
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
     * @param data_to_pass
     * @param event_options
     * @returns {*|*[]|*}
     */
    trigger: function(el, event, data_to_pass, event_options){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        event_options = typeof event_options === "undefined" ? {} : event_options;
        data_to_pass = typeof data_to_pass === "undefined" ? null : data_to_pass;

        event_options.detail = data_to_pass;

        //create the event
        event = new CustomEvent(event, event_options);

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




/**
 * Allows you to simulate a page change by using an XHR request to grab content and replace it on the current page
 *
 * Automatically updates the browser's history, swaps out meta tags, updates the title, and more
 *
 * Use onload and onUnload hooks to add additional logic for things like triggering a google analytics page view
 *  or scrolling to the top of the new page
 */
const navigation = {

    /**
     * Sets data to be provided to the next page's onload callback
     *  this data persists until cleared manually and will be provided to ALL subsequent onload handlers
     *   (or it can be grabbed manually from this object at any time)
     *
     * @param data
     * @returns {navigation}
     */
    setData: function (data) {
        if( typeof data !== 'object' ) throw `${data} is not an object`;
        this._data = data;
        return this;
    },
    /**
     * Sets a single item in your data object
     *
     * @param key
     * @param val
     */
    setDataItem: function(key, val){
        this._data[key] = val;
        return this;
    },
    /**
     * Gets a single item from your data object or if it doesn't exist it'll return null
     *
     * @param key
     * @param val
     * @returns {null}
     */
    getDataItem: function(key, val){
        return typeof this._data[key] !== 'undefined' ? this_.data[key] : null;
    },
    /**
     * Remove all data
     *
     * @returns {navigation}
     */
    clearData: function () {
        this.setPassthroughData(null);
        return this;
    },
    /**
     * Gets all data
     *
     * @param data
     * @returns {null}
     */
    getData: function (data) {
        return this._data;
    },
    _data: {},

    /**
     * Sets the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @param selector_string
     */
    setIncomingElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} is not a string`;
        this._incomingElementSelector = selector_string;
    },
    _incomingElementSelector: 'body',
    /**
     * @returns {string}
     */
    getIncomingElement: function () {
        return this._incomingElementSelector;
    },

    /**
     * Sets the selector string for the element on the current page that will be replaced with incoming HTML
     *
     * @param selector_string
     */
    setReplaceElement: function (selector_string) {
        if (typeof selector_string !== 'string') throw `${selector_string} is not a string`;
        this._replaceElementSelector = selector_string;
    },
    _replaceElementSelector: 'body',
    /**
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
        const self = this;

        if (typeof url !== 'string') throw `Provided URL (${url}) is not a string`;

        incoming_el = typeof incoming_el == 'undefined' || !incoming_el ? self.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? self.getReplaceElement() : replace_el;
        push_state = typeof push_state === 'undefined' ? true : push_state;

        if (typeof incoming_el !== 'string') throw `Provided incoming_el (${incoming_el}) is not a string`;
        if (typeof replace_el !== 'string') throw `Provided replace_el (${replace_el}) is not a string`;

        //cache in case it changes during this process
        const data = self.getData();
        const current_route = this.getRouteFromMeta();

        self.showLoader();

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
            self.hideLoader();

            self._replacePageContent(response.data, url, incoming_el, replace_el, push_state, current_route, data);

            //if a callback was provided, run it and provide the parent element
            if (typeof callback === 'function') {
                //wait for the onunload callbacks to run and the new content to be put on the page first
                window.setTimeout(function () {
                    callback(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), incoming_el, replace_el, current_route, data);
                }, 105);
            }
        }).catch(function (error) {
            self.hideLoader();

            //at this point, it can only be a string error message or an axios error object
            //so set both values accordingly
            const axios_error = typeof error === "object" && error.isAxiosError ? error : null;
            error = typeof error === "object" && error.isAxiosError ? error.response.statusText : error;

            self._triggerFail(error, url, data, axios_error);
            throw error;
        });
    },

    /**
     * Whether or not the loader at the top is enabled to display on slow requests
     */
    loaderEnabled: true,

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
    _loaderDelay: 300,
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
    _loaderClasses: 'progress page-navigation-loader',
    _loaderInnerDivClasses: 'progress-bar progress-bar-striped progress-bar-animated',

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
        self.navLoaderCached = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement('.page-navigation-loader');

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
    getRouteFromMeta: function (html) {
        html = typeof html === 'undefined' ? document.head : html;
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
        this.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), callback);
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
        this._onloadCallbacks.push(callback);
        return this;
    },
    removeOnload: function(callback){
        this._onloadCallbacks.filter(function(ele){
            return ele !== callback;
        });
    },

    /**
     * When leaving a page you might need to destroy some plugins or something
     *
     * @param callback
     * @returns {navigation}
     */
    _onUnloadCallbacks: [],
    onUnload: function (callback) {
        this._onUnloadCallbacks.push(callback);
        return this;
    },
    removeOnUnload: function(callback){
        this._onUnloadCallbacks.filter(function(ele){
            return ele !== callback;
        });
    },

    /**
     * When the new page fails to load, you should probably tell the user/try again/log the issue
     *
     * @param callback
     * @returns {navigation}
     */
    _onFailCallbacks: [],
    onFail: function (callback) {
        this._onFailCallbacks.push(callback);
        return this;
    },
    removeOnFail: function(callback){
        this._onFailCallbacks.filter(function(ele){
            return ele !== callback;
        });
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
            self.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function (e) {
            self.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString(), null, null, null, false);
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
     * @param incoming_el
     * @param replace_el
     * @param push_state
     * @param current_route
     * @param data
     */
    _replacePageContent(html, url, incoming_el, replace_el, push_state, current_route, data) {
        const self = this;

        push_state = typeof push_state === 'undefined' ? true : push_state;

        incoming_el = typeof incoming_el === 'undefined' || !incoming_el ? self.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? self.getReplaceElement() : replace_el;

        if (typeof url !== 'string') throw `Provided url (${url}) is not a string`;
        if (typeof incoming_el !== 'string') throw `Provided incoming_el (${incoming_el}) is not a string`;
        if (typeof replace_el !== 'string') throw `Provided replace_el (${replace_el}) is not a string`;

        self._triggerUnload(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el, current_route, data);

        var parsed = self._parseHTML(html, incoming_el);

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
            self._setTitle(parsed.title);

            //replace content on the page
            const new_content = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].replaceElWithHTML(replace_el, parsed.html);

            //trigger nav complete event
            self._triggerOnload(new_content, incoming_el, replace_el, parsed.route, data);

            //if the replace_el is the same as getReplaceElement(),
            // then it should be updated to whatever the incoming_el is because it no longer exists
            if (self.getReplaceElement() !== replace_el) {
                self.setReplaceElement(incoming_el);
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
    _parseHTML(html, parent_el) {
        var self = this;

        //default to null if not provided
        parent_el = typeof parent_el === 'undefined' ? null : parent_el;

        //must be a string or null
        if (typeof parent_el !== 'string' && parent_el !== null) throw `Provided parent_el (${parent_el}) is not a string or null`;

        route = null;
        if( typeof html === "object" ){
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
            callback(el, el_selector, replaced_selector, route, data);
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
            callback(el, el_selector, route, data);
        });
        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     * @param url
     * @param data
     * @param route
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBLGVBQWUsd0NBQUc7QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHFFQUFxRSxPQUFPO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLElBQUk7O0FBRTNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHdDQUFHO0FBQ3RCOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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ZSx5REFBVTtBQUN6QixZQUFZLG1EQUFPO0FBQ25CLFNBQVMsNkNBQUk7QUFDYixZQUFZLG1EQUFPO0FBQ25CLGdCQUFnQiwyREFBVztBQUMzQixTQUFTLDZDQUFJO0FBQ2IsbUJBQW1CLHdFQUFjO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxlQUFlLG1CQUFtQjs7QUFFekM7QUFDQSxxQiIsImZpbGUiOiJfanBhY2suYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZShkYXRhKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9rZXlzID09PSBcInVuZGVmaW5lZFwiICkgdGhyb3cgYENhbm5vdCBwb3B1bGF0ZSBvYmplY3QgaWYgX2tleXMgcHJvcGVydHkgaXMgbm90IHNldGA7XG5cbiAgICAgICAgLy92YWxpZGF0ZSB0aGUgaW5jb21pbmcgZGF0YSBvYmplY3QgYW5kIG1ha2Ugc3VyZSBpdCBvbmx5IGNvbnRhaW5zIHRoZXNlIGtleXNcbiAgICAgICAgIXR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChkYXRhLCB0aGlzLl9rZXlzLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBrZXkgdGhhdCBpcyBzZXQgaW4gdGhlIGRhdGEgb2JqZWN0LCBzZXQgdGhlIHZhbHVlIG9uIHRoaXNcbiAgICAgICAgdGhpcy5fa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIi8qKlxuICogSFRNTCBET00gaGVscGVyc1xuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYSBzaW5nbGUgbmF0aXZlIERPTSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm9uZSBleGlzdFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZSAtIHRocm93IGFuIGVycm9yIGlmIG1vcmUgdGhhbiAxIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIEVsZW1lbnR8SFRNTERvY3VtZW50fG51bGxcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50OiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSwgZXJyb3Jfb25fbXVsdGlwbGUpe1xuICAgICAgICBjb25zdCBmb3VuZEVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGZvdW5kRWwubGVuZ3RoID4gMSAmJiBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IGBNb3JlIHRoYW4gMSByZXN1bHQgZm91bmQgZm9yIFwiJHtlbH1cImA7XG5cbiAgICAgICAgaWYoICFmb3VuZEVsLmxlbmd0aCApIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBmb3VuZEVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lKXtcbiAgICAgICAgLy9kZWZhdWx0IHRvIGZhbHNlXG4gICAgICAgIGVycm9yX29uX25vbmUgPSB0eXBlb2YgZXJyb3Jfb25fbm9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogZXJyb3Jfb25fbm9uZTtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgaWYoIHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhZWwgKXtcbiAgICAgICAgICAgIC8vZG8gbm90aGluZywgZGVmYXVsdCBpcyBlbXB0eSBhcnJheVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCApe1xuICAgICAgICAgICAgLy9hZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheS5wdXNoKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvL2NvbnZlcnQgdGhlIE5vZGVMaXN0IHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZWxfYXJyYXkgPyBBcnJheS5mcm9tKGVsX2FycmF5KSA6IGVsX2FycmF5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWwgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiApe1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBBcnJheS5mcm9tKGVsKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGl0J3MgYW4gYXJyYXksIHZhbGlkYXRlIGVhY2ggZWxlbWVudFxuICAgICAgICBlbHNlIGlmKCBBcnJheS5pc0FycmF5KGVsKSApe1xuICAgICAgICAgICAgZWwuZm9yRWFjaChmdW5jdGlvbih0aGlzX2VsKXtcbiAgICAgICAgICAgICAgICB0aGlzX2VsID0gZG9tLmdldEVsZW1lbnQodGhpc19lbCk7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXNfZWwgKSBlbF9hcnJheS5wdXNoKHRoaXNfZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vdGhlcndpc2UsIHdoYXQgdGhlIGhlY2sgZGlkIHlvdSBwYXNzPyBUaHJvdyBlcnJvci4uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGBJbnZhbGlkIHZhbHVlOiBcIiR7ZWx9XCJgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggJiYgZXJyb3Jfb25fbm9uZSApIHRocm93IGBGYWlsZWQgdG8gZmluZCBcIiR7ZWx9XCJgO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVpY2sgbWV0aG9kIGZvciByZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwsIGVycm9yX2lmX25vdF9mb3VuZCl7XG4gICAgICAgIGxldCBlbF9hcnJheSA9IHRoaXMuZ2V0RWxlbWVudHMoZWwpO1xuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgaWYoIGVycm9yX2lmX25vdF9mb3VuZCApIHRocm93IGBDb3VsZCBub3QgZmluZCBcIiR7ZWx9XCJgO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGRvbSBlbGVtZW50IHdpdGggSFRNTFxuICAgICAqXG4gICAgICogdXNlcyAuZ2V0RWxlbWVudCgpIHNvIGVsIGNhbiBiZSBqdXN0IGFib3V0IGFueXRoaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAcmV0dXJucyB7Q2hpbGROb2RlfXxudWxsXG4gICAgICovXG4gICAgcmVwbGFjZUVsV2l0aEhUTUw6IGZ1bmN0aW9uKGVsLCBodG1sLCBlcnJvcl9pZl9ub3RfZm91bmQpe1xuICAgICAgICBpZiggdHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7aHRtbH0gaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBjb25zdCBmb3VuZEVsID0gdGhpcy5nZXRFbGVtZW50KGVsKTtcblxuICAgICAgICBpZiggIWVsICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZnJvbSBIVE1MXG4gICAgICAgIGxldCBuZXdFbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2luc2VydCB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIHRoZSBjdXJyZW50XG4gICAgICAgIG5ld0VsID0gZm91bmRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXNbMF0sIGZvdW5kRWwpO1xuXG4gICAgICAgIC8vcmVtb3ZlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgZm91bmRFbC5yZW1vdmUoKTtcblxuICAgICAgICAvL3JldHVybiB0aGUgbmV3IG9uZVxuICAgICAgICByZXR1cm4gbmV3RWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gZWxlbWVudCBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzVmlzaWJsZShlbCwgZXJyb3JfaWZfbm90X2ZvdW5kLCBlcnJvcl9vbl9tdWx0aXBsZSkge1xuICAgICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudChlbCwgZXJyb3JfaWZfbm90X2ZvdW5kLCBlcnJvcl9vbl9tdWx0aXBsZSk7XG5cbiAgICAgICAgaWYoIGVsID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgIC8vY2hlY2sgZGlzcGxheSwgdmlzaWJpbGl0eSwgYW5kIG9wYWNpdHkgZmlyc3Qgc2luY2UgdGhleSdyZSB0aGUgbW9zdCBjb21tb25cbiAgICAgICAgaWYgKHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ3Zpc2libGUnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzdHlsZS5vcGFjaXR5ID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9zZWUgaWYgdGhlIGVsZW1lbnQgaGFzIGEgc2l6ZVxuICAgICAgICBpZihlbC5vZmZzZXRXaWR0aCArIGVsLm9mZnNldEhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9nZXQgdGhlIG91dHNpZGUgY29ybmVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZWxfYm91bmRzID0ge1xuICAgICAgICAgICAgJ3RvcC1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC50b3BcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG9wLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC5ib3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NlbnRlcic6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbnNpZGVfdmlld3BvcnQgPSB0cnVlO1xuICAgICAgICAvL21ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0XG4gICAgICAgIE9iamVjdC5rZXlzKGVsX2JvdW5kcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gZWxfYm91bmRzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChwb2ludC54IDwgMCkgaW5zaWRlX3ZpZXdwb3J0ID0gZmFsc2U7IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwb2ludC54ID4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBwb2ludEVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIGlmIChwb2ludEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRFbCA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHBvaW50RWwgPSBwb2ludEVsLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW5zaWRlX3ZpZXdwb3J0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kIHByZXZlbnREZWZhdWx0IGV2ZW50cyAoYW5kIG90aGVycyBmb3IgY29uc2lzdGVuY3kpXG4gKi9cbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZXNlIGZ1bmN0aW9ucyBnbG9iYWxseSBzbyB5b3UgY2FuIHVzZSB0aGVtIHdpdGhvdXQgYSBuYW1lc3BhY2Ugb3Igd2l0aCBhIGN1c3RvbSBvbmVcbiAgICAgKlxuICAgICAqIFVzZSBhdCB5b3VyIG93biByaXNrIC0gbWF5IGNhdXNlIGNvbmZsaWN0cyFcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICAgIGpwYWNrLmV2ZW50cy5zZXRHbG9iYWwoKTtcbiAgICAgKiAgICAgb25DbGljaygnYScsIGZ1bmN0aW9uKCl7XG4gICAgICogICAgICAgIC8vZG8gc29tZXRoaW5nICh0aGUgaHJlZiBpcyBwcmV2ZW50ZWQpXG4gICAgICogICAgIH0pO1xuICAgICAqL1xuICAgIHNldEdsb2JhbDogZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgICAgICAvL2ZvciBlYWNoIGZ1bmN0aW9uIHdpdGhpbiBldmVudHNcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc2VsZikge1xuICAgICAgICAgICAgLy9zZXQgZXZlcnl0aGluZyB0aGF0J3MgYSByZWFsIG1ldGhvZCBpbiBldmVudHMsIGV4Y2VwdCB0aGlzIG9uZVxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHByb3BlcnR5ICE9PSAnc2V0R2xvYmFsJykge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1bcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1twcm9wZXJ0eV0gPSBzZWxmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGV2ZW50cyBmcm9tIG9jY3VycmluZ1xuICAgICAqICAobGlrZSBmb3JtcyBzdWJtaXR0aW5nIG9yIGEgbGluayBicmluZ2luZyB5b3UgdG8gYW5vdGhlciBwYWdlKVxuICAgICAqXG4gICAgICogIFJldHVybnMgdGhlIGdlbmVyYXRlZCBoYW5kbGVyIGZvciBmdXR1cmUgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmVudGVkSGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy9OZWVkIHRvIHVuZGVyc3RhbmQgdGhpcyBiZXR0ZXIsIGJ1dCBpdCBhcHBlYXJzIHdoZW4gdGllZCB0byB0aGUgYm9keSBlbGVtZW50IHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIHJlY2VpdmVzIGFuIGFycmF5IG9mIGV2ZW50cyB3aXRoIGEgc2luZ2xlIGl0ZW0gaW4gaXQ/XG4gICAgICAgICAgICBpZiggQXJyYXkuaXNBcnJheShlKSApIGUgPSBlWzBdO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgcHJldmVudGVkSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJldmVudGVkSGFuZGxlcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBkYXRhX3RvX3Bhc3NcbiAgICAgKiBAcGFyYW0gZXZlbnRfb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGVsLCBldmVudCwgZGF0YV90b19wYXNzLCBldmVudF9vcHRpb25zKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudF9vcHRpb25zID0gdHlwZW9mIGV2ZW50X29wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IGV2ZW50X29wdGlvbnM7XG4gICAgICAgIGRhdGFfdG9fcGFzcyA9IHR5cGVvZiBkYXRhX3RvX3Bhc3MgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogZGF0YV90b19wYXNzO1xuXG4gICAgICAgIGV2ZW50X29wdGlvbnMuZGV0YWlsID0gZGF0YV90b19wYXNzO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgZXZlbnRfb3B0aW9ucyk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIEZvcm1Gcm9tVVJMIGNsYXNzXG5jb25zdCBGb3JtRnJvbVVSTERlZmF1bHRzID0ge1xuICAgIGluY29taW5nRWxlbWVudFNlbGVjdG9yOiBudWxsLCAvL3RoZSBmb3JtIGVsZW1lbnQgb3Igd3JhcHBlciB0aGF0IHlvdSB3YW50IHRvIHJldHJpZXZlIGZyb20gdGhlIFVSTFxuICAgIGluc2VydEludG9FbGVtZW50OiBudWxsLCAvL3doYXQgZWxlbWVudCB0byBwdXQgdGhlIGZvcm0gaW50b1xuICAgIG9ubG9hZDogZnVuY3Rpb24oZm9ybSl7IHJldHVybiB0aGlzOyB9LCAvL29uY2UgdGhlIGZvcm0gaXMgbG9hZGVkIG9udG8gdGhlIHBhZ2Vcbn07XG5cbi8qKlxuICpcbiAqIEZvcm1Gcm9tVVJMXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIGdyYWIgYSBmb3JtIGZyb20gYSBVUkwgYW5kIHJldHVybnMgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEFsc28gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb24gdXNpbmcgWEhSIGFuZCBjYW4gb3BlbiBhIG1vZGFsIHRvIGRpc3BsYXkgdGhlIGZvcm1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRnJvbVVSTCBleHRlbmRzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHVybCAtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0e2luY29taW5nRWxlbWVudFNlbGVjdG9yLGluc2VydEludG9FbGVtZW50LCBvbmxvYWR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zKXtcbiAgICAgICAgc3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiICkgdGhyb3cgYCR7b3B0aW9uc30gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uRm9ybUZyb21VUkxEZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRVUkwodXJsKTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcihvcHRpb25zLmluY29taW5nRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zZXRJbnNlcnRJbnRvRWxlbWVudChvcHRpb25zLmluc2VydEludG9FbGVtZW50KTtcbiAgICAgICAgdGhpcy5vbmxvYWQob3B0aW9ucy5vbmxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBwYXJlbnQgYmVjYXVzZSBpdCdzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBjbGFzc1xuICAgICAqXG4gICAgICogU3RpbGwga2VlcGluZyBpdCBmdW5jdGlvbmFsIGJ1dCByZW1vdmluZyBhbGwgdmFsaWRhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBVUkwgZnJvbSB3aGljaCB0aGUgZm9ybSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtJ3MgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJMKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIFhIUkZvcm0uZ2V0RmluYWxTdWJtaXRVUkwgdG8gaW5jbHVkZSB0aGUgVVJMIHRoZSBmb3JtIHdhcyByZXF1ZXN0ZWQgZnJvbSBhcyBhbiBhZGRpdGlvbmFsIGZhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdXJsIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybSwgb25seSBpZiBleHBsaWNpdGx5IHNldFxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggZm9ybS5hdHRyaWJ1dGVzLmFjdGlvbiApe1xuICAgICAgICAgICAgICAgIHVybCA9IGZvcm0uYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIHN0aWxsIG51bGwsIGdyYWIgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICAgICAgdXJsID0gIXVybCA/IHRoaXMuZ2V0VVJMKCkgOiB1cmw7XG5cbiAgICAgICAgLy9pZiB0aGUgdXJsIGlzIFNUSUxMIG51bGwsIGdyYWIgdGhlIGZvcm0ncyBkZWZhdWx0IGFjdGlvbiAoY3VycmVudCBwYWdlKVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIFVSTCBwcm92aWRlZCByZXR1cm5zIEhUTUwsIHRoaXMgc2VsZWN0b3Igd2lsbCBiZSB1c2VkIHRvIHB1bGwgdGhlIGZvcm0gb3V0XG4gICAgICpcbiAgICAgKiBJZiBsZWZ0IG51bGwsIGl0IHdpbGwgYXNzdW1lIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0ncyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3I6IHN0cmluZ3xudWxsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Ioc2VsZWN0b3Ipe1xuICAgICAgICBpZiggc2VsZWN0b3IgIT09IG51bGwgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yfSBpcyBub3QgYSBzdHJpbmcgb3IgbnVsbCB2YWx1ZWA7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzZWxlY3RvciBmb3IgdGhlIGZvcm0gb3IgYSBwYXJlbnQgb2YgaXQgdGhhdCB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhlIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNldCBhIHBhcmVudCBlbGVtZW50IHRoYXQgdGhlIGZvcm0gd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHVzaW5nIHRoZSBkZWZhdWx0IGluc2VydEZvcm0gbWV0aG9kXG4gICAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBsZWF2ZSB0aGlzIGFuZCBvdmVycmlkZSBpbnNlcnRGb3JtKCkgYW5kIGhhdmUgbW9yZSBjb250cm9sIG92ZXIgd2hlcmUgaXQgc2hvdWxkIGdvXG4gICAgICpcbiAgICAgKiBVc2VzIGRvbS5nZXRFbGVtZW50KCkgc28geW91IGNhbiBwYXNzIGEgc3RyaW5nLCBqUXVlcnkgb2JqZWN0LCBvYmplY3QsIGV0Y1xuICAgICAqIEhvd2V2ZXIgaWYgbW9yZSB0aGFuIDEgZWxlbWVudCBpcyBkZXRlY3RlZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc2V0SW5zZXJ0SW50b0VsZW1lbnQoZWxlbWVudCl7XG4gICAgICAgIHRoaXMuX2luc2VydEludG9FbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50b1xuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydEludG9FbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGZyb20gdGhlIFVSTCBhbmQgcGFzcyB0byBpbnNlcnRGb3JtXG4gICAgICpcbiAgICAgKiBUaGVyZSBhcmUgdGhyZWUgbWFpbiB3YXlzIHRvIHByb3ZpZGUgdGhlIGZvcm0gZnJvbSB5b3VyIHNlcnZlcjpcbiAgICAgKiAxKSBTdHJhaWdodCBIVE1MLiBUaGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtIGFuZCB0aGF0J3MgaXQuXG4gICAgICogMikgU3RyYWlnaHQgSFRNTCwgYnV0IHRoZSBmb3JtIGlzIG9ubHkgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBzbyBpdCBuZWVkcyB0byBiZSBwYXJzZWQgb3V0IGJhc2VkIG9uIGEgc2VsZWN0b3IuXG4gICAgICogMykgQSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkgXCJodG1sXCIgbGlrZSB0aGlzOiB7XCJodG1sXCI6XCI8Zm9ybT55b3VyIGZvcm0gaGVyZTwvZm9ybT5cIn1cbiAgICAgKlxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmdldFVSTCgpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcgKHByb2JhYmx5IEhUTUwpXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcm92aWRlIHRoZSBmb3JtJ3MgSFRNTCBpbiBhbiBvYmplY3QgY29udGFpbmluZyBvdGhlciBkZXRhaWxzIGxpa2UgdGhlIHJvdXRlIGFuZCB0aGUgZnVsbCByZXNwb25zZSB0byBpbnNlcnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0ocGFyc2VkLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgdGhlIGVudGlyZSByZXNwb25zZSBpcyBhc3N1bWVkIHRvIGJlIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhbiBvYmplY3QgKHByb2JhYmx5IEpTT04pXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIEhUTUwgd2FzIHByb3ZpZGVkIGluIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEuaHRtbCAhPT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlICR7ZGF0YX1gO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBpbnNlcnQgdGhlIGZvcm0gd2hlcmV2ZXIgeW91IHdhbnQgb24gdGhlIHBhZ2VcbiAgICAgKiAgT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY3VzdG9taXplIHdoZXJlIHRoZSBmb3JtIGlzIGluc2VydGVkXG4gICAgICogIChtYXliZSB5b3Ugd2FudCB0byBvcGVuIGEgbW9kYWwgZmlyc3QgYW5kIHBsYWNlIGl0IHRoZXJlPylcbiAgICAgKlxuICAgICAqICBwYXJzZWRfY29udGVudC5odG1sIHdpbGwgYWx3YXlzIGJlIHRoZSBIVE1MXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQgbWF5IGNvbnRhaW4gb3RoZXIgZGF0YSBsaWtlIHJvdXRlIGFuZCB0aXRsZSBpZiB0aGUgZm9ybSB3YXMgcHVsbGVkIG91dCBvZlxuICAgICAqICAgICBhIGZ1bGwgSFRNTCBwYWdlIHdoaWNoIGNvbnRhaW5zIHRob3NlIGl0ZW1zXG4gICAgICpcbiAgICAgKiAgcmVzcG9uc2UgaXMgdGhlIGZ1bGwgc2VydmVyIHJlc3BvbnNlIChodG1sIHN0cmluZyBvciBvYmplY3QgZnJvbSBKU09OIC0gbm90IHByb3ZpZGVkIGlmIHRoZSByZXNwb25zZSBpcyBvbmx5IHRoZSBmb3JtJ3MgSFRNTClcbiAgICAgKlxuICAgICAqICBmb3JtIGlzIHByb3ZpZGVkIGlmIHRoaXMgaXMgYWZ0ZXIgdGhlIGZvcm0gd2FzIHN1Ym1pdHRlZCBhbmQgSFRNTCB3YXMgcmV0dXJuZWQgZm9ybSB0aGUgc2VydmVyXG4gICAgICpcbiAgICAgKiAgQHBhcmFtIHBhcnNlZF9jb250ZW50XG4gICAgICogIEBwYXJhbSByZXNwb25zZVxuICAgICAqICBAcGFyYW0gZm9ybVxuICAgICAqICBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBpbnNlcnRGb3JtKHBhcnNlZF9jb250ZW50LCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIC8vc2VsZWN0b3IgZm9yIHdoZXJlIHRoZSBmb3JtIHdpbGwgZ29cbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRJbnNlcnRJbnRvRWxlbWVudCgpO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApIHRocm93ICdDYW5ub3QgZGV0ZXJtaW5lIHdoZXJlIHRvIGluc2VydCBmb3JtLiBPdmVyd3JpdGUgaW5zZXJ0Rm9ybSgpIG9yIHByb3ZpZGUgaW5zZXJ0SW50b0VsZW1lbnQnO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBjb250YWluZXIgZWxlbWVudCAtIGVycm9yIGlmIG5vdCBmb3VuZFxuICAgICAgICBlbCA9IGRvbS5nZXRFbGVtZW50KGVsLCB0cnVlKTtcblxuICAgICAgICAvL3B1dCB0aGUgZm9ybSBpbiB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gcGFyc2VkX2NvbnRlbnQuaHRtbDtcblxuICAgICAgICAvL2ZpbmQgdGhlIG5ld2x5IGFkZGVkIGZvcm1cbiAgICAgICAgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgICAvL2F0dGFjaCBhbiBvbi1zdWJtaXQgbGlzdGVuZXIgdG8gc2VuZCB0aGUgZm9ybSdzIHZhbHVlcyB2aWEgWEhSXG4gICAgICAgIHRoaXMuYXR0YWNoU3VibWl0SGFuZGxlcihmb3JtKTtcblxuICAgICAgICAvL3J1biB0aGUgb25sb2FkIGNhbGxiYWNrIG5vdyB0aGF0IHRoZSBmb3JtIGlzIHRoZXJlXG4gICAgICAgIHRoaXMudHJpZ2dlck9ubG9hZChmb3JtKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZm9ybSBpbW1lZGlhdGVseSBhZnRlciBpdCdzIGRpc3BsYXllZFxuICAgICAqXG4gICAgICogWW91J2xsIGxpa2VseSB3YW50IHRvIGF0dGFjaCBwbHVnaW5zIGZvciBkYXRlcGlja2Vycy9kcm9wZG93bnMsIG9yIG1heWJlIGhpZGUgYSBmaWVsZCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgYW5vdGhlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgb25sb2FkKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHRoaXMuX29ubG9hZC5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbmxvYWQgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBjbGVhck9ubG9hZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25sb2FkKGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX29ubG9hZC5mb3JFYWNoKGZ1bmN0aW9uKG9ubG9hZCl7XG4gICAgICAgICAgICBvbmxvYWQoZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxucmVxdWlyZSgnZm9ybWRhdGEtcG9seWZpbGwnKTtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIFhIUkZvcm0gY2xhc3NcbmNvbnN0IFhIUkZvcm1EZWZhdWx0cyA9IHtcbiAgICB4aHJTdWJtaXQ6IHRydWUsIC8vc3VibWl0IHRoZSBmb3JtIHVzaW5nIFhIUiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgIHN1Ym1pdFVSTDpudWxsLCAvL3dpbGwgYmUgZ3JhYmJlZCBmcm9tIHRoZSBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZSwgb3IgZmFsbGJhY2sgdG8gdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICBzdWJtaXRNZXRob2Q6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXsgYWxlcnQoZXJyb3IpOyB9LCAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBhbmQgZmFpbHNcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBmb3JtKXsgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIGlmKHR5cGVvZiByZXNwb25zZS5zdWNjZXNzID09PSBcInN0cmluZ1wiKXsgYWxlcnQocmVzcG9uc2Uuc3VjY2Vzcyk7IH1cbiAgICAgICAgZWxzZXsgYWxlcnQoXCJZb3VyIHN1Ym1pc3Npb24gaGFzIGJlZW4gcmVjZWl2ZWRcIik7IH1cbiAgICB9LFxuICAgIC8vdmFsaWRhdGUgdGhlIGZvcm0sIGRpc3BsYXkgYW55IGVycm9ycyBhbmQgcmV0dXJuIGZhbHNlIHRvIGJsb2NrIHN1Ym1pc3Npb25cbiAgICB2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKGZvcm0pe1xuICAgICAgICAvL2FkZCAud2FzLXZhbGlkYXRlZCBmb3IgYm9vdHN0cmFwIHRvIHNob3cgZXJyb3JzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIGFueSA6aW52YWxpZCBlbGVtZW50cywgdGhlIGZvcm0gaXMgbm90IHZhbGlkXG4gICAgICAgIGNvbnN0IGlzX3ZhbGlkID0gIWZvcm0ucXVlcnlTZWxlY3RvcignOmludmFsaWQnKTtcblxuICAgICAgICAvL2lmIGl0J3MgdmFsaWQsIGNsZWFyIHRoZSB2YWxpZGF0aW9uIGluZGljYXRvcnNcbiAgICAgICAgaWYoIGlzX3ZhbGlkICkgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cbn07XG5cbi8qKlxuICogWEhSRm9ybVxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBzdWJtaXQgYSBmb3JtIHZpYSBYSFIgYW5kIGVhc2lseSBoYW5kbGUgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogRm9ybSBjYW4gYmUganVzdCBhYm91dCBhbnkgZGF0YXR5cGUgLSB1c2VzIGRvbS5nZXRFbGVtZW50KClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zKXtcblxuICAgICAgICAvL2lmIG9wdGlvbnMgYXJlIHVuZGVmaW5lZCwgc2V0IHRoZW1cbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBvcHRpb25zO1xuICAgICAgICBpZiggdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgKSB0aHJvdyBgJHtvcHRpb25zfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2V4dGVuZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5YSFJGb3JtRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0ZUNhbGxiYWNrKG9wdGlvbnMudmFsaWRhdGVGb3JtKTtcbiAgICAgICAgdGhpcy5zZXRYSFJTdWJtaXQob3B0aW9ucy54aHJTdWJtaXQpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdE1ldGhvZChvcHRpb25zLnN1Ym1pdE1ldGhvZCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0VVJMKG9wdGlvbnMuc3VibWl0VVJMKTtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3Mob3B0aW9ucy5vblN1Y2Nlc3MpO1xuICAgICAgICB0aGlzLm9uRXJyb3Iob3B0aW9ucy5vbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldFZhbGlkYXRlQ2FsbGJhY2soY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIHZhbGlkYXRlIGNhbGxiYWNrIGFuZCBwYXNzZXMgdGhlIGZvcm1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHZhbGlkYXRlKGZvcm0pe1xuICAgICAgICBpZiggdHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIgKSBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrKGZvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldEZvcm0oZm9ybSl7XG4gICAgICAgIGlmKCAhZm9ybSB8fCB0eXBlb2YgZm9ybSA9PT0gJ3VuZGVmaW5lZCcgKSB0aHJvdyBgRm9ybSBlbGVtZW50IGlzIHJlcXVpcmVkYDtcblxuICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGlmKCAhZm9ybSApIHRocm93IGBJbnZhbGlkIGZvcm0gZWxlbWVudCByZWNlaXZlZGA7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfEVsZW1lbnR8SFRNTERvY3VtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgeW91IHdhbnQgdGhlIGZvcm0gdG8gYmUgc3VibWl0dGVkIHVzaW5nIGFuIFhIUiByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAtIGJvb2xcbiAgICAgKi9cbiAgICBzZXRYSFJTdWJtaXQoZW5hYmxlZCl7XG4gICAgICAgIHRoaXMuX3hoclN1Ym1pdCA9ICEhZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG93IHRvIHN1Ym1pdCB0aGUgZm9ybSAtIGlmIHNldCB0byBudWxsLCB0aGUgbWV0aG9kIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIGZvcm0nc1xuICAgICAqICBtZXRob2QgYXR0cmlidXRlIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0TWV0aG9kKG1ldGhvZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiICYmIG1ldGhvZCAhPT0gbnVsbCApIHRocm93IGAke21ldGhvZH0gaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9zdWJtaXRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZvcm0gc3VibWlzc2lvbiBtZXRob2QgKFBPU1QsIEdFVCwgZXRjKVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdE1ldGhvZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0TWV0aG9kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgdG8gc3VibWl0IHRoZSBmb3JtIHRvXG4gICAgICpcbiAgICAgKiBJZiBudWxsLCB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFVzZSBhIGZ1bmN0aW9uIGlmIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHRoZSBVUkwganVzdCBwcmlvciB0byB0aGUgcmVxdWVzdFxuICAgICAqICAtIHRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdGhlIGZvcm0gYXMgYSBwYXJhbVxuICAgICAqIEdlbmVyYWxseSBzcGVha2luZyBhIHN0cmluZyBpcyBzdWZmaWNpZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0VVJMKHVybCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAmJiB0eXBlb2YgdXJsICE9PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICYmIHVybCAhPT0gbnVsbCApIHRocm93IGAke3VybH0gaXMgbm90IGEgc3RyaW5nLCBmdW5jdGlvbiwgb3IgbnVsbGA7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0VVJMID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBVUkwgdGhlIGZvcm0gd2lsbCBiZSBzdWJtaXR0ZWQgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ3wqfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0VVJMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFjdHVhbCBzdWJtaXQgVVJMIGFmdGVyIHJ1bm5pbmcgdGhlIGZ1bmN0aW9uIChpZiBpdCBpcyBvbmUpLCBhbmQgdHVybmluZyB0byBmYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZpbmFsU3VibWl0VVJMKGZvcm0pe1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRTdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiBhIGZ1bmN0aW9uLCBydW4gaXRcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9zdWJtaXRVUkwgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiB0aGlzLl9zdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBvbiBzdWJtaXQgaGFuZGxlciAob25seSBpZiB4aHJTdWJtaXQgaXMgdHJ1ZSlcbiAgICAgKlxuICAgICAqIFBhc3MgdGhlIGZvcm0gb3IgZm9ybSBzZWxlY3RvclxuICAgICAqL1xuICAgIGF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSl7XG4gICAgICAgIGlmKCAhdGhpcy5feGhyU3VibWl0ICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgbm90IHBhc3NlZCwgZ2V0IGl0IGZyb20gdGhpcyBvYmplY3RcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgRm9ybSBlbGVtZW50IG5vdCByZWNlaXZlZCwgY2Fubm90IGF0dGFjaCBzdWJtaXQgaGFuZGxlcmA7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vaWYgeGhyIHN1Ym1pdCBpcyBkaXNhYmxlZCwgZG9uJ3QgYmxvY2sgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBpZiggIXNlbGYuX3hoclN1Ym1pdCApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5zdWJtaXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBZb3VyIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSAyIHBhcmFtcywgdGhlIGZpcnN0IGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGZvcm0gb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHRoaXMuX29uU3VjY2Vzcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICovXG4gICAgY2xlYXJPblN1Y2Nlc3NDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGFsbCBvblN1Y2Nlc3MgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIHRyaWdnZXJPblN1Y2Nlc3MocmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuZm9yRWFjaChmdW5jdGlvbihvblN1Y2Nlc3Mpe1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IGlzIG5vdCBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICB0aGlzLl9vbkVycm9yLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9uRXJyb3IgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBjbGVhck9uRXJyb3JDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgb25FcnJvciBjYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgdHJpZ2dlck9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uRXJyb3IgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uRXJyb3IuZm9yRWFjaChmdW5jdGlvbihvbkVycm9yKXtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhlIGZvcm0gdXNpbmcgWEhSXG4gICAgICpcbiAgICAgKiAxKSBEZXRlcm1pbmVzIHRoZSBVUkxcbiAgICAgKiAyKSBEZXRlcm1pbmVzIHRoZSBtZXRob2QgKEdFVCwgUE9TVCwgUEFUQ0gsIGV0YylcbiAgICAgKiAzKSBEZXRlcm1pbmVzIGlmIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAgICogNCkgR2V0cyB0aGUgZm9ybSdzIHZhbHVlc1xuICAgICAqIDUpIFN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgKiA2KSBSZXBsYWNlcyB0aGUgZm9ybSwgcnVucyBvbkVycm9yLCBvciBydW5zIG9uU3VjY2VzcyBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgKHNlZSBuZXh0IGxpbmUpXG4gICAgICogIFJlc3BvbnNlIFR5cGUgPSBBY3Rpb24gVGFrZW5cbiAgICAgKiAgICBzdHJpbmcgaHRtbCB3aXRoIGZvcm0gaW5zaWRlID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciBzZXQsIGJ1dCBub3QgZm91bmQgPSBraWNrb2ZmIG9uRXJyb3JcbiAgICAgKiAgICBzdHJpbmcgLSByZXBsYWNlIGZvcm0gb24gcGFnZSB3aXRoIGVudGlyZSByZXNwb25zZVxuICAgICAqICAgIG9iamVjdC5odG1sID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgb2JqZWN0LmVycm9yID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgb2JqZWN0IGluIGdlbmVyYWwgPSBraWNrb2ZmIG9uU3VjY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7Zm9ybXxib29sZWFufVxuICAgICAqL1xuICAgIHN1Ym1pdEZvcm0oZm9ybSkge1xuICAgICAgICAvL2Jsb2NrIG11bHRpcGxlIGZvcm0gc3VibWlzc2lvbnMgYXQgdGhlIHNhbWUgdGltZSB1bnRpbCB0aGlzIG9uZSBpcyBjb21wbGV0ZVxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3Byb2Nlc3NpbmcgPT09IFwidW5kZWZpbmVkXCIgKSB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIGlmKCB0aGlzLl9wcm9jZXNzaW5nICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vY2FjaGUgZm9yIHVzZSBpbnNpZGUgb3RoZXIgc2NvcGVzXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBwcm92aWRlZCBzdWJtaXQgVVJMXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldEZpbmFsU3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBwcm92aWRlZCBzdWJtaXQgbWV0aG9kXG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLmdldFN1Ym1pdE1ldGhvZCgpO1xuICAgICAgICAvL2lmIGl0J3MgbnVsbCwgZ3JhYiBpdCBmcm9tIHRoZSBmb3JtXG4gICAgICAgIGlmKCBtZXRob2QgPT09IG51bGwgKXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZm9ybS5hdHRyaWJ1dGVzLm1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgKXsgLy9jaGVjayB0aGF0IGl0IHdhcyBzZXQgZXhwbGljaXRseVxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZvcm0ubWV0aG9kOyAvL2dyYWIgSlVTVCB0aGUgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2RlZmF1bHQgdG8gcG9zdCBpZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgbWV0aG9kIGFuZCBsb3dlcmNhc2UgYW55dGhpbmcgdGhhdCB3YXMgcHJvdmlkZWRcbiAgICAgICAgbWV0aG9kID0gIW1ldGhvZCA/ICdwb3N0JyA6IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vaWYgbm90IHZhbGlkLCBzdG9wIGhlcmUgdW50aWwgdGhleSByZXN1Ym1pdFxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoZm9ybSkpe1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgLy9nZXQgZm9ybSB2YWx1ZXNcbiAgICAgICAgY29uc3QgZm9ybV92YWx1ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy5nZXRGb3JtVmFsdWVzKGZvcm0pLFxuICAgICAgICAgICAgZSA9PiBlLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKVxuICAgICAgICApLmpvaW4oJyYnKTtcblxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZm9ybV92YWx1ZXMsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAvL2p1c3QgaW4gY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIHRoZSB3cm9uZyByZXNwb25zZSB0eXBlIGFuZCBpdCdzIGFjdHVhbGx5IEpTT04gLSBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB0cnl7IGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTsgfSBjYXRjaChlKXsgfVxuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhIHN0cmluZywgaXQncyBwcm9iYWJseS9ob3BlZnVsbHkgdGhlIGZvcm0gd2l0aCBpbmxpbmUgZXJyb3JzXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgLy9pZiB3ZSBhcmUgbG9va2luZyBmb3IgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgZm9ybSB3YXMgbm90IGZvdW5kIGluIGl0LCBsZXQncyBhc3N1bWUgaXQgZG9lc24ndCBjb250YWluIHRoZSBmb3JtLiBJZiBub3QsIHRoZW4gbWF5YmVcbiAgICAgICAgICAgICAgICAgICAgaWYoICFwYXJzZWQuaHRtbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGAke3NlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKX0gY291bGQgbm90IGJlIGZvdW5kIGluIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcmAsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vcHJvdmlkZSB0aGUgZm9ybSdzIEhUTUwgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb3RoZXIgZGV0YWlscyBsaWtlIHRoZSByb3V0ZSBhbmQgdGhlIGZ1bGwgcmVzcG9uc2UgdG8gaW5zZXJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHBhcnNlZCwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YX0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IEpTT05cbiAgICAgICAgICAgIGVsc2UgaWYoIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyApe1xuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgdGhlIEhUTUwsIGp1c3QgcG9wIGl0IGJhY2sgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5odG1sICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YS5odG1sfSwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyBhbiBlcnJvciBtZXNzYWdlLCB0cmlnZ2VyIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGlmKCBkYXRhLmVycm9yICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGRhdGEuZXJyb3IsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgZG9lc24ndCBBUFBFQVIgdG8gYmUgdGhlIGZvcm0gYWdhaW4sIG9yIGFuIGVycm9yLCBsZXQncyBjYWxsIGl0IGEgc3VjY2Vzc1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPblN1Y2Nlc3MoZGF0YSwgZm9ybSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZm9ybSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkXG4gICAgICpcbiAgICAgKiBPdmVycmlkZS9leHRlbmQgdGhpcyBpZiB5b3Ugd2FudCB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIHByaW9yIHRvIHN1Ym1pc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhXG4gICAgICovXG4gICAgZ2V0Rm9ybVZhbHVlcyhmb3JtKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICB9XG59IiwiaW1wb3J0IHtYSFJGb3JtfSBmcm9tIFwiLi9YSFJGb3JtXCI7XG5pbXBvcnQge0Zvcm1Gcm9tVVJMfSBmcm9tIFwiLi9Gb3JtRnJvbVVSTFwiO1xuXG5leHBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vcmVxdWVzdFwiO1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gc2ltdWxhdGUgYSBwYWdlIGNoYW5nZSBieSB1c2luZyBhbiBYSFIgcmVxdWVzdCB0byBncmFiIGNvbnRlbnQgYW5kIHJlcGxhY2UgaXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgYnJvd3NlcidzIGhpc3RvcnksIHN3YXBzIG91dCBtZXRhIHRhZ3MsIHVwZGF0ZXMgdGhlIHRpdGxlLCBhbmQgbW9yZVxuICpcbiAqIFVzZSBvbmxvYWQgYW5kIG9uVW5sb2FkIGhvb2tzIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGZvciB0aGluZ3MgbGlrZSB0cmlnZ2VyaW5nIGEgZ29vZ2xlIGFuYWx5dGljcyBwYWdlIHZpZXdcbiAqICBvciBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZSdzIG9ubG9hZCBjYWxsYmFja1xuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbmxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBpZiggdHlwZW9mIGRhdGEgIT09ICdvYmplY3QnICkgdGhyb3cgYCR7ZGF0YX0gaXMgbm90IGFuIG9iamVjdGA7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldHMgYSBzaW5nbGUgaXRlbSBpbiB5b3VyIGRhdGEgb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHZhbFxuICAgICAqL1xuICAgIHNldERhdGFJdGVtOiBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuX2RhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIGEgc2luZ2xlIGl0ZW0gZnJvbSB5b3VyIGRhdGEgb2JqZWN0IG9yIGlmIGl0IGRvZXNuJ3QgZXhpc3QgaXQnbGwgcmV0dXJuIG51bGxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgZ2V0RGF0YUl0ZW06IGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gIT09ICd1bmRlZmluZWQnID8gdGhpc18uZGF0YVtrZXldIDogbnVsbDtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgY2xlYXJEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0UGFzc3Rocm91Z2hEYXRhKG51bGwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgZ2V0RGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RhdGE7XG4gICAgfSxcbiAgICBfZGF0YToge30sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24gKHNlbGVjdG9yX3N0cmluZykge1xuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yX3N0cmluZyAhPT0gJ3N0cmluZycpIHRocm93IGAke3NlbGVjdG9yX3N0cmluZ30gaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3Rvcl9zdHJpbmc7XG4gICAgfSxcbiAgICBfaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcl9zdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3JlcGxhY2VFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3Rvcl9zdHJpbmc7XG4gICAgfSxcbiAgICBfcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdyYWJzIEhUTUwgZnJvbSBhIFVSTCBhbmQgcmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiAxKSBTaG93cyBhIGxvYWRlciAoaWYgZW5hYmxlZClcbiAgICAgKiAyKSBSZXF1ZXN0cyBjb250ZW50IGZyb20gdGhlIHByb3ZpZGVkIFVSTFxuICAgICAqIDMpIFJlcGxhY2VzIGl0IG9uIHRoZSBwYWdlIChhbmQgYWxsIHRoZSBtYWdpYyByZXBsYWNlUGFnZUNvbnRlbnQgZG9lcywgc2VlIGNvbW1lbnRzIG9uIHRoYXQgbWV0aG9kIGJlbG93KVxuICAgICAqIDQpIElmIHRoZXJlJ3MgYSBjYWxsYmFjayBwcm92aWRlZCwgaXQnbGwgYmUgcnVuIGFmdGVyd2FyZHMgKGl0IHJlY2VpdmVzIHRoZSBuZXdseSByZXBsYWNlZCBlbGVtZW50IGFzIGEgcGFyYW0pXG4gICAgICpcbiAgICAgKiBPbiBlcnJvciwgaXQgdHJpZ2dlcnMgYSBuYXZpZ2F0aW9uIGZhaWx1cmUgYW5kIHByb3ZpZGVzIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCBVUkwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyBzZWxmLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyBzZWxmLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCBpbmNvbWluZ19lbCAoJHtpbmNvbWluZ19lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZV9lbCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vY2FjaGUgaW4gY2FzZSBpdCBjaGFuZ2VzIGR1cmluZyB0aGlzIHByb2Nlc3NcbiAgICAgICAgY29uc3QgZGF0YSA9IHNlbGYuZ2V0RGF0YSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50X3JvdXRlID0gdGhpcy5nZXRSb3V0ZUZyb21NZXRhKCk7XG5cbiAgICAgICAgc2VsZi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBzZWxmLl9yZXBsYWNlUGFnZUNvbnRlbnQocmVzcG9uc2UuZGF0YSwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSwgY3VycmVudF9yb3V0ZSwgZGF0YSk7XG5cbiAgICAgICAgICAgIC8vaWYgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHJ1biBpdCBhbmQgcHJvdmlkZSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvL3dhaXQgZm9yIHRoZSBvbnVubG9hZCBjYWxsYmFja3MgdG8gcnVuIGFuZCB0aGUgbmV3IGNvbnRlbnQgdG8gYmUgcHV0IG9uIHRoZSBwYWdlIGZpcnN0XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIGN1cnJlbnRfcm91dGUsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sIDEwNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2VsZi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIC8vYXQgdGhpcyBwb2ludCwgaXQgY2FuIG9ubHkgYmUgYSBzdHJpbmcgZXJyb3IgbWVzc2FnZSBvciBhbiBheGlvcyBlcnJvciBvYmplY3RcbiAgICAgICAgICAgIC8vc28gc2V0IGJvdGggdmFsdWVzIGFjY29yZGluZ2x5XG4gICAgICAgICAgICBjb25zdCBheGlvc19lcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiAmJiBlcnJvci5pc0F4aW9zRXJyb3IgPyBlcnJvciA6IG51bGw7XG4gICAgICAgICAgICBlcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiAmJiBlcnJvci5pc0F4aW9zRXJyb3IgPyBlcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0IDogZXJyb3I7XG5cbiAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJGYWlsKGVycm9yLCB1cmwsIGRhdGEsIGF4aW9zX2Vycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24gKGRlbGF5X2luX21zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsYXlfaW5fbXMgIT09IFwibnVtYmVyXCIpIHRocm93IGAke2RlbGF5X2luX21zfSBpcyBub3QgYW4gaW50ZWdlcmA7XG4gICAgICAgIHRoaXMuX2xvYWRlckRlbGF5ID0gZGVsYXlfaW5fbXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgX2xvYWRlckRlbGF5OiAzMDAsXG4gICAgZ2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlckRlbGF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIHNlbGYubG9hZGVyX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLl9nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9LCBzZWxmLmdldExvYWRlckRlbGF5KCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBoaWRlTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgdGhlIGxvYWRlciBzdGlsbCBoYXNuJ3Qgc2hvd24geWV0LCBwcmV2ZW50IGl0IGJlY2F1c2UgdGhlIHJlcXVlc3Qgd2FzIHZlcnkgZmFzdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNlbGYubG9hZGVyX3RpbWVvdXQpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgbG9hZGVyXG4gICAgICAgIHNlbGYuX2dldExvYWRlckVsKCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsYXNzZXMgZm9yIHRoZSBsb2FkZXJcbiAgICAgKiBEZWZhdWx0cyBhcmUgZm9yIGJvb3RzdHJhcCAod2l0aCB0aGUgZXhjZXB0aW9uIG9mIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXIpXG4gICAgICovXG4gICAgX2xvYWRlckNsYXNzZXM6ICdwcm9ncmVzcyBwYWdlLW5hdmlnYXRpb24tbG9hZGVyJyxcbiAgICBfbG9hZGVySW5uZXJEaXZDbGFzc2VzOiAncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcsXG5cbiAgICAvKipcbiAgICAgKiBJZiBlbmFibGVkLCBhZGRzIGEgbG9hZGVyIHRvIHRoZSBwYWdlIGFuZCBjYWNoZXMgYSByZWZlcmVuY2UgdG8gaXQsIHRoZW4gcmV0dXJucyB0aGF0IHJlZmVyZW5jZVxuICAgICAqXG4gICAgICogQHJldHVybnMgRWxlbWVudFxuICAgICAqL1xuICAgIF9nZXRMb2FkZXJFbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZi5uYXZMb2FkZXJDYWNoZWQpIHJldHVybiBzZWxmLm5hdkxvYWRlckNhY2hlZDtcblxuICAgICAgICAvL3ByZXBlbmQgdGhlIGxvYWRlciBlbGVtZW50c1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSBzZWxmLl9sb2FkZXJDbGFzc2VzO1xuICAgICAgICBsZXQgaW5uZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyX2Rpdi5jbGFzc0xpc3QgPSBzZWxmLl9sb2FkZXJJbm5lckRpdkNsYXNzZXM7XG4gICAgICAgIGRpdi5hcHBlbmQoaW5uZXJfZGl2KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdik7XG5cbiAgICAgICAgLy9nZXQgYW5kIGNhY2hlIGEgcmVmZXJlbmNlIHRvIGl0IGZvciBmdXR1cmUgcmVxdWVzdHNcbiAgICAgICAgc2VsZi5uYXZMb2FkZXJDYWNoZWQgPSBkb20uZ2V0RWxlbWVudCgnLnBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInKTtcblxuICAgICAgICByZXR1cm4gc2VsZi5uYXZMb2FkZXJDYWNoZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcsIGlmIGl0IGV4aXN0c1xuICAgICAqXG4gICAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgSFRNTCwgaXQnbGwgZ3JhYiBpdCBmcm9tIHRoZSBjdXJyZW50IERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcmV0dXJucyB7YW55IHwgRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRSb3V0ZUZyb21NZXRhOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICBodG1sID0gdHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuaGVhZCA6IGh0bWw7XG4gICAgICAgIHZhciByb3V0ZSA9IGh0bWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJjdXJyZW50X3JvdXRlXCJdJyk7XG4gICAgICAgIHJvdXRlID0gcm91dGUgPyByb3V0ZS5jb250ZW50IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyA/IG51bGwgOiBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5sb2FkKHJlcXVlc3QuZ2V0RnVsbFVSTCgpLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGZ1bGwgcmVmcmVzaCBvZiB0aGUgY3VycmVudCBVUkxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGZ1bGxSZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHVzZXIgdG8gYSBuZXcgcGFnZSB3aXRob3V0IFhIUlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHJlZGlyZWN0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhcnJpdmluZyBhdCBhIG5ldyBwYWdlLCB5b3UgbWlnaHQgbmVlZCB0byBpbnN0YW50aWF0ZSBzb21lIHN0dWZmXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfb25sb2FkQ2FsbGJhY2tzOiBbXSxcbiAgICBvbmxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vbmxvYWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25sb2FkOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29ubG9hZENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF9vblVubG9hZENhbGxiYWNrczogW10sXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vblVubG9hZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmVPblVubG9hZDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLl9vblVubG9hZENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgbmV3IHBhZ2UgZmFpbHMgdG8gbG9hZCwgeW91IHNob3VsZCBwcm9iYWJseSB0ZWxsIHRoZSB1c2VyL3RyeSBhZ2Fpbi9sb2cgdGhlIGlzc3VlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfb25GYWlsQ2FsbGJhY2tzOiBbXSxcbiAgICBvbkZhaWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25GYWlsOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gdHJhY2sgdGhlIGJyb3dzZXIncyBoaXN0b3J5IGJ1dHRvbnMgKGJhY2svZm9yd2FyZClcbiAgICAgKlxuICAgICAqIEB0b2RvOiBJbnZlc3RpZ2F0ZSBwb3NzaWJsZSBpc3N1ZSB3aXRoIGNocm9tZSBjYWNoaW5nIGJhY2sgYnV0dG9uIGNvbnRlbnRzIGFuZCBub3QgbG9hZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgICAgKi9cbiAgICBpbml0SGlzdG9yeUhhbmRsZXJzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2ZvcndhcmQgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnB1c2hzdGF0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWQocmVxdWVzdC5nZXRVUklXaXRoUXVlcnlTdHJpbmcoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9iYWNrIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmxvYWQocmVxdWVzdC5nZXRVUklXaXRoUXVlcnlTdHJpbmcoKSwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aCBuZXcgSFRNTFxuICAgICAqXG4gICAgICogMSkgVHJpZ2dlcnMgdW5sb2FkKClcbiAgICAgKiAyKSBXYWl0cyAxMDBtc1xuICAgICAqIDMpIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCB0byBncmFiIGtleSBjb21wb25lbnRzXG4gICAgICogNCkgUmVwbGFjZXMgYWxsIG1ldGEgdGFncyAoaW1wb3J0YW50IGZvciBzb2NpYWwgbWVkaWEgc2hhcmluZyBhbW9uZyBvdGhlciB0aGluZ3MpXG4gICAgICogNSkgUmVwbGFjZXMgdGhlIGNhbm9uaWNhbCB0YWdcbiAgICAgKiA2KSBSZXBsYWNlcyBhbnkgY2xhc3NlcyBvbiB0aGUgYm9keSBzaW5jZSB0aGV5IGFyZSBnZW5lcmFsbHkgdXNlZCB0byBpbmRpY2F0ZSB3aGljaCBwYWdlIHlvdSdyZSBvblxuICAgICAqIDcpIFB1c2hlcyB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgKiA4KSBTZXRzIHRoZSBwYWdlIHRpdGxlXG4gICAgICogOSkgUmVwbGFjZXMgY29udGVudCBpbiB0aGUgRE9NXG4gICAgICogMTApIFRyaWdnZXJzIG9ubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gaW5jb21pbmdfZWxcbiAgICAgKiBAcGFyYW0gcmVwbGFjZV9lbFxuICAgICAqIEBwYXJhbSBwdXNoX3N0YXRlXG4gICAgICogQHBhcmFtIGN1cnJlbnRfcm91dGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIF9yZXBsYWNlUGFnZUNvbnRlbnQoaHRtbCwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSwgY3VycmVudF9yb3V0ZSwgZGF0YSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFpbmNvbWluZ19lbCA/IHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50KCkgOiBpbmNvbWluZ19lbDtcbiAgICAgICAgcmVwbGFjZV9lbCA9IHR5cGVvZiByZXBsYWNlX2VsID09PSAndW5kZWZpbmVkJyB8fCAhcmVwbGFjZV9lbCA/IHNlbGYuZ2V0UmVwbGFjZUVsZW1lbnQoKSA6IHJlcGxhY2VfZWw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmICh0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgcmVwbGFjZV9lbCAoJHtyZXBsYWNlX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBzZWxmLl90cmlnZ2VyVW5sb2FkKGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWwpLCByZXBsYWNlX2VsLCBjdXJyZW50X3JvdXRlLCBkYXRhKTtcblxuICAgICAgICB2YXIgcGFyc2VkID0gc2VsZi5fcGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsKTtcblxuICAgICAgICAvL2lmIHRoZXJlIGlzIEhUTUwgdG8gcHV0IG9uIHRoZSBwYWdlXG4gICAgICAgIGlmIChwYXJzZWQuaHRtbC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG1ldGEgdGFncyBhbmQgcmVwbGFjZSBmcm9tIG5ldyBwYWdlXG4gICAgICAgICAgICBkb20ucmVtb3ZlKCdtZXRhJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAvL2FkZCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgICAgIC8vIC0gcG9zc2libHkgb3RoZXIgdGFncyB3aWxsIG5lZWQgdG8gYmUgd2hpdGVsaXN0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICBkb20ucmVtb3ZlKCdbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgICAgICBBcnJheS5mcm9tKHBhcnNlZC5saW5rcykuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxpbmspO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYWRkIGJvZHkgY2xhc3Nlc1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QgPSBwYXJzZWQuYm9keV9jbGFzc2VzO1xuXG4gICAgICAgICAgICAvL3B1c2ggdGhlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAgICAgICAgcHVzaF9zdGF0ZSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSh7dXJsOiB1cmx9LCBwYXJzZWQudGl0bGUsIHVybCk7XG5cbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSB0YWIvcGFnZSB0aXRsZVxuICAgICAgICAgICAgc2VsZi5fc2V0VGl0bGUocGFyc2VkLnRpdGxlKTtcblxuICAgICAgICAgICAgLy9yZXBsYWNlIGNvbnRlbnQgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIGNvbnN0IG5ld19jb250ZW50ID0gZG9tLnJlcGxhY2VFbFdpdGhIVE1MKHJlcGxhY2VfZWwsIHBhcnNlZC5odG1sKTtcblxuICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgc2VsZi5fdHJpZ2dlck9ubG9hZChuZXdfY29udGVudCwgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHBhcnNlZC5yb3V0ZSwgZGF0YSk7XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlcGxhY2VfZWwgaXMgdGhlIHNhbWUgYXMgZ2V0UmVwbGFjZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIC8vIHRoZW4gaXQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gd2hhdGV2ZXIgdGhlIGluY29taW5nX2VsIGlzIGJlY2F1c2UgaXQgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2V0UmVwbGFjZUVsZW1lbnQoKSAhPT0gcmVwbGFjZV9lbCkge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0UmVwbGFjZUVsZW1lbnQoaW5jb21pbmdfZWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCAob3IgSlNPTiBvYmplY3QpIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogTm9kZUxpc3RPZjxFbGVtZW50PiwgaHRtbDogSHRtbE9wdGlvbnMgfCBzdHJpbmcsIHRpdGxlOiBhbnkgfCBIVE1MVGl0bGVFbGVtZW50LCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIG51bGwgaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIHBhcmVudF9lbCA9IHR5cGVvZiBwYXJlbnRfZWwgPT09ICd1bmRlZmluZWQnID8gbnVsbCA6IHBhcmVudF9lbDtcblxuICAgICAgICAvL211c3QgYmUgYSBzdHJpbmcgb3IgbnVsbFxuICAgICAgICBpZiAodHlwZW9mIHBhcmVudF9lbCAhPT0gJ3N0cmluZycgJiYgcGFyZW50X2VsICE9PSBudWxsKSB0aHJvdyBgUHJvdmlkZWQgcGFyZW50X2VsICgke3BhcmVudF9lbH0pIGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICByb3V0ZSA9IG51bGw7XG4gICAgICAgIGlmKCB0eXBlb2YgaHRtbCA9PT0gXCJvYmplY3RcIiApe1xuICAgICAgICAgICAgaWYoIGh0bWwuaHRtbCApe1xuICAgICAgICAgICAgICAgIGlmKCBodG1sLnJvdXRlICl7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlID0gaHRtbC5yb3V0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwuaHRtbDtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRocm93IGBJbmNvbWluZyBKU09OIG9iamVjdCBkb2VzIG5vdCBjb250YWluIEhUTUwga2V5YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIGRvbVxuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2dldCBwYWdlIHRpdGxlXG4gICAgICAgIHZhciB0aXRsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuICAgICAgICB0aXRsZSA9IHRpdGxlID8gdGl0bGUuaW5uZXJUZXh0IDogbnVsbDtcblxuICAgICAgICAvL2dldCBhbnkgbWV0YSB0YWdzXG4gICAgICAgIHZhciBtZXRhcyA9IGRvYy5oZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgICAgIC8vZ2V0IHRoZSBjYW5vbmljYWwgbGlua1xuICAgICAgICB2YXIgbGlua3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJjYW5vbmljYWxcIl0nKTtcbiAgICAgICAgLy9nZXQgYm9keSBjbGFzc2VzXG4gICAgICAgIHZhciBib2R5X2NsYXNzZXMgPSBkb2MuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgIHZhciBuZXdfaHRtbCA9IGh0bWw7XG5cbiAgICAgICAgLy9pZiBhIHBhcmVudCBlbGVtZW50IHdhcyBwcm92aWRlZCwgZmluZCBpdFxuICAgICAgICBpZiAocGFyZW50X2VsKSB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50X2VsKTtcbiAgICAgICAgICAgIC8vaWYgY291bGRuJ3QgZmluZCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKCFzZWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGFyZW50IHNlbGVjdG9yICR7cGFyZW50X2VsfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2dyYWIgdGhlIG91dGVySFRNTFxuICAgICAgICAgICAgbmV3X2h0bWwgPSBzZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiByb3V0ZSBkaWRuJ3QgZXhpc3QgaW4gdGhlIGluY29taW5nIEpTT04gb2JqZWN0LCBncmFiIGZyb20gdGhlIEhUTUxcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGUgPyByb3V0ZSA6IHNlbGYuZ2V0Um91dGVGcm9tTWV0YShkb2MpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvbiwgeW91IGRvbid0IG5lZWQgdGhpcyBhbnltb3JlLlxuICAgICAgICBwYXJzZXIgPSBkb2MgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgICAgICBtZXRhczogbWV0YXMsXG4gICAgICAgICAgICBsaW5rczogbGlua3MsXG4gICAgICAgICAgICBib2R5X2NsYXNzZXM6IGJvZHlfY2xhc3NlcyxcbiAgICAgICAgICAgIGh0bWw6IG5ld19odG1sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIG9uIGEgbmV3IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQWxzbyBpbmNsdWRlcyB0aGUgcm91dGUgb2YgdGhlIG5ldyBwYWdlIChpZiBpdCBleGlzdHMgaW4gYSBtZXRhIHRhZykgc28gdGhhdCB5b3UgY2FuIGtpY2sgb2ZmIEpTIHNwZWNpZmljIHRvIHRoYXQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcGxhY2VkX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBfdHJpZ2dlck9ubG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3RvciwgcmVwbGFjZWRfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX29ubG9hZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsLCBlbF9zZWxlY3RvciwgcmVwbGFjZWRfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBsZWF2aW5nIHRoZSBsYXN0IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBfdHJpZ2dlclVubG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3Rvciwgcm91dGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fb25VbmxvYWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICBjYWxsYmFjayhlbCwgZWxfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIGZhaWxlZCwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKiBAcGFyYW0gYXhpb3NfZXJyb3JcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfdHJpZ2dlckZhaWw6IGZ1bmN0aW9uIChlcnJvciwgdXJsLCBkYXRhLCBheGlvc19lcnJvcikge1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdXJsLCBkYXRhLCBheGlvc19lcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF9zZXRUaXRsZTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59OyIsInJlcXVpcmUoJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJyk7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBnZXQgZGV0YWlscyBhYm91dCB0aGUgY3VycmVudCByZXF1ZXN0IGVhc2lseSwgaW5jbHVkaW5nIHF1ZXJ5c3RyaW5nIHZhcmlhYmxlc1xuICovXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1ZXJ5IHN0cmluZyB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFVSTFNlYXJjaFBhcmFtc1xuICAgICAqL1xuICAgIHF1ZXJ5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHJlcXVlc3Qgd2FzIG1hZGUgc2VjdXJlbHkgb3ZlciBTU0wgKGh0dHBzIGluc3RlYWQgb2YgaHR0cClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSHR0cHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgfHwgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbldpdGhQcm90b2NvbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJJXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkkgd2l0aCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSVdpdGhRdWVyeVN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgVVJMXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20vcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGdWxsVVJMOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbGFzaCB0byBhIHN0cmluZyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tIGJlY29tZXMgaHR0cHM6Ly9teS1kb21haW4uY29tL1xuICAgICAqIEV4YW1wbGU6IC9teS1wcm9kdWN0IGJlY29tZXMgL215LXByb2R1Y3QvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhcHBlbmRTbGFzaDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtBYnN0cmFjdENsYXNzfSBmcm9tIFwiLi4vQWJzdHJhY3RDbGFzc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG5cbi8qKlxuICpcbiAqIFNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIENsYXNzIGZvciBzdG9yaW5nIGFuZCBpbnRlcmFjdGluZyB3aXRoIHRoZSBjdXJyZW50IHdlYnNpdGUncyBpZCwgbmFtZSwgYW5kIGNvbmZpZyBvcHRpb25zXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU2l0ZSBleHRlbmRzIEFic3RyYWN0Q2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ107XG5cbiAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgLy9leHRlbmQgdXNlcl9kZWZhdWx0cyB3aXRoIGluY29taW5nIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi5kYXRhfTtcblxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9nZXRzIHRoZSB3ZWJzaXRlJ3MgbmFtZVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBjb25maWcgZGF0YVxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGNvbmZpZywgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbiBpbmRpdmlkdWFsIGNvbmZpZyB2YWx1ZSBvciBudWxsIGlmIGl0J3Mgbm90IGRlZmluZWRcbiAgICBnZXRDb25maWdJdGVtKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IHRoaXMuX2NvbmZpZ1trZXldO1xuICAgIH1cblxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbW1vbiBzdHJpbmcgbWFuaXB1bGF0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLmdldHRlcignbmFtZScpIHJldHVybnMgJ2dldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnZ2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLnNldHRlcignbmFtZScpIHJldHVybnMgJ3NldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnc2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyB1Y2ZpcnN0KCkgZnVuY3Rpb25hbGl0eSB0byBKUyAobGlrZSBQSFApXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIHVjZmlyc3Q6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbn07IiwiaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogVG9nZ2xlcyBhbiBlbGVtZW50IG9uIGNsaWNrIG9mIGEgYnV0dG9uLCBjbGljayBvdXRzaWRlIHRoZSBlbGVtZW50IChpZiBpdCdzIHZpc2libGUpLCBvciBvbiB3aW5kb3cgcmVzaXplXG4gKlxuICogVGhlIGJyZWFrcG9pbnQgaXMgYmFzZWQgb24gdmlzaWJpbGl0eSBvZiB0aGUgYnV0dG9uLlxuICogICBJZiB0aGUgYnV0dG9uIGlzIHZpc2libGUsIHRoZSBlbGVtZW50IHdpbGwgbm90IGJlICh1bmxlc3MgdGhlIGJ1dHRvbiBpcyBjbGlja2VkKVxuICogICBJZiB0aGUgYnV0dG9uIGlzIGhpZGRlbiwgdGhlIGVsZW1lbnQgd2lsbCBiZSB2aXNpYmxlXG4gKlxuICogTm8gc3R5bGVzIGFyZSBwcm92aWRlZCB3aXRoIHRoaXMgY29tcG9uZW50IHNvIGZlZWwgZnJlZSB0byBnbyBjcmF6eS5cbiAqICAgVGhlcmUncyBhIGxvdCB5b3UgY2FuIGRvIHdoZW4gYSBzaW5nbGUgY2xhc3MgaXMgdG9nZ2xlZC5cbiAqXG4gKiBVc2UgY2FzZXM6XG4gKiAxKSBDaGFuZ2UgZnJvbSBhIHNpZGViYXIgb24gZGVza3RvcCB0byBhIHBvcHVwIG9uIG1vYmlsZVxuICogMikgQ2hhbmdlIGZyb20gYW4gaW5saW5lIG1lbnUgb24gZGVza3RvcCB0byBhIHNsaWRlLWluIG9uIG1vYmlsZVxuICogLi4uSSdtIHN1cmUgeW91IGNhbiB0aGluayBvZiBzb21lXG4gKlxuICovXG5leHBvcnQgY2xhc3MgVG9nZ2xlT25Nb2JpbGV7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYnRuXG4gICAgICogQHBhcmFtIHRvZ2dsZV9lbFxuICAgICAqIEBwYXJhbSB0b2dnbGVfY2xhc3NcbiAgICAgKiBAcGFyYW0gaGlkZV9vbl9vdXRzaWRlX2NsaWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYnRuLCB0b2dnbGVfZWwsIHRvZ2dsZV9jbGFzcywgaGlkZV9vbl9vdXRzaWRlX2NsaWNrKXtcbiAgICAgICAgLy9zZXQgdGhlIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuYnRuID0gZG9tLmdldEVsZW1lbnQoYnRuLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy50b2dnbGVfZWwgPSBkb20uZ2V0RWxlbWVudCh0b2dnbGVfZWwsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0cnVlXG4gICAgICAgIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrID0gdHlwZW9mIGhpZGVfb25fb3V0c2lkZV9jbGljayAhPT0gXCJib29sZWFuXCIgPyB0cnVlIDogaGlkZV9vbl9vdXRzaWRlX2NsaWNrO1xuXG4gICAgICAgIC8vaWYgbm90IGEgc3RyaW5nLCBkZWZhdWx0IHRvIFwidmlzaWJsZVwiXG4gICAgICAgIHRoaXMudG9nZ2xlX2NsYXNzID0gdHlwZW9mIHRvZ2dsZV9jbGFzcyAhPT0gJ3N0cmluZycgPyAndmlzaWJsZScgOiB0b2dnbGVfY2xhc3M7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBoYW5kbGVycyBhbmQgcnVucyBvbldpbmRvd1Jlc2l6ZSBpbW1lZGlhdGVseSB0byBzZXQgdGhlIGluaXRpYWwgY2xhc3NcbiAgICAgKi9cbiAgICBpbml0KCl7XG4gICAgICAgIC8vdG8gYmUgdXNlZCBpbnNpZGUgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vY3JlYXRlIGEgdGhyb3R0bGVkIHdpbmRvdyByZXNpemUgaGFuZGxlclxuICAgICAgICBsZXQgdGhyb3R0bGU7XG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aHJvdHRsZSk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCBkb20uaXNWaXNpYmxlKHNlbGYuYnRuKSApe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5hZGQoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrICkge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldF9lbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgb24gdGhlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfZWwgPT09IHNlbGYuYnRuKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBpbnNpZGUgdGhlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYnRuID09PSB0YXJnZXRfZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0YXJnZXRfZWwgPSB0YXJnZXRfZWwucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRfZWwgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIG9uIHRoZSBlbGVtZW50IHdlIGFyZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfZWwgPT09IHNlbGYudG9nZ2xlX2VsKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBpbnNpZGUgdGhlIGVsZW1lbnQgd2UgYXJlIHRvZ2dsaW5nXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50b2dnbGVfZWwgPT09IHRhcmdldF9lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldF9lbCA9IHRhcmdldF9lbC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgIC8vb3RoZXJ3aXNlIGhpZGUgaXRcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50cy5vbignYm9keScsICdjbGljaycsIHRoaXMub25DbGlja091dHNpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrVG9nZ2xlQnRuID0gZXZlbnRzLm9uQ2xpY2sodGhpcy5idG4sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QudG9nZ2xlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIGlmKCB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayApIHtcbiAgICAgICAgICAgIGV2ZW50cy5vZmYoJ2JvZHknLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMub2ZmKHRoaXMuYnRuLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tUb2dnbGVCdG4pO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgfVxufSIsIi8qKlxuICogTWV0aG9kcyBmb3IgY2hlY2tpbmcgZGF0YSB0eXBlcyB3aXRoIG1vcmUgc3BlY2lmaWNpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IHR5cGVfY2hlY2tzID0ge1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgcHJvdmlkZWQga2V5IGluIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgaGF2ZSBhbGwga2V5c1xuICAgICAqIE9wdGlvbmFsbHkgY2Fubm90IGhhdmUgYW55IGtleXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IHRocm93cyBhbiBlcnJvciBpZiBhbnkgY2hlY2sgZmFpbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBrZXlzIC0gZGVmYXVsdDogZG9uJ3QgdmVyaWZ5IGtleXNcbiAgICAgKiBAcGFyYW0gcmVxdWlyZV9hbGxfa2V5cyAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHBhcmFtIGJsb2NrX290aGVyX2tleXMgLSBkZWZhdWx0IGZhbHNlXG4gICAgICogQHBhcmFtIHRocm93X2Vycm9yIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0RhdGFPYmplY3Q6IGZ1bmN0aW9uKHZhbHVlLCBrZXlzLCByZXF1aXJlX2FsbF9rZXlzLCBibG9ja19vdGhlcl9rZXlzLCB0aHJvd19lcnJvcil7XG4gICAgICAgIC8vZGVmYXVsdCBmb3IgdGhyb3dfZXJyb3IgaXMgZmFsc2VcbiAgICAgICAgdGhyb3dfZXJyb3IgPSB0eXBlb2YgdGhyb3dfZXJyb3IgIT09IFwidW5kZWZpbmVkXCIgPyB0aHJvd19lcnJvciA6IGZhbHNlO1xuXG4gICAgICAgIC8vZGVmYXVsdCBmb3IgcmVxdWlyZV9hbGxfa2V5cyBpcyBmYWxzZVxuICAgICAgICByZXF1aXJlX2FsbF9rZXlzID0gdHlwZW9mIHJlcXVpcmVfYWxsX2tleXMgIT09IFwidW5kZWZpbmVkXCIgPyByZXF1aXJlX2FsbF9rZXlzIDogZmFsc2U7XG5cbiAgICAgICAgLy9mb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkX3ZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICAgICAgICAvL2RlZmF1bHQgZXJyb3JfbXNnXG4gICAgICAgIGNvbnN0IGVycm9yX21zZyA9IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kZXRlcm1pbmUgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGNvbnN0IGlzX29iamVjdCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIjtcblxuICAgICAgICAvL2lmIG5vdCBhbiBvYmplY3QsIG51bGwsIG9yIGFuIGFycmF5XG4gICAgICAgIGlmKCAhaXNfb2JqZWN0IHx8IHZhbHVlID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHdlIG5lZWQgdG8gdmVyaWZ5IHRoZSBrZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGtleXMpICkge1xuICAgICAgICAgICAgbGV0IGZvdW5kX2tleSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG1pc3Npbmdfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9rZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5IHdhcyBmb3VuZCwgd2UgZm91bmQgYXRsZWFzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVfa2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kX2tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWYgaXQncyBub3QgZm91bmQsIHdlIGNhbid0IHNheSBhbGwga2V5cyBleGlzdCBpbiB0aGlzIG9iamVjdFxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npbmdfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vaWYgbm90IG9uZSBvZiB0aGUga2V5cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgICBpZiggIWZvdW5kX2tleSApe1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZzogYCtrZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRpZG4ndCBmaW5kIGFsbCB0aGUga2V5c1xuICAgICAgICAgICAgaWYoIHJlcXVpcmVfYWxsX2tleXMgJiYgbWlzc2luZ19rZXlzLmxlbmd0aCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBtaXNzaW5nIGRhdGE6IGArbWlzc2luZ19rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRvbid0IGFsbG93IGFueSBrZXlzIE5PVCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAgICAgICAgaWYoIGJsb2NrX290aGVyX2tleXMgKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5yZWNvZ25pemVkX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoICFrZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVjb2duaXplZF9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIHVucmVjb2duaXplZF9rZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGNvbnRhaW5zIGludmFsaWQgZGF0YTogYCt1bnJlY29nbml6ZWRfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hbGwgY2hlY2tzIHBhc3NlZCEgY29uZ3JhdHMsIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2xhc3N9IGZyb20gXCIuLi9BYnN0cmFjdENsYXNzXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xuY29uc3QgdXNlcl9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBpc0d1ZXN0OmZhbHNlLFxuICAgIGlzQWRtaW46ZmFsc2UsXG4gICAgdXNlcm5hbWU6bnVsbCxcbiAgICBmbmFtZTpudWxsLFxuICAgIGxuYW1lOm51bGwsXG4gICAgZW1haWw6bnVsbCxcbiAgICBwaG9uZTpudWxsLFxuICAgIHBlcm1pc3Npb25zOltdLFxuICAgIGFkZGl0aW9uYWxEYXRhOnt9LFxufTtcblxuLyoqXG4gKlxuICogVXNlclxuICpcbiAqIENsYXNzIGZvciBzdG9yaW5nIGFuZCBpbnRlcmFjdGluZyB3aXRoIGEgdXNlciBhbmQgdGhlaXIgcGVybWlzc2lvbnNcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9rZXlzID0gWydpZCcsICdpc0d1ZXN0JywgJ2lzQWRtaW4nLCAndXNlcm5hbWUnLCAnZm5hbWUnLCAnbG5hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAncGVybWlzc2lvbnMnLCAnYWRkaXRpb25hbERhdGEnXTsgXG4gICAgICAgIFxuICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gdGhpcztcblxuICAgICAgICAvL2V4dGVuZCB1c2VyX2RlZmF1bHRzIHdpdGggaW5jb21pbmcgZGF0YVxuICAgICAgICBkYXRhID0gey4uLnVzZXJfZGVmYXVsdHMsIC4uLmRhdGF9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3B1bGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBzZXRJZChpZCl7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0SXNHdWVzdChpc19ndWVzdCl7XG4gICAgICAgIHRoaXMuX2lzR3Vlc3QgPSBpc19ndWVzdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElzR3Vlc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzR3Vlc3Q7XG4gICAgfVxuXG4gICAgc2V0SXNBZG1pbihpc19hZG1pbil7XG4gICAgICAgIHRoaXMuX2lzQWRtaW4gPSBpc19hZG1pbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElzQWRtaW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWRtaW47XG4gICAgfVxuXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUpe1xuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VXNlcm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICAgIH1cblxuICAgIGdldEZuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbmFtZTtcbiAgICB9XG4gICAgc2V0Rm5hbWUoZmlyc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2ZuYW1lID0gZmlyc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0TG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xuYW1lO1xuICAgIH1cbiAgICBzZXRMbmFtZShsYXN0X25hbWUpe1xuICAgICAgICB0aGlzLl9sbmFtZSA9IGxhc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9xdWljayB3YXkgdG8gZ2V0IGZuYW1lIGFuZCBsbmFtZVxuICAgIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm5hbWUoKSArICcgJyArIHRoaXMuZ2V0TG5hbWUoKTtcbiAgICB9XG5cbiAgICBnZXRFbWFpbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gICAgfVxuICAgIHNldEVtYWlsKGVtYWlsKXtcbiAgICAgICAgdGhpcy5fZW1haWwgPSBlbWFpbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0UGhvbmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lO1xuICAgIH1cbiAgICBzZXRQaG9uZShwaG9uZSl7XG4gICAgICAgIHRoaXMuX3Bob25lID0gcGhvbmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIGdldFBlcm1pc3Npb25zKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJtaXNzaW9ucztcbiAgICB9XG4gICAgLy9zZXRzIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgc2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnMpe1xuICAgICAgICBpZiggIUFycmF5LmlzQXJyYXkocGVybWlzc2lvbnMpICkgdGhyb3cgXCJzZXRQZXJtaXNzaW9ucyByZXF1aXJlcyBhbiBhcnJheVwiO1xuXG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL2FkZHMgYSBzaW5nbGUgcGVybWlzc2lvbiB0byB0aGlzIHVzZXJcbiAgICBhZGRQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucy5wdXNoKHBlcm1pc3Npb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9SZW1vdmVzIGEgc2luZ2xlIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVzZXJcbiAgICByZW1vdmVQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICB0aGlzLnNldFBlcm1pc3Npb25zKHRoaXMuX3Blcm1pc3Npb25zLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gcGVybWlzc2lvbjtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHVzZXIgaGFzIHRoZSBwcm92aWRlZCBwZXJtaXNzaW9uXG4gICAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVybWlzc2lvbnMoKS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0QWRkaXRpb25hbERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZGl0aW9uYWxEYXRhO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0QWRkaXRpb25hbERhdGEoYWRkaXRpb25hbF9kYXRhKXtcbiAgICAgICAgLy9tdXN0IGJlIGEgZGF0YSBvYmplY3QsIGV2ZW4gaWYgaXQncyBlbXB0eVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoYWRkaXRpb25hbF9kYXRhLCBudWxsLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbF9kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9yZXR1cm5zIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0RGF0YUl0ZW0oa2V5KXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV07XG4gICAgfVxuICAgIC8vc2V0cyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIHNldERhdGFJdGVtKGtleSwgdmFsKXtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiOyhmdW5jdGlvbigpe3ZhciBrO2Z1bmN0aW9uIG0oYSl7dmFyIGI9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX19dmFyIHA9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfSxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXM7ZnVuY3Rpb24gcigpe3I9ZnVuY3Rpb24oKXt9O3EuU3ltYm9sfHwocS5TeW1ib2w9dSl9ZnVuY3Rpb24gdihhLGIpe3RoaXMucz1hO3AodGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9XG52LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN9O3ZhciB1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtpZih0aGlzIGluc3RhbmNlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yXCIpO3JldHVybiBuZXcgdihcImpzY29tcF9zeW1ib2xfXCIrKGN8fFwiXCIpK1wiX1wiK2IrKyxjKX12YXIgYj0wO3JldHVybiBhfSgpO2Z1bmN0aW9uIHcoKXtyKCk7dmFyIGE9cS5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9cS5TeW1ib2wuaXRlcmF0b3I9cS5TeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVthXSYmcChBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHgobSh0aGlzKSl9fSk7dz1mdW5jdGlvbigpe319XG5mdW5jdGlvbiB4KGEpe3coKTthPXtuZXh0OmF9O2FbcS5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfWZ1bmN0aW9uIHkoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0Om0oYSl9fXZhciB6O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5zZXRQcm90b3R5cGVPZil6PU9iamVjdC5zZXRQcm90b3R5cGVPZjtlbHNle3ZhciBBO2E6e3ZhciBCPXt2OiEwfSxDPXt9O3RyeXtDLl9fcHJvdG9fXz1CO0E9Qy52O2JyZWFrIGF9Y2F0Y2goYSl7fUE9ITF9ej1BP2Z1bmN0aW9uKGEsYil7YS5fX3Byb3RvX189YjtpZihhLl9fcHJvdG9fXyE9PWIpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBleHRlbnNpYmxlXCIpO3JldHVybiBhfTpudWxsfXZhciBEPXo7XG5mdW5jdGlvbiBFKCl7dGhpcy5oPSExO3RoaXMuYz1udWxsO3RoaXMubz12b2lkIDA7dGhpcy5iPTE7dGhpcy5tPXRoaXMudz0wO3RoaXMuZz1udWxsfWZ1bmN0aW9uIEYoYSl7aWYoYS5oKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2EuaD0hMH1FLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3RoaXMubz1hfTtFLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3RoaXMuZz17QTphLEI6ITB9O3RoaXMuYj10aGlzLnd8fHRoaXMubX07RS5wcm90b3R5cGVbXCJyZXR1cm5cIl09ZnVuY3Rpb24oYSl7dGhpcy5nPXtcInJldHVyblwiOmF9O3RoaXMuYj10aGlzLm19O2Z1bmN0aW9uIEcoYSxiLGMpe2EuYj1jO3JldHVybnt2YWx1ZTpifX1mdW5jdGlvbiBIKGEpe3RoaXMuQz1hO3RoaXMubD1bXTtmb3IodmFyIGIgaW4gYSl0aGlzLmwucHVzaChiKTt0aGlzLmwucmV2ZXJzZSgpfWZ1bmN0aW9uIEkoYSl7dGhpcy5hPW5ldyBFO3RoaXMuRD1hfVxuSS5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtGKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEoodGhpcyx0aGlzLmEuYy5uZXh0LGEsdGhpcy5hLmkpO3RoaXMuYS5pKGEpO3JldHVybiBLKHRoaXMpfTtmdW5jdGlvbiBMKGEsYil7RihhLmEpO3ZhciBjPWEuYS5jO2lmKGMpcmV0dXJuIEooYSxcInJldHVyblwiaW4gYz9jW1wicmV0dXJuXCJdOmZ1bmN0aW9uKGQpe3JldHVybnt2YWx1ZTpkLGRvbmU6ITB9fSxiLGEuYVtcInJldHVyblwiXSk7YS5hW1wicmV0dXJuXCJdKGIpO3JldHVybiBLKGEpfUkucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7Rih0aGlzLmEpO2lmKHRoaXMuYS5jKXJldHVybiBKKHRoaXMsdGhpcy5hLmNbXCJ0aHJvd1wiXSxhLHRoaXMuYS5pKTt0aGlzLmEuaihhKTtyZXR1cm4gSyh0aGlzKX07XG5mdW5jdGlvbiBKKGEsYixjLGQpe3RyeXt2YXIgZT1iLmNhbGwoYS5hLmMsYyk7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSXRlcmF0b3IgcmVzdWx0IFwiK2UrXCIgaXMgbm90IGFuIG9iamVjdFwiKTtpZighZS5kb25lKXJldHVybiBhLmEuaD0hMSxlO3ZhciBmPWUudmFsdWV9Y2F0Y2goZyl7cmV0dXJuIGEuYS5jPW51bGwsYS5hLmooZyksSyhhKX1hLmEuYz1udWxsO2QuY2FsbChhLmEsZik7cmV0dXJuIEsoYSl9ZnVuY3Rpb24gSyhhKXtmb3IoO2EuYS5iOyl0cnl7dmFyIGI9YS5EKGEuYSk7aWYoYilyZXR1cm4gYS5hLmg9ITEse3ZhbHVlOmIudmFsdWUsZG9uZTohMX19Y2F0Y2goYyl7YS5hLm89dm9pZCAwLGEuYS5qKGMpfWEuYS5oPSExO2lmKGEuYS5nKXtiPWEuYS5nO2EuYS5nPW51bGw7aWYoYi5CKXRocm93IGIuQTtyZXR1cm57dmFsdWU6YltcInJldHVyblwiXSxkb25lOiEwfX1yZXR1cm57dmFsdWU6dm9pZCAwLGRvbmU6ITB9fVxuZnVuY3Rpb24gTShhKXt0aGlzLm5leHQ9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaShiKX07dGhpc1tcInRocm93XCJdPWZ1bmN0aW9uKGIpe3JldHVybiBhLmooYil9O3RoaXNbXCJyZXR1cm5cIl09ZnVuY3Rpb24oYil7cmV0dXJuIEwoYSxiKX07dygpO3RoaXNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfX1mdW5jdGlvbiBOKGEsYil7dmFyIGM9bmV3IE0obmV3IEkoYikpO0QmJkQoYyxhLnByb3RvdHlwZSk7cmV0dXJuIGN9XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQmxvYiYmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgRm9ybURhdGF8fCFGb3JtRGF0YS5wcm90b3R5cGUua2V5cykpe3ZhciBPPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYihhW2NdKX0sUD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIgaW5zdGFuY2VvZiBCbG9iP1tTdHJpbmcoYSksYix2b2lkIDAhPT1jP2MrXCJcIjpcInN0cmluZ1wiPT09dHlwZW9mIGIubmFtZT9iLm5hbWU6XCJibG9iXCJdOltTdHJpbmcoYSksU3RyaW5nKGIpXX0sUT1mdW5jdGlvbihhLGIpe2lmKGEubGVuZ3RoPGIpdGhyb3cgbmV3IFR5cGVFcnJvcihiK1wiIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSBcIithLmxlbmd0aCtcIiBwcmVzZW50LlwiKTt9LFM9ZnVuY3Rpb24oYSl7dmFyIGI9eShhKTthPWIubmV4dCgpLnZhbHVlO2I9Yi5uZXh0KCkudmFsdWU7YSBpbnN0YW5jZW9mIEJsb2ImJihhPW5ldyBGaWxlKFthXSxiLHt0eXBlOmEudHlwZSxsYXN0TW9kaWZpZWQ6YS5sYXN0TW9kaWZpZWR9KSk7XG5yZXR1cm4gYX0sVD1cIm9iamVjdFwiPT09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxVPVQuRm9ybURhdGEsVj1ULlhNTEh0dHBSZXF1ZXN0JiZULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kLFc9VC5SZXF1ZXN0JiZULmZldGNoLFg9VC5uYXZpZ2F0b3ImJlQubmF2aWdhdG9yLnNlbmRCZWFjb247cigpO3ZhciBZPVQuU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWc7WSYmKEJsb2IucHJvdG90eXBlW1ldfHwoQmxvYi5wcm90b3R5cGVbWV09XCJCbG9iXCIpLFwiRmlsZVwiaW4gVCYmIUZpbGUucHJvdG90eXBlW1ldJiYoRmlsZS5wcm90b3R5cGVbWV09XCJGaWxlXCIpKTt0cnl7bmV3IEZpbGUoW10sXCJcIil9Y2F0Y2goYSl7VC5GaWxlPWZ1bmN0aW9uKGIsYyxkKXtiPW5ldyBCbG9iKGIsZCk7ZD1kJiZ2b2lkIDAhPT1kLmxhc3RNb2RpZmllZD9uZXcgRGF0ZShkLmxhc3RNb2RpZmllZCk6bmV3IERhdGU7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYixcbntuYW1lOnt2YWx1ZTpjfSxsYXN0TW9kaWZpZWREYXRlOnt2YWx1ZTpkfSxsYXN0TW9kaWZpZWQ6e3ZhbHVlOitkfSx0b1N0cmluZzp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIn19fSk7WSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsWSx7dmFsdWU6XCJGaWxlXCJ9KTtyZXR1cm4gYn19cigpO3coKTt2YXIgWj1mdW5jdGlvbihhKXt0aGlzLmY9T2JqZWN0LmNyZWF0ZShudWxsKTtpZighYSlyZXR1cm4gdGhpczt2YXIgYj10aGlzO08oYS5lbGVtZW50cyxmdW5jdGlvbihjKXtpZihjLm5hbWUmJiFjLmRpc2FibGVkJiZcInN1Ym1pdFwiIT09Yy50eXBlJiZcImJ1dHRvblwiIT09Yy50eXBlKWlmKFwiZmlsZVwiPT09Yy50eXBlKXt2YXIgZD1jLmZpbGVzJiZjLmZpbGVzLmxlbmd0aD9jLmZpbGVzOltuZXcgRmlsZShbXSxcIlwiLHt0eXBlOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJ9KV07TyhkLGZ1bmN0aW9uKGUpe2IuYXBwZW5kKGMubmFtZSxlKX0pfWVsc2VcInNlbGVjdC1tdWx0aXBsZVwiPT09XG5jLnR5cGV8fFwic2VsZWN0LW9uZVwiPT09Yy50eXBlP08oYy5vcHRpb25zLGZ1bmN0aW9uKGUpeyFlLmRpc2FibGVkJiZlLnNlbGVjdGVkJiZiLmFwcGVuZChjLm5hbWUsZS52YWx1ZSl9KTpcImNoZWNrYm94XCI9PT1jLnR5cGV8fFwicmFkaW9cIj09PWMudHlwZT9jLmNoZWNrZWQmJmIuYXBwZW5kKGMubmFtZSxjLnZhbHVlKTooZD1cInRleHRhcmVhXCI9PT1jLnR5cGU/Yy52YWx1ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcclxcblwiKTpjLnZhbHVlLGIuYXBwZW5kKGMubmFtZSxkKSl9KX07az1aLnByb3RvdHlwZTtrLmFwcGVuZD1mdW5jdGlvbihhLGIsYyl7UShhcmd1bWVudHMsMik7dmFyIGQ9eShQLmFwcGx5KG51bGwsYXJndW1lbnRzKSk7YT1kLm5leHQoKS52YWx1ZTtiPWQubmV4dCgpLnZhbHVlO2M9ZC5uZXh0KCkudmFsdWU7ZD10aGlzLmY7ZFthXXx8KGRbYV09W10pO2RbYV0ucHVzaChbYixjXSl9O2tbXCJkZWxldGVcIl09ZnVuY3Rpb24oYSl7UShhcmd1bWVudHMsXG4xKTtkZWxldGUgdGhpcy5mW1N0cmluZyhhKV19O2suZW50cmllcz1mdW5jdGlvbiBiKCl7dmFyIGM9dGhpcyxkLGUsZixnLGgsdDtyZXR1cm4gTihiLGZ1bmN0aW9uKGwpe3N3aXRjaChsLmIpe2Nhc2UgMTpkPWMuZixmPW5ldyBIKGQpO2Nhc2UgMjp2YXIgbjthOntmb3Iobj1mOzA8bi5sLmxlbmd0aDspe3ZhciBSPW4ubC5wb3AoKTtpZihSIGluIG4uQyl7bj1SO2JyZWFrIGF9fW49bnVsbH1pZihudWxsPT0oZT1uKSl7bC5iPTA7YnJlYWt9Zz15KGRbZV0pO2g9Zy5uZXh0KCk7Y2FzZSA1OmlmKGguZG9uZSl7bC5iPTI7YnJlYWt9dD1oLnZhbHVlO3JldHVybiBHKGwsW2UsUyh0KV0sNik7Y2FzZSA2Omg9Zy5uZXh0KCksbC5iPTV9fSl9O2suZm9yRWFjaD1mdW5jdGlvbihiLGMpe1EoYXJndW1lbnRzLDEpO2Zvcih2YXIgZD15KHRoaXMpLGU9ZC5uZXh0KCk7IWUuZG9uZTtlPWQubmV4dCgpKXt2YXIgZj15KGUudmFsdWUpO2U9Zi5uZXh0KCkudmFsdWU7Zj1mLm5leHQoKS52YWx1ZTtcbmIuY2FsbChjLGYsZSx0aGlzKX19O2suZ2V0PWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3ZhciBjPXRoaXMuZjtiPVN0cmluZyhiKTtyZXR1cm4gY1tiXT9TKGNbYl1bMF0pOm51bGx9O2suZ2V0QWxsPWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3JldHVybih0aGlzLmZbU3RyaW5nKGIpXXx8W10pLm1hcChTKX07ay5oYXM9ZnVuY3Rpb24oYil7UShhcmd1bWVudHMsMSk7cmV0dXJuIFN0cmluZyhiKWluIHRoaXMuZn07ay5rZXlzPWZ1bmN0aW9uIGMoKXt2YXIgZD10aGlzLGUsZixnLGgsdDtyZXR1cm4gTihjLGZ1bmN0aW9uKGwpezE9PWwuYiYmKGU9eShkKSxmPWUubmV4dCgpKTtpZigzIT1sLmIpe2lmKGYuZG9uZSl7bC5iPTA7cmV0dXJufWc9Zi52YWx1ZTtoPXkoZyk7dD1oLm5leHQoKS52YWx1ZTtyZXR1cm4gRyhsLHQsMyl9Zj1lLm5leHQoKTtsLmI9Mn0pfTtrLnNldD1mdW5jdGlvbihjLGQsZSl7UShhcmd1bWVudHMsMik7dmFyIGY9UC5hcHBseShudWxsLGFyZ3VtZW50cyk7XG50aGlzLmZbZlswXV09W1tmWzFdLGZbMl1dXX07ay52YWx1ZXM9ZnVuY3Rpb24gZCgpe3ZhciBlPXRoaXMsZixnLGgsdCxsO3JldHVybiBOKGQsZnVuY3Rpb24obil7MT09bi5iJiYoZj15KGUpLGc9Zi5uZXh0KCkpO2lmKDMhPW4uYil7aWYoZy5kb25lKXtuLmI9MDtyZXR1cm59aD1nLnZhbHVlO3Q9eShoKTt0Lm5leHQoKTtsPXQubmV4dCgpLnZhbHVlO3JldHVybiBHKG4sbCwzKX1nPWYubmV4dCgpO24uYj0yfSl9O1oucHJvdG90eXBlLl9hc05hdGl2ZT1mdW5jdGlvbigpe2Zvcih2YXIgZD1uZXcgVSxlPXkodGhpcyksZj1lLm5leHQoKTshZi5kb25lO2Y9ZS5uZXh0KCkpe3ZhciBnPXkoZi52YWx1ZSk7Zj1nLm5leHQoKS52YWx1ZTtnPWcubmV4dCgpLnZhbHVlO2QuYXBwZW5kKGYsZyl9cmV0dXJuIGR9O1oucHJvdG90eXBlLl9ibG9iPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPVwiLS0tLWZvcm1kYXRhLXBvbHlmaWxsLVwiK01hdGgucmFuZG9tKCksZT1bXSxmPXkodGhpcyksZz1mLm5leHQoKTshZy5kb25lO2c9XG5mLm5leHQoKSl7dmFyIGg9eShnLnZhbHVlKTtnPWgubmV4dCgpLnZhbHVlO2g9aC5uZXh0KCkudmFsdWU7ZS5wdXNoKFwiLS1cIitkK1wiXFxyXFxuXCIpO2ggaW5zdGFuY2VvZiBCbG9iP2UucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIjsgZmlsZW5hbWU9XCInK2gubmFtZSsnXCJcXHJcXG4nLFwiQ29udGVudC1UeXBlOiBcIisoaC50eXBlfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKStcIlxcclxcblxcclxcblwiLGgsXCJcXHJcXG5cIik6ZS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiXFxyXFxuXFxyXFxuJytoK1wiXFxyXFxuXCIpfWUucHVzaChcIi0tXCIrZCtcIi0tXCIpO3JldHVybiBuZXcgQmxvYihlLHt0eXBlOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIrZH0pfTtaLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfTtaLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIn07XG5ZJiYoWi5wcm90b3R5cGVbWV09XCJGb3JtRGF0YVwiKTtpZihWKXt2YXIgYWE9VC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcjtULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKGQsZSl7XCJjb250ZW50LXR5cGVcIj09PWQudG9Mb3dlckNhc2UoKSYmKHRoaXMudT0hMCk7cmV0dXJuIGFhLmNhbGwodGhpcyxkLGUpfTtULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGQpe2QgaW5zdGFuY2VvZiBaPyhkPWQuX2Jsb2IoKSx0aGlzLnV8fHRoaXMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGQudHlwZSksVi5jYWxsKHRoaXMsZCkpOlYuY2FsbCh0aGlzLGQpfX1pZihXKXt2YXIgYmE9VC5mZXRjaDtULmZldGNoPWZ1bmN0aW9uKGQsZSl7ZSYmZS5ib2R5JiZlLmJvZHkgaW5zdGFuY2VvZiBaJiYoZS5ib2R5PWUuYm9keS5fYmxvYigpKTtyZXR1cm4gYmEuY2FsbCh0aGlzLGQsZSl9fVgmJlxuKFQubmF2aWdhdG9yLnNlbmRCZWFjb249ZnVuY3Rpb24oZCxlKXtlIGluc3RhbmNlb2YgWiYmKGU9ZS5fYXNOYXRpdmUoKSk7cmV0dXJuIFguY2FsbCh0aGlzLGQsZSl9KTtULkZvcm1EYXRhPVp9O1xufSkoKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqXG4gKlxuICogQGF1dGhvciBKZXJyeSBCZW5keSA8amVycnlAaWNld2luZ2NjLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICpcbiAqL1xuXG4oZnVuY3Rpb24oc2VsZikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPSAoc2VsZi5VUkxTZWFyY2hQYXJhbXMgJiYgc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCkgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpdGVyYXRvcltzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMU2VhcmNoUGFyYW1zJzogU2VxdWVuY2UgaW5pdGlhbGl6ZXIgbXVzdCBvbmx5IGNvbnRhaW4gcGFpciBlbGVtZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBzZWFyY2hba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihcIj9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWlycyA9IHNlYXJjaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogKFxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLnB1c2godmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgICAgIHJldHVybiAhIXZhbCAmJiAnW29iamVjdCBBcnJheV0nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9lcy9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXMvZXZlbnRzXCI7XG5pbXBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSBmcm9tIFwiLi4vZXMvZm9ybXNcIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL2VzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL2VzL3JlcXVlc3RcIjtcbmltcG9ydCB7U2l0ZX0gZnJvbSBcIi4uL2VzL3NpdGVcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uL2VzL3N0cmluZ3NcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi9lcy90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vZXMvdXNlclwiO1xuaW1wb3J0IHtUb2dnbGVPbk1vYmlsZX0gZnJvbSBcIi4uL2VzL3RvZ2dsZS9Ub2dnbGVPbk1vYmlsZVwiO1xuXG4vL2NyZWF0ZSBhIGtleTp2YWwgb2JqZWN0IG9mIGFsbCBjb21wb25lbnRzXG5jb25zdCBjb21wb25lbnRzID0ge1xuICAgIGRvbTpkb20sXG4gICAgZXZlbnRzOmV2ZW50cyxcbiAgICBYSFJGb3JtOlhIUkZvcm0sXG4gICAgRm9ybUZyb21VUkw6Rm9ybUZyb21VUkwsXG4gICAgbmF2aWdhdGlvbjpuYXZpZ2F0aW9uLFxuICAgIHJlcXVlc3Q6cmVxdWVzdCxcbiAgICBTaXRlOlNpdGUsXG4gICAgc3RyaW5nczpzdHJpbmdzLFxuICAgIHR5cGVfY2hlY2tzOnR5cGVfY2hlY2tzLFxuICAgIFVzZXI6VXNlcixcbiAgICBUb2dnbGVPbk1vYmlsZTpUb2dnbGVPbk1vYmlsZVxufTtcblxuLyoqXG4gKiBDYWxsIHRoaXMgZnVuY3Rpb24gdG8gdGllIGFsbCBqcGFjayBjb21wb25lbnRzIGRpcmVjdGx5IHRvIHRoZSB3aW5kb3cgZm9yIGdsb2JhbCB1c2VcbiAqXG4gKiBUaGlzIG1lYW5zIGluc3RlYWQgb2YgY2FsbGluZyBqcGFjay5zdHJpbmdzLnVjZmlyc3QoKSwgeW91IGNhbiBqdXN0IGNhbGwgc3RyaW5ncy51Y2ZpcnN0KClcbiAqXG4gKiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZCBiZWNhdXNlIGpwYWNrJ3MgbmFtZXMgbWF5IGJlIHRvbyBnZW5lcmljIGFuZCBjb25mbGljdC5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBzZXQgYSBkaWZmZXJlbnQgbmFtZXNwYWNlIHRoYW4ganBhY2ssIHRoYXQncyBmaW5lLCBidXQgbm90IHVzaW5nIGEgbmFtZXNwYWNlIGF0IGFsbCBjYW4gYmUgcmlza3lcbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBzZXRHbG9iYWwoXCIkXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6ICQuc3RyaW5ncy51Y2ZpcnN0KClcbiAqIHNldEdsb2JhbChcIl9cIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogXy5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiUGVhc0FyZUdyb3NzXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6IFBlYXNBcmVHcm9zcy5zdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqL1xuY29uc3Qgc2V0R2xvYmFsID0gZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAvL2ZvciBlYWNoIGZ1bmN0aW9uIHdpdGhpbiBldmVudHNcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2Ygd2luZG93W25hbWVzcGFjZV0gPT09IFwidW5kZWZpbmVkXCIgKXsgd2luZG93W25hbWVzcGFjZV0gPSB7fTsgfVxuICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1ba2V5XSA9IGNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5kb3dba2V5XSA9IGNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vZXh0ZW5kIGNvbXBvbmVudHMgdG8gaW5jbHVkZSB0aGUgc2V0R2xvYmFsIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGpwYWNrID0gey4uLmNvbXBvbmVudHMsIC4uLntzZXRHbG9iYWw6IHNldEdsb2JhbH19O1xuXG4vL3NldCBqcGFjayBnbG9iYWxseSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGFueXdoZXJlXG5nbG9iYWwuanBhY2sgPSBqcGFjazsiXSwic291cmNlUm9vdCI6IiJ9