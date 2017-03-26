'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _row = require('../row');

var _row2 = _interopRequireDefault(_row);

var _col = require('../col');

var _col2 = _interopRequireDefault(_col);

var _constants = require('./constants');

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FormItem = function (_React$Component) {
    (0, _inherits3["default"])(FormItem, _React$Component);

    function FormItem() {
        (0, _classCallCheck3["default"])(this, FormItem);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FormItem.prototype.componentDidMount = function componentDidMount() {
        (0, _warning2["default"])(this.getControls(this.props.children, true).length <= 1, '`Form.Item` cannot generate `validateStatus` and `help` automatically, ' + 'while there are more than one `getFieldDecorator` in it.');
    };

    FormItem.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    FormItem.prototype.getHelpMsg = function getHelpMsg() {
        var context = this.context;
        var props = this.props;
        if (props.help === undefined && context.form) {
            return this.getId() ? (context.form.getFieldError(this.getId()) || []).join(', ') : '';
        }
        return props.help;
    };

    FormItem.prototype.getControls = function getControls(children, recursively) {
        var controls = [];
        var childrenArray = _react2["default"].Children.toArray(children);
        for (var i = 0; i < childrenArray.length; i++) {
            if (!recursively && controls.length > 0) {
                break;
            }
            var child = childrenArray[i];
            if (child.type === FormItem) {
                continue;
            }
            if (!child.props) {
                continue;
            }
            if (_constants.FIELD_META_PROP in child.props) {
                controls.push(child);
            } else if (child.props.children) {
                controls = controls.concat(this.getControls(child.props.children, recursively));
            }
        }
        return controls;
    };

    FormItem.prototype.getOnlyControl = function getOnlyControl() {
        var child = this.getControls(this.props.children, false)[0];
        return child !== undefined ? child : null;
    };

    FormItem.prototype.getChildProp = function getChildProp(prop) {
        var child = this.getOnlyControl();
        return child && child.props && child.props[prop];
    };

    FormItem.prototype.getId = function getId() {
        return this.getChildProp('id');
    };

    FormItem.prototype.getMeta = function getMeta() {
        return this.getChildProp(_constants.FIELD_META_PROP);
    };

    FormItem.prototype.renderHelp = function renderHelp() {
        var prefixCls = this.props.prefixCls;
        var help = this.getHelpMsg();
        return help ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-explain', key: 'help' },
            help
        ) : null;
    };

    FormItem.prototype.renderExtra = function renderExtra() {
        var _props = this.props,
            prefixCls = _props.prefixCls,
            extra = _props.extra;

        return extra ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-extra' },
            extra
        ) : null;
    };

    FormItem.prototype.getValidateStatus = function getValidateStatus() {
        var _context$form = this.context.form,
            isFieldValidating = _context$form.isFieldValidating,
            getFieldError = _context$form.getFieldError,
            getFieldValue = _context$form.getFieldValue;

        var fieldId = this.getId();
        if (!fieldId) {
            return '';
        }
        if (isFieldValidating(fieldId)) {
            return 'validating';
        }
        if (!!getFieldError(fieldId)) {
            return 'error';
        }
        var fieldValue = getFieldValue(fieldId);
        if (fieldValue !== undefined && fieldValue !== null && fieldValue !== '') {
            return 'success';
        }
        return '';
    };

    FormItem.prototype.renderValidateWrapper = function renderValidateWrapper(c1, c2, c3) {
        var classes = '';
        var form = this.context.form;
        var props = this.props;
        var validateStatus = props.validateStatus === undefined && form ? this.getValidateStatus() : props.validateStatus;
        if (validateStatus) {
            classes = (0, _classnames2["default"])({
                'has-feedback': props.hasFeedback,
                'has-success': validateStatus === 'success',
                'has-warning': validateStatus === 'warning',
                'has-error': validateStatus === 'error',
                'is-validating': validateStatus === 'validating'
            });
        }
        return _react2["default"].createElement(
            'div',
            { className: this.props.prefixCls + '-item-control ' + classes },
            c1,
            c2,
            c3
        );
    };

    FormItem.prototype.renderWrapper = function renderWrapper(children) {
        var wrapperCol = this.props.wrapperCol;
        return _react2["default"].createElement(
            _col2["default"],
            (0, _extends3["default"])({ className: this.props.prefixCls + '-item-control-wrapper' }, wrapperCol, { key: 'wrapper' }),
            children
        );
    };

    FormItem.prototype.isRequired = function isRequired() {
        var required = this.props.required;

        if (required !== undefined) {
            return required;
        }
        if (this.context.form) {
            var meta = this.getMeta() || {};
            var validate = meta.validate || [];
            return validate.filter(function (item) {
                return !!item.rules;
            }).some(function (item) {
                return item.rules.some(function (rule) {
                    return rule.required;
                });
            });
        }
        return false;
    };

    FormItem.prototype.renderLabel = function renderLabel() {
        var props = this.props;
        var context = this.context;
        var labelCol = props.labelCol;
        var required = this.isRequired();
        var className = (0, _classnames2["default"])((0, _defineProperty3["default"])({}, props.prefixCls + '-item-required', required));
        var label = props.label;
        // Keep label is original where there should have no colon
        var haveColon = props.colon && !context.vertical;
        // Remove duplicated user input colon
        if (haveColon && typeof label === 'string' && label.trim() !== '') {
            label = props.label.replace(/[：|:]\s*$/, '');
        }
        return props.label ? _react2["default"].createElement(
            _col2["default"],
            (0, _extends3["default"])({}, labelCol, { key: 'label', className: props.prefixCls + '-item-label' }),
            _react2["default"].createElement(
                'label',
                { htmlFor: props.id || this.getId(), className: className },
                label
            )
        ) : null;
    };

    FormItem.prototype.renderChildren = function renderChildren() {
        var props = this.props;
        var children = _react2["default"].Children.map(props.children, function (child) {
            if (child && typeof child.type === 'function' && !child.props.size) {
                return _react2["default"].cloneElement(child, { size: 'large' });
            }
            return child;
        });
        return [this.renderLabel(), this.renderWrapper(this.renderValidateWrapper(children, this.renderHelp(), this.renderExtra()))];
    };

    FormItem.prototype.renderFormItem = function renderFormItem(children) {
        var _itemClassName;

        var props = this.props;
        var prefixCls = props.prefixCls;
        var style = props.style;
        var itemClassName = (_itemClassName = {}, (0, _defineProperty3["default"])(_itemClassName, prefixCls + '-item', true), (0, _defineProperty3["default"])(_itemClassName, prefixCls + '-item-with-help', !!this.getHelpMsg()), (0, _defineProperty3["default"])(_itemClassName, prefixCls + '-item-no-colon', !props.colon), (0, _defineProperty3["default"])(_itemClassName, '' + props.className, !!props.className), _itemClassName);
        return _react2["default"].createElement(
            _row2["default"],
            { className: (0, _classnames2["default"])(itemClassName), style: style },
            children
        );
    };

    FormItem.prototype.render = function render() {
        var children = this.renderChildren();
        return this.renderFormItem(children);
    };

    return FormItem;
}(_react2["default"].Component);

exports["default"] = FormItem;

FormItem.defaultProps = {
    hasFeedback: false,
    prefixCls: 'ant-form',
    colon: true
};
FormItem.propTypes = {
    prefixCls: _react2["default"].PropTypes.string,
    label: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.node]),
    labelCol: _react2["default"].PropTypes.object,
    help: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.node, _react2["default"].PropTypes.bool]),
    validateStatus: _react2["default"].PropTypes.oneOf(['', 'success', 'warning', 'error', 'validating']),
    hasFeedback: _react2["default"].PropTypes.bool,
    wrapperCol: _react2["default"].PropTypes.object,
    className: _react2["default"].PropTypes.string,
    id: _react2["default"].PropTypes.string,
    children: _react2["default"].PropTypes.node,
    colon: _react2["default"].PropTypes.bool
};
FormItem.contextTypes = {
    form: _react2["default"].PropTypes.object,
    vertical: _react2["default"].PropTypes.bool
};
module.exports = exports['default'];