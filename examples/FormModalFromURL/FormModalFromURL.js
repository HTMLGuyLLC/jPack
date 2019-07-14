import {FormFromURL} from "@htmlguyllc/jpack/es/components/form";
import {type_checks} from "../../es/utilities/type_checks";

//defaults for the FormModalFromURL class
const FormModalFromURLDefaults = {
    modalOptions: {
        title: 'My Form',
        theme:'blue',
        size: '1000px'
    },
};

/**
 * This form extends the FormFromURL class to provide additional functionality for displaying the form in a modal
 *
 * See app.js for usage
 *
 * If you want to use this example, grab jAlert from here first: https://github.com/HTMLGuyLLC/jAlert
 *
 */
export class FormModalFromURL extends FormFromURL{
    /**
     * @param url
     * @param options
     */
    constructor(url, options){
        super(url,options);

        //if options are undefined, set them
        options = typeof options === "undefined" ? {} : options;

        //make sure options is an object (empty or not)
        type_checks.isDataObject(options, Object.keys(FormModalFromURLDefaults), false, false, true);

        //start by extending modal options so the individual defaults above aren't overwritten, just the ones you pass are
        options.modalOptions = {...FormModalFromURLDefaults.modalOptions, ...options.modalOptions};

        //now extend the entire options object
        options = {...FormModalFromURLDefaults, ...options};

        //now set the modal options
        this.setModalOptions(options.modalOptions);
    }

    /**
     * Sets all options for the modal (pass an object)
     *
     * @param options
     * @returns {FormModalFromURL}
     */
    setModalOptions(options){
        //make sure options is an object (empty or not)
        type_checks.isDataObject(options, Object.keys(FormModalFromURLDefaults), false, false, true);

        this._modalOptions = options;
        return this;
    }

    /**
     * Get all modal options
     *
     * @returns {*}
     */
    getModalOptions(){
        return this._modalOptions;
    }

    /**
     * Get an individual modal option
     *
     * @param key
     * @returns {null|*}
     */
    getModalOption(key){
        if( typeof key !== "string" ) throw `${key} is not a string`;
        if( typeof this._modalOptions[key] === "undefined" ) return null;
        return this._modalOptions[key];
    }

    /**
     * Set an individual modal option
     *
     * @param key
     * @param val
     * @returns {FormModalFromURL}
     */
    setModalOption(key, val){
        if( typeof key !== "string" ) throw `${key} is not a string`;
        this._modalOptions[key] = val;
        return this;
    }

    /**
     * Inserts the form in a modal
     *
     * @param parsed_content
     * @param response
     * @param form
     */
    insertForm(parsed_content, response, form){
        var self = this;

        //if form is already defined, it was submitted and the response contained HTML, so we need to just replace it ourselves
        if( typeof form !== undefined && form ){

            form = dom.replaceElWithHTML(form, parsed_content.html);

            //attach submit handler
            self.attachSubmitHandler(form);

            //trigger onload again (you can pas a param to say it's the second time if you want
            self.triggerOnload(form);

            return;
        }

        //set
        let modalOptions = {
            content: parsed_content.html,
            onOpen: function(alert){
                //find my form in there
                form = alert[0].querySelector(self.getIncomingElementSelector());

                //attach an on-submit listener to send the form's values via XHR
                self.attachSubmitHandler(form);

                //run the onload callback now that the form is there
                self.triggerOnload(form);
            }
        };

        //extend the passed options with these
        modalOptions = {...this.getModalOptions(), ...modalOptions};

        //init the modal - You can replace jAlert with any modal plugin you'd like
        $.jAlert(modalOptions);
    }
}