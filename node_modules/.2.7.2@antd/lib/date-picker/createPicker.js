'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

exports["default"] = createPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _getLocale = require('../_util/getLocale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function createPicker(TheCalendar) {
    // use class typescript error
    var CalenderWrapper = _react2["default"].createClass({
        displayName: 'CalenderWrapper',

        contextTypes: {
            antLocale: _react2["default"].PropTypes.object
        },
        getDefaultProps: function getDefaultProps() {
            return {
                prefixCls: 'ant-calendar',
                allowClear: true,
                showToday: true
            };
        },
        getInitialState: function getInitialState() {
            var props = this.props;
            var value = props.value || props.defaultValue;
            if (value && !_moment2["default"].isMoment(value)) {
                throw new Error('The value/defaultValue of DatePicker or MonthPicker must be ' + 'a moment object after `antd@2.0`, see: http://u.ant.design/date-picker-value');
            }
            return {
                value: value,
                tempValue: undefined
            };
        },
        componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
            if ('value' in nextProps) {
                this.setState({
                    value: nextProps.value,
                    tempValue: nextProps.value
                });
            }
        },
        clearSelection: function clearSelection(e) {
            e.preventDefault();
            e.stopPropagation();
            this.handleChange(null);
        },
        handleChange: function handleChange(value) {
            var props = this.props;
            if (!('value' in props)) {
                this.setState({ value: value });
            }
            props.onChange(value, value && value.format(props.format) || '');
        },
        handleTempChange: function handleTempChange(tempValue) {
            this.setState({ tempValue: tempValue });
        },

        // Clear temp value and trigger onChange when hide DatePicker[showTime] panel
        handleOpenChange: function handleOpenChange(open) {
            var _props = this.props,
                showTime = _props.showTime,
                onOpenChange = _props.onOpenChange,
                onChange = _props.onChange,
                format = _props.format;

            if (!open) {
                // tricky code to avoid triggering onChange multiple times
                // when click `Now` button
                var tempValue = void 0;
                this.setState(function (prevState) {
                    tempValue = prevState.tempValue;
                    var nextState = { tempValue: undefined };
                    if (showTime && tempValue) {
                        nextState.value = tempValue;
                        onChange(tempValue, tempValue && tempValue.format(format) || '');
                    }
                    return nextState;
                });
            }
            if (onOpenChange) {
                onOpenChange(open);
            }
        },
        render: function render() {
            var _classNames,
                _this = this;

            var _state = this.state,
                value = _state.value,
                tempValue = _state.tempValue;

            var props = (0, _omit2["default"])(this.props, ['onChange']);
            var prefixCls = props.prefixCls,
                locale = props.locale;

            var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;
            var disabledTime = props.showTime ? props.disabledTime : null;
            var calendarClassName = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-time', props.showTime), (0, _defineProperty3["default"])(_classNames, prefixCls + '-month', _MonthCalendar2["default"] === TheCalendar), _classNames));
            // 需要选择时间时，点击 ok 时才触发 onChange
            var pickerChangeHandler = {};
            var calendarHandler = {};
            if (props.showTime) {
                calendarHandler = {
                    // fix https://github.com/ant-design/ant-design/issues/1902
                    onSelect: function onSelect(selectedValue) {
                        _this.handleTempChange(selectedValue);
                    }
                };
            } else {
                pickerChangeHandler = {
                    onChange: this.handleChange
                };
            }
            var calendar = _react2["default"].createElement(TheCalendar, (0, _extends3["default"])({}, calendarHandler, { disabledDate: props.disabledDate, disabledTime: disabledTime, locale: locale.lang, timePicker: props.timePicker, defaultValue: props.defaultPickerValue || (0, _moment2["default"])(), dateInputPlaceholder: placeholder, prefixCls: prefixCls, className: calendarClassName, onOk: props.onOk, format: props.format, showToday: props.showToday, monthCellContentRender: props.monthCellContentRender }));
            // default width for showTime
            var pickerStyle = {};
            if (props.showTime) {
                pickerStyle.minWidth = 154;
            }
            var clearIcon = !props.disabled && props.allowClear && value ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle', className: prefixCls + '-picker-clear', onClick: this.clearSelection }) : null;
            var input = function input(_ref) {
                var inputValue = _ref.value;
                return _react2["default"].createElement(
                    'span',
                    null,
                    _react2["default"].createElement('input', { disabled: props.disabled, readOnly: true, value: inputValue && inputValue.format(props.format) || '', placeholder: placeholder, className: props.pickerInputClass }),
                    clearIcon,
                    _react2["default"].createElement('span', { className: prefixCls + '-picker-icon' })
                );
            };
            var pickerValue = tempValue || value;
            var localeCode = (0, _getLocale.getLocaleCode)(this.context);
            if (pickerValue && localeCode) {
                pickerValue.locale(localeCode);
            }
            return _react2["default"].createElement(
                'span',
                { className: props.pickerClass, style: (0, _objectAssign2["default"])({}, props.style, pickerStyle) },
                _react2["default"].createElement(
                    _Picker2["default"],
                    (0, _extends3["default"])({}, props, pickerChangeHandler, { onOpenChange: this.handleOpenChange, calendar: calendar, value: pickerValue, prefixCls: prefixCls + '-picker-container', style: props.popupStyle }),
                    input
                )
            );
        }
    });
    return CalenderWrapper;
}
module.exports = exports['default'];