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

var _calculateNodeHeight = require('./calculateNodeHeight');

var _calculateNodeHeight2 = _interopRequireDefault(_calculateNodeHeight);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}
function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}
function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}
;

var Input = function (_Component) {
    (0, _inherits3["default"])(Input, _Component);

    function Input() {
        (0, _classCallCheck3["default"])(this, Input);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _Component.apply(this, arguments));

        _this.state = {
            textareaStyles: null,
            isFocus: false
        };
        _this.handleFocus = function (e) {
            var onFocus = _this.props.onFocus;

            _this.setState({
                isFocus: true
            });
            if (onFocus) {
                onFocus(e);
            }
        };
        _this.handleBlur = function (e) {
            var onBlur = _this.props.onBlur;

            _this.setState({
                isFocus: false
            });
            if (onBlur) {
                onBlur(e);
            }
        };
        _this.handleKeyDown = function (e) {
            var _this$props = _this.props,
                onPressEnter = _this$props.onPressEnter,
                onKeyDown = _this$props.onKeyDown;

            if (e.keyCode === 13 && onPressEnter) {
                onPressEnter(e);
            }
            if (onKeyDown) {
                onKeyDown(e);
            }
        };
        _this.handleTextareaChange = function (e) {
            if (!('value' in _this.props)) {
                _this.resizeTextarea();
            }
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange(e);
            }
        };
        _this.resizeTextarea = function () {
            var _this$props2 = _this.props,
                type = _this$props2.type,
                autosize = _this$props2.autosize;

            if (type !== 'textarea' || !autosize || !_this.refs.input) {
                return;
            }
            var minRows = autosize ? autosize.minRows : null;
            var maxRows = autosize ? autosize.maxRows : null;
            var textareaStyles = (0, _calculateNodeHeight2["default"])(_this.refs.input, false, minRows, maxRows);
            _this.setState({ textareaStyles: textareaStyles });
        };
        return _this;
    }

    Input.prototype.componentDidMount = function componentDidMount() {
        this.resizeTextarea();
    };

    Input.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        // Re-render with the new content then recalculate the height as required.
        if (this.props.value !== nextProps.value) {
            if (this.nextFrameActionId) {
                clearNextFrameAction(this.nextFrameActionId);
            }
            this.nextFrameActionId = onNextFrame(this.resizeTextarea);
        }
    };

    Input.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
        var props = this.props,
            state = this.state,
            refs = this.refs;

        var preHasPresuffix = prevProps.prefix || prevProps.suffix;
        var curHasPresuffix = props.prefix || props.suffix;
        if (state.isFocus && preHasPresuffix !== curHasPresuffix) {
            refs.input.focus();
        }
    };

    Input.prototype.focus = function focus() {
        this.refs.input.focus();
    };

    Input.prototype.renderLabeledInput = function renderLabeledInput(children) {
        var _classNames;

        var props = this.props;
        // Not wrap when there is not addons
        if (props.type === 'textarea' || !props.addonBefore && !props.addonAfter) {
            return children;
        }
        var wrapperClassName = props.prefixCls + '-group';
        var addonClassName = wrapperClassName + '-addon';
        var addonBefore = props.addonBefore ? _react2["default"].createElement(
            'span',
            { className: addonClassName },
            props.addonBefore
        ) : null;
        var addonAfter = props.addonAfter ? _react2["default"].createElement(
            'span',
            { className: addonClassName },
            props.addonAfter
        ) : null;
        var className = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, props.prefixCls + '-wrapper', true), (0, _defineProperty3["default"])(_classNames, wrapperClassName, addonBefore || addonAfter), _classNames));
        return _react2["default"].createElement(
            'span',
            { className: className },
            addonBefore,
            children,
            addonAfter
        );
    };

    Input.prototype.renderLabeledIcon = function renderLabeledIcon(children) {
        var props = this.props;

        if (props.type === 'textarea' || !props.prefix && !props.suffix) {
            return children;
        }
        var prefix = props.prefix ? _react2["default"].createElement(
            'span',
            { className: props.prefixCls + '-prefix' },
            props.prefix
        ) : null;
        var suffix = props.suffix ? _react2["default"].createElement(
            'span',
            { className: props.prefixCls + '-suffix' },
            props.suffix
        ) : null;
        return _react2["default"].createElement(
            'span',
            { className: props.prefixCls + '-preSuffix-wrapper', style: props.style },
            prefix,
            (0, _react.cloneElement)(children, { style: null }),
            suffix
        );
    };

    Input.prototype.renderInput = function renderInput() {
        var _classNames2;

        var props = (0, _objectAssign2["default"])({}, this.props);
        // Fix https://fb.me/react-unknown-prop
        var otherProps = (0, _omit2["default"])(this.props, ['prefixCls', 'onPressEnter', 'autosize', 'addonBefore', 'addonAfter', 'prefix', 'suffix']);
        var prefixCls = props.prefixCls;
        if (!props.type) {
            return props.children;
        }
        var inputClassName = (0, _classnames2["default"])(prefixCls, (_classNames2 = {}, (0, _defineProperty3["default"])(_classNames2, prefixCls + '-sm', props.size === 'small'), (0, _defineProperty3["default"])(_classNames2, prefixCls + '-lg', props.size === 'large'), _classNames2), props.className);
        if ('value' in props) {
            otherProps.value = fixControlledValue(props.value);
            // Input elements must be either controlled or uncontrolled,
            // specify either the value prop, or the defaultValue prop, but not both.
            delete otherProps.defaultValue;
        }
        switch (props.type) {
            case 'textarea':
                return _react2["default"].createElement('textarea', (0, _extends3["default"])({}, otherProps, { style: (0, _objectAssign2["default"])({}, props.style, this.state.textareaStyles), className: inputClassName, onKeyDown: this.handleKeyDown, onChange: this.handleTextareaChange, ref: 'input' }));
            default:
                return this.renderLabeledIcon(_react2["default"].createElement('input', (0, _extends3["default"])({}, otherProps, { className: inputClassName, onKeyDown: this.handleKeyDown, onFocus: this.handleFocus, onBlur: this.handleBlur, ref: 'input' })));
        }
    };

    Input.prototype.render = function render() {
        return this.renderLabeledInput(this.renderInput());
    };

    return Input;
}(_react.Component);

exports["default"] = Input;

Input.defaultProps = {
    disabled: false,
    prefixCls: 'ant-input',
    type: 'text',
    autosize: false
};
Input.propTypes = {
    type: _react.PropTypes.string,
    id: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    size: _react.PropTypes.oneOf(['small', 'default', 'large']),
    disabled: _react.PropTypes.bool,
    value: _react.PropTypes.any,
    defaultValue: _react.PropTypes.any,
    className: _react.PropTypes.string,
    addonBefore: _react.PropTypes.node,
    addonAfter: _react.PropTypes.node,
    prefixCls: _react.PropTypes.string,
    autosize: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.object]),
    onPressEnter: _react.PropTypes.func,
    onKeyDown: _react.PropTypes.func,
    onFocus: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    prefix: _react.PropTypes.node,
    suffix: _react.PropTypes.node
};
module.exports = exports['default'];