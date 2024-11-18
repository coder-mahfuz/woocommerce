(self["webpackChunk_woocommerce_storybook"] = self["webpackChunk_woocommerce_storybook"] || []).push([[5281,3288,897,5635],{

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ _inheritsLoose)
});

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}

;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o);
}


/***/ }),

/***/ "../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (e.includes(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/menu.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

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

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/select-control/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ select_control)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js
var lodash = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var classnames = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+compose@5.4.1_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js
var use_instance_id = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.4.1_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/icon/index.js
var icon = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/icon/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js
var chevron_down = __webpack_require__("../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/base-control/index.js + 1 modules
var base_control = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/base-control/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/input-control/input-base.js + 2 modules
var input_base = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/input-control/input-base.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2__@types+react@17.0.71_react@17.0.2/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js
var emotion_styled_base_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+styled@11.11.0_@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2__@types+react@17.0.71_react@17.0.2/node_modules/@emotion/styled/base/dist/emotion-styled-base.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__("../../node_modules/.pnpm/@emotion+react@11.11.1_@types+react@17.0.71_react@17.0.2/node_modules/@emotion/react/dist/emotion-react.browser.esm.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/utils/colors-values.js + 1 modules
var colors_values = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/utils/colors-values.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/utils/rtl.js
var rtl = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/utils/rtl.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/select-control/styles/select-control-styles.js


/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


const disabledStyles = _ref => {
  let {
    disabled
  } = _ref;
  if (!disabled) return '';
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)({
    color: colors_values/* COLORS */.lm.ui.textDisabled
  },  true ? "" : 0,  true ? "" : 0);
};

const fontSizeStyles = _ref2 => {
  let {
    selectSize
  } = _ref2;
  const sizes = {
    default: '13px',
    small: '11px',
    '__unstable-large': '13px'
  };
  const fontSize = sizes[selectSize];
  const fontSizeMobile = '16px';
  if (!fontSize) return '';
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)("font-size:", fontSizeMobile, ";@media ( min-width: 600px ){font-size:", fontSize, ";}" + ( true ? "" : 0),  true ? "" : 0);
};

const sizeStyles = _ref3 => {
  let {
    selectSize
  } = _ref3;
  const sizes = {
    default: {
      height: 30,
      lineHeight: 1,
      minHeight: 30
    },
    small: {
      height: 24,
      lineHeight: 1,
      minHeight: 24
    },
    '__unstable-large': {
      height: 40,
      lineHeight: 1,
      minHeight: 40
    }
  };
  const style = sizes[selectSize] || sizes.default;
  return /*#__PURE__*/(0,emotion_react_browser_esm/* css */.AH)(style,  true ? "" : 0,  true ? "" : 0);
};

const sizePaddings = _ref4 => {
  let {
    selectSize = 'default'
  } = _ref4;
  const sizes = {
    default: {
      paddingLeft: 8,
      paddingRight: 24
    },
    small: {
      paddingLeft: 8,
      paddingRight: 24
    },
    '__unstable-large': {
      paddingLeft: 16,
      paddingRight: 32
    }
  };
  return (0,rtl/* rtl */.h)(sizes[selectSize]);
}; // TODO: Resolve need to use &&& to increase specificity
// https://github.com/WordPress/gutenberg/issues/18483


const Select = (0,emotion_styled_base_browser_esm/* default */.A)("select",  true ? {
  target: "e1mv6sxx1"
} : 0)("&&&{appearance:none;background:transparent;box-sizing:border-box;border:none;box-shadow:none!important;color:", colors_values/* COLORS */.lm.black, ";display:block;font-family:inherit;margin:0;width:100%;", disabledStyles, ";", fontSizeStyles, ";", sizeStyles, ";", sizePaddings, ";}" + ( true ? "" : 0));
const DownArrowWrapper = (0,emotion_styled_base_browser_esm/* default */.A)("div",  true ? {
  target: "e1mv6sxx0"
} : 0)("align-items:center;bottom:0;box-sizing:border-box;display:flex;padding:0 4px;pointer-events:none;position:absolute;top:0;", (0,rtl/* rtl */.h)({
  right: 0
}), " svg{display:block;}" + ( true ? "" : 0));
//# sourceMappingURL=select-control-styles.js.map
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/select-control/index.js



/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */





function useUniqueId(idProp) {
  const instanceId = (0,use_instance_id/* default */.A)(SelectControl);
  const id = `inspector-select-control-${instanceId}`;
  return idProp || id;
}

