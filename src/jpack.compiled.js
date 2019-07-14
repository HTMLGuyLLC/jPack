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
     *
     *     or
     *     jpack.events.setGlobal('$');
     *     $.onClick('a', function(){ });
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
     * @param form
     * @returns {*|string|*}
     */
    getSubmitURL(form){
        //if a function, run it
        if( typeof this._submitURL === "function" ) return this._submitURL(form);

        return this._submitURL;
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
        //cache for use inside other scopes
        const self = this;

        //get the provided submit URL
        let url = this.getSubmitURL(form);
        //if the URL is null, grab from the form
        if( url === null ){
            if( form.attributes.action ){ //check that it was set explicitly
                url = form.action; //grab JUST the value
            }
        }
        //default to the URL used to grab the form if it's not provided
        url = !url ? this.getURL() : url;

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
        if (!this.validate(form)) return false;

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
                if( this.getReplaceElement() === replace_el ){
                    this.setReplaceElement(incoming_el);
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
            console.log(e);
            navigation.load(_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function(e) {
            console.log(e);
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
        return `${user.getFname()} ${user.getLname()}`;
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

    //loop through components, objects, plugin_wrappers, and utilities
    [components,objects,plugin_wrappers,utilities].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //set them on window so they're available globally
                if( namespace ){
                    if( typeof window[namespace] === "undefined" ){ window[namespace] = {}; }
                    window[namespace][property] = self[property];
                }else{
                    window[property] = self[property];
                }
            }
        }
    });
};

