#jPack
jPack is a library of components, objects, plugin wrappers, and utilities designed to make building custom websites simpler. 

With jPack, you can easily upgrade your server-side rendered application to a pseudo-SPA using XHR requests for page-loads. 

##Installation

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
####Components (namespace: components): 
navigation
####Objects (namespace: objects): 
site, user, request
####Plugin Wrappers (namespace: plugin_wrappers): 

####Utilities (namespace: utilities): 
strings, data_types

##Components

##Objects

### -Site
_Designed for multi-tenant applications, this object stores a site's id, name, and config object._

#####To populate with data:

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

#####To use:

ES6
```ecmascript 6
import {site} from 'htmlguyllc-jpack/objects'; //or import 'jpack/objects/site';

var site_id = site.getId();
```

Regular file include
```js
var site_id = site.getId();
```

##Plugin Wrappers
>

##Utilities

### -Strings
_Common string manipulations_

- ucfirst - Capitalizes the first letter of a string like ucfirst in PHP
- getter - Creates a getter method name from a string
- setter - Creates a setter method name from a string

#####To Use:

```ecmascript 6
import {strings} from 'htmlguyllc-jpack/utilities/strings';

strings.ucfirst('bob'); //returns 'Bob'
strings.getter('name'); //returns 'getName';
strings.setter('name'); //returns 'setName';
```

### -Type Checks
_Check the data type of a value with more specificity than typeof or built-in functions_

- isDataObject - Validates that an object contains data and not a dom element, array, null or anything else that would normally return true when you call typeof

#####To Use:

```ecmascript 6
import {type_checks} from 'htmlguyllc-jpack/utilities/type_checks';

var my_obj = {id:null, name:'John Doe', email:'john@doe.com'};

//make sure my_obj contains the keys: 'id', 'name', 'email'
//force all to exist
//block any keys that aren't in that list
//throw an error if the object fails any checks
type_checks.isDataObject(my_obj, ['id', 'name', 'email'], true, true, true);
```