function SelectControl(_ref, ref) {
  let {
    className,
    disabled = false,
    help,
    hideLabelFromVision,
    id: idProp,
    label,
    multiple = false,
    onBlur = lodash.noop,
    onChange = lodash.noop,
    onFocus = lodash.noop,
    options = [],
    size = 'default',
    value: valueProp,
    labelPosition = 'top',
    children,
    prefix,
    suffix,
    ...props
  } = _ref;
  const [isFocused, setIsFocused] = (0,react.useState)(false);
  const id = useUniqueId(idProp);
  const helpId = help ? `${id}__help` : undefined; // Disable reason: A select with an onchange throws a warning.

  if ((0,lodash.isEmpty)(options) && !children) return null;

  const handleOnBlur = event => {
    onBlur(event);
    setIsFocused(false);
  };

  const handleOnFocus = event => {
    onFocus(event);
    setIsFocused(true);
  };

  const handleOnChange = event => {
    if (multiple) {
      const selectedOptions = Array.from(event.target.options).filter(_ref2 => {
        let {
          selected
        } = _ref2;
        return selected;
      });
      const newValues = selectedOptions.map(_ref3 => {
        let {
          value
        } = _ref3;
        return value;
      });
      onChange(newValues);
      return;
    }

    onChange(event.target.value, {
      event
    });
  };

  const classes = classnames_default()('components-select-control', className);
  /* eslint-disable jsx-a11y/no-onchange */

  return (0,react.createElement)(base_control/* default */.Ay, {
    help: help,
    id: id
  }, (0,react.createElement)(input_base/* default */.A, {
    className: classes,
    disabled: disabled,
    hideLabelFromVision: hideLabelFromVision,
    id: id,
    isFocused: isFocused,
    label: label,
    size: size,
    suffix: suffix || (0,react.createElement)(DownArrowWrapper, null, (0,react.createElement)(icon/* default */.A, {
      icon: chevron_down/* default */.A,
      size: 18
    })),
    prefix: prefix,
    labelPosition: labelPosition
  }, (0,react.createElement)(Select, (0,esm_extends/* default */.A)({}, props, {
    "aria-describedby": helpId,
    className: "components-select-control__input",
    disabled: disabled,
    id: id,
    multiple: multiple,
    onBlur: handleOnBlur,
    onChange: handleOnChange,
    onFocus: handleOnFocus,
    ref: ref,
    selectSize: size,
    value: valueProp
  }), children || options.map((option, index) => {
    const key = option.id || `${option.label}-${option.value}-${index}`;
    return (0,react.createElement)("option", {
      key: key,
      value: option.value,
      disabled: option.disabled
    }, option.label);
  }))));
  /* eslint-enable jsx-a11y/no-onchange */
}

const ForwardedComponent = (0,react.forwardRef)(SelectControl);
/* harmony default export */ const select_control = (ForwardedComponent);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/tab-panel/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ TabPanel)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.23.5/node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+compose@5.4.1_react@17.0.2/node_modules/@wordpress/compose/build-module/hooks/use-instance-id/index.js");
/* harmony import */ var _navigable_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/navigable-container/menu.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+components@19.8.5_@types+react@17.0.71_react-dom@17.0.2_react@17.0.2__react-with-d_oli5xz3n7pc4ztqokra47llglu/node_modules/@wordpress/components/build-module/button/index.js");



/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */




const TabButton = _ref => {
  let {
    tabId,
    onClick,
    children,
    selected,
    ...rest
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({
    role: "tab",
    tabIndex: selected ? null : -1,
    "aria-selected": selected,
    id: tabId,
    onClick: onClick
  }, rest), children);
};

function TabPanel(_ref2) {
  var _selectedTab$name;

  let {
    className,
    children,
    tabs,
    initialTabName,
    orientation = 'horizontal',
    activeClass = 'is-active',
    onSelect = lodash__WEBPACK_IMPORTED_MODULE_1__.noop
  } = _ref2;
  const instanceId = (0,_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A)(TabPanel, 'tab-panel');
  const [selected, setSelected] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState)(null);

  const handleClick = tabKey => {
    setSelected(tabKey);
    onSelect(tabKey);
  };

  const onNavigate = (childIndex, child) => {
    child.click();
  };

  const selectedTab = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(tabs, {
    name: selected
  });
  const selectedId = `${instanceId}-${(_selectedTab$name = selectedTab === null || selectedTab === void 0 ? void 0 : selectedTab.name) !== null && _selectedTab$name !== void 0 ? _selectedTab$name : 'none'}`;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    const newSelectedTab = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.find)(tabs, {
      name: selected
    });

    if (!newSelectedTab) {
      setSelected(initialTabName || (tabs.length > 0 ? tabs[0].name : null));
    }
  }, [tabs]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    className: className
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(_navigable_container__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
    role: "tablist",
    orientation: orientation,
    onNavigate: onNavigate,
    className: "components-tab-panel__tabs"
  }, tabs.map(tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)(TabButton, {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('components-tab-panel__tabs-item', tab.className, {
      [activeClass]: tab.name === selected
    }),
    tabId: `${instanceId}-${tab.name}`,
    "aria-controls": `${instanceId}-${tab.name}-view`,
    selected: tab.name === selected,
    key: tab.name,
    onClick: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.partial)(handleClick, tab.name)
  }, tab.title))), selectedTab && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.createElement)("div", {
    key: selectedId,
    "aria-labelledby": selectedId,
    role: "tabpanel",
    id: `${selectedId}-view`,
    className: "components-tab-panel__tab-content"
  }, children(selectedTab)));
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@8.2.3/node_modules/@wordpress/icons/build-module/library/calendar.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");


/**
 * WordPress dependencies
 */

