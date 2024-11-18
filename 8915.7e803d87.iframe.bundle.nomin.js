"use strict";
(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[8915],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _slicedToArray)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
var arrayWithHoles = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
var unsupportedIterableToArray = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
var nonIterableRest = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return (0,arrayWithHoles/* default */.A)(arr) || _iterableToArrayLimit(arr, i) || (0,unsupportedIterableToArray/* default */.A)(arr, i) || (0,nonIterableRest/* default */.A)();
}

/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(o, minLen);
}

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/dropdown/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/popover/index.js");


// @ts-nocheck

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



function useObservableState(initialState, onStateChange) {
  const [state, setState] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(initialState);
  return [state, value => {
    setState(value);

    if (onStateChange) {
      onStateChange(value);
    }
  }];
}

function Dropdown(props) {
  var _popoverProps$anchorR;

  const {
    renderContent,
    renderToggle,
    position = 'bottom right',
    className,
    contentClassName,
    expandOnMobile,
    headerTitle,
    focusOnMount,
    popoverProps,
    onClose,
    onToggle
  } = props;
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  const [isOpen, setIsOpen] = useObservableState(false, onToggle);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => () => {
    if (onToggle) {
      onToggle(false);
    }
  }, []);

  function toggle() {
    setIsOpen(!isOpen);
  }
  /**
   * Closes the popover when focus leaves it unless the toggle was pressed or
   * focus has moved to a separate dialog. The former is to let the toggle
   * handle closing the popover and the latter is to preserve presence in
   * case a dialog has opened, allowing focus to return when it's dismissed.
   */


  function closeIfFocusOutside() {
    const {
      ownerDocument
    } = containerRef.current;
    const dialog = ownerDocument.activeElement.closest('[role="dialog"]');

    if (!containerRef.current.contains(ownerDocument.activeElement) && (!dialog || dialog.contains(containerRef.current))) {
      close();
    }
  }

  function close() {
    if (onClose) {
      onClose();
    }

    setIsOpen(false);
  }

  const args = {
    isOpen,
    onToggle: toggle,
    onClose: close
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-dropdown', className),
    ref: containerRef // Some UAs focus the closest focusable parent when the toggle is
    // clicked. Making this div focusable ensures such UAs will focus
    // it and `closeIfFocusOutside` can tell if the toggle was clicked.
    ,
    tabIndex: "-1"
  }, renderToggle(args), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_popover__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
    position: position,
    onClose: close,
    onFocusOutside: closeIfFocusOutside,
    expandOnMobile: expandOnMobile,
    headerTitle: headerTitle,
    focusOnMount: focusOnMount
  }, popoverProps, {
    anchorRef: (_popoverProps$anchorR = popoverProps === null || popoverProps === void 0 ? void 0 : popoverProps.anchorRef) !== null && _popoverProps$anchorR !== void 0 ? _popoverProps$anchorR : containerRef.current,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-dropdown__content', popoverProps ? popoverProps.className : undefined, contentClassName)
  }), renderContent(args)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/form-toggle/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);



/**
 * External dependencies
 */



function FormToggle(_ref) {
  let {
    className,
    checked,
    id,
    disabled,
    onChange = lodash__WEBPACK_IMPORTED_MODULE_1__.noop,
    ...props
  } = _ref;
  const wrapperClasses = classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-form-toggle', className, {
    'is-checked': checked,
    'is-disabled': disabled
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: wrapperClasses
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("input", (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
    className: "components-form-toggle__input",
    id: id,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled
  }, props)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "components-form-toggle__track"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("span", {
    className: "components-form-toggle__thumb"
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormToggle);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/menu.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ menu)
});

// UNUSED EXPORTS: NavigableMenu

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@3.47.0/node_modules/@wordpress/keycodes/build-module/index.js + 2 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+keycodes@3.47.0/node_modules/@wordpress/keycodes/build-module/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+dom@3.6.1/node_modules/@wordpress/dom/build-module/index.js + 2 modules
var dom_build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+dom@3.6.1/node_modules/@wordpress/dom/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/container.js


// @ts-nocheck

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



const MENU_ITEM_ROLES = ['menuitem', 'menuitemradio', 'menuitemcheckbox'];

function cycleValue(value, total, offset) {
  const nextValue = value + offset;

  if (nextValue < 0) {
    return total + nextValue;
  } else if (nextValue >= total) {
    return nextValue - total;
  }

  return nextValue;
}

