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

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var Spin = function (_React$Component) {
    (0, _inherits3["default"])(Spin, _React$Component);

    function Spin(props) {
        (0, _classCallCheck3["default"])(this, Spin);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        var spinning = props.spinning;
        _this.state = {
            spinning: spinning
        };
        return _this;
    }

    Spin.prototype.isNestedPattern = function isNestedPattern() {
        return !!(this.props && this.props.children);
    };

    Spin.prototype.componentDidMount = function componentDidMount() {
        if (!(0, _isCssAnimationSupported2["default"])()) {
            // Show text in IE8/9
            (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
        }
    };

    Spin.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (this.delayTimeout) {
            clearTimeout(this.delayTimeout);
        }
    };

    Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        var currentSpinning = this.props.spinning;
        var spinning = nextProps.spinning;
        var delay = this.props.delay;

        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        if (currentSpinning && !spinning) {
            this.debounceTimeout = setTimeout(function () {
                return _this2.setState({ spinning: spinning });
            }, 300);
            if (this.delayTimeout) {
                clearTimeout(this.delayTimeout);
            }
        } else {
            if (spinning && delay && !isNaN(Number(delay))) {
                this.delayTimeout = setTimeout(function () {
                    return _this2.setState({ spinning: spinning });
                }, delay);
            } else {
                this.setState({ spinning: spinning });
            }
        }
    };

    Spin.prototype.render = function render() {
        var _classNames;

        var _a = this.props,
            className = _a.className,
            size = _a.size,
            prefixCls = _a.prefixCls,
            tip = _a.tip,
            restProps = __rest(_a, ["className", "size", "prefixCls", "tip"]);var spinning = this.state.spinning;

        var spinClassName = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-spinning', spinning), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-text', !!tip), _classNames), className);
        // fix https://fb.me/react-unknown-prop
        var divProps = (0, _omit2["default"])(restProps, ['spinning', 'delay']);
        var spinElement = _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, divProps, { className: spinClassName }),
            _react2["default"].createElement(
                'span',
                { className: prefixCls + '-dot' },
                _react2["default"].createElement('i', null),
                _react2["default"].createElement('i', null),
                _react2["default"].createElement('i', null),
                _react2["default"].createElement('i', null)
            ),
            tip ? _react2["default"].createElement(
                'div',
                { className: prefixCls + '-text' },
                tip
            ) : null
        );
        if (this.isNestedPattern()) {
            var _classNames2;

            var containerClassName = (0, _classnames2["default"])((_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-container', true), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-blur', spinning), _classNames2));
            return _react2["default"].createElement(
                _rcAnimate2["default"],
                (0, _extends3["default"])({}, divProps, { component: 'div', className: prefixCls + '-nested-loading', style: null, transitionName: 'fade' }),
                spinning && _react2["default"].createElement(
                    'div',
                    { key: 'loading' },
                    spinElement
                ),
                _react2["default"].createElement(
                    'div',
                    { className: containerClassName, key: 'container' },
                    this.props.children
                )
            );
        }
        return spinElement;
    };

    return Spin;
}(_react2["default"].Component);

exports["default"] = Spin;

Spin.defaultProps = {
    prefixCls: 'ant-spin',
    spinning: true,
    size: 'default'
};
Spin.propTypes = {
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    spinning: _react.PropTypes.bool,
    size: _react.PropTypes.oneOf(['small', 'default', 'large'])
};
module.exports = exports['default'];