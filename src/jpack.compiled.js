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
                window[property] = object.property;
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

        el_array.addEventListener('change', handler);

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

        el_array.removeEventListener('change', handler);

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

        el_array.addEventListener(event, function(e){
            e.preventDefault();
            handler.call(this, [e]);
            return false;
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

        el_array.removeEventListener(event, function(e){
            e.preventDefault();
            handler.call(this, [e]);
            return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3VybC1zZWFyY2gtcGFyYW1zLXBvbHlmaWxsL2luZGV4LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pwYWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL2Fic3RyYWN0X29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9yZXF1ZXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3NpdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvdXNlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGx1Z2luX3dyYXBwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZG9tL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvZXZlbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxpdGllcy9zdHJpbmdzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvdHlwZV9jaGVja3MvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtB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S0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEVBQUUseUJBQXlCLDBDOzs7Ozs7Ozs7Ozs7QUNwSTNCOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUFBO0FBQUE7QUFBMkI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1Qjs7QUFFQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix3Q0FBRzs7QUFFNUI7O0FBRUE7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFHOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHdDQUFHOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSztBQUNMLEU7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwQztBQUNSO0FBQ1I7QUFDTTs7Ozs7Ozs7Ozs7Ozs7QUNIaEM7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLGdCQUFnQjs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0EsMkNBQTJDLGdCQUFnQjtBQUMzRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxnQkFBZ0I7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImpwYWNrLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanBhY2suanNcIik7XG4iLCIvKipcbiAqXG4gKlxuICogQGF1dGhvciBKZXJyeSBCZW5keSA8amVycnlAaWNld2luZ2NjLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICpcbiAqL1xuXG4oZnVuY3Rpb24oc2VsZikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPSAoc2VsZi5VUkxTZWFyY2hQYXJhbXMgJiYgc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCkgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpdGVyYXRvcltzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMU2VhcmNoUGFyYW1zJzogU2VxdWVuY2UgaW5pdGlhbGl6ZXIgbXVzdCBvbmx5IGNvbnRhaW4gcGFpciBlbGVtZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBzZWFyY2hba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihcIj9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWlycyA9IHNlYXJjaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogKFxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLnB1c2godmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgICAgIHJldHVybiAhIXZhbCAmJiAnW29iamVjdCBBcnJheV0nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiZXhwb3J0IHt9OyIsImltcG9ydCAqIGFzIGNvbXBvbmVudHMgZnJvbSAnLi9jb21wb25lbnRzJztcbmltcG9ydCAqIGFzIG9iamVjdHMgZnJvbSAnLi9vYmplY3RzJztcbmltcG9ydCAqIGFzIHBsdWdpbl93cmFwcGVycyBmcm9tICcuL3BsdWdpbl93cmFwcGVycyc7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSAnLi91dGlsaXRpZXMnO1xuXG4vKipcbiAqIE5vdCByZWNvbW1lbmRlZCwgYnV0IG1ha2VzIHRoaW5ncyBzaW1wbGUuIEV2ZXJ5IGNvbXBvbmVudCBpbiBqcGFjayBpcyBzZXQgb24gd2luZG93IGFuZCByZWFkaWx5IGF2YWlsYWJsZSBnbG9iYWxseVxuICpcbiAqIFRoaXMgbWVhbnMgaW5zdGVhZCBvZiBjYWxsaW5nIGpwYWNrLm9iamVjdHMudXNlci5nZXRJZCgpLCB5b3UgY2FuIGp1c3QgY2FsbCB1c2VyLmdldElkKClcbiAqL1xuY29uc3QgZ29HbG9iYWwgPSBmdW5jdGlvbigpe1xuICAgIC8vbG9vcCB0aHJvdWdoIGNvbXBvbmVudHMsIG9iamVjdHMsIHBsdWdpbl93cmFwcGVycywgYW5kIHV0aWxpdGllc1xuICAgIFtjb21wb25lbnRzLG9iamVjdHMscGx1Z2luX3dyYXBwZXJzLHV0aWxpdGllc10uZm9yRWFjaChmdW5jdGlvbihvYmplY3Qpe1xuICAgICAgICAvL2ZvciBlYWNoIGNvbXBvbmVudCB3aXRoaW4gdGhvc2VcbiAgICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgICAvL2dldCBhY3R1YWwgcHJvcGVydGllc1xuICAgICAgICAgICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICAgICAgICAvL3NldCB0aGVtIG9uIHdpbmRvdyBzbyB0aGV5J3JlIGF2YWlsYWJsZSBnbG9iYWxseVxuICAgICAgICAgICAgICAgIC8vZXhhbXBsZTogb2JqZWN0cy51c2VyIGJlY29tZXMgd2luZG93LnVzZXJcbiAgICAgICAgICAgICAgICAvL3VzYWdlIGFmdGVyIHJ1bm5pbmcgdGhpczogdXNlci5nZXRJZCgpXG4gICAgICAgICAgICAgICAgd2luZG93W3Byb3BlcnR5XSA9IG9iamVjdC5wcm9wZXJ0eTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGpwYWNrID0ge2NvbXBvbmVudHMsIG9iamVjdHMsIHBsdWdpbl93cmFwcGVycywgdXRpbGl0aWVzfTtcblxuLy9zZXQganBhY2sgZm9yIHRoZSB3b3JsZCB0byB1c2UgYW5kIGFkZCB0aGUgZ29HbG9iYWwgbWV0aG9kXG5nbG9iYWwuanBhY2sgPSB7Li4uanBhY2ssIC4uLntnb0dsb2JhbDogZ29HbG9iYWx9fTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzLCBzdHJpbmdzfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBhYnN0cmFjdF9vYmplY3QgPSB7XG4gICAgLy9rZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zICh1c2VkIHRvIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGUgaXQgd2hlbiB5b3UgcnVuIHBvcHVsYXRlKGRhdGEpO1xuICAgIC8vb3ZlcndyaXRlIHRoaXMgaW4gZWFjaCBleHRlbmRpbmcgY2xhc3MhXG4gICAga2V5czogW10sXG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZXMgdGhlIHVzZXIgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcG9wdWxhdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMua2V5cywgZmFsc2UsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZm9yIGVhY2gga2V5IHRoYXQgaXMgc2V0IGluIHRoZSBkYXRhIG9iamVjdCwgc2V0IHRoZSB2YWx1ZSBvbiB0aGlzXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCJpbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7c2l0ZX0gZnJvbSBcIi4vc2l0ZVwiO1xuaW1wb3J0IHt1c2VyfSBmcm9tIFwiLi91c2VyXCI7XG5cbmV4cG9ydCB7cmVxdWVzdCwgc2l0ZSwgdXNlcn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKlxuICogQHR5cGUge3tnZXREb21haW46IChmdW5jdGlvbigpOiBzdHJpbmcpLCBnZXREb21haW5XaXRoUHJvdG9jb2w6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBxdWVyeTogVVJMU2VhcmNoUGFyYW1zLCBpc0h0dHBzOiAoZnVuY3Rpb24oKTogYm9vbGVhbiksIGdldFVSSTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGdldEZ1bGxVUkw6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBhcHBlbmRTbGFzaDogKGZ1bmN0aW9uKCk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1ZXJ5IHN0cmluZyB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFVSTFNlYXJjaFBhcmFtc1xuICAgICAqL1xuICAgIHF1ZXJ5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHJlcXVlc3Qgd2FzIG1hZGUgc2VjdXJlbHkgb3ZlciBTU0wgKGh0dHBzIGluc3RlYWQgb2YgaHR0cClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSHR0cHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgfHwgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbldpdGhQcm90b2NvbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJJXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkkgd2l0aCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSVdpdGhRdWVyeVN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgVVJMXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20vcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGdWxsVVJMOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbGFzaCB0byBhIHN0cmluZyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tIGJlY29tZXMgaHR0cHM6Ly9teS1kb21haW4uY29tL1xuICAgICAqIEV4YW1wbGU6IC9teS1wcm9kdWN0IGJlY29tZXMgL215LXByb2R1Y3QvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhcHBlbmRTbGFzaDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG59OyIsImltcG9ydCB7YWJzdHJhY3Rfb2JqZWN0fSBmcm9tIFwiLi4vYWJzdHJhY3Rfb2JqZWN0XCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xubGV0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG4vL292ZXJyaWRlIGRlZmF1bHRzIGZyb20gJHNpdGUgKGlmIGRlZmluZWQpXG5pZiggdHlwZW9mICRzaXRlID09PSBcIm9iamVjdFwiICkgc2l0ZV9kZWZhdWx0cyA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi4kc2l0ZX07XG5cbi8qKlxuICpcbiAqIFByb3ZpZGVzIHlvdSB3aXRoIGVhc3kgYWNjZXNzIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHdlYnNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIEB0eXBlIHt7c2V0TmFtZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgZ2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCopOiBudWxsKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6ICopLCBwb3B1bGF0ZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgc2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCosICopOiBzaXRlKSwgbmFtZTogbnVsbCwgc2V0SWQ6IChmdW5jdGlvbigqKTogc2l0ZSksIGdldElkOiAoZnVuY3Rpb24oKTogKiksIGlkOiBudWxsLCBjb25maWc6IChzaXRlX2RlZmF1bHRzLmNvbmZpZ3x7fSksIGdldENvbmZpZzogKGZ1bmN0aW9uKCk6ICopLCBzZXRDb25maWc6IChmdW5jdGlvbigqKTogc2l0ZSl9fVxuICovXG5leHBvcnQgY29uc3Qgc2l0ZSA9IHsuLi5hYnN0cmFjdF9vYmplY3QsIC4uLntcbiAgICBrZXlzOiBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ10sXG5cbiAgICBnZXRJZDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfSxcbiAgICBzZXRJZDogZnVuY3Rpb24oaWQpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL2dldHMgdGhlIHdlYnNpdGUncyBuYW1lXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9LFxuICAgIHNldE5hbWU6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFsbCBjb25maWcgZGF0YVxuICAgIGdldENvbmZpZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBjb25maWcgZGF0YSB1c2luZyB0aGUgcHJvdmlkZWQgb2JqZWN0XG4gICAgc2V0Q29uZmlnOiBmdW5jdGlvbihjb25maWcpe1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbiBpbmRpdmlkdWFsIGNvbmZpZyB2YWx1ZSBvciBudWxsIGlmIGl0J3Mgbm90IGRlZmluZWRcbiAgICBnZXRDb25maWdJdGVtOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuY29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5jb25maWdba2V5XTtcbiAgICB9LFxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtOiBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuY29uZmlnLmtleSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufX0ucG9wdWxhdGUoc2l0ZV9kZWZhdWx0cyk7IiwiaW1wb3J0IHthYnN0cmFjdF9vYmplY3R9IGZyb20gXCIuLi9hYnN0cmFjdF9vYmplY3RcIjtcblxuLy9jcmVhdGUgYW4gb2JqZWN0IG9mIGRlZmF1bHQgdmFsdWVzXG5sZXQgdXNlcl9kZWZhdWx0cyA9IHtcbiAgICBpZDogbnVsbCxcbiAgICBpc0d1ZXN0OmZhbHNlLFxuICAgIGlzQWRtaW46ZmFsc2UsXG4gICAgdXNlcm5hbWU6bnVsbCxcbiAgICBmbmFtZTpudWxsLFxuICAgIGxuYW1lOm51bGwsXG4gICAgZW1haWw6bnVsbCxcbiAgICBwaG9uZTpudWxsLFxuICAgIHBlcm1pc3Npb25zOltdLFxuICAgIGFkZGl0aW9uYWxEYXRhOnt9LFxufTtcbi8vb3ZlcnJpZGUgZGVmYXVsdHMgZnJvbSAkdXNlciAoaWYgZGVmaW5lZClcbmlmKCB0eXBlb2YgJHVzZXIgPT09IFwib2JqZWN0XCIgKSB1c2VyX2RlZmF1bHRzID0gey4uLnVzZXJfZGVmYXVsdHMsIC4uLiR1c2VyfTtcblxuLyoqXG4gKlxuICogUHJvdmlkZXMgeW91IHdpdGggZWFzeSBhY2Nlc3MgdG8gdXNlciBpbmZvcm1hdGlvbiBhbmQgYWxsb3dzIHlvdSB0byBwZXJmb3JtIHBlcm1pc3Npb24gY2hlY2tzXG4gKlxuICogQHR5cGUge3tnZXRJc0d1ZXN0OiAoZnVuY3Rpb24oKTogKiksIGdldFBob25lOiAoZnVuY3Rpb24oKTogKiksIGdldExuYW1lOiAoZnVuY3Rpb24oKTogKiksIGdldE5hbWU6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBpc0d1ZXN0OiBudWxsLCBzZXRJc0d1ZXN0OiAoZnVuY3Rpb24oKik6IHVzZXIpLCBhZGRQZXJtaXNzaW9uOiAoZnVuY3Rpb24oKj0pOiB1c2VyKSwgZ2V0SWQ6IChmdW5jdGlvbigpOiAqKSwgc2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigqKTogdXNlciksIHNldFBlcm1pc3Npb25zOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXRVc2VybmFtZTogKGZ1bmN0aW9uKCk6ICopLCBsbmFtZTogbnVsbCwgc2V0Rm5hbWU6IChmdW5jdGlvbigqKTogdXNlciksIGdldEZuYW1lOiAoZnVuY3Rpb24oKTogKiksIHBlcm1pc3Npb25zOiBBcnJheSwgc2V0SWQ6IChmdW5jdGlvbigqKTogdXNlciksIGlkOiBudWxsLCBhZGRpdGlvbmFsRGF0YTogQXJyYXksIGVtYWlsOiAobnVsbHwqKSwgZm5hbWU6IG51bGwsIHNldFVzZXJuYW1lOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXRMbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGVybWlzc2lvbnM6IChmdW5jdGlvbigpOiAqKSwgc2V0UGhvbmU6IChmdW5jdGlvbigqKTogdXNlciksIGlzQWRtaW46IG51bGwsIHJlbW92ZVBlcm1pc3Npb246IChmdW5jdGlvbigqKTogdXNlciksIHNldElzQWRtaW46IChmdW5jdGlvbigqKTogdXNlciksIHBvcHVsYXRlOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXRJc0FkbWluOiAoZnVuY3Rpb24oKTogKiksIHNldEVtYWlsOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBwaG9uZTogbnVsbCwgaGFzUGVybWlzc2lvbjogKGZ1bmN0aW9uKCo9KTogYm9vbGVhbiksIGdldEVtYWlsOiAoZnVuY3Rpb24oKSksIHVzZXJuYW1lOiBudWxsfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZXIgPSB7Li4uYWJzdHJhY3Rfb2JqZWN0LCAuLi57XG4gICAgLy91c2VyIG9iamVjdCBrZXlzXG4gICAga2V5czogWydpZCcsICdpc0d1ZXN0JywgJ2lzQWRtaW4nLCAndXNlcm5hbWUnLCAnZm5hbWUnLCAnbG5hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAncGVybWlzc2lvbnMnLCAnYWRkaXRpb25hbERhdGEnXSxcblxuICAgIHNldElkOiBmdW5jdGlvbihpZCl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRJZDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfSxcblxuICAgIHNldElzR3Vlc3Q6IGZ1bmN0aW9uKGlzX2d1ZXN0KXtcbiAgICAgICAgdGhpcy5pc0d1ZXN0ID0gaXNfZ3Vlc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0SXNHdWVzdDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNHdWVzdDtcbiAgICB9LFxuXG4gICAgc2V0SXNBZG1pbjogZnVuY3Rpb24oaXNfYWRtaW4pe1xuICAgICAgICB0aGlzLmlzQWRtaW4gPSBpc19hZG1pbjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRJc0FkbWluOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5pc0FkbWluO1xuICAgIH0sXG5cbiAgICBzZXRVc2VybmFtZTogZnVuY3Rpb24odXNlcm5hbWUpe1xuICAgICAgICB0aGlzLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0VXNlcm5hbWU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJuYW1lO1xuICAgIH0sXG5cbiAgICBnZXRGbmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZm5hbWU7XG4gICAgfSxcbiAgICBzZXRGbmFtZTogZnVuY3Rpb24oZmlyc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuZm5hbWUgPSBmaXJzdF9uYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0TG5hbWU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmxuYW1lO1xuICAgIH0sXG4gICAgc2V0TG5hbWU6IGZ1bmN0aW9uKGxhc3RfbmFtZSl7XG4gICAgICAgIHRoaXMubG5hbWUgPSBsYXN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGAke3VzZXIuZ2V0Rm5hbWUoKX0gJHt1c2VyLmdldExuYW1lKCl9YDtcbiAgICB9LFxuXG4gICAgZ2V0RW1haWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmVtYWlsO1xuICAgIH0sXG4gICAgc2V0RW1haWw6IGZ1bmN0aW9uKGVtYWlsKXtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGhvbmU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBob25lO1xuICAgIH0sXG4gICAgc2V0UGhvbmU6IGZ1bmN0aW9uKHBob25lKXtcbiAgICAgICAgdGhpcy5waG9uZSA9IHBob25lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0UGVybWlzc2lvbnM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnBlcm1pc3Npb25zO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBwZXJtaXNzaW9ucyBmb3IgdGhpcyB1c2VyXG4gICAgc2V0UGVybWlzc2lvbnM6IGZ1bmN0aW9uKHBlcm1pc3Npb25zKXtcbiAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IHBlcm1pc3Npb25zO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vYWRkcyBhIHNpbmdsZSBwZXJtaXNzaW9uIHRvIHRoaXMgdXNlclxuICAgIGFkZFBlcm1pc3Npb246IGZ1bmN0aW9uKHBlcm1pc3Npb24pe1xuICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9SZW1vdmVzIGEgc2luZ2xlIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVzZXJcbiAgICByZW1vdmVQZXJtaXNzaW9uOiBmdW5jdGlvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgdGhpcy5zZXRQZXJtaXNzaW9ucyh0aGlzLnBlcm1pc3Npb25zLmZpbHRlcihmdW5jdGlvbihlbGUpe1xuICAgICAgICAgICAgcmV0dXJuIGVsZSAhPT0gcGVybWlzc2lvbjtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIC8vcmV0dXJucyB0cnVlIGlmIHRoZSB1c2VyIGhhcyB0aGUgcHJvdmlkZWQgcGVybWlzc2lvblxuICAgIGhhc1Blcm1pc3Npb246IGZ1bmN0aW9uKHBlcm1pc3Npb24pe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQZXJtaXNzaW9ucygpLmluY2x1ZGVzKHBlcm1pc3Npb24pO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgZ2V0QWRkaXRpb25hbERhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZGl0aW9uYWxEYXRhO1xuICAgIH0sXG4gICAgLy9zZXRzIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIHNldEFkZGl0aW9uYWxEYXRhOiBmdW5jdGlvbihhZGRpdGlvbmFsX2RhdGEpe1xuICAgICAgICB0aGlzLmFkZGl0aW9uYWxEYXRhID0gYWRkaXRpb25hbF9kYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufX0ucG9wdWxhdGUodXNlcl9kZWZhdWx0cyk7IC8vaW1tZWRpYXRlbHkgcG9wdWxhdGUgZnJvbSB1c2VyX2RlZmF1bHRzIiwiZXhwb3J0IHt9IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKlxuICogQHR5cGUge3tnZXREb21FbGVtZW50czogKGZ1bmN0aW9uKCo9LCAqPSk6IEFycmF5KSwgZ2V0RG9tRWxlbWVudDogZG9tLmdldERvbUVsZW1lbnQsIGV4aXN0czogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKSwgbXVsdGlwbGVFeGlzdDogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKX19XG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldERvbUVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lLCBlcnJvcl9vbl9tdWx0aXBsZSl7XG4gICAgICAgIGVsID0gdGhpcy5nZXREb21FbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGVsLmxlbmd0aCA+IDEgKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IFwiVG9vIG1hbnkgRE9NIGVsZW1lbnRzIGZvdW5kIGluIGdldERvbUVsZW1lbnQgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RG9tRWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lKXtcbiAgICAgICAgLy9kZWZhdWx0IHRvIGZhbHNlXG4gICAgICAgIGVycm9yX29uX25vbmUgPSB0eXBlb2YgZXJyb3Jfb25fbm9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogZXJyb3Jfb25fbm9uZTtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWQgb3IgZG9lc24ndCBleGlzdFxuICAgICAgICBpZiggdHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbCApe1xuICAgICAgICAgICAgLy9kbyBub3RoaW5nLCBkZWZhdWx0IGlzIGVtcHR5IGFycmF5XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIHN0cmluZyB3YXMgcHJvdmlkZWRcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBOb2RlTGlzdCByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIGpxdWVyeSBvYmplY3Qgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBFbGVtZW50IG9yIEhUTUxEb2N1bWVudCAoYSBzaW5ndWxhciBET00gZWxlbWVudClcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgdmFsdWUgcHJvdmlkZWQgdG8gZ2V0RG9tRWxlbWVudHM6IFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKXtcbiAgICAgICAgICAgIHRocm93IFwiRmFpbGVkIHRvIGdldCBhcnJheSBvZiBET00gZWxlbWVudHMgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaG9wZWZ1bGx5IGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgZWwgaXMgYSBzaW5ndWxhciBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgcHJvdmlkZWQgZWxlbWVudCBleGlzdHNcbiAgICAgKlxuICAgICAqIFBhc3MgYW55dGhpbmcgeW91IHdhbnQsIGl0IHVzZXMgZ2V0RG9tRWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZXhpc3RzOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvbUVsZW1lbnRzKGVsKS5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgaW5zdGFuY2VzIG9mIHRoZSBwcm92aWRlZCBlbGVtZW50XG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldERvbUVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBtdWx0aXBsZUV4aXN0OiBmdW5jdGlvbihlbCl7XG4gICAgICAgIHJldHVybiB0aGlzLmdldERvbUVsZW1lbnRzKGVsKS5sZW5ndGggPiAxO1xuICAgIH0sXG59O1xuIiwiaW1wb3J0IHtkb219IGZyb20gXCIuLi9kb21cIjtcblxuLyoqXG4gKiBTaG9ydGhhbmQvY29uc2lzdGVudCBldmVudCBsaXN0ZW5lciBtYW5hZ2VtZW50XG4gKlxuICovXG5leHBvcnQgY29uc3QgZXZlbnRzID0ge1xuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLWNsaWNrIGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub25FdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZDbGljayhlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdjbGljaycsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG9ydGhhbmQgb24tc3VibWl0IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvZmZTdWJtaXQ6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub2ZmRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ3N1Ym1pdCcsIGhhbmRsZXIpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBNYWlubHkgaGVyZSBmb3IgY29uc2lzdGVuY3lcbiAgICAgKlxuICAgICAqIFNob3J0aGFuZCBvbi1jaGFuZ2UgaGFuZGxlclxuICAgICAqIERPRVMgTk9UIHByZXZlbnREZWZhdWx0IGJlY2F1c2UgdGhhdCdzIHVzdWFsbHkgbm90IGRlc2lyZWRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNoYW5nZTogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXREb21FbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgaGFuZGxlcik7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIG9uLWNoYW5nZSBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmQ2hhbmdlOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldERvbUVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBoYW5kbGVyKTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEF0dGFjaGVzIGFuIGV2ZW50IGhhbmRsZXIgYW5kIHByZXZlbnRzIHRoZSBkZWZhdWx0IGV2ZW50cyBmcm9tIG9jY3VycmluZ1xuICAgICAqICAobGlrZSBmb3JtcyBzdWJtaXR0aW5nIG9yIGEgbGluayBicmluZ2luZyB5b3UgdG8gYW5vdGhlciBwYWdlKVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9uRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldERvbUVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApe1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxfYXJyYXkuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgW2VdKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFuIGV2ZW50IGhhbmRsZXIgd2l0aCBwcmV2ZW50RGVmYXVsdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGV2ZW50XG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkV2ZW50UHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG5cbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RG9tRWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBlbF9hcnJheS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBbZV0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcbn07IiwiaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4vdHlwZV9jaGVja3NcIjtcbmltcG9ydCB7c3RyaW5nc30gZnJvbSBcIi4vc3RyaW5nc1wiO1xuaW1wb3J0IHtkb219IGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuL2V2ZW50c1wiO1xuXG5leHBvcnQge3R5cGVfY2hlY2tzLCBzdHJpbmdzLCBkb20sIGV2ZW50c307IiwiLyoqXG4gKiBNZXRob2RzIGZvciBwZXJmb3JtaW5nIGNvbW1vbiBzdHJpbmcgbWFuaXB1bGF0aW9uc1xuICpcbiAqIEB0eXBlIHt7Z2V0dGVyOiAoZnVuY3Rpb24oKj0pOiBzdHJpbmcpLCB1Y2ZpcnN0OiAoZnVuY3Rpb24oKj0pOiAoKnxzdHJpbmcpKSwgc2V0dGVyOiAoZnVuY3Rpb24oKj0pOiBzdHJpbmcpfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIGdldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLmdldHRlcignbmFtZScpIHJldHVybnMgJ2dldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnZ2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHNldHRlciBtZXRob2QgbmFtZSBmcm9tIGEgc3RyaW5nXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBzdHJpbmdzLnNldHRlcignbmFtZScpIHJldHVybnMgJ3NldE5hbWUnXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBzZXR0ZXI6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiAnc2V0Jyt0aGlzLnVjZmlyc3Qoc3RyaW5nKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWRkcyB1Y2ZpcnN0KCkgZnVuY3Rpb25hbGl0eSB0byBKUyAobGlrZSBQSFApXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVybnMgeyp8c3RyaW5nfVxuICAgICAqL1xuICAgIHVjZmlyc3Q6IGZ1bmN0aW9uKHN0cmluZyl7XG4gICAgICAgIHJldHVybiBzdHJpbmcgJiYgc3RyaW5nWzBdLnRvVXBwZXJDYXNlKCkrc3RyaW5nLnNsaWNlKDEpO1xuICAgIH1cbn07IiwiLyoqXG4gKiBNZXRob2RzIGZvciBjaGVja2luZyBkYXRhIHR5cGVzIHdpdGggbW9yZSBzcGVjaWZpY2l0eVxuICpcbiAqIEB0eXBlIHt7aXNEYXRhT2JqZWN0OiB0eXBlX2NoZWNrcy5pc0RhdGFPYmplY3R9fVxuICovXG5leHBvcnQgY29uc3QgdHlwZV9jaGVja3MgPSB7XG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyBpZiBhIHByb3ZpZGVkIHZhbHVlIGlzIGFuIG9iamVjdFxuICAgICAqXG4gICAgICogT3B0aW9uYWxseSBtdXN0IGNvbnRhaW4gYXQgbGVhc3QgMSBwcm92aWRlZCBrZXkgaW4ga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgbXVzdCBoYXZlIGFsbCBrZXlzXG4gICAgICogT3B0aW9uYWxseSBjYW5ub3QgaGF2ZSBhbnkga2V5cyB0aGF0IGFyZW4ndCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAqIE9wdGlvbmFsbHkgdGhyb3dzIGFuIGVycm9yIGlmIGFueSBjaGVjayBmYWlsc1xuICAgICAqXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHBhcmFtIGtleXMgLSBkZWZhdWx0OiBkb24ndCB2ZXJpZnkga2V5c1xuICAgICAqIEBwYXJhbSByZXF1aXJlX2FsbF9rZXlzIC0gZGVmYXVsdDogZmFsc2VcbiAgICAgKiBAcGFyYW0gYmxvY2tfb3RoZXJfa2V5cyAtIGRlZmF1bHQgZmFsc2VcbiAgICAgKiBAcGFyYW0gdGhyb3dfZXJyb3IgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzRGF0YU9iamVjdDogZnVuY3Rpb24odmFsdWUsIGtleXMsIHJlcXVpcmVfYWxsX2tleXMsIGJsb2NrX290aGVyX2tleXMsIHRocm93X2Vycm9yKXtcbiAgICAgICAgLy9kZWZhdWx0IGZvciB0aHJvd19lcnJvciBpcyBmYWxzZVxuICAgICAgICB0aHJvd19lcnJvciA9IHR5cGVvZiB0aHJvd19lcnJvciAhPT0gXCJ1bmRlZmluZWRcIiA/IHRocm93X2Vycm9yIDogZmFsc2U7XG5cbiAgICAgICAgLy9kZWZhdWx0IGZvciByZXF1aXJlX2FsbF9rZXlzIGlzIGZhbHNlXG4gICAgICAgIHJlcXVpcmVfYWxsX2tleXMgPSB0eXBlb2YgcmVxdWlyZV9hbGxfa2V5cyAhPT0gXCJ1bmRlZmluZWRcIiA/IHJlcXVpcmVfYWxsX2tleXMgOiBmYWxzZTtcblxuICAgICAgICAvL2ZvciBlcnJvciBtZXNzYWdlc1xuICAgICAgICB2YXIgc3RyaW5naWZpZWRfdmFsID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuXG4gICAgICAgIC8vZGVmYXVsdCBlcnJvcl9tc2dcbiAgICAgICAgY29uc3QgZXJyb3JfbXNnID0gYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBub3QgYW4gb2JqZWN0YDtcblxuICAgICAgICAvL2lmIG5vdCBwcm92aWRlZCBvciBpZiBudWxsXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgfHwgIXZhbHVlICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2RldGVybWluZSBpZiBpdCBpcyBhbiBvYmplY3RcbiAgICAgICAgY29uc3QgaXNfb2JqZWN0ID0gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiO1xuXG4gICAgICAgIC8vaWYgbm90XG4gICAgICAgIGlmKCAhaXNfb2JqZWN0ICl7XG4gICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBlcnJvcl9tc2c7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvL2lmIHdlIG5lZWQgdG8gdmVyaWZ5IHRoZSBrZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zXG4gICAgICAgIGlmKCBBcnJheS5pc0FycmF5KGtleXMpICkge1xuICAgICAgICAgICAgbGV0IGZvdW5kX2tleSA9IGZhbHNlO1xuICAgICAgICAgICAgbGV0IG1pc3Npbmdfa2V5cyA9IFtdO1xuXG4gICAgICAgICAgICBjb25zdCB2YWx1ZV9rZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXG4gICAgICAgICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgLy9pZiB0aGUga2V5IHdhcyBmb3VuZCwgd2UgZm91bmQgYXRsZWFzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiggdmFsdWVfa2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kX2tleSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vaWYgaXQncyBub3QgZm91bmQsIHdlIGNhbid0IHNheSBhbGwga2V5cyBleGlzdCBpbiB0aGlzIG9iamVjdFxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIG1pc3Npbmdfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vaWYgbm90IG9uZSBvZiB0aGUga2V5cyB3ZXJlIGZvdW5kXG4gICAgICAgICAgICBpZiggIWZvdW5kX2tleSApe1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gZG9lcyBub3QgY29udGFpbiBhdCBsZWFzdCBvbmUgb2YgdGhlIGZvbGxvd2luZzogYCtrZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRpZG4ndCBmaW5kIGFsbCB0aGUga2V5c1xuICAgICAgICAgICAgaWYoIHJlcXVpcmVfYWxsX2tleXMgJiYgbWlzc2luZ19rZXlzLmxlbmd0aCApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBpcyBtaXNzaW5nIGRhdGE6IGArbWlzc2luZ19rZXlzLmpvaW4oJywgJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2lmIHdlIGRvbid0IGFsbG93IGFueSBrZXlzIE5PVCBpbiB0aGUga2V5cyBhcnJheVxuICAgICAgICAgICAgaWYoIGJsb2NrX290aGVyX2tleXMgKXtcbiAgICAgICAgICAgICAgICBsZXQgdW5yZWNvZ25pemVkX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgICAgIHZhbHVlX2tleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoICFrZXlzLmluY2x1ZGVzKGtleSkgKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVucmVjb2duaXplZF9rZXlzLnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYoIHVucmVjb2duaXplZF9rZXlzLmxlbmd0aCApe1xuICAgICAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGNvbnRhaW5zIGludmFsaWQgZGF0YTogYCt1bnJlY29nbml6ZWRfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9hbGwgY2hlY2tzIHBhc3NlZCEgY29uZ3JhdHMsIGl0J3MgYW4gb2JqZWN0XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn07Il0sInNvdXJjZVJvb3QiOiIifQ==