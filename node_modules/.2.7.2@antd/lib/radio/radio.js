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

var _rcRadio = require('rc-radio');

var _rcRadio2 = _interopRequireDefault(_rcRadio);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Radio = function (_React$Component) {
    (0, _inherits3["default"])(Radio, _React$Component);

    function Radio() {
        (0, _classCallCheck3["default"])(this, Radio);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Radio.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    Radio.prototype.render = function render() {
        var _classNames, _classNames2;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            children = _props.children,
            checked = _props.checked,
            disabled = _props.disabled,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            style = _props.style;

        var wrapperClassString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper-checked', checked), (0, _defineProperty3["default"])(_classNames, prefixCls + '-wrapper-disabled', disabled), _classNames), className);
        var classString = (0, _classnames2["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-checked', checked), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-disabled', disabled), _classNames2));
        return _react2["default"].createElement(
            'label',
            { className: wrapperClassString, style: style, onMouseEnter: this.props.onMouseEnter, onMouseLeave: this.props.onMouseLeave },
            _react2["default"].createElement(_rcRadio2["default"], (0, _extends3["default"])({}, this.props, { className: classString, style: null, children: null })),
            children !== undefined ? _react2["default"].createElement(
                'span',
                null,
                children
            ) : null
        );
    };

    return Radio;
}(_react2["default"].Component);

exports["default"] = Radio;

Radio.defaultProps = {
    prefixCls: 'ant-radio'
};
module.exports = exports['default'];