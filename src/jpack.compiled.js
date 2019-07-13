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

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var mergeConfig = __webpack_require__(/*! ./core/mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var buildURL = __webpack_require__(/*! ../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");
var mergeConfig = __webpack_require__(/*! ./mergeConfig */ "./node_modules/axios/lib/core/mergeConfig.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/mergeConfig.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/mergeConfig.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

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
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigation */ "./src/components/navigation/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return _navigation__WEBPACK_IMPORTED_MODULE_0__["navigation"]; });





/***/ }),

/***/ "./src/components/navigation/index.js":
/*!********************************************!*\
  !*** ./src/components/navigation/index.js ***!
  \********************************************/
/*! exports provided: navigation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigation", function() { return navigation; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/dom */ "./src/utilities/dom/index.js");
/* harmony import */ var _objects_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../objects/request */ "./src/objects/request/index.js");
/* harmony import */ var _utilities_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utilities/events */ "./src/utilities/events/index.js");





/**
 * Allows you to simulate a page change by using an XHR request to grab content and replace it on the current page
 *
 * Automatically updates the browser's history, swaps out meta tags, updates the title, and more
 *
 * Use onLoad and onUnload hooks to add additional logic for things like triggering a google analytics page view
 *  or scrolling to the top of the new page
 *
 * @type {{triggerOnLoad: (function(*=, *=): navigation), setPassthroughData: (function(*): navigation), _incomingElementSelector: string, setLoaderDelay: (function(*=): navigation), fullReload: navigation.fullReload, triggerUnload: (function(*=): navigation), reload: (function(*=): navigation), load: navigation.load, clearPassthroughData: (function(): navigation), replacePageContent(*=, *=, *=, *=, *=): *, hideLoader: (function(): navigation), loaderEnabled: boolean, showLoader: (function(): navigation), setReplaceElement: navigation.setReplaceElement, _loaderDelay: number, getReplaceElement: (function(): string), redirect: navigation.redirect, getLoaderDelay: (function(): number), onUnload: (function(*=): navigation), initHistoryHandlers: (function(): navigation), _passthroughData: null, setIncomingElement: navigation.setIncomingElement, parseHTML(*=, *=): {metas: HTMLCollectionOf<HTMLElementTagNameMap, string[]>, route: (*|any|Element), links: HTMLCollectionOf<HTMLElementTagNameMap, string[]>, html: string, title: string, body_classes: DOMTokenList}, setTitle: (function(*): navigation), getPassThroughData: (function(*): null), onNavigationFailure: (function(*=): navigation), _replaceElementSelector: string, getRouteFromMeta: (function(*=): (any | Element)), getLoaderEl: navigation.getLoaderEl, onLoad: (function(*=): navigation), triggerNavigationFailure: (function(*=): navigation), getIncomingElement: (function(): string)}}
 */
const navigation = {

    /**
     * Stores data to be provided to the onload callback after navigating to another page using .load()
     */
    _passthroughData: null,

    /**
     * Sets data to be provided to the next page
     *  this data persists until cleared manually and will be provided to ALL subsequent onLoad handlers
     *   (or it can be grabbed manually from this object at any time)
     *
     * @param data
     * @returns {navigation}
     */
    setPassthroughData: function(data)
    {
        this._passthroughData = data;
        return this;
    },

    /**
     * Clears data provided for the next page
     *
     * @returns {navigation}
     */
    clearPassthroughData: function()
    {
        this.setPassthroughData(null);
        return this;
    },

    /**
     * Returns any data that has been set for passing to subsequent pages
     *
     * @param data
     * @returns {null}
     */
    getPassThroughData: function(data){
        return this._passthroughData;
    },

    /**
     * The element in the response which contains the HTML you want to pull and put on the current page
     */
    _incomingElementSelector: 'body',

    /**
     * Sets the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @param selector_string
     */
    setIncomingElement: function(selector_string){
        if( typeof selector_string !== 'string' ) throw `${selector_string} is not a string`;
        this._incomingElementSelector = selector_string;
    },

    /**
     * Returns the element in the response which contains the HTML you want to pull and put on the current page
     *
     * @returns {string}
     */
    getIncomingElement: function(){
        return this._incomingElementSelector;
    },

    /**
     * This element on the current page will be replaced with incoming HTML
     */
    _replaceElementSelector: 'body',

    /**
     * Sets the selector string for the element on the current page that will be replaced with incoming HTML
     *
     * @param selector_string
     */
    setReplaceElement: function(selector_string){
        if( typeof selector_string !== 'string' ) throw `${selector_string} is not a string`;
        this._replaceElementSelector = selector_string;
    },

    /**
     * Returns the selectors string for the element on the current page that will be replaced with incoming HTML
     *
     * @returns {string}
     */
    getReplaceElement: function(){
        return this._replaceElementSelector;
    },

    /**
     * Grabs HTML from a URL and replaces content on the current page
     *
     * 1) Shows a loader (if enabled)
     * 2) Requests content from the provided URL
     * 3) Replaces it on the page (and all the magic replacePageContent does, see comments on that method below)
     * 4) If there's a callback provided, it'll be run afterwards (it receives the newly replaced element as a param)
     *
     * On error, it triggers a navigation failure and provides the error message
     *
     * @param url
     * @param callback
     * @param incoming_el
     * @param replace_el
     * @param push_state
     */
    load: function(url, callback, incoming_el, replace_el, push_state){
        if( typeof url !== 'string' ) throw `Provided URL (${url}) is not a string`;

        incoming_el = typeof incoming_el == 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;
        push_state = typeof push_state === 'undefined' ? true : push_state;

        if( typeof incoming_el !== 'string' ) throw `Provided incoming_el (${incoming_el}) is not a string`;
        if( typeof replace_el !== 'string' ) throw `Provided replace_el (${replace_el}) is not a string`;

        navigation.showLoader();

        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url).then(function (response) {
            navigation.hideLoader();

            navigation.replacePageContent(response.data, url, incoming_el, replace_el, push_state);

            //if a callback was provided, run it and provide the parent element
            if (typeof callback === 'function') {
                //wait for the onunload callbacks to run and the new content to be put on the page first
                window.setTimeout(function(){
                    callback(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), parent_el, navigation.getPassThroughData());
                }, 105);
            }
        })
        .catch(function (error) {
            navigation.hideLoader();
            navigation.triggerNavigationFailure(error);
            throw error;
        });
    },

    /**
     * Whether or not the loader at the top is enabled to display on slow requests
     */
    loaderEnabled: true,

    //how long to delay during a slow request before showing the loader (in milliseconds)
    _loaderDelay: 300,

    /**
     * Sets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * Set to 0 if you want it to always show
     *
     * @param delay_in_ms
     * @returns {navigation}
     */
    setLoaderDelay: function(delay_in_ms){
        if( typeof delay_in_ms !== "number" ) throw `${delay_in_ms} is not an integer`;
        this._loaderDelay = delay_in_ms;
        return this;
    },

    /**
     * Gets how long to delay during a slow request before showing the loader (in milliseconds)
     *
     * @returns {number}
     */
    getLoaderDelay: function(){
        return this._loaderDelay;
    },

    /**
     * Classes for the loader
     * Defaults are for bootstrap (with the exception of page-navigation-loader)
     */
    _loaderClasses: 'progress page-navigation-loader',
    _loaderInnerDivClasses: 'progress-bar progress-bar-striped progress-bar-animated',

    /**
     * If enabled, adds a loader to the page and caches a reference to it, then returns that reference
     *
     * @returns Element
     */
    getLoaderEl: function(){
        if( !this.loaderEnabled ) return;
        if( navigation.navLoaderCached ) return navigation.navLoaderCached;

        //prepend the loader elements
        let div = document.createElement('div');
        div.classList = this._loaderClasses;
        let inner_div = document.createElement('div');
        inner_div.classList = this._loaderInnerDivClasses;
        div.append(inner_div);
        document.body.prepend(div);

        //get and cache a reference to it for future requests
        navigation.navLoaderCached = _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement('.page-navigation-loader');

        return navigation.navLoaderCached;
    },

    /**
     * Shows a loader at the top of the page if the request takes more than the delay set above to complete
     */
    showLoader: function(){
        if( !this.loaderEnabled ) return;

        navigation.loader_timeout = window.setTimeout(function(){
            navigation.getLoaderEl().classList.add('active');
        }, this.getLoaderDelay());

        return this;
    },

    /**
     * Hides the loader at the top of the page
     */
    hideLoader: function(){
        if( !this.loaderEnabled ) return;

        //if the loader still hasn't shown yet, prevent it because the request was very fast
        window.clearTimeout(navigation.loader_timeout);

        //hide the loader
        navigation.getLoaderEl().classList.remove('active');

        return this;
    },

    /**
     * Parses the incoming HTML to grab key components like meta tags and the inner content of the parent element
     *
     * If no parent element is provided, it will just return the provided html
     *
     * @param html
     * @param parent_el
     * @returns {{metas: HTMLCollectionOf<HTMLElementTagNameMap[string]>, route: (*|any|Element), links: HTMLCollectionOf<HTMLElementTagNameMap[string]>, html: string, title: string, body_classes: DOMTokenList}}
     */
    parseHTML(html, parent_el)
    {
        //default to null if not provided
        parent_el = typeof parent_el === 'undefined' ? null : parent_el;

        //must be a string or null
        if( typeof parent_el !== 'string' && parent_el !== null ) throw `Provided parent_el (${parent_el}) is not a string or null`;

        //parse the incoming dom
        var parser = new DOMParser();
        var doc = parser.parseFromString(html, "text/html");

        //get page title
        var title = doc.querySelector('title');
        title = title ? title.innerText : null;

        //get any meta tags
        var metas = doc.head.getElementsByTagName('meta');
        //get the canonical link
        var links = doc.querySelectorAll('link[rel="canonical"]');
        //get body classes
        var body_classes = doc.body.classList;

        //default to the incoming HTML
        var new_html = html;

        //if a parent element was provided, find it
        if( parent_el ){
            var sel = doc.querySelector(parent_el);
            //if couldn't find the element
            if( !sel ){
                throw `Could not find parent selector ${parent_el}`;
            }
            //grab the outerHTML
            new_html = sel.outerHTML;
        }

        //get the new page's route from the meta tag (if it exists)
        var route = navigation.getRouteFromMeta(doc);

        // Garbage collection, you don't need this anymore.
        parser = doc = null;

        return {
            title:title,
            route: route,
            metas:metas,
            links:links,
            body_classes:body_classes,
            html:new_content
        };
    },

    /**
     * Gets the current route from the meta tag - if it exists
     *
     * If you don't provide HTML, it'll grab it from the current DOM
     *
     * @param html
     * @returns {any | Element}
     */
    getRouteFromMeta: function(html){
        html = typeof html === 'undefined' ? document.head : html;
        var route = html.querySelector('[name="current_route"]');
        route = route ? route.content : null;
        return route;
    },

    /**
     * Replaces content on the current page with new HTML
     *
     * 1) Triggers unload()
     * 2) Waits 100ms
     * 3) Parses the incoming HTML to grab key components
     * 4) Replaces all meta tags (important for social media sharing among other things)
     * 5) Replaces the canonical tag
     * 6) Replaces any classes on the body since they are generally used to indicate which page you're on
     * 7) Pushes to the browser's history
     * 8) Sets the page title
     * 9) Replaces content in the DOM
     * 10) Triggers onload()
     *
     * @param html
     * @param url
     * @param incoming_el
     * @param replace_el
     * @param push_state
     */
    replacePageContent(html, url, incoming_el, replace_el, push_state)
    {
        push_state = typeof push_state === 'undefined' ? true : push_state;

        incoming_el = typeof incoming_el === 'undefined' || !incoming_el ? this.getIncomingElement() : incoming_el;
        replace_el = typeof replace_el === 'undefined' || !replace_el ? this.getReplaceElement() : replace_el;

        if( typeof url !== 'string' ) throw `Provided url (${url}) is not a string`;
        if( typeof incoming_el !== 'string' ) throw `Provided incoming_el (${incoming_el}) is not a string`;
        if( typeof replace_el !== 'string' ) throw `Provided replace_el (${replace_el}) is not a string`;

        //trigger nav complete event
        //get replace_el again because it was replaced
        navigation.triggerUnload(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el), replace_el);

        //very slight 100ms delay to let the on unload handlers run first
        window.setTimeout(function(){
            var parsed = navigation.parseHTML(html, incoming_el);

            //if there is HTML to put on the page
            if( parsed.html.length ) {

                //remove all meta tags and replace from new page
                _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('meta');
                document.head.append(parsed.metas);

                //add the canonical link
                // - possibly other tags will need to be whitelisted in the future.
                // - the main concern is not putting JS/CSS into the current page that shouldn't be
                _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].remove('[rel="canonical"]');
                Array.from(parsed.links).forEach(function(link){
                    document.head.append(link);
                });

                //add body classes
                document.body.classList = parsed.body_classes;

                //push the state to the browser's history
                push_state && history.pushState({url: url}, parsed.title, url);

                //update the tab/page title
                navigation.setTitle(parsed.title);

                //replace content on the page
                _utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(replace_el).outerHTML = parsed.html;

                //trigger nav complete event
                //get replace_el again because it was replaced
                navigation.triggerOnLoad(_utilities_dom__WEBPACK_IMPORTED_MODULE_1__["dom"].getElement(incoming_el), incoming_el, parsed.route);
            }
        }, 100);

        return this;
    },

    /**
     * Refreshes the current page using .load()
     *
     * @returns {navigation}
     */
    reload: function(callback){
        callback = typeof callback !== 'function' ? null : callback;
        navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getFullURL(), callback);
        return this;
    },

    /**
     * Performs a full refresh of the current URL
     *
     * @returns {navigation}
     */
    fullReload: function(){
        navigation.showLoader();
        window.location.reload();
    },

    /**
     * Sends the user to a new page without XHR
     *
     * @param url
     */
    redirect: function(url){
        navigation.showLoader();
        window.location.href = url;
    },

    /**
     * Sets the title of the page
     *
     * @param title
     * @returns {navigation}
     */
    setTitle: function(title){
        document.title = title;
        return this;
    },

    /**
     * When a new page loads, you probably want to kickoff some page-specific JS.
     *
     * The callback receives the event.
     * The event has a property called "detail" which will contain:
     *  1) The replace_el (the element who's content was swapped out)
     *  2) The route (you can define this in a meta tag called "current_route" which will be automatically grabbed and passed along)
     *  3) Any data you set using .setPassthroughData()
     *
     * @param callback
     * @returns {navigation}
     */
    onLoad: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.complete', callback);
        return this;
    },

    /**
     * When leaving a page you might need to destroy some plugins or something
     *
     * @param callback
     * @returns {navigation}
     */
    onUnload: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.started', callback);
        return this;
    },

    /**
     * When the new page fails to load, you should probably tell the user
     *
     * @param callback
     * @returns {navigation}
     */
    onNavigationFailure: function(callback)
    {
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].on('body', 'navigation.failed', callback);
        return this;
    },

    /**
     * We're on a new page, tell the world.
     *
     * Also includes the route of the new page (if it exists in a meta tag) so that you can kick off JS specific to that page
     *
     * @param el
     * @param el_selector
     * @param route
     */
    triggerOnLoad: function(el, el_selector, route){
        route = typeof route !== 'undefined' ? route : navigation.getRouteFromMeta();
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.complete', {
            el:el,
            el_selector:el_selector,
            route:route,
            data:this.getPassThroughData()
        });

        return this;
    },

    /**
     * We're leaving the last page, tell the world.
     *
     * @param el
     */
    triggerUnload: function(el){
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.started', {el:el});

        return this;
    },

    /**
     * Navigation failed, tell the world.
     *
     * @param error
     */
    triggerNavigationFailure: function(error){
        _utilities_events__WEBPACK_IMPORTED_MODULE_3__["events"].trigger('body', 'navigation.failed', {error:error});

        return this;
    },

    /**
     * Attaches event handlers to track the browser's history buttons (back/forward)
     *
     * @todo: Investigate possible issue with chrome caching back button contents and not loading the entire page
     */
    initHistoryHandlers: function(){
        //forward button
        window.onpushstate = function(e) {
            console.log(e);
            navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString());
        };

        //back button
        window.onpopstate = function(e) {
            console.log(e);
            navigation.load(_objects_request__WEBPACK_IMPORTED_MODULE_2__["request"].getURIWithQueryString(), null, null, null, false);
        };

        return this;
    },
};

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
/* harmony import */ var _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/type_checks */ "./src/utilities/type_checks/index.js");



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
        return this._id;
    },
    setId: function(id){
        this._id = id;
        return this;
    },

    //gets the website's name
    getName: function(){
        return this._name;
    },
    setName: function(name){
        this._name = name;
        return this;
    },

    //returns all config data
    getConfig: function(){
        return this._config;
    },
    //sets all config data using the provided object
    setConfig: function(config){
        //must be a data object, even if it's empty
        _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__["type_checks"].isDataObject(config, null, false, false, true);

        this._config = config;
        return this;
    },

    //returns an individual config value or null if it's not defined
    getConfigItem: function(key){
        return typeof this._config[key] === "undefined" ? null : this._config[key];
    },
    //adds or updates a value in the config object
    setConfigItem: function(key, val){
        this._config[key] = val;
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
/* harmony import */ var _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/type_checks */ "./src/utilities/type_checks/index.js");



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
 * @type {{getIsGuest: (function(): *), getPhone: (function(): *), getLname: (function(): *), getName: (function(): string), setIsGuest: (function(*): user), keys: string[], addPermission: (function(*=): user), getId: (function(): *), setAdditionalData: (function(*): user), setPermissions: (function(*): user), getUsername: (function(): *), setFname: (function(*): user), getFname: (function(): *), setId: (function(*): user), setUsername: (function(*): user), setLname: (function(*): user), getAdditionalData: (function(): *), getPermissions: (function(): *), setPhone: (function(*): user), removePermission: (function(*): user), getDataItem(*): null, setIsAdmin: (function(*): user), setDataItem(*, *): *, getIsAdmin: (function(): *), setEmail: (function(*): user), hasPermission: (function(*=): (*|boolean)), getEmail: (function(): *)}}
 */