const calendar = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm.5 16c0 .3-.2.5-.5.5H5c-.3 0-.5-.2-.5-.5V7h15v12zM9 10H7v2h2v-2zm0 4H7v2h2v-2zm4-4h-2v2h2v-2zm4 0h-2v2h2v-2zm-4 4h-2v2h2v-2zm4 0h-2v2h2v-2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calendar);
//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@8.2.3/node_modules/@wordpress/icons/build-module/library/chevron-left.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.4.1/node_modules/@wordpress/primitives/build-module/svg/index.js");


/**
 * WordPress dependencies
 */

const chevronLeft = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
  d: "M14.6 7l-1.2-1L8 12l5.4 6 1.2-1-4.6-5z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronLeft);
//# sourceMappingURL=chevron-left.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/icon/index.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "../../node_modules/.pnpm/@wordpress+icons@8.4.0/node_modules/@wordpress/icons/build-module/library/chevron-down.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../../node_modules/.pnpm/@wordpress+primitives@3.56.0/node_modules/@wordpress/primitives/build-module/svg/index.js");


/**
 * WordPress dependencies
 */

const chevronDown = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .SVG */ .t4, {
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__/* .Path */ .wA, {
  d: "M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"
}));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (chevronDown);
//# sourceMappingURL=chevron-down.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/airbnb-prop-types@2.16.0_react@17.0.2/node_modules/airbnb-prop-types/build/mocks/index.js":
/***/ ((module) => {

"use strict";


function noop() {
  return null;
}

noop.isRequired = noop;

function noopThunk() {
  return noop;
}

module.exports = {
  and: noopThunk,
  between: noopThunk,
  booleanSome: noopThunk,
  childrenHavePropXorChildren: noopThunk,
  childrenOf: noopThunk,
  childrenOfType: noopThunk,
  childrenSequenceOf: noopThunk,
  componentWithName: noopThunk,
  disallowedIf: noopThunk,
  elementType: noopThunk,
  empty: noopThunk,
  explicitNull: noopThunk,
  forbidExtraProps: Object,
  integer: noopThunk,
  keysOf: noopThunk,
  mutuallyExclusiveProps: noopThunk,
  mutuallyExclusiveTrueProps: noopThunk,
  nChildren: noopThunk,
  nonNegativeInteger: noop,
  nonNegativeNumber: noopThunk,
  numericString: noopThunk,
  object: noopThunk,
  or: noopThunk,
  predicate: noopThunk,
  range: noopThunk,
  ref: noopThunk,
  requiredBy: noopThunk,
  restrictedProp: noopThunk,
  sequenceOf: noopThunk,
  shape: noopThunk,
  stringEndsWith: noopThunk,
  stringStartsWith: noopThunk,
  uniqueArray: noopThunk,
  uniqueArrayOf: noopThunk,
  valuesOf: noopThunk,
  withShape: noopThunk
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/airbnb-prop-types@2.16.0_react@17.0.2/node_modules/airbnb-prop-types/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports =  true ? __webpack_require__("../../node_modules/.pnpm/airbnb-prop-types@2.16.0_react@17.0.2/node_modules/airbnb-prop-types/build/mocks/index.js") : 0;

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/.pnpm/consolidated-events@2.0.2/node_modules/consolidated-events/lib/index.esm.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addEventListener: () => (/* binding */ addEventListener)
/* harmony export */ });
var CAN_USE_DOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

// Adapted from Modernizr
// https://github.com/Modernizr/Modernizr/blob/acb3f0d9/feature-detects/dom/passiveeventlisteners.js#L26-L37
function testPassiveEventListeners() {
  if (!CAN_USE_DOM) {
    return false;
  }

  if (!window.addEventListener || !window.removeEventListener || !Object.defineProperty) {
    return false;
  }

  var supportsPassiveOption = false;
  try {
    var opts = Object.defineProperty({}, 'passive', {
      // eslint-disable-next-line getter-return
      get: function () {
        function get() {
          supportsPassiveOption = true;
        }

        return get;
      }()
    });
    var noop = function noop() {};
    window.addEventListener('testPassiveEventSupport', noop, opts);
    window.removeEventListener('testPassiveEventSupport', noop, opts);
  } catch (e) {
    // do nothing
  }

  return supportsPassiveOption;
}

var memoized = void 0;

function canUsePassiveEventListeners() {
  if (memoized === undefined) {
    memoized = testPassiveEventListeners();
  }
  return memoized;
}

function normalizeEventOptions(eventOptions) {
  if (!eventOptions) {
    return undefined;
  }

  if (!canUsePassiveEventListeners()) {
    // If the browser does not support the passive option, then it is expecting
    // a boolean for the options argument to specify whether it should use
    // capture or not. In more modern browsers, this is passed via the `capture`
    // option, so let's just hoist that value up.
    return !!eventOptions.capture;
  }

  return eventOptions;
}

/* eslint-disable no-bitwise */

/**
 * Generate a unique key for any set of event options
 */
function eventOptionsKey(normalizedEventOptions) {
  if (!normalizedEventOptions) {
    return 0;
  }

  // If the browser does not support passive event listeners, the normalized
  // event options will be a boolean.
  if (normalizedEventOptions === true) {
    return 100;
  }

  // At this point, the browser supports passive event listeners, so we expect
  // the event options to be an object with possible properties of capture,
  // passive, and once.
  //
  // We want to consistently return the same value, regardless of the order of
  // these properties, so let's use binary maths to assign each property to a
  // bit, and then add those together (with an offset to account for the
  // booleans at the beginning of this function).
  var capture = normalizedEventOptions.capture << 0;
  var passive = normalizedEventOptions.passive << 1;
  var once = normalizedEventOptions.once << 2;
  return capture + passive + once;
}

function ensureCanMutateNextEventHandlers(eventHandlers) {
  if (eventHandlers.handlers === eventHandlers.nextHandlers) {
    // eslint-disable-next-line no-param-reassign
    eventHandlers.nextHandlers = eventHandlers.handlers.slice();
  }
}

function TargetEventHandlers(target) {
  this.target = target;
  this.events = {};
}

TargetEventHandlers.prototype.getEventHandlers = function () {
  function getEventHandlers(eventName, options) {
    var key = String(eventName) + ' ' + String(eventOptionsKey(options));

    if (!this.events[key]) {
      this.events[key] = {
        handlers: [],
        handleEvent: undefined
      };
      this.events[key].nextHandlers = this.events[key].handlers;
    }

    return this.events[key];
  }

  return getEventHandlers;
}();

TargetEventHandlers.prototype.handleEvent = function () {
  function handleEvent(eventName, options, event) {
    var eventHandlers = this.getEventHandlers(eventName, options);
    eventHandlers.handlers = eventHandlers.nextHandlers;
    eventHandlers.handlers.forEach(function (handler) {
      if (handler) {
        // We need to check for presence here because a handler function may
        // cause later handlers to get removed. This can happen if you for
        // instance have a waypoint that unmounts another waypoint as part of an
        // onEnter/onLeave handler.
        handler(event);
      }
    });
  }

  return handleEvent;
}();

TargetEventHandlers.prototype.add = function () {
  function add(eventName, listener, options) {
    var _this = this;

    // options has already been normalized at this point.
    var eventHandlers = this.getEventHandlers(eventName, options);

    ensureCanMutateNextEventHandlers(eventHandlers);

    if (eventHandlers.nextHandlers.length === 0) {
      eventHandlers.handleEvent = this.handleEvent.bind(this, eventName, options);

      this.target.addEventListener(eventName, eventHandlers.handleEvent, options);
    }

    eventHandlers.nextHandlers.push(listener);

    var isSubscribed = true;
    var unsubscribe = function () {
      function unsubscribe() {
        if (!isSubscribed) {
          return;
        }

        isSubscribed = false;

        ensureCanMutateNextEventHandlers(eventHandlers);
        var index = eventHandlers.nextHandlers.indexOf(listener);
        eventHandlers.nextHandlers.splice(index, 1);

        if (eventHandlers.nextHandlers.length === 0) {
          // All event handlers have been removed, so we want to remove the event
          // listener from the target node.

          if (_this.target) {
            // There can be a race condition where the target may no longer exist
            // when this function is called, e.g. when a React component is
            // unmounting. Guarding against this prevents the following error:
            //
            //   Cannot read property 'removeEventListener' of undefined
            _this.target.removeEventListener(eventName, eventHandlers.handleEvent, options);
          }

          eventHandlers.handleEvent = undefined;
        }
      }

      return unsubscribe;
    }();
    return unsubscribe;
  }

  return add;
}();

var EVENT_HANDLERS_KEY = '__consolidated_events_handlers__';

// eslint-disable-next-line import/prefer-default-export
function addEventListener(target, eventName, listener, options) {
  if (!target[EVENT_HANDLERS_KEY]) {
    // eslint-disable-next-line no-param-reassign
    target[EVENT_HANDLERS_KEY] = new TargetEventHandlers(target);
  }
  var normalizedEventOptions = normalizeEventOptions(options);
  return target[EVENT_HANDLERS_KEY].add(eventName, listener, normalizedEventOptions);
}




/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.array.join.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var IndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/to-indexed-object.js");
var arrayMethodIsStrict = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/array-method-is-strict.js");

var nativeJoin = uncurryThis([].join);

var ES3_STRINGS = IndexedObject !== Object;
var FORCED = ES3_STRINGS || !arrayMethodIsStrict('join', ',');

// `Array.prototype.join` method
// https://tc39.es/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: FORCED }, {
  join: function join(separator) {
    return nativeJoin(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/modules/es.date.to-string.js":
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__("../../node_modules/.pnpm/core-js@3.34.0/node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/implementation.js":
/***/ ((module) => {

"use strict";


module.exports = function contains(other) {
	if (arguments.length < 1) {
		throw new TypeError('1 argument is required');
	}
	if (typeof other !== 'object') {
		throw new TypeError('Argument 1 (”other“) to Node.contains must be an instance of Node');
	}

	var node = other;
	do {
		if (this === node) {
			return true;
		}
		if (node) {
			node = node.parentNode;
		}
	} while (node);

	return false;
};


/***/ }),

/***/ "../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");

var implementation = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/implementation.js");
var getPolyfill = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/polyfill.js");
var polyfill = getPolyfill();
var shim = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/shim.js");

var boundContains = function contains(node, other) {
	return polyfill.apply(node, [other]);
};

define(boundContains, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = boundContains;


/***/ }),

/***/ "../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/polyfill.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/implementation.js");

module.exports = function getPolyfill() {
	if (typeof document !== 'undefined') {
		if (document.contains) {
			return document.contains;
		}
		if (document.body && document.body.contains) {
			try {
				if (typeof document.body.contains.call(document, '') === 'boolean') {
					return document.body.contains;
				}
			} catch (e) { /**/ }
		}
	}
	return implementation;
};


/***/ }),

