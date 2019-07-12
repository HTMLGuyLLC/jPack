# jPack
jPack is a library of components, objects, plugin wrappers, and utilities designed to make building custom websites simpler. 

With jPack, you can easily upgrade your server-side rendered application to a pseudo-SPA using XHR requests for page-loads. 

## Installation

With Yarn or NPM:
```shell
yarn add htmlguyllc-jpack;
//or
npm i htmlguyllc-jpack;
```

and then use what you need, where you need it (requires ES6):
```ecmascript 6
//a single component
import {navigation} from 'htmlguyllc-jpack/components/navigation';
navigation.load('/my-page');

//or a namespaced object containing all components
import 'htmlguyllc-jpack/components';
components.navigation.load('/my-page');

//or a namespaced object containing all types
import 'htmlguyllc-jpack';
jpack.components.navigation.load('/my-page');

//or extract multiple
import {user, site} from 'htmlguyllc-jpack/objects';
user.getId();
site.getId();
```

Or you can download the latest release, unzip it, put it in your public folder then include the whole library:
```html
<script href="/vendor/htmlguyllc-jpack/dist/jpack.min.js">
<script>
    jpack.components.navigation.load('/my-page');
</script>
```

## What's Included:

#### Components (namespace: components): 
None yet.

#### Objects (namespace: objects): 
request, site, user

#### Plugin Wrappers (namespace: plugin_wrappers): 
None yet.

#### Utilities (namespace: utilities): 
strings, data_types, dom, events

## - Components -
None yet.

## - Objects -

### -Request
_Provides a wrapper for window.location and query string access_

- .query: URLSearchParams //object to interact with the querystring
- .isHttps(): bool
- .getDomain(): string
- .getDomainWithProtocol(): string
- .getURI(): string //also known as the path - does not include querystring 
- .getURIWithQueryString(): string //full URL after the domain
- .getFullURL(): string
- .appendSlash(string): string //adds a slash (if there isn't already one) to the end of a string. 

##### To use:
```ecmascript 6
import {request} from 'htmlguyllc-jpack/objects'; 

//get product_id from the querystring
var product_id = request.query.get('product_id');

var current_full_url = request.getFullURL();

var full_blog_url = request.appendSlash(request.getDomainWithProtocol())+'blog'; //https://my-domain.com/blog
```

### -Site
_Designed for multi-tenant applications, this object stores a site's id, name, and config object._

- .getId(): string|int
- .setId(string|int): this
- .getName(): string|null
- .setName(string): this
- .getConfig(): object|array
- .setConfig(object|array): this //overwrites all config
- .getConfigItem(): mixed //returns an individual item from config
- .setConfigItem(string, mixed): this //sets the value of an individual item in config
- .populate(object): this //sets provided values all at once (id, name, config)

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
```ecmascript 6
import {site} from 'htmlguyllc-jpack/objects';
 
$.get('/my-site-info-endpoint.php', function(data){
    //don't forget error handling!
    site.populate(JSON.parse(data));
});
```

### -User
_Designed for sites with user accounts/guest accounts. This object stores a user's details and allows for front-end permission checks._

- .getId(): string|int
- .setId(string|int): this
- .getIsGuest(): bool //if your site has users who don't login but still interact and have a user record (like guest checkout)
- .setIsGuest(bool): this
- .getIsAdmin(): bool //if your site has users who have ultimate permissions and you want to do something based on that
- .setIsAdmin(bool): this
- .getUsername(): string|null
- .setUsername(string): this
- .getFname(): string|null
- .setFname(string): this
- .getLname(): string|null
- .setLname(string): this
- .getName(): string //returns fname and lname concatenated with a space
- .getEmail(): string|null
- .setEmail(string): this
- .getPhone(): string|null
- .setPhone(string): this
- .getPermissions(): array
- .setPermissions(array): this
- .addPermission(string|int): this
- .removePermission(string|int): this
- .hasPermission(string|int): bool
- .getAdditionalData(): object|array //set any additional data about this user that doesn't fit the default getters and setters here (a better idea would be to extend this object with your custom properties/methods)
- .setAdditionalData(object|array): this
- .populate(object) //sets provided values all at once (id, isGuest, isAdmin, etc)

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
```ecmascript 6
import {user} from 'htmlguyllc-jpack/objects';
 
$.get('/my-user-info-endpoint.php', function(data){
    //don't forget error handling!
    user.populate(JSON.parse(data));
});
```

##### To use:

```ecmascript 6
import {site} from 'htmlguyllc-jpack/objects';

var site_id = site.getId();
```

## - Plugin Wrappers -
None yet.

## - Utilities -

### -Strings
_Common string manipulations_

- .ucfirst(string): string //capitalizes the first letter of a string like ucfirst in PHP
- .getter(string): string //reates a getter method name from a string
- .setter(string): string //creates a setter method name from a string

##### To Use:

```ecmascript 6
import {strings} from 'htmlguyllc-jpack/utilities';

strings.ucfirst('bob'); //returns 'Bob'
strings.getter('name'); //returns 'getName';
strings.setter('name'); //returns 'setName';
```

### -DOM
_HTML DOM helpers_

- .getDomElement(mixed, bool, bool): Element|HTMLDocument|null //returns a native DOM element for whatever you provide (selector string, array of elements, single element, jQuery wrapped DOM element, etc)
- .getDomElements(mixed, bool): array //same as getDomElement, except it returns all matches 
- .exists(mixed): boolean //checks to see if it exists in the DOM
- .multipleExist(mixed): boolean //checks to see if more than 1 instance exists in the DOM

##### To Use:

```ecmascript 6
import {dom} from 'htmlguyllc-jpack/utilities';

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
_Check the data type of a value with more specificity than typeof or built-in functions_

- .isDataObject(object, array, bool, bool, bool): boolean //validates that an object contains data and not a dom element, array, null or anything else that would normally return true when you call typeof

##### To Use:

```ecmascript 6
import {type_checks} from 'htmlguyllc-jpack/utilities/type_checks';

var my_obj = {id:null, name:'John Doe', email:'john@doe.com'};

//make sure my_obj contains the keys: 'id', 'name', 'email'
//force all keys to exist
//block any keys that aren't in that list
//throw an error if the object fails any checks
type_checks.isDataObject(my_obj, ['id', 'name', 'email'], true, true, true);
```

### -Events
_Shorthand event handlers_

- .onClick(mixed, function): array //prevents the browser's default so you can handle link clicks and form submissions with less code
- .offClick(mixed, function): array //removes the handler you added using onClick
- .onSubmit(mixed, function): array //same as .onClick() but for submit
- .offSubmit(mixed, function): array //same as .offClick() but for submit
- .onChange(mixed, function): array //adds an on change handler but does NOT preventDefault - mostly exists for consistency
- .offChange(mixed, function): array //removes the handler you added using .onChange()
- .onEventPreventDefault(mixed, string, function): array //attaches an event handler and prevents the default browser action
- .offEventPreventDefault(mixed, string, function): array //removes the handler you attached with .onEventPreventDefault()

##### To Use:

```ecmascript 6
import {events} from 'htmlguyllc-jpack/utilities';

events.onClick('a.my-link', function(){
   //do something without the page redirecting to the href 
});

events.onSubmit('form.my-form', function(){
   //do something and submit the form using XHR 
});
```