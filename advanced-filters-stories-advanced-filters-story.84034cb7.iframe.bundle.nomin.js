"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[3388],{

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/array/from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/array/from.js");

module.exports = parent;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/object/assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/es/array/from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js");
var path = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/path.js");

module.exports = path.Array.from;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/es/object/assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


__webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.assign.js");
var path = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/path.js");

module.exports = path.Object.assign;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/array/from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* unused reexport */ __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/full/array/from.js");


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/features/object/assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* unused reexport */ __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/full/object/assign.js");


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/full/array/from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/array/from.js");

module.exports = parent;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/full/object/assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/actual/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.from.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var from = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.assign.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {


var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var assign = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/object-assign.js");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
// eslint-disable-next-line es/no-object-assign -- required for testing
$({ target: 'Object', stat: true, arity: 2, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/array/from.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/es/array/from.js");

module.exports = parent;


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/stable/object/assign.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var parent = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/es/object/assign.js");

module.exports = parent;


/***/ }),

/***/ "../../packages/js/components/src/advanced-filters/stories/advanced-filters.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/web.url-search-params.js");
/* harmony import */ var core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_search_params_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("../../packages/js/components/src/advanced-filters/index.js");










/**
 * External dependencies
 */

var ORDER_STATUSES = {
  cancelled: 'Cancelled',
  completed: 'Completed',
  failed: 'Failed',
  'on-hold': 'On hold',
  pending: 'Pending payment',
  processing: 'Processing',
  refunded: 'Refunded'
};
var siteLocale = 'en_US';
var currency = {
  code: 'USD',
  decimalSeparator: '.',
  precision: 2,
  priceFormat: '%1$s%2$s',
  symbol: '$',
  symbolPosition: 'left',
  thousandSeparator: ','
};
var path = new URL(document.location).searchParams.get('path');
var query = {
  component: 'advanced-filters'
};
var advancedFilters = {
  title: 'Orders Match <select/> Filters',
  filters: {
    status: {
      labels: {
        add: 'Order Status',
        remove: 'Remove order status filter',
        rule: 'Select an order status filter match',
        title: '<title>Order Status</title> <rule/> <filter/>',
        filter: 'Select an order status'
      },
      rules: [{
        value: 'is',
        label: 'Is'
      }, {
        value: 'is_not',
        label: 'Is Not'
      }],
      input: {
        component: 'SelectControl',
        options: Object.keys(ORDER_STATUSES).map(function (key) {
          return {
            value: key,
            label: ORDER_STATUSES[key]
          };
        })
      }
    },
    product: {
      labels: {
        add: 'Products',
        placeholder: 'Search products',
        remove: 'Remove products filter',
        rule: 'Select a product filter match',
        title: '<title>Product</title> <rule/> <filter/>',
        filter: 'Select products'
      },
      rules: [{
        value: 'includes',
        label: 'Includes'
      }, {
        value: 'excludes',
        label: 'Excludes'
      }],
      input: {
        component: 'Search',
        type: 'products',
        getLabels: function getLabels() {
          return Promise.resolve([]);
        }
      }
    },
    customer: {
      labels: {
        add: 'Customer type',
        remove: 'Remove customer filter',
        rule: 'Select a customer filter match',
        title: '<title>Customer is</title> <filter/>',
        filter: 'Select a customer type'
      },
      input: {
        component: 'SelectControl',
        options: [{
          value: 'new',
          label: 'New'
        }, {
          value: 'returning',
          label: 'Returning'
        }],
        defaultOption: 'new'
      }
    },
    quantity: {
      labels: {
        add: 'Item Quantity',
        remove: 'Remove item quantity filter',
        rule: 'Select an item quantity filter match',
        title: '<title>Item Quantity is</title> <rule/> <filter/>'
      },
      rules: [{
        value: 'lessthan',
        label: 'Less Than'
      }, {
        value: 'morethan',
        label: 'More Than'
      }, {
        value: 'between',
        label: 'Between'
      }],
      input: {
        component: 'Number'
      }
    },
    subtotal: {
      labels: {
        add: 'Subtotal',
        remove: 'Remove subtotal filter',
        rule: 'Select a subtotal filter match',
        title: '<title>Subtotal is</title> <rule/> <filter/>'
      },
      rules: [{
        value: 'lessthan',
        label: 'Less Than'
      }, {
        value: 'morethan',
        label: 'More Than'
      }, {
        value: 'between',
        label: 'Between'
      }],
      input: {
        component: 'Number',
        type: 'currency'
      }
    },
    date: {
      labels: {
        add: 'Date',
        remove: 'Remove date filter',
        rule: 'Select a date filter match',
        title: '<title>Date</title> <rule/> <filter/>',
        filter: 'Select a transaction date'
      },
      rules: [{
        value: 'before',
        label: 'Before'
      }, {
        value: 'after',
        label: 'After'
      }, {
        value: 'between',
        label: 'Between'
      }],
      input: {
        component: 'Date'
      }
    }
  }
};
var Basic = function Basic() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_9__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
    siteLocale: siteLocale,
    path: path,
    query: query,
    filterTitle: "Orders",
    config: advancedFilters,
    currency: currency
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'WooCommerce Admin/components/AdvancedFilters',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <AdvancedFilters siteLocale={siteLocale} path={path} query={query} filterTitle=\"Orders\" config={advancedFilters} currency={currency} />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);