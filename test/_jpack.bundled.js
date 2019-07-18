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
    populate(data = {}){
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

/***/ "./es/clone/index.js":
/*!***************************!*\
  !*** ./es/clone/index.js ***!
  \***************************/
/*! exports provided: clone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clone", function() { return clone; });
/**
 *
 * @param val
 */
function getValueOrClone(val){
    const type = typeof val;

    //if not defined or null, return right away
    if( type === "undefined" || val === null ) return null;

    //if object (and already ruled out null)
    if( type === 'object' ){
        return {...val};
    }
    //if array
    if( Array.isArray(val) ){
        return [...val];
    }
    //if function
    if( type === "function" ){
        //as far as I can tell, reassigning the variable that stored the function doesn't change anything and a function can't be modified, right?
        //so I think we're ok returning the reference to the original and foregoing any cloning in here
    }

    //otherwise it's a value that's passed by value (string, int, bool, number, etc)
    return val;
}

const clone = {getValueOrClone};

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
    getElement: function(el, error_on_none = false, error_on_multiple = false){
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
    getElements: function(el, error_on_none = false){
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
    remove: function(el, error_if_not_found = false){
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
    replaceElWithHTML: function(el, html, error_if_not_found = false){
        if( typeof html !== 'string' ) throw `${html} must be a string`;

        const foundEl = this.getElement(el, error_if_not_found);

        if( !el ) return null;

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
    isVisible(el, error_if_not_found = false, error_on_multiple = false) {
        el = this.getElement(el, error_if_not_found, error_on_multiple);

        if( el === null ){
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
    trigger: function(el, event, data_to_pass = {}, event_options = {}){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

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
    constructor(url, options = {}){
        super(null, options);

        if( typeof url !== "string" ) throw `${url} must be a string`;

        //if options are undefined, set them
        options = typeof options === "undefined" ? {} : options;
        if( typeof options !== "object" || options === null ) throw `${options} must be an object`;

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
        if( typeof url !== 'string' ) throw `${url} must be a string`;
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
        if( selector !== null && typeof selector !== 'string' ) throw `${selector} must be a string or null value`;
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
            else if( typeof data === 'object' && data !== null ){
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
        if( typeof callback !== 'function' ) throw `${callback} must be a function`;
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
    constructor(form, options = {}){

        //if options are undefined, set them
        if( typeof options !== "object" || options === null ) throw `${options} must be an object`;

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
        if( typeof callback !== "function" ) throw `${callback} must be a function`;
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
        if( typeof method !== "string" && method !== null ) throw `${method} must be a string or null`;
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
            && url !== null ) throw `${url} must be a string, function, or null`;

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
        if( typeof callback !== "function" ) throw `${callback} must be a function`;
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
        if( typeof callback !== "function" ) throw `${callback} must be a function`;
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
            else if( typeof data === 'object' && data !== null ){
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
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clone */ "./es/clone/index.js");
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../type_checks */ "./es/type_checks/index.js");






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
const navigation = {
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
        return _clone__WEBPACK_IMPORTED_MODULE_3__["clone"].getValueOrClone(this._history);
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
        this._data = _clone__WEBPACK_IMPORTED_MODULE_3__["clone"].getValueOrClone(data);
        return this;
    },
    /**
     * Gets all data
     *
     * @returns object
     */
    getData: function () {
        return _clone__WEBPACK_IMPORTED_MODULE_3__["clone"].getValueOrClone(this._data);
    },
    /**
     * Sets a single value in your data object
     *
     * @param key
     * @param val
     */
    setDataItem: function(key, val){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        this._data[key] = _clone__WEBPACK_IMPORTED_MODULE_3__["clone"].getValueOrClone(val);
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
        return _clone__WEBPACK_IMPORTED_MODULE_3__["clone"].getValueOrClone(this._data[key]);
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
        _type_checks__WEBPACK_IMPORTED_MODULE_4__["type_checks"].isDataObject(options, ['incomingElement', 'replaceElement', 'pushState'], false, true, true);

        //override global data with passed data
        data = {...self.getData(), ...data};

        //set values
        const incomingElementSelector = typeof options.incomingElement !== "undefined" ? options.incomingElement : this.getIncomingElement();
        const replaceElementSelector = typeof options.replaceElement !== "undefined" ? options.replaceElement : this.getReplaceElement();
        const replaceElement = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replaceElementSelector, true);
        const pushState = typeof options.pushState !== "undefined" ? options.pushState : this.pushState;

        //cache route (axios is async)
        const current_route = self.getRouteFromMeta();

        //run onBeforeRequest callbacks and if any return false, don't send the request
        if( !self._triggerOnBeforeRequest(replaceElement, replaceElementSelector, incomingElementSelector, current_route, data) ){
            return false;
        }

        self.showLoader();

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
            self.hideLoader();
            self._replacePageContent(response.data, url, incomingElementSelector, replaceElement, pushState, current_route, data, onload);
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
        this.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), {}, callback);
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
        this._onUnloadCallbacks.forEach(function(callback){
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
            self.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function (e) {
            self.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString(), {}, null, {
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

        const replace_el = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el_selector, true); //error if not found

        //trigger the unload callbacks
        self._triggerUnload(replace_el, replace_el_selector, current_route, data);

        //parse the response to grab anything that we need (title, meta, content, route, etc)
        var parsed = self._parseHTML(html, incoming_el_selector);

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
        var metas = doc.head.getElementsByTagName('meta');
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
    appendSlash: function(url = ''){
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
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clone */ "./es/clone/index.js");




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
    constructor(data = {}){
        super();

        this._keys = ['id', 'name', 'config'];

        //extend user_defaults with incoming data
        data = {...site_defaults, ...data};

        this.populate(data);
    }

    getId() {
        return this._id;
    }

    setId(id) {
        if( typeof id !== 'number' && id !== null ) throw `${id} must be a number or null`;
        this._id = id;
        return this;
    }

    //gets the website's name
    getName() {
        return this._name;
    }

    setName(name) {
        if( typeof name !== 'string' && name !== null ) throw `${name} must be a string or null`;
        this._name = name;
        return this;
    }

    //returns all config data
    getConfig() {
        return _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(this._config);
    }

    //sets all config data using the provided object
    setConfig(config = {}) {
        //must be a data object, even if it's empty
        _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(config, null, false, false, true);
        this._config = _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(config);
        return this;
    }

    //returns an individual config value or null if it's not defined
    getConfigItem(key) {
        return typeof this._config[key] === "undefined" ? null : _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(this._config[key]);
    }

    //adds or updates a value in the config object
    setConfigItem(key, val) {
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        this._config[key] = _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(val);
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
    getter: function(string = ''){
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
    setter: function(string = ''){
        return 'set'+this.ucfirst(string);
    },

    /**
     * Adds ucfirst() functionality to JS (like PHP)
     *
     * @param string
     * @returns {*|string}
     */
    ucfirst: function(string = ''){
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
    constructor(btn, toggle_el, toggle_class = 'visible', hide_on_outside_click = true){
        //set the elements
        this.btn = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(btn, true, true);
        this.toggle_el = _dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(toggle_el, true, true);
        //set the config
        this.toggle_class = toggle_class;
        this.hide_on_outside_click = hide_on_outside_click;
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
    isDataObject: function(value, keys, require_all_keys = false, block_other_keys = false, throw_error = false){
        //for error messages
        var stringified_val = JSON.stringify(value);

        //default error_msg
        const error_msg = `${stringified_val} must be an object`;

        //if not provided
        if( typeof value === "undefined" ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //determine if it is an object
        const is_object = typeof value === "object" && value !== null;

        //if not an object or an array
        if( !is_object || Array.isArray(value) ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //if we need to verify the keys this object contains
        if( Array.isArray(keys) ) {
            let found_key = false;
            let missing_keys = [];

            const value_keys = Object.keys(value);

            //if the object doesn't have any keys, then it's an empty object and we don't need to verify any further
            if( !value_keys.length && !require_all_keys ) return true;

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
/* harmony import */ var _clone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clone */ "./es/clone/index.js");




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
    constructor(data = {}) {
        super();
        
        this._keys = ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData']; 
        
        //extend user_defaults with incoming data
        data = {...user_defaults, ...data};
        
        this.populate(data);
    }

    setId(id){
        if( typeof id !== 'number' && id !== null ) throw `${id} must be a number or null`;
        this._id = id;
        return this;
    }
    getId(){
        return this._id;
    }

    setIsGuest(is_guest = false){
        this._isGuest = is_guest;
        return this;
    }
    getIsGuest(){
        return this._isGuest;
    }

    setIsAdmin(is_admin = false){
        this._isAdmin = is_admin;
        return this;
    }
    getIsAdmin(){
        return this._isAdmin;
    }

    setUsername(username = null){
        if( typeof username !== 'string' && username !== null ) throw `${username} must be a string or null`;
        this._username = username;
        return this;
    }
    getUsername(){
        return this._username;
    }

    getFname(){
        return this._fname;
    }
    setFname(first_name = null){
        if( typeof first_name !== 'string' && first_name !== null ) throw `${first_name} must be a string or null`;
        this._fname = first_name;
        return this;
    }

    getLname(){
        return this._lname;
    }
    setLname(last_name = null){
        if( typeof last_name !== 'string' && last_name !== null ) throw `${last_name} must be a string or null`;
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
    setEmail(email = null){
        if( typeof email !== 'string' && email !== null ) throw `${email} must be a string or null`;
        this._email = email;
        return this;
    }

    getPhone(){
        return this._phone;
    }
    setPhone(phone = null){
        if( typeof phone !== 'string' && phone !== null ) throw `${phone} must be a string or null`;
        this._phone = phone;
        return this;
    }

    //returns all permissions for this user
    getPermissions(){
        return _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(this._permissions);
    }
    //sets all permissions for this user
    setPermissions(permissions = []){
        if( !Array.isArray(permissions) ) throw "setPermissions requires an array";
        this._permissions = _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(permissions);
        return this;
    }
    //adds a single permission to this user
    addPermission(permission){
        if( typeof permission !== 'string' ) throw `${permission} must be a string`;
        this._permissions.push(permission);
        return this;
    }
    //Removes a single permission from this user
    removePermission(permission){
        if( typeof permission !== 'string' ) throw `${permission} must be a string`;
        this.setPermissions(this._permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    }
    //returns true if the user has the provided permission
    hasPermission(permission){
        if( typeof permission !== 'string' ) throw `${permission} must be a string`;
        return this.getPermissions().includes(permission);
    }

    //returns all additional data for this user
    getAdditionalData(){
        return _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(this._additionalData);
    }
    //sets all additional data for this user
    setAdditionalData(additional_data = {}){
        //must be a data object, even if it's empty
        _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(additional_data, null, false, false, true);
        this._additionalData = _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(additional_data);
        return this;
    }
    //returns a single additional data value for this user
    getDataItem(key){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        return typeof this._additionalData[key] === "undefined" ? null : _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(this._additionalData[key]);
    }
    //sets a single additional data value for this user
    setDataItem(key, val){
        if( typeof key !== 'string' ) throw `${key} must be a string`;
        this._additionalData[key] = _clone__WEBPACK_IMPORTED_MODULE_2__["clone"].getValueOrClone(val);
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
/* harmony import */ var _es_clone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../es/clone */ "./es/clone/index.js");












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
    ToggleOnMobile:_es_toggle_ToggleOnMobile__WEBPACK_IMPORTED_MODULE_9__["ToggleOnMobile"],
    clone: _es_clone__WEBPACK_IMPORTED_MODULE_10__["clone"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9jbG9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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TztBQUNuQixTQUFTLDZDQUFJO0FBQ2IsWUFBWSxtREFBTztBQUNuQixnQkFBZ0IsMkRBQVc7QUFDM0IsU0FBUyw2Q0FBSTtBQUNiLG1CQUFtQix3RUFBYztBQUNqQyxXQUFXLGdEQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxlQUFlLG1CQUFtQjs7QUFFekM7QUFDQSxxQiIsImZpbGUiOiJfanBhY2suYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZShkYXRhID0ge30pe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX2tleXMgPT09IFwidW5kZWZpbmVkXCIgKSB0aHJvdyBgQ2Fubm90IHBvcHVsYXRlIG9iamVjdCBpZiBfa2V5cyBwcm9wZXJ0eSBpcyBub3Qgc2V0YDtcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMuX2tleXMsIGZhbHNlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL2ZvciBlYWNoIGtleSB0aGF0IGlzIHNldCBpbiB0aGUgZGF0YSBvYmplY3QsIHNldCB0aGUgdmFsdWUgb24gdGhpc1xuICAgICAgICB0aGlzLl9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YVtrZXldICE9PSBcInVuZGVmaW5lZFwiICkgc2VsZltzdHJpbmdzLnNldHRlcihrZXkpXShkYXRhW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKlxuICogQHBhcmFtIHZhbFxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZU9yQ2xvbmUodmFsKXtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcblxuICAgIC8vaWYgbm90IGRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHJpZ2h0IGF3YXlcbiAgICBpZiggdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwgKSByZXR1cm4gbnVsbDtcblxuICAgIC8vaWYgb2JqZWN0IChhbmQgYWxyZWFkeSBydWxlZCBvdXQgbnVsbClcbiAgICBpZiggdHlwZSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgcmV0dXJuIHsuLi52YWx9O1xuICAgIH1cbiAgICAvL2lmIGFycmF5XG4gICAgaWYoIEFycmF5LmlzQXJyYXkodmFsKSApe1xuICAgICAgICByZXR1cm4gWy4uLnZhbF07XG4gICAgfVxuICAgIC8vaWYgZnVuY3Rpb25cbiAgICBpZiggdHlwZSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIC8vYXMgZmFyIGFzIEkgY2FuIHRlbGwsIHJlYXNzaWduaW5nIHRoZSB2YXJpYWJsZSB0aGF0IHN0b3JlZCB0aGUgZnVuY3Rpb24gZG9lc24ndCBjaGFuZ2UgYW55dGhpbmcgYW5kIGEgZnVuY3Rpb24gY2FuJ3QgYmUgbW9kaWZpZWQsIHJpZ2h0P1xuICAgICAgICAvL3NvIEkgdGhpbmsgd2UncmUgb2sgcmV0dXJuaW5nIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGFuZCBmb3JlZ29pbmcgYW55IGNsb25pbmcgaW4gaGVyZVxuICAgIH1cblxuICAgIC8vb3RoZXJ3aXNlIGl0J3MgYSB2YWx1ZSB0aGF0J3MgcGFzc2VkIGJ5IHZhbHVlIChzdHJpbmcsIGludCwgYm9vbCwgbnVtYmVyLCBldGMpXG4gICAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lID0ge2dldFZhbHVlT3JDbG9uZX07IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lID0gZmFsc2UsIGVycm9yX29uX211bHRpcGxlID0gZmFsc2Upe1xuICAgICAgICBjb25zdCBmb3VuZEVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGZvdW5kRWwubGVuZ3RoID4gMSAmJiBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IGBNb3JlIHRoYW4gMSByZXN1bHQgZm91bmQgZm9yIFwiJHtlbH1cImA7XG5cbiAgICAgICAgaWYoICFmb3VuZEVsLmxlbmd0aCApIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBmb3VuZEVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lID0gZmFsc2Upe1xuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgaWYoIHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhZWwgKXtcbiAgICAgICAgICAgIC8vZG8gbm90aGluZywgZGVmYXVsdCBpcyBlbXB0eSBhcnJheVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCApe1xuICAgICAgICAgICAgLy9hZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheS5wdXNoKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvL2NvbnZlcnQgdGhlIE5vZGVMaXN0IHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZWxfYXJyYXkgPyBBcnJheS5mcm9tKGVsX2FycmF5KSA6IGVsX2FycmF5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWwgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiApe1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBBcnJheS5mcm9tKGVsKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGl0J3MgYW4gYXJyYXksIHZhbGlkYXRlIGVhY2ggZWxlbWVudFxuICAgICAgICBlbHNlIGlmKCBBcnJheS5pc0FycmF5KGVsKSApe1xuICAgICAgICAgICAgZWwuZm9yRWFjaChmdW5jdGlvbih0aGlzX2VsKXtcbiAgICAgICAgICAgICAgICB0aGlzX2VsID0gZG9tLmdldEVsZW1lbnQodGhpc19lbCk7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXNfZWwgKSBlbF9hcnJheS5wdXNoKHRoaXNfZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vdGhlcndpc2UsIHdoYXQgdGhlIGhlY2sgZGlkIHlvdSBwYXNzPyBUaHJvdyBlcnJvci4uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGBJbnZhbGlkIHZhbHVlOiBcIiR7ZWx9XCJgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggJiYgZXJyb3Jfb25fbm9uZSApIHRocm93IGBGYWlsZWQgdG8gZmluZCBcIiR7ZWx9XCJgO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVpY2sgbWV0aG9kIGZvciByZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwsIGVycm9yX2lmX25vdF9mb3VuZCA9IGZhbHNlKXtcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gdGhpcy5nZXRFbGVtZW50cyhlbCk7XG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgZG9tIGVsZW1lbnQgd2l0aCBIVE1MXG4gICAgICpcbiAgICAgKiB1c2VzIC5nZXRFbGVtZW50KCkgc28gZWwgY2FuIGJlIGp1c3QgYWJvdXQgYW55dGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtDaGlsZE5vZGV9fG51bGxcbiAgICAgKi9cbiAgICByZXBsYWNlRWxXaXRoSFRNTDogZnVuY3Rpb24oZWwsIGh0bWwsIGVycm9yX2lmX25vdF9mb3VuZCA9IGZhbHNlKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IG11c3QgYmUgYSBzdHJpbmdgO1xuXG4gICAgICAgIGNvbnN0IGZvdW5kRWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIGVycm9yX2lmX25vdF9mb3VuZCk7XG5cbiAgICAgICAgaWYoICFlbCApIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZnJvbSBIVE1MXG4gICAgICAgIGxldCBuZXdFbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2luc2VydCB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIHRoZSBjdXJyZW50XG4gICAgICAgIG5ld0VsID0gZm91bmRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXNbMF0sIGZvdW5kRWwpO1xuXG4gICAgICAgIC8vcmVtb3ZlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgZm91bmRFbC5yZW1vdmUoKTtcblxuICAgICAgICAvL3JldHVybiB0aGUgbmV3IG9uZVxuICAgICAgICByZXR1cm4gbmV3RWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gZWxlbWVudCBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzVmlzaWJsZShlbCwgZXJyb3JfaWZfbm90X2ZvdW5kID0gZmFsc2UsIGVycm9yX29uX211bHRpcGxlID0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIGVycm9yX2lmX25vdF9mb3VuZCwgZXJyb3Jfb25fbXVsdGlwbGUpO1xuXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgICAgICAvL2NoZWNrIGRpc3BsYXksIHZpc2liaWxpdHksIGFuZCBvcGFjaXR5IGZpcnN0IHNpbmNlIHRoZXkncmUgdGhlIG1vc3QgY29tbW9uXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICd2aXNpYmxlJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUub3BhY2l0eSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vc2VlIGlmIHRoZSBlbGVtZW50IGhhcyBhIHNpemVcbiAgICAgICAgaWYoZWwub2Zmc2V0V2lkdGggKyBlbC5vZmZzZXRIZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBvdXRzaWRlIGNvcm5lcnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGVsX2JvdW5kcyA9IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvcC1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdib3R0b20tbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LmJvdHRvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjZW50ZXInOiB7XG4gICAgICAgICAgICAgICAgeDogZWxSZWN0LmxlZnQgKyBlbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW5zaWRlX3ZpZXdwb3J0ID0gdHJ1ZTtcbiAgICAgICAgLy9tYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydFxuICAgICAgICBPYmplY3Qua2V5cyhlbF9ib3VuZHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IGVsX2JvdW5kc1trZXldO1xuXG4gICAgICAgICAgICBpZiAocG9pbnQueCA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueCA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPCAwKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICBpZiAocG9pbnRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50RWwgPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChwb2ludEVsID0gcG9pbnRFbC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc2lkZV92aWV3cG9ydDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGV4aXN0c1xuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG11bHRpcGxlRXhpc3Q6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aCA+IDE7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFNob3J0aGFuZCBwcmV2ZW50RGVmYXVsdCBldmVudHMgKGFuZCBvdGhlcnMgZm9yIGNvbnNpc3RlbmN5KVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGVzZSBmdW5jdGlvbnMgZ2xvYmFsbHkgc28geW91IGNhbiB1c2UgdGhlbSB3aXRob3V0IGEgbmFtZXNwYWNlIG9yIHdpdGggYSBjdXN0b20gb25lXG4gICAgICpcbiAgICAgKiBVc2UgYXQgeW91ciBvd24gcmlzayAtIG1heSBjYXVzZSBjb25mbGljdHMhXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgICBqcGFjay5ldmVudHMuc2V0R2xvYmFsKCk7XG4gICAgICogICAgIG9uQ2xpY2soJ2EnLCBmdW5jdGlvbigpe1xuICAgICAqICAgICAgICAvL2RvIHNvbWV0aGluZyAodGhlIGhyZWYgaXMgcHJldmVudGVkKVxuICAgICAqICAgICB9KTtcbiAgICAgKi9cbiAgICBzZXRHbG9iYWw6IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2V0IGV2ZXJ5dGhpbmcgdGhhdCdzIGEgcmVhbCBtZXRob2QgaW4gZXZlbnRzLCBleGNlcHQgdGhpcyBvbmVcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gJ3NldEdsb2JhbCcpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW3Byb3BlcnR5XSA9IHNlbGZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gZXZlbnRzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIGFuZCBwcmV2ZW50cyB0aGUgZGVmYXVsdCBldmVudHMgZnJvbSBvY2N1cnJpbmdcbiAgICAgKiAgKGxpa2UgZm9ybXMgc3VibWl0dGluZyBvciBhIGxpbmsgYnJpbmdpbmcgeW91IHRvIGFub3RoZXIgcGFnZSlcbiAgICAgKlxuICAgICAqICBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgaGFuZGxlciBmb3IgZnV0dXJlIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRlZEhhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vTmVlZCB0byB1bmRlcnN0YW5kIHRoaXMgYmV0dGVyLCBidXQgaXQgYXBwZWFycyB3aGVuIHRpZWQgdG8gdGhlIGJvZHkgZWxlbWVudCB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyByZWNlaXZlcyBhbiBhcnJheSBvZiBldmVudHMgd2l0aCBhIHNpbmdsZSBpdGVtIGluIGl0P1xuICAgICAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoZSkgKSBlID0gZVswXTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHByZXZlbnRlZEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByZXZlbnRlZEhhbmRsZXI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhbiBldmVudCBvbiBhbiBlbGVtZW50L2VsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gZGF0YV90b19wYXNzXG4gICAgICogQHBhcmFtIGV2ZW50X29wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihlbCwgZXZlbnQsIGRhdGFfdG9fcGFzcyA9IHt9LCBldmVudF9vcHRpb25zID0ge30pe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50X29wdGlvbnMuZGV0YWlsID0gZGF0YV90b19wYXNzO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgZXZlbnRfb3B0aW9ucyk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIEZvcm1Gcm9tVVJMIGNsYXNzXG5jb25zdCBGb3JtRnJvbVVSTERlZmF1bHRzID0ge1xuICAgIGluY29taW5nRWxlbWVudFNlbGVjdG9yOiBudWxsLCAvL3RoZSBmb3JtIGVsZW1lbnQgb3Igd3JhcHBlciB0aGF0IHlvdSB3YW50IHRvIHJldHJpZXZlIGZyb20gdGhlIFVSTFxuICAgIGluc2VydEludG9FbGVtZW50OiBudWxsLCAvL3doYXQgZWxlbWVudCB0byBwdXQgdGhlIGZvcm0gaW50b1xuICAgIG9ubG9hZDogZnVuY3Rpb24oZm9ybSl7IHJldHVybiB0aGlzOyB9LCAvL29uY2UgdGhlIGZvcm0gaXMgbG9hZGVkIG9udG8gdGhlIHBhZ2Vcbn07XG5cbi8qKlxuICpcbiAqIEZvcm1Gcm9tVVJMXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIGdyYWIgYSBmb3JtIGZyb20gYSBVUkwgYW5kIHJldHVybnMgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEFsc28gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb24gdXNpbmcgWEhSIGFuZCBjYW4gb3BlbiBhIG1vZGFsIHRvIGRpc3BsYXkgdGhlIGZvcm1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRnJvbVVSTCBleHRlbmRzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHVybCAtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0e2luY29taW5nRWxlbWVudFNlbGVjdG9yLGluc2VydEludG9FbGVtZW50LCBvbmxvYWR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zID0ge30pe1xuICAgICAgICBzdXBlcihudWxsLCBvcHRpb25zKTtcblxuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiIHx8IG9wdGlvbnMgPT09IG51bGwgKSB0aHJvdyBgJHtvcHRpb25zfSBtdXN0IGJlIGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uRm9ybUZyb21VUkxEZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRVUkwodXJsKTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcihvcHRpb25zLmluY29taW5nRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zZXRJbnNlcnRJbnRvRWxlbWVudChvcHRpb25zLmluc2VydEludG9FbGVtZW50KTtcbiAgICAgICAgdGhpcy5vbmxvYWQob3B0aW9ucy5vbmxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBwYXJlbnQgYmVjYXVzZSBpdCdzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBjbGFzc1xuICAgICAqXG4gICAgICogU3RpbGwga2VlcGluZyBpdCBmdW5jdGlvbmFsIGJ1dCByZW1vdmluZyBhbGwgdmFsaWRhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBVUkwgZnJvbSB3aGljaCB0aGUgZm9ybSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHt1cmx9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSdzIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyBYSFJGb3JtLmdldEZpbmFsU3VibWl0VVJMIHRvIGluY2x1ZGUgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmVxdWVzdGVkIGZyb20gYXMgYW4gYWRkaXRpb25hbCBmYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSl7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIHVybCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm0sIG9ubHkgaWYgZXhwbGljaXRseSBzZXRcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGZvcm0uYXR0cmlidXRlcy5hY3Rpb24gKXtcbiAgICAgICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBzdGlsbCBudWxsLCBncmFiIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgICAgIHVybCA9ICF1cmwgPyB0aGlzLmdldFVSTCgpIDogdXJsO1xuXG4gICAgICAgIC8vaWYgdGhlIHVybCBpcyBTVElMTCBudWxsLCBncmFiIHRoZSBmb3JtJ3MgZGVmYXVsdCBhY3Rpb24gKGN1cnJlbnQgcGFnZSlcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBVUkwgcHJvdmlkZWQgcmV0dXJucyBIVE1MLCB0aGlzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZCB0byBwdWxsIHRoZSBmb3JtIG91dFxuICAgICAqXG4gICAgICogSWYgbGVmdCBudWxsLCBpdCB3aWxsIGFzc3VtZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtJ3MgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yOiBzdHJpbmd8bnVsbFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudFNlbGVjdG9yKHNlbGVjdG9yKXtcbiAgICAgICAgaWYoIHNlbGVjdG9yICE9PSBudWxsICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcn0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsIHZhbHVlYDtcbiAgICAgICAgdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNlbGVjdG9yIGZvciB0aGUgZm9ybSBvciBhIHBhcmVudCBvZiBpdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGUgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gc2V0IGEgcGFyZW50IGVsZW1lbnQgdGhhdCB0aGUgZm9ybSB3aWxsIGJlIGluc2VydGVkIGludG8gdXNpbmcgdGhlIGRlZmF1bHQgaW5zZXJ0Rm9ybSBtZXRob2RcbiAgICAgKiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGxlYXZlIHRoaXMgYW5kIG92ZXJyaWRlIGluc2VydEZvcm0oKSBhbmQgaGF2ZSBtb3JlIGNvbnRyb2wgb3ZlciB3aGVyZSBpdCBzaG91bGQgZ29cbiAgICAgKlxuICAgICAqIFVzZXMgZG9tLmdldEVsZW1lbnQoKSBzbyB5b3UgY2FuIHBhc3MgYSBzdHJpbmcsIGpRdWVyeSBvYmplY3QsIG9iamVjdCwgZXRjXG4gICAgICogSG93ZXZlciBpZiBtb3JlIHRoYW4gMSBlbGVtZW50IGlzIGRldGVjdGVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzZXRJbnNlcnRJbnRvRWxlbWVudChlbGVtZW50KXtcbiAgICAgICAgdGhpcy5faW5zZXJ0SW50b0VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhlIGZvcm0gd2lsbCBiZSBpbnNlcnRlZCBpbnRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRJbnNlcnRJbnRvRWxlbWVudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zZXJ0SW50b0VsZW1lbnQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZnJvbSB0aGUgVVJMIGFuZCBwYXNzIHRvIGluc2VydEZvcm1cbiAgICAgKlxuICAgICAqIFRoZXJlIGFyZSB0aHJlZSBtYWluIHdheXMgdG8gcHJvdmlkZSB0aGUgZm9ybSBmcm9tIHlvdXIgc2VydmVyOlxuICAgICAqIDEpIFN0cmFpZ2h0IEhUTUwuIFRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0gYW5kIHRoYXQncyBpdC5cbiAgICAgKiAyKSBTdHJhaWdodCBIVE1MLCBidXQgdGhlIGZvcm0gaXMgb25seSBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIHNvIGl0IG5lZWRzIHRvIGJlIHBhcnNlZCBvdXQgYmFzZWQgb24gYSBzZWxlY3Rvci5cbiAgICAgKiAzKSBBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleSBcImh0bWxcIiBsaWtlIHRoaXM6IHtcImh0bWxcIjpcIjxmb3JtPnlvdXIgZm9ybSBoZXJlPC9mb3JtPlwifVxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Rm9ybSgpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMuZ2V0VVJMKCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAvL2p1c3QgaW4gY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIHRoZSB3cm9uZyByZXNwb25zZSB0eXBlIGFuZCBpdCdzIGFjdHVhbGx5IEpTT04gLSBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB0cnl7IGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTsgfSBjYXRjaChlKXsgfVxuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhIHN0cmluZyAocHJvYmFibHkgSFRNTClcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBuYXZpZ2F0aW9uLnBhcnNlSFRNTChkYXRhLCBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL290aGVyd2lzZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIGFzc3VtZWQgdG8gYmUgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCAocHJvYmFibHkgSlNPTilcbiAgICAgICAgICAgIGVsc2UgaWYoIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBkYXRhICE9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgLy9pZiBIVE1MIHdhcyBwcm92aWRlZCBpbiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhLmh0bWwgIT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhLmh0bWx9LCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAke2RhdGF9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gaW5zZXJ0IHRoZSBmb3JtIHdoZXJldmVyIHlvdSB3YW50IG9uIHRoZSBwYWdlXG4gICAgICogIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGUgZm9ybSBpcyBpbnNlcnRlZFxuICAgICAqICAobWF5YmUgeW91IHdhbnQgdG8gb3BlbiBhIG1vZGFsIGZpcnN0IGFuZCBwbGFjZSBpdCB0aGVyZT8pXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQuaHRtbCB3aWxsIGFsd2F5cyBiZSB0aGUgSFRNTFxuICAgICAqXG4gICAgICogIHBhcnNlZF9jb250ZW50IG1heSBjb250YWluIG90aGVyIGRhdGEgbGlrZSByb3V0ZSBhbmQgdGl0bGUgaWYgdGhlIGZvcm0gd2FzIHB1bGxlZCBvdXQgb2ZcbiAgICAgKiAgICAgYSBmdWxsIEhUTUwgcGFnZSB3aGljaCBjb250YWlucyB0aG9zZSBpdGVtc1xuICAgICAqXG4gICAgICogIHJlc3BvbnNlIGlzIHRoZSBmdWxsIHNlcnZlciByZXNwb25zZSAoaHRtbCBzdHJpbmcgb3Igb2JqZWN0IGZyb20gSlNPTiAtIG5vdCBwcm92aWRlZCBpZiB0aGUgcmVzcG9uc2UgaXMgb25seSB0aGUgZm9ybSdzIEhUTUwpXG4gICAgICpcbiAgICAgKiAgZm9ybSBpcyBwcm92aWRlZCBpZiB0aGlzIGlzIGFmdGVyIHRoZSBmb3JtIHdhcyBzdWJtaXR0ZWQgYW5kIEhUTUwgd2FzIHJldHVybmVkIGZvcm0gdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogIEBwYXJhbSBwYXJzZWRfY29udGVudFxuICAgICAqICBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiAgQHBhcmFtIGZvcm1cbiAgICAgKiAgQHJldHVybnMgeyp8RWxlbWVudHxIVE1MRG9jdW1lbnR9XG4gICAgICovXG4gICAgaW5zZXJ0Rm9ybShwYXJzZWRfY29udGVudCwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICAvL3NlbGVjdG9yIGZvciB3aGVyZSB0aGUgZm9ybSB3aWxsIGdvXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKTtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggZWwgPT09IG51bGwgKSB0aHJvdyAnQ2Fubm90IGRldGVybWluZSB3aGVyZSB0byBpbnNlcnQgZm9ybS4gT3ZlcndyaXRlIGluc2VydEZvcm0oKSBvciBwcm92aWRlIGluc2VydEludG9FbGVtZW50JztcblxuICAgICAgICAvL2dldCB0aGUgY29udGFpbmVyIGVsZW1lbnQgLSBlcnJvciBpZiBub3QgZm91bmRcbiAgICAgICAgZWwgPSBkb20uZ2V0RWxlbWVudChlbCwgdHJ1ZSk7XG5cbiAgICAgICAgLy9wdXQgdGhlIGZvcm0gaW4gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHBhcnNlZF9jb250ZW50Lmh0bWw7XG5cbiAgICAgICAgLy9maW5kIHRoZSBuZXdseSBhZGRlZCBmb3JtXG4gICAgICAgIGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAgLy9hdHRhY2ggYW4gb24tc3VibWl0IGxpc3RlbmVyIHRvIHNlbmQgdGhlIGZvcm0ncyB2YWx1ZXMgdmlhIFhIUlxuICAgICAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSk7XG5cbiAgICAgICAgLy9ydW4gdGhlIG9ubG9hZCBjYWxsYmFjayBub3cgdGhhdCB0aGUgZm9ybSBpcyB0aGVyZVxuICAgICAgICB0aGlzLnRyaWdnZXJPbmxvYWQoZm9ybSk7XG5cbiAgICAgICAgcmV0dXJuIGVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIG1ldGhvZCB0byBtb2RpZnkgdGhlIGZvcm0gaW1tZWRpYXRlbHkgYWZ0ZXIgaXQncyBkaXNwbGF5ZWRcbiAgICAgKlxuICAgICAqIFlvdSdsbCBsaWtlbHkgd2FudCB0byBhdHRhY2ggcGx1Z2lucyBmb3IgZGF0ZXBpY2tlcnMvZHJvcGRvd25zLCBvciBtYXliZSBoaWRlIGEgZmllbGQgYmFzZWQgb24gdGhlIHZhbHVlIG9mIGFub3RoZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9ubG9hZChjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vbmxvYWQgPT09IFwidW5kZWZpbmVkXCIgKSB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgdGhpcy5fb25sb2FkLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9ubG9hZCBjYWxsYmFja3MgeW91J3ZlIHNldFxuICAgICAqXG4gICAgICogQHJldHVybnMge0Zvcm1Gcm9tVVJMfVxuICAgICAqL1xuICAgIGNsZWFyT25sb2FkQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29ubG9hZCA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIHRyaWdnZXJPbmxvYWQoZm9ybSl7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLl9vbmxvYWQgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fb25sb2FkLmZvckVhY2goZnVuY3Rpb24ob25sb2FkKXtcbiAgICAgICAgICAgIG9ubG9hZChmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vbmF2aWdhdGlvblwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5yZXF1aXJlKCdmb3JtZGF0YS1wb2x5ZmlsbCcpO1xuXG4vL2RlZmF1bHRzIGZvciB0aGUgWEhSRm9ybSBjbGFzc1xuY29uc3QgWEhSRm9ybURlZmF1bHRzID0ge1xuICAgIHhoclN1Ym1pdDogdHJ1ZSwgLy9zdWJtaXQgdGhlIGZvcm0gdXNpbmcgWEhSIGluc3RlYWQgb2YgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgc3VibWl0VVJMOm51bGwsIC8vd2lsbCBiZSBncmFiYmVkIGZyb20gdGhlIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlLCBvciBmYWxsYmFjayB0byB0aGUgVVJMIHRoZSBmb3JtIHdhcyByZXRyaWV2ZWQgZnJvbVxuICAgIHN1Ym1pdE1ldGhvZDpudWxsLCAvL3dpbGwgYmUgZ3JhYmJlZCBmcm9tIHRoZSBmb3JtJ3MgbWV0aG9kIGF0dHJpYnV0ZSwgb3IgZmFsbGJhY2sgdG8gXCJQT1NUXCJcbiAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UsIGZvcm0peyBhbGVydChlcnJvcik7IH0sIC8vY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIGFuZCBmYWlsc1xuICAgIG9uU3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIGZvcm0peyAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgaWYodHlwZW9mIHJlc3BvbnNlLnN1Y2Nlc3MgPT09IFwic3RyaW5nXCIpeyBhbGVydChyZXNwb25zZS5zdWNjZXNzKTsgfVxuICAgICAgICBlbHNleyBhbGVydChcIllvdXIgc3VibWlzc2lvbiBoYXMgYmVlbiByZWNlaXZlZFwiKTsgfVxuICAgIH0sXG4gICAgLy92YWxpZGF0ZSB0aGUgZm9ybSwgZGlzcGxheSBhbnkgZXJyb3JzIGFuZCByZXR1cm4gZmFsc2UgdG8gYmxvY2sgc3VibWlzc2lvblxuICAgIHZhbGlkYXRlRm9ybTogZnVuY3Rpb24oZm9ybSl7XG4gICAgICAgIC8vYWRkIC53YXMtdmFsaWRhdGVkIGZvciBib290c3RyYXAgdG8gc2hvdyBlcnJvcnNcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgLy9pZiB0aGVyZSBhcmUgYW55IDppbnZhbGlkIGVsZW1lbnRzLCB0aGUgZm9ybSBpcyBub3QgdmFsaWRcbiAgICAgICAgY29uc3QgaXNfdmFsaWQgPSAhZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xuXG4gICAgICAgIC8vaWYgaXQncyB2YWxpZCwgY2xlYXIgdGhlIHZhbGlkYXRpb24gaW5kaWNhdG9yc1xuICAgICAgICBpZiggaXNfdmFsaWQgKSBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcy12YWxpZGF0ZWQnKTtcblxuICAgICAgICByZXR1cm4gaXNfdmFsaWQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBYSFJGb3JtXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHN1Ym1pdCBhIGZvcm0gdmlhIFhIUiBhbmQgZWFzaWx5IGhhbmRsZSB0aGUgcmVzdWx0c1xuICovXG5leHBvcnQgY2xhc3MgWEhSRm9ybSB7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtIGNhbiBiZSBqdXN0IGFib3V0IGFueSBkYXRhdHlwZSAtIHVzZXMgZG9tLmdldEVsZW1lbnQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZvcm0sIG9wdGlvbnMgPSB7fSl7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIGlmKCB0eXBlb2Ygb3B0aW9ucyAhPT0gXCJvYmplY3RcIiB8fCBvcHRpb25zID09PSBudWxsICkgdGhyb3cgYCR7b3B0aW9uc30gbXVzdCBiZSBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vZXh0ZW5kIGRlZmF1bHRzIHdpdGggcHJvdmlkZWQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gey4uLlhIUkZvcm1EZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRGb3JtKGZvcm0pO1xuICAgICAgICB0aGlzLnNldFZhbGlkYXRlQ2FsbGJhY2sob3B0aW9ucy52YWxpZGF0ZUZvcm0pO1xuICAgICAgICB0aGlzLnNldFhIUlN1Ym1pdChvcHRpb25zLnhoclN1Ym1pdCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0TWV0aG9kKG9wdGlvbnMuc3VibWl0TWV0aG9kKTtcbiAgICAgICAgdGhpcy5zZXRTdWJtaXRVUkwob3B0aW9ucy5zdWJtaXRVUkwpO1xuICAgICAgICB0aGlzLm9uU3VjY2VzcyhvcHRpb25zLm9uU3VjY2Vzcyk7XG4gICAgICAgIHRoaXMub25FcnJvcihvcHRpb25zLm9uRXJyb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgc2V0VmFsaWRhdGVDYWxsYmFjayhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIHZhbGlkYXRlIGNhbGxiYWNrIGFuZCBwYXNzZXMgdGhlIGZvcm1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHZhbGlkYXRlKGZvcm0pe1xuICAgICAgICBpZiggdHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIgKSBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrKGZvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldEZvcm0oZm9ybSl7XG4gICAgICAgIGlmKCAhZm9ybSB8fCB0eXBlb2YgZm9ybSA9PT0gJ3VuZGVmaW5lZCcgKSB0aHJvdyBgRm9ybSBlbGVtZW50IGlzIHJlcXVpcmVkYDtcblxuICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGlmKCAhZm9ybSApIHRocm93IGBJbnZhbGlkIGZvcm0gZWxlbWVudCByZWNlaXZlZGA7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfEVsZW1lbnR8SFRNTERvY3VtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgeW91IHdhbnQgdGhlIGZvcm0gdG8gYmUgc3VibWl0dGVkIHVzaW5nIGFuIFhIUiByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAtIGJvb2xcbiAgICAgKi9cbiAgICBzZXRYSFJTdWJtaXQoZW5hYmxlZCl7XG4gICAgICAgIHRoaXMuX3hoclN1Ym1pdCA9ICEhZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG93IHRvIHN1Ym1pdCB0aGUgZm9ybSAtIGlmIHNldCB0byBudWxsLCB0aGUgbWV0aG9kIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIGZvcm0nc1xuICAgICAqICBtZXRob2QgYXR0cmlidXRlIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0TWV0aG9kKG1ldGhvZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiICYmIG1ldGhvZCAhPT0gbnVsbCApIHRocm93IGAke21ldGhvZH0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fc3VibWl0TWV0aG9kID0gbWV0aG9kO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBmb3JtIHN1Ym1pc3Npb24gbWV0aG9kIChQT1NULCBHRVQsIGV0YylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRNZXRob2QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdE1ldGhvZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIHRvIHN1Ym1pdCB0aGUgZm9ybSB0b1xuICAgICAqXG4gICAgICogSWYgbnVsbCwgdGhlIGZvcm0ncyBhY3Rpb24gYXR0cmlidXRlIHdpbGwgYmUgdXNlZC5cbiAgICAgKiBVc2UgYSBmdW5jdGlvbiBpZiB5b3Ugd2FudCB0byBkeW5hbWljYWxseSBnZW5lcmF0ZSB0aGUgVVJMIGp1c3QgcHJpb3IgdG8gdGhlIHJlcXVlc3RcbiAgICAgKiAgLSB0aGUgZnVuY3Rpb24gd2lsbCByZWNlaXZlIHRoZSBmb3JtIGFzIGEgcGFyYW1cbiAgICAgKiBHZW5lcmFsbHkgc3BlYWtpbmcgYSBzdHJpbmcgaXMgc3VmZmljaWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgJiYgdHlwZW9mIHVybCAhPT0gXCJmdW5jdGlvblwiXG4gICAgICAgICAgICAmJiB1cmwgIT09IG51bGwgKSB0aHJvdyBgJHt1cmx9IG11c3QgYmUgYSBzdHJpbmcsIGZ1bmN0aW9uLCBvciBudWxsYDtcblxuICAgICAgICB0aGlzLl9zdWJtaXRVUkwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIFVSTCB0aGUgZm9ybSB3aWxsIGJlIHN1Ym1pdHRlZCB0b1xuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfCp9XG4gICAgICovXG4gICAgZ2V0U3VibWl0VVJMKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJtaXRVUkw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgYWN0dWFsIHN1Ym1pdCBVUkwgYWZ0ZXIgcnVubmluZyB0aGUgZnVuY3Rpb24gKGlmIGl0IGlzIG9uZSksIGFuZCB0dXJuaW5nIHRvIGZhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSl7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIHRoZSBVUkwgaXMgbnVsbCwgZ3JhYiBmcm9tIHRoZSBmb3JtXG4gICAgICAgIGlmKCB1cmwgPT09IG51bGwgKXtcbiAgICAgICAgICAgIHJldHVybiBmb3JtLmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgdGhlIG9uIHN1Ym1pdCBoYW5kbGVyIChvbmx5IGlmIHhoclN1Ym1pdCBpcyB0cnVlKVxuICAgICAqXG4gICAgICogUGFzcyB0aGUgZm9ybSBvciBmb3JtIHNlbGVjdG9yXG4gICAgICovXG4gICAgYXR0YWNoU3VibWl0SGFuZGxlcihmb3JtKXtcbiAgICAgICAgaWYoICF0aGlzLl94aHJTdWJtaXQgKSByZXR1cm47XG5cbiAgICAgICAgLy9pZiBub3QgcGFzc2VkLCBnZXQgaXQgZnJvbSB0aGlzIG9iamVjdFxuICAgICAgICBpZiggdHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIgKSB7XG4gICAgICAgICAgICBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGZvcm0gPSBkb20uZ2V0RWxlbWVudChmb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZm9ybSApIHRocm93IGBGb3JtIGVsZW1lbnQgbm90IHJlY2VpdmVkLCBjYW5ub3QgYXR0YWNoIHN1Ym1pdCBoYW5kbGVyYDtcblxuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy9pZiB4aHIgc3VibWl0IGlzIGRpc2FibGVkLCBkb24ndCBibG9jayB0aGUgZGVmYXVsdCBhY3Rpb25cbiAgICAgICAgICAgIGlmKCAhc2VsZi5feGhyU3VibWl0ICkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBzZWxmLnN1Ym1pdEZvcm0oZm9ybSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgKlxuICAgICAqIFlvdXIgZnVuY3Rpb24gd2lsbCByZWNlaXZlIDIgcGFyYW1zLCB0aGUgZmlyc3QgaXMgdGhlIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlciBhbmQgdGhlIHNlY29uZCBpcyB0aGUgZm9ybSBvbiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgb25TdWNjZXNzKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHRoaXMuX29uU3VjY2Vzcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICovXG4gICAgY2xlYXJPblN1Y2Nlc3NDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGFsbCBvblN1Y2Nlc3MgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIHRyaWdnZXJPblN1Y2Nlc3MocmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuZm9yRWFjaChmdW5jdGlvbihvblN1Y2Nlc3Mpe1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25FcnJvciA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgdGhpcy5fb25FcnJvci5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbkVycm9yIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgY2xlYXJPbkVycm9yQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uRXJyb3IgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIG9uRXJyb3IgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHRyaWdnZXJPbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vbkVycm9yLmZvckVhY2goZnVuY3Rpb24ob25FcnJvcil7XG4gICAgICAgICAgICBvbkVycm9yKGVycm9yLCByZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXRzIHRoZSBmb3JtIHVzaW5nIFhIUlxuICAgICAqXG4gICAgICogMSkgRGV0ZXJtaW5lcyB0aGUgVVJMXG4gICAgICogMikgRGV0ZXJtaW5lcyB0aGUgbWV0aG9kIChHRVQsIFBPU1QsIFBBVENILCBldGMpXG4gICAgICogMykgRGV0ZXJtaW5lcyBpZiB0aGUgZm9ybSBpcyB2YWxpZFxuICAgICAqIDQpIEdldHMgdGhlIGZvcm0ncyB2YWx1ZXNcbiAgICAgKiA1KSBTdWJtaXRzIHRoZSBmb3JtXG4gICAgICogNikgUmVwbGFjZXMgdGhlIGZvcm0sIHJ1bnMgb25FcnJvciwgb3IgcnVucyBvblN1Y2Nlc3MgYmFzZWQgb24gdGhlIHJlc3BvbnNlIChzZWUgbmV4dCBsaW5lKVxuICAgICAqICBSZXNwb25zZSBUeXBlID0gQWN0aW9uIFRha2VuXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBmb3JtIGluc2lkZSA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIHN0cmluZyBodG1sIHdpdGggaW5jb21pbmdFbGVtZW50U2VsZWN0b3Igc2V0LCBidXQgbm90IGZvdW5kID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgc3RyaW5nIC0gcmVwbGFjZSBmb3JtIG9uIHBhZ2Ugd2l0aCBlbnRpcmUgcmVzcG9uc2VcbiAgICAgKiAgICBvYmplY3QuaHRtbCA9IHJlcGxhY2UgZm9ybVxuICAgICAqICAgIG9iamVjdC5lcnJvciA9IGtpY2tvZmYgb25FcnJvclxuICAgICAqICAgIG9iamVjdCBpbiBnZW5lcmFsID0ga2lja29mZiBvblN1Y2Nlc3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge2Zvcm18Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBzdWJtaXRGb3JtKGZvcm0pIHtcbiAgICAgICAgLy9ibG9jayBtdWx0aXBsZSBmb3JtIHN1Ym1pc3Npb25zIGF0IHRoZSBzYW1lIHRpbWUgdW50aWwgdGhpcyBvbmUgaXMgY29tcGxldGVcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9wcm9jZXNzaW5nID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICBpZiggdGhpcy5fcHJvY2Vzc2luZyApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gdHJ1ZTtcblxuICAgICAgICAvL2NhY2hlIGZvciB1c2UgaW5zaWRlIG90aGVyIHNjb3Blc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IFVSTFxuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRGaW5hbFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IG1ldGhvZFxuICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5nZXRTdWJtaXRNZXRob2QoKTtcbiAgICAgICAgLy9pZiBpdCdzIG51bGwsIGdyYWIgaXQgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggbWV0aG9kID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGZvcm0uYXR0cmlidXRlcy5tZXRob2QgIT09ICd1bmRlZmluZWQnICl7IC8vY2hlY2sgdGhhdCBpdCB3YXMgc2V0IGV4cGxpY2l0bHlcbiAgICAgICAgICAgICAgICBtZXRob2QgPSBmb3JtLm1ldGhvZDsgLy9ncmFiIEpVU1QgdGhlIHZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9kZWZhdWx0IHRvIHBvc3QgaWYgd2Ugc3RpbGwgZG9uJ3QgaGF2ZSBhIG1ldGhvZCBhbmQgbG93ZXJjYXNlIGFueXRoaW5nIHRoYXQgd2FzIHByb3ZpZGVkXG4gICAgICAgIG1ldGhvZCA9ICFtZXRob2QgPyAncG9zdCcgOiBtZXRob2QudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAvL2lmIG5vdCB2YWxpZCwgc3RvcCBoZXJlIHVudGlsIHRoZXkgcmVzdWJtaXRcbiAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlKGZvcm0pKXtcbiAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIC8vZ2V0IGZvcm0gdmFsdWVzXG4gICAgICAgIGNvbnN0IGZvcm1fdmFsdWVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybVZhbHVlcyhmb3JtKSxcbiAgICAgICAgICAgIGUgPT4gZS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9JylcbiAgICAgICAgKS5qb2luKCcmJyk7XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1fdmFsdWVzLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcsIGl0J3MgcHJvYmFibHkvaG9wZWZ1bGx5IHRoZSBmb3JtIHdpdGggaW5saW5lIGVycm9yc1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIC8vaWYgd2UgYXJlIGxvb2tpbmcgZm9yIGFuIGVsZW1lbnQgd2l0aGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIGZvcm0gd2FzIG5vdCBmb3VuZCBpbiBpdCwgbGV0J3MgYXNzdW1lIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZm9ybS4gSWYgbm90LCB0aGVuIG1heWJlXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhcGFyc2VkLmh0bWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihgJHtzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJgLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9LCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBKU09OXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgdGhlIEhUTUwsIGp1c3QgcG9wIGl0IGJhY2sgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5odG1sICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YS5odG1sfSwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyBhbiBlcnJvciBtZXNzYWdlLCB0cmlnZ2VyIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIGlmKCBkYXRhLmVycm9yICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGRhdGEuZXJyb3IsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgZG9lc24ndCBBUFBFQVIgdG8gYmUgdGhlIGZvcm0gYWdhaW4sIG9yIGFuIGVycm9yLCBsZXQncyBjYWxsIGl0IGEgc3VjY2Vzc1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPblN1Y2Nlc3MoZGF0YSwgZm9ybSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZm9ybSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkXG4gICAgICpcbiAgICAgKiBPdmVycmlkZS9leHRlbmQgdGhpcyBpZiB5b3Ugd2FudCB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIHByaW9yIHRvIHN1Ym1pc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhXG4gICAgICovXG4gICAgZ2V0Rm9ybVZhbHVlcyhmb3JtKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICB9XG59IiwiaW1wb3J0IHtYSFJGb3JtfSBmcm9tIFwiLi9YSFJGb3JtXCI7XG5pbXBvcnQge0Zvcm1Gcm9tVVJMfSBmcm9tIFwiLi9Gb3JtRnJvbVVSTFwiO1xuXG5leHBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vcmVxdWVzdFwiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2Nsb25lXCI7XG5pbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcblxuY29uc3QgbmF2aWdhdGlvbkRlZmF1bHRzID0ge1xuICAgIHRyYWNrSGlzdG9yeTpmYWxzZSxcbiAgICBwdXNoU3RhdGU6dHJ1ZSxcbiAgICBsb2FkZXJFbmFibGVkOnRydWUsXG4gICAgbG9hZGVyRGVsYXk6MzAwLFxuICAgIGluY29taW5nRWxlbWVudDonYm9keScsXG4gICAgcmVwbGFjZUVsZW1lbnQ6J2JvZHknLFxuICAgIGxvYWRlckNsYXNzZXM6J3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIGxvYWRlcklubmVyRGl2Q2xhc3NlczoncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcsXG59O1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gc2ltdWxhdGUgYSBwYWdlIGNoYW5nZSBieSB1c2luZyBhbiBYSFIgcmVxdWVzdCB0byBncmFiIGNvbnRlbnQgYW5kIHJlcGxhY2UgaXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgYnJvd3NlcidzIGhpc3RvcnksIHN3YXBzIG91dCBtZXRhIHRhZ3MsIHVwZGF0ZXMgdGhlIHRpdGxlLCBhbmQgbW9yZVxuICpcbiAqIFVzZSBvbmxvYWQgYW5kIG9uVW5sb2FkIGhvb2tzIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGZvciB0aGluZ3MgbGlrZSB0cmlnZ2VyaW5nIGEgZ29vZ2xlIGFuYWx5dGljcyBwYWdlIHZpZXdcbiAqICBvciBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyBjb25maWcgb3B0aW9ucyBpbiBidWxrIGJ5IGV4dGVuZGluZyB0aGUgY3VycmVudCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMgdGhpc1xuICAgICAqL1xuICAgIHNldENvbmZpZzogZnVuY3Rpb24oZGF0YSA9IHt9KXtcbiAgICAgICAgZGF0YSA9IHsuLi50aGlzLmdldENvbmZpZygpLCAuLi5kYXRhfTtcblxuICAgICAgICB0aGlzLnRyYWNrSGlzdG9yeSA9IGRhdGEudHJhY2tIaXN0b3J5O1xuICAgICAgICB0aGlzLnB1c2hTdGF0ZSA9IGRhdGEucHVzaFN0YXRlO1xuICAgICAgICB0aGlzLmxvYWRlckVuYWJsZWQgPSBkYXRhLmxvYWRlckVuYWJsZWQ7XG5cbiAgICAgICAgdGhpcy5zZXRMb2FkZXJEZWxheShkYXRhLmxvYWRlckRlbGF5KTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnQoZGF0YS5pbmNvbWluZ0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnNldFJlcGxhY2VFbGVtZW50KGRhdGEucmVwbGFjZUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2xvYWRlckNsYXNzZXMgPSBkYXRhLmxvYWRlckNsYXNzZXM7XG4gICAgICAgIHRoaXMuX2xvYWRlcklubmVyRGl2Q2xhc3NlcyA9IGRhdGEubG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgY29uZmlnIHRvIGRlZmF1bHRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0aGlzO1xuICAgICAqL1xuICAgIHJlc2V0Q29uZmlnOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldENvbmZpZyhuYXZpZ2F0aW9uRGVmYXVsdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYmFzaWMgY29uZmlnIG9wdGlvbnMgYXMgYW4gb2JqZWN0XG4gICAgICogQHJldHVybnMge3tsb2FkZXJJbm5lckRpdkNsYXNzZXM6ICgqfHN0cmluZyksIHB1c2hTdGF0ZTogKiwgbG9hZGVyRGVsYXk6ICosIGxvYWRlckNsYXNzZXM6IHN0cmluZywgdHJhY2tIaXN0b3J5OiAqLCBsb2FkZXJFbmFibGVkOiAqLCByZXBsYWNlRWxlbWVudDogKCp8c3RyaW5nKSwgaW5jb21pbmdFbGVtZW50OiAoKnxzdHJpbmcpfX1cbiAgICAgKi9cbiAgICBnZXRDb25maWc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFja0hpc3Rvcnk6dGhpcy50cmFja0hpc3RvcnksXG4gICAgICAgICAgICBwdXNoU3RhdGU6dGhpcy5wdXNoU3RhdGUsXG4gICAgICAgICAgICBsb2FkZXJFbmFibGVkOnRoaXMubG9hZGVyRW5hYmxlZCxcbiAgICAgICAgICAgIGxvYWRlckRlbGF5OnRoaXMuZ2V0TG9hZGVyRGVsYXkoKSxcbiAgICAgICAgICAgIGluY29taW5nRWxlbWVudDp0aGlzLmdldEluY29taW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQ6dGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpLFxuICAgICAgICAgICAgbG9hZGVyQ2xhc3Nlczp0aGlzLl9sb2FkZXJDbGFzc2VzLFxuICAgICAgICAgICAgbG9hZGVySW5uZXJEaXZDbGFzc2VzOnRoaXMuX2xvYWRlcklubmVyRGl2Q2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYWdlcyB0aGF0IHdlcmUgbG9hZGVkIGluIGFuIGFycmF5XG4gICAgICovXG4gICAgdHJhY2tIaXN0b3J5OiBuYXZpZ2F0aW9uRGVmYXVsdHMudHJhY2tIaXN0b3J5LFxuICAgIFxuICAgIC8qKlxuICAgICAqIEdyYWJzIGFsbCBwYWdlcyB0aGF0IHdlcmUgbG9hZGVkIHByZXZpb3VzbHkgKGRvZXMgbm90IHBlcnNpc3QgaWYgdGhlIHBhZ2UgaXMgcmVsb2FkZWQpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRIaXN0b3J5OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2hpc3RvcnkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbGFzdCBwYWdlJ3MgdXJsIGFuZCByb3V0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgZ2V0TGFzdEhpc3RvcnlSZWNvcmQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3RvcnkucG9wKCk7XG4gICAgfSxcbiAgICBfYWRkSGlzdG9yeUl0ZW0odXJsLCByb3V0ZSl7XG4gICAgICAgIGlmKCAhdGhpcy50cmFja0hpc3RvcnkgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlID09PSBcInVuZGVmaW5lZFwiID8gdGhpcy5nZXRSb3V0ZUZyb21NZXRhKCkgOiByb3V0ZTtcbiAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHsndXJsJzp1cmwsICdyb3V0ZSc6cm91dGV9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBfaGlzdG9yeTogW10sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZSdzIG9ubG9hZCBjYWxsYmFja1xuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbmxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCApIHRocm93IGAke2RhdGF9IG11c3QgYmUgYW4gb2JqZWN0YDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGNsb25lLmdldFZhbHVlT3JDbG9uZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXREYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fZGF0YSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgc2luZ2xlIHZhbHVlIGluIHlvdXIgZGF0YSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICovXG4gICAgc2V0RGF0YUl0ZW06IGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHNpbmdsZSB2YWx1ZSBmcm9tIHlvdXIgZGF0YSBvYmplY3Qgb3IgaWYgaXQgZG9lc24ndCBleGlzdCBpdCdsbCByZXR1cm4gbnVsbFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIG1peGVkXG4gICAgICovXG4gICAgZ2V0RGF0YUl0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIC8vaWYgbm90IGRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIG51bGxcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuX2RhdGFba2V5XSA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2RhdGFba2V5XSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe30pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHNpbmdsZSB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyRGF0YUl0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJyApe1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIF9kYXRhOiB7fSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5faW5jb21pbmdFbGVtZW50ID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG4gICAgX2luY29taW5nRWxlbWVudDogbmF2aWdhdGlvbkRlZmF1bHRzLmluY29taW5nRWxlbWVudCxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggaW5jb21pbmcgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUVsZW1lbnQgPSBzZWxlY3Rvcl9zdHJpbmc7XG4gICAgfSxcbiAgICBfcmVwbGFjZUVsZW1lbnQ6IG5hdmlnYXRpb25EZWZhdWx0cy5yZXBsYWNlRWxlbWVudCxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHVzaCB0aGUgcGFnZSB0aGF0IHdhcyBsb2FkZWQgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICovXG4gICAgcHVzaFN0YXRlOiBuYXZpZ2F0aW9uRGVmYXVsdHMucHVzaFN0YXRlLFxuXG4gICAgLyoqXG4gICAgICogR3JhYnMgSFRNTCBmcm9tIGEgVVJMIGFuZCByZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIDEpIFNob3dzIGEgbG9hZGVyIChpZiBlbmFibGVkKVxuICAgICAqIDIpIFJlcXVlc3RzIGNvbnRlbnQgZnJvbSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgICogMykgUmVwbGFjZXMgaXQgb24gdGhlIHBhZ2UgKGFuZCBhbGwgdGhlIG1hZ2ljIHJlcGxhY2VQYWdlQ29udGVudCBkb2VzLCBzZWUgY29tbWVudHMgb24gdGhhdCBtZXRob2QgYmVsb3cpXG4gICAgICogNCkgSWYgdGhlcmUncyBhIGNhbGxiYWNrIHByb3ZpZGVkLCBpdCdsbCBiZSBydW4gYWZ0ZXJ3YXJkcyAoaXQgcmVjZWl2ZXMgdGhlIG5ld2x5IHJlcGxhY2VkIGVsZW1lbnQgYXMgYSBwYXJhbSlcbiAgICAgKlxuICAgICAqIE9uIGVycm9yLCBpdCB0cmlnZ2VycyBvbkZhaWwgY2FsbGJhY2tzIHlvdSd2ZSBhdHRhY2hlZCBhbmQgcHJvdmlkZXMgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBvbmxvYWRcbiAgICAgKiBAcGFyYW0gb3B0aW9uczp7aW5jb21pbmdFbGVtZW50LCByZXBsYWNlRWxlbWVudCwgcHVzaFN0YXRlfVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICh1cmwsIGRhdGEgPSB7fSwgb25sb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy92YWxpZGF0ZSBvcHRpb25zIGhhcyB0aGVzZSBrZXlzIChvciBub25lIGF0IGFsbClcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KG9wdGlvbnMsIFsnaW5jb21pbmdFbGVtZW50JywgJ3JlcGxhY2VFbGVtZW50JywgJ3B1c2hTdGF0ZSddLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9vdmVycmlkZSBnbG9iYWwgZGF0YSB3aXRoIHBhc3NlZCBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4uc2VsZi5nZXREYXRhKCksIC4uLmRhdGF9O1xuXG4gICAgICAgIC8vc2V0IHZhbHVlc1xuICAgICAgICBjb25zdCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLmluY29taW5nRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IG9wdGlvbnMuaW5jb21pbmdFbGVtZW50IDogdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgcmVwbGFjZUVsZW1lbnRTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLnJlcGxhY2VFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy5yZXBsYWNlRWxlbWVudCA6IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgcmVwbGFjZUVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudChyZXBsYWNlRWxlbWVudFNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHVzaFN0YXRlID0gdHlwZW9mIG9wdGlvbnMucHVzaFN0YXRlICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy5wdXNoU3RhdGUgOiB0aGlzLnB1c2hTdGF0ZTtcblxuICAgICAgICAvL2NhY2hlIHJvdXRlIChheGlvcyBpcyBhc3luYylcbiAgICAgICAgY29uc3QgY3VycmVudF9yb3V0ZSA9IHNlbGYuZ2V0Um91dGVGcm9tTWV0YSgpO1xuXG4gICAgICAgIC8vcnVuIG9uQmVmb3JlUmVxdWVzdCBjYWxsYmFja3MgYW5kIGlmIGFueSByZXR1cm4gZmFsc2UsIGRvbid0IHNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgaWYoICFzZWxmLl90cmlnZ2VyT25CZWZvcmVSZXF1ZXN0KHJlcGxhY2VFbGVtZW50LCByZXBsYWNlRWxlbWVudFNlbGVjdG9yLCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciwgY3VycmVudF9yb3V0ZSwgZGF0YSkgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlcGxhY2VQYWdlQ29udGVudChyZXNwb25zZS5kYXRhLCB1cmwsIGluY29taW5nRWxlbWVudFNlbGVjdG9yLCByZXBsYWNlRWxlbWVudCwgcHVzaFN0YXRlLCBjdXJyZW50X3JvdXRlLCBkYXRhLCBvbmxvYWQpO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIHNlbGYuaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICAvL2F0IHRoaXMgcG9pbnQsIGl0IGNhbiBvbmx5IGJlIGEgc3RyaW5nIGVycm9yIG1lc3NhZ2Ugb3IgYW4gYXhpb3MgZXJyb3Igb2JqZWN0XG4gICAgICAgICAgICAvL3NvIHNldCBib3RoIHZhbHVlcyBhY2NvcmRpbmdseVxuICAgICAgICAgICAgY29uc3QgYXhpb3NfZXJyb3IgPSB0eXBlb2YgZXJyb3IgPT09IFwib2JqZWN0XCIgJiYgZXJyb3IgIT09IG51bGwgJiYgZXJyb3IuaXNBeGlvc0Vycm9yID8gZXJyb3IgOiBudWxsO1xuICAgICAgICAgICAgZXJyb3IgPSBheGlvc19lcnJvciAhPT0gbnVsbCA/IGF4aW9zX2Vycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQgOiBlcnJvcjtcblxuICAgICAgICAgICAgc2VsZi5fdHJpZ2dlckZhaWwoZXJyb3IsIHVybCwgZGF0YSwgYXhpb3NfZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0aGUgbG9hZGVyIGF0IHRoZSB0b3AgaXMgZW5hYmxlZCB0byBkaXNwbGF5IG9uIHNsb3cgcmVxdWVzdHNcbiAgICAgKi9cbiAgICBsb2FkZXJFbmFibGVkOiBuYXZpZ2F0aW9uRGVmYXVsdHMubG9hZGVyRW5hYmxlZCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24gKGRlbGF5X2luX21zID0gMzAwKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGVsYXlfaW5fbXMgIT09IFwibnVtYmVyXCIpIHRocm93IGAke2RlbGF5X2luX21zfSBtdXN0IGJlIGFuIGludGVnZXJgO1xuICAgICAgICB0aGlzLl9sb2FkZXJEZWxheSA9IGRlbGF5X2luX21zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIF9sb2FkZXJEZWxheTogbmF2aWdhdGlvbkRlZmF1bHRzLmxvYWRlckRlbGF5LFxuICAgIGdldExvYWRlckRlbGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJEZWxheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZSBpZiB0aGUgcmVxdWVzdCB0YWtlcyBtb3JlIHRoYW4gdGhlIGRlbGF5IHNldCBhYm92ZSB0byBjb21wbGV0ZVxuICAgICAqL1xuICAgIHNob3dMb2FkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFzZWxmLmxvYWRlckVuYWJsZWQpIHJldHVybjtcblxuICAgICAgICBzZWxmLmxvYWRlcl90aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfSwgc2VsZi5nZXRMb2FkZXJEZWxheSgpKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSGlkZXMgdGhlIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlXG4gICAgICovXG4gICAgaGlkZUxvYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFzZWxmLmxvYWRlckVuYWJsZWQpIHJldHVybjtcblxuICAgICAgICAvL2lmIHRoZSBsb2FkZXIgc3RpbGwgaGFzbid0IHNob3duIHlldCwgcHJldmVudCBpdCBiZWNhdXNlIHRoZSByZXF1ZXN0IHdhcyB2ZXJ5IGZhc3RcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChzZWxmLmxvYWRlcl90aW1lb3V0KTtcblxuICAgICAgICAvL2hpZGUgdGhlIGxvYWRlclxuICAgICAgICBzZWxmLl9nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDbGFzc2VzIGZvciB0aGUgbG9hZGVyXG4gICAgICogRGVmYXVsdHMgYXJlIGZvciBib290c3RyYXAgKHdpdGggdGhlIGV4Y2VwdGlvbiBvZiBwYWdlLW5hdmlnYXRpb24tbG9hZGVyKVxuICAgICAqL1xuICAgIF9sb2FkZXJDbGFzc2VzOiBuYXZpZ2F0aW9uRGVmYXVsdHMubG9hZGVyQ2xhc3NlcyxcbiAgICBfbG9hZGVySW5uZXJEaXZDbGFzc2VzOiBuYXZpZ2F0aW9uRGVmYXVsdHMubG9hZGVySW5uZXJEaXZDbGFzc2VzLFxuXG4gICAgLyoqXG4gICAgICogSWYgZW5hYmxlZCwgYWRkcyBhIGxvYWRlciB0byB0aGUgcGFnZSBhbmQgY2FjaGVzIGEgcmVmZXJlbmNlIHRvIGl0LCB0aGVuIHJldHVybnMgdGhhdCByZWZlcmVuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEVsZW1lbnRcbiAgICAgKi9cbiAgICBfZ2V0TG9hZGVyRWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKCFzZWxmLmxvYWRlckVuYWJsZWQpIHJldHVybjtcbiAgICAgICAgaWYgKHNlbGYubmF2TG9hZGVyQ2FjaGVkKSByZXR1cm4gc2VsZi5uYXZMb2FkZXJDYWNoZWQ7XG5cbiAgICAgICAgLy9wcmVwZW5kIHRoZSBsb2FkZXIgZWxlbWVudHNcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gc2VsZi5fbG9hZGVyQ2xhc3NlcztcbiAgICAgICAgbGV0IGlubmVyX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcl9kaXYuY2xhc3NMaXN0ID0gc2VsZi5fbG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuICAgICAgICBkaXYuYXBwZW5kKGlubmVyX2Rpdik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBjYWNoZSBhIHJlZmVyZW5jZSB0byBpdCBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgIHNlbGYubmF2TG9hZGVyQ2FjaGVkID0gZG9tLmdldEVsZW1lbnQoJy5wYWdlLW5hdmlnYXRpb24tbG9hZGVyJyk7XG5cbiAgICAgICAgcmV0dXJuIHNlbGYubmF2TG9hZGVyQ2FjaGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnLCBpZiBpdCBleGlzdHNcbiAgICAgKlxuICAgICAqIElmIHlvdSBkb24ndCBwcm92aWRlIEhUTUwsIGl0J2xsIGdyYWIgaXQgZnJvbSB0aGUgY3VycmVudCBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge2FueSB8IEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0Um91dGVGcm9tTWV0YTogZnVuY3Rpb24gKGh0bWwgPSBkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgIHZhciByb3V0ZSA9IGh0bWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJjdXJyZW50X3JvdXRlXCJdJyk7XG4gICAgICAgIHJvdXRlID0gcm91dGUgPyByb3V0ZS5jb250ZW50IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayA9IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyA/IG51bGwgOiBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5sb2FkKHJlcXVlc3QuZ2V0RnVsbFVSTCgpLCB7fSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNlbmRzIHRoZSB1c2VyIHRvIGEgbmV3IHBhZ2Ugd2l0aG91dCBYSFJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICB0aGlzLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYXJyaXZpbmcgYXQgYSBuZXcgcGFnZSwgeW91IG1pZ2h0IG5lZWQgdG8gaW5zdGFudGlhdGUgc29tZSBzdHVmZlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX29ubG9hZENhbGxiYWNrczogW10sXG4gICAgb25sb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl9vbmxvYWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25sb2FkOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29ubG9hZENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gbGVhdmluZyBhIHBhZ2UgeW91IG1pZ2h0IG5lZWQgdG8gZGVzdHJveSBzb21lIHBsdWdpbnMgb3Igc29tZXRoaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfb25VbmxvYWRDYWxsYmFja3M6IFtdLFxuICAgIG9uVW5sb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl9vblVubG9hZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmVPblVubG9hZDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLl9vblVubG9hZENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlIG5ldyBwYWdlIGZhaWxzIHRvIGxvYWQsIHlvdSBzaG91bGQgcHJvYmFibHkgdGVsbCB0aGUgdXNlci90cnkgYWdhaW4vbG9nIHRoZSBpc3N1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX29uRmFpbENhbGxiYWNrczogW10sXG4gICAgb25GYWlsOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25GYWlsOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQWRkIGFzIG1hbnkgY2FsbGJhY2tzIGFzIHlvdSdkIGxpa2UgdG8gcnVuIHJpZ2h0IGJlZm9yZSB0aGUgcmVxdWVzdCBpcyBtYWRlXG4gICAgICpcbiAgICAgKiBJZiBhbnkgb2YgdGhlbSByZXR1cm4gZmFsc2UsIHRoZSByZXF1ZXN0IHdpbGwgYmUgcHJldmVudGVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyBzZWxmXG4gICAgICovXG4gICAgb25CZWZvcmVSZXF1ZXN0OiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fb25CZWZvcmVSZXF1ZXN0Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZU9uQmVmb3JlUmVxdWVzdDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLl9vbkJlZm9yZVJlcXVlc3RDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgX29uQmVmb3JlUmVxdWVzdENhbGxiYWNrczogW10sXG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBvbiBhIG5ldyBwYWdlLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEFsc28gaW5jbHVkZXMgdGhlIHJvdXRlIG9mIHRoZSBuZXcgcGFnZSAoaWYgaXQgZXhpc3RzIGluIGEgbWV0YSB0YWcpIHNvIHRoYXQgeW91IGNhbiBraWNrIG9mZiBKUyBzcGVjaWZpYyB0byB0aGF0IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlbF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXBsYWNlZF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSByb3V0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgX3RyaWdnZXJPbmxvYWQ6IGZ1bmN0aW9uIChlbCwgZWxfc2VsZWN0b3IsIHJlcGxhY2VkX3NlbGVjdG9yLCByb3V0ZSwgZGF0YSkge1xuICAgICAgICB0aGlzLl9vbmxvYWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICBjYWxsYmFjayhlbCwgZGF0YSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOmVsLFxuICAgICAgICAgICAgICAgIHJlcGxhY2VkU2VsZWN0b3I6cmVwbGFjZWRfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBsZWF2aW5nIHRoZSBsYXN0IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBfdHJpZ2dlclVubG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3Rvciwgcm91dGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fb25VbmxvYWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICBjYWxsYmFjayhlbCwgZGF0YSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHJvdXRlOiByb3V0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiBmYWlsZWQsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIGF4aW9zX2Vycm9yXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX3RyaWdnZXJGYWlsOiBmdW5jdGlvbiAoZXJyb3IsIHVybCwgZGF0YSwgYXhpb3NfZXJyb3IpIHtcbiAgICAgICAgdGhpcy5fb25GYWlsQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IsIHVybCwgZGF0YSwgYXhpb3NfZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGFib3V0IHRvIGxvYWQgdGhlIG5leHQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIGluY29taW5nX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBfdHJpZ2dlck9uQmVmb3JlUmVxdWVzdDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3RvciwgaW5jb21pbmdfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKSB7XG4gICAgICAgIGxldCBwcmV2ZW50X3JlcXVlc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25VbmxvYWRDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICAvL3J1biB0aGUgY2FsbGJhY2sgYW5kIGdldCB0aGUgcmVzdWx0XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbCwgZGF0YSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGluY29taW5nU2VsZWN0b3I6aW5jb21pbmdfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3VsdCB3YXMgcHJvdmlkZWQgYXMgZmFsc2UsIHByZXZlbnQgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgcmVzdWx0ID09PSBcImJvb2xlYW5cIiAmJiAhcmVzdWx0ICl7XG4gICAgICAgICAgICAgICAgcHJldmVudF9yZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhcHJldmVudF9yZXF1ZXN0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byB0cmFjayB0aGUgYnJvd3NlcidzIGhpc3RvcnkgYnV0dG9ucyAoYmFjay9mb3J3YXJkKVxuICAgICAqXG4gICAgICogQHRvZG86IEludmVzdGlnYXRlIHBvc3NpYmxlIGlzc3VlIHdpdGggY2hyb21lIGNhY2hpbmcgYmFjayBidXR0b24gY29udGVudHMgYW5kIG5vdCBsb2FkaW5nIHRoZSBlbnRpcmUgcGFnZVxuICAgICAqL1xuICAgIGluaXRIaXN0b3J5SGFuZGxlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZm9yd2FyZCBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucHVzaHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2JhY2sgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCB7fSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIHB1c2hTdGF0ZTpmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aXRoIG5ldyBIVE1MXG4gICAgICpcbiAgICAgKiAxKSBUcmlnZ2VycyB1bmxvYWQoKVxuICAgICAqIDIpIFdhaXRzIDEwMG1zXG4gICAgICogMykgUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHNcbiAgICAgKiA0KSBSZXBsYWNlcyBhbGwgbWV0YSB0YWdzIChpbXBvcnRhbnQgZm9yIHNvY2lhbCBtZWRpYSBzaGFyaW5nIGFtb25nIG90aGVyIHRoaW5ncylcbiAgICAgKiA1KSBSZXBsYWNlcyB0aGUgY2Fub25pY2FsIHRhZ1xuICAgICAqIDYpIFJlcGxhY2VzIGFueSBjbGFzc2VzIG9uIHRoZSBib2R5IHNpbmNlIHRoZXkgYXJlIGdlbmVyYWxseSB1c2VkIHRvIGluZGljYXRlIHdoaWNoIHBhZ2UgeW91J3JlIG9uXG4gICAgICogNykgUHVzaGVzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAqIDgpIFNldHMgdGhlIHBhZ2UgdGl0bGVcbiAgICAgKiA5KSBSZXBsYWNlcyBjb250ZW50IGluIHRoZSBET01cbiAgICAgKiAxMCkgVHJpZ2dlcnMgb25sb2FkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKiBAcGFyYW0gY3VycmVudF9yb3V0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG9uZV90aW1lX2NhbGxiYWNrXG4gICAgICovXG4gICAgX3JlcGxhY2VQYWdlQ29udGVudChodG1sLCB1cmwsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBwdXNoX3N0YXRlID0gdHJ1ZSwgY3VycmVudF9yb3V0ZSA9IG51bGwsIGRhdGEgPSB7fSwgb25lX3RpbWVfY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZGVmYXVsdHNcbiAgICAgICAgaW5jb21pbmdfZWxfc2VsZWN0b3IgPSB0eXBlb2YgaW5jb21pbmdfZWxfc2VsZWN0b3IgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWxfc2VsZWN0b3I7XG4gICAgICAgIHJlcGxhY2VfZWxfc2VsZWN0b3IgPSB0eXBlb2YgcmVwbGFjZV9lbF9zZWxlY3RvciA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKSA6IHJlcGxhY2VfZWxfc2VsZWN0b3I7XG5cbiAgICAgICAgLy92YWxpZGF0ZSBpbmNvbWluZyBkYXRhXG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdGhyb3cgYFByb3ZpZGVkIHVybCAoJHt1cmx9KSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZ19lbF9zZWxlY3RvciAhPT0gJ3N0cmluZycpIHRocm93IGBpbmNvbWluZ19lbF9zZWxlY3RvciAoJHtpbmNvbWluZ19lbF9zZWxlY3Rvcn0pIG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VfZWxfc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB0aHJvdyBgcmVwbGFjZV9lbF9zZWxlY3RvciAoJHtyZXBsYWNlX2VsX3NlbGVjdG9yfSkgbXVzdCBiZSBhIHN0cmluZ2A7XG5cbiAgICAgICAgY29uc3QgcmVwbGFjZV9lbCA9IGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWxfc2VsZWN0b3IsIHRydWUpOyAvL2Vycm9yIGlmIG5vdCBmb3VuZFxuXG4gICAgICAgIC8vdHJpZ2dlciB0aGUgdW5sb2FkIGNhbGxiYWNrc1xuICAgICAgICBzZWxmLl90cmlnZ2VyVW5sb2FkKHJlcGxhY2VfZWwsIHJlcGxhY2VfZWxfc2VsZWN0b3IsIGN1cnJlbnRfcm91dGUsIGRhdGEpO1xuXG4gICAgICAgIC8vcGFyc2UgdGhlIHJlc3BvbnNlIHRvIGdyYWIgYW55dGhpbmcgdGhhdCB3ZSBuZWVkICh0aXRsZSwgbWV0YSwgY29udGVudCwgcm91dGUsIGV0YylcbiAgICAgICAgdmFyIHBhcnNlZCA9IHNlbGYuX3BhcnNlSFRNTChodG1sLCBpbmNvbWluZ19lbF9zZWxlY3Rvcik7XG5cbiAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICBpZiAocGFyc2VkLmh0bWwubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgZG9tLnJlbW92ZSgnbWV0YScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQocGFyc2VkLm1ldGFzKTtcblxuICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAvLyAtIHBvc3NpYmx5IG90aGVyIHRhZ3Mgd2lsbCBuZWVkIHRvIGJlIHdoaXRlbGlzdGVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyAtIHRoZSBtYWluIGNvbmNlcm4gaXMgbm90IHB1dHRpbmcgSlMvQ1NTIGludG8gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHNob3VsZG4ndCBiZVxuICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJzZWQubGlua3MpLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2FkZCBib2R5IGNsYXNzZXNcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0ID0gcGFyc2VkLmJvZHlfY2xhc3NlcztcblxuICAgICAgICAgICAgLy9wdXNoIHRoZSBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgICAgICAgIHB1c2hfc3RhdGUgJiYgaGlzdG9yeS5wdXNoU3RhdGUoe3VybDogdXJsfSwgcGFyc2VkLnRpdGxlLCB1cmwpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSB0aGUgdGFiL3BhZ2UgdGl0bGVcbiAgICAgICAgICAgIHNlbGYuX3NldFRpdGxlKHBhcnNlZC50aXRsZSk7XG5cbiAgICAgICAgICAgIC8vcmVwbGFjZSBjb250ZW50IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICBjb25zdCBuZXdfY29udGVudCA9IGRvbS5yZXBsYWNlRWxXaXRoSFRNTChyZXBsYWNlX2VsLCBwYXJzZWQuaHRtbCk7XG5cbiAgICAgICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJPbmxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBwYXJzZWQucm91dGUsIGRhdGEpO1xuXG4gICAgICAgICAgICAvL2lmIGEgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCBydW4gaXQgYW5kIHByb3ZpZGUgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uZV90aW1lX2NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb25lX3RpbWVfY2FsbGJhY2sobmV3X2NvbnRlbnQsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBjdXJyZW50X3JvdXRlLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9hZGQgdG8gaGlzdG9yeSAoaWYgZW5hYmxlZClcbiAgICAgICAgICAgIHRoaXMuX2FkZEhpc3RvcnlJdGVtKHVybCwgcGFyc2VkLnJvdXRlKTtcblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVwbGFjZV9lbF9zZWxlY3RvciBpcyBub3QgdGhlIHNhbWUgYXMgZ2V0UmVwbGFjZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIC8vIHRoZW4gaXQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gd2hhdGV2ZXIgdGhlIGluY29taW5nX2VsX3NlbGVjdG9yIGlzIGJlY2F1c2UgaXQgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2V0UmVwbGFjZUVsZW1lbnQoKSAhPT0gcmVwbGFjZV9lbF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0UmVwbGFjZUVsZW1lbnQoaW5jb21pbmdfZWxfc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCAob3IgSlNPTiBvYmplY3QpIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogTm9kZUxpc3RPZjxFbGVtZW50PiwgaHRtbDogSHRtbE9wdGlvbnMgfCBzdHJpbmcsIHRpdGxlOiBhbnkgfCBIVE1MVGl0bGVFbGVtZW50LCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbCA9IG51bGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwpIHRocm93IGBQcm92aWRlZCBwYXJlbnRfZWwgKCR7cGFyZW50X2VsfSkgbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICByb3V0ZSA9IG51bGw7XG4gICAgICAgIGlmKCB0eXBlb2YgaHRtbCA9PT0gXCJvYmplY3RcIiAmJiBodG1sICE9PSBudWxsICl7XG4gICAgICAgICAgICBpZiggaHRtbC5odG1sICl7XG4gICAgICAgICAgICAgICAgaWYoIGh0bWwucm91dGUgKXtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgPSBodG1sLnJvdXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5odG1sO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgYEluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gSFRNTCBrZXlgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgZG9tXG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIHZhciBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIC8vZ2V0IHBhZ2UgdGl0bGVcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlID0gdGl0bGUgPyB0aXRsZS5pbm5lclRleHQgOiBudWxsO1xuXG4gICAgICAgIC8vZ2V0IGFueSBtZXRhIHRhZ3NcbiAgICAgICAgdmFyIG1ldGFzID0gZG9jLmhlYWQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKTtcbiAgICAgICAgLy9nZXQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgIHZhciBsaW5rcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAvL2dldCBib2R5IGNsYXNzZXNcbiAgICAgICAgdmFyIGJvZHlfY2xhc3NlcyA9IGRvYy5ib2R5LmNsYXNzTGlzdC50b1N0cmluZygpO1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICB2YXIgbmV3X2h0bWwgPSBodG1sO1xuXG4gICAgICAgIC8vaWYgYSBwYXJlbnQgZWxlbWVudCB3YXMgcHJvdmlkZWQsIGZpbmQgaXRcbiAgICAgICAgaWYgKHBhcmVudF9lbCkge1xuICAgICAgICAgICAgdmFyIHNlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHBhcmVudF9lbCk7XG4gICAgICAgICAgICAvL2lmIGNvdWxkbid0IGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmICghc2VsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBhcmVudCBzZWxlY3RvciAke3BhcmVudF9lbH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBvdXRlckhUTUxcbiAgICAgICAgICAgIG5ld19odG1sID0gc2VsLm91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgcm91dGUgZGlkbid0IGV4aXN0IGluIHRoZSBpbmNvbWluZyBKU09OIG9iamVjdCwgZ3JhYiBmcm9tIHRoZSBIVE1MXG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlID8gcm91dGUgOiBzZWxmLmdldFJvdXRlRnJvbU1ldGEoZG9jKTtcblxuICAgICAgICAvLyBHYXJiYWdlIGNvbGxlY3Rpb24sIHlvdSBkb24ndCBuZWVkIHRoaXMgYW55bW9yZS5cbiAgICAgICAgcGFyc2VyID0gZG9jID0gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgbWV0YXM6IG1ldGFzLFxuICAgICAgICAgICAgbGlua3M6IGxpbmtzLFxuICAgICAgICAgICAgYm9keV9jbGFzc2VzOiBib2R5X2NsYXNzZXMsXG4gICAgICAgICAgICBodG1sOiBuZXdfaHRtbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX3NldFRpdGxlOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVlcnkgc3RyaW5nIHZhcmlhYmxlc1xuICAgICAqXG4gICAgICogQHJldHVybnMgVVJMU2VhcmNoUGFyYW1zXG4gICAgICovXG4gICAgcXVlcnk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCB3YXMgbWFkZSBzZWN1cmVseSBvdmVyIFNTTCAoaHR0cHMgaW5zdGVhZCBvZiBodHRwKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIdHRwczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBteS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluV2l0aFByb3RvY29sOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUklcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUkk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSSSB3aXRoIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBVUkxcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbS9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxVUkw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNsYXNoIHRvIGEgc3RyaW5nIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20gYmVjb21lcyBodHRwczovL215LWRvbWFpbi5jb20vXG4gICAgICogRXhhbXBsZTogL215LXByb2R1Y3QgYmVjb21lcyAvbXktcHJvZHVjdC9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFwcGVuZFNsYXNoOiBmdW5jdGlvbih1cmwgPSAnJyl7XG4gICAgICAgIHJldHVybiB1cmxbdXJsLmxlbmd0aC0xXSAhPT0gJy8nID8gdXJsKycvJyA6IHVybDtcbiAgICB9LFxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcbmltcG9ydCB7Y2xvbmV9IGZyb20gXCIuLi9jbG9uZVwiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG5cbi8qKlxuICpcbiAqIFNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIENsYXNzIGZvciBzdG9yaW5nIGFuZCBpbnRlcmFjdGluZyB3aXRoIHRoZSBjdXJyZW50IHdlYnNpdGUncyBpZCwgbmFtZSwgYW5kIGNvbmZpZyBvcHRpb25zXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU2l0ZSBleHRlbmRzIEFic3RyYWN0Q2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSl7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5fa2V5cyA9IFsnaWQnLCAnbmFtZScsICdjb25maWcnXTtcblxuICAgICAgICAvL2V4dGVuZCB1c2VyX2RlZmF1bHRzIHdpdGggaW5jb21pbmcgZGF0YVxuICAgICAgICBkYXRhID0gey4uLnNpdGVfZGVmYXVsdHMsIC4uLmRhdGF9O1xuXG4gICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgZ2V0SWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJZChpZCkge1xuICAgICAgICBpZiggdHlwZW9mIGlkICE9PSAnbnVtYmVyJyAmJiBpZCAhPT0gbnVsbCApIHRocm93IGAke2lkfSBtdXN0IGJlIGEgbnVtYmVyIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL2dldHMgdGhlIHdlYnNpdGUncyBuYW1lXG4gICAgZ2V0TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycgJiYgbmFtZSAhPT0gbnVsbCApIHRocm93IGAke25hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIGNvbmZpZyBkYXRhXG4gICAgZ2V0Q29uZmlnKCkge1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2NvbmZpZyk7XG4gICAgfVxuXG4gICAgLy9zZXRzIGFsbCBjb25maWcgZGF0YSB1c2luZyB0aGUgcHJvdmlkZWQgb2JqZWN0XG4gICAgc2V0Q29uZmlnKGNvbmZpZyA9IHt9KSB7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGNvbmZpZywgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fY29uZmlnID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbiBpbmRpdmlkdWFsIGNvbmZpZyB2YWx1ZSBvciBudWxsIGlmIGl0J3Mgbm90IGRlZmluZWRcbiAgICBnZXRDb25maWdJdGVtKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9jb25maWdba2V5XSk7XG4gICAgfVxuXG4gICAgLy9hZGRzIG9yIHVwZGF0ZXMgYSB2YWx1ZSBpbiB0aGUgY29uZmlnIG9iamVjdFxuICAgIHNldENvbmZpZ0l0ZW0oa2V5LCB2YWwpIHtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fY29uZmlnW2tleV0gPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIi8qKlxuICogTWV0aG9kcyBmb3IgcGVyZm9ybWluZyBjb21tb24gc3RyaW5nIG1hbmlwdWxhdGlvbnNcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBnZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5nZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdnZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0dGVyOiBmdW5jdGlvbihzdHJpbmcgPSAnJyl7XG4gICAgICAgIHJldHVybiAnZ2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLnNldHRlcignbmFtZScpIHJldHVybnMgJ3NldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyA9ICcnKXtcbiAgICAgICAgcmV0dXJuICdzZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHVjZmlyc3QoKSBmdW5jdGlvbmFsaXR5IHRvIEpTIChsaWtlIFBIUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgdWNmaXJzdDogZnVuY3Rpb24oc3RyaW5nID0gJycpe1xuICAgICAgICByZXR1cm4gc3RyaW5nICYmIHN0cmluZ1swXS50b1VwcGVyQ2FzZSgpK3N0cmluZy5zbGljZSgxKTtcbiAgICB9XG59OyIsImltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFRvZ2dsZXMgYW4gZWxlbWVudCBvbiBjbGljayBvZiBhIGJ1dHRvbiwgY2xpY2sgb3V0c2lkZSB0aGUgZWxlbWVudCAoaWYgaXQncyB2aXNpYmxlKSwgb3Igb24gd2luZG93IHJlc2l6ZVxuICpcbiAqIFRoZSBicmVha3BvaW50IGlzIGJhc2VkIG9uIHZpc2liaWxpdHkgb2YgdGhlIGJ1dHRvbi5cbiAqICAgSWYgdGhlIGJ1dHRvbiBpcyB2aXNpYmxlLCB0aGUgZWxlbWVudCB3aWxsIG5vdCBiZSAodW5sZXNzIHRoZSBidXR0b24gaXMgY2xpY2tlZClcbiAqICAgSWYgdGhlIGJ1dHRvbiBpcyBoaWRkZW4sIHRoZSBlbGVtZW50IHdpbGwgYmUgdmlzaWJsZVxuICpcbiAqIE5vIHN0eWxlcyBhcmUgcHJvdmlkZWQgd2l0aCB0aGlzIGNvbXBvbmVudCBzbyBmZWVsIGZyZWUgdG8gZ28gY3JhenkuXG4gKiAgIFRoZXJlJ3MgYSBsb3QgeW91IGNhbiBkbyB3aGVuIGEgc2luZ2xlIGNsYXNzIGlzIHRvZ2dsZWQuXG4gKlxuICogVXNlIGNhc2VzOlxuICogMSkgQ2hhbmdlIGZyb20gYSBzaWRlYmFyIG9uIGRlc2t0b3AgdG8gYSBwb3B1cCBvbiBtb2JpbGVcbiAqIDIpIENoYW5nZSBmcm9tIGFuIGlubGluZSBtZW51IG9uIGRlc2t0b3AgdG8gYSBzbGlkZS1pbiBvbiBtb2JpbGVcbiAqIC4uLkknbSBzdXJlIHlvdSBjYW4gdGhpbmsgb2Ygc29tZVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFRvZ2dsZU9uTW9iaWxle1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGJ0blxuICAgICAqIEBwYXJhbSB0b2dnbGVfZWxcbiAgICAgKiBAcGFyYW0gdG9nZ2xlX2NsYXNzXG4gICAgICogQHBhcmFtIGhpZGVfb25fb3V0c2lkZV9jbGlja1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGJ0biwgdG9nZ2xlX2VsLCB0b2dnbGVfY2xhc3MgPSAndmlzaWJsZScsIGhpZGVfb25fb3V0c2lkZV9jbGljayA9IHRydWUpe1xuICAgICAgICAvL3NldCB0aGUgZWxlbWVudHNcbiAgICAgICAgdGhpcy5idG4gPSBkb20uZ2V0RWxlbWVudChidG4sIHRydWUsIHRydWUpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9lbCA9IGRvbS5nZXRFbGVtZW50KHRvZ2dsZV9lbCwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIC8vc2V0IHRoZSBjb25maWdcbiAgICAgICAgdGhpcy50b2dnbGVfY2xhc3MgPSB0b2dnbGVfY2xhc3M7XG4gICAgICAgIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrID0gaGlkZV9vbl9vdXRzaWRlX2NsaWNrO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgZXZlbnQgaGFuZGxlcnMgYW5kIHJ1bnMgb25XaW5kb3dSZXNpemUgaW1tZWRpYXRlbHkgdG8gc2V0IHRoZSBpbml0aWFsIGNsYXNzXG4gICAgICovXG4gICAgaW5pdCgpe1xuICAgICAgICAvL3RvIGJlIHVzZWQgaW5zaWRlIHRoZSBldmVudCBoYW5kbGVyc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2NyZWF0ZSBhIHRocm90dGxlZCB3aW5kb3cgcmVzaXplIGhhbmRsZXJcbiAgICAgICAgbGV0IHRocm90dGxlO1xuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhyb3R0bGUpO1xuICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiggZG9tLmlzVmlzaWJsZShzZWxmLmJ0bikgKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QuYWRkKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmKCB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayApIHtcbiAgICAgICAgICAgIHRoaXMub25DbGlja091dHNpZGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXRfZWwgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIG9uIHRoZSBidXR0b25cbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X2VsID09PSBzZWxmLmJ0bikgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgaW5zaWRlIHRoZSBidXR0b25cbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmJ0biA9PT0gdGFyZ2V0X2VsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0X2VsID0gdGFyZ2V0X2VsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgdGFyZ2V0X2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBvbiB0aGUgZWxlbWVudCB3ZSBhcmUgdG9nZ2xpbmdcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0X2VsID09PSBzZWxmLnRvZ2dsZV9lbCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgaW5zaWRlIHRoZSBlbGVtZW50IHdlIGFyZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYudG9nZ2xlX2VsID09PSB0YXJnZXRfZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0YXJnZXRfZWwgPSB0YXJnZXRfZWwucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICAvL290aGVyd2lzZSBoaWRlIGl0XG4gICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnJlbW92ZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudHMub24oJ2JvZHknLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25DbGlja1RvZ2dsZUJ0biA9IGV2ZW50cy5vbkNsaWNrKHRoaXMuYnRuLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LnRvZ2dsZShzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcblxuICAgICAgICB0aGlzLm9uV2luZG93UmVzaXplKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgZXZlbnQgbGlzdGVuZXJzXG4gICAgICovXG4gICAgZGVzdHJveSgpe1xuICAgICAgICBpZiggdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgKSB7XG4gICAgICAgICAgICBldmVudHMub2ZmKCdib2R5JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzLm9mZih0aGlzLmJ0biwgJ2NsaWNrJywgdGhpcy5vbkNsaWNrVG9nZ2xlQnRuKTtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuICAgIH1cbn0iLCIvKipcbiAqIE1ldGhvZHMgZm9yIGNoZWNraW5nIGRhdGEgdHlwZXMgd2l0aCBtb3JlIHNwZWNpZmljaXR5XG4gKi9cbmV4cG9ydCBjb25zdCB0eXBlX2NoZWNrcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcHJvdmlkZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgY29udGFpbiBhdCBsZWFzdCAxIHByb3ZpZGVkIGtleSBpbiBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSBtdXN0IGhhdmUgYWxsIGtleXNcbiAgICAgKiBPcHRpb25hbGx5IGNhbm5vdCBoYXZlIGFueSBrZXlzIHRoYXQgYXJlbid0IGluIHRoZSBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IGNoZWNrIGZhaWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0ga2V5cyAtIGRlZmF1bHQ6IGRvbid0IHZlcmlmeSBrZXlzXG4gICAgICogQHBhcmFtIHJlcXVpcmVfYWxsX2tleXMgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEBwYXJhbSBibG9ja19vdGhlcl9rZXlzIC0gZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwYXJhbSB0aHJvd19lcnJvciAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEYXRhT2JqZWN0OiBmdW5jdGlvbih2YWx1ZSwga2V5cywgcmVxdWlyZV9hbGxfa2V5cyA9IGZhbHNlLCBibG9ja19vdGhlcl9rZXlzID0gZmFsc2UsIHRocm93X2Vycm9yID0gZmFsc2Upe1xuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBtdXN0IGJlIGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYoIHR5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9kZXRlcm1pbmUgaWYgaXQgaXMgYW4gb2JqZWN0XG4gICAgICAgIGNvbnN0IGlzX29iamVjdCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbDtcblxuICAgICAgICAvL2lmIG5vdCBhbiBvYmplY3Qgb3IgYW4gYXJyYXlcbiAgICAgICAgaWYoICFpc19vYmplY3QgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgd2UgbmVlZCB0byB2ZXJpZnkgdGhlIGtleXMgdGhpcyBvYmplY3QgY29udGFpbnNcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoa2V5cykgKSB7XG4gICAgICAgICAgICBsZXQgZm91bmRfa2V5ID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbWlzc2luZ19rZXlzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIG9iamVjdCBkb2Vzbid0IGhhdmUgYW55IGtleXMsIHRoZW4gaXQncyBhbiBlbXB0eSBvYmplY3QgYW5kIHdlIGRvbid0IG5lZWQgdG8gdmVyaWZ5IGFueSBmdXJ0aGVyXG4gICAgICAgICAgICBpZiggIXZhbHVlX2tleXMubGVuZ3RoICYmICFyZXF1aXJlX2FsbF9rZXlzICkgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXkgd2FzIGZvdW5kLCB3ZSBmb3VuZCBhdGxlYXN0IG9uZVxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZV9rZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfa2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZiBpdCdzIG5vdCBmb3VuZCwgd2UgY2FuJ3Qgc2F5IGFsbCBrZXlzIGV4aXN0IGluIHRoaXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ19rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9pZiBub3Qgb25lIG9mIHRoZSBrZXlzIHdlcmUgZm91bmRcbiAgICAgICAgICAgIGlmKCAhZm91bmRfa2V5ICl7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBgK2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZGlkbid0IGZpbmQgYWxsIHRoZSBrZXlzXG4gICAgICAgICAgICBpZiggcmVxdWlyZV9hbGxfa2V5cyAmJiBtaXNzaW5nX2tleXMubGVuZ3RoIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG1pc3NpbmcgZGF0YTogYCttaXNzaW5nX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZG9uJ3QgYWxsb3cgYW55IGtleXMgTk9UIGluIHRoZSBrZXlzIGFycmF5XG4gICAgICAgICAgICBpZiggYmxvY2tfb3RoZXJfa2V5cyApe1xuICAgICAgICAgICAgICAgIGxldCB1bnJlY29nbml6ZWRfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFsdWVfa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiggIWtleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5yZWNvZ25pemVkX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiggdW5yZWNvZ25pemVkX2tleXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gY29udGFpbnMgaW52YWxpZCBkYXRhOiBgK3VucmVjb2duaXplZF9rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2FsbCBjaGVja3MgcGFzc2VkISBjb25ncmF0cywgaXQncyBhbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcbmltcG9ydCB7Y2xvbmV9IGZyb20gXCIuLi9jbG9uZVwiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IHVzZXJfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgaXNHdWVzdDpmYWxzZSxcbiAgICBpc0FkbWluOmZhbHNlLFxuICAgIHVzZXJuYW1lOm51bGwsXG4gICAgZm5hbWU6bnVsbCxcbiAgICBsbmFtZTpudWxsLFxuICAgIGVtYWlsOm51bGwsXG4gICAgcGhvbmU6bnVsbCxcbiAgICBwZXJtaXNzaW9uczpbXSxcbiAgICBhZGRpdGlvbmFsRGF0YTp7fSxcbn07XG5cbi8qKlxuICpcbiAqIFVzZXJcbiAqXG4gKiBDbGFzcyBmb3Igc3RvcmluZyBhbmQgaW50ZXJhY3Rpbmcgd2l0aCBhIHVzZXIgYW5kIHRoZWlyIHBlcm1pc3Npb25zXG4gKlxuICovXG5leHBvcnQgY2xhc3MgVXNlciBleHRlbmRzIEFic3RyYWN0Q2xhc3N7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IHt9KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLl9rZXlzID0gWydpZCcsICdpc0d1ZXN0JywgJ2lzQWRtaW4nLCAndXNlcm5hbWUnLCAnZm5hbWUnLCAnbG5hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAncGVybWlzc2lvbnMnLCAnYWRkaXRpb25hbERhdGEnXTsgXG4gICAgICAgIFxuICAgICAgICAvL2V4dGVuZCB1c2VyX2RlZmF1bHRzIHdpdGggaW5jb21pbmcgZGF0YVxuICAgICAgICBkYXRhID0gey4uLnVzZXJfZGVmYXVsdHMsIC4uLmRhdGF9O1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wb3B1bGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBzZXRJZChpZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgaWQgIT09ICdudW1iZXInICYmIGlkICE9PSBudWxsICkgdGhyb3cgYCR7aWR9IG11c3QgYmUgYSBudW1iZXIgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0SXNHdWVzdChpc19ndWVzdCA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy5faXNHdWVzdCA9IGlzX2d1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNHdWVzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHdWVzdDtcbiAgICB9XG5cbiAgICBzZXRJc0FkbWluKGlzX2FkbWluID0gZmFsc2Upe1xuICAgICAgICB0aGlzLl9pc0FkbWluID0gaXNfYWRtaW47XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJc0FkbWluKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FkbWluO1xuICAgIH1cblxuICAgIHNldFVzZXJuYW1lKHVzZXJuYW1lID0gbnVsbCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXNlcm5hbWUgIT09ICdzdHJpbmcnICYmIHVzZXJuYW1lICE9PSBudWxsICkgdGhyb3cgYCR7dXNlcm5hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRVc2VybmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Rm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZuYW1lO1xuICAgIH1cbiAgICBzZXRGbmFtZShmaXJzdF9uYW1lID0gbnVsbCl7XG4gICAgICAgIGlmKCB0eXBlb2YgZmlyc3RfbmFtZSAhPT0gJ3N0cmluZycgJiYgZmlyc3RfbmFtZSAhPT0gbnVsbCApIHRocm93IGAke2ZpcnN0X25hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX2ZuYW1lID0gZmlyc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0TG5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xuYW1lO1xuICAgIH1cbiAgICBzZXRMbmFtZShsYXN0X25hbWUgPSBudWxsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBsYXN0X25hbWUgIT09ICdzdHJpbmcnICYmIGxhc3RfbmFtZSAhPT0gbnVsbCApIHRocm93IGAke2xhc3RfbmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fbG5hbWUgPSBsYXN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcXVpY2sgd2F5IHRvIGdldCBmbmFtZSBhbmQgbG5hbWVcbiAgICBnZXROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEZuYW1lKCkgKyAnICcgKyB0aGlzLmdldExuYW1lKCk7XG4gICAgfVxuXG4gICAgZ2V0RW1haWwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VtYWlsO1xuICAgIH1cbiAgICBzZXRFbWFpbChlbWFpbCA9IG51bGwpe1xuICAgICAgICBpZiggdHlwZW9mIGVtYWlsICE9PSAnc3RyaW5nJyAmJiBlbWFpbCAhPT0gbnVsbCApIHRocm93IGAke2VtYWlsfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRQaG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGhvbmU7XG4gICAgfVxuICAgIHNldFBob25lKHBob25lID0gbnVsbCl7XG4gICAgICAgIGlmKCB0eXBlb2YgcGhvbmUgIT09ICdzdHJpbmcnICYmIHBob25lICE9PSBudWxsICkgdGhyb3cgYCR7cGhvbmV9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX3Bob25lID0gcGhvbmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIGdldFBlcm1pc3Npb25zKCl7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fcGVybWlzc2lvbnMpO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9ucyA9IFtdKXtcbiAgICAgICAgaWYoICFBcnJheS5pc0FycmF5KHBlcm1pc3Npb25zKSApIHRocm93IFwic2V0UGVybWlzc2lvbnMgcmVxdWlyZXMgYW4gYXJyYXlcIjtcbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMgPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUocGVybWlzc2lvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9hZGRzIGEgc2luZ2xlIHBlcm1pc3Npb24gdG8gdGhpcyB1c2VyXG4gICAgYWRkUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgaWYoIHR5cGVvZiBwZXJtaXNzaW9uICE9PSAnc3RyaW5nJyApIHRocm93IGAke3Blcm1pc3Npb259IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucy5wdXNoKHBlcm1pc3Npb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9SZW1vdmVzIGEgc2luZ2xlIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVzZXJcbiAgICByZW1vdmVQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICBpZiggdHlwZW9mIHBlcm1pc3Npb24gIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7cGVybWlzc2lvbn0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuc2V0UGVybWlzc2lvbnModGhpcy5fcGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICBpZiggdHlwZW9mIHBlcm1pc3Npb24gIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7cGVybWlzc2lvbn0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBlcm1pc3Npb25zKCkuaW5jbHVkZXMocGVybWlzc2lvbik7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIGdldEFkZGl0aW9uYWxEYXRhKCl7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fYWRkaXRpb25hbERhdGEpO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0QWRkaXRpb25hbERhdGEoYWRkaXRpb25hbF9kYXRhID0ge30pe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChhZGRpdGlvbmFsX2RhdGEsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxEYXRhID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKGFkZGl0aW9uYWxfZGF0YSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICBpZiggdHlwZW9mIGtleSAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtrZXl9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0pO1xuICAgIH1cbiAgICAvL3NldHMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBzZXREYXRhSXRlbShrZXksIHZhbCl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvYXhpb3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBzZXR0bGUgPSByZXF1aXJlKCcuLy4uL2NvcmUvc2V0dGxlJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBwYXJzZUhlYWRlcnMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvcGFyc2VIZWFkZXJzJyk7XG52YXIgaXNVUkxTYW1lT3JpZ2luID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbicpO1xudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi4vY29yZS9jcmVhdGVFcnJvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHhockFkYXB0ZXIoY29uZmlnKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiBkaXNwYXRjaFhoclJlcXVlc3QocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgdmFyIHJlcXVlc3REYXRhID0gY29uZmlnLmRhdGE7XG4gICAgdmFyIHJlcXVlc3RIZWFkZXJzID0gY29uZmlnLmhlYWRlcnM7XG5cbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShyZXF1ZXN0RGF0YSkpIHtcbiAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1snQ29udGVudC1UeXBlJ107IC8vIExldCB0aGUgYnJvd3NlciBzZXQgaXRcbiAgICB9XG5cbiAgICB2YXIgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgLy8gSFRUUCBiYXNpYyBhdXRoZW50aWNhdGlvblxuICAgIGlmIChjb25maWcuYXV0aCkge1xuICAgICAgdmFyIHVzZXJuYW1lID0gY29uZmlnLmF1dGgudXNlcm5hbWUgfHwgJyc7XG4gICAgICB2YXIgcGFzc3dvcmQgPSBjb25maWcuYXV0aC5wYXNzd29yZCB8fCAnJztcbiAgICAgIHJlcXVlc3RIZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmFzaWMgJyArIGJ0b2EodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgfVxuXG4gICAgcmVxdWVzdC5vcGVuKGNvbmZpZy5tZXRob2QudG9VcHBlckNhc2UoKSwgYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLCB0cnVlKTtcblxuICAgIC8vIFNldCB0aGUgcmVxdWVzdCB0aW1lb3V0IGluIE1TXG4gICAgcmVxdWVzdC50aW1lb3V0ID0gY29uZmlnLnRpbWVvdXQ7XG5cbiAgICAvLyBMaXN0ZW4gZm9yIHJlYWR5IHN0YXRlXG4gICAgcmVxdWVzdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiBoYW5kbGVMb2FkKCkge1xuICAgICAgaWYgKCFyZXF1ZXN0IHx8IHJlcXVlc3QucmVhZHlTdGF0ZSAhPT0gNCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSByZXF1ZXN0IGVycm9yZWQgb3V0IGFuZCB3ZSBkaWRuJ3QgZ2V0IGEgcmVzcG9uc2UsIHRoaXMgd2lsbCBiZVxuICAgICAgLy8gaGFuZGxlZCBieSBvbmVycm9yIGluc3RlYWRcbiAgICAgIC8vIFdpdGggb25lIGV4Y2VwdGlvbjogcmVxdWVzdCB0aGF0IHVzaW5nIGZpbGU6IHByb3RvY29sLCBtb3N0IGJyb3dzZXJzXG4gICAgICAvLyB3aWxsIHJldHVybiBzdGF0dXMgYXMgMCBldmVuIHRob3VnaCBpdCdzIGEgc3VjY2Vzc2Z1bCByZXF1ZXN0XG4gICAgICBpZiAocmVxdWVzdC5zdGF0dXMgPT09IDAgJiYgIShyZXF1ZXN0LnJlc3BvbnNlVVJMICYmIHJlcXVlc3QucmVzcG9uc2VVUkwuaW5kZXhPZignZmlsZTonKSA9PT0gMCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIHRoZSByZXNwb25zZVxuICAgICAgdmFyIHJlc3BvbnNlSGVhZGVycyA9ICdnZXRBbGxSZXNwb25zZUhlYWRlcnMnIGluIHJlcXVlc3QgPyBwYXJzZUhlYWRlcnMocmVxdWVzdC5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkgOiBudWxsO1xuICAgICAgdmFyIHJlc3BvbnNlRGF0YSA9ICFjb25maWcucmVzcG9uc2VUeXBlIHx8IGNvbmZpZy5yZXNwb25zZVR5cGUgPT09ICd0ZXh0JyA/IHJlcXVlc3QucmVzcG9uc2VUZXh0IDogcmVxdWVzdC5yZXNwb25zZTtcbiAgICAgIHZhciByZXNwb25zZSA9IHtcbiAgICAgICAgZGF0YTogcmVzcG9uc2VEYXRhLFxuICAgICAgICBzdGF0dXM6IHJlcXVlc3Quc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXF1ZXN0LnN0YXR1c1RleHQsXG4gICAgICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgICAgICAgY29uZmlnOiBjb25maWcsXG4gICAgICAgIHJlcXVlc3Q6IHJlcXVlc3RcbiAgICAgIH07XG5cbiAgICAgIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBicm93c2VyIHJlcXVlc3QgY2FuY2VsbGF0aW9uIChhcyBvcHBvc2VkIHRvIGEgbWFudWFsIGNhbmNlbGxhdGlvbilcbiAgICByZXF1ZXN0Lm9uYWJvcnQgPSBmdW5jdGlvbiBoYW5kbGVBYm9ydCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignUmVxdWVzdCBhYm9ydGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJywgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGxvdyBsZXZlbCBuZXR3b3JrIGVycm9yc1xuICAgIHJlcXVlc3Qub25lcnJvciA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yKCkge1xuICAgICAgLy8gUmVhbCBlcnJvcnMgYXJlIGhpZGRlbiBmcm9tIHVzIGJ5IHRoZSBicm93c2VyXG4gICAgICAvLyBvbmVycm9yIHNob3VsZCBvbmx5IGZpcmUgaWYgaXQncyBhIG5ldHdvcmsgZXJyb3JcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcignTmV0d29yayBFcnJvcicsIGNvbmZpZywgbnVsbCwgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIHRpbWVvdXRcbiAgICByZXF1ZXN0Lm9udGltZW91dCA9IGZ1bmN0aW9uIGhhbmRsZVRpbWVvdXQoKSB7XG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ3RpbWVvdXQgb2YgJyArIGNvbmZpZy50aW1lb3V0ICsgJ21zIGV4Y2VlZGVkJywgY29uZmlnLCAnRUNPTk5BQk9SVEVEJyxcbiAgICAgICAgcmVxdWVzdCkpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgLy8gVGhpcyBpcyBvbmx5IGRvbmUgaWYgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnQuXG4gICAgLy8gU3BlY2lmaWNhbGx5IG5vdCBpZiB3ZSdyZSBpbiBhIHdlYiB3b3JrZXIsIG9yIHJlYWN0LW5hdGl2ZS5cbiAgICBpZiAodXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSkge1xuICAgICAgdmFyIGNvb2tpZXMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29va2llcycpO1xuXG4gICAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAgIHZhciB4c3JmVmFsdWUgPSAoY29uZmlnLndpdGhDcmVkZW50aWFscyB8fCBpc1VSTFNhbWVPcmlnaW4oY29uZmlnLnVybCkpICYmIGNvbmZpZy54c3JmQ29va2llTmFtZSA/XG4gICAgICAgIGNvb2tpZXMucmVhZChjb25maWcueHNyZkNvb2tpZU5hbWUpIDpcbiAgICAgICAgdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoeHNyZlZhbHVlKSB7XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzW2NvbmZpZy54c3JmSGVhZGVyTmFtZV0gPSB4c3JmVmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIGhlYWRlcnMgdG8gdGhlIHJlcXVlc3RcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHJlcXVlc3QpIHtcbiAgICAgIHV0aWxzLmZvckVhY2gocmVxdWVzdEhlYWRlcnMsIGZ1bmN0aW9uIHNldFJlcXVlc3RIZWFkZXIodmFsLCBrZXkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiByZXF1ZXN0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgJiYga2V5LnRvTG93ZXJDYXNlKCkgPT09ICdjb250ZW50LXR5cGUnKSB7XG4gICAgICAgICAgLy8gUmVtb3ZlIENvbnRlbnQtVHlwZSBpZiBkYXRhIGlzIHVuZGVmaW5lZFxuICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0SGVhZGVyc1trZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSBhZGQgaGVhZGVyIHRvIHRoZSByZXF1ZXN0XG4gICAgICAgICAgcmVxdWVzdC5zZXRSZXF1ZXN0SGVhZGVyKGtleSwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQWRkIHdpdGhDcmVkZW50aWFscyB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcud2l0aENyZWRlbnRpYWxzKSB7XG4gICAgICByZXF1ZXN0LndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gQWRkIHJlc3BvbnNlVHlwZSB0byByZXF1ZXN0IGlmIG5lZWRlZFxuICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IGNvbmZpZy5yZXNwb25zZVR5cGU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIEV4cGVjdGVkIERPTUV4Y2VwdGlvbiB0aHJvd24gYnkgYnJvd3NlcnMgbm90IGNvbXBhdGlibGUgWE1MSHR0cFJlcXVlc3QgTGV2ZWwgMi5cbiAgICAgICAgLy8gQnV0LCB0aGlzIGNhbiBiZSBzdXBwcmVzc2VkIGZvciAnanNvbicgdHlwZSBhcyBpdCBjYW4gYmUgcGFyc2VkIGJ5IGRlZmF1bHQgJ3RyYW5zZm9ybVJlc3BvbnNlJyBmdW5jdGlvbi5cbiAgICAgICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUgIT09ICdqc29uJykge1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcHJvZ3Jlc3MgaWYgbmVlZGVkXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25Eb3dubG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgLy8gTm90IGFsbCBicm93c2VycyBzdXBwb3J0IHVwbG9hZCBldmVudHNcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzID09PSAnZnVuY3Rpb24nICYmIHJlcXVlc3QudXBsb2FkKSB7XG4gICAgICByZXF1ZXN0LnVwbG9hZC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vblVwbG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgICAvLyBIYW5kbGUgY2FuY2VsbGF0aW9uXG4gICAgICBjb25maWcuY2FuY2VsVG9rZW4ucHJvbWlzZS50aGVuKGZ1bmN0aW9uIG9uQ2FuY2VsZWQoY2FuY2VsKSB7XG4gICAgICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3QuYWJvcnQoKTtcbiAgICAgICAgcmVqZWN0KGNhbmNlbCk7XG4gICAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocmVxdWVzdERhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVxdWVzdERhdGEgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIFNlbmQgdGhlIHJlcXVlc3RcbiAgICByZXF1ZXN0LnNlbmQocmVxdWVzdERhdGEpO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBBeGlvcyA9IHJlcXVpcmUoJy4vY29yZS9BeGlvcycpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9jb3JlL21lcmdlQ29uZmlnJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuL2RlZmF1bHRzJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqIEByZXR1cm4ge0F4aW9zfSBBIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICovXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShkZWZhdWx0Q29uZmlnKSB7XG4gIHZhciBjb250ZXh0ID0gbmV3IEF4aW9zKGRlZmF1bHRDb25maWcpO1xuICB2YXIgaW5zdGFuY2UgPSBiaW5kKEF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0LCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGF4aW9zLnByb3RvdHlwZSB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIEF4aW9zLnByb3RvdHlwZSwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBjb250ZXh0IHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgY29udGV4dCk7XG5cbiAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyBDcmVhdGUgdGhlIGRlZmF1bHQgaW5zdGFuY2UgdG8gYmUgZXhwb3J0ZWRcbnZhciBheGlvcyA9IGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRzKTtcblxuLy8gRXhwb3NlIEF4aW9zIGNsYXNzIHRvIGFsbG93IGNsYXNzIGluaGVyaXRhbmNlXG5heGlvcy5BeGlvcyA9IEF4aW9zO1xuXG4vLyBGYWN0b3J5IGZvciBjcmVhdGluZyBuZXcgaW5zdGFuY2VzXG5heGlvcy5jcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaW5zdGFuY2VDb25maWcpIHtcbiAgcmV0dXJuIGNyZWF0ZUluc3RhbmNlKG1lcmdlQ29uZmlnKGF4aW9zLmRlZmF1bHRzLCBpbnN0YW5jZUNvbmZpZykpO1xufTtcblxuLy8gRXhwb3NlIENhbmNlbCAmIENhbmNlbFRva2VuXG5heGlvcy5DYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWwnKTtcbmF4aW9zLkNhbmNlbFRva2VuID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsVG9rZW4nKTtcbmF4aW9zLmlzQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvaXNDYW5jZWwnKTtcblxuLy8gRXhwb3NlIGFsbC9zcHJlYWRcbmF4aW9zLmFsbCA9IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xufTtcbmF4aW9zLnNwcmVhZCA9IHJlcXVpcmUoJy4vaGVscGVycy9zcHJlYWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBheGlvcztcblxuLy8gQWxsb3cgdXNlIG9mIGRlZmF1bHQgaW1wb3J0IHN5bnRheCBpbiBUeXBlU2NyaXB0XG5tb2R1bGUuZXhwb3J0cy5kZWZhdWx0ID0gYXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQSBgQ2FuY2VsYCBpcyBhbiBvYmplY3QgdGhhdCBpcyB0aHJvd24gd2hlbiBhbiBvcGVyYXRpb24gaXMgY2FuY2VsZWQuXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge3N0cmluZz19IG1lc3NhZ2UgVGhlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIENhbmNlbChtZXNzYWdlKSB7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG59XG5cbkNhbmNlbC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuICdDYW5jZWwnICsgKHRoaXMubWVzc2FnZSA/ICc6ICcgKyB0aGlzLm1lc3NhZ2UgOiAnJyk7XG59O1xuXG5DYW5jZWwucHJvdG90eXBlLl9fQ0FOQ0VMX18gPSB0cnVlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIENhbmNlbCA9IHJlcXVpcmUoJy4vQ2FuY2VsJyk7XG5cbi8qKlxuICogQSBgQ2FuY2VsVG9rZW5gIGlzIGFuIG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIHRvIHJlcXVlc3QgY2FuY2VsbGF0aW9uIG9mIGFuIG9wZXJhdGlvbi5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGV4ZWN1dG9yIFRoZSBleGVjdXRvciBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsVG9rZW4oZXhlY3V0b3IpIHtcbiAgaWYgKHR5cGVvZiBleGVjdXRvciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2V4ZWN1dG9yIG11c3QgYmUgYSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIHZhciByZXNvbHZlUHJvbWlzZTtcbiAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gcHJvbWlzZUV4ZWN1dG9yKHJlc29sdmUpIHtcbiAgICByZXNvbHZlUHJvbWlzZSA9IHJlc29sdmU7XG4gIH0pO1xuXG4gIHZhciB0b2tlbiA9IHRoaXM7XG4gIGV4ZWN1dG9yKGZ1bmN0aW9uIGNhbmNlbChtZXNzYWdlKSB7XG4gICAgaWYgKHRva2VuLnJlYXNvbikge1xuICAgICAgLy8gQ2FuY2VsbGF0aW9uIGhhcyBhbHJlYWR5IGJlZW4gcmVxdWVzdGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdG9rZW4ucmVhc29uID0gbmV3IENhbmNlbChtZXNzYWdlKTtcbiAgICByZXNvbHZlUHJvbWlzZSh0b2tlbi5yZWFzb24pO1xuICB9KTtcbn1cblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5DYW5jZWxUb2tlbi5wcm90b3R5cGUudGhyb3dJZlJlcXVlc3RlZCA9IGZ1bmN0aW9uIHRocm93SWZSZXF1ZXN0ZWQoKSB7XG4gIGlmICh0aGlzLnJlYXNvbikge1xuICAgIHRocm93IHRoaXMucmVhc29uO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBuZXcgYENhbmNlbFRva2VuYCBhbmQgYSBmdW5jdGlvbiB0aGF0LCB3aGVuIGNhbGxlZCxcbiAqIGNhbmNlbHMgdGhlIGBDYW5jZWxUb2tlbmAuXG4gKi9cbkNhbmNlbFRva2VuLnNvdXJjZSA9IGZ1bmN0aW9uIHNvdXJjZSgpIHtcbiAgdmFyIGNhbmNlbDtcbiAgdmFyIHRva2VuID0gbmV3IENhbmNlbFRva2VuKGZ1bmN0aW9uIGV4ZWN1dG9yKGMpIHtcbiAgICBjYW5jZWwgPSBjO1xuICB9KTtcbiAgcmV0dXJuIHtcbiAgICB0b2tlbjogdG9rZW4sXG4gICAgY2FuY2VsOiBjYW5jZWxcbiAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsVG9rZW47XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNDYW5jZWwodmFsdWUpIHtcbiAgcmV0dXJuICEhKHZhbHVlICYmIHZhbHVlLl9fQ0FOQ0VMX18pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIEludGVyY2VwdG9yTWFuYWdlciA9IHJlcXVpcmUoJy4vSW50ZXJjZXB0b3JNYW5hZ2VyJyk7XG52YXIgZGlzcGF0Y2hSZXF1ZXN0ID0gcmVxdWlyZSgnLi9kaXNwYXRjaFJlcXVlc3QnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vbWVyZ2VDb25maWcnKTtcblxuLyoqXG4gKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gaW5zdGFuY2VDb25maWcgVGhlIGRlZmF1bHQgY29uZmlnIGZvciB0aGUgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gQXhpb3MoaW5zdGFuY2VDb25maWcpIHtcbiAgdGhpcy5kZWZhdWx0cyA9IGluc3RhbmNlQ29uZmlnO1xuICB0aGlzLmludGVyY2VwdG9ycyA9IHtcbiAgICByZXF1ZXN0OiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKCksXG4gICAgcmVzcG9uc2U6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKVxuICB9O1xufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyBzcGVjaWZpYyBmb3IgdGhpcyByZXF1ZXN0IChtZXJnZWQgd2l0aCB0aGlzLmRlZmF1bHRzKVxuICovXG5BeGlvcy5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uIHJlcXVlc3QoY29uZmlnKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAvLyBBbGxvdyBmb3IgYXhpb3MoJ2V4YW1wbGUvdXJsJ1ssIGNvbmZpZ10pIGEgbGEgZmV0Y2ggQVBJXG4gIGlmICh0eXBlb2YgY29uZmlnID09PSAnc3RyaW5nJykge1xuICAgIGNvbmZpZyA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcbiAgICBjb25maWcudXJsID0gYXJndW1lbnRzWzBdO1xuICB9IGVsc2Uge1xuICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcbiAgfVxuXG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIGNvbmZpZy5tZXRob2QgPSBjb25maWcubWV0aG9kID8gY29uZmlnLm1ldGhvZC50b0xvd2VyQ2FzZSgpIDogJ2dldCc7XG5cbiAgLy8gSG9vayB1cCBpbnRlcmNlcHRvcnMgbWlkZGxld2FyZVxuICB2YXIgY2hhaW4gPSBbZGlzcGF0Y2hSZXF1ZXN0LCB1bmRlZmluZWRdO1xuICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZShjb25maWcpO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlcXVlc3QuZm9yRWFjaChmdW5jdGlvbiB1bnNoaWZ0UmVxdWVzdEludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnVuc2hpZnQoaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHRoaXMuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gcHVzaFJlc3BvbnNlSW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4ucHVzaChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgd2hpbGUgKGNoYWluLmxlbmd0aCkge1xuICAgIHByb21pc2UgPSBwcm9taXNlLnRoZW4oY2hhaW4uc2hpZnQoKSwgY2hhaW4uc2hpZnQoKSk7XG4gIH1cblxuICByZXR1cm4gcHJvbWlzZTtcbn07XG5cbkF4aW9zLnByb3RvdHlwZS5nZXRVcmkgPSBmdW5jdGlvbiBnZXRVcmkoY29uZmlnKSB7XG4gIGNvbmZpZyA9IG1lcmdlQ29uZmlnKHRoaXMuZGVmYXVsdHMsIGNvbmZpZyk7XG4gIHJldHVybiBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplcikucmVwbGFjZSgvXlxcPy8sICcnKTtcbn07XG5cbi8vIFByb3ZpZGUgYWxpYXNlcyBmb3Igc3VwcG9ydGVkIHJlcXVlc3QgbWV0aG9kc1xudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdvcHRpb25zJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybFxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgZGF0YSwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQXhpb3M7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gSW50ZXJjZXB0b3JNYW5hZ2VyKCkge1xuICB0aGlzLmhhbmRsZXJzID0gW107XG59XG5cbi8qKlxuICogQWRkIGEgbmV3IGludGVyY2VwdG9yIHRvIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bGZpbGxlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGB0aGVuYCBmb3IgYSBgUHJvbWlzZWBcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHJlamVjdGAgZm9yIGEgYFByb21pc2VgXG4gKlxuICogQHJldHVybiB7TnVtYmVyfSBBbiBJRCB1c2VkIHRvIHJlbW92ZSBpbnRlcmNlcHRvciBsYXRlclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLnVzZSA9IGZ1bmN0aW9uIHVzZShmdWxmaWxsZWQsIHJlamVjdGVkKSB7XG4gIHRoaXMuaGFuZGxlcnMucHVzaCh7XG4gICAgZnVsZmlsbGVkOiBmdWxmaWxsZWQsXG4gICAgcmVqZWN0ZWQ6IHJlamVjdGVkXG4gIH0pO1xuICByZXR1cm4gdGhpcy5oYW5kbGVycy5sZW5ndGggLSAxO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYW4gaW50ZXJjZXB0b3IgZnJvbSB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gaWQgVGhlIElEIHRoYXQgd2FzIHJldHVybmVkIGJ5IGB1c2VgXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZWplY3QgPSBmdW5jdGlvbiBlamVjdChpZCkge1xuICBpZiAodGhpcy5oYW5kbGVyc1tpZF0pIHtcbiAgICB0aGlzLmhhbmRsZXJzW2lkXSA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFsbCB0aGUgcmVnaXN0ZXJlZCBpbnRlcmNlcHRvcnNcbiAqXG4gKiBUaGlzIG1ldGhvZCBpcyBwYXJ0aWN1bGFybHkgdXNlZnVsIGZvciBza2lwcGluZyBvdmVyIGFueVxuICogaW50ZXJjZXB0b3JzIHRoYXQgbWF5IGhhdmUgYmVjb21lIGBudWxsYCBjYWxsaW5nIGBlamVjdGAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGNhbGwgZm9yIGVhY2ggaW50ZXJjZXB0b3JcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gZm9yRWFjaChmbikge1xuICB1dGlscy5mb3JFYWNoKHRoaXMuaGFuZGxlcnMsIGZ1bmN0aW9uIGZvckVhY2hIYW5kbGVyKGgpIHtcbiAgICBpZiAoaCAhPT0gbnVsbCkge1xuICAgICAgZm4oaCk7XG4gICAgfVxuICB9KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gSW50ZXJjZXB0b3JNYW5hZ2VyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgZW5oYW5jZUVycm9yID0gcmVxdWlyZSgnLi9lbmhhbmNlRXJyb3InKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIG1lc3NhZ2UsIGNvbmZpZywgZXJyb3IgY29kZSwgcmVxdWVzdCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGNyZWF0ZWQgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlRXJyb3IobWVzc2FnZSwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICB2YXIgZXJyb3IgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIHJldHVybiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHRyYW5zZm9ybURhdGEgPSByZXF1aXJlKCcuL3RyYW5zZm9ybURhdGEnKTtcbnZhciBpc0NhbmNlbCA9IHJlcXVpcmUoJy4uL2NhbmNlbC9pc0NhbmNlbCcpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi4vZGVmYXVsdHMnKTtcbnZhciBpc0Fic29sdXRlVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwnKTtcbnZhciBjb21iaW5lVVJMcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb21iaW5lVVJMcycpO1xuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbmZ1bmN0aW9uIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKSB7XG4gIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICBjb25maWcuY2FuY2VsVG9rZW4udGhyb3dJZlJlcXVlc3RlZCgpO1xuICB9XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIgdXNpbmcgdGhlIGNvbmZpZ3VyZWQgYWRhcHRlci5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIFRoZSBjb25maWcgdGhhdCBpcyB0byBiZSB1c2VkIGZvciB0aGUgcmVxdWVzdFxuICogQHJldHVybnMge1Byb21pc2V9IFRoZSBQcm9taXNlIHRvIGJlIGZ1bGZpbGxlZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRpc3BhdGNoUmVxdWVzdChjb25maWcpIHtcbiAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gIC8vIFN1cHBvcnQgYmFzZVVSTCBjb25maWdcbiAgaWYgKGNvbmZpZy5iYXNlVVJMICYmICFpc0Fic29sdXRlVVJMKGNvbmZpZy51cmwpKSB7XG4gICAgY29uZmlnLnVybCA9IGNvbWJpbmVVUkxzKGNvbmZpZy5iYXNlVVJMLCBjb25maWcudXJsKTtcbiAgfVxuXG4gIC8vIEVuc3VyZSBoZWFkZXJzIGV4aXN0XG4gIGNvbmZpZy5oZWFkZXJzID0gY29uZmlnLmhlYWRlcnMgfHwge307XG5cbiAgLy8gVHJhbnNmb3JtIHJlcXVlc3QgZGF0YVxuICBjb25maWcuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgY29uZmlnLmRhdGEsXG4gICAgY29uZmlnLmhlYWRlcnMsXG4gICAgY29uZmlnLnRyYW5zZm9ybVJlcXVlc3RcbiAgKTtcblxuICAvLyBGbGF0dGVuIGhlYWRlcnNcbiAgY29uZmlnLmhlYWRlcnMgPSB1dGlscy5tZXJnZShcbiAgICBjb25maWcuaGVhZGVycy5jb21tb24gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnNbY29uZmlnLm1ldGhvZF0gfHwge30sXG4gICAgY29uZmlnLmhlYWRlcnMgfHwge31cbiAgKTtcblxuICB1dGlscy5mb3JFYWNoKFxuICAgIFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJywgJ2NvbW1vbiddLFxuICAgIGZ1bmN0aW9uIGNsZWFuSGVhZGVyQ29uZmlnKG1ldGhvZCkge1xuICAgICAgZGVsZXRlIGNvbmZpZy5oZWFkZXJzW21ldGhvZF07XG4gICAgfVxuICApO1xuXG4gIHZhciBhZGFwdGVyID0gY29uZmlnLmFkYXB0ZXIgfHwgZGVmYXVsdHMuYWRhcHRlcjtcblxuICByZXR1cm4gYWRhcHRlcihjb25maWcpLnRoZW4oZnVuY3Rpb24gb25BZGFwdGVyUmVzb2x1dGlvbihyZXNwb25zZSkge1xuICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgcmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICByZXNwb25zZS5kYXRhLFxuICAgICAgcmVzcG9uc2UuaGVhZGVycyxcbiAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0sIGZ1bmN0aW9uIG9uQWRhcHRlclJlamVjdGlvbihyZWFzb24pIHtcbiAgICBpZiAoIWlzQ2FuY2VsKHJlYXNvbikpIHtcbiAgICAgIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAgICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICAgIGlmIChyZWFzb24gJiYgcmVhc29uLnJlc3BvbnNlKSB7XG4gICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgICByZWFzb24ucmVzcG9uc2UuaGVhZGVycyxcbiAgICAgICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVhc29uKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVwZGF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgY29uZmlnLCBlcnJvciBjb2RlLCBhbmQgcmVzcG9uc2UuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3IgVGhlIGVycm9yIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgZXJyb3IuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIGVycm9yLmNvbmZpZyA9IGNvbmZpZztcbiAgaWYgKGNvZGUpIHtcbiAgICBlcnJvci5jb2RlID0gY29kZTtcbiAgfVxuXG4gIGVycm9yLnJlcXVlc3QgPSByZXF1ZXN0O1xuICBlcnJvci5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICBlcnJvci5pc0F4aW9zRXJyb3IgPSB0cnVlO1xuXG4gIGVycm9yLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvLyBTdGFuZGFyZFxuICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgLy8gTWljcm9zb2Z0XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIG51bWJlcjogdGhpcy5udW1iZXIsXG4gICAgICAvLyBNb3ppbGxhXG4gICAgICBmaWxlTmFtZTogdGhpcy5maWxlTmFtZSxcbiAgICAgIGxpbmVOdW1iZXI6IHRoaXMubGluZU51bWJlcixcbiAgICAgIGNvbHVtbk51bWJlcjogdGhpcy5jb2x1bW5OdW1iZXIsXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIC8vIEF4aW9zXG4gICAgICBjb25maWc6IHRoaXMuY29uZmlnLFxuICAgICAgY29kZTogdGhpcy5jb2RlXG4gICAgfTtcbiAgfTtcbiAgcmV0dXJuIGVycm9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBDb25maWctc3BlY2lmaWMgbWVyZ2UtZnVuY3Rpb24gd2hpY2ggY3JlYXRlcyBhIG5ldyBjb25maWctb2JqZWN0XG4gKiBieSBtZXJnaW5nIHR3byBjb25maWd1cmF0aW9uIG9iamVjdHMgdG9nZXRoZXIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzFcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcyXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHJlc3VsdGluZyBmcm9tIG1lcmdpbmcgY29uZmlnMiB0byBjb25maWcxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbWVyZ2VDb25maWcoY29uZmlnMSwgY29uZmlnMikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgY29uZmlnMiA9IGNvbmZpZzIgfHwge307XG4gIHZhciBjb25maWcgPSB7fTtcblxuICB1dGlscy5mb3JFYWNoKFsndXJsJywgJ21ldGhvZCcsICdwYXJhbXMnLCAnZGF0YSddLCBmdW5jdGlvbiB2YWx1ZUZyb21Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbJ2hlYWRlcnMnLCAnYXV0aCcsICdwcm94eSddLCBmdW5jdGlvbiBtZXJnZURlZXBQcm9wZXJ0aWVzKHByb3ApIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMltwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdLCBjb25maWcyW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzFbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFtcbiAgICAnYmFzZVVSTCcsICd0cmFuc2Zvcm1SZXF1ZXN0JywgJ3RyYW5zZm9ybVJlc3BvbnNlJywgJ3BhcmFtc1NlcmlhbGl6ZXInLFxuICAgICd0aW1lb3V0JywgJ3dpdGhDcmVkZW50aWFscycsICdhZGFwdGVyJywgJ3Jlc3BvbnNlVHlwZScsICd4c3JmQ29va2llTmFtZScsXG4gICAgJ3hzcmZIZWFkZXJOYW1lJywgJ29uVXBsb2FkUHJvZ3Jlc3MnLCAnb25Eb3dubG9hZFByb2dyZXNzJywgJ21heENvbnRlbnRMZW5ndGgnLFxuICAgICd2YWxpZGF0ZVN0YXR1cycsICdtYXhSZWRpcmVjdHMnLCAnaHR0cEFnZW50JywgJ2h0dHBzQWdlbnQnLCAnY2FuY2VsVG9rZW4nLFxuICAgICdzb2NrZXRQYXRoJ1xuICBdLCBmdW5jdGlvbiBkZWZhdWx0VG9Db25maWcyKHByb3ApIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGNvbmZpZztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4vY3JlYXRlRXJyb3InKTtcblxuLyoqXG4gKiBSZXNvbHZlIG9yIHJlamVjdCBhIFByb21pc2UgYmFzZWQgb24gcmVzcG9uc2Ugc3RhdHVzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmUgQSBmdW5jdGlvbiB0aGF0IHJlc29sdmVzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0IEEgZnVuY3Rpb24gdGhhdCByZWplY3RzIHRoZSBwcm9taXNlLlxuICogQHBhcmFtIHtvYmplY3R9IHJlc3BvbnNlIFRoZSByZXNwb25zZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSkge1xuICB2YXIgdmFsaWRhdGVTdGF0dXMgPSByZXNwb25zZS5jb25maWcudmFsaWRhdGVTdGF0dXM7XG4gIGlmICghdmFsaWRhdGVTdGF0dXMgfHwgdmFsaWRhdGVTdGF0dXMocmVzcG9uc2Uuc3RhdHVzKSkge1xuICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICB9IGVsc2Uge1xuICAgIHJlamVjdChjcmVhdGVFcnJvcihcbiAgICAgICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlICcgKyByZXNwb25zZS5zdGF0dXMsXG4gICAgICByZXNwb25zZS5jb25maWcsXG4gICAgICBudWxsLFxuICAgICAgcmVzcG9uc2UucmVxdWVzdCxcbiAgICAgIHJlc3BvbnNlXG4gICAgKSk7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gdGhlIGRhdGEgZm9yIGEgcmVxdWVzdCBvciBhIHJlc3BvbnNlXG4gKlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGJlIHRyYW5zZm9ybWVkXG4gKiBAcGFyYW0ge0FycmF5fSBoZWFkZXJzIFRoZSBoZWFkZXJzIGZvciB0aGUgcmVxdWVzdCBvciByZXNwb25zZVxuICogQHBhcmFtIHtBcnJheXxGdW5jdGlvbn0gZm5zIEEgc2luZ2xlIGZ1bmN0aW9uIG9yIEFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdHJhbnNmb3JtZWQgZGF0YVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHRyYW5zZm9ybURhdGEoZGF0YSwgaGVhZGVycywgZm5zKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICB1dGlscy5mb3JFYWNoKGZucywgZnVuY3Rpb24gdHJhbnNmb3JtKGZuKSB7XG4gICAgZGF0YSA9IGZuKGRhdGEsIGhlYWRlcnMpO1xuICB9KTtcblxuICByZXR1cm4gZGF0YTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vdXRpbHMnKTtcbnZhciBub3JtYWxpemVIZWFkZXJOYW1lID0gcmVxdWlyZSgnLi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUnKTtcblxudmFyIERFRkFVTFRfQ09OVEVOVF9UWVBFID0ge1xuICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbn07XG5cbmZ1bmN0aW9uIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCB2YWx1ZSkge1xuICBpZiAoIXV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnMpICYmIHV0aWxzLmlzVW5kZWZpbmVkKGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddKSkge1xuICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gdmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEFkYXB0ZXIoKSB7XG4gIHZhciBhZGFwdGVyO1xuICAvLyBPbmx5IE5vZGUuSlMgaGFzIGEgcHJvY2VzcyB2YXJpYWJsZSB0aGF0IGlzIG9mIFtbQ2xhc3NdXSBwcm9jZXNzXG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpIHtcbiAgICAvLyBGb3Igbm9kZSB1c2UgSFRUUCBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMvaHR0cCcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBYTUxIdHRwUmVxdWVzdCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAvLyBGb3IgYnJvd3NlcnMgdXNlIFhIUiBhZGFwdGVyXG4gICAgYWRhcHRlciA9IHJlcXVpcmUoJy4vYWRhcHRlcnMveGhyJyk7XG4gIH1cbiAgcmV0dXJuIGFkYXB0ZXI7XG59XG5cbnZhciBkZWZhdWx0cyA9IHtcbiAgYWRhcHRlcjogZ2V0RGVmYXVsdEFkYXB0ZXIoKSxcblxuICB0cmFuc2Zvcm1SZXF1ZXN0OiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVxdWVzdChkYXRhLCBoZWFkZXJzKSB7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQWNjZXB0Jyk7XG4gICAgbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCAnQ29udGVudC1UeXBlJyk7XG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQXJyYXlCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc1N0cmVhbShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNGaWxlKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0Jsb2IoZGF0YSlcbiAgICApIHtcbiAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNBcnJheUJ1ZmZlclZpZXcoZGF0YSkpIHtcbiAgICAgIHJldHVybiBkYXRhLmJ1ZmZlcjtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gZGF0YS50b1N0cmluZygpO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04Jyk7XG4gICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICB0cmFuc2Zvcm1SZXNwb25zZTogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlKGRhdGEpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHsgLyogSWdub3JlICovIH1cbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIC8qKlxuICAgKiBBIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIHRvIGFib3J0IGEgcmVxdWVzdC4gSWYgc2V0IHRvIDAgKGRlZmF1bHQpIGFcbiAgICogdGltZW91dCBpcyBub3QgY3JlYXRlZC5cbiAgICovXG4gIHRpbWVvdXQ6IDAsXG5cbiAgeHNyZkNvb2tpZU5hbWU6ICdYU1JGLVRPS0VOJyxcbiAgeHNyZkhlYWRlck5hbWU6ICdYLVhTUkYtVE9LRU4nLFxuXG4gIG1heENvbnRlbnRMZW5ndGg6IC0xLFxuXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiB2YWxpZGF0ZVN0YXR1cyhzdGF0dXMpIHtcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDA7XG4gIH1cbn07XG5cbmRlZmF1bHRzLmhlYWRlcnMgPSB7XG4gIGNvbW1vbjoge1xuICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbiwgdGV4dC9wbGFpbiwgKi8qJ1xuICB9XG59O1xuXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2ROb0RhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHt9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIGRlZmF1bHRzLmhlYWRlcnNbbWV0aG9kXSA9IHV0aWxzLm1lcmdlKERFRkFVTFRfQ09OVEVOVF9UWVBFKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlZmF1bHRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc0FyZywgYXJncyk7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIGVuY29kZSh2YWwpIHtcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLlxuICAgIHJlcGxhY2UoLyU0MC9naSwgJ0AnKS5cbiAgICByZXBsYWNlKC8lM0EvZ2ksICc6JykuXG4gICAgcmVwbGFjZSgvJTI0L2csICckJykuXG4gICAgcmVwbGFjZSgvJTJDL2dpLCAnLCcpLlxuICAgIHJlcGxhY2UoLyUyMC9nLCAnKycpLlxuICAgIHJlcGxhY2UoLyU1Qi9naSwgJ1snKS5cbiAgICByZXBsYWNlKC8lNUQvZ2ksICddJyk7XG59XG5cbi8qKlxuICogQnVpbGQgYSBVUkwgYnkgYXBwZW5kaW5nIHBhcmFtcyB0byB0aGUgZW5kXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgYmFzZSBvZiB0aGUgdXJsIChlLmcuLCBodHRwOi8vd3d3Lmdvb2dsZS5jb20pXG4gKiBAcGFyYW0ge29iamVjdH0gW3BhcmFtc10gVGhlIHBhcmFtcyB0byBiZSBhcHBlbmRlZFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCB1cmxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBidWlsZFVSTCh1cmwsIHBhcmFtcywgcGFyYW1zU2VyaWFsaXplcikge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdmFyIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIGlmIChwYXJhbXNTZXJpYWxpemVyKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtc1NlcmlhbGl6ZXIocGFyYW1zKTtcbiAgfSBlbHNlIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhwYXJhbXMpKSB7XG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcmFtcy50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgdXRpbHMuZm9yRWFjaChwYXJhbXMsIGZ1bmN0aW9uIHNlcmlhbGl6ZSh2YWwsIGtleSkge1xuICAgICAgaWYgKHZhbCA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh1dGlscy5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAga2V5ID0ga2V5ICsgJ1tdJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbCA9IFt2YWxdO1xuICAgICAgfVxuXG4gICAgICB1dGlscy5mb3JFYWNoKHZhbCwgZnVuY3Rpb24gcGFyc2VWYWx1ZSh2KSB7XG4gICAgICAgIGlmICh1dGlscy5pc0RhdGUodikpIHtcbiAgICAgICAgICB2ID0gdi50b0lTT1N0cmluZygpO1xuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHYpKSB7XG4gICAgICAgICAgdiA9IEpTT04uc3RyaW5naWZ5KHYpO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRzLnB1c2goZW5jb2RlKGtleSkgKyAnPScgKyBlbmNvZGUodikpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFydHMuam9pbignJicpO1xuICB9XG5cbiAgaWYgKHNlcmlhbGl6ZWRQYXJhbXMpIHtcbiAgICB2YXIgaGFzaG1hcmtJbmRleCA9IHVybC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKGhhc2htYXJrSW5kZXggIT09IC0xKSB7XG4gICAgICB1cmwgPSB1cmwuc2xpY2UoMCwgaGFzaG1hcmtJbmRleCk7XG4gICAgfVxuXG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyBzZXJpYWxpemVkUGFyYW1zO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBVUkwgYnkgY29tYmluaW5nIHRoZSBzcGVjaWZpZWQgVVJMc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlVVJMIFRoZSBiYXNlIFVSTFxuICogQHBhcmFtIHtzdHJpbmd9IHJlbGF0aXZlVVJMIFRoZSByZWxhdGl2ZSBVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBjb21iaW5lZCBVUkxcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21iaW5lVVJMcyhiYXNlVVJMLCByZWxhdGl2ZVVSTCkge1xuICByZXR1cm4gcmVsYXRpdmVVUkxcbiAgICA/IGJhc2VVUkwucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyByZWxhdGl2ZVVSTC5yZXBsYWNlKC9eXFwvKy8sICcnKVxuICAgIDogYmFzZVVSTDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBzdXBwb3J0IGRvY3VtZW50LmNvb2tpZVxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUobmFtZSwgdmFsdWUsIGV4cGlyZXMsIHBhdGgsIGRvbWFpbiwgc2VjdXJlKSB7XG4gICAgICAgICAgdmFyIGNvb2tpZSA9IFtdO1xuICAgICAgICAgIGNvb2tpZS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKTtcblxuICAgICAgICAgIGlmICh1dGlscy5pc051bWJlcihleHBpcmVzKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2V4cGlyZXM9JyArIG5ldyBEYXRlKGV4cGlyZXMpLnRvR01UU3RyaW5nKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhwYXRoKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3BhdGg9JyArIHBhdGgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkb21haW4pKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZG9tYWluPScgKyBkb21haW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWN1cmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdzZWN1cmUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBjb29raWUuam9pbignOyAnKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG5hbWUpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gobmV3IFJlZ0V4cCgnKF58O1xcXFxzKikoJyArIG5hbWUgKyAnKT0oW147XSopJykpO1xuICAgICAgICAgIHJldHVybiAobWF0Y2ggPyBkZWNvZGVVUklDb21wb25lbnQobWF0Y2hbM10pIDogbnVsbCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUobmFtZSkge1xuICAgICAgICAgIHRoaXMud3JpdGUobmFtZSwgJycsIERhdGUubm93KCkgLSA4NjQwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52ICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoKSB7fSxcbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZCgpIHsgcmV0dXJuIG51bGw7IH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGVcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBVUkwgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHNwZWNpZmllZCBVUkwgaXMgYWJzb2x1dGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQWJzb2x1dGVVUkwodXJsKSB7XG4gIC8vIEEgVVJMIGlzIGNvbnNpZGVyZWQgYWJzb2x1dGUgaWYgaXQgYmVnaW5zIHdpdGggXCI8c2NoZW1lPjovL1wiIG9yIFwiLy9cIiAocHJvdG9jb2wtcmVsYXRpdmUgVVJMKS5cbiAgLy8gUkZDIDM5ODYgZGVmaW5lcyBzY2hlbWUgbmFtZSBhcyBhIHNlcXVlbmNlIG9mIGNoYXJhY3RlcnMgYmVnaW5uaW5nIHdpdGggYSBsZXR0ZXIgYW5kIGZvbGxvd2VkXG4gIC8vIGJ5IGFueSBjb21iaW5hdGlvbiBvZiBsZXR0ZXJzLCBkaWdpdHMsIHBsdXMsIHBlcmlvZCwgb3IgaHlwaGVuLlxuICByZXR1cm4gL14oW2Etel1bYS16XFxkXFwrXFwtXFwuXSo6KT9cXC9cXC8vaS50ZXN0KHVybCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgaGF2ZSBmdWxsIHN1cHBvcnQgb2YgdGhlIEFQSXMgbmVlZGVkIHRvIHRlc3RcbiAgLy8gd2hldGhlciB0aGUgcmVxdWVzdCBVUkwgaXMgb2YgdGhlIHNhbWUgb3JpZ2luIGFzIGN1cnJlbnQgbG9jYXRpb24uXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHZhciBtc2llID0gLyhtc2llfHRyaWRlbnQpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIHZhciB1cmxQYXJzaW5nTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgIHZhciBvcmlnaW5VUkw7XG5cbiAgICAgIC8qKlxuICAgICogUGFyc2UgYSBVUkwgdG8gZGlzY292ZXIgaXQncyBjb21wb25lbnRzXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHVybCBUaGUgVVJMIHRvIGJlIHBhcnNlZFxuICAgICogQHJldHVybnMge09iamVjdH1cbiAgICAqL1xuICAgICAgZnVuY3Rpb24gcmVzb2x2ZVVSTCh1cmwpIHtcbiAgICAgICAgdmFyIGhyZWYgPSB1cmw7XG5cbiAgICAgICAgaWYgKG1zaWUpIHtcbiAgICAgICAgLy8gSUUgbmVlZHMgYXR0cmlidXRlIHNldCB0d2ljZSB0byBub3JtYWxpemUgcHJvcGVydGllc1xuICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuICAgICAgICAgIGhyZWYgPSB1cmxQYXJzaW5nTm9kZS5ocmVmO1xuICAgICAgICB9XG5cbiAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG5cbiAgICAgICAgLy8gdXJsUGFyc2luZ05vZGUgcHJvdmlkZXMgdGhlIFVybFV0aWxzIGludGVyZmFjZSAtIGh0dHA6Ly91cmwuc3BlYy53aGF0d2cub3JnLyN1cmx1dGlsc1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhyZWY6IHVybFBhcnNpbmdOb2RlLmhyZWYsXG4gICAgICAgICAgcHJvdG9jb2w6IHVybFBhcnNpbmdOb2RlLnByb3RvY29sID8gdXJsUGFyc2luZ05vZGUucHJvdG9jb2wucmVwbGFjZSgvOiQvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0OiB1cmxQYXJzaW5nTm9kZS5ob3N0LFxuICAgICAgICAgIHNlYXJjaDogdXJsUGFyc2luZ05vZGUuc2VhcmNoID8gdXJsUGFyc2luZ05vZGUuc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJykgOiAnJyxcbiAgICAgICAgICBoYXNoOiB1cmxQYXJzaW5nTm9kZS5oYXNoID8gdXJsUGFyc2luZ05vZGUuaGFzaC5yZXBsYWNlKC9eIy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3RuYW1lOiB1cmxQYXJzaW5nTm9kZS5ob3N0bmFtZSxcbiAgICAgICAgICBwb3J0OiB1cmxQYXJzaW5nTm9kZS5wb3J0LFxuICAgICAgICAgIHBhdGhuYW1lOiAodXJsUGFyc2luZ05vZGUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLycpID9cbiAgICAgICAgICAgIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lIDpcbiAgICAgICAgICAgICcvJyArIHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIG9yaWdpblVSTCA9IHJlc29sdmVVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuXG4gICAgICAvKipcbiAgICAqIERldGVybWluZSBpZiBhIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luIGFzIHRoZSBjdXJyZW50IGxvY2F0aW9uXG4gICAgKlxuICAgICogQHBhcmFtIHtTdHJpbmd9IHJlcXVlc3RVUkwgVGhlIFVSTCB0byB0ZXN0XG4gICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgKi9cbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4ocmVxdWVzdFVSTCkge1xuICAgICAgICB2YXIgcGFyc2VkID0gKHV0aWxzLmlzU3RyaW5nKHJlcXVlc3RVUkwpKSA/IHJlc29sdmVVUkwocmVxdWVzdFVSTCkgOiByZXF1ZXN0VVJMO1xuICAgICAgICByZXR1cm4gKHBhcnNlZC5wcm90b2NvbCA9PT0gb3JpZ2luVVJMLnByb3RvY29sICYmXG4gICAgICAgICAgICBwYXJzZWQuaG9zdCA9PT0gb3JpZ2luVVJMLmhvc3QpO1xuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnZzICh3ZWIgd29ya2VycywgcmVhY3QtbmF0aXZlKSBsYWNrIG5lZWRlZCBzdXBwb3J0LlxuICAgIChmdW5jdGlvbiBub25TdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSkoKVxuKTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsIG5vcm1hbGl6ZWROYW1lKSB7XG4gIHV0aWxzLmZvckVhY2goaGVhZGVycywgZnVuY3Rpb24gcHJvY2Vzc0hlYWRlcih2YWx1ZSwgbmFtZSkge1xuICAgIGlmIChuYW1lICE9PSBub3JtYWxpemVkTmFtZSAmJiBuYW1lLnRvVXBwZXJDYXNlKCkgPT09IG5vcm1hbGl6ZWROYW1lLnRvVXBwZXJDYXNlKCkpIHtcbiAgICAgIGhlYWRlcnNbbm9ybWFsaXplZE5hbWVdID0gdmFsdWU7XG4gICAgICBkZWxldGUgaGVhZGVyc1tuYW1lXTtcbiAgICB9XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vLyBIZWFkZXJzIHdob3NlIGR1cGxpY2F0ZXMgYXJlIGlnbm9yZWQgYnkgbm9kZVxuLy8gYy5mLiBodHRwczovL25vZGVqcy5vcmcvYXBpL2h0dHAuaHRtbCNodHRwX21lc3NhZ2VfaGVhZGVyc1xudmFyIGlnbm9yZUR1cGxpY2F0ZU9mID0gW1xuICAnYWdlJywgJ2F1dGhvcml6YXRpb24nLCAnY29udGVudC1sZW5ndGgnLCAnY29udGVudC10eXBlJywgJ2V0YWcnLFxuICAnZXhwaXJlcycsICdmcm9tJywgJ2hvc3QnLCAnaWYtbW9kaWZpZWQtc2luY2UnLCAnaWYtdW5tb2RpZmllZC1zaW5jZScsXG4gICdsYXN0LW1vZGlmaWVkJywgJ2xvY2F0aW9uJywgJ21heC1mb3J3YXJkcycsICdwcm94eS1hdXRob3JpemF0aW9uJyxcbiAgJ3JlZmVyZXInLCAncmV0cnktYWZ0ZXInLCAndXNlci1hZ2VudCdcbl07XG5cbi8qKlxuICogUGFyc2UgaGVhZGVycyBpbnRvIGFuIG9iamVjdFxuICpcbiAqIGBgYFxuICogRGF0ZTogV2VkLCAyNyBBdWcgMjAxNCAwODo1ODo0OSBHTVRcbiAqIENvbnRlbnQtVHlwZTogYXBwbGljYXRpb24vanNvblxuICogQ29ubmVjdGlvbjoga2VlcC1hbGl2ZVxuICogVHJhbnNmZXItRW5jb2Rpbmc6IGNodW5rZWRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZWFkZXJzIEhlYWRlcnMgbmVlZGluZyB0byBiZSBwYXJzZWRcbiAqIEByZXR1cm5zIHtPYmplY3R9IEhlYWRlcnMgcGFyc2VkIGludG8gYW4gb2JqZWN0XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcGFyc2VIZWFkZXJzKGhlYWRlcnMpIHtcbiAgdmFyIHBhcnNlZCA9IHt9O1xuICB2YXIga2V5O1xuICB2YXIgdmFsO1xuICB2YXIgaTtcblxuICBpZiAoIWhlYWRlcnMpIHsgcmV0dXJuIHBhcnNlZDsgfVxuXG4gIHV0aWxzLmZvckVhY2goaGVhZGVycy5zcGxpdCgnXFxuJyksIGZ1bmN0aW9uIHBhcnNlcihsaW5lKSB7XG4gICAgaSA9IGxpbmUuaW5kZXhPZignOicpO1xuICAgIGtleSA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoMCwgaSkpLnRvTG93ZXJDYXNlKCk7XG4gICAgdmFsID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cihpICsgMSkpO1xuXG4gICAgaWYgKGtleSkge1xuICAgICAgaWYgKHBhcnNlZFtrZXldICYmIGlnbm9yZUR1cGxpY2F0ZU9mLmluZGV4T2Yoa2V5KSA+PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPT09ICdzZXQtY29va2llJykge1xuICAgICAgICBwYXJzZWRba2V5XSA9IChwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldIDogW10pLmNvbmNhdChbdmFsXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwYXJzZWRba2V5XSA9IHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gKyAnLCAnICsgdmFsIDogdmFsO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU3ludGFjdGljIHN1Z2FyIGZvciBpbnZva2luZyBhIGZ1bmN0aW9uIGFuZCBleHBhbmRpbmcgYW4gYXJyYXkgZm9yIGFyZ3VtZW50cy5cbiAqXG4gKiBDb21tb24gdXNlIGNhc2Ugd291bGQgYmUgdG8gdXNlIGBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHlgLlxuICpcbiAqICBgYGBqc1xuICogIGZ1bmN0aW9uIGYoeCwgeSwgeikge31cbiAqICB2YXIgYXJncyA9IFsxLCAyLCAzXTtcbiAqICBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICogIGBgYFxuICpcbiAqIFdpdGggYHNwcmVhZGAgdGhpcyBleGFtcGxlIGNhbiBiZSByZS13cml0dGVuLlxuICpcbiAqICBgYGBqc1xuICogIHNwcmVhZChmdW5jdGlvbih4LCB5LCB6KSB7fSkoWzEsIDIsIDNdKTtcbiAqICBgYGBcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICogQHJldHVybnMge0Z1bmN0aW9ufVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNwcmVhZChjYWxsYmFjaykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcChhcnIpIHtcbiAgICByZXR1cm4gY2FsbGJhY2suYXBwbHkobnVsbCwgYXJyKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBiaW5kID0gcmVxdWlyZSgnLi9oZWxwZXJzL2JpbmQnKTtcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpO1xuXG4vKmdsb2JhbCB0b1N0cmluZzp0cnVlKi9cblxuLy8gdXRpbHMgaXMgYSBsaWJyYXJ5IG9mIGdlbmVyaWMgaGVscGVyIGZ1bmN0aW9ucyBub24tc3BlY2lmaWMgdG8gYXhpb3NcblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZvcm1EYXRhXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gRm9ybURhdGEsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbCkge1xuICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWwgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSB2aWV3IG9uIGFuIEFycmF5QnVmZmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlclZpZXcodmFsKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmICgodHlwZW9mIEFycmF5QnVmZmVyICE9PSAndW5kZWZpbmVkJykgJiYgKEFycmF5QnVmZmVyLmlzVmlldykpIHtcbiAgICByZXN1bHQgPSBBcnJheUJ1ZmZlci5pc1ZpZXcodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAodmFsKSAmJiAodmFsLmJ1ZmZlcikgJiYgKHZhbC5idWZmZXIgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcik7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmluZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyaW5nLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIE51bWJlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgTnVtYmVyLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAnbnVtYmVyJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyB1bmRlZmluZWRcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdW5kZWZpbmVkLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhbiBPYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBPYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIERhdGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIERhdGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZpbGVcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZpbGUsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0ZpbGUodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZpbGVdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEJsb2JcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEJsb2IsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Jsb2IodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEJsb2JdJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIEZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJlYW1cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmVhbSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyZWFtKHZhbCkge1xuICByZXR1cm4gaXNPYmplY3QodmFsKSAmJiBpc0Z1bmN0aW9uKHZhbC5waXBlKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3QsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiBVUkxTZWFyY2hQYXJhbXMgIT09ICd1bmRlZmluZWQnICYmIHZhbCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcztcbn1cblxuLyoqXG4gKiBUcmltIGV4Y2VzcyB3aGl0ZXNwYWNlIG9mZiB0aGUgYmVnaW5uaW5nIGFuZCBlbmQgb2YgYSBzdHJpbmdcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyIFRoZSBTdHJpbmcgdG8gdHJpbVxuICogQHJldHVybnMge1N0cmluZ30gVGhlIFN0cmluZyBmcmVlZCBvZiBleGNlc3Mgd2hpdGVzcGFjZVxuICovXG5mdW5jdGlvbiB0cmltKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMqLywgJycpLnJlcGxhY2UoL1xccyokLywgJycpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiB3ZSdyZSBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudFxuICpcbiAqIFRoaXMgYWxsb3dzIGF4aW9zIHRvIHJ1biBpbiBhIHdlYiB3b3JrZXIsIGFuZCByZWFjdC1uYXRpdmUuXG4gKiBCb3RoIGVudmlyb25tZW50cyBzdXBwb3J0IFhNTEh0dHBSZXF1ZXN0LCBidXQgbm90IGZ1bGx5IHN0YW5kYXJkIGdsb2JhbHMuXG4gKlxuICogd2ViIHdvcmtlcnM6XG4gKiAgdHlwZW9mIHdpbmRvdyAtPiB1bmRlZmluZWRcbiAqICB0eXBlb2YgZG9jdW1lbnQgLT4gdW5kZWZpbmVkXG4gKlxuICogcmVhY3QtbmF0aXZlOlxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdSZWFjdE5hdGl2ZSdcbiAqIG5hdGl2ZXNjcmlwdFxuICogIG5hdmlnYXRvci5wcm9kdWN0IC0+ICdOYXRpdmVTY3JpcHQnIG9yICdOUydcbiAqL1xuZnVuY3Rpb24gaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gIGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAobmF2aWdhdG9yLnByb2R1Y3QgPT09ICdSZWFjdE5hdGl2ZScgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05hdGl2ZVNjcmlwdCcgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ05TJykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIChcbiAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcbiAgKTtcbn1cblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYW4gQXJyYXkgb3IgYW4gT2JqZWN0IGludm9raW5nIGEgZnVuY3Rpb24gZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiBgb2JqYCBpcyBhbiBBcnJheSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGluZGV4LCBhbmQgY29tcGxldGUgYXJyYXkgZm9yIGVhY2ggaXRlbS5cbiAqXG4gKiBJZiAnb2JqJyBpcyBhbiBPYmplY3QgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBrZXksIGFuZCBjb21wbGV0ZSBvYmplY3QgZm9yIGVhY2ggcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtPYmplY3R8QXJyYXl9IG9iaiBUaGUgb2JqZWN0IHRvIGl0ZXJhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBjYWxsYmFjayB0byBpbnZva2UgZm9yIGVhY2ggaXRlbVxuICovXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgZm4pIHtcbiAgLy8gRG9uJ3QgYm90aGVyIGlmIG5vIHZhbHVlIHByb3ZpZGVkXG4gIGlmIChvYmogPT09IG51bGwgfHwgdHlwZW9mIG9iaiA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBGb3JjZSBhbiBhcnJheSBpZiBub3QgYWxyZWFkeSBzb21ldGhpbmcgaXRlcmFibGVcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgb2JqID0gW29ial07XG4gIH1cblxuICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIGFycmF5IHZhbHVlc1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gb2JqLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgZm4uY2FsbChudWxsLCBvYmpbaV0sIGksIG9iaik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBY2NlcHRzIHZhcmFyZ3MgZXhwZWN0aW5nIGVhY2ggYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0LCB0aGVuXG4gKiBpbW11dGFibHkgbWVyZ2VzIHRoZSBwcm9wZXJ0aWVzIG9mIGVhY2ggb2JqZWN0IGFuZCByZXR1cm5zIHJlc3VsdC5cbiAqXG4gKiBXaGVuIG11bHRpcGxlIG9iamVjdHMgY29udGFpbiB0aGUgc2FtZSBrZXkgdGhlIGxhdGVyIG9iamVjdCBpblxuICogdGhlIGFyZ3VtZW50cyBsaXN0IHdpbGwgdGFrZSBwcmVjZWRlbmNlLlxuICpcbiAqIEV4YW1wbGU6XG4gKlxuICogYGBganNcbiAqIHZhciByZXN1bHQgPSBtZXJnZSh7Zm9vOiAxMjN9LCB7Zm9vOiA0NTZ9KTtcbiAqIGNvbnNvbGUubG9nKHJlc3VsdC5mb28pOyAvLyBvdXRwdXRzIDQ1NlxuICogYGBgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gbWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBtZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEZ1bmN0aW9uIGVxdWFsIHRvIG1lcmdlIHdpdGggdGhlIGRpZmZlcmVuY2UgYmVpbmcgdGhhdCBubyByZWZlcmVuY2VcbiAqIHRvIG9yaWdpbmFsIG9iamVjdHMgaXMga2VwdC5cbiAqXG4gKiBAc2VlIG1lcmdlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBkZWVwTWVyZ2UoLyogb2JqMSwgb2JqMiwgb2JqMywgLi4uICovKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIHJlc3VsdFtrZXldID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgICAgcmVzdWx0W2tleV0gPSBkZWVwTWVyZ2Uoe30sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBFeHRlbmRzIG9iamVjdCBhIGJ5IG11dGFibHkgYWRkaW5nIHRvIGl0IHRoZSBwcm9wZXJ0aWVzIG9mIG9iamVjdCBiLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBhIFRoZSBvYmplY3QgdG8gYmUgZXh0ZW5kZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBiIFRoZSBvYmplY3QgdG8gY29weSBwcm9wZXJ0aWVzIGZyb21cbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzQXJnIFRoZSBvYmplY3QgdG8gYmluZCBmdW5jdGlvbiB0b1xuICogQHJldHVybiB7T2JqZWN0fSBUaGUgcmVzdWx0aW5nIHZhbHVlIG9mIG9iamVjdCBhXG4gKi9cbmZ1bmN0aW9uIGV4dGVuZChhLCBiLCB0aGlzQXJnKSB7XG4gIGZvckVhY2goYiwgZnVuY3Rpb24gYXNzaWduVmFsdWUodmFsLCBrZXkpIHtcbiAgICBpZiAodGhpc0FyZyAmJiB0eXBlb2YgdmFsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhW2tleV0gPSBiaW5kKHZhbCwgdGhpc0FyZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IHZhbDtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gYTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzQXJyYXk6IGlzQXJyYXksXG4gIGlzQXJyYXlCdWZmZXI6IGlzQXJyYXlCdWZmZXIsXG4gIGlzQnVmZmVyOiBpc0J1ZmZlcixcbiAgaXNGb3JtRGF0YTogaXNGb3JtRGF0YSxcbiAgaXNBcnJheUJ1ZmZlclZpZXc6IGlzQXJyYXlCdWZmZXJWaWV3LFxuICBpc1N0cmluZzogaXNTdHJpbmcsXG4gIGlzTnVtYmVyOiBpc051bWJlcixcbiAgaXNPYmplY3Q6IGlzT2JqZWN0LFxuICBpc1VuZGVmaW5lZDogaXNVbmRlZmluZWQsXG4gIGlzRGF0ZTogaXNEYXRlLFxuICBpc0ZpbGU6IGlzRmlsZSxcbiAgaXNCbG9iOiBpc0Jsb2IsXG4gIGlzRnVuY3Rpb246IGlzRnVuY3Rpb24sXG4gIGlzU3RyZWFtOiBpc1N0cmVhbSxcbiAgaXNVUkxTZWFyY2hQYXJhbXM6IGlzVVJMU2VhcmNoUGFyYW1zLFxuICBpc1N0YW5kYXJkQnJvd3NlckVudjogaXNTdGFuZGFyZEJyb3dzZXJFbnYsXG4gIGZvckVhY2g6IGZvckVhY2gsXG4gIG1lcmdlOiBtZXJnZSxcbiAgZGVlcE1lcmdlOiBkZWVwTWVyZ2UsXG4gIGV4dGVuZDogZXh0ZW5kLFxuICB0cmltOiB0cmltXG59O1xuIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIG9iai5jb25zdHJ1Y3RvciAhPSBudWxsICYmXG4gICAgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuIiwiOyhmdW5jdGlvbigpe3ZhciBrO2Z1bmN0aW9uIG0oYSl7dmFyIGI9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX19dmFyIHA9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfSxxPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXM7ZnVuY3Rpb24gcigpe3I9ZnVuY3Rpb24oKXt9O3EuU3ltYm9sfHwocS5TeW1ib2w9dSl9ZnVuY3Rpb24gdihhLGIpe3RoaXMucz1hO3AodGhpcyxcImRlc2NyaXB0aW9uXCIse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9XG52LnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLnN9O3ZhciB1PWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShjKXtpZih0aGlzIGluc3RhbmNlb2YgYSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yXCIpO3JldHVybiBuZXcgdihcImpzY29tcF9zeW1ib2xfXCIrKGN8fFwiXCIpK1wiX1wiK2IrKyxjKX12YXIgYj0wO3JldHVybiBhfSgpO2Z1bmN0aW9uIHcoKXtyKCk7dmFyIGE9cS5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9cS5TeW1ib2wuaXRlcmF0b3I9cS5TeW1ib2woXCJTeW1ib2wuaXRlcmF0b3JcIikpO1wiZnVuY3Rpb25cIiE9dHlwZW9mIEFycmF5LnByb3RvdHlwZVthXSYmcChBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHgobSh0aGlzKSl9fSk7dz1mdW5jdGlvbigpe319XG5mdW5jdGlvbiB4KGEpe3coKTthPXtuZXh0OmF9O2FbcS5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfWZ1bmN0aW9uIHkoYSl7dmFyIGI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yJiZhW1N5bWJvbC5pdGVyYXRvcl07cmV0dXJuIGI/Yi5jYWxsKGEpOntuZXh0Om0oYSl9fXZhciB6O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5zZXRQcm90b3R5cGVPZil6PU9iamVjdC5zZXRQcm90b3R5cGVPZjtlbHNle3ZhciBBO2E6e3ZhciBCPXt2OiEwfSxDPXt9O3RyeXtDLl9fcHJvdG9fXz1CO0E9Qy52O2JyZWFrIGF9Y2F0Y2goYSl7fUE9ITF9ej1BP2Z1bmN0aW9uKGEsYil7YS5fX3Byb3RvX189YjtpZihhLl9fcHJvdG9fXyE9PWIpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBleHRlbnNpYmxlXCIpO3JldHVybiBhfTpudWxsfXZhciBEPXo7XG5mdW5jdGlvbiBFKCl7dGhpcy5oPSExO3RoaXMuYz1udWxsO3RoaXMubz12b2lkIDA7dGhpcy5iPTE7dGhpcy5tPXRoaXMudz0wO3RoaXMuZz1udWxsfWZ1bmN0aW9uIEYoYSl7aWYoYS5oKXRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO2EuaD0hMH1FLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe3RoaXMubz1hfTtFLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe3RoaXMuZz17QTphLEI6ITB9O3RoaXMuYj10aGlzLnd8fHRoaXMubX07RS5wcm90b3R5cGVbXCJyZXR1cm5cIl09ZnVuY3Rpb24oYSl7dGhpcy5nPXtcInJldHVyblwiOmF9O3RoaXMuYj10aGlzLm19O2Z1bmN0aW9uIEcoYSxiLGMpe2EuYj1jO3JldHVybnt2YWx1ZTpifX1mdW5jdGlvbiBIKGEpe3RoaXMuQz1hO3RoaXMubD1bXTtmb3IodmFyIGIgaW4gYSl0aGlzLmwucHVzaChiKTt0aGlzLmwucmV2ZXJzZSgpfWZ1bmN0aW9uIEkoYSl7dGhpcy5hPW5ldyBFO3RoaXMuRD1hfVxuSS5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXtGKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEoodGhpcyx0aGlzLmEuYy5uZXh0LGEsdGhpcy5hLmkpO3RoaXMuYS5pKGEpO3JldHVybiBLKHRoaXMpfTtmdW5jdGlvbiBMKGEsYil7RihhLmEpO3ZhciBjPWEuYS5jO2lmKGMpcmV0dXJuIEooYSxcInJldHVyblwiaW4gYz9jW1wicmV0dXJuXCJdOmZ1bmN0aW9uKGQpe3JldHVybnt2YWx1ZTpkLGRvbmU6ITB9fSxiLGEuYVtcInJldHVyblwiXSk7YS5hW1wicmV0dXJuXCJdKGIpO3JldHVybiBLKGEpfUkucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7Rih0aGlzLmEpO2lmKHRoaXMuYS5jKXJldHVybiBKKHRoaXMsdGhpcy5hLmNbXCJ0aHJvd1wiXSxhLHRoaXMuYS5pKTt0aGlzLmEuaihhKTtyZXR1cm4gSyh0aGlzKX07XG5mdW5jdGlvbiBKKGEsYixjLGQpe3RyeXt2YXIgZT1iLmNhbGwoYS5hLmMsYyk7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSXRlcmF0b3IgcmVzdWx0IFwiK2UrXCIgaXMgbm90IGFuIG9iamVjdFwiKTtpZighZS5kb25lKXJldHVybiBhLmEuaD0hMSxlO3ZhciBmPWUudmFsdWV9Y2F0Y2goZyl7cmV0dXJuIGEuYS5jPW51bGwsYS5hLmooZyksSyhhKX1hLmEuYz1udWxsO2QuY2FsbChhLmEsZik7cmV0dXJuIEsoYSl9ZnVuY3Rpb24gSyhhKXtmb3IoO2EuYS5iOyl0cnl7dmFyIGI9YS5EKGEuYSk7aWYoYilyZXR1cm4gYS5hLmg9ITEse3ZhbHVlOmIudmFsdWUsZG9uZTohMX19Y2F0Y2goYyl7YS5hLm89dm9pZCAwLGEuYS5qKGMpfWEuYS5oPSExO2lmKGEuYS5nKXtiPWEuYS5nO2EuYS5nPW51bGw7aWYoYi5CKXRocm93IGIuQTtyZXR1cm57dmFsdWU6YltcInJldHVyblwiXSxkb25lOiEwfX1yZXR1cm57dmFsdWU6dm9pZCAwLGRvbmU6ITB9fVxuZnVuY3Rpb24gTShhKXt0aGlzLm5leHQ9ZnVuY3Rpb24oYil7cmV0dXJuIGEuaShiKX07dGhpc1tcInRocm93XCJdPWZ1bmN0aW9uKGIpe3JldHVybiBhLmooYil9O3RoaXNbXCJyZXR1cm5cIl09ZnVuY3Rpb24oYil7cmV0dXJuIEwoYSxiKX07dygpO3RoaXNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfX1mdW5jdGlvbiBOKGEsYil7dmFyIGM9bmV3IE0obmV3IEkoYikpO0QmJkQoYyxhLnByb3RvdHlwZSk7cmV0dXJuIGN9XG5pZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgQmxvYiYmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgRm9ybURhdGF8fCFGb3JtRGF0YS5wcm90b3R5cGUua2V5cykpe3ZhciBPPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYihhW2NdKX0sUD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIgaW5zdGFuY2VvZiBCbG9iP1tTdHJpbmcoYSksYix2b2lkIDAhPT1jP2MrXCJcIjpcInN0cmluZ1wiPT09dHlwZW9mIGIubmFtZT9iLm5hbWU6XCJibG9iXCJdOltTdHJpbmcoYSksU3RyaW5nKGIpXX0sUT1mdW5jdGlvbihhLGIpe2lmKGEubGVuZ3RoPGIpdGhyb3cgbmV3IFR5cGVFcnJvcihiK1wiIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSBcIithLmxlbmd0aCtcIiBwcmVzZW50LlwiKTt9LFM9ZnVuY3Rpb24oYSl7dmFyIGI9eShhKTthPWIubmV4dCgpLnZhbHVlO2I9Yi5uZXh0KCkudmFsdWU7YSBpbnN0YW5jZW9mIEJsb2ImJihhPW5ldyBGaWxlKFthXSxiLHt0eXBlOmEudHlwZSxsYXN0TW9kaWZpZWQ6YS5sYXN0TW9kaWZpZWR9KSk7XG5yZXR1cm4gYX0sVD1cIm9iamVjdFwiPT09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxVPVQuRm9ybURhdGEsVj1ULlhNTEh0dHBSZXF1ZXN0JiZULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kLFc9VC5SZXF1ZXN0JiZULmZldGNoLFg9VC5uYXZpZ2F0b3ImJlQubmF2aWdhdG9yLnNlbmRCZWFjb247cigpO3ZhciBZPVQuU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWc7WSYmKEJsb2IucHJvdG90eXBlW1ldfHwoQmxvYi5wcm90b3R5cGVbWV09XCJCbG9iXCIpLFwiRmlsZVwiaW4gVCYmIUZpbGUucHJvdG90eXBlW1ldJiYoRmlsZS5wcm90b3R5cGVbWV09XCJGaWxlXCIpKTt0cnl7bmV3IEZpbGUoW10sXCJcIil9Y2F0Y2goYSl7VC5GaWxlPWZ1bmN0aW9uKGIsYyxkKXtiPW5ldyBCbG9iKGIsZCk7ZD1kJiZ2b2lkIDAhPT1kLmxhc3RNb2RpZmllZD9uZXcgRGF0ZShkLmxhc3RNb2RpZmllZCk6bmV3IERhdGU7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYixcbntuYW1lOnt2YWx1ZTpjfSxsYXN0TW9kaWZpZWREYXRlOnt2YWx1ZTpkfSxsYXN0TW9kaWZpZWQ6e3ZhbHVlOitkfSx0b1N0cmluZzp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIn19fSk7WSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsWSx7dmFsdWU6XCJGaWxlXCJ9KTtyZXR1cm4gYn19cigpO3coKTt2YXIgWj1mdW5jdGlvbihhKXt0aGlzLmY9T2JqZWN0LmNyZWF0ZShudWxsKTtpZighYSlyZXR1cm4gdGhpczt2YXIgYj10aGlzO08oYS5lbGVtZW50cyxmdW5jdGlvbihjKXtpZihjLm5hbWUmJiFjLmRpc2FibGVkJiZcInN1Ym1pdFwiIT09Yy50eXBlJiZcImJ1dHRvblwiIT09Yy50eXBlKWlmKFwiZmlsZVwiPT09Yy50eXBlKXt2YXIgZD1jLmZpbGVzJiZjLmZpbGVzLmxlbmd0aD9jLmZpbGVzOltuZXcgRmlsZShbXSxcIlwiLHt0eXBlOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJ9KV07TyhkLGZ1bmN0aW9uKGUpe2IuYXBwZW5kKGMubmFtZSxlKX0pfWVsc2VcInNlbGVjdC1tdWx0aXBsZVwiPT09XG5jLnR5cGV8fFwic2VsZWN0LW9uZVwiPT09Yy50eXBlP08oYy5vcHRpb25zLGZ1bmN0aW9uKGUpeyFlLmRpc2FibGVkJiZlLnNlbGVjdGVkJiZiLmFwcGVuZChjLm5hbWUsZS52YWx1ZSl9KTpcImNoZWNrYm94XCI9PT1jLnR5cGV8fFwicmFkaW9cIj09PWMudHlwZT9jLmNoZWNrZWQmJmIuYXBwZW5kKGMubmFtZSxjLnZhbHVlKTooZD1cInRleHRhcmVhXCI9PT1jLnR5cGU/Yy52YWx1ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcclxcblwiKTpjLnZhbHVlLGIuYXBwZW5kKGMubmFtZSxkKSl9KX07az1aLnByb3RvdHlwZTtrLmFwcGVuZD1mdW5jdGlvbihhLGIsYyl7UShhcmd1bWVudHMsMik7dmFyIGQ9eShQLmFwcGx5KG51bGwsYXJndW1lbnRzKSk7YT1kLm5leHQoKS52YWx1ZTtiPWQubmV4dCgpLnZhbHVlO2M9ZC5uZXh0KCkudmFsdWU7ZD10aGlzLmY7ZFthXXx8KGRbYV09W10pO2RbYV0ucHVzaChbYixjXSl9O2tbXCJkZWxldGVcIl09ZnVuY3Rpb24oYSl7UShhcmd1bWVudHMsXG4xKTtkZWxldGUgdGhpcy5mW1N0cmluZyhhKV19O2suZW50cmllcz1mdW5jdGlvbiBiKCl7dmFyIGM9dGhpcyxkLGUsZixnLGgsdDtyZXR1cm4gTihiLGZ1bmN0aW9uKGwpe3N3aXRjaChsLmIpe2Nhc2UgMTpkPWMuZixmPW5ldyBIKGQpO2Nhc2UgMjp2YXIgbjthOntmb3Iobj1mOzA8bi5sLmxlbmd0aDspe3ZhciBSPW4ubC5wb3AoKTtpZihSIGluIG4uQyl7bj1SO2JyZWFrIGF9fW49bnVsbH1pZihudWxsPT0oZT1uKSl7bC5iPTA7YnJlYWt9Zz15KGRbZV0pO2g9Zy5uZXh0KCk7Y2FzZSA1OmlmKGguZG9uZSl7bC5iPTI7YnJlYWt9dD1oLnZhbHVlO3JldHVybiBHKGwsW2UsUyh0KV0sNik7Y2FzZSA2Omg9Zy5uZXh0KCksbC5iPTV9fSl9O2suZm9yRWFjaD1mdW5jdGlvbihiLGMpe1EoYXJndW1lbnRzLDEpO2Zvcih2YXIgZD15KHRoaXMpLGU9ZC5uZXh0KCk7IWUuZG9uZTtlPWQubmV4dCgpKXt2YXIgZj15KGUudmFsdWUpO2U9Zi5uZXh0KCkudmFsdWU7Zj1mLm5leHQoKS52YWx1ZTtcbmIuY2FsbChjLGYsZSx0aGlzKX19O2suZ2V0PWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3ZhciBjPXRoaXMuZjtiPVN0cmluZyhiKTtyZXR1cm4gY1tiXT9TKGNbYl1bMF0pOm51bGx9O2suZ2V0QWxsPWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3JldHVybih0aGlzLmZbU3RyaW5nKGIpXXx8W10pLm1hcChTKX07ay5oYXM9ZnVuY3Rpb24oYil7UShhcmd1bWVudHMsMSk7cmV0dXJuIFN0cmluZyhiKWluIHRoaXMuZn07ay5rZXlzPWZ1bmN0aW9uIGMoKXt2YXIgZD10aGlzLGUsZixnLGgsdDtyZXR1cm4gTihjLGZ1bmN0aW9uKGwpezE9PWwuYiYmKGU9eShkKSxmPWUubmV4dCgpKTtpZigzIT1sLmIpe2lmKGYuZG9uZSl7bC5iPTA7cmV0dXJufWc9Zi52YWx1ZTtoPXkoZyk7dD1oLm5leHQoKS52YWx1ZTtyZXR1cm4gRyhsLHQsMyl9Zj1lLm5leHQoKTtsLmI9Mn0pfTtrLnNldD1mdW5jdGlvbihjLGQsZSl7UShhcmd1bWVudHMsMik7dmFyIGY9UC5hcHBseShudWxsLGFyZ3VtZW50cyk7XG50aGlzLmZbZlswXV09W1tmWzFdLGZbMl1dXX07ay52YWx1ZXM9ZnVuY3Rpb24gZCgpe3ZhciBlPXRoaXMsZixnLGgsdCxsO3JldHVybiBOKGQsZnVuY3Rpb24obil7MT09bi5iJiYoZj15KGUpLGc9Zi5uZXh0KCkpO2lmKDMhPW4uYil7aWYoZy5kb25lKXtuLmI9MDtyZXR1cm59aD1nLnZhbHVlO3Q9eShoKTt0Lm5leHQoKTtsPXQubmV4dCgpLnZhbHVlO3JldHVybiBHKG4sbCwzKX1nPWYubmV4dCgpO24uYj0yfSl9O1oucHJvdG90eXBlLl9hc05hdGl2ZT1mdW5jdGlvbigpe2Zvcih2YXIgZD1uZXcgVSxlPXkodGhpcyksZj1lLm5leHQoKTshZi5kb25lO2Y9ZS5uZXh0KCkpe3ZhciBnPXkoZi52YWx1ZSk7Zj1nLm5leHQoKS52YWx1ZTtnPWcubmV4dCgpLnZhbHVlO2QuYXBwZW5kKGYsZyl9cmV0dXJuIGR9O1oucHJvdG90eXBlLl9ibG9iPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPVwiLS0tLWZvcm1kYXRhLXBvbHlmaWxsLVwiK01hdGgucmFuZG9tKCksZT1bXSxmPXkodGhpcyksZz1mLm5leHQoKTshZy5kb25lO2c9XG5mLm5leHQoKSl7dmFyIGg9eShnLnZhbHVlKTtnPWgubmV4dCgpLnZhbHVlO2g9aC5uZXh0KCkudmFsdWU7ZS5wdXNoKFwiLS1cIitkK1wiXFxyXFxuXCIpO2ggaW5zdGFuY2VvZiBCbG9iP2UucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIjsgZmlsZW5hbWU9XCInK2gubmFtZSsnXCJcXHJcXG4nLFwiQ29udGVudC1UeXBlOiBcIisoaC50eXBlfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKStcIlxcclxcblxcclxcblwiLGgsXCJcXHJcXG5cIik6ZS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiXFxyXFxuXFxyXFxuJytoK1wiXFxyXFxuXCIpfWUucHVzaChcIi0tXCIrZCtcIi0tXCIpO3JldHVybiBuZXcgQmxvYihlLHt0eXBlOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIrZH0pfTtaLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfTtaLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIn07XG5ZJiYoWi5wcm90b3R5cGVbWV09XCJGb3JtRGF0YVwiKTtpZihWKXt2YXIgYWE9VC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcjtULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKGQsZSl7XCJjb250ZW50LXR5cGVcIj09PWQudG9Mb3dlckNhc2UoKSYmKHRoaXMudT0hMCk7cmV0dXJuIGFhLmNhbGwodGhpcyxkLGUpfTtULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kPWZ1bmN0aW9uKGQpe2QgaW5zdGFuY2VvZiBaPyhkPWQuX2Jsb2IoKSx0aGlzLnV8fHRoaXMuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGQudHlwZSksVi5jYWxsKHRoaXMsZCkpOlYuY2FsbCh0aGlzLGQpfX1pZihXKXt2YXIgYmE9VC5mZXRjaDtULmZldGNoPWZ1bmN0aW9uKGQsZSl7ZSYmZS5ib2R5JiZlLmJvZHkgaW5zdGFuY2VvZiBaJiYoZS5ib2R5PWUuYm9keS5fYmxvYigpKTtyZXR1cm4gYmEuY2FsbCh0aGlzLGQsZSl9fVgmJlxuKFQubmF2aWdhdG9yLnNlbmRCZWFjb249ZnVuY3Rpb24oZCxlKXtlIGluc3RhbmNlb2YgWiYmKGU9ZS5fYXNOYXRpdmUoKSk7cmV0dXJuIFguY2FsbCh0aGlzLGQsZSl9KTtULkZvcm1EYXRhPVp9O1xufSkoKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqXG4gKlxuICogQGF1dGhvciBKZXJyeSBCZW5keSA8amVycnlAaWNld2luZ2NjLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICpcbiAqL1xuXG4oZnVuY3Rpb24oc2VsZikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPSAoc2VsZi5VUkxTZWFyY2hQYXJhbXMgJiYgc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCkgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpdGVyYXRvcltzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMU2VhcmNoUGFyYW1zJzogU2VxdWVuY2UgaW5pdGlhbGl6ZXIgbXVzdCBvbmx5IGNvbnRhaW4gcGFpciBlbGVtZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBzZWFyY2hba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihcIj9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWlycyA9IHNlYXJjaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogKFxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLnB1c2godmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgICAgIHJldHVybiAhIXZhbCAmJiAnW29iamVjdCBBcnJheV0nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9lcy9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXMvZXZlbnRzXCI7XG5pbXBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSBmcm9tIFwiLi4vZXMvZm9ybXNcIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL2VzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL2VzL3JlcXVlc3RcIjtcbmltcG9ydCB7U2l0ZX0gZnJvbSBcIi4uL2VzL3NpdGVcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uL2VzL3N0cmluZ3NcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi9lcy90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vZXMvdXNlclwiO1xuaW1wb3J0IHtUb2dnbGVPbk1vYmlsZX0gZnJvbSBcIi4uL2VzL3RvZ2dsZS9Ub2dnbGVPbk1vYmlsZVwiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2VzL2Nsb25lXCI7XG5cbi8vY3JlYXRlIGEga2V5OnZhbCBvYmplY3Qgb2YgYWxsIGNvbXBvbmVudHNcbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgZG9tOmRvbSxcbiAgICBldmVudHM6ZXZlbnRzLFxuICAgIFhIUkZvcm06WEhSRm9ybSxcbiAgICBGb3JtRnJvbVVSTDpGb3JtRnJvbVVSTCxcbiAgICBuYXZpZ2F0aW9uOm5hdmlnYXRpb24sXG4gICAgcmVxdWVzdDpyZXF1ZXN0LFxuICAgIFNpdGU6U2l0ZSxcbiAgICBzdHJpbmdzOnN0cmluZ3MsXG4gICAgdHlwZV9jaGVja3M6dHlwZV9jaGVja3MsXG4gICAgVXNlcjpVc2VyLFxuICAgIFRvZ2dsZU9uTW9iaWxlOlRvZ2dsZU9uTW9iaWxlLFxuICAgIGNsb25lOiBjbG9uZSxcbn07XG5cbi8qKlxuICogQ2FsbCB0aGlzIGZ1bmN0aW9uIHRvIHRpZSBhbGwganBhY2sgY29tcG9uZW50cyBkaXJlY3RseSB0byB0aGUgd2luZG93IGZvciBnbG9iYWwgdXNlXG4gKlxuICogVGhpcyBtZWFucyBpbnN0ZWFkIG9mIGNhbGxpbmcganBhY2suc3RyaW5ncy51Y2ZpcnN0KCksIHlvdSBjYW4ganVzdCBjYWxsIHN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICogVGhpcyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBqcGFjaydzIG5hbWVzIG1heSBiZSB0b28gZ2VuZXJpYyBhbmQgY29uZmxpY3QuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gc2V0IGEgZGlmZmVyZW50IG5hbWVzcGFjZSB0aGFuIGpwYWNrLCB0aGF0J3MgZmluZSwgYnV0IG5vdCB1c2luZyBhIG5hbWVzcGFjZSBhdCBhbGwgY2FuIGJlIHJpc2t5XG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogc2V0R2xvYmFsKFwiJFwiKSAtIHRoZW4geW91IGNhbiBjYWxsOiAkLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJfXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6IF8uc3RyaW5ncy51Y2ZpcnN0KClcbiAqIHNldEdsb2JhbChcIlBlYXNBcmVHcm9zc1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBQZWFzQXJlR3Jvc3Muc3RyaW5ncy51Y2ZpcnN0KClcbiAqXG4gKi9cbmNvbnN0IHNldEdsb2JhbCA9IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgbmFtZXNwYWNlID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2UgOiBudWxsO1xuXG4gICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICBpZiggbmFtZXNwYWNlICl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW2tleV0gPSBjb21wb25lbnRzW2tleV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2luZG93W2tleV0gPSBjb21wb25lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL2V4dGVuZCBjb21wb25lbnRzIHRvIGluY2x1ZGUgdGhlIHNldEdsb2JhbCBtZXRob2RcbmV4cG9ydCBjb25zdCBqcGFjayA9IHsuLi5jb21wb25lbnRzLCAuLi57c2V0R2xvYmFsOiBzZXRHbG9iYWx9fTtcblxuLy9zZXQganBhY2sgZ2xvYmFsbHkgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBhbnl3aGVyZVxuZ2xvYmFsLmpwYWNrID0ganBhY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==