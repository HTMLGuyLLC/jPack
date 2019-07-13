/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jpack.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/url-search-params-polyfill/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/url-search-params-polyfill/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 *
 *
 * @author Jerry Bendy <jerry@icewingcc.com>
 * @licence MIT
 *
 */

(function(self) {
    'use strict';

    var nativeURLSearchParams = (self.URLSearchParams && self.URLSearchParams.prototype.get) ? self.URLSearchParams : null,
        isSupportObjectConstructor = nativeURLSearchParams && (new nativeURLSearchParams({a: 1})).toString() === 'a=1',
        // There is a bug in safari 10.1 (and earlier) that incorrectly decodes `%2B` as an empty space and not a plus.
        decodesPlusesCorrectly = nativeURLSearchParams && (new nativeURLSearchParams('s=%2B').get('s') === '+'),
        __URLSearchParams__ = "__URLSearchParams__",
        // Fix bug in Edge which cannot encode ' &' correctly
        encodesAmpersandsCorrectly = nativeURLSearchParams ? (function() {
            var ampersandTest = new nativeURLSearchParams();
            ampersandTest.append('s', ' &');
            return ampersandTest.toString() === 's=+%26';
        })() : true,
        prototype = URLSearchParamsPolyfill.prototype,
        iterable = !!(self.Symbol && self.Symbol.iterator);

    if (nativeURLSearchParams && isSupportObjectConstructor && decodesPlusesCorrectly && encodesAmpersandsCorrectly) {
        return;
    }


    /**
     * Make a URLSearchParams instance
     *
     * @param {object|string|URLSearchParams} search
     * @constructor
     */
    function URLSearchParamsPolyfill(search) {
        search = search || "";

        // support construct object with another URLSearchParams instance
        if (search instanceof URLSearchParams || search instanceof URLSearchParamsPolyfill) {
            search = search.toString();
        }
        this [__URLSearchParams__] = parseToDict(search);
    }


    /**
     * Appends a specified key/value pair as a new search parameter.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.append = function(name, value) {
        appendTo(this [__URLSearchParams__], name, value);
    };

    /**
     * Deletes the given search parameter, and its associated value,
     * from the list of all search parameters.
     *
     * @param {string} name
     */
    prototype['delete'] = function(name) {
        delete this [__URLSearchParams__] [name];
    };

    /**
     * Returns the first value associated to the given search parameter.
     *
     * @param {string} name
     * @returns {string|null}
     */
    prototype.get = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict[name][0] : null;
    };

    /**
     * Returns all the values association with a given search parameter.
     *
     * @param {string} name
     * @returns {Array}
     */
    prototype.getAll = function(name) {
        var dict = this [__URLSearchParams__];
        return name in dict ? dict [name].slice(0) : [];
    };

    /**
     * Returns a Boolean indicating if such a search parameter exists.
     *
     * @param {string} name
     * @returns {boolean}
     */
    prototype.has = function(name) {
        return name in this [__URLSearchParams__];
    };

    /**
     * Sets the value associated to a given search parameter to
     * the given value. If there were several values, delete the
     * others.
     *
     * @param {string} name
     * @param {string} value
     */
    prototype.set = function set(name, value) {
        this [__URLSearchParams__][name] = ['' + value];
    };

    /**
     * Returns a string containg a query string suitable for use in a URL.
     *
     * @returns {string}
     */
    prototype.toString = function() {
        var dict = this[__URLSearchParams__], query = [], i, key, name, value;
        for (key in dict) {
            name = encode(key);
            for (i = 0, value = dict[key]; i < value.length; i++) {
                query.push(name + '=' + encode(value[i]));
            }
        }
        return query.join('&');
    };

    // There is a bug in Safari 10.1 and `Proxy`ing it is not enough.
    var forSureUsePolyfill = !decodesPlusesCorrectly;
    var useProxy = (!forSureUsePolyfill && nativeURLSearchParams && !isSupportObjectConstructor && self.Proxy)
    /*
     * Apply polifill to global object and append other prototype into it
     */
    Object.defineProperty(self, 'URLSearchParams', {
        value: (useProxy ?
            // Safari 10.0 doesn't support Proxy, so it won't extend URLSearchParams on safari 10.0
            new Proxy(nativeURLSearchParams, {
                construct: function(target, args) {
                    return new target((new URLSearchParamsPolyfill(args[0]).toString()));
                }
            }) :
            URLSearchParamsPolyfill)
    });

    var USPProto = self.URLSearchParams.prototype;

    USPProto.polyfill = true;

    /**
     *
     * @param {function} callback
     * @param {object} thisArg
     */
    USPProto.forEach = USPProto.forEach || function(callback, thisArg) {
        var dict = parseToDict(this.toString());
        Object.getOwnPropertyNames(dict).forEach(function(name) {
            dict[name].forEach(function(value) {
                callback.call(thisArg, value, name, this);
            }, this);
        }, this);
    };

    /**
     * Sort all name-value pairs
     */
    USPProto.sort = USPProto.sort || function() {
        var dict = parseToDict(this.toString()), keys = [], k, i, j;
        for (k in dict) {
            keys.push(k);
        }
        keys.sort();

        for (i = 0; i < keys.length; i++) {
            this['delete'](keys[i]);
        }
        for (i = 0; i < keys.length; i++) {
            var key = keys[i], values = dict[key];
            for (j = 0; j < values.length; j++) {
                this.append(key, values[j]);
            }
        }
    };

    /**
     * Returns an iterator allowing to go through all keys of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.keys = USPProto.keys || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push(name);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all values of
     * the key/value pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.values = USPProto.values || function() {
        var items = [];
        this.forEach(function(item) {
            items.push(item);
        });
        return makeIterator(items);
    };

    /**
     * Returns an iterator allowing to go through all key/value
     * pairs contained in this object.
     *
     * @returns {function}
     */
    USPProto.entries = USPProto.entries || function() {
        var items = [];
        this.forEach(function(item, name) {
            items.push([name, item]);
        });
        return makeIterator(items);
    };


    if (iterable) {
        USPProto[self.Symbol.iterator] = USPProto[self.Symbol.iterator] || USPProto.entries;
    }


    function encode(str) {
        var replace = {
            '!': '%21',
            "'": '%27',
            '(': '%28',
            ')': '%29',
            '~': '%7E',
            '%20': '+',
            '%00': '\x00'
        };
        return encodeURIComponent(str).replace(/[!'\(\)~]|%20|%00/g, function(match) {
            return replace[match];
        });
    }

    function decode(str) {
        return str
            .replace(/[ +]/g, '%20')
            .replace(/(%[a-f0-9]{2})+/ig, function(match) {
                return decodeURIComponent(match);
            });
    }

    function makeIterator(arr) {
        var iterator = {
            next: function() {
                var value = arr.shift();
                return {done: value === undefined, value: value};
            }
        };

        if (iterable) {
            iterator[self.Symbol.iterator] = function() {
                return iterator;
            };
        }

        return iterator;
    }

    function parseToDict(search) {
        var dict = {};

        if (typeof search === "object") {
            // if `search` is an array, treat it as a sequence
            if (isArray(search)) {
                for (var i = 0; i < search.length; i++) {
                    var item = search[i];
                    if (isArray(item) && item.length === 2) {
                        appendTo(dict, item[0], item[1]);
                    } else {
                        throw new TypeError("Failed to construct 'URLSearchParams': Sequence initializer must only contain pair elements");
                    }
                }

            } else {
                for (var key in search) {
                    if (search.hasOwnProperty(key)) {
                        appendTo(dict, key, search[key]);
                    }
                }
            }

        } else {
            // remove first '?'
            if (search.indexOf("?") === 0) {
                search = search.slice(1);
            }

            var pairs = search.split("&");
            for (var j = 0; j < pairs.length; j++) {
                var value = pairs [j],
                    index = value.indexOf('=');

                if (-1 < index) {
                    appendTo(dict, decode(value.slice(0, index)), decode(value.slice(index + 1)));

                } else {
                    if (value) {
                        appendTo(dict, decode(value), '');
                    }
                }
            }
        }

        return dict;
    }

    function appendTo(dict, name, value) {
        var val = typeof value === 'string' ? value : (
            value !== null && value !== undefined && typeof value.toString === 'function' ? value.toString() : JSON.stringify(value)
        )

        if (name in dict) {
            dict[name].push(val);
        } else {
            dict[name] = [val];
        }
    }

    function isArray(val) {
        return !!val && '[object Array]' === Object.prototype.toString.call(val);
    }

})(typeof global !== 'undefined' ? global : (typeof window !== 'undefined' ? window : this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/jpack.js":
/*!**********************!*\
  !*** ./src/jpack.js ***!
  \**********************/
/*! exports provided: jpack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jpack", function() { return jpack; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/components/index.js");
/* harmony import */ var _objects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objects */ "./src/objects/index.js");
/* harmony import */ var _plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./plugin_wrappers */ "./src/plugin_wrappers/index.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities */ "./src/utilities/index.js");





/**
 * Not recommended, but makes things simple. Every component in jpack is set on window and readily available globally
 *
 * This means instead of calling jpack.objects.user.getId(), you can just call user.getId()
 */
const goGlobal = function(){
    //loop through components, objects, plugin_wrappers, and utilities
    [_components__WEBPACK_IMPORTED_MODULE_0__,_objects__WEBPACK_IMPORTED_MODULE_1__,_plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__,_utilities__WEBPACK_IMPORTED_MODULE_3__].forEach(function(object){
        //for each component within those
        for (var property in object) {
            //get actual properties
            if (object.hasOwnProperty(property)) {
                //set them on window so they're available globally
                //example: objects.user becomes window.user
                //usage after running this: user.getId()
                window[property] = object[property];
            }
        }
    });
};

const jpack = {components: _components__WEBPACK_IMPORTED_MODULE_0__, objects: _objects__WEBPACK_IMPORTED_MODULE_1__, plugin_wrappers: _plugin_wrappers__WEBPACK_IMPORTED_MODULE_2__, utilities: _utilities__WEBPACK_IMPORTED_MODULE_3__};

//set jpack for the world to use and add the goGlobal method
global.jpack = {...jpack, ...{goGlobal: goGlobal}};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/objects/abstract_object.js":
/*!****************************************!*\
  !*** ./src/objects/abstract_object.js ***!
  \****************************************/
/*! exports provided: abstract_object */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abstract_object", function() { return abstract_object; });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/utilities/index.js");