class NavigableContainer extends react.Component {
  constructor() {
    super(...arguments);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.bindContainer = this.bindContainer.bind(this);
    this.getFocusableContext = this.getFocusableContext.bind(this);
    this.getFocusableIndex = this.getFocusableIndex.bind(this);
  }

  componentDidMount() {
    // We use DOM event listeners instead of React event listeners
    // because we want to catch events from the underlying DOM tree
    // The React Tree can be different from the DOM tree when using
    // portals. Block Toolbars for instance are rendered in a separate
    // React Trees.
    this.container.addEventListener('keydown', this.onKeyDown);
    this.container.addEventListener('focus', this.onFocus);
  }

  componentWillUnmount() {
    this.container.removeEventListener('keydown', this.onKeyDown);
    this.container.removeEventListener('focus', this.onFocus);
  }

  bindContainer(ref) {
    const {
      forwardedRef
    } = this.props;
    this.container = ref;

    if ((0,lodash.isFunction)(forwardedRef)) {
      forwardedRef(ref);
    } else if (forwardedRef && 'current' in forwardedRef) {
      forwardedRef.current = ref;
    }
  }

  getFocusableContext(target) {
    const {
      onlyBrowserTabstops
    } = this.props;
    const finder = onlyBrowserTabstops ? dom_build_module/* focus */.XC.tabbable : dom_build_module/* focus */.XC.focusable;
    const focusables = finder.find(this.container);
    const index = this.getFocusableIndex(focusables, target);

    if (index > -1 && target) {
      return {
        index,
        target,
        focusables
      };
    }

    return null;
  }

  getFocusableIndex(focusables, target) {
    const directIndex = focusables.indexOf(target);

    if (directIndex !== -1) {
      return directIndex;
    }
  }

  onKeyDown(event) {
    if (this.props.onKeyDown) {
      this.props.onKeyDown(event);
    }

    const {
      getFocusableContext
    } = this;
    const {
      cycle = true,
      eventToOffset,
      onNavigate = lodash.noop,
      stopNavigationEvents
    } = this.props;
    const offset = eventToOffset(event); // eventToOffset returns undefined if the event is not handled by the component.

    if (offset !== undefined && stopNavigationEvents) {
      // Prevents arrow key handlers bound to the document directly interfering.
      event.stopImmediatePropagation(); // When navigating a collection of items, prevent scroll containers
      // from scrolling. The preventDefault also prevents Voiceover from
      // 'handling' the event, as voiceover will try to use arrow keys
      // for highlighting text.

      const targetRole = event.target.getAttribute('role');

      if (MENU_ITEM_ROLES.includes(targetRole)) {
        event.preventDefault();
      }
    }

    if (!offset) {
      return;
    }

    const context = getFocusableContext(event.target.ownerDocument.activeElement);

    if (!context) {
      return;
    }

    const {
      index,
      focusables
    } = context;
    const nextIndex = cycle ? cycleValue(index, focusables.length, offset) : index + offset;

    if (nextIndex >= 0 && nextIndex < focusables.length) {
      focusables[nextIndex].focus();
      onNavigate(nextIndex, focusables[nextIndex]);
    }
  }

  render() {
    const {
      children,
      ...props
    } = this.props;
    return (0,react.createElement)("div", (0,esm_extends/* default */.A)({
      ref: this.bindContainer
    }, (0,lodash.omit)(props, ['stopNavigationEvents', 'eventToOffset', 'onNavigate', 'onKeyDown', 'cycle', 'onlyBrowserTabstops', 'forwardedRef'])), children);
  }

}

const forwardedNavigableContainer = (props, ref) => {
  return (0,react.createElement)(NavigableContainer, (0,esm_extends/* default */.A)({}, props, {
    forwardedRef: ref
  }));
};

forwardedNavigableContainer.displayName = 'NavigableContainer';
/* harmony default export */ const container = ((0,react.forwardRef)(forwardedNavigableContainer));
//# sourceMappingURL=container.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/menu.js


// @ts-nocheck

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


