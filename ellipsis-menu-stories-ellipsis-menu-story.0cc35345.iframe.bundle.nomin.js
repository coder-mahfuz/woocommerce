"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5966],{

/***/ "../../packages/js/components/src/ellipsis-menu/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/button/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/menu.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/dropdown/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@8.2.3/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@17.0.2/node_modules/gridicons/dist/ellipsis.js");

/**
 * External dependencies
 */






/**
 * This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.
 */

var EllipsisMenu = function EllipsisMenu(_ref) {
  var label = _ref.label,
    renderContent = _ref.renderContent,
    className = _ref.className,
    onToggle = _ref.onToggle;
  if (!renderContent) {
    return null;
  }
  var renderEllipsis = function renderEllipsis(_ref2) {
    var toggleHandlerOverride = _ref2.onToggle,
      isOpen = _ref2.isOpen;
    var toggleClassname = classnames__WEBPACK_IMPORTED_MODULE_0___default()('woocommerce-ellipsis-menu__toggle', {
      'is-opened': isOpen
    });
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: toggleClassname,
      onClick: function onClick(e) {
        if (onToggle) {
          onToggle(e);
        }
        if (toggleHandlerOverride) {
          toggleHandlerOverride();
        }
      },
      title: label,
      "aria-expanded": isOpen
    }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      icon: (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(gridicons_dist_ellipsis__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, null)
    }));
  };
  var renderMenu = function renderMenu(renderContentArgs) {
    return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
      className: "woocommerce-ellipsis-menu__content"
    }, renderContent(renderContentArgs));
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'woocommerce-ellipsis-menu')
  }, (0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    contentClassName: "woocommerce-ellipsis-menu__popover"
    // @ts-expect-error missing prop in types.
    ,

    popoverProps: {
      placement: 'bottom'
    },
    renderToggle: renderEllipsis,
    renderContent: renderMenu
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EllipsisMenu);
try {
    // @ts-ignore
    ellipsismenu.displayName = "ellipsismenu";
    // @ts-ignore
    ellipsismenu.__docgenInfo = { "description": "This is a dropdown menu hidden behind a vertical ellipsis icon. When clicked, the inner MenuItems are displayed.", "displayName": "ellipsismenu", "props": { "label": { "defaultValue": null, "description": "The label shown when hovering/focusing on the icon button.", "name": "label", "required": true, "type": { "name": "string" } }, "renderContent": { "defaultValue": null, "description": "A function returning `MenuTitle`/`MenuItem` components as a render prop. Arguments from Dropdown passed as function arguments.", "name": "renderContent", "required": false, "type": { "name": "((props: CallbackProps) => Element | ReactNode)" } }, "className": { "defaultValue": null, "description": "Classname to add to ellipsis menu.", "name": "className", "required": false, "type": { "name": "string" } }, "onToggle": { "defaultValue": null, "description": "Callback function when dropdown button is clicked, it provides the click event.", "name": "onToggle", "required": false, "type": { "name": "((e: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu"] = { docgenInfo: ellipsismenu.__docgenInfo, name: "ellipsismenu", path: "../../packages/js/components/src/ellipsis-menu/index.tsx#ellipsismenu" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/menu-item.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/base-control/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/form-toggle/index.js");
/* harmony import */ var _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@3.6.1/node_modules/@wordpress/keycodes/build-module/index.js");

/**
 * External dependencies
 */



var MenuItem = function MenuItem(_ref) {
  var checked = _ref.checked,
    children = _ref.children,
    _ref$isCheckbox = _ref.isCheckbox,
    isCheckbox = _ref$isCheckbox === void 0 ? false : _ref$isCheckbox,
    _ref$isClickable = _ref.isClickable,
    isClickable = _ref$isClickable === void 0 ? false : _ref$isClickable,
    _ref$onInvoke = _ref.onInvoke,
    onInvoke = _ref$onInvoke === void 0 ? function () {} : _ref$onInvoke;
  var container = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onClick = function onClick(event) {
    if (isClickable) {
      event.preventDefault();
      onInvoke();
    }
  };
  var onKeyDown = function onKeyDown(event) {
    var eventTarget = event.target;
    if (eventTarget.isSameNode(event.currentTarget)) {
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__/* .ENTER */ .Fm || event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__/* .SPACE */ .t6) {
        event.preventDefault();
        onInvoke();
      }
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__.UP) {
        event.preventDefault();
      }
      if (event.keyCode === _wordpress_keycodes__WEBPACK_IMPORTED_MODULE_1__/* .DOWN */ .PX) {
        var _eventTarget$parentNo;
        event.preventDefault();
        var nextElementToFocus = eventTarget.nextSibling || ((_eventTarget$parentNo = eventTarget.parentNode) === null || _eventTarget$parentNo === void 0 ? void 0 : _eventTarget$parentNo.querySelector('.woocommerce-ellipsis-menu__item'));
        nextElementToFocus.focus();
      }
    }
  };
  if (isCheckbox) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      "aria-checked": checked,
      ref: container,
      role: "menuitemcheckbox",
      tabIndex: 0,
      onKeyDown: onKeyDown,
      onClick: onClick,
      className: "woocommerce-ellipsis-menu__item"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Ay, {
      className: "components-toggle-control"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      "aria-hidden": "true",
      checked: checked,
      onChange: onInvoke,
      onClick: function onClick(e) {
        return e.stopPropagation();
      },
      tabIndex: -1
    }), children));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    role: "menuitem",
    tabIndex: 0,
    onKeyDown: onKeyDown,
    onClick: onClick,
    className: "woocommerce-ellipsis-menu__item"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuItem);
