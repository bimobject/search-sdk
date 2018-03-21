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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(21);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var html = exports.html = function html(literalSections) {
    for (var _len = arguments.length, substs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        substs[_key - 1] = arguments[_key];
    }

    // Use raw literal sections: we don’t want
    // backslashes (\n etc.) to be interpreted
    var raw = literalSections.raw;

    var result = '';

    substs.forEach(function (subst, i) {
        // Retrieve the literal section preceding
        // the current substitution
        var lit = raw[i];

        // In the example, map() returns an array:
        // If substitution is an array (and not a string),
        // we turn it into a string
        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        // If the substitution is preceded by a dollar sign,
        // we escape special characters in it
        if (lit.endsWith('$')) {
            subst = htmlEscape(subst);
            lit = lit.slice(0, -1);
        }
        result += lit;
        result += subst;
    });
    // Take care of last literal section
    // (Never fails, because an empty template string
    // produces one literal section, an empty string)
    result += raw[raw.length - 1]; // (A)

    return result;
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(63),
    getValue = __webpack_require__(66);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    getRawTag = __webpack_require__(54),
    objectToString = __webpack_require__(55);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(89),
    listCacheDelete = __webpack_require__(90),
    listCacheGet = __webpack_require__(91),
    listCacheHas = __webpack_require__(92),
    listCacheSet = __webpack_require__(93);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(33);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(107);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(7);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loaderTemplate = undefined;

var _templateObject = _taggedTemplateLiteral(['<div id="loader" class="loader"></div>'], ['<div id="loader" class="loader"></div>']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var loaderTemplate = exports.loaderTemplate = function loaderTemplate() {
    return (0, _templates.html)(_templateObject);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(74),
    baseKeys = __webpack_require__(81),
    isArrayLike = __webpack_require__(31);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(99),
    mapCacheDelete = __webpack_require__(106),
    mapCacheGet = __webpack_require__(108),
    mapCacheHas = __webpack_require__(109),
    mapCacheSet = __webpack_require__(110);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(7);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fileSaver = __webpack_require__(44);

var host = {}; /**
                * @module communicatorService
                */

if (true) {
    var electron = window.require('electron');
    host = electron.remote.getCurrentWindow().external;
} else if (HOST === 'WebBrowserControl') {
    host = window.external;
}

exports.default = {

    /**
     * Login Page - Redirects the user to the login page (not needed to implement on host)
     *
     * @param {type} authURL The URL to where the user should be redirected to login
     *
     */
    goToLoginPage: function goToLoginPage(authURL) {
        var body = document.getElementById('body');
        body.innerHTML = '<webview src="' + authURL + '"></webview>';
        // window.location.href = authURL; // This will maybe work for your environment
    },

    /**
     * Search - The search function, will be called when user types into the search field.
     *
     * @param {type} param    The params object used in the API, for example: filter.fullText, page etc.
     * @param {type} callback The products object - { meta: {}, data: [] }
     *
     */
    search: function search(params, callback) {
        host.search(params, function (response) {
            callback(response);
        });
    },

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    abortSearch: function abortSearch() {
        host.abortSearch();
    },
    /**
     * Product - The detailed product function, retrieves the product information.
     *
     * @param {type} id       The id of the product you want to get
     * @param {type} callback The product
     *
     */
    getProduct: function getProduct(id, callback) {
        host.product(id, function (response) {
            callback(response);
        });
    },

    /**
     * Authentication URL - Returns the authentication url so the user can be
     * redirected to a login page to download products.
     *
     * @param {type} location The current location of the user so it can be redirected back to that location
     * @param {type} callback The authentication url
     *
     */
    authURL: function authURL(location, callback) {
        host.authURL(location, function (response) {
            callback(response);
        });
    },

    /**
     * Download - Downloads the selected product with a specific file format
     *
     * @param {type} productId The id of the product
     * @param {type} fileId    The id from the file
     * @param {type} fileName  The filename of the product
     */

    downloadProduct: function downloadProduct(productId, fileId, fileName) {
        host.downloadProduct(productId, fileId, function (response) {
            var blob = new Blob([response]);
            (0, _fileSaver.saveAs)(blob, fileName);
        });
    },

    /**
     * Is user authorized - Checks if user already is authroized and if a download token exists
     *
     * @param {type} callback A boolean if the user is authorized or not
     *
     */
    isAuthorized: function isAuthorized(callback) {
        host.isAuthorized(function (authorized) {
            callback(authorized);
        });
    },

    /**
     * Product Property Sets - The specific product property sets for that product
     *
     * @param {type} id       The ID of the product
     * @param {type} callback The product property sets for that product
     *
     */
    getProductPropertySets: function getProductPropertySets(id, callback) {
        host.productPropertySets(id, function (productPropertySets) {
            callback(productPropertySets);
        });
    }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)))

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propertiesTab = exports.propertiesRow = exports.propertiesTable = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  <table class="detail-table">\n  ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  </table>\n  '], ['\n  <table class="detail-table">\n  ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    ', '\n  </table>\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  <table class="detail-table">\n  ', '\n  ', '\n  ', '\n  ', '\n</table>  '], ['\n  <table class="detail-table">\n  ', '\n  ', '\n  ', '\n  ', '\n</table>  ']),
    _templateObject3 = _taggedTemplateLiteral(['\n  <table class="detail-table">\n  ', '\n  ', '\n  ', '\n ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  </table>  '], ['\n  <table class="detail-table">\n  ', '\n  ', '\n  ', '\n ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  ', '\n  </table>  ']),
    _templateObject4 = _taggedTemplateLiteral(['\n    <div class="property-table-wrapper">\n    <h3>', '</h3>\n    <hr>\n      <h4>', '</h4>\n      <table class="detail-table">\n      ', '\n    </table>\n    </div>'], ['\n    <div class="property-table-wrapper">\n    <h3>', '</h3>\n    <hr>\n      <h4>', '</h4>\n      <table class="detail-table">\n      ', '\n    </table>\n    </div>']),
    _templateObject5 = _taggedTemplateLiteral(['\n    <tr>\n      <th class="header">', ': </th>\n      <td class="data">', '</td>\n    </tr>\n    '], ['\n    <tr>\n      <th class="header">', ': </th>\n      <td class="data">', '</td>\n    </tr>\n    ']),
    _templateObject6 = _taggedTemplateLiteral(['\n    <div id="properties-tab" class="tab">\n        <input id="tab-seven" type="checkbox" name="tabs">\n          <label for="tab-seven">Properties</label>\n          <div id="properties" class="tab-content">\n          </div>\n        </div>'], ['\n    <div id="properties-tab" class="tab">\n        <input id="tab-seven" type="checkbox" name="tabs">\n          <label for="tab-seven">Properties</label>\n          <div id="properties" class="tab-content">\n          </div>\n        </div>']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var links = function links(data) {
  return (0, _templates.html)(_templateObject, data.links.externalProductUrl ? '<tr>\n      <th class="header">Product url: </th>\n      <td class="data"><a href="' + data.links.externalProductUrl + '" target="_blank">' + data.links.externalProductUrl + '</a></td>\n    </tr>' : '', data.links.installInstructionsUrl ? '<tr>\n      <th class="header">Installation instructions: </th>\n      <td class="data"><a href="' + data.links.installInstructionsUrl + '" target="_blank">' + data.links.installInstructionsUrl + '</a></td>\n    </tr>' : '', data.links.cobieProductDataSheetUrl ? '<tr>\n      <th class="header">COBie Product Data Sheet: </th>\n      <td class="data"><a href="' + data.links.cobieProductDataSheetUrl + '" target="_blank">' + data.links.cobieProductDataSheetUrl + '</a></td>\n    </tr>' : '', data.links.productCertificationUrl ? '<tr>\n      <th class="header">Product certification: </th>\n      <td class="data"><a href="' + data.links.productCertificationUrl + '" target="_blank">' + data.links.productCertificationUrl + '</a></td>\n    </tr>' : '', data.links.technicalDescriptionUrl ? '<tr>\n      <th class="header">Technical description: </th>\n      <td class="data"><a href="' + data.links.technicalDescriptionUrl + '" target="_blank">' + data.links.technicalDescriptionUrl + '</a></td>\n    </tr>' : '', data.links.instructionVideoUrl ? '<tr>\n      <th class="header">Instruction video: </th>\n      <td class="data"><a href="' + data.links.instructionVideoUrl + '" target="_blank">' + data.links.instructionVideoUrl + '</a></td>\n    </tr>' : '', data.eanCode ? '<tr>\n      <th class="header">EAN code: </th>\n      <td class="data">' + data.eanCode + '</td>\n    </tr>' : '');
};

var related = function related(data) {
  return (0, _templates.html)(_templateObject2, data.materialMain ? '<tr>\n    <th class="header">Material main: </th>\n    <td class="data">' + data.materialMain.name + ' </td>\n  </tr>' : '', data.materialSecondary ? '<tr>\n    <th class="header">Material secondary: </th>\n    <td class="data">' + data.materialSecondary.name + '</td>\n  </tr>' : '', data.designedIn ? '<tr>\n    <th class="header">Designed in: </th>\n    <td class="data">' + data.designedIn.name + '</td>\n  </tr>' : '', data.manufacturedIn ? '<tr>\n    <th class="header">Manufactured in: </th>\n    <td class="data">' + data.manufacturedIn.name + '</td>\n  </tr>' : '');
};

var classification = function classification(data) {
  // Check names of properties
  return (0, _templates.html)(_templateObject3, data.classifications.bimObjectCategory ? '<tr>\n    <th class="header">BIMobject Category: </th>\n    <td class="data">' + data.classifications.bimObjectCategory.name + '</td>\n  </tr>' : '', data.ifc ? '<tr>\n    <th class="header">IFC Classification: </th>\n    <td class="data">' + data.ifc.name + '</td>\n  </tr>' : '', data.classifications.unspsc ? '<tr>\n        <th class="header">UNSPSC Name: </th>\n        <td class="data">' + data.classifications.unspsc.name + '</td>\n    </tr>\n      <tr>\n        <th class="header">UNSPSC Code: </th>\n        <td class="data">' + (data.classifications.unspsc ? data.classifications.unspsc.code : '') + '</td>\n      </tr> ' : '', data.classifications.uniClass14 ? '<tr>\n    <th class="header">Uniclass 1.4 Description: </th>\n    <td class="data">' + data.classifications.uniClass14.name + '</td>\n  </tr>\n  <tr>\n    <th class="header">Uniclass 1.4 Code: </th>\n    <td class="data">' + data.classifications.uniClass14.code + '</td>\n  </tr>' : '', data.classifications.uniClass20 ? '<tr>\n  <th class="header">Uniclass 2.0 Description: </th>\n  <td class="data">' + data.classifications.uniClass20.name + '</td>\n  </tr>\n  <tr>\n  <th class="header">Uniclass 2.0 Code: </th>\n  <td class="data">' + data.classifications.uniClass20.code + '</td>\n  </tr>' : '', data.classifications.uniClass2015 ? '<tr>\n    <th class="header">Uniclass 2015 Description: </th>\n    <td class="data">' + data.classifications.uniClass2015.name + '</td>\n  </tr>\n  <tr>\n    <th class="header">Uniclass 2015 Code: </th>\n    <td class="data">' + data.classifications.uniClass2015.code + '</td>\n  </tr>' : '', data.classifications.nbsReference ? '<tr>\n    <th class="header">NBS Reference Code: </th>\n    <td class="data">' + data.classifications.nbsReference.code + '</td>\n  </tr>\n  <tr>\n    <th class="header">NBS Reference Description: </th>\n    <td class="data">' + data.classifications.nbsReference.name + '</td>\n  </tr>' : '', data.classifications.masterFormat2014 ? '<tr>\n    <th class="header">CSI MasterFormat 2014 Code: </th>\n    <td class="data">' + data.classifications.masterFormat2014.code + '</td>\n  </tr>\n  <tr>\n    <th class="header">CSI MasterFormat 2014 Title: </th>\n    <td class="data">' + data.classifications.masterFormat2014.name + '</td>\n  </tr>' : '', data.classifications.omniClass ? '<tr>\n    <th class="header">OmniClass Number: </th>\n    <td class="data">' + data.classifications.omniClass.code + '</td>\n  </tr>\n  <tr>\n    <th class="header">OmniClass Title: </th>\n    <td class="data">' + data.classifications.omniClass.name + '</td>\n  </tr>' : '', data.classifications.uniFormat2 ? '<tr>\n    <th class="header">CSI UniFormat II Code: </th>\n    <td class="data">' + data.classifications.uniFormat2.code + '</td>\n  </tr>\n  <tr>\n    <th class="header">CSI UniFormat II Title: </th>\n    <td class="data">' + data.classifications.uniFormat2.name + '</td>\n  </tr>' : '');
};

var propertiesTable = exports.propertiesTable = function propertiesTable(ownerBrandName, propertySetName, rows) {
  return (0, _templates.html)(_templateObject4, ownerBrandName, propertySetName, rows);
};

var propertiesRow = exports.propertiesRow = function propertiesRow(name, value) {
  return (0, _templates.html)(_templateObject5, name, value);
};

var propertiesTab = exports.propertiesTab = function propertiesTab() {
  return (0, _templates.html)(_templateObject6);
};

exports.default = {
  links: links,
  related: related,
  classification: classification
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['<div class="siema-wrapper">\n    ', '\n                    <div id="siema" class="siema"></div>\n                </div>'], ['<div class="siema-wrapper">\n    ', '\n                    <div id="siema" class="siema"></div>\n                </div>']),
    _templateObject2 = _taggedTemplateLiteral(['<div><img src="', '"></img></div>'], ['<div><img src="', '"></img></div>']),
    _templateObject3 = _taggedTemplateLiteral(['<i class="control prev">&#8249;</i>\n                <i class="control next">&#8250;</i>'], ['<i class="control prev">&#8249;</i>\n                <i class="control next">&#8250;</i>']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var wrapper = function wrapper(imageUrls) {
    return (0, _templates.html)(_templateObject, imageUrls.length > 1 ? '' + controls() : '');
};

var image = function image(url) {
    return (0, _templates.html)(_templateObject2, url);
};

var controls = function controls() {
    return (0, _templates.html)(_templateObject3);
};

exports.default = {
    image: image,
    wrapper: wrapper,
    controls: controls
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(4);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(76),
    isObjectLike = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(0),
    stubFalse = __webpack_require__(77);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(78),
    baseUnary = __webpack_require__(79),
    nodeUtil = __webpack_require__(80);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isLength = __webpack_require__(16);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9),
    stackClear = __webpack_require__(94),
    stackDelete = __webpack_require__(95),
    stackGet = __webpack_require__(96),
    stackHas = __webpack_require__(97),
    stackSet = __webpack_require__(98);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(111),
    isObjectLike = __webpack_require__(6);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(112),
    arraySome = __webpack_require__(115),
    cacheHas = __webpack_require__(116);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 37 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    toKey = __webpack_require__(13);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(1),
    isKey = __webpack_require__(19),
    stringToPath = __webpack_require__(136),
    toString = __webpack_require__(139);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(42);

__webpack_require__(150);

// import $ from 'jquery'; not needed for our app. Uncomment if you want.
window.bim = { referenceElementId: '', isLoading: false };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _search = __webpack_require__(43);

var _search2 = _interopRequireDefault(_search);

var _detail = __webpack_require__(56);

var _detail2 = _interopRequireDefault(_detail);

var _loader = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentLocation = '';
var main = document.getElementById('main');

window.onload = function () {
    //    searchCtrl.init();

    console.log('Window loaded');
    // Create loading icon if on any view that isn't instant
    routeTo('#loading');
    if (!window.location.hash.includes('#detail-view')) {
        window.location.hash = '#search';
    }
    currentLocation = window.location.hash;
    routeTo(currentLocation);

    window.addEventListener('hashchange', function (event) {
        currentLocation = window.location.hash;
        routeTo(currentLocation);
    });
};

var routeTo = function routeTo(template) {
    switch (true) {
        case template.includes('#detail-inline'):
            _detail2.default.init({
                inline: true
            });
            break;
        case template.includes('#detail-view'):
            _detail2.default.init({
                inline: false
            });
            break;
        case template.includes('#loading'):
            main.innerHTML = (0, _loader.loaderTemplate)();
            break;
        case template.includes('#search'):
            _search2.default.init();
            break;
    }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _communicatorService = __webpack_require__(20);

var _communicatorService2 = _interopRequireDefault(_communicatorService);

var _result = __webpack_require__(47);

var _result2 = _interopRequireDefault(_result);

var _search = __webpack_require__(49);

var _debounce = __webpack_require__(50);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @module searchController
 * @exports init()
 */

var main = document.getElementById('main');
var currentPage = 0;
var totalPages = 0;
var searchValue = '';
var isLoadingMore = false;
var searchStart = 0;

/**
 * init - Initializes the main search view
 *
 */
var init = function init() {
    main.innerHTML = (0, _search.searchTemplate)();
    addSearchInputListener();
    addClearSearchListener();
    addBackToTopListener();
    addInfiniteScroll();
    if (searchValue !== '') {
        document.getElementById('search-input').value = searchValue;
        search();
    }
};

var addSearchInputListener = function addSearchInputListener() {
    var searchInput = document.getElementById('search-input');
    searchInput.addEventListener('keyup', search);
};

/**
 * addClearSearchListener - Adds eventlisteners to clear the search box
 *
 */
var addClearSearchListener = function addClearSearchListener() {
    var clearSearch = document.getElementById('clear-search');
    clearSearch.addEventListener('click', clear);
};

/**
 * addBackToTopListener - Adds eventlisteners to scroll to the top of the page and to remove the up chevron when at the top of the page
 *
 */
var addBackToTopListener = function addBackToTopListener() {
    var backToTop = document.getElementById('to-top');
    backToTop.addEventListener('click', function () {
        window.scrollTo(0, 0);
    });
    document.addEventListener('scroll', function () {
        if (window.scrollY > 0) {
            backToTop.classList.add('showing');
        } else {
            backToTop.classList.remove('showing');
        }
    });
};

/**
 * search - Gets the value from the search field, verifies that length of it and calls debounceSearch with the value.
 *
 */
var search = function search() {
    timer('start');
    searchValue = document.getElementById('search-input').value;
    if (searchValue.length === 0) {
        clear();
        _communicatorService2.default.abortSearch();
    } else {
        isSearching(true);
        debounceSearch(searchValue);
    }
};

var debounceSearch = (0, _debounce2.default)(function () {
    _result2.default.loading(true);
    _communicatorService2.default.search({
        searchText: encodeURIComponent(searchValue),
        page: 1
    }, function (response) {
        if (response.data) {
            currentPage = response.meta.page;
            totalPages = response.meta.totalPages;
            _result2.default.loading(false);
            _result2.default.init(response.data);
            timer('stop', response.meta.totalCount);
        } else {
            timer('clear');
            isSearching(false);
            _result2.default.clear();
        }
    });
}, 300);

/**
 * isSearching - Adds or removes CSS classes to make the search field and logo smaller when displaying results
 *
 * @param {boolean} searching Bool to add or remove the CSS.
 *
 */
var isSearching = function isSearching(searching) {
    var mainCol = document.getElementById('search');
    var logo = document.getElementById('logo');
    if (searching) {
        mainCol.classList.add('searching');
        logo.classList.add('searching');
    } else {
        mainCol.classList.remove('searching');
        logo.classList.remove('searching');
    }
};

/**
 * clear - Clears the search field, including removing CSS classes etc to set everything back to the initial state
 *
 */
var clear = function clear() {
    document.getElementById('search-input').value = '';
    timer('clear');
    isSearching(false);
    _result2.default.clear();
};

/**
 * addInfiniteScroll - Adds eventlisteners to fetch more products when you scroll to the bottom
 *
 */
var addInfiniteScroll = function addInfiniteScroll() {
    document.addEventListener('scroll', infiniteScroll);
};

/**
 * infiniteScroll - GETs the next page of results (if there is one) and calls for appendResults to add them to the bottom of the list.
 *
 */
var infiniteScroll = function infiniteScroll() {
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 250) {
        if (currentPage < totalPages && isLoadingMore === false) {
            isLoadingMore = true;
            _result2.default.loadingMore(isLoadingMore);
            _communicatorService2.default.search({
                searchText: encodeURIComponent(searchValue),
                page: currentPage + 1
            }, function (response) {
                _result2.default.appendResults(response.data);
                currentPage = currentPage + 1;
                isLoadingMore = false;
                _result2.default.loadingMore(isLoadingMore);
            });
        }
    }
};

/**
 * timer - Timer to display how long the search took below the search field
 *
 * @param {string} command Command to start, stop or clear the timer
 * @param {number} results Number of results found in the search
 *
 */
var timer = function timer(command, results) {
    if (command === 'start') {
        timer('clear');
        searchStart = new Date().getTime();
    } else if (command === 'stop') {
        var stopTime = new Date().getTime();
        var searchTime = (stopTime - searchStart) / 1000;
        document.getElementById('search-time').innerHTML = 'Found ' + results + ' BIMobjects in ' + searchTime + ' seconds.';
    } else if (command === 'clear') {
        document.getElementById('search-time').innerHTML = '';
    }
};

exports.default = {
    init: init
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__(45) !== null) && (__webpack_require__(46) !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
    return saveAs;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _result = __webpack_require__(48);

var _loader = __webpack_require__(14);

/**
 * @module resultController
 */

var results = {};
var allElements = void 0;

/**
 * init - Initializes the result view and inserts into the DOM.
 *
 * @param {Object} data The response data from the search GET request.
 *
 */
var init = function init(data) {
    if (data) {
        var resultsItems = [];
        for (var i = 0; i < data.length; i++) {
            var item = (0, _result.resultTemplate)(data[i]);
            resultsItems.push(item);
        }
        if (resultsItems.length === 0) {
            results.innerHTML = '<p class="no-results">Sorry, no results...</p>';
        } else {
            results.innerHTML = resultsItems.join('');
            addClickListeners(data);
        }
    }
};

/**
 * appendResults - Appends more results to the results view when the bottom of the page is reached.
 *
 * @param {type} data The response data from the search GET request
 *
 */
var appendResults = function appendResults(data) {
    var resultsItems = [];
    for (var i = 0; i < data.length; i++) {
        var item = (0, _result.resultTemplate)(data[i]);
        resultsItems.push(item);
    }
    var nodes = document.createRange().createContextualFragment(resultsItems.join(''));

    results.appendChild(nodes);
    addClickListeners(data);
};

/**
 * addClickListeners - Add eventListeners to open up the detail view for a product.
 *
 * @param {Object} data The response data from the search GET request
 *
 */
var addClickListeners = function addClickListeners(data) {
    allElements = Array.from(document.getElementsByClassName('result-item'));
    var newElements = allElements.filter(function (el) {
        return el.getAttribute('has-listener') === null;
    });

    var _loop = function _loop(i) {
        newElements[i].setAttribute('has-listener', true);
        newElements[i].addEventListener('click', function () {
            var itemsPerRow = Math.round(results.getBoundingClientRect().width / (newElements[i].clientWidth + 40)); // Check to see how many items that will fit in a row in the results div. +40 is to include margins
            setReferenceElementId(itemsPerRow, newElements[i]);
            if (!window.bim.isLoading) {
                window.location.hash = '#detail-inline/' + data[i].id;
            }
        });
    };

    for (var i = 0; i < newElements.length; i++) {
        _loop(i);
    }
};

/**
 * setReferenceElementId - Calculate which is the LAST ELEMENT ON THE ROW to have as reference when appending the detail view to the HTML
 * Adds the ID of that element to window.bim.firstElementOnNextRowId or window.bim.lastElementInArrayId
 *
 * @param {type} itemsPerRow    Number of items that will fit in a row with current screen size
 * @param {type} currentElement The clicked element that will be opened/selected
 *
 */
var setReferenceElementId = function setReferenceElementId(itemsPerRow, currentElement) {
    // Element is on the last row that could contain fewer items then the rest of the rows - get the ID of the last element of the result array which will also be the last element on the last row
    if (isOnLastRow(itemsPerRow)) {
        var element = allElements[allElements.length - 1];
        if (element) {
            window.bim.referenceElementId = element.getAttribute('id');
        };
        // Get the index of the current element, calculate its position on the current row and how many elements are left on that row. Use currentElementIndex + the number of elements left to get the last element on that row.
    } else {
        var currentElementIndex = allElements.findIndex(function (el) {
            return el === currentElement;
        });
        var currentRowPosition = currentElementIndex % itemsPerRow + 1;
        var itemsLeftOnRow = itemsPerRow - currentRowPosition;
        var _element = allElements[currentElementIndex + itemsLeftOnRow];
        if (_element) {
            window.bim.referenceElementId = _element.getAttribute('id');
        };
    }
};

/**
 * isOnLastRow - Checks to see if the element is this row an 'odd row' e.g the last row of results. Compares the number of items on the current row with the number of items on the first row.
 *
 * @param {type} itemsOnCurrentRow The number of items on the row of the selected element
 *
 * @returns {boolean} Is this row an 'odd row' e.g the last row of results
 */
var isOnLastRow = function isOnLastRow(itemsOnCurrentRow) {
    var itemsOnFirstRow = Math.round(results.getBoundingClientRect().width / (allElements[0].clientWidth + 40));
    return itemsOnCurrentRow !== itemsOnFirstRow;
};

/**
 * clear - Clears the results element.
 *
 */
var clear = function clear() {
    results.innerHTML = '';
};

/**
 * loading - Adds or removes a loader spinner from the main results element.
 *
 * @param {boolean} loading Bool to set loader on or off.
 *
 */
var loading = function loading(_loading) {
    results = document.getElementById('results');

    if (_loading) {
        results.innerHTML = (0, _loader.loaderTemplate)();
    } else {
        results.innerHTML = '';
    }
};

/**
 * loadingMore - Adds or remove a loader spinner from the bottom of the results view. Used when loading more results on scroll.
 *
 * @param {boolean} loadingMore Bool to set loader on or off.
 *
 */
var loadingMore = function loadingMore(_loadingMore) {
    if (_loadingMore) {
        window.bim.isLoading = true;
        var element = document.getElementById('loading');
        if (element) {
            element.innerHTML = (0, _loader.loaderTemplate)();
        }
    } else {
        window.bim.isLoading = false;
        var _element2 = document.getElementById('loading');
        if (_element2) {
            _element2.innerHTML = '';
        }
    }
};

exports.default = {
    init: init,
    clear: clear,
    loading: loading,
    appendResults: appendResults,
    loadingMore: loadingMore
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.resultTemplate = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    <div id="', '" class="result-item">\n        <div class="image brand">\n            <img src="', '"/>\n        </div>\n\n        <div class="image product">\n            <img src="', '"/>\n        </div>\n            <div class="product-name">', '</div>\n            <div class="brand-name">', '</div>\n        </div>\n    </div>'], ['\n    <div id="', '" class="result-item">\n        <div class="image brand">\n            <img src="', '"/>\n        </div>\n\n        <div class="image product">\n            <img src="', '"/>\n        </div>\n            <div class="product-name">', '</div>\n            <div class="brand-name">', '</div>\n        </div>\n    </div>']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var resultTemplate = exports.resultTemplate = function resultTemplate(data) {
    return (0, _templates.html)(_templateObject, data.id, data.brand.imageUrl, data.imageUrl, data.name, data.brand.name);
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.searchTemplate = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    <div class="search" id="search">\n    <img class="logo" id="logo" src="assets/svg/logo.svg" alt="BIMobject Cloud Search" />\n    <div class="search-input-wrapper">\n        <span class="search-icon">\n          <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n            <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle>\n            <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path>\n          </svg>\n        </span>\n        <input type="search" id="search-input" placeholder="Search..."  autofocus>\n        <span id="clear-search" class="clear-search">\n            <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>\n                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>\n            </svg>\n        </span>\n        <span id="search-time" class="search-time"></span>\n    </div>\n        <div class="product-list" id="results"></div>\n        <div id="loading"></div>\n    </div>\n    <span class="to-top" id="to-top" title="Back to top">\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g fill="#000000">\n                <path d="M68.9393398,61.0606602 C69.5251263,61.6464466 70.4748737,61.6464466 71.0606602,61.0606602 C71.6464466,60.4748737 71.6464466,59.5251263 71.0606602,58.9393398 L51.0606602,38.9393398 C50.4748737,38.3535534 49.5251263,38.3535534 48.9393398,38.9393398 L28.9393398,58.9393398 C28.3535534,59.5251263 28.3535534,60.4748737 28.9393398,61.0606602 C29.5251263,61.6464466 30.4748737,61.6464466 31.0606602,61.0606602 L50.0115879,42.1097324 L68.9393398,61.0606602 Z"/>\n            </g>\n        </g>\n      </svg>\n    </span>\n    '], ['\n    <div class="search" id="search">\n    <img class="logo" id="logo" src="assets/svg/logo.svg" alt="BIMobject Cloud Search" />\n    <div class="search-input-wrapper">\n        <span class="search-icon">\n          <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n            <circle fill="none" stroke="#000" stroke-width="1.1" cx="9" cy="9" r="7"></circle>\n            <path fill="none" stroke="#000" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path>\n          </svg>\n        </span>\n        <input type="search" id="search-input" placeholder="Search..."  autofocus>\n        <span id="clear-search" class="clear-search">\n            <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>\n                <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>\n            </svg>\n        </span>\n        <span id="search-time" class="search-time"></span>\n    </div>\n        <div class="product-list" id="results"></div>\n        <div id="loading"></div>\n    </div>\n    <span class="to-top" id="to-top" title="Back to top">\n    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" version="1.1" x="0px" y="0px">\n        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n            <g fill="#000000">\n                <path d="M68.9393398,61.0606602 C69.5251263,61.6464466 70.4748737,61.6464466 71.0606602,61.0606602 C71.6464466,60.4748737 71.6464466,59.5251263 71.0606602,58.9393398 L51.0606602,38.9393398 C50.4748737,38.3535534 49.5251263,38.3535534 48.9393398,38.9393398 L28.9393398,58.9393398 C28.3535534,59.5251263 28.3535534,60.4748737 28.9393398,61.0606602 C29.5251263,61.6464466 30.4748737,61.6464466 31.0606602,61.0606602 L50.0115879,42.1097324 L68.9393398,61.0606602 Z"/>\n            </g>\n        </g>\n      </svg>\n    </span>\n    ']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var searchTemplate = exports.searchTemplate = function searchTemplate() {
    return (0, _templates.html)(_templateObject);
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    now = __webpack_require__(51),
    toNumber = __webpack_require__(53);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),
/* 52 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4),
    isSymbol = __webpack_require__(7);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _communicatorService = __webpack_require__(20);

var _communicatorService2 = _interopRequireDefault(_communicatorService);

var _loader = __webpack_require__(14);

var _detail = __webpack_require__(57);

var _downloads = __webpack_require__(58);

var _regions = __webpack_require__(59);

var _tables = __webpack_require__(22);

var _groupBy = __webpack_require__(60);

var _groupBy2 = _interopRequireDefault(_groupBy);

var _siema = __webpack_require__(149);

var _siema2 = _interopRequireDefault(_siema);

var _images = __webpack_require__(23);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selected = {
    id: '',
    oldHTML: ''
}; /**
    * @module detailController
    */

var selectedElement = null;
var detailViewElement = null;
var inlineElement = null;
var elementToAppendTo = null;
var isAuthorized = false;
var authURL = '';
var inline = '';

/**
 * init - Initializes a new detail element and closes the old one (if there is one). Sets loaders and GETs the data needed.
 *
 * @param {Object} options Object with boolean property 'inline' to display the detail view either inline with the search results or as full view.
 *
 */
var init = function init(options) {
    if (!window.bim.isLoading) {
        window.bim.isLoading = true;
        inline = options.inline;

        if (inlineElement) {
            close();
        }
        selected.id = getId();

        if (!options.inline) {
            setUpView();
        } else {
            setUpInline();
        }

        _communicatorService2.default.getProduct(selected.id, function (response) {
            showProduct(response.data);
            _communicatorService2.default.getProductPropertySets(selected.id, function (response) {
                addPropertiesTable(response.data);
                window.bim.isLoading = false;
            });
        });
        // Get the auth url directly on init
        var state = '#detail-view/' + selected.id;
        _communicatorService2.default.authURL(state, function (url) {
            authURL = url;
        });
    }
};

var setUpView = function setUpView() {
    detailViewElement = document.getElementById('main');
    detailViewElement.innerHTML = (0, _loader.loaderTemplate)();
};

var setUpInline = function setUpInline() {
    selectedElement = document.getElementById(selected.id);
    selectedElement.classList.add('selected');
    inlineElement = document.createElement('DIV');
    inlineElement.innerHTML = (0, _loader.loaderTemplate)();
    inlineElement.classList.add('inline-item');
    inlineElement.classList.add('detail-card');
    elementToAppendTo = document.getElementById(window.bim.referenceElementId);
    if (elementToAppendTo) {
        elementToAppendTo.insertAdjacentElement('afterend', inlineElement);
    };
};

/**
 * showProduct - Parses the response as HTML and adds CSS classes, eventListeners etc to the detailed product view.
 *
 * @param {Object} data The response data from the getProduct GET request.
 *
 */
var showProduct = function showProduct(data) {
    if (!inline) {
        detailViewElement.innerHTML = (0, _detail.detailTemplate)(data);
        detailViewElement.classList.add('showing');
    } else {
        inlineElement.classList.remove('detail-card');
        inlineElement.innerHTML = (0, _detail.detailTemplate)(data);
        inlineElement.classList.add('showing');
        scrollToMiddle();
    }

    parseDate(data.dateOfPublishing);
    addCloseClickListener();
    createDownloadsSection(data.files);
    createRegionsSection(data.regions);
    generateImages(data.imageUrls);

    if (!inline) {
        var detailCard = document.getElementById('detail');
        detailCard.classList.add('view');
    };
};

/**
 * scrollToMiddle - Focuses the view on the selected element.
 *
 */
var scrollToMiddle = function scrollToMiddle() {
    var elementRect = inlineElement.getBoundingClientRect();
    var absoluteElementTop = elementRect.top + window.pageYOffset;
    var middle = absoluteElementTop - window.innerHeight / 2;
    window.scrollTo(0, middle + 400);
};

/**
 * getId - Gets the product ID from the window.location.hash and returns it.
 *
 * @returns {string} The product ID.
 */
var getId = function getId() {
    var lastIndexOfSlash = window.location.hash.lastIndexOf('/');
    // A check for windows machines
    if (lastIndexOfSlash === -1) {
        lastIndexOfSlash = window.location.hash.lastIndexOf('\\');
    }
    var id = window.location.hash.substring(lastIndexOfSlash + 1);
    return id;
};

/**
 * parseDate - Parses the date string and removes the time part of it and inserts into the DOM.
 *
 * @param {string} dateString Date string
 *
 */
var parseDate = function parseDate(dateString) {
    var date = dateString.split('T');
    document.getElementById('date').innerHTML = date[0];
};

/**
 * addCloseClickListener - Adds event listener for closing the detail view.
 *
 */
var addCloseClickListener = function addCloseClickListener() {
    var element = document.getElementById('close-detail');
    element.addEventListener('click', function (event) {
        if (inline) {
            window.location.hash = '';
            event.stopPropagation();
            close();
        } else {
            window.location.hash = '#search';
            detailViewElement = null;
        }
    });
};

/**
 * close - Closes the view - plain and simple. Removes CSS-classes that are not needed anymore.
 *
 */
var close = function close() {
    if (inline) {
        selectedElement.classList.remove('selected');
        if (inlineElement.parentNode) {
            inlineElement.parentNode.removeChild(inlineElement);
            inlineElement = null;
        }
    } else {
        selectedElement.classList.remove('selected');
    }
};

/**
 * createDownloadsSection - Loops through the various files associated with a product and creates the HTML for the downloads sections - grouped by platform.
 *
 * @param {Object} files An array of the files for the product.
 *
 */
var createDownloadsSection = function createDownloadsSection(files) {
    var downloadTabsSection = document.getElementById('download-tabs');
    var downloadTabs = [];
    var fileIds = [];

    var groupedFiles = (0, _groupBy2.default)(files, function (file) {
        return file.fileType.name;
    });
    var objectKeys = Object.keys(groupedFiles);

    for (var i = 0; i < objectKeys.length; i++) {
        var tabName = objectKeys[i];
        var items = [];

        for (var j = 0; j < groupedFiles[tabName].length; j++) {
            items.push((0, _downloads.downloadItem)(groupedFiles[tabName][j]));
            fileIds.push(groupedFiles[tabName][j].id);
        }
        downloadTabs.push((0, _downloads.downloadTab)(tabName, groupedFiles[tabName][0].fileType.imageUrl, items.join('')));
    }
    downloadTabsSection.innerHTML = downloadTabs.join('');
    addDownloadClickListeners(fileIds);
};

/**
 * addDownloadClickListeners - Adds event listeners to download the file when download button is clicked.
 *
 * @param {Object} fileIds Array of the fileIds for the product. Used as id for the HTML-element and as param in the GET request.
 *
 */
var addDownloadClickListeners = function addDownloadClickListeners(fileIds) {
    var _loop = function _loop(i) {
        var element = document.getElementById(fileIds[i].toString());
        element.addEventListener('click', function () {
            element.setAttribute('disabled', true);
            _communicatorService2.default.isAuthorized(function (authorized) {
                isAuthorized = authorized;

                if (isAuthorized) {
                    var fileName = element.getAttribute('fileName');
                    _communicatorService2.default.downloadProduct(getId(), fileIds[i], fileName);
                } else {
                    _communicatorService2.default.goToLoginPage(authURL);
                }
            });
        });
    };

    for (var i = 0; i < fileIds.length; i++) {
        _loop(i);
    }
};

/**
 * createRegionsSection - Loops through the regions associated with a product and creates the HTML for the regions tab in the accordion.
 *
 * @param {Object} regions Array of regions for the product. If no regions are passed in - the product is available world wide
 *
 */
var createRegionsSection = function createRegionsSection(regions) {
    var regionsSection = document.getElementById('regions');
    if (regions.length === 0) {
        regionsSection.innerHTML = (0, _regions.worldWide)();
        return;
    }
    var regionsHTML = [];
    // Loop all regions
    for (var i = 0; i < regions.length; i++) {
        var countries = [];
        var currentRegion = regions[i];
        // Loop all countries in a region and create a country element for each.
        for (var j = 0; j < currentRegion.countries.length; j++) {
            countries.push((0, _regions.country)(currentRegion.countries[j].name));
        }
        // Add country elements to region element.
        regionsHTML.push((0, _regions.region)(currentRegion, countries.join('')));
    }
    // Add region elements to DOM.
    regionsSection.innerHTML = regionsHTML.join('');
};

/**
 * addPropertiesTable - Loops through the propertySets associated with a product and creates the HTML for the properties tab in the accordion.
 *
 * @param {Object} propertySets Array of propertySets for the product
 *
 */
var addPropertiesTable = function addPropertiesTable(propertySets) {
    if (propertySets.length > 0) {
        var lastTab = document.getElementById('region-tab');
        lastTab.insertAdjacentHTML('afterend', (0, _tables.propertiesTab)());
        var tables = [];
        // Loop all propertySets and set the propertySetName, ownerBrandName and properties for each set.
        for (var i = 0; i < propertySets.length; i++) {
            var rows = [];
            var propertySetName = propertySets[i].name;
            var ownerBrandName = propertySets[i].ownerBrand.name;
            var properties = propertySets[i].properties;
            // Loop properties and create a table row for each property name/value pair.
            for (var j = 0; j < properties.length; j++) {
                var propertyName = properties[j].definition.name;
                var parsedPropertyValue = parsePropertyValue(properties[j].value);
                rows.push((0, _tables.propertiesRow)(propertyName, parsedPropertyValue));
            }
            // Add rows to a new table element.
            tables.push((0, _tables.propertiesTable)(ownerBrandName, propertySetName, rows.join('')));
        }
        // Add all tables to DOM.
        document.getElementById('properties').innerHTML = tables.join('');
    }
};

/**
 * generateImages - The image carousel
 *
 * @param {type} imageUrls And array of image url's that should be presented
 *
 */
var generateImages = function generateImages(imageUrls) {
    var element = document.getElementById('siema');
    var imageSlideshow = [];
    // Create images
    for (var i = 0; i < imageUrls.length; i++) {
        imageSlideshow.push(_images2.default.image(imageUrls[i]));
    }
    // Add to div
    element.innerHTML = imageSlideshow.join('');
    // Create slideshow element, we think it's ok to have a slideshow with only one element
    var slidshow = new _siema2.default();
    // If more then one picture, add click listeners to arrows
    if (imageUrls.length > 1) {
        document.querySelector('.control.prev').addEventListener('click', function () {
            slidshow.prev();
        });
        document.querySelector('.control.next').addEventListener('click', function () {
            slidshow.next();
        });
    };
};

/**
 * parsePropertyValue - Parses the property values to the proper format including the unit symbol.
 *
 * @param {Object} propertyValue Object containing the value and meta data on how the value should be parsed.
 *
 * @returns {string} The parsed value to be used.
 */
var parsePropertyValue = function parsePropertyValue(propertyValue) {
    var parsedValue = '';
    if (propertyValue.isRanged) {
        // If value is ranged add ' - ' and the measurementUnit if it exists.
        parsedValue = propertyValue.value.min + ' - ' + propertyValue.value.max + ' ' + (propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : '') + ' ';
    } else if (propertyValue.isMultiValued) {
        // If value is isMultiValued, add the measurementUnit (if it exists) and ',' between each value.
        parsedValue = propertyValue.value.join(' ' + (propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : '') + ', ');
        parsedValue = parsedValue + ' ' + (propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : '');
    } else if (propertyValue.value != null) {
        // Add measurementUnit if it exists.
        parsedValue = propertyValue.value + ' ' + (propertyValue.measurementUnit ? propertyValue.measurementUnit.symbol : '') + ' ';
    } else if (propertyValue.hasRawValue && propertyValue.rawValue) {
        // Display rawValue if it has one
        parsedValue = propertyValue.rawValue;
    };
    return parsedValue;
};

exports.default = {
    init: init
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detailTemplate = undefined;

var _templateObject = _taggedTemplateLiteral(['\n<div class="detail-card row" id="detail">\n<span id="close-detail" class="close-detail">\n  <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>\n    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>\n  </svg>\n</span>\n  <div class="col left">\n    ', '\n    <div class="download">\n        Download files\n        <div class="accordion-download">\n        <div id="download-tabs" class="full"></div>\n        </div>\n    </div>\n  </div>\n  <div class="col right">\n    <div class="product-name">', '</div>\n    <div class="brand-name">', '</div>\n    <div class="properties">\n\n        <div><label>Product family:</label> <span>', '</span></div>\n        <div><label>Product group: </label> <span>', '</span></div>\n        <div><label>Width:</label> <span>', ' mm</span></div>\n        <div><label>Height:</label> <span>', ' mm</span></div>\n        <div><label>Depth:</label> <span>', ' mm</span></div>\n        <div><label>Date of publishing: </label> <span id="date"></span></div>\n        <div><label>Edition number: </label> <span>', '</span></div>\n        <div><label>Type:</label> <span>', '</span></div>\n    </div>\n\n  <div class="accordion">\n  <div class="full">\n  ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    <div id="region-tab" class="tab">\n      <input id="tab-six" type="checkbox" name="tabs">\n      <label for="tab-six">Region</label>\n      <div id="regions" class="tab-content">\n      </div>\n    </div>\n  </div>\n  </div>\n    </div>\n</div>'], ['\n<div class="detail-card row" id="detail">\n<span id="close-detail" class="close-detail">\n  <svg width="25" height="25" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" ratio="1">\n    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,16 L4,4"></path>\n    <path fill="none" stroke="#000" stroke-width="1.06" d="M16,4 L4,16"></path>\n  </svg>\n</span>\n  <div class="col left">\n    ', '\n    <div class="download">\n        Download files\n        <div class="accordion-download">\n        <div id="download-tabs" class="full"></div>\n        </div>\n    </div>\n  </div>\n  <div class="col right">\n    <div class="product-name">', '</div>\n    <div class="brand-name">', '</div>\n    <div class="properties">\n\n        <div><label>Product family:</label> <span>', '</span></div>\n        <div><label>Product group: </label> <span>', '</span></div>\n        <div><label>Width:</label> <span>', ' mm</span></div>\n        <div><label>Height:</label> <span>', ' mm</span></div>\n        <div><label>Depth:</label> <span>', ' mm</span></div>\n        <div><label>Date of publishing: </label> <span id="date"></span></div>\n        <div><label>Edition number: </label> <span>', '</span></div>\n        <div><label>Type:</label> <span>', '</span></div>\n    </div>\n\n  <div class="accordion">\n  <div class="full">\n  ', '\n    ', '\n    ', '\n    ', '\n    ', '\n    <div id="region-tab" class="tab">\n      <input id="tab-six" type="checkbox" name="tabs">\n      <label for="tab-six">Region</label>\n      <div id="regions" class="tab-content">\n      </div>\n    </div>\n  </div>\n  </div>\n    </div>\n</div>']);

var _templates = __webpack_require__(2);

var _tables = __webpack_require__(22);

var _tables2 = _interopRequireDefault(_tables);

var _images = __webpack_require__(23);

var _images2 = _interopRequireDefault(_images);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var detailTemplate = exports.detailTemplate = function detailTemplate(data) {
  return (0, _templates.html)(_templateObject, _images2.default.wrapper(data.imageUrls), data.name, data.brand.name, data.productFamily.name, data.productGroup.name, data.width, data.height, data.depth, data.editionNumber, data.contentType.name, data.descriptionHtml ? '<div class="tab">\n      <input id="tab-one" type="checkbox" checked name="tabs">\n      <label for="tab-one">Description</label>\n      <div class="tab-content">\n        <p>' + data.descriptionHtml + '</p>\n      </div>\n    </div>' : '', data.specificationHtml ? '<div class="tab">\n      <input id="tab-two" type="checkbox" name="tabs">\n      <label for="tab-two">Specification text</label>\n      <div class="tab-content">\n        <p>' + data.specificationHtml + '</p>\n      </div>\n    </div>' : '', Object.keys(data.links).length > 0 ? '<div class="tab">\n      <input id="tab-three" type="checkbox" name="tabs">\n      <label for="tab-three">Links</label>\n      <div class="tab-content">\n        ' + _tables2.default.links(data) + '\n      </div>\n    </div>' : '', data.ifc || data.materialMain || data.materialSecondary || data.designedIn ? '<div class="tab">\n      <input id="tab-four" type="checkbox" name="tabs">\n      <label for="tab-four">Related</label>\n      <div class="tab-content">\n        ' + _tables2.default.related(data) + '\n      </div>\n    </div>' : '', data.classifications ? '<div class="tab">\n      <input id="tab-five" type="checkbox" name="tabs">\n      <label for="tab-five">Classification</label>\n      <div class="tab-content">\n        ' + _tables2.default.classification(data) + '\n      </div>\n    </div>' : '');
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadTab = exports.downloadItem = undefined;

var _templateObject = _taggedTemplateLiteral(['\n      <div class="download-item" title="', '">\n      <!--<div class="icon">\n          <img src="', '"/>\n      </div>-->\n      <div class="text">\n          <div class="file-name">', '</div>\n      </div>\n      <div class="buttons">\n        <button id="', '" fileName="', '" class="button download-button">Download</button>\n      </div>\n      </div>\n  '], ['\n      <div class="download-item" title="', '">\n      <!--<div class="icon">\n          <img src="', '"/>\n      </div>-->\n      <div class="text">\n          <div class="file-name">', '</div>\n      </div>\n      <div class="buttons">\n        <button id="', '" fileName="', '" class="button download-button">Download</button>\n      </div>\n      </div>\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n    <div class="tab">\n      <input id="', '" type="checkbox" name="tabs">\n      <label for="', '">', '\n      <div class="tab-icon">\n        <img src="', '">\n      </div>\n      </label>\n      <div class="tab-content">\n      ', '\n      </div>\n    </div>'], ['\n    <div class="tab">\n      <input id="', '" type="checkbox" name="tabs">\n      <label for="', '">', '\n      <div class="tab-icon">\n        <img src="', '">\n      </div>\n      </label>\n      <div class="tab-content">\n      ', '\n      </div>\n    </div>']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var downloadItem = exports.downloadItem = function downloadItem(file) {
  return (0, _templates.html)(_templateObject, file.description, file.fileType.imageUrl, file.name, file.id, file.name);
};

var downloadTab = exports.downloadTab = function downloadTab(platform, platformIcon, item) {
  return (0, _templates.html)(_templateObject2, platform, platform, platform, platformIcon, item);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.worldWide = exports.country = exports.region = undefined;

var _templateObject = _taggedTemplateLiteral(['\n    <div class="region">\n      <h4>', '</h4>\n      ', '\n    </div>'], ['\n    <div class="region">\n      <h4>', '</h4>\n      ', '\n    </div>']),
    _templateObject2 = _taggedTemplateLiteral(['\n    <div class="country-name">', '</div>'], ['\n    <div class="country-name">', '</div>']),
    _templateObject3 = _taggedTemplateLiteral(['\n  <div class="world-wide">This product is available world-wide.</div>\n  '], ['\n  <div class="world-wide">This product is available world-wide.</div>\n  ']);

var _templates = __webpack_require__(2);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var region = exports.region = function region(_region, countries) {
    return (0, _templates.html)(_templateObject, _region.name, countries);
};

var country = exports.country = function country(_country) {
    return (0, _templates.html)(_templateObject2, _country);
};

var worldWide = exports.worldWide = function worldWide() {
    return (0, _templates.html)(_templateObject3);
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(61),
    createAggregator = __webpack_require__(67);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = createAggregator(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    baseAssignValue(result, key, [value]);
  }
});

module.exports = groupBy;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(62);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isMasked = __webpack_require__(64),
    isObject = __webpack_require__(4),
    toSource = __webpack_require__(25);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(65);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var arrayAggregator = __webpack_require__(68),
    baseAggregator = __webpack_require__(69),
    baseIteratee = __webpack_require__(86),
    isArray = __webpack_require__(1);

/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = isArray(collection) ? arrayAggregator : baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, baseIteratee(iteratee, 2), accumulator);
  };
}

module.exports = createAggregator;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

module.exports = arrayAggregator;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(70);

/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  baseEach(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

module.exports = baseAggregator;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(71),
    createBaseEach = __webpack_require__(85);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(72),
    keys = __webpack_require__(15);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(73);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(75),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(27),
    isIndex = __webpack_require__(29),
    isTypedArray = __webpack_require__(30);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 75 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 77 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isLength = __webpack_require__(16),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(21);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(28)(module)))

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(82),
    nativeKeys = __webpack_require__(83);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 82 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(84);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(31);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(87),
    baseMatchesProperty = __webpack_require__(134),
    identity = __webpack_require__(145),
    isArray = __webpack_require__(1),
    property = __webpack_require__(146);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(88),
    getMatchData = __webpack_require__(133),
    matchesStrictComparable = __webpack_require__(37);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(32),
    baseIsEqual = __webpack_require__(34);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 89 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 95 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 96 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 97 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9),
    Map = __webpack_require__(17),
    MapCache = __webpack_require__(18);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(100),
    ListCache = __webpack_require__(9),
    Map = __webpack_require__(17);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(101),
    hashDelete = __webpack_require__(102),
    hashGet = __webpack_require__(103),
    hashHas = __webpack_require__(104),
    hashSet = __webpack_require__(105);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 102 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(11);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(12);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(32),
    equalArrays = __webpack_require__(35),
    equalByTag = __webpack_require__(117),
    equalObjects = __webpack_require__(121),
    getTag = __webpack_require__(128),
    isArray = __webpack_require__(1),
    isBuffer = __webpack_require__(27),
    isTypedArray = __webpack_require__(30);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(18),
    setCacheAdd = __webpack_require__(113),
    setCacheHas = __webpack_require__(114);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 113 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 114 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    Uint8Array = __webpack_require__(118),
    eq = __webpack_require__(33),
    equalArrays = __webpack_require__(35),
    mapToArray = __webpack_require__(119),
    setToArray = __webpack_require__(120);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(0);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 119 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 120 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(122);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(123),
    getSymbols = __webpack_require__(125),
    keys = __webpack_require__(15);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(124),
    isArray = __webpack_require__(1);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 124 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(126),
    stubArray = __webpack_require__(127);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 126 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(129),
    Map = __webpack_require__(17),
    Promise = __webpack_require__(130),
    Set = __webpack_require__(131),
    WeakMap = __webpack_require__(132),
    baseGetTag = __webpack_require__(5),
    toSource = __webpack_require__(25);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(0);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(36),
    keys = __webpack_require__(15);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(34),
    get = __webpack_require__(135),
    hasIn = __webpack_require__(142),
    isKey = __webpack_require__(19),
    isStrictComparable = __webpack_require__(36),
    matchesStrictComparable = __webpack_require__(37),
    toKey = __webpack_require__(13);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(38);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(137);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(138);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(18);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(140);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    arrayMap = __webpack_require__(141),
    isArray = __webpack_require__(1),
    isSymbol = __webpack_require__(7);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 141 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(143),
    hasPath = __webpack_require__(144);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 143 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(39),
    isArguments = __webpack_require__(26),
    isArray = __webpack_require__(1),
    isIndex = __webpack_require__(29),
    isLength = __webpack_require__(16),
    toKey = __webpack_require__(13);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 145 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(147),
    basePropertyDeep = __webpack_require__(148),
    isKey = __webpack_require__(19),
    toKey = __webpack_require__(13);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 147 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(38);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define("Siema",[],t):"object"==typeof exports?exports.Siema=t():e.Siema=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var i={};return t.m=e,t.c=i,t.d=function(e,i,r){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}(),l=function(){function e(t){var i=this;if(r(this,e),this.config=e.mergeSettings(t),this.selector="string"==typeof this.config.selector?document.querySelector(this.config.selector):this.config.selector,null===this.selector)throw new Error("Something wrong with your selector 😭");this.resolveSlidesNumber(),this.selectorWidth=this.selector.offsetWidth,this.innerElements=[].slice.call(this.selector.children),this.currentSlide=this.config.loop?this.config.startIndex%this.innerElements.length:Math.max(0,Math.min(this.config.startIndex,this.innerElements.length-this.perPage)),this.transformProperty=e.webkitOrNot(),["resizeHandler","touchstartHandler","touchendHandler","touchmoveHandler","mousedownHandler","mouseupHandler","mouseleaveHandler","mousemoveHandler","clickHandler"].forEach(function(e){i[e]=i[e].bind(i)}),this.init()}return s(e,[{key:"attachEvents",value:function(){window.addEventListener("resize",this.resizeHandler),this.config.draggable&&(this.pointerDown=!1,this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:!1},this.selector.addEventListener("touchstart",this.touchstartHandler),this.selector.addEventListener("touchend",this.touchendHandler),this.selector.addEventListener("touchmove",this.touchmoveHandler),this.selector.addEventListener("mousedown",this.mousedownHandler),this.selector.addEventListener("mouseup",this.mouseupHandler),this.selector.addEventListener("mouseleave",this.mouseleaveHandler),this.selector.addEventListener("mousemove",this.mousemoveHandler),this.selector.addEventListener("click",this.clickHandler))}},{key:"detachEvents",value:function(){window.removeEventListener("resize",this.resizeHandler),this.selector.removeEventListener("touchstart",this.touchstartHandler),this.selector.removeEventListener("touchend",this.touchendHandler),this.selector.removeEventListener("touchmove",this.touchmoveHandler),this.selector.removeEventListener("mousedown",this.mousedownHandler),this.selector.removeEventListener("mouseup",this.mouseupHandler),this.selector.removeEventListener("mouseleave",this.mouseleaveHandler),this.selector.removeEventListener("mousemove",this.mousemoveHandler),this.selector.removeEventListener("click",this.clickHandler)}},{key:"init",value:function(){this.attachEvents(),this.selector.style.overflow="hidden",this.selector.style.direction=this.config.rtl?"rtl":"ltr",this.buildSliderFrame(),this.config.onInit.call(this)}},{key:"buildSliderFrame",value:function(){var e=this.selectorWidth/this.perPage,t=this.config.loop?this.innerElements.length+2*this.perPage:this.innerElements.length;this.sliderFrame=document.createElement("div"),this.sliderFrame.style.width=e*t+"px",this.enableTransition(),this.config.draggable&&(this.selector.style.cursor="-webkit-grab");var i=document.createDocumentFragment();if(this.config.loop)for(var r=this.innerElements.length-this.perPage;r<this.innerElements.length;r++){var n=this.buildSliderFrameItem(this.innerElements[r].cloneNode(!0));i.appendChild(n)}for(var s=0;s<this.innerElements.length;s++){var l=this.buildSliderFrameItem(this.innerElements[s]);i.appendChild(l)}if(this.config.loop)for(var o=0;o<this.perPage;o++){var a=this.buildSliderFrameItem(this.innerElements[o].cloneNode(!0));i.appendChild(a)}this.sliderFrame.appendChild(i),this.selector.innerHTML="",this.selector.appendChild(this.sliderFrame),this.slideToCurrent()}},{key:"buildSliderFrameItem",value:function(e){var t=document.createElement("div");return t.style.cssFloat=this.config.rtl?"right":"left",t.style.float=this.config.rtl?"right":"left",t.style.width=(this.config.loop?100/(this.innerElements.length+2*this.perPage):100/this.innerElements.length)+"%",t.appendChild(e),t}},{key:"resolveSlidesNumber",value:function(){if("number"==typeof this.config.perPage)this.perPage=this.config.perPage;else if("object"===n(this.config.perPage)){this.perPage=1;for(var e in this.config.perPage)window.innerWidth>=e&&(this.perPage=this.config.perPage[e])}}},{key:"prev",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide-e<0){this.disableTransition();var r=this.currentSlide+this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r-e}else this.currentSlide=this.currentSlide-e}else this.currentSlide=Math.max(this.currentSlide-e,0);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"next",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments[1];if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;if(this.config.loop){if(this.currentSlide+e>this.innerElements.length-this.perPage){this.disableTransition();var r=this.currentSlide-this.innerElements.length,n=this.perPage,s=r+n,l=(this.config.rtl?1:-1)*s*(this.selectorWidth/this.perPage),o=this.config.draggable?this.drag.endX-this.drag.startX:0;this.sliderFrame.style[this.transformProperty]="translate3d("+(l+o)+"px, 0, 0)",this.currentSlide=r+e}else this.currentSlide=this.currentSlide+e}else this.currentSlide=Math.min(this.currentSlide+e,this.innerElements.length-this.perPage);i!==this.currentSlide&&(this.slideToCurrent(this.config.loop),this.config.onChange.call(this),t&&t.call(this))}}},{key:"disableTransition",value:function(){this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing}},{key:"enableTransition",value:function(){this.sliderFrame.style.webkitTransition="all "+this.config.duration+"ms "+this.config.easing,this.sliderFrame.style.transition="all "+this.config.duration+"ms "+this.config.easing}},{key:"goTo",value:function(e,t){if(!(this.innerElements.length<=this.perPage)){var i=this.currentSlide;this.currentSlide=this.config.loop?e%this.innerElements.length:Math.min(Math.max(e,0),this.innerElements.length-this.perPage),i!==this.currentSlide&&(this.slideToCurrent(),this.config.onChange.call(this),t&&t.call(this))}}},{key:"slideToCurrent",value:function(e){var t=this,i=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,r=(this.config.rtl?1:-1)*i*(this.selectorWidth/this.perPage);e?requestAnimationFrame(function(){requestAnimationFrame(function(){t.enableTransition(),t.sliderFrame.style[t.transformProperty]="translate3d("+r+"px, 0, 0)"})}):this.sliderFrame.style[this.transformProperty]="translate3d("+r+"px, 0, 0)"}},{key:"updateAfterDrag",value:function(){var e=(this.config.rtl?-1:1)*(this.drag.endX-this.drag.startX),t=Math.abs(e),i=this.config.multipleDrag?Math.ceil(t/(this.selectorWidth/this.perPage)):1,r=e>0&&this.currentSlide-i<0,n=e<0&&this.currentSlide+i>this.innerElements.length-this.perPage;e>0&&t>this.config.threshold&&this.innerElements.length>this.perPage?this.prev(i):e<0&&t>this.config.threshold&&this.innerElements.length>this.perPage&&this.next(i),this.slideToCurrent(r||n)}},{key:"resizeHandler",value:function(){this.resolveSlidesNumber(),this.currentSlide+this.perPage>this.innerElements.length&&(this.currentSlide=this.innerElements.length<=this.perPage?0:this.innerElements.length-this.perPage),this.selectorWidth=this.selector.offsetWidth,this.buildSliderFrame()}},{key:"clearDrag",value:function(){this.drag={startX:0,endX:0,startY:0,letItGo:null,preventClick:this.drag.preventClick}}},{key:"touchstartHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.touches[0].pageX,this.drag.startY=e.touches[0].pageY)}},{key:"touchendHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"touchmoveHandler",value:function(e){if(e.stopPropagation(),null===this.drag.letItGo&&(this.drag.letItGo=Math.abs(this.drag.startY-e.touches[0].pageY)<Math.abs(this.drag.startX-e.touches[0].pageX)),this.pointerDown&&this.drag.letItGo){e.preventDefault(),this.drag.endX=e.touches[0].pageX,this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mousedownHandler",value:function(e){-1!==["TEXTAREA","OPTION","INPUT","SELECT"].indexOf(e.target.nodeName)||(e.preventDefault(),e.stopPropagation(),this.pointerDown=!0,this.drag.startX=e.pageX)}},{key:"mouseupHandler",value:function(e){e.stopPropagation(),this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.enableTransition(),this.drag.endX&&this.updateAfterDrag(),this.clearDrag()}},{key:"mousemoveHandler",value:function(e){if(e.preventDefault(),this.pointerDown){"A"===e.target.nodeName&&(this.drag.preventClick=!0),this.drag.endX=e.pageX,this.selector.style.cursor="-webkit-grabbing",this.sliderFrame.style.webkitTransition="all 0ms "+this.config.easing,this.sliderFrame.style.transition="all 0ms "+this.config.easing;var t=this.config.loop?this.currentSlide+this.perPage:this.currentSlide,i=t*(this.selectorWidth/this.perPage),r=this.drag.endX-this.drag.startX,n=this.config.rtl?i+r:i-r;this.sliderFrame.style[this.transformProperty]="translate3d("+(this.config.rtl?1:-1)*n+"px, 0, 0)"}}},{key:"mouseleaveHandler",value:function(e){this.pointerDown&&(this.pointerDown=!1,this.selector.style.cursor="-webkit-grab",this.drag.endX=e.pageX,this.drag.preventClick=!1,this.enableTransition(),this.updateAfterDrag(),this.clearDrag())}},{key:"clickHandler",value:function(e){this.drag.preventClick&&e.preventDefault(),this.drag.preventClick=!1}},{key:"remove",value:function(e,t){if(e<0||e>=this.innerElements.length)throw new Error("Item to remove doesn't exist 😭");var i=e<this.currentSlide,r=this.currentSlide+this.perPage-1===e;(i||r)&&this.currentSlide--,this.innerElements.splice(e,1),this.buildSliderFrame(),t&&t.call(this)}},{key:"insert",value:function(e,t,i){if(t<0||t>this.innerElements.length+1)throw new Error("Unable to inset it at this index 😭");if(-1!==this.innerElements.indexOf(e))throw new Error("The same item in a carousel? Really? Nope 😭");var r=t<=this.currentSlide>0&&this.innerElements.length;this.currentSlide=r?this.currentSlide+1:this.currentSlide,this.innerElements.splice(t,0,e),this.buildSliderFrame(),i&&i.call(this)}},{key:"prepend",value:function(e,t){this.insert(e,0),t&&t.call(this)}},{key:"append",value:function(e,t){this.insert(e,this.innerElements.length+1),t&&t.call(this)}},{key:"destroy",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments[1];if(this.detachEvents(),this.selector.style.cursor="auto",e){for(var i=document.createDocumentFragment(),r=0;r<this.innerElements.length;r++)i.appendChild(this.innerElements[r]);this.selector.innerHTML="",this.selector.appendChild(i),this.selector.removeAttribute("style")}t&&t.call(this)}}],[{key:"mergeSettings",value:function(e){var t={selector:".siema",duration:200,easing:"ease-out",perPage:1,startIndex:0,draggable:!0,multipleDrag:!0,threshold:20,loop:!1,rtl:!1,onInit:function(){},onChange:function(){}},i=e;for(var r in i)t[r]=i[r];return t}},{key:"webkitOrNot",value:function(){return"string"==typeof document.documentElement.style.transform?"transform":"WebkitTransform"}}]),e}();t.default=l,e.exports=t.default}])});

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(151);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(159)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./styles.less", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/less-loader/dist/cjs.js!./styles.less");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(152);
exports = module.exports = __webpack_require__(153)(false);
// imports


// module
exports.push([module.i, ".row .row {\n  margin: 0 -1.5em;\n}\n.col {\n  padding: 0 1.5em;\n}\n.row:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n@media only screen {\n  .col {\n    float: left;\n    width: 100%;\n    box-sizing: border-box;\n  }\n}\n@media only screen and (min-width: 960px) {\n  .left {\n    width: 33.33%;\n  }\n  .right {\n    width: 66.66%;\n  }\n}\n.container {\n  padding: 1em;\n}\n.left {\n  text-align: center;\n}\n.right .product-name {\n  margin-top: 1em;\n  font-size: 32px;\n  color: #333;\n  font-weight: 300;\n}\n.right .brand-name {\n  font-size: 24px;\n  margin-top: .5em;\n  color: #999;\n}\n.detail-card {\n  padding: 2em;\n  margin: 0 -2em !important;\n  text-align: left;\n  position: relative;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  background: #fff;\n}\n.detail-card.view .close-detail {\n  right: 2em;\n}\n.detail-card .close-detail {\n  position: absolute;\n  opacity: 0.5;\n  right: 3em;\n  top: 1em;\n  cursor: pointer;\n}\n.detail-card .close-detail:hover {\n  opacity: 1;\n}\n.file-name {\n  font-family: monospace;\n}\nimg {\n  width: 100%;\n  max-width: 385px;\n}\n.properties {\n  font-size: 16px;\n  margin-top: 1em;\n}\n.properties label {\n  display: inline-block;\n  width: 40%;\n  font-weight: 600;\n  font-size: 16px;\n}\n.detail-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin: 1em;\n}\n.detail-table .header {\n  text-align: left;\n  width: 40%;\n  font-size: 12px;\n}\n.detail-table .data {\n  width: 60%;\n  font-size: 14px;\n}\n.detail-table tr {\n  border: solid #ddd;\n  border-width: 0.5px 0;\n  line-height: 2.5;\n}\n.detail-table tr:nth-child(even) {\n  background-color: #fff;\n}\n.detail-table tr:nth-child(even):hover {\n  background-color: #fff;\n}\n.country-name {\n  display: inline-grid;\n  line-height: 1;\n  color: #fff;\n  background-color: #999;\n  text-align: center;\n  white-space: nowrap;\n  border-radius: 0.25em;\n  padding: .2em .4em;\n  font-size: 12px;\n}\n.region {\n  margin: 1em;\n}\n.region h4 {\n  margin: 0;\n}\n.world-wide {\n  margin: 1.5em;\n}\n.download {\n  margin-top: 1em;\n  text-align: left;\n}\n.search {\n  margin-top: 15vh;\n  text-align: center;\n  transition: margin 0.2s ease-in;\n}\n.search.searching {\n  margin-top: 0;\n  transition: margin 0.2s ease-out;\n}\n.search-input-wrapper {\n  position: relative;\n  max-width: 45em;\n  margin: 0 auto;\n}\n.search-input-wrapper #search-input {\n  max-width: 45em;\n  width: 100%;\n  height: 2.5em;\n  padding-left: 1.5em;\n  border-radius: 2em;\n  outline: 0;\n  font-size: 24px;\n  border: 1px solid #ddd;\n  padding-right: 1.5em;\n  color: #555;\n}\n.search-input-wrapper #search-input::-ms-clear {\n  display: none;\n}\n.search-icon {\n  position: absolute;\n  top: 0.8em;\n  opacity: 0.5;\n  left: 0.4em;\n}\n.clear-search {\n  position: absolute;\n  top: 0.8em;\n  opacity: 0.5;\n  right: 0.7em;\n  cursor: pointer;\n}\n.clear-search:hover {\n  opacity: 1;\n}\n.search-time {\n  font-style: italic;\n  font-size: 12px;\n  color: #999;\n}\n.search-button:hover {\n  color: #fff;\n  background-color: #0aaeff;\n  border-color: #088bcc;\n}\n.logo {\n  width: 10em;\n  transition: width 0.2s ease-in;\n}\n.logo.searching {\n  transition: width 0.2s ease-in;\n  width: 5em;\n}\n#search-input::-webkit-search-cancel-button {\n  -webkit-appearance: none;\n}\n.to-top {\n  position: fixed;\n  visibility: hidden;\n  right: 1em;\n  bottom: 0em;\n  width: 2em;\n  cursor: pointer;\n  opacity: 0;\n  transition: all 0.2s ease-out;\n}\n.to-top.showing {\n  visibility: visible;\n  opacity: 1;\n  transition: all 0.5s ease-out;\n}\n.product-list {\n  margin: 3em auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n.product-list .inline-item {\n  cursor: default;\n  max-height: 200px;\n  flex: 0 0 100%;\n}\n.product-list .inline-item.showing {\n  overflow: hidden;\n  max-height: 4000px;\n  transition: all 1s;\n}\n.product-list .result-item {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);\n  padding: 1em;\n  margin: 1em;\n  flex: 1;\n  transition: box-shadow 0.1s linear;\n  background: #fff;\n}\n.product-list .result-item .image {\n  margin: 0 auto;\n}\n.product-list .result-item .image img {\n  width: inherit;\n  margin-bottom: 5px;\n}\n.product-list .result-item .image.brand {\n  width: 4em;\n}\n.product-list .result-item .image.brand img {\n  height: 15px;\n  width: auto;\n}\n.product-list .result-item .image.product {\n  width: 8em;\n}\n.product-list .result-item .product-name {\n  width: 10em;\n  margin: 0 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n  color: #333;\n}\n.product-list .result-item .brand-name {\n  font-size: 14px;\n  margin-top: 1em;\n  color: #999;\n}\n.product-list .result-item:hover {\n  transition: box-shadow 0.1s linear;\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.28);\n  cursor: pointer;\n}\n.product-list .result-item.selected {\n  position: relative;\n  border: 1px solid #00aeef;\n}\n.product-list .result-item.selected::after {\n  content: '';\n  position: absolute;\n  bottom: -21px;\n  width: 0;\n  margin-left: -20px;\n  height: 0;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-top: 20px solid #00aeef;\n  clear: both;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-results {\n  margin: 0 auto;\n}\n.accordion {\n  margin-top: 1em;\n  /* :checked */\n  /* Icon */\n}\n.accordion h1 {\n  text-align: center;\n}\n.accordion .full {\n  float: left;\n  width: 100%;\n}\n.accordion .tab {\n  position: relative;\n  margin-bottom: 0.5em;\n  width: 100%;\n  color: #555;\n  overflow: hidden;\n}\n.accordion input {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.accordion label {\n  position: relative;\n  display: block;\n  padding: 0 0 0 1em;\n  background: #eee;\n  line-height: 2;\n  font-size: 16px;\n  cursor: pointer;\n}\n.accordion label:hover {\n  background: #e9e9e9;\n}\n.accordion .blue label {\n  background: #2980b9;\n}\n.accordion .tab-content {\n  max-height: 0;\n  overflow: hidden;\n  background: #fff;\n  -webkit-transition: max-height 0.35s;\n  -o-transition: max-height 0.35s;\n  transition: max-height 0.35s;\n  font-size: 14px;\n}\n.accordion .blue .tab-content {\n  background: #3498db;\n}\n.accordion .tab-content p {\n  margin: 1em;\n}\n.accordion input:checked ~ .tab-content {\n  max-height: 100em;\n}\n.accordion label::after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  width: 2em;\n  height: 2em;\n  line-height: 2;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  -o-transition: all 0.35s;\n  transition: all 0.35s;\n}\n.accordion input[type=checkbox] + label::after {\n  content: \"+\";\n}\n.accordion input[type=radio] + label::after {\n  content: \"\\25BC\";\n}\n.accordion input[type=checkbox]:checked + label::after {\n  transform: rotate(45deg);\n}\n.accordion input[type=radio]:checked + label::after {\n  transform: rotateX(180deg);\n}\n.accordion-download {\n  margin-top: 1em;\n  /* :checked */\n  /* Icon */\n}\n.accordion-download h1 {\n  text-align: center;\n}\n.accordion-download .full {\n  float: left;\n  width: 100%;\n}\n.accordion-download .tab {\n  position: relative;\n  margin-bottom: 0.5em;\n  width: 100%;\n  color: #333;\n  overflow: hidden;\n}\n.accordion-download input {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n.accordion-download label {\n  position: relative;\n  display: block;\n  padding: 0.3em 0 0.3em 0.8em;\n  line-height: 2.5;\n  font-size: 16px;\n  cursor: pointer;\n}\n.accordion-download .blue label {\n  background: #2980b9;\n}\n.accordion-download .tab-content {\n  max-height: 0;\n  overflow: hidden;\n  background: #fff;\n  -webkit-transition: max-height 0.35s;\n  -o-transition: max-height 0.35s;\n  transition: max-height 0.35s;\n  font-size: 14px;\n  display: flex;\n  flex-wrap: wrap;\n  padding: 0 15px;\n}\n.accordion-download .blue .tab-content {\n  background: #3498db;\n}\n.accordion-download .tab-content p {\n  margin: 1em;\n}\n.accordion-download input:checked ~ .tab-content {\n  max-height: 100em;\n}\n.accordion-download label::after {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: block;\n  width: 2em;\n  line-height: 3.2;\n  text-align: center;\n  -webkit-transition: all 0.35s;\n  -o-transition: all 0.35s;\n  transition: all 0.35s;\n}\n.accordion-download input[type=checkbox] + label::after {\n  content: \"+\";\n}\n.accordion-download input[type=radio] + label::after {\n  content: \"\\25BC\";\n}\n.accordion-download input[type=checkbox]:checked + label::after {\n  transform: rotate(45deg);\n}\n.accordion-download input[type=radio]:checked + label::after {\n  transform: rotateX(180deg);\n}\n.download .tab {\n  border: 1px solid #ddd;\n}\n.download .tab:hover {\n  transition: border 0.1s linear;\n  border: 1px solid #a6a6a6;\n}\n.download-item {\n  border-top: 1px solid #ddd;\n  width: 100%;\n}\n.download-item .icon {\n  display: table;\n  float: left;\n  height: 20px;\n  margin-right: 10px;\n}\n.download-item .icon img {\n  width: 20px;\n  height: 20px;\n}\n.download-item .text {\n  float: left;\n  padding: .5em 0;\n}\n.download-item .text .info {\n  margin-top: 0.5em;\n  font-style: italic;\n}\n.download-item .button {\n  background-color: white;\n  border: 2px solid #e7e7e7;\n  padding: 5px 20px;\n  display: inline-block;\n  font-size: 10px;\n  -webkit-transition-duration: 0.4s;\n  transition-duration: 0.4s;\n  cursor: pointer;\n  width: 9.1em;\n}\n.download-item .button:hover {\n  background-color: #e7e7e7;\n}\n.download-item .buttons {\n  float: right;\n  margin: .5em 0;\n}\n.tab-icon {\n  display: flex;\n  float: left;\n  margin-right: 10px;\n}\n.tab-icon img {\n  width: 40px;\n  height: 40px;\n}\n.loader {\n  border: 0.3em solid #f3f3f3;\n  border-top: 0.3em solid #17b5f0;\n  border-radius: 50%;\n  width: 3em;\n  height: 3em;\n  margin: 0 auto;\n  animation: spin 2s linear infinite;\n}\n.loader.loading-more {\n  margin: 2vh auto 0;\n}\n.siema-wrapper {\n  position: relative;\n}\n.siema-wrapper .control {\n  user-select: none;\n  position: absolute;\n  cursor: pointer;\n  width: 2em;\n  height: 2em;\n  font-size: 40px;\n  z-index: 1;\n  font-style: normal;\n  top: 50%;\n  bottom: 50%;\n}\n.siema-wrapper .control.next {\n  right: -1.3em;\n}\n.siema-wrapper .control.prev {\n  left: -1.3em;\n}\n@font-face {\n  font-family: 'Open Sans', 'Helvetica', 'Arial', sans-serif;\n  /* Add other formats as you see fit */\n  src: url(" + escape(__webpack_require__(154)) + ") format(\"truetype\"), url(" + escape(__webpack_require__(155)) + ") format(\"truetype\"), url(" + escape(__webpack_require__(156)) + ") format(\"truetype\"), url(" + escape(__webpack_require__(157)) + ") format(\"truetype\"), url(" + escape(__webpack_require__(158)) + ") format(\"truetype\");\n}\nhtml {\n  font-family: 'Open Sans', sans-serif;\n  font-size: 20px;\n}\nbody {\n  background: #f9f9f9;\n  color: #555;\n  line-height: 1.3em;\n}\nbody webview {\n  height: 90vh;\n  border: 2px dotted #00aff0;\n}\n", ""]);

// exports


/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/fonts/OpenSans-Light.ttf";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/fonts/OpenSans-Bold.ttf";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/fonts/OpenSans-Italic.ttf";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/fonts/OpenSans-ExtraBold.ttf";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/assets/fonts/OpenSans-Regular.ttf";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(160);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 160 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map