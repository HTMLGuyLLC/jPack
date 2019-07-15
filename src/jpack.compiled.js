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

        if( !foundEl ) return null;

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
     * @throw_error_if_not_found
     * @returns {boolean}
     */
    isVisible(el, error_if_not_found) {
        el = this.getElement(el, true, true);

        if( !el ){
            if( error_if_not_found ) throw `Could not find "${el}"`;
            return false;
        }

        const style = getComputedStyle(el);

        //check display, visibiliity, and opacity first since they're the most common
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




__webpack_require__(/*! formdata-polyfill */ "formdata-polyfill");

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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
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
                    callback(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), incoming_el, navigation.getPassThroughData());
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
        navigation.navLoaderCached = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement('.page-navigation-loader');

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
        var self = this;

        push_state = typeof push_state === 'undefined' ? true : push_state;

        incoming_el = typeof incoming_el === 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;

        if( typeof url !== 'string' ) throw `Provided url (${url}) is not a string`;
        if( typeof incoming_el !== 'string' ) throw `Provided incoming_el (${incoming_el}) is not a string`;
        if( typeof replace_el !== 'string' ) throw `Provided replace_el (${replace_el}) is not a string`;

        //trigger nav complete event
        //get replace_el again because it was replaced
        navigation.triggerUnload(_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el, this.getRouteFromMeta());

        //very slight 100ms delay to let the on unload handlers run first
        window.setTimeout(function(){
            var parsed = navigation.parseHTML(html, incoming_el);

            //if there is HTML to put on the page
            if( parsed.html.length ) {

                //remove all meta tags and replace from new page
                _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('meta');
                document.head.append(parsed.metas);

                //add the canonical link
                // - possibly other tags will need to be whitelisted in the future.
                // - the main concern is not putting JS/CSS into the current page that shouldn't be
                _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('[rel="canonical"]');
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
                const new_content = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].replaceElWithHTML(replace_el, parsed.html);

                //trigger nav complete event
                navigation.triggerOnLoad(new_content, incoming_el, replace_el, parsed.route);

                //if the replace_el is the same as getReplaceElement(),
                // then it should be updated to whatever the incoming_el is because it no longer exists
                if( self.getReplaceElement() !== replace_el ){
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
    reload: function(callback){
        callback = typeof callback !== 'function' ? null : callback;
        navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), callback);
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
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.complete', callback);
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
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.started', callback);
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
    triggerOnLoad: function(el, el_selector, replaced_selector, route){
        route = typeof route !== 'undefined' ? route : navigation.getRouteFromMeta();
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.complete', {
            el:el,
            el_selector:el_selector,
            replaced_selector: replaced_selector,
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
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.started', {el:el, el_selector:el_selector, route:route});

        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     */
    triggerNavigationFailure: function(error){
        _events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.failed', {error:error});

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
            navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function(e) {
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
__webpack_require__(/*! url-search-params-polyfill */ "url-search-params-polyfill");

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

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = axios;

/***/ }),

/***/ "formdata-polyfill":
/*!************************************!*\
  !*** external "formdata-polyfill" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = formdata-polyfill;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcGFjay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1kYXRhLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQ1I7O0FBRTNCO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVMsd0RBQVc7O0FBRXBCO0FBQ0E7QUFDQSx3REFBd0QsZ0RBQU87QUFDL0QsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZGQUE2RixHQUFHOztBQUVoRzs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLEdBQUc7QUFDeEM7O0FBRUEseUVBQXlFLEdBQUc7O0FBRTVFO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsVUFBVTtBQUMzQjtBQUNBO0FBQ0EsZ0RBQWdELEtBQUs7O0FBRXJEOztBQUVBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQThELEdBQUc7QUFDakU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFEQUFxRDtBQUNyRCwrR0FBK0c7QUFDL0cscURBQXFEO0FBQ3JELGlIQUFpSDs7QUFFakg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7O0FDOU5BO0FBQUE7QUFBQTtBQUEyQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsd0JBQXdCO0FBQzNGO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUc7O0FBRTVCOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBRzs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx3Q0FBd0Msd0JBQXdCOztBQUVoRTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUNoS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUM7QUFDUDtBQUNSO0FBQ0M7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWEsRUFBRTtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTywwQkFBMEIsZ0RBQU87O0FBRXhDO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBOztBQUVBLCtDQUErQyxJQUFJOztBQUVuRDtBQUNBLHFEQUFxRDtBQUNyRCxtREFBbUQsUUFBUTs7QUFFM0Q7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHlFQUF5RSxTQUFTO0FBQ2xGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQThEO0FBQzlEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsc0RBQVU7QUFDbEIsUUFBUSw0Q0FBSztBQUNiLFlBQVksc0RBQVU7O0FBRXRCOztBQUVBO0FBQ0EsZ0JBQWdCLDJEQUEyRCxFQUFFLFVBQVU7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHNEQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFVBQVU7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7O0FBRUEsZ0RBQWdELEtBQUs7QUFDckQsU0FBUztBQUNUO0FBQ0EsZ0JBQWdCLHNEQUFVO0FBQzFCO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWEsd0NBQUc7O0FBRWhCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLHNEQUFzRCxTQUFTO0FBQy9EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDM1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEyQjtBQUNjO0FBQ2Y7O0FBRTFCLG1CQUFPLENBQUMsNENBQW1COztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGNBQWMsRUFBRTtBQUM3RCx3Q0FBd0M7QUFDeEMsaURBQWlELHlCQUF5QjtBQUMxRSxhQUFhLDRDQUE0QztBQUN6RCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQsbURBQW1ELFFBQVE7O0FBRTNEO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esc0RBQXNELFNBQVM7QUFDL0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQSxlQUFlLHdDQUFHO0FBQ2xCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxRUFBcUUsT0FBTztBQUM1RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxJQUFJOztBQUUzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQix3Q0FBRztBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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TztBQUNuQixTQUFTLDZDQUFJO0FBQ2IsWUFBWSxtREFBTztBQUNuQixnQkFBZ0IsMkRBQVc7QUFDM0IsU0FBUyw2Q0FBSTtBQUNiLG1CQUFtQix3RUFBYztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsd0JBQXdCO0FBQ25GO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ08sZUFBZSxtQkFBbUI7O0FBRXpDO0FBQ0EscUI7Ozs7Ozs7Ozs7OztBQzdEQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw0QyIsImZpbGUiOiJqcGFjay5jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZShkYXRhKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9rZXlzID09PSBcInVuZGVmaW5lZFwiICkgdGhyb3cgYENhbm5vdCBwb3B1bGF0ZSBvYmplY3QgaWYgX2tleXMgcHJvcGVydHkgaXMgbm90IHNldGA7XG5cbiAgICAgICAgLy92YWxpZGF0ZSB0aGUgaW5jb21pbmcgZGF0YSBvYmplY3QgYW5kIG1ha2Ugc3VyZSBpdCBvbmx5IGNvbnRhaW5zIHRoZXNlIGtleXNcbiAgICAgICAgIXR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChkYXRhLCB0aGlzLl9rZXlzLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBrZXkgdGhhdCBpcyBzZXQgaW4gdGhlIGRhdGEgb2JqZWN0LCBzZXQgdGhlIHZhbHVlIG9uIHRoaXNcbiAgICAgICAgdGhpcy5fa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIi8qKlxuICogSFRNTCBET00gaGVscGVyc1xuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYSBzaW5nbGUgbmF0aXZlIERPTSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm9uZSBleGlzdFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZSAtIHRocm93IGFuIGVycm9yIGlmIG1vcmUgdGhhbiAxIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIEVsZW1lbnR8SFRNTERvY3VtZW50fG51bGxcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50OiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSwgZXJyb3Jfb25fbXVsdGlwbGUpe1xuICAgICAgICBjb25zdCBmb3VuZEVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGZvdW5kRWwubGVuZ3RoID4gMSAmJiBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IGBNb3JlIHRoYW4gMSByZXN1bHQgZm91bmQgZm9yIFwiJHtlbH1cImA7XG5cbiAgICAgICAgaWYoICFmb3VuZEVsICkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kRWxbMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYW4gYXJyYXkgb2YgbmF0aXZlIERPTSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsIChzdHJpbmcsIG9iamVjdCwgYXJyYXksIGpRdWVyeSBvYmplY3QsIGV0YylcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vIGVsZW1lbnRzIHdlcmUgZm91bmQsIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMgW11cbiAgICAgKi9cbiAgICBnZXRFbGVtZW50czogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUpe1xuICAgICAgICAvL2RlZmF1bHQgdG8gZmFsc2VcbiAgICAgICAgZXJyb3Jfb25fbm9uZSA9IHR5cGVvZiBlcnJvcl9vbl9ub25lID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBlcnJvcl9vbl9ub25lO1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byBlbXB0eVxuICAgICAgICBsZXQgZWxfYXJyYXkgPSBbXTtcblxuICAgICAgICBpZiggdHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbCApe1xuICAgICAgICAgICAgLy9kbyBub3RoaW5nLCBkZWZhdWx0IGlzIGVtcHR5IGFycmF5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vY29udmVydCB0aGUgTm9kZUxpc3QgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBlbF9hcnJheSA/IEFycmF5LmZyb20oZWxfYXJyYXkpIDogZWxfYXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBqUXVlcnkgKXtcbiAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW55dGhpbmdcbiAgICAgICAgICAgIGlmKCBlbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgZWxfYXJyYXkgPSBlbC50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uICl7XG4gICAgICAgICAgICBlbF9hcnJheSA9IEFycmF5LmZyb20oZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBhcnJheSwgdmFsaWRhdGUgZWFjaCBlbGVtZW50XG4gICAgICAgIGVsc2UgaWYoIEFycmF5LmlzQXJyYXkoZWwpICl7XG4gICAgICAgICAgICBlbC5mb3JFYWNoKGZ1bmN0aW9uKHRoaXNfZWwpe1xuICAgICAgICAgICAgICAgIHRoaXNfZWwgPSBkb20uZ2V0RWxlbWVudCh0aGlzX2VsKTtcbiAgICAgICAgICAgICAgICBpZiggdGhpc19lbCApIGVsX2FycmF5LnB1c2godGhpc19lbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL290aGVyd2lzZSwgd2hhdCB0aGUgaGVjayBkaWQgeW91IHBhc3M/IFRocm93IGVycm9yLi4uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgYEludmFsaWQgdmFsdWU6IFwiJHtlbH1cImA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCAmJiBlcnJvcl9vbl9ub25lICkgdGhyb3cgYEZhaWxlZCB0byBmaW5kIFwiJHtlbH1cImA7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBRdWljayBtZXRob2QgZm9yIHJlbW92aW5nIGVsZW1lbnRzIGZyb20gdGhlIERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtkb219XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlbCwgZXJyb3JfaWZfbm90X2ZvdW5kKXtcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gdGhpcy5nZXRFbGVtZW50cyhlbCk7XG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgZG9tIGVsZW1lbnQgd2l0aCBIVE1MXG4gICAgICpcbiAgICAgKiB1c2VzIC5nZXRFbGVtZW50KCkgc28gZWwgY2FuIGJlIGp1c3QgYWJvdXQgYW55dGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtDaGlsZE5vZGV9fG51bGxcbiAgICAgKi9cbiAgICByZXBsYWNlRWxXaXRoSFRNTDogZnVuY3Rpb24oZWwsIGh0bWwsIGVycm9yX2lmX25vdF9mb3VuZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgaHRtbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtodG1sfSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIGNvbnN0IGZvdW5kRWwgPSB0aGlzLmdldEVsZW1lbnQoZWwpO1xuXG4gICAgICAgIGlmKCAhZWwgKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9pZl9ub3RfZm91bmQgKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgXCIke2VsfVwiYDtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgZWxlbWVudCBmcm9tIEhUTUxcbiAgICAgICAgbGV0IG5ld0VsID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIC8vaW5zZXJ0IHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgdGhlIGN1cnJlbnRcbiAgICAgICAgbmV3RWwgPSBmb3VuZEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLmRvY3VtZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2hpbGROb2Rlc1swXSwgZm91bmRFbCk7XG5cbiAgICAgICAgLy9yZW1vdmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICBmb3VuZEVsLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vcmV0dXJuIHRoZSBuZXcgb25lXG4gICAgICAgIHJldHVybiBuZXdFbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbGVtZW50IGlzIHZpc2libGUgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHRocm93X2Vycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzVmlzaWJsZShlbCwgZXJyb3JfaWZfbm90X2ZvdW5kKSB7XG4gICAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50KGVsLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICBpZiggIWVsICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgIC8vY2hlY2sgZGlzcGxheSwgdmlzaWJpbGlpdHksIGFuZCBvcGFjaXR5IGZpcnN0IHNpbmNlIHRoZXkncmUgdGhlIG1vc3QgY29tbW9uXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICd2aXNpYmxlJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUub3BhY2l0eSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vc2VlIGlmIHRoZSBlbGVtZW50IGhhcyBhIHNpemVcbiAgICAgICAgaWYoZWwub2Zmc2V0V2lkdGggKyBlbC5vZmZzZXRIZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBvdXRzaWRlIGNvcm5lcnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGVsX2JvdW5kcyA9IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvcC1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdib3R0b20tbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LmJvdHRvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjZW50ZXInOiB7XG4gICAgICAgICAgICAgICAgeDogZWxSZWN0LmxlZnQgKyBlbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW5zaWRlX3ZpZXdwb3J0ID0gdHJ1ZTtcbiAgICAgICAgLy9tYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydFxuICAgICAgICBPYmplY3Qua2V5cyhlbF9ib3VuZHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IGVsX2JvdW5kc1trZXldO1xuXG4gICAgICAgICAgICBpZiAocG9pbnQueCA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueCA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPCAwKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICBpZiAocG9pbnRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50RWwgPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChwb2ludEVsID0gcG9pbnRFbC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc2lkZV92aWV3cG9ydDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGV4aXN0c1xuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG11bHRpcGxlRXhpc3Q6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aCA+IDE7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFNob3J0aGFuZCBwcmV2ZW50RGVmYXVsdCBldmVudHMgKGFuZCBvdGhlcnMgZm9yIGNvbnNpc3RlbmN5KVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGVzZSBmdW5jdGlvbnMgZ2xvYmFsbHkgc28geW91IGNhbiB1c2UgdGhlbSB3aXRob3V0IGEgbmFtZXNwYWNlIG9yIHdpdGggYSBjdXN0b20gb25lXG4gICAgICpcbiAgICAgKiBVc2UgYXQgeW91ciBvd24gcmlzayAtIG1heSBjYXVzZSBjb25mbGljdHMhXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgICBqcGFjay5ldmVudHMuc2V0R2xvYmFsKCk7XG4gICAgICogICAgIG9uQ2xpY2soJ2EnLCBmdW5jdGlvbigpe1xuICAgICAqICAgICAgICAvL2RvIHNvbWV0aGluZyAodGhlIGhyZWYgaXMgcHJldmVudGVkKVxuICAgICAqICAgICB9KTtcbiAgICAgKi9cbiAgICBzZXRHbG9iYWw6IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2V0IGV2ZXJ5dGhpbmcgdGhhdCdzIGEgcmVhbCBtZXRob2QgaW4gZXZlbnRzLCBleGNlcHQgdGhpcyBvbmVcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gJ3NldEdsb2JhbCcpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW3Byb3BlcnR5XSA9IHNlbGZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gZXZlbnRzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIGFuZCBwcmV2ZW50cyB0aGUgZGVmYXVsdCBldmVudHMgZnJvbSBvY2N1cnJpbmdcbiAgICAgKiAgKGxpa2UgZm9ybXMgc3VibWl0dGluZyBvciBhIGxpbmsgYnJpbmdpbmcgeW91IHRvIGFub3RoZXIgcGFnZSlcbiAgICAgKlxuICAgICAqICBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgaGFuZGxlciBmb3IgZnV0dXJlIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRlZEhhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vTmVlZCB0byB1bmRlcnN0YW5kIHRoaXMgYmV0dGVyLCBidXQgaXQgYXBwZWFycyB3aGVuIHRpZWQgdG8gdGhlIGJvZHkgZWxlbWVudCB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyByZWNlaXZlcyBhbiBhcnJheSBvZiBldmVudHMgd2l0aCBhIHNpbmdsZSBpdGVtIGluIGl0P1xuICAgICAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoZSkgKSBlID0gZVswXTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHByZXZlbnRlZEhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJldmVudGVkSGFuZGxlcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBldmVudF9vcHRpb25zXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oZWwsIGV2ZW50LCBldmVudF9vcHRpb25zKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudF9vcHRpb25zID0gdHlwZW9mIGV2ZW50X29wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogZXZlbnRfb3B0aW9ucztcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBldmVudF9vcHRpb25zIH0pO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxufTsiLCJpbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge1hIUkZvcm19IGZyb20gXCIuL1hIUkZvcm1cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8vZGVmYXVsdHMgZm9yIHRoZSBGb3JtRnJvbVVSTCBjbGFzc1xuY29uc3QgRm9ybUZyb21VUkxEZWZhdWx0cyA9IHtcbiAgICBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjogbnVsbCwgLy90aGUgZm9ybSBlbGVtZW50IG9yIHdyYXBwZXIgdGhhdCB5b3Ugd2FudCB0byByZXRyaWV2ZSBmcm9tIHRoZSBVUkxcbiAgICBpbnNlcnRJbnRvRWxlbWVudDogbnVsbCwgLy93aGF0IGVsZW1lbnQgdG8gcHV0IHRoZSBmb3JtIGludG9cbiAgICBvbmxvYWQ6IGZ1bmN0aW9uKGZvcm0peyByZXR1cm4gdGhpczsgfSwgLy9vbmNlIHRoZSBmb3JtIGlzIGxvYWRlZCBvbnRvIHRoZSBwYWdlXG59O1xuXG4vKipcbiAqXG4gKiBGb3JtRnJvbVVSTFxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBncmFiIGEgZm9ybSBmcm9tIGEgVVJMIGFuZCByZXR1cm5zIGl0IHRvIHRoZSBjdXJyZW50IHBhZ2VcbiAqXG4gKiBBbHNvIGhhbmRsZXMgZm9ybSBzdWJtaXNzaW9uIHVzaW5nIFhIUiBhbmQgY2FuIG9wZW4gYSBtb2RhbCB0byBkaXNwbGF5IHRoZSBmb3JtXG4gKlxuICovXG5leHBvcnQgY2xhc3MgRm9ybUZyb21VUkwgZXh0ZW5kcyBYSFJGb3JtIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB1cmwgLSBzdHJpbmdcbiAgICAgKiBAcGFyYW0gb3B0aW9ucyAtIG9iamVjdHtpbmNvbWluZ0VsZW1lbnRTZWxlY3RvcixpbnNlcnRJbnRvRWxlbWVudCwgb25sb2FkfVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHVybCwgb3B0aW9ucyl7XG4gICAgICAgIHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiICkgdGhyb3cgYCR7dXJsfSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vaWYgb3B0aW9ucyBhcmUgdW5kZWZpbmVkLCBzZXQgdGhlbVxuICAgICAgICBvcHRpb25zID0gdHlwZW9mIG9wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyB7fSA6IG9wdGlvbnM7XG4gICAgICAgIGlmKCB0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiApIHRocm93IGAke29wdGlvbnN9IGlzIG5vdCBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vZXh0ZW5kIGRlZmF1bHRzIHdpdGggcHJvdmlkZWQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gey4uLkZvcm1Gcm9tVVJMRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0VVJMKHVybCk7XG4gICAgICAgIHRoaXMuc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Iob3B0aW9ucy5pbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcik7XG4gICAgICAgIHRoaXMuc2V0SW5zZXJ0SW50b0VsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvRWxlbWVudCk7XG4gICAgICAgIHRoaXMub25sb2FkKG9wdGlvbnMub25sb2FkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBPdmVycmlkZSB0aGUgcGFyZW50IGJlY2F1c2UgaXQncyBub3QgcmVxdWlyZWQgZm9yIHRoaXMgY2xhc3NcbiAgICAgKlxuICAgICAqIFN0aWxsIGtlZXBpbmcgaXQgZnVuY3Rpb25hbCBidXQgcmVtb3ZpbmcgYWxsIHZhbGlkYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgc2V0Rm9ybShmb3JtKXtcbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgVVJMIGZyb20gd2hpY2ggdGhlIGZvcm0gd2lsbCBiZSByZXRyaWV2ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBzZXRVUkwodXJsKXtcbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7dXJsfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSdzIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyBYSFJGb3JtLmdldEZpbmFsU3VibWl0VVJMIHRvIGluY2x1ZGUgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmVxdWVzdGVkIGZyb20gYXMgYW4gYWRkaXRpb25hbCBmYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSl7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIHVybCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm0sIG9ubHkgaWYgZXhwbGljaXRseSBzZXRcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGZvcm0uYXR0cmlidXRlcy5hY3Rpb24gKXtcbiAgICAgICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBzdGlsbCBudWxsLCBncmFiIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgICAgIHVybCA9ICF1cmwgPyB0aGlzLmdldFVSTCgpIDogdXJsO1xuXG4gICAgICAgIC8vaWYgdGhlIHVybCBpcyBTVElMTCBudWxsLCBncmFiIHRoZSBmb3JtJ3MgZGVmYXVsdCBhY3Rpb24gKGN1cnJlbnQgcGFnZSlcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBVUkwgcHJvdmlkZWQgcmV0dXJucyBIVE1MLCB0aGlzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZCB0byBwdWxsIHRoZSBmb3JtIG91dFxuICAgICAqXG4gICAgICogSWYgbGVmdCBudWxsLCBpdCB3aWxsIGFzc3VtZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtJ3MgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yOiBzdHJpbmd8bnVsbFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudFNlbGVjdG9yKHNlbGVjdG9yKXtcbiAgICAgICAgaWYoIHNlbGVjdG9yICE9PSBudWxsICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcn0gaXMgbm90IGEgc3RyaW5nIG9yIG51bGwgdmFsdWVgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2VsZWN0b3IgZm9yIHRoZSBmb3JtIG9yIGEgcGFyZW50IG9mIGl0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoZSBVUkxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBzZXQgYSBwYXJlbnQgZWxlbWVudCB0aGF0IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50byB1c2luZyB0aGUgZGVmYXVsdCBpbnNlcnRGb3JtIG1ldGhvZFxuICAgICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gbGVhdmUgdGhpcyBhbmQgb3ZlcnJpZGUgaW5zZXJ0Rm9ybSgpIGFuZCBoYXZlIG1vcmUgY29udHJvbCBvdmVyIHdoZXJlIGl0IHNob3VsZCBnb1xuICAgICAqXG4gICAgICogVXNlcyBkb20uZ2V0RWxlbWVudCgpIHNvIHlvdSBjYW4gcGFzcyBhIHN0cmluZywgalF1ZXJ5IG9iamVjdCwgb2JqZWN0LCBldGNcbiAgICAgKiBIb3dldmVyIGlmIG1vcmUgdGhhbiAxIGVsZW1lbnQgaXMgZGV0ZWN0ZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHNldEluc2VydEludG9FbGVtZW50KGVsZW1lbnQpe1xuICAgICAgICB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGUgZm9ybSB3aWxsIGJlIGluc2VydGVkIGludG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEluc2VydEludG9FbGVtZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBmcm9tIHRoZSBVUkwgYW5kIHBhc3MgdG8gaW5zZXJ0Rm9ybVxuICAgICAqXG4gICAgICogVGhlcmUgYXJlIHRocmVlIG1haW4gd2F5cyB0byBwcm92aWRlIHRoZSBmb3JtIGZyb20geW91ciBzZXJ2ZXI6XG4gICAgICogMSkgU3RyYWlnaHQgSFRNTC4gVGhlIGVudGlyZSByZXNwb25zZSBpcyB0aGUgZm9ybSBhbmQgdGhhdCdzIGl0LlxuICAgICAqIDIpIFN0cmFpZ2h0IEhUTUwsIGJ1dCB0aGUgZm9ybSBpcyBvbmx5IGEgcGFydCBvZiB0aGUgcmVzcG9uc2Ugc28gaXQgbmVlZHMgdG8gYmUgcGFyc2VkIG91dCBiYXNlZCBvbiBhIHNlbGVjdG9yLlxuICAgICAqIDMpIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5IFwiaHRtbFwiIGxpa2UgdGhpczoge1wiaHRtbFwiOlwiPGZvcm0+eW91ciBmb3JtIGhlcmU8L2Zvcm0+XCJ9XG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICBheGlvcy5nZXQodGhpcy5nZXRVUkwoKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIC8vanVzdCBpbiBjYXNlIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgdGhlIHdyb25nIHJlc3BvbnNlIHR5cGUgYW5kIGl0J3MgYWN0dWFsbHkgSlNPTiAtIGlnbm9yZSBlcnJvcnNcbiAgICAgICAgICAgIHRyeXsgZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhOyB9IGNhdGNoKGUpeyB9XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGEgc3RyaW5nIChwcm9iYWJseSBIVE1MKVxuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vcHJvdmlkZSB0aGUgZm9ybSdzIEhUTUwgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb3RoZXIgZGV0YWlscyBsaWtlIHRoZSByb3V0ZSBhbmQgdGhlIGZ1bGwgcmVzcG9uc2UgdG8gaW5zZXJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHBhcnNlZCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vb3RoZXJ3aXNlIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgYXNzdW1lZCB0byBiZSB0aGUgZm9ybVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YX0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYW4gb2JqZWN0IChwcm9iYWJseSBKU09OKVxuICAgICAgICAgICAgZWxzZSBpZiggdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICl7XG4gICAgICAgICAgICAgICAgLy9pZiBIVE1MIHdhcyBwcm92aWRlZCBpbiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhLmh0bWwgIT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhLmh0bWx9LCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAke2RhdGF9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gaW5zZXJ0IHRoZSBmb3JtIHdoZXJldmVyIHlvdSB3YW50IG9uIHRoZSBwYWdlXG4gICAgICogIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGUgZm9ybSBpcyBpbnNlcnRlZFxuICAgICAqICAobWF5YmUgeW91IHdhbnQgdG8gb3BlbiBhIG1vZGFsIGZpcnN0IGFuZCBwbGFjZSBpdCB0aGVyZT8pXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQuaHRtbCB3aWxsIGFsd2F5cyBiZSB0aGUgSFRNTFxuICAgICAqXG4gICAgICogIHBhcnNlZF9jb250ZW50IG1heSBjb250YWluIG90aGVyIGRhdGEgbGlrZSByb3V0ZSBhbmQgdGl0bGUgaWYgdGhlIGZvcm0gd2FzIHB1bGxlZCBvdXQgb2ZcbiAgICAgKiAgICAgYSBmdWxsIEhUTUwgcGFnZSB3aGljaCBjb250YWlucyB0aG9zZSBpdGVtc1xuICAgICAqXG4gICAgICogIHJlc3BvbnNlIGlzIHRoZSBmdWxsIHNlcnZlciByZXNwb25zZSAoaHRtbCBzdHJpbmcgb3Igb2JqZWN0IGZyb20gSlNPTiAtIG5vdCBwcm92aWRlZCBpZiB0aGUgcmVzcG9uc2UgaXMgb25seSB0aGUgZm9ybSdzIEhUTUwpXG4gICAgICpcbiAgICAgKiAgZm9ybSBpcyBwcm92aWRlZCBpZiB0aGlzIGlzIGFmdGVyIHRoZSBmb3JtIHdhcyBzdWJtaXR0ZWQgYW5kIEhUTUwgd2FzIHJldHVybmVkIGZvcm0gdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogIEBwYXJhbSBwYXJzZWRfY29udGVudFxuICAgICAqICBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiAgQHBhcmFtIGZvcm1cbiAgICAgKiAgQHJldHVybnMgeyp8RWxlbWVudHxIVE1MRG9jdW1lbnR9XG4gICAgICovXG4gICAgaW5zZXJ0Rm9ybShwYXJzZWRfY29udGVudCwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICAvL3NlbGVjdG9yIGZvciB3aGVyZSB0aGUgZm9ybSB3aWxsIGdvXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKTtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggZWwgPT09IG51bGwgKSB0aHJvdyAnQ2Fubm90IGRldGVybWluZSB3aGVyZSB0byBpbnNlcnQgZm9ybS4gT3ZlcndyaXRlIGluc2VydEZvcm0oKSBvciBwcm92aWRlIGluc2VydEludG9FbGVtZW50JztcblxuICAgICAgICAvL2dldCB0aGUgY29udGFpbmVyIGVsZW1lbnQgLSBlcnJvciBpZiBub3QgZm91bmRcbiAgICAgICAgZWwgPSBkb20uZ2V0RWxlbWVudChlbCwgdHJ1ZSk7XG5cbiAgICAgICAgLy9wdXQgdGhlIGZvcm0gaW4gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHBhcnNlZF9jb250ZW50Lmh0bWw7XG5cbiAgICAgICAgLy9maW5kIHRoZSBuZXdseSBhZGRlZCBmb3JtXG4gICAgICAgIGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAgLy9hdHRhY2ggYW4gb24tc3VibWl0IGxpc3RlbmVyIHRvIHNlbmQgdGhlIGZvcm0ncyB2YWx1ZXMgdmlhIFhIUlxuICAgICAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSk7XG5cbiAgICAgICAgLy9ydW4gdGhlIG9ubG9hZCBjYWxsYmFjayBub3cgdGhhdCB0aGUgZm9ybSBpcyB0aGVyZVxuICAgICAgICB0aGlzLnRyaWdnZXJPbmxvYWQoZm9ybSk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGZvcm0gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQncyBkaXNwbGF5ZWRcbiAgICAgKlxuICAgICAqIFlvdSdsbCBsaWtlbHkgd2FudCB0byBhdHRhY2ggcGx1Z2lucyBmb3IgZGF0ZXBpY2tlcnMvZHJvcGRvd25zLCBvciBtYXliZSBoaWRlIGEgZmllbGQgYmFzZWQgb24gdGhlIHZhbHVlIG9mIGFub3RoZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9ubG9hZChjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29ubG9hZCA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29ubG9hZCA9IFtdO1xuICAgICAgICB0aGlzLl9vbmxvYWQucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgb25sb2FkIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUZyb21VUkx9XG4gICAgICovXG4gICAgY2xlYXJPbmxvYWRDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICovXG4gICAgdHJpZ2dlck9ubG9hZChmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29ubG9hZCA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9vbmxvYWQuZm9yRWFjaChmdW5jdGlvbihvbmxvYWQpe1xuICAgICAgICAgICAgb25sb2FkKGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbnJlcXVpcmUoJ2Zvcm1kYXRhLXBvbHlmaWxsJyk7XG5cbi8vZGVmYXVsdHMgZm9yIHRoZSBYSFJGb3JtIGNsYXNzXG5jb25zdCBYSFJGb3JtRGVmYXVsdHMgPSB7XG4gICAgeGhyU3VibWl0OiB0cnVlLCAvL3N1Ym1pdCB0aGUgZm9ybSB1c2luZyBYSFIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBhY3Rpb25cbiAgICBzdWJtaXRVUkw6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgc3VibWl0TWV0aG9kOm51bGwsIC8vd2lsbCBiZSBncmFiYmVkIGZyb20gdGhlIGZvcm0ncyBtZXRob2QgYXR0cmlidXRlLCBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSwgZm9ybSl7IGFsZXJ0KGVycm9yKTsgfSwgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgYW5kIGZhaWxzXG4gICAgb25TdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSwgZm9ybSl7IC8vY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAgICBpZih0eXBlb2YgcmVzcG9uc2Uuc3VjY2VzcyA9PT0gXCJzdHJpbmdcIil7IGFsZXJ0KHJlc3BvbnNlLnN1Y2Nlc3MpOyB9XG4gICAgICAgIGVsc2V7IGFsZXJ0KFwiWW91ciBzdWJtaXNzaW9uIGhhcyBiZWVuIHJlY2VpdmVkXCIpOyB9XG4gICAgfSxcbiAgICAvL3ZhbGlkYXRlIHRoZSBmb3JtLCBkaXNwbGF5IGFueSBlcnJvcnMgYW5kIHJldHVybiBmYWxzZSB0byBibG9jayBzdWJtaXNzaW9uXG4gICAgdmFsaWRhdGVGb3JtOiBmdW5jdGlvbihmb3JtKXtcbiAgICAgICAgLy9hZGQgLndhcy12YWxpZGF0ZWQgZm9yIGJvb3RzdHJhcCB0byBzaG93IGVycm9yc1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ3dhcy12YWxpZGF0ZWQnKTtcblxuICAgICAgICAvL2lmIHRoZXJlIGFyZSBhbnkgOmludmFsaWQgZWxlbWVudHMsIHRoZSBmb3JtIGlzIG5vdCB2YWxpZFxuICAgICAgICBjb25zdCBpc192YWxpZCA9ICFmb3JtLnF1ZXJ5U2VsZWN0b3IoJzppbnZhbGlkJyk7XG5cbiAgICAgICAgLy9pZiBpdCdzIHZhbGlkLCBjbGVhciB0aGUgdmFsaWRhdGlvbiBpbmRpY2F0b3JzXG4gICAgICAgIGlmKCBpc192YWxpZCApIGZvcm0uY2xhc3NMaXN0LnJlbW92ZSgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIHJldHVybiBpc192YWxpZDtcbiAgICB9XG59O1xuXG4vKipcbiAqIFhIUkZvcm1cbiAqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gc3VibWl0IGEgZm9ybSB2aWEgWEhSIGFuZCBlYXNpbHkgaGFuZGxlIHRoZSByZXN1bHRzXG4gKi9cbmV4cG9ydCBjbGFzcyBYSFJGb3JtIHtcblxuICAgIC8qKlxuICAgICAqIEZvcm0gY2FuIGJlIGp1c3QgYWJvdXQgYW55IGRhdGF0eXBlIC0gdXNlcyBkb20uZ2V0RWxlbWVudCgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEBwYXJhbSBvcHRpb25zXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZm9ybSwgb3B0aW9ucyl7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiICkgdGhyb3cgYCR7b3B0aW9uc30gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uWEhSRm9ybURlZmF1bHRzLCAuLi5vcHRpb25zfTtcblxuICAgICAgICB0aGlzLnNldEZvcm0oZm9ybSk7XG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGVDYWxsYmFjayhvcHRpb25zLnZhbGlkYXRlRm9ybSk7XG4gICAgICAgIHRoaXMuc2V0WEhSU3VibWl0KG9wdGlvbnMueGhyU3VibWl0KTtcbiAgICAgICAgdGhpcy5zZXRTdWJtaXRNZXRob2Qob3B0aW9ucy5zdWJtaXRNZXRob2QpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdFVSTChvcHRpb25zLnN1Ym1pdFVSTCk7XG4gICAgICAgIHRoaXMub25TdWNjZXNzKG9wdGlvbnMub25TdWNjZXNzKTtcbiAgICAgICAgdGhpcy5vbkVycm9yKG9wdGlvbnMub25FcnJvcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRWYWxpZGF0ZUNhbGxiYWNrKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IGlzIG5vdCBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSB2YWxpZGF0ZSBjYWxsYmFjayBhbmQgcGFzc2VzIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZShmb3JtKXtcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVDYWxsYmFjayhmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGZvcm0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICBpZiggIWZvcm0gfHwgdHlwZW9mIGZvcm0gPT09ICd1bmRlZmluZWQnICkgdGhyb3cgYEZvcm0gZWxlbWVudCBpcyByZXF1aXJlZGA7XG5cbiAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0sIHRydWUsIHRydWUpO1xuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgSW52YWxpZCBmb3JtIGVsZW1lbnQgcmVjZWl2ZWRgO1xuXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHlvdSB3YW50IHRoZSBmb3JtIHRvIGJlIHN1Ym1pdHRlZCB1c2luZyBhbiBYSFIgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVuYWJsZWQgLSBib29sXG4gICAgICovXG4gICAgc2V0WEhSU3VibWl0KGVuYWJsZWQpe1xuICAgICAgICB0aGlzLl94aHJTdWJtaXQgPSAhIWVuYWJsZWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvdyB0byBzdWJtaXQgdGhlIGZvcm0gLSBpZiBzZXQgdG8gbnVsbCwgdGhlIG1ldGhvZCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBmb3JtJ3NcbiAgICAgKiAgbWV0aG9kIGF0dHJpYnV0ZSBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdE1ldGhvZChtZXRob2Qpe1xuICAgICAgICBpZiggdHlwZW9mIG1ldGhvZCAhPT0gXCJzdHJpbmdcIiAmJiBtZXRob2QgIT09IG51bGwgKSB0aHJvdyBgJHttZXRob2R9IGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fc3VibWl0TWV0aG9kID0gbWV0aG9kO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBmb3JtIHN1Ym1pc3Npb24gbWV0aG9kIChQT1NULCBHRVQsIGV0YylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRNZXRob2QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdE1ldGhvZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIHRvIHN1Ym1pdCB0aGUgZm9ybSB0b1xuICAgICAqXG4gICAgICogSWYgbnVsbCwgdGhlIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBVc2UgYSBmdW5jdGlvbiBpZiB5b3Ugd2FudCB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGUgVVJMIGp1c3QgcHJpb3IgdG8gdGhlIHJlcXVlc3RcbiAgICAgKiAgLSB0aGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRoZSBmb3JtIGFzIGEgcGFyYW1cbiAgICAgKiBHZW5lcmFsbHkgc3BlYWtpbmcgYSBzdHJpbmcgaXMgc3VmZmljaWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgJiYgdHlwZW9mIHVybCAhPT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAmJiB1cmwgIT09IG51bGwgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZywgZnVuY3Rpb24sIG9yIG51bGxgO1xuXG4gICAgICAgIHRoaXMuX3N1Ym1pdFVSTCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgVVJMIHRoZSBmb3JtIHdpbGwgYmUgc3VibWl0dGVkIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRVUkwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhY3R1YWwgc3VibWl0IFVSTCBhZnRlciBydW5uaW5nIHRoZSBmdW5jdGlvbiAoaWYgaXQgaXMgb25lKSwgYW5kIHR1cm5pbmcgdG8gZmFsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmV0dXJuIGZvcm0uYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgb24gc3VibWl0IGhhbmRsZXIgKG9ubHkgaWYgeGhyU3VibWl0IGlzIHRydWUpXG4gICAgICpcbiAgICAgKiBQYXNzIHRoZSBmb3JtIG9yIGZvcm0gc2VsZWN0b3JcbiAgICAgKi9cbiAgICBhdHRhY2hTdWJtaXRIYW5kbGVyKGZvcm0pe1xuICAgICAgICBpZiggIXRoaXMuX3hoclN1Ym1pdCApIHJldHVybjtcblxuICAgICAgICAvL2lmIG5vdCBwYXNzZWQsIGdldCBpdCBmcm9tIHRoaXMgb2JqZWN0XG4gICAgICAgIGlmKCB0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICAgICAgICAgIGZvcm0gPSB0aGlzLmdldEZvcm0oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFmb3JtICkgdGhyb3cgYEZvcm0gZWxlbWVudCBub3QgcmVjZWl2ZWQsIGNhbm5vdCBhdHRhY2ggc3VibWl0IGhhbmRsZXJgO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAvL2lmIHhociBzdWJtaXQgaXMgZGlzYWJsZWQsIGRvbid0IGJsb2NrIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgICAgaWYoICFzZWxmLl94aHJTdWJtaXQgKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGYuc3VibWl0Rm9ybShmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAqXG4gICAgICogWW91ciBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgMiBwYXJhbXMsIHRoZSBmaXJzdCBpcyB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBmb3JtIG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9uU3VjY2VzcyBjYWxsYmFja3MgeW91J3ZlIHNldFxuICAgICAqL1xuICAgIGNsZWFyT25TdWNjZXNzQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzLmZvckVhY2goZnVuY3Rpb24ob25TdWNjZXNzKXtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUZyb21VUkx9XG4gICAgICovXG4gICAgb25FcnJvcihjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25FcnJvciA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgdGhpcy5fb25FcnJvci5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbkVycm9yIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgY2xlYXJPbkVycm9yQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIG9uRXJyb3IgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHRyaWdnZXJPbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vbkVycm9yLmZvckVhY2goZnVuY3Rpb24ob25FcnJvcil7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXRzIHRoZSBmb3JtIHVzaW5nIFhIUlxuICAgICAqXG4gICAgICogMSkgRGV0ZXJtaW5lcyB0aGUgVVJMXG4gICAgICogMikgRGV0ZXJtaW5lcyB0aGUgbWV0aG9kIChHRVQsIFBPU1QsIFBBVENILCBldGMpXG4gICAgICogMykgRGV0ZXJtaW5lcyBpZiB0aGUgZm9ybSBpcyB2YWxpZFxuICAgICAqIDQpIEdldHMgdGhlIGZvcm0ncyB2YWx1ZXNcbiAgICAgKiA1KSBTdWJtaXRzIHRoZSBmb3JtXG4gICAgICogNikgUmVwbGFjZXMgdGhlIGZvcm0sIHJ1bnMgb25FcnJvciwgb3IgcnVucyBvblN1Y2Nlc3MgYmFzZWQgb24gdGhlIHJlc3BvbnNlIChzZWUgbmV4dCBsaW5lKVxuICAgICAqICBSZXNwb25zZSBUeXBlID0gQWN0aW9uIFRha2VuXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBmb3JtIGluc2lkZSA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIHN0cmluZyBodG1sIHdpdGggaW5jb21pbmdFbGVtZW50U2VsZWN0b3Igc2V0LCBidXQgbm90IGZvdW5kID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgc3RyaW5nIC0gcmVwbGFjZSBmb3JtIG9uIHBhZ2Ugd2l0aCBlbnRpcmUgcmVzcG9uc2VcbiAgICAgKiAgICBvYmplY3QuaHRtbCA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIG9iamVjdC5lcnJvciA9IGtpY2tvZmYgb25FcnJvclxuICAgICAqICAgIG9iamVjdCBpbiBnZW5lcmFsID0ga2lja29mZiBvblN1Y2Nlc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge2Zvcm18Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgLy9ibG9jayBtdWx0aXBsZSBmb3JtIHN1Ym1pc3Npb25zIGF0IHRoZSBzYW1lIHRpbWUgdW50aWwgdGhpcyBvbmUgaXMgY29tcGxldGVcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9wcm9jZXNzaW5nID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICBpZiggdGhpcy5fcHJvY2Vzc2luZyApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAvL2NhY2hlIGZvciB1c2UgaW5zaWRlIG90aGVyIHNjb3Blc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IFVSTFxuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRGaW5hbFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IG1ldGhvZFxuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5nZXRTdWJtaXRNZXRob2QoKTtcbiAgICAgICAgLy9pZiBpdCdzIG51bGwsIGdyYWIgaXQgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggbWV0aG9kID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGZvcm0uYXR0cmlidXRlcy5tZXRob2QgIT09ICd1bmRlZmluZWQnICl7IC8vY2hlY2sgdGhhdCBpdCB3YXMgc2V0IGV4cGxpY2l0bHlcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmb3JtLm1ldGhvZDsgLy9ncmFiIEpVU1QgdGhlIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9kZWZhdWx0IHRvIHBvc3QgaWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIG1ldGhvZCBhbmQgbG93ZXJjYXNlIGFueXRoaW5nIHRoYXQgd2FzIHByb3ZpZGVkXG4gICAgICAgIG1ldGhvZCA9ICFtZXRob2QgPyAncG9zdCcgOiBtZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvL2lmIG5vdCB2YWxpZCwgc3RvcCBoZXJlIHVudGlsIHRoZXkgcmVzdWJtaXRcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKGZvcm0pKXtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIC8vZ2V0IGZvcm0gdmFsdWVzXG4gICAgICAgIGNvbnN0IGZvcm1fdmFsdWVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybVZhbHVlcyhmb3JtKSxcbiAgICAgICAgICAgIGUgPT4gZS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9JylcbiAgICAgICAgKS5qb2luKCcmJyk7XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1fdmFsdWVzLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcsIGl0J3MgcHJvYmFibHkvaG9wZWZ1bGx5IHRoZSBmb3JtIHdpdGggaW5saW5lIGVycm9yc1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIC8vaWYgd2UgYXJlIGxvb2tpbmcgZm9yIGFuIGVsZW1lbnQgd2l0aGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIGZvcm0gd2FzIG5vdCBmb3VuZCBpbiBpdCwgbGV0J3MgYXNzdW1lIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZm9ybS4gSWYgbm90LCB0aGVuIG1heWJlXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhcGFyc2VkLmh0bWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihgJHtzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJgLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9LCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBKU09OXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIHRoZSBIVE1MLCBqdXN0IHBvcCBpdCBiYWNrIG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgaWYoIGRhdGEuaHRtbCApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW4gZXJyb3IgbWVzc2FnZSwgdHJpZ2dlciB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5lcnJvciApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihkYXRhLmVycm9yLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmIGl0IGRvZXNuJ3QgQVBQRUFSIHRvIGJlIHRoZSBmb3JtIGFnYWluLCBvciBhbiBlcnJvciwgbGV0J3MgY2FsbCBpdCBhIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25TdWNjZXNzKGRhdGEsIGZvcm0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgc2VsZi5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGZvcm0gdmFsdWVzIHRvIGJlIHN1Ym1pdHRlZFxuICAgICAqXG4gICAgICogT3ZlcnJpZGUvZXh0ZW5kIHRoaXMgaWYgeW91IHdhbnQgdG8gbWFuaXB1bGF0ZSB0aGUgZGF0YSBwcmlvciB0byBzdWJtaXNzaW9uXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBGb3JtRGF0YVxuICAgICAqL1xuICAgIGdldEZvcm1WYWx1ZXMoZm9ybSl7XG4gICAgICAgIHJldHVybiBuZXcgRm9ybURhdGEoZm9ybSk7XG4gICAgfVxufSIsImltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IHtGb3JtRnJvbVVSTH0gZnJvbSBcIi4vRm9ybUZyb21VUkxcIjtcblxuZXhwb3J0IHtYSFJGb3JtLCBGb3JtRnJvbVVSTH0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL3JlcXVlc3RcIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBzaW11bGF0ZSBhIHBhZ2UgY2hhbmdlIGJ5IHVzaW5nIGFuIFhIUiByZXF1ZXN0IHRvIGdyYWIgY29udGVudCBhbmQgcmVwbGFjZSBpdCBvbiB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBicm93c2VyJ3MgaGlzdG9yeSwgc3dhcHMgb3V0IG1ldGEgdGFncywgdXBkYXRlcyB0aGUgdGl0bGUsIGFuZCBtb3JlXG4gKlxuICogVXNlIG9uTG9hZCBhbmQgb25VbmxvYWQgaG9va3MgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZm9yIHRoaW5ncyBsaWtlIHRyaWdnZXJpbmcgYSBnb29nbGUgYW5hbHl0aWNzIHBhZ2Ugdmlld1xuICogIG9yIHNjcm9sbGluZyB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBvbmxvYWQgY2FsbGJhY2sgYWZ0ZXIgbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqL1xuICAgIF9wYXNzdGhyb3VnaERhdGE6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZVxuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbkxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRQYXNzdGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpXG4gICAge1xuICAgICAgICB0aGlzLl9wYXNzdGhyb3VnaERhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGRhdGEgcHJvdmlkZWQgZm9yIHRoZSBuZXh0IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyUGFzc3Rocm91Z2hEYXRhOiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB0aGlzLnNldFBhc3N0aHJvdWdoRGF0YShudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW55IGRhdGEgdGhhdCBoYXMgYmVlbiBzZXQgZm9yIHBhc3NpbmcgdG8gc3Vic2VxdWVudCBwYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXNzVGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3Rocm91Z2hEYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKi9cbiAgICBfaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbihzZWxlY3Rvcl9zdHJpbmcpe1xuICAgICAgICBpZiggdHlwZW9mIHNlbGVjdG9yX3N0cmluZyAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKi9cbiAgICBfcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRSZXBsYWNlRWxlbWVudDogZnVuY3Rpb24oc2VsZWN0b3Jfc3RyaW5nKXtcbiAgICAgICAgaWYoIHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RvcnMgc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHcmFicyBIVE1MIGZyb20gYSBVUkwgYW5kIHJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogMSkgU2hvd3MgYSBsb2FkZXIgKGlmIGVuYWJsZWQpXG4gICAgICogMikgUmVxdWVzdHMgY29udGVudCBmcm9tIHRoZSBwcm92aWRlZCBVUkxcbiAgICAgKiAzKSBSZXBsYWNlcyBpdCBvbiB0aGUgcGFnZSAoYW5kIGFsbCB0aGUgbWFnaWMgcmVwbGFjZVBhZ2VDb250ZW50IGRvZXMsIHNlZSBjb21tZW50cyBvbiB0aGF0IG1ldGhvZCBiZWxvdylcbiAgICAgKiA0KSBJZiB0aGVyZSdzIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGl0J2xsIGJlIHJ1biBhZnRlcndhcmRzIChpdCByZWNlaXZlcyB0aGUgbmV3bHkgcmVwbGFjZWQgZWxlbWVudCBhcyBhIHBhcmFtKVxuICAgICAqXG4gICAgICogT24gZXJyb3IsIGl0IHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBmYWlsdXJlIGFuZCBwcm92aWRlcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbih1cmwsIGNhbGxiYWNrLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCBVUkwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiggdHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIHJlcGxhY2VfZWwgKCR7cmVwbGFjZV9lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnJlcGxhY2VQYWdlQ29udGVudChyZXNwb25zZS5kYXRhLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKTtcblxuICAgICAgICAgICAgLy9pZiBhIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgcnVuIGl0IGFuZCBwcm92aWRlIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vd2FpdCBmb3IgdGhlIG9udW5sb2FkIGNhbGxiYWNrcyB0byBydW4gYW5kIHRoZSBuZXcgY29udGVudCB0byBiZSBwdXQgb24gdGhlIHBhZ2UgZmlyc3RcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgaW5jb21pbmdfZWwsIG5hdmlnYXRpb24uZ2V0UGFzc1Rocm91Z2hEYXRhKCkpO1xuICAgICAgICAgICAgICAgIH0sIDEwNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmUoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbG9hZGVyIGF0IHRoZSB0b3AgaXMgZW5hYmxlZCB0byBkaXNwbGF5IG9uIHNsb3cgcmVxdWVzdHNcbiAgICAgKi9cbiAgICBsb2FkZXJFbmFibGVkOiB0cnVlLFxuXG4gICAgLy9ob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgIF9sb2FkZXJEZWxheTogMzAwLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogU2V0IHRvIDAgaWYgeW91IHdhbnQgaXQgdG8gYWx3YXlzIHNob3dcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxheV9pbl9tc1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldExvYWRlckRlbGF5OiBmdW5jdGlvbihkZWxheV9pbl9tcyl7XG4gICAgICAgIGlmKCB0eXBlb2YgZGVsYXlfaW5fbXMgIT09IFwibnVtYmVyXCIgKSB0aHJvdyBgJHtkZWxheV9pbl9tc30gaXMgbm90IGFuIGludGVnZXJgO1xuICAgICAgICB0aGlzLl9sb2FkZXJEZWxheSA9IGRlbGF5X2luX21zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBnZXRMb2FkZXJEZWxheTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlckRlbGF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGFzc2VzIGZvciB0aGUgbG9hZGVyXG4gICAgICogRGVmYXVsdHMgYXJlIGZvciBib290c3RyYXAgKHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBwYWdlLW5hdmlnYXRpb24tbG9hZGVyKVxuICAgICAqL1xuICAgIF9sb2FkZXJDbGFzc2VzOiAncHJvZ3Jlc3MgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcicsXG4gICAgX2xvYWRlcklubmVyRGl2Q2xhc3NlczogJ3Byb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWQnLFxuXG4gICAgLyoqXG4gICAgICogSWYgZW5hYmxlZCwgYWRkcyBhIGxvYWRlciB0byB0aGUgcGFnZSBhbmQgY2FjaGVzIGEgcmVmZXJlbmNlIHRvIGl0LCB0aGVuIHJldHVybnMgdGhhdCByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEVsZW1lbnRcbiAgICAgKi9cbiAgICBnZXRMb2FkZXJFbDogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG4gICAgICAgIGlmKCBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZCApIHJldHVybiBuYXZpZ2F0aW9uLm5hdkxvYWRlckNhY2hlZDtcblxuICAgICAgICAvL3ByZXBlbmQgdGhlIGxvYWRlciBlbGVtZW50c1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSB0aGlzLl9sb2FkZXJDbGFzc2VzO1xuICAgICAgICBsZXQgaW5uZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyX2Rpdi5jbGFzc0xpc3QgPSB0aGlzLl9sb2FkZXJJbm5lckRpdkNsYXNzZXM7XG4gICAgICAgIGRpdi5hcHBlbmQoaW5uZXJfZGl2KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdik7XG5cbiAgICAgICAgLy9nZXQgYW5kIGNhY2hlIGEgcmVmZXJlbmNlIHRvIGl0IGZvciBmdXR1cmUgcmVxdWVzdHNcbiAgICAgICAgbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQgPSBkb20uZ2V0RWxlbWVudCgnLnBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInKTtcblxuICAgICAgICByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgaWYgdGhlIHJlcXVlc3QgdGFrZXMgbW9yZSB0aGFuIHRoZSBkZWxheSBzZXQgYWJvdmUgdG8gY29tcGxldGVcbiAgICAgKi9cbiAgICBzaG93TG9hZGVyOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiggIXRoaXMubG9hZGVyRW5hYmxlZCApIHJldHVybjtcblxuICAgICAgICBuYXZpZ2F0aW9uLmxvYWRlcl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgdGhpcy5nZXRMb2FkZXJEZWxheSgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gICAgICovXG4gICAgaGlkZUxvYWRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG5cbiAgICAgICAgLy9pZiB0aGUgbG9hZGVyIHN0aWxsIGhhc24ndCBzaG93biB5ZXQsIHByZXZlbnQgaXQgYmVjYXVzZSB0aGUgcmVxdWVzdCB3YXMgdmVyeSBmYXN0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQobmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCk7XG5cbiAgICAgICAgLy9oaWRlIHRoZSBsb2FkZXJcbiAgICAgICAgbmF2aWdhdGlvbi5nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50cyBsaWtlIG1ldGEgdGFncyBhbmQgdGhlIGlubmVyIGNvbnRlbnQgb2YgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBJZiBubyBwYXJlbnQgZWxlbWVudCBpcyBwcm92aWRlZCwgaXQgd2lsbCBqdXN0IHJldHVybiB0aGUgcHJvdmlkZWQgaHRtbFxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gcGFyZW50X2VsXG4gICAgICogQHJldHVybnMge3ttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIHJvdXRlOiAoKnxhbnl8RWxlbWVudCksIGxpbmtzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtzdHJpbmddPiwgaHRtbDogc3RyaW5nLCB0aXRsZTogc3RyaW5nLCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICovXG4gICAgcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbClcbiAgICB7XG4gICAgICAgIC8vZGVmYXVsdCB0byBudWxsIGlmIG5vdCBwcm92aWRlZFxuICAgICAgICBwYXJlbnRfZWwgPSB0eXBlb2YgcGFyZW50X2VsID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBwYXJlbnRfZWw7XG5cbiAgICAgICAgLy9tdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxcbiAgICAgICAgaWYoIHR5cGVvZiBwYXJlbnRfZWwgIT09ICdzdHJpbmcnICYmIHBhcmVudF9lbCAhPT0gbnVsbCApIHRocm93IGBQcm92aWRlZCBwYXJlbnRfZWwgKCR7cGFyZW50X2VsfSkgaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuXG4gICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIGRvbVxuICAgICAgICB2YXIgcGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgICAgICB2YXIgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2dldCBwYWdlIHRpdGxlXG4gICAgICAgIHZhciB0aXRsZSA9IGRvYy5xdWVyeVNlbGVjdG9yKCd0aXRsZScpO1xuICAgICAgICB0aXRsZSA9IHRpdGxlID8gdGl0bGUuaW5uZXJUZXh0IDogbnVsbDtcblxuICAgICAgICAvL2dldCBhbnkgbWV0YSB0YWdzXG4gICAgICAgIHZhciBtZXRhcyA9IGRvYy5oZWFkLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdtZXRhJyk7XG4gICAgICAgIC8vZ2V0IHRoZSBjYW5vbmljYWwgbGlua1xuICAgICAgICB2YXIgbGlua3MgPSBkb2MucXVlcnlTZWxlY3RvckFsbCgnbGlua1tyZWw9XCJjYW5vbmljYWxcIl0nKTtcbiAgICAgICAgLy9nZXQgYm9keSBjbGFzc2VzXG4gICAgICAgIHZhciBib2R5X2NsYXNzZXMgPSBkb2MuYm9keS5jbGFzc0xpc3Q7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgIHZhciBuZXdfaHRtbCA9IGh0bWw7XG5cbiAgICAgICAgLy9pZiBhIHBhcmVudCBlbGVtZW50IHdhcyBwcm92aWRlZCwgZmluZCBpdFxuICAgICAgICBpZiggcGFyZW50X2VsICl7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50X2VsKTtcbiAgICAgICAgICAgIC8vaWYgY291bGRuJ3QgZmluZCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgaWYoICFzZWwgKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGFyZW50IHNlbGVjdG9yICR7cGFyZW50X2VsfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2dyYWIgdGhlIG91dGVySFRNTFxuICAgICAgICAgICAgbmV3X2h0bWwgPSBzZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9nZXQgdGhlIG5ldyBwYWdlJ3Mgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcgKGlmIGl0IGV4aXN0cylcbiAgICAgICAgdmFyIHJvdXRlID0gbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKGRvYyk7XG5cbiAgICAgICAgLy8gR2FyYmFnZSBjb2xsZWN0aW9uLCB5b3UgZG9uJ3QgbmVlZCB0aGlzIGFueW1vcmUuXG4gICAgICAgIHBhcnNlciA9IGRvYyA9IG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRpdGxlOnRpdGxlLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgbWV0YXM6bWV0YXMsXG4gICAgICAgICAgICBsaW5rczpsaW5rcyxcbiAgICAgICAgICAgIGJvZHlfY2xhc3Nlczpib2R5X2NsYXNzZXMsXG4gICAgICAgICAgICBodG1sOm5ld19odG1sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcsIGlmIGl0IGV4aXN0c1xuICAgICAqXG4gICAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgSFRNTCwgaXQnbGwgZ3JhYiBpdCBmcm9tIHRoZSBjdXJyZW50IERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcmV0dXJucyB7YW55IHwgRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRSb3V0ZUZyb21NZXRhOiBmdW5jdGlvbihodG1sKXtcbiAgICAgICAgaHRtbCA9IHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmhlYWQgOiBodG1sO1xuICAgICAgICB2YXIgcm91dGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY3VycmVudF9yb3V0ZVwiXScpO1xuICAgICAgICByb3V0ZSA9IHJvdXRlID8gcm91dGUuY29udGVudCA6IG51bGw7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpdGggbmV3IEhUTUxcbiAgICAgKlxuICAgICAqIDEpIFRyaWdnZXJzIHVubG9hZCgpXG4gICAgICogMikgV2FpdHMgMTAwbXNcbiAgICAgKiAzKSBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50c1xuICAgICAqIDQpIFJlcGxhY2VzIGFsbCBtZXRhIHRhZ3MgKGltcG9ydGFudCBmb3Igc29jaWFsIG1lZGlhIHNoYXJpbmcgYW1vbmcgb3RoZXIgdGhpbmdzKVxuICAgICAqIDUpIFJlcGxhY2VzIHRoZSBjYW5vbmljYWwgdGFnXG4gICAgICogNikgUmVwbGFjZXMgYW55IGNsYXNzZXMgb24gdGhlIGJvZHkgc2luY2UgdGhleSBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gaW5kaWNhdGUgd2hpY2ggcGFnZSB5b3UncmUgb25cbiAgICAgKiA3KSBQdXNoZXMgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICogOCkgU2V0cyB0aGUgcGFnZSB0aXRsZVxuICAgICAqIDkpIFJlcGxhY2VzIGNvbnRlbnQgaW4gdGhlIERPTVxuICAgICAqIDEwKSBUcmlnZ2VycyBvbmxvYWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqL1xuICAgIHJlcGxhY2VQYWdlQ29udGVudChodG1sLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKVxuICAgIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHB1c2hfc3RhdGUgPSB0eXBlb2YgcHVzaF9zdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogcHVzaF9zdGF0ZTtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcblxuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgLy9nZXQgcmVwbGFjZV9lbCBhZ2FpbiBiZWNhdXNlIGl0IHdhcyByZXBsYWNlZFxuICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJVbmxvYWQoZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIHJlcGxhY2VfZWwsIHRoaXMuZ2V0Um91dGVGcm9tTWV0YSgpKTtcblxuICAgICAgICAvL3Zlcnkgc2xpZ2h0IDEwMG1zIGRlbGF5IHRvIGxldCB0aGUgb24gdW5sb2FkIGhhbmRsZXJzIHJ1biBmaXJzdFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsKTtcblxuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgaWYoIHBhcnNlZC5odG1sLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmUoJ21ldGEnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAgICAgLy8gLSBwb3NzaWJseSBvdGhlciB0YWdzIHdpbGwgbmVlZCB0byBiZSB3aGl0ZWxpc3RlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyc2VkLmxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vYWRkIGJvZHkgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0ID0gcGFyc2VkLmJvZHlfY2xhc3NlcztcblxuICAgICAgICAgICAgICAgIC8vcHVzaCB0aGUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICAgICAgICAgICAgcHVzaF9zdGF0ZSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSh7dXJsOiB1cmx9LCBwYXJzZWQudGl0bGUsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgdGFiL3BhZ2UgdGl0bGVcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnNldFRpdGxlKHBhcnNlZC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlcGxhY2UgY29udGVudCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19jb250ZW50ID0gZG9tLnJlcGxhY2VFbFdpdGhIVE1MKHJlcGxhY2VfZWwsIHBhcnNlZC5odG1sKTtcblxuICAgICAgICAgICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJPbkxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwYXJzZWQucm91dGUpO1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgcmVwbGFjZV9lbCBpcyB0aGUgc2FtZSBhcyBnZXRSZXBsYWNlRWxlbWVudCgpLFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gaXQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gd2hhdGV2ZXIgdGhlIGluY29taW5nX2VsIGlzIGJlY2F1c2UgaXQgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmKCBzZWxmLmdldFJlcGxhY2VFbGVtZW50KCkgIT09IHJlcGxhY2VfZWwgKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zZXRSZXBsYWNlRWxlbWVudChpbmNvbWluZ19lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldFRpdGxlOiBmdW5jdGlvbih0aXRsZSl7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IHBhZ2UgbG9hZHMsIHlvdSBwcm9iYWJseSB3YW50IHRvIGtpY2tvZmYgc29tZSBwYWdlLXNwZWNpZmljIEpTLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIHJlY2VpdmVzIHRoZSBldmVudC5cbiAgICAgKiBUaGUgZXZlbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIFwiZGV0YWlsXCIgd2hpY2ggd2lsbCBjb250YWluOlxuICAgICAqICAxKSBUaGUgcmVwbGFjZV9lbCAodGhlIGVsZW1lbnQgd2hvJ3MgY29udGVudCB3YXMgc3dhcHBlZCBvdXQpXG4gICAgICogIDIpIFRoZSByb3V0ZSAoeW91IGNhbiBkZWZpbmUgdGhpcyBpbiBhIG1ldGEgdGFnIGNhbGxlZCBcImN1cnJlbnRfcm91dGVcIiB3aGljaCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ3JhYmJlZCBhbmQgcGFzc2VkIGFsb25nKVxuICAgICAqICAzKSBBbnkgZGF0YSB5b3Ugc2V0IHVzaW5nIC5zZXRQYXNzdGhyb3VnaERhdGEoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmNvbXBsZXRlJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uVW5sb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBuZXcgcGFnZSBmYWlscyB0byBsb2FkLCB5b3Ugc2hvdWxkIHByb2JhYmx5IHRlbGwgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVwbGFjZWRfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyT25Mb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJlcGxhY2VkX3NlbGVjdG9yLCByb3V0ZSl7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlICE9PSAndW5kZWZpbmVkJyA/IHJvdXRlIDogbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKCk7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uY29tcGxldGUnLCB7XG4gICAgICAgICAgICBlbDplbCxcbiAgICAgICAgICAgIGVsX3NlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgcmVwbGFjZWRfc2VsZWN0b3I6IHJlcGxhY2VkX3NlbGVjdG9yLFxuICAgICAgICAgICAgcm91dGU6cm91dGUsXG4gICAgICAgICAgICBkYXRhOnRoaXMuZ2V0UGFzc1Rocm91Z2hEYXRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGxlYXZpbmcgdGhlIGxhc3QgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKi9cbiAgICB0cmlnZ2VyVW5sb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJvdXRlKXtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywge2VsOmVsLCBlbF9zZWxlY3RvcjplbF9zZWxlY3Rvciwgcm91dGU6cm91dGV9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiBmYWlsZWQsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICovXG4gICAgdHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywge2Vycm9yOmVycm9yfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIHRyYWNrIHRoZSBicm93c2VyJ3MgaGlzdG9yeSBidXR0b25zIChiYWNrL2ZvcndhcmQpXG4gICAgICpcbiAgICAgKiBAdG9kbzogSW52ZXN0aWdhdGUgcG9zc2libGUgaXNzdWUgd2l0aCBjaHJvbWUgY2FjaGluZyBiYWNrIGJ1dHRvbiBjb250ZW50cyBhbmQgbm90IGxvYWRpbmcgdGhlIGVudGlyZSBwYWdlXG4gICAgICovXG4gICAgaW5pdEhpc3RvcnlIYW5kbGVyczogZnVuY3Rpb24oKXtcbiAgICAgICAgLy9mb3J3YXJkIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wdXNoc3RhdGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmxvYWQocmVxdWVzdC5nZXRVUklXaXRoUXVlcnlTdHJpbmcoKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy9iYWNrIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVlcnkgc3RyaW5nIHZhcmlhYmxlc1xuICAgICAqXG4gICAgICogQHJldHVybnMgVVJMU2VhcmNoUGFyYW1zXG4gICAgICovXG4gICAgcXVlcnk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCB3YXMgbWFkZSBzZWN1cmVseSBvdmVyIFNTTCAoaHR0cHMgaW5zdGVhZCBvZiBodHRwKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIdHRwczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBteS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluV2l0aFByb3RvY29sOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUklcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUkk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSSSB3aXRoIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBVUkxcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbS9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxVUkw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNsYXNoIHRvIGEgc3RyaW5nIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20gYmVjb21lcyBodHRwczovL215LWRvbWFpbi5jb20vXG4gICAgICogRXhhbXBsZTogL215LXByb2R1Y3QgYmVjb21lcyAvbXktcHJvZHVjdC9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFwcGVuZFNsYXNoOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICByZXR1cm4gdXJsW3VybC5sZW5ndGgtMV0gIT09ICcvJyA/IHVybCsnLycgOiB1cmw7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2xhc3N9IGZyb20gXCIuLi9BYnN0cmFjdENsYXNzXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xuY29uc3Qgc2l0ZV9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOm51bGwsXG4gICAgY29uZmlnOnt9LFxufTtcblxuLyoqXG4gKlxuICogU2l0ZSAoZm9yIG11bHRpLXRlbmFudCBhcHBsaWNhdGlvbnMpXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggdGhlIGN1cnJlbnQgd2Vic2l0ZSdzIGlkLCBuYW1lLCBhbmQgY29uZmlnIG9wdGlvbnNcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTaXRlIGV4dGVuZHMgQWJzdHJhY3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IFsnaWQnLCAnbmFtZScsICdjb25maWcnXTtcblxuICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gdGhpcztcblxuICAgICAgICAvL2V4dGVuZCB1c2VyX2RlZmF1bHRzIHdpdGggaW5jb21pbmcgZGF0YVxuICAgICAgICBkYXRhID0gey4uLnNpdGVfZGVmYXVsdHMsIC4uLmRhdGF9O1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJZChpZCkge1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2dldHMgdGhlIHdlYnNpdGUncyBuYW1lXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIGNvbmZpZyBkYXRhXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xuICAgIH1cblxuICAgIC8vc2V0cyBhbGwgY29uZmlnIGRhdGEgdXNpbmcgdGhlIHByb3ZpZGVkIG9iamVjdFxuICAgIHNldENvbmZpZyhjb25maWcpIHtcbiAgICAgICAgLy9tdXN0IGJlIGEgZGF0YSBvYmplY3QsIGV2ZW4gaWYgaXQncyBlbXB0eVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoY29uZmlnLCBudWxsLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuXG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFuIGluZGl2aWR1YWwgY29uZmlnIHZhbHVlIG9yIG51bGwgaWYgaXQncyBub3QgZGVmaW5lZFxuICAgIGdldENvbmZpZ0l0ZW0oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fY29uZmlnW2tleV07XG4gICAgfVxuXG4gICAgLy9hZGRzIG9yIHVwZGF0ZXMgYSB2YWx1ZSBpbiB0aGUgY29uZmlnIG9iamVjdFxuICAgIHNldENvbmZpZ0l0ZW0oa2V5LCB2YWwpIHtcbiAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCIvKipcbiAqIE1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29tbW9uIHN0cmluZyBtYW5pcHVsYXRpb25zXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3MuZ2V0dGVyKCduYW1lJykgcmV0dXJucyAnZ2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdnZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3Muc2V0dGVyKCduYW1lJykgcmV0dXJucyAnc2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdzZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHVjZmlyc3QoKSBmdW5jdGlvbmFsaXR5IHRvIEpTIChsaWtlIFBIUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgdWNmaXJzdDogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxufTsiLCJpbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL2V2ZW50c1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLyoqXG4gKiBUb2dnbGVzIGFuIGVsZW1lbnQgb24gY2xpY2sgb2YgYSBidXR0b24sIGNsaWNrIG91dHNpZGUgdGhlIGVsZW1lbnQgKGlmIGl0J3MgdmlzaWJsZSksIG9yIG9uIHdpbmRvdyByZXNpemVcbiAqXG4gKiBUaGUgYnJlYWtwb2ludCBpcyBiYXNlZCBvbiB2aXNpYmlsaXR5IG9mIHRoZSBidXR0b24uXG4gKiAgIElmIHRoZSBidXR0b24gaXMgdmlzaWJsZSwgdGhlIGVsZW1lbnQgd2lsbCBub3QgYmUgKHVubGVzcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQpXG4gKiAgIElmIHRoZSBidXR0b24gaXMgaGlkZGVuLCB0aGUgZWxlbWVudCB3aWxsIGJlIHZpc2libGVcbiAqXG4gKiBObyBzdHlsZXMgYXJlIHByb3ZpZGVkIHdpdGggdGhpcyBjb21wb25lbnQgc28gZmVlbCBmcmVlIHRvIGdvIGNyYXp5LlxuICogICBUaGVyZSdzIGEgbG90IHlvdSBjYW4gZG8gd2hlbiBhIHNpbmdsZSBjbGFzcyBpcyB0b2dnbGVkLlxuICpcbiAqIFVzZSBjYXNlczpcbiAqIDEpIENoYW5nZSBmcm9tIGEgc2lkZWJhciBvbiBkZXNrdG9wIHRvIGEgcG9wdXAgb24gbW9iaWxlXG4gKiAyKSBDaGFuZ2UgZnJvbSBhbiBpbmxpbmUgbWVudSBvbiBkZXNrdG9wIHRvIGEgc2xpZGUtaW4gb24gbW9iaWxlXG4gKiAuLi5JJ20gc3VyZSB5b3UgY2FuIHRoaW5rIG9mIHNvbWVcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2dnbGVPbk1vYmlsZXtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBidG5cbiAgICAgKiBAcGFyYW0gdG9nZ2xlX2VsXG4gICAgICogQHBhcmFtIHRvZ2dsZV9jbGFzc1xuICAgICAqIEBwYXJhbSBoaWRlX29uX291dHNpZGVfY2xpY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidG4sIHRvZ2dsZV9lbCwgdG9nZ2xlX2NsYXNzLCBoaWRlX29uX291dHNpZGVfY2xpY2spe1xuICAgICAgICAvL3NldCB0aGUgZWxlbWVudHNcbiAgICAgICAgdGhpcy5idG4gPSBkb20uZ2V0RWxlbWVudChidG4sIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9lbCA9IGRvbS5nZXRFbGVtZW50KHRvZ2dsZV9lbCwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRydWVcbiAgICAgICAgdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgPSB0eXBlb2YgaGlkZV9vbl9vdXRzaWRlX2NsaWNrICE9PSBcImJvb2xlYW5cIiA/IHRydWUgOiBoaWRlX29uX291dHNpZGVfY2xpY2s7XG5cbiAgICAgICAgLy9pZiBub3QgYSBzdHJpbmcsIGRlZmF1bHQgdG8gXCJ2aXNpYmxlXCJcbiAgICAgICAgdGhpcy50b2dnbGVfY2xhc3MgPSB0eXBlb2YgdG9nZ2xlX2NsYXNzICE9PSAnc3RyaW5nJyA/ICd2aXNpYmxlJyA6IHRvZ2dsZV9jbGFzcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGFuZCBydW5zIG9uV2luZG93UmVzaXplIGltbWVkaWF0ZWx5IHRvIHNldCB0aGUgaW5pdGlhbCBjbGFzc1xuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy90byBiZSB1c2VkIGluc2lkZSB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9jcmVhdGUgYSB0aHJvdHRsZWQgd2luZG93IHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgIGxldCB0aHJvdHRsZTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRocm90dGxlKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYoIGRvbS5pc1Zpc2libGUoc2VsZi5idG4pICl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LmFkZChzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiggdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0X2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBvbiB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi5idG4pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5idG4gPT09IHRhcmdldF9lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldF9lbCA9IHRhcmdldF9lbC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldF9lbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgb24gdGhlIGVsZW1lbnQgd2UgYXJlIHRvZ2dsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi50b2dnbGVfZWwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgZWxlbWVudCB3ZSBhcmUgdG9nZ2xpbmdcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRvZ2dsZV9lbCA9PT0gdGFyZ2V0X2VsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0X2VsID0gdGFyZ2V0X2VsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgaGlkZSBpdFxuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2xpY2tUb2dnbGVCdG4gPSBldmVudHMub25DbGljayh0aGlzLmJ0biwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC50b2dnbGUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgaWYoIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrICkge1xuICAgICAgICAgICAgZXZlbnRzLm9mZignYm9keScsICdjbGljaycsIHRoaXMub25DbGlja091dHNpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50cy5vZmYodGhpcy5idG4sICdjbGljaycsIHRoaXMub25DbGlja1RvZ2dsZUJ0bik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMsIGJsb2NrX290aGVyX2tleXMsIHRocm93X2Vycm9yKXtcbiAgICAgICAgLy9kZWZhdWx0IGZvciB0aHJvd19lcnJvciBpcyBmYWxzZVxuICAgICAgICB0aHJvd19lcnJvciA9IHR5cGVvZiB0aHJvd19lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiA/IHRocm93X2Vycm9yIDogZmFsc2U7XG5cbiAgICAgICAgLy9kZWZhdWx0IGZvciByZXF1aXJlX2FsbF9rZXlzIGlzIGZhbHNlXG4gICAgICAgIHJlcXVpcmVfYWxsX2tleXMgPSB0eXBlb2YgcmVxdWlyZV9hbGxfa2V5cyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcXVpcmVfYWxsX2tleXMgOiBmYWxzZTtcblxuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG4gICAgICAgIC8vaWYgbm90IGFuIG9iamVjdCwgbnVsbCwgb3IgYW4gYXJyYXlcbiAgICAgICAgaWYoICFpc19vYmplY3QgfHwgdmFsdWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgd2UgbmVlZCB0byB2ZXJpZnkgdGhlIGtleXMgdGhpcyBvYmplY3QgY29udGFpbnNcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoa2V5cykgKSB7XG4gICAgICAgICAgICBsZXQgZm91bmRfa2V5ID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbWlzc2luZ19rZXlzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXkgd2FzIGZvdW5kLCB3ZSBmb3VuZCBhdGxlYXN0IG9uZVxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZV9rZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfa2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZiBpdCdzIG5vdCBmb3VuZCwgd2UgY2FuJ3Qgc2F5IGFsbCBrZXlzIGV4aXN0IGluIHRoaXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ19rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9pZiBub3Qgb25lIG9mIHRoZSBrZXlzIHdlcmUgZm91bmRcbiAgICAgICAgICAgIGlmKCAhZm91bmRfa2V5ICl7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBgK2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZGlkbid0IGZpbmQgYWxsIHRoZSBrZXlzXG4gICAgICAgICAgICBpZiggcmVxdWlyZV9hbGxfa2V5cyAmJiBtaXNzaW5nX2tleXMubGVuZ3RoIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG1pc3NpbmcgZGF0YTogYCttaXNzaW5nX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZG9uJ3QgYWxsb3cgYW55IGtleXMgTk9UIGluIHRoZSBrZXlzIGFycmF5XG4gICAgICAgICAgICBpZiggYmxvY2tfb3RoZXJfa2V5cyApe1xuICAgICAgICAgICAgICAgIGxldCB1bnJlY29nbml6ZWRfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFsdWVfa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiggIWtleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5yZWNvZ25pemVkX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiggdW5yZWNvZ25pemVkX2tleXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gY29udGFpbnMgaW52YWxpZCBkYXRhOiBgK3VucmVjb2duaXplZF9rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2FsbCBjaGVja3MgcGFzc2VkISBjb25ncmF0cywgaXQncyBhbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuXG4vKipcbiAqXG4gKiBVc2VyXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggYSB1c2VyIGFuZCB0aGVpciBwZXJtaXNzaW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ2lzR3Vlc3QnLCAnaXNBZG1pbicsICd1c2VybmFtZScsICdmbmFtZScsICdsbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdwZXJtaXNzaW9ucycsICdhZGRpdGlvbmFsRGF0YSddOyBcbiAgICAgICAgXG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiB0aGlzO1xuXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uZGF0YX07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHNldElkKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJc0d1ZXN0KGlzX2d1ZXN0KXtcbiAgICAgICAgdGhpcy5faXNHdWVzdCA9IGlzX2d1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNHdWVzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHdWVzdDtcbiAgICB9XG5cbiAgICBzZXRJc0FkbWluKGlzX2FkbWluKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNBZG1pbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBZG1pbjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSl7XG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRVc2VybmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Rm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZuYW1lO1xuICAgIH1cbiAgICBzZXRGbmFtZShmaXJzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fZm5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRMbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfVxuICAgIHNldExuYW1lKGxhc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2xuYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGbmFtZSgpICsgJyAnICsgdGhpcy5nZXRMbmFtZSgpO1xuICAgIH1cblxuICAgIGdldEVtYWlsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9XG4gICAgc2V0RW1haWwoZW1haWwpe1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRQaG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGhvbmU7XG4gICAgfVxuICAgIHNldFBob25lKHBob25lKXtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0UGVybWlzc2lvbnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9ucyl7XG4gICAgICAgIGlmKCAhQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykgKSB0aHJvdyBcInNldFBlcm1pc3Npb25zIHJlcXVpcmVzIGFuIGFycmF5XCI7XG5cbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1JlbW92ZXMgYSBzaW5nbGUgcGVybWlzc2lvbiBmcm9tIHRoaXMgdXNlclxuICAgIHJlbW92ZVBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuc2V0UGVybWlzc2lvbnModGhpcy5fcGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJtaXNzaW9ucygpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbERhdGE7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBzZXRBZGRpdGlvbmFsRGF0YShhZGRpdGlvbmFsX2RhdGEpe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChhZGRpdGlvbmFsX2RhdGEsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XTtcbiAgICB9XG4gICAgLy9zZXRzIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0RGF0YUl0ZW0oa2V5LCB2YWwpe1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9lcy9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXMvZXZlbnRzXCI7XG5pbXBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSBmcm9tIFwiLi4vZXMvZm9ybXNcIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL2VzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL2VzL3JlcXVlc3RcIjtcbmltcG9ydCB7U2l0ZX0gZnJvbSBcIi4uL2VzL3NpdGVcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uL2VzL3N0cmluZ3NcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi9lcy90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vZXMvdXNlclwiO1xuaW1wb3J0IHtUb2dnbGVPbk1vYmlsZX0gZnJvbSBcIi4uL2VzL3RvZ2dsZS9Ub2dnbGVPbk1vYmlsZVwiO1xuXG4vL2NyZWF0ZSBhIGtleTp2YWwgb2JqZWN0IG9mIGFsbCBjb21wb25lbnRzXG5jb25zdCBjb21wb25lbnRzID0ge1xuICAgIGRvbTpkb20sXG4gICAgZXZlbnRzOmV2ZW50cyxcbiAgICBYSFJGb3JtOlhIUkZvcm0sXG4gICAgRm9ybUZyb21VUkw6Rm9ybUZyb21VUkwsXG4gICAgbmF2aWdhdGlvbjpuYXZpZ2F0aW9uLFxuICAgIHJlcXVlc3Q6cmVxdWVzdCxcbiAgICBTaXRlOlNpdGUsXG4gICAgc3RyaW5nczpzdHJpbmdzLFxuICAgIHR5cGVfY2hlY2tzOnR5cGVfY2hlY2tzLFxuICAgIFVzZXI6VXNlcixcbiAgICBUb2dnbGVPbk1vYmlsZTpUb2dnbGVPbk1vYmlsZVxufTtcblxuLyoqXG4gKiBDYWxsIHRoaXMgZnVuY3Rpb24gdG8gdGllIGFsbCBqcGFjayBjb21wb25lbnRzIGRpcmVjdGx5IHRvIHRoZSB3aW5kb3cgZm9yIGdsb2JhbCB1c2VcbiAqXG4gKiBUaGlzIG1lYW5zIGluc3RlYWQgb2YgY2FsbGluZyBqcGFjay5zdHJpbmdzLnVjZmlyc3QoKSwgeW91IGNhbiBqdXN0IGNhbGwgc3RyaW5ncy51Y2ZpcnN0KClcbiAqXG4gKiBUaGlzIGlzIG5vdCByZWNvbW1lbmRlZCBiZWNhdXNlIGpwYWNrJ3MgbmFtZXMgbWF5IGJlIHRvbyBnZW5lcmljIGFuZCBjb25mbGljdC5cbiAqXG4gKiBJZiB5b3Ugd2FudCB0byBzZXQgYSBkaWZmZXJlbnQgbmFtZXNwYWNlIHRoYW4ganBhY2ssIHRoYXQncyBmaW5lLCBidXQgbm90IHVzaW5nIGEgbmFtZXNwYWNlIGF0IGFsbCBjYW4gYmUgcmlza3lcbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBzZXRHbG9iYWwoXCIkXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6ICQuc3RyaW5ncy51Y2ZpcnN0KClcbiAqIHNldEdsb2JhbChcIl9cIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogXy5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiUGVhc0FyZUdyb3NzXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6IFBlYXNBcmVHcm9zcy5zdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqL1xuY29uc3Qgc2V0R2xvYmFsID0gZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAvL2ZvciBlYWNoIGZ1bmN0aW9uIHdpdGhpbiBldmVudHNcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBjb21wb25lbnRzKSB7XG4gICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2Ygd2luZG93W25hbWVzcGFjZV0gPT09IFwidW5kZWZpbmVkXCIgKXsgd2luZG93W25hbWVzcGFjZV0gPSB7fTsgfVxuICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1ba2V5XSA9IGNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB3aW5kb3dba2V5XSA9IGNvbXBvbmVudHNba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8vZXh0ZW5kIGNvbXBvbmVudHMgdG8gaW5jbHVkZSB0aGUgc2V0R2xvYmFsIG1ldGhvZFxuZXhwb3J0IGNvbnN0IGpwYWNrID0gey4uLmNvbXBvbmVudHMsIC4uLntzZXRHbG9iYWw6IHNldEdsb2JhbH19O1xuXG4vL3NldCBqcGFjayBnbG9iYWxseSBzbyB0aGF0IGl0IGNhbiBiZSB1c2VkIGFueXdoZXJlXG5nbG9iYWwuanBhY2sgPSBqcGFjazsiLCJtb2R1bGUuZXhwb3J0cyA9IGF4aW9zOyIsIm1vZHVsZS5leHBvcnRzID0gZm9ybWRhdGEtcG9seWZpbGw7IiwibW9kdWxlLmV4cG9ydHMgPSB1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbDsiXSwic291cmNlUm9vdCI6IiJ9