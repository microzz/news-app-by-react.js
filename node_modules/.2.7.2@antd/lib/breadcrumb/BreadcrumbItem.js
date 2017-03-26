'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var BreadcrumbItem = function (_React$Component) {
    (0, _inherits3["default"])(BreadcrumbItem, _React$Component);

    function BreadcrumbItem() {
        (0, _classCallCheck3["default"])(this, BreadcrumbItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    BreadcrumbItem.prototype.render = function render() {
        var _a = this.props,
            prefixCls = _a.prefixCls,
            separator = _a.separator,
            children = _a.children,
            restProps = __rest(_a, ["prefixCls", "separator", "children"]);
        var link = void 0;
        if ('href' in this.props) {
            link = _react2["default"].createElement(
                'a',
                (0, _extends3["default"])({ className: prefixCls + '-link' }, restProps),
                children
            );
        } else {
            link = _react2["default"].createElement(
                'span',
                (0, _extends3["default"])({ className: prefixCls + '-link' }, restProps),
                children
            );
        }
        return _react2["default"].createElement(
            'span',
            null,
            link,
            _react2["default"].createElement(
                'span',
                { className: prefixCls + '-separator' },
                separator
            )
        );
    };

    return BreadcrumbItem;
}(_react2["default"].Component);

exports["default"] = BreadcrumbItem;

BreadcrumbItem.__ANT_BREADCRUMB_ITEM = true;
BreadcrumbItem.defaultProps = {
    prefixCls: 'ant-breadcrumb',
    separator: '/'
};
BreadcrumbItem.propTypes = {
    prefixCls: _react.PropTypes.string,
    separator: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
    href: _react.PropTypes.string
};
module.exports = exports['default'];