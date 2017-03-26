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

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

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

var Tooltip = function (_React$Component) {
    (0, _inherits3["default"])(Tooltip, _React$Component);

    function Tooltip(props) {
        (0, _classCallCheck3["default"])(this, Tooltip);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.onVisibleChange = function (visible) {
            var onVisibleChange = _this.props.onVisibleChange;

            if (!('visible' in _this.props)) {
                _this.setState({ visible: _this.isNoTitle() ? false : visible });
            }
            if (onVisibleChange && !_this.isNoTitle()) {
                onVisibleChange(visible);
            }
        };
        // 动态设置动画点
        _this.onPopupAlign = function (domNode, align) {
            var placements = _this.getPlacements();
            // 当前返回的位置
            var placement = Object.keys(placements).filter(function (key) {
                return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
            })[0];
            if (!placement) {
                return;
            }
            // 根据当前坐标设置动画点
            var rect = domNode.getBoundingClientRect();
            var transformOrigin = {
                top: '50%',
                left: '50%'
            };
            if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
                transformOrigin.top = rect.height - align.offset[1] + 'px';
            } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
                transformOrigin.top = -align.offset[1] + 'px';
            }
            if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
                transformOrigin.left = rect.width - align.offset[0] + 'px';
            } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
                transformOrigin.left = -align.offset[0] + 'px';
            }
            domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
        };
        _this.state = {
            visible: !!props.visible
        };
        return _this;
    }

    Tooltip.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if ('visible' in nextProps) {
            this.setState({ visible: nextProps.visible });
        }
    };

    Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
        return this.refs.tooltip.getPopupDomNode();
    };

    Tooltip.prototype.getPlacements = function getPlacements() {
        var _props = this.props,
            builtinPlacements = _props.builtinPlacements,
            arrowPointAtCenter = _props.arrowPointAtCenter;

        return builtinPlacements || (0, _placements2["default"])({
            arrowPointAtCenter: arrowPointAtCenter,
            verticalArrowShift: 8
        });
    };
    // Fix Tooltip won't hide at disabled button
    // mouse events don't trigger at disabled button in Chrome
    // https://github.com/react-component/tooltip/issues/18


    Tooltip.prototype.getDisabledCompatibleChildren = function getDisabledCompatibleChildren(element) {
        if ((element.type.__ANT_BUTTON || element.type === 'button') && element.props.disabled) {
            // reserve display style for <Button style={{ display: 'block '}}></Button>
            // Note:
            //   If people override ant-btn's style.display by css,
            //   it will be affected cause we reset it to 'inline-block'
            var displayStyle = element.props.style && element.props.style.display ? element.props.style.display : 'inline-block';
            var child = (0, _react.cloneElement)(element, {
                style: __assign({}, element.props.style, { pointerEvents: 'none' })
            });
            return _react2["default"].createElement(
                'span',
                { style: { display: displayStyle, cursor: 'not-allowed' } },
                child
            );
        }
        return element;
    };

    Tooltip.prototype.isNoTitle = function isNoTitle() {
        var _props2 = this.props,
            title = _props2.title,
            overlay = _props2.overlay;

        return !title && !overlay; // overlay for old version compatibility
    };

    Tooltip.prototype.render = function render() {
        var props = this.props,
            state = this.state;
        var prefixCls = props.prefixCls,
            title = props.title,
            overlay = props.overlay,
            openClassName = props.openClassName,
            getPopupContainer = props.getPopupContainer,
            getTooltipContainer = props.getTooltipContainer;

        var children = props.children;
        var visible = state.visible;
        // Hide tooltip when there is no title
        if (!('visible' in props) && this.isNoTitle()) {
            visible = false;
        }
        var child = this.getDisabledCompatibleChildren(_react2["default"].isValidElement(children) ? children : _react2["default"].createElement(
            'span',
            null,
            children
        ));
        var childProps = child.props;
        var childCls = (0, _classnames2["default"])(childProps.className, (0, _defineProperty3["default"])({}, openClassName || prefixCls + '-open', true));
        return _react2["default"].createElement(
            _rcTooltip2["default"],
            (0, _extends3["default"])({}, this.props, { getTooltipContainer: getPopupContainer || getTooltipContainer, ref: 'tooltip', builtinPlacements: this.getPlacements(), overlay: overlay || title, visible: visible, onVisibleChange: this.onVisibleChange, onPopupAlign: this.onPopupAlign }),
            visible ? (0, _react.cloneElement)(child, { className: childCls }) : child
        );
    };

    return Tooltip;
}(_react2["default"].Component);

exports["default"] = Tooltip;

Tooltip.defaultProps = {
    prefixCls: 'ant-tooltip',
    placement: 'top',
    transitionName: 'zoom-big-fast',
    mouseEnterDelay: 0.1,
    mouseLeaveDelay: 0.1,
    arrowPointAtCenter: false
};
module.exports = exports['default'];