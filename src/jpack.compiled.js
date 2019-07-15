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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9qcGFjay5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZvcm1kYXRhLXBvbHlmaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGxcIiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMs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QUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG1CQUFtQix3Q0FBRztBQUN0Qjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxzREFBc0QsU0FBUztBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0U7QUFDaEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QUFZLG1EQUFPO0FBQ25CLGdCQUFnQiwyREFBVztBQUMzQixTQUFTLDZDQUFJO0FBQ2IsbUJBQW1CLHdFQUFjO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxlQUFlLG1CQUFtQjs7QUFFekM7QUFDQSxxQjs7Ozs7Ozs7Ozs7O0FDN0RBLHVCOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLDRDIiwiZmlsZSI6ImpwYWNrLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanBhY2suanNcIik7XG4iLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi9zdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGVzIHRoZSB1c2VyIG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHBvcHVsYXRlKGRhdGEpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX2tleXMgPT09IFwidW5kZWZpbmVkXCIgKSB0aHJvdyBgQ2Fubm90IHBvcHVsYXRlIG9iamVjdCBpZiBfa2V5cyBwcm9wZXJ0eSBpcyBub3Qgc2V0YDtcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMuX2tleXMsIGZhbHNlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL2ZvciBlYWNoIGtleSB0aGF0IGlzIHNldCBpbiB0aGUgZGF0YSBvYmplY3QsIHNldCB0aGUgdmFsdWUgb24gdGhpc1xuICAgICAgICB0aGlzLl9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YVtrZXldICE9PSBcInVuZGVmaW5lZFwiICkgc2VsZltzdHJpbmdzLnNldHRlcihrZXkpXShkYXRhW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lLCBlcnJvcl9vbl9tdWx0aXBsZSl7XG4gICAgICAgIGNvbnN0IGZvdW5kRWwgPSB0aGlzLmdldEVsZW1lbnRzKGVsLCBlcnJvcl9vbl9ub25lKTtcblxuICAgICAgICBpZiggZm91bmRFbC5sZW5ndGggPiAxICYmIGVycm9yX29uX211bHRpcGxlICkgdGhyb3cgYE1vcmUgdGhhbiAxIHJlc3VsdCBmb3VuZCBmb3IgXCIke2VsfVwiYDtcblxuICAgICAgICBpZiggIWZvdW5kRWwgKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gZm91bmRFbFswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhbiBhcnJheSBvZiBuYXRpdmUgRE9NIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWwgKHN0cmluZywgb2JqZWN0LCBhcnJheSwgalF1ZXJ5IG9iamVjdCwgZXRjKVxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm8gZWxlbWVudHMgd2VyZSBmb3VuZCwgZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyBbXVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRzOiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSl7XG4gICAgICAgIC8vZGVmYXVsdCB0byBmYWxzZVxuICAgICAgICBlcnJvcl9vbl9ub25lID0gdHlwZW9mIGVycm9yX29uX25vbmUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IGVycm9yX29uX25vbmU7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIGVtcHR5XG4gICAgICAgIGxldCBlbF9hcnJheSA9IFtdO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZWwgPT09IFwidW5kZWZpbmVkXCIgfHwgIWVsICl7XG4gICAgICAgICAgICAvL2RvIG5vdGhpbmcsIGRlZmF1bHQgaXMgZW1wdHkgYXJyYXlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgKXtcbiAgICAgICAgICAgIC8vYWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBOb2RlTGlzdCByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCk7XG4gICAgICAgICAgICBlbF9hcnJheSA9IGVsX2FycmF5ID8gQXJyYXkuZnJvbShlbF9hcnJheSkgOiBlbF9hcnJheTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIGpRdWVyeSApe1xuICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyBhbnl0aGluZ1xuICAgICAgICAgICAgaWYoIGVsLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgIC8vZ2V0IGFsbCB0aGUgZWxlbWVudHMgaW4gYW4gYXJyYXlcbiAgICAgICAgICAgICAgICBlbF9hcnJheSA9IGVsLnRvQXJyYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIE5vZGVMaXN0IHx8IGVsIGluc3RhbmNlb2YgSFRNTENvbGxlY3Rpb24gKXtcbiAgICAgICAgICAgIGVsX2FycmF5ID0gQXJyYXkuZnJvbShlbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBpdCdzIGFuIGFycmF5LCB2YWxpZGF0ZSBlYWNoIGVsZW1lbnRcbiAgICAgICAgZWxzZSBpZiggQXJyYXkuaXNBcnJheShlbCkgKXtcbiAgICAgICAgICAgIGVsLmZvckVhY2goZnVuY3Rpb24odGhpc19lbCl7XG4gICAgICAgICAgICAgICAgdGhpc19lbCA9IGRvbS5nZXRFbGVtZW50KHRoaXNfZWwpO1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzX2VsICkgZWxfYXJyYXkucHVzaCh0aGlzX2VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBgSW52YWxpZCB2YWx1ZTogXCIke2VsfVwiYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKSB0aHJvdyBgRmFpbGVkIHRvIGZpbmQgXCIke2VsfVwiYDtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1aWNrIG1ldGhvZCBmb3IgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge2RvbX1cbiAgICAgKi9cbiAgICByZW1vdmU6IGZ1bmN0aW9uKGVsLCBlcnJvcl9pZl9ub3RfZm91bmQpe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9pZl9ub3RfZm91bmQgKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgXCIke2VsfVwiYDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBkb20gZWxlbWVudCB3aXRoIEhUTUxcbiAgICAgKlxuICAgICAqIHVzZXMgLmdldEVsZW1lbnQoKSBzbyBlbCBjYW4gYmUganVzdCBhYm91dCBhbnl0aGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX18bnVsbFxuICAgICAqL1xuICAgIHJlcGxhY2VFbFdpdGhIVE1MOiBmdW5jdGlvbihlbCwgaHRtbCwgZXJyb3JfaWZfbm90X2ZvdW5kKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgY29uc3QgZm91bmRFbCA9IHRoaXMuZ2V0RWxlbWVudChlbCk7XG5cbiAgICAgICAgaWYoICFlbCApe1xuICAgICAgICAgICAgaWYoIGVycm9yX2lmX25vdF9mb3VuZCApIHRocm93IGBDb3VsZCBub3QgZmluZCBcIiR7ZWx9XCJgO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvL2NyZWF0ZSBlbGVtZW50IGZyb20gSFRNTFxuICAgICAgICBsZXQgbmV3RWwgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9pbnNlcnQgdGhlIG5ldyBlbGVtZW50IGJlZm9yZSB0aGUgY3VycmVudFxuICAgICAgICBuZXdFbCA9IGZvdW5kRWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWwuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzWzBdLCBmb3VuZEVsKTtcblxuICAgICAgICAvL3JlbW92ZSBvcmlnaW5hbCBlbGVtZW50XG4gICAgICAgIGZvdW5kRWwucmVtb3ZlKCk7XG5cbiAgICAgICAgLy9yZXR1cm4gdGhlIG5ldyBvbmVcbiAgICAgICAgcmV0dXJuIG5ld0VsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGFuIGVsZW1lbnQgaXMgdmlzaWJsZSBvciBub3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAdGhyb3dfZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWaXNpYmxlKGVsLCBlcnJvcl9pZl9ub3RfZm91bmQpIHtcbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIGlmKCAhZWwgKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9pZl9ub3RfZm91bmQgKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgXCIke2VsfVwiYDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cbiAgICAgICAgLy9jaGVjayBkaXNwbGF5LCB2aXNpYmlsaWl0eSwgYW5kIG9wYWNpdHkgZmlyc3Qgc2luY2UgdGhleSdyZSB0aGUgbW9zdCBjb21tb25cbiAgICAgICAgaWYgKHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ3Zpc2libGUnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzdHlsZS5vcGFjaXR5ID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9zZWUgaWYgdGhlIGVsZW1lbnQgaGFzIGEgc2l6ZVxuICAgICAgICBpZihlbC5vZmZzZXRXaWR0aCArIGVsLm9mZnNldEhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9nZXQgdGhlIG91dHNpZGUgY29ybmVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZWxfYm91bmRzID0ge1xuICAgICAgICAgICAgJ3RvcC1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC50b3BcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG9wLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC5ib3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NlbnRlcic6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbnNpZGVfdmlld3BvcnQgPSB0cnVlO1xuICAgICAgICAvL21ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0XG4gICAgICAgIE9iamVjdC5rZXlzKGVsX2JvdW5kcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gZWxfYm91bmRzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChwb2ludC54IDwgMCkgaW5zaWRlX3ZpZXdwb3J0ID0gZmFsc2U7IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwb2ludC54ID4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBwb2ludEVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIGlmIChwb2ludEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRFbCA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHBvaW50RWwgPSBwb2ludEVsLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW5zaWRlX3ZpZXdwb3J0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kIHByZXZlbnREZWZhdWx0IGV2ZW50cyAoYW5kIG90aGVycyBmb3IgY29uc2lzdGVuY3kpXG4gKi9cbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZXNlIGZ1bmN0aW9ucyBnbG9iYWxseSBzbyB5b3UgY2FuIHVzZSB0aGVtIHdpdGhvdXQgYSBuYW1lc3BhY2Ugb3Igd2l0aCBhIGN1c3RvbSBvbmVcbiAgICAgKlxuICAgICAqIFVzZSBhdCB5b3VyIG93biByaXNrIC0gbWF5IGNhdXNlIGNvbmZsaWN0cyFcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICAgIGpwYWNrLmV2ZW50cy5zZXRHbG9iYWwoKTtcbiAgICAgKiAgICAgb25DbGljaygnYScsIGZ1bmN0aW9uKCl7XG4gICAgICogICAgICAgIC8vZG8gc29tZXRoaW5nICh0aGUgaHJlZiBpcyBwcmV2ZW50ZWQpXG4gICAgICogICAgIH0pO1xuICAgICAqL1xuICAgIHNldEdsb2JhbDogZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgICAgICAvL2ZvciBlYWNoIGZ1bmN0aW9uIHdpdGhpbiBldmVudHNcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc2VsZikge1xuICAgICAgICAgICAgLy9zZXQgZXZlcnl0aGluZyB0aGF0J3MgYSByZWFsIG1ldGhvZCBpbiBldmVudHMsIGV4Y2VwdCB0aGlzIG9uZVxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHByb3BlcnR5ICE9PSAnc2V0R2xvYmFsJykge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1bcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1twcm9wZXJ0eV0gPSBzZWxmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGV2ZW50cyBmcm9tIG9jY3VycmluZ1xuICAgICAqICAobGlrZSBmb3JtcyBzdWJtaXR0aW5nIG9yIGEgbGluayBicmluZ2luZyB5b3UgdG8gYW5vdGhlciBwYWdlKVxuICAgICAqXG4gICAgICogIFJldHVybnMgdGhlIGdlbmVyYXRlZCBoYW5kbGVyIGZvciBmdXR1cmUgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmVudGVkSGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy9OZWVkIHRvIHVuZGVyc3RhbmQgdGhpcyBiZXR0ZXIsIGJ1dCBpdCBhcHBlYXJzIHdoZW4gdGllZCB0byB0aGUgYm9keSBlbGVtZW50IHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIHJlY2VpdmVzIGFuIGFycmF5IG9mIGV2ZW50cyB3aXRoIGEgc2luZ2xlIGl0ZW0gaW4gaXQ/XG4gICAgICAgICAgICBpZiggQXJyYXkuaXNBcnJheShlKSApIGUgPSBlWzBdO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgcHJldmVudGVkSGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcmV2ZW50ZWRIYW5kbGVyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYW4gZXZlbnQgb24gYW4gZWxlbWVudC9lbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGV2ZW50X29wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihlbCwgZXZlbnQsIGV2ZW50X29wdGlvbnMpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50X29wdGlvbnMgPSB0eXBlb2YgZXZlbnRfb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBldmVudF9vcHRpb25zO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGV2ZW50X29wdGlvbnMgfSk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIEZvcm1Gcm9tVVJMIGNsYXNzXG5jb25zdCBGb3JtRnJvbVVSTERlZmF1bHRzID0ge1xuICAgIGluY29taW5nRWxlbWVudFNlbGVjdG9yOiBudWxsLCAvL3RoZSBmb3JtIGVsZW1lbnQgb3Igd3JhcHBlciB0aGF0IHlvdSB3YW50IHRvIHJldHJpZXZlIGZyb20gdGhlIFVSTFxuICAgIGluc2VydEludG9FbGVtZW50OiBudWxsLCAvL3doYXQgZWxlbWVudCB0byBwdXQgdGhlIGZvcm0gaW50b1xuICAgIG9ubG9hZDogZnVuY3Rpb24oZm9ybSl7IHJldHVybiB0aGlzOyB9LCAvL29uY2UgdGhlIGZvcm0gaXMgbG9hZGVkIG9udG8gdGhlIHBhZ2Vcbn07XG5cbi8qKlxuICpcbiAqIEZvcm1Gcm9tVVJMXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIGdyYWIgYSBmb3JtIGZyb20gYSBVUkwgYW5kIHJldHVybnMgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEFsc28gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb24gdXNpbmcgWEhSIGFuZCBjYW4gb3BlbiBhIG1vZGFsIHRvIGRpc3BsYXkgdGhlIGZvcm1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRnJvbVVSTCBleHRlbmRzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHVybCAtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0e2luY29taW5nRWxlbWVudFNlbGVjdG9yLGluc2VydEludG9FbGVtZW50LCBvbmxvYWR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zKXtcbiAgICAgICAgc3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiICkgdGhyb3cgYCR7b3B0aW9uc30gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uRm9ybUZyb21VUkxEZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRVUkwodXJsKTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcihvcHRpb25zLmluY29taW5nRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zZXRJbnNlcnRJbnRvRWxlbWVudChvcHRpb25zLmluc2VydEludG9FbGVtZW50KTtcbiAgICAgICAgdGhpcy5vbmxvYWQob3B0aW9ucy5vbmxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBwYXJlbnQgYmVjYXVzZSBpdCdzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBjbGFzc1xuICAgICAqXG4gICAgICogU3RpbGwga2VlcGluZyBpdCBmdW5jdGlvbmFsIGJ1dCByZW1vdmluZyBhbGwgdmFsaWRhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBVUkwgZnJvbSB3aGljaCB0aGUgZm9ybSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtJ3MgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJMKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIFhIUkZvcm0uZ2V0RmluYWxTdWJtaXRVUkwgdG8gaW5jbHVkZSB0aGUgVVJMIHRoZSBmb3JtIHdhcyByZXF1ZXN0ZWQgZnJvbSBhcyBhbiBhZGRpdGlvbmFsIGZhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdXJsIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybSwgb25seSBpZiBleHBsaWNpdGx5IHNldFxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggZm9ybS5hdHRyaWJ1dGVzLmFjdGlvbiApe1xuICAgICAgICAgICAgICAgIHVybCA9IGZvcm0uYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIHN0aWxsIG51bGwsIGdyYWIgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICAgICAgdXJsID0gIXVybCA/IHRoaXMuZ2V0VVJMKCkgOiB1cmw7XG5cbiAgICAgICAgLy9pZiB0aGUgdXJsIGlzIFNUSUxMIG51bGwsIGdyYWIgdGhlIGZvcm0ncyBkZWZhdWx0IGFjdGlvbiAoY3VycmVudCBwYWdlKVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIFVSTCBwcm92aWRlZCByZXR1cm5zIEhUTUwsIHRoaXMgc2VsZWN0b3Igd2lsbCBiZSB1c2VkIHRvIHB1bGwgdGhlIGZvcm0gb3V0XG4gICAgICpcbiAgICAgKiBJZiBsZWZ0IG51bGwsIGl0IHdpbGwgYXNzdW1lIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0ncyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3I6IHN0cmluZ3xudWxsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Ioc2VsZWN0b3Ipe1xuICAgICAgICBpZiggc2VsZWN0b3IgIT09IG51bGwgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yfSBpcyBub3QgYSBzdHJpbmcgb3IgbnVsbCB2YWx1ZWA7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzZWxlY3RvciBmb3IgdGhlIGZvcm0gb3IgYSBwYXJlbnQgb2YgaXQgdGhhdCB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhlIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNldCBhIHBhcmVudCBlbGVtZW50IHRoYXQgdGhlIGZvcm0gd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHVzaW5nIHRoZSBkZWZhdWx0IGluc2VydEZvcm0gbWV0aG9kXG4gICAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBsZWF2ZSB0aGlzIGFuZCBvdmVycmlkZSBpbnNlcnRGb3JtKCkgYW5kIGhhdmUgbW9yZSBjb250cm9sIG92ZXIgd2hlcmUgaXQgc2hvdWxkIGdvXG4gICAgICpcbiAgICAgKiBVc2VzIGRvbS5nZXRFbGVtZW50KCkgc28geW91IGNhbiBwYXNzIGEgc3RyaW5nLCBqUXVlcnkgb2JqZWN0LCBvYmplY3QsIGV0Y1xuICAgICAqIEhvd2V2ZXIgaWYgbW9yZSB0aGFuIDEgZWxlbWVudCBpcyBkZXRlY3RlZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc2V0SW5zZXJ0SW50b0VsZW1lbnQoZWxlbWVudCl7XG4gICAgICAgIHRoaXMuX2luc2VydEludG9FbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50b1xuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydEludG9FbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGZyb20gdGhlIFVSTCBhbmQgcGFzcyB0byBpbnNlcnRGb3JtXG4gICAgICpcbiAgICAgKiBUaGVyZSBhcmUgdGhyZWUgbWFpbiB3YXlzIHRvIHByb3ZpZGUgdGhlIGZvcm0gZnJvbSB5b3VyIHNlcnZlcjpcbiAgICAgKiAxKSBTdHJhaWdodCBIVE1MLiBUaGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtIGFuZCB0aGF0J3MgaXQuXG4gICAgICogMikgU3RyYWlnaHQgSFRNTCwgYnV0IHRoZSBmb3JtIGlzIG9ubHkgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBzbyBpdCBuZWVkcyB0byBiZSBwYXJzZWQgb3V0IGJhc2VkIG9uIGEgc2VsZWN0b3IuXG4gICAgICogMykgQSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkgXCJodG1sXCIgbGlrZSB0aGlzOiB7XCJodG1sXCI6XCI8Zm9ybT55b3VyIGZvcm0gaGVyZTwvZm9ybT5cIn1cbiAgICAgKlxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmdldFVSTCgpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcgKHByb2JhYmx5IEhUTUwpXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcm92aWRlIHRoZSBmb3JtJ3MgSFRNTCBpbiBhbiBvYmplY3QgY29udGFpbmluZyBvdGhlciBkZXRhaWxzIGxpa2UgdGhlIHJvdXRlIGFuZCB0aGUgZnVsbCByZXNwb25zZSB0byBpbnNlcnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0ocGFyc2VkLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgdGhlIGVudGlyZSByZXNwb25zZSBpcyBhc3N1bWVkIHRvIGJlIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhbiBvYmplY3QgKHByb2JhYmx5IEpTT04pXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIEhUTUwgd2FzIHByb3ZpZGVkIGluIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEuaHRtbCAhPT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlICR7ZGF0YX1gO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBpbnNlcnQgdGhlIGZvcm0gd2hlcmV2ZXIgeW91IHdhbnQgb24gdGhlIHBhZ2VcbiAgICAgKiAgT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY3VzdG9taXplIHdoZXJlIHRoZSBmb3JtIGlzIGluc2VydGVkXG4gICAgICogIChtYXliZSB5b3Ugd2FudCB0byBvcGVuIGEgbW9kYWwgZmlyc3QgYW5kIHBsYWNlIGl0IHRoZXJlPylcbiAgICAgKlxuICAgICAqICBwYXJzZWRfY29udGVudC5odG1sIHdpbGwgYWx3YXlzIGJlIHRoZSBIVE1MXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQgbWF5IGNvbnRhaW4gb3RoZXIgZGF0YSBsaWtlIHJvdXRlIGFuZCB0aXRsZSBpZiB0aGUgZm9ybSB3YXMgcHVsbGVkIG91dCBvZlxuICAgICAqICAgICBhIGZ1bGwgSFRNTCBwYWdlIHdoaWNoIGNvbnRhaW5zIHRob3NlIGl0ZW1zXG4gICAgICpcbiAgICAgKiAgcmVzcG9uc2UgaXMgdGhlIGZ1bGwgc2VydmVyIHJlc3BvbnNlIChodG1sIHN0cmluZyBvciBvYmplY3QgZnJvbSBKU09OIC0gbm90IHByb3ZpZGVkIGlmIHRoZSByZXNwb25zZSBpcyBvbmx5IHRoZSBmb3JtJ3MgSFRNTClcbiAgICAgKlxuICAgICAqICBmb3JtIGlzIHByb3ZpZGVkIGlmIHRoaXMgaXMgYWZ0ZXIgdGhlIGZvcm0gd2FzIHN1Ym1pdHRlZCBhbmQgSFRNTCB3YXMgcmV0dXJuZWQgZm9ybSB0aGUgc2VydmVyXG4gICAgICpcbiAgICAgKiAgQHBhcmFtIHBhcnNlZF9jb250ZW50XG4gICAgICogIEBwYXJhbSByZXNwb25zZVxuICAgICAqICBAcGFyYW0gZm9ybVxuICAgICAqICBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBpbnNlcnRGb3JtKHBhcnNlZF9jb250ZW50LCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIC8vc2VsZWN0b3IgZm9yIHdoZXJlIHRoZSBmb3JtIHdpbGwgZ29cbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRJbnNlcnRJbnRvRWxlbWVudCgpO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApIHRocm93ICdDYW5ub3QgZGV0ZXJtaW5lIHdoZXJlIHRvIGluc2VydCBmb3JtLiBPdmVyd3JpdGUgaW5zZXJ0Rm9ybSgpIG9yIHByb3ZpZGUgaW5zZXJ0SW50b0VsZW1lbnQnO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBjb250YWluZXIgZWxlbWVudCAtIGVycm9yIGlmIG5vdCBmb3VuZFxuICAgICAgICBlbCA9IGRvbS5nZXRFbGVtZW50KGVsLCB0cnVlKTtcblxuICAgICAgICAvL3B1dCB0aGUgZm9ybSBpbiB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gcGFyc2VkX2NvbnRlbnQuaHRtbDtcblxuICAgICAgICAvL2ZpbmQgdGhlIG5ld2x5IGFkZGVkIGZvcm1cbiAgICAgICAgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgICAvL2F0dGFjaCBhbiBvbi1zdWJtaXQgbGlzdGVuZXIgdG8gc2VuZCB0aGUgZm9ybSdzIHZhbHVlcyB2aWEgWEhSXG4gICAgICAgIHRoaXMuYXR0YWNoU3VibWl0SGFuZGxlcihmb3JtKTtcblxuICAgICAgICAvL3J1biB0aGUgb25sb2FkIGNhbGxiYWNrIG5vdyB0aGF0IHRoZSBmb3JtIGlzIHRoZXJlXG4gICAgICAgIHRoaXMudHJpZ2dlck9ubG9hZChmb3JtKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZm9ybSBpbW1lZGlhdGVseSBhZnRlciBpdCdzIGRpc3BsYXllZFxuICAgICAqXG4gICAgICogWW91J2xsIGxpa2VseSB3YW50IHRvIGF0dGFjaCBwbHVnaW5zIGZvciBkYXRlcGlja2Vycy9kcm9wZG93bnMsIG9yIG1heWJlIGhpZGUgYSBmaWVsZCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgYW5vdGhlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgb25sb2FkKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHRoaXMuX29ubG9hZC5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbmxvYWQgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBjbGVhck9ubG9hZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25sb2FkKGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX29ubG9hZC5mb3JFYWNoKGZ1bmN0aW9uKG9ubG9hZCl7XG4gICAgICAgICAgICBvbmxvYWQoZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxucmVxdWlyZSgnZm9ybWRhdGEtcG9seWZpbGwnKTtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIFhIUkZvcm0gY2xhc3NcbmNvbnN0IFhIUkZvcm1EZWZhdWx0cyA9IHtcbiAgICB4aHJTdWJtaXQ6IHRydWUsIC8vc3VibWl0IHRoZSBmb3JtIHVzaW5nIFhIUiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgIHN1Ym1pdFVSTDpudWxsLCAvL3dpbGwgYmUgZ3JhYmJlZCBmcm9tIHRoZSBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZSwgb3IgZmFsbGJhY2sgdG8gdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICBzdWJtaXRNZXRob2Q6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXsgYWxlcnQoZXJyb3IpOyB9LCAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBhbmQgZmFpbHNcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBmb3JtKXsgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIGlmKHR5cGVvZiByZXNwb25zZS5zdWNjZXNzID09PSBcInN0cmluZ1wiKXsgYWxlcnQocmVzcG9uc2Uuc3VjY2Vzcyk7IH1cbiAgICAgICAgZWxzZXsgYWxlcnQoXCJZb3VyIHN1Ym1pc3Npb24gaGFzIGJlZW4gcmVjZWl2ZWRcIik7IH1cbiAgICB9LFxuICAgIC8vdmFsaWRhdGUgdGhlIGZvcm0sIGRpc3BsYXkgYW55IGVycm9ycyBhbmQgcmV0dXJuIGZhbHNlIHRvIGJsb2NrIHN1Ym1pc3Npb25cbiAgICB2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKGZvcm0pe1xuICAgICAgICAvL2FkZCAud2FzLXZhbGlkYXRlZCBmb3IgYm9vdHN0cmFwIHRvIHNob3cgZXJyb3JzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIGFueSA6aW52YWxpZCBlbGVtZW50cywgdGhlIGZvcm0gaXMgbm90IHZhbGlkXG4gICAgICAgIGNvbnN0IGlzX3ZhbGlkID0gIWZvcm0ucXVlcnlTZWxlY3RvcignOmludmFsaWQnKTtcblxuICAgICAgICAvL2lmIGl0J3MgdmFsaWQsIGNsZWFyIHRoZSB2YWxpZGF0aW9uIGluZGljYXRvcnNcbiAgICAgICAgaWYoIGlzX3ZhbGlkICkgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cbn07XG5cbi8qKlxuICogWEhSRm9ybVxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBzdWJtaXQgYSBmb3JtIHZpYSBYSFIgYW5kIGVhc2lseSBoYW5kbGUgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogRm9ybSBjYW4gYmUganVzdCBhYm91dCBhbnkgZGF0YXR5cGUgLSB1c2VzIGRvbS5nZXRFbGVtZW50KClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zKXtcblxuICAgICAgICAvL2lmIG9wdGlvbnMgYXJlIHVuZGVmaW5lZCwgc2V0IHRoZW1cbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBvcHRpb25zO1xuICAgICAgICBpZiggdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgKSB0aHJvdyBgJHtvcHRpb25zfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2V4dGVuZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5YSFJGb3JtRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0ZUNhbGxiYWNrKG9wdGlvbnMudmFsaWRhdGVGb3JtKTtcbiAgICAgICAgdGhpcy5zZXRYSFJTdWJtaXQob3B0aW9ucy54aHJTdWJtaXQpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdE1ldGhvZChvcHRpb25zLnN1Ym1pdE1ldGhvZCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0VVJMKG9wdGlvbnMuc3VibWl0VVJMKTtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3Mob3B0aW9ucy5vblN1Y2Nlc3MpO1xuICAgICAgICB0aGlzLm9uRXJyb3Iob3B0aW9ucy5vbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldFZhbGlkYXRlQ2FsbGJhY2soY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIHZhbGlkYXRlIGNhbGxiYWNrIGFuZCBwYXNzZXMgdGhlIGZvcm1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHZhbGlkYXRlKGZvcm0pe1xuICAgICAgICBpZiggdHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIgKSBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrKGZvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldEZvcm0oZm9ybSl7XG4gICAgICAgIGlmKCAhZm9ybSB8fCB0eXBlb2YgZm9ybSA9PT0gJ3VuZGVmaW5lZCcgKSB0aHJvdyBgRm9ybSBlbGVtZW50IGlzIHJlcXVpcmVkYDtcblxuICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGlmKCAhZm9ybSApIHRocm93IGBJbnZhbGlkIGZvcm0gZWxlbWVudCByZWNlaXZlZGA7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfEVsZW1lbnR8SFRNTERvY3VtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgeW91IHdhbnQgdGhlIGZvcm0gdG8gYmUgc3VibWl0dGVkIHVzaW5nIGFuIFhIUiByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAtIGJvb2xcbiAgICAgKi9cbiAgICBzZXRYSFJTdWJtaXQoZW5hYmxlZCl7XG4gICAgICAgIHRoaXMuX3hoclN1Ym1pdCA9ICEhZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG93IHRvIHN1Ym1pdCB0aGUgZm9ybSAtIGlmIHNldCB0byBudWxsLCB0aGUgbWV0aG9kIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIGZvcm0nc1xuICAgICAqICBtZXRob2QgYXR0cmlidXRlIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0TWV0aG9kKG1ldGhvZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiICYmIG1ldGhvZCAhPT0gbnVsbCApIHRocm93IGAke21ldGhvZH0gaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9zdWJtaXRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZvcm0gc3VibWlzc2lvbiBtZXRob2QgKFBPU1QsIEdFVCwgZXRjKVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdE1ldGhvZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0TWV0aG9kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgdG8gc3VibWl0IHRoZSBmb3JtIHRvXG4gICAgICpcbiAgICAgKiBJZiBudWxsLCB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFVzZSBhIGZ1bmN0aW9uIGlmIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHRoZSBVUkwganVzdCBwcmlvciB0byB0aGUgcmVxdWVzdFxuICAgICAqICAtIHRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdGhlIGZvcm0gYXMgYSBwYXJhbVxuICAgICAqIEdlbmVyYWxseSBzcGVha2luZyBhIHN0cmluZyBpcyBzdWZmaWNpZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0VVJMKHVybCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAmJiB0eXBlb2YgdXJsICE9PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICYmIHVybCAhPT0gbnVsbCApIHRocm93IGAke3VybH0gaXMgbm90IGEgc3RyaW5nLCBmdW5jdGlvbiwgb3IgbnVsbGA7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0VVJMID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBVUkwgdGhlIGZvcm0gd2lsbCBiZSBzdWJtaXR0ZWQgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ3wqfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0VVJMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFjdHVhbCBzdWJtaXQgVVJMIGFmdGVyIHJ1bm5pbmcgdGhlIGZ1bmN0aW9uIChpZiBpdCBpcyBvbmUpLCBhbmQgdHVybmluZyB0byBmYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZpbmFsU3VibWl0VVJMKGZvcm0pe1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRTdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiBhIGZ1bmN0aW9uLCBydW4gaXRcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9zdWJtaXRVUkwgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiB0aGlzLl9zdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBvbiBzdWJtaXQgaGFuZGxlciAob25seSBpZiB4aHJTdWJtaXQgaXMgdHJ1ZSlcbiAgICAgKlxuICAgICAqIFBhc3MgdGhlIGZvcm0gb3IgZm9ybSBzZWxlY3RvclxuICAgICAqL1xuICAgIGF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSl7XG4gICAgICAgIGlmKCAhdGhpcy5feGhyU3VibWl0ICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgbm90IHBhc3NlZCwgZ2V0IGl0IGZyb20gdGhpcyBvYmplY3RcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgRm9ybSBlbGVtZW50IG5vdCByZWNlaXZlZCwgY2Fubm90IGF0dGFjaCBzdWJtaXQgaGFuZGxlcmA7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vaWYgeGhyIHN1Ym1pdCBpcyBkaXNhYmxlZCwgZG9uJ3QgYmxvY2sgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBpZiggIXNlbGYuX3hoclN1Ym1pdCApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5zdWJtaXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBZb3VyIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSAyIHBhcmFtcywgdGhlIGZpcnN0IGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGZvcm0gb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHRoaXMuX29uU3VjY2Vzcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICovXG4gICAgY2xlYXJPblN1Y2Nlc3NDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGFsbCBvblN1Y2Nlc3MgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIHRyaWdnZXJPblN1Y2Nlc3MocmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuZm9yRWFjaChmdW5jdGlvbihvblN1Y2Nlc3Mpe1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IGlzIG5vdCBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICB0aGlzLl9vbkVycm9yLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9uRXJyb3IgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBjbGVhck9uRXJyb3JDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgb25FcnJvciBjYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgdHJpZ2dlck9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uRXJyb3IgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uRXJyb3IuZm9yRWFjaChmdW5jdGlvbihvbkVycm9yKXtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhlIGZvcm0gdXNpbmcgWEhSXG4gICAgICpcbiAgICAgKiAxKSBEZXRlcm1pbmVzIHRoZSBVUkxcbiAgICAgKiAyKSBEZXRlcm1pbmVzIHRoZSBtZXRob2QgKEdFVCwgUE9TVCwgUEFUQ0gsIGV0YylcbiAgICAgKiAzKSBEZXRlcm1pbmVzIGlmIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAgICogNCkgR2V0cyB0aGUgZm9ybSdzIHZhbHVlc1xuICAgICAqIDUpIFN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgKiA2KSBSZXBsYWNlcyB0aGUgZm9ybSwgcnVucyBvbkVycm9yLCBvciBydW5zIG9uU3VjY2VzcyBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgKHNlZSBuZXh0IGxpbmUpXG4gICAgICogIFJlc3BvbnNlIFR5cGUgPSBBY3Rpb24gVGFrZW5cbiAgICAgKiAgICBzdHJpbmcgaHRtbCB3aXRoIGZvcm0gaW5zaWRlID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciBzZXQsIGJ1dCBub3QgZm91bmQgPSBraWNrb2ZmIG9uRXJyb3JcbiAgICAgKiAgICBzdHJpbmcgLSByZXBsYWNlIGZvcm0gb24gcGFnZSB3aXRoIGVudGlyZSByZXNwb25zZVxuICAgICAqICAgIG9iamVjdC5odG1sID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgb2JqZWN0LmVycm9yID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgb2JqZWN0IGluIGdlbmVyYWwgPSBraWNrb2ZmIG9uU3VjY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7Zm9ybXxib29sZWFufVxuICAgICAqL1xuICAgIHN1Ym1pdEZvcm0oZm9ybSkge1xuICAgICAgICAvL2Jsb2NrIG11bHRpcGxlIGZvcm0gc3VibWlzc2lvbnMgYXQgdGhlIHNhbWUgdGltZSB1bnRpbCB0aGlzIG9uZSBpcyBjb21wbGV0ZVxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3Byb2Nlc3NpbmcgPT09IFwidW5kZWZpbmVkXCIgKSB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgIGlmKCB0aGlzLl9wcm9jZXNzaW5nICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSB0cnVlO1xuXG4gICAgICAgIC8vY2FjaGUgZm9yIHVzZSBpbnNpZGUgb3RoZXIgc2NvcGVzXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBwcm92aWRlZCBzdWJtaXQgVVJMXG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldEZpbmFsU3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBwcm92aWRlZCBzdWJtaXQgbWV0aG9kXG4gICAgICAgIGxldCBtZXRob2QgPSB0aGlzLmdldFN1Ym1pdE1ldGhvZCgpO1xuICAgICAgICAvL2lmIGl0J3MgbnVsbCwgZ3JhYiBpdCBmcm9tIHRoZSBmb3JtXG4gICAgICAgIGlmKCBtZXRob2QgPT09IG51bGwgKXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZm9ybS5hdHRyaWJ1dGVzLm1ldGhvZCAhPT0gJ3VuZGVmaW5lZCcgKXsgLy9jaGVjayB0aGF0IGl0IHdhcyBzZXQgZXhwbGljaXRseVxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IGZvcm0ubWV0aG9kOyAvL2dyYWIgSlVTVCB0aGUgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2RlZmF1bHQgdG8gcG9zdCBpZiB3ZSBzdGlsbCBkb24ndCBoYXZlIGEgbWV0aG9kIGFuZCBsb3dlcmNhc2UgYW55dGhpbmcgdGhhdCB3YXMgcHJvdmlkZWRcbiAgICAgICAgbWV0aG9kID0gIW1ldGhvZCA/ICdwb3N0JyA6IG1ldGhvZC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vaWYgbm90IHZhbGlkLCBzdG9wIGhlcmUgdW50aWwgdGhleSByZXN1Ym1pdFxuICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGUoZm9ybSkpe1xuICAgICAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgLy9nZXQgZm9ybSB2YWx1ZXNcbiAgICAgICAgY29uc3QgZm9ybV92YWx1ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy5nZXRGb3JtVmFsdWVzKGZvcm0pLFxuICAgICAgICAgICAgZSA9PiBlLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKVxuICAgICAgICApLmpvaW4oJyYnKTtcblxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZm9ybV92YWx1ZXMsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAvL2p1c3QgaW4gY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIHRoZSB3cm9uZyByZXNwb25zZSB0eXBlIGFuZCBpdCdzIGFjdHVhbGx5IEpTT04gLSBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB0cnl7IGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTsgfSBjYXRjaChlKXsgfVxuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhIHN0cmluZywgaXQncyBwcm9iYWJseS9ob3BlZnVsbHkgdGhlIGZvcm0gd2l0aCBpbmxpbmUgZXJyb3JzXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgLy9pZiB3ZSBhcmUgbG9va2luZyBmb3IgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgZm9ybSB3YXMgbm90IGZvdW5kIGluIGl0LCBsZXQncyBhc3N1bWUgaXQgZG9lc24ndCBjb250YWluIHRoZSBmb3JtLiBJZiBub3QsIHRoZW4gbWF5YmVcbiAgICAgICAgICAgICAgICAgICAgaWYoICFwYXJzZWQuaHRtbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGAke3NlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKX0gY291bGQgbm90IGJlIGZvdW5kIGluIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcmAsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vcHJvdmlkZSB0aGUgZm9ybSdzIEhUTUwgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb3RoZXIgZGV0YWlscyBsaWtlIHRoZSByb3V0ZSBhbmQgdGhlIGZ1bGwgcmVzcG9uc2UgdG8gaW5zZXJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHBhcnNlZCwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YX0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IEpTT05cbiAgICAgICAgICAgIGVsc2UgaWYoIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyApe1xuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgdGhlIEhUTUwsIGp1c3QgcG9wIGl0IGJhY2sgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5odG1sICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YS5odG1sfSwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyBhbiBlcnJvciBtZXNzYWdlLCB0cmlnZ2VyIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGlmKCBkYXRhLmVycm9yICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGRhdGEuZXJyb3IsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgZG9lc24ndCBBUFBFQVIgdG8gYmUgdGhlIGZvcm0gYWdhaW4sIG9yIGFuIGVycm9yLCBsZXQncyBjYWxsIGl0IGEgc3VjY2Vzc1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPblN1Y2Nlc3MoZGF0YSwgZm9ybSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZm9ybSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkXG4gICAgICpcbiAgICAgKiBPdmVycmlkZS9leHRlbmQgdGhpcyBpZiB5b3Ugd2FudCB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIHByaW9yIHRvIHN1Ym1pc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhXG4gICAgICovXG4gICAgZ2V0Rm9ybVZhbHVlcyhmb3JtKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICB9XG59IiwiaW1wb3J0IHtYSFJGb3JtfSBmcm9tIFwiLi9YSFJGb3JtXCI7XG5pbXBvcnQge0Zvcm1Gcm9tVVJMfSBmcm9tIFwiLi9Gb3JtRnJvbVVSTFwiO1xuXG5leHBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vcmVxdWVzdFwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9ldmVudHNcIjtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIHNpbXVsYXRlIGEgcGFnZSBjaGFuZ2UgYnkgdXNpbmcgYW4gWEhSIHJlcXVlc3QgdG8gZ3JhYiBjb250ZW50IGFuZCByZXBsYWNlIGl0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIGJyb3dzZXIncyBoaXN0b3J5LCBzd2FwcyBvdXQgbWV0YSB0YWdzLCB1cGRhdGVzIHRoZSB0aXRsZSwgYW5kIG1vcmVcbiAqXG4gKiBVc2Ugb25Mb2FkIGFuZCBvblVubG9hZCBob29rcyB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBmb3IgdGhpbmdzIGxpa2UgdHJpZ2dlcmluZyBhIGdvb2dsZSBhbmFseXRpY3MgcGFnZSB2aWV3XG4gKiAgb3Igc2Nyb2xsaW5nIHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gKi9cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uID0ge1xuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG9ubG9hZCBjYWxsYmFjayBhZnRlciBuYXZpZ2F0aW5nIHRvIGFub3RoZXIgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICovXG4gICAgX3Bhc3N0aHJvdWdoRGF0YTogbnVsbCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgZGF0YSB0byBiZSBwcm92aWRlZCB0byB0aGUgbmV4dCBwYWdlXG4gICAgICogIHRoaXMgZGF0YSBwZXJzaXN0cyB1bnRpbCBjbGVhcmVkIG1hbnVhbGx5IGFuZCB3aWxsIGJlIHByb3ZpZGVkIHRvIEFMTCBzdWJzZXF1ZW50IG9uTG9hZCBoYW5kbGVyc1xuICAgICAqICAgKG9yIGl0IGNhbiBiZSBncmFiYmVkIG1hbnVhbGx5IGZyb20gdGhpcyBvYmplY3QgYXQgYW55IHRpbWUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldFBhc3N0aHJvdWdoRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdGhpcy5fcGFzc3Rocm91Z2hEYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBkYXRhIHByb3ZpZGVkIGZvciB0aGUgbmV4dCBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBjbGVhclBhc3N0aHJvdWdoRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldFBhc3N0aHJvdWdoRGF0YShudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW55IGRhdGEgdGhhdCBoYXMgYmVlbiBzZXQgZm9yIHBhc3NpbmcgdG8gc3Vic2VxdWVudCBwYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXNzVGhyb3VnaERhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYXNzdGhyb3VnaERhdGE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqL1xuICAgIF9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcl9zdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aWxsIGJlIHJlcGxhY2VkIHdpdGggaW5jb21pbmcgSFRNTFxuICAgICAqL1xuICAgIF9yZXBsYWNlRWxlbWVudFNlbGVjdG9yOiAnYm9keScsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggaW5jb21pbmcgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RvcnMgc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdyYWJzIEhUTUwgZnJvbSBhIFVSTCBhbmQgcmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiAxKSBTaG93cyBhIGxvYWRlciAoaWYgZW5hYmxlZClcbiAgICAgKiAyKSBSZXF1ZXN0cyBjb250ZW50IGZyb20gdGhlIHByb3ZpZGVkIFVSTFxuICAgICAqIDMpIFJlcGxhY2VzIGl0IG9uIHRoZSBwYWdlIChhbmQgYWxsIHRoZSBtYWdpYyByZXBsYWNlUGFnZUNvbnRlbnQgZG9lcywgc2VlIGNvbW1lbnRzIG9uIHRoYXQgbWV0aG9kIGJlbG93KVxuICAgICAqIDQpIElmIHRoZXJlJ3MgYSBjYWxsYmFjayBwcm92aWRlZCwgaXQnbGwgYmUgcnVuIGFmdGVyd2FyZHMgKGl0IHJlY2VpdmVzIHRoZSBuZXdseSByZXBsYWNlZCBlbGVtZW50IGFzIGEgcGFyYW0pXG4gICAgICpcbiAgICAgKiBPbiBlcnJvciwgaXQgdHJpZ2dlcnMgYSBuYXZpZ2F0aW9uIGZhaWx1cmUgYW5kIHByb3ZpZGVzIHRoZSBlcnJvciBtZXNzYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSkge1xuICAgICAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCBVUkwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCBpbmNvbWluZ19lbCAoJHtpbmNvbWluZ19lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZV9lbCAhPT0gJ3N0cmluZycpIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgbmF2aWdhdGlvbi5yZXBsYWNlUGFnZUNvbnRlbnQocmVzcG9uc2UuZGF0YSwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSk7XG5cbiAgICAgICAgICAgIC8vaWYgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHJ1biBpdCBhbmQgcHJvdmlkZSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvL3dhaXQgZm9yIHRoZSBvbnVubG9hZCBjYWxsYmFja3MgdG8gcnVuIGFuZCB0aGUgbmV3IGNvbnRlbnQgdG8gYmUgcHV0IG9uIHRoZSBwYWdlIGZpcnN0XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgaW5jb21pbmdfZWwsIG5hdmlnYXRpb24uZ2V0UGFzc1Rocm91Z2hEYXRhKCkpO1xuICAgICAgICAgICAgICAgIH0sIDEwNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChheGlvc19lcnJvcikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJOYXZpZ2F0aW9uRmFpbHVyZShheGlvc19lcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0LCBheGlvc19lcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBheGlvc19lcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0O1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICBfbG9hZGVyRGVsYXk6IDMwMCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24gKGRlbGF5X2luX21zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsYXlfaW5fbXMgIT09IFwibnVtYmVyXCIpIHRocm93IGAke2RlbGF5X2luX21zfSBpcyBub3QgYW4gaW50ZWdlcmA7XG4gICAgICAgIHRoaXMuX2xvYWRlckRlbGF5ID0gZGVsYXlfaW5fbXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGhvdyBsb25nIHRvIGRlbGF5IGR1cmluZyBhIHNsb3cgcmVxdWVzdCBiZWZvcmUgc2hvd2luZyB0aGUgbG9hZGVyIChpbiBtaWxsaXNlY29uZHMpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGdldExvYWRlckRlbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJEZWxheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3NlcyBmb3IgdGhlIGxvYWRlclxuICAgICAqIERlZmF1bHRzIGFyZSBmb3IgYm9vdHN0cmFwICh3aXRoIHRoZSBleGNlcHRpb24gb2YgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcilcbiAgICAgKi9cbiAgICBfbG9hZGVyQ2xhc3NlczogJ3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIF9sb2FkZXJJbm5lckRpdkNsYXNzZXM6ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyxcblxuICAgIC8qKlxuICAgICAqIElmIGVuYWJsZWQsIGFkZHMgYSBsb2FkZXIgdG8gdGhlIHBhZ2UgYW5kIGNhY2hlcyBhIHJlZmVyZW5jZSB0byBpdCwgdGhlbiByZXR1cm5zIHRoYXQgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlckVuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkKSByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG5cbiAgICAgICAgLy9wcmVwZW5kIHRoZSBsb2FkZXIgZWxlbWVudHNcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVyQ2xhc3NlcztcbiAgICAgICAgbGV0IGlubmVyX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcl9kaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuICAgICAgICBkaXYuYXBwZW5kKGlubmVyX2Rpdik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBjYWNoZSBhIHJlZmVyZW5jZSB0byBpdCBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkID0gZG9tLmdldEVsZW1lbnQoJy5wYWdlLW5hdmlnYXRpb24tbG9hZGVyJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIG5hdmlnYXRpb24ubG9hZGVyX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmdldExvYWRlckVsKCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIHRoaXMuZ2V0TG9hZGVyRGVsYXkoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGhpZGVMb2FkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxvYWRlckVuYWJsZWQpIHJldHVybjtcblxuICAgICAgICAvL2lmIHRoZSBsb2FkZXIgc3RpbGwgaGFzbid0IHNob3duIHlldCwgcHJldmVudCBpdCBiZWNhdXNlIHRoZSByZXF1ZXN0IHdhcyB2ZXJ5IGZhc3RcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChuYXZpZ2F0aW9uLmxvYWRlcl90aW1lb3V0KTtcblxuICAgICAgICAvL2hpZGUgdGhlIGxvYWRlclxuICAgICAgICBuYXZpZ2F0aW9uLmdldExvYWRlckVsKCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCB0byBncmFiIGtleSBjb21wb25lbnRzIGxpa2UgbWV0YSB0YWdzIGFuZCB0aGUgaW5uZXIgY29udGVudCBvZiB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgKlxuICAgICAqIElmIG5vIHBhcmVudCBlbGVtZW50IGlzIHByb3ZpZGVkLCBpdCB3aWxsIGp1c3QgcmV0dXJuIHRoZSBwcm92aWRlZCBodG1sXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEBwYXJhbSBwYXJlbnRfZWxcbiAgICAgKiBAcmV0dXJucyB7e21ldGFzOiBIVE1MQ29sbGVjdGlvbk9mPEhUTUxFbGVtZW50VGFnTmFtZU1hcFtzdHJpbmddPiwgcm91dGU6ICgqfGFueXxFbGVtZW50KSwgbGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCBodG1sOiBzdHJpbmcsIHRpdGxlOiBzdHJpbmcsIGJvZHlfY2xhc3NlczogRE9NVG9rZW5MaXN0fX1cbiAgICAgKi9cbiAgICBwYXJzZUhUTUwoaHRtbCwgcGFyZW50X2VsKSB7XG4gICAgICAgIC8vZGVmYXVsdCB0byBudWxsIGlmIG5vdCBwcm92aWRlZFxuICAgICAgICBwYXJlbnRfZWwgPSB0eXBlb2YgcGFyZW50X2VsID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiBwYXJlbnRfZWw7XG5cbiAgICAgICAgLy9tdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJlbnRfZWwgIT09ICdzdHJpbmcnICYmIHBhcmVudF9lbCAhPT0gbnVsbCkgdGhyb3cgYFByb3ZpZGVkIHBhcmVudF9lbCAoJHtwYXJlbnRfZWx9KSBpcyBub3QgYSBzdHJpbmcgb3IgbnVsbGA7XG5cbiAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgZG9tXG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIHZhciBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIC8vZ2V0IHBhZ2UgdGl0bGVcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlID0gdGl0bGUgPyB0aXRsZS5pbm5lclRleHQgOiBudWxsO1xuXG4gICAgICAgIC8vZ2V0IGFueSBtZXRhIHRhZ3NcbiAgICAgICAgdmFyIG1ldGFzID0gZG9jLmhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKTtcbiAgICAgICAgLy9nZXQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgIHZhciBsaW5rcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAvL2dldCBib2R5IGNsYXNzZXNcbiAgICAgICAgdmFyIGJvZHlfY2xhc3NlcyA9IGRvYy5ib2R5LmNsYXNzTGlzdDtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgdmFyIG5ld19odG1sID0gaHRtbDtcblxuICAgICAgICAvL2lmIGEgcGFyZW50IGVsZW1lbnQgd2FzIHByb3ZpZGVkLCBmaW5kIGl0XG4gICAgICAgIGlmIChwYXJlbnRfZWwpIHtcbiAgICAgICAgICAgIHZhciBzZWwgPSBkb2MucXVlcnlTZWxlY3RvcihwYXJlbnRfZWwpO1xuICAgICAgICAgICAgLy9pZiBjb3VsZG4ndCBmaW5kIHRoZSBlbGVtZW50XG4gICAgICAgICAgICBpZiAoIXNlbCkge1xuICAgICAgICAgICAgICAgIHRocm93IGBDb3VsZCBub3QgZmluZCBwYXJlbnQgc2VsZWN0b3IgJHtwYXJlbnRfZWx9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZ3JhYiB0aGUgb3V0ZXJIVE1MXG4gICAgICAgICAgICBuZXdfaHRtbCA9IHNlbC5vdXRlckhUTUw7XG4gICAgICAgIH1cblxuICAgICAgICAvL2dldCB0aGUgbmV3IHBhZ2UncyByb3V0ZSBmcm9tIHRoZSBtZXRhIHRhZyAoaWYgaXQgZXhpc3RzKVxuICAgICAgICB2YXIgcm91dGUgPSBuYXZpZ2F0aW9uLmdldFJvdXRlRnJvbU1ldGEoZG9jKTtcblxuICAgICAgICAvLyBHYXJiYWdlIGNvbGxlY3Rpb24sIHlvdSBkb24ndCBuZWVkIHRoaXMgYW55bW9yZS5cbiAgICAgICAgcGFyc2VyID0gZG9jID0gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgbWV0YXM6IG1ldGFzLFxuICAgICAgICAgICAgbGlua3M6IGxpbmtzLFxuICAgICAgICAgICAgYm9keV9jbGFzc2VzOiBib2R5X2NsYXNzZXMsXG4gICAgICAgICAgICBodG1sOiBuZXdfaHRtbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnLCBpZiBpdCBleGlzdHNcbiAgICAgKlxuICAgICAqIElmIHlvdSBkb24ndCBwcm92aWRlIEhUTUwsIGl0J2xsIGdyYWIgaXQgZnJvbSB0aGUgY3VycmVudCBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge2FueSB8IEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0Um91dGVGcm9tTWV0YTogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgaHRtbCA9IHR5cGVvZiBodG1sID09PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50LmhlYWQgOiBodG1sO1xuICAgICAgICB2YXIgcm91dGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY3VycmVudF9yb3V0ZVwiXScpO1xuICAgICAgICByb3V0ZSA9IHJvdXRlID8gcm91dGUuY29udGVudCA6IG51bGw7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpdGggbmV3IEhUTUxcbiAgICAgKlxuICAgICAqIDEpIFRyaWdnZXJzIHVubG9hZCgpXG4gICAgICogMikgV2FpdHMgMTAwbXNcbiAgICAgKiAzKSBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50c1xuICAgICAqIDQpIFJlcGxhY2VzIGFsbCBtZXRhIHRhZ3MgKGltcG9ydGFudCBmb3Igc29jaWFsIG1lZGlhIHNoYXJpbmcgYW1vbmcgb3RoZXIgdGhpbmdzKVxuICAgICAqIDUpIFJlcGxhY2VzIHRoZSBjYW5vbmljYWwgdGFnXG4gICAgICogNikgUmVwbGFjZXMgYW55IGNsYXNzZXMgb24gdGhlIGJvZHkgc2luY2UgdGhleSBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gaW5kaWNhdGUgd2hpY2ggcGFnZSB5b3UncmUgb25cbiAgICAgKiA3KSBQdXNoZXMgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICogOCkgU2V0cyB0aGUgcGFnZSB0aXRsZVxuICAgICAqIDkpIFJlcGxhY2VzIGNvbnRlbnQgaW4gdGhlIERPTVxuICAgICAqIDEwKSBUcmlnZ2VycyBvbmxvYWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqL1xuICAgIHJlcGxhY2VQYWdlQ29udGVudChodG1sLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFpbmNvbWluZ19lbCA/IHRoaXMuZ2V0SW5jb21pbmdFbGVtZW50KCkgOiBpbmNvbWluZ19lbDtcbiAgICAgICAgcmVwbGFjZV9lbCA9IHR5cGVvZiByZXBsYWNlX2VsID09PSAndW5kZWZpbmVkJyB8fCAhcmVwbGFjZV9lbCA/IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKSA6IHJlcGxhY2VfZWw7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmICh0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgcmVwbGFjZV9lbCAoJHtyZXBsYWNlX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICAvL3RyaWdnZXIgbmF2IGNvbXBsZXRlIGV2ZW50XG4gICAgICAgIC8vZ2V0IHJlcGxhY2VfZWwgYWdhaW4gYmVjYXVzZSBpdCB3YXMgcmVwbGFjZWRcbiAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyVW5sb2FkKGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWwpLCByZXBsYWNlX2VsLCB0aGlzLmdldFJvdXRlRnJvbU1ldGEoKSk7XG5cbiAgICAgICAgLy92ZXJ5IHNsaWdodCAxMDBtcyBkZWxheSB0byBsZXQgdGhlIG9uIHVubG9hZCBoYW5kbGVycyBydW4gZmlyc3RcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsKTtcblxuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgaWYgKHBhcnNlZC5odG1sLmxlbmd0aCkge1xuXG4gICAgICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG1ldGEgdGFncyBhbmQgcmVwbGFjZSBmcm9tIG5ldyBwYWdlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnbWV0YScpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKHBhcnNlZC5tZXRhcyk7XG5cbiAgICAgICAgICAgICAgICAvL2FkZCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgICAgICAgICAvLyAtIHBvc3NpYmx5IG90aGVyIHRhZ3Mgd2lsbCBuZWVkIHRvIGJlIHdoaXRlbGlzdGVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAgICAgLy8gLSB0aGUgbWFpbiBjb25jZXJuIGlzIG5vdCBwdXR0aW5nIEpTL0NTUyBpbnRvIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCBzaG91bGRuJ3QgYmVcbiAgICAgICAgICAgICAgICBkb20ucmVtb3ZlKCdbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJzZWQubGlua3MpLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobGluayk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvL2FkZCBib2R5IGNsYXNzZXNcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCA9IHBhcnNlZC5ib2R5X2NsYXNzZXM7XG5cbiAgICAgICAgICAgICAgICAvL3B1c2ggdGhlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAgICAgICAgICAgIHB1c2hfc3RhdGUgJiYgaGlzdG9yeS5wdXNoU3RhdGUoe3VybDogdXJsfSwgcGFyc2VkLnRpdGxlLCB1cmwpO1xuXG4gICAgICAgICAgICAgICAgLy91cGRhdGUgdGhlIHRhYi9wYWdlIHRpdGxlXG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5zZXRUaXRsZShwYXJzZWQudGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgLy9yZXBsYWNlIGNvbnRlbnQgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdfY29udGVudCA9IGRvbS5yZXBsYWNlRWxXaXRoSFRNTChyZXBsYWNlX2VsLCBwYXJzZWQuaHRtbCk7XG5cbiAgICAgICAgICAgICAgICAvL3RyaWdnZXIgbmF2IGNvbXBsZXRlIGV2ZW50XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyT25Mb2FkKG5ld19jb250ZW50LCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcGFyc2VkLnJvdXRlKTtcblxuICAgICAgICAgICAgICAgIC8vaWYgdGhlIHJlcGxhY2VfZWwgaXMgdGhlIHNhbWUgYXMgZ2V0UmVwbGFjZUVsZW1lbnQoKSxcbiAgICAgICAgICAgICAgICAvLyB0aGVuIGl0IHNob3VsZCBiZSB1cGRhdGVkIHRvIHdoYXRldmVyIHRoZSBpbmNvbWluZ19lbCBpcyBiZWNhdXNlIGl0IG5vIGxvbmdlciBleGlzdHNcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5nZXRSZXBsYWNlRWxlbWVudCgpICE9PSByZXBsYWNlX2VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2V0UmVwbGFjZUVsZW1lbnQoaW5jb21pbmdfZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjdXJyZW50IHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgcmVsb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbmRzIHRoZSB1c2VyIHRvIGEgbmV3IHBhZ2Ugd2l0aG91dCBYSFJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRpdGxlIG9mIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRUaXRsZTogZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IHBhZ2UgbG9hZHMsIHlvdSBwcm9iYWJseSB3YW50IHRvIGtpY2tvZmYgc29tZSBwYWdlLXNwZWNpZmljIEpTLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIHJlY2VpdmVzIHRoZSBldmVudC5cbiAgICAgKiBUaGUgZXZlbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIFwiZGV0YWlsXCIgd2hpY2ggd2lsbCBjb250YWluOlxuICAgICAqICAxKSBUaGUgcmVwbGFjZV9lbCAodGhlIGVsZW1lbnQgd2hvJ3MgY29udGVudCB3YXMgc3dhcHBlZCBvdXQpXG4gICAgICogIDIpIFRoZSByb3V0ZSAoeW91IGNhbiBkZWZpbmUgdGhpcyBpbiBhIG1ldGEgdGFnIGNhbGxlZCBcImN1cnJlbnRfcm91dGVcIiB3aGljaCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ3JhYmJlZCBhbmQgcGFzc2VkIGFsb25nKVxuICAgICAqICAzKSBBbnkgZGF0YSB5b3Ugc2V0IHVzaW5nIC5zZXRQYXNzdGhyb3VnaERhdGEoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uY29tcGxldGUnLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGxlYXZpbmcgYSBwYWdlIHlvdSBtaWdodCBuZWVkIHRvIGRlc3Ryb3kgc29tZSBwbHVnaW5zIG9yIHNvbWV0aGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBldmVudHMub24oJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgbmV3IHBhZ2UgZmFpbHMgdG8gbG9hZCwgeW91IHNob3VsZCBwcm9iYWJseSB0ZWxsIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBvbk5hdmlnYXRpb25GYWlsdXJlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVwbGFjZWRfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyT25Mb2FkOiBmdW5jdGlvbiAoZWwsIGVsX3NlbGVjdG9yLCByZXBsYWNlZF9zZWxlY3Rvciwgcm91dGUpIHtcbiAgICAgICAgcm91dGUgPSB0eXBlb2Ygcm91dGUgIT09ICd1bmRlZmluZWQnID8gcm91dGUgOiBuYXZpZ2F0aW9uLmdldFJvdXRlRnJvbU1ldGEoKTtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5jb21wbGV0ZScsIHtcbiAgICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICAgIGVsX3NlbGVjdG9yOiBlbF9zZWxlY3RvcixcbiAgICAgICAgICAgIHJlcGxhY2VkX3NlbGVjdG9yOiByZXBsYWNlZF9zZWxlY3RvcixcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZ2V0UGFzc1Rocm91Z2hEYXRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGxlYXZpbmcgdGhlIGxhc3QgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyVW5sb2FkOiBmdW5jdGlvbiAoZWwsIGVsX3NlbGVjdG9yLCByb3V0ZSkge1xuICAgICAgICBldmVudHMudHJpZ2dlcignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCB7ZWw6IGVsLCBlbF9zZWxlY3RvcjogZWxfc2VsZWN0b3IsIHJvdXRlOiByb3V0ZX0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiBmYWlsZWQsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICogQHBhcmFtIGF4aW9zX2Vycm9yXG4gICAgICovXG4gICAgdHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlOiBmdW5jdGlvbiAoZXJyb3IsIGF4aW9zX2Vycm9yKSB7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywge2Vycm9yOiBlcnJvciwgYXhpb3NfZXJyb3I6IGF4aW9zX2Vycm9yfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byB0cmFjayB0aGUgYnJvd3NlcidzIGhpc3RvcnkgYnV0dG9ucyAoYmFjay9mb3J3YXJkKVxuICAgICAqXG4gICAgICogQHRvZG86IEludmVzdGlnYXRlIHBvc3NpYmxlIGlzc3VlIHdpdGggY2hyb21lIGNhY2hpbmcgYmFjayBidXR0b24gY29udGVudHMgYW5kIG5vdCBsb2FkaW5nIHRoZSBlbnRpcmUgcGFnZVxuICAgICAqL1xuICAgIGluaXRIaXN0b3J5SGFuZGxlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy9mb3J3YXJkIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wdXNoc3RhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vYmFjayBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCksIG51bGwsIG51bGwsIG51bGwsIGZhbHNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufTsiLCJyZXF1aXJlKCd1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbCcpO1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gZ2V0IGRldGFpbHMgYWJvdXQgdGhlIGN1cnJlbnQgcmVxdWVzdCBlYXNpbHksIGluY2x1ZGluZyBxdWVyeXN0cmluZyB2YXJpYWJsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBxdWVyeSBzdHJpbmcgdmFyaWFibGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBVUkxTZWFyY2hQYXJhbXNcbiAgICAgKi9cbiAgICBxdWVyeTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCByZXF1ZXN0IHdhcyBtYWRlIHNlY3VyZWx5IG92ZXIgU1NMIChodHRwcyBpbnN0ZWFkIG9mIGh0dHApXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0h0dHBzOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IG15LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW5XaXRoUHJvdG9jb2w6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSSVxuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgVVJJIHdpdGggcXVlcnkgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUklXaXRoUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmdWxsIFVSTFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RnVsbFVSTDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc2xhc2ggdG8gYSBzdHJpbmcgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbSBiZWNvbWVzIGh0dHBzOi8vbXktZG9tYWluLmNvbS9cbiAgICAgKiBFeGFtcGxlOiAvbXktcHJvZHVjdCBiZWNvbWVzIC9teS1wcm9kdWN0L1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXBwZW5kU2xhc2g6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIHJldHVybiB1cmxbdXJsLmxlbmd0aC0xXSAhPT0gJy8nID8gdXJsKycvJyA6IHVybDtcbiAgICB9LFxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCBzaXRlX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG5hbWU6bnVsbCxcbiAgICBjb25maWc6e30sXG59O1xuXG4vKipcbiAqXG4gKiBTaXRlIChmb3IgbXVsdGktdGVuYW50IGFwcGxpY2F0aW9ucylcbiAqXG4gKiBDbGFzcyBmb3Igc3RvcmluZyBhbmQgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY3VycmVudCB3ZWJzaXRlJ3MgaWQsIG5hbWUsIGFuZCBjb25maWcgb3B0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFNpdGUgZXh0ZW5kcyBBYnN0cmFjdENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKXtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9rZXlzID0gWydpZCcsICduYW1lJywgJ2NvbmZpZyddO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiB0aGlzO1xuXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4uc2l0ZV9kZWZhdWx0cywgLi4uZGF0YX07XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIHNldElkKGlkKSB7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vZ2V0cyB0aGUgd2Vic2l0ZSdzIG5hbWVcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgY29uZmlnIGRhdGFcbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgLy9zZXRzIGFsbCBjb25maWcgZGF0YSB1c2luZyB0aGUgcHJvdmlkZWQgb2JqZWN0XG4gICAgc2V0Q29uZmlnKGNvbmZpZykge1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChjb25maWcsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYW4gaW5kaXZpZHVhbCBjb25maWcgdmFsdWUgb3IgbnVsbCBpZiBpdCdzIG5vdCBkZWZpbmVkXG4gICAgZ2V0Q29uZmlnSXRlbShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB0aGlzLl9jb25maWdba2V5XTtcbiAgICB9XG5cbiAgICAvL2FkZHMgb3IgdXBkYXRlcyBhIHZhbHVlIGluIHRoZSBjb25maWcgb2JqZWN0XG4gICAgc2V0Q29uZmlnSXRlbShrZXksIHZhbCkge1xuICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIi8qKlxuICogTWV0aG9kcyBmb3IgcGVyZm9ybWluZyBjb21tb24gc3RyaW5nIG1hbmlwdWxhdGlvbnNcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5nZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdnZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0dGVyOiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gJ2dldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5zZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdzZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2V0dGVyOiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gJ3NldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdWNmaXJzdCgpIGZ1bmN0aW9uYWxpdHkgdG8gSlMgKGxpa2UgUEhQKVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICB1Y2ZpcnN0OiBmdW5jdGlvbihzdHJpbmcpe1xuICAgICAgICByZXR1cm4gc3RyaW5nICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpK3N0cmluZy5zbGljZSgxKTtcbiAgICB9XG59OyIsImltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFRvZ2dsZXMgYW4gZWxlbWVudCBvbiBjbGljayBvZiBhIGJ1dHRvbiwgY2xpY2sgb3V0c2lkZSB0aGUgZWxlbWVudCAoaWYgaXQncyB2aXNpYmxlKSwgb3Igb24gd2luZG93IHJlc2l6ZVxuICpcbiAqIFRoZSBicmVha3BvaW50IGlzIGJhc2VkIG9uIHZpc2liaWxpdHkgb2YgdGhlIGJ1dHRvbi5cbiAqICAgSWYgdGhlIGJ1dHRvbiBpcyB2aXNpYmxlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBiZSAodW5sZXNzIHRoZSBidXR0b24gaXMgY2xpY2tlZClcbiAqICAgSWYgdGhlIGJ1dHRvbiBpcyBoaWRkZW4sIHRoZSBlbGVtZW50IHdpbGwgYmUgdmlzaWJsZVxuICpcbiAqIE5vIHN0eWxlcyBhcmUgcHJvdmlkZWQgd2l0aCB0aGlzIGNvbXBvbmVudCBzbyBmZWVsIGZyZWUgdG8gZ28gY3JhenkuXG4gKiAgIFRoZXJlJ3MgYSBsb3QgeW91IGNhbiBkbyB3aGVuIGEgc2luZ2xlIGNsYXNzIGlzIHRvZ2dsZWQuXG4gKlxuICogVXNlIGNhc2VzOlxuICogMSkgQ2hhbmdlIGZyb20gYSBzaWRlYmFyIG9uIGRlc2t0b3AgdG8gYSBwb3B1cCBvbiBtb2JpbGVcbiAqIDIpIENoYW5nZSBmcm9tIGFuIGlubGluZSBtZW51IG9uIGRlc2t0b3AgdG8gYSBzbGlkZS1pbiBvbiBtb2JpbGVcbiAqIC4uLkknbSBzdXJlIHlvdSBjYW4gdGhpbmsgb2Ygc29tZVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZ2dsZU9uTW9iaWxle1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGJ0blxuICAgICAqIEBwYXJhbSB0b2dnbGVfZWxcbiAgICAgKiBAcGFyYW0gdG9nZ2xlX2NsYXNzXG4gICAgICogQHBhcmFtIGhpZGVfb25fb3V0c2lkZV9jbGlja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJ0biwgdG9nZ2xlX2VsLCB0b2dnbGVfY2xhc3MsIGhpZGVfb25fb3V0c2lkZV9jbGljayl7XG4gICAgICAgIC8vc2V0IHRoZSBlbGVtZW50c1xuICAgICAgICB0aGlzLmJ0biA9IGRvbS5nZXRFbGVtZW50KGJ0biwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudG9nZ2xlX2VsID0gZG9tLmdldEVsZW1lbnQodG9nZ2xlX2VsLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gdHJ1ZVxuICAgICAgICB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayA9IHR5cGVvZiBoaWRlX29uX291dHNpZGVfY2xpY2sgIT09IFwiYm9vbGVhblwiID8gdHJ1ZSA6IGhpZGVfb25fb3V0c2lkZV9jbGljaztcblxuICAgICAgICAvL2lmIG5vdCBhIHN0cmluZywgZGVmYXVsdCB0byBcInZpc2libGVcIlxuICAgICAgICB0aGlzLnRvZ2dsZV9jbGFzcyA9IHR5cGVvZiB0b2dnbGVfY2xhc3MgIT09ICdzdHJpbmcnID8gJ3Zpc2libGUnIDogdG9nZ2xlX2NsYXNzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgYW5kIHJ1bnMgb25XaW5kb3dSZXNpemUgaW1tZWRpYXRlbHkgdG8gc2V0IHRoZSBpbml0aWFsIGNsYXNzXG4gICAgICovXG4gICAgaW5pdCgpe1xuICAgICAgICAvL3RvIGJlIHVzZWQgaW5zaWRlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2NyZWF0ZSBhIHRocm90dGxlZCB3aW5kb3cgcmVzaXplIGhhbmRsZXJcbiAgICAgICAgbGV0IHRocm90dGxlO1xuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhyb3R0bGUpO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiggZG9tLmlzVmlzaWJsZShzZWxmLmJ0bikgKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QuYWRkKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayApIHtcbiAgICAgICAgICAgIHRoaXMub25DbGlja091dHNpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRfZWwgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIG9uIHRoZSBidXR0b25cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X2VsID09PSBzZWxmLmJ0bikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgaW5zaWRlIHRoZSBidXR0b25cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmJ0biA9PT0gdGFyZ2V0X2VsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0X2VsID0gdGFyZ2V0X2VsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBvbiB0aGUgZWxlbWVudCB3ZSBhcmUgdG9nZ2xpbmdcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X2VsID09PSBzZWxmLnRvZ2dsZV9lbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgaW5zaWRlIHRoZSBlbGVtZW50IHdlIGFyZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudG9nZ2xlX2VsID09PSB0YXJnZXRfZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0YXJnZXRfZWwgPSB0YXJnZXRfZWwucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICAvL290aGVyd2lzZSBoaWRlIGl0XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudHMub24oJ2JvZHknLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DbGlja1RvZ2dsZUJ0biA9IGV2ZW50cy5vbkNsaWNrKHRoaXMuYnRuLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnRvZ2dsZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcblxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgZGVzdHJveSgpe1xuICAgICAgICBpZiggdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgKSB7XG4gICAgICAgICAgICBldmVudHMub2ZmKCdib2R5JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzLm9mZih0aGlzLmJ0biwgJ2NsaWNrJywgdGhpcy5vbkNsaWNrVG9nZ2xlQnRuKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgIH1cbn0iLCIvKipcbiAqIE1ldGhvZHMgZm9yIGNoZWNraW5nIGRhdGEgdHlwZXMgd2l0aCBtb3JlIHNwZWNpZmljaXR5XG4gKi9cbmV4cG9ydCBjb25zdCB0eXBlX2NoZWNrcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcHJvdmlkZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgY29udGFpbiBhdCBsZWFzdCAxIHByb3ZpZGVkIGtleSBpbiBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSBtdXN0IGhhdmUgYWxsIGtleXNcbiAgICAgKiBPcHRpb25hbGx5IGNhbm5vdCBoYXZlIGFueSBrZXlzIHRoYXQgYXJlbid0IGluIHRoZSBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IGNoZWNrIGZhaWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0ga2V5cyAtIGRlZmF1bHQ6IGRvbid0IHZlcmlmeSBrZXlzXG4gICAgICogQHBhcmFtIHJlcXVpcmVfYWxsX2tleXMgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEBwYXJhbSBibG9ja19vdGhlcl9rZXlzIC0gZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwYXJhbSB0aHJvd19lcnJvciAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEYXRhT2JqZWN0OiBmdW5jdGlvbih2YWx1ZSwga2V5cywgcmVxdWlyZV9hbGxfa2V5cywgYmxvY2tfb3RoZXJfa2V5cywgdGhyb3dfZXJyb3Ipe1xuICAgICAgICAvL2RlZmF1bHQgZm9yIHRocm93X2Vycm9yIGlzIGZhbHNlXG4gICAgICAgIHRocm93X2Vycm9yID0gdHlwZW9mIHRocm93X2Vycm9yICE9PSBcInVuZGVmaW5lZFwiID8gdGhyb3dfZXJyb3IgOiBmYWxzZTtcblxuICAgICAgICAvL2RlZmF1bHQgZm9yIHJlcXVpcmVfYWxsX2tleXMgaXMgZmFsc2VcbiAgICAgICAgcmVxdWlyZV9hbGxfa2V5cyA9IHR5cGVvZiByZXF1aXJlX2FsbF9rZXlzICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWlyZV9hbGxfa2V5cyA6IGZhbHNlO1xuXG4gICAgICAgIC8vZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHZhciBzdHJpbmdpZmllZF92YWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IGVycm9yX21zZ1xuICAgICAgICBjb25zdCBlcnJvcl9tc2cgPSBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG5vdCBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZGV0ZXJtaW5lIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgICAgICBjb25zdCBpc19vYmplY3QgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgICAgLy9pZiBub3QgYW4gb2JqZWN0LCBudWxsLCBvciBhbiBhcnJheVxuICAgICAgICBpZiggIWlzX29iamVjdCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB3ZSBuZWVkIHRvIHZlcmlmeSB0aGUga2V5cyB0aGlzIG9iamVjdCBjb250YWluc1xuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShrZXlzKSApIHtcbiAgICAgICAgICAgIGxldCBmb3VuZF9rZXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBtaXNzaW5nX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVfa2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGtleSB3YXMgZm91bmQsIHdlIGZvdW5kIGF0bGVhc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlX2tleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF9rZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2lmIGl0J3Mgbm90IGZvdW5kLCB3ZSBjYW4ndCBzYXkgYWxsIGtleXMgZXhpc3QgaW4gdGhpcyBvYmplY3RcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2lmIG5vdCBvbmUgb2YgdGhlIGtleXMgd2VyZSBmb3VuZFxuICAgICAgICAgICAgaWYoICFmb3VuZF9rZXkgKXtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmc6IGAra2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkaWRuJ3QgZmluZCBhbGwgdGhlIGtleXNcbiAgICAgICAgICAgIGlmKCByZXF1aXJlX2FsbF9rZXlzICYmIG1pc3Npbmdfa2V5cy5sZW5ndGggKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbWlzc2luZyBkYXRhOiBgK21pc3Npbmdfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkb24ndCBhbGxvdyBhbnkga2V5cyBOT1QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgICAgICAgIGlmKCBibG9ja19vdGhlcl9rZXlzICl7XG4gICAgICAgICAgICAgICAgbGV0IHVucmVjb2duaXplZF9rZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICB2YWx1ZV9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAha2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlY29nbml6ZWRfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCB1bnJlY29nbml6ZWRfa2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBjb250YWlucyBpbnZhbGlkIGRhdGE6IGArdW5yZWNvZ25pemVkX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWxsIGNoZWNrcyBwYXNzZWQhIGNvbmdyYXRzLCBpdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtBYnN0cmFjdENsYXNzfSBmcm9tIFwiLi4vQWJzdHJhY3RDbGFzc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IHVzZXJfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgaXNHdWVzdDpmYWxzZSxcbiAgICBpc0FkbWluOmZhbHNlLFxuICAgIHVzZXJuYW1lOm51bGwsXG4gICAgZm5hbWU6bnVsbCxcbiAgICBsbmFtZTpudWxsLFxuICAgIGVtYWlsOm51bGwsXG4gICAgcGhvbmU6bnVsbCxcbiAgICBwZXJtaXNzaW9uczpbXSxcbiAgICBhZGRpdGlvbmFsRGF0YTp7fSxcbn07XG5cbi8qKlxuICpcbiAqIFVzZXJcbiAqXG4gKiBDbGFzcyBmb3Igc3RvcmluZyBhbmQgaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIgYW5kIHRoZWlyIHBlcm1pc3Npb25zXG4gKlxuICovXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEFic3RyYWN0Q2xhc3N7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fa2V5cyA9IFsnaWQnLCAnaXNHdWVzdCcsICdpc0FkbWluJywgJ3VzZXJuYW1lJywgJ2ZuYW1lJywgJ2xuYW1lJywgJ2VtYWlsJywgJ3Bob25lJywgJ3Blcm1pc3Npb25zJywgJ2FkZGl0aW9uYWxEYXRhJ107IFxuICAgICAgICBcbiAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgLy9leHRlbmQgdXNlcl9kZWZhdWx0cyB3aXRoIGluY29taW5nIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi51c2VyX2RlZmF1bHRzLCAuLi5kYXRhfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpe1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIHNldElzR3Vlc3QoaXNfZ3Vlc3Qpe1xuICAgICAgICB0aGlzLl9pc0d1ZXN0ID0gaXNfZ3Vlc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJc0d1ZXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0d1ZXN0O1xuICAgIH1cblxuICAgIHNldElzQWRtaW4oaXNfYWRtaW4pe1xuICAgICAgICB0aGlzLl9pc0FkbWluID0gaXNfYWRtaW47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJc0FkbWluKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FkbWluO1xuICAgIH1cblxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lKXtcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldFVzZXJuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcbiAgICB9XG5cbiAgICBnZXRGbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZm5hbWU7XG4gICAgfVxuICAgIHNldEZuYW1lKGZpcnN0X25hbWUpe1xuICAgICAgICB0aGlzLl9mbmFtZSA9IGZpcnN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldExuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sbmFtZTtcbiAgICB9XG4gICAgc2V0TG5hbWUobGFzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fbG5hbWUgPSBsYXN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcXVpY2sgd2F5IHRvIGdldCBmbmFtZSBhbmQgbG5hbWVcbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZuYW1lKCkgKyAnICcgKyB0aGlzLmdldExuYW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0RW1haWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICAgIH1cbiAgICBzZXRFbWFpbChlbWFpbCl7XG4gICAgICAgIHRoaXMuX2VtYWlsID0gZW1haWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFBob25lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG9uZTtcbiAgICB9XG4gICAgc2V0UGhvbmUocGhvbmUpe1xuICAgICAgICB0aGlzLl9waG9uZSA9IHBob25lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBnZXRQZXJtaXNzaW9ucygpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnM7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIHNldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zKXtcbiAgICAgICAgaWYoICFBcnJheS5pc0FycmF5KHBlcm1pc3Npb25zKSApIHRocm93IFwic2V0UGVybWlzc2lvbnMgcmVxdWlyZXMgYW4gYXJyYXlcIjtcblxuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9hZGRzIGEgc2luZ2xlIHBlcm1pc3Npb24gdG8gdGhpcyB1c2VyXG4gICAgYWRkUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMucHVzaChwZXJtaXNzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vUmVtb3ZlcyBhIHNpbmdsZSBwZXJtaXNzaW9uIGZyb20gdGhpcyB1c2VyXG4gICAgcmVtb3ZlUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgdGhpcy5zZXRQZXJtaXNzaW9ucyh0aGlzLl9wZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IHBlcm1pc3Npb247XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSB1c2VyIGhhcyB0aGUgcHJvdmlkZWQgcGVybWlzc2lvblxuICAgIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBlcm1pc3Npb25zKCkuaW5jbHVkZXMocGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIGdldEFkZGl0aW9uYWxEYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9hZGRpdGlvbmFsRGF0YTtcbiAgICB9XG4gICAgLy9zZXRzIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIHNldEFkZGl0aW9uYWxEYXRhKGFkZGl0aW9uYWxfZGF0YSl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGFkZGl0aW9uYWxfZGF0YSwgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YSA9IGFkZGl0aW9uYWxfZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vcmV0dXJucyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIGdldERhdGFJdGVtKGtleSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldO1xuICAgIH1cbiAgICAvL3NldHMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBzZXREYXRhSXRlbShrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPSB2YWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2VzL2RvbVwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9lcy9ldmVudHNcIjtcbmltcG9ydCB7WEhSRm9ybSwgRm9ybUZyb21VUkx9IGZyb20gXCIuLi9lcy9mb3Jtc1wiO1xuaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vZXMvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vZXMvcmVxdWVzdFwiO1xuaW1wb3J0IHtTaXRlfSBmcm9tIFwiLi4vZXMvc2l0ZVwiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi4vZXMvc3RyaW5nc1wiO1xuaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL2VzL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9lcy91c2VyXCI7XG5pbXBvcnQge1RvZ2dsZU9uTW9iaWxlfSBmcm9tIFwiLi4vZXMvdG9nZ2xlL1RvZ2dsZU9uTW9iaWxlXCI7XG5cbi8vY3JlYXRlIGEga2V5OnZhbCBvYmplY3Qgb2YgYWxsIGNvbXBvbmVudHNcbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgZG9tOmRvbSxcbiAgICBldmVudHM6ZXZlbnRzLFxuICAgIFhIUkZvcm06WEhSRm9ybSxcbiAgICBGb3JtRnJvbVVSTDpGb3JtRnJvbVVSTCxcbiAgICBuYXZpZ2F0aW9uOm5hdmlnYXRpb24sXG4gICAgcmVxdWVzdDpyZXF1ZXN0LFxuICAgIFNpdGU6U2l0ZSxcbiAgICBzdHJpbmdzOnN0cmluZ3MsXG4gICAgdHlwZV9jaGVja3M6dHlwZV9jaGVja3MsXG4gICAgVXNlcjpVc2VyLFxuICAgIFRvZ2dsZU9uTW9iaWxlOlRvZ2dsZU9uTW9iaWxlXG59O1xuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB0byB0aWUgYWxsIGpwYWNrIGNvbXBvbmVudHMgZGlyZWN0bHkgdG8gdGhlIHdpbmRvdyBmb3IgZ2xvYmFsIHVzZVxuICpcbiAqIFRoaXMgbWVhbnMgaW5zdGVhZCBvZiBjYWxsaW5nIGpwYWNrLnN0cmluZ3MudWNmaXJzdCgpLCB5b3UgY2FuIGp1c3QgY2FsbCBzdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UganBhY2sncyBuYW1lcyBtYXkgYmUgdG9vIGdlbmVyaWMgYW5kIGNvbmZsaWN0LlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHNldCBhIGRpZmZlcmVudCBuYW1lc3BhY2UgdGhhbiBqcGFjaywgdGhhdCdzIGZpbmUsIGJ1dCBub3QgdXNpbmcgYSBuYW1lc3BhY2UgYXQgYWxsIGNhbiBiZSByaXNreVxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIHNldEdsb2JhbChcIiRcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogJC5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiX1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBfLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJQZWFzQXJlR3Jvc3NcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogUGVhc0FyZUdyb3NzLnN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICovXG5jb25zdCBzZXRHbG9iYWwgPSBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgIC8vZm9yIGVhY2ggZnVuY3Rpb24gd2l0aGluIGV2ZW50c1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICB3aW5kb3dbbmFtZXNwYWNlXVtrZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdpbmRvd1trZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9leHRlbmQgY29tcG9uZW50cyB0byBpbmNsdWRlIHRoZSBzZXRHbG9iYWwgbWV0aG9kXG5leHBvcnQgY29uc3QganBhY2sgPSB7Li4uY29tcG9uZW50cywgLi4ue3NldEdsb2JhbDogc2V0R2xvYmFsfX07XG5cbi8vc2V0IGpwYWNrIGdsb2JhbGx5IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYW55d2hlcmVcbmdsb2JhbC5qcGFjayA9IGpwYWNrOyIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JtZGF0YS1wb2x5ZmlsbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHVybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsOyJdLCJzb3VyY2VSb290IjoiIn0=