try {
    // @ts-ignore
    menuitem.displayName = "menuitem";
    // @ts-ignore
    menuitem.__docgenInfo = { "description": "", "displayName": "menuitem", "props": { "checked": { "defaultValue": null, "description": "Whether the menu item is checked or not. Only relevant for menu items with `isCheckbox`.", "name": "checked", "required": false, "type": { "name": "boolean" } }, "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed as the content of this item. Generally a `ToggleControl`.", "name": "children", "required": false, "type": { "name": "ReactNode" } }, "isCheckbox": { "defaultValue": { value: "false" }, "description": "Whether the menu item is a checkbox (will render a FormToggle and use the `menuitemcheckbox` role).", "name": "isCheckbox", "required": false, "type": { "name": "boolean" } }, "isClickable": { "defaultValue": { value: "false" }, "description": "Boolean to control whether the MenuItem should handle the click event. Defaults to false, assuming your child component\nhandles the click event.", "name": "isClickable", "required": false, "type": { "name": "boolean" } }, "onInvoke": { "defaultValue": { value: "() => {}" }, "description": "A function called when this item is activated via keyboard ENTER or SPACE; or when the item is clicked\n(only if `isClickable` is set).", "name": "onInvoke", "required": false, "type": { "name": "(() => void)" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/menu-item.tsx#menuitem"] = { docgenInfo: menuitem.__docgenInfo, name: "menuitem", path: "../../packages/js/components/src/ellipsis-menu/menu-item.tsx#menuitem" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/menu-title.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

/**
 * External dependencies
 */



/**
 * `MenuTitle` is another valid Menu child, but this does not have any accessibility attributes associated
 * (so this should not be used in place of the `EllipsisMenu` prop `label`).
 */

var MenuTitle = function MenuTitle(_ref) {
  var children = _ref.children;
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "woocommerce-ellipsis-menu__title"
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuTitle);
try {
    // @ts-ignore
    menutitle.displayName = "menutitle";
    // @ts-ignore
    menutitle.__docgenInfo = { "description": "`MenuTitle` is another valid Menu child, but this does not have any accessibility attributes associated\n(so this should not be used in place of the `EllipsisMenu` prop `label`).", "displayName": "menutitle", "props": { "children": { "defaultValue": null, "description": "A renderable component (or string) which will be displayed as the content of this item.", "name": "children", "required": true, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["../../packages/js/components/src/ellipsis-menu/menu-title.tsx#menutitle"] = { docgenInfo: menutitle.__docgenInfo, name: "menutitle", path: "../../packages/js/components/src/ellipsis-menu/menu-title.tsx#menutitle" };
}
catch (__react_docgen_typescript_loader_error) { }

/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@17.0.2/node_modules/gridicons/dist/cross-small.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-cross-small",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M17.705 7.705l-1.41-1.41L12 10.59 7.705 6.295l-1.41 1.41L10.59 12l-4.295 4.295 1.41 1.41L12 13.41l4.295 4.295 1.41-1.41L13.41 12l4.295-4.295z"})))}


/***/ }),

/***/ "../../packages/js/components/src/ellipsis-menu/stories/ellipsis-menu.story.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Basic: () => (/* binding */ Basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@8.2.3/node_modules/@wordpress/icons/build-module/icon/index.js");
/* harmony import */ var gridicons_dist_cross_small__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/gridicons@3.4.2_react@17.0.2/node_modules/gridicons/dist/cross-small.js");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/index.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/menu-title.tsx");
/* harmony import */ var _woocommerce_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../packages/js/components/src/ellipsis-menu/menu-item.tsx");


/**
 * External dependencies
 */




var ExampleEllipsisMenu = function ExampleEllipsisMenu() {
  var _useState = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)({
      showCustomers: true,
      showOrders: true
    }),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_useState, 2),
    _useState2$ = _useState2[0],
    showCustomers = _useState2$.showCustomers,
    showOrders = _useState2$.showOrders,
    setState = _useState2[1];
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
    label: "Choose which analytics to display",
    renderContent: function renderContent(_ref) {
      var onToggle = _ref.onToggle;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, null, "Display stats"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        isCheckbox: true,
        isClickable: true,
        checked: showCustomers,
        onInvoke: function onInvoke() {
          return setState({
            showOrders: showOrders,
            showCustomers: !showCustomers
          });
        }
      }, "Show Customers"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        isCheckbox: true,
        isClickable: true,
        checked: showOrders,
        onInvoke: function onInvoke() {
          return setState({
            showCustomers: showCustomers,
            showOrders: !showOrders
          });
        }
      }, "Show Orders"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_woocommerce_components__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        isClickable: true,
        onInvoke: onToggle
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_icons__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        icon: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(gridicons_dist_cross_small__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A, null)
      }), "Close Menu"));
    }
  });
};
var Basic = function Basic() {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ExampleEllipsisMenu, null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  title: 'WooCommerce Admin/components/EllipsisMenu',
  component: _woocommerce_components__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
Basic.parameters = {
  ...Basic.parameters,
  docs: {
    ...Basic.parameters?.docs,
    source: {
      originalSource: "() => <ExampleEllipsisMenu />",
      ...Basic.parameters?.docs?.source
    }
  }
};

/***/ })

}]);