/***/ "../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/shim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/polyfill.js");

module.exports = function shimContains() {
	var polyfill = getPolyfill();
	if (typeof document !== 'undefined') {
		define(
			document,
			{ contains: polyfill },
			{ contains: function () { return document.contains !== polyfill; } }
		);
		if (typeof Element !== 'undefined') {
			define(
				Element.prototype,
				{ contains: polyfill },
				{ contains: function () { return Element.prototype.contains !== polyfill; } }
			);
		}
	}
	return polyfill;
};


/***/ }),

/***/ "../../node_modules/.pnpm/es-abstract@1.22.3/node_modules/es-abstract/2023/RequireObjectCoercible.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__("../../node_modules/.pnpm/es-abstract@1.22.3/node_modules/es-abstract/5/CheckObjectCoercible.js");


/***/ }),

/***/ "../../node_modules/.pnpm/es-abstract@1.22.3/node_modules/es-abstract/5/CheckObjectCoercible.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var GetIntrinsic = __webpack_require__("../../node_modules/.pnpm/get-intrinsic@1.2.2/node_modules/get-intrinsic/index.js");

var $TypeError = GetIntrinsic('%TypeError%');

// http://262.ecma-international.org/5.1/#sec-9.10

module.exports = function CheckObjectCoercible(value, optMessage) {
	if (value == null) {
		throw new $TypeError(optMessage || ('Cannot call method on ' + value));
	}
	return value;
};


