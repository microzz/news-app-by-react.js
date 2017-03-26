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

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Badge = function (_React$Component) {
    (0, _inherits3["default"])(Badge, _React$Component);

    function Badge() {
        (0, _classCallCheck3["default"])(this, Badge);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Badge.prototype.render = function render() {
        var _classNames, _classNames2;

        var _a = this.props,
            count = _a.count,
            prefixCls = _a.prefixCls,
            overflowCount = _a.overflowCount,
            className = _a.className,
            style = _a.style,
            children = _a.children,
            dot = _a.dot,
            status = _a.status,
            text = _a.text,
            restProps = __rest(_a, ["count", "prefixCls", "overflowCount", "className", "style", "children", "dot", "status", "text"]);
        var isDot = dot || status;
        var displayCount = count > overflowCount ? overflowCount + '+' : count;
        // dot mode don't need count
        if (isDot) {
            displayCount = '';
        }
        // null undefined "" "0" 0
        var hidden = (!displayCount || displayCount === '0') && !isDot;
        var scrollNumberCls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-dot', isDot), (0, _defineProperty3["default"])(_classNames, prefixCls + '-count', !isDot), _classNames));
        var badgeCls = (0, _classnames2["default"])(className, prefixCls, (_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-status', !!status), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-not-a-wrapper', !children), _classNames2));
        (0, _warning2["default"])(!(children && status), '`Badge[children]` and `Badge[status]` cannot be used at the same time.');
        // <Badge status="success" />
        if (!children && status) {
            var _classNames3;

            var statusCls = (0, _classnames2["default"])((_classNames3 = {}, (0, _defineProperty3["default"])(_classNames3, prefixCls + '-status-dot', !!status), (0, _defineProperty3["default"])(_classNames3, prefixCls + '-status-' + status, true), _classNames3));
            return _react2["default"].createElement(
                'span',
                { className: badgeCls },
                _react2["default"].createElement('span', { className: statusCls }),
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-status-text' },
                    text
                )
            );
        }
        var scrollNumber = hidden ? null : _react2["default"].createElement(_ScrollNumber2["default"], { 'data-show': !hidden, className: scrollNumberCls, count: displayCount, style: style });
        var statusText = hidden || !text ? null : _react2["default"].createElement(
            'span',
            { className: prefixCls + '-status-text' },
            text
        );
        return _react2["default"].createElement(
            'span',
            (0, _extends3["default"])({}, restProps, { className: badgeCls, title: count }),
            children,
            _react2["default"].createElement(
                _rcAnimate2["default"],
                { component: '', showProp: 'data-show', transitionName: children ? prefixCls + '-zoom' : '', transitionAppear: true },
                scrollNumber
            ),
            statusText
        );
    };

    return Badge;
}(_react2["default"].Component);

exports["default"] = Badge;

Badge.defaultProps = {
    prefixCls: 'ant-badge',
    count: null,
    dot: false,
    overflowCount: 99
};
Badge.propTypes = {
    count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
    dot: _react2["default"].PropTypes.bool,
    overflowCount: _react2["default"].PropTypes.number
};
module.exports = exports['default'];