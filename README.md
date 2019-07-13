# jPack
jPack is a library of components, objects, plugin wrappers, and utilities designed to make building custom websites simpler. 

With jPack, you can easily upgrade your server-side rendered application to a pseudo-SPA using XHR requests for page-loads, get values from the querystring, store and interact with user/multi-tenant website data, and more. 

# Installation

With Yarn or NPM:
```shell
yarn add @htmlguyllc/jpack;
//or
npm i @htmlguyllc/jpack;
```

and then use what you need, where you need it (requires ES6):
```javascript
//a single component from it's own file
import {strings} from '@htmlguyllc/jpack/src/utilities/strings';
strings.ucfirst('bob');

//or a single component from the collection file
import {strings} from '@htmlguyllc/jpack/src/utilities';
strings.ucfirst('bob');

//or multiple components from the collection file
import {strings, dom} from '@htmlguyllc/jpack/src/utilities';
strings.ucfirst('bob');
dom.exists('a.my-link');

//or a namespaced object containing all components
import * as utilities from '@htmlguyllc/jpack/src/utilities';
utilities.strings.ucfirst('bob');

//or a namespaced object containing all
import {jpack} from '@htmlguyllc/jpack';
jpack.objects.user.getId();
```

Or you can download the latest release, unzip it, put it in your public folder then include the whole library:
```html
<script href="/vendor/htmlguyllc-jpack/dist/jpack.min.js">
<script>
//wait for the page to finish loading so we know jpack is ready
window.addEventListener('load', function() {
    //now you can take advantage of the jpack library
    var user_id = jpack.objects.user.getId();
    
    //or if you're feeling super lazy (not recommended)
    jpack.goGlobal();
    
    var user_id = user.getId();
};
</script>
```

# Dependencies

Name | Required by
--- | --- 
url-search-params-polyfill | request
axios | navigation

# What's Included

Four categories of functionality are provided in this library. 
Each has it's own namespace in parenthesis below.

#### Components (components): 
navigation

#### Objects (objects): 
request, site, user

#### Plugin Wrappers (plugin_wrappers): 
None yet.

#### Utilities (utilities): 
strings, data_types, dom, events

# Documentation

## - Components -