/***/ }),

/***/ "../../node_modules/.pnpm/is-touch-device@1.0.1/node_modules/is-touch-device/build/index.js":
/***/ ((module, exports) => {

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = isTouchDevice;
function isTouchDevice() {
  return !!(typeof window !== 'undefined' && ('ontouchstart' in window || window.DocumentTouch && typeof document !== 'undefined' && document instanceof window.DocumentTouch)) || !!(typeof navigator !== 'undefined' && (navigator.maxTouchPoints || navigator.msMaxTouchPoints));
}
module.exports = exports['default'];

/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js");

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_trimmedEndIndex.js":
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    now = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js"),
    toNumber = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js");

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
        clearTimeout(timerId);
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

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/now.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_root.js");

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

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/throttle.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/debounce.js"),
    isObject = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ "../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/toNumber.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/_baseTrim.js"),
    isObject = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__("../../node_modules/.pnpm/lodash@4.17.21/node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

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
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ "../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var defineProperties = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");
var callBind = __webpack_require__("../../node_modules/.pnpm/call-bind@1.0.5/node_modules/call-bind/index.js");

var implementation = __webpack_require__("../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__("../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/polyfill.js");
var shim = __webpack_require__("../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/shim.js");

var polyfill = callBind.apply(getPolyfill());
// eslint-disable-next-line no-unused-vars
var bound = function assign(target, source1) {
	return polyfill(Object, arguments);
};

defineProperties(bound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = bound;


/***/ }),

/***/ "../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/shim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__("../../node_modules/.pnpm/object.assign@4.1.5/node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/implementation.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var RequireObjectCoercible = __webpack_require__("../../node_modules/.pnpm/es-abstract@1.22.3/node_modules/es-abstract/2023/RequireObjectCoercible.js");
var callBound = __webpack_require__("../../node_modules/.pnpm/call-bind@1.0.5/node_modules/call-bind/callBound.js");

var $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');
var $push = callBound('Array.prototype.push');

module.exports = function values(O) {
	var obj = RequireObjectCoercible(O);
	var vals = [];
	for (var key in obj) {
		if ($isEnumerable(obj, key)) { // checks own-ness as well
			$push(vals, obj[key]);
		}
	}
	return vals;
};


/***/ }),

/***/ "../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var define = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");
var callBind = __webpack_require__("../../node_modules/.pnpm/call-bind@1.0.5/node_modules/call-bind/index.js");

var implementation = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/implementation.js");
var getPolyfill = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/polyfill.js");
var shim = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/shim.js");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/polyfill.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var implementation = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/implementation.js");

module.exports = function getPolyfill() {
	return typeof Object.values === 'function' ? Object.values : implementation;
};


/***/ }),

/***/ "../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/shim.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var getPolyfill = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/polyfill.js");
var define = __webpack_require__("../../node_modules/.pnpm/define-properties@1.2.1/node_modules/define-properties/index.js");

