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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactDom = require('react-dom');

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
var isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === 'string';
}
// Insert one space between two chinese characters automatically.
function insertSpace(child) {
    if (isString(child.type) && isTwoCNChar(child.props.children)) {
        return _react2["default"].cloneElement(child, {}, child.props.children.split('').join(' '));
    }
    if (isString(child)) {
        if (isTwoCNChar(child)) {
            child = child.split('').join(' ');
        }
        return _react2["default"].createElement(
            'span',
            null,
            child
        );
    }
    return child;
}

var Button = function (_React$Component) {
    (0, _inherits3["default"])(Button, _React$Component);

    function Button() {
        (0, _classCallCheck3["default"])(this, Button);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.clearButton = function (button) {
            button.className = button.className.replace(' ' + _this.props.prefixCls + '-clicked', '');
        };
        _this.handleClick = function (e) {
            // Add click effect
            var buttonNode = (0, _reactDom.findDOMNode)(_this);
            _this.clearButton(buttonNode);
            _this.clickedTimeout = setTimeout(function () {
                return buttonNode.className += ' ' + _this.props.prefixCls + '-clicked';
            }, 10);
            clearTimeout(_this.timeout);
            _this.timeout = setTimeout(function () {
                return _this.clearButton(buttonNode);
            }, 500);
            var onClick = _this.props.onClick;
            if (onClick) {
                onClick(e);
            }
        };
        // Handle auto focus when click button in Chrome
        _this.handleMouseUp = function (e) {
            (0, _reactDom.findDOMNode)(_this).blur();
            if (_this.props.onMouseUp) {
                _this.props.onMouseUp(e);
            }
        };
        return _this;
    }

    Button.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.clickedTimeout) {
            clearTimeout(this.clickedTimeout);
        }
        if (this.timeout) {
            clearTimeout(this.timeout);
        }
    };

    Button.prototype.render = function render() {
        var _classNames;

        var _a = this.props,
            type = _a.type,
            shape = _a.shape,
            _a$size = _a.size,
            size = _a$size === undefined ? '' : _a$size,
            className = _a.className,
            htmlType = _a.htmlType,
            children = _a.children,
            icon = _a.icon,
            loading = _a.loading,
            prefixCls = _a.prefixCls,
            ghost = _a.ghost,
            others = __rest(_a, ["type", "shape", "size", "className", "htmlType", "children", "icon", "loading", "prefixCls", "ghost"]);
        // large => lg
        // small => sm
        var sizeCls = {
            large: 'lg',
            small: 'sm'
        }[size] || '';
        var classes = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, type), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + shape, shape), (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + sizeCls, sizeCls), (0, _defineProperty3["default"])(_classNames, prefixCls + '-icon-only', !children && icon), (0, _defineProperty3["default"])(_classNames, prefixCls + '-loading', loading), (0, _defineProperty3["default"])(_classNames, prefixCls + '-background-ghost', ghost), _classNames), className);
        var iconType = loading ? 'loading' : icon;
        var iconNode = iconType ? _react2["default"].createElement(_icon2["default"], { type: iconType }) : null;
        var kids = _react2["default"].Children.map(children, insertSpace);
        return _react2["default"].createElement(
            'button',
            (0, _extends3["default"])({}, others, { type: htmlType || 'button', className: classes, onMouseUp: this.handleMouseUp, onClick: this.handleClick }),
            iconNode,
            kids
        );
    };

    return Button;
}(_react2["default"].Component);

exports["default"] = Button;

Button.__ANT_BUTTON = true;
Button.defaultProps = {
    prefixCls: 'ant-btn',
    loading: false,
    ghost: false
};
Button.propTypes = {
    type: _react2["default"].PropTypes.string,
    shape: _react2["default"].PropTypes.oneOf(['circle', 'circle-outline']),
    size: _react2["default"].PropTypes.oneOf(['large', 'default', 'small']),
    htmlType: _react2["default"].PropTypes.oneOf(['submit', 'button', 'reset']),
    onClick: _react2["default"].PropTypes.func,
    loading: _react2["default"].PropTypes.bool,
    className: _react2["default"].PropTypes.string,
    icon: _react2["default"].PropTypes.string
};
module.exports = exports['default'];