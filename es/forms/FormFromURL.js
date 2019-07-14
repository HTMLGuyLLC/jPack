import {navigation} from "../navigation";
import {XHRForm} from "./XHRForm";
import axios from "axios";
import {dom} from "../dom";

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
export class FormFromURL extends XHRForm {

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

        navigation.showLoader();
        axios.get(this.getURL()).then(function (response) {
            navigation.hideLoader();

            let data = response.data;

            //just in case the server returned the wrong response type and it's actually JSON - ignore errors
            try{ data = typeof data === 'string' ? JSON.parse(data) : data; } catch(e){ }

            //if the response is a string (probably HTML)
            if( typeof data === 'string' ){
                if( typeof self.getIncomingElementSelector() === 'string' ){
                    //parse the incoming HTML
                    const parsed = navigation.parseHTML(data, self.getIncomingElementSelector());
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
        el = dom.getElement(el, true);

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