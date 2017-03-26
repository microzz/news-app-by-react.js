'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _mixin = require('./mixin');

var _mixin2 = _interopRequireDefault(_mixin);

var _InputHandler = require('./InputHandler');

var _InputHandler2 = _interopRequireDefault(_InputHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function preventDefault(e) {
  e.preventDefault();
}

var InputNumber = _react2["default"].createClass({
  displayName: 'InputNumber',

  propTypes: {
    focusOnUpDown: _react.PropTypes.bool,
    onChange: _react.PropTypes.func,
    onKeyDown: _react.PropTypes.func,
    onKeyUp: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    disabled: _react.PropTypes.bool,
    onFocus: _react.PropTypes.func,
    onBlur: _react.PropTypes.func,
    readOnly: _react.PropTypes.bool,
    max: _react.PropTypes.number,
    min: _react.PropTypes.number,
    step: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string])
  },

  mixins: [_mixin2["default"]],

  getDefaultProps: function getDefaultProps() {
    return {
      focusOnUpDown: true,
      prefixCls: 'rc-input-number'
    };
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate();
  },
  componentDidUpdate: function componentDidUpdate() {
    if (this.props.focusOnUpDown && this.state.focused && document.activeElement !== this.refs.input) {
      this.focus();
    }
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 38) {
      this.up(e);
    } else if (e.keyCode === 40) {
      this.down(e);
    }
    var onKeyDown = this.props.onKeyDown;

    if (onKeyDown) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      onKeyDown.apply(undefined, [e].concat(args));
    }
  },
  onKeyUp: function onKeyUp(e) {
    this.stop();
    var onKeyUp = this.props.onKeyUp;

    if (onKeyUp) {
      for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      onKeyUp.apply(undefined, [e].concat(args));
    }
  },
  getValueFromEvent: function getValueFromEvent(e) {
    return e.target.value;
  },
  focus: function focus() {
    this.refs.input.focus();
  },
  render: function render() {
    var _classNames;

    var props = (0, _extends3["default"])({}, this.props);
    var prefixCls = props.prefixCls,
        disabled = props.disabled,
        readOnly = props.readOnly;

    var classes = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls, true), (0, _defineProperty3["default"])(_classNames, props.className, !!props.className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-disabled', disabled), (0, _defineProperty3["default"])(_classNames, prefixCls + '-focused', this.state.focused), _classNames));
    var upDisabledClass = '';
    var downDisabledClass = '';
    var value = this.state.value;
    if (!isNaN(value)) {
      var val = Number(value);
      if (val >= props.max) {
        upDisabledClass = prefixCls + '-handler-up-disabled';
      }
      if (val <= props.min) {
        downDisabledClass = prefixCls + '-handler-down-disabled';
      }
    } else {
      upDisabledClass = prefixCls + '-handler-up-disabled';
      downDisabledClass = prefixCls + '-handler-down-disabled';
    }

    var editable = !props.readOnly && !props.disabled;

    // focus state, show input value
    // unfocus state, show valid value
    var inputDisplayValue = void 0;
    if (this.state.focused) {
      inputDisplayValue = this.state.inputValue;
    } else {
      inputDisplayValue = this.toPrecisionAsStep(this.state.value);
    }

    if (inputDisplayValue === undefined) {
      inputDisplayValue = '';
    }

    // ref for test
    return _react2["default"].createElement(
      'div',
      { className: classes, style: props.style },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-handler-wrap' },
        _react2["default"].createElement(
          _InputHandler2["default"],
          {
            ref: 'up',
            disabled: !!upDisabledClass || disabled || readOnly,
            prefixCls: prefixCls,
            unselectable: 'unselectable',
            onTouchStart: editable && !upDisabledClass ? this.up : noop,
            onTouchEnd: this.stop,
            onMouseDown: editable && !upDisabledClass ? this.up : noop,
            onMouseUp: this.stop,
            onMouseLeave: this.stop,
            className: prefixCls + '-handler ' + prefixCls + '-handler-up ' + upDisabledClass
          },
          _react2["default"].createElement('span', {
            unselectable: 'unselectable',
            className: prefixCls + '-handler-up-inner',
            onClick: preventDefault
          })
        ),
        _react2["default"].createElement(
          _InputHandler2["default"],
          {
            ref: 'down',
            disabled: !!downDisabledClass || disabled || readOnly,
            prefixCls: prefixCls,
            unselectable: 'unselectable',
            onTouchStart: editable && !downDisabledClass ? this.down : noop,
            onTouchEnd: this.stop,
            onMouseDown: editable && !downDisabledClass ? this.down : noop,
            onMouseUp: this.stop,
            onMouseLeave: this.stop,
            className: prefixCls + '-handler ' + prefixCls + '-handler-down ' + downDisabledClass
          },
          _react2["default"].createElement('span', {
            unselectable: 'unselectable',
            className: prefixCls + '-handler-down-inner',
            onClick: preventDefault
          })
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-input-wrap' },
        _react2["default"].createElement('input', {
          type: props.type,
          placeholder: props.placeholder,
          onClick: props.onClick,
          className: prefixCls + '-input',
          autoComplete: 'off',
          onFocus: this.onFocus,
          onBlur: this.onBlur,
          onKeyDown: this.onKeyDown,
          onKeyUp: this.onKeyUp,
          autoFocus: props.autoFocus,
          readOnly: props.readOnly,
          disabled: props.disabled,
          max: props.max,
          min: props.min,
          name: props.name,
          onChange: this.onChange,
          ref: 'input',
          value: inputDisplayValue
        })
      )
    );
  }
});

exports["default"] = InputNumber;
module.exports = exports['default'];