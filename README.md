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
jpack.components.navigation.load('/my-page');
```

Or you can download the latest release, unzip it, put it in your public folder then include the whole library:
```html
<script href="/vendor/htmlguyllc-jpack/dist/jpack.min.js">
<script>
window.addEventListener('load', function() {
    jpack.components.navigation.load('/my-page');
};
</script>
```

# What's Included:

Four categories of functionality are provided in this library. 
Each has it's own namespace in parenthesis below.

#### Components (components): 
None yet.

#### Objects (objects): 
request, site, user

#### Plugin Wrappers (plugin_wrappers): 
None yet.

#### Utilities (utilities): 
strings, data_types, dom, events

# Documentation

## - Components -
None yet.

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
getConfig| |object/array|this
setConfig|object/array|this|overwrites all config
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
getAdditionalData| |object/array|set any additional data about this user that doesn't fit the default getters and setters here (a better idea would be to extend this object with your custom properties/methods)
setAdditionalData|object/array|this|
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
getDomElement|mixed, bool, bool|Element/HTMLDocument/null|returns a native DOM element for whatever you provide (selector string, array of elements, single element, jQuery wrapped DOM element, etc)
getDomElements|mixed, bool|array|same as getDomElement, except it returns all matches
exists|mixed|bool|checks to see if it exists in the DOM
multipleExist|mixed|bool|checks to see if more than 1 instance exists in the DOM

##### To Use:

```javascript
import {dom} from '@htmlguyllc/jpack/src/utilities';

//Dont do this. Most of these are dumb examples.
dom.getDomElement('.my-fav-button', true, true); //will throw an error if it doesn't fine it, or if it finds more than 1
dom.getDomElements('.links', true); //will throw an error if none are found
dom.getDomElement('.my-button'); //returns the button, or null (if multiple, it returns the first)
dom.getDomElements('.links'); //returns an array of any matches for .links
dom.getDomElement($('a')); //returns the native DOM element for the link and removes the jQuery wrapper
dom.getDomElement(document.querySelectorAll('a')); //returns the first anchor

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

##### To Use:

```javascript
import {events} from '@htmlguyllc/jpack/src/utilities';

events.onClick('a.my-link', function(){
   //do something without the page redirecting to the href 
});

events.onSubmit('form.my-form', function(){
   //do something and submit the form using XHR 
});
```