const user = {..._abstract_object__WEBPACK_IMPORTED_MODULE_0__["abstract_object"], ...{
    //user object keys
    keys: ['id', 'isGuest', 'isAdmin', 'username', 'fname', 'lname', 'email', 'phone', 'permissions', 'additionalData'],

    setId: function(id){
        this._id = id;
        return this;
    },
    getId: function(){
        return this._id;
    },

    setIsGuest: function(is_guest){
        this._isGuest = is_guest;
        return this;
    },
    getIsGuest: function(){
        return this._isGuest;
    },

    setIsAdmin: function(is_admin){
        this._isAdmin = is_admin;
        return this;
    },
    getIsAdmin: function(){
        return this._isAdmin;
    },

    setUsername: function(username){
        this._username = username;
        return this;
    },
    getUsername: function(){
        return this._username;
    },

    getFname: function(){
        return this._fname;
    },
    setFname: function(first_name){
        this._fname = first_name;
        return this;
    },

    getLname: function(){
        return this._lname;
    },
    setLname: function(last_name){
        this._lname = last_name;
        return this;
    },

    //quick way to get fname and lname
    getName: function(){
        return `${user.getFname()} ${user.getLname()}`;
    },

    getEmail: function(){
        return this._email;
    },
    setEmail: function(email){
        this._email = email;
        return this;
    },

    getPhone: function(){
        return this._phone;
    },
    setPhone: function(phone){
        this._phone = phone;
        return this;
    },

    //returns all permissions for this user
    getPermissions: function(){
        return this._permissions;
    },
    //sets all permissions for this user
    setPermissions: function(permissions){
        if( !Array.isArray(permissions) ) throw "setPermissions requires an array";

        this._permissions = permissions;
        return this;
    },
    //adds a single permission to this user
    addPermission: function(permission){
        this._permissions.push(permission);
        return this;
    },
    //Removes a single permission from this user
    removePermission: function(permission){
        this.setPermissions(this._permissions.filter(function(ele){
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
        return this._additionalData;
    },
    //sets all additional data for this user
    setAdditionalData: function(additional_data){
        //must be a data object, even if it's empty
        _utilities_type_checks__WEBPACK_IMPORTED_MODULE_1__["type_checks"].isDataObject(additional_data, null, false, false, true);

        this._additionalData = additional_data;
        return this;
    },
    //returns a single additional data value for this user
    getDataItem(key){
        return typeof this._additionalData[key] === "undefined" ? null : this._additionalData[key];
    },
    //sets a single additional data value for this user
    setDataItem(key, val){
        this._additionalData[key] = val;
        return this;
    }
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
 * @type {{getElements: (function(*=, *=): Array), getElement: dom.getElement, exists: (function(*=): number), multipleExist: (function(*=): number)}}
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
    getElement: function(el, error_on_none, error_on_multiple){
        el = this.getElements(el, error_on_none);

        if( el.length > 1 ){
            if( error_on_multiple ) throw "Too many DOM elements found in getElement for "+JSON.stringify(el);
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
    getElements: function(el, error_on_none){
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
            throw "Invalid value provided to getElements: "+JSON.stringify(el);
        }

        if( !el_array.length && error_on_none ){
            throw "Failed to get array of DOM elements for "+JSON.stringify(el);
        }

        //hopefully it's safe to assume the originally provided el is a singular native DOM object
        return el_array;
    },

    /**
     * Quick method for removing elements from the DOM
     *
     * @param el
     * @returns {dom}
     */
    remove: function(el){
        let el_array = this.getElements(el);
        el_array.forEach(function(el){
            el.parentNode.removeChild(el);
        });
        return this;
    },

    /**
     * Returns true if the provided element exists
     *
     * Pass anything you want, it uses getElements
     *
     * @param el
     * @returns {number}
     */
    exists: function(el){
        return this.getElements(el).length;
    },

    /**
     * Returns true if there are multiple instances of the provided element
     *
     * Pass anything you want, it uses getElements
     *
     * @param el
     * @returns {boolean}
     */
    multipleExist: function(el){
        return this.getElements(el).length > 1;
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
 * @type {{onClick: (function(*=, *=): (*|Array|el)), onChange: (function(*=, *=): (*|*|*[])), offChange: (function(*=, *=): (*|*|*[])), offEventPreventDefault: events.offEventPreventDefault, offClick(*=, *=): (Array|el), onSubmit: (function(*=, *=): (*|Array|el)), offSubmit: (function(*=, *=): (*|Array|el)), onEventPreventDefault: events.onEventPreventDefault, trigger: events.trigger, off: events.off, on: events.on}}
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
        return this.on(el, 'change', handler);
    },

    /**
     * Removes an on-change handler
     *
     * @param el
     * @param handler
     * @returns array|el
     */
    offChange: function(el, handler){
        return this.off(el, 'change', handler);
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
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

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

        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

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

    /**
     * Adds an event listener
     *
     * @param el
     * @param event
     * @param handler
     * @returns {*|*[]|*}
     */
    on: function(el, event, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.addEventListener(event, handler);
        });

        return el_array;
    },

    /**
     * Removes an event listener
     *
     * @param el
     * @param event
     * @param handler
     * @returns {*|*[]|*}
     */
    off: function(el, event, handler){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ) return el;

        el_array.forEach(function(el){
            el.removeEventListener(event, handler);
        });

        return el_array;
    },

    /**
     * Trigger an event on an element/elements
     *
     * @param el
     * @param event
     * @param event_options
     * @returns {*|*[]|*}
     */
    trigger: function(el, event, event_options){
        const el_array = _dom__WEBPACK_IMPORTED_MODULE_0__["dom"].getElements(el);

        if( !el_array.length ){
            return el;
        }

        event_options = typeof event_options === "undefined" ? null : event_options;

        //create the event
        event = new CustomEvent(event, { detail: event_options });

        el_array.forEach(function(el){
            el.dispatchEvent(event);
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

        //if not provided
        if( typeof value === "undefined" ){
            if( throw_error ) throw error_msg;
            return false;
        }

        //determine if it is an object
        const is_object = typeof value === "object";

        //if not an object, null, or an array
        if( !is_object || value === null || Array.isArray(value) ){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYWRhcHRlcnMveGhyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvYXhpb3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jYW5jZWwvQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL0NhbmNlbFRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY2FuY2VsL2lzQ2FuY2VsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9BeGlvcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvSW50ZXJjZXB0b3JNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9jcmVhdGVFcnJvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2NvcmUvZGlzcGF0Y2hSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9lbmhhbmNlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL21lcmdlQ29uZmlnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvY29yZS9zZXR0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9jb3JlL3RyYW5zZm9ybURhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYmluZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvYnVpbGRVUkwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL2NvbWJpbmVVUkxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9jb29raWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc0Fic29sdXRlVVJMLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvaGVscGVycy9pc1VSTFNhbWVPcmlnaW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL25vcm1hbGl6ZUhlYWRlck5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL2xpYi9oZWxwZXJzL3BhcnNlSGVhZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYXhpb3MvbGliL2hlbHBlcnMvc3ByZWFkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9heGlvcy9saWIvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2F4aW9zL25vZGVfbW9kdWxlcy9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcGFjay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9hYnN0cmFjdF9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL29iamVjdHMvcmVxdWVzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb2JqZWN0cy9zaXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9vYmplY3RzL3VzZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsdWdpbl93cmFwcGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2RvbS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2V2ZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsaXRpZXMvc3RyaW5ncy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbGl0aWVzL3R5cGVfY2hlY2tzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEw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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EsK0NBQStDLGdCQUFnQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImpwYWNrLmNvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanBhY2suanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL2F4aW9zJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG52YXIgc2V0dGxlID0gcmVxdWlyZSgnLi8uLi9jb3JlL3NldHRsZScpO1xudmFyIGJ1aWxkVVJMID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2J1aWxkVVJMJyk7XG52YXIgcGFyc2VIZWFkZXJzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL3BhcnNlSGVhZGVycycpO1xudmFyIGlzVVJMU2FtZU9yaWdpbiA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc1VSTFNhbWVPcmlnaW4nKTtcbnZhciBjcmVhdGVFcnJvciA9IHJlcXVpcmUoJy4uL2NvcmUvY3JlYXRlRXJyb3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB4aHJBZGFwdGVyKGNvbmZpZykge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gZGlzcGF0Y2hYaHJSZXF1ZXN0KHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciByZXF1ZXN0RGF0YSA9IGNvbmZpZy5kYXRhO1xuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzO1xuXG4gICAgaWYgKHV0aWxzLmlzRm9ybURhdGEocmVxdWVzdERhdGEpKSB7XG4gICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddOyAvLyBMZXQgdGhlIGJyb3dzZXIgc2V0IGl0XG4gICAgfVxuXG4gICAgdmFyIHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblxuICAgIC8vIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb25cbiAgICBpZiAoY29uZmlnLmF1dGgpIHtcbiAgICAgIHZhciB1c2VybmFtZSA9IGNvbmZpZy5hdXRoLnVzZXJuYW1lIHx8ICcnO1xuICAgICAgdmFyIHBhc3N3b3JkID0gY29uZmlnLmF1dGgucGFzc3dvcmQgfHwgJyc7XG4gICAgICByZXF1ZXN0SGVhZGVycy5BdXRob3JpemF0aW9uID0gJ0Jhc2ljICcgKyBidG9hKHVzZXJuYW1lICsgJzonICsgcGFzc3dvcmQpO1xuICAgIH1cblxuICAgIHJlcXVlc3Qub3Blbihjb25maWcubWV0aG9kLnRvVXBwZXJDYXNlKCksIGJ1aWxkVVJMKGNvbmZpZy51cmwsIGNvbmZpZy5wYXJhbXMsIGNvbmZpZy5wYXJhbXNTZXJpYWxpemVyKSwgdHJ1ZSk7XG5cbiAgICAvLyBTZXQgdGhlIHJlcXVlc3QgdGltZW91dCBpbiBNU1xuICAgIHJlcXVlc3QudGltZW91dCA9IGNvbmZpZy50aW1lb3V0O1xuXG4gICAgLy8gTGlzdGVuIGZvciByZWFkeSBzdGF0ZVxuICAgIHJlcXVlc3Qub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlTG9hZCgpIHtcbiAgICAgIGlmICghcmVxdWVzdCB8fCByZXF1ZXN0LnJlYWR5U3RhdGUgIT09IDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBUaGUgcmVxdWVzdCBlcnJvcmVkIG91dCBhbmQgd2UgZGlkbid0IGdldCBhIHJlc3BvbnNlLCB0aGlzIHdpbGwgYmVcbiAgICAgIC8vIGhhbmRsZWQgYnkgb25lcnJvciBpbnN0ZWFkXG4gICAgICAvLyBXaXRoIG9uZSBleGNlcHRpb246IHJlcXVlc3QgdGhhdCB1c2luZyBmaWxlOiBwcm90b2NvbCwgbW9zdCBicm93c2Vyc1xuICAgICAgLy8gd2lsbCByZXR1cm4gc3RhdHVzIGFzIDAgZXZlbiB0aG91Z2ggaXQncyBhIHN1Y2Nlc3NmdWwgcmVxdWVzdFxuICAgICAgaWYgKHJlcXVlc3Quc3RhdHVzID09PSAwICYmICEocmVxdWVzdC5yZXNwb25zZVVSTCAmJiByZXF1ZXN0LnJlc3BvbnNlVVJMLmluZGV4T2YoJ2ZpbGU6JykgPT09IDApKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gUHJlcGFyZSB0aGUgcmVzcG9uc2VcbiAgICAgIHZhciByZXNwb25zZUhlYWRlcnMgPSAnZ2V0QWxsUmVzcG9uc2VIZWFkZXJzJyBpbiByZXF1ZXN0ID8gcGFyc2VIZWFkZXJzKHJlcXVlc3QuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpIDogbnVsbDtcbiAgICAgIHZhciByZXNwb25zZURhdGEgPSAhY29uZmlnLnJlc3BvbnNlVHlwZSB8fCBjb25maWcucmVzcG9uc2VUeXBlID09PSAndGV4dCcgPyByZXF1ZXN0LnJlc3BvbnNlVGV4dCA6IHJlcXVlc3QucmVzcG9uc2U7XG4gICAgICB2YXIgcmVzcG9uc2UgPSB7XG4gICAgICAgIGRhdGE6IHJlc3BvbnNlRGF0YSxcbiAgICAgICAgc3RhdHVzOiByZXF1ZXN0LnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVxdWVzdC5zdGF0dXNUZXh0LFxuICAgICAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnMsXG4gICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICByZXF1ZXN0OiByZXF1ZXN0XG4gICAgICB9O1xuXG4gICAgICBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCByZXNwb25zZSk7XG5cbiAgICAgIC8vIENsZWFuIHVwIHJlcXVlc3RcbiAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgIH07XG5cbiAgICAvLyBIYW5kbGUgYnJvd3NlciByZXF1ZXN0IGNhbmNlbGxhdGlvbiAoYXMgb3Bwb3NlZCB0byBhIG1hbnVhbCBjYW5jZWxsYXRpb24pXG4gICAgcmVxdWVzdC5vbmFib3J0ID0gZnVuY3Rpb24gaGFuZGxlQWJvcnQoKSB7XG4gICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ1JlcXVlc3QgYWJvcnRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSBsb3cgbGV2ZWwgbmV0d29yayBlcnJvcnNcbiAgICByZXF1ZXN0Lm9uZXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcigpIHtcbiAgICAgIC8vIFJlYWwgZXJyb3JzIGFyZSBoaWRkZW4gZnJvbSB1cyBieSB0aGUgYnJvd3NlclxuICAgICAgLy8gb25lcnJvciBzaG91bGQgb25seSBmaXJlIGlmIGl0J3MgYSBuZXR3b3JrIGVycm9yXG4gICAgICByZWplY3QoY3JlYXRlRXJyb3IoJ05ldHdvcmsgRXJyb3InLCBjb25maWcsIG51bGwsIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEhhbmRsZSB0aW1lb3V0XG4gICAgcmVxdWVzdC5vbnRpbWVvdXQgPSBmdW5jdGlvbiBoYW5kbGVUaW1lb3V0KCkge1xuICAgICAgcmVqZWN0KGNyZWF0ZUVycm9yKCd0aW1lb3V0IG9mICcgKyBjb25maWcudGltZW91dCArICdtcyBleGNlZWRlZCcsIGNvbmZpZywgJ0VDT05OQUJPUlRFRCcsXG4gICAgICAgIHJlcXVlc3QpKTtcblxuICAgICAgLy8gQ2xlYW4gdXAgcmVxdWVzdFxuICAgICAgcmVxdWVzdCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8vIEFkZCB4c3JmIGhlYWRlclxuICAgIC8vIFRoaXMgaXMgb25seSBkb25lIGlmIHJ1bm5pbmcgaW4gYSBzdGFuZGFyZCBicm93c2VyIGVudmlyb25tZW50LlxuICAgIC8vIFNwZWNpZmljYWxseSBub3QgaWYgd2UncmUgaW4gYSB3ZWIgd29ya2VyLCBvciByZWFjdC1uYXRpdmUuXG4gICAgaWYgKHV0aWxzLmlzU3RhbmRhcmRCcm93c2VyRW52KCkpIHtcbiAgICAgIHZhciBjb29raWVzID0gcmVxdWlyZSgnLi8uLi9oZWxwZXJzL2Nvb2tpZXMnKTtcblxuICAgICAgLy8gQWRkIHhzcmYgaGVhZGVyXG4gICAgICB2YXIgeHNyZlZhbHVlID0gKGNvbmZpZy53aXRoQ3JlZGVudGlhbHMgfHwgaXNVUkxTYW1lT3JpZ2luKGNvbmZpZy51cmwpKSAmJiBjb25maWcueHNyZkNvb2tpZU5hbWUgP1xuICAgICAgICBjb29raWVzLnJlYWQoY29uZmlnLnhzcmZDb29raWVOYW1lKSA6XG4gICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgaWYgKHhzcmZWYWx1ZSkge1xuICAgICAgICByZXF1ZXN0SGVhZGVyc1tjb25maWcueHNyZkhlYWRlck5hbWVdID0geHNyZlZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFkZCBoZWFkZXJzIHRvIHRoZSByZXF1ZXN0XG4gICAgaWYgKCdzZXRSZXF1ZXN0SGVhZGVyJyBpbiByZXF1ZXN0KSB7XG4gICAgICB1dGlscy5mb3JFYWNoKHJlcXVlc3RIZWFkZXJzLCBmdW5jdGlvbiBzZXRSZXF1ZXN0SGVhZGVyKHZhbCwga2V5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmVxdWVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGtleS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xuICAgICAgICAgIC8vIFJlbW92ZSBDb250ZW50LVR5cGUgaWYgZGF0YSBpcyB1bmRlZmluZWRcbiAgICAgICAgICBkZWxldGUgcmVxdWVzdEhlYWRlcnNba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBPdGhlcndpc2UgYWRkIGhlYWRlciB0byB0aGUgcmVxdWVzdFxuICAgICAgICAgIHJlcXVlc3Quc2V0UmVxdWVzdEhlYWRlcihrZXksIHZhbCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEFkZCB3aXRoQ3JlZGVudGlhbHMgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLndpdGhDcmVkZW50aWFscykge1xuICAgICAgcmVxdWVzdC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgIH1cblxuICAgIC8vIEFkZCByZXNwb25zZVR5cGUgdG8gcmVxdWVzdCBpZiBuZWVkZWRcbiAgICBpZiAoY29uZmlnLnJlc3BvbnNlVHlwZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBjb25maWcucmVzcG9uc2VUeXBlO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBFeHBlY3RlZCBET01FeGNlcHRpb24gdGhyb3duIGJ5IGJyb3dzZXJzIG5vdCBjb21wYXRpYmxlIFhNTEh0dHBSZXF1ZXN0IExldmVsIDIuXG4gICAgICAgIC8vIEJ1dCwgdGhpcyBjYW4gYmUgc3VwcHJlc3NlZCBmb3IgJ2pzb24nIHR5cGUgYXMgaXQgY2FuIGJlIHBhcnNlZCBieSBkZWZhdWx0ICd0cmFuc2Zvcm1SZXNwb25zZScgZnVuY3Rpb24uXG4gICAgICAgIGlmIChjb25maWcucmVzcG9uc2VUeXBlICE9PSAnanNvbicpIHtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHByb2dyZXNzIGlmIG5lZWRlZFxuICAgIGlmICh0eXBlb2YgY29uZmlnLm9uRG93bmxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGNvbmZpZy5vbkRvd25sb2FkUHJvZ3Jlc3MpO1xuICAgIH1cblxuICAgIC8vIE5vdCBhbGwgYnJvd3NlcnMgc3VwcG9ydCB1cGxvYWQgZXZlbnRzXG4gICAgaWYgKHR5cGVvZiBjb25maWcub25VcGxvYWRQcm9ncmVzcyA9PT0gJ2Z1bmN0aW9uJyAmJiByZXF1ZXN0LnVwbG9hZCkge1xuICAgICAgcmVxdWVzdC51cGxvYWQuYWRkRXZlbnRMaXN0ZW5lcigncHJvZ3Jlc3MnLCBjb25maWcub25VcGxvYWRQcm9ncmVzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5jYW5jZWxUb2tlbikge1xuICAgICAgLy8gSGFuZGxlIGNhbmNlbGxhdGlvblxuICAgICAgY29uZmlnLmNhbmNlbFRva2VuLnByb21pc2UudGhlbihmdW5jdGlvbiBvbkNhbmNlbGVkKGNhbmNlbCkge1xuICAgICAgICBpZiAoIXJlcXVlc3QpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICByZXF1ZXN0LmFib3J0KCk7XG4gICAgICAgIHJlamVjdChjYW5jZWwpO1xuICAgICAgICAvLyBDbGVhbiB1cCByZXF1ZXN0XG4gICAgICAgIHJlcXVlc3QgPSBudWxsO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHJlcXVlc3REYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlcXVlc3REYXRhID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBTZW5kIHRoZSByZXF1ZXN0XG4gICAgcmVxdWVzdC5zZW5kKHJlcXVlc3REYXRhKTtcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgQXhpb3MgPSByZXF1aXJlKCcuL2NvcmUvQXhpb3MnKTtcbnZhciBtZXJnZUNvbmZpZyA9IHJlcXVpcmUoJy4vY29yZS9tZXJnZUNvbmZpZycpO1xudmFyIGRlZmF1bHRzID0gcmVxdWlyZSgnLi9kZWZhdWx0cycpO1xuXG4vKipcbiAqIENyZWF0ZSBhbiBpbnN0YW5jZSBvZiBBeGlvc1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKiBAcmV0dXJuIHtBeGlvc30gQSBuZXcgaW5zdGFuY2Ugb2YgQXhpb3NcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2UoZGVmYXVsdENvbmZpZykge1xuICB2YXIgY29udGV4dCA9IG5ldyBBeGlvcyhkZWZhdWx0Q29uZmlnKTtcbiAgdmFyIGluc3RhbmNlID0gYmluZChBeGlvcy5wcm90b3R5cGUucmVxdWVzdCwgY29udGV4dCk7XG5cbiAgLy8gQ29weSBheGlvcy5wcm90b3R5cGUgdG8gaW5zdGFuY2VcbiAgdXRpbHMuZXh0ZW5kKGluc3RhbmNlLCBBeGlvcy5wcm90b3R5cGUsIGNvbnRleHQpO1xuXG4gIC8vIENvcHkgY29udGV4dCB0byBpbnN0YW5jZVxuICB1dGlscy5leHRlbmQoaW5zdGFuY2UsIGNvbnRleHQpO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8gQ3JlYXRlIHRoZSBkZWZhdWx0IGluc3RhbmNlIHRvIGJlIGV4cG9ydGVkXG52YXIgYXhpb3MgPSBjcmVhdGVJbnN0YW5jZShkZWZhdWx0cyk7XG5cbi8vIEV4cG9zZSBBeGlvcyBjbGFzcyB0byBhbGxvdyBjbGFzcyBpbmhlcml0YW5jZVxuYXhpb3MuQXhpb3MgPSBBeGlvcztcblxuLy8gRmFjdG9yeSBmb3IgY3JlYXRpbmcgbmV3IGluc3RhbmNlc1xuYXhpb3MuY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGluc3RhbmNlQ29uZmlnKSB7XG4gIHJldHVybiBjcmVhdGVJbnN0YW5jZShtZXJnZUNvbmZpZyhheGlvcy5kZWZhdWx0cywgaW5zdGFuY2VDb25maWcpKTtcbn07XG5cbi8vIEV4cG9zZSBDYW5jZWwgJiBDYW5jZWxUb2tlblxuYXhpb3MuQ2FuY2VsID0gcmVxdWlyZSgnLi9jYW5jZWwvQ2FuY2VsJyk7XG5heGlvcy5DYW5jZWxUb2tlbiA9IHJlcXVpcmUoJy4vY2FuY2VsL0NhbmNlbFRva2VuJyk7XG5heGlvcy5pc0NhbmNlbCA9IHJlcXVpcmUoJy4vY2FuY2VsL2lzQ2FuY2VsJyk7XG5cbi8vIEV4cG9zZSBhbGwvc3ByZWFkXG5heGlvcy5hbGwgPSBmdW5jdGlvbiBhbGwocHJvbWlzZXMpIHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbn07XG5heGlvcy5zcHJlYWQgPSByZXF1aXJlKCcuL2hlbHBlcnMvc3ByZWFkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXhpb3M7XG5cbi8vIEFsbG93IHVzZSBvZiBkZWZhdWx0IGltcG9ydCBzeW50YXggaW4gVHlwZVNjcmlwdFxubW9kdWxlLmV4cG9ydHMuZGVmYXVsdCA9IGF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIEEgYENhbmNlbGAgaXMgYW4gb2JqZWN0IHRoYXQgaXMgdGhyb3duIHdoZW4gYW4gb3BlcmF0aW9uIGlzIGNhbmNlbGVkLlxuICpcbiAqIEBjbGFzc1xuICogQHBhcmFtIHtzdHJpbmc9fSBtZXNzYWdlIFRoZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBDYW5jZWwobWVzc2FnZSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xufVxuXG5DYW5jZWwucHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiAnQ2FuY2VsJyArICh0aGlzLm1lc3NhZ2UgPyAnOiAnICsgdGhpcy5tZXNzYWdlIDogJycpO1xufTtcblxuQ2FuY2VsLnByb3RvdHlwZS5fX0NBTkNFTF9fID0gdHJ1ZTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYW5jZWw7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBDYW5jZWwgPSByZXF1aXJlKCcuL0NhbmNlbCcpO1xuXG4vKipcbiAqIEEgYENhbmNlbFRva2VuYCBpcyBhbiBvYmplY3QgdGhhdCBjYW4gYmUgdXNlZCB0byByZXF1ZXN0IGNhbmNlbGxhdGlvbiBvZiBhbiBvcGVyYXRpb24uXG4gKlxuICogQGNsYXNzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBleGVjdXRvciBUaGUgZXhlY3V0b3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIENhbmNlbFRva2VuKGV4ZWN1dG9yKSB7XG4gIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdleGVjdXRvciBtdXN0IGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgcmVzb2x2ZVByb21pc2U7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIHByb21pc2VFeGVjdXRvcihyZXNvbHZlKSB7XG4gICAgcmVzb2x2ZVByb21pc2UgPSByZXNvbHZlO1xuICB9KTtcblxuICB2YXIgdG9rZW4gPSB0aGlzO1xuICBleGVjdXRvcihmdW5jdGlvbiBjYW5jZWwobWVzc2FnZSkge1xuICAgIGlmICh0b2tlbi5yZWFzb24pIHtcbiAgICAgIC8vIENhbmNlbGxhdGlvbiBoYXMgYWxyZWFkeSBiZWVuIHJlcXVlc3RlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRva2VuLnJlYXNvbiA9IG5ldyBDYW5jZWwobWVzc2FnZSk7XG4gICAgcmVzb2x2ZVByb21pc2UodG9rZW4ucmVhc29uKTtcbiAgfSk7XG59XG5cbi8qKlxuICogVGhyb3dzIGEgYENhbmNlbGAgaWYgY2FuY2VsbGF0aW9uIGhhcyBiZWVuIHJlcXVlc3RlZC5cbiAqL1xuQ2FuY2VsVG9rZW4ucHJvdG90eXBlLnRocm93SWZSZXF1ZXN0ZWQgPSBmdW5jdGlvbiB0aHJvd0lmUmVxdWVzdGVkKCkge1xuICBpZiAodGhpcy5yZWFzb24pIHtcbiAgICB0aHJvdyB0aGlzLnJlYXNvbjtcbiAgfVxufTtcblxuLyoqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGEgbmV3IGBDYW5jZWxUb2tlbmAgYW5kIGEgZnVuY3Rpb24gdGhhdCwgd2hlbiBjYWxsZWQsXG4gKiBjYW5jZWxzIHRoZSBgQ2FuY2VsVG9rZW5gLlxuICovXG5DYW5jZWxUb2tlbi5zb3VyY2UgPSBmdW5jdGlvbiBzb3VyY2UoKSB7XG4gIHZhciBjYW5jZWw7XG4gIHZhciB0b2tlbiA9IG5ldyBDYW5jZWxUb2tlbihmdW5jdGlvbiBleGVjdXRvcihjKSB7XG4gICAgY2FuY2VsID0gYztcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgdG9rZW46IHRva2VuLFxuICAgIGNhbmNlbDogY2FuY2VsXG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbmNlbFRva2VuO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzQ2FuY2VsKHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZS5fX0NBTkNFTF9fKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciBidWlsZFVSTCA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYnVpbGRVUkwnKTtcbnZhciBJbnRlcmNlcHRvck1hbmFnZXIgPSByZXF1aXJlKCcuL0ludGVyY2VwdG9yTWFuYWdlcicpO1xudmFyIGRpc3BhdGNoUmVxdWVzdCA9IHJlcXVpcmUoJy4vZGlzcGF0Y2hSZXF1ZXN0Jyk7XG52YXIgbWVyZ2VDb25maWcgPSByZXF1aXJlKCcuL21lcmdlQ29uZmlnJyk7XG5cbi8qKlxuICogQ3JlYXRlIGEgbmV3IGluc3RhbmNlIG9mIEF4aW9zXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGluc3RhbmNlQ29uZmlnIFRoZSBkZWZhdWx0IGNvbmZpZyBmb3IgdGhlIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIEF4aW9zKGluc3RhbmNlQ29uZmlnKSB7XG4gIHRoaXMuZGVmYXVsdHMgPSBpbnN0YW5jZUNvbmZpZztcbiAgdGhpcy5pbnRlcmNlcHRvcnMgPSB7XG4gICAgcmVxdWVzdDogbmV3IEludGVyY2VwdG9yTWFuYWdlcigpLFxuICAgIHJlc3BvbnNlOiBuZXcgSW50ZXJjZXB0b3JNYW5hZ2VyKClcbiAgfTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaCBhIHJlcXVlc3RcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcgc3BlY2lmaWMgZm9yIHRoaXMgcmVxdWVzdCAobWVyZ2VkIHdpdGggdGhpcy5kZWZhdWx0cylcbiAqL1xuQXhpb3MucHJvdG90eXBlLnJlcXVlc3QgPSBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgLy8gQWxsb3cgZm9yIGF4aW9zKCdleGFtcGxlL3VybCdbLCBjb25maWddKSBhIGxhIGZldGNoIEFQSVxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25maWcgPSBhcmd1bWVudHNbMV0gfHwge307XG4gICAgY29uZmlnLnVybCA9IGFyZ3VtZW50c1swXTtcbiAgfSBlbHNlIHtcbiAgICBjb25maWcgPSBjb25maWcgfHwge307XG4gIH1cblxuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICBjb25maWcubWV0aG9kID0gY29uZmlnLm1ldGhvZCA/IGNvbmZpZy5tZXRob2QudG9Mb3dlckNhc2UoKSA6ICdnZXQnO1xuXG4gIC8vIEhvb2sgdXAgaW50ZXJjZXB0b3JzIG1pZGRsZXdhcmVcbiAgdmFyIGNoYWluID0gW2Rpc3BhdGNoUmVxdWVzdCwgdW5kZWZpbmVkXTtcbiAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY29uZmlnKTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXF1ZXN0LmZvckVhY2goZnVuY3Rpb24gdW5zaGlmdFJlcXVlc3RJbnRlcmNlcHRvcnMoaW50ZXJjZXB0b3IpIHtcbiAgICBjaGFpbi51bnNoaWZ0KGludGVyY2VwdG9yLmZ1bGZpbGxlZCwgaW50ZXJjZXB0b3IucmVqZWN0ZWQpO1xuICB9KTtcblxuICB0aGlzLmludGVyY2VwdG9ycy5yZXNwb25zZS5mb3JFYWNoKGZ1bmN0aW9uIHB1c2hSZXNwb25zZUludGVyY2VwdG9ycyhpbnRlcmNlcHRvcikge1xuICAgIGNoYWluLnB1c2goaW50ZXJjZXB0b3IuZnVsZmlsbGVkLCBpbnRlcmNlcHRvci5yZWplY3RlZCk7XG4gIH0pO1xuXG4gIHdoaWxlIChjaGFpbi5sZW5ndGgpIHtcbiAgICBwcm9taXNlID0gcHJvbWlzZS50aGVuKGNoYWluLnNoaWZ0KCksIGNoYWluLnNoaWZ0KCkpO1xuICB9XG5cbiAgcmV0dXJuIHByb21pc2U7XG59O1xuXG5BeGlvcy5wcm90b3R5cGUuZ2V0VXJpID0gZnVuY3Rpb24gZ2V0VXJpKGNvbmZpZykge1xuICBjb25maWcgPSBtZXJnZUNvbmZpZyh0aGlzLmRlZmF1bHRzLCBjb25maWcpO1xuICByZXR1cm4gYnVpbGRVUkwoY29uZmlnLnVybCwgY29uZmlnLnBhcmFtcywgY29uZmlnLnBhcmFtc1NlcmlhbGl6ZXIpLnJlcGxhY2UoL15cXD8vLCAnJyk7XG59O1xuXG4vLyBQcm92aWRlIGFsaWFzZXMgZm9yIHN1cHBvcnRlZCByZXF1ZXN0IG1ldGhvZHNcbnV0aWxzLmZvckVhY2goWydkZWxldGUnLCAnZ2V0JywgJ2hlYWQnLCAnb3B0aW9ucyddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICAvKmVzbGludCBmdW5jLW5hbWVzOjAqL1xuICBBeGlvcy5wcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKHVybCwgY29uZmlnKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1dGlscy5tZXJnZShjb25maWcgfHwge30sIHtcbiAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgdXJsOiB1cmxcbiAgICB9KSk7XG4gIH07XG59KTtcblxudXRpbHMuZm9yRWFjaChbJ3Bvc3QnLCAncHV0JywgJ3BhdGNoJ10sIGZ1bmN0aW9uIGZvckVhY2hNZXRob2RXaXRoRGF0YShtZXRob2QpIHtcbiAgLyplc2xpbnQgZnVuYy1uYW1lczowKi9cbiAgQXhpb3MucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih1cmwsIGRhdGEsIGNvbmZpZykge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXRpbHMubWVyZ2UoY29uZmlnIHx8IHt9LCB7XG4gICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgIHVybDogdXJsLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0pKTtcbiAgfTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF4aW9zO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbmZ1bmN0aW9uIEludGVyY2VwdG9yTWFuYWdlcigpIHtcbiAgdGhpcy5oYW5kbGVycyA9IFtdO1xufVxuXG4vKipcbiAqIEFkZCBhIG5ldyBpbnRlcmNlcHRvciB0byB0aGUgc3RhY2tcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdWxmaWxsZWQgVGhlIGZ1bmN0aW9uIHRvIGhhbmRsZSBgdGhlbmAgZm9yIGEgYFByb21pc2VgXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZWplY3RlZCBUaGUgZnVuY3Rpb24gdG8gaGFuZGxlIGByZWplY3RgIGZvciBhIGBQcm9taXNlYFxuICpcbiAqIEByZXR1cm4ge051bWJlcn0gQW4gSUQgdXNlZCB0byByZW1vdmUgaW50ZXJjZXB0b3IgbGF0ZXJcbiAqL1xuSW50ZXJjZXB0b3JNYW5hZ2VyLnByb3RvdHlwZS51c2UgPSBmdW5jdGlvbiB1c2UoZnVsZmlsbGVkLCByZWplY3RlZCkge1xuICB0aGlzLmhhbmRsZXJzLnB1c2goe1xuICAgIGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuICAgIHJlamVjdGVkOiByZWplY3RlZFxuICB9KTtcbiAgcmV0dXJuIHRoaXMuaGFuZGxlcnMubGVuZ3RoIC0gMTtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGFuIGludGVyY2VwdG9yIGZyb20gdGhlIHN0YWNrXG4gKlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIFRoZSBJRCB0aGF0IHdhcyByZXR1cm5lZCBieSBgdXNlYFxuICovXG5JbnRlcmNlcHRvck1hbmFnZXIucHJvdG90eXBlLmVqZWN0ID0gZnVuY3Rpb24gZWplY3QoaWQpIHtcbiAgaWYgKHRoaXMuaGFuZGxlcnNbaWRdKSB7XG4gICAgdGhpcy5oYW5kbGVyc1tpZF0gPSBudWxsO1xuICB9XG59O1xuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbGwgdGhlIHJlZ2lzdGVyZWQgaW50ZXJjZXB0b3JzXG4gKlxuICogVGhpcyBtZXRob2QgaXMgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3Igc2tpcHBpbmcgb3ZlciBhbnlcbiAqIGludGVyY2VwdG9ycyB0aGF0IG1heSBoYXZlIGJlY29tZSBgbnVsbGAgY2FsbGluZyBgZWplY3RgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIGZvciBlYWNoIGludGVyY2VwdG9yXG4gKi9cbkludGVyY2VwdG9yTWFuYWdlci5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIGZvckVhY2goZm4pIHtcbiAgdXRpbHMuZm9yRWFjaCh0aGlzLmhhbmRsZXJzLCBmdW5jdGlvbiBmb3JFYWNoSGFuZGxlcihoKSB7XG4gICAgaWYgKGggIT09IG51bGwpIHtcbiAgICAgIGZuKGgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEludGVyY2VwdG9yTWFuYWdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGVuaGFuY2VFcnJvciA9IHJlcXVpcmUoJy4vZW5oYW5jZUVycm9yJyk7XG5cbi8qKlxuICogQ3JlYXRlIGFuIEVycm9yIHdpdGggdGhlIHNwZWNpZmllZCBtZXNzYWdlLCBjb25maWcsIGVycm9yIGNvZGUsIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnLlxuICogQHBhcmFtIHtzdHJpbmd9IFtjb2RlXSBUaGUgZXJyb3IgY29kZSAoZm9yIGV4YW1wbGUsICdFQ09OTkFCT1JURUQnKS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVxdWVzdF0gVGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge09iamVjdH0gW3Jlc3BvbnNlXSBUaGUgcmVzcG9uc2UuXG4gKiBAcmV0dXJucyB7RXJyb3J9IFRoZSBjcmVhdGVkIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZUVycm9yKG1lc3NhZ2UsIGNvbmZpZywgY29kZSwgcmVxdWVzdCwgcmVzcG9uc2UpIHtcbiAgdmFyIGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UpO1xuICByZXR1cm4gZW5oYW5jZUVycm9yKGVycm9yLCBjb25maWcsIGNvZGUsIHJlcXVlc3QsIHJlc3BvbnNlKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcbnZhciB0cmFuc2Zvcm1EYXRhID0gcmVxdWlyZSgnLi90cmFuc2Zvcm1EYXRhJyk7XG52YXIgaXNDYW5jZWwgPSByZXF1aXJlKCcuLi9jYW5jZWwvaXNDYW5jZWwnKTtcbnZhciBkZWZhdWx0cyA9IHJlcXVpcmUoJy4uL2RlZmF1bHRzJyk7XG52YXIgaXNBYnNvbHV0ZVVSTCA9IHJlcXVpcmUoJy4vLi4vaGVscGVycy9pc0Fic29sdXRlVVJMJyk7XG52YXIgY29tYmluZVVSTHMgPSByZXF1aXJlKCcuLy4uL2hlbHBlcnMvY29tYmluZVVSTHMnKTtcblxuLyoqXG4gKiBUaHJvd3MgYSBgQ2FuY2VsYCBpZiBjYW5jZWxsYXRpb24gaGFzIGJlZW4gcmVxdWVzdGVkLlxuICovXG5mdW5jdGlvbiB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZykge1xuICBpZiAoY29uZmlnLmNhbmNlbFRva2VuKSB7XG4gICAgY29uZmlnLmNhbmNlbFRva2VuLnRocm93SWZSZXF1ZXN0ZWQoKTtcbiAgfVxufVxuXG4vKipcbiAqIERpc3BhdGNoIGEgcmVxdWVzdCB0byB0aGUgc2VydmVyIHVzaW5nIHRoZSBjb25maWd1cmVkIGFkYXB0ZXIuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBUaGUgY29uZmlnIHRoYXQgaXMgdG8gYmUgdXNlZCBmb3IgdGhlIHJlcXVlc3RcbiAqIEByZXR1cm5zIHtQcm9taXNlfSBUaGUgUHJvbWlzZSB0byBiZSBmdWxmaWxsZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkaXNwYXRjaFJlcXVlc3QoY29uZmlnKSB7XG4gIHRocm93SWZDYW5jZWxsYXRpb25SZXF1ZXN0ZWQoY29uZmlnKTtcblxuICAvLyBTdXBwb3J0IGJhc2VVUkwgY29uZmlnXG4gIGlmIChjb25maWcuYmFzZVVSTCAmJiAhaXNBYnNvbHV0ZVVSTChjb25maWcudXJsKSkge1xuICAgIGNvbmZpZy51cmwgPSBjb21iaW5lVVJMcyhjb25maWcuYmFzZVVSTCwgY29uZmlnLnVybCk7XG4gIH1cblxuICAvLyBFbnN1cmUgaGVhZGVycyBleGlzdFxuICBjb25maWcuaGVhZGVycyA9IGNvbmZpZy5oZWFkZXJzIHx8IHt9O1xuXG4gIC8vIFRyYW5zZm9ybSByZXF1ZXN0IGRhdGFcbiAgY29uZmlnLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgIGNvbmZpZy5kYXRhLFxuICAgIGNvbmZpZy5oZWFkZXJzLFxuICAgIGNvbmZpZy50cmFuc2Zvcm1SZXF1ZXN0XG4gICk7XG5cbiAgLy8gRmxhdHRlbiBoZWFkZXJzXG4gIGNvbmZpZy5oZWFkZXJzID0gdXRpbHMubWVyZ2UoXG4gICAgY29uZmlnLmhlYWRlcnMuY29tbW9uIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzW2NvbmZpZy5tZXRob2RdIHx8IHt9LFxuICAgIGNvbmZpZy5oZWFkZXJzIHx8IHt9XG4gICk7XG5cbiAgdXRpbHMuZm9yRWFjaChcbiAgICBbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCcsICdwb3N0JywgJ3B1dCcsICdwYXRjaCcsICdjb21tb24nXSxcbiAgICBmdW5jdGlvbiBjbGVhbkhlYWRlckNvbmZpZyhtZXRob2QpIHtcbiAgICAgIGRlbGV0ZSBjb25maWcuaGVhZGVyc1ttZXRob2RdO1xuICAgIH1cbiAgKTtcblxuICB2YXIgYWRhcHRlciA9IGNvbmZpZy5hZGFwdGVyIHx8IGRlZmF1bHRzLmFkYXB0ZXI7XG5cbiAgcmV0dXJuIGFkYXB0ZXIoY29uZmlnKS50aGVuKGZ1bmN0aW9uIG9uQWRhcHRlclJlc29sdXRpb24ocmVzcG9uc2UpIHtcbiAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAvLyBUcmFuc2Zvcm0gcmVzcG9uc2UgZGF0YVxuICAgIHJlc3BvbnNlLmRhdGEgPSB0cmFuc2Zvcm1EYXRhKFxuICAgICAgcmVzcG9uc2UuZGF0YSxcbiAgICAgIHJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICBjb25maWcudHJhbnNmb3JtUmVzcG9uc2VcbiAgICApO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9LCBmdW5jdGlvbiBvbkFkYXB0ZXJSZWplY3Rpb24ocmVhc29uKSB7XG4gICAgaWYgKCFpc0NhbmNlbChyZWFzb24pKSB7XG4gICAgICB0aHJvd0lmQ2FuY2VsbGF0aW9uUmVxdWVzdGVkKGNvbmZpZyk7XG5cbiAgICAgIC8vIFRyYW5zZm9ybSByZXNwb25zZSBkYXRhXG4gICAgICBpZiAocmVhc29uICYmIHJlYXNvbi5yZXNwb25zZSkge1xuICAgICAgICByZWFzb24ucmVzcG9uc2UuZGF0YSA9IHRyYW5zZm9ybURhdGEoXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgICAgcmVhc29uLnJlc3BvbnNlLmhlYWRlcnMsXG4gICAgICAgICAgY29uZmlnLnRyYW5zZm9ybVJlc3BvbnNlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlYXNvbik7XG4gIH0pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVcGRhdGUgYW4gRXJyb3Igd2l0aCB0aGUgc3BlY2lmaWVkIGNvbmZpZywgZXJyb3IgY29kZSwgYW5kIHJlc3BvbnNlLlxuICpcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yIFRoZSBlcnJvciB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnIFRoZSBjb25maWcuXG4gKiBAcGFyYW0ge3N0cmluZ30gW2NvZGVdIFRoZSBlcnJvciBjb2RlIChmb3IgZXhhbXBsZSwgJ0VDT05OQUJPUlRFRCcpLlxuICogQHBhcmFtIHtPYmplY3R9IFtyZXF1ZXN0XSBUaGUgcmVxdWVzdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbcmVzcG9uc2VdIFRoZSByZXNwb25zZS5cbiAqIEByZXR1cm5zIHtFcnJvcn0gVGhlIGVycm9yLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVuaGFuY2VFcnJvcihlcnJvciwgY29uZmlnLCBjb2RlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuICBlcnJvci5jb25maWcgPSBjb25maWc7XG4gIGlmIChjb2RlKSB7XG4gICAgZXJyb3IuY29kZSA9IGNvZGU7XG4gIH1cblxuICBlcnJvci5yZXF1ZXN0ID0gcmVxdWVzdDtcbiAgZXJyb3IucmVzcG9uc2UgPSByZXNwb25zZTtcbiAgZXJyb3IuaXNBeGlvc0Vycm9yID0gdHJ1ZTtcblxuICBlcnJvci50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gU3RhbmRhcmRcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIC8vIE1pY3Jvc29mdFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBudW1iZXI6IHRoaXMubnVtYmVyLFxuICAgICAgLy8gTW96aWxsYVxuICAgICAgZmlsZU5hbWU6IHRoaXMuZmlsZU5hbWUsXG4gICAgICBsaW5lTnVtYmVyOiB0aGlzLmxpbmVOdW1iZXIsXG4gICAgICBjb2x1bW5OdW1iZXI6IHRoaXMuY29sdW1uTnVtYmVyLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICAvLyBBeGlvc1xuICAgICAgY29uZmlnOiB0aGlzLmNvbmZpZyxcbiAgICAgIGNvZGU6IHRoaXMuY29kZVxuICAgIH07XG4gIH07XG4gIHJldHVybiBlcnJvcjtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbi8qKlxuICogQ29uZmlnLXNwZWNpZmljIG1lcmdlLWZ1bmN0aW9uIHdoaWNoIGNyZWF0ZXMgYSBuZXcgY29uZmlnLW9iamVjdFxuICogYnkgbWVyZ2luZyB0d28gY29uZmlndXJhdGlvbiBvYmplY3RzIHRvZ2V0aGVyLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWcxXG4gKiBAcGFyYW0ge09iamVjdH0gY29uZmlnMlxuICogQHJldHVybnMge09iamVjdH0gTmV3IG9iamVjdCByZXN1bHRpbmcgZnJvbSBtZXJnaW5nIGNvbmZpZzIgdG8gY29uZmlnMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIG1lcmdlQ29uZmlnKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gIGNvbmZpZzIgPSBjb25maWcyIHx8IHt9O1xuICB2YXIgY29uZmlnID0ge307XG5cbiAgdXRpbHMuZm9yRWFjaChbJ3VybCcsICdtZXRob2QnLCAncGFyYW1zJywgJ2RhdGEnXSwgZnVuY3Rpb24gdmFsdWVGcm9tQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHV0aWxzLmZvckVhY2goWydoZWFkZXJzJywgJ2F1dGgnLCAncHJveHknXSwgZnVuY3Rpb24gbWVyZ2VEZWVwUHJvcGVydGllcyhwcm9wKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbmZpZzJbcHJvcF0pKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSB1dGlscy5kZWVwTWVyZ2UoY29uZmlnMVtwcm9wXSwgY29uZmlnMltwcm9wXSk7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgY29uZmlnMltwcm9wXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbmZpZ1twcm9wXSA9IGNvbmZpZzJbcHJvcF07XG4gICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdChjb25maWcxW3Byb3BdKSkge1xuICAgICAgY29uZmlnW3Byb3BdID0gdXRpbHMuZGVlcE1lcmdlKGNvbmZpZzFbcHJvcF0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbmZpZzFbcHJvcF0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25maWdbcHJvcF0gPSBjb25maWcxW3Byb3BdO1xuICAgIH1cbiAgfSk7XG5cbiAgdXRpbHMuZm9yRWFjaChbXG4gICAgJ2Jhc2VVUkwnLCAndHJhbnNmb3JtUmVxdWVzdCcsICd0cmFuc2Zvcm1SZXNwb25zZScsICdwYXJhbXNTZXJpYWxpemVyJyxcbiAgICAndGltZW91dCcsICd3aXRoQ3JlZGVudGlhbHMnLCAnYWRhcHRlcicsICdyZXNwb25zZVR5cGUnLCAneHNyZkNvb2tpZU5hbWUnLFxuICAgICd4c3JmSGVhZGVyTmFtZScsICdvblVwbG9hZFByb2dyZXNzJywgJ29uRG93bmxvYWRQcm9ncmVzcycsICdtYXhDb250ZW50TGVuZ3RoJyxcbiAgICAndmFsaWRhdGVTdGF0dXMnLCAnbWF4UmVkaXJlY3RzJywgJ2h0dHBBZ2VudCcsICdodHRwc0FnZW50JywgJ2NhbmNlbFRva2VuJyxcbiAgICAnc29ja2V0UGF0aCdcbiAgXSwgZnVuY3Rpb24gZGVmYXVsdFRvQ29uZmlnMihwcm9wKSB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcyW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMltwcm9wXTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25maWcxW3Byb3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uZmlnW3Byb3BdID0gY29uZmlnMVtwcm9wXTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBjb25maWc7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY3JlYXRlRXJyb3IgPSByZXF1aXJlKCcuL2NyZWF0ZUVycm9yJyk7XG5cbi8qKlxuICogUmVzb2x2ZSBvciByZWplY3QgYSBQcm9taXNlIGJhc2VkIG9uIHJlc3BvbnNlIHN0YXR1cy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSByZXNvbHZlIEEgZnVuY3Rpb24gdGhhdCByZXNvbHZlcyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlamVjdCBBIGZ1bmN0aW9uIHRoYXQgcmVqZWN0cyB0aGUgcHJvbWlzZS5cbiAqIEBwYXJhbSB7b2JqZWN0fSByZXNwb25zZSBUaGUgcmVzcG9uc2UuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgcmVzcG9uc2UpIHtcbiAgdmFyIHZhbGlkYXRlU3RhdHVzID0gcmVzcG9uc2UuY29uZmlnLnZhbGlkYXRlU3RhdHVzO1xuICBpZiAoIXZhbGlkYXRlU3RhdHVzIHx8IHZhbGlkYXRlU3RhdHVzKHJlc3BvbnNlLnN0YXR1cykpIHtcbiAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgfSBlbHNlIHtcbiAgICByZWplY3QoY3JlYXRlRXJyb3IoXG4gICAgICAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSAnICsgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2UuY29uZmlnLFxuICAgICAgbnVsbCxcbiAgICAgIHJlc3BvbnNlLnJlcXVlc3QsXG4gICAgICByZXNwb25zZVxuICAgICkpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBkYXRhIGZvciBhIHJlcXVlc3Qgb3IgYSByZXNwb25zZVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gZGF0YSBUaGUgZGF0YSB0byBiZSB0cmFuc2Zvcm1lZFxuICogQHBhcmFtIHtBcnJheX0gaGVhZGVycyBUaGUgaGVhZGVycyBmb3IgdGhlIHJlcXVlc3Qgb3IgcmVzcG9uc2VcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb259IGZucyBBIHNpbmdsZSBmdW5jdGlvbiBvciBBcnJheSBvZiBmdW5jdGlvbnNcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHRyYW5zZm9ybWVkIGRhdGFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiB0cmFuc2Zvcm1EYXRhKGRhdGEsIGhlYWRlcnMsIGZucykge1xuICAvKmVzbGludCBuby1wYXJhbS1yZWFzc2lnbjowKi9cbiAgdXRpbHMuZm9yRWFjaChmbnMsIGZ1bmN0aW9uIHRyYW5zZm9ybShmbikge1xuICAgIGRhdGEgPSBmbihkYXRhLCBoZWFkZXJzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG52YXIgbm9ybWFsaXplSGVhZGVyTmFtZSA9IHJlcXVpcmUoJy4vaGVscGVycy9ub3JtYWxpemVIZWFkZXJOYW1lJyk7XG5cbnZhciBERUZBVUxUX0NPTlRFTlRfVFlQRSA9IHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG59O1xuXG5mdW5jdGlvbiBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgdmFsdWUpIHtcbiAgaWYgKCF1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzKSAmJiB1dGlscy5pc1VuZGVmaW5lZChoZWFkZXJzWydDb250ZW50LVR5cGUnXSkpIHtcbiAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IHZhbHVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlZmF1bHRBZGFwdGVyKCkge1xuICB2YXIgYWRhcHRlcjtcbiAgLy8gT25seSBOb2RlLkpTIGhhcyBhIHByb2Nlc3MgdmFyaWFibGUgdGhhdCBpcyBvZiBbW0NsYXNzXV0gcHJvY2Vzc1xuICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nKSB7XG4gICAgLy8gRm9yIG5vZGUgdXNlIEhUVFAgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL2h0dHAnKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgLy8gRm9yIGJyb3dzZXJzIHVzZSBYSFIgYWRhcHRlclxuICAgIGFkYXB0ZXIgPSByZXF1aXJlKCcuL2FkYXB0ZXJzL3hocicpO1xuICB9XG4gIHJldHVybiBhZGFwdGVyO1xufVxuXG52YXIgZGVmYXVsdHMgPSB7XG4gIGFkYXB0ZXI6IGdldERlZmF1bHRBZGFwdGVyKCksXG5cbiAgdHJhbnNmb3JtUmVxdWVzdDogW2Z1bmN0aW9uIHRyYW5zZm9ybVJlcXVlc3QoZGF0YSwgaGVhZGVycykge1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0FjY2VwdCcpO1xuICAgIG5vcm1hbGl6ZUhlYWRlck5hbWUoaGVhZGVycywgJ0NvbnRlbnQtVHlwZScpO1xuICAgIGlmICh1dGlscy5pc0Zvcm1EYXRhKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0FycmF5QnVmZmVyKGRhdGEpIHx8XG4gICAgICB1dGlscy5pc0J1ZmZlcihkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNTdHJlYW0oZGF0YSkgfHxcbiAgICAgIHV0aWxzLmlzRmlsZShkYXRhKSB8fFxuICAgICAgdXRpbHMuaXNCbG9iKGRhdGEpXG4gICAgKSB7XG4gICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzQXJyYXlCdWZmZXJWaWV3KGRhdGEpKSB7XG4gICAgICByZXR1cm4gZGF0YS5idWZmZXI7XG4gICAgfVxuICAgIGlmICh1dGlscy5pc1VSTFNlYXJjaFBhcmFtcyhkYXRhKSkge1xuICAgICAgc2V0Q29udGVudFR5cGVJZlVuc2V0KGhlYWRlcnMsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIGRhdGEudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICBzZXRDb250ZW50VHlwZUlmVW5zZXQoaGVhZGVycywgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcpO1xuICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF0YTtcbiAgfV0sXG5cbiAgdHJhbnNmb3JtUmVzcG9uc2U6IFtmdW5jdGlvbiB0cmFuc2Zvcm1SZXNwb25zZShkYXRhKSB7XG4gICAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICB9IGNhdGNoIChlKSB7IC8qIElnbm9yZSAqLyB9XG4gICAgfVxuICAgIHJldHVybiBkYXRhO1xuICB9XSxcblxuICAvKipcbiAgICogQSB0aW1lb3V0IGluIG1pbGxpc2Vjb25kcyB0byBhYm9ydCBhIHJlcXVlc3QuIElmIHNldCB0byAwIChkZWZhdWx0KSBhXG4gICAqIHRpbWVvdXQgaXMgbm90IGNyZWF0ZWQuXG4gICAqL1xuICB0aW1lb3V0OiAwLFxuXG4gIHhzcmZDb29raWVOYW1lOiAnWFNSRi1UT0tFTicsXG4gIHhzcmZIZWFkZXJOYW1lOiAnWC1YU1JGLVRPS0VOJyxcblxuICBtYXhDb250ZW50TGVuZ3RoOiAtMSxcblxuICB2YWxpZGF0ZVN0YXR1czogZnVuY3Rpb24gdmFsaWRhdGVTdGF0dXMoc3RhdHVzKSB7XG4gICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwO1xuICB9XG59O1xuXG5kZWZhdWx0cy5oZWFkZXJzID0ge1xuICBjb21tb246IHtcbiAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKidcbiAgfVxufTtcblxudXRpbHMuZm9yRWFjaChbJ2RlbGV0ZScsICdnZXQnLCAnaGVhZCddLCBmdW5jdGlvbiBmb3JFYWNoTWV0aG9kTm9EYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB7fTtcbn0pO1xuXG51dGlscy5mb3JFYWNoKFsncG9zdCcsICdwdXQnLCAncGF0Y2gnXSwgZnVuY3Rpb24gZm9yRWFjaE1ldGhvZFdpdGhEYXRhKG1ldGhvZCkge1xuICBkZWZhdWx0cy5oZWFkZXJzW21ldGhvZF0gPSB1dGlscy5tZXJnZShERUZBVUxUX0NPTlRFTlRfVFlQRSk7XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBkZWZhdWx0cztcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiaW5kKGZuLCB0aGlzQXJnKSB7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwKCkge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgYXJnc1tpXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3MpO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsKSB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsKS5cbiAgICByZXBsYWNlKC8lNDAvZ2ksICdAJykuXG4gICAgcmVwbGFjZSgvJTNBL2dpLCAnOicpLlxuICAgIHJlcGxhY2UoLyUyNC9nLCAnJCcpLlxuICAgIHJlcGxhY2UoLyUyQy9naSwgJywnKS5cbiAgICByZXBsYWNlKC8lMjAvZywgJysnKS5cbiAgICByZXBsYWNlKC8lNUIvZ2ksICdbJykuXG4gICAgcmVwbGFjZSgvJTVEL2dpLCAnXScpO1xufVxuXG4vKipcbiAqIEJ1aWxkIGEgVVJMIGJ5IGFwcGVuZGluZyBwYXJhbXMgdG8gdGhlIGVuZFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVGhlIGJhc2Ugb2YgdGhlIHVybCAoZS5nLiwgaHR0cDovL3d3dy5nb29nbGUuY29tKVxuICogQHBhcmFtIHtvYmplY3R9IFtwYXJhbXNdIFRoZSBwYXJhbXMgdG8gYmUgYXBwZW5kZWRcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgdXJsXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnVpbGRVUkwodXJsLCBwYXJhbXMsIHBhcmFtc1NlcmlhbGl6ZXIpIHtcbiAgLyplc2xpbnQgbm8tcGFyYW0tcmVhc3NpZ246MCovXG4gIGlmICghcGFyYW1zKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHZhciBzZXJpYWxpemVkUGFyYW1zO1xuICBpZiAocGFyYW1zU2VyaWFsaXplcikge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXNTZXJpYWxpemVyKHBhcmFtcyk7XG4gIH0gZWxzZSBpZiAodXRpbHMuaXNVUkxTZWFyY2hQYXJhbXMocGFyYW1zKSkge1xuICAgIHNlcmlhbGl6ZWRQYXJhbXMgPSBwYXJhbXMudG9TdHJpbmcoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGFydHMgPSBbXTtcblxuICAgIHV0aWxzLmZvckVhY2gocGFyYW1zLCBmdW5jdGlvbiBzZXJpYWxpemUodmFsLCBrZXkpIHtcbiAgICAgIGlmICh2YWwgPT09IG51bGwgfHwgdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGtleSA9IGtleSArICdbXSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWwgPSBbdmFsXTtcbiAgICAgIH1cblxuICAgICAgdXRpbHMuZm9yRWFjaCh2YWwsIGZ1bmN0aW9uIHBhcnNlVmFsdWUodikge1xuICAgICAgICBpZiAodXRpbHMuaXNEYXRlKHYpKSB7XG4gICAgICAgICAgdiA9IHYudG9JU09TdHJpbmcoKTtcbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc09iamVjdCh2KSkge1xuICAgICAgICAgIHYgPSBKU09OLnN0cmluZ2lmeSh2KTtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0cy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKHYpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgc2VyaWFsaXplZFBhcmFtcyA9IHBhcnRzLmpvaW4oJyYnKTtcbiAgfVxuXG4gIGlmIChzZXJpYWxpemVkUGFyYW1zKSB7XG4gICAgdmFyIGhhc2htYXJrSW5kZXggPSB1cmwuaW5kZXhPZignIycpO1xuICAgIGlmIChoYXNobWFya0luZGV4ICE9PSAtMSkge1xuICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIGhhc2htYXJrSW5kZXgpO1xuICAgIH1cblxuICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgc2VyaWFsaXplZFBhcmFtcztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVVJMIGJ5IGNvbWJpbmluZyB0aGUgc3BlY2lmaWVkIFVSTHNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYmFzZVVSTCBUaGUgYmFzZSBVUkxcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWxhdGl2ZVVSTCBUaGUgcmVsYXRpdmUgVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgY29tYmluZWQgVVJMXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tYmluZVVSTHMoYmFzZVVSTCwgcmVsYXRpdmVVUkwpIHtcbiAgcmV0dXJuIHJlbGF0aXZlVVJMXG4gICAgPyBiYXNlVVJMLnJlcGxhY2UoL1xcLyskLywgJycpICsgJy8nICsgcmVsYXRpdmVVUkwucmVwbGFjZSgvXlxcLysvLCAnJylcbiAgICA6IGJhc2VVUkw7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gKFxuICB1dGlscy5pc1N0YW5kYXJkQnJvd3NlckVudigpID9cblxuICAvLyBTdGFuZGFyZCBicm93c2VyIGVudnMgc3VwcG9ydCBkb2N1bWVudC5jb29raWVcbiAgICAoZnVuY3Rpb24gc3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSkge1xuICAgICAgICAgIHZhciBjb29raWUgPSBbXTtcbiAgICAgICAgICBjb29raWUucHVzaChuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNOdW1iZXIoZXhwaXJlcykpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdleHBpcmVzPScgKyBuZXcgRGF0ZShleHBpcmVzKS50b0dNVFN0cmluZygpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcocGF0aCkpIHtcbiAgICAgICAgICAgIGNvb2tpZS5wdXNoKCdwYXRoPScgKyBwYXRoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZG9tYWluKSkge1xuICAgICAgICAgICAgY29va2llLnB1c2goJ2RvbWFpbj0nICsgZG9tYWluKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2VjdXJlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBjb29raWUucHVzaCgnc2VjdXJlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llLmpvaW4oJzsgJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChuYW1lKSB7XG4gICAgICAgICAgdmFyIG1hdGNoID0gZG9jdW1lbnQuY29va2llLm1hdGNoKG5ldyBSZWdFeHAoJyhefDtcXFxccyopKCcgKyBuYW1lICsgJyk9KFteO10qKScpKTtcbiAgICAgICAgICByZXR1cm4gKG1hdGNoID8gZGVjb2RlVVJJQ29tcG9uZW50KG1hdGNoWzNdKSA6IG51bGwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKG5hbWUpIHtcbiAgICAgICAgICB0aGlzLndyaXRlKG5hbWUsICcnLCBEYXRlLm5vdygpIC0gODY0MDAwMDApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKCkgOlxuXG4gIC8vIE5vbiBzdGFuZGFyZCBicm93c2VyIGVudiAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKCkge30sXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQoKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCBUaGUgVVJMIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHRoZSBzcGVjaWZpZWQgVVJMIGlzIGFic29sdXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0Fic29sdXRlVVJMKHVybCkge1xuICAvLyBBIFVSTCBpcyBjb25zaWRlcmVkIGFic29sdXRlIGlmIGl0IGJlZ2lucyB3aXRoIFwiPHNjaGVtZT46Ly9cIiBvciBcIi8vXCIgKHByb3RvY29sLXJlbGF0aXZlIFVSTCkuXG4gIC8vIFJGQyAzOTg2IGRlZmluZXMgc2NoZW1lIG5hbWUgYXMgYSBzZXF1ZW5jZSBvZiBjaGFyYWN0ZXJzIGJlZ2lubmluZyB3aXRoIGEgbGV0dGVyIGFuZCBmb2xsb3dlZFxuICAvLyBieSBhbnkgY29tYmluYXRpb24gb2YgbGV0dGVycywgZGlnaXRzLCBwbHVzLCBwZXJpb2QsIG9yIGh5cGhlbi5cbiAgcmV0dXJuIC9eKFthLXpdW2EtelxcZFxcK1xcLVxcLl0qOik/XFwvXFwvL2kudGVzdCh1cmwpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi8uLi91dGlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgdXRpbHMuaXNTdGFuZGFyZEJyb3dzZXJFbnYoKSA/XG5cbiAgLy8gU3RhbmRhcmQgYnJvd3NlciBlbnZzIGhhdmUgZnVsbCBzdXBwb3J0IG9mIHRoZSBBUElzIG5lZWRlZCB0byB0ZXN0XG4gIC8vIHdoZXRoZXIgdGhlIHJlcXVlc3QgVVJMIGlzIG9mIHRoZSBzYW1lIG9yaWdpbiBhcyBjdXJyZW50IGxvY2F0aW9uLlxuICAgIChmdW5jdGlvbiBzdGFuZGFyZEJyb3dzZXJFbnYoKSB7XG4gICAgICB2YXIgbXNpZSA9IC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICB2YXIgdXJsUGFyc2luZ05vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICB2YXIgb3JpZ2luVVJMO1xuXG4gICAgICAvKipcbiAgICAqIFBhcnNlIGEgVVJMIHRvIGRpc2NvdmVyIGl0J3MgY29tcG9uZW50c1xuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmwgVGhlIFVSTCB0byBiZSBwYXJzZWRcbiAgICAqIEByZXR1cm5zIHtPYmplY3R9XG4gICAgKi9cbiAgICAgIGZ1bmN0aW9uIHJlc29sdmVVUkwodXJsKSB7XG4gICAgICAgIHZhciBocmVmID0gdXJsO1xuXG4gICAgICAgIGlmIChtc2llKSB7XG4gICAgICAgIC8vIElFIG5lZWRzIGF0dHJpYnV0ZSBzZXQgdHdpY2UgdG8gbm9ybWFsaXplIHByb3BlcnRpZXNcbiAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBocmVmKTtcbiAgICAgICAgICBocmVmID0gdXJsUGFyc2luZ05vZGUuaHJlZjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcnNpbmdOb2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGhyZWYpO1xuXG4gICAgICAgIC8vIHVybFBhcnNpbmdOb2RlIHByb3ZpZGVzIHRoZSBVcmxVdGlscyBpbnRlcmZhY2UgLSBodHRwOi8vdXJsLnNwZWMud2hhdHdnLm9yZy8jdXJsdXRpbHNcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBocmVmOiB1cmxQYXJzaW5nTm9kZS5ocmVmLFxuICAgICAgICAgIHByb3RvY29sOiB1cmxQYXJzaW5nTm9kZS5wcm90b2NvbCA/IHVybFBhcnNpbmdOb2RlLnByb3RvY29sLnJlcGxhY2UoLzokLywgJycpIDogJycsXG4gICAgICAgICAgaG9zdDogdXJsUGFyc2luZ05vZGUuaG9zdCxcbiAgICAgICAgICBzZWFyY2g6IHVybFBhcnNpbmdOb2RlLnNlYXJjaCA/IHVybFBhcnNpbmdOb2RlLnNlYXJjaC5yZXBsYWNlKC9eXFw/LywgJycpIDogJycsXG4gICAgICAgICAgaGFzaDogdXJsUGFyc2luZ05vZGUuaGFzaCA/IHVybFBhcnNpbmdOb2RlLmhhc2gucmVwbGFjZSgvXiMvLCAnJykgOiAnJyxcbiAgICAgICAgICBob3N0bmFtZTogdXJsUGFyc2luZ05vZGUuaG9zdG5hbWUsXG4gICAgICAgICAgcG9ydDogdXJsUGFyc2luZ05vZGUucG9ydCxcbiAgICAgICAgICBwYXRobmFtZTogKHVybFBhcnNpbmdOb2RlLnBhdGhuYW1lLmNoYXJBdCgwKSA9PT0gJy8nKSA/XG4gICAgICAgICAgICB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZSA6XG4gICAgICAgICAgICAnLycgKyB1cmxQYXJzaW5nTm9kZS5wYXRobmFtZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBvcmlnaW5VUkwgPSByZXNvbHZlVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcblxuICAgICAgLyoqXG4gICAgKiBEZXRlcm1pbmUgaWYgYSBVUkwgc2hhcmVzIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBsb2NhdGlvblxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSByZXF1ZXN0VVJMIFRoZSBVUkwgdG8gdGVzdFxuICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgVVJMIHNoYXJlcyB0aGUgc2FtZSBvcmlnaW4sIG90aGVyd2lzZSBmYWxzZVxuICAgICovXG4gICAgICByZXR1cm4gZnVuY3Rpb24gaXNVUkxTYW1lT3JpZ2luKHJlcXVlc3RVUkwpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9ICh1dGlscy5pc1N0cmluZyhyZXF1ZXN0VVJMKSkgPyByZXNvbHZlVVJMKHJlcXVlc3RVUkwpIDogcmVxdWVzdFVSTDtcbiAgICAgICAgcmV0dXJuIChwYXJzZWQucHJvdG9jb2wgPT09IG9yaWdpblVSTC5wcm90b2NvbCAmJlxuICAgICAgICAgICAgcGFyc2VkLmhvc3QgPT09IG9yaWdpblVSTC5ob3N0KTtcbiAgICAgIH07XG4gICAgfSkoKSA6XG5cbiAgLy8gTm9uIHN0YW5kYXJkIGJyb3dzZXIgZW52cyAod2ViIHdvcmtlcnMsIHJlYWN0LW5hdGl2ZSkgbGFjayBuZWVkZWQgc3VwcG9ydC5cbiAgICAoZnVuY3Rpb24gbm9uU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIGlzVVJMU2FtZU9yaWdpbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9O1xuICAgIH0pKClcbik7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplSGVhZGVyTmFtZShoZWFkZXJzLCBub3JtYWxpemVkTmFtZSkge1xuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMsIGZ1bmN0aW9uIHByb2Nlc3NIZWFkZXIodmFsdWUsIG5hbWUpIHtcbiAgICBpZiAobmFtZSAhPT0gbm9ybWFsaXplZE5hbWUgJiYgbmFtZS50b1VwcGVyQ2FzZSgpID09PSBub3JtYWxpemVkTmFtZS50b1VwcGVyQ2FzZSgpKSB7XG4gICAgICBoZWFkZXJzW25vcm1hbGl6ZWROYW1lXSA9IHZhbHVlO1xuICAgICAgZGVsZXRlIGhlYWRlcnNbbmFtZV07XG4gICAgfVxuICB9KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoJy4vLi4vdXRpbHMnKTtcblxuLy8gSGVhZGVycyB3aG9zZSBkdXBsaWNhdGVzIGFyZSBpZ25vcmVkIGJ5IG5vZGVcbi8vIGMuZi4gaHR0cHM6Ly9ub2RlanMub3JnL2FwaS9odHRwLmh0bWwjaHR0cF9tZXNzYWdlX2hlYWRlcnNcbnZhciBpZ25vcmVEdXBsaWNhdGVPZiA9IFtcbiAgJ2FnZScsICdhdXRob3JpemF0aW9uJywgJ2NvbnRlbnQtbGVuZ3RoJywgJ2NvbnRlbnQtdHlwZScsICdldGFnJyxcbiAgJ2V4cGlyZXMnLCAnZnJvbScsICdob3N0JywgJ2lmLW1vZGlmaWVkLXNpbmNlJywgJ2lmLXVubW9kaWZpZWQtc2luY2UnLFxuICAnbGFzdC1tb2RpZmllZCcsICdsb2NhdGlvbicsICdtYXgtZm9yd2FyZHMnLCAncHJveHktYXV0aG9yaXphdGlvbicsXG4gICdyZWZlcmVyJywgJ3JldHJ5LWFmdGVyJywgJ3VzZXItYWdlbnQnXG5dO1xuXG4vKipcbiAqIFBhcnNlIGhlYWRlcnMgaW50byBhbiBvYmplY3RcbiAqXG4gKiBgYGBcbiAqIERhdGU6IFdlZCwgMjcgQXVnIDIwMTQgMDg6NTg6NDkgR01UXG4gKiBDb250ZW50LVR5cGU6IGFwcGxpY2F0aW9uL2pzb25cbiAqIENvbm5lY3Rpb246IGtlZXAtYWxpdmVcbiAqIFRyYW5zZmVyLUVuY29kaW5nOiBjaHVua2VkXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaGVhZGVycyBIZWFkZXJzIG5lZWRpbmcgdG8gYmUgcGFyc2VkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBIZWFkZXJzIHBhcnNlZCBpbnRvIGFuIG9iamVjdFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHBhcnNlSGVhZGVycyhoZWFkZXJzKSB7XG4gIHZhciBwYXJzZWQgPSB7fTtcbiAgdmFyIGtleTtcbiAgdmFyIHZhbDtcbiAgdmFyIGk7XG5cbiAgaWYgKCFoZWFkZXJzKSB7IHJldHVybiBwYXJzZWQ7IH1cblxuICB1dGlscy5mb3JFYWNoKGhlYWRlcnMuc3BsaXQoJ1xcbicpLCBmdW5jdGlvbiBwYXJzZXIobGluZSkge1xuICAgIGkgPSBsaW5lLmluZGV4T2YoJzonKTtcbiAgICBrZXkgPSB1dGlscy50cmltKGxpbmUuc3Vic3RyKDAsIGkpKS50b0xvd2VyQ2FzZSgpO1xuICAgIHZhbCA9IHV0aWxzLnRyaW0obGluZS5zdWJzdHIoaSArIDEpKTtcblxuICAgIGlmIChrZXkpIHtcbiAgICAgIGlmIChwYXJzZWRba2V5XSAmJiBpZ25vcmVEdXBsaWNhdGVPZi5pbmRleE9mKGtleSkgPj0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoa2V5ID09PSAnc2V0LWNvb2tpZScpIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSAocGFyc2VkW2tleV0gPyBwYXJzZWRba2V5XSA6IFtdKS5jb25jYXQoW3ZhbF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkW2tleV0gPSBwYXJzZWRba2V5XSA/IHBhcnNlZFtrZXldICsgJywgJyArIHZhbCA6IHZhbDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBwYXJzZWQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFN5bnRhY3RpYyBzdWdhciBmb3IgaW52b2tpbmcgYSBmdW5jdGlvbiBhbmQgZXhwYW5kaW5nIGFuIGFycmF5IGZvciBhcmd1bWVudHMuXG4gKlxuICogQ29tbW9uIHVzZSBjYXNlIHdvdWxkIGJlIHRvIHVzZSBgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5YC5cbiAqXG4gKiAgYGBganNcbiAqICBmdW5jdGlvbiBmKHgsIHksIHopIHt9XG4gKiAgdmFyIGFyZ3MgPSBbMSwgMiwgM107XG4gKiAgZi5hcHBseShudWxsLCBhcmdzKTtcbiAqICBgYGBcbiAqXG4gKiBXaXRoIGBzcHJlYWRgIHRoaXMgZXhhbXBsZSBjYW4gYmUgcmUtd3JpdHRlbi5cbiAqXG4gKiAgYGBganNcbiAqICBzcHJlYWQoZnVuY3Rpb24oeCwgeSwgeikge30pKFsxLCAyLCAzXSk7XG4gKiAgYGBgXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBzcHJlYWQoY2FsbGJhY2spIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXAoYXJyKSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KG51bGwsIGFycik7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJy4vaGVscGVycy9iaW5kJyk7XG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKTtcblxuLypnbG9iYWwgdG9TdHJpbmc6dHJ1ZSovXG5cbi8vIHV0aWxzIGlzIGEgbGlicmFyeSBvZiBnZW5lcmljIGhlbHBlciBmdW5jdGlvbnMgbm9uLXNwZWNpZmljIHRvIGF4aW9zXG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gQXJyYXlCdWZmZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIodmFsKSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGb3JtRGF0YVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGFuIEZvcm1EYXRhLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWwpIHtcbiAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlclxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgdmlldyBvbiBhbiBBcnJheUJ1ZmZlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlCdWZmZXJWaWV3KHZhbCkge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoKHR5cGVvZiBBcnJheUJ1ZmZlciAhPT0gJ3VuZGVmaW5lZCcpICYmIChBcnJheUJ1ZmZlci5pc1ZpZXcpKSB7XG4gICAgcmVzdWx0ID0gQXJyYXlCdWZmZXIuaXNWaWV3KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKHZhbCkgJiYgKHZhbC5idWZmZXIpICYmICh2YWwuYnVmZmVyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBTdHJpbmdcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIFN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZyc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBOdW1iZXJcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gdmFsIFRoZSB2YWx1ZSB0byB0ZXN0XG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB2YWx1ZSBpcyBhIE51bWJlciwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ251bWJlcic7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgdW5kZWZpbmVkXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHVuZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbCkge1xuICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYW4gT2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYW4gT2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3QodmFsKSB7XG4gIHJldHVybiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBEYXRlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBEYXRlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNEYXRlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGaWxlXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBGaWxlLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaWxlKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGaWxlXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBCbG9iXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBCbG9iLCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCbG9iKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBCbG9iXSc7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBGdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIGlmIHZhbHVlIGlzIGEgRnVuY3Rpb24sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xufVxuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHZhbHVlIGlzIGEgU3RyZWFtXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBTdHJlYW0sIG90aGVyd2lzZSBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N0cmVhbSh2YWwpIHtcbiAgcmV0dXJuIGlzT2JqZWN0KHZhbCkgJiYgaXNGdW5jdGlvbih2YWwucGlwZSk7XG59XG5cbi8qKlxuICogRGV0ZXJtaW5lIGlmIGEgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgaWYgdmFsdWUgaXMgYSBVUkxTZWFyY2hQYXJhbXMgb2JqZWN0LCBvdGhlcndpc2UgZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNVUkxTZWFyY2hQYXJhbXModmFsKSB7XG4gIHJldHVybiB0eXBlb2YgVVJMU2VhcmNoUGFyYW1zICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXM7XG59XG5cbi8qKlxuICogVHJpbSBleGNlc3Mgd2hpdGVzcGFjZSBvZmYgdGhlIGJlZ2lubmluZyBhbmQgZW5kIG9mIGEgc3RyaW5nXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgU3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBTdHJpbmcgZnJlZWQgb2YgZXhjZXNzIHdoaXRlc3BhY2VcbiAqL1xuZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKi8sICcnKS5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmUgaWYgd2UncmUgcnVubmluZyBpbiBhIHN0YW5kYXJkIGJyb3dzZXIgZW52aXJvbm1lbnRcbiAqXG4gKiBUaGlzIGFsbG93cyBheGlvcyB0byBydW4gaW4gYSB3ZWIgd29ya2VyLCBhbmQgcmVhY3QtbmF0aXZlLlxuICogQm90aCBlbnZpcm9ubWVudHMgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCwgYnV0IG5vdCBmdWxseSBzdGFuZGFyZCBnbG9iYWxzLlxuICpcbiAqIHdlYiB3b3JrZXJzOlxuICogIHR5cGVvZiB3aW5kb3cgLT4gdW5kZWZpbmVkXG4gKiAgdHlwZW9mIGRvY3VtZW50IC0+IHVuZGVmaW5lZFxuICpcbiAqIHJlYWN0LW5hdGl2ZTpcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnUmVhY3ROYXRpdmUnXG4gKiBuYXRpdmVzY3JpcHRcbiAqICBuYXZpZ2F0b3IucHJvZHVjdCAtPiAnTmF0aXZlU2NyaXB0JyBvciAnTlMnXG4gKi9cbmZ1bmN0aW9uIGlzU3RhbmRhcmRCcm93c2VyRW52KCkge1xuICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKG5hdmlnYXRvci5wcm9kdWN0ID09PSAnUmVhY3ROYXRpdmUnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOYXRpdmVTY3JpcHQnIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmF2aWdhdG9yLnByb2R1Y3QgPT09ICdOUycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAoXG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG4gICk7XG59XG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIEFycmF5IG9yIGFuIE9iamVjdCBpbnZva2luZyBhIGZ1bmN0aW9uIGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgYG9iamAgaXMgYW4gQXJyYXkgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgcGFzc2luZ1xuICogdGhlIHZhbHVlLCBpbmRleCwgYW5kIGNvbXBsZXRlIGFycmF5IGZvciBlYWNoIGl0ZW0uXG4gKlxuICogSWYgJ29iaicgaXMgYW4gT2JqZWN0IGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIHBhc3NpbmdcbiAqIHRoZSB2YWx1ZSwga2V5LCBhbmQgY29tcGxldGUgb2JqZWN0IGZvciBlYWNoIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSBvYmogVGhlIG9iamVjdCB0byBpdGVyYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgY2FsbGJhY2sgdG8gaW52b2tlIGZvciBlYWNoIGl0ZW1cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaChvYmosIGZuKSB7XG4gIC8vIERvbid0IGJvdGhlciBpZiBubyB2YWx1ZSBwcm92aWRlZFxuICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRm9yY2UgYW4gYXJyYXkgaWYgbm90IGFscmVhZHkgc29tZXRoaW5nIGl0ZXJhYmxlXG4gIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuICAgIC8qZXNsaW50IG5vLXBhcmFtLXJlYXNzaWduOjAqL1xuICAgIG9iaiA9IFtvYmpdO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgIC8vIEl0ZXJhdGUgb3ZlciBhcnJheSB2YWx1ZXNcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG9iai5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGZuLmNhbGwobnVsbCwgb2JqW2ldLCBpLCBvYmopO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBJdGVyYXRlIG92ZXIgb2JqZWN0IGtleXNcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICBmbi5jYWxsKG51bGwsIG9ialtrZXldLCBrZXksIG9iaik7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQWNjZXB0cyB2YXJhcmdzIGV4cGVjdGluZyBlYWNoIGFyZ3VtZW50IHRvIGJlIGFuIG9iamVjdCwgdGhlblxuICogaW1tdXRhYmx5IG1lcmdlcyB0aGUgcHJvcGVydGllcyBvZiBlYWNoIG9iamVjdCBhbmQgcmV0dXJucyByZXN1bHQuXG4gKlxuICogV2hlbiBtdWx0aXBsZSBvYmplY3RzIGNvbnRhaW4gdGhlIHNhbWUga2V5IHRoZSBsYXRlciBvYmplY3QgaW5cbiAqIHRoZSBhcmd1bWVudHMgbGlzdCB3aWxsIHRha2UgcHJlY2VkZW5jZS5cbiAqXG4gKiBFeGFtcGxlOlxuICpcbiAqIGBgYGpzXG4gKiB2YXIgcmVzdWx0ID0gbWVyZ2Uoe2ZvbzogMTIzfSwge2ZvbzogNDU2fSk7XG4gKiBjb25zb2xlLmxvZyhyZXN1bHQuZm9vKTsgLy8gb3V0cHV0cyA0NTZcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoxIE9iamVjdCB0byBtZXJnZVxuICogQHJldHVybnMge09iamVjdH0gUmVzdWx0IG9mIGFsbCBtZXJnZSBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIG1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gbWVyZ2UocmVzdWx0W2tleV0sIHZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGZvckVhY2goYXJndW1lbnRzW2ldLCBhc3NpZ25WYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBGdW5jdGlvbiBlcXVhbCB0byBtZXJnZSB3aXRoIHRoZSBkaWZmZXJlbmNlIGJlaW5nIHRoYXQgbm8gcmVmZXJlbmNlXG4gKiB0byBvcmlnaW5hbCBvYmplY3RzIGlzIGtlcHQuXG4gKlxuICogQHNlZSBtZXJnZVxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgT2JqZWN0IHRvIG1lcmdlXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXN1bHQgb2YgYWxsIG1lcmdlIHByb3BlcnRpZXNcbiAqL1xuZnVuY3Rpb24gZGVlcE1lcmdlKC8qIG9iajEsIG9iajIsIG9iajMsIC4uLiAqLykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHR5cGVvZiByZXN1bHRba2V5XSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHJlc3VsdFtrZXldLCB2YWwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gZGVlcE1lcmdlKHt9LCB2YWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHRba2V5XSA9IHZhbDtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICBmb3JFYWNoKGFyZ3VtZW50c1tpXSwgYXNzaWduVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbi8qKlxuICogRXh0ZW5kcyBvYmplY3QgYSBieSBtdXRhYmx5IGFkZGluZyB0byBpdCB0aGUgcHJvcGVydGllcyBvZiBvYmplY3QgYi5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgb2JqZWN0IHRvIGJlIGV4dGVuZGVkXG4gKiBAcGFyYW0ge09iamVjdH0gYiBUaGUgb2JqZWN0IHRvIGNvcHkgcHJvcGVydGllcyBmcm9tXG4gKiBAcGFyYW0ge09iamVjdH0gdGhpc0FyZyBUaGUgb2JqZWN0IHRvIGJpbmQgZnVuY3Rpb24gdG9cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHJlc3VsdGluZyB2YWx1ZSBvZiBvYmplY3QgYVxuICovXG5mdW5jdGlvbiBleHRlbmQoYSwgYiwgdGhpc0FyZykge1xuICBmb3JFYWNoKGIsIGZ1bmN0aW9uIGFzc2lnblZhbHVlKHZhbCwga2V5KSB7XG4gICAgaWYgKHRoaXNBcmcgJiYgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYVtrZXldID0gYmluZCh2YWwsIHRoaXNBcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhW2tleV0gPSB2YWw7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc0FycmF5OiBpc0FycmF5LFxuICBpc0FycmF5QnVmZmVyOiBpc0FycmF5QnVmZmVyLFxuICBpc0J1ZmZlcjogaXNCdWZmZXIsXG4gIGlzRm9ybURhdGE6IGlzRm9ybURhdGEsXG4gIGlzQXJyYXlCdWZmZXJWaWV3OiBpc0FycmF5QnVmZmVyVmlldyxcbiAgaXNTdHJpbmc6IGlzU3RyaW5nLFxuICBpc051bWJlcjogaXNOdW1iZXIsXG4gIGlzT2JqZWN0OiBpc09iamVjdCxcbiAgaXNVbmRlZmluZWQ6IGlzVW5kZWZpbmVkLFxuICBpc0RhdGU6IGlzRGF0ZSxcbiAgaXNGaWxlOiBpc0ZpbGUsXG4gIGlzQmxvYjogaXNCbG9iLFxuICBpc0Z1bmN0aW9uOiBpc0Z1bmN0aW9uLFxuICBpc1N0cmVhbTogaXNTdHJlYW0sXG4gIGlzVVJMU2VhcmNoUGFyYW1zOiBpc1VSTFNlYXJjaFBhcmFtcyxcbiAgaXNTdGFuZGFyZEJyb3dzZXJFbnY6IGlzU3RhbmRhcmRCcm93c2VyRW52LFxuICBmb3JFYWNoOiBmb3JFYWNoLFxuICBtZXJnZTogbWVyZ2UsXG4gIGRlZXBNZXJnZTogZGVlcE1lcmdlLFxuICBleHRlbmQ6IGV4dGVuZCxcbiAgdHJpbTogdHJpbVxufTtcbiIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmouY29uc3RydWN0b3IgIT0gbnVsbCAmJlxuICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqXG4gKlxuICogQGF1dGhvciBKZXJyeSBCZW5keSA8amVycnlAaWNld2luZ2NjLmNvbT5cbiAqIEBsaWNlbmNlIE1JVFxuICpcbiAqL1xuXG4oZnVuY3Rpb24oc2VsZikge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBuYXRpdmVVUkxTZWFyY2hQYXJhbXMgPSAoc2VsZi5VUkxTZWFyY2hQYXJhbXMgJiYgc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmdldCkgPyBzZWxmLlVSTFNlYXJjaFBhcmFtcyA6IG51bGwsXG4gICAgICAgIGlzU3VwcG9ydE9iamVjdENvbnN0cnVjdG9yID0gbmF0aXZlVVJMU2VhcmNoUGFyYW1zICYmIChuZXcgbmF0aXZlVVJMU2VhcmNoUGFyYW1zKHthOiAxfSkpLnRvU3RyaW5nKCkgPT09ICdhPTEnLFxuICAgICAgICAvLyBUaGVyZSBpcyBhIGJ1ZyBpbiBzYWZhcmkgMTAuMSAoYW5kIGVhcmxpZXIpIHRoYXQgaW5jb3JyZWN0bHkgZGVjb2RlcyBgJTJCYCBhcyBhbiBlbXB0eSBzcGFjZSBhbmQgbm90IGEgcGx1cy5cbiAgICAgICAgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAobmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygncz0lMkInKS5nZXQoJ3MnKSA9PT0gJysnKSxcbiAgICAgICAgX19VUkxTZWFyY2hQYXJhbXNfXyA9IFwiX19VUkxTZWFyY2hQYXJhbXNfX1wiLFxuICAgICAgICAvLyBGaXggYnVnIGluIEVkZ2Ugd2hpY2ggY2Fubm90IGVuY29kZSAnICYnIGNvcnJlY3RseVxuICAgICAgICBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSA9IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyA/IChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhbXBlcnNhbmRUZXN0ID0gbmV3IG5hdGl2ZVVSTFNlYXJjaFBhcmFtcygpO1xuICAgICAgICAgICAgYW1wZXJzYW5kVGVzdC5hcHBlbmQoJ3MnLCAnICYnKTtcbiAgICAgICAgICAgIHJldHVybiBhbXBlcnNhbmRUZXN0LnRvU3RyaW5nKCkgPT09ICdzPSslMjYnO1xuICAgICAgICB9KSgpIDogdHJ1ZSxcbiAgICAgICAgcHJvdG90eXBlID0gVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwucHJvdG90eXBlLFxuICAgICAgICBpdGVyYWJsZSA9ICEhKHNlbGYuU3ltYm9sICYmIHNlbGYuU3ltYm9sLml0ZXJhdG9yKTtcblxuICAgIGlmIChuYXRpdmVVUkxTZWFyY2hQYXJhbXMgJiYgaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgZGVjb2Rlc1BsdXNlc0NvcnJlY3RseSAmJiBlbmNvZGVzQW1wZXJzYW5kc0NvcnJlY3RseSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBNYWtlIGEgVVJMU2VhcmNoUGFyYW1zIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdHxzdHJpbmd8VVJMU2VhcmNoUGFyYW1zfSBzZWFyY2hcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbChzZWFyY2gpIHtcbiAgICAgICAgc2VhcmNoID0gc2VhcmNoIHx8IFwiXCI7XG5cbiAgICAgICAgLy8gc3VwcG9ydCBjb25zdHJ1Y3Qgb2JqZWN0IHdpdGggYW5vdGhlciBVUkxTZWFyY2hQYXJhbXMgaW5zdGFuY2VcbiAgICAgICAgaWYgKHNlYXJjaCBpbnN0YW5jZW9mIFVSTFNlYXJjaFBhcmFtcyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBVUkxTZWFyY2hQYXJhbXNQb2x5ZmlsbCkge1xuICAgICAgICAgICAgc2VhcmNoID0gc2VhcmNoLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gPSBwYXJzZVRvRGljdChzZWFyY2gpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICogQXBwZW5kcyBhIHNwZWNpZmllZCBrZXkvdmFsdWUgcGFpciBhcyBhIG5ldyBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgYXBwZW5kVG8odGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10sIG5hbWUsIHZhbHVlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVsZXRlcyB0aGUgZ2l2ZW4gc2VhcmNoIHBhcmFtZXRlciwgYW5kIGl0cyBhc3NvY2lhdGVkIHZhbHVlLFxuICAgICAqIGZyb20gdGhlIGxpc3Qgb2YgYWxsIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKi9cbiAgICBwcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICBkZWxldGUgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX10gW25hbWVdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBmaXJzdCB2YWx1ZSBhc3NvY2lhdGVkIHRvIHRoZSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bGx9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3RbbmFtZV1bMF0gOiBudWxsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgdmFsdWVzIGFzc29jaWF0aW9uIHdpdGggYSBnaXZlbiBzZWFyY2ggcGFyYW1ldGVyLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgcHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdmFyIGRpY3QgPSB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICAgICAgcmV0dXJuIG5hbWUgaW4gZGljdCA/IGRpY3QgW25hbWVdLnNsaWNlKDApIDogW107XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBCb29sZWFuIGluZGljYXRpbmcgaWYgc3VjaCBhIHNlYXJjaCBwYXJhbWV0ZXIgZXhpc3RzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICByZXR1cm4gbmFtZSBpbiB0aGlzIFtfX1VSTFNlYXJjaFBhcmFtc19fXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgdmFsdWUgYXNzb2NpYXRlZCB0byBhIGdpdmVuIHNlYXJjaCBwYXJhbWV0ZXIgdG9cbiAgICAgKiB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZXJlIHdlcmUgc2V2ZXJhbCB2YWx1ZXMsIGRlbGV0ZSB0aGVcbiAgICAgKiBvdGhlcnMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICAgICAqL1xuICAgIHByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiBzZXQobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcyBbX19VUkxTZWFyY2hQYXJhbXNfX11bbmFtZV0gPSBbJycgKyB2YWx1ZV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzdHJpbmcgY29udGFpbmcgYSBxdWVyeSBzdHJpbmcgc3VpdGFibGUgZm9yIHVzZSBpbiBhIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgcHJvdG90eXBlLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gdGhpc1tfX1VSTFNlYXJjaFBhcmFtc19fXSwgcXVlcnkgPSBbXSwgaSwga2V5LCBuYW1lLCB2YWx1ZTtcbiAgICAgICAgZm9yIChrZXkgaW4gZGljdCkge1xuICAgICAgICAgICAgbmFtZSA9IGVuY29kZShrZXkpO1xuICAgICAgICAgICAgZm9yIChpID0gMCwgdmFsdWUgPSBkaWN0W2tleV07IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHF1ZXJ5LnB1c2gobmFtZSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBxdWVyeS5qb2luKCcmJyk7XG4gICAgfTtcblxuICAgIC8vIFRoZXJlIGlzIGEgYnVnIGluIFNhZmFyaSAxMC4xIGFuZCBgUHJveHlgaW5nIGl0IGlzIG5vdCBlbm91Z2guXG4gICAgdmFyIGZvclN1cmVVc2VQb2x5ZmlsbCA9ICFkZWNvZGVzUGx1c2VzQ29ycmVjdGx5O1xuICAgIHZhciB1c2VQcm94eSA9ICghZm9yU3VyZVVzZVBvbHlmaWxsICYmIG5hdGl2ZVVSTFNlYXJjaFBhcmFtcyAmJiAhaXNTdXBwb3J0T2JqZWN0Q29uc3RydWN0b3IgJiYgc2VsZi5Qcm94eSlcbiAgICAvKlxuICAgICAqIEFwcGx5IHBvbGlmaWxsIHRvIGdsb2JhbCBvYmplY3QgYW5kIGFwcGVuZCBvdGhlciBwcm90b3R5cGUgaW50byBpdFxuICAgICAqL1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCAnVVJMU2VhcmNoUGFyYW1zJywge1xuICAgICAgICB2YWx1ZTogKHVzZVByb3h5ID9cbiAgICAgICAgICAgIC8vIFNhZmFyaSAxMC4wIGRvZXNuJ3Qgc3VwcG9ydCBQcm94eSwgc28gaXQgd29uJ3QgZXh0ZW5kIFVSTFNlYXJjaFBhcmFtcyBvbiBzYWZhcmkgMTAuMFxuICAgICAgICAgICAgbmV3IFByb3h5KG5hdGl2ZVVSTFNlYXJjaFBhcmFtcywge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdDogZnVuY3Rpb24odGFyZ2V0LCBhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KChuZXcgVVJMU2VhcmNoUGFyYW1zUG9seWZpbGwoYXJnc1swXSkudG9TdHJpbmcoKSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgIFVSTFNlYXJjaFBhcmFtc1BvbHlmaWxsKVxuICAgIH0pO1xuXG4gICAgdmFyIFVTUFByb3RvID0gc2VsZi5VUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlO1xuXG4gICAgVVNQUHJvdG8ucG9seWZpbGwgPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSB0aGlzQXJnXG4gICAgICovXG4gICAgVVNQUHJvdG8uZm9yRWFjaCA9IFVTUFByb3RvLmZvckVhY2ggfHwgZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICAgICAgdmFyIGRpY3QgPSBwYXJzZVRvRGljdCh0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhkaWN0KS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0uZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc0FyZywgdmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb3J0IGFsbCBuYW1lLXZhbHVlIHBhaXJzXG4gICAgICovXG4gICAgVVNQUHJvdG8uc29ydCA9IFVTUFByb3RvLnNvcnQgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBkaWN0ID0gcGFyc2VUb0RpY3QodGhpcy50b1N0cmluZygpKSwga2V5cyA9IFtdLCBrLCBpLCBqO1xuICAgICAgICBmb3IgKGsgaW4gZGljdCkge1xuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuc29ydCgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzWydkZWxldGUnXShrZXlzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV0sIHZhbHVlcyA9IGRpY3Rba2V5XTtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB2YWx1ZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGVuZChrZXksIHZhbHVlc1tqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpdGVyYXRvciBhbGxvd2luZyB0byBnbyB0aHJvdWdoIGFsbCBrZXlzIG9mXG4gICAgICogdGhlIGtleS92YWx1ZSBwYWlycyBjb250YWluZWQgaW4gdGhpcyBvYmplY3QuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XG4gICAgICovXG4gICAgVVNQUHJvdG8ua2V5cyA9IFVTUFByb3RvLmtleXMgfHwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IFtdO1xuICAgICAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24oaXRlbSwgbmFtZSkge1xuICAgICAgICAgICAgaXRlbXMucHVzaChuYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGl0ZXJhdG9yIGFsbG93aW5nIHRvIGdvIHRocm91Z2ggYWxsIHZhbHVlcyBvZlxuICAgICAqIHRoZSBrZXkvdmFsdWUgcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLnZhbHVlcyA9IFVTUFByb3RvLnZhbHVlcyB8fCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gW107XG4gICAgICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1ha2VJdGVyYXRvcihpdGVtcyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaXRlcmF0b3IgYWxsb3dpbmcgdG8gZ28gdGhyb3VnaCBhbGwga2V5L3ZhbHVlXG4gICAgICogcGFpcnMgY29udGFpbmVkIGluIHRoaXMgb2JqZWN0LlxuICAgICAqXG4gICAgICogQHJldHVybnMge2Z1bmN0aW9ufVxuICAgICAqL1xuICAgIFVTUFByb3RvLmVudHJpZXMgPSBVU1BQcm90by5lbnRyaWVzIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0sIG5hbWUpIHtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goW25hbWUsIGl0ZW1dKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYWtlSXRlcmF0b3IoaXRlbXMpO1xuICAgIH07XG5cblxuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgICBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBVU1BQcm90b1tzZWxmLlN5bWJvbC5pdGVyYXRvcl0gfHwgVVNQUHJvdG8uZW50cmllcztcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIGVuY29kZShzdHIpIHtcbiAgICAgICAgdmFyIHJlcGxhY2UgPSB7XG4gICAgICAgICAgICAnISc6ICclMjEnLFxuICAgICAgICAgICAgXCInXCI6ICclMjcnLFxuICAgICAgICAgICAgJygnOiAnJTI4JyxcbiAgICAgICAgICAgICcpJzogJyUyOScsXG4gICAgICAgICAgICAnfic6ICclN0UnLFxuICAgICAgICAgICAgJyUyMCc6ICcrJyxcbiAgICAgICAgICAgICclMDAnOiAnXFx4MDAnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bISdcXChcXCl+XXwlMjB8JTAwL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZVttYXRjaF07XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlY29kZShzdHIpIHtcbiAgICAgICAgcmV0dXJuIHN0clxuICAgICAgICAgICAgLnJlcGxhY2UoL1sgK10vZywgJyUyMCcpXG4gICAgICAgICAgICAucmVwbGFjZSgvKCVbYS1mMC05XXsyfSkrL2lnLCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZUl0ZXJhdG9yKGFycikge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSB7XG4gICAgICAgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBhcnIuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RvbmU6IHZhbHVlID09PSB1bmRlZmluZWQsIHZhbHVlOiB2YWx1ZX07XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICAgICAgICBpdGVyYXRvcltzZWxmLlN5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlcmF0b3I7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhcnNlVG9EaWN0KHNlYXJjaCkge1xuICAgICAgICB2YXIgZGljdCA9IHt9O1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc2VhcmNoID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAvLyBpZiBgc2VhcmNoYCBpcyBhbiBhcnJheSwgdHJlYXQgaXQgYXMgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgaWYgKGlzQXJyYXkoc2VhcmNoKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gc2VhcmNoW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBcnJheShpdGVtKSAmJiBpdGVtLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwgaXRlbVswXSwgaXRlbVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRmFpbGVkIHRvIGNvbnN0cnVjdCAnVVJMU2VhcmNoUGFyYW1zJzogU2VxdWVuY2UgaW5pdGlhbGl6ZXIgbXVzdCBvbmx5IGNvbnRhaW4gcGFpciBlbGVtZW50c1wiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc2VhcmNoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWFyY2guaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwZW5kVG8oZGljdCwga2V5LCBzZWFyY2hba2V5XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBmaXJzdCAnPydcbiAgICAgICAgICAgIGlmIChzZWFyY2guaW5kZXhPZihcIj9cIikgPT09IDApIHtcbiAgICAgICAgICAgICAgICBzZWFyY2ggPSBzZWFyY2guc2xpY2UoMSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYWlycyA9IHNlYXJjaC5zcGxpdChcIiZcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhaXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcGFpcnMgW2pdLFxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHZhbHVlLmluZGV4T2YoJz0nKTtcblxuICAgICAgICAgICAgICAgIGlmICgtMSA8IGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGVuZFRvKGRpY3QsIGRlY29kZSh2YWx1ZS5zbGljZSgwLCBpbmRleCkpLCBkZWNvZGUodmFsdWUuc2xpY2UoaW5kZXggKyAxKSkpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBlbmRUbyhkaWN0LCBkZWNvZGUodmFsdWUpLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGljdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBlbmRUbyhkaWN0LCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB2YXIgdmFsID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogKFxuICAgICAgICAgICAgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgdmFsdWUudG9TdHJpbmcgPT09ICdmdW5jdGlvbicgPyB2YWx1ZS50b1N0cmluZygpIDogSlNPTi5zdHJpbmdpZnkodmFsdWUpXG4gICAgICAgIClcblxuICAgICAgICBpZiAobmFtZSBpbiBkaWN0KSB7XG4gICAgICAgICAgICBkaWN0W25hbWVdLnB1c2godmFsKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRpY3RbbmFtZV0gPSBbdmFsXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzQXJyYXkodmFsKSB7XG4gICAgICAgIHJldHVybiAhIXZhbCAmJiAnW29iamVjdCBBcnJheV0nID09PSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG5cbn0pKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdGhpcykpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IHtuYXZpZ2F0aW9ufSBmcm9tIFwiLi9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCB7bmF2aWdhdGlvbn07IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RvbVwiO1xuaW1wb3J0IHtyZXF1ZXN0fSBmcm9tIFwiLi4vLi4vb2JqZWN0cy9yZXF1ZXN0XCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ldmVudHNcIjtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIHNpbXVsYXRlIGEgcGFnZSBjaGFuZ2UgYnkgdXNpbmcgYW4gWEhSIHJlcXVlc3QgdG8gZ3JhYiBjb250ZW50IGFuZCByZXBsYWNlIGl0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAqXG4gKiBBdXRvbWF0aWNhbGx5IHVwZGF0ZXMgdGhlIGJyb3dzZXIncyBoaXN0b3J5LCBzd2FwcyBvdXQgbWV0YSB0YWdzLCB1cGRhdGVzIHRoZSB0aXRsZSwgYW5kIG1vcmVcbiAqXG4gKiBVc2Ugb25Mb2FkIGFuZCBvblVubG9hZCBob29rcyB0byBhZGQgYWRkaXRpb25hbCBsb2dpYyBmb3IgdGhpbmdzIGxpa2UgdHJpZ2dlcmluZyBhIGdvb2dsZSBhbmFseXRpY3MgcGFnZSB2aWV3XG4gKiAgb3Igc2Nyb2xsaW5nIHRvIHRoZSB0b3Agb2YgdGhlIG5ldyBwYWdlXG4gKlxuICogQHR5cGUge3t0cmlnZ2VyT25Mb2FkOiAoZnVuY3Rpb24oKj0sICo9KTogbmF2aWdhdGlvbiksIHNldFBhc3N0aHJvdWdoRGF0YTogKGZ1bmN0aW9uKCopOiBuYXZpZ2F0aW9uKSwgX2luY29taW5nRWxlbWVudFNlbGVjdG9yOiBzdHJpbmcsIHNldExvYWRlckRlbGF5OiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgZnVsbFJlbG9hZDogbmF2aWdhdGlvbi5mdWxsUmVsb2FkLCB0cmlnZ2VyVW5sb2FkOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgcmVsb2FkOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgbG9hZDogbmF2aWdhdGlvbi5sb2FkLCBjbGVhclBhc3N0aHJvdWdoRGF0YTogKGZ1bmN0aW9uKCk6IG5hdmlnYXRpb24pLCByZXBsYWNlUGFnZUNvbnRlbnQoKj0sICo9LCAqPSwgKj0sICo9KTogKiwgaGlkZUxvYWRlcjogKGZ1bmN0aW9uKCk6IG5hdmlnYXRpb24pLCBsb2FkZXJFbmFibGVkOiBib29sZWFuLCBzaG93TG9hZGVyOiAoZnVuY3Rpb24oKTogbmF2aWdhdGlvbiksIHNldFJlcGxhY2VFbGVtZW50OiBuYXZpZ2F0aW9uLnNldFJlcGxhY2VFbGVtZW50LCBfbG9hZGVyRGVsYXk6IG51bWJlciwgZ2V0UmVwbGFjZUVsZW1lbnQ6IChmdW5jdGlvbigpOiBzdHJpbmcpLCByZWRpcmVjdDogbmF2aWdhdGlvbi5yZWRpcmVjdCwgZ2V0TG9hZGVyRGVsYXk6IChmdW5jdGlvbigpOiBudW1iZXIpLCBvblVubG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGluaXRIaXN0b3J5SGFuZGxlcnM6IChmdW5jdGlvbigpOiBuYXZpZ2F0aW9uKSwgX3Bhc3N0aHJvdWdoRGF0YTogbnVsbCwgc2V0SW5jb21pbmdFbGVtZW50OiBuYXZpZ2F0aW9uLnNldEluY29taW5nRWxlbWVudCwgcGFyc2VIVE1MKCo9LCAqPSk6IHttZXRhczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXAsIHN0cmluZ1tdPiwgcm91dGU6ICgqfGFueXxFbGVtZW50KSwgbGlua3M6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwLCBzdHJpbmdbXT4sIGh0bWw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgYm9keV9jbGFzc2VzOiBET01Ub2tlbkxpc3R9LCBzZXRUaXRsZTogKGZ1bmN0aW9uKCopOiBuYXZpZ2F0aW9uKSwgZ2V0UGFzc1Rocm91Z2hEYXRhOiAoZnVuY3Rpb24oKik6IG51bGwpLCBvbk5hdmlnYXRpb25GYWlsdXJlOiAoZnVuY3Rpb24oKj0pOiBuYXZpZ2F0aW9uKSwgX3JlcGxhY2VFbGVtZW50U2VsZWN0b3I6IHN0cmluZywgZ2V0Um91dGVGcm9tTWV0YTogKGZ1bmN0aW9uKCo9KTogKGFueSB8IEVsZW1lbnQpKSwgZ2V0TG9hZGVyRWw6IG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwsIG9uTG9hZDogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIHRyaWdnZXJOYXZpZ2F0aW9uRmFpbHVyZTogKGZ1bmN0aW9uKCo9KTogbmF2aWdhdGlvbiksIGdldEluY29taW5nRWxlbWVudDogKGZ1bmN0aW9uKCk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvbiA9IHtcblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyBkYXRhIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSBvbmxvYWQgY2FsbGJhY2sgYWZ0ZXIgbmF2aWdhdGluZyB0byBhbm90aGVyIHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqL1xuICAgIF9wYXNzdGhyb3VnaERhdGE6IG51bGwsXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIGRhdGEgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIG5leHQgcGFnZVxuICAgICAqICB0aGlzIGRhdGEgcGVyc2lzdHMgdW50aWwgY2xlYXJlZCBtYW51YWxseSBhbmQgd2lsbCBiZSBwcm92aWRlZCB0byBBTEwgc3Vic2VxdWVudCBvbkxvYWQgaGFuZGxlcnNcbiAgICAgKiAgIChvciBpdCBjYW4gYmUgZ3JhYmJlZCBtYW51YWxseSBmcm9tIHRoaXMgb2JqZWN0IGF0IGFueSB0aW1lKVxuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRQYXNzdGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpXG4gICAge1xuICAgICAgICB0aGlzLl9wYXNzdGhyb3VnaERhdGEgPSBkYXRhO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xlYXJzIGRhdGEgcHJvdmlkZWQgZm9yIHRoZSBuZXh0IHBhZ2VcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIGNsZWFyUGFzc3Rocm91Z2hEYXRhOiBmdW5jdGlvbigpXG4gICAge1xuICAgICAgICB0aGlzLnNldFBhc3N0aHJvdWdoRGF0YShudWxsKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW55IGRhdGEgdGhhdCBoYXMgYmVlbiBzZXQgZm9yIHBhc3NpbmcgdG8gc3Vic2VxdWVudCBwYWdlc1xuICAgICAqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKiBAcmV0dXJucyB7bnVsbH1cbiAgICAgKi9cbiAgICBnZXRQYXNzVGhyb3VnaERhdGE6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFzc3Rocm91Z2hEYXRhO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCBpbiB0aGUgcmVzcG9uc2Ugd2hpY2ggY29udGFpbnMgdGhlIEhUTUwgeW91IHdhbnQgdG8gcHVsbCBhbmQgcHV0IG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgKi9cbiAgICBfaW5jb21pbmdFbGVtZW50U2VsZWN0b3I6ICdib2R5JyxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGVsZW1lbnQgaW4gdGhlIHJlc3BvbnNlIHdoaWNoIGNvbnRhaW5zIHRoZSBIVE1MIHlvdSB3YW50IHRvIHB1bGwgYW5kIHB1dCBvbiB0aGUgY3VycmVudCBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gc2VsZWN0b3Jfc3RyaW5nXG4gICAgICovXG4gICAgc2V0SW5jb21pbmdFbGVtZW50OiBmdW5jdGlvbihzZWxlY3Rvcl9zdHJpbmcpe1xuICAgICAgICBpZiggdHlwZW9mIHNlbGVjdG9yX3N0cmluZyAhPT0gJ3N0cmluZycgKSB0aHJvdyBgJHtzZWxlY3Rvcl9zdHJpbmd9IGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIHRoaXMuX2luY29taW5nRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBlbGVtZW50IGluIHRoZSByZXNwb25zZSB3aGljaCBjb250YWlucyB0aGUgSFRNTCB5b3Ugd2FudCB0byBwdWxsIGFuZCBwdXQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRJbmNvbWluZ0VsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbmNvbWluZ0VsZW1lbnRTZWxlY3RvcjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhpcyBlbGVtZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKi9cbiAgICBfcmVwbGFjZUVsZW1lbnRTZWxlY3RvcjogJ2JvZHknLFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgc2VsZWN0b3Igc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzZWxlY3Rvcl9zdHJpbmdcbiAgICAgKi9cbiAgICBzZXRSZXBsYWNlRWxlbWVudDogZnVuY3Rpb24oc2VsZWN0b3Jfc3RyaW5nKXtcbiAgICAgICAgaWYoIHR5cGVvZiBzZWxlY3Rvcl9zdHJpbmcgIT09ICdzdHJpbmcnICkgdGhyb3cgYCR7c2VsZWN0b3Jfc3RyaW5nfSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yID0gc2VsZWN0b3Jfc3RyaW5nO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBzZWxlY3RvcnMgc3RyaW5nIGZvciB0aGUgZWxlbWVudCBvbiB0aGUgY3VycmVudCBwYWdlIHRoYXQgd2lsbCBiZSByZXBsYWNlZCB3aXRoIGluY29taW5nIEhUTUxcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0UmVwbGFjZUVsZW1lbnQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlRWxlbWVudFNlbGVjdG9yO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHcmFicyBIVE1MIGZyb20gYSBVUkwgYW5kIHJlcGxhY2VzIGNvbnRlbnQgb24gdGhlIGN1cnJlbnQgcGFnZVxuICAgICAqXG4gICAgICogMSkgU2hvd3MgYSBsb2FkZXIgKGlmIGVuYWJsZWQpXG4gICAgICogMikgUmVxdWVzdHMgY29udGVudCBmcm9tIHRoZSBwcm92aWRlZCBVUkxcbiAgICAgKiAzKSBSZXBsYWNlcyBpdCBvbiB0aGUgcGFnZSAoYW5kIGFsbCB0aGUgbWFnaWMgcmVwbGFjZVBhZ2VDb250ZW50IGRvZXMsIHNlZSBjb21tZW50cyBvbiB0aGF0IG1ldGhvZCBiZWxvdylcbiAgICAgKiA0KSBJZiB0aGVyZSdzIGEgY2FsbGJhY2sgcHJvdmlkZWQsIGl0J2xsIGJlIHJ1biBhZnRlcndhcmRzIChpdCByZWNlaXZlcyB0aGUgbmV3bHkgcmVwbGFjZWQgZWxlbWVudCBhcyBhIHBhcmFtKVxuICAgICAqXG4gICAgICogT24gZXJyb3IsIGl0IHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBmYWlsdXJlIGFuZCBwcm92aWRlcyB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBpbmNvbWluZ19lbFxuICAgICAqIEBwYXJhbSByZXBsYWNlX2VsXG4gICAgICogQHBhcmFtIHB1c2hfc3RhdGVcbiAgICAgKi9cbiAgICBsb2FkOiBmdW5jdGlvbih1cmwsIGNhbGxiYWNrLCBpbmNvbWluZ19lbCwgcmVwbGFjZV9lbCwgcHVzaF9zdGF0ZSl7XG4gICAgICAgIGlmKCB0eXBlb2YgdXJsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCBVUkwgKCR7dXJsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICBpbmNvbWluZ19lbCA9IHR5cGVvZiBpbmNvbWluZ19lbCA9PSAndW5kZWZpbmVkJyB8fCAhaW5jb21pbmdfZWwgPyB0aGlzLmdldEluY29taW5nRWxlbWVudCgpIDogaW5jb21pbmdfZWw7XG4gICAgICAgIHJlcGxhY2VfZWwgPSB0eXBlb2YgcmVwbGFjZV9lbCA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJlcGxhY2VfZWwgPyB0aGlzLmdldFJlcGxhY2VFbGVtZW50KCkgOiByZXBsYWNlX2VsO1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaWYoIHR5cGVvZiBpbmNvbWluZ19lbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgaW5jb21pbmdfZWwgKCR7aW5jb21pbmdfZWx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiggdHlwZW9mIHJlcGxhY2VfZWwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIHJlcGxhY2VfZWwgKCR7cmVwbGFjZV9lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG5cbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG5cbiAgICAgICAgYXhpb3MuZ2V0KHVybCkudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIG5hdmlnYXRpb24uaGlkZUxvYWRlcigpO1xuXG4gICAgICAgICAgICBuYXZpZ2F0aW9uLnJlcGxhY2VQYWdlQ29udGVudChyZXNwb25zZS5kYXRhLCB1cmwsIGluY29taW5nX2VsLCByZXBsYWNlX2VsLCBwdXNoX3N0YXRlKTtcblxuICAgICAgICAgICAgLy9pZiBhIGNhbGxiYWNrIHdhcyBwcm92aWRlZCwgcnVuIGl0IGFuZCBwcm92aWRlIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIC8vd2FpdCBmb3IgdGhlIG9udW5sb2FkIGNhbGxiYWNrcyB0byBydW4gYW5kIHRoZSBuZXcgY29udGVudCB0byBiZSBwdXQgb24gdGhlIHBhZ2UgZmlyc3RcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhkb20uZ2V0RWxlbWVudChyZXBsYWNlX2VsKSwgcGFyZW50X2VsLCBuYXZpZ2F0aW9uLmdldFBhc3NUaHJvdWdoRGF0YSgpKTtcbiAgICAgICAgICAgICAgICB9LCAxMDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmhpZGVMb2FkZXIoKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24udHJpZ2dlck5hdmlnYXRpb25GYWlsdXJlKGVycm9yKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9KTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBvciBub3QgdGhlIGxvYWRlciBhdCB0aGUgdG9wIGlzIGVuYWJsZWQgdG8gZGlzcGxheSBvbiBzbG93IHJlcXVlc3RzXG4gICAgICovXG4gICAgbG9hZGVyRW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICBfbG9hZGVyRGVsYXk6IDMwMCxcblxuICAgIC8qKlxuICAgICAqIFNldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIFNldCB0byAwIGlmIHlvdSB3YW50IGl0IHRvIGFsd2F5cyBzaG93XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGVsYXlfaW5fbXNcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRMb2FkZXJEZWxheTogZnVuY3Rpb24oZGVsYXlfaW5fbXMpe1xuICAgICAgICBpZiggdHlwZW9mIGRlbGF5X2luX21zICE9PSBcIm51bWJlclwiICkgdGhyb3cgYCR7ZGVsYXlfaW5fbXN9IGlzIG5vdCBhbiBpbnRlZ2VyYDtcbiAgICAgICAgdGhpcy5fbG9hZGVyRGVsYXkgPSBkZWxheV9pbl9tcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEdldHMgaG93IGxvbmcgdG8gZGVsYXkgZHVyaW5nIGEgc2xvdyByZXF1ZXN0IGJlZm9yZSBzaG93aW5nIHRoZSBsb2FkZXIgKGluIG1pbGxpc2Vjb25kcylcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRGVsYXk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9sb2FkZXJEZWxheTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ2xhc3NlcyBmb3IgdGhlIGxvYWRlclxuICAgICAqIERlZmF1bHRzIGFyZSBmb3IgYm9vdHN0cmFwICh3aXRoIHRoZSBleGNlcHRpb24gb2YgcGFnZS1uYXZpZ2F0aW9uLWxvYWRlcilcbiAgICAgKi9cbiAgICBfbG9hZGVyQ2xhc3NlczogJ3Byb2dyZXNzIHBhZ2UtbmF2aWdhdGlvbi1sb2FkZXInLFxuICAgIF9sb2FkZXJJbm5lckRpdkNsYXNzZXM6ICdwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkJyxcblxuICAgIC8qKlxuICAgICAqIElmIGVuYWJsZWQsIGFkZHMgYSBsb2FkZXIgdG8gdGhlIHBhZ2UgYW5kIGNhY2hlcyBhIHJlZmVyZW5jZSB0byBpdCwgdGhlbiByZXR1cm5zIHRoYXQgcmVmZXJlbmNlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBFbGVtZW50XG4gICAgICovXG4gICAgZ2V0TG9hZGVyRWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuICAgICAgICBpZiggbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQgKSByZXR1cm4gbmF2aWdhdGlvbi5uYXZMb2FkZXJDYWNoZWQ7XG5cbiAgICAgICAgLy9wcmVwZW5kIHRoZSBsb2FkZXIgZWxlbWVudHNcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVyQ2xhc3NlcztcbiAgICAgICAgbGV0IGlubmVyX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbm5lcl9kaXYuY2xhc3NMaXN0ID0gdGhpcy5fbG9hZGVySW5uZXJEaXZDbGFzc2VzO1xuICAgICAgICBkaXYuYXBwZW5kKGlubmVyX2Rpdik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucHJlcGVuZChkaXYpO1xuXG4gICAgICAgIC8vZ2V0IGFuZCBjYWNoZSBhIHJlZmVyZW5jZSB0byBpdCBmb3IgZnV0dXJlIHJlcXVlc3RzXG4gICAgICAgIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkID0gZG9tLmdldEVsZW1lbnQoJy5wYWdlLW5hdmlnYXRpb24tbG9hZGVyJyk7XG5cbiAgICAgICAgcmV0dXJuIG5hdmlnYXRpb24ubmF2TG9hZGVyQ2FjaGVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGxvYWRlciBhdCB0aGUgdG9wIG9mIHRoZSBwYWdlIGlmIHRoZSByZXF1ZXN0IHRha2VzIG1vcmUgdGhhbiB0aGUgZGVsYXkgc2V0IGFib3ZlIHRvIGNvbXBsZXRlXG4gICAgICovXG4gICAgc2hvd0xvYWRlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICF0aGlzLmxvYWRlckVuYWJsZWQgKSByZXR1cm47XG5cbiAgICAgICAgbmF2aWdhdGlvbi5sb2FkZXJfdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uLmdldExvYWRlckVsKCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgIH0sIHRoaXMuZ2V0TG9hZGVyRGVsYXkoKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEhpZGVzIHRoZSBsb2FkZXIgYXQgdGhlIHRvcCBvZiB0aGUgcGFnZVxuICAgICAqL1xuICAgIGhpZGVMb2FkZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCAhdGhpcy5sb2FkZXJFbmFibGVkICkgcmV0dXJuO1xuXG4gICAgICAgIC8vaWYgdGhlIGxvYWRlciBzdGlsbCBoYXNuJ3Qgc2hvd24geWV0LCBwcmV2ZW50IGl0IGJlY2F1c2UgdGhlIHJlcXVlc3Qgd2FzIHZlcnkgZmFzdFxuICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KG5hdmlnYXRpb24ubG9hZGVyX3RpbWVvdXQpO1xuXG4gICAgICAgIC8vaGlkZSB0aGUgbG9hZGVyXG4gICAgICAgIG5hdmlnYXRpb24uZ2V0TG9hZGVyRWwoKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBpbmNvbWluZyBIVE1MIHRvIGdyYWIga2V5IGNvbXBvbmVudHMgbGlrZSBtZXRhIHRhZ3MgYW5kIHRoZSBpbm5lciBjb250ZW50IG9mIHRoZSBwYXJlbnQgZWxlbWVudFxuICAgICAqXG4gICAgICogSWYgbm8gcGFyZW50IGVsZW1lbnQgaXMgcHJvdmlkZWQsIGl0IHdpbGwganVzdCByZXR1cm4gdGhlIHByb3ZpZGVkIGh0bWxcbiAgICAgKlxuICAgICAqIEBwYXJhbSBodG1sXG4gICAgICogQHBhcmFtIHBhcmVudF9lbFxuICAgICAqIEByZXR1cm5zIHt7bWV0YXM6IEhUTUxDb2xsZWN0aW9uT2Y8SFRNTEVsZW1lbnRUYWdOYW1lTWFwW3N0cmluZ10+LCByb3V0ZTogKCp8YW55fEVsZW1lbnQpLCBsaW5rczogSFRNTENvbGxlY3Rpb25PZjxIVE1MRWxlbWVudFRhZ05hbWVNYXBbc3RyaW5nXT4sIGh0bWw6IHN0cmluZywgdGl0bGU6IHN0cmluZywgYm9keV9jbGFzc2VzOiBET01Ub2tlbkxpc3R9fVxuICAgICAqL1xuICAgIHBhcnNlSFRNTChodG1sLCBwYXJlbnRfZWwpXG4gICAge1xuICAgICAgICAvL2RlZmF1bHQgdG8gbnVsbCBpZiBub3QgcHJvdmlkZWRcbiAgICAgICAgcGFyZW50X2VsID0gdHlwZW9mIHBhcmVudF9lbCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcGFyZW50X2VsO1xuXG4gICAgICAgIC8vbXVzdCBiZSBhIHN0cmluZyBvciBudWxsXG4gICAgICAgIGlmKCB0eXBlb2YgcGFyZW50X2VsICE9PSAnc3RyaW5nJyAmJiBwYXJlbnRfZWwgIT09IG51bGwgKSB0aHJvdyBgUHJvdmlkZWQgcGFyZW50X2VsICgke3BhcmVudF9lbH0pIGlzIG5vdCBhIHN0cmluZyBvciBudWxsYDtcblxuICAgICAgICAvL3BhcnNlIHRoZSBpbmNvbWluZyBkb21cbiAgICAgICAgdmFyIHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICAgICAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoaHRtbCwgXCJ0ZXh0L2h0bWxcIik7XG5cbiAgICAgICAgLy9nZXQgcGFnZSB0aXRsZVxuICAgICAgICB2YXIgdGl0bGUgPSBkb2MucXVlcnlTZWxlY3RvcigndGl0bGUnKTtcbiAgICAgICAgdGl0bGUgPSB0aXRsZSA/IHRpdGxlLmlubmVyVGV4dCA6IG51bGw7XG5cbiAgICAgICAgLy9nZXQgYW55IG1ldGEgdGFnc1xuICAgICAgICB2YXIgbWV0YXMgPSBkb2MuaGVhZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnbWV0YScpO1xuICAgICAgICAvL2dldCB0aGUgY2Fub25pY2FsIGxpbmtcbiAgICAgICAgdmFyIGxpbmtzID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPVwiY2Fub25pY2FsXCJdJyk7XG4gICAgICAgIC8vZ2V0IGJvZHkgY2xhc3Nlc1xuICAgICAgICB2YXIgYm9keV9jbGFzc2VzID0gZG9jLmJvZHkuY2xhc3NMaXN0O1xuXG4gICAgICAgIC8vZGVmYXVsdCB0byB0aGUgaW5jb21pbmcgSFRNTFxuICAgICAgICB2YXIgbmV3X2h0bWwgPSBodG1sO1xuXG4gICAgICAgIC8vaWYgYSBwYXJlbnQgZWxlbWVudCB3YXMgcHJvdmlkZWQsIGZpbmQgaXRcbiAgICAgICAgaWYoIHBhcmVudF9lbCApe1xuICAgICAgICAgICAgdmFyIHNlbCA9IGRvYy5xdWVyeVNlbGVjdG9yKHBhcmVudF9lbCk7XG4gICAgICAgICAgICAvL2lmIGNvdWxkbid0IGZpbmQgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgIGlmKCAhc2VsICl7XG4gICAgICAgICAgICAgICAgdGhyb3cgYENvdWxkIG5vdCBmaW5kIHBhcmVudCBzZWxlY3RvciAke3BhcmVudF9lbH1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ncmFiIHRoZSBvdXRlckhUTUxcbiAgICAgICAgICAgIG5ld19odG1sID0gc2VsLm91dGVySFRNTDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZ2V0IHRoZSBuZXcgcGFnZSdzIHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnIChpZiBpdCBleGlzdHMpXG4gICAgICAgIHZhciByb3V0ZSA9IG5hdmlnYXRpb24uZ2V0Um91dGVGcm9tTWV0YShkb2MpO1xuXG4gICAgICAgIC8vIEdhcmJhZ2UgY29sbGVjdGlvbiwgeW91IGRvbid0IG5lZWQgdGhpcyBhbnltb3JlLlxuICAgICAgICBwYXJzZXIgPSBkb2MgPSBudWxsO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgICAgIHJvdXRlOiByb3V0ZSxcbiAgICAgICAgICAgIG1ldGFzOm1ldGFzLFxuICAgICAgICAgICAgbGlua3M6bGlua3MsXG4gICAgICAgICAgICBib2R5X2NsYXNzZXM6Ym9keV9jbGFzc2VzLFxuICAgICAgICAgICAgaHRtbDpuZXdfY29udGVudFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IHJvdXRlIGZyb20gdGhlIG1ldGEgdGFnIC0gaWYgaXQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBJZiB5b3UgZG9uJ3QgcHJvdmlkZSBIVE1MLCBpdCdsbCBncmFiIGl0IGZyb20gdGhlIGN1cnJlbnQgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEByZXR1cm5zIHthbnkgfCBFbGVtZW50fVxuICAgICAqL1xuICAgIGdldFJvdXRlRnJvbU1ldGE6IGZ1bmN0aW9uKGh0bWwpe1xuICAgICAgICBodG1sID0gdHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQuaGVhZCA6IGh0bWw7XG4gICAgICAgIHZhciByb3V0ZSA9IGh0bWwucXVlcnlTZWxlY3RvcignW25hbWU9XCJjdXJyZW50X3JvdXRlXCJdJyk7XG4gICAgICAgIHJvdXRlID0gcm91dGUgPyByb3V0ZS5jb250ZW50IDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXBsYWNlcyBjb250ZW50IG9uIHRoZSBjdXJyZW50IHBhZ2Ugd2l0aCBuZXcgSFRNTFxuICAgICAqXG4gICAgICogMSkgVHJpZ2dlcnMgdW5sb2FkKClcbiAgICAgKiAyKSBXYWl0cyAxMDBtc1xuICAgICAqIDMpIFBhcnNlcyB0aGUgaW5jb21pbmcgSFRNTCB0byBncmFiIGtleSBjb21wb25lbnRzXG4gICAgICogNCkgUmVwbGFjZXMgYWxsIG1ldGEgdGFncyAoaW1wb3J0YW50IGZvciBzb2NpYWwgbWVkaWEgc2hhcmluZyBhbW9uZyBvdGhlciB0aGluZ3MpXG4gICAgICogNSkgUmVwbGFjZXMgdGhlIGNhbm9uaWNhbCB0YWdcbiAgICAgKiA2KSBSZXBsYWNlcyBhbnkgY2xhc3NlcyBvbiB0aGUgYm9keSBzaW5jZSB0aGV5IGFyZSBnZW5lcmFsbHkgdXNlZCB0byBpbmRpY2F0ZSB3aGljaCBwYWdlIHlvdSdyZSBvblxuICAgICAqIDcpIFB1c2hlcyB0byB0aGUgYnJvd3NlcidzIGhpc3RvcnlcbiAgICAgKiA4KSBTZXRzIHRoZSBwYWdlIHRpdGxlXG4gICAgICogOSkgUmVwbGFjZXMgY29udGVudCBpbiB0aGUgRE9NXG4gICAgICogMTApIFRyaWdnZXJzIG9ubG9hZCgpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gaHRtbFxuICAgICAqIEBwYXJhbSB1cmxcbiAgICAgKiBAcGFyYW0gaW5jb21pbmdfZWxcbiAgICAgKiBAcGFyYW0gcmVwbGFjZV9lbFxuICAgICAqIEBwYXJhbSBwdXNoX3N0YXRlXG4gICAgICovXG4gICAgcmVwbGFjZVBhZ2VDb250ZW50KGh0bWwsIHVybCwgaW5jb21pbmdfZWwsIHJlcGxhY2VfZWwsIHB1c2hfc3RhdGUpXG4gICAge1xuICAgICAgICBwdXNoX3N0YXRlID0gdHlwZW9mIHB1c2hfc3RhdGUgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IHB1c2hfc3RhdGU7XG5cbiAgICAgICAgaW5jb21pbmdfZWwgPSB0eXBlb2YgaW5jb21pbmdfZWwgPT09ICd1bmRlZmluZWQnIHx8ICFpbmNvbWluZ19lbCA/IHRoaXMuZ2V0SW5jb21pbmdFbGVtZW50KCkgOiBpbmNvbWluZ19lbDtcbiAgICAgICAgcmVwbGFjZV9lbCA9IHR5cGVvZiByZXBsYWNlX2VsID09PSAndW5kZWZpbmVkJyB8fCAhcmVwbGFjZV9lbCA/IHRoaXMuZ2V0UmVwbGFjZUVsZW1lbnQoKSA6IHJlcGxhY2VfZWw7XG5cbiAgICAgICAgaWYoIHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnICkgdGhyb3cgYFByb3ZpZGVkIHVybCAoJHt1cmx9KSBpcyBub3QgYSBzdHJpbmdgO1xuICAgICAgICBpZiggdHlwZW9mIGluY29taW5nX2VsICE9PSAnc3RyaW5nJyApIHRocm93IGBQcm92aWRlZCBpbmNvbWluZ19lbCAoJHtpbmNvbWluZ19lbH0pIGlzIG5vdCBhIHN0cmluZ2A7XG4gICAgICAgIGlmKCB0eXBlb2YgcmVwbGFjZV9lbCAhPT0gJ3N0cmluZycgKSB0aHJvdyBgUHJvdmlkZWQgcmVwbGFjZV9lbCAoJHtyZXBsYWNlX2VsfSkgaXMgbm90IGEgc3RyaW5nYDtcblxuICAgICAgICAvL3RyaWdnZXIgbmF2IGNvbXBsZXRlIGV2ZW50XG4gICAgICAgIC8vZ2V0IHJlcGxhY2VfZWwgYWdhaW4gYmVjYXVzZSBpdCB3YXMgcmVwbGFjZWRcbiAgICAgICAgbmF2aWdhdGlvbi50cmlnZ2VyVW5sb2FkKGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWwpLCByZXBsYWNlX2VsKTtcblxuICAgICAgICAvL3Zlcnkgc2xpZ2h0IDEwMG1zIGRlbGF5IHRvIGxldCB0aGUgb24gdW5sb2FkIGhhbmRsZXJzIHJ1biBmaXJzdFxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IG5hdmlnYXRpb24ucGFyc2VIVE1MKGh0bWwsIGluY29taW5nX2VsKTtcblxuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBIVE1MIHRvIHB1dCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgaWYoIHBhcnNlZC5odG1sLmxlbmd0aCApIHtcblxuICAgICAgICAgICAgICAgIC8vcmVtb3ZlIGFsbCBtZXRhIHRhZ3MgYW5kIHJlcGxhY2UgZnJvbSBuZXcgcGFnZVxuICAgICAgICAgICAgICAgIGRvbS5yZW1vdmUoJ21ldGEnKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChwYXJzZWQubWV0YXMpO1xuXG4gICAgICAgICAgICAgICAgLy9hZGQgdGhlIGNhbm9uaWNhbCBsaW5rXG4gICAgICAgICAgICAgICAgLy8gLSBwb3NzaWJseSBvdGhlciB0YWdzIHdpbGwgbmVlZCB0byBiZSB3aGl0ZWxpc3RlZCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAgICAgICAgIC8vIC0gdGhlIG1haW4gY29uY2VybiBpcyBub3QgcHV0dGluZyBKUy9DU1MgaW50byB0aGUgY3VycmVudCBwYWdlIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgnW3JlbD1cImNhbm9uaWNhbFwiXScpO1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20ocGFyc2VkLmxpbmtzKS5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspe1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZChsaW5rKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vYWRkIGJvZHkgY2xhc3Nlc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0ID0gcGFyc2VkLmJvZHlfY2xhc3NlcztcblxuICAgICAgICAgICAgICAgIC8vcHVzaCB0aGUgc3RhdGUgdG8gdGhlIGJyb3dzZXIncyBoaXN0b3J5XG4gICAgICAgICAgICAgICAgcHVzaF9zdGF0ZSAmJiBoaXN0b3J5LnB1c2hTdGF0ZSh7dXJsOiB1cmx9LCBwYXJzZWQudGl0bGUsIHVybCk7XG5cbiAgICAgICAgICAgICAgICAvL3VwZGF0ZSB0aGUgdGFiL3BhZ2UgdGl0bGVcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnNldFRpdGxlKHBhcnNlZC50aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAvL3JlcGxhY2UgY29udGVudCBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgICAgIGRvbS5nZXRFbGVtZW50KHJlcGxhY2VfZWwpLm91dGVySFRNTCA9IHBhcnNlZC5odG1sO1xuXG4gICAgICAgICAgICAgICAgLy90cmlnZ2VyIG5hdiBjb21wbGV0ZSBldmVudFxuICAgICAgICAgICAgICAgIC8vZ2V0IHJlcGxhY2VfZWwgYWdhaW4gYmVjYXVzZSBpdCB3YXMgcmVwbGFjZWRcbiAgICAgICAgICAgICAgICBuYXZpZ2F0aW9uLnRyaWdnZXJPbkxvYWQoZG9tLmdldEVsZW1lbnQoaW5jb21pbmdfZWwpLCBpbmNvbWluZ19lbCwgcGFyc2VkLnJvdXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVmcmVzaGVzIHRoZSBjdXJyZW50IHBhZ2UgdXNpbmcgLmxvYWQoKVxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgcmVsb2FkOiBmdW5jdGlvbihjYWxsYmFjayl7XG4gICAgICAgIGNhbGxiYWNrID0gdHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nID8gbnVsbCA6IGNhbGxiYWNrO1xuICAgICAgICBuYXZpZ2F0aW9uLmxvYWQocmVxdWVzdC5nZXRGdWxsVVJMKCksIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgZnVsbCByZWZyZXNoIG9mIHRoZSBjdXJyZW50IFVSTFxuICAgICAqXG4gICAgICogQHJldHVybnMge25hdmlnYXRpb259XG4gICAgICovXG4gICAgZnVsbFJlbG9hZDogZnVuY3Rpb24oKXtcbiAgICAgICAgbmF2aWdhdGlvbi5zaG93TG9hZGVyKCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2VuZHMgdGhlIHVzZXIgdG8gYSBuZXcgcGFnZSB3aXRob3V0IFhIUlxuICAgICAqXG4gICAgICogQHBhcmFtIHVybFxuICAgICAqL1xuICAgIHJlZGlyZWN0OiBmdW5jdGlvbih1cmwpe1xuICAgICAgICBuYXZpZ2F0aW9uLnNob3dMb2FkZXIoKTtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHRpdGxlIG9mIHRoZSBwYWdlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGl0bGVcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBzZXRUaXRsZTogZnVuY3Rpb24odGl0bGUpe1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBhIG5ldyBwYWdlIGxvYWRzLCB5b3UgcHJvYmFibHkgd2FudCB0byBraWNrb2ZmIHNvbWUgcGFnZS1zcGVjaWZpYyBKUy5cbiAgICAgKlxuICAgICAqIFRoZSBjYWxsYmFjayByZWNlaXZlcyB0aGUgZXZlbnQuXG4gICAgICogVGhlIGV2ZW50IGhhcyBhIHByb3BlcnR5IGNhbGxlZCBcImRldGFpbFwiIHdoaWNoIHdpbGwgY29udGFpbjpcbiAgICAgKiAgMSkgVGhlIHJlcGxhY2VfZWwgKHRoZSBlbGVtZW50IHdobydzIGNvbnRlbnQgd2FzIHN3YXBwZWQgb3V0KVxuICAgICAqICAyKSBUaGUgcm91dGUgKHlvdSBjYW4gZGVmaW5lIHRoaXMgaW4gYSBtZXRhIHRhZyBjYWxsZWQgXCJjdXJyZW50X3JvdXRlXCIgd2hpY2ggd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGdyYWJiZWQgYW5kIHBhc3NlZCBhbG9uZylcbiAgICAgKiAgMykgQW55IGRhdGEgeW91IHNldCB1c2luZyAuc2V0UGFzc3Rocm91Z2hEYXRhKClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEByZXR1cm5zIHtuYXZpZ2F0aW9ufVxuICAgICAqL1xuICAgIG9uTG9hZDogZnVuY3Rpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICBldmVudHMub24oJ2JvZHknLCAnbmF2aWdhdGlvbi5jb21wbGV0ZScsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gbGVhdmluZyBhIHBhZ2UgeW91IG1pZ2h0IG5lZWQgdG8gZGVzdHJveSBzb21lIHBsdWdpbnMgb3Igc29tZXRoaW5nXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBvblVubG9hZDogZnVuY3Rpb24oY2FsbGJhY2spXG4gICAge1xuICAgICAgICBldmVudHMub24oJ2JvZHknLCAnbmF2aWdhdGlvbi5zdGFydGVkJywgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiB0aGUgbmV3IHBhZ2UgZmFpbHMgdG8gbG9hZCwgeW91IHNob3VsZCBwcm9iYWJseSB0ZWxsIHRoZSB1c2VyXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyB7bmF2aWdhdGlvbn1cbiAgICAgKi9cbiAgICBvbk5hdmlnYXRpb25GYWlsdXJlOiBmdW5jdGlvbihjYWxsYmFjaylcbiAgICB7XG4gICAgICAgIGV2ZW50cy5vbignYm9keScsICduYXZpZ2F0aW9uLmZhaWxlZCcsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIG9uIGEgbmV3IHBhZ2UsIHRlbGwgdGhlIHdvcmxkLlxuICAgICAqXG4gICAgICogQWxzbyBpbmNsdWRlcyB0aGUgcm91dGUgb2YgdGhlIG5ldyBwYWdlIChpZiBpdCBleGlzdHMgaW4gYSBtZXRhIHRhZykgc28gdGhhdCB5b3UgY2FuIGtpY2sgb2ZmIEpTIHNwZWNpZmljIHRvIHRoYXQgcGFnZVxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVsX3NlbGVjdG9yXG4gICAgICogQHBhcmFtIHJvdXRlXG4gICAgICovXG4gICAgdHJpZ2dlck9uTG9hZDogZnVuY3Rpb24oZWwsIGVsX3NlbGVjdG9yLCByb3V0ZSl7XG4gICAgICAgIHJvdXRlID0gdHlwZW9mIHJvdXRlICE9PSAndW5kZWZpbmVkJyA/IHJvdXRlIDogbmF2aWdhdGlvbi5nZXRSb3V0ZUZyb21NZXRhKCk7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uY29tcGxldGUnLCB7XG4gICAgICAgICAgICBlbDplbCxcbiAgICAgICAgICAgIGVsX3NlbGVjdG9yOmVsX3NlbGVjdG9yLFxuICAgICAgICAgICAgcm91dGU6cm91dGUsXG4gICAgICAgICAgICBkYXRhOnRoaXMuZ2V0UGFzc1Rocm91Z2hEYXRhKClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdlJ3JlIGxlYXZpbmcgdGhlIGxhc3QgcGFnZSwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKi9cbiAgICB0cmlnZ2VyVW5sb2FkOiBmdW5jdGlvbihlbCl7XG4gICAgICAgIGV2ZW50cy50cmlnZ2VyKCdib2R5JywgJ25hdmlnYXRpb24uc3RhcnRlZCcsIHtlbDplbH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBOYXZpZ2F0aW9uIGZhaWxlZCwgdGVsbCB0aGUgd29ybGQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZXJyb3JcbiAgICAgKi9cbiAgICB0cmlnZ2VyTmF2aWdhdGlvbkZhaWx1cmU6IGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgZXZlbnRzLnRyaWdnZXIoJ2JvZHknLCAnbmF2aWdhdGlvbi5mYWlsZWQnLCB7ZXJyb3I6ZXJyb3J9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgZXZlbnQgaGFuZGxlcnMgdG8gdHJhY2sgdGhlIGJyb3dzZXIncyBoaXN0b3J5IGJ1dHRvbnMgKGJhY2svZm9yd2FyZClcbiAgICAgKlxuICAgICAqIEB0b2RvOiBJbnZlc3RpZ2F0ZSBwb3NzaWJsZSBpc3N1ZSB3aXRoIGNocm9tZSBjYWNoaW5nIGJhY2sgYnV0dG9uIGNvbnRlbnRzIGFuZCBub3QgbG9hZGluZyB0aGUgZW50aXJlIHBhZ2VcbiAgICAgKi9cbiAgICBpbml0SGlzdG9yeUhhbmRsZXJzOiBmdW5jdGlvbigpe1xuICAgICAgICAvL2ZvcndhcmQgYnV0dG9uXG4gICAgICAgIHdpbmRvdy5vbnB1c2hzdGF0ZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgbmF2aWdhdGlvbi5sb2FkKHJlcXVlc3QuZ2V0VVJJV2l0aFF1ZXJ5U3RyaW5nKCkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vYmFjayBidXR0b25cbiAgICAgICAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIG5hdmlnYXRpb24ubG9hZChyZXF1ZXN0LmdldFVSSVdpdGhRdWVyeVN0cmluZygpLCBudWxsLCBudWxsLCBudWxsLCBmYWxzZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbn07IiwiaW1wb3J0ICogYXMgY29tcG9uZW50cyBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0ICogYXMgb2JqZWN0cyBmcm9tICcuL29iamVjdHMnO1xuaW1wb3J0ICogYXMgcGx1Z2luX3dyYXBwZXJzIGZyb20gJy4vcGx1Z2luX3dyYXBwZXJzJztcbmltcG9ydCAqIGFzIHV0aWxpdGllcyBmcm9tICcuL3V0aWxpdGllcyc7XG5cbi8qKlxuICogTm90IHJlY29tbWVuZGVkLCBidXQgbWFrZXMgdGhpbmdzIHNpbXBsZS4gRXZlcnkgY29tcG9uZW50IGluIGpwYWNrIGlzIHNldCBvbiB3aW5kb3cgYW5kIHJlYWRpbHkgYXZhaWxhYmxlIGdsb2JhbGx5XG4gKlxuICogVGhpcyBtZWFucyBpbnN0ZWFkIG9mIGNhbGxpbmcganBhY2sub2JqZWN0cy51c2VyLmdldElkKCksIHlvdSBjYW4ganVzdCBjYWxsIHVzZXIuZ2V0SWQoKVxuICovXG5jb25zdCBnb0dsb2JhbCA9IGZ1bmN0aW9uKCl7XG4gICAgLy9sb29wIHRocm91Z2ggY29tcG9uZW50cywgb2JqZWN0cywgcGx1Z2luX3dyYXBwZXJzLCBhbmQgdXRpbGl0aWVzXG4gICAgW2NvbXBvbmVudHMsb2JqZWN0cyxwbHVnaW5fd3JhcHBlcnMsdXRpbGl0aWVzXS5mb3JFYWNoKGZ1bmN0aW9uKG9iamVjdCl7XG4gICAgICAgIC8vZm9yIGVhY2ggY29tcG9uZW50IHdpdGhpbiB0aG9zZVxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIC8vZ2V0IGFjdHVhbCBwcm9wZXJ0aWVzXG4gICAgICAgICAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgICAgICAgICAgIC8vc2V0IHRoZW0gb24gd2luZG93IHNvIHRoZXkncmUgYXZhaWxhYmxlIGdsb2JhbGx5XG4gICAgICAgICAgICAgICAgLy9leGFtcGxlOiBvYmplY3RzLnVzZXIgYmVjb21lcyB3aW5kb3cudXNlclxuICAgICAgICAgICAgICAgIC8vdXNhZ2UgYWZ0ZXIgcnVubmluZyB0aGlzOiB1c2VyLmdldElkKClcbiAgICAgICAgICAgICAgICB3aW5kb3dbcHJvcGVydHldID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGpwYWNrID0ge2NvbXBvbmVudHMsIG9iamVjdHMsIHBsdWdpbl93cmFwcGVycywgdXRpbGl0aWVzfTtcblxuLy9zZXQganBhY2sgZm9yIHRoZSB3b3JsZCB0byB1c2UgYW5kIGFkZCB0aGUgZ29HbG9iYWwgbWV0aG9kXG5nbG9iYWwuanBhY2sgPSB7Li4uanBhY2ssIC4uLntnb0dsb2JhbDogZ29HbG9iYWx9fTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzLCBzdHJpbmdzfSBmcm9tIFwiLi4vdXRpbGl0aWVzXCI7XG5cbmV4cG9ydCBjb25zdCBhYnN0cmFjdF9vYmplY3QgPSB7XG4gICAgLy9rZXlzIHRoaXMgb2JqZWN0IGNvbnRhaW5zICh1c2VkIHRvIGF1dG9tYXRpY2FsbHkgcG9wdWxhdGUgaXQgd2hlbiB5b3UgcnVuIHBvcHVsYXRlKGRhdGEpO1xuICAgIC8vb3ZlcndyaXRlIHRoaXMgaW4gZWFjaCBleHRlbmRpbmcgY2xhc3MhXG4gICAga2V5czogW10sXG5cbiAgICAvKipcbiAgICAgKiBwb3B1bGF0ZXMgdGhlIHVzZXIgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGRhdGFcbiAgICAgKlxuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcG9wdWxhdGU6IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAvL3ZhbGlkYXRlIHRoZSBpbmNvbWluZyBkYXRhIG9iamVjdCBhbmQgbWFrZSBzdXJlIGl0IG9ubHkgY29udGFpbnMgdGhlc2Uga2V5c1xuICAgICAgICAhdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGRhdGEsIHRoaXMua2V5cywgZmFsc2UsIHRydWUsIHRydWUpO1xuXG4gICAgICAgIC8vZm9yIGVhY2gga2V5IHRoYXQgaXMgc2V0IGluIHRoZSBkYXRhIG9iamVjdCwgc2V0IHRoZSB2YWx1ZSBvbiB0aGlzXG4gICAgICAgIHRoaXMua2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7XG4gICAgICAgICAgICBpZiggdHlwZW9mIGRhdGFba2V5XSAhPT0gXCJ1bmRlZmluZWRcIiApIHNlbGZbc3RyaW5ncy5zZXR0ZXIoa2V5KV0oZGF0YVtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTsiLCJpbXBvcnQge3JlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3RcIjtcbmltcG9ydCB7c2l0ZX0gZnJvbSBcIi4vc2l0ZVwiO1xuaW1wb3J0IHt1c2VyfSBmcm9tIFwiLi91c2VyXCI7XG5cbmV4cG9ydCB7cmVxdWVzdCwgc2l0ZSwgdXNlcn07IiwicmVxdWlyZSgndXJsLXNlYXJjaC1wYXJhbXMtcG9seWZpbGwnKTtcblxuLyoqXG4gKiBBbGxvd3MgeW91IHRvIGdldCBkZXRhaWxzIGFib3V0IHRoZSBjdXJyZW50IHJlcXVlc3QgZWFzaWx5LCBpbmNsdWRpbmcgcXVlcnlzdHJpbmcgdmFyaWFibGVzXG4gKlxuICogQHR5cGUge3tnZXREb21haW46IChmdW5jdGlvbigpOiBzdHJpbmcpLCBnZXREb21haW5XaXRoUHJvdG9jb2w6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBxdWVyeTogVVJMU2VhcmNoUGFyYW1zLCBpc0h0dHBzOiAoZnVuY3Rpb24oKTogYm9vbGVhbiksIGdldFVSSTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIGdldEZ1bGxVUkw6IChmdW5jdGlvbigpOiBzdHJpbmcpLCBhcHBlbmRTbGFzaDogKGZ1bmN0aW9uKCk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIG1ldGhvZHMgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHF1ZXJ5IHN0cmluZyB2YXJpYWJsZXNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFVSTFNlYXJjaFBhcmFtc1xuICAgICAqL1xuICAgIHF1ZXJ5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IHJlcXVlc3Qgd2FzIG1hZGUgc2VjdXJlbHkgb3ZlciBTU0wgKGh0dHBzIGluc3RlYWQgb2YgaHR0cClcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGlzSHR0cHM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogbXktZG9tYWluLmNvbVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXREb21haW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgfHwgd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgcHJvdG9jb2wgYW5kIGRvbWFpblxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldERvbWFpbldpdGhQcm90b2NvbDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW47XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgVVJJXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiAvcHJvZHVjdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAgICovXG4gICAgZ2V0VVJJOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBVUkkgd2l0aCBxdWVyeSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IC9wcm9kdWN0cz9pZD0xXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldFVSSVdpdGhRdWVyeVN0cmluZzogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGZ1bGwgVVJMXG4gICAgICpcbiAgICAgKiBFeGFtcGxlOiBodHRwczovL215LWRvbWFpbi5jb20vcHJvZHVjdHM/aWQ9MVxuICAgICAqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBnZXRGdWxsVVJMOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFwcGVuZHMgYSBzbGFzaCB0byBhIHN0cmluZyBpZiBpdCBkb2Vzbid0IGFscmVhZHkgaGF2ZSBpdFxuICAgICAqXG4gICAgICogRXhhbXBsZTogaHR0cHM6Ly9teS1kb21haW4uY29tIGJlY29tZXMgaHR0cHM6Ly9teS1kb21haW4uY29tL1xuICAgICAqIEV4YW1wbGU6IC9teS1wcm9kdWN0IGJlY29tZXMgL215LXByb2R1Y3QvXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdXJsXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICBhcHBlbmRTbGFzaDogZnVuY3Rpb24odXJsKXtcbiAgICAgICAgcmV0dXJuIHVybFt1cmwubGVuZ3RoLTFdICE9PSAnLycgPyB1cmwrJy8nIDogdXJsO1xuICAgIH0sXG59OyIsImltcG9ydCB7YWJzdHJhY3Rfb2JqZWN0fSBmcm9tIFwiLi4vYWJzdHJhY3Rfb2JqZWN0XCI7XG5pbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3R5cGVfY2hlY2tzXCI7XG5cbi8vY3JlYXRlIGFuIG9iamVjdCBvZiBkZWZhdWx0IHZhbHVlc1xubGV0IHNpdGVfZGVmYXVsdHMgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgbmFtZTpudWxsLFxuICAgIGNvbmZpZzp7fSxcbn07XG4vL292ZXJyaWRlIGRlZmF1bHRzIGZyb20gJHNpdGUgKGlmIGRlZmluZWQpXG5pZiggdHlwZW9mICRzaXRlID09PSBcIm9iamVjdFwiICkgc2l0ZV9kZWZhdWx0cyA9IHsuLi5zaXRlX2RlZmF1bHRzLCAuLi4kc2l0ZX07XG5cbi8qKlxuICpcbiAqIFByb3ZpZGVzIHlvdSB3aXRoIGVhc3kgYWNjZXNzIHRvIGluZm9ybWF0aW9uIGFib3V0IHRoZSBjdXJyZW50IHdlYnNpdGUgKGZvciBtdWx0aS10ZW5hbnQgYXBwbGljYXRpb25zKVxuICpcbiAqIEB0eXBlIHt7c2V0TmFtZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgZ2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCopOiBudWxsKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6ICopLCBwb3B1bGF0ZTogKGZ1bmN0aW9uKCopOiBzaXRlKSwgc2V0Q29uZmlnSXRlbTogKGZ1bmN0aW9uKCosICopOiBzaXRlKSwgbmFtZTogbnVsbCwgc2V0SWQ6IChmdW5jdGlvbigqKTogc2l0ZSksIGdldElkOiAoZnVuY3Rpb24oKTogKiksIGlkOiBudWxsLCBjb25maWc6IChzaXRlX2RlZmF1bHRzLmNvbmZpZ3x7fSksIGdldENvbmZpZzogKGZ1bmN0aW9uKCk6ICopLCBzZXRDb25maWc6IChmdW5jdGlvbigqKTogc2l0ZSl9fVxuICovXG5leHBvcnQgY29uc3Qgc2l0ZSA9IHsuLi5hYnN0cmFjdF9vYmplY3QsIC4uLntcbiAgICBrZXlzOiBbJ2lkJywgJ25hbWUnLCAnY29uZmlnJ10sXG5cbiAgICBnZXRJZDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xuICAgIH0sXG4gICAgc2V0SWQ6IGZ1bmN0aW9uKGlkKXtcbiAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vZ2V0cyB0aGUgd2Vic2l0ZSdzIG5hbWVcbiAgICBnZXROYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcbiAgICB9LFxuICAgIHNldE5hbWU6IGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgY29uZmlnIGRhdGFcbiAgICBnZXRDb25maWc6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGNvbmZpZyBkYXRhIHVzaW5nIHRoZSBwcm92aWRlZCBvYmplY3RcbiAgICBzZXRDb25maWc6IGZ1bmN0aW9uKGNvbmZpZyl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGNvbmZpZywgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBjb25maWc7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3JldHVybnMgYW4gaW5kaXZpZHVhbCBjb25maWcgdmFsdWUgb3IgbnVsbCBpZiBpdCdzIG5vdCBkZWZpbmVkXG4gICAgZ2V0Q29uZmlnSXRlbTogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0aGlzLl9jb25maWdba2V5XSA9PT0gXCJ1bmRlZmluZWRcIiA/IG51bGwgOiB0aGlzLl9jb25maWdba2V5XTtcbiAgICB9LFxuICAgIC8vYWRkcyBvciB1cGRhdGVzIGEgdmFsdWUgaW4gdGhlIGNvbmZpZyBvYmplY3RcbiAgICBzZXRDb25maWdJdGVtOiBmdW5jdGlvbihrZXksIHZhbCl7XG4gICAgICAgIHRoaXMuX2NvbmZpZ1trZXldID0gdmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59fS5wb3B1bGF0ZShzaXRlX2RlZmF1bHRzKTsiLCJpbXBvcnQge2Fic3RyYWN0X29iamVjdH0gZnJvbSBcIi4uL2Fic3RyYWN0X29iamVjdFwiO1xuaW1wb3J0IHt0eXBlX2NoZWNrc30gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy90eXBlX2NoZWNrc1wiO1xuXG4vL2NyZWF0ZSBhbiBvYmplY3Qgb2YgZGVmYXVsdCB2YWx1ZXNcbmxldCB1c2VyX2RlZmF1bHRzID0ge1xuICAgIGlkOiBudWxsLFxuICAgIGlzR3Vlc3Q6ZmFsc2UsXG4gICAgaXNBZG1pbjpmYWxzZSxcbiAgICB1c2VybmFtZTpudWxsLFxuICAgIGZuYW1lOm51bGwsXG4gICAgbG5hbWU6bnVsbCxcbiAgICBlbWFpbDpudWxsLFxuICAgIHBob25lOm51bGwsXG4gICAgcGVybWlzc2lvbnM6W10sXG4gICAgYWRkaXRpb25hbERhdGE6e30sXG59O1xuLy9vdmVycmlkZSBkZWZhdWx0cyBmcm9tICR1c2VyIChpZiBkZWZpbmVkKVxuaWYoIHR5cGVvZiAkdXNlciA9PT0gXCJvYmplY3RcIiApIHVzZXJfZGVmYXVsdHMgPSB7Li4udXNlcl9kZWZhdWx0cywgLi4uJHVzZXJ9O1xuXG4vKipcbiAqXG4gKiBQcm92aWRlcyB5b3Ugd2l0aCBlYXN5IGFjY2VzcyB0byB1c2VyIGluZm9ybWF0aW9uIGFuZCBhbGxvd3MgeW91IHRvIHBlcmZvcm0gcGVybWlzc2lvbiBjaGVja3NcbiAqXG4gKiBAdHlwZSB7e2dldElzR3Vlc3Q6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGhvbmU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TG5hbWU6IChmdW5jdGlvbigpOiAqKSwgZ2V0TmFtZTogKGZ1bmN0aW9uKCk6IHN0cmluZyksIHNldElzR3Vlc3Q6IChmdW5jdGlvbigqKTogdXNlciksIGtleXM6IHN0cmluZ1tdLCBhZGRQZXJtaXNzaW9uOiAoZnVuY3Rpb24oKj0pOiB1c2VyKSwgZ2V0SWQ6IChmdW5jdGlvbigpOiAqKSwgc2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigqKTogdXNlciksIHNldFBlcm1pc3Npb25zOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBnZXRVc2VybmFtZTogKGZ1bmN0aW9uKCk6ICopLCBzZXRGbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0Rm5hbWU6IChmdW5jdGlvbigpOiAqKSwgc2V0SWQ6IChmdW5jdGlvbigqKTogdXNlciksIHNldFVzZXJuYW1lOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXRMbmFtZTogKGZ1bmN0aW9uKCopOiB1c2VyKSwgZ2V0QWRkaXRpb25hbERhdGE6IChmdW5jdGlvbigpOiAqKSwgZ2V0UGVybWlzc2lvbnM6IChmdW5jdGlvbigpOiAqKSwgc2V0UGhvbmU6IChmdW5jdGlvbigqKTogdXNlciksIHJlbW92ZVBlcm1pc3Npb246IChmdW5jdGlvbigqKTogdXNlciksIGdldERhdGFJdGVtKCopOiBudWxsLCBzZXRJc0FkbWluOiAoZnVuY3Rpb24oKik6IHVzZXIpLCBzZXREYXRhSXRlbSgqLCAqKTogKiwgZ2V0SXNBZG1pbjogKGZ1bmN0aW9uKCk6ICopLCBzZXRFbWFpbDogKGZ1bmN0aW9uKCopOiB1c2VyKSwgaGFzUGVybWlzc2lvbjogKGZ1bmN0aW9uKCo9KTogKCp8Ym9vbGVhbikpLCBnZXRFbWFpbDogKGZ1bmN0aW9uKCk6ICopfX1cbiAqL1xuZXhwb3J0IGNvbnN0IHVzZXIgPSB7Li4uYWJzdHJhY3Rfb2JqZWN0LCAuLi57XG4gICAgLy91c2VyIG9iamVjdCBrZXlzXG4gICAga2V5czogWydpZCcsICdpc0d1ZXN0JywgJ2lzQWRtaW4nLCAndXNlcm5hbWUnLCAnZm5hbWUnLCAnbG5hbWUnLCAnZW1haWwnLCAncGhvbmUnLCAncGVybWlzc2lvbnMnLCAnYWRkaXRpb25hbERhdGEnXSxcblxuICAgIHNldElkOiBmdW5jdGlvbihpZCl7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0SWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pZDtcbiAgICB9LFxuXG4gICAgc2V0SXNHdWVzdDogZnVuY3Rpb24oaXNfZ3Vlc3Qpe1xuICAgICAgICB0aGlzLl9pc0d1ZXN0ID0gaXNfZ3Vlc3Q7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0SXNHdWVzdDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzR3Vlc3Q7XG4gICAgfSxcblxuICAgIHNldElzQWRtaW46IGZ1bmN0aW9uKGlzX2FkbWluKXtcbiAgICAgICAgdGhpcy5faXNBZG1pbiA9IGlzX2FkbWluO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldElzQWRtaW46IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0FkbWluO1xuICAgIH0sXG5cbiAgICBzZXRVc2VybmFtZTogZnVuY3Rpb24odXNlcm5hbWUpe1xuICAgICAgICB0aGlzLl91c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFVzZXJuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fdXNlcm5hbWU7XG4gICAgfSxcblxuICAgIGdldEZuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZm5hbWU7XG4gICAgfSxcbiAgICBzZXRGbmFtZTogZnVuY3Rpb24oZmlyc3RfbmFtZSl7XG4gICAgICAgIHRoaXMuX2ZuYW1lID0gZmlyc3RfbmFtZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIGdldExuYW1lOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fbG5hbWU7XG4gICAgfSxcbiAgICBzZXRMbmFtZTogZnVuY3Rpb24obGFzdF9uYW1lKXtcbiAgICAgICAgdGhpcy5fbG5hbWUgPSBsYXN0X25hbWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvL3F1aWNrIHdheSB0byBnZXQgZm5hbWUgYW5kIGxuYW1lXG4gICAgZ2V0TmFtZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGAke3VzZXIuZ2V0Rm5hbWUoKX0gJHt1c2VyLmdldExuYW1lKCl9YDtcbiAgICB9LFxuXG4gICAgZ2V0RW1haWw6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9lbWFpbDtcbiAgICB9LFxuICAgIHNldEVtYWlsOiBmdW5jdGlvbihlbWFpbCl7XG4gICAgICAgIHRoaXMuX2VtYWlsID0gZW1haWw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBnZXRQaG9uZTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Bob25lO1xuICAgIH0sXG4gICAgc2V0UGhvbmU6IGZ1bmN0aW9uKHBob25lKXtcbiAgICAgICAgdGhpcy5fcGhvbmUgPSBwaG9uZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vcmV0dXJucyBhbGwgcGVybWlzc2lvbnMgZm9yIHRoaXMgdXNlclxuICAgIGdldFBlcm1pc3Npb25zOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcGVybWlzc2lvbnM7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIHBlcm1pc3Npb25zIGZvciB0aGlzIHVzZXJcbiAgICBzZXRQZXJtaXNzaW9uczogZnVuY3Rpb24ocGVybWlzc2lvbnMpe1xuICAgICAgICBpZiggIUFycmF5LmlzQXJyYXkocGVybWlzc2lvbnMpICkgdGhyb3cgXCJzZXRQZXJtaXNzaW9ucyByZXF1aXJlcyBhbiBhcnJheVwiO1xuXG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9hZGRzIGEgc2luZ2xlIHBlcm1pc3Npb24gdG8gdGhpcyB1c2VyXG4gICAgYWRkUGVybWlzc2lvbjogZnVuY3Rpb24ocGVybWlzc2lvbil7XG4gICAgICAgIHRoaXMuX3Blcm1pc3Npb25zLnB1c2gocGVybWlzc2lvbik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgLy9SZW1vdmVzIGEgc2luZ2xlIHBlcm1pc3Npb24gZnJvbSB0aGlzIHVzZXJcbiAgICByZW1vdmVQZXJtaXNzaW9uOiBmdW5jdGlvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgdGhpcy5zZXRQZXJtaXNzaW9ucyh0aGlzLl9wZXJtaXNzaW9ucy5maWx0ZXIoZnVuY3Rpb24oZWxlKXtcbiAgICAgICAgICAgIHJldHVybiBlbGUgIT09IHBlcm1pc3Npb247XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL3JldHVybnMgdHJ1ZSBpZiB0aGUgdXNlciBoYXMgdGhlIHByb3ZpZGVkIHBlcm1pc3Npb25cbiAgICBoYXNQZXJtaXNzaW9uOiBmdW5jdGlvbihwZXJtaXNzaW9uKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UGVybWlzc2lvbnMoKS5pbmNsdWRlcyhwZXJtaXNzaW9uKTtcbiAgICB9LFxuXG4gICAgLy9yZXR1cm5zIGFsbCBhZGRpdGlvbmFsIGRhdGEgZm9yIHRoaXMgdXNlclxuICAgIGdldEFkZGl0aW9uYWxEYXRhOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkaXRpb25hbERhdGE7XG4gICAgfSxcbiAgICAvL3NldHMgYWxsIGFkZGl0aW9uYWwgZGF0YSBmb3IgdGhpcyB1c2VyXG4gICAgc2V0QWRkaXRpb25hbERhdGE6IGZ1bmN0aW9uKGFkZGl0aW9uYWxfZGF0YSl7XG4gICAgICAgIC8vbXVzdCBiZSBhIGRhdGEgb2JqZWN0LCBldmVuIGlmIGl0J3MgZW1wdHlcbiAgICAgICAgdHlwZV9jaGVja3MuaXNEYXRhT2JqZWN0KGFkZGl0aW9uYWxfZGF0YSwgbnVsbCwgZmFsc2UsIGZhbHNlLCB0cnVlKTtcblxuICAgICAgICB0aGlzLl9hZGRpdGlvbmFsRGF0YSA9IGFkZGl0aW9uYWxfZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICAvL3JldHVybnMgYSBzaW5nbGUgYWRkaXRpb25hbCBkYXRhIHZhbHVlIGZvciB0aGlzIHVzZXJcbiAgICBnZXREYXRhSXRlbShrZXkpe1xuICAgICAgICByZXR1cm4gdHlwZW9mIHRoaXMuX2FkZGl0aW9uYWxEYXRhW2tleV0gPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XTtcbiAgICB9LFxuICAgIC8vc2V0cyBhIHNpbmdsZSBhZGRpdGlvbmFsIGRhdGEgdmFsdWUgZm9yIHRoaXMgdXNlclxuICAgIHNldERhdGFJdGVtKGtleSwgdmFsKXtcbiAgICAgICAgdGhpcy5fYWRkaXRpb25hbERhdGFba2V5XSA9IHZhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufX0ucG9wdWxhdGUodXNlcl9kZWZhdWx0cyk7IC8vaW1tZWRpYXRlbHkgcG9wdWxhdGUgZnJvbSB1c2VyX2RlZmF1bHRzIiwiZXhwb3J0IHt9IiwiLyoqXG4gKiBIVE1MIERPTSBoZWxwZXJzXG4gKlxuICogQHR5cGUge3tnZXRFbGVtZW50czogKGZ1bmN0aW9uKCo9LCAqPSk6IEFycmF5KSwgZ2V0RWxlbWVudDogZG9tLmdldEVsZW1lbnQsIGV4aXN0czogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKSwgbXVsdGlwbGVFeGlzdDogKGZ1bmN0aW9uKCo9KTogbnVtYmVyKX19XG4gKi9cbmV4cG9ydCBjb25zdCBkb20gPSB7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBwcm92aWRlZCBzdHJpbmcsIGpRdWVyeSBkb20gb2JqZWN0LCBldGMgaW50byBhIHNpbmdsZSBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBub25lIGV4aXN0XG4gICAgICogQHBhcmFtIGVycm9yX29uX211bHRpcGxlIC0gdGhyb3cgYW4gZXJyb3IgaWYgbW9yZSB0aGFuIDEgZXhpc3RzXG4gICAgICogQHJldHVybnMgRWxlbWVudHxIVE1MRG9jdW1lbnR8bnVsbFxuICAgICAqL1xuICAgIGdldEVsZW1lbnQ6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lLCBlcnJvcl9vbl9tdWx0aXBsZSl7XG4gICAgICAgIGVsID0gdGhpcy5nZXRFbGVtZW50cyhlbCwgZXJyb3Jfb25fbm9uZSk7XG5cbiAgICAgICAgaWYoIGVsLmxlbmd0aCA+IDEgKXtcbiAgICAgICAgICAgIGlmKCBlcnJvcl9vbl9tdWx0aXBsZSApIHRocm93IFwiVG9vIG1hbnkgRE9NIGVsZW1lbnRzIGZvdW5kIGluIGdldEVsZW1lbnQgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsWzBdO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIHByb3ZpZGVkIHN0cmluZywgalF1ZXJ5IGRvbSBvYmplY3QsIGV0YyBpbnRvIGFuIGFycmF5IG9mIG5hdGl2ZSBET00gZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbCAoc3RyaW5nLCBvYmplY3QsIGFycmF5LCBqUXVlcnkgb2JqZWN0LCBldGMpXG4gICAgICogQHBhcmFtIGVycm9yX29uX25vbmUgLSB0aHJvdyBhbiBlcnJvciBpZiBubyBlbGVtZW50cyB3ZXJlIGZvdW5kLCBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEByZXR1cm5zIFtdXG4gICAgICovXG4gICAgZ2V0RWxlbWVudHM6IGZ1bmN0aW9uKGVsLCBlcnJvcl9vbl9ub25lKXtcbiAgICAgICAgLy9kZWZhdWx0IHRvIGZhbHNlXG4gICAgICAgIGVycm9yX29uX25vbmUgPSB0eXBlb2YgZXJyb3Jfb25fbm9uZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogZXJyb3Jfb25fbm9uZTtcblxuICAgICAgICAvL2RlZmF1bHQgdG8gZW1wdHlcbiAgICAgICAgbGV0IGVsX2FycmF5ID0gW107XG5cbiAgICAgICAgLy9pZiBub3QgcHJvdmlkZWQgb3IgZG9lc24ndCBleGlzdFxuICAgICAgICBpZiggdHlwZW9mIGVsID09PSBcInVuZGVmaW5lZFwiIHx8ICFlbCApe1xuICAgICAgICAgICAgLy9kbyBub3RoaW5nLCBkZWZhdWx0IGlzIGVtcHR5IGFycmF5XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIHN0cmluZyB3YXMgcHJvdmlkZWRcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGVsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgLy9jb252ZXJ0IHRoZSBOb2RlTGlzdCByZXR1cm5lZCBieSBxdWVyeVNlbGVjdG9yQWxsIGludG8gYW4gYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiBhIGpxdWVyeSBvYmplY3Qgd2FzIHByb3ZpZGVkXG4gICAgICAgIGVsc2UgaWYoIGVsIGluc3RhbmNlb2YgalF1ZXJ5ICl7XG4gICAgICAgICAgICAvL2lmIGl0IGNvbnRhaW5zIGFueXRoaW5nXG4gICAgICAgICAgICBpZiggZWwubGVuZ3RoICl7XG4gICAgICAgICAgICAgICAgLy9nZXQgYWxsIHRoZSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICAgICAgICAgICAgICAgIGVsX2FycmF5ID0gZWwudG9BcnJheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vaWYgaXQncyBhbiBFbGVtZW50IG9yIEhUTUxEb2N1bWVudCAoYSBzaW5ndWxhciBET00gZWxlbWVudClcbiAgICAgICAgZWxzZSBpZiggZWwgaW5zdGFuY2VvZiBFbGVtZW50IHx8IGVsIGluc3RhbmNlb2YgSFRNTERvY3VtZW50ICl7XG4gICAgICAgICAgICAvL2FkZCB0byB0aGUgYXJyYXlcbiAgICAgICAgICAgIGVsX2FycmF5LnB1c2goZWwpO1xuICAgICAgICB9XG4gICAgICAgIC8vb3RoZXJ3aXNlLCB3aGF0IHRoZSBoZWNrIGRpZCB5b3UgcGFzcz8gVGhyb3cgZXJyb3IuLi5cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIkludmFsaWQgdmFsdWUgcHJvdmlkZWQgdG8gZ2V0RWxlbWVudHM6IFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICYmIGVycm9yX29uX25vbmUgKXtcbiAgICAgICAgICAgIHRocm93IFwiRmFpbGVkIHRvIGdldCBhcnJheSBvZiBET00gZWxlbWVudHMgZm9yIFwiK0pTT04uc3RyaW5naWZ5KGVsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vaG9wZWZ1bGx5IGl0J3Mgc2FmZSB0byBhc3N1bWUgdGhlIG9yaWdpbmFsbHkgcHJvdmlkZWQgZWwgaXMgYSBzaW5ndWxhciBuYXRpdmUgRE9NIG9iamVjdFxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFF1aWNrIG1ldGhvZCBmb3IgcmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7ZG9tfVxuICAgICAqL1xuICAgIHJlbW92ZTogZnVuY3Rpb24oZWwpe1xuICAgICAgICBsZXQgZWxfYXJyYXkgPSB0aGlzLmdldEVsZW1lbnRzKGVsKTtcbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHByb3ZpZGVkIGVsZW1lbnQgZXhpc3RzXG4gICAgICpcbiAgICAgKiBQYXNzIGFueXRoaW5nIHlvdSB3YW50LCBpdCB1c2VzIGdldEVsZW1lbnRzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIGV4aXN0czogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlcmUgYXJlIG11bHRpcGxlIGluc3RhbmNlcyBvZiB0aGUgcHJvdmlkZWQgZWxlbWVudFxuICAgICAqXG4gICAgICogUGFzcyBhbnl0aGluZyB5b3Ugd2FudCwgaXQgdXNlcyBnZXRFbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgbXVsdGlwbGVFeGlzdDogZnVuY3Rpb24oZWwpe1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRFbGVtZW50cyhlbCkubGVuZ3RoID4gMTtcbiAgICB9LFxufTtcbiIsImltcG9ydCB7ZG9tfSBmcm9tIFwiLi4vZG9tXCI7XG5cbi8qKlxuICogU2hvcnRoYW5kL2NvbnNpc3RlbnQgZXZlbnQgbGlzdGVuZXIgbWFuYWdlbWVudFxuICpcbiAqIEB0eXBlIHt7b25DbGljazogKGZ1bmN0aW9uKCo9LCAqPSk6ICgqfEFycmF5fGVsKSksIG9uQ2hhbmdlOiAoZnVuY3Rpb24oKj0sICo9KTogKCp8KnwqW10pKSwgb2ZmQ2hhbmdlOiAoZnVuY3Rpb24oKj0sICo9KTogKCp8KnwqW10pKSwgb2ZmRXZlbnRQcmV2ZW50RGVmYXVsdDogZXZlbnRzLm9mZkV2ZW50UHJldmVudERlZmF1bHQsIG9mZkNsaWNrKCo9LCAqPSk6IChBcnJheXxlbCksIG9uU3VibWl0OiAoZnVuY3Rpb24oKj0sICo9KTogKCp8QXJyYXl8ZWwpKSwgb2ZmU3VibWl0OiAoZnVuY3Rpb24oKj0sICo9KTogKCp8QXJyYXl8ZWwpKSwgb25FdmVudFByZXZlbnREZWZhdWx0OiBldmVudHMub25FdmVudFByZXZlbnREZWZhdWx0LCB0cmlnZ2VyOiBldmVudHMudHJpZ2dlciwgb2ZmOiBldmVudHMub2ZmLCBvbjogZXZlbnRzLm9ufX1cbiAqL1xuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcblxuICAgIC8qKlxuICAgICAqIFNob3J0aGFuZCBvbi1jbGljayBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvbkNsaWNrOiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9uRXZlbnRQcmV2ZW50RGVmYXVsdChlbCwgJ2NsaWNrJywgaGFuZGxlcik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gb24tY2xpY2sgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmQ2xpY2soZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmZFdmVudFByZXZlbnREZWZhdWx0KGVsLCAnY2xpY2snLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRoYW5kIG9uLXN1Ym1pdCBoYW5kbGVyIHdpdGggcHJldmVudERlZmF1bHRcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgYXJyYXl8ZWxcbiAgICAgKi9cbiAgICBvblN1Ym1pdDogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vbkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdzdWJtaXQnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1zdWJtaXQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmU3VibWl0OiBmdW5jdGlvbihlbCwgaGFuZGxlcil7XG4gICAgICAgIHJldHVybiB0aGlzLm9mZkV2ZW50UHJldmVudERlZmF1bHQoZWwsICdzdWJtaXQnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogTWFpbmx5IGhlcmUgZm9yIGNvbnNpc3RlbmN5XG4gICAgICpcbiAgICAgKiBTaG9ydGhhbmQgb24tY2hhbmdlIGhhbmRsZXJcbiAgICAgKiBET0VTIE5PVCBwcmV2ZW50RGVmYXVsdCBiZWNhdXNlIHRoYXQncyB1c3VhbGx5IG5vdCBkZXNpcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uKGVsLCBoYW5kbGVyKXtcbiAgICAgICAgcmV0dXJuIHRoaXMub24oZWwsICdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhbiBvbi1jaGFuZ2UgaGFuZGxlclxuICAgICAqXG4gICAgICogQHBhcmFtIGVsXG4gICAgICogQHBhcmFtIGhhbmRsZXJcbiAgICAgKiBAcmV0dXJucyBhcnJheXxlbFxuICAgICAqL1xuICAgIG9mZkNoYW5nZTogZnVuY3Rpb24oZWwsIGhhbmRsZXIpe1xuICAgICAgICByZXR1cm4gdGhpcy5vZmYoZWwsICdjaGFuZ2UnLCBoYW5kbGVyKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQXR0YWNoZXMgYW4gZXZlbnQgaGFuZGxlciBhbmQgcHJldmVudHMgdGhlIGRlZmF1bHQgZXZlbnRzIGZyb20gb2NjdXJyaW5nXG4gICAgICogIChsaWtlIGZvcm1zIHN1Ym1pdHRpbmcgb3IgYSBsaW5rIGJyaW5naW5nIHlvdSB0byBhbm90aGVyIHBhZ2UpXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb25FdmVudFByZXZlbnREZWZhdWx0OiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywgW2VdKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgaGFuZGxlciB3aXRoIHByZXZlbnREZWZhdWx0XG4gICAgICpcbiAgICAgKiBAcGFyYW0gZWxcbiAgICAgKiBAcGFyYW0gZXZlbnRcbiAgICAgKiBAcGFyYW0gaGFuZGxlclxuICAgICAqIEByZXR1cm5zIGFycmF5fGVsXG4gICAgICovXG4gICAgb2ZmRXZlbnRQcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oZWwsIGV2ZW50LCBoYW5kbGVyKXtcblxuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKXtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBbZV0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb246IGZ1bmN0aW9uKGVsLCBldmVudCwgaGFuZGxlcil7XG4gICAgICAgIGNvbnN0IGVsX2FycmF5ID0gZG9tLmdldEVsZW1lbnRzKGVsKTtcblxuICAgICAgICBpZiggIWVsX2FycmF5Lmxlbmd0aCApIHJldHVybiBlbDtcblxuICAgICAgICBlbF9hcnJheS5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZWxfYXJyYXk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYW4gZXZlbnQgbGlzdGVuZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBoYW5kbGVyXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgb2ZmOiBmdW5jdGlvbihlbCwgZXZlbnQsIGhhbmRsZXIpe1xuICAgICAgICBjb25zdCBlbF9hcnJheSA9IGRvbS5nZXRFbGVtZW50cyhlbCk7XG5cbiAgICAgICAgaWYoICFlbF9hcnJheS5sZW5ndGggKSByZXR1cm4gZWw7XG5cbiAgICAgICAgZWxfYXJyYXkuZm9yRWFjaChmdW5jdGlvbihlbCl7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGVsX2FycmF5O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VyIGFuIGV2ZW50IG9uIGFuIGVsZW1lbnQvZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbFxuICAgICAqIEBwYXJhbSBldmVudFxuICAgICAqIEBwYXJhbSBldmVudF9vcHRpb25zXG4gICAgICogQHJldHVybnMgeyp8KltdfCp9XG4gICAgICovXG4gICAgdHJpZ2dlcjogZnVuY3Rpb24oZWwsIGV2ZW50LCBldmVudF9vcHRpb25zKXtcbiAgICAgICAgY29uc3QgZWxfYXJyYXkgPSBkb20uZ2V0RWxlbWVudHMoZWwpO1xuXG4gICAgICAgIGlmKCAhZWxfYXJyYXkubGVuZ3RoICl7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cblxuICAgICAgICBldmVudF9vcHRpb25zID0gdHlwZW9mIGV2ZW50X29wdGlvbnMgPT09IFwidW5kZWZpbmVkXCIgPyBudWxsIDogZXZlbnRfb3B0aW9ucztcblxuICAgICAgICAvL2NyZWF0ZSB0aGUgZXZlbnRcbiAgICAgICAgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnQsIHsgZGV0YWlsOiBldmVudF9vcHRpb25zIH0pO1xuXG4gICAgICAgIGVsX2FycmF5LmZvckVhY2goZnVuY3Rpb24oZWwpe1xuICAgICAgICAgICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBlbF9hcnJheTtcbiAgICB9LFxufTsiLCJpbXBvcnQge3R5cGVfY2hlY2tzfSBmcm9tIFwiLi90eXBlX2NoZWNrc1wiO1xuaW1wb3J0IHtzdHJpbmdzfSBmcm9tIFwiLi9zdHJpbmdzXCI7XG5pbXBvcnQge2RvbX0gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4vZXZlbnRzXCI7XG5cbmV4cG9ydCB7dHlwZV9jaGVja3MsIHN0cmluZ3MsIGRvbSwgZXZlbnRzfTsiLCIvKipcbiAqIE1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29tbW9uIHN0cmluZyBtYW5pcHVsYXRpb25zXG4gKlxuICogQHR5cGUge3tnZXR0ZXI6IChmdW5jdGlvbigqPSk6IHN0cmluZyksIHVjZmlyc3Q6IChmdW5jdGlvbigqPSk6ICgqfHN0cmluZykpLCBzZXR0ZXI6IChmdW5jdGlvbigqPSk6IHN0cmluZyl9fVxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgZ2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3MuZ2V0dGVyKCduYW1lJykgcmV0dXJucyAnZ2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIGdldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdnZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgc2V0dGVyIG1ldGhvZCBuYW1lIGZyb20gYSBzdHJpbmdcbiAgICAgKlxuICAgICAqIEV4YW1wbGU6IHN0cmluZ3Muc2V0dGVyKCduYW1lJykgcmV0dXJucyAnc2V0TmFtZSdcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfVxuICAgICAqL1xuICAgIHNldHRlcjogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuICdzZXQnK3RoaXMudWNmaXJzdChzdHJpbmcpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHVjZmlyc3QoKSBmdW5jdGlvbmFsaXR5IHRvIEpTIChsaWtlIFBIUClcbiAgICAgKlxuICAgICAqIEBwYXJhbSBzdHJpbmdcbiAgICAgKiBAcmV0dXJucyB7KnxzdHJpbmd9XG4gICAgICovXG4gICAgdWNmaXJzdDogZnVuY3Rpb24oc3RyaW5nKXtcbiAgICAgICAgcmV0dXJuIHN0cmluZyAmJiBzdHJpbmdbMF0udG9VcHBlckNhc2UoKStzdHJpbmcuc2xpY2UoMSk7XG4gICAgfVxufTsiLCIvKipcbiAqIE1ldGhvZHMgZm9yIGNoZWNraW5nIGRhdGEgdHlwZXMgd2l0aCBtb3JlIHNwZWNpZmljaXR5XG4gKlxuICogQHR5cGUge3tpc0RhdGFPYmplY3Q6IHR5cGVfY2hlY2tzLmlzRGF0YU9iamVjdH19XG4gKi9cbmV4cG9ydCBjb25zdCB0eXBlX2NoZWNrcyA9IHtcbiAgICAvKipcbiAgICAgKiBEZXRlcm1pbmVzIGlmIGEgcHJvdmlkZWQgdmFsdWUgaXMgYW4gb2JqZWN0XG4gICAgICpcbiAgICAgKiBPcHRpb25hbGx5IG11c3QgY29udGFpbiBhdCBsZWFzdCAxIHByb3ZpZGVkIGtleSBpbiBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSBtdXN0IGhhdmUgYWxsIGtleXNcbiAgICAgKiBPcHRpb25hbGx5IGNhbm5vdCBoYXZlIGFueSBrZXlzIHRoYXQgYXJlbid0IGluIHRoZSBrZXlzIGFycmF5XG4gICAgICogT3B0aW9uYWxseSB0aHJvd3MgYW4gZXJyb3IgaWYgYW55IGNoZWNrIGZhaWxzXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcGFyYW0ga2V5cyAtIGRlZmF1bHQ6IGRvbid0IHZlcmlmeSBrZXlzXG4gICAgICogQHBhcmFtIHJlcXVpcmVfYWxsX2tleXMgLSBkZWZhdWx0OiBmYWxzZVxuICAgICAqIEBwYXJhbSBibG9ja19vdGhlcl9rZXlzIC0gZGVmYXVsdCBmYWxzZVxuICAgICAqIEBwYXJhbSB0aHJvd19lcnJvciAtIGRlZmF1bHQ6IGZhbHNlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNEYXRhT2JqZWN0OiBmdW5jdGlvbih2YWx1ZSwga2V5cywgcmVxdWlyZV9hbGxfa2V5cywgYmxvY2tfb3RoZXJfa2V5cywgdGhyb3dfZXJyb3Ipe1xuICAgICAgICAvL2RlZmF1bHQgZm9yIHRocm93X2Vycm9yIGlzIGZhbHNlXG4gICAgICAgIHRocm93X2Vycm9yID0gdHlwZW9mIHRocm93X2Vycm9yICE9PSBcInVuZGVmaW5lZFwiID8gdGhyb3dfZXJyb3IgOiBmYWxzZTtcblxuICAgICAgICAvL2RlZmF1bHQgZm9yIHJlcXVpcmVfYWxsX2tleXMgaXMgZmFsc2VcbiAgICAgICAgcmVxdWlyZV9hbGxfa2V5cyA9IHR5cGVvZiByZXF1aXJlX2FsbF9rZXlzICE9PSBcInVuZGVmaW5lZFwiID8gcmVxdWlyZV9hbGxfa2V5cyA6IGZhbHNlO1xuXG4gICAgICAgIC8vZm9yIGVycm9yIG1lc3NhZ2VzXG4gICAgICAgIHZhciBzdHJpbmdpZmllZF92YWwgPSBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG5cbiAgICAgICAgLy9kZWZhdWx0IGVycm9yX21zZ1xuICAgICAgICBjb25zdCBlcnJvcl9tc2cgPSBgJHtzdHJpbmdpZmllZF92YWx9IGlzIG5vdCBhbiBvYmplY3RgO1xuXG4gICAgICAgIC8vaWYgbm90IHByb3ZpZGVkXG4gICAgICAgIGlmKCB0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgKXtcbiAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGVycm9yX21zZztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vZGV0ZXJtaW5lIGlmIGl0IGlzIGFuIG9iamVjdFxuICAgICAgICBjb25zdCBpc19vYmplY3QgPSB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCI7XG5cbiAgICAgICAgLy9pZiBub3QgYW4gb2JqZWN0LCBudWxsLCBvciBhbiBhcnJheVxuICAgICAgICBpZiggIWlzX29iamVjdCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSApe1xuICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgZXJyb3JfbXNnO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9pZiB3ZSBuZWVkIHRvIHZlcmlmeSB0aGUga2V5cyB0aGlzIG9iamVjdCBjb250YWluc1xuICAgICAgICBpZiggQXJyYXkuaXNBcnJheShrZXlzKSApIHtcbiAgICAgICAgICAgIGxldCBmb3VuZF9rZXkgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBtaXNzaW5nX2tleXMgPSBbXTtcblxuICAgICAgICAgICAgY29uc3QgdmFsdWVfa2V5cyA9IE9iamVjdC5rZXlzKHZhbHVlKTtcblxuICAgICAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgICAgIC8vaWYgdGhlIGtleSB3YXMgZm91bmQsIHdlIGZvdW5kIGF0bGVhc3Qgb25lXG4gICAgICAgICAgICAgICAgaWYoIHZhbHVlX2tleXMuaW5jbHVkZXMoa2V5KSApe1xuICAgICAgICAgICAgICAgICAgICBmb3VuZF9rZXkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL2lmIGl0J3Mgbm90IGZvdW5kLCB3ZSBjYW4ndCBzYXkgYWxsIGtleXMgZXhpc3QgaW4gdGhpcyBvYmplY3RcbiAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBtaXNzaW5nX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvL2lmIG5vdCBvbmUgb2YgdGhlIGtleXMgd2VyZSBmb3VuZFxuICAgICAgICAgICAgaWYoICFmb3VuZF9rZXkgKXtcbiAgICAgICAgICAgICAgICBpZiggdGhyb3dfZXJyb3IgKSB0aHJvdyBgJHtzdHJpbmdpZmllZF92YWx9IGRvZXMgbm90IGNvbnRhaW4gYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmc6IGAra2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkaWRuJ3QgZmluZCBhbGwgdGhlIGtleXNcbiAgICAgICAgICAgIGlmKCByZXF1aXJlX2FsbF9rZXlzICYmIG1pc3Npbmdfa2V5cy5sZW5ndGggKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCB0aHJvd19lcnJvciApIHRocm93IGAke3N0cmluZ2lmaWVkX3ZhbH0gaXMgbWlzc2luZyBkYXRhOiBgK21pc3Npbmdfa2V5cy5qb2luKCcsICcpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9pZiB3ZSBkb24ndCBhbGxvdyBhbnkga2V5cyBOT1QgaW4gdGhlIGtleXMgYXJyYXlcbiAgICAgICAgICAgIGlmKCBibG9ja19vdGhlcl9rZXlzICl7XG4gICAgICAgICAgICAgICAgbGV0IHVucmVjb2duaXplZF9rZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICB2YWx1ZV9rZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKCAha2V5cy5pbmNsdWRlcyhrZXkpICl7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnJlY29nbml6ZWRfa2V5cy5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmKCB1bnJlY29nbml6ZWRfa2V5cy5sZW5ndGggKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoIHRocm93X2Vycm9yICkgdGhyb3cgYCR7c3RyaW5naWZpZWRfdmFsfSBjb250YWlucyBpbnZhbGlkIGRhdGE6IGArdW5yZWNvZ25pemVkX2tleXMuam9pbignLCAnKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vYWxsIGNoZWNrcyBwYXNzZWQhIGNvbmdyYXRzLCBpdCdzIGFuIG9iamVjdFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59OyJdLCJzb3VyY2VSb290IjoiIn0=