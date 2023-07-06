"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _HeadersContext = require("./HeadersContext");
var _constants = require("./constants");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SidebarHeader = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(SidebarHeader, _React$PureComponent);
  function SidebarHeader() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, SidebarHeader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SidebarHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "getRootProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var style = props.style;
      var width = _this.props.variant === _constants.RIGHT_VARIANT ? _this.props.rightSidebarWidth : _this.props.leftSidebarWidth;
      return {
        style: _objectSpread({}, style, {
          width: width
        })
      };
    });
    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      return {
        getRootProps: _this.getRootProps,
        data: _this.props.headerData
      };
    });
    return _this;
  }
  _createClass(SidebarHeader, [{
    key: "render",
    value: function render() {
      var props = this.getStateAndHelpers();
      var Renderer = this.props.children;
      return _react["default"].createElement(Renderer, props);
    }
  }]);
  return SidebarHeader;
}(_react["default"].PureComponent);
_defineProperty(SidebarHeader, "propTypes", {
  children: _propTypes["default"].func.isRequired,
  rightSidebarWidth: _propTypes["default"].number,
  leftSidebarWidth: _propTypes["default"].number.isRequired,
  variant: _propTypes["default"].string,
  headerData: _propTypes["default"].object
});
var SidebarWrapper = function SidebarWrapper(_ref) {
  var children = _ref.children,
    variant = _ref.variant,
    headerData = _ref.headerData;
  return _react["default"].createElement(_HeadersContext.TimelineHeadersConsumer, null, function (_ref2) {
    var leftSidebarWidth = _ref2.leftSidebarWidth,
      rightSidebarWidth = _ref2.rightSidebarWidth;
    return _react["default"].createElement(SidebarHeader, {
      leftSidebarWidth: leftSidebarWidth,
      rightSidebarWidth: rightSidebarWidth,
      children: children,
      variant: variant,
      headerData: headerData
    });
  });
};
SidebarWrapper.propTypes = {
  children: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].string,
  headerData: _propTypes["default"].object
};
SidebarWrapper.defaultProps = {
  variant: _constants.LEFT_VARIANT,
  children: function children(_ref3) {
    var getRootProps = _ref3.getRootProps;
    return _react["default"].createElement("div", getRootProps());
  }
};
SidebarWrapper.secretKey = "SidebarHeader";
var _default = SidebarWrapper;
exports["default"] = _default;