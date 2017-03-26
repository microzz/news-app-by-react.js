"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require("babel-runtime/helpers/defineProperty");

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = require("rc-util/lib/Dom/addEventListener");

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _shallowequal = require("shallowequal");

var _shallowequal2 = _interopRequireDefault(_shallowequal);

var _omit = require("omit.js");

var _omit2 = _interopRequireDefault(_omit);

var _getScroll = require("../_util/getScroll");

var _getScroll2 = _interopRequireDefault(_getScroll);

var _throttleByAnimationFrame = require("../_util/throttleByAnimationFrame");

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
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : (0, _typeof3["default"])(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function getTargetRect(target) {
    return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}
function getOffset(element, target) {
    var elemRect = element.getBoundingClientRect();
    var targetRect = getTargetRect(target);
    var scrollTop = (0, _getScroll2["default"])(target, true);
    var scrollLeft = (0, _getScroll2["default"])(target, false);
    var docElem = window.document.body;
    var clientTop = docElem.clientTop || 0;
    var clientLeft = docElem.clientLeft || 0;
    return {
        top: elemRect.top - targetRect.top + scrollTop - clientTop,
        left: elemRect.left - targetRect.left + scrollLeft - clientLeft
    };
}
function noop() {}
function getDefaultTarget() {
    return typeof window !== 'undefined' ? window : null;
}
;

var Affix = function (_React$Component) {
    (0, _inherits3["default"])(Affix, _React$Component);

    function Affix(props) {
        (0, _classCallCheck3["default"])(this, Affix);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            affixStyle: null,
            placeholderStyle: null
        };
        return _this;
    }

    Affix.prototype.setAffixStyle = function setAffixStyle(e, affixStyle) {
        var _this2 = this;

        var _props = this.props,
            _props$onChange = _props.onChange,
            onChange = _props$onChange === undefined ? noop : _props$onChange,
            _props$target = _props.target,
            target = _props$target === undefined ? getDefaultTarget : _props$target;

        var originalAffixStyle = this.state.affixStyle;
        var isWindow = target() === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if ((0, _shallowequal2["default"])(affixStyle, originalAffixStyle)) {
            return;
        }
        this.setState({ affixStyle: affixStyle }, function () {
            var affixed = !!_this2.state.affixStyle;
            if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
                onChange(affixed);
            }
        });
    };

    Affix.prototype.setPlaceholderStyle = function setPlaceholderStyle(placeholderStyle) {
        var originalPlaceholderStyle = this.state.placeholderStyle;
        if ((0, _shallowequal2["default"])(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        this.setState({ placeholderStyle: placeholderStyle });
    };

    Affix.prototype.updatePosition = function updatePosition(e) {
        var _props2 = this.props,
            offsetTop = _props2.offsetTop,
            offsetBottom = _props2.offsetBottom,
            offset = _props2.offset,
            _props2$target = _props2.target,
            target = _props2$target === undefined ? getDefaultTarget : _props2$target;

        var targetNode = target();
        // Backwards support
        offsetTop = offsetTop || offset;
        var scrollTop = (0, _getScroll2["default"])(targetNode, true);
        var affixNode = _reactDom2["default"].findDOMNode(this);
        var elemOffset = getOffset(affixNode, targetNode);
        var elemSize = {
            width: this.refs.fixedNode.offsetWidth,
            height: this.refs.fixedNode.offsetHeight
        };
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        } else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof offsetBottom === 'number';
        }
        var targetRect = getTargetRect(targetNode);
        var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
        if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
            // Fixed Top
            this.setAffixStyle(e, {
                position: 'fixed',
                top: targetRect.top + offsetTop,
                left: targetRect.left + elemOffset.left,
                width: affixNode.offsetWidth
            });
            this.setPlaceholderStyle({
                width: affixNode.offsetWidth,
                height: affixNode.offsetHeight
            });
        } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
            // Fixed Bottom
            var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + offsetBottom,
                left: targetRect.left + elemOffset.left,
                width: affixNode.offsetWidth
            });
            this.setPlaceholderStyle({
                width: affixNode.offsetWidth,
                height: affixNode.offsetHeight
            });
        } else {
            var affixStyle = this.state.affixStyle;

            if (e.type === 'resize' && affixStyle && affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, __assign({}, affixStyle, { width: affixNode.offsetWidth }));
            } else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    };

    Affix.prototype.componentDidMount = function componentDidMount() {
        var _this3 = this;

        var target = this.props.target || getDefaultTarget;
        // Wait for parent component ref has its value
        this.timeout = setTimeout(function () {
            _this3.setTargetEventListeners(target);
        });
    };

    Affix.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (this.props.target !== nextProps.target) {
            this.clearScrollEventListeners();
            this.setTargetEventListeners(nextProps.target);
            // Mock Event object.
            this.updatePosition({});
        }
    };

    Affix.prototype.componentWillUnmount = function componentWillUnmount() {
        this.clearScrollEventListeners();
        clearTimeout(this.timeout);
        this.updatePosition.cancel();
    };

    Affix.prototype.setTargetEventListeners = function setTargetEventListeners(getTarget) {
        var target = getTarget();
        if (!target) {
            return;
        }
        this.clearScrollEventListeners();
        this.scrollEvent = (0, _addEventListener2["default"])(target, 'scroll', this.updatePosition);
        this.resizeEvent = (0, _addEventListener2["default"])(target, 'resize', this.updatePosition);
    };

    Affix.prototype.clearScrollEventListeners = function clearScrollEventListeners() {
        var _this4 = this;

        ['scrollEvent', 'resizeEvent'].forEach(function (name) {
            if (_this4[name]) {
                _this4[name].remove();
            }
        });
    };

    Affix.prototype.render = function render() {
        var className = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, this.props.prefixCls || 'ant-affix', this.state.affixStyle));
        var props = (0, _omit2["default"])(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target']);
        var placeholderStyle = __assign({}, this.state.placeholderStyle, this.props.style);
        return _react2["default"].createElement(
            "div",
            (0, _extends3["default"])({}, props, { style: placeholderStyle }),
            _react2["default"].createElement(
                "div",
                { className: className, ref: "fixedNode", style: this.state.affixStyle },
                this.props.children
            )
        );
    };

    return Affix;
}(_react2["default"].Component);

exports["default"] = Affix;

Affix.propTypes = {
    offsetTop: _react2["default"].PropTypes.number,
    offsetBottom: _react2["default"].PropTypes.number,
    target: _react2["default"].PropTypes.func
};
__decorate([(0, _throttleByAnimationFrame.throttleByAnimationFrameDecorator)()], Affix.prototype, "updatePosition", null);
module.exports = exports['default'];