const abstract_object = {
    //keys this object contains (used to automatically populate it when you run populate(data);
    //overwrite this in each extending class!
    keys: [],

    /**
     * populates the user object with the provided data
     *
     * @param data
     */
    populate: function(data){
        const self = this;

        //validate the incoming data object and make sure it only contains these keys
        !_utilities__WEBPACK_IMPORTED_MODULE_0__["type_checks"].isDataObject(data, this.keys, false, true, true);

        //for each key that is set in the data object, set the value on this
        this.keys.forEach(function(key){
            if( typeof data[key] !== "undefined" ) self[_utilities__WEBPACK_IMPORTED_MODULE_0__["strings"].setter(key)](data[key]);
        });

        return this;
    }
};

/***/ }),

/***/ "./src/objects/index.js":
/*!******************************!*\
  !*** ./src/objects/index.js ***!
  \******************************/
/*! exports provided: request, site, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/objects/request/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "request", function() { return _request__WEBPACK_IMPORTED_MODULE_0__["request"]; });

/* harmony import */ var _site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site */ "./src/objects/site/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "site", function() { return _site__WEBPACK_IMPORTED_MODULE_1__["site"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./src/objects/user/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "user", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["user"]; });







/***/ }),

/***/ "./src/objects/request/index.js":
/*!**************************************!*\
  !*** ./src/objects/request/index.js ***!
  \**************************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "request", function() { return request; });
__webpack_require__(/*! url-search-params-polyfill */ "./node_modules/url-search-params-polyfill/index.js");

/**
 * Allows you to get details about the current request easily, including querystring variables
 *
 * @type {{getDomain: (function(): string), getDomainWithProtocol: (function(): string), query: URLSearchParams, isHttps: (function(): boolean), getURI: (function(): string), getFullURL: (function(): string), appendSlash: (function(): string)}}
 */
const request = {
    /**
     * Returns an object with methods for interacting with the query string variables
     *
     * @returns URLSearchParams
     */
    query: new URLSearchParams(window.location.search),

    /**
     * Returns true if the current request was made securely over SSL (https instead of http)
     *
     * @returns {boolean}
     */
    isHttps: function(){
        return window.location.protocol === 'https:';
    },

    /**
     * Returns the current domain
     *
     * Example: my-domain.com
     *
     * @returns {string}
     */
    getDomain: function(){
        return window.location.hostname || window.location.host;
    },

    /**
     * Returns the current protocol and domain
     *
     * Example: https://my-domain.com
     *
     * @returns {string}
     */
    getDomainWithProtocol: function(){
        return window.location.origin;
    },

    /**
     * Returns the current URI
     *
     * Example: /products
     *
     * @returns {string}
     */
    getURI: function(){
        return window.location.pathname;
    },

    /**
     * Returns the URI with query string
     *
     * Example: /products?id=1
     *
     * @returns {string}
     */
    getURIWithQueryString: function(){
        return window.location.pathname + window.location.search;
    },

    /**
     * Returns the full URL
     *
     * Example: https://my-domain.com/products?id=1
     *
     * @returns {string}
     */
    getFullURL: function(){
        return window.location.href;
    },

    /**
     * Appends a slash to a string if it doesn't already have it
     *
     * Example: https://my-domain.com becomes https://my-domain.com/
     * Example: /my-product becomes /my-product/
     *
     * @param url
     * @returns {string}
     */
    appendSlash: function(url){
        return url[url.length-1] !== '/' ? url+'/' : url;
    },
};

/***/ }),

/***/ "./src/objects/site/index.js":
/*!***********************************!*\
  !*** ./src/objects/site/index.js ***!
  \***********************************/
/*! exports provided: site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "site", function() { return site; });
/* harmony import */ var _abstract_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract_object */ "./src/objects/abstract_object.js");


//create an object of default values
let site_defaults = {
    id: null,
    name:null,
    config:{},
};
//override defaults from $site (if defined)
if( typeof $site === "object" ) site_defaults = {...site_defaults, ...$site};

/**
 *
 * Provides you with easy access to information about the current website (for multi-tenant applications)
 *
 * @type {{setName: (function(*): site), getConfigItem: (function(*): null), getName: (function(): *), populate: (function(*): site), setConfigItem: (function(*, *): site), name: null, setId: (function(*): site), getId: (function(): *), id: null, config: (site_defaults.config|{}), getConfig: (function(): *), setConfig: (function(*): site)}}
 */
const site = {..._abstract_object__WEBPACK_IMPORTED_MODULE_0__["abstract_object"], ...{
    keys: ['id', 'name', 'config'],

    getId: function(){
        return this.id;
    },
    setId: function(id){
        this.id = id;
        return this;
    },

    //gets the website's name
    getName: function(){
        return this.name;
    },
    setName: function(name){
        this.name = name;
        return this;
    },

    //returns all config data
    getConfig: function(){
        return this.config;
    },
    //sets all config data using the provided object
    setConfig: function(config){
        this.config = config;
        return this;
    },

    //returns an individual config value or null if it's not defined
    getConfigItem: function(key){
        return typeof this.config[key] === "undefined" ? null : this.config[key];
    },
    //adds or updates a value in the config object
    setConfigItem: function(key, val){
        this.config.key = val;
        return this;
    }
}}.populate(site_defaults);

/***/ }),

/***/ "./src/objects/user/index.js":
/*!***********************************!*\
  !*** ./src/objects/user/index.js ***!
  \***********************************/
/*! exports provided: user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony import */ var _abstract_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abstract_object */ "./src/objects/abstract_object.js");


//create an object of default values
let user_defaults = {
    id: null,
    isGuest:false,
    isAdmin:false,
    username:null,
    fname:null,
    lname:null,
    email:null,
    phone:null,
    permissions:[],
    additionalData:{},
};
//override defaults from $user (if defined)
if( typeof $user === "object" ) user_defaults = {...user_defaults, ...$user};

/**
 *
 * Provides you with easy access to user information and allows you to perform permission checks
 *
 * @type {{getIsGuest: (function(): *), getPhone: (function(): *), getLname: (function(): *), getName: (function(): string), isGuest: null, setIsGuest: (function(*): user), addPermission: (function(*=): user), getId: (function(): *), setAdditionalData: (function(*): user), setPermissions: (function(*): user), getUsername: (function(): *), lname: null, setFname: (function(*): user), getFname: (function(): *), permissions: Array, setId: (function(*): user), id: null, additionalData: Array, email: (null|*), fname: null, setUsername: (function(*): user), setLname: (function(*): user), getAdditionalData: (function(): *), getPermissions: (function(): *), setPhone: (function(*): user), isAdmin: null, removePermission: (function(*): user), setIsAdmin: (function(*): user), populate: (function(*): user), getIsAdmin: (function(): *), setEmail: (function(*): user), phone: null, hasPermission: (function(*=): boolean), getEmail: (function()), username: null}}
 */
const user = {..._abstract_object__WEBPACK_IMPORTED_MODULE_0__["abstract_object"], ...{
    //user object keys
    keys: ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData'],

    setId: function(id){
        this.id = id;
        return this;
    },
    getId: function(){
        return this.id;
    },

    setIsGuest: function(is_guest){
        this.isGuest = is_guest;
        return this;
    },
    getIsGuest: function(){
        return this.isGuest;
    },

    setIsAdmin: function(is_admin){
        this.isAdmin = is_admin;
        return this;
    },
    getIsAdmin: function(){
        return this.isAdmin;
    },

    setUsername: function(username){
        this.username = username;
        return this;
    },
    getUsername: function(){
        return this.username;
    },

    getFname: function(){
        return this.fname;
    },
    setFname: function(first_name){
        this.fname = first_name;
        return this;
    },

    getLname: function(){
        return this.lname;
    },
    setLname: function(last_name){
        this.lname = last_name;
        return this;
    },

    //quick way to get fname and lname
    getName: function(){
        return `${user.getFname()} ${user.getLname()}`;
    },

    getEmail: function(){
        return this.email;
    },
    setEmail: function(email){
        this.email = email;
        return this;
    },

    getPhone: function(){
        return this.phone;
    },
    setPhone: function(phone){
        this.phone = phone;
        return this;
    },

    //returns all permissions for this user
    getPermissions: function(){
        return this.permissions;
    },
    //sets all permissions for this user
    setPermissions: function(permissions){
        this.permissions = permissions;
        return this;
    },
    //adds a single permission to this user
    addPermission: function(permission){
        this.permissions.push(permission);
        return this;
    },
    //Removes a single permission from this user
    removePermission: function(permission){
        this.setPermissions(this.permissions.filter(function(ele){
            return ele !== permission;
        }));
        return this;
    },
    //returns true if the user has the provided permission
    hasPermission: function(permission){
        return this.getPermissions().includes(permission);
    },

    //returns all additional data for this user
    getAdditionalData: function(){
        return this.additionalData;
    },
    //sets all additional data for this user
    setAdditionalData: function(additional_data){
        this.additionalData = additional_data;
        return this;
    },
}}.populate(user_defaults); //immediately populate from user_defaults

