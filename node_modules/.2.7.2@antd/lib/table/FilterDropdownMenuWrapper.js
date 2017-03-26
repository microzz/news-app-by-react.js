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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var FilterDropdownMenuWrapper = function (_React$Component) {
    (0, _inherits3["default"])(FilterDropdownMenuWrapper, _React$Component);

    function FilterDropdownMenuWrapper() {
        (0, _classCallCheck3["default"])(this, FilterDropdownMenuWrapper);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    FilterDropdownMenuWrapper.prototype.render = function render() {
        var _props = this.props,
            onClick = _props.onClick,
            children = _props.children,
            className = _props.className;

        return _react2["default"].createElement(
            'div',
            { className: className, onClick: onClick },
            children
        );
    };

    return FilterDropdownMenuWrapper;
}(_react2["default"].Component);

exports["default"] = FilterDropdownMenuWrapper;
module.exports = exports['default'];