module.exports = function shimValues() {
	var polyfill = getPolyfill();
	define(Object, { values: polyfill }, {
		values: function testValues() {
			return Object.values !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "../../node_modules/.pnpm/react-moment-proptypes@1.8.1_moment@2.29.4/node_modules/react-moment-proptypes/src/core.js":
/***/ ((module) => {

var messages = {
  invalidPredicate: '`predicate` must be a function',
  invalidPropValidator: '`propValidator` must be a function',
  requiredCore: 'is marked as required',
  invalidTypeCore: 'Invalid input type',
  predicateFailureCore: 'Failed to succeed with predicate',
  anonymousMessage: '<<anonymous>>',
  baseInvalidMessage: 'Invalid ',
};

function constructPropValidatorVariations(propValidator) {
  if (typeof propValidator !== 'function') {
    throw new Error(messages.invalidPropValidator);
  }

  var requiredPropValidator = propValidator.bind(null, false, null);
  requiredPropValidator.isRequired = propValidator.bind(null, true, null);

  requiredPropValidator.withPredicate = function predicateApplication(predicate) {
    if (typeof predicate !== 'function') {
      throw new Error(messages.invalidPredicate);
    }
    var basePropValidator = propValidator.bind(null, false, predicate);
    basePropValidator.isRequired = propValidator.bind(null, true, predicate);
    return basePropValidator;
  };

  return requiredPropValidator;
}

function createInvalidRequiredErrorMessage(propName, componentName, value) {
  return new Error(
    'The prop `' + propName + '` ' + messages.requiredCore +
    ' in `' + componentName + '`, but its value is `' + value + '`.'
  );
}

var independentGuardianValue = -1;

function preValidationRequireCheck(isRequired, componentName, propFullName, propValue) {
  var isPropValueUndefined = typeof propValue === 'undefined';
  var isPropValueNull = propValue === null;

  if (isRequired) {
    if (isPropValueUndefined) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'undefined');
    } else if (isPropValueNull) {
      return createInvalidRequiredErrorMessage(propFullName, componentName, 'null');
    }
  }

  if (isPropValueUndefined || isPropValueNull) {
    return null;
  }

  return independentGuardianValue;
}

function createMomentChecker(type, typeValidator, validator, momentType) {

  function propValidator(
    isRequired, // Bound parameter to indicate with the propType is required
    predicate, // Bound parameter to allow user to add dynamic validation
    props,
    propName,
    componentName,
    location,
    propFullName
  ) {
    var propValue = props[ propName ];
    var propType = typeof propValue;

    componentName = componentName || messages.anonymousMessage;
    propFullName = propFullName || propName;

    var preValidationRequireCheckValue = preValidationRequireCheck(
      isRequired, componentName, propFullName, propValue
    );

    if (preValidationRequireCheckValue !== independentGuardianValue) {
      return preValidationRequireCheckValue;
    }

    if (typeValidator && !typeValidator(propValue)) {
      return new Error(
        messages.invalidTypeCore + ': `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + type + '`.'
      );
    }

    if (!validator(propValue)) {
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`, expected `' + momentType + '`.'
      );
    }

    if (predicate && !predicate(propValue)) {
      var predicateName = predicate.name || messages.anonymousMessage;
      return new Error(
        messages.baseInvalidMessage + location + ' `' + propName + '` of type `' + propType + '` ' +
        'supplied to `' + componentName + '`. ' + messages.predicateFailureCore + ' `' +
        predicateName + '`.'
      );
    }

    return null;

  }

  return constructPropValidatorVariations(propValidator);

}

module.exports = {
  constructPropValidatorVariations: constructPropValidatorVariations,
  createMomentChecker: createMomentChecker,
  messages: messages,
};


/***/ }),

/***/ "../../node_modules/.pnpm/react-moment-proptypes@1.8.1_moment@2.29.4/node_modules/react-moment-proptypes/src/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");
var momentValidationWrapper = __webpack_require__("../../node_modules/.pnpm/react-moment-proptypes@1.8.1_moment@2.29.4/node_modules/react-moment-proptypes/src/moment-validation-wrapper.js");
var core = __webpack_require__("../../node_modules/.pnpm/react-moment-proptypes@1.8.1_moment@2.29.4/node_modules/react-moment-proptypes/src/core.js");

module.exports = {

  momentObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(value);
    },
    'Moment'
  ),

  momentString : core.createMomentChecker(
    'string',
    function(str) {
      return typeof str === 'string';
    },
    function isValid(value) {
      return momentValidationWrapper.isValidMoment(moment(value));
    },
    'Moment'
  ),

  momentDurationObj : core.createMomentChecker(
    'object',
    function(obj) {
      return typeof obj === 'object';
    },
    function isValid(value) {
      return moment.isDuration(value);
    },
    'Duration'
  ),

};


/***/ }),

/***/ "../../node_modules/.pnpm/react-moment-proptypes@1.8.1_moment@2.29.4/node_modules/react-moment-proptypes/src/moment-validation-wrapper.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var moment = __webpack_require__("../../node_modules/.pnpm/moment@2.29.4/node_modules/moment/moment.js");