function NavigableMenu(_ref, ref) {
  let {
    role = 'menu',
    orientation = 'vertical',
    ...rest
  } = _ref;

  const eventToOffset = evt => {
    const {
      keyCode
    } = evt;
    let next = [build_module/* DOWN */.PX];
    let previous = [build_module.UP];

    if (orientation === 'horizontal') {
      next = [build_module/* RIGHT */.NS];
      previous = [build_module/* LEFT */.M3];
    }

    if (orientation === 'both') {
      next = [build_module/* RIGHT */.NS, build_module/* DOWN */.PX];
      previous = [build_module/* LEFT */.M3, build_module.UP];
    }

    if ((0,lodash.includes)(next, keyCode)) {
      return 1;
    } else if ((0,lodash.includes)(previous, keyCode)) {
      return -1;
    } else if ((0,lodash.includes)([build_module/* DOWN */.PX, build_module.UP, build_module/* LEFT */.M3, build_module/* RIGHT */.NS], keyCode)) {
      // Key press should be handled, e.g. have event propagation and
      // default behavior handled by NavigableContainer but not result
      // in an offset.
      return 0;
    }
  };

  return (0,react.createElement)(container, (0,esm_extends/* default */.A)({
    ref: ref,
    stopNavigationEvents: true,
    onlyBrowserTabstops: false,
    role: role,
    "aria-orientation": role === 'presentation' ? null : orientation,
    eventToOffset: eventToOffset
  }, rest));
}
/* harmony default export */ const menu = ((0,react.forwardRef)(NavigableMenu));
//# sourceMappingURL=menu.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@8.2.3/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/**
 * WordPress dependencies
 */

/** @typedef {{icon: JSX.Element, size?: number} & import('@wordpress/primitives').SVGProps} IconProps */

/**
 * Return an SVG icon.
 *
 * @param {IconProps} props icon is the SVG component to render
 *                          size is a number specifiying the icon size in pixels
 *                          Other props will be passed to wrapped SVG component
 *
 * @return {JSX.Element}  Icon component
 */

