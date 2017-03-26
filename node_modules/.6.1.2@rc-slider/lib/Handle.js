'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Handle = function (_React$Component) {
  (0, _inherits3["default"])(Handle, _React$Component);

  function Handle() {
    (0, _classCallCheck3["default"])(this, Handle);
    return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
  }

  Handle.prototype.render = function render() {
    var _props = this.props,
        className = _props.className,
        vertical = _props.vertical,
        offset = _props.offset,
        restProps = (0, _objectWithoutProperties3["default"])(_props, ['className', 'vertical', 'offset']);


    var style = vertical ? { bottom: offset + '%' } : { left: offset + '%' };
    return _react2["default"].createElement('div', (0, _extends3["default"])({}, restProps, { className: className, style: style }));
  };

  return Handle;
}(_react2["default"].Component);

exports["default"] = Handle;


Handle.propTypes = {
  className: _react.PropTypes.string,
  vertical: _react.PropTypes.bool,
  offset: _react.PropTypes.number
};
module.exports = exports['default'];