### -Navigation
_Grabs content from a URL and replaces it on the current page (along with browser history button handling, onload/unload handlers, and much more_

Method/Property | Params | Return | Notes
--- | --- | --- | ---
setPassthroughData|mixed|self|set data you want provided in the onload method for the next page
clearPassthroughData| |self|must be called manually or the data will persist infinitely. you can set an onload callback to clear this every time
getPassthroughData| |mixed|returns the data you set
setIncomingElement|string|self|a selector string for the element being retrieved from another page which contains the HTML you want put on the current page
getIncomingElement| |string|
setReplaceElement|string|self|a selector string for the element on the current page you want the new HTML to replace
getReplaceElement| |string|
load|string,function/null,string/null,string/null,bool|void|pulls content from the provided URL and puts it on the current page - also swaps out the page title, metas, and much more
loaderEnabled|n/a|bool|property to toggle the slow request loader on/off
setLoaderDelay|int|self|set how long a request should take in ms before the loader displays
getLoaderDelay| |self|
getLoaderEl| |Element|
showLoader| |self|shows the loader after the delay
hideLoader| |self|clears the loader timeout and hides it
parseHTML|string,string|object|parses HTML from the request to get key components like metas and the HTML to be displayed
getRouteFromMeta|string|string|retrieves the value of a meta tag named "current_route" to be passed in the onload event to help trigger page-specific JS
replacePageContent|string,string,string,string,bool|self|replaces HTML on the page with the new content, updates metas, runs the unload and load callbacks and more
reload|function|self|reloads the current page using .load()
fullReload| |void|performs a full browser refresh of the current page
redirect|string|void|redirects the user to a new page (no XHR request)
setTitle|string|self|sets the page title
onLoad|function|self|add an onload callback (runs 100ms after unload)
onUnload|function|self|add an unload callback
onNavigationFailure|function|self|add a callback when the load() request fails - the error message is provided in event.detail.error
triggerOnLoad|mixed,string,string|self|triggers all onload callbacks
triggerUnload|mixed|self|triggers all unload callbacks
triggerNavigationFailure|string|self|triggers the nav failure and provides an error message
initHistoryHandlers| |self|sets event listeners to handle back/forward navigation in the user's browser

##### To use:
```javascript
import {navigation} from '@htmlguyllc/jpack/src/components'; 

//handles browser back/forward buttons
navigation.initHistoryHandlers();

//a selector that contains the HTML you'd like to pull from the response
navigation.setIncomingElement('#main-content');

//a selector that will be replaced with the incoming HTML
navigation.setReplaceElement('#main-content');

//enables a loader to show if a request takes more than 300ms
//WARNING: No styling is provided at this time. It uses Bootstrap 4's progress-bar classes.
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
    //the incomingElement selector from this request 
    // since the new element MAY have a different selector than the last,
    // you may want to run navigation.setReplaceElement(el_selector)
    var el_selector = params.el_selector;
   
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
import {events} from '@htmlguyllc/jpack/src/utilities';
events.onClick('[data-href]', function(){
   navigation.load(this.href); 
});

//you can use the load method at any time to load a new page 
// the second param is an optional callback that only runs for that page
navigation.load('/my-page', function(new_el, new_el_selector, pass_through_params){
    //my page is now loaded
    //new_el is the new element on the page
    //new_el_selector is the incomingSelector used for this request
    //pass_through_data is any data that was set on navigation prior to this request
    // using setPassthroughData(object)
});

//if you have a page that isn't structure the same as the rest that you're requesting, 
// you can set the incoming parent element on-the-fly
navigation.load('/my-popup', null, '.popup-content');

//now .popup-content is on the page instead of the previous element, 
// so you probably want to set future requests to replace that one instead
//see note in the onLoad block above regarding how you can do this automatically for every request
navigation.setIncomingElement('.popup-content');
```

## - Objects -

### -Request
_Provides a wrapper for window.location and query string access_

Method/Property | Params | Return | Notes
--- | --- | --- | ---
query|n/a|URLSearchParams|see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams#Methods
isHttps| |bool|
getDomain| |string|
getDomainWithProtocol| |string|
getURI| |string|also known as the path - does not include querystring 
getURIWithQueryString| |string|full URL after the domain
getFullURL| |string|
appendSlash|string|string|adds a slash (if there isn't already one) to the end of a string. 

##### To use:
```javascript
import {request} from '@htmlguyllc/jpack/src/objects'; 

//get product_id from the querystring
var product_id = request.query.get('product_id');

var current_full_url = request.getFullURL();

var full_blog_url = request.appendSlash(request.getDomainWithProtocol())+'blog'; //https://my-domain.com/blog
```

### -Site
_Designed for multi-tenant applications, this object stores a site's id, name, and config object._

Method/Property | Params | Return | Notes
--- | --- | --- | ---
getId| |string/int|
setId|string/int|this|
getName| |string|this
setName|string|this|
getConfig| |object|this
setConfig|object|this|overwrites all config
getConfigItem| |mixed|returns an individual item from config
setConfigItem|string,mixed|this|sets the value of an individual item in config
populate|object|this|sets provided values all at once (id,name,config)

##### To populate with data:

The easy way: Create an object named $site with values from your server (prior to including jpack) 
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

The harder way: Perform an XHR request to grab site details via a JSON API, then run the populate method on the site object.
```javascript
import {site} from '@htmlguyllc/jpack/src/objects';
 
//this example uses jQuery's shorthand AJAX call, you can use axios or any request you want
$.get('/my-site-info-endpoint.php', function(data){
    //don't forget error handling!
    site.populate(JSON.parse(data));
});
```

##### To Use:

```javascript
import {site} from '@htmlguyllc/jpack/src/objects';

var site_id = site.getId();
```

### -User
_Designed for sites with user accounts/guest accounts. This object stores a user's details and allows for front-end permission checks._

Method/Property | Params | Return | Notes
--- | --- | --- | ---
getId| |string/int|
setId|string/int|this|
getIsGuest| |bool|if your site has users who don't login but still interact and have a user record (like guest checkout)
setIsGuest|bool|this|
setIsAdmin| |bool|if your site has users who have ultimate permissions and you want to do something based on that
setIsGuest|bool|this|
getUsername| |string|
setUsername|string|this|
getFname| |string|
setFname|string|this|
getLname| |string|
setLname|string|this|
getName| |string|returns fname and lname concatenated with a space
getEmail| |string|
setEmail|string|this|
getPhone| |string|
setPhone|string|this|
getPermissions| |array|
setPermissions|array|this|
addPermission|string/int|this|
removePermission|string/int|this|
hasPermission|string/int|bool|
getAdditionalData| |object|set any additional data about this user that doesn't fit the default getters and setters here (a better idea would be to extend this object with your custom properties/methods)
setAdditionalData|object|this|
getDataItem|string|mixed|returns a single value from the additional data object/array
setDataItem|string, mixed|sets a single value in the additional data array/object
populate|object|this|sets provided values all at once (id, isGuest, isAdmin, etc)

##### To populate with data:

The easy way: Create an object named $user with values from your server (prior to including jpack) 
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

The harder way: Perform an XHR request to grab site details via a JSON API, then run the populate method on the site object.
```javascript
import {user} from '@htmlguyllc/jpack/src/objects';
 
$.get('/my-user-info-endpoint.php', function(data){
    //don't forget error handling!
    user.populate(JSON.parse(data));
});
```

##### To use:

```javascript
import {site} from '@htmlguyllc/jpack/src/objects';

var site_id = site.getId();
```

## - Plugin Wrappers -
None yet.

## - Utilities -

### -Strings
_Common string manipulations_

Method/Property | Params | Return | Notes
--- | --- | --- | ---
ucfirst|string|string|capitalizes the first letter of a string like ucfirst in PHP
getter|string|string|creates a getter method name from a string
setter|string|string|creates a setter method name from a string

##### To Use:

```javascript
import {strings} from '@htmlguyllc/jpack/src/utilities';

strings.ucfirst('bob'); //returns 'Bob'
strings.getter('name'); //returns 'getName';
strings.setter('name'); //returns 'setName';
```

### -DOM
_HTML DOM helpers_

Method/Property | Params | Return | Notes
--- | --- | --- | ---
getElement|mixed, bool, bool|Element/HTMLDocument/null|returns a native DOM element for whatever you provide (selector string, array of elements, single element, jQuery wrapped DOM element, etc)
getElements|mixed, bool|array|same as getElement, except it returns all matches
remove|mixed|this|removes elements from the DOM - uses .getElements()
exists|mixed|bool|checks to see if it exists in the DOM
multipleExist|mixed|bool|checks to see if more than 1 instance exists in the DOM

##### To Use:

```javascript
import {dom} from '@htmlguyllc/jpack/src/utilities';

//Dont do this. Most of these are dumb examples.
dom.getElement('.my-fav-button', true, true); //will throw an error if it doesn't fine it, or if it finds more than 1
dom.getElements('.links', true); //will throw an error if none are found
dom.getElement('.my-button'); //returns the button, or null (if multiple, it returns the first)
dom.getElements('.links'); //returns an array of any matches for .links
dom.getElement($('a')); //returns the native DOM element for the link and removes the jQuery wrapper
dom.getElement(document.querySelectorAll('a')); //returns the first anchor

dom.exists('a'); //returns true if there is an anchor on the page
dom.multipleExist('a'); //returns true if more than 1 anchor on the page
```

### -Type Checks
_Check the data type of a value with more specificity than typeof or vanilla JS functions_


Method/Property | Params | Return | Notes
--- | --- | --- | ---
isDataObject|object, array, bool, bool, bool|bool|validates that an object contains data and not a dom element, array, null or anything else that would normally return true when you call typeof

##### To Use:

```javascript
import {type_checks} from '@htmlguyllc/jpack/src/utilities';

var my_obj = {id:null, name:'John Doe', email:'john@doe.com'};

//make sure my_obj contains the keys: 'id', 'name', 'email'
//force all keys to exist
//block any keys that aren't in that list
//throw an error if the object fails any checks
type_checks.isDataObject(my_obj, ['id', 'name', 'email'], true, true, true);
```

### -Events
_Shorthand event handlers_


Method/Property | Params | Return | Notes
--- | --- | --- | ---
onClick|mixed, function|array|prevents the browser's default so you can handle link clicks and form submissions with less code
offClick|mixed, function|array|removes the handler you added using onClick
onSubmit|mixed, function|array|same as .onClick() but for submit
offSubmit|mixed, function|array|same as .offClick() but for submit
onChange|mixed, function|array|adds an on change handler but does NOT preventDefault - mostly exists for consistency
offChange|mixed, function|array|removes the handler you added using .onChange()
onEventPreventDefault|mixed, string, function|array|attaches an event handler and prevents the default browser action
offEventPreventDefault|mixed, string, function|array|removes the handler you attached with .onEventPreventDefault()
on|mixed, string, function|array|attaches an event listener
off|mixed, string, function|array|removes an event listener
trigger|mixed, string, mixed|array|triggers an event on an element/elements - uses .getElements()

##### To Use:

```javascript
import {events} from '@htmlguyllc/jpack/src/utilities';

events.onClick('a.my-link', function(){
   //do something without the page redirecting to the href 
});

events.onSubmit('form.my-form', function(){
   //do something and submit the form using XHR 
});

//trigger submit on a form and pass an object as additional data in the event
events.trigger('.my-form', 'submit', {id:1});
```