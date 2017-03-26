'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

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

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _radioButton = require('./radioButton');

var _radioButton2 = _interopRequireDefault(_radioButton);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getCheckedValue(children) {
    var value = null;
    var matched = false;
    _react2["default"].Children.forEach(children, function (radio) {
        if (radio && radio.props && radio.props.checked) {
            value = radio.props.value;
            matched = true;
        }
    });
    return matched ? { value: value } : undefined;
}

var RadioGroup = function (_React$Component) {
    (0, _inherits3["default"])(RadioGroup, _React$Component);

    function RadioGroup(props) {
        (0, _classCallCheck3["default"])(this, RadioGroup);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onRadioChange = function (ev) {
            var lastValue = _this.state.value;
            var value = ev.target.value;

            if (!('value' in _this.props)) {
                _this.setState({
                    value: value
                });
            }
            var onChange = _this.props.onChange;
            if (onChange && value !== lastValue) {
                onChange(ev);
            }
        };
        var value = void 0;
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        } else {
            var checkedValue = getCheckedValue(props.children);
            value = checkedValue && checkedValue.value;
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({
                value: nextProps.value
            });
        } else {
            var checkedValue = getCheckedValue(nextProps.children);
            if (checkedValue) {
                this.setState({
                    value: checkedValue.value
                });
            }
        }
    };

    RadioGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    RadioGroup.prototype.render = function render() {
        var _this2 = this;

        var props = this.props;
        var children = !props.children ? [] : _react2["default"].Children.map(props.children, function (radio) {
            if (radio && (radio.type === _radio2["default"] || radio.type === _radioButton2["default"]) && radio.props) {
                return _react2["default"].cloneElement(radio, (0, _objectAssign2["default"])({}, radio.props, {
                    onChange: _this2.onRadioChange,
                    checked: _this2.state.value === radio.props.value,
                    disabled: radio.props.disabled || _this2.props.disabled
                }));
            }
            return radio;
        });
        var _props$prefixCls = props.prefixCls,
            prefixCls = _props$prefixCls === undefined ? 'ant-radio-group' : _props$prefixCls,
            _props$className = props.className,
            className = _props$className === undefined ? '' : _props$className;

        var classString = (0, _classnames2["default"])(prefixCls, (0, _defineProperty3["default"])({}, prefixCls + '-' + props.size, props.size), className);
        return _react2["default"].createElement(
            'div',
            { className: classString, style: props.style, onMouseEnter: props.onMouseEnter, onMouseLeave: props.onMouseLeave },
            children
        );
    };

    return RadioGroup;
}(_react2["default"].Component);

exports["default"] = RadioGroup;

RadioGroup.defaultProps = {
    disabled: false
};
module.exports = exports['default'];