import {form} from "@htmlguyllc/jpack/es/components/form";

/**
 * Overwrites the form and opens it in a jAlert modal
 *
 * @param parsed_content
 * @param response
 * @param form
 */
form.fromURL.prototype.insertForm = function(parsed_content, response, form){
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

    $.jAlert({
        title:parsed_content.title, //modal title comes from the title of the page we're retrieving the form from
        theme:'blue',
        size: '1000px',
        content: parsed_content.html,
        onOpen: function(alert){
            //find my form in there
            form = alert[0].querySelector(self.getIncomingElementSelector());

            //attach an on-submit listener to send the form's values via XHR
            self.attachSubmitHandler(form);

            //run the onload callback now that the form is there
            self.triggerOnload(form);
        }
    });
};

export const modalForm = form;