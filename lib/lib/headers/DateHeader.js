"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TimelineStateContext = require("../timeline/TimelineStateContext");
var _CustomHeader = _interopRequireDefault(require("./CustomHeader"));
var _calendar = require("../utility/calendar");
var _defaultConfig = require("../default-config");
var _memoizeOne = _interopRequireDefault(require("memoize-one"));
var _CustomDateHeader = require("./CustomDateHeader");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
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
var DateHeader = /*#__PURE__*/function (_React$Component) {
  _inherits(DateHeader, _React$Component);
  function DateHeader() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, DateHeader);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "getHeaderUnit", function () {
      if (_this.props.unit === 'primaryHeader') {
        return (0, _calendar.getNextUnit)(_this.props.timelineUnit);
      } else if (_this.props.unit) {
        return _this.props.unit;
      }
      return _this.props.timelineUnit;
    });
    _defineProperty(_assertThisInitialized(_this), "getRootStyle", (0, _memoizeOne["default"])(function (style) {
      return _objectSpread({
        height: 30
      }, style);
    }));
    _defineProperty(_assertThisInitialized(_this), "getLabelFormat", function (interval, unit, labelWidth) {
      var labelFormat = _this.props.labelFormat;
      if (typeof labelFormat === 'string') {
        var startTime = interval[0];
        return startTime.format(labelFormat);
      } else if (typeof labelFormat === 'function') {
        return labelFormat(interval, unit, labelWidth);
      } else {
        throw new Error('labelFormat should be function or string');
      }
    });
    _defineProperty(_assertThisInitialized(_this), "getHeaderData", (0, _memoizeOne["default"])(function (intervalRenderer, style, className, getLabelFormat, unitProp, headerData) {
      return {
        intervalRenderer: intervalRenderer,
        style: style,
        className: className,
        getLabelFormat: getLabelFormat,
        unitProp: unitProp,
        headerData: headerData
      };
    }));
    return _this;
  }
  _createClass(DateHeader, [{
    key: "render",
    value: function render() {
      var unit = this.getHeaderUnit();
      var _this$props = this.props,
        headerData = _this$props.headerData,
        height = _this$props.height;
      return _react["default"].createElement(_CustomHeader["default"], {
        unit: unit,
        height: height,
        headerData: this.getHeaderData(this.props.intervalRenderer, this.getRootStyle(this.props.style), this.props.className, this.getLabelFormat, this.props.unit, this.props.headerData),
        children: _CustomDateHeader.CustomDateHeader
      });
    }
  }]);
  return DateHeader;
}(_react["default"].Component);
_defineProperty(DateHeader, "propTypes", {
  unit: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  timelineUnit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]).isRequired,
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
});
var DateHeaderWrapper = function DateHeaderWrapper(_ref) {
  var unit = _ref.unit,
    labelFormat = _ref.labelFormat,
    style = _ref.style,
    className = _ref.className,
    intervalRenderer = _ref.intervalRenderer,
    headerData = _ref.headerData,
    height = _ref.height;
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref2) {
    var getTimelineState = _ref2.getTimelineState;
    var timelineState = getTimelineState();
    return _react["default"].createElement(DateHeader, {
      timelineUnit: timelineState.timelineUnit,
      unit: unit,
      labelFormat: labelFormat,
      style: style,
      className: className,
      intervalRenderer: intervalRenderer,
      headerData: headerData,
      height: height
    });
  });
};
DateHeaderWrapper.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  unit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]),
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
};
DateHeaderWrapper.defaultProps = {
  labelFormat: formatLabel
};
function formatLabel(_ref3, unit, labelWidth) {
  var _ref4 = _slicedToArray(_ref3, 2),
    timeStart = _ref4[0],
    timeEnd = _ref4[1];
  var formatOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultConfig.defaultHeaderFormats;
  var format;
  if (labelWidth >= 150) {
    format = formatOptions[unit]['long'];
  } else if (labelWidth >= 100) {
    format = formatOptions[unit]['mediumLong'];
  } else if (labelWidth >= 50) {
    format = formatOptions[unit]['medium'];
  } else {
    format = formatOptions[unit]['short'];
  }
  return timeStart.format(format);
}
var _default = DateHeaderWrapper;
exports["default"] = _default;