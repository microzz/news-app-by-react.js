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

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Sider = function (_React$Component) {
    (0, _inherits3["default"])(Sider, _React$Component);

    function Sider(props) {
        (0, _classCallCheck3["default"])(this, Sider);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.setCollapsed = function (collapsed) {
            if (!('collapsed' in _this.props)) {
                _this.setState({
                    collapsed: collapsed
                });
            }
            var onCollapse = _this.props.onCollapse;

            if (onCollapse) {
                onCollapse(collapsed);
            }
        };
        _this.toggle = function () {
            var collapsed = !_this.state.collapsed;
            _this.setCollapsed(collapsed);
        };
        var collapsed = void 0;
        if ('collapsed' in props) {
            collapsed = props.collapsed;
        } else {
            collapsed = props.defaultCollapsed;
        }
        _this.state = {
            collapsed: collapsed
        };
        return _this;
    }

    Sider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('collapsed' in nextProps) {
            this.setState({
                collapsed: nextProps.collapsed
            });
        }
    };

    Sider.prototype.render = function render() {
        var _classNames;

        var _a = this.props,
            prefixCls = _a.prefixCls,
            className = _a.className,
            collapsible = _a.collapsible,
            reverseArrow = _a.reverseArrow,
            trigger = _a.trigger,
            style = _a.style,
            width = _a.width,
            collapsedWidth = _a.collapsedWidth,
            others = __rest(_a, ["prefixCls", "className", "collapsible", "reverseArrow", "trigger", "style", "width", "collapsedWidth"]);
        var divProps = (0, _omit2["default"])(others, ['collapsed', 'defaultCollapsed', 'onCollapse', 'name']);
        var siderCls = (0, _classnames2["default"])(className, prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-collapsed', !!this.state.collapsed), (0, _defineProperty3["default"])(_classNames, prefixCls + '-has-trigger', !!trigger), _classNames));
        var divStyle = __assign({}, style, { flex: '0 0 ' + (this.state.collapsed ? collapsedWidth : width) + 'px', width: (this.state.collapsed ? collapsedWidth : width) + 'px' });
        var iconObj = {
            'expanded': reverseArrow ? _react2["default"].createElement(_icon2["default"], { type: 'right' }) : _react2["default"].createElement(_icon2["default"], { type: 'left' }),
            'collapsed': reverseArrow ? _react2["default"].createElement(_icon2["default"], { type: 'left' }) : _react2["default"].createElement(_icon2["default"], { type: 'right' })
        };
        var status = this.state.collapsed ? 'collapsed' : 'expanded';
        var defaultTrigger = iconObj[status];
        var triggerDom = trigger !== null ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-trigger', onClick: this.toggle },
            trigger || defaultTrigger
        ) : null;
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({ className: siderCls }, divProps, { style: divStyle }),
            this.props.children,
            collapsible && triggerDom
        );
    };

    return Sider;
}(_react2["default"].Component);

exports["default"] = Sider;

Sider.defaultProps = {
    prefixCls: 'ant-layout-sider',
    collapsible: false,
    defaultCollapsed: false,
    reverseArrow: false,
    width: 200,
    collapsedWidth: 64,
    style: {},
    name: 'Sider'
};
module.exports = exports['default'];