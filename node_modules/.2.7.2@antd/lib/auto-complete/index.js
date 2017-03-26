'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _rcSelect = require('rc-select');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

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

;

var InputElement = function (_React$Component) {
    (0, _inherits3["default"])(InputElement, _React$Component);

    function InputElement() {
        (0, _classCallCheck3["default"])(this, InputElement);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));

        _this.focus = function () {
            (0, _reactDom.findDOMNode)(_this.ele).focus();
        };
        _this.blur = function () {
            (0, _reactDom.findDOMNode)(_this.ele).blur();
        };
        return _this;
    }

    InputElement.prototype.render = function render() {
        var _this2 = this;

        return _react2["default"].cloneElement(this.props.children, __assign({}, this.props, { ref: function ref(ele) {
                return _this2.ele = ele;
            } }), null);
    };

    return InputElement;
}(_react2["default"].Component);

var AutoComplete = function (_React$Component2) {
    (0, _inherits3["default"])(AutoComplete, _React$Component2);

    function AutoComplete() {
        (0, _classCallCheck3["default"])(this, AutoComplete);

        var _this3 = (0, _possibleConstructorReturn3["default"])(this, _React$Component2.apply(this, arguments));

        _this3.getInputElement = function () {
            var children = _this3.props.children;

            var element = children && _react2["default"].isValidElement(children) && children.type !== _rcSelect.Option ? _react2["default"].Children.only(_this3.props.children) : _react2["default"].createElement(_input2["default"], null);
            return _react2["default"].createElement(
                InputElement,
                { className: 'ant-input' },
                element
            );
        };
        return _this3;
    }

    AutoComplete.prototype.render = function render() {
        var _classNames;

        var _props = this.props,
            size = _props.size,
            _props$className = _props.className,
            className = _props$className === undefined ? '' : _props$className,
            notFoundContent = _props.notFoundContent,
            prefixCls = _props.prefixCls,
            optionLabelProp = _props.optionLabelProp,
            dataSource = _props.dataSource,
            children = _props.children;

        var cls = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-lg', size === 'large'), (0, _defineProperty3["default"])(_classNames, prefixCls + '-sm', size === 'small'), (0, _defineProperty3["default"])(_classNames, className, !!className), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-search', true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-auto-complete', true), _classNames));
        var options = void 0;
        var childArray = _react2["default"].Children.toArray(children);
        if (childArray.length && childArray[0].type === _rcSelect.Option) {
            options = children;
        } else {
            options = dataSource ? dataSource.map(function (item) {
                if (_react2["default"].isValidElement(item)) {
                    return item;
                }
                switch (typeof item === 'undefined' ? 'undefined' : (0, _typeof3["default"])(item)) {
                    case 'string':
                        return _react2["default"].createElement(
                            _rcSelect.Option,
                            { key: item },
                            item
                        );
                    case 'object':
                        return _react2["default"].createElement(
                            _rcSelect.Option,
                            { key: item.value },
                            item.text
                        );
                    default:
                        throw new Error('AutoComplete[dataSource] only supports type `string[] | Object[]`.');
                }
            }) : [];
        }
        return _react2["default"].createElement(
            _select2["default"],
            (0, _extends3["default"])({}, this.props, { className: cls, optionLabelProp: optionLabelProp, combobox: true, getInputElement: this.getInputElement, notFoundContent: notFoundContent }),
            options
        );
    };

    return AutoComplete;
}(_react2["default"].Component);

exports["default"] = AutoComplete;

AutoComplete.Option = _rcSelect.Option;
AutoComplete.OptGroup = _rcSelect.OptGroup;
AutoComplete.defaultProps = {
    prefixCls: 'ant-select',
    transitionName: 'slide-up',
    optionLabelProp: 'children',
    choiceTransitionName: 'zoom',
    showSearch: false
};
AutoComplete.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];