/***/ }),

/***/ "./src/plugin_wrappers/index.js":
/*!**************************************!*\
  !*** ./src/plugin_wrappers/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ "./src/utilities/dom/index.js":
/*!************************************!*\
  !*** ./src/utilities/dom/index.js ***!
  \************************************/
/*! exports provided: dom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/**
 * HTML DOM helpers
 *
 * @type {{getDomElements: (function(*=, *=): Array), getDomElement: dom.getDomElement, exists: (function(*=): number), multipleExist: (function(*=): number)}}
 */
const dom = {
    /**
     * Converts a provided string, jQuery dom object, etc into a single native DOM object
     *
     * @param el
     * @param error_on_none - throw an error if none exist
     * @param error_on_multiple - throw an error if more than 1 exists
     * @returns Element|HTMLDocument|null
     */
    getDomElement: function(el, error_on_none, error_on_multiple){
        el = this.getDomElements(el, error_on_none);

        if( el.length > 1 ){
            if( error_on_multiple ) throw "Too many DOM elements found in getDomElement for "+JSON.stringify(el);
            return null;
        }

        return el[0];
    },

    /**
     * Converts a provided string, jQuery dom object, etc into an array of native DOM elements
     *
     * @param el (string, object, array, jQuery object, etc)
     * @param error_on_none - throw an error if no elements were found, default: false
     * @returns []
     */
    getDomElements: function(el, error_on_none){
        //default to false
        error_on_none = typeof error_on_none === "undefined" ? false : error_on_none;

        //default to empty
        let el_array = [];

        //if not provided or doesn't exist
        if( typeof el === "undefined" || !el ){
            //do nothing, default is empty array
        }
        //if a string was provided
        else if (typeof el === 'string') {
            //convert the NodeList returned by querySelectorAll into an array
            el_array = Array.from(document.querySelectorAll(el));
        }
        //if a jquery object was provided
        else if( el instanceof jQuery ){
            //if it contains anything
            if( el.length ){
                //get all the elements in an array
                el_array = el.toArray();
            }
        }
        //if it's an Element or HTMLDocument (a singular DOM element)
        else if( el instanceof Element || el instanceof HTMLDocument ){
            //add to the array
            el_array.push(el);
        }
        //otherwise, what the heck did you pass? Throw error...
        else {
            throw "Invalid value provided to getDomElements: "+JSON.stringify(el);
        }

        if( !el_array.length && error_on_none ){
            throw "Failed to get array of DOM elements for "+JSON.stringify(el);
        }

        //hopefully it's safe to assume the originally provided el is a singular native DOM object
        return el_array;
    },

    /**
     * Returns true if the provided element exists
     *
     * Pass anything you want, it uses getDomElements
     *
     * @param el
     * @returns {number}
     */
    exists: function(el){
        return this.getDomElements(el).length;
    },

    /**
     * Returns true if there are multiple instances of the provided element
     *
     * Pass anything you want, it uses getDomElements
     *
     * @param el
     * @returns {boolean}
     */
    multipleExist: function(el){
        return this.getDomElements(el).length > 1;
    },
};


/***/ }),

/***/ "./src/utilities/events/index.js":
/*!***************************************!*\
  !*** ./src/utilities/events/index.js ***!
  \***************************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/utilities/dom/index.js");


/**
 * Shorthand/consistent event listener management
 *
 */
const events = {

    /**
     * Shorthand on-click handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onClick: function(el, handler){
        return this.onEventPreventDefault(el, 'click', handler);
    },

    /**
     * Removes an on-click handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offClick(el, handler){
        return this.offEventPreventDefault(el, 'click', handler);
    },

    /**
     * Shorthand on-submit handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onSubmit: function(el, handler){
        return this.onEventPreventDefault(el, 'submit', handler);
    },

    /**
     * Removes an on-submit handler with preventDefault
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offSubmit: function(el, handler){
        return this.offEventPreventDefault(el, 'submit', handler);
    },

    /**
     * Mainly here for consistency
     *
     * Shorthand on-change handler
     * DOES NOT preventDefault because that's usually not desired
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    onChange: function(el, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getDomElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.addEventListener('change', handler);
        });

        return el_array;
    },

    /**
     * Removes an on-change handler
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offChange: function(el, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getDomElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.removeEventListener('change', handler);
        });

        return el_array;
    },

    /**
     * Attaches an event handler and prevents the default events from occurring
     *  (like forms submitting or a link bringing you to another page)
     *
     * @param el
     * @param event
     * @param handler
     * @returns array|el
     */
    onEventPreventDefault: function(el, event, handler) {
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getDomElements(el);

        if( !el_array.length ){
            return el;
        }

        el_array.forEach(function(el){
            el.addEventListener(event, function(e){
                e.preventDefault();
                handler.call(this, [e]);
                return false;
            });
        });


        return el_array;
    },

    /**
     * Removes an event handler with preventDefault
     *
     * @param el
     * @param event
     * @param handler
     * @returns array|el
     */
    offEventPreventDefault: function(el, event, handler){

        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getDomElements(el);

        if( !el_array.length ){
            return el;
        }

        el_array.forEach(function(el) {
            el.removeEventListener(event, function (e) {
                e.preventDefault();
                handler.call(this, [e]);
                return false;
            });
        });

        return el_array;
    },
};

/***/ }),

/***/ "./src/utilities/index.js":
/*!********************************!*\
  !*** ./src/utilities/index.js ***!
  \********************************/
/*! exports provided: type_checks, strings, dom, events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type_checks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type_checks */ "./src/utilities/type_checks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "type_checks", function() { return _type_checks__WEBPACK_IMPORTED_MODULE_0__["type_checks"]; });

/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strings */ "./src/utilities/strings/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return _strings__WEBPACK_IMPORTED_MODULE_1__["strings"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/utilities/dom/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return _dom__WEBPACK_IMPORTED_MODULE_2__["dom"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/utilities/events/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_3__["events"]; });








/***/ }),

/***/ "./src/utilities/strings/index.js":
/*!****************************************!*\
  !*** ./src/utilities/strings/index.js ***!
  \****************************************/
/*! exports provided: strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/**
 * Methods for performing common string manipulations
 *
 * @type {{getter: (function(*=): string), ucfirst: (function(*=): (*|string)), setter: (function(*=): string)}}
 */
const strings = {
    /**
     * Creates a getter method name from a string
     *
     * Example: strings.getter('name') returns 'getName'
     *
     * @param string
     * @returns {string}
     */
    getter: function(string){
        return 'get'+this.ucfirst(string);
    },

    /**
     * Creates a setter method name from a string
     *
     * Example: strings.setter('name') returns 'setName'
     *
     * @param string
     * @returns {string}
     */
    setter: function(string){
        return 'set'+this.ucfirst(string);
    },

    /**
     * Adds ucfirst() functionality to JS (like PHP)
     *
     * @param string
     * @returns {*|string}
     */
    ucfirst: function(string){
        return string && string[0].toUpperCase()+string.slice(1);
    }
};

/***/ }),

/***/ "./src/utilities/type_checks/index.js":
/*!********************************************!*\
  !*** ./src/utilities/type_checks/index.js ***!
  \********************************************/
/*! exports provided: type_checks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "type_checks", function() { return type_checks; });
/**
 * Methods for checking data types with more specificity
 *
 * @type {{isDataObject: type_checks.isDataObject}}
 */
