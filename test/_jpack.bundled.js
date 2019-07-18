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
                    const parsed = _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"]._parseHTML(data, self.getIncomingElementSelector());
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
                    const parsed = _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"]._parseHTML(data, self.getIncomingElementSelector());
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
        this.requireWindowLocation();
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
        this.requireWindowLocation();
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
        this.requireWindowLocation();
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
        this.requireWindowLocation();
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
        this.requireWindowLocation();
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
        this.requireWindowLocation();
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

    /**
     * Check for required window.location
     */
    requireWindowLocation: function(){
        if( typeof window.location === "undefined" || !window.location ) throw `Window.Location is required for jpack.request`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9jbG9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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QWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFh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Q2pCLFlBQVksaURBQU87QUFDbkIsZ0JBQWdCLHFEQUFXO0FBQzNCLGVBQWUseURBQVU7QUFDekIsWUFBWSxtREFBTztBQUNuQixTQUFTLDZDQUFJO0FBQ2IsWUFBWSxtREFBTztBQUNuQixnQkFBZ0IsMkRBQVc7QUFDM0IsU0FBUyw2Q0FBSTtBQUNiLG1CQUFtQix3RUFBYztBQUNqQyxXQUFXLGdEQUFLO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCx3QkFBd0I7QUFDbkY7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTyxlQUFlLG1CQUFtQjs7QUFFekM7QUFDQSxxQiIsImZpbGUiOiJfanBhY2suYnVuZGxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZShkYXRhID0ge30pe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX2tleXMgPT09IFwidW5kZWZpbmVkXCIgKSB0aHJvdyBgQ2Fubm90IHBvcHVsYXRlIG9iamVjdCBpZiBfa2V5cyBwcm9wZXJ0eSBpcyBub3Qgc2V0YDtcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMuX2tleXMsIGZhbHNlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL2ZvciBlYWNoIGtleSB0aGF0IGlzIHNldCBpbiB0aGUgZGF0YSBvYmplY3QsIHNldCB0aGUgdmFsdWUgb24gdGhpc1xuICAgICAgICB0aGlzLl9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YVtrZXldICE9PSBcInVuZGVmaW5lZFwiICkgc2VsZltzdHJpbmdzLnNldHRlcihrZXkpXShkYXRhW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKlxuICogQHBhcmFtIHZhbFxuICovXG5mdW5jdGlvbiBnZXRWYWx1ZU9yQ2xvbmUodmFsKXtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcblxuICAgIC8vaWYgbm90IGRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIHJpZ2h0IGF3YXlcbiAgICBpZiggdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB2YWwgPT09IG51bGwgKSByZXR1cm4gbnVsbDtcblxuICAgIC8vaWYgb2JqZWN0IChhbmQgYWxyZWFkeSBydWxlZCBvdXQgbnVsbClcbiAgICBpZiggdHlwZSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgcmV0dXJuIHsuLi52YWx9O1xuICAgIH1cbiAgICAvL2lmIGFycmF5XG4gICAgaWYoIEFycmF5LmlzQXJyYXkodmFsKSApe1xuICAgICAgICByZXR1cm4gWy4uLnZhbF07XG4gICAgfVxuICAgIC8vaWYgZnVuY3Rpb25cbiAgICBpZiggdHlwZSA9PT0gXCJmdW5jdGlvblwiICl7XG4gICAgICAgIC8vYXMgZmFyIGFzIEkgY2FuIHRlbGwsIHJlYXNzaWduaW5nIHRoZSB2YXJpYWJsZSB0aGF0IHN0b3JlZCB0aGUgZnVuY3Rpb24gZG9lc24ndCBjaGFuZ2UgYW55dGhpbmcgYW5kIGEgZnVuY3Rpb24gY2FuJ3QgYmUgbW9kaWZpZWQsIHJpZ2h0P1xuICAgICAgICAvL3NvIEkgdGhpbmsgd2UncmUgb2sgcmV0dXJuaW5nIHRoZSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIGFuZCBmb3JlZ29pbmcgYW55IGNsb25pbmcgaW4gaGVyZVxuICAgIH1cblxuICAgIC8vb3RoZXJ3aXNlIGl0J3MgYSB2YWx1ZSB0aGF0J3MgcGFzc2VkIGJ5IHZhbHVlIChzdHJpbmcsIGludCwgYm9vbCwgbnVtYmVyLCBldGMpXG4gICAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGNvbnN0IGNsb25lID0ge2dldFZhbHVlT3JDbG9uZX07IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lID0gZmFsc2UsIGVycm9yX29uX211bHRpcGxlID0gZmFsc2Upe1xuICAgICAgICBjb25zdCBmb3VuZEVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGZvdW5kRWwubGVuZ3RoID4gMSAmJiBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IGBNb3JlIHRoYW4gMSByZXN1bHQgZm91bmQgZm9yIFwiJHtlbH1cImA7XG5cbiAgICAgICAgaWYoICFmb3VuZEVsLmxlbmd0aCApIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBmb3VuZEVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lID0gZmFsc2Upe1xuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgaWYoIHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhZWwgKXtcbiAgICAgICAgICAgIC8vZG8gbm90aGluZywgZGVmYXVsdCBpcyBlbXB0eSBhcnJheVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgRWxlbWVudCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxEb2N1bWVudCApe1xuICAgICAgICAgICAgLy9hZGQgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheS5wdXNoKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvL2NvbnZlcnQgdGhlIE5vZGVMaXN0IHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcbiAgICAgICAgICAgIGVsX2FycmF5ID0gZWxfYXJyYXkgPyBBcnJheS5mcm9tKGVsX2FycmF5KSA6IGVsX2FycmF5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgTm9kZUxpc3QgfHwgZWwgaW5zdGFuY2VvZiBIVE1MQ29sbGVjdGlvbiApe1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBBcnJheS5mcm9tKGVsKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGl0J3MgYW4gYXJyYXksIHZhbGlkYXRlIGVhY2ggZWxlbWVudFxuICAgICAgICBlbHNlIGlmKCBBcnJheS5pc0FycmF5KGVsKSApe1xuICAgICAgICAgICAgZWwuZm9yRWFjaChmdW5jdGlvbih0aGlzX2VsKXtcbiAgICAgICAgICAgICAgICB0aGlzX2VsID0gZG9tLmdldEVsZW1lbnQodGhpc19lbCk7XG4gICAgICAgICAgICAgICAgaWYoIHRoaXNfZWwgKSBlbF9hcnJheS5wdXNoKHRoaXNfZWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vdGhlcndpc2UsIHdoYXQgdGhlIGhlY2sgZGlkIHlvdSBwYXNzPyBUaHJvdyBlcnJvci4uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IGBJbnZhbGlkIHZhbHVlOiBcIiR7ZWx9XCJgO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggJiYgZXJyb3Jfb25fbm9uZSApIHRocm93IGBGYWlsZWQgdG8gZmluZCBcIiR7ZWx9XCJgO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUXVpY2sgbWV0aG9kIGZvciByZW1vdmluZyBlbGVtZW50cyBmcm9tIHRoZSBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9pZl9ub3RfZm91bmRcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwsIGVycm9yX2lmX25vdF9mb3VuZCA9IGZhbHNlKXtcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gdGhpcy5nZXRFbGVtZW50cyhlbCk7XG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICBpZiggZXJyb3JfaWZfbm90X2ZvdW5kICkgdGhyb3cgYENvdWxkIG5vdCBmaW5kIFwiJHtlbH1cImA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGEgZG9tIGVsZW1lbnQgd2l0aCBIVE1MXG4gICAgICpcbiAgICAgKiB1c2VzIC5nZXRFbGVtZW50KCkgc28gZWwgY2FuIGJlIGp1c3QgYWJvdXQgYW55dGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtDaGlsZE5vZGV9fG51bGxcbiAgICAgKi9cbiAgICByZXBsYWNlRWxXaXRoSFRNTDogZnVuY3Rpb24oZWwsIGh0bWwsIGVycm9yX2lmX25vdF9mb3VuZCA9IGZhbHNlKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IG11c3QgYmUgYSBzdHJpbmdgO1xuXG4gICAgICAgIGNvbnN0IGZvdW5kRWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIGVycm9yX2lmX25vdF9mb3VuZCk7XG5cbiAgICAgICAgaWYoICFlbCApIHJldHVybiBudWxsO1xuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZnJvbSBIVE1MXG4gICAgICAgIGxldCBuZXdFbCA9IChuZXcgRE9NUGFyc2VyKCkpLnBhcnNlRnJvbVN0cmluZyhodG1sLCBcInRleHQvaHRtbFwiKTtcblxuICAgICAgICAvL2luc2VydCB0aGUgbmV3IGVsZW1lbnQgYmVmb3JlIHRoZSBjdXJyZW50XG4gICAgICAgIG5ld0VsID0gZm91bmRFbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbC5kb2N1bWVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNoaWxkTm9kZXNbMF0sIGZvdW5kRWwpO1xuXG4gICAgICAgIC8vcmVtb3ZlIG9yaWdpbmFsIGVsZW1lbnRcbiAgICAgICAgZm91bmRFbC5yZW1vdmUoKTtcblxuICAgICAgICAvL3JldHVybiB0aGUgbmV3IG9uZVxuICAgICAgICByZXR1cm4gbmV3RWw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYW4gZWxlbWVudCBpcyB2aXNpYmxlIG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzVmlzaWJsZShlbCwgZXJyb3JfaWZfbm90X2ZvdW5kID0gZmFsc2UsIGVycm9yX29uX211bHRpcGxlID0gZmFsc2UpIHtcbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwsIGVycm9yX2lmX25vdF9mb3VuZCwgZXJyb3Jfb25fbXVsdGlwbGUpO1xuXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcblxuICAgICAgICAvL2NoZWNrIGRpc3BsYXksIHZpc2liaWxpdHksIGFuZCBvcGFjaXR5IGZpcnN0IHNpbmNlIHRoZXkncmUgdGhlIG1vc3QgY29tbW9uXG4gICAgICAgIGlmIChzdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICd2aXNpYmxlJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUub3BhY2l0eSA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vc2VlIGlmIHRoZSBlbGVtZW50IGhhcyBhIHNpemVcbiAgICAgICAgaWYoZWwub2Zmc2V0V2lkdGggKyBlbC5vZmZzZXRIZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgKyBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCA9PT0gMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBvdXRzaWRlIGNvcm5lcnMgb2YgdGhlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGNvbnN0IGVsX2JvdW5kcyA9IHtcbiAgICAgICAgICAgICd0b3AtbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ3RvcC1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdib3R0b20tbGVmdCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1yaWdodCc6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QucmlnaHQsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LmJvdHRvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdjZW50ZXInOiB7XG4gICAgICAgICAgICAgICAgeDogZWxSZWN0LmxlZnQgKyBlbC5vZmZzZXRXaWR0aCAvIDIsXG4gICAgICAgICAgICAgICAgeTogZWxSZWN0LnRvcCArIGVsLm9mZnNldEhlaWdodCAvIDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgaW5zaWRlX3ZpZXdwb3J0ID0gdHJ1ZTtcbiAgICAgICAgLy9tYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgaW5zaWRlIHRoZSB2aWV3cG9ydFxuICAgICAgICBPYmplY3Qua2V5cyhlbF9ib3VuZHMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIHZhciBwb2ludCA9IGVsX2JvdW5kc1trZXldO1xuXG4gICAgICAgICAgICBpZiAocG9pbnQueCA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueCA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggfHwgd2luZG93LmlubmVyV2lkdGgpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPCAwKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgaWYgKHBvaW50LnkgPiAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQpKSBpbnNpZGVfdmlld3BvcnQgPSBmYWxzZTsgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgcG9pbnRFbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICBpZiAocG9pbnRFbCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvaW50RWwgPT09IGVsKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChwb2ludEVsID0gcG9pbnRFbC5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGluc2lkZV92aWV3cG9ydDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGV4aXN0c1xuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG11bHRpcGxlRXhpc3Q6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RWxlbWVudHMoZWwpLmxlbmd0aCA+IDE7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFNob3J0aGFuZCBwcmV2ZW50RGVmYXVsdCBldmVudHMgKGFuZCBvdGhlcnMgZm9yIGNvbnNpc3RlbmN5KVxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGVzZSBmdW5jdGlvbnMgZ2xvYmFsbHkgc28geW91IGNhbiB1c2UgdGhlbSB3aXRob3V0IGEgbmFtZXNwYWNlIG9yIHdpdGggYSBjdXN0b20gb25lXG4gICAgICpcbiAgICAgKiBVc2UgYXQgeW91ciBvd24gcmlzayAtIG1heSBjYXVzZSBjb25mbGljdHMhXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOlxuICAgICAqICAgICBqcGFjay5ldmVudHMuc2V0R2xvYmFsKCk7XG4gICAgICogICAgIG9uQ2xpY2soJ2EnLCBmdW5jdGlvbigpe1xuICAgICAqICAgICAgICAvL2RvIHNvbWV0aGluZyAodGhlIGhyZWYgaXMgcHJldmVudGVkKVxuICAgICAqICAgICB9KTtcbiAgICAgKi9cbiAgICBzZXRHbG9iYWw6IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBuYW1lc3BhY2UgPSB0eXBlb2YgbmFtZXNwYWNlID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZSA6IG51bGw7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIHNlbGYpIHtcbiAgICAgICAgICAgIC8vc2V0IGV2ZXJ5dGhpbmcgdGhhdCdzIGEgcmVhbCBtZXRob2QgaW4gZXZlbnRzLCBleGNlcHQgdGhpcyBvbmVcbiAgICAgICAgICAgIGlmIChzZWxmLmhhc093blByb3BlcnR5KHByb3BlcnR5KSAmJiBwcm9wZXJ0eSAhPT0gJ3NldEdsb2JhbCcpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIGlmKCBuYW1lc3BhY2UgKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW3Byb3BlcnR5XSA9IHNlbGZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gZXZlbnRzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBhbiBldmVudCBoYW5kbGVyIGFuZCBwcmV2ZW50cyB0aGUgZGVmYXVsdCBldmVudHMgZnJvbSBvY2N1cnJpbmdcbiAgICAgKiAgKGxpa2UgZm9ybXMgc3VibWl0dGluZyBvciBhIGxpbmsgYnJpbmdpbmcgeW91IHRvIGFub3RoZXIgcGFnZSlcbiAgICAgKlxuICAgICAqICBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgaGFuZGxlciBmb3IgZnV0dXJlIHJlbW92YWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBvbkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByZXZlbnRlZEhhbmRsZXIgPSBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vTmVlZCB0byB1bmRlcnN0YW5kIHRoaXMgYmV0dGVyLCBidXQgaXQgYXBwZWFycyB3aGVuIHRpZWQgdG8gdGhlIGJvZHkgZWxlbWVudCB0aGlzIGZ1bmN0aW9uXG4gICAgICAgICAgICAvLyByZWNlaXZlcyBhbiBhcnJheSBvZiBldmVudHMgd2l0aCBhIHNpbmdsZSBpdGVtIGluIGl0P1xuICAgICAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoZSkgKSBlID0gZVswXTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIHByZXZlbnRlZEhhbmRsZXIsIGZhbHNlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByZXZlbnRlZEhhbmRsZXI7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvbjogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9mZjogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhbiBldmVudCBvbiBhbiBlbGVtZW50L2VsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gZGF0YV90b19wYXNzXG4gICAgICogQHBhcmFtIGV2ZW50X29wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihlbCwgZXZlbnQsIGRhdGFfdG9fcGFzcyA9IHt9LCBldmVudF9vcHRpb25zID0ge30pe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50X29wdGlvbnMuZGV0YWlsID0gZGF0YV90b19wYXNzO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgZXZlbnRfb3B0aW9ucyk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIEZvcm1Gcm9tVVJMIGNsYXNzXG5jb25zdCBGb3JtRnJvbVVSTERlZmF1bHRzID0ge1xuICAgIGluY29taW5nRWxlbWVudFNlbGVjdG9yOiBudWxsLCAvL3RoZSBmb3JtIGVsZW1lbnQgb3Igd3JhcHBlciB0aGF0IHlvdSB3YW50IHRvIHJldHJpZXZlIGZyb20gdGhlIFVSTFxuICAgIGluc2VydEludG9FbGVtZW50OiBudWxsLCAvL3doYXQgZWxlbWVudCB0byBwdXQgdGhlIGZvcm0gaW50b1xuICAgIG9ubG9hZDogZnVuY3Rpb24oZm9ybSl7IHJldHVybiB0aGlzOyB9LCAvL29uY2UgdGhlIGZvcm0gaXMgbG9hZGVkIG9udG8gdGhlIHBhZ2Vcbn07XG5cbi8qKlxuICpcbiAqIEZvcm1Gcm9tVVJMXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIGdyYWIgYSBmb3JtIGZyb20gYSBVUkwgYW5kIHJldHVybnMgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEFsc28gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb24gdXNpbmcgWEhSIGFuZCBjYW4gb3BlbiBhIG1vZGFsIHRvIGRpc3BsYXkgdGhlIGZvcm1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRnJvbVVSTCBleHRlbmRzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHVybCAtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0e2luY29taW5nRWxlbWVudFNlbGVjdG9yLGluc2VydEludG9FbGVtZW50LCBvbmxvYWR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zID0ge30pe1xuICAgICAgICBzdXBlcihudWxsLCBvcHRpb25zKTtcblxuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIiApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiIHx8IG9wdGlvbnMgPT09IG51bGwgKSB0aHJvdyBgJHtvcHRpb25zfSBtdXN0IGJlIGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uRm9ybUZyb21VUkxEZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRVUkwodXJsKTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcihvcHRpb25zLmluY29taW5nRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zZXRJbnNlcnRJbnRvRWxlbWVudChvcHRpb25zLmluc2VydEludG9FbGVtZW50KTtcbiAgICAgICAgdGhpcy5vbmxvYWQob3B0aW9ucy5vbmxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBwYXJlbnQgYmVjYXVzZSBpdCdzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBjbGFzc1xuICAgICAqXG4gICAgICogU3RpbGwga2VlcGluZyBpdCBmdW5jdGlvbmFsIGJ1dCByZW1vdmluZyBhbGwgdmFsaWRhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBVUkwgZnJvbSB3aGljaCB0aGUgZm9ybSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHt1cmx9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl91cmwgPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSdzIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlcyBYSFJGb3JtLmdldEZpbmFsU3VibWl0VVJMIHRvIGluY2x1ZGUgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmVxdWVzdGVkIGZyb20gYXMgYW4gYWRkaXRpb25hbCBmYWxsYmFja1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSl7XG4gICAgICAgIGxldCB1cmwgPSB0aGlzLmdldFN1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICAvL2lmIHVybCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm0sIG9ubHkgaWYgZXhwbGljaXRseSBzZXRcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGZvcm0uYXR0cmlidXRlcy5hY3Rpb24gKXtcbiAgICAgICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBzdGlsbCBudWxsLCBncmFiIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgICAgIHVybCA9ICF1cmwgPyB0aGlzLmdldFVSTCgpIDogdXJsO1xuXG4gICAgICAgIC8vaWYgdGhlIHVybCBpcyBTVElMTCBudWxsLCBncmFiIHRoZSBmb3JtJ3MgZGVmYXVsdCBhY3Rpb24gKGN1cnJlbnQgcGFnZSlcbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgdXJsID0gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIElmIHRoZSBVUkwgcHJvdmlkZWQgcmV0dXJucyBIVE1MLCB0aGlzIHNlbGVjdG9yIHdpbGwgYmUgdXNlZCB0byBwdWxsIHRoZSBmb3JtIG91dFxuICAgICAqXG4gICAgICogSWYgbGVmdCBudWxsLCBpdCB3aWxsIGFzc3VtZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtJ3MgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yOiBzdHJpbmd8bnVsbFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudFNlbGVjdG9yKHNlbGVjdG9yKXtcbiAgICAgICAgaWYoIHNlbGVjdG9yICE9PSBudWxsICYmIHR5cGVvZiBzZWxlY3RvciAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcn0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsIHZhbHVlYDtcbiAgICAgICAgdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3IgPSBzZWxlY3RvcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHNlbGVjdG9yIGZvciB0aGUgZm9ybSBvciBhIHBhcmVudCBvZiBpdCB0aGF0IHdpbGwgYmUgcmV0dXJuZWQgZnJvbSB0aGUgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gc2V0IGEgcGFyZW50IGVsZW1lbnQgdGhhdCB0aGUgZm9ybSB3aWxsIGJlIGluc2VydGVkIGludG8gdXNpbmcgdGhlIGRlZmF1bHQgaW5zZXJ0Rm9ybSBtZXRob2RcbiAgICAgKiBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGxlYXZlIHRoaXMgYW5kIG92ZXJyaWRlIGluc2VydEZvcm0oKSBhbmQgaGF2ZSBtb3JlIGNvbnRyb2wgb3ZlciB3aGVyZSBpdCBzaG91bGQgZ29cbiAgICAgKlxuICAgICAqIFVzZXMgZG9tLmdldEVsZW1lbnQoKSBzbyB5b3UgY2FuIHBhc3MgYSBzdHJpbmcsIGpRdWVyeSBvYmplY3QsIG9iamVjdCwgZXRjXG4gICAgICogSG93ZXZlciBpZiBtb3JlIHRoYW4gMSBlbGVtZW50IGlzIGRldGVjdGVkLCBhbiBlcnJvciB3aWxsIGJlIHRocm93blxuICAgICAqXG4gICAgICogQHBhcmFtIGVsZW1lbnRcbiAgICAgKi9cbiAgICBzZXRJbnNlcnRJbnRvRWxlbWVudChlbGVtZW50KXtcbiAgICAgICAgdGhpcy5faW5zZXJ0SW50b0VsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGVsZW1lbnQgdGhlIGZvcm0gd2lsbCBiZSBpbnNlcnRlZCBpbnRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRJbnNlcnRJbnRvRWxlbWVudCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5zZXJ0SW50b0VsZW1lbnQ7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZnJvbSB0aGUgVVJMIGFuZCBwYXNzIHRvIGluc2VydEZvcm1cbiAgICAgKlxuICAgICAqIFRoZXJlIGFyZSB0aHJlZSBtYWluIHdheXMgdG8gcHJvdmlkZSB0aGUgZm9ybSBmcm9tIHlvdXIgc2VydmVyOlxuICAgICAqIDEpIFN0cmFpZ2h0IEhUTUwuIFRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0gYW5kIHRoYXQncyBpdC5cbiAgICAgKiAyKSBTdHJhaWdodCBIVE1MLCBidXQgdGhlIGZvcm0gaXMgb25seSBhIHBhcnQgb2YgdGhlIHJlc3BvbnNlIHNvIGl0IG5lZWRzIHRvIGJlIHBhcnNlZCBvdXQgYmFzZWQgb24gYSBzZWxlY3Rvci5cbiAgICAgKiAzKSBBIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGtleSBcImh0bWxcIiBsaWtlIHRoaXM6IHtcImh0bWxcIjpcIjxmb3JtPnlvdXIgZm9ybSBoZXJlPC9mb3JtPlwifVxuICAgICAqXG4gICAgICovXG4gICAgZ2V0Rm9ybSgpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgYXhpb3MuZ2V0KHRoaXMuZ2V0VVJMKCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAvL2p1c3QgaW4gY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIHRoZSB3cm9uZyByZXNwb25zZSB0eXBlIGFuZCBpdCdzIGFjdHVhbGx5IEpTT04gLSBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB0cnl7IGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTsgfSBjYXRjaChlKXsgfVxuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhIHN0cmluZyAocHJvYmFibHkgSFRNTClcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBuYXZpZ2F0aW9uLl9wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcm92aWRlIHRoZSBmb3JtJ3MgSFRNTCBpbiBhbiBvYmplY3QgY29udGFpbmluZyBvdGhlciBkZXRhaWxzIGxpa2UgdGhlIHJvdXRlIGFuZCB0aGUgZnVsbCByZXNwb25zZSB0byBpbnNlcnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0ocGFyc2VkLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgdGhlIGVudGlyZSByZXNwb25zZSBpcyBhc3N1bWVkIHRvIGJlIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhbiBvYmplY3QgKHByb2JhYmx5IEpTT04pXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgJiYgZGF0YSAhPT0gbnVsbCApe1xuICAgICAgICAgICAgICAgIC8vaWYgSFRNTCB3YXMgcHJvdmlkZWQgaW4gdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YS5odG1sICE9PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YS5odG1sfSwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aHJvdyBgVW5leHBlY3RlZCBzZXJ2ZXIgcmVzcG9uc2UgJHtkYXRhfWA7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIGluc2VydCB0aGUgZm9ybSB3aGVyZXZlciB5b3Ugd2FudCBvbiB0aGUgcGFnZVxuICAgICAqICBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjdXN0b21pemUgd2hlcmUgdGhlIGZvcm0gaXMgaW5zZXJ0ZWRcbiAgICAgKiAgKG1heWJlIHlvdSB3YW50IHRvIG9wZW4gYSBtb2RhbCBmaXJzdCBhbmQgcGxhY2UgaXQgdGhlcmU/KVxuICAgICAqXG4gICAgICogIHBhcnNlZF9jb250ZW50Lmh0bWwgd2lsbCBhbHdheXMgYmUgdGhlIEhUTUxcbiAgICAgKlxuICAgICAqICBwYXJzZWRfY29udGVudCBtYXkgY29udGFpbiBvdGhlciBkYXRhIGxpa2Ugcm91dGUgYW5kIHRpdGxlIGlmIHRoZSBmb3JtIHdhcyBwdWxsZWQgb3V0IG9mXG4gICAgICogICAgIGEgZnVsbCBIVE1MIHBhZ2Ugd2hpY2ggY29udGFpbnMgdGhvc2UgaXRlbXNcbiAgICAgKlxuICAgICAqICByZXNwb25zZSBpcyB0aGUgZnVsbCBzZXJ2ZXIgcmVzcG9uc2UgKGh0bWwgc3RyaW5nIG9yIG9iamVjdCBmcm9tIEpTT04gLSBub3QgcHJvdmlkZWQgaWYgdGhlIHJlc3BvbnNlIGlzIG9ubHkgdGhlIGZvcm0ncyBIVE1MKVxuICAgICAqXG4gICAgICogIGZvcm0gaXMgcHJvdmlkZWQgaWYgdGhpcyBpcyBhZnRlciB0aGUgZm9ybSB3YXMgc3VibWl0dGVkIGFuZCBIVE1MIHdhcyByZXR1cm5lZCBmb3JtIHRoZSBzZXJ2ZXJcbiAgICAgKlxuICAgICAqICBAcGFyYW0gcGFyc2VkX2NvbnRlbnRcbiAgICAgKiAgQHBhcmFtIHJlc3BvbnNlXG4gICAgICogIEBwYXJhbSBmb3JtXG4gICAgICogIEByZXR1cm5zIHsqfEVsZW1lbnR8SFRNTERvY3VtZW50fVxuICAgICAqL1xuICAgIGluc2VydEZvcm0ocGFyc2VkX2NvbnRlbnQsIHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgLy9zZWxlY3RvciBmb3Igd2hlcmUgdGhlIGZvcm0gd2lsbCBnb1xuICAgICAgICBsZXQgZWwgPSB0aGlzLmdldEluc2VydEludG9FbGVtZW50KCk7XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWRcbiAgICAgICAgaWYoIGVsID09PSBudWxsICkgdGhyb3cgJ0Nhbm5vdCBkZXRlcm1pbmUgd2hlcmUgdG8gaW5zZXJ0IGZvcm0uIE92ZXJ3cml0ZSBpbnNlcnRGb3JtKCkgb3IgcHJvdmlkZSBpbnNlcnRJbnRvRWxlbWVudCc7XG5cbiAgICAgICAgLy9nZXQgdGhlIGNvbnRhaW5lciBlbGVtZW50IC0gZXJyb3IgaWYgbm90IGZvdW5kXG4gICAgICAgIGVsID0gZG9tLmdldEVsZW1lbnQoZWwsIHRydWUpO1xuXG4gICAgICAgIC8vcHV0IHRoZSBmb3JtIGluIHRoZSBjb250YWluZXIgZWxlbWVudFxuICAgICAgICBlbC5pbm5lckhUTUwgPSBwYXJzZWRfY29udGVudC5odG1sO1xuXG4gICAgICAgIC8vZmluZCB0aGUgbmV3bHkgYWRkZWQgZm9ybVxuICAgICAgICBmb3JtID0gZWwucXVlcnlTZWxlY3RvcignZm9ybScpO1xuXG4gICAgICAgIC8vYXR0YWNoIGFuIG9uLXN1Ym1pdCBsaXN0ZW5lciB0byBzZW5kIHRoZSBmb3JtJ3MgdmFsdWVzIHZpYSBYSFJcbiAgICAgICAgdGhpcy5hdHRhY2hTdWJtaXRIYW5kbGVyKGZvcm0pO1xuXG4gICAgICAgIC8vcnVuIHRoZSBvbmxvYWQgY2FsbGJhY2sgbm93IHRoYXQgdGhlIGZvcm0gaXMgdGhlcmVcbiAgICAgICAgdGhpcy50cmlnZ2VyT25sb2FkKGZvcm0pO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBmb3JtIGltbWVkaWF0ZWx5IGFmdGVyIGl0J3MgZGlzcGxheWVkXG4gICAgICpcbiAgICAgKiBZb3UnbGwgbGlrZWx5IHdhbnQgdG8gYXR0YWNoIHBsdWdpbnMgZm9yIGRhdGVwaWNrZXJzL2Ryb3Bkb3ducywgb3IgbWF5YmUgaGlkZSBhIGZpZWxkIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBhbm90aGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBvbmxvYWQoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHRoaXMuX29ubG9hZC5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbmxvYWQgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBjbGVhck9ubG9hZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25sb2FkKGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX29ubG9hZC5mb3JFYWNoKGZ1bmN0aW9uKG9ubG9hZCl7XG4gICAgICAgICAgICBvbmxvYWQoZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxucmVxdWlyZSgnZm9ybWRhdGEtcG9seWZpbGwnKTtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIFhIUkZvcm0gY2xhc3NcbmNvbnN0IFhIUkZvcm1EZWZhdWx0cyA9IHtcbiAgICB4aHJTdWJtaXQ6IHRydWUsIC8vc3VibWl0IHRoZSBmb3JtIHVzaW5nIFhIUiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgIHN1Ym1pdFVSTDpudWxsLCAvL3dpbGwgYmUgZ3JhYmJlZCBmcm9tIHRoZSBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZSwgb3IgZmFsbGJhY2sgdG8gdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICBzdWJtaXRNZXRob2Q6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXsgYWxlcnQoZXJyb3IpOyB9LCAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBhbmQgZmFpbHNcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBmb3JtKXsgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIGlmKHR5cGVvZiByZXNwb25zZS5zdWNjZXNzID09PSBcInN0cmluZ1wiKXsgYWxlcnQocmVzcG9uc2Uuc3VjY2Vzcyk7IH1cbiAgICAgICAgZWxzZXsgYWxlcnQoXCJZb3VyIHN1Ym1pc3Npb24gaGFzIGJlZW4gcmVjZWl2ZWRcIik7IH1cbiAgICB9LFxuICAgIC8vdmFsaWRhdGUgdGhlIGZvcm0sIGRpc3BsYXkgYW55IGVycm9ycyBhbmQgcmV0dXJuIGZhbHNlIHRvIGJsb2NrIHN1Ym1pc3Npb25cbiAgICB2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKGZvcm0pe1xuICAgICAgICAvL2FkZCAud2FzLXZhbGlkYXRlZCBmb3IgYm9vdHN0cmFwIHRvIHNob3cgZXJyb3JzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIGFueSA6aW52YWxpZCBlbGVtZW50cywgdGhlIGZvcm0gaXMgbm90IHZhbGlkXG4gICAgICAgIGNvbnN0IGlzX3ZhbGlkID0gIWZvcm0ucXVlcnlTZWxlY3RvcignOmludmFsaWQnKTtcblxuICAgICAgICAvL2lmIGl0J3MgdmFsaWQsIGNsZWFyIHRoZSB2YWxpZGF0aW9uIGluZGljYXRvcnNcbiAgICAgICAgaWYoIGlzX3ZhbGlkICkgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cbn07XG5cbi8qKlxuICogWEhSRm9ybVxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBzdWJtaXQgYSBmb3JtIHZpYSBYSFIgYW5kIGVhc2lseSBoYW5kbGUgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogRm9ybSBjYW4gYmUganVzdCBhYm91dCBhbnkgZGF0YXR5cGUgLSB1c2VzIGRvbS5nZXRFbGVtZW50KClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zID0ge30pe1xuXG4gICAgICAgIC8vaWYgb3B0aW9ucyBhcmUgdW5kZWZpbmVkLCBzZXQgdGhlbVxuICAgICAgICBpZiggdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgfHwgb3B0aW9ucyA9PT0gbnVsbCApIHRocm93IGAke29wdGlvbnN9IG11c3QgYmUgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2V4dGVuZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5YSFJGb3JtRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0ZUNhbGxiYWNrKG9wdGlvbnMudmFsaWRhdGVGb3JtKTtcbiAgICAgICAgdGhpcy5zZXRYSFJTdWJtaXQob3B0aW9ucy54aHJTdWJtaXQpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdE1ldGhvZChvcHRpb25zLnN1Ym1pdE1ldGhvZCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0VVJMKG9wdGlvbnMuc3VibWl0VVJMKTtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3Mob3B0aW9ucy5vblN1Y2Nlc3MpO1xuICAgICAgICB0aGlzLm9uRXJyb3Iob3B0aW9ucy5vbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldFZhbGlkYXRlQ2FsbGJhY2soY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fdmFsaWRhdGVDYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSdW5zIHRoZSB2YWxpZGF0ZSBjYWxsYmFjayBhbmQgcGFzc2VzIHRoZSBmb3JtXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICB2YWxpZGF0ZShmb3JtKXtcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGVDYWxsYmFjayhmb3JtKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGZvcm0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICBpZiggIWZvcm0gfHwgdHlwZW9mIGZvcm0gPT09ICd1bmRlZmluZWQnICkgdGhyb3cgYEZvcm0gZWxlbWVudCBpcyByZXF1aXJlZGA7XG5cbiAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0sIHRydWUsIHRydWUpO1xuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgSW52YWxpZCBmb3JtIGVsZW1lbnQgcmVjZWl2ZWRgO1xuXG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9mb3JtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHlvdSB3YW50IHRoZSBmb3JtIHRvIGJlIHN1Ym1pdHRlZCB1c2luZyBhbiBYSFIgcmVxdWVzdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVuYWJsZWQgLSBib29sXG4gICAgICovXG4gICAgc2V0WEhSU3VibWl0KGVuYWJsZWQpe1xuICAgICAgICB0aGlzLl94aHJTdWJtaXQgPSAhIWVuYWJsZWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhvdyB0byBzdWJtaXQgdGhlIGZvcm0gLSBpZiBzZXQgdG8gbnVsbCwgdGhlIG1ldGhvZCB3aWxsIGJlIHB1bGxlZCBmcm9tIHRoZSBmb3JtJ3NcbiAgICAgKiAgbWV0aG9kIGF0dHJpYnV0ZSBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgICAqXG4gICAgICogQHBhcmFtIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFN1Ym1pdE1ldGhvZChtZXRob2Qpe1xuICAgICAgICBpZiggdHlwZW9mIG1ldGhvZCAhPT0gXCJzdHJpbmdcIiAmJiBtZXRob2QgIT09IG51bGwgKSB0aHJvdyBgJHttZXRob2R9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX3N1Ym1pdE1ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgZm9ybSBzdWJtaXNzaW9uIG1ldGhvZCAoUE9TVCwgR0VULCBldGMpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0U3VibWl0TWV0aG9kKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdWJtaXRNZXRob2Q7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhlIFVSTCB0byBzdWJtaXQgdGhlIGZvcm0gdG9cbiAgICAgKlxuICAgICAqIElmIG51bGwsIHRoZSBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZSB3aWxsIGJlIHVzZWQuXG4gICAgICogVXNlIGEgZnVuY3Rpb24gaWYgeW91IHdhbnQgdG8gZHluYW1pY2FsbHkgZ2VuZXJhdGUgdGhlIFVSTCBqdXN0IHByaW9yIHRvIHRoZSByZXF1ZXN0XG4gICAgICogIC0gdGhlIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSB0aGUgZm9ybSBhcyBhIHBhcmFtXG4gICAgICogR2VuZXJhbGx5IHNwZWFraW5nIGEgc3RyaW5nIGlzIHN1ZmZpY2llbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBzZXRTdWJtaXRVUkwodXJsKXtcbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICYmIHR5cGVvZiB1cmwgIT09IFwiZnVuY3Rpb25cIlxuICAgICAgICAgICAgJiYgdXJsICE9PSBudWxsICkgdGhyb3cgYCR7dXJsfSBtdXN0IGJlIGEgc3RyaW5nLCBmdW5jdGlvbiwgb3IgbnVsbGA7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0VVJMID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBVUkwgdGhlIGZvcm0gd2lsbCBiZSBzdWJtaXR0ZWQgdG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ3wqfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdFVSTCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0VVJMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGFjdHVhbCBzdWJtaXQgVVJMIGFmdGVyIHJ1bm5pbmcgdGhlIGZ1bmN0aW9uIChpZiBpdCBpcyBvbmUpLCBhbmQgdHVybmluZyB0byBmYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZpbmFsU3VibWl0VVJMKGZvcm0pe1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRTdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiBhIGZ1bmN0aW9uLCBydW4gaXRcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9zdWJtaXRVUkwgPT09IFwiZnVuY3Rpb25cIiApIHJldHVybiB0aGlzLl9zdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4gZm9ybS5hY3Rpb247XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXJsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBvbiBzdWJtaXQgaGFuZGxlciAob25seSBpZiB4aHJTdWJtaXQgaXMgdHJ1ZSlcbiAgICAgKlxuICAgICAqIFBhc3MgdGhlIGZvcm0gb3IgZm9ybSBzZWxlY3RvclxuICAgICAqL1xuICAgIGF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSl7XG4gICAgICAgIGlmKCAhdGhpcy5feGhyU3VibWl0ICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgbm90IHBhc3NlZCwgZ2V0IGl0IGZyb20gdGhpcyBvYmplY3RcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgRm9ybSBlbGVtZW50IG5vdCByZWNlaXZlZCwgY2Fubm90IGF0dGFjaCBzdWJtaXQgaGFuZGxlcmA7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vaWYgeGhyIHN1Ym1pdCBpcyBkaXNhYmxlZCwgZG9uJ3QgYmxvY2sgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBpZiggIXNlbGYuX3hoclN1Ym1pdCApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5zdWJtaXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBZb3VyIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSAyIHBhcmFtcywgdGhlIGZpcnN0IGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGZvcm0gb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIG9uU3VjY2VzcyBjYWxsYmFja3MgeW91J3ZlIHNldFxuICAgICAqL1xuICAgIGNsZWFyT25TdWNjZXNzQ2FsbGJhY2tzKCl7XG4gICAgICAgIHRoaXMuX29uU3VjY2VzcyA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uU3VjY2VzcyA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzLmZvckVhY2goZnVuY3Rpb24ob25TdWNjZXNzKXtcbiAgICAgICAgICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Rm9ybUZyb21VUkx9XG4gICAgICovXG4gICAgb25FcnJvcihjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX29uRXJyb3IgPT09IFwidW5kZWZpbmVkXCIgKSB0aGlzLl9vbkVycm9yID0gW107XG4gICAgICAgIHRoaXMuX29uRXJyb3IucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgb25FcnJvciBjYWxsYmFja3MgeW91J3ZlIHNldFxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIGNsZWFyT25FcnJvckNhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbkVycm9yID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIHRoZSBvbkVycm9yIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25FcnJvcihlcnJvciwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25FcnJvciA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25FcnJvci5mb3JFYWNoKGZ1bmN0aW9uKG9uRXJyb3Ipe1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzcG9uc2UsIGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0cyB0aGUgZm9ybSB1c2luZyBYSFJcbiAgICAgKlxuICAgICAqIDEpIERldGVybWluZXMgdGhlIFVSTFxuICAgICAqIDIpIERldGVybWluZXMgdGhlIG1ldGhvZCAoR0VULCBQT1NULCBQQVRDSCwgZXRjKVxuICAgICAqIDMpIERldGVybWluZXMgaWYgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICAgKiA0KSBHZXRzIHRoZSBmb3JtJ3MgdmFsdWVzXG4gICAgICogNSkgU3VibWl0cyB0aGUgZm9ybVxuICAgICAqIDYpIFJlcGxhY2VzIHRoZSBmb3JtLCBydW5zIG9uRXJyb3IsIG9yIHJ1bnMgb25TdWNjZXNzIGJhc2VkIG9uIHRoZSByZXNwb25zZSAoc2VlIG5leHQgbGluZSlcbiAgICAgKiAgUmVzcG9uc2UgVHlwZSA9IEFjdGlvbiBUYWtlblxuICAgICAqICAgIHN0cmluZyBodG1sIHdpdGggZm9ybSBpbnNpZGUgPSByZXBsYWNlIGZvcm1cbiAgICAgKiAgICBzdHJpbmcgaHRtbCB3aXRoIGluY29taW5nRWxlbWVudFNlbGVjdG9yIHNldCwgYnV0IG5vdCBmb3VuZCA9IGtpY2tvZmYgb25FcnJvclxuICAgICAqICAgIHN0cmluZyAtIHJlcGxhY2UgZm9ybSBvbiBwYWdlIHdpdGggZW50aXJlIHJlc3BvbnNlXG4gICAgICogICAgb2JqZWN0Lmh0bWwgPSByZXBsYWNlIGZvcm1cbiAgICAgKiAgICBvYmplY3QuZXJyb3IgPSBraWNrb2ZmIG9uRXJyb3JcbiAgICAgKiAgICBvYmplY3QgaW4gZ2VuZXJhbCA9IGtpY2tvZmYgb25TdWNjZXNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtmb3JtfGJvb2xlYW59XG4gICAgICovXG4gICAgc3VibWl0Rm9ybShmb3JtKSB7XG4gICAgICAgIC8vYmxvY2sgbXVsdGlwbGUgZm9ybSBzdWJtaXNzaW9ucyBhdCB0aGUgc2FtZSB0aW1lIHVudGlsIHRoaXMgb25lIGlzIGNvbXBsZXRlXG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fcHJvY2Vzc2luZyA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYoIHRoaXMuX3Byb2Nlc3NpbmcgKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy9jYWNoZSBmb3IgdXNlIGluc2lkZSBvdGhlciBzY29wZXNcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9nZXQgdGhlIHByb3ZpZGVkIHN1Ym1pdCBVUkxcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9nZXQgdGhlIHByb3ZpZGVkIHN1Ym1pdCBtZXRob2RcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuZ2V0U3VibWl0TWV0aG9kKCk7XG4gICAgICAgIC8vaWYgaXQncyBudWxsLCBncmFiIGl0IGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIG1ldGhvZCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBmb3JtLmF0dHJpYnV0ZXMubWV0aG9kICE9PSAndW5kZWZpbmVkJyApeyAvL2NoZWNrIHRoYXQgaXQgd2FzIHNldCBleHBsaWNpdGx5XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZm9ybS5tZXRob2Q7IC8vZ3JhYiBKVVNUIHRoZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZGVmYXVsdCB0byBwb3N0IGlmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSBtZXRob2QgYW5kIGxvd2VyY2FzZSBhbnl0aGluZyB0aGF0IHdhcyBwcm92aWRlZFxuICAgICAgICBtZXRob2QgPSAhbWV0aG9kID8gJ3Bvc3QnIDogbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy9pZiBub3QgdmFsaWQsIHN0b3AgaGVyZSB1bnRpbCB0aGV5IHJlc3VibWl0XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZShmb3JtKSl7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcblxuICAgICAgICAvL2dldCBmb3JtIHZhbHVlc1xuICAgICAgICBjb25zdCBmb3JtX3ZhbHVlcyA9IEFycmF5LmZyb20oXG4gICAgICAgICAgICB0aGlzLmdldEZvcm1WYWx1ZXMoZm9ybSksXG4gICAgICAgICAgICBlID0+IGUubWFwKGVuY29kZVVSSUNvbXBvbmVudCkuam9pbignPScpXG4gICAgICAgICkuam9pbignJicpO1xuXG4gICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICBkYXRhOiBmb3JtX3ZhbHVlcyxcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgc2VsZi5fcHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIC8vanVzdCBpbiBjYXNlIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgdGhlIHdyb25nIHJlc3BvbnNlIHR5cGUgYW5kIGl0J3MgYWN0dWFsbHkgSlNPTiAtIGlnbm9yZSBlcnJvcnNcbiAgICAgICAgICAgIHRyeXsgZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhOyB9IGNhdGNoKGUpeyB9XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGEgc3RyaW5nLCBpdCdzIHByb2JhYmx5L2hvcGVmdWxseSB0aGUgZm9ybSB3aXRoIGlubGluZSBlcnJvcnNcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICAvL2lmIHdlIGFyZSBsb29raW5nIGZvciBhbiBlbGVtZW50IHdpdGhpbiB0aGUgcmVzcG9uc2VcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSA9PT0gJ3N0cmluZycgKXtcbiAgICAgICAgICAgICAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSBuYXZpZ2F0aW9uLl9wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9pZiB0aGUgZm9ybSB3YXMgbm90IGZvdW5kIGluIGl0LCBsZXQncyBhc3N1bWUgaXQgZG9lc24ndCBjb250YWluIHRoZSBmb3JtLiBJZiBub3QsIHRoZW4gbWF5YmVcbiAgICAgICAgICAgICAgICAgICAgaWYoICFwYXJzZWQuaHRtbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnRyaWdnZXJPbkVycm9yKGAke3NlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKX0gY291bGQgbm90IGJlIGZvdW5kIGluIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlcmAsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vcHJvdmlkZSB0aGUgZm9ybSdzIEhUTUwgaW4gYW4gb2JqZWN0IGNvbnRhaW5pbmcgb3RoZXIgZGV0YWlscyBsaWtlIHRoZSByb3V0ZSBhbmQgdGhlIGZ1bGwgcmVzcG9uc2UgdG8gaW5zZXJ0Rm9ybVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHBhcnNlZCwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0oe2h0bWw6ZGF0YX0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYW4gb2JqZWN0LCBpdCdzIHByb2JhYmx5IEpTT05cbiAgICAgICAgICAgIGVsc2UgaWYoIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBkYXRhICE9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgLy9pZiBpdCBjb250YWlucyB0aGUgSFRNTCwganVzdCBwb3AgaXQgYmFjayBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIGlmKCBkYXRhLmh0bWwgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhLmh0bWx9LCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFuIGVycm9yIG1lc3NhZ2UsIHRyaWdnZXIgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgaWYoIGRhdGEuZXJyb3IgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudHJpZ2dlck9uRXJyb3IoZGF0YS5lcnJvciwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBkb2Vzbid0IEFQUEVBUiB0byBiZSB0aGUgZm9ybSBhZ2Fpbiwgb3IgYW4gZXJyb3IsIGxldCdzIGNhbGwgaXQgYSBzdWNjZXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYudHJpZ2dlck9uU3VjY2VzcyhkYXRhLCBmb3JtKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBmb3JtIHZhbHVlcyB0byBiZSBzdWJtaXR0ZWRcbiAgICAgKlxuICAgICAqIE92ZXJyaWRlL2V4dGVuZCB0aGlzIGlmIHlvdSB3YW50IHRvIG1hbmlwdWxhdGUgdGhlIGRhdGEgcHJpb3IgdG8gc3VibWlzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybnMgRm9ybURhdGFcbiAgICAgKi9cbiAgICBnZXRGb3JtVmFsdWVzKGZvcm0pe1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIH1cbn0iLCJpbXBvcnQge1hIUkZvcm19IGZyb20gXCIuL1hIUkZvcm1cIjtcbmltcG9ydCB7Rm9ybUZyb21VUkx9IGZyb20gXCIuL0Zvcm1Gcm9tVVJMXCI7XG5cbmV4cG9ydCB7WEhSRm9ybSwgRm9ybUZyb21VUkx9IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuLi9yZXF1ZXN0XCI7XG5pbXBvcnQge2Nsb25lfSBmcm9tIFwiLi4vY2xvbmVcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuXG5jb25zdCBuYXZpZ2F0aW9uRGVmYXVsdHMgPSB7XG4gICAgdHJhY2tIaXN0b3J5OmZhbHNlLFxuICAgIHB1c2hTdGF0ZTp0cnVlLFxuICAgIGxvYWRlckVuYWJsZWQ6dHJ1ZSxcbiAgICBsb2FkZXJEZWxheTozMDAsXG4gICAgaW5jb21pbmdFbGVtZW50Oidib2R5JyxcbiAgICByZXBsYWNlRWxlbWVudDonYm9keScsXG4gICAgbG9hZGVyQ2xhc3NlczoncHJvZ3Jlc3MgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcicsXG4gICAgbG9hZGVySW5uZXJEaXZDbGFzc2VzOidwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyxcbn07XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBzaW11bGF0ZSBhIHBhZ2UgY2hhbmdlIGJ5IHVzaW5nIGFuIFhIUiByZXF1ZXN0IHRvIGdyYWIgY29udGVudCBhbmQgcmVwbGFjZSBpdCBvbiB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQXV0b21hdGljYWxseSB1cGRhdGVzIHRoZSBicm93c2VyJ3MgaGlzdG9yeSwgc3dhcHMgb3V0IG1ldGEgdGFncywgdXBkYXRlcyB0aGUgdGl0bGUsIGFuZCBtb3JlXG4gKlxuICogVXNlIG9ubG9hZCBhbmQgb25VbmxvYWQgaG9va3MgdG8gYWRkIGFkZGl0aW9uYWwgbG9naWMgZm9yIHRoaW5ncyBsaWtlIHRyaWdnZXJpbmcgYSBnb29nbGUgYW5hbHl0aWNzIHBhZ2Ugdmlld1xuICogIG9yIHNjcm9sbGluZyB0byB0aGUgdG9wIG9mIHRoZSBuZXcgcGFnZVxuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIGNvbmZpZyBvcHRpb25zIGluIGJ1bGsgYnkgZXh0ZW5kaW5nIHRoZSBjdXJyZW50IHZhbHVlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB0aGlzXG4gICAgICovXG4gICAgc2V0Q29uZmlnOiBmdW5jdGlvbihkYXRhID0ge30pe1xuICAgICAgICBkYXRhID0gey4uLnRoaXMuZ2V0Q29uZmlnKCksIC4uLmRhdGF9O1xuXG4gICAgICAgIHRoaXMudHJhY2tIaXN0b3J5ID0gZGF0YS50cmFja0hpc3Rvcnk7XG4gICAgICAgIHRoaXMucHVzaFN0YXRlID0gZGF0YS5wdXNoU3RhdGU7XG4gICAgICAgIHRoaXMubG9hZGVyRW5hYmxlZCA9IGRhdGEubG9hZGVyRW5hYmxlZDtcblxuICAgICAgICB0aGlzLnNldExvYWRlckRlbGF5KGRhdGEubG9hZGVyRGVsYXkpO1xuICAgICAgICB0aGlzLnNldEluY29taW5nRWxlbWVudChkYXRhLmluY29taW5nRWxlbWVudCk7XG4gICAgICAgIHRoaXMuc2V0UmVwbGFjZUVsZW1lbnQoZGF0YS5yZXBsYWNlRWxlbWVudCk7XG5cbiAgICAgICAgdGhpcy5fbG9hZGVyQ2xhc3NlcyA9IGRhdGEubG9hZGVyQ2xhc3NlcztcbiAgICAgICAgdGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzID0gZGF0YS5sb2FkZXJJbm5lckRpdkNsYXNzZXM7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlc2V0cyBjb25maWcgdG8gZGVmYXVsdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHRoaXM7XG4gICAgICovXG4gICAgcmVzZXRDb25maWc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuc2V0Q29uZmlnKG5hdmlnYXRpb25EZWZhdWx0cyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBiYXNpYyBjb25maWcgb3B0aW9ucyBhcyBhbiBvYmplY3RcbiAgICAgKiBAcmV0dXJucyB7e2xvYWRlcklubmVyRGl2Q2xhc3NlczogKCp8c3RyaW5nKSwgcHVzaFN0YXRlOiAqLCBsb2FkZXJEZWxheTogKiwgbG9hZGVyQ2xhc3Nlczogc3RyaW5nLCB0cmFja0hpc3Rvcnk6ICosIGxvYWRlckVuYWJsZWQ6ICosIHJlcGxhY2VFbGVtZW50OiAoKnxzdHJpbmcpLCBpbmNvbWluZ0VsZW1lbnQ6ICgqfHN0cmluZyl9fVxuICAgICAqL1xuICAgIGdldENvbmZpZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRyYWNrSGlzdG9yeTp0aGlzLnRyYWNrSGlzdG9yeSxcbiAgICAgICAgICAgIHB1c2hTdGF0ZTp0aGlzLnB1c2hTdGF0ZSxcbiAgICAgICAgICAgIGxvYWRlckVuYWJsZWQ6dGhpcy5sb2FkZXJFbmFibGVkLFxuICAgICAgICAgICAgbG9hZGVyRGVsYXk6dGhpcy5nZXRMb2FkZXJEZWxheSgpLFxuICAgICAgICAgICAgaW5jb21pbmdFbGVtZW50OnRoaXMuZ2V0SW5jb21pbmdFbGVtZW50KCksXG4gICAgICAgICAgICByZXBsYWNlRWxlbWVudDp0aGlzLmdldFJlcGxhY2VFbGVtZW50KCksXG4gICAgICAgICAgICBsb2FkZXJDbGFzc2VzOnRoaXMuX2xvYWRlckNsYXNzZXMsXG4gICAgICAgICAgICBsb2FkZXJJbm5lckRpdkNsYXNzZXM6dGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRvIGtlZXAgdHJhY2sgb2YgdGhlIHBhZ2VzIHRoYXQgd2VyZSBsb2FkZWQgaW4gYW4gYXJyYXlcbiAgICAgKi9cbiAgICB0cmFja0hpc3Rvcnk6IG5hdmlnYXRpb25EZWZhdWx0cy50cmFja0hpc3RvcnksXG4gICAgXG4gICAgLyoqXG4gICAgICogR3JhYnMgYWxsIHBhZ2VzIHRoYXQgd2VyZSBsb2FkZWQgcHJldmlvdXNseSAoZG9lcyBub3QgcGVyc2lzdCBpZiB0aGUgcGFnZSBpcyByZWxvYWRlZClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEhpc3Rvcnk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5faGlzdG9yeSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBsYXN0IHBhZ2UncyB1cmwgYW5kIHJvdXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7VH1cbiAgICAgKi9cbiAgICBnZXRMYXN0SGlzdG9yeVJlY29yZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faGlzdG9yeS5wb3AoKTtcbiAgICB9LFxuICAgIF9hZGRIaXN0b3J5SXRlbSh1cmwsIHJvdXRlKXtcbiAgICAgICAgaWYoICF0aGlzLnRyYWNrSGlzdG9yeSApIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7dXJsfSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgcm91dGUgPSB0eXBlb2Ygcm91dGUgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmdldFJvdXRlRnJvbU1ldGEoKSA6IHJvdXRlO1xuICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2goeyd1cmwnOnVybCwgJ3JvdXRlJzpyb3V0ZX0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIF9oaXN0b3J5OiBbXSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgZGF0YSB0byBiZSBwcm92aWRlZCB0byB0aGUgbmV4dCBwYWdlJ3Mgb25sb2FkIGNhbGxiYWNrXG4gICAgICogIHRoaXMgZGF0YSBwZXJzaXN0cyB1bnRpbCBjbGVhcmVkIG1hbnVhbGx5IGFuZCB3aWxsIGJlIHByb3ZpZGVkIHRvIEFMTCBzdWJzZXF1ZW50IG9ubG9hZCBoYW5kbGVyc1xuICAgICAqICAgKG9yIGl0IGNhbiBiZSBncmFiYmVkIG1hbnVhbGx5IGZyb20gdGhpcyBvYmplY3QgYXQgYW55IHRpbWUpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldERhdGE6IGZ1bmN0aW9uIChkYXRhID0ge30pIHtcbiAgICAgICAgaWYoIHR5cGVvZiBkYXRhICE9PSAnb2JqZWN0JyB8fCBkYXRhID09PSBudWxsICkgdGhyb3cgYCR7ZGF0YX0gbXVzdCBiZSBhbiBvYmplY3RgO1xuICAgICAgICB0aGlzLl9kYXRhID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKGRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIG9iamVjdFxuICAgICAqL1xuICAgIGdldERhdGE6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9kYXRhKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFNldHMgYSBzaW5nbGUgdmFsdWUgaW4geW91ciBkYXRhIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEBwYXJhbSB2YWxcbiAgICAgKi9cbiAgICBzZXREYXRhSXRlbTogZnVuY3Rpb24oa2V5LCB2YWwpe1xuICAgICAgICBpZiggdHlwZW9mIGtleSAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtrZXl9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9kYXRhW2tleV0gPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodmFsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIGEgc2luZ2xlIHZhbHVlIGZyb20geW91ciBkYXRhIG9iamVjdCBvciBpZiBpdCBkb2Vzbid0IGV4aXN0IGl0J2xsIHJldHVybiBudWxsXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMgbWl4ZWRcbiAgICAgKi9cbiAgICBnZXREYXRhSXRlbTogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgLy9pZiBub3QgZGVmaW5lZCBvciBudWxsLCByZXR1cm4gbnVsbFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX2RhdGFba2V5XSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5fZGF0YVtrZXldID09PSBudWxsICkgcmV0dXJuIG51bGw7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fZGF0YVtrZXldKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZGF0YVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgY2xlYXJEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7fSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGEgc2luZ2xlIHZhbHVlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgY2xlYXJEYXRhSXRlbTogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gIT09ICd1bmRlZmluZWQnICl7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fZGF0YVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgX2RhdGE6IHt9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcl9zdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnQgPSBzZWxlY3Rvcl9zdHJpbmc7XG4gICAgfSxcbiAgICBfaW5jb21pbmdFbGVtZW50OiBuYXZpZ2F0aW9uRGVmYXVsdHMuaW5jb21pbmdFbGVtZW50LFxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uIChzZWxlY3Rvcl9zdHJpbmcpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9yZXBsYWNlRWxlbWVudCA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuICAgIF9yZXBsYWNlRWxlbWVudDogbmF2aWdhdGlvbkRlZmF1bHRzLnJlcGxhY2VFbGVtZW50LFxuICAgIC8qKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBwdXNoIHRoZSBwYWdlIHRoYXQgd2FzIGxvYWRlZCB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgKi9cbiAgICBwdXNoU3RhdGU6IG5hdmlnYXRpb25EZWZhdWx0cy5wdXNoU3RhdGUsXG5cbiAgICAvKipcbiAgICAgKiBHcmFicyBIVE1MIGZyb20gYSBVUkwgYW5kIHJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogMSkgU2hvd3MgYSBsb2FkZXIgKGlmIGVuYWJsZWQpXG4gICAgICogMikgUmVxdWVzdHMgY29udGVudCBmcm9tIHRoZSBwcm92aWRlZCBVUkxcbiAgICAgKiAzKSBSZXBsYWNlcyBpdCBvbiB0aGUgcGFnZSAoYW5kIGFsbCB0aGUgbWFnaWMgcmVwbGFjZVBhZ2VDb250ZW50IGRvZXMsIHNlZSBjb21tZW50cyBvbiB0aGF0IG1ldGhvZCBiZWxvdylcbiAgICAgKiA0KSBJZiB0aGVyZSdzIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGl0J2xsIGJlIHJ1biBhZnRlcndhcmRzIChpdCByZWNlaXZlcyB0aGUgbmV3bHkgcmVwbGFjZWQgZWxlbWVudCBhcyBhIHBhcmFtKVxuICAgICAqXG4gICAgICogT24gZXJyb3IsIGl0IHRyaWdnZXJzIG9uRmFpbCBjYWxsYmFja3MgeW91J3ZlIGF0dGFjaGVkIGFuZCBwcm92aWRlcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG9ubG9hZFxuICAgICAqIEBwYXJhbSBvcHRpb25zOntpbmNvbWluZ0VsZW1lbnQsIHJlcGxhY2VFbGVtZW50LCBwdXNoU3RhdGV9XG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24gKHVybCwgZGF0YSA9IHt9LCBvbmxvYWQsIG9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL3ZhbGlkYXRlIG9wdGlvbnMgaGFzIHRoZXNlIGtleXMgKG9yIG5vbmUgYXQgYWxsKVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3Qob3B0aW9ucywgWydpbmNvbWluZ0VsZW1lbnQnLCAncmVwbGFjZUVsZW1lbnQnLCAncHVzaFN0YXRlJ10sIGZhbHNlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAvL292ZXJyaWRlIGdsb2JhbCBkYXRhIHdpdGggcGFzc2VkIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi5zZWxmLmdldERhdGEoKSwgLi4uZGF0YX07XG5cbiAgICAgICAgLy9zZXQgdmFsdWVzXG4gICAgICAgIGNvbnN0IGluY29taW5nRWxlbWVudFNlbGVjdG9yID0gdHlwZW9mIG9wdGlvbnMuaW5jb21pbmdFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy5pbmNvbWluZ0VsZW1lbnQgOiB0aGlzLmdldEluY29taW5nRWxlbWVudCgpO1xuICAgICAgICBjb25zdCByZXBsYWNlRWxlbWVudFNlbGVjdG9yID0gdHlwZW9mIG9wdGlvbnMucmVwbGFjZUVsZW1lbnQgIT09IFwidW5kZWZpbmVkXCIgPyBvcHRpb25zLnJlcGxhY2VFbGVtZW50IDogdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpO1xuICAgICAgICBjb25zdCByZXBsYWNlRWxlbWVudCA9IGRvbS5nZXRFbGVtZW50KHJlcGxhY2VFbGVtZW50U2VsZWN0b3IsIHRydWUpO1xuICAgICAgICBjb25zdCBwdXNoU3RhdGUgPSB0eXBlb2Ygb3B0aW9ucy5wdXNoU3RhdGUgIT09IFwidW5kZWZpbmVkXCIgPyBvcHRpb25zLnB1c2hTdGF0ZSA6IHRoaXMucHVzaFN0YXRlO1xuXG4gICAgICAgIC8vY2FjaGUgcm91dGUgKGF4aW9zIGlzIGFzeW5jKVxuICAgICAgICBjb25zdCBjdXJyZW50X3JvdXRlID0gc2VsZi5nZXRSb3V0ZUZyb21NZXRhKCk7XG5cbiAgICAgICAgLy9ydW4gb25CZWZvcmVSZXF1ZXN0IGNhbGxiYWNrcyBhbmQgaWYgYW55IHJldHVybiBmYWxzZSwgZG9uJ3Qgc2VuZCB0aGUgcmVxdWVzdFxuICAgICAgICBpZiggIXNlbGYuX3RyaWdnZXJPbkJlZm9yZVJlcXVlc3QocmVwbGFjZUVsZW1lbnQsIHJlcGxhY2VFbGVtZW50U2VsZWN0b3IsIGluY29taW5nRWxlbWVudFNlbGVjdG9yLCBjdXJyZW50X3JvdXRlLCBkYXRhKSApe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHNlbGYuaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgc2VsZi5fcmVwbGFjZVBhZ2VDb250ZW50KHJlc3BvbnNlLmRhdGEsIHVybCwgaW5jb21pbmdFbGVtZW50U2VsZWN0b3IsIHJlcGxhY2VFbGVtZW50U2VsZWN0b3IsIHB1c2hTdGF0ZSwgY3VycmVudF9yb3V0ZSwgZGF0YSwgb25sb2FkKTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBzZWxmLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgLy9hdCB0aGlzIHBvaW50LCBpdCBjYW4gb25seSBiZSBhIHN0cmluZyBlcnJvciBtZXNzYWdlIG9yIGFuIGF4aW9zIGVycm9yIG9iamVjdFxuICAgICAgICAgICAgLy9zbyBzZXQgYm90aCB2YWx1ZXMgYWNjb3JkaW5nbHlcbiAgICAgICAgICAgIGNvbnN0IGF4aW9zX2Vycm9yID0gdHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiICYmIGVycm9yICE9PSBudWxsICYmIGVycm9yLmlzQXhpb3NFcnJvciA/IGVycm9yIDogbnVsbDtcbiAgICAgICAgICAgIGVycm9yID0gYXhpb3NfZXJyb3IgIT09IG51bGwgPyBheGlvc19lcnJvci5yZXNwb25zZS5zdGF0dXNUZXh0IDogZXJyb3I7XG5cbiAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJGYWlsKGVycm9yLCB1cmwsIGRhdGEsIGF4aW9zX2Vycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogbmF2aWdhdGlvbkRlZmF1bHRzLmxvYWRlckVuYWJsZWQsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGhvdyBsb25nIHRvIGRlbGF5IGR1cmluZyBhIHNsb3cgcmVxdWVzdCBiZWZvcmUgc2hvd2luZyB0aGUgbG9hZGVyIChpbiBtaWxsaXNlY29uZHMpXG4gICAgICpcbiAgICAgKiBTZXQgdG8gMCBpZiB5b3Ugd2FudCBpdCB0byBhbHdheXMgc2hvd1xuICAgICAqXG4gICAgICogQHBhcmFtIGRlbGF5X2luX21zXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgc2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uIChkZWxheV9pbl9tcyA9IDMwMCkge1xuICAgICAgICBpZiAodHlwZW9mIGRlbGF5X2luX21zICE9PSBcIm51bWJlclwiKSB0aHJvdyBgJHtkZWxheV9pbl9tc30gbXVzdCBiZSBhbiBpbnRlZ2VyYDtcbiAgICAgICAgdGhpcy5fbG9hZGVyRGVsYXkgPSBkZWxheV9pbl9tcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBfbG9hZGVyRGVsYXk6IG5hdmlnYXRpb25EZWZhdWx0cy5sb2FkZXJEZWxheSxcbiAgICBnZXRMb2FkZXJEZWxheTogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9hZGVyRGVsYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3dzIGEgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2UgaWYgdGhlIHJlcXVlc3QgdGFrZXMgbW9yZSB0aGFuIHRoZSBkZWxheSBzZXQgYWJvdmUgdG8gY29tcGxldGVcbiAgICAgKi9cbiAgICBzaG93TG9hZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5sb2FkZXJFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgc2VsZi5sb2FkZXJfdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuX2dldExvYWRlckVsKCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIHNlbGYuZ2V0TG9hZGVyRGVsYXkoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGhpZGVMb2FkZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5sb2FkZXJFbmFibGVkKSByZXR1cm47XG5cbiAgICAgICAgLy9pZiB0aGUgbG9hZGVyIHN0aWxsIGhhc24ndCBzaG93biB5ZXQsIHByZXZlbnQgaXQgYmVjYXVzZSB0aGUgcmVxdWVzdCB3YXMgdmVyeSBmYXN0XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoc2VsZi5sb2FkZXJfdGltZW91dCk7XG5cbiAgICAgICAgLy9oaWRlIHRoZSBsb2FkZXJcbiAgICAgICAgc2VsZi5fZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3NlcyBmb3IgdGhlIGxvYWRlclxuICAgICAqIERlZmF1bHRzIGFyZSBmb3IgYm9vdHN0cmFwICh3aXRoIHRoZSBleGNlcHRpb24gb2YgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcilcbiAgICAgKi9cbiAgICBfbG9hZGVyQ2xhc3NlczogbmF2aWdhdGlvbkRlZmF1bHRzLmxvYWRlckNsYXNzZXMsXG4gICAgX2xvYWRlcklubmVyRGl2Q2xhc3NlczogbmF2aWdhdGlvbkRlZmF1bHRzLmxvYWRlcklubmVyRGl2Q2xhc3NlcyxcblxuICAgIC8qKlxuICAgICAqIElmIGVuYWJsZWQsIGFkZHMgYSBsb2FkZXIgdG8gdGhlIHBhZ2UgYW5kIGNhY2hlcyBhIHJlZmVyZW5jZSB0byBpdCwgdGhlbiByZXR1cm5zIHRoYXQgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50XG4gICAgICovXG4gICAgX2dldExvYWRlckVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICghc2VsZi5sb2FkZXJFbmFibGVkKSByZXR1cm47XG4gICAgICAgIGlmIChzZWxmLm5hdkxvYWRlckNhY2hlZCkgcmV0dXJuIHNlbGYubmF2TG9hZGVyQ2FjaGVkO1xuXG4gICAgICAgIC8vcHJlcGVuZCB0aGUgbG9hZGVyIGVsZW1lbnRzXG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdCA9IHNlbGYuX2xvYWRlckNsYXNzZXM7XG4gICAgICAgIGxldCBpbm5lcl9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5uZXJfZGl2LmNsYXNzTGlzdCA9IHNlbGYuX2xvYWRlcklubmVyRGl2Q2xhc3NlcztcbiAgICAgICAgZGl2LmFwcGVuZChpbm5lcl9kaXYpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnByZXBlbmQoZGl2KTtcblxuICAgICAgICAvL2dldCBhbmQgY2FjaGUgYSByZWZlcmVuY2UgdG8gaXQgZm9yIGZ1dHVyZSByZXF1ZXN0c1xuICAgICAgICBzZWxmLm5hdkxvYWRlckNhY2hlZCA9IGRvbS5nZXRFbGVtZW50KCcucGFnZS1uYXZpZ2F0aW9uLWxvYWRlcicpO1xuXG4gICAgICAgIHJldHVybiBzZWxmLm5hdkxvYWRlckNhY2hlZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCByb3V0ZSBmcm9tIHRoZSBtZXRhIHRhZywgaWYgaXQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBJZiB5b3UgZG9uJ3QgcHJvdmlkZSBIVE1MLCBpdCdsbCBncmFiIGl0IGZyb20gdGhlIGN1cnJlbnQgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHthbnkgfCBFbGVtZW50fVxuICAgICAqL1xuICAgIGdldFJvdXRlRnJvbU1ldGE6IGZ1bmN0aW9uIChodG1sID0gZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICB2YXIgcm91dGUgPSBodG1sLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY3VycmVudF9yb3V0ZVwiXScpO1xuICAgICAgICByb3V0ZSA9IHJvdXRlID8gcm91dGUuY29udGVudCA6IG51bGw7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjdXJyZW50IHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgcmVsb2FkOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIHRoaXMubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwge30sIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgZnVsbCByZWZyZXNoIG9mIHRoZSBjdXJyZW50IFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgZnVsbFJlbG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGFycml2aW5nIGF0IGEgbmV3IHBhZ2UsIHlvdSBtaWdodCBuZWVkIHRvIGluc3RhbnRpYXRlIHNvbWUgc3R1ZmZcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF9vbmxvYWRDYWxsYmFja3M6IFtdLFxuICAgIG9ubG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fb25sb2FkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZU9ubG9hZDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLl9vbmxvYWRDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGxlYXZpbmcgYSBwYWdlIHlvdSBtaWdodCBuZWVkIHRvIGRlc3Ryb3kgc29tZSBwbHVnaW5zIG9yIHNvbWV0aGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX29uVW5sb2FkQ2FsbGJhY2tzOiBbXSxcbiAgICBvblVubG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fb25VbmxvYWRDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25VbmxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5fb25VbmxvYWRDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBuZXcgcGFnZSBmYWlscyB0byBsb2FkLCB5b3Ugc2hvdWxkIHByb2JhYmx5IHRlbGwgdGhlIHVzZXIvdHJ5IGFnYWluL2xvZyB0aGUgaXNzdWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF9vbkZhaWxDYWxsYmFja3M6IFtdLFxuICAgIG9uRmFpbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgdGhpcy5fb25GYWlsQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZU9uRmFpbDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFja3MuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBjYWxsYmFjaztcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhcyBtYW55IGNhbGxiYWNrcyBhcyB5b3UnZCBsaWtlIHRvIHJ1biByaWdodCBiZWZvcmUgdGhlIHJlcXVlc3QgaXMgbWFkZVxuICAgICAqXG4gICAgICogSWYgYW55IG9mIHRoZW0gcmV0dXJuIGZhbHNlLCB0aGUgcmVxdWVzdCB3aWxsIGJlIHByZXZlbnRlZFxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgc2VsZlxuICAgICAqL1xuICAgIG9uQmVmb3JlUmVxdWVzdDogZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlUmVxdWVzdENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmVPbkJlZm9yZVJlcXVlc3Q6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5fb25CZWZvcmVSZXF1ZXN0Q2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIF9vbkJlZm9yZVJlcXVlc3RDYWxsYmFja3M6IFtdLFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVwbGFjZWRfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIF90cmlnZ2VyT25sb2FkOiBmdW5jdGlvbiAoZWwsIGVsX3NlbGVjdG9yLCByZXBsYWNlZF9zZWxlY3Rvciwgcm91dGUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5fb25sb2FkQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICAgICAgY2FsbGJhY2soZWwsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjplbCxcbiAgICAgICAgICAgICAgICByZXBsYWNlZFNlbGVjdG9yOnJlcGxhY2VkX3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHJvdXRlOiByb3V0ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgbGVhdmluZyB0aGUgbGFzdCBwYWdlLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlbF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSByb3V0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgX3RyaWdnZXJVbmxvYWQ6IGZ1bmN0aW9uIChlbCwgZWxfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX29uVW5sb2FkQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe1xuICAgICAgICAgICAgY2FsbGJhY2soZWwsIGRhdGEsIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjplbF9zZWxlY3RvcixcbiAgICAgICAgICAgICAgICByb3V0ZTogcm91dGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRpb24gZmFpbGVkLCB0ZWxsIHRoZSB3b3JsZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBheGlvc19lcnJvclxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF90cmlnZ2VyRmFpbDogZnVuY3Rpb24gKGVycm9yLCB1cmwsIGRhdGEsIGF4aW9zX2Vycm9yKSB7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yLCB1cmwsIGRhdGEsIGF4aW9zX2Vycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXZSdyZSBhYm91dCB0byBsb2FkIHRoZSBuZXh0IHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlbF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19zZWxlY3RvclxuICAgICAqIEBwYXJhbSByb3V0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgX3RyaWdnZXJPbkJlZm9yZVJlcXVlc3Q6IGZ1bmN0aW9uIChlbCwgZWxfc2VsZWN0b3IsIGluY29taW5nX3NlbGVjdG9yLCByb3V0ZSwgZGF0YSkge1xuICAgICAgICBsZXQgcHJldmVudF9yZXF1ZXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlUmVxdWVzdENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIC8vcnVuIHRoZSBjYWxsYmFjayBhbmQgZ2V0IHRoZSByZXN1bHRcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNhbGxiYWNrKGVsLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ZWxfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgaW5jb21pbmdTZWxlY3RvcjppbmNvbWluZ19zZWxlY3RvcixcbiAgICAgICAgICAgICAgICByb3V0ZTogcm91dGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy9pZiB0aGUgcmVzdWx0IHdhcyBwcm92aWRlZCBhcyBmYWxzZSwgcHJldmVudCB0aGUgcmVxdWVzdFxuICAgICAgICAgICAgaWYoIHR5cGVvZiByZXN1bHQgPT09IFwiYm9vbGVhblwiICYmICFyZXN1bHQgKXtcbiAgICAgICAgICAgICAgICBwcmV2ZW50X3JlcXVlc3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuICFwcmV2ZW50X3JlcXVlc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIHRyYWNrIHRoZSBicm93c2VyJ3MgaGlzdG9yeSBidXR0b25zIChiYWNrL2ZvcndhcmQpXG4gICAgICpcbiAgICAgKiBAdG9kbzogSW52ZXN0aWdhdGUgcG9zc2libGUgaXNzdWUgd2l0aCBjaHJvbWUgY2FjaGluZyBiYWNrIGJ1dHRvbiBjb250ZW50cyBhbmQgbm90IGxvYWRpbmcgdGhlIGVudGlyZSBwYWdlXG4gICAgICovXG4gICAgaW5pdEhpc3RvcnlIYW5kbGVyczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9mb3J3YXJkIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wdXNoc3RhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vYmFjayBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2VsZi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCksIHt9LCBudWxsLCB7XG4gICAgICAgICAgICAgICAgcHVzaFN0YXRlOmZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgY29udGVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpdGggbmV3IEhUTUxcbiAgICAgKlxuICAgICAqIDEpIFRyaWdnZXJzIHVubG9hZCgpXG4gICAgICogMikgV2FpdHMgMTAwbXNcbiAgICAgKiAzKSBQYXJzZXMgdGhlIGluY29taW5nIEhUTUwgdG8gZ3JhYiBrZXkgY29tcG9uZW50c1xuICAgICAqIDQpIFJlcGxhY2VzIGFsbCBtZXRhIHRhZ3MgKGltcG9ydGFudCBmb3Igc29jaWFsIG1lZGlhIHNoYXJpbmcgYW1vbmcgb3RoZXIgdGhpbmdzKVxuICAgICAqIDUpIFJlcGxhY2VzIHRoZSBjYW5vbmljYWwgdGFnXG4gICAgICogNikgUmVwbGFjZXMgYW55IGNsYXNzZXMgb24gdGhlIGJvZHkgc2luY2UgdGhleSBhcmUgZ2VuZXJhbGx5IHVzZWQgdG8gaW5kaWNhdGUgd2hpY2ggcGFnZSB5b3UncmUgb25cbiAgICAgKiA3KSBQdXNoZXMgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICogOCkgU2V0cyB0aGUgcGFnZSB0aXRsZVxuICAgICAqIDkpIFJlcGxhY2VzIGNvbnRlbnQgaW4gdGhlIERPTVxuICAgICAqIDEwKSBUcmlnZ2VycyBvbmxvYWQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGluY29taW5nX2VsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcGxhY2VfZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcHVzaF9zdGF0ZVxuICAgICAqIEBwYXJhbSBjdXJyZW50X3JvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gb25lX3RpbWVfY2FsbGJhY2tcbiAgICAgKi9cbiAgICBfcmVwbGFjZVBhZ2VDb250ZW50KGh0bWwsIHVybCwgaW5jb21pbmdfZWxfc2VsZWN0b3IsIHJlcGxhY2VfZWxfc2VsZWN0b3IsIHB1c2hfc3RhdGUgPSB0cnVlLCBjdXJyZW50X3JvdXRlID0gbnVsbCwgZGF0YSA9IHt9LCBvbmVfdGltZV9jYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9kZWZhdWx0c1xuICAgICAgICBpbmNvbWluZ19lbF9zZWxlY3RvciA9IHR5cGVvZiBpbmNvbWluZ19lbF9zZWxlY3RvciA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuZ2V0SW5jb21pbmdFbGVtZW50KCkgOiBpbmNvbWluZ19lbF9zZWxlY3RvcjtcbiAgICAgICAgcmVwbGFjZV9lbF9zZWxlY3RvciA9IHR5cGVvZiByZXBsYWNlX2VsX3NlbGVjdG9yID09PSBcInVuZGVmaW5lZFwiID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbF9zZWxlY3RvcjtcblxuICAgICAgICAvL3ZhbGlkYXRlIGluY29taW5nIGRhdGFcbiAgICAgICAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIGluY29taW5nX2VsX3NlbGVjdG9yICE9PSAnc3RyaW5nJykgdGhyb3cgYGluY29taW5nX2VsX3NlbGVjdG9yICgke2luY29taW5nX2VsX3NlbGVjdG9yfSkgbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIGlmICh0eXBlb2YgcmVwbGFjZV9lbF9zZWxlY3RvciAhPT0gJ3N0cmluZycpIHRocm93IGByZXBsYWNlX2VsX3NlbGVjdG9yICgke3JlcGxhY2VfZWxfc2VsZWN0b3J9KSBtdXN0IGJlIGEgc3RyaW5nYDtcblxuICAgICAgICBjb25zdCByZXBsYWNlX2VsID0gZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbF9zZWxlY3RvciwgdHJ1ZSk7IC8vZXJyb3IgaWYgbm90IGZvdW5kXG5cbiAgICAgICAgLy90cmlnZ2VyIHRoZSB1bmxvYWQgY2FsbGJhY2tzXG4gICAgICAgIHNlbGYuX3RyaWdnZXJVbmxvYWQocmVwbGFjZV9lbCwgcmVwbGFjZV9lbF9zZWxlY3RvciwgY3VycmVudF9yb3V0ZSwgZGF0YSk7XG5cbiAgICAgICAgLy9wYXJzZSB0aGUgcmVzcG9uc2UgdG8gZ3JhYiBhbnl0aGluZyB0aGF0IHdlIG5lZWQgKHRpdGxlLCBtZXRhLCBjb250ZW50LCByb3V0ZSwgZXRjKVxuICAgICAgICB2YXIgcGFyc2VkID0gc2VsZi5fcGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsX3NlbGVjdG9yKTtcblxuICAgICAgICAvL2lmIHRoZXJlIGlzIEhUTUwgdG8gcHV0IG9uIHRoZSBwYWdlXG4gICAgICAgIGlmIChwYXJzZWQuaHRtbC5sZW5ndGgpIHtcblxuICAgICAgICAgICAgLy9yZW1vdmUgYWxsIG1ldGEgdGFncyBhbmQgcmVwbGFjZSBmcm9tIG5ldyBwYWdlXG4gICAgICAgICAgICBkb20ucmVtb3ZlKCdtZXRhJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAvL2FkZCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgICAgIC8vIC0gcG9zc2libHkgb3RoZXIgdGFncyB3aWxsIG5lZWQgdG8gYmUgd2hpdGVsaXN0ZWQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICBkb20ucmVtb3ZlKCdbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgICAgICBBcnJheS5mcm9tKHBhcnNlZC5saW5rcykuZm9yRWFjaChmdW5jdGlvbiAobGluaykge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kKGxpbmspO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vYWRkIGJvZHkgY2xhc3Nlc1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QgPSBwYXJzZWQuYm9keV9jbGFzc2VzO1xuXG4gICAgICAgICAgICAvL3B1c2ggdGhlIHN0YXRlIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAgICAgICAgcHVzaF9zdGF0ZSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSh7dXJsOiB1cmx9LCBwYXJzZWQudGl0bGUsIHVybCk7XG5cbiAgICAgICAgICAgIC8vdXBkYXRlIHRoZSB0YWIvcGFnZSB0aXRsZVxuICAgICAgICAgICAgc2VsZi5fc2V0VGl0bGUocGFyc2VkLnRpdGxlKTtcblxuICAgICAgICAgICAgLy9yZXBsYWNlIGNvbnRlbnQgb24gdGhlIHBhZ2VcbiAgICAgICAgICAgIGNvbnN0IG5ld19jb250ZW50ID0gZG9tLnJlcGxhY2VFbFdpdGhIVE1MKHJlcGxhY2VfZWwsIHBhcnNlZC5odG1sKTtcblxuICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgc2VsZi5fdHJpZ2dlck9ubG9hZChuZXdfY29udGVudCwgaW5jb21pbmdfZWxfc2VsZWN0b3IsIHJlcGxhY2VfZWxfc2VsZWN0b3IsIHBhcnNlZC5yb3V0ZSwgZGF0YSk7XG5cbiAgICAgICAgICAgIC8vaWYgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHJ1biBpdCBhbmQgcHJvdmlkZSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25lX3RpbWVfY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBvbmVfdGltZV9jYWxsYmFjayhuZXdfY29udGVudCwgaW5jb21pbmdfZWxfc2VsZWN0b3IsIHJlcGxhY2VfZWxfc2VsZWN0b3IsIGN1cnJlbnRfcm91dGUsIGRhdGEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2FkZCB0byBoaXN0b3J5IChpZiBlbmFibGVkKVxuICAgICAgICAgICAgdGhpcy5fYWRkSGlzdG9yeUl0ZW0odXJsLCBwYXJzZWQucm91dGUpO1xuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXBsYWNlX2VsX3NlbGVjdG9yIGlzIG5vdCB0aGUgc2FtZSBhcyBnZXRSZXBsYWNlRWxlbWVudCgpLFxuICAgICAgICAgICAgLy8gdGhlbiBpdCBzaG91bGQgYmUgdXBkYXRlZCB0byB3aGF0ZXZlciB0aGUgaW5jb21pbmdfZWxfc2VsZWN0b3IgaXMgYmVjYXVzZSBpdCBubyBsb25nZXIgZXhpc3RzXG4gICAgICAgICAgICBpZiAoc2VsZi5nZXRSZXBsYWNlRWxlbWVudCgpICE9PSByZXBsYWNlX2VsX3NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5zZXRSZXBsYWNlRWxlbWVudChpbmNvbWluZ19lbF9zZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIChvciBKU09OIG9iamVjdCkgdG8gZ3JhYiBrZXkgY29tcG9uZW50cyBsaWtlIG1ldGEgdGFncyBhbmQgdGhlIGlubmVyIGNvbnRlbnQgb2YgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBJZiBubyBwYXJlbnQgZWxlbWVudCBpcyBwcm92aWRlZCwgaXQgd2lsbCBqdXN0IHJldHVybiB0aGUgcHJvdmlkZWQgaHRtbFxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gcGFyZW50X2VsXG4gICAgICogQHJldHVybnMge3ttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIHJvdXRlOiAoKnxhbnl8RWxlbWVudCksIGxpbmtzOiBOb2RlTGlzdE9mPEVsZW1lbnQ+LCBodG1sOiBIdG1sT3B0aW9ucyB8IHN0cmluZywgdGl0bGU6IGFueSB8IEhUTUxUaXRsZUVsZW1lbnQsIGJvZHlfY2xhc3NlczogRE9NVG9rZW5MaXN0fX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIF9wYXJzZUhUTUwoaHRtbCwgcGFyZW50X2VsID0gbnVsbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9tdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJlbnRfZWwgIT09ICdzdHJpbmcnICYmIHBhcmVudF9lbCAhPT0gbnVsbCkgdGhyb3cgYFByb3ZpZGVkIHBhcmVudF9lbCAoJHtwYXJlbnRfZWx9KSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuXG4gICAgICAgIHJvdXRlID0gbnVsbDtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sID09PSBcIm9iamVjdFwiICYmIGh0bWwgIT09IG51bGwgKXtcbiAgICAgICAgICAgIGlmKCBodG1sLmh0bWwgKXtcbiAgICAgICAgICAgICAgICBpZiggaHRtbC5yb3V0ZSApe1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSA9IGh0bWwucm91dGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGh0bWwgPSBodG1sLmh0bWw7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBgSW5jb21pbmcgSlNPTiBvYmplY3QgZG9lcyBub3QgY29udGFpbiBIVE1MIGtleWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBkb21cbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9nZXQgcGFnZSB0aXRsZVxuICAgICAgICB2YXIgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZSA/IHRpdGxlLmlubmVyVGV4dCA6IG51bGw7XG5cbiAgICAgICAgLy9nZXQgYW55IG1ldGEgdGFnc1xuICAgICAgICB2YXIgbWV0YXMgPSBkb2MuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICAgICAgICAvL2dldCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgdmFyIGxpbmtzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgIC8vZ2V0IGJvZHkgY2xhc3Nlc1xuICAgICAgICB2YXIgYm9keV9jbGFzc2VzID0gZG9jLmJvZHkuY2xhc3NMaXN0LnRvU3RyaW5nKCk7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgIHZhciBuZXdfaHRtbCA9IGh0bWw7XG5cbiAgICAgICAgLy9pZiBhIHBhcmVudCBlbGVtZW50IHdhcyBwcm92aWRlZCwgZmluZCBpdFxuICAgICAgICBpZiAocGFyZW50X2VsKSB7XG4gICAgICAgICAgICB2YXIgc2VsID0gZG9jLnF1ZXJ5U2VsZWN0b3IocGFyZW50X2VsKTtcbiAgICAgICAgICAgIC8vaWYgY291bGRuJ3QgZmluZCB0aGUgZWxlbWVudFxuICAgICAgICAgICAgaWYgKCFzZWwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBgQ291bGQgbm90IGZpbmQgcGFyZW50IHNlbGVjdG9yICR7cGFyZW50X2VsfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2dyYWIgdGhlIG91dGVySFRNTFxuICAgICAgICAgICAgbmV3X2h0bWwgPSBzZWwub3V0ZXJIVE1MO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiByb3V0ZSBkaWRuJ3QgZXhpc3QgaW4gdGhlIGluY29taW5nIEpTT04gb2JqZWN0LCBncmFiIGZyb20gdGhlIEhUTUxcbiAgICAgICAgdmFyIHJvdXRlID0gcm91dGUgPyByb3V0ZSA6IHNlbGYuZ2V0Um91dGVGcm9tTWV0YShkb2MpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvbiwgeW91IGRvbid0IG5lZWQgdGhpcyBhbnltb3JlLlxuICAgICAgICBwYXJzZXIgPSBkb2MgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICByb3V0ZTogcm91dGUsXG4gICAgICAgICAgICBtZXRhczogbWV0YXMsXG4gICAgICAgICAgICBsaW5rczogbGlua3MsXG4gICAgICAgICAgICBib2R5X2NsYXNzZXM6IGJvZHlfY2xhc3NlcyxcbiAgICAgICAgICAgIGh0bWw6IG5ld19odG1sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRpdGxlIG9mIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfc2V0VGl0bGU6IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufTsiLCJyZXF1aXJlKCd1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbCcpO1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gZ2V0IGRldGFpbHMgYWJvdXQgdGhlIGN1cnJlbnQgcmVxdWVzdCBlYXNpbHksIGluY2x1ZGluZyBxdWVyeXN0cmluZyB2YXJpYWJsZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBtZXRob2RzIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSBxdWVyeSBzdHJpbmcgdmFyaWFibGVzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBVUkxTZWFyY2hQYXJhbXNcbiAgICAgKi9cbiAgICBxdWVyeTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCByZXF1ZXN0IHdhcyBtYWRlIHNlY3VyZWx5IG92ZXIgU1NMIChodHRwcyBpbnN0ZWFkIG9mIGh0dHApXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0h0dHBzOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnJlcXVpcmVXaW5kb3dMb2NhdGlvbigpO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnByb3RvY29sID09PSAnaHR0cHM6JztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IG15LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnJlcXVpcmVXaW5kb3dMb2NhdGlvbigpO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lIHx8IHdpbmRvdy5sb2NhdGlvbi5ob3N0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHByb3RvY29sIGFuZCBkb21haW5cbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW5XaXRoUHJvdG9jb2w6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZVdpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IFVSSVxuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSTogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlV2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgVVJJIHdpdGggcXVlcnkgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUklXaXRoUXVlcnlTdHJpbmc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZVdpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmdWxsIFVSTFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RnVsbFVSTDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlV2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc2xhc2ggdG8gYSBzdHJpbmcgaWYgaXQgZG9lc24ndCBhbHJlYWR5IGhhdmUgaXRcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbSBiZWNvbWVzIGh0dHBzOi8vbXktZG9tYWluLmNvbS9cbiAgICAgKiBFeGFtcGxlOiAvbXktcHJvZHVjdCBiZWNvbWVzIC9teS1wcm9kdWN0L1xuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgYXBwZW5kU2xhc2g6IGZ1bmN0aW9uKHVybCA9ICcnKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGVjayBmb3IgcmVxdWlyZWQgd2luZG93LmxvY2F0aW9uXG4gICAgICovXG4gICAgcmVxdWlyZVdpbmRvd0xvY2F0aW9uOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiggdHlwZW9mIHdpbmRvdy5sb2NhdGlvbiA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhd2luZG93LmxvY2F0aW9uICkgdGhyb3cgYFdpbmRvdy5Mb2NhdGlvbiBpcyByZXF1aXJlZCBmb3IganBhY2sucmVxdWVzdGA7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2xhc3N9IGZyb20gXCIuLi9BYnN0cmFjdENsYXNzXCI7XG5pbXBvcnQge2Nsb25lfSBmcm9tIFwiLi4vY2xvbmVcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCBzaXRlX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIG5hbWU6bnVsbCxcbiAgICBjb25maWc6e30sXG59O1xuXG4vKipcbiAqXG4gKiBTaXRlIChmb3IgbXVsdGktdGVuYW50IGFwcGxpY2F0aW9ucylcbiAqXG4gKiBDbGFzcyBmb3Igc3RvcmluZyBhbmQgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgY3VycmVudCB3ZWJzaXRlJ3MgaWQsIG5hbWUsIGFuZCBjb25maWcgb3B0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFNpdGUgZXh0ZW5kcyBBYnN0cmFjdENsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0ge30pe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ107XG5cbiAgICAgICAgLy9leHRlbmQgdXNlcl9kZWZhdWx0cyB3aXRoIGluY29taW5nIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi5kYXRhfTtcblxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpIHtcbiAgICAgICAgaWYoIHR5cGVvZiBpZCAhPT0gJ251bWJlcicgJiYgaWQgIT09IG51bGwgKSB0aHJvdyBgJHtpZH0gbXVzdCBiZSBhIG51bWJlciBvciBudWxsYDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9nZXRzIHRoZSB3ZWJzaXRlJ3MgbmFtZVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICBpZiggdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnICYmIG5hbWUgIT09IG51bGwgKSB0aHJvdyBgJHtuYW1lfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBjb25maWcgZGF0YVxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9jb25maWcpO1xuICAgIH1cblxuICAgIC8vc2V0cyBhbGwgY29uZmlnIGRhdGEgdXNpbmcgdGhlIHByb3ZpZGVkIG9iamVjdFxuICAgIHNldENvbmZpZyhjb25maWcgPSB7fSkge1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChjb25maWcsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuX2NvbmZpZyA9IGNsb25lLmdldFZhbHVlT3JDbG9uZShjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYW4gaW5kaXZpZHVhbCBjb25maWcgdmFsdWUgb3IgbnVsbCBpZiBpdCdzIG5vdCBkZWZpbmVkXG4gICAgZ2V0Q29uZmlnSXRlbShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fY29uZmlnW2tleV0pO1xuICAgIH1cblxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtKGtleSwgdmFsKSB7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCIvKipcbiAqIE1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29tbW9uIHN0cmluZyBtYW5pcHVsYXRpb25zXG4gKlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3MuZ2V0dGVyKCduYW1lJykgcmV0dXJucyAnZ2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldHRlcjogZnVuY3Rpb24oc3RyaW5nID0gJycpe1xuICAgICAgICByZXR1cm4gJ2dldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBzZXR0ZXIgbWV0aG9kIG5hbWUgZnJvbSBhIHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogc3RyaW5ncy5zZXR0ZXIoJ25hbWUnKSByZXR1cm5zICdzZXROYW1lJ1xuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgc2V0dGVyOiBmdW5jdGlvbihzdHJpbmcgPSAnJyl7XG4gICAgICAgIHJldHVybiAnc2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyB1Y2ZpcnN0KCkgZnVuY3Rpb25hbGl0eSB0byBKUyAobGlrZSBQSFApXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIHVjZmlyc3Q6IGZ1bmN0aW9uKHN0cmluZyA9ICcnKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxufTsiLCJpbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL2V2ZW50c1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLyoqXG4gKiBUb2dnbGVzIGFuIGVsZW1lbnQgb24gY2xpY2sgb2YgYSBidXR0b24sIGNsaWNrIG91dHNpZGUgdGhlIGVsZW1lbnQgKGlmIGl0J3MgdmlzaWJsZSksIG9yIG9uIHdpbmRvdyByZXNpemVcbiAqXG4gKiBUaGUgYnJlYWtwb2ludCBpcyBiYXNlZCBvbiB2aXNpYmlsaXR5IG9mIHRoZSBidXR0b24uXG4gKiAgIElmIHRoZSBidXR0b24gaXMgdmlzaWJsZSwgdGhlIGVsZW1lbnQgd2lsbCBub3QgYmUgKHVubGVzcyB0aGUgYnV0dG9uIGlzIGNsaWNrZWQpXG4gKiAgIElmIHRoZSBidXR0b24gaXMgaGlkZGVuLCB0aGUgZWxlbWVudCB3aWxsIGJlIHZpc2libGVcbiAqXG4gKiBObyBzdHlsZXMgYXJlIHByb3ZpZGVkIHdpdGggdGhpcyBjb21wb25lbnQgc28gZmVlbCBmcmVlIHRvIGdvIGNyYXp5LlxuICogICBUaGVyZSdzIGEgbG90IHlvdSBjYW4gZG8gd2hlbiBhIHNpbmdsZSBjbGFzcyBpcyB0b2dnbGVkLlxuICpcbiAqIFVzZSBjYXNlczpcbiAqIDEpIENoYW5nZSBmcm9tIGEgc2lkZWJhciBvbiBkZXNrdG9wIHRvIGEgcG9wdXAgb24gbW9iaWxlXG4gKiAyKSBDaGFuZ2UgZnJvbSBhbiBpbmxpbmUgbWVudSBvbiBkZXNrdG9wIHRvIGEgc2xpZGUtaW4gb24gbW9iaWxlXG4gKiAuLi5JJ20gc3VyZSB5b3UgY2FuIHRoaW5rIG9mIHNvbWVcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2dnbGVPbk1vYmlsZXtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBidG5cbiAgICAgKiBAcGFyYW0gdG9nZ2xlX2VsXG4gICAgICogQHBhcmFtIHRvZ2dsZV9jbGFzc1xuICAgICAqIEBwYXJhbSBoaWRlX29uX291dHNpZGVfY2xpY2tcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihidG4sIHRvZ2dsZV9lbCwgdG9nZ2xlX2NsYXNzID0gJ3Zpc2libGUnLCBoaWRlX29uX291dHNpZGVfY2xpY2sgPSB0cnVlKXtcbiAgICAgICAgLy9zZXQgdGhlIGVsZW1lbnRzXG4gICAgICAgIHRoaXMuYnRuID0gZG9tLmdldEVsZW1lbnQoYnRuLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgdGhpcy50b2dnbGVfZWwgPSBkb20uZ2V0RWxlbWVudCh0b2dnbGVfZWwsIHRydWUsIHRydWUpO1xuICAgICAgICAvL3NldCB0aGUgY29uZmlnXG4gICAgICAgIHRoaXMudG9nZ2xlX2NsYXNzID0gdG9nZ2xlX2NsYXNzO1xuICAgICAgICB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayA9IGhpZGVfb25fb3V0c2lkZV9jbGljaztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGV2ZW50IGhhbmRsZXJzIGFuZCBydW5zIG9uV2luZG93UmVzaXplIGltbWVkaWF0ZWx5IHRvIHNldCB0aGUgaW5pdGlhbCBjbGFzc1xuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy90byBiZSB1c2VkIGluc2lkZSB0aGUgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9jcmVhdGUgYSB0aHJvdHRsZWQgd2luZG93IHJlc2l6ZSBoYW5kbGVyXG4gICAgICAgIGxldCB0aHJvdHRsZTtcbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRocm90dGxlKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYoIGRvbS5pc1Zpc2libGUoc2VsZi5idG4pICl7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi50b2dnbGVfZWwuY2xhc3NMaXN0LmFkZChzZWxmLnRvZ2dsZV9jbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfTtcblxuICAgICAgICBpZiggdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgKSB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2tPdXRzaWRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0X2VsID0gZS50YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBvbiB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi5idG4pIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5idG4gPT09IHRhcmdldF9lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldF9lbCA9IHRhcmdldF9lbC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgIHRhcmdldF9lbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgb24gdGhlIGVsZW1lbnQgd2UgYXJlIHRvZ2dsaW5nXG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldF9lbCA9PT0gc2VsZi50b2dnbGVfZWwpIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIGluc2lkZSB0aGUgZWxlbWVudCB3ZSBhcmUgdG9nZ2xpbmdcbiAgICAgICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnRvZ2dsZV9lbCA9PT0gdGFyZ2V0X2VsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSB3aGlsZSAodGFyZ2V0X2VsID0gdGFyZ2V0X2VsLnBhcmVudE5vZGUpO1xuXG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgaGlkZSBpdFxuICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5yZW1vdmUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ2NsaWNrJywgdGhpcy5vbkNsaWNrT3V0c2lkZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9uQ2xpY2tUb2dnbGVCdG4gPSBldmVudHMub25DbGljayh0aGlzLmJ0biwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC50b2dnbGUoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG5cbiAgICAgICAgdGhpcy5vbldpbmRvd1Jlc2l6ZSgpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgICAqL1xuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgaWYoIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrICkge1xuICAgICAgICAgICAgZXZlbnRzLm9mZignYm9keScsICdjbGljaycsIHRoaXMub25DbGlja091dHNpZGUpO1xuICAgICAgICB9XG4gICAgICAgIGV2ZW50cy5vZmYodGhpcy5idG4sICdjbGljaycsIHRoaXMub25DbGlja1RvZ2dsZUJ0bik7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLm9uV2luZG93UmVzaXplKTtcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMgPSBmYWxzZSwgYmxvY2tfb3RoZXJfa2V5cyA9IGZhbHNlLCB0aHJvd19lcnJvciA9IGZhbHNlKXtcbiAgICAgICAgLy9mb3IgZXJyb3IgbWVzc2FnZXNcbiAgICAgICAgdmFyIHN0cmluZ2lmaWVkX3ZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKTtcblxuICAgICAgICAvL2RlZmF1bHQgZXJyb3JfbXNnXG4gICAgICAgIGNvbnN0IGVycm9yX21zZyA9IGAke3N0cmluZ2lmaWVkX3ZhbH0gbXVzdCBiZSBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZGV0ZXJtaW5lIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgICAgICBjb25zdCBpc19vYmplY3QgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGw7XG5cbiAgICAgICAgLy9pZiBub3QgYW4gb2JqZWN0IG9yIGFuIGFycmF5XG4gICAgICAgIGlmKCAhaXNfb2JqZWN0IHx8IEFycmF5LmlzQXJyYXkodmFsdWUpICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHdlIG5lZWQgdG8gdmVyaWZ5IHRoZSBrZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGtleXMpICkge1xuICAgICAgICAgICAgbGV0IGZvdW5kX2tleSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG1pc3Npbmdfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9rZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICAvL2lmIHRoZSBvYmplY3QgZG9lc24ndCBoYXZlIGFueSBrZXlzLCB0aGVuIGl0J3MgYW4gZW1wdHkgb2JqZWN0IGFuZCB3ZSBkb24ndCBuZWVkIHRvIHZlcmlmeSBhbnkgZnVydGhlclxuICAgICAgICAgICAgaWYoICF2YWx1ZV9rZXlzLmxlbmd0aCAmJiAhcmVxdWlyZV9hbGxfa2V5cyApIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5IHdhcyBmb3VuZCwgd2UgZm91bmQgYXRsZWFzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVfa2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kX2tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWYgaXQncyBub3QgZm91bmQsIHdlIGNhbid0IHNheSBhbGwga2V5cyBleGlzdCBpbiB0aGlzIG9iamVjdFxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npbmdfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vaWYgbm90IG9uZSBvZiB0aGUga2V5cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgICBpZiggIWZvdW5kX2tleSApe1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZzogYCtrZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRpZG4ndCBmaW5kIGFsbCB0aGUga2V5c1xuICAgICAgICAgICAgaWYoIHJlcXVpcmVfYWxsX2tleXMgJiYgbWlzc2luZ19rZXlzLmxlbmd0aCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBtaXNzaW5nIGRhdGE6IGArbWlzc2luZ19rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRvbid0IGFsbG93IGFueSBrZXlzIE5PVCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAgICAgICAgaWYoIGJsb2NrX290aGVyX2tleXMgKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5yZWNvZ25pemVkX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoICFrZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVjb2duaXplZF9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIHVucmVjb2duaXplZF9rZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGNvbnRhaW5zIGludmFsaWQgZGF0YTogYCt1bnJlY29nbml6ZWRfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hbGwgY2hlY2tzIHBhc3NlZCEgY29uZ3JhdHMsIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uL3R5cGVfY2hlY2tzXCI7XG5pbXBvcnQge0Fic3RyYWN0Q2xhc3N9IGZyb20gXCIuLi9BYnN0cmFjdENsYXNzXCI7XG5pbXBvcnQge2Nsb25lfSBmcm9tIFwiLi4vY2xvbmVcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuXG4vKipcbiAqXG4gKiBVc2VyXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggYSB1c2VyIGFuZCB0aGVpciBwZXJtaXNzaW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKGRhdGEgPSB7fSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5fa2V5cyA9IFsnaWQnLCAnaXNHdWVzdCcsICdpc0FkbWluJywgJ3VzZXJuYW1lJywgJ2ZuYW1lJywgJ2xuYW1lJywgJ2VtYWlsJywgJ3Bob25lJywgJ3Blcm1pc3Npb25zJywgJ2FkZGl0aW9uYWxEYXRhJ107IFxuICAgICAgICBcbiAgICAgICAgLy9leHRlbmQgdXNlcl9kZWZhdWx0cyB3aXRoIGluY29taW5nIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi51c2VyX2RlZmF1bHRzLCAuLi5kYXRhfTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMucG9wdWxhdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpe1xuICAgICAgICBpZiggdHlwZW9mIGlkICE9PSAnbnVtYmVyJyAmJiBpZCAhPT0gbnVsbCApIHRocm93IGAke2lkfSBtdXN0IGJlIGEgbnVtYmVyIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SWQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIHNldElzR3Vlc3QoaXNfZ3Vlc3QgPSBmYWxzZSl7XG4gICAgICAgIHRoaXMuX2lzR3Vlc3QgPSBpc19ndWVzdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElzR3Vlc3QoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzR3Vlc3Q7XG4gICAgfVxuXG4gICAgc2V0SXNBZG1pbihpc19hZG1pbiA9IGZhbHNlKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNBZG1pbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBZG1pbjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSA9IG51bGwpe1xuICAgICAgICBpZiggdHlwZW9mIHVzZXJuYW1lICE9PSAnc3RyaW5nJyAmJiB1c2VybmFtZSAhPT0gbnVsbCApIHRocm93IGAke3VzZXJuYW1lfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0VXNlcm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJuYW1lO1xuICAgIH1cblxuICAgIGdldEZuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9mbmFtZTtcbiAgICB9XG4gICAgc2V0Rm5hbWUoZmlyc3RfbmFtZSA9IG51bGwpe1xuICAgICAgICBpZiggdHlwZW9mIGZpcnN0X25hbWUgIT09ICdzdHJpbmcnICYmIGZpcnN0X25hbWUgIT09IG51bGwgKSB0aHJvdyBgJHtmaXJzdF9uYW1lfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9mbmFtZSA9IGZpcnN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldExuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sbmFtZTtcbiAgICB9XG4gICAgc2V0TG5hbWUobGFzdF9uYW1lID0gbnVsbCl7XG4gICAgICAgIGlmKCB0eXBlb2YgbGFzdF9uYW1lICE9PSAnc3RyaW5nJyAmJiBsYXN0X25hbWUgIT09IG51bGwgKSB0aHJvdyBgJHtsYXN0X25hbWV9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX2xuYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRGbmFtZSgpICsgJyAnICsgdGhpcy5nZXRMbmFtZSgpO1xuICAgIH1cblxuICAgIGdldEVtYWlsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9XG4gICAgc2V0RW1haWwoZW1haWwgPSBudWxsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBlbWFpbCAhPT0gJ3N0cmluZycgJiYgZW1haWwgIT09IG51bGwgKSB0aHJvdyBgJHtlbWFpbH0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fZW1haWwgPSBlbWFpbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgZ2V0UGhvbmUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lO1xuICAgIH1cbiAgICBzZXRQaG9uZShwaG9uZSA9IG51bGwpe1xuICAgICAgICBpZiggdHlwZW9mIHBob25lICE9PSAnc3RyaW5nJyAmJiBwaG9uZSAhPT0gbnVsbCApIHRocm93IGAke3Bob25lfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9waG9uZSA9IHBob25lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBnZXRQZXJtaXNzaW9ucygpe1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX3Blcm1pc3Npb25zKTtcbiAgICB9XG4gICAgLy9zZXRzIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgc2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnMgPSBbXSl7XG4gICAgICAgIGlmKCAhQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykgKSB0aHJvdyBcInNldFBlcm1pc3Npb25zIHJlcXVpcmVzIGFuIGFycmF5XCI7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHBlcm1pc3Npb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIGlmKCB0eXBlb2YgcGVybWlzc2lvbiAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtwZXJtaXNzaW9ufSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMucHVzaChwZXJtaXNzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vUmVtb3ZlcyBhIHNpbmdsZSBwZXJtaXNzaW9uIGZyb20gdGhpcyB1c2VyXG4gICAgcmVtb3ZlUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgaWYoIHR5cGVvZiBwZXJtaXNzaW9uICE9PSAnc3RyaW5nJyApIHRocm93IGAke3Blcm1pc3Npb259IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLnNldFBlcm1pc3Npb25zKHRoaXMuX3Blcm1pc3Npb25zLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gcGVybWlzc2lvbjtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHVzZXIgaGFzIHRoZSBwcm92aWRlZCBwZXJtaXNzaW9uXG4gICAgaGFzUGVybWlzc2lvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgaWYoIHR5cGVvZiBwZXJtaXNzaW9uICE9PSAnc3RyaW5nJyApIHRocm93IGAke3Blcm1pc3Npb259IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJtaXNzaW9ucygpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YSgpe1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2FkZGl0aW9uYWxEYXRhKTtcbiAgICB9XG4gICAgLy9zZXRzIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIHNldEFkZGl0aW9uYWxEYXRhKGFkZGl0aW9uYWxfZGF0YSA9IHt9KXtcbiAgICAgICAgLy9tdXN0IGJlIGEgZGF0YSBvYmplY3QsIGV2ZW4gaWYgaXQncyBlbXB0eVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoYWRkaXRpb25hbF9kYXRhLCBudWxsLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YSA9IGNsb25lLmdldFZhbHVlT3JDbG9uZShhZGRpdGlvbmFsX2RhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgLy9yZXR1cm5zIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0RGF0YUl0ZW0oa2V5KXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldKTtcbiAgICB9XG4gICAgLy9zZXRzIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0RGF0YUl0ZW0oa2V5LCB2YWwpe1xuICAgICAgICBpZiggdHlwZW9mIGtleSAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtrZXl9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIjsoZnVuY3Rpb24oKXt2YXIgaztmdW5jdGlvbiBtKGEpe3ZhciBiPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGI8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtiKytdfTp7ZG9uZTohMH19fXZhciBwPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzP09iamVjdC5kZWZpbmVQcm9wZXJ0eTpmdW5jdGlvbihhLGIsYyl7YSE9QXJyYXkucHJvdG90eXBlJiZhIT1PYmplY3QucHJvdG90eXBlJiYoYVtiXT1jLnZhbHVlKX0scT1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3c9PT10aGlzP3RoaXM6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbCYmbnVsbCE9Z2xvYmFsP2dsb2JhbDp0aGlzO2Z1bmN0aW9uIHIoKXtyPWZ1bmN0aW9uKCl7fTtxLlN5bWJvbHx8KHEuU3ltYm9sPXUpfWZ1bmN0aW9uIHYoYSxiKXt0aGlzLnM9YTtwKHRoaXMsXCJkZXNjcmlwdGlvblwiLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6Yn0pfVxudi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5zfTt2YXIgdT1mdW5jdGlvbigpe2Z1bmN0aW9uIGEoYyl7aWYodGhpcyBpbnN0YW5jZW9mIGEpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvclwiKTtyZXR1cm4gbmV3IHYoXCJqc2NvbXBfc3ltYm9sX1wiKyhjfHxcIlwiKStcIl9cIitiKyssYyl9dmFyIGI9MDtyZXR1cm4gYX0oKTtmdW5jdGlvbiB3KCl7cigpO3ZhciBhPXEuU3ltYm9sLml0ZXJhdG9yO2F8fChhPXEuU3ltYm9sLml0ZXJhdG9yPXEuU3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbYV0mJnAoQXJyYXkucHJvdG90eXBlLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpmdW5jdGlvbigpe3JldHVybiB4KG0odGhpcykpfX0pO3c9ZnVuY3Rpb24oKXt9fVxuZnVuY3Rpb24geChhKXt3KCk7YT17bmV4dDphfTthW3EuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX1mdW5jdGlvbiB5KGEpe3ZhciBiPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5pdGVyYXRvciYmYVtTeW1ib2wuaXRlcmF0b3JdO3JldHVybiBiP2IuY2FsbChhKTp7bmV4dDptKGEpfX12YXIgejtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3Quc2V0UHJvdG90eXBlT2Ypej1PYmplY3Quc2V0UHJvdG90eXBlT2Y7ZWxzZXt2YXIgQTthOnt2YXIgQj17djohMH0sQz17fTt0cnl7Qy5fX3Byb3RvX189QjtBPUMudjticmVhayBhfWNhdGNoKGEpe31BPSExfXo9QT9mdW5jdGlvbihhLGIpe2EuX19wcm90b19fPWI7aWYoYS5fX3Byb3RvX18hPT1iKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgZXh0ZW5zaWJsZVwiKTtyZXR1cm4gYX06bnVsbH12YXIgRD16O1xuZnVuY3Rpb24gRSgpe3RoaXMuaD0hMTt0aGlzLmM9bnVsbDt0aGlzLm89dm9pZCAwO3RoaXMuYj0xO3RoaXMubT10aGlzLnc9MDt0aGlzLmc9bnVsbH1mdW5jdGlvbiBGKGEpe2lmKGEuaCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTthLmg9ITB9RS5wcm90b3R5cGUuaT1mdW5jdGlvbihhKXt0aGlzLm89YX07RS5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXt0aGlzLmc9e0E6YSxCOiEwfTt0aGlzLmI9dGhpcy53fHx0aGlzLm19O0UucHJvdG90eXBlW1wicmV0dXJuXCJdPWZ1bmN0aW9uKGEpe3RoaXMuZz17XCJyZXR1cm5cIjphfTt0aGlzLmI9dGhpcy5tfTtmdW5jdGlvbiBHKGEsYixjKXthLmI9YztyZXR1cm57dmFsdWU6Yn19ZnVuY3Rpb24gSChhKXt0aGlzLkM9YTt0aGlzLmw9W107Zm9yKHZhciBiIGluIGEpdGhpcy5sLnB1c2goYik7dGhpcy5sLnJldmVyc2UoKX1mdW5jdGlvbiBJKGEpe3RoaXMuYT1uZXcgRTt0aGlzLkQ9YX1cbkkucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7Rih0aGlzLmEpO2lmKHRoaXMuYS5jKXJldHVybiBKKHRoaXMsdGhpcy5hLmMubmV4dCxhLHRoaXMuYS5pKTt0aGlzLmEuaShhKTtyZXR1cm4gSyh0aGlzKX07ZnVuY3Rpb24gTChhLGIpe0YoYS5hKTt2YXIgYz1hLmEuYztpZihjKXJldHVybiBKKGEsXCJyZXR1cm5cImluIGM/Y1tcInJldHVyblwiXTpmdW5jdGlvbihkKXtyZXR1cm57dmFsdWU6ZCxkb25lOiEwfX0sYixhLmFbXCJyZXR1cm5cIl0pO2EuYVtcInJldHVyblwiXShiKTtyZXR1cm4gSyhhKX1JLnByb3RvdHlwZS5qPWZ1bmN0aW9uKGEpe0YodGhpcy5hKTtpZih0aGlzLmEuYylyZXR1cm4gSih0aGlzLHRoaXMuYS5jW1widGhyb3dcIl0sYSx0aGlzLmEuaSk7dGhpcy5hLmooYSk7cmV0dXJuIEsodGhpcyl9O1xuZnVuY3Rpb24gSihhLGIsYyxkKXt0cnl7dmFyIGU9Yi5jYWxsKGEuYS5jLGMpO2lmKCEoZSBpbnN0YW5jZW9mIE9iamVjdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkl0ZXJhdG9yIHJlc3VsdCBcIitlK1wiIGlzIG5vdCBhbiBvYmplY3RcIik7aWYoIWUuZG9uZSlyZXR1cm4gYS5hLmg9ITEsZTt2YXIgZj1lLnZhbHVlfWNhdGNoKGcpe3JldHVybiBhLmEuYz1udWxsLGEuYS5qKGcpLEsoYSl9YS5hLmM9bnVsbDtkLmNhbGwoYS5hLGYpO3JldHVybiBLKGEpfWZ1bmN0aW9uIEsoYSl7Zm9yKDthLmEuYjspdHJ5e3ZhciBiPWEuRChhLmEpO2lmKGIpcmV0dXJuIGEuYS5oPSExLHt2YWx1ZTpiLnZhbHVlLGRvbmU6ITF9fWNhdGNoKGMpe2EuYS5vPXZvaWQgMCxhLmEuaihjKX1hLmEuaD0hMTtpZihhLmEuZyl7Yj1hLmEuZzthLmEuZz1udWxsO2lmKGIuQil0aHJvdyBiLkE7cmV0dXJue3ZhbHVlOmJbXCJyZXR1cm5cIl0sZG9uZTohMH19cmV0dXJue3ZhbHVlOnZvaWQgMCxkb25lOiEwfX1cbmZ1bmN0aW9uIE0oYSl7dGhpcy5uZXh0PWZ1bmN0aW9uKGIpe3JldHVybiBhLmkoYil9O3RoaXNbXCJ0aHJvd1wiXT1mdW5jdGlvbihiKXtyZXR1cm4gYS5qKGIpfTt0aGlzW1wicmV0dXJuXCJdPWZ1bmN0aW9uKGIpe3JldHVybiBMKGEsYil9O3coKTt0aGlzW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc319ZnVuY3Rpb24gTihhLGIpe3ZhciBjPW5ldyBNKG5ldyBJKGIpKTtEJiZEKGMsYS5wcm90b3R5cGUpO3JldHVybiBjfVxuaWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEJsb2ImJihcInVuZGVmaW5lZFwiPT09dHlwZW9mIEZvcm1EYXRhfHwhRm9ybURhdGEucHJvdG90eXBlLmtleXMpKXt2YXIgTz1mdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWIoYVtjXSl9LFA9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiIGluc3RhbmNlb2YgQmxvYj9bU3RyaW5nKGEpLGIsdm9pZCAwIT09Yz9jK1wiXCI6XCJzdHJpbmdcIj09PXR5cGVvZiBiLm5hbWU/Yi5uYW1lOlwiYmxvYlwiXTpbU3RyaW5nKGEpLFN0cmluZyhiKV19LFE9ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aDxiKXRocm93IG5ldyBUeXBlRXJyb3IoYitcIiBhcmd1bWVudCByZXF1aXJlZCwgYnV0IG9ubHkgXCIrYS5sZW5ndGgrXCIgcHJlc2VudC5cIik7fSxTPWZ1bmN0aW9uKGEpe3ZhciBiPXkoYSk7YT1iLm5leHQoKS52YWx1ZTtiPWIubmV4dCgpLnZhbHVlO2EgaW5zdGFuY2VvZiBCbG9iJiYoYT1uZXcgRmlsZShbYV0sYix7dHlwZTphLnR5cGUsbGFzdE1vZGlmaWVkOmEubGFzdE1vZGlmaWVkfSkpO1xucmV0dXJuIGF9LFQ9XCJvYmplY3RcIj09PXR5cGVvZiB3aW5kb3c/d2luZG93Olwib2JqZWN0XCI9PT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsVT1ULkZvcm1EYXRhLFY9VC5YTUxIdHRwUmVxdWVzdCYmVC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCxXPVQuUmVxdWVzdCYmVC5mZXRjaCxYPVQubmF2aWdhdG9yJiZULm5hdmlnYXRvci5zZW5kQmVhY29uO3IoKTt2YXIgWT1ULlN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnO1kmJihCbG9iLnByb3RvdHlwZVtZXXx8KEJsb2IucHJvdG90eXBlW1ldPVwiQmxvYlwiKSxcIkZpbGVcImluIFQmJiFGaWxlLnByb3RvdHlwZVtZXSYmKEZpbGUucHJvdG90eXBlW1ldPVwiRmlsZVwiKSk7dHJ5e25ldyBGaWxlKFtdLFwiXCIpfWNhdGNoKGEpe1QuRmlsZT1mdW5jdGlvbihiLGMsZCl7Yj1uZXcgQmxvYihiLGQpO2Q9ZCYmdm9pZCAwIT09ZC5sYXN0TW9kaWZpZWQ/bmV3IERhdGUoZC5sYXN0TW9kaWZpZWQpOm5ldyBEYXRlO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGIsXG57bmFtZTp7dmFsdWU6Y30sbGFzdE1vZGlmaWVkRGF0ZTp7dmFsdWU6ZH0sbGFzdE1vZGlmaWVkOnt2YWx1ZTorZH0sdG9TdHJpbmc6e3ZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEZpbGVdXCJ9fX0pO1kmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFkse3ZhbHVlOlwiRmlsZVwifSk7cmV0dXJuIGJ9fXIoKTt3KCk7dmFyIFo9ZnVuY3Rpb24oYSl7dGhpcy5mPU9iamVjdC5jcmVhdGUobnVsbCk7aWYoIWEpcmV0dXJuIHRoaXM7dmFyIGI9dGhpcztPKGEuZWxlbWVudHMsZnVuY3Rpb24oYyl7aWYoYy5uYW1lJiYhYy5kaXNhYmxlZCYmXCJzdWJtaXRcIiE9PWMudHlwZSYmXCJidXR0b25cIiE9PWMudHlwZSlpZihcImZpbGVcIj09PWMudHlwZSl7dmFyIGQ9Yy5maWxlcyYmYy5maWxlcy5sZW5ndGg/Yy5maWxlczpbbmV3IEZpbGUoW10sXCJcIix7dHlwZTpcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwifSldO08oZCxmdW5jdGlvbihlKXtiLmFwcGVuZChjLm5hbWUsZSl9KX1lbHNlXCJzZWxlY3QtbXVsdGlwbGVcIj09PVxuYy50eXBlfHxcInNlbGVjdC1vbmVcIj09PWMudHlwZT9PKGMub3B0aW9ucyxmdW5jdGlvbihlKXshZS5kaXNhYmxlZCYmZS5zZWxlY3RlZCYmYi5hcHBlbmQoYy5uYW1lLGUudmFsdWUpfSk6XCJjaGVja2JveFwiPT09Yy50eXBlfHxcInJhZGlvXCI9PT1jLnR5cGU/Yy5jaGVja2VkJiZiLmFwcGVuZChjLm5hbWUsYy52YWx1ZSk6KGQ9XCJ0ZXh0YXJlYVwiPT09Yy50eXBlP2MudmFsdWUucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIikucmVwbGFjZSgvXFxuL2csXCJcXHJcXG5cIik6Yy52YWx1ZSxiLmFwcGVuZChjLm5hbWUsZCkpfSl9O2s9Wi5wcm90b3R5cGU7ay5hcHBlbmQ9ZnVuY3Rpb24oYSxiLGMpe1EoYXJndW1lbnRzLDIpO3ZhciBkPXkoUC5hcHBseShudWxsLGFyZ3VtZW50cykpO2E9ZC5uZXh0KCkudmFsdWU7Yj1kLm5leHQoKS52YWx1ZTtjPWQubmV4dCgpLnZhbHVlO2Q9dGhpcy5mO2RbYV18fChkW2FdPVtdKTtkW2FdLnB1c2goW2IsY10pfTtrW1wiZGVsZXRlXCJdPWZ1bmN0aW9uKGEpe1EoYXJndW1lbnRzLFxuMSk7ZGVsZXRlIHRoaXMuZltTdHJpbmcoYSldfTtrLmVudHJpZXM9ZnVuY3Rpb24gYigpe3ZhciBjPXRoaXMsZCxlLGYsZyxoLHQ7cmV0dXJuIE4oYixmdW5jdGlvbihsKXtzd2l0Y2gobC5iKXtjYXNlIDE6ZD1jLmYsZj1uZXcgSChkKTtjYXNlIDI6dmFyIG47YTp7Zm9yKG49ZjswPG4ubC5sZW5ndGg7KXt2YXIgUj1uLmwucG9wKCk7aWYoUiBpbiBuLkMpe249UjticmVhayBhfX1uPW51bGx9aWYobnVsbD09KGU9bikpe2wuYj0wO2JyZWFrfWc9eShkW2VdKTtoPWcubmV4dCgpO2Nhc2UgNTppZihoLmRvbmUpe2wuYj0yO2JyZWFrfXQ9aC52YWx1ZTtyZXR1cm4gRyhsLFtlLFModCldLDYpO2Nhc2UgNjpoPWcubmV4dCgpLGwuYj01fX0pfTtrLmZvckVhY2g9ZnVuY3Rpb24oYixjKXtRKGFyZ3VtZW50cywxKTtmb3IodmFyIGQ9eSh0aGlzKSxlPWQubmV4dCgpOyFlLmRvbmU7ZT1kLm5leHQoKSl7dmFyIGY9eShlLnZhbHVlKTtlPWYubmV4dCgpLnZhbHVlO2Y9Zi5uZXh0KCkudmFsdWU7XG5iLmNhbGwoYyxmLGUsdGhpcyl9fTtrLmdldD1mdW5jdGlvbihiKXtRKGFyZ3VtZW50cywxKTt2YXIgYz10aGlzLmY7Yj1TdHJpbmcoYik7cmV0dXJuIGNbYl0/UyhjW2JdWzBdKTpudWxsfTtrLmdldEFsbD1mdW5jdGlvbihiKXtRKGFyZ3VtZW50cywxKTtyZXR1cm4odGhpcy5mW1N0cmluZyhiKV18fFtdKS5tYXAoUyl9O2suaGFzPWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3JldHVybiBTdHJpbmcoYilpbiB0aGlzLmZ9O2sua2V5cz1mdW5jdGlvbiBjKCl7dmFyIGQ9dGhpcyxlLGYsZyxoLHQ7cmV0dXJuIE4oYyxmdW5jdGlvbihsKXsxPT1sLmImJihlPXkoZCksZj1lLm5leHQoKSk7aWYoMyE9bC5iKXtpZihmLmRvbmUpe2wuYj0wO3JldHVybn1nPWYudmFsdWU7aD15KGcpO3Q9aC5uZXh0KCkudmFsdWU7cmV0dXJuIEcobCx0LDMpfWY9ZS5uZXh0KCk7bC5iPTJ9KX07ay5zZXQ9ZnVuY3Rpb24oYyxkLGUpe1EoYXJndW1lbnRzLDIpO3ZhciBmPVAuYXBwbHkobnVsbCxhcmd1bWVudHMpO1xudGhpcy5mW2ZbMF1dPVtbZlsxXSxmWzJdXV19O2sudmFsdWVzPWZ1bmN0aW9uIGQoKXt2YXIgZT10aGlzLGYsZyxoLHQsbDtyZXR1cm4gTihkLGZ1bmN0aW9uKG4pezE9PW4uYiYmKGY9eShlKSxnPWYubmV4dCgpKTtpZigzIT1uLmIpe2lmKGcuZG9uZSl7bi5iPTA7cmV0dXJufWg9Zy52YWx1ZTt0PXkoaCk7dC5uZXh0KCk7bD10Lm5leHQoKS52YWx1ZTtyZXR1cm4gRyhuLGwsMyl9Zz1mLm5leHQoKTtuLmI9Mn0pfTtaLnByb3RvdHlwZS5fYXNOYXRpdmU9ZnVuY3Rpb24oKXtmb3IodmFyIGQ9bmV3IFUsZT15KHRoaXMpLGY9ZS5uZXh0KCk7IWYuZG9uZTtmPWUubmV4dCgpKXt2YXIgZz15KGYudmFsdWUpO2Y9Zy5uZXh0KCkudmFsdWU7Zz1nLm5leHQoKS52YWx1ZTtkLmFwcGVuZChmLGcpfXJldHVybiBkfTtaLnByb3RvdHlwZS5fYmxvYj1mdW5jdGlvbigpe2Zvcih2YXIgZD1cIi0tLS1mb3JtZGF0YS1wb2x5ZmlsbC1cIitNYXRoLnJhbmRvbSgpLGU9W10sZj15KHRoaXMpLGc9Zi5uZXh0KCk7IWcuZG9uZTtnPVxuZi5uZXh0KCkpe3ZhciBoPXkoZy52YWx1ZSk7Zz1oLm5leHQoKS52YWx1ZTtoPWgubmV4dCgpLnZhbHVlO2UucHVzaChcIi0tXCIrZCtcIlxcclxcblwiKTtoIGluc3RhbmNlb2YgQmxvYj9lLnB1c2goJ0NvbnRlbnQtRGlzcG9zaXRpb246IGZvcm0tZGF0YTsgbmFtZT1cIicrZysnXCI7IGZpbGVuYW1lPVwiJytoLm5hbWUrJ1wiXFxyXFxuJyxcIkNvbnRlbnQtVHlwZTogXCIrKGgudHlwZXx8XCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIikrXCJcXHJcXG5cXHJcXG5cIixoLFwiXFxyXFxuXCIpOmUucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIlxcclxcblxcclxcbicraCtcIlxcclxcblwiKX1lLnB1c2goXCItLVwiK2QrXCItLVwiKTtyZXR1cm4gbmV3IEJsb2IoZSx7dHlwZTpcIm11bHRpcGFydC9mb3JtLWRhdGE7IGJvdW5kYXJ5PVwiK2R9KX07Wi5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVudHJpZXMoKX07Wi5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRm9ybURhdGFdXCJ9O1xuWSYmKFoucHJvdG90eXBlW1ldPVwiRm9ybURhdGFcIik7aWYoVil7dmFyIGFhPVQuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNldFJlcXVlc3RIZWFkZXI7VC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcj1mdW5jdGlvbihkLGUpe1wiY29udGVudC10eXBlXCI9PT1kLnRvTG93ZXJDYXNlKCkmJih0aGlzLnU9ITApO3JldHVybiBhYS5jYWxsKHRoaXMsZCxlKX07VC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZD1mdW5jdGlvbihkKXtkIGluc3RhbmNlb2YgWj8oZD1kLl9ibG9iKCksdGhpcy51fHx0aGlzLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixkLnR5cGUpLFYuY2FsbCh0aGlzLGQpKTpWLmNhbGwodGhpcyxkKX19aWYoVyl7dmFyIGJhPVQuZmV0Y2g7VC5mZXRjaD1mdW5jdGlvbihkLGUpe2UmJmUuYm9keSYmZS5ib2R5IGluc3RhbmNlb2YgWiYmKGUuYm9keT1lLmJvZHkuX2Jsb2IoKSk7cmV0dXJuIGJhLmNhbGwodGhpcyxkLGUpfX1YJiZcbihULm5hdmlnYXRvci5zZW5kQmVhY29uPWZ1bmN0aW9uKGQsZSl7ZSBpbnN0YW5jZW9mIFomJihlPWUuX2FzTmF0aXZlKCkpO3JldHVybiBYLmNhbGwodGhpcyxkLGUpfSk7VC5Gb3JtRGF0YT1afTtcbn0pKCk7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnByZXBlbmRPbmNlTGlzdGVuZXIgPSBub29wO1xuXG5wcm9jZXNzLmxpc3RlbmVycyA9IGZ1bmN0aW9uIChuYW1lKSB7IHJldHVybiBbXSB9XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKlxuICpcbiAqIEBhdXRob3IgSmVycnkgQmVuZHkgPGplcnJ5QGljZXdpbmdjYy5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbmF0aXZlVVJMU2VhcmNoUGFyYW1zID0gKHNlbGYuVVJMU2VhcmNoUGFyYW1zICYmIHNlbGYuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5nZXQpID8gc2VsZi5VUkxTZWFyY2hQYXJhbXMgOiBudWxsLFxuICAgICAgICBpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyh7YTogMX0pKS50b1N0cmluZygpID09PSAnYT0xJyxcbiAgICAgICAgLy8gVGhlcmUgaXMgYSBidWcgaW4gc2FmYXJpIDEwLjEgKGFuZCBlYXJsaWVyKSB0aGF0IGluY29ycmVjdGx5IGRlY29kZXMgYCUyQmAgYXMgYW4gZW1wdHkgc3BhY2UgYW5kIG5vdCBhIHBsdXMuXG4gICAgICAgIGRlY29kZXNQbHVzZXNDb3JyZWN0bHkgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgKG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoJ3M9JTJCJykuZ2V0KCdzJykgPT09ICcrJyksXG4gICAgICAgIF9fVVJMU2VhcmNoUGFyYW1zX18gPSBcIl9fVVJMU2VhcmNoUGFyYW1zX19cIixcbiAgICAgICAgLy8gRml4IGJ1ZyBpbiBFZGdlIHdoaWNoIGNhbm5vdCBlbmNvZGUgJyAmJyBjb3JyZWN0bHlcbiAgICAgICAgZW5jb2Rlc0FtcGVyc2FuZHNDb3JyZWN0bHkgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYW1wZXJzYW5kVGVzdCA9IG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGFtcGVyc2FuZFRlc3QuYXBwZW5kKCdzJywgJyAmJyk7XG4gICAgICAgICAgICByZXR1cm4gYW1wZXJzYW5kVGVzdC50b1N0cmluZygpID09PSAncz0rJTI2JztcbiAgICAgICAgfSkoKSA6IHRydWUsXG4gICAgICAgIHByb3RvdHlwZSA9IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsLnByb3RvdHlwZSxcbiAgICAgICAgaXRlcmFibGUgPSAhIShzZWxmLlN5bWJvbCAmJiBzZWxmLlN5bWJvbC5pdGVyYXRvcik7XG5cbiAgICBpZiAobmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yICYmIGRlY29kZXNQbHVzZXNDb3JyZWN0bHkgJiYgZW5jb2Rlc0FtcGVyc2FuZHNDb3JyZWN0bHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWFrZSBhIFVSTFNlYXJjaFBhcmFtcyBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfFVSTFNlYXJjaFBhcmFtc30gc2VhcmNoXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoc2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaCB8fCBcIlwiO1xuXG4gICAgICAgIC8vIHN1cHBvcnQgY29uc3RydWN0IG9iamVjdCB3aXRoIGFub3RoZXIgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgfHwgc2VhcmNoIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwpIHtcbiAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dID0gcGFyc2VUb0RpY3Qoc2VhcmNoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzcGVjaWZpZWQga2V5L3ZhbHVlIHBhaXIgYXMgYSBuZXcgc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgcHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGFwcGVuZFRvKHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dLCBuYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIsIGFuZCBpdHMgYXNzb2NpYXRlZCB2YWx1ZSxcbiAgICAgKiBmcm9tIHRoZSBsaXN0IG9mIGFsbCBzZWFyY2ggcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgcHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dIFtuYW1lXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgICAgIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0W25hbWVdWzBdIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHZhbHVlcyBhc3NvY2lhdGlvbiB3aXRoIGEgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgICAgIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0IFtuYW1lXS5zbGljZSgwKSA6IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHN1Y2ggYSBzZWFyY2ggcGFyYW1ldGVyIGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgdG8gYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyIHRvXG4gICAgICogdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGVyZSB3ZXJlIHNldmVyYWwgdmFsdWVzLCBkZWxldGUgdGhlXG4gICAgICogb3RoZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dW25hbWVdID0gWycnICsgdmFsdWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5nIGEgcXVlcnkgc3RyaW5nIHN1aXRhYmxlIGZvciB1c2UgaW4gYSBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXNbX19VUkxTZWFyY2hQYXJhbXNfX10sIHF1ZXJ5ID0gW10sIGksIGtleSwgbmFtZSwgdmFsdWU7XG4gICAgICAgIGZvciAoa2V5IGluIGRpY3QpIHtcbiAgICAgICAgICAgIG5hbWUgPSBlbmNvZGUoa2V5KTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIHZhbHVlID0gZGljdFtrZXldOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGUodmFsdWVbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnkuam9pbignJicpO1xuICAgIH07XG5cbiAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBTYWZhcmkgMTAuMSBhbmQgYFByb3h5YGluZyBpdCBpcyBub3QgZW5vdWdoLlxuICAgIHZhciBmb3JTdXJlVXNlUG9seWZpbGwgPSAhZGVjb2Rlc1BsdXNlc0NvcnJlY3RseTtcbiAgICB2YXIgdXNlUHJveHkgPSAoIWZvclN1cmVVc2VQb2x5ZmlsbCAmJiBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgIWlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yICYmIHNlbGYuUHJveHkpXG4gICAgLypcbiAgICAgKiBBcHBseSBwb2xpZmlsbCB0byBnbG9iYWwgb2JqZWN0IGFuZCBhcHBlbmQgb3RoZXIgcHJvdG90eXBlIGludG8gaXRcbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ1VSTFNlYXJjaFBhcmFtcycsIHtcbiAgICAgICAgdmFsdWU6ICh1c2VQcm94eSA/XG4gICAgICAgICAgICAvLyBTYWZhcmkgMTAuMCBkb2Vzbid0IHN1cHBvcnQgUHJveHksIHNvIGl0IHdvbid0IGV4dGVuZCBVUkxTZWFyY2hQYXJhbXMgb24gc2FmYXJpIDEwLjBcbiAgICAgICAgICAgIG5ldyBQcm94eShuYXRpdmVVUkxTZWFyY2hQYXJhbXMsIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uKHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRhcmdldCgobmV3IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKGFyZ3NbMF0pLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbClcbiAgICB9KTtcblxuICAgIHZhciBVU1BQcm90byA9IHNlbGYuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxuICAgIFVTUFByb3RvLnBvbHlmaWxsID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGhpc0FyZ1xuICAgICAqL1xuICAgIFVTUFByb3RvLmZvckVhY2ggPSBVU1BQcm90by5mb3JFYWNoIHx8IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGljdCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29ydCBhbGwgbmFtZS12YWx1ZSBwYWlyc1xuICAgICAqL1xuICAgIFVTUFByb3RvLnNvcnQgPSBVU1BQcm90by5zb3J0IHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGljdCA9IHBhcnNlVG9EaWN0KHRoaXMudG9TdHJpbmcoKSksIGtleXMgPSBbXSwgaywgaSwgajtcbiAgICAgICAgZm9yIChrIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpc1snZGVsZXRlJ10oa2V5c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldLCB2YWx1ZXMgPSBkaWN0W2tleV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5cyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmtleXMgPSBVU1BQcm90by5rZXlzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCB2YWx1ZXMgb2ZcbiAgICAgKiB0aGUga2V5L3ZhbHVlIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBVU1BQcm90by52YWx1ZXMgPSBVU1BQcm90by52YWx1ZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIGtleS92YWx1ZVxuICAgICAqIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBVU1BQcm90by5lbnRyaWVzID0gVVNQUHJvdG8uZW50cmllcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBuYW1lKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCBpdGVtXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbiAgICB9O1xuXG5cbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgVVNQUHJvdG9bc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gVVNQUHJvdG9bc2VsZi5TeW1ib2wuaXRlcmF0b3JdIHx8IFVTUFByb3RvLmVudHJpZXM7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gICAgICAgIHZhciByZXBsYWNlID0ge1xuICAgICAgICAgICAgJyEnOiAnJTIxJyxcbiAgICAgICAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICAgICAgICcoJzogJyUyOCcsXG4gICAgICAgICAgICAnKSc6ICclMjknLFxuICAgICAgICAgICAgJ34nOiAnJTdFJyxcbiAgICAgICAgICAgICclMjAnOiAnKycsXG4gICAgICAgICAgICAnJTAwJzogJ1xceDAwJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnXFwoXFwpfl18JTIwfCUwMC9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bICtdL2csICclMjAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyglW2EtZjAtOV17Mn0pKy9pZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgaXRlcmF0b3Jbc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRvRGljdChzZWFyY2gpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy8gaWYgYHNlYXJjaGAgaXMgYW4gYXJyYXksIHRyZWF0IGl0IGFzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHNlYXJjaFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoaXRlbSkgJiYgaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGl0ZW1bMF0sIGl0ZW1bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1VSTFNlYXJjaFBhcmFtcyc6IFNlcXVlbmNlIGluaXRpYWxpemVyIG11c3Qgb25seSBjb250YWluIHBhaXIgZWxlbWVudHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGtleSwgc2VhcmNoW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgZmlyc3QgJz8nXG4gICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoXCI/XCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFpcnMgPSBzZWFyY2guc3BsaXQoXCImXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWlycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhaXJzIFtqXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc9Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUuc2xpY2UoMCwgaW5kZXgpKSwgZGVjb2RlKHZhbHVlLnNsaWNlKGluZGV4ICsgMSkpKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlKSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVG8oZGljdCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IChcbiAgICAgICAgICAgIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nID8gdmFsdWUudG9TdHJpbmcoKSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG5hbWUgaW4gZGljdCkge1xuICAgICAgICAgICAgZGljdFtuYW1lXS5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdID0gW3ZhbF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICAgICAgICByZXR1cm4gISF2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuXG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZXMvZG9tXCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL2VzL2V2ZW50c1wiO1xuaW1wb3J0IHtYSFJGb3JtLCBGb3JtRnJvbVVSTH0gZnJvbSBcIi4uL2VzL2Zvcm1zXCI7XG5pbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9lcy9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuLi9lcy9yZXF1ZXN0XCI7XG5pbXBvcnQge1NpdGV9IGZyb20gXCIuLi9lcy9zaXRlXCI7XG5pbXBvcnQge3N0cmluZ3N9IGZyb20gXCIuLi9lcy9zdHJpbmdzXCI7XG5pbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vZXMvdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4uL2VzL3VzZXJcIjtcbmltcG9ydCB7VG9nZ2xlT25Nb2JpbGV9IGZyb20gXCIuLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGVcIjtcbmltcG9ydCB7Y2xvbmV9IGZyb20gXCIuLi9lcy9jbG9uZVwiO1xuXG4vL2NyZWF0ZSBhIGtleTp2YWwgb2JqZWN0IG9mIGFsbCBjb21wb25lbnRzXG5jb25zdCBjb21wb25lbnRzID0ge1xuICAgIGRvbTpkb20sXG4gICAgZXZlbnRzOmV2ZW50cyxcbiAgICBYSFJGb3JtOlhIUkZvcm0sXG4gICAgRm9ybUZyb21VUkw6Rm9ybUZyb21VUkwsXG4gICAgbmF2aWdhdGlvbjpuYXZpZ2F0aW9uLFxuICAgIHJlcXVlc3Q6cmVxdWVzdCxcbiAgICBTaXRlOlNpdGUsXG4gICAgc3RyaW5nczpzdHJpbmdzLFxuICAgIHR5cGVfY2hlY2tzOnR5cGVfY2hlY2tzLFxuICAgIFVzZXI6VXNlcixcbiAgICBUb2dnbGVPbk1vYmlsZTpUb2dnbGVPbk1vYmlsZSxcbiAgICBjbG9uZTogY2xvbmUsXG59O1xuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB0byB0aWUgYWxsIGpwYWNrIGNvbXBvbmVudHMgZGlyZWN0bHkgdG8gdGhlIHdpbmRvdyBmb3IgZ2xvYmFsIHVzZVxuICpcbiAqIFRoaXMgbWVhbnMgaW5zdGVhZCBvZiBjYWxsaW5nIGpwYWNrLnN0cmluZ3MudWNmaXJzdCgpLCB5b3UgY2FuIGp1c3QgY2FsbCBzdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UganBhY2sncyBuYW1lcyBtYXkgYmUgdG9vIGdlbmVyaWMgYW5kIGNvbmZsaWN0LlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHNldCBhIGRpZmZlcmVudCBuYW1lc3BhY2UgdGhhbiBqcGFjaywgdGhhdCdzIGZpbmUsIGJ1dCBub3QgdXNpbmcgYSBuYW1lc3BhY2UgYXQgYWxsIGNhbiBiZSByaXNreVxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIHNldEdsb2JhbChcIiRcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogJC5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiX1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBfLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJQZWFzQXJlR3Jvc3NcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogUGVhc0FyZUdyb3NzLnN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICovXG5jb25zdCBzZXRHbG9iYWwgPSBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgIC8vZm9yIGVhY2ggZnVuY3Rpb24gd2l0aGluIGV2ZW50c1xuICAgIGZvciAoY29uc3Qga2V5IGluIGNvbXBvbmVudHMpIHtcbiAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3dbbmFtZXNwYWNlXSA9PT0gXCJ1bmRlZmluZWRcIiApeyB3aW5kb3dbbmFtZXNwYWNlXSA9IHt9OyB9XG4gICAgICAgICAgICB3aW5kb3dbbmFtZXNwYWNlXVtrZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHdpbmRvd1trZXldID0gY29tcG9uZW50c1trZXldO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLy9leHRlbmQgY29tcG9uZW50cyB0byBpbmNsdWRlIHRoZSBzZXRHbG9iYWwgbWV0aG9kXG5leHBvcnQgY29uc3QganBhY2sgPSB7Li4uY29tcG9uZW50cywgLi4ue3NldEdsb2JhbDogc2V0R2xvYmFsfX07XG5cbi8vc2V0IGpwYWNrIGdsb2JhbGx5IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYW55d2hlcmVcbmdsb2JhbC5qcGFjayA9IGpwYWNrOyJdLCJzb3VyY2VSb290IjoiIn0=