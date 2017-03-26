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

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _TimePicker = require('rc-time-picker/lib/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TimePicker = function (_React$Component) {
    (0, _inherits3["default"])(TimePicker, _React$Component);

    function TimePicker(props) {
        (0, _classCallCheck3["default"])(this, TimePicker);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleChange = function (value) {
            if (!('value' in _this.props)) {
                _this.setState({ value: value });
            }
            var _this$props = _this.props,
                onChange = _this$props.onChange,
                _this$props$format = _this$props.format,
                format = _this$props$format === undefined ? 'HH:mm:ss' : _this$props$format;

            if (onChange) {
                onChange(value, value && value.format(format) || '');
            }
        };
        var value = props.value || props.defaultValue;
        if (value && !_moment2["default"].isMoment(value)) {
            throw new Error('The value/defaultValue of TimePicker must be a moment object after `antd@2.0`, ' + 'see: http://u.ant.design/time-picker-value');
        }
        _this.state = {
            value: value
        };
        return _this;
    }

    TimePicker.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('value' in nextProps) {
            this.setState({ value: nextProps.value });
        }
    };

    TimePicker.prototype.getLocale = function getLocale() {
        var antLocale = this.context.antLocale;
        var timePickerLocale = antLocale && antLocale.TimePicker || _zh_CN2["default"];
        return timePickerLocale;
    };

    TimePicker.prototype.render = function render() {
        var props = (0, _objectAssign2["default"])({ format: 'HH:mm:ss' }, this.props);
        delete props.defaultValue;
        var className = (0, _classnames2["default"])(props.className, (0, _defineProperty3["default"])({}, props.prefixCls + '-' + props.size, !!props.size));
        var addon = function addon(panel) {
            return props.addon ? _react2["default"].createElement(
                'div',
                { className: props.prefixCls + '-panel-addon' },
                props.addon(panel)
            ) : null;
        };
        return _react2["default"].createElement(_TimePicker2["default"], (0, _extends3["default"])({}, props, { className: className, value: this.state.value, placeholder: props.placeholder === undefined ? this.getLocale().placeholder : props.placeholder, showHour: props.format.indexOf('HH') > -1, showMinute: props.format.indexOf('mm') > -1, showSecond: props.format.indexOf('ss') > -1, onChange: this.handleChange, addon: addon }));
    };

    return TimePicker;
}(_react2["default"].Component);

exports["default"] = TimePicker;

TimePicker.defaultProps = {
    prefixCls: 'ant-time-picker',
    align: {
        offset: [0, -2]
    },
    disabled: false,
    disabledHours: undefined,
    disabledMinutes: undefined,
    disabledSeconds: undefined,
    hideDisabledOptions: false,
    placement: 'bottomLeft',
    transitionName: 'slide-up'
};
TimePicker.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];