function isValidMoment(testMoment) {
  if (typeof moment.isMoment === 'function' && !moment.isMoment(testMoment)) {
    return false;
  }

  /* istanbul ignore else  */
  if (typeof testMoment.isValid === 'function') {
    // moment 1.7.0+
    return testMoment.isValid();
  }

  /* istanbul ignore next */
  return !isNaN(testMoment);
}

module.exports = {
  isValidMoment : isValidMoment,
};


/***/ }),

/***/ "../../node_modules/.pnpm/react-outside-click-handler@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-outside-click-handler/build/OutsideClickHandler.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _airbnbPropTypes = __webpack_require__("../../node_modules/.pnpm/airbnb-prop-types@2.16.0_react@17.0.2/node_modules/airbnb-prop-types/index.js");

var _consolidatedEvents = __webpack_require__("../../node_modules/.pnpm/consolidated-events@2.0.2/node_modules/consolidated-events/lib/index.esm.js");

var _object = __webpack_require__("../../node_modules/.pnpm/object.values@1.1.7/node_modules/object.values/index.js");

var _object2 = _interopRequireDefault(_object);

var _document = __webpack_require__("../../node_modules/.pnpm/document.contains@1.0.2/node_modules/document.contains/index.js");

var _document2 = _interopRequireDefault(_document);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISPLAY = {
  BLOCK: 'block',
  FLEX: 'flex',
  INLINE: 'inline',
  INLINE_BLOCK: 'inline-block',
  CONTENTS: 'contents'
};

var propTypes = (0, _airbnbPropTypes.forbidExtraProps)({
  children: _propTypes2['default'].node.isRequired,
  onOutsideClick: _propTypes2['default'].func.isRequired,
  disabled: _propTypes2['default'].bool,
  useCapture: _propTypes2['default'].bool,
  display: _propTypes2['default'].oneOf((0, _object2['default'])(DISPLAY))
});

var defaultProps = {
  disabled: false,

  // `useCapture` is set to true by default so that a `stopPropagation` in the
  // children will not prevent all outside click handlers from firing - maja
  useCapture: true,
  display: DISPLAY.BLOCK
};

var OutsideClickHandler = function (_React$Component) {
  _inherits(OutsideClickHandler, _React$Component);

  function OutsideClickHandler() {
    var _ref;

    _classCallCheck(this, OutsideClickHandler);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = OutsideClickHandler.__proto__ || Object.getPrototypeOf(OutsideClickHandler)).call.apply(_ref, [this].concat(args)));

    _this.onMouseDown = _this.onMouseDown.bind(_this);
    _this.onMouseUp = _this.onMouseUp.bind(_this);
    _this.setChildNodeRef = _this.setChildNodeRef.bind(_this);
    return _this;
  }

  _createClass(OutsideClickHandler, [{
    key: 'componentDidMount',
    value: function () {
      function componentDidMount() {
        var _props = this.props,
            disabled = _props.disabled,
            useCapture = _props.useCapture;


        if (!disabled) this.addMouseDownEventListener(useCapture);
      }

      return componentDidMount;
    }()
  }, {
    key: 'componentDidUpdate',
    value: function () {
      function componentDidUpdate(_ref2) {
        var prevDisabled = _ref2.disabled;
        var _props2 = this.props,
            disabled = _props2.disabled,
            useCapture = _props2.useCapture;

        if (prevDisabled !== disabled) {
          if (disabled) {
            this.removeEventListeners();
          } else {
            this.addMouseDownEventListener(useCapture);
          }
        }
      }

      return componentDidUpdate;
    }()
  }, {
    key: 'componentWillUnmount',
    value: function () {
      function componentWillUnmount() {
        this.removeEventListeners();
      }

      return componentWillUnmount;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseDown',
    value: function () {
      function onMouseDown(e) {
        var useCapture = this.props.useCapture;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (!isDescendantOfRoot) {
          if (this.removeMouseUp) {
            this.removeMouseUp();
            this.removeMouseUp = null;
          }
          this.removeMouseUp = (0, _consolidatedEvents.addEventListener)(document, 'mouseup', this.onMouseUp, { capture: useCapture });
        }
      }

      return onMouseDown;
    }()

    // Use mousedown/mouseup to enforce that clicks remain outside the root's
    // descendant tree, even when dragged. This should also get triggered on
    // touch devices.

  }, {
    key: 'onMouseUp',
    value: function () {
      function onMouseUp(e) {
        var onOutsideClick = this.props.onOutsideClick;


        var isDescendantOfRoot = this.childNode && (0, _document2['default'])(this.childNode, e.target);
        if (this.removeMouseUp) {
          this.removeMouseUp();
          this.removeMouseUp = null;
        }

        if (!isDescendantOfRoot) {
          onOutsideClick(e);
        }
      }

      return onMouseUp;
    }()
  }, {
    key: 'setChildNodeRef',
    value: function () {
      function setChildNodeRef(ref) {
        this.childNode = ref;
      }

      return setChildNodeRef;
    }()
  }, {
    key: 'addMouseDownEventListener',
    value: function () {
      function addMouseDownEventListener(useCapture) {
        this.removeMouseDown = (0, _consolidatedEvents.addEventListener)(document, 'mousedown', this.onMouseDown, { capture: useCapture });
      }

      return addMouseDownEventListener;
    }()
  }, {
    key: 'removeEventListeners',
    value: function () {
      function removeEventListeners() {
        if (this.removeMouseDown) this.removeMouseDown();
        if (this.removeMouseUp) this.removeMouseUp();
      }

      return removeEventListeners;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props3 = this.props,
            children = _props3.children,
            display = _props3.display;


        return _react2['default'].createElement(
          'div',
          {
            ref: this.setChildNodeRef,
            style: display !== DISPLAY.BLOCK && (0, _object2['default'])(DISPLAY).includes(display) ? { display: display } : undefined
          },
          children
        );
      }

      return render;
    }()
  }]);

  return OutsideClickHandler;
}(_react2['default'].Component);

