'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = undefined;

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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PureRenderMixin = require('rc-util/lib/PureRenderMixin');

var _PureRenderMixin2 = _interopRequireDefault(_PureRenderMixin);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}
function isRenderResultPlainObject(result) {
    return result && !_react2["default"].isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferList = function (_React$Component) {
    (0, _inherits3["default"])(TransferList, _React$Component);

    function TransferList(props) {
        (0, _classCallCheck3["default"])(this, TransferList);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.handleSelect = function (selectedItem) {
            var checkedKeys = _this.props.checkedKeys;

            var result = checkedKeys.some(function (key) {
                return key === selectedItem.key;
            });
            _this.props.handleSelect(selectedItem, !result);
        };
        _this.handleFilter = function (e) {
            _this.props.handleFilter(e);
        };
        _this.handleClear = function () {
            _this.props.handleClear();
        };
        _this.matchFilter = function (text, item) {
            var _this$props = _this.props,
                filter = _this$props.filter,
                filterOption = _this$props.filterOption;

            if (filterOption) {
                return filterOption(filter, item);
            }
            return text.indexOf(filter) >= 0;
        };
        _this.renderItem = function (item) {
            var _this$props$render = _this.props.render,
                render = _this$props$render === undefined ? noop : _this$props$render;

            var renderResult = render(item);
            var isRenderResultPlain = isRenderResultPlainObject(renderResult);
            return {
                renderedText: isRenderResultPlain ? renderResult.value : renderResult,
                renderedEl: isRenderResultPlain ? renderResult.label : renderResult
            };
        };
        _this.state = {
            mounted: false
        };
        return _this;
    }

    TransferList.prototype.componentDidMount = function componentDidMount() {
        var _this2 = this;

        this.timer = setTimeout(function () {
            _this2.setState({
                mounted: true
            });
        }, 0);
    };

    TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
        clearTimeout(this.timer);
    };

    TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _PureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
    };

    TransferList.prototype.getCheckStatus = function getCheckStatus(filteredDataSource) {
        var checkedKeys = this.props.checkedKeys;

        if (checkedKeys.length === 0) {
            return 'none';
        } else if (filteredDataSource.every(function (item) {
            return checkedKeys.indexOf(item.key) >= 0;
        })) {
            return 'all';
        }
        return 'part';
    };

    TransferList.prototype.render = function render() {
        var _this3 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            dataSource = _props.dataSource,
            titleText = _props.titleText,
            checkedKeys = _props.checkedKeys,
            lazy = _props.lazy,
            _props$body = _props.body,
            body = _props$body === undefined ? noop : _props$body,
            _props$footer = _props.footer,
            footer = _props$footer === undefined ? noop : _props$footer,
            showSearch = _props.showSearch,
            style = _props.style,
            filter = _props.filter;
        var _props2 = this.props,
            searchPlaceholder = _props2.searchPlaceholder,
            notFoundContent = _props2.notFoundContent;
        // Custom Layout

        var footerDom = footer((0, _objectAssign2["default"])({}, this.props));
        var bodyDom = body((0, _objectAssign2["default"])({}, this.props));
        var listCls = (0, _classnames2["default"])(prefixCls, (0, _defineProperty3["default"])({}, prefixCls + '-with-footer', !!footerDom));
        var filteredDataSource = [];
        var totalDataSource = [];
        var showItems = dataSource.map(function (item) {
            var _renderItem = _this3.renderItem(item),
                renderedText = _renderItem.renderedText,
                renderedEl = _renderItem.renderedEl;

            if (filter && filter.trim() && !_this3.matchFilter(renderedText, item)) {
                return null;
            }
            // all show items
            totalDataSource.push(item);
            if (!item.disabled) {
                // response to checkAll items
                filteredDataSource.push(item);
            }
            var checked = checkedKeys.indexOf(item.key) >= 0;
            return _react2["default"].createElement(_item2["default"], { key: item.key, item: item, lazy: lazy, renderedText: renderedText, renderedEl: renderedEl, checked: checked, prefixCls: prefixCls, onClick: _this3.handleSelect });
        });
        var unit = '';
        var antLocale = this.context.antLocale;
        if (antLocale && antLocale.Transfer) {
            var transferLocale = antLocale.Transfer;
            unit = dataSource.length > 1 ? transferLocale.itemsUnit : transferLocale.itemUnit;
            searchPlaceholder = searchPlaceholder || transferLocale.searchPlaceholder;
            notFoundContent = notFoundContent || transferLocale.notFoundContent;
        }
        var search = showSearch ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-body-search-wrapper' },
            _react2["default"].createElement(_search2["default"], { prefixCls: prefixCls + '-search', onChange: this.handleFilter, handleClear: this.handleClear, placeholder: searchPlaceholder || 'Search', value: filter })
        ) : null;
        var listBody = bodyDom || _react2["default"].createElement(
            'div',
            { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
            search,
            _react2["default"].createElement(
                _rcAnimate2["default"],
                { component: 'ul', className: prefixCls + '-content', transitionName: this.state.mounted ? prefixCls + '-content-item-highlight' : '', transitionLeave: false },
                showItems
            ),
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-body-not-found' },
                notFoundContent || 'Not Found'
            )
        );
        var listFooter = footerDom ? _react2["default"].createElement(
            'div',
            { className: prefixCls + '-footer' },
            footerDom
        ) : null;
        var checkStatus = this.getCheckStatus(filteredDataSource);
        var checkedAll = checkStatus === 'all';
        var checkAllCheckbox = _react2["default"].createElement(_checkbox2["default"], { ref: 'checkbox', checked: checkedAll, indeterminate: checkStatus === 'part', onChange: function onChange() {
                return _this3.props.handleSelectAll(filteredDataSource, checkedAll);
            } });
        return _react2["default"].createElement(
            'div',
            { className: listCls, style: style },
            _react2["default"].createElement(
                'div',
                { className: prefixCls + '-header' },
                checkAllCheckbox,
                _react2["default"].createElement(
                    'span',
                    { className: prefixCls + '-header-selected' },
                    _react2["default"].createElement(
                        'span',
                        null,
                        (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + totalDataSource.length,
                        ' ',
                        unit
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-header-title' },
                        titleText
                    )
                )
            ),
            listBody,
            listFooter
        );
    };

    return TransferList;
}(_react2["default"].Component);

exports["default"] = TransferList;

TransferList.defaultProps = {
    dataSource: [],
    titleText: '',
    showSearch: false,
    render: noop,
    lazy: {}
};
TransferList.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];