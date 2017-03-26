'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = require('./Combobox');

var _Combobox2 = _interopRequireDefault(_Combobox);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var arr = [];
  for (var value = 0; value < length; value++) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = _react2["default"].createClass({
  displayName: 'Panel',

  propTypes: {
    clearText: _react.PropTypes.string,
    prefixCls: _react.PropTypes.string,
    className: _react.PropTypes.string,
    defaultOpenValue: _react.PropTypes.object,
    value: _react.PropTypes.object,
    placeholder: _react.PropTypes.string,
    format: _react.PropTypes.string,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    hideDisabledOptions: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onEsc: _react.PropTypes.func,
    allowEmpty: _react.PropTypes.bool,
    showHour: _react.PropTypes.bool,
    showMinute: _react.PropTypes.bool,
    showSecond: _react.PropTypes.bool,
    onClear: _react.PropTypes.func,
    addon: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-time-picker-panel',
      onChange: noop,
      onClear: noop,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      defaultOpenValue: (0, _moment2["default"])(),
      addon: noop
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      selectionRange: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    if (value) {
      this.setState({
        value: value
      });
    }
  },
  onChange: function onChange(newValue) {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  },
  onClear: function onClear() {
    this.props.onClear();
  },
  onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
    this.setState({ currentSelectPanel: currentSelectPanel });
  },
  close: function close() {
    this.props.onEsc();
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        className = _props.className,
        placeholder = _props.placeholder,
        disabledHours = _props.disabledHours,
        disabledMinutes = _props.disabledMinutes,
        disabledSeconds = _props.disabledSeconds,
        hideDisabledOptions = _props.hideDisabledOptions,
        allowEmpty = _props.allowEmpty,
        showHour = _props.showHour,
        showMinute = _props.showMinute,
        showSecond = _props.showSecond,
        format = _props.format,
        defaultOpenValue = _props.defaultOpenValue,
        clearText = _props.clearText,
        onEsc = _props.onEsc,
        addon = _props.addon;
    var _state = this.state,
        value = _state.value,
        currentSelectPanel = _state.currentSelectPanel;

    var disabledHourOptions = disabledHours();
    var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);

    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-inner', true), (0, _defineProperty3["default"])(_classNames, className, !!className), _classNames)) },
      _react2["default"].createElement(_Header2["default"], {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: defaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        onClear: this.onClear,
        allowEmpty: allowEmpty
      }),
      _react2["default"].createElement(_Combobox2["default"], {
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: defaultOpenValue,
        format: format,
        onChange: this.onChange,
        showHour: showHour,
        showMinute: showMinute,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
      }),
      addon(this)
    );
  }
});

exports["default"] = Panel;
module.exports = exports['default'];