exports["default"] = OutsideClickHandler;


OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

/***/ }),

/***/ "../../node_modules/.pnpm/react-outside-click-handler@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-outside-click-handler/index.js":
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// eslint-disable-next-line import/no-unresolved
module.exports = __webpack_require__("../../node_modules/.pnpm/react-outside-click-handler@1.3.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-outside-click-handler/build/OutsideClickHandler.js");


/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/CSSTransition.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_CSSTransition)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/hasClass.js
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/addClass.js

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass_addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/dom-helpers@5.2.1/node_modules/dom-helpers/esm/removeClass.js
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass_removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/Transition.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/reflow.js
var reflow = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/reflow.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/CSSTransition.js











var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass_addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass_removeClass(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      if (node) (0,reflow/* forceReflow */.F)(node);
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["classNames"]);

    return /*#__PURE__*/react.createElement(Transition/* default */.Ay, (0,esm_extends/* default */.A)({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  false ? 0 : {};
/* harmony default export */ const esm_CSSTransition = (CSSTransition);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/Transition.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ esm_Transition)
});

// UNUSED EXPORTS: ENTERED, ENTERING, EXITED, EXITING, UNMOUNTED

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__("../../node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/config.js
/* harmony default export */ const config = ({
  disabled: false
});
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroupContext.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/reflow.js
var reflow = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/reflow.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/Transition.js









var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this); // https://github.com/reactjs/react-transition-group/pull/749
          // With unmountOnExit or mountOnEnter, the enter animation should happen at the transition between `exited` and `entering`.
          // To make the animation happen,  we have to separate each rendering and avoid being processed as batched.

          if (node) (0,reflow/* forceReflow */.F)(node);
        }

        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(TransitionGroupContext/* default */.A.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react.cloneElement(react.Children.only(children), childProps))
    );
  };

  return Transition;
}(react.Component);

Transition.contextType = TransitionGroupContext/* default */.A;
Transition.propTypes =  false ? 0 : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ const esm_Transition = (Transition);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroup.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_TransitionGroup)
});

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/extends.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}

// EXTERNAL MODULE: ../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js + 1 modules
var inheritsLoose = __webpack_require__("../../node_modules/.pnpm/@babel+runtime@7.25.0/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");
// EXTERNAL MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroupContext.js
var TransitionGroupContext = __webpack_require__("../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroupContext.js");
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/ChildMapping.js

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0,react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0,react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0,react.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}
;// CONCATENATED MODULE: ../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroup.js









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  (0,inheritsLoose/* default */.A)(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,esm_extends/* default */.A)({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = (0,objectWithoutPropertiesLoose/* default */.A)(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react.createElement(TransitionGroupContext/* default */.A.Provider, {
      value: contextValue
    }, /*#__PURE__*/react.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react.Component);

TransitionGroup.propTypes =  false ? 0 : {};
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ const esm_TransitionGroup = (TransitionGroup);

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/TransitionGroupContext.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../../node_modules/.pnpm/react@18.3.1/node_modules/react/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (react__WEBPACK_IMPORTED_MODULE_0__.createContext(null));

/***/ }),

/***/ "../../node_modules/.pnpm/react-transition-group@4.4.5_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-transition-group/esm/utils/reflow.js":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ forceReflow)
/* harmony export */ });
var forceReflow = function forceReflow(node) {
  return node.scrollTop;
};

/***/ }),

/***/ "../../node_modules/.pnpm/react-with-direction@1.4.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-with-direction/dist/constants.js":
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var CHANNEL = exports.CHANNEL = '__direction__';

var DIRECTIONS = exports.DIRECTIONS = {
  LTR: 'ltr',
  RTL: 'rtl'
};

/***/ }),

/***/ "../../node_modules/.pnpm/react-with-direction@1.4.0_react-dom@17.0.2_react@17.0.2__react@17.0.2/node_modules/react-with-direction/dist/proptypes/brcast.js":
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _propTypes = __webpack_require__("../../node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports["default"] = _propTypes2['default'].shape({
  getState: _propTypes2['default'].func,
  setState: _propTypes2['default'].func,
  subscribe: _propTypes2['default'].func
});

/***/ })

}]);