const jpack = {dom: _es_dom__WEBPACK_IMPORTED_MODULE_0__["dom"], events: _es_events__WEBPACK_IMPORTED_MODULE_1__["events"], XHRForm: _es_forms__WEBPACK_IMPORTED_MODULE_2__["XHRForm"], FormFromURL: _es_forms__WEBPACK_IMPORTED_MODULE_2__["FormFromURL"], navigation: _es_navigation__WEBPACK_IMPORTED_MODULE_3__["navigation"], request: _es_request__WEBPACK_IMPORTED_MODULE_4__["request"], Site: _es_site__WEBPACK_IMPORTED_MODULE_5__["Site"], strings: _es_strings__WEBPACK_IMPORTED_MODULE_6__["strings"], type_checks: _es_type_checks__WEBPACK_IMPORTED_MODULE_7__["type_checks"], User: _es_user__WEBPACK_IMPORTED_MODULE_8__["User"], setGlobal: setGlobal};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZXMvQWJzdHJhY3RDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9lcy9kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL0Zvcm1Gcm9tVVJMLmpzIiwid2VicGFjazovLy8uL2VzL2Zvcm1zL1hIUkZvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vZXMvZm9ybXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvbmF2aWdhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2VzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy90eXBlX2NoZWNrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9lcy91c2VyL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZm9ybWRhdGEtcG9seWZpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbFwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFB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QUFFLDBEQUFPLEVBQUUsa0VBQVcsRUFBRSxxRUFBVSxFQUFFLDREQUFPLEVBQUUsbURBQUksRUFBRSw0REFBTyxFQUFFLHdFQUFXLEVBQUUsbURBQUk7O0FBRTlHO0FBQ0EscUI7Ozs7Ozs7Ozs7OztBQ25EQSx1Qjs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSw0QyIsImZpbGUiOiJqcGFjay5jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgQWJzdHJhY3RDbGFzc3tcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZShkYXRhKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9rZXlzID09PSBcInVuZGVmaW5lZFwiICkgdGhyb3cgYENhbm5vdCBwb3B1bGF0ZSBvYmplY3QgaWYgX2tleXMgcHJvcGVydHkgaXMgbm90IHNldGA7XG5cbiAgICAgICAgLy92YWxpZGF0ZSB0aGUgaW5jb21pbmcgZGF0YSBvYmplY3QgYW5kIG1ha2Ugc3VyZSBpdCBvbmx5IGNvbnRhaW5zIHRoZXNlIGtleXNcbiAgICAgICAgIXR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChkYXRhLCB0aGlzLl9rZXlzLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBrZXkgdGhhdCBpcyBzZXQgaW4gdGhlIGRhdGEgb2JqZWN0LCBzZXQgdGhlIHZhbHVlIG9uIHRoaXNcbiAgICAgICAgdGhpcy5fa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSIsIi8qKlxuICogSFRNTCBET00gaGVscGVyc1xuICovXG5leHBvcnQgY29uc3QgZG9tID0ge1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYSBzaW5nbGUgbmF0aXZlIERPTSBvYmplY3RcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm9uZSBleGlzdFxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9tdWx0aXBsZSAtIHRocm93IGFuIGVycm9yIGlmIG1vcmUgdGhhbiAxIGV4aXN0c1xuICAgICAqIEByZXR1cm5zIEVsZW1lbnR8SFRNTERvY3VtZW50fG51bGxcbiAgICAgKi9cbiAgICBnZXRFbGVtZW50OiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSwgZXJyb3Jfb25fbXVsdGlwbGUpe1xuICAgICAgICBlbCA9IHRoaXMuZ2V0RWxlbWVudHMoZWwsIGVycm9yX29uX25vbmUpO1xuXG4gICAgICAgIGlmKCBlbC5sZW5ndGggPiAxICYmIGVycm9yX29uX211bHRpcGxlICkgdGhyb3cgXCJUb28gbWFueSBET00gZWxlbWVudHMgZm91bmQgaW4gZ2V0RWxlbWVudCBmb3IgXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuXG4gICAgICAgIHJldHVybiBlbFswXTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhbiBhcnJheSBvZiBuYXRpdmUgRE9NIGVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWwgKHN0cmluZywgb2JqZWN0LCBhcnJheSwgalF1ZXJ5IG9iamVjdCwgZXRjKVxuICAgICAqIEBwYXJhbSBlcnJvcl9vbl9ub25lIC0gdGhyb3cgYW4gZXJyb3IgaWYgbm8gZWxlbWVudHMgd2VyZSBmb3VuZCwgZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcmV0dXJucyBbXVxuICAgICAqL1xuICAgIGdldEVsZW1lbnRzOiBmdW5jdGlvbihlbCwgZXJyb3Jfb25fbm9uZSl7XG4gICAgICAgIC8vZGVmYXVsdCB0byBmYWxzZVxuICAgICAgICBlcnJvcl9vbl9ub25lID0gdHlwZW9mIGVycm9yX29uX25vbmUgPT09IFwidW5kZWZpbmVkXCIgPyBmYWxzZSA6IGVycm9yX29uX25vbmU7XG5cbiAgICAgICAgLy9kZWZhdWx0IHRvIGVtcHR5XG4gICAgICAgIGxldCBlbF9hcnJheSA9IFtdO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkIG9yIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgaWYoIHR5cGVvZiBlbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhZWwgKXtcbiAgICAgICAgICAgIC8vZG8gbm90aGluZywgZGVmYXVsdCBpcyBlbXB0eSBhcnJheVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBFbGVtZW50IG9yIEhUTUxEb2N1bWVudCAoYSBzaW5ndWxhciBET00gZWxlbWVudClcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgYSBzdHJpbmcgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIC8vY29udmVydCB0aGUgTm9kZUxpc3QgcmV0dXJuZWQgYnkgcXVlcnlTZWxlY3RvckFsbCBpbnRvIGFuIGFycmF5XG4gICAgICAgICAgICBlbF9hcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpO1xuICAgICAgICAgICAgZWxfYXJyYXkgPSBlbF9hcnJheSA/IEFycmF5LmZyb20oZWxfYXJyYXkpIDogZWxfYXJyYXk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIGpxdWVyeSBvYmplY3Qgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgdmFsdWUgcHJvdmlkZWQgdG8gZ2V0RWxlbWVudHM6IFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKXtcbiAgICAgICAgICAgIHRocm93IFwiRmFpbGVkIHRvIGdldCBhcnJheSBvZiBET00gZWxlbWVudHMgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaG9wZWZ1bGx5IGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgZWwgaXMgYSBzaW5ndWxhciBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1aWNrIG1ldGhvZCBmb3IgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwpe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBhIGRvbSBlbGVtZW50IHdpdGggSFRNTFxuICAgICAqXG4gICAgICogdXNlcyAuZ2V0RWxlbWVudCgpIHNvIGVsIGNhbiBiZSBqdXN0IGFib3V0IGFueXRoaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHtDaGlsZE5vZGV9XG4gICAgICovXG4gICAgcmVwbGFjZUVsV2l0aEhUTUw6IGZ1bmN0aW9uKGVsLCBodG1sKXtcbiAgICAgICAgaWYoIHR5cGVvZiBodG1sICE9PSAnc3RyaW5nJyApIHRocm93IGAke2h0bWx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgZWwgPSB0aGlzLmdldEVsZW1lbnQoZWwpO1xuXG4gICAgICAgIC8vY3JlYXRlIGVsZW1lbnQgZnJvbSBIVE1MXG4gICAgICAgIGxldCBuZXdfZWwgPSAobmV3IERPTVBhcnNlcigpKS5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9pbnNlcnQgdGhlIG5ldyBlbGVtZW50IGJlZm9yZSB0aGUgY3VycmVudFxuICAgICAgICBuZXdfZWwgPSBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdfZWwuZG9jdW1lbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jaGlsZE5vZGVzWzBdLCBlbCk7XG5cbiAgICAgICAgLy9yZW1vdmUgb3JpZ2luYWwgZWxlbWVudFxuICAgICAgICBlbC5yZW1vdmUoKTtcblxuICAgICAgICAvL3JldHVybiB0aGUgbmV3IG9uZVxuICAgICAgICByZXR1cm4gbmV3X2VsO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kIHByZXZlbnREZWZhdWx0IGV2ZW50cyAoYW5kIG90aGVycyBmb3IgY29uc2lzdGVuY3kpXG4gKi9cbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZXNlIGZ1bmN0aW9ucyBnbG9iYWxseSBzbyB5b3UgY2FuIHVzZSB0aGVtIHdpdGhvdXQgYSBuYW1lc3BhY2Ugb3Igd2l0aCBhIGN1c3RvbSBvbmVcbiAgICAgKlxuICAgICAqIFVzZSBhdCB5b3VyIG93biByaXNrIC0gbWF5IGNhdXNlIGNvbmZsaWN0cyFcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6XG4gICAgICogICAgIGpwYWNrLmV2ZW50cy5zZXRHbG9iYWwoKTtcbiAgICAgKiAgICAgb25DbGljaygnYScsIGZ1bmN0aW9uKCl7XG4gICAgICogICAgICAgIC8vZG8gc29tZXRoaW5nICh0aGUgaHJlZiBpcyBwcmV2ZW50ZWQpXG4gICAgICogICAgIH0pO1xuICAgICAqXG4gICAgICogICAgIG9yXG4gICAgICogICAgIGpwYWNrLmV2ZW50cy5zZXRHbG9iYWwoJyQnKTtcbiAgICAgKiAgICAgJC5vbkNsaWNrKCdhJywgZnVuY3Rpb24oKXsgfSk7XG4gICAgICovXG4gICAgc2V0R2xvYmFsOiBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmFtZXNwYWNlID0gdHlwZW9mIG5hbWVzcGFjZSA9PT0gJ3N0cmluZycgPyBuYW1lc3BhY2UgOiBudWxsO1xuXG4gICAgICAgIC8vZm9yIGVhY2ggZnVuY3Rpb24gd2l0aGluIGV2ZW50c1xuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzZWxmKSB7XG4gICAgICAgICAgICAvL3NldCBldmVyeXRoaW5nIHRoYXQncyBhIHJlYWwgbWV0aG9kIGluIGV2ZW50cywgZXhjZXB0IHRoaXMgb25lXG4gICAgICAgICAgICBpZiAoc2VsZi5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkgJiYgcHJvcGVydHkgIT09ICdzZXRHbG9iYWwnKSB7XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgICAgICAgICBpZiggbmFtZXNwYWNlICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygd2luZG93W25hbWVzcGFjZV0gPT09IFwidW5kZWZpbmVkXCIgKXsgd2luZG93W25hbWVzcGFjZV0gPSB7fTsgfVxuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbbmFtZXNwYWNlXVtwcm9wZXJ0eV0gPSBzZWxmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93W3Byb3BlcnR5XSA9IHNlbGZbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tY2xpY2sgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25DbGljazogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkNsaWNrKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1zdWJtaXQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25TdWJtaXQ6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZlN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZFdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1haW5seSBoZXJlIGZvciBjb25zaXN0ZW5jeVxuICAgICAqXG4gICAgICogU2hvcnRoYW5kIG9uLWNoYW5nZSBoYW5kbGVyXG4gICAgICogRE9FUyBOT1QgcHJldmVudERlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdXN1YWxseSBub3QgZGVzaXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9uKGVsLCAnY2hhbmdlJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tY2hhbmdlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZDaGFuZ2U6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmKGVsLCAnY2hhbmdlJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGV2ZW50cyBmcm9tIG9jY3VycmluZ1xuICAgICAqICAobGlrZSBmb3JtcyBzdWJtaXR0aW5nIG9yIGEgbGluayBicmluZ2luZyB5b3UgdG8gYW5vdGhlciBwYWdlKVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKHRoaXMsIFtlXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG5cbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgW2VdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGFuIGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICBvZmY6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXIgYW4gZXZlbnQgb24gYW4gZWxlbWVudC9lbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGV2ZW50X29wdGlvbnNcbiAgICAgKiBAcmV0dXJucyB7KnwqW118Kn1cbiAgICAgKi9cbiAgICB0cmlnZ2VyOiBmdW5jdGlvbihlbCwgZXZlbnQsIGV2ZW50X29wdGlvbnMpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50X29wdGlvbnMgPSB0eXBlb2YgZXZlbnRfb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiBldmVudF9vcHRpb25zO1xuXG4gICAgICAgIC8vY3JlYXRlIHRoZSBldmVudFxuICAgICAgICBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudCwgeyBkZXRhaWw6IGV2ZW50X29wdGlvbnMgfSk7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG59OyIsImltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCB7WEhSRm9ybX0gZnJvbSBcIi4vWEhSRm9ybVwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIEZvcm1Gcm9tVVJMIGNsYXNzXG5jb25zdCBGb3JtRnJvbVVSTERlZmF1bHRzID0ge1xuICAgIGluY29taW5nRWxlbWVudFNlbGVjdG9yOiBudWxsLCAvL3RoZSBmb3JtIGVsZW1lbnQgb3Igd3JhcHBlciB0aGF0IHlvdSB3YW50IHRvIHJldHJpZXZlIGZyb20gdGhlIFVSTFxuICAgIGluc2VydEludG9FbGVtZW50OiBudWxsLCAvL3doYXQgZWxlbWVudCB0byBwdXQgdGhlIGZvcm0gaW50b1xuICAgIG9ubG9hZDogZnVuY3Rpb24oZm9ybSl7IHJldHVybiB0aGlzOyB9LCAvL29uY2UgdGhlIGZvcm0gaXMgbG9hZGVkIG9udG8gdGhlIHBhZ2Vcbn07XG5cbi8qKlxuICpcbiAqIEZvcm1Gcm9tVVJMXG4gKlxuICogVGhpcyBjbGFzcyBhbGxvd3MgeW91IHRvIGdyYWIgYSBmb3JtIGZyb20gYSBVUkwgYW5kIHJldHVybnMgaXQgdG8gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEFsc28gaGFuZGxlcyBmb3JtIHN1Ym1pc3Npb24gdXNpbmcgWEhSIGFuZCBjYW4gb3BlbiBhIG1vZGFsIHRvIGRpc3BsYXkgdGhlIGZvcm1cbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBGb3JtRnJvbVVSTCBleHRlbmRzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHVybCAtIHN0cmluZ1xuICAgICAqIEBwYXJhbSBvcHRpb25zIC0gb2JqZWN0e2luY29taW5nRWxlbWVudFNlbGVjdG9yLGluc2VydEludG9FbGVtZW50LCBvbmxvYWR9XG4gICAgICovXG4gICAgY29uc3RydWN0b3IodXJsLCBvcHRpb25zKXtcbiAgICAgICAgc3VwZXIobnVsbCwgb3B0aW9ucyk7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgLy9pZiBvcHRpb25zIGFyZSB1bmRlZmluZWQsIHNldCB0aGVtXG4gICAgICAgIG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJ1bmRlZmluZWRcIiA/IHt9IDogb3B0aW9ucztcbiAgICAgICAgaWYoIHR5cGVvZiBvcHRpb25zICE9PSBcIm9iamVjdFwiICkgdGhyb3cgYCR7b3B0aW9uc30gaXMgbm90IGFuIG9iamVjdGA7XG5cbiAgICAgICAgLy9leHRlbmQgZGVmYXVsdHMgd2l0aCBwcm92aWRlZCBvcHRpb25zXG4gICAgICAgIG9wdGlvbnMgPSB7Li4uRm9ybUZyb21VUkxEZWZhdWx0cywgLi4ub3B0aW9uc307XG5cbiAgICAgICAgdGhpcy5zZXRVUkwodXJsKTtcbiAgICAgICAgdGhpcy5zZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcihvcHRpb25zLmluY29taW5nRWxlbWVudFNlbGVjdG9yKTtcbiAgICAgICAgdGhpcy5zZXRJbnNlcnRJbnRvRWxlbWVudChvcHRpb25zLmluc2VydEludG9FbGVtZW50KTtcbiAgICAgICAgdGhpcy5vbmxvYWQob3B0aW9ucy5vbmxvYWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlIHRoZSBwYXJlbnQgYmVjYXVzZSBpdCdzIG5vdCByZXF1aXJlZCBmb3IgdGhpcyBjbGFzc1xuICAgICAqXG4gICAgICogU3RpbGwga2VlcGluZyBpdCBmdW5jdGlvbmFsIGJ1dCByZW1vdmluZyBhbGwgdmFsaWRhdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBzZXRGb3JtKGZvcm0pe1xuICAgICAgICB0aGlzLl9mb3JtID0gZm9ybTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0IHRoZSBVUkwgZnJvbSB3aGljaCB0aGUgZm9ybSB3aWxsIGJlIHJldHJpZXZlZFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIHNldFVSTCh1cmwpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHt1cmx9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX3VybCA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtJ3MgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJMKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl91cmw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSWYgdGhlIFVSTCBwcm92aWRlZCByZXR1cm5zIEhUTUwsIHRoaXMgc2VsZWN0b3Igd2lsbCBiZSB1c2VkIHRvIHB1bGwgdGhlIGZvcm0gb3V0XG4gICAgICpcbiAgICAgKiBJZiBsZWZ0IG51bGwsIGl0IHdpbGwgYXNzdW1lIHRoZSBlbnRpcmUgcmVzcG9uc2UgaXMgdGhlIGZvcm0ncyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3I6IHN0cmluZ3xudWxsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3Ioc2VsZWN0b3Ipe1xuICAgICAgICBpZiggc2VsZWN0b3IgIT09IG51bGwgJiYgdHlwZW9mIHNlbGVjdG9yICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yfSBpcyBub3QgYSBzdHJpbmcgb3IgbnVsbCB2YWx1ZWA7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzZWxlY3RvciBmb3IgdGhlIGZvcm0gb3IgYSBwYXJlbnQgb2YgaXQgdGhhdCB3aWxsIGJlIHJldHVybmVkIGZyb20gdGhlIFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvd3MgeW91IHRvIHNldCBhIHBhcmVudCBlbGVtZW50IHRoYXQgdGhlIGZvcm0gd2lsbCBiZSBpbnNlcnRlZCBpbnRvIHVzaW5nIHRoZSBkZWZhdWx0IGluc2VydEZvcm0gbWV0aG9kXG4gICAgICogQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBsZWF2ZSB0aGlzIGFuZCBvdmVycmlkZSBpbnNlcnRGb3JtKCkgYW5kIGhhdmUgbW9yZSBjb250cm9sIG92ZXIgd2hlcmUgaXQgc2hvdWxkIGdvXG4gICAgICpcbiAgICAgKiBVc2VzIGRvbS5nZXRFbGVtZW50KCkgc28geW91IGNhbiBwYXNzIGEgc3RyaW5nLCBqUXVlcnkgb2JqZWN0LCBvYmplY3QsIGV0Y1xuICAgICAqIEhvd2V2ZXIgaWYgbW9yZSB0aGFuIDEgZWxlbWVudCBpcyBkZXRlY3RlZCwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICovXG4gICAgc2V0SW5zZXJ0SW50b0VsZW1lbnQoZWxlbWVudCl7XG4gICAgICAgIHRoaXMuX2luc2VydEludG9FbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IHRoZSBmb3JtIHdpbGwgYmUgaW5zZXJ0ZWQgaW50b1xuICAgICAqXG4gICAgICogQHJldHVybnMgeyp9XG4gICAgICovXG4gICAgZ2V0SW5zZXJ0SW50b0VsZW1lbnQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc2VydEludG9FbGVtZW50O1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGZyb20gdGhlIFVSTCBhbmQgcGFzcyB0byBpbnNlcnRGb3JtXG4gICAgICpcbiAgICAgKiBUaGVyZSBhcmUgdGhyZWUgbWFpbiB3YXlzIHRvIHByb3ZpZGUgdGhlIGZvcm0gZnJvbSB5b3VyIHNlcnZlcjpcbiAgICAgKiAxKSBTdHJhaWdodCBIVE1MLiBUaGUgZW50aXJlIHJlc3BvbnNlIGlzIHRoZSBmb3JtIGFuZCB0aGF0J3MgaXQuXG4gICAgICogMikgU3RyYWlnaHQgSFRNTCwgYnV0IHRoZSBmb3JtIGlzIG9ubHkgYSBwYXJ0IG9mIHRoZSByZXNwb25zZSBzbyBpdCBuZWVkcyB0byBiZSBwYXJzZWQgb3V0IGJhc2VkIG9uIGEgc2VsZWN0b3IuXG4gICAgICogMykgQSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBrZXkgXCJodG1sXCIgbGlrZSB0aGlzOiB7XCJodG1sXCI6XCI8Zm9ybT55b3VyIGZvcm0gaGVyZTwvZm9ybT5cIn1cbiAgICAgKlxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG4gICAgICAgIGF4aW9zLmdldCh0aGlzLmdldFVSTCgpKS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcgKHByb2JhYmx5IEhUTUwpXG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgaWYoIHR5cGVvZiBzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCkgPT09ICdzdHJpbmcnICl7XG4gICAgICAgICAgICAgICAgICAgIC8vcGFyc2UgdGhlIGluY29taW5nIEhUTUxcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gbmF2aWdhdGlvbi5wYXJzZUhUTUwoZGF0YSwgc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy9wcm92aWRlIHRoZSBmb3JtJ3MgSFRNTCBpbiBhbiBvYmplY3QgY29udGFpbmluZyBvdGhlciBkZXRhaWxzIGxpa2UgdGhlIHJvdXRlIGFuZCB0aGUgZnVsbCByZXNwb25zZSB0byBpbnNlcnRGb3JtXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmluc2VydEZvcm0ocGFyc2VkLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9vdGhlcndpc2UgdGhlIGVudGlyZSByZXNwb25zZSBpcyBhc3N1bWVkIHRvIGJlIHRoZSBmb3JtXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybSh7aHRtbDpkYXRhfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2lmIHRoZSByZXNwb25zZSBpcyBhbiBvYmplY3QgKHByb2JhYmx5IEpTT04pXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIEhUTUwgd2FzIHByb3ZpZGVkIGluIHRoZSBvYmplY3RcbiAgICAgICAgICAgICAgICBpZiggdHlwZW9mIGRhdGEuaHRtbCAhPT0gXCJ1bmRlZmluZWRcIiApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhyb3cgYFVuZXhwZWN0ZWQgc2VydmVyIHJlc3BvbnNlICR7ZGF0YX1gO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWxsb3dzIHlvdSB0byBpbnNlcnQgdGhlIGZvcm0gd2hlcmV2ZXIgeW91IHdhbnQgb24gdGhlIHBhZ2VcbiAgICAgKiAgT3ZlcnJpZGUgdGhpcyBtZXRob2QgdG8gY3VzdG9taXplIHdoZXJlIHRoZSBmb3JtIGlzIGluc2VydGVkXG4gICAgICogIChtYXliZSB5b3Ugd2FudCB0byBvcGVuIGEgbW9kYWwgZmlyc3QgYW5kIHBsYWNlIGl0IHRoZXJlPylcbiAgICAgKlxuICAgICAqICBwYXJzZWRfY29udGVudC5odG1sIHdpbGwgYWx3YXlzIGJlIHRoZSBIVE1MXG4gICAgICpcbiAgICAgKiAgcGFyc2VkX2NvbnRlbnQgbWF5IGNvbnRhaW4gb3RoZXIgZGF0YSBsaWtlIHJvdXRlIGFuZCB0aXRsZSBpZiB0aGUgZm9ybSB3YXMgcHVsbGVkIG91dCBvZlxuICAgICAqICAgICBhIGZ1bGwgSFRNTCBwYWdlIHdoaWNoIGNvbnRhaW5zIHRob3NlIGl0ZW1zXG4gICAgICpcbiAgICAgKiAgcmVzcG9uc2UgaXMgdGhlIGZ1bGwgc2VydmVyIHJlc3BvbnNlIChodG1sIHN0cmluZyBvciBvYmplY3QgZnJvbSBKU09OIC0gbm90IHByb3ZpZGVkIGlmIHRoZSByZXNwb25zZSBpcyBvbmx5IHRoZSBmb3JtJ3MgSFRNTClcbiAgICAgKlxuICAgICAqICBmb3JtIGlzIHByb3ZpZGVkIGlmIHRoaXMgaXMgYWZ0ZXIgdGhlIGZvcm0gd2FzIHN1Ym1pdHRlZCBhbmQgSFRNTCB3YXMgcmV0dXJuZWQgZm9ybSB0aGUgc2VydmVyXG4gICAgICpcbiAgICAgKiAgQHBhcmFtIHBhcnNlZF9jb250ZW50XG4gICAgICogIEBwYXJhbSByZXNwb25zZVxuICAgICAqICBAcGFyYW0gZm9ybVxuICAgICAqICBAcmV0dXJucyB7KnxFbGVtZW50fEhUTUxEb2N1bWVudH1cbiAgICAgKi9cbiAgICBpbnNlcnRGb3JtKHBhcnNlZF9jb250ZW50LCByZXNwb25zZSwgZm9ybSl7XG4gICAgICAgIC8vc2VsZWN0b3IgZm9yIHdoZXJlIHRoZSBmb3JtIHdpbGwgZ29cbiAgICAgICAgbGV0IGVsID0gdGhpcy5nZXRJbnNlcnRJbnRvRWxlbWVudCgpO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCBlbCA9PT0gbnVsbCApIHRocm93ICdDYW5ub3QgZGV0ZXJtaW5lIHdoZXJlIHRvIGluc2VydCBmb3JtLiBPdmVyd3JpdGUgaW5zZXJ0Rm9ybSgpIG9yIHByb3ZpZGUgaW5zZXJ0SW50b0VsZW1lbnQnO1xuXG4gICAgICAgIC8vZ2V0IHRoZSBjb250YWluZXIgZWxlbWVudCAtIGVycm9yIGlmIG5vdCBmb3VuZFxuICAgICAgICBlbCA9IGRvbS5nZXRFbGVtZW50KGVsLCB0cnVlKTtcblxuICAgICAgICAvL3B1dCB0aGUgZm9ybSBpbiB0aGUgY29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgZWwuaW5uZXJIVE1MID0gcGFyc2VkX2NvbnRlbnQuaHRtbDtcblxuICAgICAgICAvL2ZpbmQgdGhlIG5ld2x5IGFkZGVkIGZvcm1cbiAgICAgICAgZm9ybSA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcblxuICAgICAgICAvL2F0dGFjaCBhbiBvbi1zdWJtaXQgbGlzdGVuZXIgdG8gc2VuZCB0aGUgZm9ybSdzIHZhbHVlcyB2aWEgWEhSXG4gICAgICAgIHRoaXMuYXR0YWNoU3VibWl0SGFuZGxlcihmb3JtKTtcblxuICAgICAgICAvL3J1biB0aGUgb25sb2FkIGNhbGxiYWNrIG5vdyB0aGF0IHRoZSBmb3JtIGlzIHRoZXJlXG4gICAgICAgIHRoaXMudHJpZ2dlck9ubG9hZChmb3JtKTtcblxuICAgICAgICByZXR1cm4gZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXNlIHRoaXMgbWV0aG9kIHRvIG1vZGlmeSB0aGUgZm9ybSBpbW1lZGlhdGVseSBhZnRlciBpdCdzIGRpc3BsYXllZFxuICAgICAqXG4gICAgICogWW91J2xsIGxpa2VseSB3YW50IHRvIGF0dGFjaCBwbHVnaW5zIGZvciBkYXRlcGlja2Vycy9kcm9wZG93bnMsIG9yIG1heWJlIGhpZGUgYSBmaWVsZCBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgYW5vdGhlclxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgb25sb2FkKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJyApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25sb2FkID0gW107XG4gICAgICAgIHRoaXMuX29ubG9hZC5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGFsbCBvbmxvYWQgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBjbGVhck9ubG9hZENhbGxiYWNrcygpe1xuICAgICAgICB0aGlzLl9vbmxvYWQgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKi9cbiAgICB0cmlnZ2VyT25sb2FkKGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25sb2FkID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX29ubG9hZC5mb3JFYWNoKGZ1bmN0aW9uKG9ubG9hZCl7XG4gICAgICAgICAgICBvbmxvYWQoZm9ybSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL25hdmlnYXRpb25cIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxucmVxdWlyZSgnZm9ybWRhdGEtcG9seWZpbGwnKTtcblxuLy9kZWZhdWx0cyBmb3IgdGhlIFhIUkZvcm0gY2xhc3NcbmNvbnN0IFhIUkZvcm1EZWZhdWx0cyA9IHtcbiAgICB4aHJTdWJtaXQ6IHRydWUsIC8vc3VibWl0IHRoZSBmb3JtIHVzaW5nIFhIUiBpbnN0ZWFkIG9mIHRoZSBkZWZhdWx0IGFjdGlvblxuICAgIHN1Ym1pdFVSTDpudWxsLCAvL3dpbGwgYmUgZ3JhYmJlZCBmcm9tIHRoZSBmb3JtJ3MgYWN0aW9uIGF0dHJpYnV0ZSwgb3IgZmFsbGJhY2sgdG8gdGhlIFVSTCB0aGUgZm9ybSB3YXMgcmV0cmlldmVkIGZyb21cbiAgICBzdWJtaXRNZXRob2Q6bnVsbCwgLy93aWxsIGJlIGdyYWJiZWQgZnJvbSB0aGUgZm9ybSdzIG1ldGhvZCBhdHRyaWJ1dGUsIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgb25FcnJvcjogZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXsgYWxlcnQoZXJyb3IpOyB9LCAvL2NhbGxlZCB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBhbmQgZmFpbHNcbiAgICBvblN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBmb3JtKXsgLy9jYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICAgIGlmKHR5cGVvZiByZXNwb25zZS5zdWNjZXNzID09PSBcInN0cmluZ1wiKXsgYWxlcnQocmVzcG9uc2Uuc3VjY2Vzcyk7IH1cbiAgICAgICAgZWxzZXsgYWxlcnQoXCJZb3VyIHN1Ym1pc3Npb24gaGFzIGJlZW4gcmVjZWl2ZWRcIik7IH1cbiAgICB9LFxuICAgIC8vdmFsaWRhdGUgdGhlIGZvcm0sIGRpc3BsYXkgYW55IGVycm9ycyBhbmQgcmV0dXJuIGZhbHNlIHRvIGJsb2NrIHN1Ym1pc3Npb25cbiAgICB2YWxpZGF0ZUZvcm06IGZ1bmN0aW9uKGZvcm0pe1xuICAgICAgICAvL2FkZCAud2FzLXZhbGlkYXRlZCBmb3IgYm9vdHN0cmFwIHRvIHNob3cgZXJyb3JzXG4gICAgICAgIGZvcm0uY2xhc3NMaXN0LmFkZCgnd2FzLXZhbGlkYXRlZCcpO1xuXG4gICAgICAgIC8vaWYgdGhlcmUgYXJlIGFueSA6aW52YWxpZCBlbGVtZW50cywgdGhlIGZvcm0gaXMgbm90IHZhbGlkXG4gICAgICAgIGNvbnN0IGlzX3ZhbGlkID0gIWZvcm0ucXVlcnlTZWxlY3RvcignOmludmFsaWQnKTtcblxuICAgICAgICAvL2lmIGl0J3MgdmFsaWQsIGNsZWFyIHRoZSB2YWxpZGF0aW9uIGluZGljYXRvcnNcbiAgICAgICAgaWYoIGlzX3ZhbGlkICkgZm9ybS5jbGFzc0xpc3QucmVtb3ZlKCd3YXMtdmFsaWRhdGVkJyk7XG5cbiAgICAgICAgcmV0dXJuIGlzX3ZhbGlkO1xuICAgIH1cbn07XG5cbi8qKlxuICogWEhSRm9ybVxuICpcbiAqIFRoaXMgY2xhc3MgYWxsb3dzIHlvdSB0byBzdWJtaXQgYSBmb3JtIHZpYSBYSFIgYW5kIGVhc2lseSBoYW5kbGUgdGhlIHJlc3VsdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFhIUkZvcm0ge1xuXG4gICAgLyoqXG4gICAgICogRm9ybSBjYW4gYmUganVzdCBhYm91dCBhbnkgZGF0YXR5cGUgLSB1c2VzIGRvbS5nZXRFbGVtZW50KClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcihmb3JtLCBvcHRpb25zKXtcblxuICAgICAgICAvL2lmIG9wdGlvbnMgYXJlIHVuZGVmaW5lZCwgc2V0IHRoZW1cbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBvcHRpb25zO1xuICAgICAgICBpZiggdHlwZW9mIG9wdGlvbnMgIT09IFwib2JqZWN0XCIgKSB0aHJvdyBgJHtvcHRpb25zfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2V4dGVuZCBkZWZhdWx0cyB3aXRoIHByb3ZpZGVkIG9wdGlvbnNcbiAgICAgICAgb3B0aW9ucyA9IHsuLi5YSFJGb3JtRGVmYXVsdHMsIC4uLm9wdGlvbnN9O1xuXG4gICAgICAgIHRoaXMuc2V0Rm9ybShmb3JtKTtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0ZUNhbGxiYWNrKG9wdGlvbnMudmFsaWRhdGVGb3JtKTtcbiAgICAgICAgdGhpcy5zZXRYSFJTdWJtaXQob3B0aW9ucy54aHJTdWJtaXQpO1xuICAgICAgICB0aGlzLnNldFN1Ym1pdE1ldGhvZChvcHRpb25zLnN1Ym1pdE1ldGhvZCk7XG4gICAgICAgIHRoaXMuc2V0U3VibWl0VVJMKG9wdGlvbnMuc3VibWl0VVJMKTtcbiAgICAgICAgdGhpcy5vblN1Y2Nlc3Mob3B0aW9ucy5vblN1Y2Nlc3MpO1xuICAgICAgICB0aGlzLm9uRXJyb3Iob3B0aW9ucy5vbkVycm9yKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldFZhbGlkYXRlQ2FsbGJhY2soY2FsbGJhY2spe1xuICAgICAgICBpZiggdHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIgKSB0aHJvdyBgJHtjYWxsYmFja30gaXMgbm90IGEgZnVuY3Rpb25gO1xuICAgICAgICB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJ1bnMgdGhlIHZhbGlkYXRlIGNhbGxiYWNrIGFuZCBwYXNzZXMgdGhlIGZvcm1cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudWxsfVxuICAgICAqL1xuICAgIHZhbGlkYXRlKGZvcm0pe1xuICAgICAgICBpZiggdHlwZW9mIGZvcm0gPT09IFwidW5kZWZpbmVkXCIgKSBmb3JtID0gdGhpcy5nZXRGb3JtKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZUNhbGxiYWNrKGZvcm0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldCB0aGUgZm9ybSBlbGVtZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqIEByZXR1cm5zIHtYSFJGb3JtfVxuICAgICAqL1xuICAgIHNldEZvcm0oZm9ybSl7XG4gICAgICAgIGlmKCAhZm9ybSB8fCB0eXBlb2YgZm9ybSA9PT0gJ3VuZGVmaW5lZCcgKSB0aHJvdyBgRm9ybSBlbGVtZW50IGlzIHJlcXVpcmVkYDtcblxuICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIGlmKCAhZm9ybSApIHRocm93IGBJbnZhbGlkIGZvcm0gZWxlbWVudCByZWNlaXZlZGA7XG5cbiAgICAgICAgdGhpcy5fZm9ybSA9IGZvcm07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IHRoZSBmb3JtIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHsqfEVsZW1lbnR8SFRNTERvY3VtZW50fVxuICAgICAqL1xuICAgIGdldEZvcm0oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgeW91IHdhbnQgdGhlIGZvcm0gdG8gYmUgc3VibWl0dGVkIHVzaW5nIGFuIFhIUiByZXF1ZXN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZW5hYmxlZCAtIGJvb2xcbiAgICAgKi9cbiAgICBzZXRYSFJTdWJtaXQoZW5hYmxlZCl7XG4gICAgICAgIHRoaXMuX3hoclN1Ym1pdCA9ICEhZW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSG93IHRvIHN1Ym1pdCB0aGUgZm9ybSAtIGlmIHNldCB0byBudWxsLCB0aGUgbWV0aG9kIHdpbGwgYmUgcHVsbGVkIGZyb20gdGhlIGZvcm0nc1xuICAgICAqICBtZXRob2QgYXR0cmlidXRlIG9yIGZhbGxiYWNrIHRvIFwiUE9TVFwiXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbWV0aG9kXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0TWV0aG9kKG1ldGhvZCl7XG4gICAgICAgIGlmKCB0eXBlb2YgbWV0aG9kICE9PSBcInN0cmluZ1wiICYmIG1ldGhvZCAhPT0gbnVsbCApIHRocm93IGAke21ldGhvZH0gaXMgbm90IGEgc3RyaW5nIG9yIG51bGxgO1xuICAgICAgICB0aGlzLl9zdWJtaXRNZXRob2QgPSBtZXRob2Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGZvcm0gc3VibWlzc2lvbiBtZXRob2QgKFBPU1QsIEdFVCwgZXRjKVxuICAgICAqXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFN1Ym1pdE1ldGhvZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0TWV0aG9kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgdG8gc3VibWl0IHRoZSBmb3JtIHRvXG4gICAgICpcbiAgICAgKiBJZiBudWxsLCB0aGUgZm9ybSdzIGFjdGlvbiBhdHRyaWJ1dGUgd2lsbCBiZSB1c2VkLlxuICAgICAqIFVzZSBhIGZ1bmN0aW9uIGlmIHlvdSB3YW50IHRvIGR5bmFtaWNhbGx5IGdlbmVyYXRlIHRoZSBVUkwganVzdCBwcmlvciB0byB0aGUgcmVxdWVzdFxuICAgICAqICAtIHRoZSBmdW5jdGlvbiB3aWxsIHJlY2VpdmUgdGhlIGZvcm0gYXMgYSBwYXJhbVxuICAgICAqIEdlbmVyYWxseSBzcGVha2luZyBhIHN0cmluZyBpcyBzdWZmaWNpZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge2Zvcm19XG4gICAgICovXG4gICAgc2V0U3VibWl0VVJMKHVybCl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiXG4gICAgICAgICAgICAmJiB0eXBlb2YgdXJsICE9PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgICYmIHVybCAhPT0gbnVsbCApIHRocm93IGAke3VybH0gaXMgbm90IGEgc3RyaW5nLCBmdW5jdGlvbiwgb3IgbnVsbGA7XG5cbiAgICAgICAgdGhpcy5fc3VibWl0VVJMID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBVUkwgdGhlIGZvcm0gd2lsbCBiZSBzdWJtaXR0ZWQgdG9cbiAgICAgKlxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfCp9XG4gICAgICovXG4gICAgZ2V0U3VibWl0VVJMKGZvcm0pe1xuICAgICAgICAvL2lmIGEgZnVuY3Rpb24sIHJ1biBpdFxuICAgICAgICBpZiggdHlwZW9mIHRoaXMuX3N1Ym1pdFVSTCA9PT0gXCJmdW5jdGlvblwiICkgcmV0dXJuIHRoaXMuX3N1Ym1pdFVSTChmb3JtKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fc3VibWl0VVJMO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIHRoZSBvbiBzdWJtaXQgaGFuZGxlciAob25seSBpZiB4aHJTdWJtaXQgaXMgdHJ1ZSlcbiAgICAgKlxuICAgICAqIFBhc3MgdGhlIGZvcm0gb3IgZm9ybSBzZWxlY3RvclxuICAgICAqL1xuICAgIGF0dGFjaFN1Ym1pdEhhbmRsZXIoZm9ybSl7XG4gICAgICAgIGlmKCAhdGhpcy5feGhyU3VibWl0ICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgbm90IHBhc3NlZCwgZ2V0IGl0IGZyb20gdGhpcyBvYmplY3RcbiAgICAgICAgaWYoIHR5cGVvZiBmb3JtID09PSBcInVuZGVmaW5lZFwiICkge1xuICAgICAgICAgICAgZm9ybSA9IHRoaXMuZ2V0Rm9ybSgpO1xuICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICBmb3JtID0gZG9tLmdldEVsZW1lbnQoZm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiggIWZvcm0gKSB0aHJvdyBgRm9ybSBlbGVtZW50IG5vdCByZWNlaXZlZCwgY2Fubm90IGF0dGFjaCBzdWJtaXQgaGFuZGxlcmA7XG5cbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vaWYgeGhyIHN1Ym1pdCBpcyBkaXNhYmxlZCwgZG9uJ3QgYmxvY2sgdGhlIGRlZmF1bHQgYWN0aW9uXG4gICAgICAgICAgICBpZiggIXNlbGYuX3hoclN1Ym1pdCApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgc2VsZi5zdWJtaXRGb3JtKGZvcm0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXQgYSBjYWxsYmFjayBmdW5jdGlvbiB0byBydW4gd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWQgc3VjY2Vzc2Z1bGx5XG4gICAgICpcbiAgICAgKiBZb3VyIGZ1bmN0aW9uIHdpbGwgcmVjZWl2ZSAyIHBhcmFtcywgdGhlIGZpcnN0IGlzIHRoZSByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIgYW5kIHRoZSBzZWNvbmQgaXMgdGhlIGZvcm0gb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtmb3JtfVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhjYWxsYmFjayl7XG4gICAgICAgIGlmKCB0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIiApIHRocm93IGAke2NhbGxiYWNrfSBpcyBub3QgYSBmdW5jdGlvbmA7XG4gICAgICAgIGlmKCB0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHRoaXMuX29uU3VjY2Vzcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbGwgb25TdWNjZXNzIGNhbGxiYWNrcyB5b3UndmUgc2V0XG4gICAgICovXG4gICAgY2xlYXJPblN1Y2Nlc3NDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25TdWNjZXNzID0gW107XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRyaWdnZXJzIGFsbCBvblN1Y2Nlc3MgY2FsbGJhY2tzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcmVzcG9uc2VcbiAgICAgKiBAcGFyYW0gZm9ybVxuICAgICAqL1xuICAgIHRyaWdnZXJPblN1Y2Nlc3MocmVzcG9uc2UsIGZvcm0pe1xuICAgICAgICBpZih0eXBlb2YgdGhpcy5fb25TdWNjZXNzID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB0aGlzLl9vblN1Y2Nlc3MuZm9yRWFjaChmdW5jdGlvbihvblN1Y2Nlc3Mpe1xuICAgICAgICAgICAgb25TdWNjZXNzKHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBhIGNhbGxiYWNrIGZ1bmN0aW9uIHRvIHJ1biB3aGVuIHRoZSBmb3JtIGlzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtGb3JtRnJvbVVSTH1cbiAgICAgKi9cbiAgICBvbkVycm9yKGNhbGxiYWNrKXtcbiAgICAgICAgaWYoIHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiICkgdGhyb3cgYCR7Y2FsbGJhY2t9IGlzIG5vdCBhIGZ1bmN0aW9uYDtcbiAgICAgICAgaWYoIHR5cGVvZiB0aGlzLl9vbkVycm9yID09PSBcInVuZGVmaW5lZFwiICkgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICB0aGlzLl9vbkVycm9yLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgYWxsIG9uRXJyb3IgY2FsbGJhY2tzIHlvdSd2ZSBzZXRcbiAgICAgKiBAcmV0dXJucyB7WEhSRm9ybX1cbiAgICAgKi9cbiAgICBjbGVhck9uRXJyb3JDYWxsYmFja3MoKXtcbiAgICAgICAgdGhpcy5fb25FcnJvciA9IFtdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyB0aGUgb25FcnJvciBjYWxsYmFja3NcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlcnJvclxuICAgICAqIEBwYXJhbSByZXNwb25zZVxuICAgICAqIEBwYXJhbSBmb3JtXG4gICAgICogQHJldHVybnMge1hIUkZvcm19XG4gICAgICovXG4gICAgdHJpZ2dlck9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKXtcbiAgICAgICAgaWYodHlwZW9mIHRoaXMuX29uRXJyb3IgPT09IFwidW5kZWZpbmVkXCIgKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHRoaXMuX29uRXJyb3IuZm9yRWFjaChmdW5jdGlvbihvbkVycm9yKXtcbiAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IsIHJlc3BvbnNlLCBmb3JtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdHMgdGhlIGZvcm0gdXNpbmcgWEhSXG4gICAgICpcbiAgICAgKiAxKSBEZXRlcm1pbmVzIHRoZSBVUkxcbiAgICAgKiAyKSBEZXRlcm1pbmVzIHRoZSBtZXRob2QgKEdFVCwgUE9TVCwgUEFUQ0gsIGV0YylcbiAgICAgKiAzKSBEZXRlcm1pbmVzIGlmIHRoZSBmb3JtIGlzIHZhbGlkXG4gICAgICogNCkgR2V0cyB0aGUgZm9ybSdzIHZhbHVlc1xuICAgICAqIDUpIFN1Ym1pdHMgdGhlIGZvcm1cbiAgICAgKiA2KSBSZXBsYWNlcyB0aGUgZm9ybSwgcnVucyBvbkVycm9yLCBvciBydW5zIG9uU3VjY2VzcyBiYXNlZCBvbiB0aGUgcmVzcG9uc2UgKHNlZSBuZXh0IGxpbmUpXG4gICAgICogIFJlc3BvbnNlIFR5cGUgPSBBY3Rpb24gVGFrZW5cbiAgICAgKiAgICBzdHJpbmcgaHRtbCB3aXRoIGZvcm0gaW5zaWRlID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgc3RyaW5nIGh0bWwgd2l0aCBpbmNvbWluZ0VsZW1lbnRTZWxlY3RvciBzZXQsIGJ1dCBub3QgZm91bmQgPSBraWNrb2ZmIG9uRXJyb3JcbiAgICAgKiAgICBzdHJpbmcgLSByZXBsYWNlIGZvcm0gb24gcGFnZSB3aXRoIGVudGlyZSByZXNwb25zZVxuICAgICAqICAgIG9iamVjdC5odG1sID0gcmVwbGFjZSBmb3JtXG4gICAgICogICAgb2JqZWN0LmVycm9yID0ga2lja29mZiBvbkVycm9yXG4gICAgICogICAgb2JqZWN0IGluIGdlbmVyYWwgPSBraWNrb2ZmIG9uU3VjY2Vzc1xuICAgICAqXG4gICAgICogQHBhcmFtIGZvcm1cbiAgICAgKiBAcmV0dXJucyB7Zm9ybXxib29sZWFufVxuICAgICAqL1xuICAgIHN1Ym1pdEZvcm0oZm9ybSkge1xuICAgICAgICAvL2NhY2hlIGZvciB1c2UgaW5zaWRlIG90aGVyIHNjb3Blc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL2dldCB0aGUgcHJvdmlkZWQgc3VibWl0IFVSTFxuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRTdWJtaXRVUkwoZm9ybSk7XG4gICAgICAgIC8vaWYgdGhlIFVSTCBpcyBudWxsLCBncmFiIGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIHVybCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIGZvcm0uYXR0cmlidXRlcy5hY3Rpb24gKXsgLy9jaGVjayB0aGF0IGl0IHdhcyBzZXQgZXhwbGljaXRseVxuICAgICAgICAgICAgICAgIHVybCA9IGZvcm0uYWN0aW9uOyAvL2dyYWIgSlVTVCB0aGUgdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL2RlZmF1bHQgdG8gdGhlIFVSTCB1c2VkIHRvIGdyYWIgdGhlIGZvcm0gaWYgaXQncyBub3QgcHJvdmlkZWRcbiAgICAgICAgdXJsID0gIXVybCA/IHRoaXMuZ2V0VVJMKCkgOiB1cmw7XG5cbiAgICAgICAgLy9nZXQgdGhlIHByb3ZpZGVkIHN1Ym1pdCBtZXRob2RcbiAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuZ2V0U3VibWl0TWV0aG9kKCk7XG4gICAgICAgIC8vaWYgaXQncyBudWxsLCBncmFiIGl0IGZyb20gdGhlIGZvcm1cbiAgICAgICAgaWYoIG1ldGhvZCA9PT0gbnVsbCApe1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBmb3JtLmF0dHJpYnV0ZXMubWV0aG9kICE9PSAndW5kZWZpbmVkJyApeyAvL2NoZWNrIHRoYXQgaXQgd2FzIHNldCBleHBsaWNpdGx5XG4gICAgICAgICAgICAgICAgbWV0aG9kID0gZm9ybS5tZXRob2Q7IC8vZ3JhYiBKVVNUIHRoZSB2YWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vZGVmYXVsdCB0byBwb3N0IGlmIHdlIHN0aWxsIGRvbid0IGhhdmUgYSBtZXRob2QgYW5kIGxvd2VyY2FzZSBhbnl0aGluZyB0aGF0IHdhcyBwcm92aWRlZFxuICAgICAgICBtZXRob2QgPSAhbWV0aG9kID8gJ3Bvc3QnIDogbWV0aG9kLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgLy9pZiBub3QgdmFsaWQsIHN0b3AgaGVyZSB1bnRpbCB0aGV5IHJlc3VibWl0XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZShmb3JtKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIC8vZ2V0IGZvcm0gdmFsdWVzXG4gICAgICAgIGNvbnN0IGZvcm1fdmFsdWVzID0gQXJyYXkuZnJvbShcbiAgICAgICAgICAgIHRoaXMuZ2V0Rm9ybVZhbHVlcyhmb3JtKSxcbiAgICAgICAgICAgIGUgPT4gZS5tYXAoZW5jb2RlVVJJQ29tcG9uZW50KS5qb2luKCc9JylcbiAgICAgICAgKS5qb2luKCcmJyk7XG5cbiAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGZvcm1fdmFsdWVzLFxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgLy9qdXN0IGluIGNhc2UgdGhlIHNlcnZlciByZXR1cm5lZCB0aGUgd3JvbmcgcmVzcG9uc2UgdHlwZSBhbmQgaXQncyBhY3R1YWxseSBKU09OIC0gaWdub3JlIGVycm9yc1xuICAgICAgICAgICAgdHJ5eyBkYXRhID0gdHlwZW9mIGRhdGEgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShkYXRhKSA6IGRhdGE7IH0gY2F0Y2goZSl7IH1cblxuICAgICAgICAgICAgLy9pZiB0aGUgcmVzcG9uc2UgaXMgYSBzdHJpbmcsIGl0J3MgcHJvYmFibHkvaG9wZWZ1bGx5IHRoZSBmb3JtIHdpdGggaW5saW5lIGVycm9yc1xuICAgICAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgIC8vaWYgd2UgYXJlIGxvb2tpbmcgZm9yIGFuIGVsZW1lbnQgd2l0aGluIHRoZSByZXNwb25zZVxuICAgICAgICAgICAgICAgIGlmKCB0eXBlb2Ygc2VsZi5nZXRJbmNvbWluZ0VsZW1lbnRTZWxlY3RvcigpID09PSAnc3RyaW5nJyApe1xuICAgICAgICAgICAgICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBIVE1MXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGRhdGEsIHNlbGYuZ2V0SW5jb21pbmdFbGVtZW50U2VsZWN0b3IoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vaWYgdGhlIGZvcm0gd2FzIG5vdCBmb3VuZCBpbiBpdCwgbGV0J3MgYXNzdW1lIGl0IGRvZXNuJ3QgY29udGFpbiB0aGUgZm9ybS4gSWYgbm90LCB0aGVuIG1heWJlXG4gICAgICAgICAgICAgICAgICAgIGlmKCAhcGFyc2VkLmh0bWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihgJHtzZWxmLmdldEluY29taW5nRWxlbWVudFNlbGVjdG9yKCl9IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXJgLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvL3Byb3ZpZGUgdGhlIGZvcm0ncyBIVE1MIGluIGFuIG9iamVjdCBjb250YWluaW5nIG90aGVyIGRldGFpbHMgbGlrZSB0aGUgcm91dGUgYW5kIHRoZSBmdWxsIHJlc3BvbnNlIHRvIGluc2VydEZvcm1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuaW5zZXJ0Rm9ybShwYXJzZWQsIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGF9LCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vaWYgdGhlIHJlc3BvbnNlIGlzIGFuIG9iamVjdCwgaXQncyBwcm9iYWJseSBKU09OXG4gICAgICAgICAgICBlbHNlIGlmKCB0eXBlb2YgZGF0YSA9PT0gJ29iamVjdCcgKXtcbiAgICAgICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIHRoZSBIVE1MLCBqdXN0IHBvcCBpdCBiYWNrIG9uIHRoZSBwYWdlXG4gICAgICAgICAgICAgICAgaWYoIGRhdGEuaHRtbCApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5pbnNlcnRGb3JtKHtodG1sOmRhdGEuaHRtbH0sIGRhdGEsIGZvcm0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW4gZXJyb3IgbWVzc2FnZSwgdHJpZ2dlciB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICBpZiggZGF0YS5lcnJvciApe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25FcnJvcihkYXRhLmVycm9yLCBkYXRhLCBmb3JtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL2lmIGl0IGRvZXNuJ3QgQVBQRUFSIHRvIGJlIHRoZSBmb3JtIGFnYWluLCBvciBhbiBlcnJvciwgbGV0J3MgY2FsbCBpdCBhIHN1Y2Nlc3NcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi50cmlnZ2VyT25TdWNjZXNzKGRhdGEsIGZvcm0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbmF2aWdhdGlvbi5oaWRlTG9hZGVyKCk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGFsbCBmb3JtIHZhbHVlcyB0byBiZSBzdWJtaXR0ZWRcbiAgICAgKlxuICAgICAqIE92ZXJyaWRlL2V4dGVuZCB0aGlzIGlmIHlvdSB3YW50IHRvIG1hbmlwdWxhdGUgdGhlIGRhdGEgcHJpb3IgdG8gc3VibWlzc2lvblxuICAgICAqXG4gICAgICogQHJldHVybnMgRm9ybURhdGFcbiAgICAgKi9cbiAgICBnZXRGb3JtVmFsdWVzKGZvcm0pe1xuICAgICAgICByZXR1cm4gbmV3IEZvcm1EYXRhKGZvcm0pO1xuICAgIH1cbn0iLCJpbXBvcnQge1hIUkZvcm19IGZyb20gXCIuL1hIUkZvcm1cIjtcbmltcG9ydCB7Rm9ybUZyb21VUkx9IGZyb20gXCIuL0Zvcm1Gcm9tVVJMXCI7XG5cbmV4cG9ydCB7WEhSRm9ybSwgRm9ybUZyb21VUkx9IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5pbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuLi9yZXF1ZXN0XCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL2V2ZW50c1wiO1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gc2ltdWxhdGUgYSBwYWdlIGNoYW5nZSBieSB1c2luZyBhbiBYSFIgcmVxdWVzdCB0byBncmFiIGNvbnRlbnQgYW5kIHJlcGxhY2UgaXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICpcbiAqIEF1dG9tYXRpY2FsbHkgdXBkYXRlcyB0aGUgYnJvd3NlcidzIGhpc3RvcnksIHN3YXBzIG91dCBtZXRhIHRhZ3MsIHVwZGF0ZXMgdGhlIHRpdGxlLCBhbmQgbW9yZVxuICpcbiAqIFVzZSBvbkxvYWQgYW5kIG9uVW5sb2FkIGhvb2tzIHRvIGFkZCBhZGRpdGlvbmFsIGxvZ2ljIGZvciB0aGluZ3MgbGlrZSB0cmlnZ2VyaW5nIGEgZ29vZ2xlIGFuYWx5dGljcyBwYWdlIHZpZXdcbiAqICBvciBzY3JvbGxpbmcgdG8gdGhlIHRvcCBvZiB0aGUgbmV3IHBhZ2VcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb24gPSB7XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgZGF0YSB0byBiZSBwcm92aWRlZCB0byB0aGUgb25sb2FkIGNhbGxiYWNrIGFmdGVyIG5hdmlnYXRpbmcgdG8gYW5vdGhlciBwYWdlIHVzaW5nIC5sb2FkKClcbiAgICAgKi9cbiAgICBfcGFzc3Rocm91Z2hEYXRhOiBudWxsLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBuZXh0IHBhZ2VcbiAgICAgKiAgdGhpcyBkYXRhIHBlcnNpc3RzIHVudGlsIGNsZWFyZWQgbWFudWFsbHkgYW5kIHdpbGwgYmUgcHJvdmlkZWQgdG8gQUxMIHN1YnNlcXVlbnQgb25Mb2FkIGhhbmRsZXJzXG4gICAgICogICAob3IgaXQgY2FuIGJlIGdyYWJiZWQgbWFudWFsbHkgZnJvbSB0aGlzIG9iamVjdCBhdCBhbnkgdGltZSlcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgc2V0UGFzc3Rocm91Z2hEYXRhOiBmdW5jdGlvbihkYXRhKVxuICAgIHtcbiAgICAgICAgdGhpcy5fcGFzc3Rocm91Z2hEYXRhID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBkYXRhIHByb3ZpZGVkIGZvciB0aGUgbmV4dCBwYWdlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBjbGVhclBhc3N0aHJvdWdoRGF0YTogZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdGhpcy5zZXRQYXNzdGhyb3VnaERhdGEobnVsbCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFueSBkYXRhIHRoYXQgaGFzIGJlZW4gc2V0IGZvciBwYXNzaW5nIHRvIHN1YnNlcXVlbnQgcGFnZXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICogQHJldHVybnMge251bGx9XG4gICAgICovXG4gICAgZ2V0UGFzc1Rocm91Z2hEYXRhOiBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bhc3N0aHJvdWdoRGF0YTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICovXG4gICAgX2luY29taW5nRWxlbWVudFNlbGVjdG9yOiAnYm9keScsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHNlbGVjdG9yX3N0cmluZ1xuICAgICAqL1xuICAgIHNldEluY29taW5nRWxlbWVudDogZnVuY3Rpb24oc2VsZWN0b3Jfc3RyaW5nKXtcbiAgICAgICAgaWYoIHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faW5jb21pbmdFbGVtZW50U2VsZWN0b3I7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICovXG4gICAgX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHNlbGVjdG9yIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uKHNlbGVjdG9yX3N0cmluZyl7XG4gICAgICAgIGlmKCB0eXBlb2Ygc2VsZWN0b3Jfc3RyaW5nICE9PSAnc3RyaW5nJyApIHRocm93IGAke3NlbGVjdG9yX3N0cmluZ30gaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUVsZW1lbnRTZWxlY3RvciA9IHNlbGVjdG9yX3N0cmluZztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgc2VsZWN0b3JzIHN0cmluZyBmb3IgdGhlIGVsZW1lbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB0aGF0IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBpbmNvbWluZyBIVE1MXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFJlcGxhY2VFbGVtZW50OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogR3JhYnMgSFRNTCBmcm9tIGEgVVJMIGFuZCByZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKlxuICAgICAqIDEpIFNob3dzIGEgbG9hZGVyIChpZiBlbmFibGVkKVxuICAgICAqIDIpIFJlcXVlc3RzIGNvbnRlbnQgZnJvbSB0aGUgcHJvdmlkZWQgVVJMXG4gICAgICogMykgUmVwbGFjZXMgaXQgb24gdGhlIHBhZ2UgKGFuZCBhbGwgdGhlIG1hZ2ljIHJlcGxhY2VQYWdlQ29udGVudCBkb2VzLCBzZWUgY29tbWVudHMgb24gdGhhdCBtZXRob2QgYmVsb3cpXG4gICAgICogNCkgSWYgdGhlcmUncyBhIGNhbGxiYWNrIHByb3ZpZGVkLCBpdCdsbCBiZSBydW4gYWZ0ZXJ3YXJkcyAoaXQgcmVjZWl2ZXMgdGhlIG5ld2x5IHJlcGxhY2VkIGVsZW1lbnQgYXMgYSBwYXJhbSlcbiAgICAgKlxuICAgICAqIE9uIGVycm9yLCBpdCB0cmlnZ2VycyBhIG5hdmlnYXRpb24gZmFpbHVyZSBhbmQgcHJvdmlkZXMgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0gaW5jb21pbmdfZWxcbiAgICAgKiBAcGFyYW0gcmVwbGFjZV9lbFxuICAgICAqIEBwYXJhbSBwdXNoX3N0YXRlXG4gICAgICovXG4gICAgbG9hZDogZnVuY3Rpb24odXJsLCBjYWxsYmFjaywgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHB1c2hfc3RhdGUpe1xuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgVVJMICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcbiAgICAgICAgcHVzaF9zdGF0ZSA9IHR5cGVvZiBwdXNoX3N0YXRlID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBwdXNoX3N0YXRlO1xuXG4gICAgICAgIGlmKCB0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuXG4gICAgICAgIGF4aW9zLmdldCh1cmwpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcblxuICAgICAgICAgICAgbmF2aWdhdGlvbi5yZXBsYWNlUGFnZUNvbnRlbnQocmVzcG9uc2UuZGF0YSwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSk7XG5cbiAgICAgICAgICAgIC8vaWYgYSBjYWxsYmFjayB3YXMgcHJvdmlkZWQsIHJ1biBpdCBhbmQgcHJvdmlkZSB0aGUgcGFyZW50IGVsZW1lbnRcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAvL3dhaXQgZm9yIHRoZSBvbnVubG9hZCBjYWxsYmFja3MgdG8gcnVuIGFuZCB0aGUgbmV3IGNvbnRlbnQgdG8gYmUgcHV0IG9uIHRoZSBwYWdlIGZpcnN0XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIGluY29taW5nX2VsLCBuYXZpZ2F0aW9uLmdldFBhc3NUaHJvdWdoRGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9LCAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24udHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlKGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICBfbG9hZGVyRGVsYXk6IDMwMCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24oZGVsYXlfaW5fbXMpe1xuICAgICAgICBpZiggdHlwZW9mIGRlbGF5X2luX21zICE9PSBcIm51bWJlclwiICkgdGhyb3cgYCR7ZGVsYXlfaW5fbXN9IGlzIG5vdCBhbiBpbnRlZ2VyYDtcbiAgICAgICAgdGhpcy5fbG9hZGVyRGVsYXkgPSBkZWxheV9pbl9tcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJEZWxheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3NlcyBmb3IgdGhlIGxvYWRlclxuICAgICAqIERlZmF1bHRzIGFyZSBmb3IgYm9vdHN0cmFwICh3aXRoIHRoZSBleGNlcHRpb24gb2YgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcilcbiAgICAgKi9cbiAgICBfbG9hZGVyQ2xhc3NlczogJ3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIF9sb2FkZXJJbm5lckRpdkNsYXNzZXM6ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyxcblxuICAgIC8qKlxuICAgICAqIElmIGVuYWJsZWQsIGFkZHMgYSBsb2FkZXIgdG8gdGhlIHBhZ2UgYW5kIGNhY2hlcyBhIHJlZmVyZW5jZSB0byBpdCwgdGhlbiByZXR1cm5zIHRoYXQgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuICAgICAgICBpZiggbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQgKSByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG5cbiAgICAgICAgLy9wcmVwZW5kIHRoZSBsb2FkZXIgZWxlbWVudHNcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVyQ2xhc3NlcztcbiAgICAgICAgbGV0IGlubmVyX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcl9kaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuICAgICAgICBkaXYuYXBwZW5kKGlubmVyX2Rpdik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBjYWNoZSBhIHJlZmVyZW5jZSB0byBpdCBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkID0gZG9tLmdldEVsZW1lbnQoJy5wYWdlLW5hdmlnYXRpb24tbG9hZGVyJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG5cbiAgICAgICAgbmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmdldExvYWRlckVsKCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIHRoaXMuZ2V0TG9hZGVyRGVsYXkoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGhpZGVMb2FkZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgdGhlIGxvYWRlciBzdGlsbCBoYXNuJ3Qgc2hvd24geWV0LCBwcmV2ZW50IGl0IGJlY2F1c2UgdGhlIHJlcXVlc3Qgd2FzIHZlcnkgZmFzdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5hdmlnYXRpb24ubG9hZGVyX3RpbWVvdXQpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgbG9hZGVyXG4gICAgICAgIG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIGh0bWw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgYm9keV9jbGFzc2VzOiBET01Ub2tlbkxpc3R9fVxuICAgICAqL1xuICAgIHBhcnNlSFRNTChodG1sLCBwYXJlbnRfZWwpXG4gICAge1xuICAgICAgICAvL2RlZmF1bHQgdG8gbnVsbCBpZiBub3QgcHJvdmlkZWRcbiAgICAgICAgcGFyZW50X2VsID0gdHlwZW9mIHBhcmVudF9lbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50X2VsO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmKCB0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwgKSB0aHJvdyBgUHJvdmlkZWQgcGFyZW50X2VsICgke3BhcmVudF9lbH0pIGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBkb21cbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9nZXQgcGFnZSB0aXRsZVxuICAgICAgICB2YXIgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZSA/IHRpdGxlLmlubmVyVGV4dCA6IG51bGw7XG5cbiAgICAgICAgLy9nZXQgYW55IG1ldGEgdGFnc1xuICAgICAgICB2YXIgbWV0YXMgPSBkb2MuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICAgICAgICAvL2dldCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgdmFyIGxpbmtzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgIC8vZ2V0IGJvZHkgY2xhc3Nlc1xuICAgICAgICB2YXIgYm9keV9jbGFzc2VzID0gZG9jLmJvZHkuY2xhc3NMaXN0O1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICB2YXIgbmV3X2h0bWwgPSBodG1sO1xuXG4gICAgICAgIC8vaWYgYSBwYXJlbnQgZWxlbWVudCB3YXMgcHJvdmlkZWQsIGZpbmQgaXRcbiAgICAgICAgaWYoIHBhcmVudF9lbCApe1xuICAgICAgICAgICAgdmFyIHNlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHBhcmVudF9lbCk7XG4gICAgICAgICAgICAvL2lmIGNvdWxkbid0IGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmKCAhc2VsICl7XG4gICAgICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBhcmVudCBzZWxlY3RvciAke3BhcmVudF9lbH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBvdXRlckhUTUxcbiAgICAgICAgICAgIG5ld19odG1sID0gc2VsLm91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBuZXcgcGFnZSdzIHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnIChpZiBpdCBleGlzdHMpXG4gICAgICAgIHZhciByb3V0ZSA9IG5hdmlnYXRpb24uZ2V0Um91dGVGcm9tTWV0YShkb2MpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvbiwgeW91IGRvbid0IG5lZWQgdGhpcyBhbnltb3JlLlxuICAgICAgICBwYXJzZXIgPSBkb2MgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIG1ldGFzOm1ldGFzLFxuICAgICAgICAgICAgbGlua3M6bGlua3MsXG4gICAgICAgICAgICBib2R5X2NsYXNzZXM6Ym9keV9jbGFzc2VzLFxuICAgICAgICAgICAgaHRtbDpuZXdfaHRtbFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnLCBpZiBpdCBleGlzdHNcbiAgICAgKlxuICAgICAqIElmIHlvdSBkb24ndCBwcm92aWRlIEhUTUwsIGl0J2xsIGdyYWIgaXQgZnJvbSB0aGUgY3VycmVudCBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHJldHVybnMge2FueSB8IEVsZW1lbnR9XG4gICAgICovXG4gICAgZ2V0Um91dGVGcm9tTWV0YTogZnVuY3Rpb24oaHRtbCl7XG4gICAgICAgIGh0bWwgPSB0eXBlb2YgaHRtbCA9PT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudC5oZWFkIDogaHRtbDtcbiAgICAgICAgdmFyIHJvdXRlID0gaHRtbC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImN1cnJlbnRfcm91dGVcIl0nKTtcbiAgICAgICAgcm91dGUgPSByb3V0ZSA/IHJvdXRlLmNvbnRlbnQgOiBudWxsO1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZSB3aXRoIG5ldyBIVE1MXG4gICAgICpcbiAgICAgKiAxKSBUcmlnZ2VycyB1bmxvYWQoKVxuICAgICAqIDIpIFdhaXRzIDEwMG1zXG4gICAgICogMykgUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHNcbiAgICAgKiA0KSBSZXBsYWNlcyBhbGwgbWV0YSB0YWdzIChpbXBvcnRhbnQgZm9yIHNvY2lhbCBtZWRpYSBzaGFyaW5nIGFtb25nIG90aGVyIHRoaW5ncylcbiAgICAgKiA1KSBSZXBsYWNlcyB0aGUgY2Fub25pY2FsIHRhZ1xuICAgICAqIDYpIFJlcGxhY2VzIGFueSBjbGFzc2VzIG9uIHRoZSBib2R5IHNpbmNlIHRoZXkgYXJlIGdlbmVyYWxseSB1c2VkIHRvIGluZGljYXRlIHdoaWNoIHBhZ2UgeW91J3JlIG9uXG4gICAgICogNykgUHVzaGVzIHRvIHRoZSBicm93c2VyJ3MgaGlzdG9yeVxuICAgICAqIDgpIFNldHMgdGhlIHBhZ2UgdGl0bGVcbiAgICAgKiA5KSBSZXBsYWNlcyBjb250ZW50IGluIHRoZSBET01cbiAgICAgKiAxMCkgVHJpZ2dlcnMgb25sb2FkKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICByZXBsYWNlUGFnZUNvbnRlbnQoaHRtbCwgdXJsLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSlcbiAgICB7XG4gICAgICAgIHB1c2hfc3RhdGUgPSB0eXBlb2YgcHVzaF9zdGF0ZSA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogcHVzaF9zdGF0ZTtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIWluY29taW5nX2VsID8gdGhpcy5nZXRJbmNvbWluZ0VsZW1lbnQoKSA6IGluY29taW5nX2VsO1xuICAgICAgICByZXBsYWNlX2VsID0gdHlwZW9mIHJlcGxhY2VfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFyZXBsYWNlX2VsID8gdGhpcy5nZXRSZXBsYWNlRWxlbWVudCgpIDogcmVwbGFjZV9lbDtcblxuICAgICAgICBpZiggdHlwZW9mIHVybCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgdXJsICgke3VybH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgaW5jb21pbmdfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIGluY29taW5nX2VsICgke2luY29taW5nX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcbiAgICAgICAgaWYoIHR5cGVvZiByZXBsYWNlX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCByZXBsYWNlX2VsICgke3JlcGxhY2VfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuXG4gICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgLy9nZXQgcmVwbGFjZV9lbCBhZ2FpbiBiZWNhdXNlIGl0IHdhcyByZXBsYWNlZFxuICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJVbmxvYWQoZG9tLmdldEVsZW1lbnQocmVwbGFjZV9lbCksIHJlcGxhY2VfZWwsIHRoaXMuZ2V0Um91dGVGcm9tTWV0YSgpKTtcblxuICAgICAgICAvL3Zlcnkgc2xpZ2h0IDEwMG1zIGRlbGF5IHRvIGxldCB0aGUgb24gdW5sb2FkIGhhbmRsZXJzIHJ1biBmaXJzdFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsKTtcblxuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgaWYoIHBhcnNlZC5odG1sLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmUoJ21ldGEnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAgICAgLy8gLSBwb3NzaWJseSBvdGhlciB0YWdzIHdpbGwgbmVlZCB0byBiZSB3aGl0ZWxpc3RlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyc2VkLmxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vYWRkIGJvZHkgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0ID0gcGFyc2VkLmJvZHlfY2xhc3NlcztcblxuICAgICAgICAgICAgICAgIC8vcHVzaCB0aGUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICAgICAgICAgICAgcHVzaF9zdGF0ZSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSh7dXJsOiB1cmx9LCBwYXJzZWQudGl0bGUsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgdGFiL3BhZ2UgdGl0bGVcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnNldFRpdGxlKHBhcnNlZC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlcGxhY2UgY29udGVudCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld19jb250ZW50ID0gZG9tLnJlcGxhY2VFbFdpdGhIVE1MKHJlcGxhY2VfZWwsIHBhcnNlZC5odG1sKTtcblxuICAgICAgICAgICAgICAgIC8vdHJpZ2dlciBuYXYgY29tcGxldGUgZXZlbnRcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJPbkxvYWQobmV3X2NvbnRlbnQsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwYXJzZWQucm91dGUpO1xuXG4gICAgICAgICAgICAgICAgLy9pZiB0aGUgcmVwbGFjZV9lbCBpcyB0aGUgc2FtZSBhcyBnZXRSZXBsYWNlRWxlbWVudCgpLFxuICAgICAgICAgICAgICAgIC8vIHRoZW4gaXQgc2hvdWxkIGJlIHVwZGF0ZWQgdG8gd2hhdGV2ZXIgdGhlIGluY29taW5nX2VsIGlzIGJlY2F1c2UgaXQgbm8gbG9uZ2VyIGV4aXN0c1xuICAgICAgICAgICAgICAgIGlmKCB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgPT09IHJlcGxhY2VfZWwgKXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRSZXBsYWNlRWxlbWVudChpbmNvbWluZ19lbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZWZyZXNoZXMgdGhlIGN1cnJlbnQgcGFnZSB1c2luZyAubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICByZWxvYWQ6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcbiAgICAgICAgY2FsbGJhY2sgPSB0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicgPyBudWxsIDogY2FsbGJhY2s7XG4gICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldEZ1bGxVUkwoKSwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBmdWxsIHJlZnJlc2ggb2YgdGhlIGN1cnJlbnQgVVJMXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBmdWxsUmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZW5kcyB0aGUgdXNlciB0byBhIG5ldyBwYWdlIHdpdGhvdXQgWEhSXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICovXG4gICAgcmVkaXJlY3Q6IGZ1bmN0aW9uKHVybCl7XG4gICAgICAgIG5hdmlnYXRpb24uc2hvd0xvYWRlcigpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdGl0bGUgb2YgdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB0aXRsZVxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIHNldFRpdGxlOiBmdW5jdGlvbih0aXRsZSl7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIGEgbmV3IHBhZ2UgbG9hZHMsIHlvdSBwcm9iYWJseSB3YW50IHRvIGtpY2tvZmYgc29tZSBwYWdlLXNwZWNpZmljIEpTLlxuICAgICAqXG4gICAgICogVGhlIGNhbGxiYWNrIHJlY2VpdmVzIHRoZSBldmVudC5cbiAgICAgKiBUaGUgZXZlbnQgaGFzIGEgcHJvcGVydHkgY2FsbGVkIFwiZGV0YWlsXCIgd2hpY2ggd2lsbCBjb250YWluOlxuICAgICAqICAxKSBUaGUgcmVwbGFjZV9lbCAodGhlIGVsZW1lbnQgd2hvJ3MgY29udGVudCB3YXMgc3dhcHBlZCBvdXQpXG4gICAgICogIDIpIFRoZSByb3V0ZSAoeW91IGNhbiBkZWZpbmUgdGhpcyBpbiBhIG1ldGEgdGFnIGNhbGxlZCBcImN1cnJlbnRfcm91dGVcIiB3aGljaCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZ3JhYmJlZCBhbmQgcGFzc2VkIGFsb25nKVxuICAgICAqICAzKSBBbnkgZGF0YSB5b3Ugc2V0IHVzaW5nIC5zZXRQYXNzdGhyb3VnaERhdGEoKVxuICAgICAqXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgb25Mb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmNvbXBsZXRlJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBsZWF2aW5nIGEgcGFnZSB5b3UgbWlnaHQgbmVlZCB0byBkZXN0cm95IHNvbWUgcGx1Z2lucyBvciBzb21ldGhpbmdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uVW5sb2FkOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLnN0YXJ0ZWQnLCBjYWxsYmFjayk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZSBuZXcgcGFnZSBmYWlscyB0byBsb2FkLCB5b3Ugc2hvdWxkIHByb2JhYmx5IHRlbGwgdGhlIHVzZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGNhbGxiYWNrKVxuICAgIHtcbiAgICAgICAgZXZlbnRzLm9uKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2UncmUgb24gYSBuZXcgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBBbHNvIGluY2x1ZGVzIHRoZSByb3V0ZSBvZiB0aGUgbmV3IHBhZ2UgKGlmIGl0IGV4aXN0cyBpbiBhIG1ldGEgdGFnKSBzbyB0aGF0IHlvdSBjYW4ga2ljayBvZmYgSlMgc3BlY2lmaWMgdG8gdGhhdCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZWxfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcmVwbGFjZWRfc2VsZWN0b3JcbiAgICAgKiBAcGFyYW0gcm91dGVcbiAgICAgKi9cbiAgICB0cmlnZ2VyT25Mb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJlcGxhY2VkX3NlbGVjdG9yLCByb3V0ZSl7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlICE9PSAndW5kZWZpbmVkJyA/IHJvdXRlIDogbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKCk7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uY29tcGxldGUnLCB7XG4gICAgICAgICAgICBlbDplbCxcbiAgICAgICAgICAgIGVsX3NlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgcmVwbGFjZWRfc2VsZWN0b3I6IHJlcGxhY2VkX3NlbGVjdG9yLFxuICAgICAgICAgICAgcm91dGU6cm91dGUsXG4gICAgICAgICAgICBkYXRhOnRoaXMuZ2V0UGFzc1Rocm91Z2hEYXRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGxlYXZpbmcgdGhlIGxhc3QgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKi9cbiAgICB0cmlnZ2VyVW5sb2FkOiBmdW5jdGlvbihlbCwgZWxfc2VsZWN0b3IsIHJvdXRlKXtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywge2VsOmVsLCBlbF9zZWxlY3RvcjplbF9zZWxlY3Rvciwgcm91dGU6cm91dGV9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGlvbiBmYWlsZWQsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQHBhcmFtIGVycm9yXG4gICAgICovXG4gICAgdHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlOiBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uZmFpbGVkJywge2Vycm9yOmVycm9yfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGV2ZW50IGhhbmRsZXJzIHRvIHRyYWNrIHRoZSBicm93c2VyJ3MgaGlzdG9yeSBidXR0b25zIChiYWNrL2ZvcndhcmQpXG4gICAgICpcbiAgICAgKiBAdG9kbzogSW52ZXN0aWdhdGUgcG9zc2libGUgaXNzdWUgd2l0aCBjaHJvbWUgY2FjaGluZyBiYWNrIGJ1dHRvbiBjb250ZW50cyBhbmQgbm90IGxvYWRpbmcgdGhlIGVudGlyZSBwYWdlXG4gICAgICovXG4gICAgaW5pdEhpc3RvcnlIYW5kbGVyczogZnVuY3Rpb24oKXtcbiAgICAgICAgLy9mb3J3YXJkIGJ1dHRvblxuICAgICAgICB3aW5kb3cub25wdXNoc3RhdGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvL2JhY2sgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmxvYWQocmVxdWVzdC5nZXRVUklXaXRoUXVlcnlTdHJpbmcoKSwgbnVsbCwgbnVsbCwgbnVsbCwgZmFsc2UpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59OyIsInJlcXVpcmUoJ3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsJyk7XG5cbi8qKlxuICogQWxsb3dzIHlvdSB0byBnZXQgZGV0YWlscyBhYm91dCB0aGUgY3VycmVudCByZXF1ZXN0IGVhc2lseSwgaW5jbHVkaW5nIHF1ZXJ5c3RyaW5nIHZhcmlhYmxlc1xuICovXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1ZXJ5IHN0cmluZyB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFVSTFNlYXJjaFBhcmFtc1xuICAgICAqL1xuICAgIHF1ZXJ5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHJlcXVlc3Qgd2FzIG1hZGUgc2VjdXJlbHkgb3ZlciBTU0wgKGh0dHBzIGluc3RlYWQgb2YgaHR0cClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSHR0cHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgfHwgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbldpdGhQcm90b2NvbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJJXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkkgd2l0aCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSVdpdGhRdWVyeVN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgVVJMXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20vcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGdWxsVVJMOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbGFzaCB0byBhIHN0cmluZyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tIGJlY29tZXMgaHR0cHM6Ly9teS1kb21haW4uY29tL1xuICAgICAqIEV4YW1wbGU6IC9teS1wcm9kdWN0IGJlY29tZXMgL215LXByb2R1Y3QvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhcHBlbmRTbGFzaDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG59OyIsImltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtBYnN0cmFjdENsYXNzfSBmcm9tIFwiLi4vQWJzdHJhY3RDbGFzc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmNvbnN0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG5cbi8qKlxuICpcbiAqIFNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIENsYXNzIGZvciBzdG9yaW5nIGFuZCBpbnRlcmFjdGluZyB3aXRoIHRoZSBjdXJyZW50IHdlYnNpdGUncyBpZCwgbmFtZSwgYW5kIGNvbmZpZyBvcHRpb25zXG4gKlxuICovXG5leHBvcnQgY2xhc3MgU2l0ZSBleHRlbmRzIEFic3RyYWN0Q2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpe1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ107XG5cbiAgICAgICAgaWYoIHR5cGVvZiBkYXRhID09PSBcInVuZGVmaW5lZFwiICkgcmV0dXJuIHRoaXM7XG5cbiAgICAgICAgLy9leHRlbmQgdXNlcl9kZWZhdWx0cyB3aXRoIGluY29taW5nIGRhdGFcbiAgICAgICAgZGF0YSA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi5kYXRhfTtcblxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgfVxuXG4gICAgc2V0SWQoaWQpIHtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9nZXRzIHRoZSB3ZWJzaXRlJ3MgbmFtZVxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgIH1cblxuICAgIHNldE5hbWUobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBjb25maWcgZGF0YVxuICAgIGdldENvbmZpZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcbiAgICB9XG5cbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWcoY29uZmlnKSB7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGNvbmZpZywgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbiBpbmRpdmlkdWFsIGNvbmZpZyB2YWx1ZSBvciBudWxsIGlmIGl0J3Mgbm90IGRlZmluZWRcbiAgICBnZXRDb25maWdJdGVtKGtleSkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2NvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiID8gbnVsbCA6IHRoaXMuX2NvbmZpZ1trZXldO1xuICAgIH1cblxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtKGtleSwgdmFsKSB7XG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwiLyoqXG4gKiBNZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbW1vbiBzdHJpbmcgbWFuaXB1bGF0aW9uc1xuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLmdldHRlcignbmFtZScpIHJldHVybnMgJ2dldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnZ2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLnNldHRlcignbmFtZScpIHJldHVybnMgJ3NldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnc2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyB1Y2ZpcnN0KCkgZnVuY3Rpb25hbGl0eSB0byBKUyAobGlrZSBQSFApXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIHVjZmlyc3Q6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbn07IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMsIGJsb2NrX290aGVyX2tleXMsIHRocm93X2Vycm9yKXtcbiAgICAgICAgLy9kZWZhdWx0IGZvciB0aHJvd19lcnJvciBpcyBmYWxzZVxuICAgICAgICB0aHJvd19lcnJvciA9IHR5cGVvZiB0aHJvd19lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiA/IHRocm93X2Vycm9yIDogZmFsc2U7XG5cbiAgICAgICAgLy9kZWZhdWx0IGZvciByZXF1aXJlX2FsbF9rZXlzIGlzIGZhbHNlXG4gICAgICAgIHJlcXVpcmVfYWxsX2tleXMgPSB0eXBlb2YgcmVxdWlyZV9hbGxfa2V5cyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcXVpcmVfYWxsX2tleXMgOiBmYWxzZTtcblxuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZFxuICAgICAgICBpZiggdHlwZW9mIHZhbHVlID09PSBcInVuZGVmaW5lZFwiICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG4gICAgICAgIC8vaWYgbm90IGFuIG9iamVjdCwgbnVsbCwgb3IgYW4gYXJyYXlcbiAgICAgICAgaWYoICFpc19vYmplY3QgfHwgdmFsdWUgPT09IG51bGwgfHwgQXJyYXkuaXNBcnJheSh2YWx1ZSkgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaWYgd2UgbmVlZCB0byB2ZXJpZnkgdGhlIGtleXMgdGhpcyBvYmplY3QgY29udGFpbnNcbiAgICAgICAgaWYoIEFycmF5LmlzQXJyYXkoa2V5cykgKSB7XG4gICAgICAgICAgICBsZXQgZm91bmRfa2V5ID0gZmFsc2U7XG4gICAgICAgICAgICBsZXQgbWlzc2luZ19rZXlzID0gW107XG5cbiAgICAgICAgICAgIGNvbnN0IHZhbHVlX2tleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAvL2lmIHRoZSBrZXkgd2FzIGZvdW5kLCB3ZSBmb3VuZCBhdGxlYXN0IG9uZVxuICAgICAgICAgICAgICAgIGlmKCB2YWx1ZV9rZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgZm91bmRfa2V5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9pZiBpdCdzIG5vdCBmb3VuZCwgd2UgY2FuJ3Qgc2F5IGFsbCBrZXlzIGV4aXN0IGluIHRoaXMgb2JqZWN0XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbWlzc2luZ19rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy9pZiBub3Qgb25lIG9mIHRoZSBrZXlzIHdlcmUgZm91bmRcbiAgICAgICAgICAgIGlmKCAhZm91bmRfa2V5ICl7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBkb2VzIG5vdCBjb250YWluIGF0IGxlYXN0IG9uZSBvZiB0aGUgZm9sbG93aW5nOiBgK2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZGlkbid0IGZpbmQgYWxsIHRoZSBrZXlzXG4gICAgICAgICAgICBpZiggcmVxdWlyZV9hbGxfa2V5cyAmJiBtaXNzaW5nX2tleXMubGVuZ3RoIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG1pc3NpbmcgZGF0YTogYCttaXNzaW5nX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vaWYgd2UgZG9uJ3QgYWxsb3cgYW55IGtleXMgTk9UIGluIHRoZSBrZXlzIGFycmF5XG4gICAgICAgICAgICBpZiggYmxvY2tfb3RoZXJfa2V5cyApe1xuICAgICAgICAgICAgICAgIGxldCB1bnJlY29nbml6ZWRfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFsdWVfa2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiggIWtleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICAgICAgdW5yZWNvZ25pemVkX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiggdW5yZWNvZ25pemVkX2tleXMubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gY29udGFpbnMgaW52YWxpZCBkYXRhOiBgK3VucmVjb2duaXplZF9rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2FsbCBjaGVja3MgcGFzc2VkISBjb25ncmF0cywgaXQncyBhbiBvYmplY3RcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7QWJzdHJhY3RDbGFzc30gZnJvbSBcIi4uL0Fic3RyYWN0Q2xhc3NcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5jb25zdCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuXG4vKipcbiAqXG4gKiBVc2VyXG4gKlxuICogQ2xhc3MgZm9yIHN0b3JpbmcgYW5kIGludGVyYWN0aW5nIHdpdGggYSB1c2VyIGFuZCB0aGVpciBwZXJtaXNzaW9uc1xuICpcbiAqL1xuZXhwb3J0IGNsYXNzIFVzZXIgZXh0ZW5kcyBBYnN0cmFjdENsYXNze1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuX2tleXMgPSBbJ2lkJywgJ2lzR3Vlc3QnLCAnaXNBZG1pbicsICd1c2VybmFtZScsICdmbmFtZScsICdsbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdwZXJtaXNzaW9ucycsICdhZGRpdGlvbmFsRGF0YSddOyBcbiAgICAgICAgXG4gICAgICAgIGlmKCB0eXBlb2YgZGF0YSA9PT0gXCJ1bmRlZmluZWRcIiApIHJldHVybiB0aGlzO1xuXG4gICAgICAgIC8vZXh0ZW5kIHVzZXJfZGVmYXVsdHMgd2l0aCBpbmNvbWluZyBkYXRhXG4gICAgICAgIGRhdGEgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uZGF0YX07XG4gICAgICAgIFxuICAgICAgICB0aGlzLnBvcHVsYXRlKGRhdGEpO1xuICAgIH1cblxuICAgIHNldElkKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGdldElkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9XG5cbiAgICBzZXRJc0d1ZXN0KGlzX2d1ZXN0KXtcbiAgICAgICAgdGhpcy5faXNHdWVzdCA9IGlzX2d1ZXN0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNHdWVzdCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNHdWVzdDtcbiAgICB9XG5cbiAgICBzZXRJc0FkbWluKGlzX2FkbWluKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZ2V0SXNBZG1pbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNBZG1pbjtcbiAgICB9XG5cbiAgICBzZXRVc2VybmFtZSh1c2VybmFtZSl7XG4gICAgICAgIHRoaXMuX3VzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBnZXRVc2VybmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfVxuXG4gICAgZ2V0Rm5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZuYW1lO1xuICAgIH1cbiAgICBzZXRGbmFtZShmaXJzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fZm5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRMbmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfVxuICAgIHNldExuYW1lKGxhc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2xuYW1lID0gbGFzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZSgpe1xuICAgICAgICByZXR1cm4gYCR7dXNlci5nZXRGbmFtZSgpfSAke3VzZXIuZ2V0TG5hbWUoKX1gO1xuICAgIH1cblxuICAgIGdldEVtYWlsKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9XG4gICAgc2V0RW1haWwoZW1haWwpe1xuICAgICAgICB0aGlzLl9lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBnZXRQaG9uZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGhvbmU7XG4gICAgfVxuICAgIHNldFBob25lKHBob25lKXtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy9yZXR1cm5zIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0UGVybWlzc2lvbnMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Blcm1pc3Npb25zO1xuICAgIH1cbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9ucyhwZXJtaXNzaW9ucyl7XG4gICAgICAgIGlmKCAhQXJyYXkuaXNBcnJheShwZXJtaXNzaW9ucykgKSB0aHJvdyBcInNldFBlcm1pc3Npb25zIHJlcXVpcmVzIGFuIGFycmF5XCI7XG5cbiAgICAgICAgdGhpcy5fcGVybWlzc2lvbnMgPSBwZXJtaXNzaW9ucztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL1JlbW92ZXMgYSBzaW5nbGUgcGVybWlzc2lvbiBmcm9tIHRoaXMgdXNlclxuICAgIHJlbW92ZVBlcm1pc3Npb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuc2V0UGVybWlzc2lvbnModGhpcy5fcGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uKHBlcm1pc3Npb24pe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJtaXNzaW9ucygpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xuICAgIH1cblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbERhdGE7XG4gICAgfVxuICAgIC8vc2V0cyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBzZXRBZGRpdGlvbmFsRGF0YShhZGRpdGlvbmFsX2RhdGEpe1xuICAgICAgICAvL211c3QgYmUgYSBkYXRhIG9iamVjdCwgZXZlbiBpZiBpdCdzIGVtcHR5XG4gICAgICAgIHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdChhZGRpdGlvbmFsX2RhdGEsIG51bGwsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XTtcbiAgICB9XG4gICAgLy9zZXRzIGEgc2luZ2xlIGFkZGl0aW9uYWwgZGF0YSB2YWx1ZSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0RGF0YUl0ZW0oa2V5LCB2YWwpe1xuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YVtrZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9lcy9kb21cIjtcbmltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXMvZXZlbnRzXCI7XG5pbXBvcnQge1hIUkZvcm0sIEZvcm1Gcm9tVVJMfSBmcm9tIFwiLi4vZXMvZm9ybXNcIjtcbmltcG9ydCB7bmF2aWdhdGlvbn0gZnJvbSBcIi4uL2VzL25hdmlnYXRpb25cIjtcbmltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4uL2VzL3JlcXVlc3RcIjtcbmltcG9ydCB7U2l0ZX0gZnJvbSBcIi4uL2VzL3NpdGVcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4uL2VzL3N0cmluZ3NcIjtcbmltcG9ydCB7dHlwZV9jaGVja3N9IGZyb20gXCIuLi9lcy90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vZXMvdXNlclwiO1xuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB0byB0aWUgYWxsIGpwYWNrIGNvbXBvbmVudHMgZGlyZWN0bHkgdG8gdGhlIHdpbmRvdyBmb3IgZ2xvYmFsIHVzZVxuICpcbiAqIFRoaXMgbWVhbnMgaW5zdGVhZCBvZiBjYWxsaW5nIGpwYWNrLnN0cmluZ3MudWNmaXJzdCgpLCB5b3UgY2FuIGp1c3QgY2FsbCBzdHJpbmdzLnVjZmlyc3QoKVxuICpcbiAqIFRoaXMgaXMgbm90IHJlY29tbWVuZGVkIGJlY2F1c2UganBhY2sncyBuYW1lcyBtYXkgYmUgdG9vIGdlbmVyaWMgYW5kIGNvbmZsaWN0LlxuICpcbiAqIElmIHlvdSB3YW50IHRvIHNldCBhIGRpZmZlcmVudCBuYW1lc3BhY2UgdGhhbiBqcGFjaywgdGhhdCdzIGZpbmUsIGJ1dCBub3QgdXNpbmcgYSBuYW1lc3BhY2UgYXQgYWxsIGNhbiBiZSByaXNreVxuICpcbiAqIEZvciBleGFtcGxlOlxuICpcbiAqIHNldEdsb2JhbChcIiRcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogJC5zdHJpbmdzLnVjZmlyc3QoKVxuICogc2V0R2xvYmFsKFwiX1wiKSAtIHRoZW4geW91IGNhbiBjYWxsOiBfLnN0cmluZ3MudWNmaXJzdCgpXG4gKiBzZXRHbG9iYWwoXCJQZWFzQXJlR3Jvc3NcIikgLSB0aGVuIHlvdSBjYW4gY2FsbDogUGVhc0FyZUdyb3NzLnN0cmluZ3MudWNmaXJzdCgpXG4gKlxuICovXG5jb25zdCBzZXRHbG9iYWwgPSBmdW5jdGlvbihuYW1lc3BhY2Upe1xuICAgIG5hbWVzcGFjZSA9IHR5cGVvZiBuYW1lc3BhY2UgPT09ICdzdHJpbmcnID8gbmFtZXNwYWNlIDogbnVsbDtcblxuICAgIC8vbG9vcCB0aHJvdWdoIGNvbXBvbmVudHMsIG9iamVjdHMsIHBsdWdpbl93cmFwcGVycywgYW5kIHV0aWxpdGllc1xuICAgIFtjb21wb25lbnRzLG9iamVjdHMscGx1Z2luX3dyYXBwZXJzLHV0aWxpdGllc10uZm9yRWFjaChmdW5jdGlvbihvYmplY3Qpe1xuICAgICAgICAvL2ZvciBlYWNoIGNvbXBvbmVudCB3aXRoaW4gdGhvc2VcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAvL2dldCBhY3R1YWwgcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgaWYoIG5hbWVzcGFjZSApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdHlwZW9mIHdpbmRvd1tuYW1lc3BhY2VdID09PSBcInVuZGVmaW5lZFwiICl7IHdpbmRvd1tuYW1lc3BhY2VdID0ge307IH1cbiAgICAgICAgICAgICAgICAgICAgd2luZG93W25hbWVzcGFjZV1bcHJvcGVydHldID0gc2VsZltwcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1twcm9wZXJ0eV0gPSBzZWxmW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBqcGFjayA9IHtkb20sIGV2ZW50cywgWEhSRm9ybSwgRm9ybUZyb21VUkwsIG5hdmlnYXRpb24sIHJlcXVlc3QsIFNpdGUsIHN0cmluZ3MsIHR5cGVfY2hlY2tzLCBVc2VyLCBzZXRHbG9iYWw6IHNldEdsb2JhbH07XG5cbi8vc2V0IGpwYWNrIGdsb2JhbGx5IHNvIHRoYXQgaXQgY2FuIGJlIHVzZWQgYW55d2hlcmVcbmdsb2JhbC5qcGFjayA9IGpwYWNrOyIsIm1vZHVsZS5leHBvcnRzID0gYXhpb3M7IiwibW9kdWxlLmV4cG9ydHMgPSBmb3JtZGF0YS1wb2x5ZmlsbDsiLCJtb2R1bGUuZXhwb3J0cyA9IHVybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsOyJdLCJzb3VyY2VSb290IjoiIn0=