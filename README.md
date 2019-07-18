Build Status
---
![BuildStatus](https://img.shields.io/badge/Build-Passing-brightgreen.svg "Building Status")


# jPack
jPack is a vanilla javascript library of components, classes, plugin wrappers, and utilities designed to make building custom websites and web applications simpler.

But why?

Many plugins and libraries are too generic, verbose, bulky, lacking, or have a lot of dependencies. 
Much of what is included here is stuff that I've written several times, in several different ways, using jQuery in the past (or wrapping other jQuery plugins). 
The goal of this library is to allow me (and you, now that it's open source) to integrate slim, mostly dependency-free, components as-needed with more specific use-cases than what is currently offered elsewhere.

...where else can you get a component to grab a form from another page and stick it on the current one with XHR and XHR submission in [4 lines of custom JS](#4lineofjs)?   

<h1 id="whatsincluded">What's Included</h1>

Component | Demo | Data Type | What it does
--- | --- | --- | ---
[navigation](#navigation) | | object | Grabs HTML from a URL and replaces content on the current page. Handles browser history, meta title swaps, and offers several callbacks
[XHRForm](#xhrform) | | class | Adds an on-submit listener and sends the form values using XHR with callbacks for success/failure
[FormFromURL](#formfromurl) (extends XHRForm) | | class | Grabs a form from a URL and places it on the current page (examples/FormModalFromURL shows how to put the form in a modal) and then uses an XHR request to submit the form
[request](#request) | [demo](https://jsfiddle.net/HTMLGuyLLC/73b2kotL/) | object | Provides a wrapper for window.location and easy querystring interaction
[Site](#site) | [demo](https://jsfiddle.net/HTMLGuyLLC/L6brcvo3/) | class | A generic website class with properties for id, name, and config - useful for multi-tenant applications where you need to know which site is being viewed
[User](#user) | [demo](https://jsfiddle.net/HTMLGuyLLC/Lzp5w3rg) | class | A generic user class with properties for id, name, email, phone, etc - also allows for front-end permission checks
[strings](#strings) | [demo](https://jsfiddle.net/HTMLGuyLLC/ebof3hm4/) | object | Contains methods for semi-common string manipulation like creating a getter from a string ('hi' = 'getHi')
[type_checks](#typechecks) | [demo](https://jsfiddle.net/HTMLGuyLLC/5p9q1ofj/) | object | Validate the value of a variable with higher specificity than built-in functions. For instance, you can validate an object contains specific keys and throw errors if not, or if it contains keys that you didn't define
[dom](#dom) | [demo](https://jsfiddle.net/HTMLGuyLLC/et42sLbm/) | object  | Has methods for converting just about anything into a native DOM Element or array of them (you can provide a string selector, jQuery object, native DOM object, etc). Also has some shortcuts for common DOM checks/manipulation (like removing an element, verifying an element exists in the DOM, or replacing an element with HTML)
[events](#events) | [demo](https://jsfiddle.net/HTMLGuyLLC/wv2hkzp5/) | object | Includes methods for attaching event handlers including shorthand methods which create handlers that prevent the browser's default action (onclick, onsubmit)
[ToggleOnMobile](#toggleonmobile) | [demo](https://jsfiddle.net/HTMLGuyLLC/68og394L/) | class | Toggle an element's visibility when you click a button. By default, the element is visible, but if the button is visible, the element will be hidden until the button is clicked. If the element is visible and the user clicks outside of it, the element is hidden. If the window is resized, the element will be shown or hidden based on visibility of the button.  

# Installation

#### Standard Global

Download the latest release, unzip and move it into your website's public folder, then include it in your HTML.

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

Properties | Default | Notes
--- | --- | ---
pushState|true|enables pushing the new URL to the browser's history each time .load() is called
loaderEnabled|true|enables a loader if the the .load() request takes too long
trackHistory|false|stores the URL and route in an array each time .load() is called to track history

Primary Methods | Params (name:type) | Return | Notes
--- | --- | --- | ---
setConfig|config:object|self|sets multiple configuration options at once (see examples below for more info)
initHistoryHandlers| |self|sets event listeners to handle back/forward navigation in the user's browser (only use if pushState is true)
setIncomingElement|el:string|self|a selector string for the element being retrieved from another page which contains the HTML you want put on the current page
setReplaceElement|el:string|self|a selector string for the element on the current page you want the new HTML to replace
load|url:string, data:object, onload:function/null, options:object{incomingElement:string, replaceElement:string, pushState:bool}|self|pulls content from the provided URL and puts it on the current page - also swaps out the page title, metas, and much more - all parameters passed to this method only pertain to this specific load. They do not persist on the navigation object.
showLoader| |self|shows the loader after the delay
hideLoader| |self|clears the loader timeout and hides it
reload|callback:function|self|reloads the current page using .load()
fullReload| |void|performs a full browser refresh of the current page
redirect|url:string|void|redirects the user to a new page (no XHR request)
showLoader| |self|sets a timeout (using the loaderDelay) with a callback to show the loader
hideLoader| |self|cancels the timeout if it hasn't shown yet and hides the loader
resetConfig| |self|resets config options back to their defaults

Event Methods | Params (name:type) | Return | Callback Params (name:type) | Notes
--- | --- | --- | --- | ---
onBeforeRequest|callback:function|self|el:Element, data:object, config:{ selector:string, replacedSelector:string, route:string/null}|adds a callback to run prior to the request, if the callback returns false, the request will not be made
removeOnBeforeRequest|callback:function|self||removes an onbeforerequest callback (must provide the original function)
onload|callback:function|self|el:Element, data:object, config:{ selector:string, replacedSelector:string, route:string/null} | add an onload callback
removeOnload|callback:function|self||removes an onload callback (must provide the original function)
onUnload|callback:function|self|el:Element, data:object, {selector:string, route:string/null}|add an unload callback
removeOnunload|callback:function|self||removes an unload callback (must provide the original function)
onFail|callback:function|self|error:string, url:string, data:object, axios_error:object/null|add a callback when the load() request fails - receives 2 params (error:string, axios_error:object)
removeOnFail|callback:function|self||removes a failure callback (must provide the original function)

Setters/Getters | Params (name:type) | Return | Notes
--- | --- | --- | ---
getConfig| |object|returns the config options as an object
getIncomingElement| |string|
getReplaceElement| |string|
setData|data:object|self|sets a data object that is automatically passed to every .onload(), .onUnload(), and .onFail() callback 
getData| |object| 
setDataItem|key:string, val:mixed|self|sets a single data value
getDataItem|key:string|self|returns null if it doesn't exist
clearData| |self|clears all data
setLoaderDelay|delay:int|self|set how long a request should take in ms before the loader displays
getLoaderDelay| |self|
getHistory| |array|returns an array of objects containing "url" and "route" starting with the first URL passed to .load() and ending with the latest
getLastHistoryRecord| |object|returns an object containing "url" and "route" for the last page grabbed by .load()

##### To use:
```javascript
import {navigation} from '@htmlguyllc/jpack/es/navigation';

/**
* Shown with defaults, you don't need to provide all of these, just what you want to modify
* If the defaults are fine, you don't need to call setConfig()
*/
navigation.setConfig({
     trackHistory:false, //keep track of URLs loaded in an array (see setters/getters above for how to retrieve records)
     pushState:true, //push new URLs to the browser's history
     loaderEnabled:true, //show a loader during the request process
     loaderDelay:300, //how long the request needs to take before the loader is shown
     incomingElementSelector:'body', //what element in the content from the URL should be grabbed
     replaceElementSelector:'body', //what element on the page should be replaced with the incoming one
     loaderClasses:'progress page-navigation-loader', //the loader consists of two divs (outer/inner) and uses Bootstrap 4's progress-bar classes (no styling is included so you should either add Bootstrap, change these classes and add your own styling, or just disable the loader)
     loaderInnerDivClasses:'progress-bar progress-bar-striped progress-bar-animated',
});

//attaches event handlers to automatically use XHR to reload pages when the user pushes the back and forward buttons in their browser (will not work if pushState is false)
navigation.initHistoryHandlers();

/**
* Add as many onBeforeRequest callbacks as you'd like to run every time a page is loaded
* 
* el is the element about to be replaced
* data the data object you set when you called .load() or using setData/setDataItem (see above method details) - the two objects are merged and passed
* config is an object {selector, replacedSelector, route}
*    selector is the "replaceSelector" used to grab the current element (to be replaced)
*    incomingSelector is the selector that will be used to grab the new element
*    route is the current page's route
*/
navigation.onBeforeRequest(function(el, data, config){ 
   //...do something...like...show a custom loader? validate data?
   return true; //if you return false from ANY of your onBeforeRequest callbacks, the request will be prevented!
});

/**
* Add as many onload callbacks as you'd like to run every time a page is loaded
* 
* el is the new element on the page
* data the data object you set when you call .load() or using setData/setDataItem (see above method details)
* config is an object {selector, replacedSelector, route}
*    selector is the "incomingSelector" used to grab the new element
*    replacedSelector is the selector used to find the element that was replaced
*    route is the new page's route (if set in JSON or HTML response)
*/
navigation.onload(function(el, data, config){
    
    //some things you might want to run every time a page loads:
   
   //if gtag is set (google analytics), push a page view
   if( typeof gtag !== 'undefined' ) {
       gtag('config', 'GA_MEASUREMENT_ID', {
           page_path: request.getURIWithQueryString()
       });
   }
   
   //if trackHistory is true, you can grab the last history record (or all - see getters/setters above)
   var last_history = navigation.getLastHistoryRecord();
   if( last_history ){
       const last_url = last_history.url;
       const last_route = last_history.route;
   }
   
   //scroll to the top of the page
   window.scrollTo(0, 0);
   
   //.. do more...like init tooltip plugins
});

/**
* Add as many unload callbacks as you'd like to run every time a page is loaded (just before the new HTML is replaced with the old)
* 
* Params are the same as onload except config doesn't have replacedSelector
* 
* Keep in mind this is the element that will be removed shortly (and config.selector is the selector used to retrieve that element) 
* 
*/
navigation.onUnload(function(el, data, config){
   //.. do something...like remove event handlers or destroy plugins 
});

/**
* Adds as many failure callbacks you'd like to run every time a page fails to load
* 
* error is the string message
* url is the requested URL that failed
* data is the data you provided to be passed onto that page
* axios_error is an error object set by axios that will be available if that's where the error occurred
*/
navigation.onFail(function(error, url, data, axios_error){
    //.. do something...like show an error popup for the user or log the issue
});

/**
* Now load pages!
* 
* It might look strange to you that you're passing values that are already in-scope for your callback. 
*    This is done for 2 reasons. 
*       1) It protects the data you passed from modification (your object is cloned inside .load())
*       2) It passes that object to all the global onload() callbacks as well
*/
let data = {pass_this:'hi!'};
navigation.load('/my-url', data, function(el, data, config){ 
    const passed = data.pass_this; //passed = 'hi!'
});

/**
* One of the easiest ways to use this plugin is to tie an event handler to onClick of any link containing a class or attribute
* In this example, all you have to do is add data-href in your link (like this: <a href="my-url" data-href>Link</a>)
*/
import {events} from '@htmlguyllc/jpack/es/events';

events.onClick('[data-href]', function(){
   navigation.load(this.href);
});

/**
* Want to pass a value to all onload callbacks? It's easy!
*/
navigation.setData({
    scrollToTop: true
});
//or
navigation.setDataItem('scrollToTop', true);

/**
* Now load a page and use it!
*/
navigation.load('/my-url', {}, function(el, data){
    if( data.scrollToTop ){
        window.scrollTo(0,0);
    }
});

/**
* You can override global data per-request when you provide it to the .load() method
*/
navigation.load('/my-url', {
    scrollToTop: false
}, function(el, data){
    if( data.scrollToTop ){
        //won't be called
        window.scrollTo(0,0);
    }
});

```

---
<h2 id="xhrform">XHRForm</h2> 
[back to top](#whatsincluded) <br><br>
<i>Adds an on-submit listener and sends the form values using XHR with callbacks for success/failure. Automatically prevents the user from submitting the form several times at once. It must finish processing before it can be submitted again.</i><br><br>

Primary Methods | Params (name:type) | Return | Notes
--- | --- | --- | ---
constructor|form:Element,options:object |self|
attachSubmitHandler|form:mixed|self|attaches the event listener to on submit of the passed form
validate|form:Element|bool|passes the form to the validate callback and returns the response
submitForm|form:Element|self|gets URL and method, checks form validity using .validate(), gets values, submits, and kicks off callbacks

Event Methods | Params (name:type) | Return | Callback Params (name:type) | Notes
--- | --- | --- | --- | ---
onSuccess|callback:function|self|response:mixed, form:Element|adds an onSuccess callback (you can add as many as you'd like)
clearOnSuccessCallbacks| |self||
onError|callback:function|self|error:string, response:mixed, form:Element|adds an onError callback (you can add as many as you'd like)
clearOnErrorCallbacks| |self||
setPreSubmitCallback|callback:function|self|form:Element, form_values:string, url:string, method:string|pass a function you want to run right before the server request is sent - return false to prevent submission, return an object with form_values, url, or method if you want to override them
setValidateCallback|callback:function|is_valid:bool|form:Element|pass a function to validate the form and return true if it's valid, false if it's not. False prevents form submission so you must display errors for the user within here. The default callback uses Bootstrap 4's "was-validated" class to show errors and HTML5's :invalid attribute to validate

Setters/Getters | Params (name:type) | Return | Notes
--- | --- | --- | ---
setXHRSubmit|enabled:bool|self|enable/disable the XHR submission of the form
setSubmitURL|url:mixed|self|pass null to use the form's action, function to dynamically generate the URL (receives the form as a param), or string
getSubmitURL| |url:string|returns whatever was set in the constructor or using setSubmitURL, not the final URL
getFinalSubmitURL|form:Element|url:string|returns the URL the form will be submitted to after running the function (if it is one) and using all fallbacks
setSubmitMethod|method:string|self|override the form and provide a method (GET, POST, PATCH)
getSubmitMethod| |method:string|
getFormValues|form:Element|self|returns data from the form to be submitted - override this if you want to manipulate it first


##### To use:
```javascript
import {XHRForm} from '@htmlguyllc/jpack/es/forms'; 

//shown with defaults
var remote_form = new XHRForm('form[name="my_form"]', {
        xhrSubmit: true, //wouldn't make a whole lotta sent to use this if this were false lol, but it's here for extending classes and incase you want to toggle it for whatever reason
        submitURL:null, //when null, the form's action will be used (if explicitly defined), otherwise it falls back to the URL the form was retrieved from
        submitMethod:null, //when null, the form's method will be used (if explicitly defined), otherwise it falls back to POST
        onPreSubmit: function(form, form_values, url, method){ //called right before the request to the server
            //return false; //you can return false to stop submission
            return {form_values:form_values, url:url, method:method}; //you can return these if you want to override them (optional)
        },
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
        onPreSubmit: function(form, form_values, url, method){ //called right before the request to the server
            //return false; //you can return false to stop submission
            return {form_values:form_values, url:url, method:method}; //you can return these if you want to override them (optional)
        },
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
[demo](https://jsfiddle.net/HTMLGuyLLC/73b2kotL/) | [back to top](#whatsincluded) <br><br>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/L6brcvo3/) | [back to top](#whatsincluded) <br><br>
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
```php
<?php
    $user = []; //get user from database/API
?>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/Lzp5w3rg) | [back to top](#whatsincluded) <br><br>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/ebof3hm4/) | [back to top](#whatsincluded) <br><br>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/et42sLbm/) | [back to top](#whatsincluded) <br><br>
<i>Has methods for converting just about anything into a native DOM Element or array of them (you can provide a string selector, jQuery object, native DOM object, etc). Also has some shortcuts for common DOM checks/manipulation (like removing an element, verifying an element exists in the DOM, or replacing an element with HTML)</i><br><br>

Method/Property | Params (name:type) | Return | Notes
--- | --- | --- | ---
getElement|el:mixed, error_on_none:bool, error_on_multiple:bool|Element/HTMLDocument/null|returns a native DOM element for whatever you provide (selector string, array of elements, single element, jQuery wrapped DOM element, etc)
getElements|el:mixed, error_on_none:bool|array|same as getElement, except it returns all matches
remove|el:mixed, error_if_not_found:bool|this|removes elements from the DOM - uses .getElements()
replaceElWithHTML|el:mixed, html:string, error_if_not_found:bool|Element|replaces an element in the DOM with HTML and returns a reference to the new Element
exists|el:mixed|bool|checks to see if it exists in the DOM
multipleExist|el:mixed|bool|checks to see if more than 1 instance exists in the DOM
isVisible|el:mixed, error_if_not_found:bool, error_on_multiple:bool|bool|checks to see if the provided element is visible


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
[demo](https://jsfiddle.net/HTMLGuyLLC/5p9q1ofj/) | [back to top](#whatsincluded) <br><br>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/wv2hkzp5/) | [back to top](#whatsincluded) <br><br>
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
[demo](https://jsfiddle.net/HTMLGuyLLC/68og394L/)  | [back to top](#whatsincluded) <br><br>
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