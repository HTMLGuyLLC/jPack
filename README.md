# jPack
jPack is a vanilla javascript library of components, classes, plugin wrappers, and utilities designed to make building custom websites and web applications simpler.

But why?

Many plugins and libraries are too generic, verbose, bulky, lacking, or have a lot of dependencies. 
Much of what is included here is stuff that I've written several times, in several different ways, using jQuery in the past (or wrapping other jQuery plugins). 
The goal of this library is to allow me (and you, now that it's open source) to integrate slim, mostly dependency-free, components as-needed with more specific use-cases than what is currently offered elsewhere.

...where else can you get a component to grab a form from another page and stick it on the current one with XHR and XHR submission in [4 lines of custom JS](#4lineofjs)?   

<h1 id="whatsincluded">What's Included</h1>

Component | Data Type | Singleton? | What it does
--- | --- | --- | ---
[navigation](#navigation) | object | yes | Grabs HTML from a URL and replaces content on the current page. Handles browser history, meta title swaps, and offers several callbacks
[XHRForm](#xhrform) | class | no | Adds an on-submit listener and sends the form values using XHR with callbacks for success/failure
[FormFromURL](#formfromurl) (extends XHRForm) | class | no | Grabs a form from a URL and places it on the current page (examples/FormModalFromURL shows how to put the form in a modal) and then uses an XHR request to submit the form
[request](#request) | object | yes | Provides a wrapper for window.location and easy querystring interaction
[Site](#site) | class | no | A generic website class with properties for id, name, and config - useful for multi-tenant applications where you need to know which site is being viewed
[User](#user) | class | no | A generic user class with properties for id, name, email, phone, etc - also allows for front-end permission checks
[strings](#strings) | object | yes | Contains methods for semi-common string manipulation like creating a getter from a string ('hi' = 'getHi')
[type_checks](#typechecks) | object | yes | Validate the value of a variable with higher specificity than built-in functions. For instance, you can validate an object contains specific keys and throw errors if not, or if it contains keys that you didn't define
[dom](#dom) | object | yes | Has methods for converting just about anything into a native DOM Element or array of them (you can provide a string selector, jQuery object, native DOM object, etc). Also has some shortcuts for common DOM checks/manipulation (like removing an element, verifying an element exists in the DOM, or replacing an element with HTML)
[events](#events) | object | yes | Includes methods for attaching event handlers including shorthand methods which create handlers that prevent the browser's default action (onclick, onsubmit)
[ToggleOnMobile](#toggleonmobile) | class | no | Toggle an element's visibility when you click a button. By default, the element is visible, but if the button is visible, the element will be hidden until the button is clicked. If the element is visible and the user clicks outside of it, the element is hidden. If the window is resized, the element will be shown or hidden based on visibility of the button.  

# Installation

#### Standard Global

Download the latest release, unzip and move it in your website's public folder, then include it in your HTML.

Use either jpack.min.js or jpack.bundled.min.js, __BUT NOT BOTH__. The bundled file includes the dependencies and you don't need them if you already have them in your project.

```html
<script href="/@htmlguyllc/jpack/dist/jpack.bundled.min.js">
<!-- <script href="/@htmlguyllc/jpack/dist/jpack.min.js"> -->

<script>
//wait for the page to finish loading so we know jpack is ready
window.addEventListener('load', function() {
    
    //now you can take advantage of the jpack library
    jpack.strings.ucfirst('bob'); //Bob
    
    //if you want to change the namespace
    jpack.setGlobal("$");
    
    $.strings.ucfirst('bob');
    
    //if you want to make all global without a namespace - do so at your own risk! Things may conflict!
    jpack.setGlobal();
    
    strings.ucfirst('bob');
};
</script>
```

#### With NPM or Yarn:
```shell
npm i @htmlguyllc/jpack;
//or
yarn add @htmlguyllc/jpack;
```

#### ES6 (Babel)
```javascript
//a single component from it's own file
import {strings} from '@htmlguyllc/jpack/es/strings';
strings.ucfirst('bob');

//or multiple components from jpack
import {strings, dom} from '@htmlguyllc/jpack';
strings.ucfirst('bob');
dom.exists('a.my-link');

//or a namespaced object containing all components
import * as j from '@htmlguyllc/jpack';
j.strings.ucfirst('bob');
```

#### CommonJS (Browserify)
```javascript
var jpack = require('@htmlguyllc/jpack');

//now use it
jpack.strings.ucfirst('bob');
```

# Dependencies

Name | Required by | Link
--- | --- | ---
url-search-params-polyfill | request | https://www.npmjs.com/package/url-search-params-polyfill
axios | navigation | https://www.npmjs.com/package/axios
formdata-polyfill | XHRForm (and anything that extends it) | https://www.npmjs.com/package/formdata-polyfill

# Documentation

---
<h2 id="navigation">Navigation</h2> 
[back to top](#whatsincluded) <br><br>
<i>Grabs HTML from a URL and replaces content on the current page. Handles browser history, meta and page title swaps, and offers several callbacks</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
setPassthroughData|data:mixed|self|set data you want provided in the onload method for the next page
clearPassthroughData| |self|must be called manually or the data will persist infinitely. you can set an onload callback to clear this every time
getPassthroughData| |mixed|returns the data you set
setIncomingElement|el:string|self|a selector string for the element being retrieved from another page which contains the HTML you want put on the current page
getIncomingElement| |string|
setReplaceElement|el:string|self|a selector string for the element on the current page you want the new HTML to replace
getReplaceElement| |string|
load|url:string, callback:function/null, incoming_el:string/null, replace_el:string/null, push_state:bool|void|pulls content from the provided URL and puts it on the current page - also swaps out the page title, metas, and much more
loaderEnabled|n/a|bool|property to toggle the slow request loader on/off
setLoaderDelay|delay:int|self|set how long a request should take in ms before the loader displays
getLoaderDelay| |self|
getLoaderEl| |Element|
showLoader| |self|shows the loader after the delay
hideLoader| |self|clears the loader timeout and hides it
parseHTML|html:string, parent_el:string|object|parses HTML from the request to get key components like metas and the HTML to be displayed
getRouteFromMeta|html:string|string|retrieves the value of a meta tag named "current_route" to be passed in the onload event to help trigger page-specific JS
replacePageContent|html:string, url:string, incoming_el:string, replace_el:string, push_state:bool | self|replaces HTML on the page with the new content, updates metas, runs the unload and load callbacks and more
reload|callback:function|self|reloads the current page using .load()
fullReload| |void|performs a full browser refresh of the current page
redirect|url:string|void|redirects the user to a new page (no XHR request)
setTitle|title:string|self|sets the page title
onLoad|callback:function|self|add an onload callback (runs 100ms after unload)
onUnload|callback:function|self|add an unload callback
onNavigationFailure|callback:function|self|add a callback when the load() request fails - the error message is provided in event.detail.error
triggerOnLoad|el:mixed, el_selector:string, route:string|self|triggers all onload callbacks
triggerUnload|el:mixed, el_selector:string, route:string|self|triggers all unload callbacks
triggerNavigationFailure|error:string|self|triggers the nav failure and provides an error message
initHistoryHandlers| |self|sets event listeners to handle back/forward navigation in the user's browser

##### To use:
```javascript
import {navigation} from '@htmlguyllc/jpack/es/navigation'; 

//handles browser back/forward buttons
navigation.initHistoryHandlers();

//a selector that contains the HTML you'd like to pull from the response
//the default is "body"
//if the response is a JSON object with an "html" key, it'll use the value of that
navigation.setIncomingElement('#main-content'); 

//a selector that will be replaced with the incoming HTML
//WARNING: If IncomingElement does not match, this will be overwritten by the IncomingElement after it's replaced 
// (since it presumably no longer exists at that point)
//by default it'll replace anything in "body"
navigation.setReplaceElement('#main-content');

//enables a loader to show if a request takes more than 300ms
//WARNING: No styling is provided at this time 
// It uses Bootstrap 4's progress-bar classes
navigation.loaderEnabled = true;
navigation.setLoaderDelay(300);

//things to do when a page loads
navigation.onLoad(function(e){
    var params = e.detail; //get info from the event
    //if a current_route meta was set in the incoming HTML, it'll be provided to you here
    //you can use this to kick off your page-specific JS
    var route = params.route; 
    //the data you set prior to loading the page, if any
    var data = params.data; //or navigation.getPassthroughData()
    //the DOM element that was added to the page replacing the previous
    var el = params.el;
    //el_selector is the IncomingElement selector that was used for this request
    var el_selector = params.el_selector;
    
    //replaced_selector is the ReplaceElement selector that was used for this request
    //Note: If el_selector does not match replaced_selector, ReplaceElement will be replaced with IncomingElement
    //It's done right after this callback and because it's assumed the ReplaceElement doesn't exist anymore
    //If there's a situation where it does and you need it to stay the same, just set it again in here
    //like this: navigation.setReplaceElement(params.replaced_selector);
    var replaced_selector = params.replaced_selector;
   
   //if gtag is set (google analytics), push a page view
   if( typeof gtag !== 'undefined' ) {
       gtag('config', 'GA_MEASUREMENT_ID', {
           page_path: request.getURIWithQueryString()
       });
   }
   
   //scroll to the top of the page
   window.scrollTo(0, 0);
   
   //.. do something...like init tooltip plugins
});

//things to do when leaving a page
navigation.onUnload(function(){
   //.. do something...like remove generic event handlers or destroy plugins 
});

//things to do when a page fails to load
navigation.onNavigationFailure(function(e){
    var error = e.detail.error;
    //.. do something...like show an error popup for the user or log the issue
});

//to prevent duplicate code, you can run your onload callbacks immediately
navigation.triggerOnLoad(dom.getElement('body'), 'body', navigation.getRouteFromMeta());

//now use the plugin to load pages
//if you're lazy, the fastest way to integrate is to just add data-href to all internal links 
//and then attach a handler like this:
import {events} from '@htmlguyllc/jpack/es/events';
events.onClick('[data-href]', function(){
   navigation.load(this.href); 
});

//set something that will be received onload of the next page
navigation.setPassthroughData({
    product_id:1
});

//you can use the load method at any time to load a new page 
// the second param is an optional callback that only runs for that page
navigation.load('/my-page', function(new_el, new_el_selector, pass_through_params){
    //my page is now loaded
    
    //new_el is the new element on the page
    //new_el_selector is the incomingSelector used for this request
    
    //pass_through_data is any data that was set on navigation prior to this request
    //so in this instance, it will be {product_id:1} (set above)
    
    //now clear that data so it's gone for the next page load
    navigation.clearPassthroughData();
});

//in some cases, you'll want to grab a different element from the URL
//this example grabs .popup-content from /my-popup and replaces .current-popup
navigation.load('/my-popup', function(new_el, el_sel, data){
   //now the new element is on the page
}, '.popup-content', '.current-popup');
```

---
<h2 id="xhrform">XHRForm</h2> 
[back to top](#whatsincluded) <br><br>
<i>Adds an on-submit listener and sends the form values using XHR with callbacks for success/failure. Automatically prevents the user from submitting the form several times at once. It must finish processing before it can be submitted again.</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
constructor|form:Element,options:object |self|
setXHRSubmit|enabled:bool|self|enable/disable the XHR submission of the form
setSubmitMethod|method:string|self|override the form and provide a method (GET, POST, PATCH)
getSubmitMethod| |method:string|
setSubmitURL|url:mixed|self|pass null to use the form's action, function to dynamically generate the URL (receives the form as a param), or string
getSubmitURL| |url:string|returns whatever was set in the constructor or using setSubmitURL, not the final URL
getFinalSubmitURL|form:Element|url:string|returns the URL the form will be submitted to after running the function (if it is one) and using all fallbacks
attachSubmitHandler|form:mixed|self|attaches the event listener to on submit of the passed form
onSuccess|callback:function|self|adds an onSuccess callback (you can add as many as you'd like)
clearOnSuccessCallbacks| |self|
triggerOnSuccess|response:mixed, form:Element|self|runs all onSuccess callbacks and passes the server's response and the form element
onError|callback:function|self|adds an onError callback (you can add as many as you'd like)
clearOnErrorCallbacks| |self|
triggerOnError|error:string, response:mixed, form:Element|self|triggers all onError callbacks and passes the error string, server response, and form Element
submitForm|form:Element|self|gets URL and method, checks form validity using .validate(), gets values, submits, and kicks off callbacks
getFormValues|form:Element|self|returns data from the form to be submitted - override this if you want to manipulate it first
setValidateCallback|callback:function|is_valid:bool|pass a function to validate the form and return true if it's valid, false if it's not. False prevents form submission so you must display errors for the user within here. The default callback uses Bootstrap 4's "was-validated" class to show errors and HTML5's :invalid attribute to validate
validate|form:Element|bool|passes the form to the validate callback and returns the response

##### To use:
```javascript
import {XHRForm} from '@htmlguyllc/jpack/es/forms'; 

//shown with defaults
var remote_form = new XHRForm('form[name="my_form"]', {
        xhrSubmit: true, //wouldn't make a whole lotta sent to use this if this were false lol, but it's here for extending classes and incase you want to toggle it for whatever reason
        submitURL:null, //when null, the form's action will be used (if explicitly defined), otherwise it falls back to the URL the form was retrieved from
        submitMethod:null, //when null, the form's method will be used (if explicitly defined), otherwise it falls back to POST
        onError: function(error, response, form){ alert(error); }, //although you can add more, you can only pass 1 to start with in the constructor
        onSuccess: function(response, form){ //although you can add more, you can only pass 1 to start with in the constructor 
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
});

//attach the submission handler
remote_form.attachSubmitHandler();
```

---
<h2 id="formfromurl">FormFromURL</h2>
FormFromURL extends [XHRForm](#xhrform)<br><br> 
[back to top](#whatsincluded) <br><br>

<i>Grabs a form from a URL and places it on the current page (examples/FormModalFromURL shows how to put the form in a modal) and then uses an XHR request to submit the form</i><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
constructor | url:string, options:object |self|
setURL|url:string|self|set the URL to pull the form from
getURL| |url:string|
setIncomingElementSelector|selector:string|self|set a selector for the form element or it's parent that is returned by the URL
getIncomingElementSelector| |selector:string|
setInsertIntoElement|element:mixed|self|set the element that the form should be inserted into
getInsertIntoElement| |element:mixed| 
getForm| |void|pulls the form from the URL and runs the insertForm method
insertForm|parsed_content:object, response:mixed, form:Element/null|el:Element|inserts the form into the parent element, attaches the submit handler, triggers onload, and returns the parent element
onload|callback:function|self|adds a callback function to be run when the form is loaded on the page
clearOnloadCallbacks| |self|removes all onload callbacks
triggerOnload|form:Element|self|runs all onload callbacks and passes the form to them

__There are several methods and properties inherited from XHRForm that are not listed here. 
See [XHRForm](#xhrform) above for those details__

##### To use:
```javascript
import {FormFromURL} from '@htmlguyllc/jpack/es/forms'; 

//shown with defaults
var remote_form = new FormFromURL('/my-form', {
        incomingElementSelector: null, //when null, it assumes the entire response is the form's HTML
        insertIntoElement: null, //error on null, must provide this
        onload: function(form){ return this; }, //although you can add more, you can only pass 1 to start with in the constructor
        xhrSubmit: true, 
        submitURL:null, //when null, the form's action will be used (if explicitly defined), otherwise it falls back to the URL the form was retrieved from
        submitMethod:null, //when null, the form's method will be used (if explicitly defined), otherwise it falls back to POST        
        onError: function(error, response, form){ alert(error); }, //although you can add more, you can only pass 1 to start with in the constructor
        onSuccess: function(response, form){ //although you can add more, you can only pass 1 to start with in the constructor 
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
});

//grab the form and insert in into the "insertIntoElement"
remote_form.getForm();
```

<h4 id="4lineofjs">How to get and submit a form in 4 lines of javascript:</h4>
<i>
- Success/failure messages will be shown in an alert
- HTML5/browser validation is done on the required field prior to submit

Your javascript
```javascript
import {FormFromURL} from '@htmlguyllc/jpack/es/forms'; 
new FormFromURL('/email-form', {
    insertIntoElement: 'body.form-container',
}).getForm();
```
Your HTML
```html
<div class="form-container"></div>
```
Server response when retrieving /email-form (or, just the HTML without the JSON wrapper)
```json
{
 "html": "<form><input name='email' required='required'><input type='submit' value='Submit'></form>"
}
``` 
Server response when submitting to /email-form (success)
```json
{ "success": "Thank you for submitting, your email has been provided to spammers everywhere" }
```
Server response when submitting to /email-form (error)
```json
{ "error": "Your email is required/Your email is invalid" }
```

#### Extending:

FormFromURL extends XHRForm and either can be extended as you need.

See examples/FormModalFromURL for an example

---
<h2 id="request">Request</h2> 
[back to top](#whatsincluded) <br><br>
<i>Provides a wrapper for window.location and easy querystring interaction</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
query|n/a|URLSearchParams|see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Methods
isHttps| |bool|
getDomain| |string|
getDomainWithProtocol| |string|
getURI| |string|also known as the path - does not include querystring 
getURIWithQueryString| |string|full URL after the domain
getFullURL| |string|
appendSlash|string:string|string|adds a slash (if there isn't already one) to the end of a string. 

##### To use:
```javascript
import {request} from '@htmlguyllc/jpack/es/request'; 

//get product_id from the querystring
var product_id = request.query.get('product_id');

var current_full_url = request.getFullURL();

var full_blog_url = request.appendSlash(request.getDomainWithProtocol())+'blog'; //https://my-domain.com/blog
```

---
<h2 id="site">Site</h2> 
[back to top](#whatsincluded) <br><br>
<i>A generic website class with properties for id, name, and config - useful for multi-tenant applications where you need to know which site is being viewed</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
getId| |string/int|
setId|id:string/int|this|
getName| |string|this
setName|name:string|this|
getConfig| |object|this
setConfig|config:object|this|overwrites all config
getConfigItem| |mixed|returns an individual item from config
setConfigItem|key:string,val:mixed|this|sets the value of an individual item in config
populate|data:object|this|sets provided values all at once (id,name,config)

##### Instantiation with current site data:

The easy way: 

Create an object named $site with values from your server (prior to including jpack) 
```html
<script>
const $site = {
    id: <?php echo $site['id']; ?>,
    name: "<?php echo $site['name']; ?>",
    //$site['config'] is a key/val array of configuration options
    config: JSON.parse("<?php echo json_encode($site['config']); ?>"),
};
</script>
```
Then instantiate the Site class in your JS file somewhere
```javascript
const cur_site = new Site($site);
cur_site.getId();
```

@see: /examples/CurrentSiteSingleton for a method of instantiating the current site once and using everywhere
Note: Even though that creates a singleton which is available anywhere, it's still highly recommended that you pass that object to functions and methods where it is used (dependency injection)

The harder way: 

Perform an XHR request to grab site details via a JSON API, then run the populate method on the site object.
```javascript
import {Site} from '@htmlguyllc/jpack/es/site';
 
//this example uses jQuery's shorthand AJAX call, you can use axios or any request you want
$.get('/my-site-info-endpoint.php', function(data){
    //don't forget error handling!
    const cur_site = new Site(JSON.parse(data));
});
```

Of course you can use this class for any site, not just the current one, but this is the intended usage.

---
<h2 id="user">User</h2> 
[back to top](#whatsincluded) <br><br>
<i>A generic user class with properties for id, name, email, phone, etc - also allows for front-end permission checks</i><br><br>

Method/Property | Params | Return | Notes
--- | --- | --- | ---
constructor|data:object|self|
getId| |string/int|
setId|id:string/int|this|
getIsGuest| |bool|if your site has users who don't login but still interact and have a user record (like guest checkout)
setIsGuest|is_guest:bool|this|
setIsAdmin| |bool|if your site has users who have ultimate permissions and you want to do something based on that
setIsGuest|is_admin:bool|this|
getUsername| |string|
setUsername|username:string|this|
getFname| |string|
setFname|fname:string|this|
getLname| |string|
setLname|lname:string|this|
getName| |string|returns fname and lname concatenated with a space
getEmail| |string|
setEmail|email:string|this|
getPhone| |string|
setPhone|phone:string|this|
getPermissions| |array|
setPermissions|permissions:array|this|
addPermission|permission:string/int|this|
removePermission|permission:string/int|this|
hasPermission|permission:string/int|bool|
getAdditionalData| |object|set any additional data about this user that doesn't fit the default getters and setters here (a better idea would be to extend this object with your custom properties/methods)
setAdditionalData|data:object|this|
getDataItem|key:string|mixed|returns a single value from the additional data object/array
setDataItem|key:string, val:mixed|sets a single value in the additional data array/object
populate|data:object|this|sets provided values all at once (id, isGuest, isAdmin, etc)

##### Instantiation with current user data:

The easy way: 

Create an object named $user with values from your server 
```html
<script>
const $user = {
    id: <?php echo $user['id']; ?>,
    fname: "<?php echo $user['fname']; ?>",
    //..
    permissions: JSON.parse("<?php echo json_encode($user['permissions']); ?>"),
    additionalData: JSON.parse("<?php echo json_encode([
        'user_type'=>$user['user_type'],
        //whatever else you might want to pass
    ]); ?>"),
    //..
};
</script>
```
Then instantiate the User class in your JS file somewhere
```javascript
const cur_user = new User($user);
cur_user.getId();
```
@see: /examples/CurrentUserSingleton for a method of instantiating the current user once and using everywhere
Note: Even though that creates a singleton which is available anywhere, it's still highly recommended that you pass that object to functions and methods where it is used (dependency injection)

The harder way: 

Perform an XHR request to grab site details via a JSON API, then run the populate method on the site object.
```javascript
import {User} from '@htmlguyllc/jpack/es/user';
 
$.get('/my-user-info-endpoint.php', function(data){
    //don't forget error handling!
    const cur_user = new User(JSON.parse(data));
});
```

Of course you can use this class for any User not just the current one, but that's the intended usage.

---
<h2 id="strings">Strings</h2> 
[back to top](#whatsincluded) <br><br>
<i>Contains methods for semi-common string manipulation like creating a getter from a string ('hi' = 'getHi')</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
ucfirst|string:string|string|capitalizes the first letter of a string like ucfirst in PHP
getter|string:string|string|creates a getter method name from a string
setter|string:string|string|creates a setter method name from a string

##### To Use:

```javascript
import {strings} from '@htmlguyllc/jpack/es/strings';

strings.ucfirst('bob'); //returns 'Bob'
strings.getter('name'); //returns 'getName';
strings.setter('name'); //returns 'setName';
```

---
<h2 id="dom">DOM</h2> 
[back to top](#whatsincluded) <br><br>
<i>Has methods for converting just about anything into a native DOM Element or array of them (you can provide a string selector, jQuery object, native DOM object, etc). Also has some shortcuts for common DOM checks/manipulation (like removing an element, verifying an element exists in the DOM, or replacing an element with HTML)</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
getElement|el:mixed, error_on_none:bool, error_on_multiple:bool|Element/HTMLDocument/null|returns a native DOM element for whatever you provide (selector string, array of elements, single element, jQuery wrapped DOM element, etc)
getElements|el:mixed, error_on_none:bool|array|same as getElement, except it returns all matches
remove|el:mixed|this|removes elements from the DOM - uses .getElements()
replaceElWithHTML|el:mixed, html:string|Element|replaces an element in the DOM with HTML and returns a reference to the new Element
exists|el:mixed|bool|checks to see if it exists in the DOM
multipleExist|el:mixed|bool|checks to see if more than 1 instance exists in the DOM
isVisible|el:mixed|bool|checks to see if the provided element is visible


##### To Use:

```javascript
import {dom} from '@htmlguyllc/jpack/es/dom';

//Dont do this. Most of these are dumb examples.
dom.getElement('.my-fav-button', true, true); //will throw an error if it doesn't find it, or if it finds more than 1
dom.getElements('.links', true); //will throw an error if none are found
dom.getElement('.my-button'); //returns the button, or null (if multiple, it returns the first)
dom.getElements('.links'); //returns an array of any matches for .links
dom.getElement($('a')); //returns the native DOM element for the link and removes the jQuery wrapper
dom.getElement(document.querySelectorAll('a')); //returns the first anchor

dom.exists('a'); //returns true if there is an anchor on the page
dom.multipleExist('a'); //returns true if more than 1 anchor on the page
```

---
<h2 id="typechecks">Type Checks</h2> 
[back to top](#whatsincluded) <br><br>
<i>Validate the value of a variable with higher specificity than built-in functions. For instance, you can validate an object contains specific keys and throw errors if not, or if it contains keys that you didn't define</i><br><br>


Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
isDataObject|value:object, keys:array, require_all_keys:bool, block_other_keys:bool, throw_error:bool|bool|validates that an object contains data and not a dom element, array, null or anything else that would normally return true when you call typeof

##### To Use:

```javascript
import {type_checks} from '@htmlguyllc/jpack/es/type_checks';

var my_obj = {id:null, name:'John Doe', email:'john@doe.com'};

//make sure my_obj contains the keys: 'id', 'name', 'email'
//force all keys to exist
//block any keys that aren't in that list
//throw an error if the object fails any checks
type_checks.isDataObject(my_obj, ['id', 'name', 'email'], true, true, true);
```

---
<h2 id="events">Events</h2> 
[back to top](#whatsincluded) <br><br>
<i>Includes methods for attaching event handlers including shorthand methods which create handlers that prevent the browser's default action (onclick, onsubmit)</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
setGlobal|namespace:string/null|self|adds each of the following functions to the global scope, a namespace is optional, but recommended. Use at your own risk! These may cause conflicts!
onClick|el:mixed, callback:function|handler:function|prevents the browser's default so you can handle link clicks and form submissions with less code - returns an updated handler in case you need to remove it later
onSubmit|el:mixed, callback:function|handler:function|same as .onClick() but for submit  - returns an updated handler in case you need to remove it later
onEventPreventDefault|el:mixed, event:string, callback:function|callback:function|generates and attaches a handler which prevents the default action - returns the updated handler in case you need to remove it later
on|el:mixed, event:string, callback:function|array|attaches an event listener
off|el:mixed, event:string, callback:function|array|removes an event listener
trigger|el:mixed, event:string, event_options:mixed|array|triggers an event on an element/elements - uses .getElements()

##### To Use:

```javascript
import {events} from '@htmlguyllc/jpack/es/events';

var preventedHandler = events.onClick('a.my-link', function(){
   //do something without the page redirecting to the href 
});
//now remove that handler
events.off('a.my-link', 'click', preventedHandler);

var handler = events.onSubmit('form.my-form', function(){
   //do something and submit the form using XHR 
});

//trigger submit on a form and pass an object as additional data in the event
events.trigger('.my-form', 'submit', {id:1});
```

##### Setting with a custom namespace (or no namespace):

```javascript
import {events} from '@htmlguyllc/jpack/es/events';

events.setGlobal();

onClick('a', function(){
   //do something - href is prevented! 
});
```

---
<h2 id="toggleonmobile">ToggleOnMobile</h2> 
[Demo](https://jsfiddle.net/HTMLGuyLLC/68og394L)  | [back to top](#whatsincluded) <br><br>
<i>Toggle an element's visibility when you click a button. By default, the element is visible, but if the button is visible, the element will be hidden until the button is clicked. If the element is visible and the user clicks outside of it, the element is hidden. If the window is resized, the element will be shown or hidden based on visibility of the button.</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
constructor|btn:mixed, toggle_el:mixed, toggle_class:string, hide_on_outside_click:bool|self|
init| |self|attaches event handlers and immediately adjusts the visibility
destroy| |self|removes event handlers - does not change the class

##### To Use:

```javascript
import {ToggleOnMobile} from '@htmlguyllc/jpack/es/toggle';

const toggle = new ToggleOnMobile('.toggle-sidebar-btn', '.sidebar', 'visible', true);

toggle.init();

//and later if you want to, toggle.destroy();
```