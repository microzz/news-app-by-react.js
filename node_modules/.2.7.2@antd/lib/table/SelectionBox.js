'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectionBox = function (_React$Component) {
    (0, _inherits3["default"])(SelectionBox, _React$Component);

    function SelectionBox(props) {
        (0, _classCallCheck3["default"])(this, SelectionBox);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.state = {
            checked: _this.getCheckState(props)
        };
        return _this;
    }

    SelectionBox.prototype.componentDidMount = function componentDidMount() {
        this.subscribe();
    };

    SelectionBox.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.unsubscribe) {
            this.unsubscribe();
        }
    };

    SelectionBox.prototype.subscribe = function subscribe() {
        var _this2 = this;

        var store = this.props.store;

        this.unsubscribe = store.subscribe(function () {
            var checked = _this2.getCheckState(_this2.props);
            _this2.setState({ checked: checked });
        });
    };

    SelectionBox.prototype.getCheckState = function getCheckState(props) {
        var store = props.store,
            defaultSelection = props.defaultSelection,
            rowIndex = props.rowIndex;

        var checked = false;
        if (store.getState().selectionDirty) {
            checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0;
        } else {
            checked = store.getState().selectedRowKeys.indexOf(rowIndex) >= 0 || defaultSelection.indexOf(rowIndex) >= 0;
        }
        return checked;
    };

    SelectionBox.prototype.render = function render() {
        var _props = this.props,
            type = _props.type,
            rowIndex = _props.rowIndex,
            disabled = _props.disabled,
            onChange = _props.onChange;
        var checked = this.state.checked;

        if (type === 'radio') {
            return _react2["default"].createElement(_radio2["default"], { disabled: disabled, onChange: onChange, value: rowIndex, checked: checked });
        }
        return _react2["default"].createElement(_checkbox2["default"], { checked: checked, disabled: disabled, onChange: onChange });
    };

    return SelectionBox;
}(_react2["default"].Component);

exports["default"] = SelectionBox;
module.exports = exports['default'];