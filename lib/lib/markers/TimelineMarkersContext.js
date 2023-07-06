"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineMarkersProvider = exports.TimelineMarkersConsumer = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _createReactContext2 = _interopRequireDefault(require("create-react-context"));
var _generic = require("../utility/generic");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
var defaultContextState = {
  markers: [],
  subscribeMarker: function subscribeMarker() {
    // eslint-disable-next-line
    console.warn('default subscribe marker used');
    return _generic.noop;
  }
};
var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
  Consumer = _createReactContext.Consumer,
  Provider = _createReactContext.Provider; // REVIEW: is this the best way to manage ids?
var _id = 0;
var createId = function createId() {
  _id += 1;
  return _id + 1;
};
var TimelineMarkersProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(TimelineMarkersProvider, _React$Component);
  function TimelineMarkersProvider() {
    var _getPrototypeOf2;
    var _this;
    _classCallCheck(this, TimelineMarkersProvider);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimelineMarkersProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _defineProperty(_assertThisInitialized(_this), "handleSubscribeToMarker", function (newMarker) {
      newMarker = _objectSpread({}, newMarker, {
        // REVIEW: in the event that we accept id to be passed to the Marker components, this line would override those
        id: createId()
      });
      _this.setState(function (state) {
        return {
          markers: [].concat(_toConsumableArray(state.markers), [newMarker])
        };
      });
      return {
        unsubscribe: function unsubscribe() {
          _this.setState(function (state) {
            return {
              markers: state.markers.filter(function (marker) {
                return marker.id !== newMarker.id;
              })
            };
          });
        },
        getMarker: function getMarker() {
          return newMarker;
        }
      };
    });
    _defineProperty(_assertThisInitialized(_this), "handleUpdateMarker", function (updateMarker) {
      var markerIndex = _this.state.markers.findIndex(function (marker) {
        return marker.id === updateMarker.id;
      });
      if (markerIndex < 0) return;
      _this.setState(function (state) {
        return {
          markers: [].concat(_toConsumableArray(state.markers.slice(0, markerIndex)), [updateMarker], _toConsumableArray(state.markers.slice(markerIndex + 1)))
        };
      });
    });
    _defineProperty(_assertThisInitialized(_this), "state", {
      markers: [],
      subscribeMarker: _this.handleSubscribeToMarker,
      updateMarker: _this.handleUpdateMarker
    });
    return _this;
  }
  _createClass(TimelineMarkersProvider, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);
  return TimelineMarkersProvider;
}(_react["default"].Component);
exports.TimelineMarkersProvider = TimelineMarkersProvider;
_defineProperty(TimelineMarkersProvider, "propTypes", {
  children: _propTypes["default"].element.isRequired
});
var TimelineMarkersConsumer = Consumer;
exports.TimelineMarkersConsumer = TimelineMarkersConsumer;