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
        this._triggerOnload(form);

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
    _triggerOnload(form){
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
    onPreSubmit: function(form, form_values, url, method){ //called right before the request to the server
        //return false; //you can return false to stop submission
        return {form_values:form_values, url:url, method:method}; //you can return these if you want to override them (optional)
    },
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
    constructor(form, options = {}) {

        //if options are undefined, set them
        if (typeof options !== "object" || options === null) throw `${options} must be an object`;

        //extend defaults with provided options
        options = {...XHRFormDefaults, ...options};

        this.setForm(form);
        this.setValidateCallback(options.validateForm);
        this.setXHRSubmit(options.xhrSubmit);
        this.setPreSubmitCallback(options.onPreSubmit);
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
     * Attach a pre-submit handler (only one allowed)
     */
    setPreSubmitCallback(callback){
        if( typeof callback !== 'function' && callback !== null ) throw `${callback} must be a function or null`;
        this._preSubmit = callback;
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
     * Triggers all onSuccess callbacks
     *
     * @param response
     * @param form
     */
    _triggerOnSuccess(response, form){
        if(typeof this._onSuccess === "undefined" ) return false;
        this._onSuccess.forEach(function(onSuccess){
            onSuccess(response, form);
        });
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
    _triggerOnError(error, response, form){
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
        let form_values = Array.from(
            this.getFormValues(form),
            e => e.map(encodeURIComponent).join('=')
        ).join('&');

        //run the preSubmit callback (if it exists), and stop if it returns false
        if( typeof this._preSubmit === 'function' ) {
            let result = this._preSubmit(form, form_values, url, method);
            if (typeof result === 'boolean' && !result) return false;
            if (typeof result === 'object' && result.url) url = result.url;
            if (typeof result === 'object' && result.method) method = result.method;
            if (typeof result === 'object' && result.form_values) form_values = result.form_values;
        }

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
                        return self._triggerOnError(`${self.getIncomingElementSelector()} could not be found in response from the server`, data, form);
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
                    return self._triggerOnError(data.error, data, form);
                }

                //if it doesn't APPEAR to be the form again, or an error, let's call it a success
                return self._triggerOnSuccess(data, form)
            }
        })
        .catch(function (error) {
            _navigation__WEBPACK_IMPORTED_MODULE_1__["navigation"].hideLoader();
            self._processing = false;
            if( typeof error === 'object' && error.isAxiosError ) error = error.response.statusText;
            self._triggerOnError(error, data, form);
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
            parsed.metas.forEach(function(meta){
                document.head.append(meta);
            });

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
if("undefined"!==typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var O=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},P=function(a,b,c){return b instanceof Blob?[String(a),b,void 0!==c?c+"":"string"===typeof b.name?b.name:"blob"]:[String(a),String(b)]},Q=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+a.length+" present.");},S=function(a){var b=y(a);a=b.next().value;b=b.next().value;a instanceof Blob&&(a=new File([a],b,{type:a.type,lastModified:a.lastModified}));
return a},T="object"===typeof window?window:"object"===typeof self?self:this,U=T.FormData,V=T.XMLHttpRequest&&T.XMLHttpRequest.prototype.send,W=T.Request&&T.fetch,X=T.navigator&&T.navigator.sendBeacon;r();var Y=T.Symbol&&Symbol.toStringTag;Y&&(Blob.prototype[Y]||(Blob.prototype[Y]="Blob"),"File"in T&&!File.prototype[Y]&&(File.prototype[Y]="File"));try{new File([],"")}catch(a){T.File=function(b,c,d){b=new Blob(b,d);d=d&&void 0!==d.lastModified?new Date(d.lastModified):new Date;Object.defineProperties(b,
{name:{value:c},lastModifiedDate:{value:d},lastModified:{value:+d},toString:{value:function(){return"[object File]"}}});Y&&Object.defineProperty(b,Y,{value:"File"});return b}}r();w();var Z=function(a){this.f=Object.create(null);if(!a)return this;var b=this;O(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type)if("file"===c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];O(d,function(e){b.append(c.name,e)})}else"select-multiple"===
c.type||"select-one"===c.type?O(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?c.value.replace(/\r\n/g,"\n").replace(/\n/g,"\r\n"):c.value,b.append(c.name,d))})};k=Z.prototype;k.append=function(a,b,c){Q(arguments,2);var d=y(P.apply(null,arguments));a=d.next().value;b=d.next().value;c=d.next().value;d=this.f;d[a]||(d[a]=[]);d[a].push([b,c])};k["delete"]=function(a){Q(arguments,
1);delete this.f[String(a)]};k.entries=function b(){var c=this,d,e,f,g,h,t;return N(b,function(l){switch(l.b){case 1:d=c.f,f=new H(d);case 2:var n;a:{for(n=f;0<n.l.length;){var R=n.l.pop();if(R in n.C){n=R;break a}}n=null}if(null==(e=n)){l.b=0;break}g=y(d[e]);h=g.next();case 5:if(h.done){l.b=2;break}t=h.value;return G(l,[e,S(t)],6);case 6:h=g.next(),l.b=5}})};k.forEach=function(b,c){Q(arguments,1);for(var d=y(this),e=d.next();!e.done;e=d.next()){var f=y(e.value);e=f.next().value;f=f.next().value;
b.call(c,f,e,this)}};k.get=function(b){Q(arguments,1);var c=this.f;b=String(b);return c[b]?S(c[b][0]):null};k.getAll=function(b){Q(arguments,1);return(this.f[String(b)]||[]).map(S)};k.has=function(b){Q(arguments,1);return String(b)in this.f};k.keys=function c(){var d=this,e,f,g,h,t;return N(c,function(l){1==l.b&&(e=y(d),f=e.next());if(3!=l.b){if(f.done){l.b=0;return}g=f.value;h=y(g);t=h.next().value;return G(l,t,3)}f=e.next();l.b=2})};k.set=function(c,d,e){Q(arguments,2);var f=P.apply(null,arguments);
this.f[f[0]]=[[f[1],f[2]]]};k.values=function d(){var e=this,f,g,h,t,l;return N(d,function(n){1==n.b&&(f=y(e),g=f.next());if(3!=n.b){if(g.done){n.b=0;return}h=g.value;t=y(h);t.next();l=t.next().value;return G(n,l,3)}g=f.next();n.b=2})};Z.prototype._asNative=function(){for(var d=new U,e=y(this),f=e.next();!f.done;f=e.next()){var g=y(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};Z.prototype._blob=function(){for(var d="----formdata-polyfill-"+Math.random(),e=[],f=y(this),g=f.next();!g.done;g=
f.next()){var h=y(g.value);g=h.next().value;h=h.next().value;e.push("--"+d+"\r\n");h instanceof Blob?e.push('Content-Disposition: form-data; name="'+g+'"; filename="'+h.name+'"\r\n',"Content-Type: "+(h.type||"application/octet-stream")+"\r\n\r\n",h,"\r\n"):e.push('Content-Disposition: form-data; name="'+g+'"\r\n\r\n'+h+"\r\n")}e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};Z.prototype[Symbol.iterator]=function(){return this.entries()};Z.prototype.toString=function(){return"[object FormData]"};
Y&&(Z.prototype[Y]="FormData");if(V){var aa=T.XMLHttpRequest.prototype.setRequestHeader;T.XMLHttpRequest.prototype.setRequestHeader=function(d,e){aa.call(this,d,e);"content-type"===d.toLowerCase()&&(this.u=!0)};T.XMLHttpRequest.prototype.send=function(d){d instanceof Z?(d=d._blob(),this.u||this.setRequestHeader("Content-Type",d.type),V.call(this,d)):V.call(this,d)}}if(W){var ba=T.fetch;T.fetch=function(d,e){e&&e.body&&e.body instanceof Z&&(e.body=e.body._blob());return ba.call(this,d,e)}}X&&(T.navigator.sendBeacon=
function(d,e){e instanceof Z&&(e=e._asNative());return X.call(this,d,e)});T.FormData=Z};
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
    var useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9jbG9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90b2dnbGUvVG9nZ2xlT25Nb2JpbGUuanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdHlwZV9jaGVja3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9hZGFwdGVycy94aHIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9heGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NhbmNlbC9DYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsVG9rZW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvaXNDYW5jZWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL0F4aW9zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9JbnRlcmNlcHRvck1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2NyZWF0ZUVycm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9kaXNwYXRjaFJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL2VuaGFuY2VFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvbWVyZ2VDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3NldHRsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvdHJhbnNmb3JtRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2RlZmF1bHRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9iaW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9idWlsZFVSTC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvY29tYmluZVVSTHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2Nvb2tpZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzQWJzb2x1dGVVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2lzVVJMU2FtZU9yaWdpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvcGFyc2VIZWFkZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9zcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3Mvbm9kZV9tb2R1bGVzL2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybWRhdGEtcG9seWZpbGwvZm9ybWRhdGEubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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O0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7Ozs7OztBQ3ZMdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDBGQUEwRixLQUFLO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsa0JBQWtCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLFNBQVM7QUFDeEIsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQTtBQUNBLG1CQUFtQixpQkFBaUI7QUFDcEM7QUFDQSx1QkFBdUIsbUJBQW1CO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsRUFBRTtBQUNuQztBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixrQkFBa0I7QUFDN0M7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7Ozs7Ozs7Ozs7OztBQy9VRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRDQUE0Qzs7QUFFNUM7Ozs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEI7QUFDTTtBQUNhO0FBQ0w7QUFDTjtBQUNOO0FBQ007QUFDUTtBQUNkO0FBQzJCO0FBQ3pCOztBQUVsQztBQUNBO0FBQ0EsUUFBUSwyQ0FBRztBQUNYLFdBQVcsaURBQU07QUFDakIsWUFBWSxpREFBTztBQUNuQixnQkFBZ0IscURBQVc7QUFDM0IsZUFBZSx5REFBVTtBQUN6QixZQUFZLG1EQUFPO0FBQ25CLFNBQVMsNkNBQUk7QUFDYixZQUFZLG1EQUFPO0FBQ25CLGdCQUFnQiwyREFBVztBQUMzQixTQUFTLDZDQUFJO0FBQ2IsbUJBQW1CLHdFQUFjO0FBQ2pDLFdBQVcsZ0RBQUs7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELHdCQUF3QjtBQUNuRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPLGVBQWUsbUJBQW1COztBQUV6QztBQUNBLHFCIiwiZmlsZSI6Il9qcGFjay5idW5kbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanBhY2suanNcIik7XG4iLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi9zdHJpbmdzXCI7XG5cbmV4cG9ydCBjbGFzcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogcG9wdWxhdGVzIHRoZSB1c2VyIG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBkYXRhXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHBvcHVsYXRlKGRhdGEgPSB7fSl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fa2V5cyA9PT0gXCJ1bmRlZmluZWRcIiApIHRocm93IGBDYW5ub3QgcG9wdWxhdGUgb2JqZWN0IGlmIF9rZXlzIHByb3BlcnR5IGlzIG5vdCBzZXRgO1xuXG4gICAgICAgIC8vdmFsaWRhdGUgdGhlIGluY29taW5nIGRhdGEgb2JqZWN0IGFuZCBtYWtlIHN1cmUgaXQgb25seSBjb250YWlucyB0aGVzZSBrZXlzXG4gICAgICAgICF0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoZGF0YSwgdGhpcy5fa2V5cywgZmFsc2UsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZm9yIGVhY2gga2V5IHRoYXQgaXMgc2V0IGluIHRoZSBkYXRhIG9iamVjdCwgc2V0IHRoZSB2YWx1ZSBvbiB0aGlzXG4gICAgICAgIHRoaXMuX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhW2tleV0gIT09IFwidW5kZWZpbmVkXCIgKSBzZWxmW3N0cmluZ3Muc2V0dGVyKGtleSldKGRhdGFba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0iLCIvKipcbiAqXG4gKiBAcGFyYW0gdmFsXG4gKi9cbmZ1bmN0aW9uIGdldFZhbHVlT3JDbG9uZSh2YWwpe1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2YgdmFsO1xuXG4gICAgLy9pZiBub3QgZGVmaW5lZCBvciBudWxsLCByZXR1cm4gcmlnaHQgYXdheVxuICAgIGlmKCB0eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IHZhbCA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuXG4gICAgLy9pZiBvYmplY3QgKGFuZCBhbHJlYWR5IHJ1bGVkIG91dCBudWxsKVxuICAgIGlmKCB0eXBlID09PSAnb2JqZWN0JyApe1xuICAgICAgICByZXR1cm4gey4uLnZhbH07XG4gICAgfVxuICAgIC8vaWYgYXJyYXlcbiAgICBpZiggQXJyYXkuaXNBcnJheSh2YWwpICl7XG4gICAgICAgIHJldHVybiBbLi4udmFsXTtcbiAgICB9XG4gICAgLy9pZiBmdW5jdGlvblxuICAgIGlmKCB0eXBlID09PSBcImZ1bmN0aW9uXCIgKXtcbiAgICAgICAgLy9hcyBmYXIgYXMgSSBjYW4gdGVsbCwgcmVhc3NpZ25pbmcgdGhlIHZhcmlhYmxlIHRoYXQgc3RvcmVkIHRoZSBmdW5jdGlvbiBkb2Vzbid0IGNoYW5nZSBhbnl0aGluZyBhbmQgYSBmdW5jdGlvbiBjYW4ndCBiZSBtb2RpZmllZCwgcmlnaHQ/XG4gICAgICAgIC8vc28gSSB0aGluayB3ZSdyZSBvayByZXR1cm5pbmcgdGhlIHJlZmVyZW5jZSB0byB0aGUgb3JpZ2luYWwgYW5kIGZvcmVnb2luZyBhbnkgY2xvbmluZyBpbiBoZXJlXG4gICAgfVxuXG4gICAgLy9vdGhlcndpc2UgaXQncyBhIHZhbHVlIHRoYXQncyBwYXNzZWQgYnkgdmFsdWUgKHN0cmluZywgaW50LCBib29sLCBudW1iZXIsIGV0YylcbiAgICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgY29uc3QgY2xvbmUgPSB7Z2V0VmFsdWVPckNsb25lfTsiLCIvKipcbiAqIEhUTUwgRE9NIGhlbHBlcnNcbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGEgc2luZ2xlIG5hdGl2ZSBET00gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vbmUgZXhpc3RcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbXVsdGlwbGUgLSB0aHJvdyBhbiBlcnJvciBpZiBtb3JlIHRoYW4gMSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50fEhUTUxEb2N1bWVudHxudWxsXG4gICAgICovXG4gICAgZ2V0RWxlbWVudDogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUgPSBmYWxzZSwgZXJyb3Jfb25fbXVsdGlwbGUgPSBmYWxzZSl7XG4gICAgICAgIGNvbnN0IGZvdW5kRWwgPSB0aGlzLmdldEVsZW1lbnRzKGVsLCBlcnJvcl9vbl9ub25lKTtcblxuICAgICAgICBpZiggZm91bmRFbC5sZW5ndGggPiAxICYmIGVycm9yX29uX211bHRpcGxlICkgdGhyb3cgYE1vcmUgdGhhbiAxIHJlc3VsdCBmb3VuZCBmb3IgXCIke2VsfVwiYDtcblxuICAgICAgICBpZiggIWZvdW5kRWwubGVuZ3RoICkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kRWxbMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYW4gYXJyYXkgb2YgbmF0aXZlIERPTSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsIChzdHJpbmcsIG9iamVjdCwgYXJyYXksIGpRdWVyeSBvYmplY3QsIGV0YylcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vIGVsZW1lbnRzIHdlcmUgZm91bmQsIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMgW11cbiAgICAgKi9cbiAgICBnZXRFbGVtZW50czogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUgPSBmYWxzZSl7XG4gICAgICAgIC8vZGVmYXVsdCB0byBlbXB0eVxuICAgICAgICBsZXQgZWxfYXJyYXkgPSBbXTtcblxuICAgICAgICBpZiggdHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbCApe1xuICAgICAgICAgICAgLy9kbyBub3RoaW5nLCBkZWZhdWx0IGlzIGVtcHR5IGFycmF5XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vY29udmVydCB0aGUgTm9kZUxpc3QgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBlbF9hcnJheSA/IEFycmF5LmZyb20oZWxfYXJyYXkpIDogZWxfYXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBqUXVlcnkgKXtcbiAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW55dGhpbmdcbiAgICAgICAgICAgIGlmKCBlbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgZWxfYXJyYXkgPSBlbC50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBOb2RlTGlzdCB8fCBlbCBpbnN0YW5jZW9mIEhUTUxDb2xsZWN0aW9uICl7XG4gICAgICAgICAgICBlbF9hcnJheSA9IEFycmF5LmZyb20oZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBhcnJheSwgdmFsaWRhdGUgZWFjaCBlbGVtZW50XG4gICAgICAgIGVsc2UgaWYoIEFycmF5LmlzQXJyYXkoZWwpICl7XG4gICAgICAgICAgICBlbC5mb3JFYWNoKGZ1bmN0aW9uKHRoaXNfZWwpe1xuICAgICAgICAgICAgICAgIHRoaXNfZWwgPSBkb20uZ2V0RWxlbWVudCh0aGlzX2VsKTtcbiAgICAgICAgICAgICAgICBpZiggdGhpc19lbCApIGVsX2FycmF5LnB1c2godGhpc19lbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvL290aGVyd2lzZSwgd2hhdCB0aGUgaGVjayBkaWQgeW91IHBhc3M/IFRocm93IGVycm9yLi4uXG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgYEludmFsaWQgdmFsdWU6IFwiJHtlbH1cImA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCAmJiBlcnJvcl9vbl9ub25lICkgdGhyb3cgYEZhaWxlZCB0byBmaW5kIFwiJHtlbH1cImA7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBRdWljayBtZXRob2QgZm9yIHJlbW92aW5nIGVsZW1lbnRzIGZyb20gdGhlIERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX2lmX25vdF9mb3VuZFxuICAgICAqIEByZXR1cm5zIHtkb219XG4gICAgICovXG4gICAgcmVtb3ZlOiBmdW5jdGlvbihlbCwgZXJyb3JfaWZfbm90X2ZvdW5kID0gZmFsc2Upe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9pZl9ub3RfZm91bmQgKSB0aHJvdyBgQ291bGQgbm90IGZpbmQgXCIke2VsfVwiYDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZXMgYSBkb20gZWxlbWVudCB3aXRoIEhUTUxcbiAgICAgKlxuICAgICAqIHVzZXMgLmdldEVsZW1lbnQoKSBzbyBlbCBjYW4gYmUganVzdCBhYm91dCBhbnl0aGluZ1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHJldHVybnMge0NoaWxkTm9kZX18bnVsbFxuICAgICAqL1xuICAgIHJlcGxhY2VFbFdpdGhIVE1MOiBmdW5jdGlvbihlbCwgaHRtbCwgZXJyb3JfaWZfbm90X2ZvdW5kID0gZmFsc2Upe1xuICAgICAgICBpZiggdHlwZW9mIGh0bWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7aHRtbH0gbXVzdCBiZSBhIHN0cmluZ2A7XG5cbiAgICAgICAgY29uc3QgZm91bmRFbCA9IHRoaXMuZ2V0RWxlbWVudChlbCwgZXJyb3JfaWZfbm90X2ZvdW5kKTtcblxuICAgICAgICBpZiggIWVsICkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgLy9jcmVhdGUgZWxlbWVudCBmcm9tIEhUTUxcbiAgICAgICAgbGV0IG5ld0VsID0gKG5ldyBET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIC8vaW5zZXJ0IHRoZSBuZXcgZWxlbWVudCBiZWZvcmUgdGhlIGN1cnJlbnRcbiAgICAgICAgbmV3RWwgPSBmb3VuZEVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsLmRvY3VtZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2hpbGROb2Rlc1swXSwgZm91bmRFbCk7XG5cbiAgICAgICAgLy9yZW1vdmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICBmb3VuZEVsLnJlbW92ZSgpO1xuXG4gICAgICAgIC8vcmV0dXJuIHRoZSBuZXcgb25lXG4gICAgICAgIHJldHVybiBuZXdFbDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhbiBlbGVtZW50IGlzIHZpc2libGUgb3Igbm90XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3JfaWZfbm90X2ZvdW5kXG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNWaXNpYmxlKGVsLCBlcnJvcl9pZl9ub3RfZm91bmQgPSBmYWxzZSwgZXJyb3Jfb25fbXVsdGlwbGUgPSBmYWxzZSkge1xuICAgICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudChlbCwgZXJyb3JfaWZfbm90X2ZvdW5kLCBlcnJvcl9vbl9tdWx0aXBsZSk7XG5cbiAgICAgICAgaWYoIGVsID09PSBudWxsICl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWwpO1xuXG4gICAgICAgIC8vY2hlY2sgZGlzcGxheSwgdmlzaWJpbGl0eSwgYW5kIG9wYWNpdHkgZmlyc3Qgc2luY2UgdGhleSdyZSB0aGUgbW9zdCBjb21tb25cbiAgICAgICAgaWYgKHN0eWxlLmRpc3BsYXkgPT09ICdub25lJykgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ3Zpc2libGUnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChzdHlsZS5vcGFjaXR5ID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9zZWUgaWYgdGhlIGVsZW1lbnQgaGFzIGEgc2l6ZVxuICAgICAgICBpZihlbC5vZmZzZXRXaWR0aCArIGVsLm9mZnNldEhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCArIGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoID09PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy9nZXQgdGhlIG91dHNpZGUgY29ybmVycyBvZiB0aGUgZWxlbWVudFxuICAgICAgICBjb25zdCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgY29uc3QgZWxfYm91bmRzID0ge1xuICAgICAgICAgICAgJ3RvcC1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC50b3BcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAndG9wLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2JvdHRvbS1sZWZ0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5sZWZ0LFxuICAgICAgICAgICAgICAgIHk6IGVsUmVjdC5ib3R0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnYm90dG9tLXJpZ2h0Jzoge1xuICAgICAgICAgICAgICAgIHg6IGVsUmVjdC5yaWdodCxcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QuYm90dG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJ2NlbnRlcic6IHtcbiAgICAgICAgICAgICAgICB4OiBlbFJlY3QubGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiBlbFJlY3QudG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBpbnNpZGVfdmlld3BvcnQgPSB0cnVlO1xuICAgICAgICAvL21ha2Ugc3VyZSB0aGUgZWxlbWVudCBpcyBpbnNpZGUgdGhlIHZpZXdwb3J0XG4gICAgICAgIE9iamVjdC5rZXlzKGVsX2JvdW5kcykuZm9yRWFjaChmdW5jdGlvbihrZXkpe1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gZWxfYm91bmRzW2tleV07XG5cbiAgICAgICAgICAgIGlmIChwb2ludC54IDwgMCkgaW5zaWRlX3ZpZXdwb3J0ID0gZmFsc2U7IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmIChwb2ludC54ID4gKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA8IDApIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAocG9pbnQueSA+IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodCkpIGluc2lkZV92aWV3cG9ydCA9IGZhbHNlOyByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGxldCBwb2ludEVsID0gZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgICAgIGlmIChwb2ludEVsICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9pbnRFbCA9PT0gZWwpIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHBvaW50RWwgPSBwb2ludEVsLnBhcmVudE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gaW5zaWRlX3ZpZXdwb3J0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kIHByZXZlbnREZWZhdWx0IGV2ZW50cyAoYW5kIG90aGVycyBmb3IgY29uc2lzdGVuY3kpXG4gKi9cbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZXNlIGZ1bmN0aW9ucyBnbG9iYWxseSBzbyB5b3UgY2FuIHVzZSB0aGVtIHdpdGhvdXQgYSBuYW1lc3BhY2Ugb3Igd2l0aCBhIGN1c3RvbSBvbmVcbiAgICAgKlxuICAgICAqIFVzZSBhdCB5b3VyIG93biByaXNrIC0gbWF5IGNhdXNlIGNvbmZsaWN0cyFcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICAgIGpwYWNrLmV2ZW50cy5zZXRHbG9iYWwoKTtcbiAgICAgKiAgICAgb25DbGljaygnYScsIGZ1bmN0aW9uKCl7XG4gICAgICogICAgICAgIC8vZG8gc29tZXRoaW5nICh0aGUgaHJlZiBpcyBwcmV2ZW50ZWQpXG4gICAgICogICAgIH0pO1xuICAgICAqL1xuICAgIHNldEdsb2JhbDogZnVuY3Rpb24obmFtZXNwYWNlKXtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgICAgICAvL2ZvciBlYWNoIGZ1bmN0aW9uIHdpdGhpbiBldmVudHNcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gc2VsZikge1xuICAgICAgICAgICAgLy9zZXQgZXZlcnl0aGluZyB0aGF0J3MgYSByZWFsIG1ldGhvZCBpbiBldmVudHMsIGV4Y2VwdCB0aGlzIG9uZVxuICAgICAgICAgICAgaWYgKHNlbGYuaGFzT3duUHJvcGVydHkocHJvcGVydHkpICYmIHByb3BlcnR5ICE9PSAnc2V0R2xvYmFsJykge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1bcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1twcm9wZXJ0eV0gPSBzZWxmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIGV2ZW50cy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGV2ZW50cyBmcm9tIG9jY3VycmluZ1xuICAgICAqICAobGlrZSBmb3JtcyBzdWJtaXR0aW5nIG9yIGEgbGluayBicmluZ2luZyB5b3UgdG8gYW5vdGhlciBwYWdlKVxuICAgICAqXG4gICAgICogIFJldHVybnMgdGhlIGdlbmVyYXRlZCBoYW5kbGVyIGZvciBmdXR1cmUgcmVtb3ZhbFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBmdW5jdGlvblxuICAgICAqL1xuICAgIG9uRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldmVudGVkSGFuZGxlciA9IGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgLy9OZWVkIHRvIHVuZGVyc3RhbmQgdGhpcyBiZXR0ZXIsIGJ1dCBpdCBhcHBlYXJzIHdoZW4gdGllZCB0byB0aGUgYm9keSBlbGVtZW50IHRoaXMgZnVuY3Rpb25cbiAgICAgICAgICAgIC8vIHJlY2VpdmVzIGFuIGFycmF5IG9mIGV2ZW50cyB3aXRoIGEgc2luZ2xlIGl0ZW0gaW4gaXQ/XG4gICAgICAgICAgICBpZiggQXJyYXkuaXNBcnJheShlKSApIGUgPSBlWzBdO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIGUpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgcHJldmVudGVkSGFuZGxlciwgZmFsc2UpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcHJldmVudGVkSGFuZGxlcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIG9uOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBkYXRhX3RvX3Bhc3NcbiAgICAgKiBAcGFyYW0gZXZlbnRfb3B0aW9uc1xuICAgICAqIEByZXR1cm5zIHsqfCpbXXwqfVxuICAgICAqL1xuICAgIHRyaWdnZXI6IGZ1bmN0aW9uKGVsLCBldmVudCwgZGF0YV90b19wYXNzID0ge30sIGV2ZW50X29wdGlvbnMgPSB7fSl7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRfb3B0aW9ucy5kZXRhaWwgPSBkYXRhX3RvX3Bhc3M7XG5cbiAgICAgICAgLy9jcmVhdGUgdGhlIGV2ZW50XG4gICAgICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCBldmVudF9vcHRpb25zKTtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcbn07IiwiaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi4vbmF2aWdhdGlvblwiO1xuaW1wb3J0IHtYSFJGb3JtfSBmcm9tIFwiLi9YSFJGb3JtXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vL2RlZmF1bHRzIGZvciB0aGUgRm9ybUZyb21VUkwgY2xhc3NcbmNvbnN0IEZvcm1Gcm9tVVJMRGVmYXVsdHMgPSB7XG4gICAgaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6IG51bGwsIC8vdGhlIGZvcm0gZWxlbWVudCBvciB3cmFwcGVyIHRoYXQgeW91IHdhbnQgdG8gcmV0cmlldmUgZnJvbSB0aGUgVVJMXG4gICAgaW5zZXJ0SW50b0VsZW1lbnQ6IG51bGwsIC8vd2hhdCBlbGVtZW50IHRvIHB1dCB0aGUgZm9ybSBpbnRvXG4gICAgb25sb2FkOiBmdW5jdGlvbihmb3JtKXsgcmV0dXJuIHRoaXM7IH0sIC8vb25jZSB0aGUgZm9ybSBpcyBsb2FkZWQgb250byB0aGUgcGFnZVxufTtcblxuLyoqXG4gKlxuICogRm9ybUZyb21VUkxcbiAqXG4gKiBUaGlzIGNsYXNzIGFsbG93cyB5b3UgdG8gZ3JhYiBhIGZvcm0gZnJvbSBhIFVSTCBhbmQgcmV0dXJucyBpdCB0byB0aGUgY3VycmVudCBwYWdlXG4gKlxuICogQWxzbyBoYW5kbGVzIGZvcm0gc3VibWlzc2lvbiB1c2luZyBYSFIgYW5kIGNhbiBvcGVuIGEgbW9kYWwgdG8gZGlzcGxheSB0aGUgZm9ybVxuICpcbiAqL1xuZXhwb3J0IGNsYXNzIEZvcm1Gcm9tVVJMIGV4dGVuZHMgWEhSRm9ybSB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdXJsIC0gc3RyaW5nXG4gICAgICogQHBhcmFtIG9wdGlvbnMgLSBvYmplY3R7aW5jb21pbmdFbGVtZW50U2VsZWN0b3IsaW5zZXJ0SW50b0VsZW1lbnQsIG9ubG9hZH1cbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIG9wdGlvbnMgPSB7fSl7XG4gICAgICAgIHN1cGVyKG51bGwsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiICkgdGhyb3cgYCR7dXJsfSBtdXN0IGJlIGEgc3RyaW5nYDtcblxuICAgICAgICAvL2lmIG9wdGlvbnMgYXJlIHVuZGVmaW5lZCwgc2V0IHRoZW1cbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBvcHRpb25zO1xuICAgICAgICBpZiggdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgfHwgb3B0aW9ucyA9PT0gbnVsbCApIHRocm93IGAke29wdGlvbnN9IG11c3QgYmUgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2V4dGVuZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5Gb3JtRnJvbVVSTERlZmF1bHRzLCAuLi5vcHRpb25zfTtcblxuICAgICAgICB0aGlzLnNldFVSTCh1cmwpO1xuICAgICAgICB0aGlzLnNldEluY29taW5nRWxlbWVudFNlbGVjdG9yKG9wdGlvbnMuaW5jb21pbmdFbGVtZW50U2VsZWN0b3IpO1xuICAgICAgICB0aGlzLnNldEluc2VydEludG9FbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50b0VsZW1lbnQpO1xuICAgICAgICB0aGlzLm9ubG9hZChvcHRpb25zLm9ubG9hZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGUgdGhlIHBhcmVudCBiZWNhdXNlIGl0J3Mgbm90IHJlcXVpcmVkIGZvciB0aGlzIGNsYXNzXG4gICAgICpcbiAgICAgKiBTdGlsbCBrZWVwaW5nIGl0IGZ1bmN0aW9uYWwgYnV0IHJlbW92aW5nIGFsbCB2YWxpZGF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldEZvcm0oZm9ybSl7XG4gICAgICAgIHRoaXMuX2Zvcm0gPSBmb3JtO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIFVSTCBmcm9tIHdoaWNoIHRoZSBmb3JtIHdpbGwgYmUgcmV0cmlldmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0VVJMKHVybCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtJ3MgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJMKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIFhIUkZvcm0uZ2V0RmluYWxTdWJtaXRVUkwgdG8gaW5jbHVkZSB0aGUgVVJMIHRoZSBmb3JtIHdhcyByZXF1ZXN0ZWQgZnJvbSBhcyBhbiBhZGRpdGlvbmFsIGZhbGxiYWNrXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdXJsIGlzIG51bGwsIGdyYWIgZnJvbSB0aGUgZm9ybSwgb25seSBpZiBleHBsaWNpdGx5IHNldFxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICBpZiggZm9ybS5hdHRyaWJ1dGVzLmFjdGlvbiApe1xuICAgICAgICAgICAgICAgIHVybCA9IGZvcm0uYWN0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB0aGUgVVJMIGlzIHN0aWxsIG51bGwsIGdyYWIgdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICAgICAgdXJsID0gIXVybCA/IHRoaXMuZ2V0VVJMKCkgOiB1cmw7XG5cbiAgICAgICAgLy9pZiB0aGUgdXJsIGlzIFNUSUxMIG51bGwsIGdyYWIgdGhlIGZvcm0ncyBkZWZhdWx0IGFjdGlvbiAoY3VycmVudCBwYWdlKVxuICAgICAgICBpZiggdXJsID09PSBudWxsICl7XG4gICAgICAgICAgICB1cmwgPSBmb3JtLmFjdGlvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIFVSTCBwcm92aWRlZCByZXR1cm5zIEhUTUwsIHRoaXMgc2VsZWN0b3Igd2lsbCBiZSB1c2VkIHRvIHB1bGwgdGhlIGZvcm0gb3V0XG4gICAgICpcbiAgICAgKiBJZiBsZWZ0IG51bGwsIGl0IHdpbGwgYXNzdW1lIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0ncyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3I6IHN0cmluZ3xudWxsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Ioc2VsZWN0b3Ipe1xuICAgICAgICBpZiggc2VsZWN0b3IgIT09IG51bGwgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGwgdmFsdWVgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc2VsZWN0b3IgZm9yIHRoZSBmb3JtIG9yIGEgcGFyZW50IG9mIGl0IHRoYXQgd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoZSBVUkxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3Rvcigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBzZXQgYSBwYXJlbnQgZWxlbWVudCB0aGF0IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50byB1c2luZyB0aGUgZGVmYXVsdCBpbnNlcnRGb3JtIG1ldGhvZFxuICAgICAqIEFsdGVybmF0aXZlbHksIHlvdSBjYW4gbGVhdmUgdGhpcyBhbmQgb3ZlcnJpZGUgaW5zZXJ0Rm9ybSgpIGFuZCBoYXZlIG1vcmUgY29udHJvbCBvdmVyIHdoZXJlIGl0IHNob3VsZCBnb1xuICAgICAqXG4gICAgICogVXNlcyBkb20uZ2V0RWxlbWVudCgpIHNvIHlvdSBjYW4gcGFzcyBhIHN0cmluZywgalF1ZXJ5IG9iamVjdCwgb2JqZWN0LCBldGNcbiAgICAgKiBIb3dldmVyIGlmIG1vcmUgdGhhbiAxIGVsZW1lbnQgaXMgZGV0ZWN0ZWQsIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxlbWVudFxuICAgICAqL1xuICAgIHNldEluc2VydEludG9FbGVtZW50KGVsZW1lbnQpe1xuICAgICAgICB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCB0aGUgZm9ybSB3aWxsIGJlIGluc2VydGVkIGludG9cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfVxuICAgICAqL1xuICAgIGdldEluc2VydEludG9FbGVtZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnNlcnRJbnRvRWxlbWVudDtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEdldCB0aGUgZm9ybSBmcm9tIHRoZSBVUkwgYW5kIHBhc3MgdG8gaW5zZXJ0Rm9ybVxuICAgICAqXG4gICAgICogVGhlcmUgYXJlIHRocmVlIG1haW4gd2F5cyB0byBwcm92aWRlIHRoZSBmb3JtIGZyb20geW91ciBzZXJ2ZXI6XG4gICAgICogMSkgU3RyYWlnaHQgSFRNTC4gVGhlIGVudGlyZSByZXNwb25zZSBpcyB0aGUgZm9ybSBhbmQgdGhhdCdzIGl0LlxuICAgICAqIDIpIFN0cmFpZ2h0IEhUTUwsIGJ1dCB0aGUgZm9ybSBpcyBvbmx5IGEgcGFydCBvZiB0aGUgcmVzcG9uc2Ugc28gaXQgbmVlZHMgdG8gYmUgcGFyc2VkIG91dCBiYXNlZCBvbiBhIHNlbGVjdG9yLlxuICAgICAqIDMpIEEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUga2V5IFwiaHRtbFwiIGxpa2UgdGhpczoge1wiaHRtbFwiOlwiPGZvcm0+eW91ciBmb3JtIGhlcmU8L2Zvcm0+XCJ9XG4gICAgICpcbiAgICAgKi9cbiAgICBnZXRGb3JtKCl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICBheGlvcy5nZXQodGhpcy5nZXRVUkwoKSkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlc3BvbnNlLmRhdGE7XG5cbiAgICAgICAgICAgIC8vanVzdCBpbiBjYXNlIHRoZSBzZXJ2ZXIgcmV0dXJuZWQgdGhlIHdyb25nIHJlc3BvbnNlIHR5cGUgYW5kIGl0J3MgYWN0dWFsbHkgSlNPTiAtIGlnbm9yZSBlcnJvcnNcbiAgICAgICAgICAgIHRyeXsgZGF0YSA9IHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyA/IEpTT04ucGFyc2UoZGF0YSkgOiBkYXRhOyB9IGNhdGNoKGUpeyB9XG5cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGEgc3RyaW5nIChwcm9iYWJseSBIVE1MKVxuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24uX3BhcnNlSFRNTChkYXRhLCBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkpO1xuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL290aGVyd2lzZSB0aGUgZW50aXJlIHJlc3BvbnNlIGlzIGFzc3VtZWQgdG8gYmUgdGhlIGZvcm1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCAocHJvYmFibHkgSlNPTilcbiAgICAgICAgICAgIGVsc2UgaWYoIHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyAmJiBkYXRhICE9PSBudWxsICl7XG4gICAgICAgICAgICAgICAgLy9pZiBIVE1MIHdhcyBwcm92aWRlZCBpbiB0aGUgb2JqZWN0XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhLmh0bWwgIT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhLmh0bWx9LCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRocm93IGBVbmV4cGVjdGVkIHNlcnZlciByZXNwb25zZSAke2RhdGF9YDtcbiAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFsbG93cyB5b3UgdG8gaW5zZXJ0IHRoZSBmb3JtIHdoZXJldmVyIHlvdSB3YW50IG9uIHRoZSBwYWdlXG4gICAgICogIE92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIGN1c3RvbWl6ZSB3aGVyZSB0aGUgZm9ybSBpcyBpbnNlcnRlZFxuICAgICAqICAobWF5YmUgeW91IHdhbnQgdG8gb3BlbiBhIG1vZGFsIGZpcnN0IGFuZCBwbGFjZSBpdCB0aGVyZT8pXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQuaHRtbCB3aWxsIGFsd2F5cyBiZSB0aGUgSFRNTFxuICAgICAqXG4gICAgICogIHBhcnNlZF9jb250ZW50IG1heSBjb250YWluIG90aGVyIGRhdGEgbGlrZSByb3V0ZSBhbmQgdGl0bGUgaWYgdGhlIGZvcm0gd2FzIHB1bGxlZCBvdXQgb2ZcbiAgICAgKiAgICAgYSBmdWxsIEhUTUwgcGFnZSB3aGljaCBjb250YWlucyB0aG9zZSBpdGVtc1xuICAgICAqXG4gICAgICogIHJlc3BvbnNlIGlzIHRoZSBmdWxsIHNlcnZlciByZXNwb25zZSAoaHRtbCBzdHJpbmcgb3Igb2JqZWN0IGZyb20gSlNPTiAtIG5vdCBwcm92aWRlZCBpZiB0aGUgcmVzcG9uc2UgaXMgb25seSB0aGUgZm9ybSdzIEhUTUwpXG4gICAgICpcbiAgICAgKiAgZm9ybSBpcyBwcm92aWRlZCBpZiB0aGlzIGlzIGFmdGVyIHRoZSBmb3JtIHdhcyBzdWJtaXR0ZWQgYW5kIEhUTUwgd2FzIHJldHVybmVkIGZvcm0gdGhlIHNlcnZlclxuICAgICAqXG4gICAgICogIEBwYXJhbSBwYXJzZWRfY29udGVudFxuICAgICAqICBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiAgQHBhcmFtIGZvcm1cbiAgICAgKiAgQHJldHVybnMgeyp8RWxlbWVudHxIVE1MRG9jdW1lbnR9XG4gICAgICovXG4gICAgaW5zZXJ0Rm9ybShwYXJzZWRfY29udGVudCwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICAvL3NlbGVjdG9yIGZvciB3aGVyZSB0aGUgZm9ybSB3aWxsIGdvXG4gICAgICAgIGxldCBlbCA9IHRoaXMuZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKTtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggZWwgPT09IG51bGwgKSB0aHJvdyAnQ2Fubm90IGRldGVybWluZSB3aGVyZSB0byBpbnNlcnQgZm9ybS4gT3ZlcndyaXRlIGluc2VydEZvcm0oKSBvciBwcm92aWRlIGluc2VydEludG9FbGVtZW50JztcblxuICAgICAgICAvL2dldCB0aGUgY29udGFpbmVyIGVsZW1lbnQgLSBlcnJvciBpZiBub3QgZm91bmRcbiAgICAgICAgZWwgPSBkb20uZ2V0RWxlbWVudChlbCwgdHJ1ZSk7XG5cbiAgICAgICAgLy9wdXQgdGhlIGZvcm0gaW4gdGhlIGNvbnRhaW5lciBlbGVtZW50XG4gICAgICAgIGVsLmlubmVySFRNTCA9IHBhcnNlZF9jb250ZW50Lmh0bWw7XG5cbiAgICAgICAgLy9maW5kIHRoZSBuZXdseSBhZGRlZCBmb3JtXG4gICAgICAgIGZvcm0gPSBlbC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG5cbiAgICAgICAgLy9hdHRhY2ggYW4gb24tc3VibWl0IGxpc3RlbmVyIHRvIHNlbmQgdGhlIGZvcm0ncyB2YWx1ZXMgdmlhIFhIUlxuICAgICAgICB0aGlzLmF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSk7XG5cbiAgICAgICAgLy9ydW4gdGhlIG9ubG9hZCBjYWxsYmFjayBub3cgdGhhdCB0aGUgZm9ybSBpcyB0aGVyZVxuICAgICAgICB0aGlzLl90cmlnZ2VyT25sb2FkKGZvcm0pO1xuXG4gICAgICAgIHJldHVybiBlbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVc2UgdGhpcyBtZXRob2QgdG8gbW9kaWZ5IHRoZSBmb3JtIGltbWVkaWF0ZWx5IGFmdGVyIGl0J3MgZGlzcGxheWVkXG4gICAgICpcbiAgICAgKiBZb3UnbGwgbGlrZWx5IHdhbnQgdG8gYXR0YWNoIHBsdWdpbnMgZm9yIGRhdGVwaWNrZXJzL2Ryb3Bkb3ducywgb3IgbWF5YmUgaGlkZSBhIGZpZWxkIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBhbm90aGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBvbmxvYWQoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHRoaXMuX29ubG9hZC5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbmxvYWQgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBjbGVhck9ubG9hZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBfdHJpZ2dlck9ubG9hZChmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29ubG9hZCA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLl9vbmxvYWQuZm9yRWFjaChmdW5jdGlvbihvbmxvYWQpe1xuICAgICAgICAgICAgb25sb2FkKGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQge25hdmlnYXRpb259IGZyb20gXCIuLi9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbnJlcXVpcmUoJ2Zvcm1kYXRhLXBvbHlmaWxsJyk7XG5cbi8vZGVmYXVsdHMgZm9yIHRoZSBYSFJGb3JtIGNsYXNzXG5jb25zdCBYSFJGb3JtRGVmYXVsdHMgPSB7XG4gICAgeGhyU3VibWl0OiB0cnVlLCAvL3N1Ym1pdCB0aGUgZm9ybSB1c2luZyBYSFIgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBhY3Rpb25cbiAgICBzdWJtaXRVUkw6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIHRoZSBVUkwgdGhlIGZvcm0gd2FzIHJldHJpZXZlZCBmcm9tXG4gICAgc3VibWl0TWV0aG9kOm51bGwsIC8vd2lsbCBiZSBncmFiYmVkIGZyb20gdGhlIGZvcm0ncyBtZXRob2QgYXR0cmlidXRlLCBvciBmYWxsYmFjayB0byBcIlBPU1RcIlxuICAgIG9uUHJlU3VibWl0OiBmdW5jdGlvbihmb3JtLCBmb3JtX3ZhbHVlcywgdXJsLCBtZXRob2QpeyAvL2NhbGxlZCByaWdodCBiZWZvcmUgdGhlIHJlcXVlc3QgdG8gdGhlIHNlcnZlclxuICAgICAgICAvL3JldHVybiBmYWxzZTsgLy95b3UgY2FuIHJldHVybiBmYWxzZSB0byBzdG9wIHN1Ym1pc3Npb25cbiAgICAgICAgcmV0dXJuIHtmb3JtX3ZhbHVlczpmb3JtX3ZhbHVlcywgdXJsOnVybCwgbWV0aG9kOm1ldGhvZH07IC8veW91IGNhbiByZXR1cm4gdGhlc2UgaWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhlbSAob3B0aW9uYWwpXG4gICAgfSxcbiAgICBvbkVycm9yOiBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UsIGZvcm0peyBhbGVydChlcnJvcik7IH0sIC8vY2FsbGVkIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIGFuZCBmYWlsc1xuICAgIG9uU3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIGZvcm0peyAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgICAgaWYodHlwZW9mIHJlc3BvbnNlLnN1Y2Nlc3MgPT09IFwic3RyaW5nXCIpeyBhbGVydChyZXNwb25zZS5zdWNjZXNzKTsgfVxuICAgICAgICBlbHNleyBhbGVydChcIllvdXIgc3VibWlzc2lvbiBoYXMgYmVlbiByZWNlaXZlZFwiKTsgfVxuICAgIH0sXG4gICAgLy92YWxpZGF0ZSB0aGUgZm9ybSwgZGlzcGxheSBhbnkgZXJyb3JzIGFuZCByZXR1cm4gZmFsc2UgdG8gYmxvY2sgc3VibWlzc2lvblxuICAgIHZhbGlkYXRlRm9ybTogZnVuY3Rpb24oZm9ybSl7XG4gICAgICAgIC8vYWRkIC53YXMtdmFsaWRhdGVkIGZvciBib290c3RyYXAgdG8gc2hvdyBlcnJvcnNcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgLy9pZiB0aGVyZSBhcmUgYW55IDppbnZhbGlkIGVsZW1lbnRzLCB0aGUgZm9ybSBpcyBub3QgdmFsaWRcbiAgICAgICAgY29uc3QgaXNfdmFsaWQgPSAhZm9ybS5xdWVyeVNlbGVjdG9yKCc6aW52YWxpZCcpO1xuXG4gICAgICAgIC8vaWYgaXQncyB2YWxpZCwgY2xlYXIgdGhlIHZhbGlkYXRpb24gaW5kaWNhdG9yc1xuICAgICAgICBpZiggaXNfdmFsaWQgKSBmb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3dhcy12YWxpZGF0ZWQnKTtcblxuICAgICAgICByZXR1cm4gaXNfdmFsaWQ7XG4gICAgfVxufTtcblxuLyoqXG4gKiBYSFJGb3JtXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIHN1Ym1pdCBhIGZvcm0gdmlhIFhIUiBhbmQgZWFzaWx5IGhhbmRsZSB0aGUgcmVzdWx0c1xuICovXG5leHBvcnQgY2xhc3MgWEhSRm9ybSB7XG5cbiAgICAvKipcbiAgICAgKiBGb3JtIGNhbiBiZSBqdXN0IGFib3V0IGFueSBkYXRhdHlwZSAtIHVzZXMgZG9tLmdldEVsZW1lbnQoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGZvcm0sIG9wdGlvbnMgPSB7fSkge1xuXG4gICAgICAgIC8vaWYgb3B0aW9ucyBhcmUgdW5kZWZpbmVkLCBzZXQgdGhlbVxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgfHwgb3B0aW9ucyA9PT0gbnVsbCkgdGhyb3cgYCR7b3B0aW9uc30gbXVzdCBiZSBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vZXh0ZW5kIGRlZmF1bHRzIHdpdGggcHJvdmlkZWQgb3B0aW9uc1xuICAgICAgICBvcHRpb25zID0gey4uLlhIUkZvcm1EZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRGb3JtKGZvcm0pO1xuICAgICAgICB0aGlzLnNldFZhbGlkYXRlQ2FsbGJhY2sob3B0aW9ucy52YWxpZGF0ZUZvcm0pO1xuICAgICAgICB0aGlzLnNldFhIUlN1Ym1pdChvcHRpb25zLnhoclN1Ym1pdCk7XG4gICAgICAgIHRoaXMuc2V0UHJlU3VibWl0Q2FsbGJhY2sob3B0aW9ucy5vblByZVN1Ym1pdCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0TWV0aG9kKG9wdGlvbnMuc3VibWl0TWV0aG9kKTtcbiAgICAgICAgdGhpcy5zZXRTdWJtaXRVUkwob3B0aW9ucy5zdWJtaXRVUkwpO1xuICAgICAgICB0aGlzLm9uU3VjY2VzcyhvcHRpb25zLm9uU3VjY2Vzcyk7XG4gICAgICAgIHRoaXMub25FcnJvcihvcHRpb25zLm9uRXJyb3IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgc2V0VmFsaWRhdGVDYWxsYmFjayhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaCBhIHByZS1zdWJtaXQgaGFuZGxlciAob25seSBvbmUgYWxsb3dlZClcbiAgICAgKi9cbiAgICBzZXRQcmVTdWJtaXRDYWxsYmFjayhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgJiYgY2FsbGJhY2sgIT09IG51bGwgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9wcmVTdWJtaXQgPSBjYWxsYmFjaztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUnVucyB0aGUgdmFsaWRhdGUgY2FsbGJhY2sgYW5kIHBhc3NlcyB0aGUgZm9ybVxuICAgICAqXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgdmFsaWRhdGUoZm9ybSl7XG4gICAgICAgIGlmKCB0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIiApIGZvcm0gPSB0aGlzLmdldEZvcm0oKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlQ2FsbGJhY2soZm9ybSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBmb3JtIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgc2V0Rm9ybShmb3JtKXtcbiAgICAgICAgaWYoICFmb3JtIHx8IHR5cGVvZiBmb3JtID09PSAndW5kZWZpbmVkJyApIHRocm93IGBGb3JtIGVsZW1lbnQgaXMgcmVxdWlyZWRgO1xuXG4gICAgICAgIGZvcm0gPSBkb20uZ2V0RWxlbWVudChmb3JtLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgaWYoICFmb3JtICkgdGhyb3cgYEludmFsaWQgZm9ybSBlbGVtZW50IHJlY2VpdmVkYDtcblxuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGZvcm0gZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8RWxlbWVudHxIVE1MRG9jdW1lbnR9XG4gICAgICovXG4gICAgZ2V0Rm9ybSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB5b3Ugd2FudCB0aGUgZm9ybSB0byBiZSBzdWJtaXR0ZWQgdXNpbmcgYW4gWEhSIHJlcXVlc3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbmFibGVkIC0gYm9vbFxuICAgICAqL1xuICAgIHNldFhIUlN1Ym1pdChlbmFibGVkKXtcbiAgICAgICAgdGhpcy5feGhyU3VibWl0ID0gISFlbmFibGVkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIb3cgdG8gc3VibWl0IHRoZSBmb3JtIC0gaWYgc2V0IHRvIG51bGwsIHRoZSBtZXRob2Qgd2lsbCBiZSBwdWxsZWQgZnJvbSB0aGUgZm9ybSdzXG4gICAgICogIG1ldGhvZCBhdHRyaWJ1dGUgb3IgZmFsbGJhY2sgdG8gXCJQT1NUXCJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBtZXRob2RcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBzZXRTdWJtaXRNZXRob2QobWV0aG9kKXtcbiAgICAgICAgaWYoIHR5cGVvZiBtZXRob2QgIT09IFwic3RyaW5nXCIgJiYgbWV0aG9kICE9PSBudWxsICkgdGhyb3cgYCR7bWV0aG9kfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9zdWJtaXRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZvcm0gc3VibWlzc2lvbiBtZXRob2QgKFBPU1QsIEdFVCwgZXRjKVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdE1ldGhvZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0TWV0aG9kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgdG8gc3VibWl0IHRoZSBmb3JtIHRvXG4gICAgICpcbiAgICAgKiBJZiBudWxsLCB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFVzZSBhIGZ1bmN0aW9uIGlmIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHRoZSBVUkwganVzdCBwcmlvciB0byB0aGUgcmVxdWVzdFxuICAgICAqICAtIHRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdGhlIGZvcm0gYXMgYSBwYXJhbVxuICAgICAqIEdlbmVyYWxseSBzcGVha2luZyBhIHN0cmluZyBpcyBzdWZmaWNpZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0VVJMKHVybCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAmJiB0eXBlb2YgdXJsICE9PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICYmIHVybCAhPT0gbnVsbCApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZywgZnVuY3Rpb24sIG9yIG51bGxgO1xuXG4gICAgICAgIHRoaXMuX3N1Ym1pdFVSTCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgVVJMIHRoZSBmb3JtIHdpbGwgYmUgc3VibWl0dGVkIHRvXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd8Kn1cbiAgICAgKi9cbiAgICBnZXRTdWJtaXRVUkwoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBhY3R1YWwgc3VibWl0IFVSTCBhZnRlciBydW5uaW5nIHRoZSBmdW5jdGlvbiAoaWYgaXQgaXMgb25lKSwgYW5kIHR1cm5pbmcgdG8gZmFsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGaW5hbFN1Ym1pdFVSTChmb3JtKXtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0U3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgYSBmdW5jdGlvbiwgcnVuIGl0XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fc3VibWl0VVJMID09PSBcImZ1bmN0aW9uXCIgKSByZXR1cm4gdGhpcy5fc3VibWl0VVJMKGZvcm0pO1xuXG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgcmV0dXJuIGZvcm0uYWN0aW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVybDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyB0aGUgb24gc3VibWl0IGhhbmRsZXIgKG9ubHkgaWYgeGhyU3VibWl0IGlzIHRydWUpXG4gICAgICpcbiAgICAgKiBQYXNzIHRoZSBmb3JtIG9yIGZvcm0gc2VsZWN0b3JcbiAgICAgKi9cbiAgICBhdHRhY2hTdWJtaXRIYW5kbGVyKGZvcm0pe1xuICAgICAgICBpZiggIXRoaXMuX3hoclN1Ym1pdCApIHJldHVybjtcblxuICAgICAgICAvL2lmIG5vdCBwYXNzZWQsIGdldCBpdCBmcm9tIHRoaXMgb2JqZWN0XG4gICAgICAgIGlmKCB0eXBlb2YgZm9ybSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcbiAgICAgICAgICAgIGZvcm0gPSB0aGlzLmdldEZvcm0oKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgZm9ybSA9IGRvbS5nZXRFbGVtZW50KGZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFmb3JtICkgdGhyb3cgYEZvcm0gZWxlbWVudCBub3QgcmVjZWl2ZWQsIGNhbm5vdCBhdHRhY2ggc3VibWl0IGhhbmRsZXJgO1xuXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAvL2lmIHhociBzdWJtaXQgaXMgZGlzYWJsZWQsIGRvbid0IGJsb2NrIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgICAgICAgICAgaWYoICFzZWxmLl94aHJTdWJtaXQgKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHNlbGYuc3VibWl0Rm9ybShmb3JtKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAqXG4gICAgICogWW91ciBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgMiBwYXJhbXMsIHRoZSBmaXJzdCBpcyB0aGUgcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBmb3JtIG9uIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7Zm9ybX1cbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vblN1Y2Nlc3MgPT09IFwidW5kZWZpbmVkXCIgKSB0aGlzLl9vblN1Y2Nlc3MgPSBbXTtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBvblN1Y2Nlc3MgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKi9cbiAgICBjbGVhck9uU3VjY2Vzc0NhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcnVuIHdoZW4gdGhlIGZvcm0gaXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge0Zvcm1Gcm9tVVJMfVxuICAgICAqL1xuICAgIG9uRXJyb3IoY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gbXVzdCBiZSBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICB0aGlzLl9vbkVycm9yLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9uRXJyb3IgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBjbGVhck9uRXJyb3JDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHJlc3BvbnNlXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICBfdHJpZ2dlck9uU3VjY2VzcyhyZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIGlmKHR5cGVvZiB0aGlzLl9vblN1Y2Nlc3MgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uU3VjY2Vzcy5mb3JFYWNoKGZ1bmN0aW9uKG9uU3VjY2Vzcyl7XG4gICAgICAgICAgICBvblN1Y2Nlc3MocmVzcG9uc2UsIGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlcnMgdGhlIG9uRXJyb3IgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIF90cmlnZ2VyT25FcnJvcihlcnJvciwgcmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25FcnJvciA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiBmYWxzZTtcbiAgICAgICAgdGhpcy5fb25FcnJvci5mb3JFYWNoKGZ1bmN0aW9uKG9uRXJyb3Ipe1xuICAgICAgICAgICAgb25FcnJvcihlcnJvciwgcmVzcG9uc2UsIGZvcm0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0cyB0aGUgZm9ybSB1c2luZyBYSFJcbiAgICAgKlxuICAgICAqIDEpIERldGVybWluZXMgdGhlIFVSTFxuICAgICAqIDIpIERldGVybWluZXMgdGhlIG1ldGhvZCAoR0VULCBQT1NULCBQQVRDSCwgZXRjKVxuICAgICAqIDMpIERldGVybWluZXMgaWYgdGhlIGZvcm0gaXMgdmFsaWRcbiAgICAgKiA0KSBHZXRzIHRoZSBmb3JtJ3MgdmFsdWVzXG4gICAgICogNSkgU3VibWl0cyB0aGUgZm9ybVxuICAgICAqIDYpIFJlcGxhY2VzIHRoZSBmb3JtLCBydW5zIG9uRXJyb3IsIG9yIHJ1bnMgb25TdWNjZXNzIGJhc2VkIG9uIHRoZSByZXNwb25zZSAoc2VlIG5leHQgbGluZSlcbiAgICAgKiAgUmVzcG9uc2UgVHlwZSA9IEFjdGlvbiBUYWtlblxuICAgICAqICAgIHN0cmluZyBodG1sIHdpdGggZm9ybSBpbnNpZGUgPSByZXBsYWNlIGZvcm1cbiAgICAgKiAgICBzdHJpbmcgaHRtbCB3aXRoIGluY29taW5nRWxlbWVudFNlbGVjdG9yIHNldCwgYnV0IG5vdCBmb3VuZCA9IGtpY2tvZmYgb25FcnJvclxuICAgICAqICAgIHN0cmluZyAtIHJlcGxhY2UgZm9ybSBvbiBwYWdlIHdpdGggZW50aXJlIHJlc3BvbnNlXG4gICAgICogICAgb2JqZWN0Lmh0bWwgPSByZXBsYWNlIGZvcm1cbiAgICAgKiAgICBvYmplY3QuZXJyb3IgPSBraWNrb2ZmIG9uRXJyb3JcbiAgICAgKiAgICBvYmplY3QgaW4gZ2VuZXJhbCA9IGtpY2tvZmYgb25TdWNjZXNzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtmb3JtfGJvb2xlYW59XG4gICAgICovXG4gICAgc3VibWl0Rm9ybShmb3JtKSB7XG4gICAgICAgIC8vYmxvY2sgbXVsdGlwbGUgZm9ybSBzdWJtaXNzaW9ucyBhdCB0aGUgc2FtZSB0aW1lIHVudGlsIHRoaXMgb25lIGlzIGNvbXBsZXRlXG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fcHJvY2Vzc2luZyA9PT0gXCJ1bmRlZmluZWRcIiApIHRoaXMuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYoIHRoaXMuX3Byb2Nlc3NpbmcgKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcHJvY2Vzc2luZyA9IHRydWU7XG5cbiAgICAgICAgLy9jYWNoZSBmb3IgdXNlIGluc2lkZSBvdGhlciBzY29wZXNcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy9nZXQgdGhlIHByb3ZpZGVkIHN1Ym1pdCBVUkxcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0RmluYWxTdWJtaXRVUkwoZm9ybSk7XG5cbiAgICAgICAgLy9nZXQgdGhlIHByb3ZpZGVkIHN1Ym1pdCBtZXRob2RcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuZ2V0U3VibWl0TWV0aG9kKCk7XG4gICAgICAgIC8vaWYgaXQncyBudWxsLCBncmFiIGl0IGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIG1ldGhvZCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBmb3JtLmF0dHJpYnV0ZXMubWV0aG9kICE9PSAndW5kZWZpbmVkJyApeyAvL2NoZWNrIHRoYXQgaXQgd2FzIHNldCBleHBsaWNpdGx5XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZm9ybS5tZXRob2Q7IC8vZ3JhYiBKVVNUIHRoZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZGVmYXVsdCB0byBwb3N0IGlmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSBtZXRob2QgYW5kIGxvd2VyY2FzZSBhbnl0aGluZyB0aGF0IHdhcyBwcm92aWRlZFxuICAgICAgICBtZXRob2QgPSAhbWV0aG9kID8gJ3Bvc3QnIDogbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy9pZiBub3QgdmFsaWQsIHN0b3AgaGVyZSB1bnRpbCB0aGV5IHJlc3VibWl0XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZShmb3JtKSl7XG4gICAgICAgICAgICB0aGlzLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcblxuICAgICAgICAvL2dldCBmb3JtIHZhbHVlc1xuICAgICAgICBsZXQgZm9ybV92YWx1ZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgdGhpcy5nZXRGb3JtVmFsdWVzKGZvcm0pLFxuICAgICAgICAgICAgZSA9PiBlLm1hcChlbmNvZGVVUklDb21wb25lbnQpLmpvaW4oJz0nKVxuICAgICAgICApLmpvaW4oJyYnKTtcblxuICAgICAgICAvL3J1biB0aGUgcHJlU3VibWl0IGNhbGxiYWNrIChpZiBpdCBleGlzdHMpLCBhbmQgc3RvcCBpZiBpdCByZXR1cm5zIGZhbHNlXG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fcHJlU3VibWl0ID09PSAnZnVuY3Rpb24nICkge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3ByZVN1Ym1pdChmb3JtLCBmb3JtX3ZhbHVlcywgdXJsLCBtZXRob2QpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdib29sZWFuJyAmJiAhcmVzdWx0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcgJiYgcmVzdWx0LnVybCkgdXJsID0gcmVzdWx0LnVybDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0JyAmJiByZXN1bHQubWV0aG9kKSBtZXRob2QgPSByZXN1bHQubWV0aG9kO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdC5mb3JtX3ZhbHVlcykgZm9ybV92YWx1ZXMgPSByZXN1bHQuZm9ybV92YWx1ZXM7XG4gICAgICAgIH1cblxuICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgZGF0YTogZm9ybV92YWx1ZXMsXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICAvL2p1c3QgaW4gY2FzZSB0aGUgc2VydmVyIHJldHVybmVkIHRoZSB3cm9uZyByZXNwb25zZSB0eXBlIGFuZCBpdCdzIGFjdHVhbGx5IEpTT04gLSBpZ25vcmUgZXJyb3JzXG4gICAgICAgICAgICB0cnl7IGRhdGEgPSB0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycgPyBKU09OLnBhcnNlKGRhdGEpIDogZGF0YTsgfSBjYXRjaChlKXsgfVxuXG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhIHN0cmluZywgaXQncyBwcm9iYWJseS9ob3BlZnVsbHkgdGhlIGZvcm0gd2l0aCBpbmxpbmUgZXJyb3JzXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgLy9pZiB3ZSBhcmUgbG9va2luZyBmb3IgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5fcGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIGZvcm0gd2FzIG5vdCBmb3VuZCBpbiBpdCwgbGV0J3MgYXNzdW1lIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZm9ybS4gSWYgbm90LCB0aGVuIG1heWJlXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhcGFyc2VkLmh0bWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fdHJpZ2dlck9uRXJyb3IoYCR7c2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpfSBjb3VsZCBub3QgYmUgZm91bmQgaW4gcmVzcG9uc2UgZnJvbSB0aGUgc2VydmVyYCwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9wcm92aWRlIHRoZSBmb3JtJ3MgSFRNTCBpbiBhbiBvYmplY3QgY29udGFpbmluZyBvdGhlciBkZXRhaWxzIGxpa2UgdGhlIHJvdXRlIGFuZCB0aGUgZnVsbCByZXNwb25zZSB0byBpbnNlcnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0ocGFyc2VkLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhfSwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhbiBvYmplY3QsIGl0J3MgcHJvYmFibHkgSlNPTlxuICAgICAgICAgICAgZWxzZSBpZiggdHlwZW9mIGRhdGEgPT09ICdvYmplY3QnICYmIGRhdGEgIT09IG51bGwgKXtcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIHRoZSBIVE1MLCBqdXN0IHBvcCBpdCBiYWNrIG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgaWYoIGRhdGEuaHRtbCApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW4gZXJyb3IgbWVzc2FnZSwgdHJpZ2dlciB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5lcnJvciApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fdHJpZ2dlck9uRXJyb3IoZGF0YS5lcnJvciwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9pZiBpdCBkb2Vzbid0IEFQUEVBUiB0byBiZSB0aGUgZm9ybSBhZ2Fpbiwgb3IgYW4gZXJyb3IsIGxldCdzIGNhbGwgaXQgYSBzdWNjZXNzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX3RyaWdnZXJPblN1Y2Nlc3MoZGF0YSwgZm9ybSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICBzZWxmLl9wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiBlcnJvci5pc0F4aW9zRXJyb3IgKSBlcnJvciA9IGVycm9yLnJlc3BvbnNlLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICBzZWxmLl90cmlnZ2VyT25FcnJvcihlcnJvciwgZGF0YSwgZm9ybSk7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYmplY3QgY29udGFpbmluZyBhbGwgZm9ybSB2YWx1ZXMgdG8gYmUgc3VibWl0dGVkXG4gICAgICpcbiAgICAgKiBPdmVycmlkZS9leHRlbmQgdGhpcyBpZiB5b3Ugd2FudCB0byBtYW5pcHVsYXRlIHRoZSBkYXRhIHByaW9yIHRvIHN1Ym1pc3Npb25cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIEZvcm1EYXRhXG4gICAgICovXG4gICAgZ2V0Rm9ybVZhbHVlcyhmb3JtKXtcbiAgICAgICAgcmV0dXJuIG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICB9XG59IiwiaW1wb3J0IHtYSFJGb3JtfSBmcm9tIFwiLi9YSFJGb3JtXCI7XG5pbXBvcnQge0Zvcm1Gcm9tVVJMfSBmcm9tIFwiLi9Gb3JtRnJvbVVSTFwiO1xuXG5leHBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vcmVxdWVzdFwiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2Nsb25lXCI7XG5pbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcblxuY29uc3QgbmF2aWdhdGlvbkRlZmF1bHRzID0ge1xuICAgIHRyYWNrSGlzdG9yeTpmYWxzZSxcbiAgICBwdXNoU3RhdGU6dHJ1ZSxcbiAgICBsb2FkZXJFbmFibGVkOnRydWUsXG4gICAgbG9hZGVyRGVsYXk6MzAwLFxuICAgIGluY29taW5nRWxlbWVudDonYm9keScsXG4gICAgcmVwbGFjZUVsZW1lbnQ6J2JvZHknLFxuICAgIGxvYWRlckNsYXNzZXM6J3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIGxvYWRlcklubmVyRGl2Q2xhc3NlczoncHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZCcsXG59O1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gc2ltdWxhdGUgYSBwYWdlIGNoYW5nZSBieSB1c2luZyBhbiBYSFIgcmVxdWVzdCB0byBncmFiIGNvbnRlbnQgYW5kIHJlcGxhY2UgaXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgYnJvd3NlcidzIGhpc3RvcnksIHN3YXBzIG91dCBtZXRhIHRhZ3MsIHVwZGF0ZXMgdGhlIHRpdGxlLCBhbmQgbW9yZVxuICpcbiAqIFVzZSBvbmxvYWQgYW5kIG9uVW5sb2FkIGhvb2tzIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGZvciB0aGluZ3MgbGlrZSB0cmlnZ2VyaW5nIGEgZ29vZ2xlIGFuYWx5dGljcyBwYWdlIHZpZXdcbiAqICBvciBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyBjb25maWcgb3B0aW9ucyBpbiBidWxrIGJ5IGV4dGVuZGluZyB0aGUgY3VycmVudCB2YWx1ZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMgdGhpc1xuICAgICAqL1xuICAgIHNldENvbmZpZzogZnVuY3Rpb24oZGF0YSA9IHt9KXtcbiAgICAgICAgZGF0YSA9IHsuLi50aGlzLmdldENvbmZpZygpLCAuLi5kYXRhfTtcblxuICAgICAgICB0aGlzLnRyYWNrSGlzdG9yeSA9IGRhdGEudHJhY2tIaXN0b3J5O1xuICAgICAgICB0aGlzLnB1c2hTdGF0ZSA9IGRhdGEucHVzaFN0YXRlO1xuICAgICAgICB0aGlzLmxvYWRlckVuYWJsZWQgPSBkYXRhLmxvYWRlckVuYWJsZWQ7XG5cbiAgICAgICAgdGhpcy5zZXRMb2FkZXJEZWxheShkYXRhLmxvYWRlckRlbGF5KTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnQoZGF0YS5pbmNvbWluZ0VsZW1lbnQpO1xuICAgICAgICB0aGlzLnNldFJlcGxhY2VFbGVtZW50KGRhdGEucmVwbGFjZUVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuX2xvYWRlckNsYXNzZXMgPSBkYXRhLmxvYWRlckNsYXNzZXM7XG4gICAgICAgIHRoaXMuX2xvYWRlcklubmVyRGl2Q2xhc3NlcyA9IGRhdGEubG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgY29uZmlnIHRvIGRlZmF1bHRzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB0aGlzO1xuICAgICAqL1xuICAgIHJlc2V0Q29uZmlnOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnNldENvbmZpZyhuYXZpZ2F0aW9uRGVmYXVsdHMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYmFzaWMgY29uZmlnIG9wdGlvbnMgYXMgYW4gb2JqZWN0XG4gICAgICogQHJldHVybnMge3tsb2FkZXJJbm5lckRpdkNsYXNzZXM6ICgqfHN0cmluZyksIHB1c2hTdGF0ZTogKiwgbG9hZGVyRGVsYXk6ICosIGxvYWRlckNsYXNzZXM6IHN0cmluZywgdHJhY2tIaXN0b3J5OiAqLCBsb2FkZXJFbmFibGVkOiAqLCByZXBsYWNlRWxlbWVudDogKCp8c3RyaW5nKSwgaW5jb21pbmdFbGVtZW50OiAoKnxzdHJpbmcpfX1cbiAgICAgKi9cbiAgICBnZXRDb25maWc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0cmFja0hpc3Rvcnk6dGhpcy50cmFja0hpc3RvcnksXG4gICAgICAgICAgICBwdXNoU3RhdGU6dGhpcy5wdXNoU3RhdGUsXG4gICAgICAgICAgICBsb2FkZXJFbmFibGVkOnRoaXMubG9hZGVyRW5hYmxlZCxcbiAgICAgICAgICAgIGxvYWRlckRlbGF5OnRoaXMuZ2V0TG9hZGVyRGVsYXkoKSxcbiAgICAgICAgICAgIGluY29taW5nRWxlbWVudDp0aGlzLmdldEluY29taW5nRWxlbWVudCgpLFxuICAgICAgICAgICAgcmVwbGFjZUVsZW1lbnQ6dGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpLFxuICAgICAgICAgICAgbG9hZGVyQ2xhc3Nlczp0aGlzLl9sb2FkZXJDbGFzc2VzLFxuICAgICAgICAgICAgbG9hZGVySW5uZXJEaXZDbGFzc2VzOnRoaXMuX2xvYWRlcklubmVyRGl2Q2xhc3Nlc1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIG9yIG5vdCB0byBrZWVwIHRyYWNrIG9mIHRoZSBwYWdlcyB0aGF0IHdlcmUgbG9hZGVkIGluIGFuIGFycmF5XG4gICAgICovXG4gICAgdHJhY2tIaXN0b3J5OiBuYXZpZ2F0aW9uRGVmYXVsdHMudHJhY2tIaXN0b3J5LFxuICAgIFxuICAgIC8qKlxuICAgICAqIEdyYWJzIGFsbCBwYWdlcyB0aGF0IHdlcmUgbG9hZGVkIHByZXZpb3VzbHkgKGRvZXMgbm90IHBlcnNpc3QgaWYgdGhlIHBhZ2UgaXMgcmVsb2FkZWQpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7Kn1cbiAgICAgKi9cbiAgICBnZXRIaXN0b3J5OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2hpc3RvcnkpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgbGFzdCBwYWdlJ3MgdXJsIGFuZCByb3V0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMge1R9XG4gICAgICovXG4gICAgZ2V0TGFzdEhpc3RvcnlSZWNvcmQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3RvcnkucG9wKCk7XG4gICAgfSxcbiAgICBfYWRkSGlzdG9yeUl0ZW0odXJsLCByb3V0ZSl7XG4gICAgICAgIGlmKCAhdGhpcy50cmFja0hpc3RvcnkgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGAke3VybH0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlID09PSBcInVuZGVmaW5lZFwiID8gdGhpcy5nZXRSb3V0ZUZyb21NZXRhKCkgOiByb3V0ZTtcbiAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKHsndXJsJzp1cmwsICdyb3V0ZSc6cm91dGV9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBfaGlzdG9yeTogW10sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZSdzIG9ubG9hZCBjYWxsYmFja1xuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbmxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXREYXRhOiBmdW5jdGlvbiAoZGF0YSA9IHt9KSB7XG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSAhPT0gJ29iamVjdCcgfHwgZGF0YSA9PT0gbnVsbCApIHRocm93IGAke2RhdGF9IG11c3QgYmUgYW4gb2JqZWN0YDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGNsb25lLmdldFZhbHVlT3JDbG9uZShkYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBkYXRhXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBvYmplY3RcbiAgICAgKi9cbiAgICBnZXREYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fZGF0YSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgc2luZ2xlIHZhbHVlIGluIHlvdXIgZGF0YSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBrZXlcbiAgICAgKiBAcGFyYW0gdmFsXG4gICAgICovXG4gICAgc2V0RGF0YUl0ZW06IGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fZGF0YVtrZXldID0gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHZhbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogR2V0cyBhIHNpbmdsZSB2YWx1ZSBmcm9tIHlvdXIgZGF0YSBvYmplY3Qgb3IgaWYgaXQgZG9lc24ndCBleGlzdCBpdCdsbCByZXR1cm4gbnVsbFxuICAgICAqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIG1peGVkXG4gICAgICovXG4gICAgZ2V0RGF0YUl0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIC8vaWYgbm90IGRlZmluZWQgb3IgbnVsbCwgcmV0dXJuIG51bGxcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9kYXRhW2tleV0gPT09ICd1bmRlZmluZWQnIHx8IHRoaXMuX2RhdGFba2V5XSA9PT0gbnVsbCApIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2RhdGFba2V5XSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGRhdGFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldERhdGEoe30pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhIHNpbmdsZSB2YWx1ZVxuICAgICAqXG4gICAgICogQHBhcmFtIGtleVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyRGF0YUl0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fZGF0YVtrZXldICE9PSAndW5kZWZpbmVkJyApe1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2RhdGFba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIF9kYXRhOiB7fSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5faW5jb21pbmdFbGVtZW50ID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG4gICAgX2luY29taW5nRWxlbWVudDogbmF2aWdhdGlvbkRlZmF1bHRzLmluY29taW5nRWxlbWVudCxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBzZWxlY3RvciBzdHJpbmcgZm9yIHRoZSBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2UgdGhhdCB3aWxsIGJlIHJlcGxhY2VkIHdpdGggaW5jb21pbmcgSFRNTFxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoc2VsZWN0b3Jfc3RyaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJykgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUVsZW1lbnQgPSBzZWxlY3Rvcl9zdHJpbmc7XG4gICAgfSxcbiAgICBfcmVwbGFjZUVsZW1lbnQ6IG5hdmlnYXRpb25EZWZhdWx0cy5yZXBsYWNlRWxlbWVudCxcbiAgICAvKipcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdG8gcHVzaCB0aGUgcGFnZSB0aGF0IHdhcyBsb2FkZWQgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICovXG4gICAgcHVzaFN0YXRlOiBuYXZpZ2F0aW9uRGVmYXVsdHMucHVzaFN0YXRlLFxuXG4gICAgLyoqXG4gICAgICogR3JhYnMgSFRNTCBmcm9tIGEgVVJMIGFuZCByZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIDEpIFNob3dzIGEgbG9hZGVyIChpZiBlbmFibGVkKVxuICAgICAqIDIpIFJlcXVlc3RzIGNvbnRlbnQgZnJvbSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgICogMykgUmVwbGFjZXMgaXQgb24gdGhlIHBhZ2UgKGFuZCBhbGwgdGhlIG1hZ2ljIHJlcGxhY2VQYWdlQ29udGVudCBkb2VzLCBzZWUgY29tbWVudHMgb24gdGhhdCBtZXRob2QgYmVsb3cpXG4gICAgICogNCkgSWYgdGhlcmUncyBhIGNhbGxiYWNrIHByb3ZpZGVkLCBpdCdsbCBiZSBydW4gYWZ0ZXJ3YXJkcyAoaXQgcmVjZWl2ZXMgdGhlIG5ld2x5IHJlcGxhY2VkIGVsZW1lbnQgYXMgYSBwYXJhbSlcbiAgICAgKlxuICAgICAqIE9uIGVycm9yLCBpdCB0cmlnZ2VycyBvbkZhaWwgY2FsbGJhY2tzIHlvdSd2ZSBhdHRhY2hlZCBhbmQgcHJvdmlkZXMgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqIEBwYXJhbSBvbmxvYWRcbiAgICAgKiBAcGFyYW0gb3B0aW9uczp7aW5jb21pbmdFbGVtZW50LCByZXBsYWNlRWxlbWVudCwgcHVzaFN0YXRlfVxuICAgICAqL1xuICAgIGxvYWQ6IGZ1bmN0aW9uICh1cmwsIGRhdGEgPSB7fSwgb25sb2FkLCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLy92YWxpZGF0ZSBvcHRpb25zIGhhcyB0aGVzZSBrZXlzIChvciBub25lIGF0IGFsbClcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KG9wdGlvbnMsIFsnaW5jb21pbmdFbGVtZW50JywgJ3JlcGxhY2VFbGVtZW50JywgJ3B1c2hTdGF0ZSddLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9vdmVycmlkZSBnbG9iYWwgZGF0YSB3aXRoIHBhc3NlZCBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4uc2VsZi5nZXREYXRhKCksIC4uLmRhdGF9O1xuXG4gICAgICAgIC8vc2V0IHZhbHVlc1xuICAgICAgICBjb25zdCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLmluY29taW5nRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIiA/IG9wdGlvbnMuaW5jb21pbmdFbGVtZW50IDogdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgcmVwbGFjZUVsZW1lbnRTZWxlY3RvciA9IHR5cGVvZiBvcHRpb25zLnJlcGxhY2VFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy5yZXBsYWNlRWxlbWVudCA6IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKTtcbiAgICAgICAgY29uc3QgcmVwbGFjZUVsZW1lbnQgPSBkb20uZ2V0RWxlbWVudChyZXBsYWNlRWxlbWVudFNlbGVjdG9yLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcHVzaFN0YXRlID0gdHlwZW9mIG9wdGlvbnMucHVzaFN0YXRlICE9PSBcInVuZGVmaW5lZFwiID8gb3B0aW9ucy5wdXNoU3RhdGUgOiB0aGlzLnB1c2hTdGF0ZTtcblxuICAgICAgICAvL2NhY2hlIHJvdXRlIChheGlvcyBpcyBhc3luYylcbiAgICAgICAgY29uc3QgY3VycmVudF9yb3V0ZSA9IHNlbGYuZ2V0Um91dGVGcm9tTWV0YSgpO1xuXG4gICAgICAgIC8vcnVuIG9uQmVmb3JlUmVxdWVzdCBjYWxsYmFja3MgYW5kIGlmIGFueSByZXR1cm4gZmFsc2UsIGRvbid0IHNlbmQgdGhlIHJlcXVlc3RcbiAgICAgICAgaWYoICFzZWxmLl90cmlnZ2VyT25CZWZvcmVSZXF1ZXN0KHJlcGxhY2VFbGVtZW50LCByZXBsYWNlRWxlbWVudFNlbGVjdG9yLCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciwgY3VycmVudF9yb3V0ZSwgZGF0YSkgKXtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBzZWxmLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIHNlbGYuX3JlcGxhY2VQYWdlQ29udGVudChyZXNwb25zZS5kYXRhLCB1cmwsIGluY29taW5nRWxlbWVudFNlbGVjdG9yLCByZXBsYWNlRWxlbWVudFNlbGVjdG9yLCBwdXNoU3RhdGUsIGN1cnJlbnRfcm91dGUsIGRhdGEsIG9ubG9hZCk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgc2VsZi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIC8vYXQgdGhpcyBwb2ludCwgaXQgY2FuIG9ubHkgYmUgYSBzdHJpbmcgZXJyb3IgbWVzc2FnZSBvciBhbiBheGlvcyBlcnJvciBvYmplY3RcbiAgICAgICAgICAgIC8vc28gc2V0IGJvdGggdmFsdWVzIGFjY29yZGluZ2x5XG4gICAgICAgICAgICBjb25zdCBheGlvc19lcnJvciA9IHR5cGVvZiBlcnJvciA9PT0gXCJvYmplY3RcIiAmJiBlcnJvciAhPT0gbnVsbCAmJiBlcnJvci5pc0F4aW9zRXJyb3IgPyBlcnJvciA6IG51bGw7XG4gICAgICAgICAgICBlcnJvciA9IGF4aW9zX2Vycm9yICE9PSBudWxsID8gYXhpb3NfZXJyb3IucmVzcG9uc2Uuc3RhdHVzVGV4dCA6IGVycm9yO1xuXG4gICAgICAgICAgICBzZWxmLl90cmlnZ2VyRmFpbChlcnJvciwgdXJsLCBkYXRhLCBheGlvc19lcnJvcik7XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgb3Igbm90IHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBpcyBlbmFibGVkIHRvIGRpc3BsYXkgb24gc2xvdyByZXF1ZXN0c1xuICAgICAqL1xuICAgIGxvYWRlckVuYWJsZWQ6IG5hdmlnYXRpb25EZWZhdWx0cy5sb2FkZXJFbmFibGVkLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBob3cgbG9uZyB0byBkZWxheSBkdXJpbmcgYSBzbG93IHJlcXVlc3QgYmVmb3JlIHNob3dpbmcgdGhlIGxvYWRlciAoaW4gbWlsbGlzZWNvbmRzKVxuICAgICAqXG4gICAgICogU2V0IHRvIDAgaWYgeW91IHdhbnQgaXQgdG8gYWx3YXlzIHNob3dcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkZWxheV9pbl9tc1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldExvYWRlckRlbGF5OiBmdW5jdGlvbiAoZGVsYXlfaW5fbXMgPSAzMDApIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkZWxheV9pbl9tcyAhPT0gXCJudW1iZXJcIikgdGhyb3cgYCR7ZGVsYXlfaW5fbXN9IG11c3QgYmUgYW4gaW50ZWdlcmA7XG4gICAgICAgIHRoaXMuX2xvYWRlckRlbGF5ID0gZGVsYXlfaW5fbXM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgX2xvYWRlckRlbGF5OiBuYXZpZ2F0aW9uRGVmYXVsdHMubG9hZGVyRGVsYXksXG4gICAgZ2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRlckRlbGF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIHNlbGYubG9hZGVyX3RpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLl9nZXRMb2FkZXJFbCgpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9LCBzZWxmLmdldExvYWRlckRlbGF5KCkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBIaWRlcyB0aGUgbG9hZGVyIGF0IHRoZSB0b3Agb2YgdGhlIHBhZ2VcbiAgICAgKi9cbiAgICBoaWRlTG9hZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgdGhlIGxvYWRlciBzdGlsbCBoYXNuJ3Qgc2hvd24geWV0LCBwcmV2ZW50IGl0IGJlY2F1c2UgdGhlIHJlcXVlc3Qgd2FzIHZlcnkgZmFzdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHNlbGYubG9hZGVyX3RpbWVvdXQpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgbG9hZGVyXG4gICAgICAgIHNlbGYuX2dldExvYWRlckVsKCkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsYXNzZXMgZm9yIHRoZSBsb2FkZXJcbiAgICAgKiBEZWZhdWx0cyBhcmUgZm9yIGJvb3RzdHJhcCAod2l0aCB0aGUgZXhjZXB0aW9uIG9mIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXIpXG4gICAgICovXG4gICAgX2xvYWRlckNsYXNzZXM6IG5hdmlnYXRpb25EZWZhdWx0cy5sb2FkZXJDbGFzc2VzLFxuICAgIF9sb2FkZXJJbm5lckRpdkNsYXNzZXM6IG5hdmlnYXRpb25EZWZhdWx0cy5sb2FkZXJJbm5lckRpdkNsYXNzZXMsXG5cbiAgICAvKipcbiAgICAgKiBJZiBlbmFibGVkLCBhZGRzIGEgbG9hZGVyIHRvIHRoZSBwYWdlIGFuZCBjYWNoZXMgYSByZWZlcmVuY2UgdG8gaXQsIHRoZW4gcmV0dXJucyB0aGF0IHJlZmVyZW5jZVxuICAgICAqXG4gICAgICogQHJldHVybnMgRWxlbWVudFxuICAgICAqL1xuICAgIF9nZXRMb2FkZXJFbDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoIXNlbGYubG9hZGVyRW5hYmxlZCkgcmV0dXJuO1xuICAgICAgICBpZiAoc2VsZi5uYXZMb2FkZXJDYWNoZWQpIHJldHVybiBzZWxmLm5hdkxvYWRlckNhY2hlZDtcblxuICAgICAgICAvL3ByZXBlbmQgdGhlIGxvYWRlciBlbGVtZW50c1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QgPSBzZWxmLl9sb2FkZXJDbGFzc2VzO1xuICAgICAgICBsZXQgaW5uZXJfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGlubmVyX2Rpdi5jbGFzc0xpc3QgPSBzZWxmLl9sb2FkZXJJbm5lckRpdkNsYXNzZXM7XG4gICAgICAgIGRpdi5hcHBlbmQoaW5uZXJfZGl2KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5wcmVwZW5kKGRpdik7XG5cbiAgICAgICAgLy9nZXQgYW5kIGNhY2hlIGEgcmVmZXJlbmNlIHRvIGl0IGZvciBmdXR1cmUgcmVxdWVzdHNcbiAgICAgICAgc2VsZi5uYXZMb2FkZXJDYWNoZWQgPSBkb20uZ2V0RWxlbWVudCgnLnBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInKTtcblxuICAgICAgICByZXR1cm4gc2VsZi5uYXZMb2FkZXJDYWNoZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm91dGUgZnJvbSB0aGUgbWV0YSB0YWcsIGlmIGl0IGV4aXN0c1xuICAgICAqXG4gICAgICogSWYgeW91IGRvbid0IHByb3ZpZGUgSFRNTCwgaXQnbGwgZ3JhYiBpdCBmcm9tIHRoZSBjdXJyZW50IERPTVxuICAgICAqXG4gICAgICogQHBhcmFtIGh0bWxcbiAgICAgKiBAcmV0dXJucyB7YW55IHwgRWxlbWVudH1cbiAgICAgKi9cbiAgICBnZXRSb3V0ZUZyb21NZXRhOiBmdW5jdGlvbiAoaHRtbCA9IGRvY3VtZW50LmhlYWQpIHtcbiAgICAgICAgdmFyIHJvdXRlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImN1cnJlbnRfcm91dGVcIl0nKTtcbiAgICAgICAgcm91dGUgPSByb3V0ZSA/IHJvdXRlLmNvbnRlbnQgOiBudWxsO1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlZnJlc2hlcyB0aGUgY3VycmVudCBwYWdlIHVzaW5nIC5sb2FkKClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHJlbG9hZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nID8gbnVsbCA6IGNhbGxiYWNrO1xuICAgICAgICB0aGlzLmxvYWQocmVxdWVzdC5nZXRGdWxsVVJMKCksIHt9LCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIGZ1bGwgcmVmcmVzaCBvZiB0aGUgY3VycmVudCBVUkxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGZ1bGxSZWxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5zaG93TG9hZGVyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHVzZXIgdG8gYSBuZXcgcGFnZSB3aXRob3V0IFhIUlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHJlZGlyZWN0OiBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRoaXMuc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhcnJpdmluZyBhdCBhIG5ldyBwYWdlLCB5b3UgbWlnaHQgbmVlZCB0byBpbnN0YW50aWF0ZSBzb21lIHN0dWZmXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfb25sb2FkQ2FsbGJhY2tzOiBbXSxcbiAgICBvbmxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIHRoaXMuX29ubG9hZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmVPbmxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5fb25sb2FkQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIF9vblVubG9hZENhbGxiYWNrczogW10sXG4gICAgb25VbmxvYWQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIHRoaXMuX29uVW5sb2FkQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHJlbW92ZU9uVW5sb2FkOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29uVW5sb2FkQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgbmV3IHBhZ2UgZmFpbHMgdG8gbG9hZCwgeW91IHNob3VsZCBwcm9iYWJseSB0ZWxsIHRoZSB1c2VyL3RyeSBhZ2Fpbi9sb2cgdGhlIGlzc3VlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfb25GYWlsQ2FsbGJhY2tzOiBbXSxcbiAgICBvbkZhaWw6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nICkgdGhyb3cgYCR7Y2FsbGJhY2t9IG11c3QgYmUgYSBmdW5jdGlvbmA7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICByZW1vdmVPbkZhaWw6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgdGhpcy5fb25GYWlsQ2FsbGJhY2tzLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gY2FsbGJhY2s7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBBZGQgYXMgbWFueSBjYWxsYmFja3MgYXMgeW91J2QgbGlrZSB0byBydW4gcmlnaHQgYmVmb3JlIHRoZSByZXF1ZXN0IGlzIG1hZGVcbiAgICAgKlxuICAgICAqIElmIGFueSBvZiB0aGVtIHJldHVybiBmYWxzZSwgdGhlIHJlcXVlc3Qgd2lsbCBiZSBwcmV2ZW50ZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHNlbGZcbiAgICAgKi9cbiAgICBvbkJlZm9yZVJlcXVlc3Q6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBtdXN0IGJlIGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl9vbkJlZm9yZVJlcXVlc3RDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgcmVtb3ZlT25CZWZvcmVSZXF1ZXN0OiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIHRoaXMuX29uQmVmb3JlUmVxdWVzdENhbGxiYWNrcy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IGNhbGxiYWNrO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBfb25CZWZvcmVSZXF1ZXN0Q2FsbGJhY2tzOiBbXSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIG9uIGEgbmV3IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQWxzbyBpbmNsdWRlcyB0aGUgcm91dGUgb2YgdGhlIG5ldyBwYWdlIChpZiBpdCBleGlzdHMgaW4gYSBtZXRhIHRhZykgc28gdGhhdCB5b3UgY2FuIGtpY2sgb2ZmIEpTIHNwZWNpZmljIHRvIHRoYXQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcGxhY2VkX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBfdHJpZ2dlck9ubG9hZDogZnVuY3Rpb24gKGVsLCBlbF9zZWxlY3RvciwgcmVwbGFjZWRfc2VsZWN0b3IsIHJvdXRlLCBkYXRhKSB7XG4gICAgICAgIHRoaXMuX29ubG9hZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ZWwsXG4gICAgICAgICAgICAgICAgcmVwbGFjZWRTZWxlY3RvcjpyZXBsYWNlZF9zZWxlY3RvcixcbiAgICAgICAgICAgICAgICByb3V0ZTogcm91dGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGxlYXZpbmcgdGhlIGxhc3QgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIF90cmlnZ2VyVW5sb2FkOiBmdW5jdGlvbiAoZWwsIGVsX3NlbGVjdG9yLCByb3V0ZSwgZGF0YSkge1xuICAgICAgICB0aGlzLl9vblVubG9hZENhbGxiYWNrcy5mb3JFYWNoKGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKGVsLCBkYXRhLCB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ZWxfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIGZhaWxlZCwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcGFyYW0gYXhpb3NfZXJyb3JcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBfdHJpZ2dlckZhaWw6IGZ1bmN0aW9uIChlcnJvciwgdXJsLCBkYXRhLCBheGlvc19lcnJvcikge1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdXJsLCBkYXRhLCBheGlvc19lcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgYWJvdXQgdG8gbG9hZCB0aGUgbmV4dCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gaW5jb21pbmdfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIF90cmlnZ2VyT25CZWZvcmVSZXF1ZXN0OiBmdW5jdGlvbiAoZWwsIGVsX3NlbGVjdG9yLCBpbmNvbWluZ19zZWxlY3Rvciwgcm91dGUsIGRhdGEpIHtcbiAgICAgICAgbGV0IHByZXZlbnRfcmVxdWVzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9vbkJlZm9yZVJlcXVlc3RDYWxsYmFja3MuZm9yRWFjaChmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgICAgICAvL3J1biB0aGUgY2FsbGJhY2sgYW5kIGdldCB0aGUgcmVzdWx0XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjYWxsYmFjayhlbCwgZGF0YSwge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGluY29taW5nU2VsZWN0b3I6aW5jb21pbmdfc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcm91dGU6IHJvdXRlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3VsdCB3YXMgcHJvdmlkZWQgYXMgZmFsc2UsIHByZXZlbnQgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgcmVzdWx0ID09PSBcImJvb2xlYW5cIiAmJiAhcmVzdWx0ICl7XG4gICAgICAgICAgICAgICAgcHJldmVudF9yZXF1ZXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiAhcHJldmVudF9yZXF1ZXN0O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBdHRhY2hlcyBldmVudCBoYW5kbGVycyB0byB0cmFjayB0aGUgYnJvd3NlcidzIGhpc3RvcnkgYnV0dG9ucyAoYmFjay9mb3J3YXJkKVxuICAgICAqXG4gICAgICogQHRvZG86IEludmVzdGlnYXRlIHBvc3NpYmxlIGlzc3VlIHdpdGggY2hyb21lIGNhY2hpbmcgYmFjayBidXR0b24gY29udGVudHMgYW5kIG5vdCBsb2FkaW5nIHRoZSBlbnRpcmUgcGFnZVxuICAgICAqL1xuICAgIGluaXRIaXN0b3J5SGFuZGxlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZm9yd2FyZCBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucHVzaHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2JhY2sgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIHNlbGYubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCB7fSwgbnVsbCwge1xuICAgICAgICAgICAgICAgIHB1c2hTdGF0ZTpmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aXRoIG5ldyBIVE1MXG4gICAgICpcbiAgICAgKiAxKSBUcmlnZ2VycyB1bmxvYWQoKVxuICAgICAqIDIpIFdhaXRzIDEwMG1zXG4gICAgICogMykgUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHNcbiAgICAgKiA0KSBSZXBsYWNlcyBhbGwgbWV0YSB0YWdzIChpbXBvcnRhbnQgZm9yIHNvY2lhbCBtZWRpYSBzaGFyaW5nIGFtb25nIG90aGVyIHRoaW5ncylcbiAgICAgKiA1KSBSZXBsYWNlcyB0aGUgY2Fub25pY2FsIHRhZ1xuICAgICAqIDYpIFJlcGxhY2VzIGFueSBjbGFzc2VzIG9uIHRoZSBib2R5IHNpbmNlIHRoZXkgYXJlIGdlbmVyYWxseSB1c2VkIHRvIGluZGljYXRlIHdoaWNoIHBhZ2UgeW91J3JlIG9uXG4gICAgICogNykgUHVzaGVzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAqIDgpIFNldHMgdGhlIHBhZ2UgdGl0bGVcbiAgICAgKiA5KSBSZXBsYWNlcyBjb250ZW50IGluIHRoZSBET01cbiAgICAgKiAxMCkgVHJpZ2dlcnMgb25sb2FkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbF9zZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKiBAcGFyYW0gY3VycmVudF9yb3V0ZVxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHBhcmFtIG9uZV90aW1lX2NhbGxiYWNrXG4gICAgICovXG4gICAgX3JlcGxhY2VQYWdlQ29udGVudChodG1sLCB1cmwsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBwdXNoX3N0YXRlID0gdHJ1ZSwgY3VycmVudF9yb3V0ZSA9IG51bGwsIGRhdGEgPSB7fSwgb25lX3RpbWVfY2FsbGJhY2sgPSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vZGVmYXVsdHNcbiAgICAgICAgaW5jb21pbmdfZWxfc2VsZWN0b3IgPSB0eXBlb2YgaW5jb21pbmdfZWxfc2VsZWN0b3IgPT09IFwidW5kZWZpbmVkXCIgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWxfc2VsZWN0b3I7XG4gICAgICAgIHJlcGxhY2VfZWxfc2VsZWN0b3IgPSB0eXBlb2YgcmVwbGFjZV9lbF9zZWxlY3RvciA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKSA6IHJlcGxhY2VfZWxfc2VsZWN0b3I7XG5cbiAgICAgICAgLy92YWxpZGF0ZSBpbmNvbWluZyBkYXRhXG4gICAgICAgIGlmICh0eXBlb2YgdXJsICE9PSAnc3RyaW5nJykgdGhyb3cgYFByb3ZpZGVkIHVybCAoJHt1cmx9KSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgaWYgKHR5cGVvZiBpbmNvbWluZ19lbF9zZWxlY3RvciAhPT0gJ3N0cmluZycpIHRocm93IGBpbmNvbWluZ19lbF9zZWxlY3RvciAoJHtpbmNvbWluZ19lbF9zZWxlY3Rvcn0pIG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICBpZiAodHlwZW9mIHJlcGxhY2VfZWxfc2VsZWN0b3IgIT09ICdzdHJpbmcnKSB0aHJvdyBgcmVwbGFjZV9lbF9zZWxlY3RvciAoJHtyZXBsYWNlX2VsX3NlbGVjdG9yfSkgbXVzdCBiZSBhIHN0cmluZ2A7XG5cbiAgICAgICAgY29uc3QgcmVwbGFjZV9lbCA9IGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWxfc2VsZWN0b3IsIHRydWUpOyAvL2Vycm9yIGlmIG5vdCBmb3VuZFxuXG4gICAgICAgIC8vdHJpZ2dlciB0aGUgdW5sb2FkIGNhbGxiYWNrc1xuICAgICAgICBzZWxmLl90cmlnZ2VyVW5sb2FkKHJlcGxhY2VfZWwsIHJlcGxhY2VfZWxfc2VsZWN0b3IsIGN1cnJlbnRfcm91dGUsIGRhdGEpO1xuXG4gICAgICAgIC8vcGFyc2UgdGhlIHJlc3BvbnNlIHRvIGdyYWIgYW55dGhpbmcgdGhhdCB3ZSBuZWVkICh0aXRsZSwgbWV0YSwgY29udGVudCwgcm91dGUsIGV0YylcbiAgICAgICAgdmFyIHBhcnNlZCA9IHNlbGYuX3BhcnNlSFRNTChodG1sLCBpbmNvbWluZ19lbF9zZWxlY3Rvcik7XG5cbiAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICBpZiAocGFyc2VkLmh0bWwubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgZG9tLnJlbW92ZSgnbWV0YScpO1xuICAgICAgICAgICAgcGFyc2VkLm1ldGFzLmZvckVhY2goZnVuY3Rpb24obWV0YSl7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmQobWV0YSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAvLyAtIHBvc3NpYmx5IG90aGVyIHRhZ3Mgd2lsbCBuZWVkIHRvIGJlIHdoaXRlbGlzdGVkIGluIHRoZSBmdXR1cmUuXG4gICAgICAgICAgICAvLyAtIHRoZSBtYWluIGNvbmNlcm4gaXMgbm90IHB1dHRpbmcgSlMvQ1NTIGludG8gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHNob3VsZG4ndCBiZVxuICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgQXJyYXkuZnJvbShwYXJzZWQubGlua3MpLmZvckVhY2goZnVuY3Rpb24gKGxpbmspIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2FkZCBib2R5IGNsYXNzZXNcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0ID0gcGFyc2VkLmJvZHlfY2xhc3NlcztcblxuICAgICAgICAgICAgLy9wdXNoIHRoZSBzdGF0ZSB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgICAgICAgIHB1c2hfc3RhdGUgJiYgaGlzdG9yeS5wdXNoU3RhdGUoe3VybDogdXJsfSwgcGFyc2VkLnRpdGxlLCB1cmwpO1xuXG4gICAgICAgICAgICAvL3VwZGF0ZSB0aGUgdGFiL3BhZ2UgdGl0bGVcbiAgICAgICAgICAgIHNlbGYuX3NldFRpdGxlKHBhcnNlZC50aXRsZSk7XG5cbiAgICAgICAgICAgIC8vcmVwbGFjZSBjb250ZW50IG9uIHRoZSBwYWdlXG4gICAgICAgICAgICBjb25zdCBuZXdfY29udGVudCA9IGRvbS5yZXBsYWNlRWxXaXRoSFRNTChyZXBsYWNlX2VsLCBwYXJzZWQuaHRtbCk7XG5cbiAgICAgICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgIHNlbGYuX3RyaWdnZXJPbmxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBwYXJzZWQucm91dGUsIGRhdGEpO1xuXG4gICAgICAgICAgICAvL2lmIGEgY2FsbGJhY2sgd2FzIHByb3ZpZGVkLCBydW4gaXQgYW5kIHByb3ZpZGUgdGhlIHBhcmVudCBlbGVtZW50XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uZV90aW1lX2NhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgb25lX3RpbWVfY2FsbGJhY2sobmV3X2NvbnRlbnQsIGluY29taW5nX2VsX3NlbGVjdG9yLCByZXBsYWNlX2VsX3NlbGVjdG9yLCBjdXJyZW50X3JvdXRlLCBkYXRhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9hZGQgdG8gaGlzdG9yeSAoaWYgZW5hYmxlZClcbiAgICAgICAgICAgIHRoaXMuX2FkZEhpc3RvcnlJdGVtKHVybCwgcGFyc2VkLnJvdXRlKTtcblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVwbGFjZV9lbF9zZWxlY3RvciBpcyBub3QgdGhlIHNhbWUgYXMgZ2V0UmVwbGFjZUVsZW1lbnQoKSxcbiAgICAgICAgICAgIC8vIHRoZW4gaXQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gd2hhdGV2ZXIgdGhlIGluY29taW5nX2VsX3NlbGVjdG9yIGlzIGJlY2F1c2UgaXQgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgaWYgKHNlbGYuZ2V0UmVwbGFjZUVsZW1lbnQoKSAhPT0gcmVwbGFjZV9lbF9zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0UmVwbGFjZUVsZW1lbnQoaW5jb21pbmdfZWxfc2VsZWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCAob3IgSlNPTiBvYmplY3QpIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogTm9kZUxpc3RPZjxFbGVtZW50PiwgaHRtbDogSHRtbE9wdGlvbnMgfCBzdHJpbmcsIHRpdGxlOiBhbnkgfCBIVE1MVGl0bGVFbGVtZW50LCBib2R5X2NsYXNzZXM6IERPTVRva2VuTGlzdH19XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBfcGFyc2VIVE1MKGh0bWwsIHBhcmVudF9lbCA9IG51bGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmICh0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwpIHRocm93IGBQcm92aWRlZCBwYXJlbnRfZWwgKCR7cGFyZW50X2VsfSkgbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICByb3V0ZSA9IG51bGw7XG4gICAgICAgIGlmKCB0eXBlb2YgaHRtbCA9PT0gXCJvYmplY3RcIiAmJiBodG1sICE9PSBudWxsICl7XG4gICAgICAgICAgICBpZiggaHRtbC5odG1sICl7XG4gICAgICAgICAgICAgICAgaWYoIGh0bWwucm91dGUgKXtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgPSBodG1sLnJvdXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBodG1sID0gaHRtbC5odG1sO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhyb3cgYEluY29taW5nIEpTT04gb2JqZWN0IGRvZXMgbm90IGNvbnRhaW4gSFRNTCBrZXlgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9wYXJzZSB0aGUgaW5jb21pbmcgZG9tXG4gICAgICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgICAgIHZhciBkb2MgPSBwYXJzZXIucGFyc2VGcm9tU3RyaW5nKGh0bWwsIFwidGV4dC9odG1sXCIpO1xuXG4gICAgICAgIC8vZ2V0IHBhZ2UgdGl0bGVcbiAgICAgICAgdmFyIHRpdGxlID0gZG9jLnF1ZXJ5U2VsZWN0b3IoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlID0gdGl0bGUgPyB0aXRsZS5pbm5lclRleHQgOiBudWxsO1xuXG4gICAgICAgIC8vZ2V0IGFueSBtZXRhIHRhZ3NcbiAgICAgICAgdmFyIG1ldGFzID0gQXJyYXkuZnJvbShkb2MuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpKTtcbiAgICAgICAgLy9nZXQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgIHZhciBsaW5rcyA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAvL2dldCBib2R5IGNsYXNzZXNcbiAgICAgICAgdmFyIGJvZHlfY2xhc3NlcyA9IGRvYy5ib2R5LmNsYXNzTGlzdC50b1N0cmluZygpO1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICB2YXIgbmV3X2h0bWwgPSBodG1sO1xuXG4gICAgICAgIC8vaWYgYSBwYXJlbnQgZWxlbWVudCB3YXMgcHJvdmlkZWQsIGZpbmQgaXRcbiAgICAgICAgaWYgKHBhcmVudF9lbCkge1xuICAgICAgICAgICAgdmFyIHNlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHBhcmVudF9lbCk7XG4gICAgICAgICAgICAvL2lmIGNvdWxkbid0IGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmICghc2VsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBhcmVudCBzZWxlY3RvciAke3BhcmVudF9lbH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBvdXRlckhUTUxcbiAgICAgICAgICAgIG5ld19odG1sID0gc2VsLm91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgcm91dGUgZGlkbid0IGV4aXN0IGluIHRoZSBpbmNvbWluZyBKU09OIG9iamVjdCwgZ3JhYiBmcm9tIHRoZSBIVE1MXG4gICAgICAgIHZhciByb3V0ZSA9IHJvdXRlID8gcm91dGUgOiBzZWxmLmdldFJvdXRlRnJvbU1ldGEoZG9jKTtcblxuICAgICAgICAvLyBHYXJiYWdlIGNvbGxlY3Rpb24sIHlvdSBkb24ndCBuZWVkIHRoaXMgYW55bW9yZS5cbiAgICAgICAgcGFyc2VyID0gZG9jID0gbnVsbDtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgcm91dGU6IHJvdXRlLFxuICAgICAgICAgICAgbWV0YXM6IG1ldGFzLFxuICAgICAgICAgICAgbGlua3M6IGxpbmtzLFxuICAgICAgICAgICAgYm9keV9jbGFzc2VzOiBib2R5X2NsYXNzZXMsXG4gICAgICAgICAgICBodG1sOiBuZXdfaHRtbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB0aXRsZSBvZiB0aGUgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHRpdGxlXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgX3NldFRpdGxlOiBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgZG9jdW1lbnQudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVlcnkgc3RyaW5nIHZhcmlhYmxlc1xuICAgICAqXG4gICAgICogQHJldHVybnMgVVJMU2VhcmNoUGFyYW1zXG4gICAgICovXG4gICAgcXVlcnk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCB3YXMgbWFkZSBzZWN1cmVseSBvdmVyIFNTTCAoaHR0cHMgaW5zdGVhZCBvZiBodHRwKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIdHRwczogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlV2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBteS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5yZXF1aXJlV2luZG93TG9jYXRpb24oKTtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluV2l0aFByb3RvY29sOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnJlcXVpcmVXaW5kb3dMb2NhdGlvbigpO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUklcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUkk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZVdpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSSSB3aXRoIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnJlcXVpcmVXaW5kb3dMb2NhdGlvbigpO1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBVUkxcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbS9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxVUkw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMucmVxdWlyZVdpbmRvd0xvY2F0aW9uKCk7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNsYXNoIHRvIGEgc3RyaW5nIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20gYmVjb21lcyBodHRwczovL215LWRvbWFpbi5jb20vXG4gICAgICogRXhhbXBsZTogL215LXByb2R1Y3QgYmVjb21lcyAvbXktcHJvZHVjdC9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFwcGVuZFNsYXNoOiBmdW5jdGlvbih1cmwgPSAnJyl7XG4gICAgICAgIHJldHVybiB1cmxbdXJsLmxlbmd0aC0xXSAhPT0gJy8nID8gdXJsKycvJyA6IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIHJlcXVpcmVkIHdpbmRvdy5sb2NhdGlvblxuICAgICAqL1xuICAgIHJlcXVpcmVXaW5kb3dMb2NhdGlvbjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoIHR5cGVvZiB3aW5kb3cubG9jYXRpb24gPT09IFwidW5kZWZpbmVkXCIgfHwgIXdpbmRvdy5sb2NhdGlvbiApIHRocm93IGBXaW5kb3cuTG9jYXRpb24gaXMgcmVxdWlyZWQgZm9yIGpwYWNrLnJlcXVlc3RgO1xuICAgIH0sXG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtBYnN0cmFjdENsYXNzfSBmcm9tIFwiLi4vQWJzdHJhY3RDbGFzc1wiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2Nsb25lXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xuY29uc3Qgc2l0ZV9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOm51bGwsXG4gICAgY29uZmlnOnt9LFxufTtcblxuLyoqXG4gKlxuICogU2l0ZSAoZm9yIG11bHRpLXRlbmFudCBhcHBsaWNhdGlvbnMpXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggdGhlIGN1cnJlbnQgd2Vic2l0ZSdzIGlkLCBuYW1lLCBhbmQgY29uZmlnIG9wdGlvbnNcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBTaXRlIGV4dGVuZHMgQWJzdHJhY3RDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoZGF0YSA9IHt9KXtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLl9rZXlzID0gWydpZCcsICduYW1lJywgJ2NvbmZpZyddO1xuXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4uc2l0ZV9kZWZhdWx0cywgLi4uZGF0YX07XG5cbiAgICAgICAgdGhpcy5wb3B1bGF0ZShkYXRhKTtcbiAgICB9XG5cbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH1cblxuICAgIHNldElkKGlkKSB7XG4gICAgICAgIGlmKCB0eXBlb2YgaWQgIT09ICdudW1iZXInICYmIGlkICE9PSBudWxsICkgdGhyb3cgYCR7aWR9IG11c3QgYmUgYSBudW1iZXIgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vZ2V0cyB0aGUgd2Vic2l0ZSdzIG5hbWVcbiAgICBnZXROYW1lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9XG5cbiAgICBzZXROYW1lKG5hbWUpIHtcbiAgICAgICAgaWYoIHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyAmJiBuYW1lICE9PSBudWxsICkgdGhyb3cgYCR7bmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgY29uZmlnIGRhdGFcbiAgICBnZXRDb25maWcoKSB7XG4gICAgICAgIHJldHVybiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fY29uZmlnKTtcbiAgICB9XG5cbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWcoY29uZmlnID0ge30pIHtcbiAgICAgICAgLy9tdXN0IGJlIGEgZGF0YSBvYmplY3QsIGV2ZW4gaWYgaXQncyBlbXB0eVxuICAgICAgICB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoY29uZmlnLCBudWxsLCBmYWxzZSwgZmFsc2UsIHRydWUpO1xuICAgICAgICB0aGlzLl9jb25maWcgPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUoY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFuIGluZGl2aWR1YWwgY29uZmlnIHZhbHVlIG9yIG51bGwgaWYgaXQncyBub3QgZGVmaW5lZFxuICAgIGdldENvbmZpZ0l0ZW0oa2V5KSB7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fY29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogY2xvbmUuZ2V0VmFsdWVPckNsb25lKHRoaXMuX2NvbmZpZ1trZXldKTtcbiAgICB9XG5cbiAgICAvL2FkZHMgb3IgdXBkYXRlcyBhIHZhbHVlIGluIHRoZSBjb25maWcgb2JqZWN0XG4gICAgc2V0Q29uZmlnSXRlbShrZXksIHZhbCkge1xuICAgICAgICBpZiggdHlwZW9mIGtleSAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtrZXl9IG11c3QgYmUgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9jb25maWdba2V5XSA9IGNsb25lLmdldFZhbHVlT3JDbG9uZSh2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbW1vbiBzdHJpbmcgbWFuaXB1bGF0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLmdldHRlcignbmFtZScpIHJldHVybnMgJ2dldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyA9ICcnKXtcbiAgICAgICAgcmV0dXJuICdnZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3Muc2V0dGVyKCduYW1lJykgcmV0dXJucyAnc2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNldHRlcjogZnVuY3Rpb24oc3RyaW5nID0gJycpe1xuICAgICAgICByZXR1cm4gJ3NldCcrdGhpcy51Y2ZpcnN0KHN0cmluZyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgdWNmaXJzdCgpIGZ1bmN0aW9uYWxpdHkgdG8gSlMgKGxpa2UgUEhQKVxuICAgICAqXG4gICAgICogQHBhcmFtIHN0cmluZ1xuICAgICAqIEByZXR1cm5zIHsqfHN0cmluZ31cbiAgICAgKi9cbiAgICB1Y2ZpcnN0OiBmdW5jdGlvbihzdHJpbmcgPSAnJyl7XG4gICAgICAgIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbn07IiwiaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogVG9nZ2xlcyBhbiBlbGVtZW50IG9uIGNsaWNrIG9mIGEgYnV0dG9uLCBjbGljayBvdXRzaWRlIHRoZSBlbGVtZW50IChpZiBpdCdzIHZpc2libGUpLCBvciBvbiB3aW5kb3cgcmVzaXplXG4gKlxuICogVGhlIGJyZWFrcG9pbnQgaXMgYmFzZWQgb24gdmlzaWJpbGl0eSBvZiB0aGUgYnV0dG9uLlxuICogICBJZiB0aGUgYnV0dG9uIGlzIHZpc2libGUsIHRoZSBlbGVtZW50IHdpbGwgbm90IGJlICh1bmxlc3MgdGhlIGJ1dHRvbiBpcyBjbGlja2VkKVxuICogICBJZiB0aGUgYnV0dG9uIGlzIGhpZGRlbiwgdGhlIGVsZW1lbnQgd2lsbCBiZSB2aXNpYmxlXG4gKlxuICogTm8gc3R5bGVzIGFyZSBwcm92aWRlZCB3aXRoIHRoaXMgY29tcG9uZW50IHNvIGZlZWwgZnJlZSB0byBnbyBjcmF6eS5cbiAqICAgVGhlcmUncyBhIGxvdCB5b3UgY2FuIGRvIHdoZW4gYSBzaW5nbGUgY2xhc3MgaXMgdG9nZ2xlZC5cbiAqXG4gKiBVc2UgY2FzZXM6XG4gKiAxKSBDaGFuZ2UgZnJvbSBhIHNpZGViYXIgb24gZGVza3RvcCB0byBhIHBvcHVwIG9uIG1vYmlsZVxuICogMikgQ2hhbmdlIGZyb20gYW4gaW5saW5lIG1lbnUgb24gZGVza3RvcCB0byBhIHNsaWRlLWluIG9uIG1vYmlsZVxuICogLi4uSSdtIHN1cmUgeW91IGNhbiB0aGluayBvZiBzb21lXG4gKlxuICovXG5leHBvcnQgY2xhc3MgVG9nZ2xlT25Nb2JpbGV7XG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gYnRuXG4gICAgICogQHBhcmFtIHRvZ2dsZV9lbFxuICAgICAqIEBwYXJhbSB0b2dnbGVfY2xhc3NcbiAgICAgKiBAcGFyYW0gaGlkZV9vbl9vdXRzaWRlX2NsaWNrXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoYnRuLCB0b2dnbGVfZWwsIHRvZ2dsZV9jbGFzcyA9ICd2aXNpYmxlJywgaGlkZV9vbl9vdXRzaWRlX2NsaWNrID0gdHJ1ZSl7XG4gICAgICAgIC8vc2V0IHRoZSBlbGVtZW50c1xuICAgICAgICB0aGlzLmJ0biA9IGRvbS5nZXRFbGVtZW50KGJ0biwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMudG9nZ2xlX2VsID0gZG9tLmdldEVsZW1lbnQodG9nZ2xlX2VsLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgLy9zZXQgdGhlIGNvbmZpZ1xuICAgICAgICB0aGlzLnRvZ2dsZV9jbGFzcyA9IHRvZ2dsZV9jbGFzcztcbiAgICAgICAgdGhpcy5oaWRlX29uX291dHNpZGVfY2xpY2sgPSBoaWRlX29uX291dHNpZGVfY2xpY2s7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBldmVudCBoYW5kbGVycyBhbmQgcnVucyBvbldpbmRvd1Jlc2l6ZSBpbW1lZGlhdGVseSB0byBzZXQgdGhlIGluaXRpYWwgY2xhc3NcbiAgICAgKi9cbiAgICBpbml0KCl7XG4gICAgICAgIC8vdG8gYmUgdXNlZCBpbnNpZGUgdGhlIGV2ZW50IGhhbmRsZXJzXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vY3JlYXRlIGEgdGhyb3R0bGVkIHdpbmRvdyByZXNpemUgaGFuZGxlclxuICAgICAgICBsZXQgdGhyb3R0bGU7XG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aHJvdHRsZSk7XG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmKCBkb20uaXNWaXNpYmxlKHNlbGYuYnRuKSApe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYudG9nZ2xlX2VsLmNsYXNzTGlzdC5hZGQoc2VsZi50b2dnbGVfY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYoIHRoaXMuaGlkZV9vbl9vdXRzaWRlX2NsaWNrICkge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrT3V0c2lkZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldF9lbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgLy9kbyBub3RoaW5nIGlmIHRoZSBjbGljayB3YXMgb24gdGhlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfZWwgPT09IHNlbGYuYnRuKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBpbnNpZGUgdGhlIGJ1dHRvblxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYnRuID09PSB0YXJnZXRfZWwpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IHdoaWxlICh0YXJnZXRfZWwgPSB0YXJnZXRfZWwucGFyZW50Tm9kZSk7XG5cbiAgICAgICAgICAgICAgICB0YXJnZXRfZWwgPSBlLnRhcmdldDtcblxuICAgICAgICAgICAgICAgIC8vZG8gbm90aGluZyBpZiB0aGUgY2xpY2sgd2FzIG9uIHRoZSBlbGVtZW50IHdlIGFyZSB0b2dnbGluZ1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXRfZWwgPT09IHNlbGYudG9nZ2xlX2VsKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvL2RvIG5vdGhpbmcgaWYgdGhlIGNsaWNrIHdhcyBpbnNpZGUgdGhlIGVsZW1lbnQgd2UgYXJlIHRvZ2dsaW5nXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi50b2dnbGVfZWwgPT09IHRhcmdldF9lbCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gd2hpbGUgKHRhcmdldF9lbCA9IHRhcmdldF9lbC5wYXJlbnROb2RlKTtcblxuICAgICAgICAgICAgICAgIC8vb3RoZXJ3aXNlIGhpZGUgaXRcbiAgICAgICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QucmVtb3ZlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50cy5vbignYm9keScsICdjbGljaycsIHRoaXMub25DbGlja091dHNpZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkNsaWNrVG9nZ2xlQnRuID0gZXZlbnRzLm9uQ2xpY2sodGhpcy5idG4sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLnRvZ2dsZV9lbC5jbGFzc0xpc3QudG9nZ2xlKHNlbGYudG9nZ2xlX2NsYXNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25XaW5kb3dSZXNpemUpO1xuXG4gICAgICAgIHRoaXMub25XaW5kb3dSZXNpemUoKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgKi9cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIGlmKCB0aGlzLmhpZGVfb25fb3V0c2lkZV9jbGljayApIHtcbiAgICAgICAgICAgIGV2ZW50cy5vZmYoJ2JvZHknLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tPdXRzaWRlKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMub2ZmKHRoaXMuYnRuLCAnY2xpY2snLCB0aGlzLm9uQ2xpY2tUb2dnbGVCdG4pO1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vbldpbmRvd1Jlc2l6ZSk7XG4gICAgfVxufSIsIi8qKlxuICogTWV0aG9kcyBmb3IgY2hlY2tpbmcgZGF0YSB0eXBlcyB3aXRoIG1vcmUgc3BlY2lmaWNpdHlcbiAqL1xuZXhwb3J0IGNvbnN0IHR5cGVfY2hlY2tzID0ge1xuICAgIC8qKlxuICAgICAqIERldGVybWluZXMgaWYgYSBwcm92aWRlZCB2YWx1ZSBpcyBhbiBvYmplY3RcbiAgICAgKlxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBjb250YWluIGF0IGxlYXN0IDEgcHJvdmlkZWQga2V5IGluIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgaGF2ZSBhbGwga2V5c1xuICAgICAqIE9wdGlvbmFsbHkgY2Fubm90IGhhdmUgYW55IGtleXMgdGhhdCBhcmVuJ3QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgKiBPcHRpb25hbGx5IHRocm93cyBhbiBlcnJvciBpZiBhbnkgY2hlY2sgZmFpbHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEBwYXJhbSBrZXlzIC0gZGVmYXVsdDogZG9uJ3QgdmVyaWZ5IGtleXNcbiAgICAgKiBAcGFyYW0gcmVxdWlyZV9hbGxfa2V5cyAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHBhcmFtIGJsb2NrX290aGVyX2tleXMgLSBkZWZhdWx0IGZhbHNlXG4gICAgICogQHBhcmFtIHRocm93X2Vycm9yIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBpc0RhdGFPYmplY3Q6IGZ1bmN0aW9uKHZhbHVlLCBrZXlzLCByZXF1aXJlX2FsbF9rZXlzID0gZmFsc2UsIGJsb2NrX290aGVyX2tleXMgPSBmYWxzZSwgdGhyb3dfZXJyb3IgPSBmYWxzZSl7XG4gICAgICAgIC8vZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHZhciBzdHJpbmdpZmllZF92YWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IGVycm9yX21zZ1xuICAgICAgICBjb25zdCBlcnJvcl9tc2cgPSBgJHtzdHJpbmdpZmllZF92YWx9IG11c3QgYmUgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsO1xuXG4gICAgICAgIC8vaWYgbm90IGFuIG9iamVjdCBvciBhbiBhcnJheVxuICAgICAgICBpZiggIWlzX29iamVjdCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB3ZSBuZWVkIHRvIHZlcmlmeSB0aGUga2V5cyB0aGlzIG9iamVjdCBjb250YWluc1xuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShrZXlzKSApIHtcbiAgICAgICAgICAgIGxldCBmb3VuZF9rZXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBtaXNzaW5nX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVfa2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAgICAgICAgLy9pZiB0aGUgb2JqZWN0IGRvZXNuJ3QgaGF2ZSBhbnkga2V5cywgdGhlbiBpdCdzIGFuIGVtcHR5IG9iamVjdCBhbmQgd2UgZG9uJ3QgbmVlZCB0byB2ZXJpZnkgYW55IGZ1cnRoZXJcbiAgICAgICAgICAgIGlmKCAhdmFsdWVfa2V5cy5sZW5ndGggJiYgIXJlcXVpcmVfYWxsX2tleXMgKSByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGtleSB3YXMgZm91bmQsIHdlIGZvdW5kIGF0bGVhc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlX2tleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF9rZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2lmIGl0J3Mgbm90IGZvdW5kLCB3ZSBjYW4ndCBzYXkgYWxsIGtleXMgZXhpc3QgaW4gdGhpcyBvYmplY3RcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2lmIG5vdCBvbmUgb2YgdGhlIGtleXMgd2VyZSBmb3VuZFxuICAgICAgICAgICAgaWYoICFmb3VuZF9rZXkgKXtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmc6IGAra2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkaWRuJ3QgZmluZCBhbGwgdGhlIGtleXNcbiAgICAgICAgICAgIGlmKCByZXF1aXJlX2FsbF9rZXlzICYmIG1pc3Npbmdfa2V5cy5sZW5ndGggKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbWlzc2luZyBkYXRhOiBgK21pc3Npbmdfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkb24ndCBhbGxvdyBhbnkga2V5cyBOT1QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgICAgICAgIGlmKCBibG9ja19vdGhlcl9rZXlzICl7XG4gICAgICAgICAgICAgICAgbGV0IHVucmVjb2duaXplZF9rZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICB2YWx1ZV9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAha2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlY29nbml6ZWRfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCB1bnJlY29nbml6ZWRfa2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBjb250YWlucyBpbnZhbGlkIGRhdGE6IGArdW5yZWNvZ25pemVkX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWxsIGNoZWNrcyBwYXNzZWQhIGNvbmdyYXRzLCBpdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtBYnN0cmFjdENsYXNzfSBmcm9tIFwiLi4vQWJzdHJhY3RDbGFzc1wiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2Nsb25lXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xuY29uc3QgdXNlcl9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBpc0d1ZXN0OmZhbHNlLFxuICAgIGlzQWRtaW46ZmFsc2UsXG4gICAgdXNlcm5hbWU6bnVsbCxcbiAgICBmbmFtZTpudWxsLFxuICAgIGxuYW1lOm51bGwsXG4gICAgZW1haWw6bnVsbCxcbiAgICBwaG9uZTpudWxsLFxuICAgIHBlcm1pc3Npb25zOltdLFxuICAgIGFkZGl0aW9uYWxEYXRhOnt9LFxufTtcblxuLyoqXG4gKlxuICogVXNlclxuICpcbiAqIENsYXNzIGZvciBzdG9yaW5nIGFuZCBpbnRlcmFjdGluZyB3aXRoIGEgdXNlciBhbmQgdGhlaXIgcGVybWlzc2lvbnNcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBVc2VyIGV4dGVuZHMgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3RvcihkYXRhID0ge30pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ2lzR3Vlc3QnLCAnaXNBZG1pbicsICd1c2VybmFtZScsICdmbmFtZScsICdsbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdwZXJtaXNzaW9ucycsICdhZGRpdGlvbmFsRGF0YSddOyBcbiAgICAgICAgXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uZGF0YX07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHNldElkKGlkKXtcbiAgICAgICAgaWYoIHR5cGVvZiBpZCAhPT0gJ251bWJlcicgJiYgaWQgIT09IG51bGwgKSB0aHJvdyBgJHtpZH0gbXVzdCBiZSBhIG51bWJlciBvciBudWxsYDtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJc0d1ZXN0KGlzX2d1ZXN0ID0gZmFsc2Upe1xuICAgICAgICB0aGlzLl9pc0d1ZXN0ID0gaXNfZ3Vlc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRJc0d1ZXN0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0d1ZXN0O1xuICAgIH1cblxuICAgIHNldElzQWRtaW4oaXNfYWRtaW4gPSBmYWxzZSl7XG4gICAgICAgIHRoaXMuX2lzQWRtaW4gPSBpc19hZG1pbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElzQWRtaW4oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzQWRtaW47XG4gICAgfVxuXG4gICAgc2V0VXNlcm5hbWUodXNlcm5hbWUgPSBudWxsKXtcbiAgICAgICAgaWYoIHR5cGVvZiB1c2VybmFtZSAhPT0gJ3N0cmluZycgJiYgdXNlcm5hbWUgIT09IG51bGwgKSB0aHJvdyBgJHt1c2VybmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fdXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldFVzZXJuYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91c2VybmFtZTtcbiAgICB9XG5cbiAgICBnZXRGbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZm5hbWU7XG4gICAgfVxuICAgIHNldEZuYW1lKGZpcnN0X25hbWUgPSBudWxsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBmaXJzdF9uYW1lICE9PSAnc3RyaW5nJyAmJiBmaXJzdF9uYW1lICE9PSBudWxsICkgdGhyb3cgYCR7Zmlyc3RfbmFtZX0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fZm5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRMbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfVxuICAgIHNldExuYW1lKGxhc3RfbmFtZSA9IG51bGwpe1xuICAgICAgICBpZiggdHlwZW9mIGxhc3RfbmFtZSAhPT0gJ3N0cmluZycgJiYgbGFzdF9uYW1lICE9PSBudWxsICkgdGhyb3cgYCR7bGFzdF9uYW1lfSBtdXN0IGJlIGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9sbmFtZSA9IGxhc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9xdWljayB3YXkgdG8gZ2V0IGZuYW1lIGFuZCBsbmFtZVxuICAgIGdldE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm5hbWUoKSArICcgJyArIHRoaXMuZ2V0TG5hbWUoKTtcbiAgICB9XG5cbiAgICBnZXRFbWFpbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZW1haWw7XG4gICAgfVxuICAgIHNldEVtYWlsKGVtYWlsID0gbnVsbCl7XG4gICAgICAgIGlmKCB0eXBlb2YgZW1haWwgIT09ICdzdHJpbmcnICYmIGVtYWlsICE9PSBudWxsICkgdGhyb3cgYCR7ZW1haWx9IG11c3QgYmUgYSBzdHJpbmcgb3IgbnVsbGA7XG4gICAgICAgIHRoaXMuX2VtYWlsID0gZW1haWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGdldFBob25lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9waG9uZTtcbiAgICB9XG4gICAgc2V0UGhvbmUocGhvbmUgPSBudWxsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBwaG9uZSAhPT0gJ3N0cmluZycgJiYgcGhvbmUgIT09IG51bGwgKSB0aHJvdyBgJHtwaG9uZX0gbXVzdCBiZSBhIHN0cmluZyBvciBudWxsYDtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0UGVybWlzc2lvbnMoKXtcbiAgICAgICAgcmV0dXJuIGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9wZXJtaXNzaW9ucyk7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIHNldFBlcm1pc3Npb25zKHBlcm1pc3Npb25zID0gW10pe1xuICAgICAgICBpZiggIUFycmF5LmlzQXJyYXkocGVybWlzc2lvbnMpICkgdGhyb3cgXCJzZXRQZXJtaXNzaW9ucyByZXF1aXJlcyBhbiBhcnJheVwiO1xuICAgICAgICB0aGlzLl9wZXJtaXNzaW9ucyA9IGNsb25lLmdldFZhbHVlT3JDbG9uZShwZXJtaXNzaW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL2FkZHMgYSBzaW5nbGUgcGVybWlzc2lvbiB0byB0aGlzIHVzZXJcbiAgICBhZGRQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICBpZiggdHlwZW9mIHBlcm1pc3Npb24gIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7cGVybWlzc2lvbn0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1JlbW92ZXMgYSBzaW5nbGUgcGVybWlzc2lvbiBmcm9tIHRoaXMgdXNlclxuICAgIHJlbW92ZVBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIGlmKCB0eXBlb2YgcGVybWlzc2lvbiAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtwZXJtaXNzaW9ufSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5zZXRQZXJtaXNzaW9ucyh0aGlzLl9wZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IHBlcm1pc3Npb247XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSB1c2VyIGhhcyB0aGUgcHJvdmlkZWQgcGVybWlzc2lvblxuICAgIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIGlmKCB0eXBlb2YgcGVybWlzc2lvbiAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtwZXJtaXNzaW9ufSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVybWlzc2lvbnMoKS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICAvL3JldHVybnMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0QWRkaXRpb25hbERhdGEoKXtcbiAgICAgICAgcmV0dXJuIGNsb25lLmdldFZhbHVlT3JDbG9uZSh0aGlzLl9hZGRpdGlvbmFsRGF0YSk7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBzZXRBZGRpdGlvbmFsRGF0YShhZGRpdGlvbmFsX2RhdGEgPSB7fSl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGFkZGl0aW9uYWxfZGF0YSwgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGEgPSBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUoYWRkaXRpb25hbF9kYXRhKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vcmV0dXJucyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIGdldERhdGFJdGVtKGtleSl7XG4gICAgICAgIGlmKCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJyApIHRocm93IGAke2tleX0gbXVzdCBiZSBhIHN0cmluZ2A7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBjbG9uZS5nZXRWYWx1ZU9yQ2xvbmUodGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSk7XG4gICAgfVxuICAgIC8vc2V0cyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIHNldERhdGFJdGVtKGtleSwgdmFsKXtcbiAgICAgICAgaWYoIHR5cGVvZiBrZXkgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7a2V5fSBtdXN0IGJlIGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9IGNsb25lLmdldFZhbHVlT3JDbG9uZSh2YWwpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9heGlvcycpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xudmFyIHNldHRsZSA9IHJlcXVpcmUoJy4vLi4vY29yZS9zZXR0bGUnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9idWlsZFVSTCcpO1xudmFyIHBhcnNlSGVhZGVycyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9wYXJzZUhlYWRlcnMnKTtcbnZhciBpc1VSTFNhbWVPcmlnaW4gPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNVUkxTYW1lT3JpZ2luJyk7XG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuLi9jb3JlL2NyZWF0ZUVycm9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24geGhyQWRhcHRlcihjb25maWcpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIGRpc3BhdGNoWGhyUmVxdWVzdChyZXNvbHZlLCByZWplY3QpIHtcbiAgICB2YXIgcmVxdWVzdERhdGEgPSBjb25maWcuZGF0YTtcbiAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSBjb25maWcuaGVhZGVycztcblxuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKHJlcXVlc3REYXRhKSkge1xuICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzWydDb250ZW50LVR5cGUnXTsgLy8gTGV0IHRoZSBicm93c2VyIHNldCBpdFxuICAgIH1cblxuICAgIHZhciByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAvLyBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uXG4gICAgaWYgKGNvbmZpZy5hdXRoKSB7XG4gICAgICB2YXIgdXNlcm5hbWUgPSBjb25maWcuYXV0aC51c2VybmFtZSB8fCAnJztcbiAgICAgIHZhciBwYXNzd29yZCA9IGNvbmZpZy5hdXRoLnBhc3N3b3JkIHx8ICcnO1xuICAgICAgcmVxdWVzdEhlYWRlcnMuQXV0aG9yaXphdGlvbiA9ICdCYXNpYyAnICsgYnRvYSh1c2VybmFtZSArICc6JyArIHBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICByZXF1ZXN0Lm9wZW4oY29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpLCBidWlsZFVSTChjb25maWcudXJsLCBjb25maWcucGFyYW1zLCBjb25maWcucGFyYW1zU2VyaWFsaXplciksIHRydWUpO1xuXG4gICAgLy8gU2V0IHRoZSByZXF1ZXN0IHRpbWVvdXQgaW4gTVNcbiAgICByZXF1ZXN0LnRpbWVvdXQgPSBjb25maWcudGltZW91dDtcblxuICAgIC8vIExpc3RlbiBmb3IgcmVhZHkgc3RhdGVcbiAgICByZXF1ZXN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUxvYWQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QgfHwgcmVxdWVzdC5yZWFkeVN0YXRlICE9PSA0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVGhlIHJlcXVlc3QgZXJyb3JlZCBvdXQgYW5kIHdlIGRpZG4ndCBnZXQgYSByZXNwb25zZSwgdGhpcyB3aWxsIGJlXG4gICAgICAvLyBoYW5kbGVkIGJ5IG9uZXJyb3IgaW5zdGVhZFxuICAgICAgLy8gV2l0aCBvbmUgZXhjZXB0aW9uOiByZXF1ZXN0IHRoYXQgdXNpbmcgZmlsZTogcHJvdG9jb2wsIG1vc3QgYnJvd3NlcnNcbiAgICAgIC8vIHdpbGwgcmV0dXJuIHN0YXR1cyBhcyAwIGV2ZW4gdGhvdWdoIGl0J3MgYSBzdWNjZXNzZnVsIHJlcXVlc3RcbiAgICAgIGlmIChyZXF1ZXN0LnN0YXR1cyA9PT0gMCAmJiAhKHJlcXVlc3QucmVzcG9uc2VVUkwgJiYgcmVxdWVzdC5yZXNwb25zZVVSTC5pbmRleE9mKCdmaWxlOicpID09PSAwKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFByZXBhcmUgdGhlIHJlc3BvbnNlXG4gICAgICB2YXIgcmVzcG9uc2VIZWFkZXJzID0gJ2dldEFsbFJlc3BvbnNlSGVhZGVycycgaW4gcmVxdWVzdCA/IHBhcnNlSGVhZGVycyhyZXF1ZXN0LmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSA6IG51bGw7XG4gICAgICB2YXIgcmVzcG9uc2VEYXRhID0gIWNvbmZpZy5yZXNwb25zZVR5cGUgfHwgY29uZmlnLnJlc3BvbnNlVHlwZSA9PT0gJ3RleHQnID8gcmVxdWVzdC5yZXNwb25zZVRleHQgOiByZXF1ZXN0LnJlc3BvbnNlO1xuICAgICAgdmFyIHJlc3BvbnNlID0ge1xuICAgICAgICBkYXRhOiByZXNwb25zZURhdGEsXG4gICAgICAgIHN0YXR1czogcmVxdWVzdC5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlcXVlc3Quc3RhdHVzVGV4dCxcbiAgICAgICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdFxuICAgICAgfTtcblxuICAgICAgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICB9O1xuXG4gICAgLy8gSGFuZGxlIGJyb3dzZXIgcmVxdWVzdCBjYW5jZWxsYXRpb24gKGFzIG9wcG9zZWQgdG8gYSBtYW51YWwgY2FuY2VsbGF0aW9uKVxuICAgIHJlcXVlc3Qub25hYm9ydCA9IGZ1bmN0aW9uIGhhbmRsZUFib3J0KCkge1xuICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdSZXF1ZXN0IGFib3J0ZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgbG93IGxldmVsIG5ldHdvcmsgZXJyb3JzXG4gICAgcmVxdWVzdC5vbmVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoKSB7XG4gICAgICAvLyBSZWFsIGVycm9ycyBhcmUgaGlkZGVuIGZyb20gdXMgYnkgdGhlIGJyb3dzZXJcbiAgICAgIC8vIG9uZXJyb3Igc2hvdWxkIG9ubHkgZmlyZSBpZiBpdCdzIGEgbmV0d29yayBlcnJvclxuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCdOZXR3b3JrIEVycm9yJywgY29uZmlnLCBudWxsLCByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgdGltZW91dFxuICAgIHJlcXVlc3Qub250aW1lb3V0ID0gZnVuY3Rpb24gaGFuZGxlVGltZW91dCgpIHtcbiAgICAgIHJlamVjdChjcmVhdGVFcnJvcigndGltZW91dCBvZiAnICsgY29uZmlnLnRpbWVvdXQgKyAnbXMgZXhjZWVkZWQnLCBjb25maWcsICdFQ09OTkFCT1JURUQnLFxuICAgICAgICByZXF1ZXN0KSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBBZGQgeHNyZiBoZWFkZXJcbiAgICAvLyBUaGlzIGlzIG9ubHkgZG9uZSBpZiBydW5uaW5nIGluIGEgc3RhbmRhcmQgYnJvd3NlciBlbnZpcm9ubWVudC5cbiAgICAvLyBTcGVjaWZpY2FsbHkgbm90IGlmIHdlJ3JlIGluIGEgd2ViIHdvcmtlciwgb3IgcmVhY3QtbmF0aXZlLlxuICAgIGlmICh1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpKSB7XG4gICAgICB2YXIgY29va2llcyA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9jb29raWVzJyk7XG5cbiAgICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgICAgdmFyIHhzcmZWYWx1ZSA9IChjb25maWcud2l0aENyZWRlbnRpYWxzIHx8IGlzVVJMU2FtZU9yaWdpbihjb25maWcudXJsKSkgJiYgY29uZmlnLnhzcmZDb29raWVOYW1lID9cbiAgICAgICAgY29va2llcy5yZWFkKGNvbmZpZy54c3JmQ29va2llTmFtZSkgOlxuICAgICAgICB1bmRlZmluZWQ7XG5cbiAgICAgIGlmICh4c3JmVmFsdWUpIHtcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNbY29uZmlnLnhzcmZIZWFkZXJOYW1lXSA9IHhzcmZWYWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgaGVhZGVycyB0byB0aGUgcmVxdWVzdFxuICAgIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4gcmVxdWVzdCkge1xuICAgICAgdXRpbHMuZm9yRWFjaChyZXF1ZXN0SGVhZGVycywgZnVuY3Rpb24gc2V0UmVxdWVzdEhlYWRlcih2YWwsIGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIHJlcXVlc3REYXRhID09PSAndW5kZWZpbmVkJyAmJiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gJ2NvbnRlbnQtdHlwZScpIHtcbiAgICAgICAgICAvLyBSZW1vdmUgQ29udGVudC1UeXBlIGlmIGRhdGEgaXMgdW5kZWZpbmVkXG4gICAgICAgICAgZGVsZXRlIHJlcXVlc3RIZWFkZXJzW2tleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIGFkZCBoZWFkZXIgdG8gdGhlIHJlcXVlc3RcbiAgICAgICAgICByZXF1ZXN0LnNldFJlcXVlc3RIZWFkZXIoa2V5LCB2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBBZGQgd2l0aENyZWRlbnRpYWxzIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMpIHtcbiAgICAgIHJlcXVlc3Qud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgcmVzcG9uc2VUeXBlIHRvIHJlcXVlc3QgaWYgbmVlZGVkXG4gICAgaWYgKGNvbmZpZy5yZXNwb25zZVR5cGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gY29uZmlnLnJlc3BvbnNlVHlwZTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gRXhwZWN0ZWQgRE9NRXhjZXB0aW9uIHRocm93biBieSBicm93c2VycyBub3QgY29tcGF0aWJsZSBYTUxIdHRwUmVxdWVzdCBMZXZlbCAyLlxuICAgICAgICAvLyBCdXQsIHRoaXMgY2FuIGJlIHN1cHByZXNzZWQgZm9yICdqc29uJyB0eXBlIGFzIGl0IGNhbiBiZSBwYXJzZWQgYnkgZGVmYXVsdCAndHJhbnNmb3JtUmVzcG9uc2UnIGZ1bmN0aW9uLlxuICAgICAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSAhPT0gJ2pzb24nKSB7XG4gICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEhhbmRsZSBwcm9ncmVzcyBpZiBuZWVkZWRcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25Eb3dubG9hZFByb2dyZXNzKTtcbiAgICB9XG5cbiAgICAvLyBOb3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgdXBsb2FkIGV2ZW50c1xuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MgPT09ICdmdW5jdGlvbicgJiYgcmVxdWVzdC51cGxvYWQpIHtcbiAgICAgIHJlcXVlc3QudXBsb2FkLmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgY29uZmlnLm9uVXBsb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuY2FuY2VsVG9rZW4pIHtcbiAgICAgIC8vIEhhbmRsZSBjYW5jZWxsYXRpb25cbiAgICAgIGNvbmZpZy5jYW5jZWxUb2tlbi5wcm9taXNlLnRoZW4oZnVuY3Rpb24gb25DYW5jZWxlZChjYW5jZWwpIHtcbiAgICAgICAgaWYgKCFyZXF1ZXN0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVxdWVzdC5hYm9ydCgpO1xuICAgICAgICByZWplY3QoY2FuY2VsKTtcbiAgICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgICByZXF1ZXN0ID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChyZXF1ZXN0RGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXF1ZXN0RGF0YSA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gU2VuZCB0aGUgcmVxdWVzdFxuICAgIHJlcXVlc3Quc2VuZChyZXF1ZXN0RGF0YSk7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIEF4aW9zID0gcmVxdWlyZSgnLi9jb3JlL0F4aW9zJyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL2NvcmUvbWVyZ2VDb25maWcnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4vZGVmYXVsdHMnKTtcblxuLyoqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2Ugb2YgQXhpb3NcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICogQHJldHVybiB7QXhpb3N9IEEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKGRlZmF1bHRDb25maWcpIHtcbiAgdmFyIGNvbnRleHQgPSBuZXcgQXhpb3MoZGVmYXVsdENvbmZpZyk7XG4gIHZhciBpbnN0YW5jZSA9IGJpbmQoQXhpb3MucHJvdG90eXBlLnJlcXVlc3QsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgYXhpb3MucHJvdG90eXBlIHRvIGluc3RhbmNlXG4gIHV0aWxzLmV4dGVuZChpbnN0YW5jZSwgQXhpb3MucHJvdG90eXBlLCBjb250ZXh0KTtcblxuICAvLyBDb3B5IGNvbnRleHQgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBjb250ZXh0KTtcblxuICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIENyZWF0ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB0byBiZSBleHBvcnRlZFxudmFyIGF4aW9zID0gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdHMpO1xuXG4vLyBFeHBvc2UgQXhpb3MgY2xhc3MgdG8gYWxsb3cgY2xhc3MgaW5oZXJpdGFuY2VcbmF4aW9zLkF4aW9zID0gQXhpb3M7XG5cbi8vIEZhY3RvcnkgZm9yIGNyZWF0aW5nIG5ldyBpbnN0YW5jZXNcbmF4aW9zLmNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpbnN0YW5jZUNvbmZpZykge1xuICByZXR1cm4gY3JlYXRlSW5zdGFuY2UobWVyZ2VDb25maWcoYXhpb3MuZGVmYXVsdHMsIGluc3RhbmNlQ29uZmlnKSk7XG59O1xuXG4vLyBFeHBvc2UgQ2FuY2VsICYgQ2FuY2VsVG9rZW5cbmF4aW9zLkNhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbCcpO1xuYXhpb3MuQ2FuY2VsVG9rZW4gPSByZXF1aXJlKCcuL2NhbmNlbC9DYW5jZWxUb2tlbicpO1xuYXhpb3MuaXNDYW5jZWwgPSByZXF1aXJlKCcuL2NhbmNlbC9pc0NhbmNlbCcpO1xuXG4vLyBFeHBvc2UgYWxsL3NwcmVhZFxuYXhpb3MuYWxsID0gZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG59O1xuYXhpb3Muc3ByZWFkID0gcmVxdWlyZSgnLi9oZWxwZXJzL3NwcmVhZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGF4aW9zO1xuXG4vLyBBbGxvdyB1c2Ugb2YgZGVmYXVsdCBpbXBvcnQgc3ludGF4IGluIFR5cGVTY3JpcHRcbm1vZHVsZS5leHBvcnRzLmRlZmF1bHQgPSBheGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBBIGBDYW5jZWxgIGlzIGFuIG9iamVjdCB0aGF0IGlzIHRocm93biB3aGVuIGFuIG9wZXJhdGlvbiBpcyBjYW5jZWxlZC5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwYXJhbSB7c3RyaW5nPX0gbWVzc2FnZSBUaGUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gQ2FuY2VsKG1lc3NhZ2UpIHtcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbn1cblxuQ2FuY2VsLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gJ0NhbmNlbCcgKyAodGhpcy5tZXNzYWdlID8gJzogJyArIHRoaXMubWVzc2FnZSA6ICcnKTtcbn07XG5cbkNhbmNlbC5wcm90b3R5cGUuX19DQU5DRUxfXyA9IHRydWU7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FuY2VsO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQ2FuY2VsID0gcmVxdWlyZSgnLi9DYW5jZWwnKTtcblxuLyoqXG4gKiBBIGBDYW5jZWxUb2tlbmAgaXMgYW4gb2JqZWN0IHRoYXQgY2FuIGJlIHVzZWQgdG8gcmVxdWVzdCBjYW5jZWxsYXRpb24gb2YgYW4gb3BlcmF0aW9uLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZXhlY3V0b3IgVGhlIGV4ZWN1dG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBDYW5jZWxUb2tlbihleGVjdXRvcikge1xuICBpZiAodHlwZW9mIGV4ZWN1dG9yICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignZXhlY3V0b3IgbXVzdCBiZSBhIGZ1bmN0aW9uLicpO1xuICB9XG5cbiAgdmFyIHJlc29sdmVQcm9taXNlO1xuICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiBwcm9taXNlRXhlY3V0b3IocmVzb2x2ZSkge1xuICAgIHJlc29sdmVQcm9taXNlID0gcmVzb2x2ZTtcbiAgfSk7XG5cbiAgdmFyIHRva2VuID0gdGhpcztcbiAgZXhlY3V0b3IoZnVuY3Rpb24gY2FuY2VsKG1lc3NhZ2UpIHtcbiAgICBpZiAodG9rZW4ucmVhc29uKSB7XG4gICAgICAvLyBDYW5jZWxsYXRpb24gaGFzIGFscmVhZHkgYmVlbiByZXF1ZXN0ZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0b2tlbi5yZWFzb24gPSBuZXcgQ2FuY2VsKG1lc3NhZ2UpO1xuICAgIHJlc29sdmVQcm9taXNlKHRva2VuLnJlYXNvbik7XG4gIH0pO1xufVxuXG4vKipcbiAqIFRocm93cyBhIGBDYW5jZWxgIGlmIGNhbmNlbGxhdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKi9cbkNhbmNlbFRva2VuLnByb3RvdHlwZS50aHJvd0lmUmVxdWVzdGVkID0gZnVuY3Rpb24gdGhyb3dJZlJlcXVlc3RlZCgpIHtcbiAgaWYgKHRoaXMucmVhc29uKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG4gIH1cbn07XG5cbi8qKlxuICogUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhIG5ldyBgQ2FuY2VsVG9rZW5gIGFuZCBhIGZ1bmN0aW9uIHRoYXQsIHdoZW4gY2FsbGVkLFxuICogY2FuY2VscyB0aGUgYENhbmNlbFRva2VuYC5cbiAqL1xuQ2FuY2VsVG9rZW4uc291cmNlID0gZnVuY3Rpb24gc291cmNlKCkge1xuICB2YXIgY2FuY2VsO1xuICB2YXIgdG9rZW4gPSBuZXcgQ2FuY2VsVG9rZW4oZnVuY3Rpb24gZXhlY3V0b3IoYykge1xuICAgIGNhbmNlbCA9IGM7XG4gIH0pO1xuICByZXR1cm4ge1xuICAgIHRva2VuOiB0b2tlbixcbiAgICBjYW5jZWw6IGNhbmNlbFxuICB9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWxUb2tlbjtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0NhbmNlbCh2YWx1ZSkge1xuICByZXR1cm4gISEodmFsdWUgJiYgdmFsdWUuX19DQU5DRUxfXyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgYnVpbGRVUkwgPSByZXF1aXJlKCcuLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgSW50ZXJjZXB0b3JNYW5hZ2VyID0gcmVxdWlyZSgnLi9JbnRlcmNlcHRvck1hbmFnZXInKTtcbnZhciBkaXNwYXRjaFJlcXVlc3QgPSByZXF1aXJlKCcuL2Rpc3BhdGNoUmVxdWVzdCcpO1xudmFyIG1lcmdlQ29uZmlnID0gcmVxdWlyZSgnLi9tZXJnZUNvbmZpZycpO1xuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YW5jZUNvbmZpZyBUaGUgZGVmYXVsdCBjb25maWcgZm9yIHRoZSBpbnN0YW5jZVxuICovXG5mdW5jdGlvbiBBeGlvcyhpbnN0YW5jZUNvbmZpZykge1xuICB0aGlzLmRlZmF1bHRzID0gaW5zdGFuY2VDb25maWc7XG4gIHRoaXMuaW50ZXJjZXB0b3JzID0ge1xuICAgIHJlcXVlc3Q6IG5ldyBJbnRlcmNlcHRvck1hbmFnZXIoKSxcbiAgICByZXNwb25zZTogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpXG4gIH07XG59XG5cbi8qKlxuICogRGlzcGF0Y2ggYSByZXF1ZXN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHNwZWNpZmljIGZvciB0aGlzIHJlcXVlc3QgKG1lcmdlZCB3aXRoIHRoaXMuZGVmYXVsdHMpXG4gKi9cbkF4aW9zLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gcmVxdWVzdChjb25maWcpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIC8vIEFsbG93IGZvciBheGlvcygnZXhhbXBsZS91cmwnWywgY29uZmlnXSkgYSBsYSBmZXRjaCBBUElcbiAgaWYgKHR5cGVvZiBjb25maWcgPT09ICdzdHJpbmcnKSB7XG4gICAgY29uZmlnID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuICAgIGNvbmZpZy51cmwgPSBhcmd1bWVudHNbMF07XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnID0gY29uZmlnIHx8IHt9O1xuICB9XG5cbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgY29uZmlnLm1ldGhvZCA9IGNvbmZpZy5tZXRob2QgPyBjb25maWcubWV0aG9kLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcblxuICAvLyBIb29rIHVwIGludGVyY2VwdG9ycyBtaWRkbGV3YXJlXG4gIHZhciBjaGFpbiA9IFtkaXNwYXRjaFJlcXVlc3QsIHVuZGVmaW5lZF07XG4gIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKGNvbmZpZyk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVxdWVzdC5mb3JFYWNoKGZ1bmN0aW9uIHVuc2hpZnRSZXF1ZXN0SW50ZXJjZXB0b3JzKGludGVyY2VwdG9yKSB7XG4gICAgY2hhaW4udW5zaGlmdChpbnRlcmNlcHRvci5mdWxmaWxsZWQsIGludGVyY2VwdG9yLnJlamVjdGVkKTtcbiAgfSk7XG5cbiAgdGhpcy5pbnRlcmNlcHRvcnMucmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiBwdXNoUmVzcG9uc2VJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi5wdXNoKGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB3aGlsZSAoY2hhaW4ubGVuZ3RoKSB7XG4gICAgcHJvbWlzZSA9IHByb21pc2UudGhlbihjaGFpbi5zaGlmdCgpLCBjaGFpbi5zaGlmdCgpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9taXNlO1xufTtcblxuQXhpb3MucHJvdG90eXBlLmdldFVyaSA9IGZ1bmN0aW9uIGdldFVyaShjb25maWcpIHtcbiAgY29uZmlnID0gbWVyZ2VDb25maWcodGhpcy5kZWZhdWx0cywgY29uZmlnKTtcbiAgcmV0dXJuIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKS5yZXBsYWNlKC9eXFw/LywgJycpO1xufTtcblxuLy8gUHJvdmlkZSBhbGlhc2VzIGZvciBzdXBwb3J0ZWQgcmVxdWVzdCBtZXRob2RzXG51dGlscy5mb3JFYWNoKFsnZGVsZXRlJywgJ2dldCcsICdoZWFkJywgJ29wdGlvbnMnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsXG4gICAgfSkpO1xuICB9O1xufSk7XG5cbnV0aWxzLmZvckVhY2goWydwb3N0JywgJ3B1dCcsICdwYXRjaCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kV2l0aERhdGEobWV0aG9kKSB7XG4gIC8qZXNsaW50IGZ1bmMtbmFtZXM6MCovXG4gIEF4aW9zLnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24odXJsLCBkYXRhLCBjb25maWcpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHV0aWxzLm1lcmdlKGNvbmZpZyB8fCB7fSwge1xuICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICB1cmw6IHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KSk7XG4gIH07XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBeGlvcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBJbnRlcmNlcHRvck1hbmFnZXIoKSB7XG4gIHRoaXMuaGFuZGxlcnMgPSBbXTtcbn1cblxuLyoqXG4gKiBBZGQgYSBuZXcgaW50ZXJjZXB0b3IgdG8gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVsZmlsbGVkIFRoZSBmdW5jdGlvbiB0byBoYW5kbGUgYHRoZW5gIGZvciBhIGBQcm9taXNlYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVqZWN0ZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgcmVqZWN0YCBmb3IgYSBgUHJvbWlzZWBcbiAqXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IEFuIElEIHVzZWQgdG8gcmVtb3ZlIGludGVyY2VwdG9yIGxhdGVyXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUudXNlID0gZnVuY3Rpb24gdXNlKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpIHtcbiAgdGhpcy5oYW5kbGVycy5wdXNoKHtcbiAgICBmdWxmaWxsZWQ6IGZ1bGZpbGxlZCxcbiAgICByZWplY3RlZDogcmVqZWN0ZWRcbiAgfSk7XG4gIHJldHVybiB0aGlzLmhhbmRsZXJzLmxlbmd0aCAtIDE7XG59O1xuXG4vKipcbiAqIFJlbW92ZSBhbiBpbnRlcmNlcHRvciBmcm9tIHRoZSBzdGFja1xuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBpZCBUaGUgSUQgdGhhdCB3YXMgcmV0dXJuZWQgYnkgYHVzZWBcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS5lamVjdCA9IGZ1bmN0aW9uIGVqZWN0KGlkKSB7XG4gIGlmICh0aGlzLmhhbmRsZXJzW2lkXSkge1xuICAgIHRoaXMuaGFuZGxlcnNbaWRdID0gbnVsbDtcbiAgfVxufTtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgYWxsIHRoZSByZWdpc3RlcmVkIGludGVyY2VwdG9yc1xuICpcbiAqIFRoaXMgbWV0aG9kIGlzIHBhcnRpY3VsYXJseSB1c2VmdWwgZm9yIHNraXBwaW5nIG92ZXIgYW55XG4gKiBpbnRlcmNlcHRvcnMgdGhhdCBtYXkgaGF2ZSBiZWNvbWUgYG51bGxgIGNhbGxpbmcgYGVqZWN0YC5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY2FsbCBmb3IgZWFjaCBpbnRlcmNlcHRvclxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiBmb3JFYWNoKGZuKSB7XG4gIHV0aWxzLmZvckVhY2godGhpcy5oYW5kbGVycywgZnVuY3Rpb24gZm9yRWFjaEhhbmRsZXIoaCkge1xuICAgIGlmIChoICE9PSBudWxsKSB7XG4gICAgICBmbihoKTtcbiAgICB9XG4gIH0pO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBJbnRlcmNlcHRvck1hbmFnZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBlbmhhbmNlRXJyb3IgPSByZXF1aXJlKCcuL2VuaGFuY2VFcnJvcicpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBFcnJvciB3aXRoIHRoZSBzcGVjaWZpZWQgbWVzc2FnZSwgY29uZmlnLCBlcnJvciBjb2RlLCByZXF1ZXN0IGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbY29kZV0gVGhlIGVycm9yIGNvZGUgKGZvciBleGFtcGxlLCAnRUNPTk5BQk9SVEVEJykuXG4gKiBAcGFyYW0ge09iamVjdH0gW3JlcXVlc3RdIFRoZSByZXF1ZXN0LlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXNwb25zZV0gVGhlIHJlc3BvbnNlLlxuICogQHJldHVybnMge0Vycm9yfSBUaGUgY3JlYXRlZCBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVFcnJvcihtZXNzYWdlLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKSB7XG4gIHZhciBlcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgcmV0dXJuIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgdHJhbnNmb3JtRGF0YSA9IHJlcXVpcmUoJy4vdHJhbnNmb3JtRGF0YScpO1xudmFyIGlzQ2FuY2VsID0gcmVxdWlyZSgnLi4vY2FuY2VsL2lzQ2FuY2VsJyk7XG52YXIgZGVmYXVsdHMgPSByZXF1aXJlKCcuLi9kZWZhdWx0cycpO1xudmFyIGlzQWJzb2x1dGVVUkwgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvaXNBYnNvbHV0ZVVSTCcpO1xudmFyIGNvbWJpbmVVUkxzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2NvbWJpbmVVUkxzJyk7XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuZnVuY3Rpb24gdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpIHtcbiAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgIGNvbmZpZy5jYW5jZWxUb2tlbi50aHJvd0lmUmVxdWVzdGVkKCk7XG4gIH1cbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3QgdG8gdGhlIHNlcnZlciB1c2luZyB0aGUgY29uZmlndXJlZCBhZGFwdGVyLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgVGhlIGNvbmZpZyB0aGF0IGlzIHRvIGJlIHVzZWQgZm9yIHRoZSByZXF1ZXN0XG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gVGhlIFByb21pc2UgdG8gYmUgZnVsZmlsbGVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGlzcGF0Y2hSZXF1ZXN0KGNvbmZpZykge1xuICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgLy8gU3VwcG9ydCBiYXNlVVJMIGNvbmZpZ1xuICBpZiAoY29uZmlnLmJhc2VVUkwgJiYgIWlzQWJzb2x1dGVVUkwoY29uZmlnLnVybCkpIHtcbiAgICBjb25maWcudXJsID0gY29tYmluZVVSTHMoY29uZmlnLmJhc2VVUkwsIGNvbmZpZy51cmwpO1xuICB9XG5cbiAgLy8gRW5zdXJlIGhlYWRlcnMgZXhpc3RcbiAgY29uZmlnLmhlYWRlcnMgPSBjb25maWcuaGVhZGVycyB8fCB7fTtcblxuICAvLyBUcmFuc2Zvcm0gcmVxdWVzdCBkYXRhXG4gIGNvbmZpZy5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICBjb25maWcuZGF0YSxcbiAgICBjb25maWcuaGVhZGVycyxcbiAgICBjb25maWcudHJhbnNmb3JtUmVxdWVzdFxuICApO1xuXG4gIC8vIEZsYXR0ZW4gaGVhZGVyc1xuICBjb25maWcuaGVhZGVycyA9IHV0aWxzLm1lcmdlKFxuICAgIGNvbmZpZy5oZWFkZXJzLmNvbW1vbiB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVyc1tjb25maWcubWV0aG9kXSB8fCB7fSxcbiAgICBjb25maWcuaGVhZGVycyB8fCB7fVxuICApO1xuXG4gIHV0aWxzLmZvckVhY2goXG4gICAgWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAncG9zdCcsICdwdXQnLCAncGF0Y2gnLCAnY29tbW9uJ10sXG4gICAgZnVuY3Rpb24gY2xlYW5IZWFkZXJDb25maWcobWV0aG9kKSB7XG4gICAgICBkZWxldGUgY29uZmlnLmhlYWRlcnNbbWV0aG9kXTtcbiAgICB9XG4gICk7XG5cbiAgdmFyIGFkYXB0ZXIgPSBjb25maWcuYWRhcHRlciB8fCBkZWZhdWx0cy5hZGFwdGVyO1xuXG4gIHJldHVybiBhZGFwdGVyKGNvbmZpZykudGhlbihmdW5jdGlvbiBvbkFkYXB0ZXJSZXNvbHV0aW9uKHJlc3BvbnNlKSB7XG4gICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgLy8gVHJhbnNmb3JtIHJlc3BvbnNlIGRhdGFcbiAgICByZXNwb25zZS5kYXRhID0gdHJhbnNmb3JtRGF0YShcbiAgICAgIHJlc3BvbnNlLmRhdGEsXG4gICAgICByZXNwb25zZS5oZWFkZXJzLFxuICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgKTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfSwgZnVuY3Rpb24gb25BZGFwdGVyUmVqZWN0aW9uKHJlYXNvbikge1xuICAgIGlmICghaXNDYW5jZWwocmVhc29uKSkge1xuICAgICAgdGhyb3dJZkNhbmNlbGxhdGlvblJlcXVlc3RlZChjb25maWcpO1xuXG4gICAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgICAgaWYgKHJlYXNvbiAmJiByZWFzb24ucmVzcG9uc2UpIHtcbiAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5kYXRhLFxuICAgICAgICAgIHJlYXNvbi5yZXNwb25zZS5oZWFkZXJzLFxuICAgICAgICAgIGNvbmZpZy50cmFuc2Zvcm1SZXNwb25zZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZWFzb24pO1xuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXBkYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBjb25maWcsIGVycm9yIGNvZGUsIGFuZCByZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvciBUaGUgZXJyb3IgdG8gdXBkYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBlcnJvci5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBlbmhhbmNlRXJyb3IoZXJyb3IsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgZXJyb3IuY29uZmlnID0gY29uZmlnO1xuICBpZiAoY29kZSkge1xuICAgIGVycm9yLmNvZGUgPSBjb2RlO1xuICB9XG5cbiAgZXJyb3IucmVxdWVzdCA9IHJlcXVlc3Q7XG4gIGVycm9yLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gIGVycm9yLmlzQXhpb3NFcnJvciA9IHRydWU7XG5cbiAgZXJyb3IudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8vIFN0YW5kYXJkXG4gICAgICBtZXNzYWdlOiB0aGlzLm1lc3NhZ2UsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAvLyBNaWNyb3NvZnRcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgbnVtYmVyOiB0aGlzLm51bWJlcixcbiAgICAgIC8vIE1vemlsbGFcbiAgICAgIGZpbGVOYW1lOiB0aGlzLmZpbGVOYW1lLFxuICAgICAgbGluZU51bWJlcjogdGhpcy5saW5lTnVtYmVyLFxuICAgICAgY29sdW1uTnVtYmVyOiB0aGlzLmNvbHVtbk51bWJlcixcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgLy8gQXhpb3NcbiAgICAgIGNvbmZpZzogdGhpcy5jb25maWcsXG4gICAgICBjb2RlOiB0aGlzLmNvZGVcbiAgICB9O1xuICB9O1xuICByZXR1cm4gZXJyb3I7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG4vKipcbiAqIENvbmZpZy1zcGVjaWZpYyBtZXJnZS1mdW5jdGlvbiB3aGljaCBjcmVhdGVzIGEgbmV3IGNvbmZpZy1vYmplY3RcbiAqIGJ5IG1lcmdpbmcgdHdvIGNvbmZpZ3VyYXRpb24gb2JqZWN0cyB0b2dldGhlci5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMVxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZzJcbiAqIEByZXR1cm5zIHtPYmplY3R9IE5ldyBvYmplY3QgcmVzdWx0aW5nIGZyb20gbWVyZ2luZyBjb25maWcyIHRvIGNvbmZpZzFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBtZXJnZUNvbmZpZyhjb25maWcxLCBjb25maWcyKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICBjb25maWcyID0gY29uZmlnMiB8fCB7fTtcbiAgdmFyIGNvbmZpZyA9IHt9O1xuXG4gIHV0aWxzLmZvckVhY2goWyd1cmwnLCAnbWV0aG9kJywgJ3BhcmFtcycsICdkYXRhJ10sIGZ1bmN0aW9uIHZhbHVlRnJvbUNvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICB1dGlscy5mb3JFYWNoKFsnaGVhZGVycycsICdhdXRoJywgJ3Byb3h5J10sIGZ1bmN0aW9uIG1lcmdlRGVlcFByb3BlcnRpZXMocHJvcCkge1xuICAgIGlmICh1dGlscy5pc09iamVjdChjb25maWcyW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0sIGNvbmZpZzJbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzJbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcyW3Byb3BdO1xuICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QoY29uZmlnMVtwcm9wXSkpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IHV0aWxzLmRlZXBNZXJnZShjb25maWcxW3Byb3BdKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goW1xuICAgICdiYXNlVVJMJywgJ3RyYW5zZm9ybVJlcXVlc3QnLCAndHJhbnNmb3JtUmVzcG9uc2UnLCAncGFyYW1zU2VyaWFsaXplcicsXG4gICAgJ3RpbWVvdXQnLCAnd2l0aENyZWRlbnRpYWxzJywgJ2FkYXB0ZXInLCAncmVzcG9uc2VUeXBlJywgJ3hzcmZDb29raWVOYW1lJyxcbiAgICAneHNyZkhlYWRlck5hbWUnLCAnb25VcGxvYWRQcm9ncmVzcycsICdvbkRvd25sb2FkUHJvZ3Jlc3MnLCAnbWF4Q29udGVudExlbmd0aCcsXG4gICAgJ3ZhbGlkYXRlU3RhdHVzJywgJ21heFJlZGlyZWN0cycsICdodHRwQWdlbnQnLCAnaHR0cHNBZ2VudCcsICdjYW5jZWxUb2tlbicsXG4gICAgJ3NvY2tldFBhdGgnXG4gIF0sIGZ1bmN0aW9uIGRlZmF1bHRUb0NvbmZpZzIocHJvcCkge1xuICAgIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMVtwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzFbcHJvcF07XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29uZmlnO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNyZWF0ZUVycm9yID0gcmVxdWlyZSgnLi9jcmVhdGVFcnJvcicpO1xuXG4vKipcbiAqIFJlc29sdmUgb3IgcmVqZWN0IGEgUHJvbWlzZSBiYXNlZCBvbiByZXNwb25zZSBzdGF0dXMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcmVzb2x2ZSBBIGZ1bmN0aW9uIHRoYXQgcmVzb2x2ZXMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3QgQSBmdW5jdGlvbiB0aGF0IHJlamVjdHMgdGhlIHByb21pc2UuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2UgVGhlIHJlc3BvbnNlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHJlc3BvbnNlKSB7XG4gIHZhciB2YWxpZGF0ZVN0YXR1cyA9IHJlc3BvbnNlLmNvbmZpZy52YWxpZGF0ZVN0YXR1cztcbiAgaWYgKCF2YWxpZGF0ZVN0YXR1cyB8fCB2YWxpZGF0ZVN0YXR1cyhyZXNwb25zZS5zdGF0dXMpKSB7XG4gICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVqZWN0KGNyZWF0ZUVycm9yKFxuICAgICAgJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgJyArIHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgIHJlc3BvbnNlLmNvbmZpZyxcbiAgICAgIG51bGwsXG4gICAgICByZXNwb25zZS5yZXF1ZXN0LFxuICAgICAgcmVzcG9uc2VcbiAgICApKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG4vKipcbiAqIFRyYW5zZm9ybSB0aGUgZGF0YSBmb3IgYSByZXF1ZXN0IG9yIGEgcmVzcG9uc2VcbiAqXG4gKiBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRhdGEgVGhlIGRhdGEgdG8gYmUgdHJhbnNmb3JtZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGhlYWRlcnMgVGhlIGhlYWRlcnMgZm9yIHRoZSByZXF1ZXN0IG9yIHJlc3BvbnNlXG4gKiBAcGFyYW0ge0FycmF5fEZ1bmN0aW9ufSBmbnMgQSBzaW5nbGUgZnVuY3Rpb24gb3IgQXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB0cmFuc2Zvcm1lZCBkYXRhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJhbnNmb3JtRGF0YShkYXRhLCBoZWFkZXJzLCBmbnMpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIHV0aWxzLmZvckVhY2goZm5zLCBmdW5jdGlvbiB0cmFuc2Zvcm0oZm4pIHtcbiAgICBkYXRhID0gZm4oZGF0YSwgaGVhZGVycyk7XG4gIH0pO1xuXG4gIHJldHVybiBkYXRhO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIG5vcm1hbGl6ZUhlYWRlck5hbWUgPSByZXF1aXJlKCcuL2hlbHBlcnMvbm9ybWFsaXplSGVhZGVyTmFtZScpO1xuXG52YXIgREVGQVVMVF9DT05URU5UX1RZUEUgPSB7XG4gICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xufTtcblxuZnVuY3Rpb24gc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsIHZhbHVlKSB7XG4gIGlmICghdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVycykgJiYgdXRpbHMuaXNVbmRlZmluZWQoaGVhZGVyc1snQ29udGVudC1UeXBlJ10pKSB7XG4gICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSB2YWx1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWZhdWx0QWRhcHRlcigpIHtcbiAgdmFyIGFkYXB0ZXI7XG4gIC8vIE9ubHkgTm9kZS5KUyBoYXMgYSBwcm9jZXNzIHZhcmlhYmxlIHRoYXQgaXMgb2YgW1tDbGFzc11dIHByb2Nlc3NcbiAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJykge1xuICAgIC8vIEZvciBub2RlIHVzZSBIVFRQIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy9odHRwJyk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIFhNTEh0dHBSZXF1ZXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIC8vIEZvciBicm93c2VycyB1c2UgWEhSIGFkYXB0ZXJcbiAgICBhZGFwdGVyID0gcmVxdWlyZSgnLi9hZGFwdGVycy94aHInKTtcbiAgfVxuICByZXR1cm4gYWRhcHRlcjtcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICBhZGFwdGVyOiBnZXREZWZhdWx0QWRhcHRlcigpLFxuXG4gIHRyYW5zZm9ybVJlcXVlc3Q6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXF1ZXN0KGRhdGEsIGhlYWRlcnMpIHtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdBY2NlcHQnKTtcbiAgICBub3JtYWxpemVIZWFkZXJOYW1lKGhlYWRlcnMsICdDb250ZW50LVR5cGUnKTtcbiAgICBpZiAodXRpbHMuaXNGb3JtRGF0YShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNBcnJheUJ1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCdWZmZXIoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzU3RyZWFtKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0ZpbGUoZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzQmxvYihkYXRhKVxuICAgICkge1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc0FycmF5QnVmZmVyVmlldyhkYXRhKSkge1xuICAgICAgcmV0dXJuIGRhdGEuYnVmZmVyO1xuICAgIH1cbiAgICBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMoZGF0YSkpIHtcbiAgICAgIHNldENvbnRlbnRUeXBlSWZVbnNldChoZWFkZXJzLCAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBkYXRhLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc09iamVjdChkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnKTtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1dLFxuXG4gIHRyYW5zZm9ybVJlc3BvbnNlOiBbZnVuY3Rpb24gdHJhbnNmb3JtUmVzcG9uc2UoZGF0YSkge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkgeyAvKiBJZ25vcmUgKi8gfVxuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgLyoqXG4gICAqIEEgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgdG8gYWJvcnQgYSByZXF1ZXN0LiBJZiBzZXQgdG8gMCAoZGVmYXVsdCkgYVxuICAgKiB0aW1lb3V0IGlzIG5vdCBjcmVhdGVkLlxuICAgKi9cbiAgdGltZW91dDogMCxcblxuICB4c3JmQ29va2llTmFtZTogJ1hTUkYtVE9LRU4nLFxuICB4c3JmSGVhZGVyTmFtZTogJ1gtWFNSRi1UT0tFTicsXG5cbiAgbWF4Q29udGVudExlbmd0aDogLTEsXG5cbiAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIHZhbGlkYXRlU3RhdHVzKHN0YXR1cykge1xuICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMDtcbiAgfVxufTtcblxuZGVmYXVsdHMuaGVhZGVycyA9IHtcbiAgY29tbW9uOiB7XG4gICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L3BsYWluLCAqLyonXG4gIH1cbn07XG5cbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZE5vRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0ge307XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgZGVmYXVsdHMuaGVhZGVyc1ttZXRob2RdID0gdXRpbHMubWVyZ2UoREVGQVVMVF9DT05URU5UX1RZUEUpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGVmYXVsdHM7XG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZChmbiwgdGhpc0FyZykge1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcCgpIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgfVxuICAgIHJldHVybiBmbi5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuZnVuY3Rpb24gZW5jb2RlKHZhbCkge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbCkuXG4gICAgcmVwbGFjZSgvJTQwL2dpLCAnQCcpLlxuICAgIHJlcGxhY2UoLyUzQS9naSwgJzonKS5cbiAgICByZXBsYWNlKC8lMjQvZywgJyQnKS5cbiAgICByZXBsYWNlKC8lMkMvZ2ksICcsJykuXG4gICAgcmVwbGFjZSgvJTIwL2csICcrJykuXG4gICAgcmVwbGFjZSgvJTVCL2dpLCAnWycpLlxuICAgIHJlcGxhY2UoLyU1RC9naSwgJ10nKTtcbn1cblxuLyoqXG4gKiBCdWlsZCBhIFVSTCBieSBhcHBlbmRpbmcgcGFyYW1zIHRvIHRoZSBlbmRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIFRoZSBiYXNlIG9mIHRoZSB1cmwgKGUuZy4sIGh0dHA6Ly93d3cuZ29vZ2xlLmNvbSlcbiAqIEBwYXJhbSB7b2JqZWN0fSBbcGFyYW1zXSBUaGUgcGFyYW1zIHRvIGJlIGFwcGVuZGVkXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIHVybFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJ1aWxkVVJMKHVybCwgcGFyYW1zLCBwYXJhbXNTZXJpYWxpemVyKSB7XG4gIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICBpZiAoIXBhcmFtcykge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB2YXIgc2VyaWFsaXplZFBhcmFtcztcbiAgaWYgKHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zU2VyaWFsaXplcihwYXJhbXMpO1xuICB9IGVsc2UgaWYgKHV0aWxzLmlzVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykpIHtcbiAgICBzZXJpYWxpemVkUGFyYW1zID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHBhcnRzID0gW107XG5cbiAgICB1dGlscy5mb3JFYWNoKHBhcmFtcywgZnVuY3Rpb24gc2VyaWFsaXplKHZhbCwga2V5KSB7XG4gICAgICBpZiAodmFsID09PSBudWxsIHx8IHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHV0aWxzLmlzQXJyYXkodmFsKSkge1xuICAgICAgICBrZXkgPSBrZXkgKyAnW10nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsID0gW3ZhbF07XG4gICAgICB9XG5cbiAgICAgIHV0aWxzLmZvckVhY2godmFsLCBmdW5jdGlvbiBwYXJzZVZhbHVlKHYpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzRGF0ZSh2KSkge1xuICAgICAgICAgIHYgPSB2LnRvSVNPU3RyaW5nKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNPYmplY3QodikpIHtcbiAgICAgICAgICB2ID0gSlNPTi5zdHJpbmdpZnkodik7XG4gICAgICAgIH1cbiAgICAgICAgcGFydHMucHVzaChlbmNvZGUoa2V5KSArICc9JyArIGVuY29kZSh2KSk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJ0cy5qb2luKCcmJyk7XG4gIH1cblxuICBpZiAoc2VyaWFsaXplZFBhcmFtcykge1xuICAgIHZhciBoYXNobWFya0luZGV4ID0gdXJsLmluZGV4T2YoJyMnKTtcbiAgICBpZiAoaGFzaG1hcmtJbmRleCAhPT0gLTEpIHtcbiAgICAgIHVybCA9IHVybC5zbGljZSgwLCBoYXNobWFya0luZGV4KTtcbiAgICB9XG5cbiAgICB1cmwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArIHNlcmlhbGl6ZWRQYXJhbXM7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IFVSTCBieSBjb21iaW5pbmcgdGhlIHNwZWNpZmllZCBVUkxzXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGJhc2VVUkwgVGhlIGJhc2UgVVJMXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVsYXRpdmVVUkwgVGhlIHJlbGF0aXZlIFVSTFxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGNvbWJpbmVkIFVSTFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbWJpbmVVUkxzKGJhc2VVUkwsIHJlbGF0aXZlVVJMKSB7XG4gIHJldHVybiByZWxhdGl2ZVVSTFxuICAgID8gYmFzZVVSTC5yZXBsYWNlKC9cXC8rJC8sICcnKSArICcvJyArIHJlbGF0aXZlVVJMLnJlcGxhY2UoL15cXC8rLywgJycpXG4gICAgOiBiYXNlVVJMO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIHN1cHBvcnQgZG9jdW1lbnQuY29va2llXG4gICAgKGZ1bmN0aW9uIHN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShuYW1lLCB2YWx1ZSwgZXhwaXJlcywgcGF0aCwgZG9tYWluLCBzZWN1cmUpIHtcbiAgICAgICAgICB2YXIgY29va2llID0gW107XG4gICAgICAgICAgY29va2llLnB1c2gobmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzTnVtYmVyKGV4cGlyZXMpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnZXhwaXJlcz0nICsgbmV3IERhdGUoZXhwaXJlcykudG9HTVRTdHJpbmcoKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHBhdGgpKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgncGF0aD0nICsgcGF0aCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRvbWFpbikpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdkb21haW49JyArIGRvbWFpbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlY3VyZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ3NlY3VyZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRvY3VtZW50LmNvb2tpZSA9IGNvb2tpZS5qb2luKCc7ICcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQobmFtZSkge1xuICAgICAgICAgIHZhciBtYXRjaCA9IGRvY3VtZW50LmNvb2tpZS5tYXRjaChuZXcgUmVnRXhwKCcoXnw7XFxcXHMqKSgnICsgbmFtZSArICcpPShbXjtdKiknKSk7XG4gICAgICAgICAgcmV0dXJuIChtYXRjaCA/IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaFszXSkgOiBudWxsKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZShuYW1lKSB7XG4gICAgICAgICAgdGhpcy53cml0ZShuYW1lLCAnJywgRGF0ZS5ub3coKSAtIDg2NDAwMDAwKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSgpIDpcblxuICAvLyBOb24gc3RhbmRhcmQgYnJvd3NlciBlbnYgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZSgpIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbiByZWFkKCkgeyByZXR1cm4gbnVsbDsgfSxcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIFVSTCB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgc3BlY2lmaWVkIFVSTCBpcyBhYnNvbHV0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNBYnNvbHV0ZVVSTCh1cmwpIHtcbiAgLy8gQSBVUkwgaXMgY29uc2lkZXJlZCBhYnNvbHV0ZSBpZiBpdCBiZWdpbnMgd2l0aCBcIjxzY2hlbWU+Oi8vXCIgb3IgXCIvL1wiIChwcm90b2NvbC1yZWxhdGl2ZSBVUkwpLlxuICAvLyBSRkMgMzk4NiBkZWZpbmVzIHNjaGVtZSBuYW1lIGFzIGEgc2VxdWVuY2Ugb2YgY2hhcmFjdGVycyBiZWdpbm5pbmcgd2l0aCBhIGxldHRlciBhbmQgZm9sbG93ZWRcbiAgLy8gYnkgYW55IGNvbWJpbmF0aW9uIG9mIGxldHRlcnMsIGRpZ2l0cywgcGx1cywgcGVyaW9kLCBvciBoeXBoZW4uXG4gIHJldHVybiAvXihbYS16XVthLXpcXGRcXCtcXC1cXC5dKjopP1xcL1xcLy9pLnRlc3QodXJsKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoXG4gIHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkgP1xuXG4gIC8vIFN0YW5kYXJkIGJyb3dzZXIgZW52cyBoYXZlIGZ1bGwgc3VwcG9ydCBvZiB0aGUgQVBJcyBuZWVkZWQgdG8gdGVzdFxuICAvLyB3aGV0aGVyIHRoZSByZXF1ZXN0IFVSTCBpcyBvZiB0aGUgc2FtZSBvcmlnaW4gYXMgY3VycmVudCBsb2NhdGlvbi5cbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgdmFyIG1zaWUgPSAvKG1zaWV8dHJpZGVudCkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgdmFyIHVybFBhcnNpbmdOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgdmFyIG9yaWdpblVSTDtcblxuICAgICAgLyoqXG4gICAgKiBQYXJzZSBhIFVSTCB0byBkaXNjb3ZlciBpdCdzIGNvbXBvbmVudHNcbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gdXJsIFRoZSBVUkwgdG8gYmUgcGFyc2VkXG4gICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICovXG4gICAgICBmdW5jdGlvbiByZXNvbHZlVVJMKHVybCkge1xuICAgICAgICB2YXIgaHJlZiA9IHVybDtcblxuICAgICAgICBpZiAobXNpZSkge1xuICAgICAgICAvLyBJRSBuZWVkcyBhdHRyaWJ1dGUgc2V0IHR3aWNlIHRvIG5vcm1hbGl6ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgdXJsUGFyc2luZ05vZGUuc2V0QXR0cmlidXRlKCdocmVmJywgaHJlZik7XG4gICAgICAgICAgaHJlZiA9IHVybFBhcnNpbmdOb2RlLmhyZWY7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcblxuICAgICAgICAvLyB1cmxQYXJzaW5nTm9kZSBwcm92aWRlcyB0aGUgVXJsVXRpbHMgaW50ZXJmYWNlIC0gaHR0cDovL3VybC5zcGVjLndoYXR3Zy5vcmcvI3VybHV0aWxzXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaHJlZjogdXJsUGFyc2luZ05vZGUuaHJlZixcbiAgICAgICAgICBwcm90b2NvbDogdXJsUGFyc2luZ05vZGUucHJvdG9jb2wgPyB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbC5yZXBsYWNlKC86JC8sICcnKSA6ICcnLFxuICAgICAgICAgIGhvc3Q6IHVybFBhcnNpbmdOb2RlLmhvc3QsXG4gICAgICAgICAgc2VhcmNoOiB1cmxQYXJzaW5nTm9kZS5zZWFyY2ggPyB1cmxQYXJzaW5nTm9kZS5zZWFyY2gucmVwbGFjZSgvXlxcPy8sICcnKSA6ICcnLFxuICAgICAgICAgIGhhc2g6IHVybFBhcnNpbmdOb2RlLmhhc2ggPyB1cmxQYXJzaW5nTm9kZS5oYXNoLnJlcGxhY2UoL14jLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdG5hbWU6IHVybFBhcnNpbmdOb2RlLmhvc3RuYW1lLFxuICAgICAgICAgIHBvcnQ6IHVybFBhcnNpbmdOb2RlLnBvcnQsXG4gICAgICAgICAgcGF0aG5hbWU6ICh1cmxQYXJzaW5nTm9kZS5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJykgP1xuICAgICAgICAgICAgdXJsUGFyc2luZ05vZGUucGF0aG5hbWUgOlxuICAgICAgICAgICAgJy8nICsgdXJsUGFyc2luZ05vZGUucGF0aG5hbWVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgb3JpZ2luVVJMID0gcmVzb2x2ZVVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG5cbiAgICAgIC8qKlxuICAgICogRGV0ZXJtaW5lIGlmIGEgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgbG9jYXRpb25cbiAgICAqXG4gICAgKiBAcGFyYW0ge1N0cmluZ30gcmVxdWVzdFVSTCBUaGUgVVJMIHRvIHRlc3RcbiAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIFVSTCBzaGFyZXMgdGhlIHNhbWUgb3JpZ2luLCBvdGhlcndpc2UgZmFsc2VcbiAgICAqL1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbihyZXF1ZXN0VVJMKSB7XG4gICAgICAgIHZhciBwYXJzZWQgPSAodXRpbHMuaXNTdHJpbmcocmVxdWVzdFVSTCkpID8gcmVzb2x2ZVVSTChyZXF1ZXN0VVJMKSA6IHJlcXVlc3RVUkw7XG4gICAgICAgIHJldHVybiAocGFyc2VkLnByb3RvY29sID09PSBvcmlnaW5VUkwucHJvdG9jb2wgJiZcbiAgICAgICAgICAgIHBhcnNlZC5ob3N0ID09PSBvcmlnaW5VUkwuaG9zdCk7XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudnMgKHdlYiB3b3JrZXJzLCByZWFjdC1uYXRpdmUpIGxhY2sgbmVlZGVkIHN1cHBvcnQuXG4gICAgKGZ1bmN0aW9uIG5vblN0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiBpc1VSTFNhbWVPcmlnaW4oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfTtcbiAgICB9KSgpXG4pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgbm9ybWFsaXplZE5hbWUpIHtcbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLCBmdW5jdGlvbiBwcm9jZXNzSGVhZGVyKHZhbHVlLCBuYW1lKSB7XG4gICAgaWYgKG5hbWUgIT09IG5vcm1hbGl6ZWROYW1lICYmIG5hbWUudG9VcHBlckNhc2UoKSA9PT0gbm9ybWFsaXplZE5hbWUudG9VcHBlckNhc2UoKSkge1xuICAgICAgaGVhZGVyc1tub3JtYWxpemVkTmFtZV0gPSB2YWx1ZTtcbiAgICAgIGRlbGV0ZSBoZWFkZXJzW25hbWVdO1xuICAgIH1cbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8vIEhlYWRlcnMgd2hvc2UgZHVwbGljYXRlcyBhcmUgaWdub3JlZCBieSBub2RlXG4vLyBjLmYuIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvaHR0cC5odG1sI2h0dHBfbWVzc2FnZV9oZWFkZXJzXG52YXIgaWdub3JlRHVwbGljYXRlT2YgPSBbXG4gICdhZ2UnLCAnYXV0aG9yaXphdGlvbicsICdjb250ZW50LWxlbmd0aCcsICdjb250ZW50LXR5cGUnLCAnZXRhZycsXG4gICdleHBpcmVzJywgJ2Zyb20nLCAnaG9zdCcsICdpZi1tb2RpZmllZC1zaW5jZScsICdpZi11bm1vZGlmaWVkLXNpbmNlJyxcbiAgJ2xhc3QtbW9kaWZpZWQnLCAnbG9jYXRpb24nLCAnbWF4LWZvcndhcmRzJywgJ3Byb3h5LWF1dGhvcml6YXRpb24nLFxuICAncmVmZXJlcicsICdyZXRyeS1hZnRlcicsICd1c2VyLWFnZW50J1xuXTtcblxuLyoqXG4gKiBQYXJzZSBoZWFkZXJzIGludG8gYW4gb2JqZWN0XG4gKlxuICogYGBgXG4gKiBEYXRlOiBXZWQsIDI3IEF1ZyAyMDE0IDA4OjU4OjQ5IEdNVFxuICogQ29udGVudC1UeXBlOiBhcHBsaWNhdGlvbi9qc29uXG4gKiBDb25uZWN0aW9uOiBrZWVwLWFsaXZlXG4gKiBUcmFuc2Zlci1FbmNvZGluZzogY2h1bmtlZFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGhlYWRlcnMgSGVhZGVycyBuZWVkaW5nIHRvIGJlIHBhcnNlZFxuICogQHJldHVybnMge09iamVjdH0gSGVhZGVycyBwYXJzZWQgaW50byBhbiBvYmplY3RcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwYXJzZUhlYWRlcnMoaGVhZGVycykge1xuICB2YXIgcGFyc2VkID0ge307XG4gIHZhciBrZXk7XG4gIHZhciB2YWw7XG4gIHZhciBpO1xuXG4gIGlmICghaGVhZGVycykgeyByZXR1cm4gcGFyc2VkOyB9XG5cbiAgdXRpbHMuZm9yRWFjaChoZWFkZXJzLnNwbGl0KCdcXG4nKSwgZnVuY3Rpb24gcGFyc2VyKGxpbmUpIHtcbiAgICBpID0gbGluZS5pbmRleE9mKCc6Jyk7XG4gICAga2V5ID0gdXRpbHMudHJpbShsaW5lLnN1YnN0cigwLCBpKSkudG9Mb3dlckNhc2UoKTtcbiAgICB2YWwgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKGkgKyAxKSk7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBpZiAocGFyc2VkW2tleV0gJiYgaWdub3JlRHVwbGljYXRlT2YuaW5kZXhPZihrZXkpID49IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKGtleSA9PT0gJ3NldC1jb29raWUnKSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gKHBhcnNlZFtrZXldID8gcGFyc2VkW2tleV0gOiBbXSkuY29uY2F0KFt2YWxdKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcnNlZFtrZXldID0gcGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSArICcsICcgKyB2YWwgOiB2YWw7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcGFyc2VkO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBTeW50YWN0aWMgc3VnYXIgZm9yIGludm9raW5nIGEgZnVuY3Rpb24gYW5kIGV4cGFuZGluZyBhbiBhcnJheSBmb3IgYXJndW1lbnRzLlxuICpcbiAqIENvbW1vbiB1c2UgY2FzZSB3b3VsZCBiZSB0byB1c2UgYEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseWAuXG4gKlxuICogIGBgYGpzXG4gKiAgZnVuY3Rpb24gZih4LCB5LCB6KSB7fVxuICogIHZhciBhcmdzID0gWzEsIDIsIDNdO1xuICogIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gKiAgYGBgXG4gKlxuICogV2l0aCBgc3ByZWFkYCB0aGlzIGV4YW1wbGUgY2FuIGJlIHJlLXdyaXR0ZW4uXG4gKlxuICogIGBgYGpzXG4gKiAgc3ByZWFkKGZ1bmN0aW9uKHgsIHksIHopIHt9KShbMSwgMiwgM10pO1xuICogIGBgYFxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc3ByZWFkKGNhbGxiYWNrKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKGFycikge1xuICAgIHJldHVybiBjYWxsYmFjay5hcHBseShudWxsLCBhcnIpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCcuL2hlbHBlcnMvYmluZCcpO1xudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJyk7XG5cbi8qZ2xvYmFsIHRvU3RyaW5nOnRydWUqL1xuXG4vLyB1dGlscyBpcyBhIGxpYnJhcnkgb2YgZ2VuZXJpYyBoZWxwZXIgZnVuY3Rpb25zIG5vbi1zcGVjaWZpYyB0byBheGlvc1xuXG52YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXksIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIEFycmF5QnVmZmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRm9ybURhdGFcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBGb3JtRGF0YSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsKSB7XG4gIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbCBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIHZpZXcgb24gYW4gQXJyYXlCdWZmZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0FycmF5QnVmZmVyVmlldyh2YWwpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKCh0eXBlb2YgQXJyYXlCdWZmZXIgIT09ICd1bmRlZmluZWQnKSAmJiAoQXJyYXlCdWZmZXIuaXNWaWV3KSkge1xuICAgIHJlc3VsdCA9IEFycmF5QnVmZmVyLmlzVmlldyh2YWwpO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9ICh2YWwpICYmICh2YWwuYnVmZmVyKSAmJiAodmFsLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyaW5nXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJpbmcsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmluZyh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgTnVtYmVyXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBOdW1iZXIsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc051bWJlcih2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIHVuZGVmaW5lZFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB1bmRlZmluZWQsIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWwpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICd1bmRlZmluZWQnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGFuIE9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIE9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICByZXR1cm4gdmFsICE9PSBudWxsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRGF0ZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRGF0ZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRGF0ZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRmlsZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRmlsZSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzRmlsZSh2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRmlsZV0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgQmxvYlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgQmxvYiwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQmxvYih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgQmxvYl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgRnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIEZ1bmN0aW9uLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWwpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgYSB2YWx1ZSBpcyBhIFN0cmVhbVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgU3RyZWFtLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJlYW0odmFsKSB7XG4gIHJldHVybiBpc09iamVjdCh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnBpcGUpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgVVJMU2VhcmNoUGFyYW1zIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVVJMU2VhcmNoUGFyYW1zKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIFVSTFNlYXJjaFBhcmFtcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdmFsIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zO1xufVxuXG4vKipcbiAqIFRyaW0gZXhjZXNzIHdoaXRlc3BhY2Ugb2ZmIHRoZSBiZWdpbm5pbmcgYW5kIGVuZCBvZiBhIHN0cmluZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byB0cmltXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgU3RyaW5nIGZyZWVkIG9mIGV4Y2VzcyB3aGl0ZXNwYWNlXG4gKi9cbmZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJykucmVwbGFjZSgvXFxzKiQvLCAnJyk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIHdlJ3JlIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50XG4gKlxuICogVGhpcyBhbGxvd3MgYXhpb3MgdG8gcnVuIGluIGEgd2ViIHdvcmtlciwgYW5kIHJlYWN0LW5hdGl2ZS5cbiAqIEJvdGggZW52aXJvbm1lbnRzIHN1cHBvcnQgWE1MSHR0cFJlcXVlc3QsIGJ1dCBub3QgZnVsbHkgc3RhbmRhcmQgZ2xvYmFscy5cbiAqXG4gKiB3ZWIgd29ya2VyczpcbiAqICB0eXBlb2Ygd2luZG93IC0+IHVuZGVmaW5lZFxuICogIHR5cGVvZiBkb2N1bWVudCAtPiB1bmRlZmluZWRcbiAqXG4gKiByZWFjdC1uYXRpdmU6XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ1JlYWN0TmF0aXZlJ1xuICogbmF0aXZlc2NyaXB0XG4gKiAgbmF2aWdhdG9yLnByb2R1Y3QgLT4gJ05hdGl2ZVNjcmlwdCcgb3IgJ05TJ1xuICovXG5mdW5jdGlvbiBpc1N0YW5kYXJkQnJvd3NlckVudigpIHtcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIChuYXZpZ2F0b3IucHJvZHVjdCA9PT0gJ1JlYWN0TmF0aXZlJyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTmF0aXZlU2NyaXB0JyB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRvci5wcm9kdWN0ID09PSAnTlMnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gKFxuICAgIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJ1xuICApO1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBBcnJheSBvciBhbiBPYmplY3QgaW52b2tpbmcgYSBmdW5jdGlvbiBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmIGBvYmpgIGlzIGFuIEFycmF5IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwgaW5kZXgsIGFuZCBjb21wbGV0ZSBhcnJheSBmb3IgZWFjaCBpdGVtLlxuICpcbiAqIElmICdvYmonIGlzIGFuIE9iamVjdCBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBwYXNzaW5nXG4gKiB0aGUgdmFsdWUsIGtleSwgYW5kIGNvbXBsZXRlIG9iamVjdCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNhbGxiYWNrIHRvIGludm9rZSBmb3IgZWFjaCBpdGVtXG4gKi9cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBmbikge1xuICAvLyBEb24ndCBib3RoZXIgaWYgbm8gdmFsdWUgcHJvdmlkZWRcbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEZvcmNlIGFuIGFycmF5IGlmIG5vdCBhbHJlYWR5IHNvbWV0aGluZyBpdGVyYWJsZVxuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgICBvYmogPSBbb2JqXTtcbiAgfVxuXG4gIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgYXJyYXkgdmFsdWVzXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBmbi5jYWxsKG51bGwsIG9ialtpXSwgaSwgb2JqKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIG9iamVjdCBrZXlzXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgICAgZm4uY2FsbChudWxsLCBvYmpba2V5XSwga2V5LCBvYmopO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEFjY2VwdHMgdmFyYXJncyBleHBlY3RpbmcgZWFjaCBhcmd1bWVudCB0byBiZSBhbiBvYmplY3QsIHRoZW5cbiAqIGltbXV0YWJseSBtZXJnZXMgdGhlIHByb3BlcnRpZXMgb2YgZWFjaCBvYmplY3QgYW5kIHJldHVybnMgcmVzdWx0LlxuICpcbiAqIFdoZW4gbXVsdGlwbGUgb2JqZWN0cyBjb250YWluIHRoZSBzYW1lIGtleSB0aGUgbGF0ZXIgb2JqZWN0IGluXG4gKiB0aGUgYXJndW1lbnRzIGxpc3Qgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gKlxuICogRXhhbXBsZTpcbiAqXG4gKiBgYGBqc1xuICogdmFyIHJlc3VsdCA9IG1lcmdlKHtmb286IDEyM30sIHtmb286IDQ1Nn0pO1xuICogY29uc29sZS5sb2cocmVzdWx0LmZvbyk7IC8vIG91dHB1dHMgNDU2XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMSBPYmplY3QgdG8gbWVyZ2VcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJlc3VsdCBvZiBhbGwgbWVyZ2UgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBtZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IG1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRnVuY3Rpb24gZXF1YWwgdG8gbWVyZ2Ugd2l0aCB0aGUgZGlmZmVyZW5jZSBiZWluZyB0aGF0IG5vIHJlZmVyZW5jZVxuICogdG8gb3JpZ2luYWwgb2JqZWN0cyBpcyBrZXB0LlxuICpcbiAqIEBzZWUgbWVyZ2VcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGRlZXBNZXJnZSgvKiBvYmoxLCBvYmoyLCBvYmozLCAuLi4gKi8pIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0eXBlb2YgcmVzdWx0W2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZShyZXN1bHRba2V5XSwgdmFsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXN1bHRba2V5XSA9IGRlZXBNZXJnZSh7fSwgdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWw7XG4gICAgfVxuICB9XG5cbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgZm9yRWFjaChhcmd1bWVudHNbaV0sIGFzc2lnblZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEV4dGVuZHMgb2JqZWN0IGEgYnkgbXV0YWJseSBhZGRpbmcgdG8gaXQgdGhlIHByb3BlcnRpZXMgb2Ygb2JqZWN0IGIuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGEgVGhlIG9iamVjdCB0byBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGIgVGhlIG9iamVjdCB0byBjb3B5IHByb3BlcnRpZXMgZnJvbVxuICogQHBhcmFtIHtPYmplY3R9IHRoaXNBcmcgVGhlIG9iamVjdCB0byBiaW5kIGZ1bmN0aW9uIHRvXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSByZXN1bHRpbmcgdmFsdWUgb2Ygb2JqZWN0IGFcbiAqL1xuZnVuY3Rpb24gZXh0ZW5kKGEsIGIsIHRoaXNBcmcpIHtcbiAgZm9yRWFjaChiLCBmdW5jdGlvbiBhc3NpZ25WYWx1ZSh2YWwsIGtleSkge1xuICAgIGlmICh0aGlzQXJnICYmIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGFba2V5XSA9IGJpbmQodmFsLCB0aGlzQXJnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gdmFsO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBhO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXNBcnJheTogaXNBcnJheSxcbiAgaXNBcnJheUJ1ZmZlcjogaXNBcnJheUJ1ZmZlcixcbiAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICBpc0Zvcm1EYXRhOiBpc0Zvcm1EYXRhLFxuICBpc0FycmF5QnVmZmVyVmlldzogaXNBcnJheUJ1ZmZlclZpZXcsXG4gIGlzU3RyaW5nOiBpc1N0cmluZyxcbiAgaXNOdW1iZXI6IGlzTnVtYmVyLFxuICBpc09iamVjdDogaXNPYmplY3QsXG4gIGlzVW5kZWZpbmVkOiBpc1VuZGVmaW5lZCxcbiAgaXNEYXRlOiBpc0RhdGUsXG4gIGlzRmlsZTogaXNGaWxlLFxuICBpc0Jsb2I6IGlzQmxvYixcbiAgaXNGdW5jdGlvbjogaXNGdW5jdGlvbixcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICBpc1VSTFNlYXJjaFBhcmFtczogaXNVUkxTZWFyY2hQYXJhbXMsXG4gIGlzU3RhbmRhcmRCcm93c2VyRW52OiBpc1N0YW5kYXJkQnJvd3NlckVudixcbiAgZm9yRWFjaDogZm9yRWFjaCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBkZWVwTWVyZ2U6IGRlZXBNZXJnZSxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIHRyaW06IHRyaW1cbn07XG4iLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqLmNvbnN0cnVjdG9yICE9IG51bGwgJiZcbiAgICB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG4iLCI7KGZ1bmN0aW9uKCl7dmFyIGs7ZnVuY3Rpb24gbShhKXt2YXIgYj0wO3JldHVybiBmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fX12YXIgcD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9LHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcztmdW5jdGlvbiByKCl7cj1mdW5jdGlvbigpe307cS5TeW1ib2x8fChxLlN5bWJvbD11KX1mdW5jdGlvbiB2KGEsYil7dGhpcy5zPWE7cCh0aGlzLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX1cbnYucHJvdG90eXBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc307dmFyIHU9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGMpe2lmKHRoaXMgaW5zdGFuY2VvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG5ldyB2KFwianNjb21wX3N5bWJvbF9cIisoY3x8XCJcIikrXCJfXCIrYisrLGMpfXZhciBiPTA7cmV0dXJuIGF9KCk7ZnVuY3Rpb24gdygpe3IoKTt2YXIgYT1xLlN5bWJvbC5pdGVyYXRvcjthfHwoYT1xLlN5bWJvbC5pdGVyYXRvcj1xLlN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZwKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4geChtKHRoaXMpKX19KTt3PWZ1bmN0aW9uKCl7fX1cbmZ1bmN0aW9uIHgoYSl7dygpO2E9e25leHQ6YX07YVtxLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9ZnVuY3Rpb24geShhKXt2YXIgYj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJmFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYj9iLmNhbGwoYSk6e25leHQ6bShhKX19dmFyIHo7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LnNldFByb3RvdHlwZU9mKXo9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIEE7YTp7dmFyIEI9e3Y6ITB9LEM9e307dHJ5e0MuX19wcm90b19fPUI7QT1DLnY7YnJlYWsgYX1jYXRjaChhKXt9QT0hMX16PUE/ZnVuY3Rpb24oYSxiKXthLl9fcHJvdG9fXz1iO2lmKGEuX19wcm90b19fIT09Yil0aHJvdyBuZXcgVHlwZUVycm9yKGErXCIgaXMgbm90IGV4dGVuc2libGVcIik7cmV0dXJuIGF9Om51bGx9dmFyIEQ9ejtcbmZ1bmN0aW9uIEUoKXt0aGlzLmg9ITE7dGhpcy5jPW51bGw7dGhpcy5vPXZvaWQgMDt0aGlzLmI9MTt0aGlzLm09dGhpcy53PTA7dGhpcy5nPW51bGx9ZnVuY3Rpb24gRihhKXtpZihhLmgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7YS5oPSEwfUUucHJvdG90eXBlLmk9ZnVuY3Rpb24oYSl7dGhpcy5vPWF9O0UucHJvdG90eXBlLmo9ZnVuY3Rpb24oYSl7dGhpcy5nPXtBOmEsQjohMH07dGhpcy5iPXRoaXMud3x8dGhpcy5tfTtFLnByb3RvdHlwZVtcInJldHVyblwiXT1mdW5jdGlvbihhKXt0aGlzLmc9e1wicmV0dXJuXCI6YX07dGhpcy5iPXRoaXMubX07ZnVuY3Rpb24gRyhhLGIsYyl7YS5iPWM7cmV0dXJue3ZhbHVlOmJ9fWZ1bmN0aW9uIEgoYSl7dGhpcy5DPWE7dGhpcy5sPVtdO2Zvcih2YXIgYiBpbiBhKXRoaXMubC5wdXNoKGIpO3RoaXMubC5yZXZlcnNlKCl9ZnVuY3Rpb24gSShhKXt0aGlzLmE9bmV3IEU7dGhpcy5EPWF9XG5JLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGEpe0YodGhpcy5hKTtpZih0aGlzLmEuYylyZXR1cm4gSih0aGlzLHRoaXMuYS5jLm5leHQsYSx0aGlzLmEuaSk7dGhpcy5hLmkoYSk7cmV0dXJuIEsodGhpcyl9O2Z1bmN0aW9uIEwoYSxiKXtGKGEuYSk7dmFyIGM9YS5hLmM7aWYoYylyZXR1cm4gSihhLFwicmV0dXJuXCJpbiBjP2NbXCJyZXR1cm5cIl06ZnVuY3Rpb24oZCl7cmV0dXJue3ZhbHVlOmQsZG9uZTohMH19LGIsYS5hW1wicmV0dXJuXCJdKTthLmFbXCJyZXR1cm5cIl0oYik7cmV0dXJuIEsoYSl9SS5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtGKHRoaXMuYSk7aWYodGhpcy5hLmMpcmV0dXJuIEoodGhpcyx0aGlzLmEuY1tcInRocm93XCJdLGEsdGhpcy5hLmkpO3RoaXMuYS5qKGEpO3JldHVybiBLKHRoaXMpfTtcbmZ1bmN0aW9uIEooYSxiLGMsZCl7dHJ5e3ZhciBlPWIuY2FsbChhLmEuYyxjKTtpZighKGUgaW5zdGFuY2VvZiBPYmplY3QpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJdGVyYXRvciByZXN1bHQgXCIrZStcIiBpcyBub3QgYW4gb2JqZWN0XCIpO2lmKCFlLmRvbmUpcmV0dXJuIGEuYS5oPSExLGU7dmFyIGY9ZS52YWx1ZX1jYXRjaChnKXtyZXR1cm4gYS5hLmM9bnVsbCxhLmEuaihnKSxLKGEpfWEuYS5jPW51bGw7ZC5jYWxsKGEuYSxmKTtyZXR1cm4gSyhhKX1mdW5jdGlvbiBLKGEpe2Zvcig7YS5hLmI7KXRyeXt2YXIgYj1hLkQoYS5hKTtpZihiKXJldHVybiBhLmEuaD0hMSx7dmFsdWU6Yi52YWx1ZSxkb25lOiExfX1jYXRjaChjKXthLmEubz12b2lkIDAsYS5hLmooYyl9YS5hLmg9ITE7aWYoYS5hLmcpe2I9YS5hLmc7YS5hLmc9bnVsbDtpZihiLkIpdGhyb3cgYi5BO3JldHVybnt2YWx1ZTpiW1wicmV0dXJuXCJdLGRvbmU6ITB9fXJldHVybnt2YWx1ZTp2b2lkIDAsZG9uZTohMH19XG5mdW5jdGlvbiBNKGEpe3RoaXMubmV4dD1mdW5jdGlvbihiKXtyZXR1cm4gYS5pKGIpfTt0aGlzW1widGhyb3dcIl09ZnVuY3Rpb24oYil7cmV0dXJuIGEuaihiKX07dGhpc1tcInJldHVyblwiXT1mdW5jdGlvbihiKXtyZXR1cm4gTChhLGIpfTt3KCk7dGhpc1tTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9fWZ1bmN0aW9uIE4oYSxiKXt2YXIgYz1uZXcgTShuZXcgSShiKSk7RCYmRChjLGEucHJvdG90eXBlKTtyZXR1cm4gY31cbmlmKFwidW5kZWZpbmVkXCIhPT10eXBlb2YgQmxvYiYmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgRm9ybURhdGF8fCFGb3JtRGF0YS5wcm90b3R5cGUua2V5cykpe3ZhciBPPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYihhW2NdKX0sUD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGIgaW5zdGFuY2VvZiBCbG9iP1tTdHJpbmcoYSksYix2b2lkIDAhPT1jP2MrXCJcIjpcInN0cmluZ1wiPT09dHlwZW9mIGIubmFtZT9iLm5hbWU6XCJibG9iXCJdOltTdHJpbmcoYSksU3RyaW5nKGIpXX0sUT1mdW5jdGlvbihhLGIpe2lmKGEubGVuZ3RoPGIpdGhyb3cgbmV3IFR5cGVFcnJvcihiK1wiIGFyZ3VtZW50IHJlcXVpcmVkLCBidXQgb25seSBcIithLmxlbmd0aCtcIiBwcmVzZW50LlwiKTt9LFM9ZnVuY3Rpb24oYSl7dmFyIGI9eShhKTthPWIubmV4dCgpLnZhbHVlO2I9Yi5uZXh0KCkudmFsdWU7YSBpbnN0YW5jZW9mIEJsb2ImJihhPW5ldyBGaWxlKFthXSxiLHt0eXBlOmEudHlwZSxsYXN0TW9kaWZpZWQ6YS5sYXN0TW9kaWZpZWR9KSk7XG5yZXR1cm4gYX0sVD1cIm9iamVjdFwiPT09dHlwZW9mIHdpbmRvdz93aW5kb3c6XCJvYmplY3RcIj09PXR5cGVvZiBzZWxmP3NlbGY6dGhpcyxVPVQuRm9ybURhdGEsVj1ULlhNTEh0dHBSZXF1ZXN0JiZULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZW5kLFc9VC5SZXF1ZXN0JiZULmZldGNoLFg9VC5uYXZpZ2F0b3ImJlQubmF2aWdhdG9yLnNlbmRCZWFjb247cigpO3ZhciBZPVQuU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWc7WSYmKEJsb2IucHJvdG90eXBlW1ldfHwoQmxvYi5wcm90b3R5cGVbWV09XCJCbG9iXCIpLFwiRmlsZVwiaW4gVCYmIUZpbGUucHJvdG90eXBlW1ldJiYoRmlsZS5wcm90b3R5cGVbWV09XCJGaWxlXCIpKTt0cnl7bmV3IEZpbGUoW10sXCJcIil9Y2F0Y2goYSl7VC5GaWxlPWZ1bmN0aW9uKGIsYyxkKXtiPW5ldyBCbG9iKGIsZCk7ZD1kJiZ2b2lkIDAhPT1kLmxhc3RNb2RpZmllZD9uZXcgRGF0ZShkLmxhc3RNb2RpZmllZCk6bmV3IERhdGU7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYixcbntuYW1lOnt2YWx1ZTpjfSxsYXN0TW9kaWZpZWREYXRlOnt2YWx1ZTpkfSxsYXN0TW9kaWZpZWQ6e3ZhbHVlOitkfSx0b1N0cmluZzp7dmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm5cIltvYmplY3QgRmlsZV1cIn19fSk7WSYmT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsWSx7dmFsdWU6XCJGaWxlXCJ9KTtyZXR1cm4gYn19cigpO3coKTt2YXIgWj1mdW5jdGlvbihhKXt0aGlzLmY9T2JqZWN0LmNyZWF0ZShudWxsKTtpZighYSlyZXR1cm4gdGhpczt2YXIgYj10aGlzO08oYS5lbGVtZW50cyxmdW5jdGlvbihjKXtpZihjLm5hbWUmJiFjLmRpc2FibGVkJiZcInN1Ym1pdFwiIT09Yy50eXBlJiZcImJ1dHRvblwiIT09Yy50eXBlKWlmKFwiZmlsZVwiPT09Yy50eXBlKXt2YXIgZD1jLmZpbGVzJiZjLmZpbGVzLmxlbmd0aD9jLmZpbGVzOltuZXcgRmlsZShbXSxcIlwiLHt0eXBlOlwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCJ9KV07TyhkLGZ1bmN0aW9uKGUpe2IuYXBwZW5kKGMubmFtZSxlKX0pfWVsc2VcInNlbGVjdC1tdWx0aXBsZVwiPT09XG5jLnR5cGV8fFwic2VsZWN0LW9uZVwiPT09Yy50eXBlP08oYy5vcHRpb25zLGZ1bmN0aW9uKGUpeyFlLmRpc2FibGVkJiZlLnNlbGVjdGVkJiZiLmFwcGVuZChjLm5hbWUsZS52YWx1ZSl9KTpcImNoZWNrYm94XCI9PT1jLnR5cGV8fFwicmFkaW9cIj09PWMudHlwZT9jLmNoZWNrZWQmJmIuYXBwZW5kKGMubmFtZSxjLnZhbHVlKTooZD1cInRleHRhcmVhXCI9PT1jLnR5cGU/Yy52YWx1ZS5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKS5yZXBsYWNlKC9cXG4vZyxcIlxcclxcblwiKTpjLnZhbHVlLGIuYXBwZW5kKGMubmFtZSxkKSl9KX07az1aLnByb3RvdHlwZTtrLmFwcGVuZD1mdW5jdGlvbihhLGIsYyl7UShhcmd1bWVudHMsMik7dmFyIGQ9eShQLmFwcGx5KG51bGwsYXJndW1lbnRzKSk7YT1kLm5leHQoKS52YWx1ZTtiPWQubmV4dCgpLnZhbHVlO2M9ZC5uZXh0KCkudmFsdWU7ZD10aGlzLmY7ZFthXXx8KGRbYV09W10pO2RbYV0ucHVzaChbYixjXSl9O2tbXCJkZWxldGVcIl09ZnVuY3Rpb24oYSl7UShhcmd1bWVudHMsXG4xKTtkZWxldGUgdGhpcy5mW1N0cmluZyhhKV19O2suZW50cmllcz1mdW5jdGlvbiBiKCl7dmFyIGM9dGhpcyxkLGUsZixnLGgsdDtyZXR1cm4gTihiLGZ1bmN0aW9uKGwpe3N3aXRjaChsLmIpe2Nhc2UgMTpkPWMuZixmPW5ldyBIKGQpO2Nhc2UgMjp2YXIgbjthOntmb3Iobj1mOzA8bi5sLmxlbmd0aDspe3ZhciBSPW4ubC5wb3AoKTtpZihSIGluIG4uQyl7bj1SO2JyZWFrIGF9fW49bnVsbH1pZihudWxsPT0oZT1uKSl7bC5iPTA7YnJlYWt9Zz15KGRbZV0pO2g9Zy5uZXh0KCk7Y2FzZSA1OmlmKGguZG9uZSl7bC5iPTI7YnJlYWt9dD1oLnZhbHVlO3JldHVybiBHKGwsW2UsUyh0KV0sNik7Y2FzZSA2Omg9Zy5uZXh0KCksbC5iPTV9fSl9O2suZm9yRWFjaD1mdW5jdGlvbihiLGMpe1EoYXJndW1lbnRzLDEpO2Zvcih2YXIgZD15KHRoaXMpLGU9ZC5uZXh0KCk7IWUuZG9uZTtlPWQubmV4dCgpKXt2YXIgZj15KGUudmFsdWUpO2U9Zi5uZXh0KCkudmFsdWU7Zj1mLm5leHQoKS52YWx1ZTtcbmIuY2FsbChjLGYsZSx0aGlzKX19O2suZ2V0PWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3ZhciBjPXRoaXMuZjtiPVN0cmluZyhiKTtyZXR1cm4gY1tiXT9TKGNbYl1bMF0pOm51bGx9O2suZ2V0QWxsPWZ1bmN0aW9uKGIpe1EoYXJndW1lbnRzLDEpO3JldHVybih0aGlzLmZbU3RyaW5nKGIpXXx8W10pLm1hcChTKX07ay5oYXM9ZnVuY3Rpb24oYil7UShhcmd1bWVudHMsMSk7cmV0dXJuIFN0cmluZyhiKWluIHRoaXMuZn07ay5rZXlzPWZ1bmN0aW9uIGMoKXt2YXIgZD10aGlzLGUsZixnLGgsdDtyZXR1cm4gTihjLGZ1bmN0aW9uKGwpezE9PWwuYiYmKGU9eShkKSxmPWUubmV4dCgpKTtpZigzIT1sLmIpe2lmKGYuZG9uZSl7bC5iPTA7cmV0dXJufWc9Zi52YWx1ZTtoPXkoZyk7dD1oLm5leHQoKS52YWx1ZTtyZXR1cm4gRyhsLHQsMyl9Zj1lLm5leHQoKTtsLmI9Mn0pfTtrLnNldD1mdW5jdGlvbihjLGQsZSl7UShhcmd1bWVudHMsMik7dmFyIGY9UC5hcHBseShudWxsLGFyZ3VtZW50cyk7XG50aGlzLmZbZlswXV09W1tmWzFdLGZbMl1dXX07ay52YWx1ZXM9ZnVuY3Rpb24gZCgpe3ZhciBlPXRoaXMsZixnLGgsdCxsO3JldHVybiBOKGQsZnVuY3Rpb24obil7MT09bi5iJiYoZj15KGUpLGc9Zi5uZXh0KCkpO2lmKDMhPW4uYil7aWYoZy5kb25lKXtuLmI9MDtyZXR1cm59aD1nLnZhbHVlO3Q9eShoKTt0Lm5leHQoKTtsPXQubmV4dCgpLnZhbHVlO3JldHVybiBHKG4sbCwzKX1nPWYubmV4dCgpO24uYj0yfSl9O1oucHJvdG90eXBlLl9hc05hdGl2ZT1mdW5jdGlvbigpe2Zvcih2YXIgZD1uZXcgVSxlPXkodGhpcyksZj1lLm5leHQoKTshZi5kb25lO2Y9ZS5uZXh0KCkpe3ZhciBnPXkoZi52YWx1ZSk7Zj1nLm5leHQoKS52YWx1ZTtnPWcubmV4dCgpLnZhbHVlO2QuYXBwZW5kKGYsZyl9cmV0dXJuIGR9O1oucHJvdG90eXBlLl9ibG9iPWZ1bmN0aW9uKCl7Zm9yKHZhciBkPVwiLS0tLWZvcm1kYXRhLXBvbHlmaWxsLVwiK01hdGgucmFuZG9tKCksZT1bXSxmPXkodGhpcyksZz1mLm5leHQoKTshZy5kb25lO2c9XG5mLm5leHQoKSl7dmFyIGg9eShnLnZhbHVlKTtnPWgubmV4dCgpLnZhbHVlO2g9aC5uZXh0KCkudmFsdWU7ZS5wdXNoKFwiLS1cIitkK1wiXFxyXFxuXCIpO2ggaW5zdGFuY2VvZiBCbG9iP2UucHVzaCgnQ29udGVudC1EaXNwb3NpdGlvbjogZm9ybS1kYXRhOyBuYW1lPVwiJytnKydcIjsgZmlsZW5hbWU9XCInK2gubmFtZSsnXCJcXHJcXG4nLFwiQ29udGVudC1UeXBlOiBcIisoaC50eXBlfHxcImFwcGxpY2F0aW9uL29jdGV0LXN0cmVhbVwiKStcIlxcclxcblxcclxcblwiLGgsXCJcXHJcXG5cIik6ZS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInK2crJ1wiXFxyXFxuXFxyXFxuJytoK1wiXFxyXFxuXCIpfWUucHVzaChcIi0tXCIrZCtcIi0tXCIpO3JldHVybiBuZXcgQmxvYihlLHt0eXBlOlwibXVsdGlwYXJ0L2Zvcm0tZGF0YTsgYm91bmRhcnk9XCIrZH0pfTtaLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZW50cmllcygpfTtaLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVyblwiW29iamVjdCBGb3JtRGF0YV1cIn07XG5ZJiYoWi5wcm90b3R5cGVbWV09XCJGb3JtRGF0YVwiKTtpZihWKXt2YXIgYWE9VC5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlcjtULlhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZS5zZXRSZXF1ZXN0SGVhZGVyPWZ1bmN0aW9uKGQsZSl7YWEuY2FsbCh0aGlzLGQsZSk7XCJjb250ZW50LXR5cGVcIj09PWQudG9Mb3dlckNhc2UoKSYmKHRoaXMudT0hMCl9O1QuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQ9ZnVuY3Rpb24oZCl7ZCBpbnN0YW5jZW9mIFo/KGQ9ZC5fYmxvYigpLHRoaXMudXx8dGhpcy5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsZC50eXBlKSxWLmNhbGwodGhpcyxkKSk6Vi5jYWxsKHRoaXMsZCl9fWlmKFcpe3ZhciBiYT1ULmZldGNoO1QuZmV0Y2g9ZnVuY3Rpb24oZCxlKXtlJiZlLmJvZHkmJmUuYm9keSBpbnN0YW5jZW9mIFomJihlLmJvZHk9ZS5ib2R5Ll9ibG9iKCkpO3JldHVybiBiYS5jYWxsKHRoaXMsZCxlKX19WCYmKFQubmF2aWdhdG9yLnNlbmRCZWFjb249XG5mdW5jdGlvbihkLGUpe2UgaW5zdGFuY2VvZiBaJiYoZT1lLl9hc05hdGl2ZSgpKTtyZXR1cm4gWC5jYWxsKHRoaXMsZCxlKX0pO1QuRm9ybURhdGE9Wn07XG59KSgpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKlxuICpcbiAqXG4gKiBAYXV0aG9yIEplcnJ5IEJlbmR5IDxqZXJyeUBpY2V3aW5nY2MuY29tPlxuICogQGxpY2VuY2UgTUlUXG4gKlxuICovXG5cbihmdW5jdGlvbihzZWxmKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA9IChzZWxmLlVSTFNlYXJjaFBhcmFtcyAmJiBzZWxmLlVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuZ2V0KSA/IHNlbGYuVVJMU2VhcmNoUGFyYW1zIDogbnVsbCxcbiAgICAgICAgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgKG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoe2E6IDF9KSkudG9TdHJpbmcoKSA9PT0gJ2E9MScsXG4gICAgICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIHNhZmFyaSAxMC4xIChhbmQgZWFybGllcikgdGhhdCBpbmNvcnJlY3RseSBkZWNvZGVzIGAlMkJgIGFzIGFuIGVtcHR5IHNwYWNlIGFuZCBub3QgYSBwbHVzLlxuICAgICAgICBkZWNvZGVzUGx1c2VzQ29ycmVjdGx5ID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKCdzPSUyQicpLmdldCgncycpID09PSAnKycpLFxuICAgICAgICBfX1VSTFNlYXJjaFBhcmFtc19fID0gXCJfX1VSTFNlYXJjaFBhcmFtc19fXCIsXG4gICAgICAgIC8vIEZpeCBidWcgaW4gRWRnZSB3aGljaCBjYW5ub3QgZW5jb2RlICcgJicgY29ycmVjdGx5XG4gICAgICAgIGVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5ID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zID8gKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFtcGVyc2FuZFRlc3QgPSBuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICAgICAgICBhbXBlcnNhbmRUZXN0LmFwcGVuZCgncycsICcgJicpO1xuICAgICAgICAgICAgcmV0dXJuIGFtcGVyc2FuZFRlc3QudG9TdHJpbmcoKSA9PT0gJ3M9KyUyNic7XG4gICAgICAgIH0pKCkgOiB0cnVlLFxuICAgICAgICBwcm90b3R5cGUgPSBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbC5wcm90b3R5cGUsXG4gICAgICAgIGl0ZXJhYmxlID0gISEoc2VsZi5TeW1ib2wgJiYgc2VsZi5TeW1ib2wuaXRlcmF0b3IpO1xuXG4gICAgaWYgKG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiBpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciAmJiBkZWNvZGVzUGx1c2VzQ29ycmVjdGx5ICYmIGVuY29kZXNBbXBlcnNhbmRzQ29ycmVjdGx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIE1ha2UgYSBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fHN0cmluZ3xVUkxTZWFyY2hQYXJhbXN9IHNlYXJjaFxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKHNlYXJjaCkge1xuICAgICAgICBzZWFyY2ggPSBzZWFyY2ggfHwgXCJcIjtcblxuICAgICAgICAvLyBzdXBwb3J0IGNvbnN0cnVjdCBvYmplY3Qgd2l0aCBhbm90aGVyIFVSTFNlYXJjaFBhcmFtcyBpbnN0YW5jZVxuICAgICAgICBpZiAoc2VhcmNoIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zIHx8IHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKSB7XG4gICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2gudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSA9IHBhcnNlVG9EaWN0KHNlYXJjaCk7XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBBcHBlbmRzIGEgc3BlY2lmaWVkIGtleS92YWx1ZSBwYWlyIGFzIGEgbmV3IHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5hcHBlbmQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBhcHBlbmRUbyh0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSwgbmFtZSwgdmFsdWUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWxldGVzIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLCBhbmQgaXRzIGFzc29jaWF0ZWQgdmFsdWUsXG4gICAgICogZnJvbSB0aGUgbGlzdCBvZiBhbGwgc2VhcmNoIHBhcmFtZXRlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqL1xuICAgIHByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXSBbbmFtZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZpcnN0IHZhbHVlIGFzc29jaWF0ZWQgdG8gdGhlIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVsbH1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdFtuYW1lXVswXSA6IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSB2YWx1ZXMgYXNzb2NpYXRpb24gd2l0aCBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtBcnJheX1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgICAgICByZXR1cm4gbmFtZSBpbiBkaWN0ID8gZGljdCBbbmFtZV0uc2xpY2UoMCkgOiBbXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIEJvb2xlYW4gaW5kaWNhdGluZyBpZiBzdWNoIGEgc2VhcmNoIHBhcmFtZXRlciBleGlzdHMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHJldHVybiBuYW1lIGluIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHRvIGEgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciB0b1xuICAgICAqIHRoZSBnaXZlbiB2YWx1ZS4gSWYgdGhlcmUgd2VyZSBzZXZlcmFsIHZhbHVlcywgZGVsZXRlIHRoZVxuICAgICAqIG90aGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgcHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIHNldChuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXVtuYW1lXSA9IFsnJyArIHZhbHVlXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHN0cmluZyBjb250YWluZyBhIHF1ZXJ5IHN0cmluZyBzdWl0YWJsZSBmb3IgdXNlIGluIGEgVVJMLlxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBwcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzW19fVVJMU2VhcmNoUGFyYW1zX19dLCBxdWVyeSA9IFtdLCBpLCBrZXksIG5hbWUsIHZhbHVlO1xuICAgICAgICBmb3IgKGtleSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBuYW1lID0gZW5jb2RlKGtleSk7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCB2YWx1ZSA9IGRpY3Rba2V5XTsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcXVlcnkucHVzaChuYW1lICsgJz0nICsgZW5jb2RlKHZhbHVlW2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5LmpvaW4oJyYnKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlcmUgaXMgYSBidWcgaW4gU2FmYXJpIDEwLjEgYW5kIGBQcm94eWBpbmcgaXQgaXMgbm90IGVub3VnaC5cbiAgICB2YXIgZm9yU3VyZVVzZVBvbHlmaWxsID0gIWRlY29kZXNQbHVzZXNDb3JyZWN0bHk7XG4gICAgdmFyIHVzZVByb3h5ID0gKCFmb3JTdXJlVXNlUG9seWZpbGwgJiYgbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmICFpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciAmJiBzZWxmLlByb3h5KTtcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpdGVyYXRvcltzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMU2VhcmNoUGFyYW1zJzogU2VxdWVuY2UgaW5pdGlhbGl6ZXIgbXVzdCBvbmx5IGNvbnRhaW4gcGFpciBlbGVtZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBzZWFyY2hba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihcIj9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWlycyA9IHNlYXJjaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogKFxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLnB1c2godmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgICAgIHJldHVybiAhIXZhbCAmJiAnW29iamVjdCBBcnJheV0nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9lcy9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXMvZXZlbnRzXCI7XG5pbXBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSBmcm9tIFwiLi4vZXMvZm9ybXNcIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL2VzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL2VzL3JlcXVlc3RcIjtcbmltcG9ydCB7U2l0ZX0gZnJvbSBcIi4uL2VzL3NpdGVcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uL2VzL3N0cmluZ3NcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi9lcy90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vZXMvdXNlclwiO1xuaW1wb3J0IHtUb2dnbGVPbk1vYmlsZX0gZnJvbSBcIi4uL2VzL3RvZ2dsZS9Ub2dnbGVPbk1vYmlsZVwiO1xuaW1wb3J0IHtjbG9uZX0gZnJvbSBcIi4uL2VzL2Nsb25lXCI7XG5cbi8vY3JlYXRlIGEga2V5OnZhbCBvYmplY3Qgb2YgYWxsIGNvbXBvbmVudHNcbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgZG9tOmRvbSxcbiAgICBldmVudHM6ZXZlbnRzLFxuICAgIFhIUkZvcm06WEhSRm9ybSxcbiAgICBGb3JtRnJvbVVSTDpGb3JtRnJvbVVSTCxcbiAgICBuYXZpZ2F0aW9uOm5hdmlnYXRpb24sXG4gICAgcmVxdWVzdDpyZXF1ZXN0LFxuICAgIFNpdGU6U2l0ZSxcbiAgICBzdHJpbmdzOnN0cmluZ3MsXG4gICAgdHlwZV9jaGVja3M6dHlwZV9jaGVja3MsXG4gICAgVXNlcjpVc2VyLFxuICAgIFRvZ2dsZU9uTW9iaWxlOlRvZ2dsZU9uTW9iaWxlLFxuICAgIGNsb25lOiBjbG9uZSxcbn07XG5cbi8qKlxuICogQ2FsbCB0aGlzIGZ1bmN0aW9uIHRvIHRpZSBhbGwganBhY2sgY29tcG9uZW50cyBkaXJlY3RseSB0byB0aGUgd2luZG93IGZvciBnbG9iYWwgdXNlXG4gKlxuICogVGhpcyBtZWFucyBpbnN0ZWFkIG9mIGNhbGxpbmcganBhY2suc3RyaW5ncy51Y2ZpcnN0KCksIHlvdSBjYW4ganVzdCBjYWxsIHN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICogVGhpcyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSBqcGFjaydzIG5hbWVzIG1heSBiZSB0b28gZ2VuZXJpYyBhbmQgY29uZmxpY3QuXG4gKlxuICogSWYgeW91IHdhbnQgdG8gc2V0IGEgZGlmZmVyZW50IG5hbWVzcGFjZSB0aGFuIGpwYWNrLCB0aGF0J3MgZmluZSwgYnV0IG5vdCB1c2luZyBhIG5hbWVzcGFjZSBhdCBhbGwgY2FuIGJlIHJpc2t5XG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogc2V0R2xvYmFsKFwiJFwiKSAtIHRoZW4geW91IGNhbiBjYWxsOiAkLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJfXCIpIC0gdGhlbiB5b3UgY2FuIGNhbGw6IF8uc3RyaW5ncy51Y2ZpcnN0KClcbiAqIHNldEdsb2JhbChcIlBlYXNBcmVHcm9zc1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBQZWFzQXJlR3Jvc3Muc3RyaW5ncy51Y2ZpcnN0KClcbiAqXG4gKi9cbmNvbnN0IHNldEdsb2JhbCA9IGZ1bmN0aW9uKG5hbWVzcGFjZSl7XG4gICAgbmFtZXNwYWNlID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2UgOiBudWxsO1xuXG4gICAgLy9mb3IgZWFjaCBmdW5jdGlvbiB3aXRoaW4gZXZlbnRzXG4gICAgZm9yIChjb25zdCBrZXkgaW4gY29tcG9uZW50cykge1xuICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICBpZiggbmFtZXNwYWNlICl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgIHdpbmRvd1tuYW1lc3BhY2VdW2tleV0gPSBjb21wb25lbnRzW2tleV07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgd2luZG93W2tleV0gPSBjb21wb25lbnRzW2tleV07XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vL2V4dGVuZCBjb21wb25lbnRzIHRvIGluY2x1ZGUgdGhlIHNldEdsb2JhbCBtZXRob2RcbmV4cG9ydCBjb25zdCBqcGFjayA9IHsuLi5jb21wb25lbnRzLCAuLi57c2V0R2xvYmFsOiBzZXRHbG9iYWx9fTtcblxuLy9zZXQganBhY2sgZ2xvYmFsbHkgc28gdGhhdCBpdCBjYW4gYmUgdXNlZCBhbnl3aGVyZVxuZ2xvYmFsLmpwYWNrID0ganBhY2s7Il0sInNvdXJjZVJvb3QiOiIifQ==