const type_checks = {
    /**
     * Determines if a provided value is an object
     *
     * Optionally must contain at least 1 provided key in keys array
     * Optionally must have all keys
     * Optionally cannot have any keys that aren't in the keys array
     * Optionally throws an error if any check fails
     *
     * @param value
     * @param keys - default: don't verify keys
     * @param require_all_keys - default: false
     * @param block_other_keys - default false
     * @param throw_error - default: false
     * @returns {boolean}
     */
    isDataObject: function(value, keys, require_all_keys, block_other_keys, throw_error){
        //default for throw_error is false
        throw_error = typeof throw_error !== "undefined" ? throw_error : false;

        //default for require_all_keys is false
        require_all_keys = typeof require_all_keys !== "undefined" ? require_all_keys : false;

        //for error messages
        var stringified_val = JSON.stringify(value);

        //default error_msg
        const error_msg = `${stringified_val} is not an object`;

        //if not provided or if null
        if( typeof value === "undefined" || !value ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //determine if it is an object
        const is_object = typeof value === "object";

        //if not
        if( !is_object ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //if we need to verify the keys this object contains
        if( Array.isArray(keys) ) {
            let found_key = false;
            let missing_keys = [];

            const value_keys = Object.keys(value);

            keys.forEach(function(key) {
                //if the key was found, we found atleast one
                if( value_keys.includes(key) ){
                    found_key = true;
                }
                //if it's not found, we can't say all keys exist in this object
                else{
                    missing_keys.push(key);
                }
            });

            //if not one of the keys were found
            if( !found_key ){
                if( throw_error ) throw `${stringified_val} does not contain at least one of the following: `+keys.join(', ');
                return false;
            }

            //if we didn't find all the keys
            if( require_all_keys && missing_keys.length )
            {
                if( throw_error ) throw `${stringified_val} is missing data: `+missing_keys.join(', ');
                return false;
            }

            //if we don't allow any keys NOT in the keys array
            if( block_other_keys ){
                let unrecognized_keys = [];

                value_keys.forEach(function(key) {
                    if( !keys.includes(key) ){
                        unrecognized_keys.push(key);
                    }
                });

                if( unrecognized_keys.length ){
                    if( throw_error ) throw `${stringified_val} contains invalid data: `+unrecognized_keys.join(', ');
                    return false;
                }
            }
        }

        //all checks passed! congrats, it's an object
        return true;
    }
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2Fic3RyYWN0X29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luX3dyYXBwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9zdHJpbmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdHlwZV9jaGVja3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtB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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEVBQUUseUJBQXlCLDBDOzs7Ozs7Ozs7Ozs7QUNwSTNCOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1Qjs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBRzs7QUFFNUI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOzs7QUFHVDtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5Qix3Q0FBRzs7QUFFNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBLEtBQUs7QUFDTCxFOzs7Ozs7Ozs7Ozs7QUNuSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEM7QUFDUjtBQUNSO0FBQ007Ozs7Ozs7Ozs7Ozs7O0FDSGhDO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QixnQkFBZ0I7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsZ0JBQWdCO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBLCtDQUErQyxnQkFBZ0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRSIsImZpbGUiOiJqcGFjay5jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pwYWNrLmpzXCIpO1xuIiwiLyoqXG4gKlxuICpcbiAqIEBhdXRob3IgSmVycnkgQmVuZHkgPGplcnJ5QGljZXdpbmdjYy5jb20+XG4gKiBAbGljZW5jZSBNSVRcbiAqXG4gKi9cblxuKGZ1bmN0aW9uKHNlbGYpIHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICB2YXIgbmF0aXZlVVJMU2VhcmNoUGFyYW1zID0gKHNlbGYuVVJMU2VhcmNoUGFyYW1zICYmIHNlbGYuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5nZXQpID8gc2VsZi5VUkxTZWFyY2hQYXJhbXMgOiBudWxsLFxuICAgICAgICBpc1N1cHBvcnRPYmplY3RDb25zdHJ1Y3RvciA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyh7YTogMX0pKS50b1N0cmluZygpID09PSAnYT0xJyxcbiAgICAgICAgLy8gVGhlcmUgaXMgYSBidWcgaW4gc2FmYXJpIDEwLjEgKGFuZCBlYXJsaWVyKSB0aGF0IGluY29ycmVjdGx5IGRlY29kZXMgYCUyQmAgYXMgYW4gZW1wdHkgc3BhY2UgYW5kIG5vdCBhIHBsdXMuXG4gICAgICAgIGRlY29kZXNQbHVzZXNDb3JyZWN0bHkgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgKG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoJ3M9JTJCJykuZ2V0KCdzJykgPT09ICcrJyksXG4gICAgICAgIF9fVVJMU2VhcmNoUGFyYW1zX18gPSBcIl9fVVJMU2VhcmNoUGFyYW1zX19cIixcbiAgICAgICAgLy8gRml4IGJ1ZyBpbiBFZGdlIHdoaWNoIGNhbm5vdCBlbmNvZGUgJyAmJyBjb3JyZWN0bHlcbiAgICAgICAgZW5jb2Rlc0FtcGVyc2FuZHNDb3JyZWN0bHkgPSBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPyAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYW1wZXJzYW5kVGVzdCA9IG5ldyBuYXRpdmVVUkxTZWFyY2hQYXJhbXMoKTtcbiAgICAgICAgICAgIGFtcGVyc2FuZFRlc3QuYXBwZW5kKCdzJywgJyAmJyk7XG4gICAgICAgICAgICByZXR1cm4gYW1wZXJzYW5kVGVzdC50b1N0cmluZygpID09PSAncz0rJTI2JztcbiAgICAgICAgfSkoKSA6IHRydWUsXG4gICAgICAgIHByb3RvdHlwZSA9IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsLnByb3RvdHlwZSxcbiAgICAgICAgaXRlcmFibGUgPSAhIShzZWxmLlN5bWJvbCAmJiBzZWxmLlN5bWJvbC5pdGVyYXRvcik7XG5cbiAgICBpZiAobmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yICYmIGRlY29kZXNQbHVzZXNDb3JyZWN0bHkgJiYgZW5jb2Rlc0FtcGVyc2FuZHNDb3JyZWN0bHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogTWFrZSBhIFVSTFNlYXJjaFBhcmFtcyBpbnN0YW5jZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R8c3RyaW5nfFVSTFNlYXJjaFBhcmFtc30gc2VhcmNoXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgZnVuY3Rpb24gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoc2VhcmNoKSB7XG4gICAgICAgIHNlYXJjaCA9IHNlYXJjaCB8fCBcIlwiO1xuXG4gICAgICAgIC8vIHN1cHBvcnQgY29uc3RydWN0IG9iamVjdCB3aXRoIGFub3RoZXIgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICAgIGlmIChzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXMgfHwgc2VhcmNoIGluc3RhbmNlb2YgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwpIHtcbiAgICAgICAgICAgIHNlYXJjaCA9IHNlYXJjaC50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dID0gcGFyc2VUb0RpY3Qoc2VhcmNoKTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzcGVjaWZpZWQga2V5L3ZhbHVlIHBhaXIgYXMgYSBuZXcgc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gICAgICovXG4gICAgcHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGFwcGVuZFRvKHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dLCBuYW1lLCB2YWx1ZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlbGV0ZXMgdGhlIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIsIGFuZCBpdHMgYXNzb2NpYXRlZCB2YWx1ZSxcbiAgICAgKiBmcm9tIHRoZSBsaXN0IG9mIGFsbCBzZWFyY2ggcGFyYW1ldGVycy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICovXG4gICAgcHJvdG90eXBlWydkZWxldGUnXSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dIFtuYW1lXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZmlyc3QgdmFsdWUgYXNzb2NpYXRlZCB0byB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudWxsfVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgICAgIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0W25hbWVdWzBdIDogbnVsbDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIHZhbHVlcyBhc3NvY2lhdGlvbiB3aXRoIGEgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge0FycmF5fVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgICAgIHJldHVybiBuYW1lIGluIGRpY3QgPyBkaWN0IFtuYW1lXS5zbGljZSgwKSA6IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgQm9vbGVhbiBpbmRpY2F0aW5nIGlmIHN1Y2ggYSBzZWFyY2ggcGFyYW1ldGVyIGV4aXN0cy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgdG8gYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyIHRvXG4gICAgICogdGhlIGdpdmVuIHZhbHVlLiBJZiB0aGVyZSB3ZXJlIHNldmVyYWwgdmFsdWVzLCBkZWxldGUgdGhlXG4gICAgICogb3RoZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gc2V0KG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMgW19fVVJMU2VhcmNoUGFyYW1zX19dW25hbWVdID0gWycnICsgdmFsdWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGNvbnRhaW5nIGEgcXVlcnkgc3RyaW5nIHN1aXRhYmxlIGZvciB1c2UgaW4gYSBVUkwuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGljdCA9IHRoaXNbX19VUkxTZWFyY2hQYXJhbXNfX10sIHF1ZXJ5ID0gW10sIGksIGtleSwgbmFtZSwgdmFsdWU7XG4gICAgICAgIGZvciAoa2V5IGluIGRpY3QpIHtcbiAgICAgICAgICAgIG5hbWUgPSBlbmNvZGUoa2V5KTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIHZhbHVlID0gZGljdFtrZXldOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBxdWVyeS5wdXNoKG5hbWUgKyAnPScgKyBlbmNvZGUodmFsdWVbaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcXVlcnkuam9pbignJicpO1xuICAgIH07XG5cbiAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBTYWZhcmkgMTAuMSBhbmQgYFByb3h5YGluZyBpdCBpcyBub3QgZW5vdWdoLlxuICAgIHZhciBmb3JTdXJlVXNlUG9seWZpbGwgPSAhZGVjb2Rlc1BsdXNlc0NvcnJlY3RseTtcbiAgICB2YXIgdXNlUHJveHkgPSAoIWZvclN1cmVVc2VQb2x5ZmlsbCAmJiBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgIWlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yICYmIHNlbGYuUHJveHkpXG4gICAgLypcbiAgICAgKiBBcHBseSBwb2xpZmlsbCB0byBnbG9iYWwgb2JqZWN0IGFuZCBhcHBlbmQgb3RoZXIgcHJvdG90eXBlIGludG8gaXRcbiAgICAgKi9cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgJ1VSTFNlYXJjaFBhcmFtcycsIHtcbiAgICAgICAgdmFsdWU6ICh1c2VQcm94eSA/XG4gICAgICAgICAgICAvLyBTYWZhcmkgMTAuMCBkb2Vzbid0IHN1cHBvcnQgUHJveHksIHNvIGl0IHdvbid0IGV4dGVuZCBVUkxTZWFyY2hQYXJhbXMgb24gc2FmYXJpIDEwLjBcbiAgICAgICAgICAgIG5ldyBQcm94eShuYXRpdmVVUkxTZWFyY2hQYXJhbXMsIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uKHRhcmdldCwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IHRhcmdldCgobmV3IFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKGFyZ3NbMF0pLnRvU3RyaW5nKCkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSA6XG4gICAgICAgICAgICBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbClcbiAgICB9KTtcblxuICAgIHZhciBVU1BQcm90byA9IHNlbGYuVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZTtcblxuICAgIFVTUFByb3RvLnBvbHlmaWxsID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gdGhpc0FyZ1xuICAgICAqL1xuICAgIFVTUFByb3RvLmZvckVhY2ggPSBVU1BQcm90by5mb3JFYWNoIHx8IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKTtcbiAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoZGljdCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29ydCBhbGwgbmFtZS12YWx1ZSBwYWlyc1xuICAgICAqL1xuICAgIFVTUFByb3RvLnNvcnQgPSBVU1BQcm90by5zb3J0IHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGljdCA9IHBhcnNlVG9EaWN0KHRoaXMudG9TdHJpbmcoKSksIGtleXMgPSBbXSwgaywgaSwgajtcbiAgICAgICAgZm9yIChrIGluIGRpY3QpIHtcbiAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgfVxuICAgICAgICBrZXlzLnNvcnQoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpc1snZGVsZXRlJ10oa2V5c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldLCB2YWx1ZXMgPSBkaWN0W2tleV07XG4gICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgdmFsdWVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmQoa2V5LCB2YWx1ZXNbal0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5cyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmtleXMgPSBVU1BQcm90by5rZXlzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCB2YWx1ZXMgb2ZcbiAgICAgKiB0aGUga2V5L3ZhbHVlIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBVU1BQcm90by52YWx1ZXMgPSBVU1BQcm90by52YWx1ZXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIGtleS92YWx1ZVxuICAgICAqIHBhaXJzIGNvbnRhaW5lZCBpbiB0aGlzIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbn1cbiAgICAgKi9cbiAgICBVU1BQcm90by5lbnRyaWVzID0gVVNQUHJvdG8uZW50cmllcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtLCBuYW1lKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKFtuYW1lLCBpdGVtXSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWFrZUl0ZXJhdG9yKGl0ZW1zKTtcbiAgICB9O1xuXG5cbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgICAgVVNQUHJvdG9bc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gVVNQUHJvdG9bc2VsZi5TeW1ib2wuaXRlcmF0b3JdIHx8IFVTUFByb3RvLmVudHJpZXM7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBlbmNvZGUoc3RyKSB7XG4gICAgICAgIHZhciByZXBsYWNlID0ge1xuICAgICAgICAgICAgJyEnOiAnJTIxJyxcbiAgICAgICAgICAgIFwiJ1wiOiAnJTI3JyxcbiAgICAgICAgICAgICcoJzogJyUyOCcsXG4gICAgICAgICAgICAnKSc6ICclMjknLFxuICAgICAgICAgICAgJ34nOiAnJTdFJyxcbiAgICAgICAgICAgICclMjAnOiAnKycsXG4gICAgICAgICAgICAnJTAwJzogJ1xceDAwJ1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnXFwoXFwpfl18JTIwfCUwMC9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcGxhY2VbbWF0Y2hdO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWNvZGUoc3RyKSB7XG4gICAgICAgIHJldHVybiBzdHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9bICtdL2csICclMjAnKVxuICAgICAgICAgICAgLnJlcGxhY2UoLyglW2EtZjAtOV17Mn0pKy9pZywgZnVuY3Rpb24obWF0Y2gpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VJdGVyYXRvcihhcnIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gYXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICAgICAgaXRlcmF0b3Jbc2VsZi5TeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwYXJzZVRvRGljdChzZWFyY2gpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlYXJjaCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgLy8gaWYgYHNlYXJjaGAgaXMgYW4gYXJyYXksIHRyZWF0IGl0IGFzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIGlmIChpc0FycmF5KHNlYXJjaCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHNlYXJjaFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkoaXRlbSkgJiYgaXRlbS5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGl0ZW1bMF0sIGl0ZW1bMV0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBjb25zdHJ1Y3QgJ1VSTFNlYXJjaFBhcmFtcyc6IFNlcXVlbmNlIGluaXRpYWxpemVyIG11c3Qgb25seSBjb250YWluIHBhaXIgZWxlbWVudHNcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHNlYXJjaCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2VhcmNoLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGtleSwgc2VhcmNoW2tleV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgZmlyc3QgJz8nXG4gICAgICAgICAgICBpZiAoc2VhcmNoLmluZGV4T2YoXCI/XCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnNsaWNlKDEpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFpcnMgPSBzZWFyY2guc3BsaXQoXCImXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBwYWlycy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHBhaXJzIFtqXSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB2YWx1ZS5pbmRleE9mKCc9Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoLTEgPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUuc2xpY2UoMCwgaW5kZXgpKSwgZGVjb2RlKHZhbHVlLnNsaWNlKGluZGV4ICsgMSkpKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgZGVjb2RlKHZhbHVlKSwgJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYXBwZW5kVG8oZGljdCwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IChcbiAgICAgICAgICAgIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdHlwZW9mIHZhbHVlLnRvU3RyaW5nID09PSAnZnVuY3Rpb24nID8gdmFsdWUudG9TdHJpbmcoKSA6IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG5hbWUgaW4gZGljdCkge1xuICAgICAgICAgICAgZGljdFtuYW1lXS5wdXNoKHZhbCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdID0gW3ZhbF07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5KHZhbCkge1xuICAgICAgICByZXR1cm4gISF2YWwgJiYgJ1tvYmplY3QgQXJyYXldJyA9PT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuXG59KSh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHRoaXMpKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImV4cG9ydCB7fTsiLCJpbXBvcnQgKiBhcyBjb21wb25lbnRzIGZyb20gJy4vY29tcG9uZW50cyc7XG5pbXBvcnQgKiBhcyBvYmplY3RzIGZyb20gJy4vb2JqZWN0cyc7XG5pbXBvcnQgKiBhcyBwbHVnaW5fd3JhcHBlcnMgZnJvbSAnLi9wbHVnaW5fd3JhcHBlcnMnO1xuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gJy4vdXRpbGl0aWVzJztcblxuLyoqXG4gKiBOb3QgcmVjb21tZW5kZWQsIGJ1dCBtYWtlcyB0aGluZ3Mgc2ltcGxlLiBFdmVyeSBjb21wb25lbnQgaW4ganBhY2sgaXMgc2V0IG9uIHdpbmRvdyBhbmQgcmVhZGlseSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAqXG4gKiBUaGlzIG1lYW5zIGluc3RlYWQgb2YgY2FsbGluZyBqcGFjay5vYmplY3RzLnVzZXIuZ2V0SWQoKSwgeW91IGNhbiBqdXN0IGNhbGwgdXNlci5nZXRJZCgpXG4gKi9cbmNvbnN0IGdvR2xvYmFsID0gZnVuY3Rpb24oKXtcbiAgICAvL2xvb3AgdGhyb3VnaCBjb21wb25lbnRzLCBvYmplY3RzLCBwbHVnaW5fd3JhcHBlcnMsIGFuZCB1dGlsaXRpZXNcbiAgICBbY29tcG9uZW50cyxvYmplY3RzLHBsdWdpbl93cmFwcGVycyx1dGlsaXRpZXNdLmZvckVhY2goZnVuY3Rpb24ob2JqZWN0KXtcbiAgICAgICAgLy9mb3IgZWFjaCBjb21wb25lbnQgd2l0aGluIHRob3NlXG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5IGluIG9iamVjdCkge1xuICAgICAgICAgICAgLy9nZXQgYWN0dWFsIHByb3BlcnRpZXNcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICAgICAgICAgICAgLy9zZXQgdGhlbSBvbiB3aW5kb3cgc28gdGhleSdyZSBhdmFpbGFibGUgZ2xvYmFsbHlcbiAgICAgICAgICAgICAgICAvL2V4YW1wbGU6IG9iamVjdHMudXNlciBiZWNvbWVzIHdpbmRvdy51c2VyXG4gICAgICAgICAgICAgICAgLy91c2FnZSBhZnRlciBydW5uaW5nIHRoaXM6IHVzZXIuZ2V0SWQoKVxuICAgICAgICAgICAgICAgIHdpbmRvd1twcm9wZXJ0eV0gPSBvYmplY3RbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QganBhY2sgPSB7Y29tcG9uZW50cywgb2JqZWN0cywgcGx1Z2luX3dyYXBwZXJzLCB1dGlsaXRpZXN9O1xuXG4vL3NldCBqcGFjayBmb3IgdGhlIHdvcmxkIHRvIHVzZSBhbmQgYWRkIHRoZSBnb0dsb2JhbCBtZXRob2Rcbmdsb2JhbC5qcGFjayA9IHsuLi5qcGFjaywgLi4ue2dvR2xvYmFsOiBnb0dsb2JhbH19OyIsImltcG9ydCB7dHlwZV9jaGVja3MsIHN0cmluZ3N9IGZyb20gXCIuLi91dGlsaXRpZXNcIjtcblxuZXhwb3J0IGNvbnN0IGFic3RyYWN0X29iamVjdCA9IHtcbiAgICAvL2tleXMgdGhpcyBvYmplY3QgY29udGFpbnMgKHVzZWQgdG8gYXV0b21hdGljYWxseSBwb3B1bGF0ZSBpdCB3aGVuIHlvdSBydW4gcG9wdWxhdGUoZGF0YSk7XG4gICAgLy9vdmVyd3JpdGUgdGhpcyBpbiBlYWNoIGV4dGVuZGluZyBjbGFzcyFcbiAgICBrZXlzOiBbXSxcblxuICAgIC8qKlxuICAgICAqIHBvcHVsYXRlcyB0aGUgdXNlciBvYmplY3Qgd2l0aCB0aGUgcHJvdmlkZWQgZGF0YVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwb3B1bGF0ZTogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIC8vdmFsaWRhdGUgdGhlIGluY29taW5nIGRhdGEgb2JqZWN0IGFuZCBtYWtlIHN1cmUgaXQgb25seSBjb250YWlucyB0aGVzZSBrZXlzXG4gICAgICAgICF0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3QoZGF0YSwgdGhpcy5rZXlzLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSk7XG5cbiAgICAgICAgLy9mb3IgZWFjaCBrZXkgdGhhdCBpcyBzZXQgaW4gdGhlIGRhdGEgb2JqZWN0LCBzZXQgdGhlIHZhbHVlIG9uIHRoaXNcbiAgICAgICAgdGhpcy5rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgICAgIGlmKCB0eXBlb2YgZGF0YVtrZXldICE9PSBcInVuZGVmaW5lZFwiICkgc2VsZltzdHJpbmdzLnNldHRlcihrZXkpXShkYXRhW2tleV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59OyIsImltcG9ydCB7cmVxdWVzdH0gZnJvbSBcIi4vcmVxdWVzdFwiO1xuaW1wb3J0IHtzaXRlfSBmcm9tIFwiLi9zaXRlXCI7XG5pbXBvcnQge3VzZXJ9IGZyb20gXCIuL3VzZXJcIjtcblxuZXhwb3J0IHtyZXF1ZXN0LCBzaXRlLCB1c2VyfTsiLCJyZXF1aXJlKCd1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbCcpO1xuXG4vKipcbiAqIEFsbG93cyB5b3UgdG8gZ2V0IGRldGFpbHMgYWJvdXQgdGhlIGN1cnJlbnQgcmVxdWVzdCBlYXNpbHksIGluY2x1ZGluZyBxdWVyeXN0cmluZyB2YXJpYWJsZXNcbiAqXG4gKiBAdHlwZSB7e2dldERvbWFpbjogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGdldERvbWFpbldpdGhQcm90b2NvbDogKGZ1bmN0aW9uKCk6IHN0cmluZyksIHF1ZXJ5OiBVUkxTZWFyY2hQYXJhbXMsIGlzSHR0cHM6IChmdW5jdGlvbigpOiBib29sZWFuKSwgZ2V0VVJJOiAoZnVuY3Rpb24oKTogc3RyaW5nKSwgZ2V0RnVsbFVSTDogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGFwcGVuZFNsYXNoOiAoZnVuY3Rpb24oKTogc3RyaW5nKX19XG4gKi9cbmV4cG9ydCBjb25zdCByZXF1ZXN0ID0ge1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggbWV0aG9kcyBmb3IgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgcXVlcnkgc3RyaW5nIHZhcmlhYmxlc1xuICAgICAqXG4gICAgICogQHJldHVybnMgVVJMU2VhcmNoUGFyYW1zXG4gICAgICovXG4gICAgcXVlcnk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCksXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgcmVxdWVzdCB3YXMgbWFkZSBzZWN1cmVseSBvdmVyIFNTTCAoaHR0cHMgaW5zdGVhZCBvZiBodHRwKVxuICAgICAqXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNIdHRwczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCA9PT0gJ2h0dHBzOic7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBteS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbjogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBwcm90b2NvbCBhbmQgZG9tYWluXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb21cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0RG9tYWluV2l0aFByb3RvY29sOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpbjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY3VycmVudCBVUklcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0c1xuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRVUkk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVSSSB3aXRoIHF1ZXJ5IHN0cmluZ1xuICAgICAqXG4gICAgICogRXhhbXBsZTogL3Byb2R1Y3RzP2lkPTFcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZnVsbCBVUkxcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IGh0dHBzOi8vbXktZG9tYWluLmNvbS9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldEZ1bGxVUkw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNsYXNoIHRvIGEgc3RyaW5nIGlmIGl0IGRvZXNuJ3QgYWxyZWFkeSBoYXZlIGl0XG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20gYmVjb21lcyBodHRwczovL215LWRvbWFpbi5jb20vXG4gICAgICogRXhhbXBsZTogL215LXByb2R1Y3QgYmVjb21lcyAvbXktcHJvZHVjdC9cbiAgICAgKlxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGFwcGVuZFNsYXNoOiBmdW5jdGlvbih1cmwpe1xuICAgICAgICByZXR1cm4gdXJsW3VybC5sZW5ndGgtMV0gIT09ICcvJyA/IHVybCsnLycgOiB1cmw7XG4gICAgfSxcbn07IiwiaW1wb3J0IHthYnN0cmFjdF9vYmplY3R9IGZyb20gXCIuLi9hYnN0cmFjdF9vYmplY3RcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5sZXQgc2l0ZV9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBuYW1lOm51bGwsXG4gICAgY29uZmlnOnt9LFxufTtcbi8vb3ZlcnJpZGUgZGVmYXVsdHMgZnJvbSAkc2l0ZSAoaWYgZGVmaW5lZClcbmlmKCB0eXBlb2YgJHNpdGUgPT09IFwib2JqZWN0XCIgKSBzaXRlX2RlZmF1bHRzID0gey4uLnNpdGVfZGVmYXVsdHMsIC4uLiRzaXRlfTtcblxuLyoqXG4gKlxuICogUHJvdmlkZXMgeW91IHdpdGggZWFzeSBhY2Nlc3MgdG8gaW5mb3JtYXRpb24gYWJvdXQgdGhlIGN1cnJlbnQgd2Vic2l0ZSAoZm9yIG11bHRpLXRlbmFudCBhcHBsaWNhdGlvbnMpXG4gKlxuICogQHR5cGUge3tzZXROYW1lOiAoZnVuY3Rpb24oKik6IHNpdGUpLCBnZXRDb25maWdJdGVtOiAoZnVuY3Rpb24oKik6IG51bGwpLCBnZXROYW1lOiAoZnVuY3Rpb24oKTogKiksIHBvcHVsYXRlOiAoZnVuY3Rpb24oKik6IHNpdGUpLCBzZXRDb25maWdJdGVtOiAoZnVuY3Rpb24oKiwgKik6IHNpdGUpLCBuYW1lOiBudWxsLCBzZXRJZDogKGZ1bmN0aW9uKCopOiBzaXRlKSwgZ2V0SWQ6IChmdW5jdGlvbigpOiAqKSwgaWQ6IG51bGwsIGNvbmZpZzogKHNpdGVfZGVmYXVsdHMuY29uZmlnfHt9KSwgZ2V0Q29uZmlnOiAoZnVuY3Rpb24oKTogKiksIHNldENvbmZpZzogKGZ1bmN0aW9uKCopOiBzaXRlKX19XG4gKi9cbmV4cG9ydCBjb25zdCBzaXRlID0gey4uLmFic3RyYWN0X29iamVjdCwgLi4ue1xuICAgIGtleXM6IFsnaWQnLCAnbmFtZScsICdjb25maWcnXSxcblxuICAgIGdldElkOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9LFxuICAgIHNldElkOiBmdW5jdGlvbihpZCl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vZ2V0cyB0aGUgd2Vic2l0ZSdzIG5hbWVcbiAgICBnZXROYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0sXG4gICAgc2V0TmFtZTogZnVuY3Rpb24obmFtZSl7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYWxsIGNvbmZpZyBkYXRhXG4gICAgZ2V0Q29uZmlnOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWc6IGZ1bmN0aW9uKGNvbmZpZyl7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFuIGluZGl2aWR1YWwgY29uZmlnIHZhbHVlIG9yIG51bGwgaWYgaXQncyBub3QgZGVmaW5lZFxuICAgIGdldENvbmZpZ0l0ZW06IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5jb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB0aGlzLmNvbmZpZ1trZXldO1xuICAgIH0sXG4gICAgLy9hZGRzIG9yIHVwZGF0ZXMgYSB2YWx1ZSBpbiB0aGUgY29uZmlnIG9iamVjdFxuICAgIHNldENvbmZpZ0l0ZW06IGZ1bmN0aW9uKGtleSwgdmFsKXtcbiAgICAgICAgdGhpcy5jb25maWcua2V5ID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59fS5wb3B1bGF0ZShzaXRlX2RlZmF1bHRzKTsiLCJpbXBvcnQge2Fic3RyYWN0X29iamVjdH0gZnJvbSBcIi4uL2Fic3RyYWN0X29iamVjdFwiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmxldCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuLy9vdmVycmlkZSBkZWZhdWx0cyBmcm9tICR1c2VyIChpZiBkZWZpbmVkKVxuaWYoIHR5cGVvZiAkdXNlciA9PT0gXCJvYmplY3RcIiApIHVzZXJfZGVmYXVsdHMgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uJHVzZXJ9O1xuXG4vKipcbiAqXG4gKiBQcm92aWRlcyB5b3Ugd2l0aCBlYXN5IGFjY2VzcyB0byB1c2VyIGluZm9ybWF0aW9uIGFuZCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gcGVybWlzc2lvbiBjaGVja3NcbiAqXG4gKiBAdHlwZSB7e2dldElzR3Vlc3Q6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGhvbmU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TG5hbWU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGlzR3Vlc3Q6IG51bGwsIHNldElzR3Vlc3Q6IChmdW5jdGlvbigqKTogdXNlciksIGFkZFBlcm1pc3Npb246IChmdW5jdGlvbigqPSk6IHVzZXIpLCBnZXRJZDogKGZ1bmN0aW9uKCk6ICopLCBzZXRBZGRpdGlvbmFsRGF0YTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgc2V0UGVybWlzc2lvbnM6IChmdW5jdGlvbigqKTogdXNlciksIGdldFVzZXJuYW1lOiAoZnVuY3Rpb24oKTogKiksIGxuYW1lOiBudWxsLCBzZXRGbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0Rm5hbWU6IChmdW5jdGlvbigpOiAqKSwgcGVybWlzc2lvbnM6IEFycmF5LCBzZXRJZDogKGZ1bmN0aW9uKCopOiB1c2VyKSwgaWQ6IG51bGwsIGFkZGl0aW9uYWxEYXRhOiBBcnJheSwgZW1haWw6IChudWxsfCopLCBmbmFtZTogbnVsbCwgc2V0VXNlcm5hbWU6IChmdW5jdGlvbigqKTogdXNlciksIHNldExuYW1lOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXRBZGRpdGlvbmFsRGF0YTogKGZ1bmN0aW9uKCk6ICopLCBnZXRQZXJtaXNzaW9uczogKGZ1bmN0aW9uKCk6ICopLCBzZXRQaG9uZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgaXNBZG1pbjogbnVsbCwgcmVtb3ZlUGVybWlzc2lvbjogKGZ1bmN0aW9uKCopOiB1c2VyKSwgc2V0SXNBZG1pbjogKGZ1bmN0aW9uKCopOiB1c2VyKSwgcG9wdWxhdGU6IChmdW5jdGlvbigqKTogdXNlciksIGdldElzQWRtaW46IChmdW5jdGlvbigpOiAqKSwgc2V0RW1haWw6IChmdW5jdGlvbigqKTogdXNlciksIHBob25lOiBudWxsLCBoYXNQZXJtaXNzaW9uOiAoZnVuY3Rpb24oKj0pOiBib29sZWFuKSwgZ2V0RW1haWw6IChmdW5jdGlvbigpKSwgdXNlcm5hbWU6IG51bGx9fVxuICovXG5leHBvcnQgY29uc3QgdXNlciA9IHsuLi5hYnN0cmFjdF9vYmplY3QsIC4uLntcbiAgICAvL3VzZXIgb2JqZWN0IGtleXNcbiAgICBrZXlzOiBbJ2lkJywgJ2lzR3Vlc3QnLCAnaXNBZG1pbicsICd1c2VybmFtZScsICdmbmFtZScsICdsbmFtZScsICdlbWFpbCcsICdwaG9uZScsICdwZXJtaXNzaW9ucycsICdhZGRpdGlvbmFsRGF0YSddLFxuXG4gICAgc2V0SWQ6IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElkOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9LFxuXG4gICAgc2V0SXNHdWVzdDogZnVuY3Rpb24oaXNfZ3Vlc3Qpe1xuICAgICAgICB0aGlzLmlzR3Vlc3QgPSBpc19ndWVzdDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRJc0d1ZXN0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pc0d1ZXN0O1xuICAgIH0sXG5cbiAgICBzZXRJc0FkbWluOiBmdW5jdGlvbihpc19hZG1pbil7XG4gICAgICAgIHRoaXMuaXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElzQWRtaW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQWRtaW47XG4gICAgfSxcblxuICAgIHNldFVzZXJuYW1lOiBmdW5jdGlvbih1c2VybmFtZSl7XG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRVc2VybmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlcm5hbWU7XG4gICAgfSxcblxuICAgIGdldEZuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5mbmFtZTtcbiAgICB9LFxuICAgIHNldEZuYW1lOiBmdW5jdGlvbihmaXJzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5mbmFtZSA9IGZpcnN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRMbmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubG5hbWU7XG4gICAgfSxcbiAgICBzZXRMbmFtZTogZnVuY3Rpb24obGFzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5sbmFtZSA9IGxhc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcXVpY2sgd2F5IHRvIGdldCBmbmFtZSBhbmQgbG5hbWVcbiAgICBnZXROYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gYCR7dXNlci5nZXRGbmFtZSgpfSAke3VzZXIuZ2V0TG5hbWUoKX1gO1xuICAgIH0sXG5cbiAgICBnZXRFbWFpbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1haWw7XG4gICAgfSxcbiAgICBzZXRFbWFpbDogZnVuY3Rpb24oZW1haWwpe1xuICAgICAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQaG9uZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGhvbmU7XG4gICAgfSxcbiAgICBzZXRQaG9uZTogZnVuY3Rpb24ocGhvbmUpe1xuICAgICAgICB0aGlzLnBob25lID0gcGhvbmU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBnZXRQZXJtaXNzaW9uczogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVybWlzc2lvbnM7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9uczogZnVuY3Rpb24ocGVybWlzc2lvbnMpe1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9hZGRzIGEgc2luZ2xlIHBlcm1pc3Npb24gdG8gdGhpcyB1c2VyXG4gICAgYWRkUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMucGVybWlzc2lvbnMucHVzaChwZXJtaXNzaW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL1JlbW92ZXMgYSBzaW5nbGUgcGVybWlzc2lvbiBmcm9tIHRoaXMgdXNlclxuICAgIHJlbW92ZVBlcm1pc3Npb246IGZ1bmN0aW9uKHBlcm1pc3Npb24pe1xuICAgICAgICB0aGlzLnNldFBlcm1pc3Npb25zKHRoaXMucGVybWlzc2lvbnMuZmlsdGVyKGZ1bmN0aW9uKGVsZSl7XG4gICAgICAgICAgICByZXR1cm4gZWxlICE9PSBwZXJtaXNzaW9uO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9yZXR1cm5zIHRydWUgaWYgdGhlIHVzZXIgaGFzIHRoZSBwcm92aWRlZCBwZXJtaXNzaW9uXG4gICAgaGFzUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHJldHVybiB0aGlzLmdldFBlcm1pc3Npb25zKCkuaW5jbHVkZXMocGVybWlzc2lvbik7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgYWRkaXRpb25hbCBkYXRhIGZvciB0aGlzIHVzZXJcbiAgICBnZXRBZGRpdGlvbmFsRGF0YTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkaXRpb25hbERhdGE7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0QWRkaXRpb25hbERhdGE6IGZ1bmN0aW9uKGFkZGl0aW9uYWxfZGF0YSl7XG4gICAgICAgIHRoaXMuYWRkaXRpb25hbERhdGEgPSBhZGRpdGlvbmFsX2RhdGE7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59fS5wb3B1bGF0ZSh1c2VyX2RlZmF1bHRzKTsgLy9pbW1lZGlhdGVseSBwb3B1bGF0ZSBmcm9tIHVzZXJfZGVmYXVsdHMiLCJleHBvcnQge30iLCIvKipcbiAqIEhUTUwgRE9NIGhlbHBlcnNcbiAqXG4gKiBAdHlwZSB7e2dldERvbUVsZW1lbnRzOiAoZnVuY3Rpb24oKj0sICo9KTogQXJyYXkpLCBnZXREb21FbGVtZW50OiBkb20uZ2V0RG9tRWxlbWVudCwgZXhpc3RzOiAoZnVuY3Rpb24oKj0pOiBudW1iZXIpLCBtdWx0aXBsZUV4aXN0OiAoZnVuY3Rpb24oKj0pOiBudW1iZXIpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IGRvbSA9IHtcbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGEgc2luZ2xlIG5hdGl2ZSBET00gb2JqZWN0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vbmUgZXhpc3RcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbXVsdGlwbGUgLSB0aHJvdyBhbiBlcnJvciBpZiBtb3JlIHRoYW4gMSBleGlzdHNcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50fEhUTUxEb2N1bWVudHxudWxsXG4gICAgICovXG4gICAgZ2V0RG9tRWxlbWVudDogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUsIGVycm9yX29uX211bHRpcGxlKXtcbiAgICAgICAgZWwgPSB0aGlzLmdldERvbUVsZW1lbnRzKGVsLCBlcnJvcl9vbl9ub25lKTtcblxuICAgICAgICBpZiggZWwubGVuZ3RoID4gMSApe1xuICAgICAgICAgICAgaWYoIGVycm9yX29uX211bHRpcGxlICkgdGhyb3cgXCJUb28gbWFueSBET00gZWxlbWVudHMgZm91bmQgaW4gZ2V0RG9tRWxlbWVudCBmb3IgXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxbMF07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgcHJvdmlkZWQgc3RyaW5nLCBqUXVlcnkgZG9tIG9iamVjdCwgZXRjIGludG8gYW4gYXJyYXkgb2YgbmF0aXZlIERPTSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsIChzdHJpbmcsIG9iamVjdCwgYXJyYXksIGpRdWVyeSBvYmplY3QsIGV0YylcbiAgICAgKiBAcGFyYW0gZXJyb3Jfb25fbm9uZSAtIHRocm93IGFuIGVycm9yIGlmIG5vIGVsZW1lbnRzIHdlcmUgZm91bmQsIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMgW11cbiAgICAgKi9cbiAgICBnZXREb21FbGVtZW50czogZnVuY3Rpb24oZWwsIGVycm9yX29uX25vbmUpe1xuICAgICAgICAvL2RlZmF1bHQgdG8gZmFsc2VcbiAgICAgICAgZXJyb3Jfb25fbm9uZSA9IHR5cGVvZiBlcnJvcl9vbl9ub25lID09PSBcInVuZGVmaW5lZFwiID8gZmFsc2UgOiBlcnJvcl9vbl9ub25lO1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byBlbXB0eVxuICAgICAgICBsZXQgZWxfYXJyYXkgPSBbXTtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZCBvciBkb2Vzbid0IGV4aXN0XG4gICAgICAgIGlmKCB0eXBlb2YgZWwgPT09IFwidW5kZWZpbmVkXCIgfHwgIWVsICl7XG4gICAgICAgICAgICAvL2RvIG5vdGhpbmcsIGRlZmF1bHQgaXMgZW1wdHkgYXJyYXlcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGEgc3RyaW5nIHdhcyBwcm92aWRlZFxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAvL2NvbnZlcnQgdGhlIE5vZGVMaXN0IHJldHVybmVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwgaW50byBhbiBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZWwpKTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIGEganF1ZXJ5IG9iamVjdCB3YXMgcHJvdmlkZWRcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBqUXVlcnkgKXtcbiAgICAgICAgICAgIC8vaWYgaXQgY29udGFpbnMgYW55dGhpbmdcbiAgICAgICAgICAgIGlmKCBlbC5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAvL2dldCBhbGwgdGhlIGVsZW1lbnRzIGluIGFuIGFycmF5XG4gICAgICAgICAgICAgICAgZWxfYXJyYXkgPSBlbC50b0FycmF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBpdCdzIGFuIEVsZW1lbnQgb3IgSFRNTERvY3VtZW50IChhIHNpbmd1bGFyIERPTSBlbGVtZW50KVxuICAgICAgICBlbHNlIGlmKCBlbCBpbnN0YW5jZW9mIEVsZW1lbnQgfHwgZWwgaW5zdGFuY2VvZiBIVE1MRG9jdW1lbnQgKXtcbiAgICAgICAgICAgIC8vYWRkIHRvIHRoZSBhcnJheVxuICAgICAgICAgICAgZWxfYXJyYXkucHVzaChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9vdGhlcndpc2UsIHdoYXQgdGhlIGhlY2sgZGlkIHlvdSBwYXNzPyBUaHJvdyBlcnJvci4uLlxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiSW52YWxpZCB2YWx1ZSBwcm92aWRlZCB0byBnZXREb21FbGVtZW50czogXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggJiYgZXJyb3Jfb25fbm9uZSApe1xuICAgICAgICAgICAgdGhyb3cgXCJGYWlsZWQgdG8gZ2V0IGFycmF5IG9mIERPTSBlbGVtZW50cyBmb3IgXCIrSlNPTi5zdHJpbmdpZnkoZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9ob3BlZnVsbHkgaXQncyBzYWZlIHRvIGFzc3VtZSB0aGUgb3JpZ2luYWxseSBwcm92aWRlZCBlbCBpcyBhIHNpbmd1bGFyIG5hdGl2ZSBET00gb2JqZWN0XG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGV4aXN0c1xuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXREb21FbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBleGlzdHM6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9tRWxlbWVudHMoZWwpLmxlbmd0aDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZXJlIGFyZSBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlIHByb3ZpZGVkIGVsZW1lbnRcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RG9tRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIG11bHRpcGxlRXhpc3Q6IGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RG9tRWxlbWVudHMoZWwpLmxlbmd0aCA+IDE7XG4gICAgfSxcbn07XG4iLCJpbXBvcnQge2RvbX0gZnJvbSBcIi4uL2RvbVwiO1xuXG4vKipcbiAqIFNob3J0aGFuZC9jb25zaXN0ZW50IGV2ZW50IGxpc3RlbmVyIG1hbmFnZW1lbnRcbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBldmVudHMgPSB7XG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tY2xpY2sgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25DbGljazogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkNsaWNrKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1zdWJtaXQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25TdWJtaXQ6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZlN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZFdmVudFByZXZlbnREZWZhdWx0KGVsLCAnc3VibWl0JywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIE1haW5seSBoZXJlIGZvciBjb25zaXN0ZW5jeVxuICAgICAqXG4gICAgICogU2hvcnRoYW5kIG9uLWNoYW5nZSBoYW5kbGVyXG4gICAgICogRE9FUyBOT1QgcHJldmVudERlZmF1bHQgYmVjYXVzZSB0aGF0J3MgdXN1YWxseSBub3QgZGVzaXJlZFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldERvbUVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tY2hhbmdlIGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZDaGFuZ2U6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RG9tRWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICkgcmV0dXJuIGVsO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBhbmQgcHJldmVudHMgdGhlIGRlZmF1bHQgZXZlbnRzIGZyb20gb2NjdXJyaW5nXG4gICAgICogIChsaWtlIGZvcm1zIHN1Ym1pdHRpbmcgb3IgYSBsaW5rIGJyaW5naW5nIHlvdSB0byBhbm90aGVyIHBhZ2UpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25FdmVudFByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RG9tRWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgW2VdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcblxuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXREb21FbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBbZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5leHBvcnQge3R5cGVfY2hlY2tzLCBzdHJpbmdzLCBkb20sIGV2ZW50c307IiwiLyoqXG4gKiBNZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbW1vbiBzdHJpbmcgbWFuaXB1bGF0aW9uc1xuICpcbiAqIEB0eXBlIHt7Z2V0dGVyOiAoZnVuY3Rpb24oKj0pOiBzdHJpbmcpLCB1Y2ZpcnN0OiAoZnVuY3Rpb24oKj0pOiAoKnxzdHJpbmcpKSwgc2V0dGVyOiAoZnVuY3Rpb24oKj0pOiBzdHJpbmcpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLmdldHRlcignbmFtZScpIHJldHVybnMgJ2dldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnZ2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLnNldHRlcignbmFtZScpIHJldHVybnMgJ3NldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnc2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyB1Y2ZpcnN0KCkgZnVuY3Rpb25hbGl0eSB0byBKUyAobGlrZSBQSFApXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIHVjZmlyc3Q6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbn07IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICpcbiAqIEB0eXBlIHt7aXNEYXRhT2JqZWN0OiB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3R9fVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMsIGJsb2NrX290aGVyX2tleXMsIHRocm93X2Vycm9yKXtcbiAgICAgICAgLy9kZWZhdWx0IGZvciB0aHJvd19lcnJvciBpcyBmYWxzZVxuICAgICAgICB0aHJvd19lcnJvciA9IHR5cGVvZiB0aHJvd19lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiA/IHRocm93X2Vycm9yIDogZmFsc2U7XG5cbiAgICAgICAgLy9kZWZhdWx0IGZvciByZXF1aXJlX2FsbF9rZXlzIGlzIGZhbHNlXG4gICAgICAgIHJlcXVpcmVfYWxsX2tleXMgPSB0eXBlb2YgcmVxdWlyZV9hbGxfa2V5cyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcXVpcmVfYWxsX2tleXMgOiBmYWxzZTtcblxuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZCBvciBpZiBudWxsXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIXZhbHVlICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG4gICAgICAgIC8vaWYgbm90XG4gICAgICAgIGlmKCAhaXNfb2JqZWN0ICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHdlIG5lZWQgdG8gdmVyaWZ5IHRoZSBrZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGtleXMpICkge1xuICAgICAgICAgICAgbGV0IGZvdW5kX2tleSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG1pc3Npbmdfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9rZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5IHdhcyBmb3VuZCwgd2UgZm91bmQgYXRsZWFzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVfa2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kX2tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWYgaXQncyBub3QgZm91bmQsIHdlIGNhbid0IHNheSBhbGwga2V5cyBleGlzdCBpbiB0aGlzIG9iamVjdFxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npbmdfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vaWYgbm90IG9uZSBvZiB0aGUga2V5cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgICBpZiggIWZvdW5kX2tleSApe1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZzogYCtrZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRpZG4ndCBmaW5kIGFsbCB0aGUga2V5c1xuICAgICAgICAgICAgaWYoIHJlcXVpcmVfYWxsX2tleXMgJiYgbWlzc2luZ19rZXlzLmxlbmd0aCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBtaXNzaW5nIGRhdGE6IGArbWlzc2luZ19rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRvbid0IGFsbG93IGFueSBrZXlzIE5PVCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAgICAgICAgaWYoIGJsb2NrX290aGVyX2tleXMgKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5yZWNvZ25pemVkX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoICFrZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVjb2duaXplZF9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIHVucmVjb2duaXplZF9rZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGNvbnRhaW5zIGludmFsaWQgZGF0YTogYCt1bnJlY29nbml6ZWRfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hbGwgY2hlY2tzIHBhc3NlZCEgY29uZ3JhdHMsIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==