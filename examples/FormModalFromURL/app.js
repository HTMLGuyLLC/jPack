import {FormModalFromURL} from "./FormModalFromURL";

/**
 *
 * This example shows you how to extend FormFromURL to create a new form class which you can use to pop forms up in a modal
 *
 * If you want to use this specific example, you'd need to grab jAlert from here: https://github.com/HTMLGuyLLC/jAlert
 */

//instantiate the FormModalFromURL instance providing the URL of the form and some options
let form = new FormModalFromURL('/user-form', {
    modalOptions: {
        title: 'User Form',
    },
    incomingElementSelector: "form[name='user_form']", //this is the element we're grabbing from /user-form
    onload: function(form) {
        //init user form JS plugins and such
    },
    onError: function(error){
        alert(error);
    },
    onSuccess: function(response, form){
        alert('Saved!');
        $(form).parents('.jAlert:first').closeAlert();
    }
});

form.onload(function(){
   //you can add as many onload callbacks as you'd like
   //if you want to clear all and start fresh, you can run form.clearOnloadCallbacks()
});

//displays the user form modal
form.getForm();