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

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = require('rc-progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

var statusColorMap = {
    normal: '#108ee9',
    exception: '#ff5500',
    success: '#87d068'
};

var Progress = function (_React$Component) {
    (0, _inherits3["default"])(Progress, _React$Component);

    function Progress() {
        (0, _classCallCheck3["default"])(this, Progress);
        return (0, _possibleConstructorReturn3["default"])(this, _React$Component.apply(this, arguments));
    }

    Progress.prototype.render = function render() {
        var _classNames;

        var props = this.props;

        var prefixCls = props.prefixCls,
            className = props.className,
            _props$percent = props.percent,
            percent = _props$percent === undefined ? 0 : _props$percent,
            status = props.status,
            format = props.format,
            trailColor = props.trailColor,
            type = props.type,
            strokeWidth = props.strokeWidth,
            width = props.width,
            showInfo = props.showInfo,
            restProps = __rest(props, ["prefixCls", "className", "percent", "status", "format", "trailColor", "type", "strokeWidth", "width", "showInfo"]);

        var progressStatus = parseInt(percent.toString(), 10) >= 100 && !('status' in props) ? 'success' : status || 'normal';
        var progressInfo = void 0;
        var progress = void 0;
        var textFormatter = format || function (percentNumber) {
            return percentNumber + '%';
        };
        if (showInfo) {
            var text = void 0;
            var iconType = type === 'circle' ? '' : '-circle';
            if (progressStatus === 'exception') {
                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'cross' + iconType });
            } else if (progressStatus === 'success') {
                text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'check' + iconType });
            } else {
                text = textFormatter(percent);
            }
            progressInfo = _react2["default"].createElement(
                'span',
                { className: prefixCls + '-text' },
                text
            );
        }
        if (type === 'line') {
            var percentStyle = {
                width: percent + '%',
                height: strokeWidth || 10
            };
            progress = _react2["default"].createElement(
                'div',
                null,
                _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-outer' },
                    _react2["default"].createElement(
                        'div',
                        { className: prefixCls + '-inner' },
                        _react2["default"].createElement('div', { className: prefixCls + '-bg', style: percentStyle })
                    )
                ),
                progressInfo
            );
        } else if (type === 'circle') {
            var circleSize = width || 132;
            var circleStyle = {
                width: circleSize,
                height: circleSize,
                fontSize: circleSize * 0.16 + 6
            };
            var circleWidth = strokeWidth || 6;
            progress = _react2["default"].createElement(
                'div',
                { className: prefixCls + '-inner', style: circleStyle },
                _react2["default"].createElement(_rcProgress.Circle, { percent: percent, strokeWidth: circleWidth, trailWidth: circleWidth, strokeColor: statusColorMap[progressStatus], trailColor: trailColor }),
                progressInfo
            );
        }
        var classString = (0, _classnames2["default"])(prefixCls, (_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + type, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-status-' + progressStatus, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-show-info', showInfo), _classNames), className);
        return _react2["default"].createElement(
            'div',
            (0, _extends3["default"])({}, restProps, { className: classString }),
            progress
        );
    };

    return Progress;
}(_react2["default"].Component);

exports["default"] = Progress;

Progress.defaultProps = {
    type: 'line',
    percent: 0,
    showInfo: true,
    trailColor: '#f3f3f3',
    prefixCls: 'ant-progress'
};
Progress.propTypes = {
    status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
    type: _react.PropTypes.oneOf(['line', 'circle']),
    showInfo: _react.PropTypes.bool,
    percent: _react.PropTypes.number,
    width: _react.PropTypes.number,
    strokeWidth: _react.PropTypes.number,
    trailColor: _react.PropTypes.string,
    format: _react.PropTypes.func
};
module.exports = exports['default'];