function Icon(_ref) {
  let {
    icon,
    size = 24,
    ...props
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(icon, {
    width: size,
    height: size,
    ...props
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+keycodes@3.6.1/node_modules/@wordpress/keycodes/build-module/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G_: () => (/* binding */ BACKSPACE),
  PX: () => (/* binding */ DOWN),
  Fm: () => (/* binding */ ENTER),
  _f: () => (/* binding */ ESCAPE),
  M3: () => (/* binding */ LEFT),
  NS: () => (/* binding */ RIGHT),
  t6: () => (/* binding */ SPACE),
  wn: () => (/* binding */ TAB),
  UP: () => (/* binding */ UP),
  dz: () => (/* binding */ displayShortcut),
  JF: () => (/* binding */ rawShortcut),
  _A: () => (/* binding */ shortcutAriaLabel)
});

// UNUSED EXPORTS: ALT, COMMAND, CTRL, DELETE, END, F10, HOME, PAGEDOWN, PAGEUP, SHIFT, ZERO, displayShortcutList, isKeyboardEvent, modifiers

// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js + 3 modules
var build_module = __webpack_require__("../../node_modules/.pnpm/@wordpress+i18n@4.6.1/node_modules/@wordpress/i18n/build-module/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@3.6.1/node_modules/@wordpress/keycodes/build-module/platform.js
/**
 * External dependencies
 */

/**
 * Return true if platform is MacOS.
 *
 * @param {Window?} _window window object by default; used for DI testing.
 *
 * @return {boolean} True if MacOS; false otherwise.
 */

function isAppleOS() {
  let _window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (!_window) {
    if (typeof window === 'undefined') {
      return false;
    }

    _window = window;
  }

  const {
    platform
  } = _window.navigator;
  return platform.indexOf('Mac') !== -1 || (0,lodash.includes)(['iPad', 'iPhone'], platform);
}
//# sourceMappingURL=platform.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+keycodes@3.6.1/node_modules/@wordpress/keycodes/build-module/index.js
/**
 * Note: The order of the modifier keys in many of the [foo]Shortcut()
 * functions in this file are intentional and should not be changed. They're
 * designed to fit with the standard menu keyboard shortcuts shown in the
 * user's platform.
 *
 * For example, on MacOS menu shortcuts will place Shift before Command, but
 * on Windows Control will usually come first. So don't provide your own
 * shortcut combos directly to keyboardShortcut().
 */

/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


/** @typedef {typeof ALT | CTRL | COMMAND | SHIFT } WPModifierPart */

/** @typedef {'primary' | 'primaryShift' | 'primaryAlt' | 'secondary' | 'access' | 'ctrl' | 'alt' | 'ctrlShift' | 'shift' | 'shiftAlt' | 'undefined'} WPKeycodeModifier */

/**
 * An object of handler functions for each of the possible modifier
 * combinations. A handler will return a value for a given key.
 *
 * @template T
 *
 * @typedef {Record<WPKeycodeModifier, T>} WPModifierHandler
 */

/**
 * @template T
 *
 * @typedef {(character: string, isApple?: () => boolean) => T} WPKeyHandler
 */

/** @typedef {(event: KeyboardEvent, character: string, isApple?: () => boolean) => boolean} WPEventKeyHandler */

/**
 * Keycode for BACKSPACE key.
 */

const BACKSPACE = 8;
/**
 * Keycode for TAB key.
 */

const TAB = 9;
/**
 * Keycode for ENTER key.
 */

const ENTER = 13;
/**
 * Keycode for ESCAPE key.
 */

const ESCAPE = 27;
/**
 * Keycode for SPACE key.
 */

const SPACE = 32;
/**
 * Keycode for PAGEUP key.
 */

const PAGEUP = 33;
/**
 * Keycode for PAGEDOWN key.
 */

const PAGEDOWN = 34;
/**
 * Keycode for END key.
 */

const END = 35;
/**
 * Keycode for HOME key.
 */

const HOME = 36;
/**
 * Keycode for LEFT key.
 */

const LEFT = 37;
/**
 * Keycode for UP key.
 */

const UP = 38;
/**
 * Keycode for RIGHT key.
 */

const RIGHT = 39;
/**
 * Keycode for DOWN key.
 */

const DOWN = 40;
/**
 * Keycode for DELETE key.
 */

const DELETE = 46;
/**
 * Keycode for F10 key.
 */

const F10 = 121;
/**
 * Keycode for ALT key.
 */

const ALT = 'alt';
/**
 * Keycode for CTRL key.
 */

const CTRL = 'ctrl';
/**
 * Keycode for COMMAND/META key.
 */

const COMMAND = 'meta';
/**
 * Keycode for SHIFT key.
 */

const SHIFT = 'shift';
/**
 * Keycode for ZERO key.
 */

const ZERO = 48;
/**
 * Object that contains functions that return the available modifier
 * depending on platform.
 *
 * @type {WPModifierHandler< ( isApple: () => boolean ) => WPModifierPart[]>}
 */

const modifiers = {
  primary: _isApple => _isApple() ? [COMMAND] : [CTRL],
  primaryShift: _isApple => _isApple() ? [SHIFT, COMMAND] : [CTRL, SHIFT],
  primaryAlt: _isApple => _isApple() ? [ALT, COMMAND] : [CTRL, ALT],
  secondary: _isApple => _isApple() ? [SHIFT, ALT, COMMAND] : [CTRL, SHIFT, ALT],
  access: _isApple => _isApple() ? [CTRL, ALT] : [SHIFT, ALT],
  ctrl: () => [CTRL],
  alt: () => [ALT],
  ctrlShift: () => [CTRL, SHIFT],
  shift: () => [SHIFT],
  shiftAlt: () => [SHIFT, ALT],
  undefined: () => []
};
/**
 * An object that contains functions to get raw shortcuts.
 *
 * These are intended for user with the KeyboardShortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * rawShortcut.primary( 'm' )
 * // "meta+m""
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to raw
 *                                                 shortcuts.
 */

const rawShortcut = (0,lodash.mapValues)(modifiers, modifier => {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      let _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

      return [...modifier(_isApple), character.toLowerCase()].join('+');
    }
  );
});
/**
 * Return an array of the parts of a keyboard shortcut chord for display.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcutList.primary( 'm' );
 * // [ "⌘", "M" ]
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string[]>>} Keyed map of functions to
 *                                                   shortcut sequences.
 */

const displayShortcutList = (0,lodash.mapValues)(modifiers, modifier => {
  return (
    /** @type {WPKeyHandler<string[]>} */
    function (character) {
      let _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

      const isApple = _isApple();

      const replacementKeyMap = {
        [ALT]: isApple ? '⌥' : 'Alt',
        [CTRL]: isApple ? '⌃' : 'Ctrl',
        // Make sure ⌃ is the U+2303 UP ARROWHEAD unicode character and not the caret character.
        [COMMAND]: '⌘',
        [SHIFT]: isApple ? '⇧' : 'Shift'
      };
      const modifierKeys = modifier(_isApple).reduce((accumulator, key) => {
        const replacementKey = (0,lodash.get)(replacementKeyMap, key, key); // If on the Mac, adhere to platform convention and don't show plus between keys.

        if (isApple) {
          return [...accumulator, replacementKey];
        }

        return [...accumulator, replacementKey, '+'];
      },
      /** @type {string[]} */
      []);
      const capitalizedCharacter = (0,lodash.capitalize)(character);
      return [...modifierKeys, capitalizedCharacter];
    }
  );
});
/**
 * An object that contains functions to display shortcuts.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * displayShortcut.primary( 'm' );
 * // "⌘M"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 display shortcuts.
 */

const displayShortcut = (0,lodash.mapValues)(displayShortcutList, shortcutList => {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      let _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

      return shortcutList(character, _isApple).join('');
    }
  );
});
/**
 * An object that contains functions to return an aria label for a keyboard
 * shortcut.
 *
 * @example
 * ```js
 * // Assuming macOS:
 * shortcutAriaLabel.primary( '.' );
 * // "Command + Period"
 * ```
 *
 * @type {WPModifierHandler<WPKeyHandler<string>>} Keyed map of functions to
 *                                                 shortcut ARIA labels.
 */

