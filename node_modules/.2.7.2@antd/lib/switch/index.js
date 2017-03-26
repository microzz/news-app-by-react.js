'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSwitch = require('rc-switch');

var _rcSwitch2 = _interopRequireDefault(_rcSwitch);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Switch = function (_React$Component) {
    (0, _inherits3["default"])(Switch, _React$Component);

    function Switch() {
        (0, _classCallCheck3["default"])(this, Switch);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Switch.prototype.render = function render() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            size = _props.size,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className;

        var classes = (0, _classnames2["default"])(className, (0, _defineProperty3["default"])({}, prefixCls + '-small', size === 'small'));
        return _react2["default"].createElement(_rcSwitch2["default"], (0, _extends3["default"])({}, this.props, { className: classes }));
    };

    return Switch;
}(_react2["default"].Component);

exports["default"] = Switch;

Switch.defaultProps = {
    prefixCls: 'ant-switch',
    size: 'default'
};
Switch.propTypes = {
    prefixCls: _react.PropTypes.string,
    size: _react.PropTypes.oneOf(['small', 'default']),
    className: _react.PropTypes.string
};
module.exports = exports['default'];