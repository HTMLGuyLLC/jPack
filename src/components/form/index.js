import axios from 'axios';
import {navigation} from "../navigation";
import {dom} from "../../utilities/dom";
import {type_checks} from "../../utilities/type_checks";

require('formdata-polyfill');

//default options for form.fromURL()
let from_url_defaults = {
    incomingElementSelector: null, //the form element or wrapper that you want to retrieve from the URL
    insertIntoElement: null, //what element to put the form into
    onload: function(form){ return this; }, //once the form is loaded onto the page
    xhrSubmit: true, //submit the form using XHR instead of the default action
    submitURL:null, //will be grabbed from the form's action attribute, or fallback to the URL the form was retrieved from
    submitMethod:null, //will be grabbed from the form's method attribute, or fallback to "POST"
    onError: function(error, response, form){ }, //called when the form is submitted and fails
    onSuccess: function(response, form){ }, //called when the form is submitted successfully
};

/**
 * Form based helpers
 *
 * @type {{fromURL: form.fromURL}}
 */
export const form = {

    /**
     * Grabs a form from a URL and returns it to the current page
     *
     * Also handles form submission using XHR and can open a modal to display the form
     *
     * Only methods that require notes or are commonly used externally are commented below
     *
     * @param url - string
     * @param options - object{incomingElementSelector,insertIntoElement, onload}
     */
    fromURL: function(url, options){
        if( typeof url !== "string" ) throw `${url} is not a string`;

        //if options are undefined, set them
        options = typeof options === "undefined" ? {} : options;

        //make sure options is an object (empty or not) with only the keys set in the defaults
        type_checks.isDataObject(options, Object.keys(from_url_defaults), false, true, true);

        //extend defaults with provided options
        options = {...from_url_defaults, ...options};

        /**
         * Set the URL from which the form will be retrieved
         *
         * @param url
         * @returns {form}
         */
        this.setURL = function(url){
            if( typeof url !== 'string' ) throw `${url} is not a string`;
            this._url = url;
            return this;
        };
        this.getURL = function(){
            return this._url;
        };
        //set it immediately from the provided string
        this.setURL(url);

        /**
         * If the URL provided returns HTML, this selector will be used to pull the form out
         *
         * If left null, it will assume the entire response is the form's HTML
         *
         * @param selector: string|null
         * @returns {form}
         */
        this.setIncomingElementSelector = function(selector){
            if( selector !== null && typeof selector !== 'string' ) throw `${selector} is not a string or null value`;
            this._incomingElementSelector = selector;
            return this;
        };
        this.getIncomingElementSelector = function(){
            return this._incomingElementSelector;
        };
        //set it immediately from options
        this.setIncomingElementSelector(options.incomingElementSelector);

        /**
         * Allows you to set a parent element that the form will be inserted into using the default insertForm method
         * Alternatively, you can leave this and override insertForm() and have more control over where it should go
         *
         * Uses dom.getElement() so you can pass a string, jQuery object, object, etc
         * However if more than 1 element is detected, an error will be thrown
         *
         * @param element
         */
        this.setInsertIntoElement = function(element){
            this._insertIntoElement = element;
        };
        this.getInsertIntoElement = function(){
            return this._insertIntoElement;
        };
        //set it immediately from the options
        this.setInsertIntoElement(options.insertIntoElement);

        /**
         * Get the form from the URL and pass to insertForm
         *
         * There are three main ways to provide the form from your server:
         * 1) Straight HTML. The entire response is the form and that's it.
         * 2) Straight HTML, but the form is only a part of the response so it needs to be parsed out based on a selector.
         * 3) A JSON object containing the key "html" like this: {"html":"<form>your form here</form>"}
         *
         */
        this.getForm = function(){
            var self = this;

            navigation.showLoader();
            axios.get(this.getURL()).then(function (response) {
                navigation.hideLoader();

                let data = response.data;

                //just in case the server returned the wrong response type and it's actually JSON - ignore errors
                try{ data = typeof data === 'string' ? JSON.parse(data) : data; } catch(e){ }

                //if the response is a string (probably HTML)
                if( typeof data === 'string' ){
                    if( typeof form.getIncomingElementSelector() === 'string' ){
                        //parse the incoming HTML
                        const parsed = navigation.parseHTML(data, form.getIncomingElementSelector());
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
                    navigation.hideLoader();
                    throw error;
                });
        };

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
        this.insertForm = function(parsed_content, response, form) {
            //selector for where the form will go
            let el = this.getInsertIntoElement();

            //if not provided
            if( el === null ) throw 'Cannot determine where to insert form. Overwrite insertForm() or provide insertIntoElement';

            //get the container element - error if not found
            el = dom.getElement(el, true);

            //put the form in the container element
            el.innerHTML = parsed_content.html;

            //find the newly added form
            form = el.querySelector('form');

            //attach an on-submit listener to send the form's values via XHR
            this.attachSubmitHandler(form);

            //run the onload callback now that the form is there
            this.triggerOnload()();

            return el;
        };

        /**
         * Use this method to modify the form immediately after it's displayed
         *
         * You'll likely want to attach plugins for datepickers/dropdowns, or maybe hide a field based on the value of another
         *
         * @param onload
         * @returns {form}
         */
        this.setOnload = function(onload){
            if( typeof onload !== 'function' ) throw `${onload} is not a function`;
            this._onload = onload;
            return this;
        };
        this.triggerOnload = function(form){
            return this._onload(form);
        };
        //set it immediately from the options
        this.setOnload(options.onload);

        /**
         * Attaches the on submit handler (only if xhrSubmit is true)
         *
         * Pass the form or form selector
         */
        this.attachSubmitHandler = function(form){
            if( !this._xhrSubmit ) return;

            //just incase you didn't provide the actual Element
            form = dom.getElement(form);

            var self = this;

            form.addEventListener('submit', function(e){
                e.preventDefault();
                self.submitForm(form);
                return false;
            });
        };

        /**
         * Whether or not you want the form to be submitted using an XHR request
         *
         * @param enabled - bool
         */
        this.setXHRSubmit = function(enabled){
            this._xhrSubmit = !!enabled;
            return this;
        };
        //set it immediately from the options
        this.setXHRSubmit(options.xhrSubmit);

        /**
         * How to submit the form - if set to null, the method will be pulled from the form's
         *  method attribute or fallback to "POST"
         *
         * @param method
         * @returns {form}
         */
        this.setSubmitMethod = function(method){
            if( typeof method !== "string" && method !== null ) throw `${method} is not a string or null`;
            this._submitMethod = method;
            return this;
        };
        this.getSubmitMethod = function(){
            return this._submitMethod;
        };
        //set it immediately from the options
        this.setSubmitMethod(options.submitMethod);

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
        this.setSubmitURL = function(url){
            if( typeof url !== "string"
                && typeof url !== "function"
                && url !== null ) throw `${url} is not a string, function, or null`;

            this._submitURL = url;
            return this;
        };
        this.getSubmitURL = function(form){
            //if a function, run it
            if( typeof this._submitURL === "function" ) return this._submitURL(form);

            return this._submitURL;
        };
        //set it immediately from the options
        this.setSubmitURL(options.submitURL);

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
        this.submitForm = function(form) {
            //cache for use inside other scopes
            var self = this;

            //get the provided submit URL
            let url = this.getSubmitURL(form);
            //if the URL is null, grab from the form
            url = url === null ? form.action : url;
            //default to the URL used to grab the form if it's not provided
            url = !url ? this.getURL() : url;

            //get the provided submit method
            let method = this.getSubmitMethod();
            //if it's null, grab it from the form
            method = method === null ? form.method : method;
            //default to post if we still don't have a method and lowercase anything that was provided
            method = !method ? 'post' : method.toLowerCase();

            //if not valid, stop here until they resubmit
            if (!this.isValid(form)) return false;

            navigation.showLoader();

            //get form values
            const form_values = Array.from(
                this.getFormValues(form),
                e => e.map(encodeURIComponent).join('=')
            ).join('&');

            axios({
                url: url,
                method: method,
                data: form_values,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function (response) {
                navigation.hideLoader();

                let data = response.data;

                //just in case the server returned the wrong response type and it's actually JSON - ignore errors
                try{ data = typeof data === 'string' ? JSON.parse(data) : data; } catch(e){ }

                //if the response is a string, it's probably/hopefully the form with inline errors
                if( typeof data === 'string' ){
                    //if we are looking for an element within the response
                    if( typeof self.getIncomingElementSelector() === 'string' ){
                        //parse the incoming HTML
                        const parsed = navigation.parseHTML(data, self.getIncomingElementSelector());
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
                    navigation.hideLoader();
                    throw error;
                });

            return this;
        };

        /**
         * Uses Bootstrap 4's 'was-validated' class and :invalid attributes to determine validity and display errors
         *
         * If you need more custom front-end validation, you should extend this object and overwrite this method
         *
         * Nothing is kicked off if this returns false. It just prevents form submission, so make sure you display errors
         *
         * @returns {boolean}
         */
        this.isValid = function(form){
            //add .was-validated for bootstrap to show errors
            form.classList.add('was-validated');

            //if there are any :invalid elements, the form is not valid
            const is_valid = !form.querySelector(':invalid');

            //if it's valid, clear the validation indicators
            if( is_valid ) form.classList.remove('was-validated');

            return is_valid;
        };

        /**
         * Returns an object containing all form values to be submitted
         *
         * Override/extend this if you want to manipulate the data prior to submission
         *
         * @returns FormData
         */
        this.getFormValues = function(form){
            return new FormData(form);
        };

        /**
         * Set a callback function to run when the form is submitted successfully
         *
         * Your function will receive 2 params, the first is the response from the server and the second is the form on the page
         *
         * @param onSuccess
         * @returns {form}
         */
        this.setOnSuccess = function(onSuccess){
            if( typeof onSuccess !== "function" ) throw `${onSuccess} is not a function`;
            this._onSuccess = onSuccess;
            return this;
        };
        this.triggerOnSuccess = function(response, form){
            return this._onSuccess(response, form);
        };
        //set immediately from options
        this.setOnSuccess(options.onSuccess);

        this.setOnError = function(onError){
            if( typeof onError !== "function" ) throw `${onError} is not a function`;
            this._onError = onError;
            return this;
        };
        this.triggerOnError = function(error, response, form){
            this._onError(eror, response, form);
            return this;
        };
        //set immediately from options
        this.setOnError(options.onError);

        return this;
    }
};