const shortcutAriaLabel = (0,lodash.mapValues)(modifiers, modifier => {
  return (
    /** @type {WPKeyHandler<string>} */
    function (character) {
      let _isApple = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : isAppleOS;

      const isApple = _isApple();

      const replacementKeyMap = {
        [SHIFT]: 'Shift',
        [COMMAND]: isApple ? 'Command' : 'Control',
        [CTRL]: 'Control',
        [ALT]: isApple ? 'Option' : 'Alt',

        /* translators: comma as in the character ',' */
        ',': (0,build_module.__)('Comma'),

        /* translators: period as in the character '.' */
        '.': (0,build_module.__)('Period'),

        /* translators: backtick as in the character '`' */
        '`': (0,build_module.__)('Backtick')
      };
      return [...modifier(_isApple), character].map(key => (0,lodash.capitalize)((0,lodash.get)(replacementKeyMap, key, key))).join(isApple ? ' ' : ' + ');
    }
  );
});
/**
 * From a given KeyboardEvent, returns an array of active modifier constants for
 * the event.
 *
 * @param {KeyboardEvent} event Keyboard event.
 *
 * @return {Array<WPModifierPart>} Active modifier constants.
 */

function getEventModifiers(event) {
  return (
    /** @type {WPModifierPart[]} */
    [ALT, CTRL, COMMAND, SHIFT].filter(key => event[
    /** @type {'altKey' | 'ctrlKey' | 'metaKey' | 'shiftKey'} */
    `${key}Key`])
  );
}
/**
 * An object that contains functions to check if a keyboard event matches a
 * predefined shortcut combination.
 *
 * @example
 * ```js
 * // Assuming an event for ⌘M key press:
 * isKeyboardEvent.primary( event, 'm' );
 * // true
 * ```
 *
 * @type {WPModifierHandler<WPEventKeyHandler>} Keyed map of functions
 *                                                       to match events.
 */


const isKeyboardEvent = (0,lodash.mapValues)(modifiers, getModifiers => {
  return (
    /** @type {WPEventKeyHandler} */
    function (event, character) {
      let _isApple = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isAppleOS;

      const mods = getModifiers(_isApple);
      const eventMods = getEventModifiers(event);

      if ((0,lodash.xor)(mods, eventMods).length) {
        return false;
      }

      let key = event.key.toLowerCase();

      if (!character) {
        return (0,lodash.includes)(mods, key);
      }

      if (event.altKey && character.length === 1) {
        key = String.fromCharCode(event.keyCode).toLowerCase();
      } // For backwards compatibility.


      if (character === 'del') {
        character = 'delete';
      }

      return key === character.toLowerCase();
    }
  );
});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/gridicons@3.4.2_react@17.0.2/node_modules/gridicons/dist/ellipsis.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
__webpack_unused_export__ = ({value:!0}),exports.A=_default;var _react=_interopRequireDefault(__webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js")),_excluded=["size","onClick","icon","className"];function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _extends(){return _extends=Object.assign?Object.assign.bind():function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a},_extends.apply(this,arguments)}function _objectWithoutProperties(a,b){if(null==a)return{};var c,d,e=_objectWithoutPropertiesLoose(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}function _objectWithoutPropertiesLoose(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],0<=b.indexOf(c)||(e[c]=a[c]);return e}function _default(a){var b=a.size,c=void 0===b?24:b,d=a.onClick,e=a.icon,f=a.className,g=_objectWithoutProperties(a,_excluded),h=["gridicon","gridicons-ellipsis",f,!1,!1,!1].filter(Boolean).join(" ");return _react["default"].createElement("svg",_extends({className:h,height:c,width:c,onClick:d},g,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}),_react["default"].createElement("g",null,_react["default"].createElement("path",{d:"M7 12a2 2 0 11-4.001-.001A2 2 0 017 12zm12-2a2 2 0 10.001 4.001A2 2 0 0019 10zm-7 0a2 2 0 10.001 4.001A2 2 0 0012 10z"})))}


/***/ })

}]);