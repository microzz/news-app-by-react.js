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

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _warning = require('../_util/warning');

var _warning2 = _interopRequireDefault(_warning);

var _createStore = require('./createStore');

var _createStore2 = _interopRequireDefault(_createStore);

var _SelectionBox = require('./SelectionBox');

var _SelectionBox2 = _interopRequireDefault(_SelectionBox);

var _SelectionCheckboxAll = require('./SelectionCheckboxAll');

var _SelectionCheckboxAll2 = _interopRequireDefault(_SelectionCheckboxAll);

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

var _ColumnGroup = require('./ColumnGroup');

var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var __rest = undefined && undefined.__rest || function (s, e) {
    var t = {};
    for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }return t;
};

function noop() {}
function stopPropagation(e) {
    e.stopPropagation();
    if (e.nativeEvent.stopImmediatePropagation) {
        e.nativeEvent.stopImmediatePropagation();
    }
}
var defaultLocale = {
    filterTitle: '筛选',
    filterConfirm: '确定',
    filterReset: '重置',
    emptyText: _react2["default"].createElement(
        'span',
        null,
        _react2["default"].createElement(_icon2["default"], { type: 'frown-o' }),
        '\u6682\u65E0\u6570\u636E'
    )
};
var defaultPagination = {
    onChange: noop,
    onShowSizeChange: noop
};

var Table = function (_React$Component) {
    (0, _inherits3["default"])(Table, _React$Component);

    function Table(props) {
        (0, _classCallCheck3["default"])(this, Table);

        var _this = (0, _possibleConstructorReturn3["default"])(this, _React$Component.call(this, props));

        _this.getCheckboxPropsByItem = function (item, index) {
            var _this$props$rowSelect = _this.props.rowSelection,
                rowSelection = _this$props$rowSelect === undefined ? {} : _this$props$rowSelect;

            if (!rowSelection.getCheckboxProps) {
                return {};
            }
            var key = _this.getRecordKey(item, index);
            // Cache checkboxProps
            if (!_this.CheckboxPropsCache[key]) {
                _this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
            }
            return _this.CheckboxPropsCache[key];
        };
        _this.handleFilter = function (column, nextFilters) {
            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            var filters = (0, _objectAssign2["default"])({}, _this.state.filters, (0, _defineProperty3["default"])({}, _this.getColumnKey(column), nextFilters));
            // Remove filters not in current columns
            var currentColumnKeys = [];
            (0, _util.treeMap)(_this.columns, function (c) {
                if (!c.children) {
                    currentColumnKeys.push(_this.getColumnKey(c));
                }
            });
            Object.keys(filters).forEach(function (columnKey) {
                if (currentColumnKeys.indexOf(columnKey) < 0) {
                    delete filters[columnKey];
                }
            });
            if (props.pagination) {
                // Reset current prop
                pagination.current = 1;
                pagination.onChange(pagination.current);
            }
            var newState = {
                pagination: pagination,
                filters: {}
            };
            var filtersToSetState = (0, _objectAssign2["default"])({}, filters);
            // Remove filters which is controlled
            _this.getFilteredValueColumns().forEach(function (col) {
                var columnKey = _this.getColumnKey(col);
                if (columnKey) {
                    delete filtersToSetState[columnKey];
                }
            });
            if (Object.keys(filtersToSetState).length > 0) {
                newState.filters = filtersToSetState;
            }
            // Controlled current prop will not respond user interaction
            if ((0, _typeof3["default"])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState, function () {
                _this.store.setState({
                    selectionDirty: false
                });
                var onChange = _this.props.onChange;
                if (onChange) {
                    onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                        selectionDirty: false,
                        filters: filters,
                        pagination: pagination
                    })));
                }
            });
        };
        _this.handleSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            if (checked) {
                selectedRowKeys.push(_this.getRecordKey(record, rowIndex));
            } else {
                selectedRowKeys = selectedRowKeys.filter(function (i) {
                    return key !== i;
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleRadioSelect = function (record, rowIndex, e) {
            var checked = e.target.checked;
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var key = _this.getRecordKey(record, rowIndex);
            selectedRowKeys = [key];
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelect',
                record: record,
                checked: checked
            });
        };
        _this.handleSelectAllRow = function (e) {
            var checked = e.target.checked;
            var data = _this.getFlatCurrentPageData();
            var defaultSelection = _this.store.getState().selectionDirty ? [] : _this.getDefaultSelection();
            var selectedRowKeys = _this.store.getState().selectedRowKeys.concat(defaultSelection);
            var changableRowKeys = data.filter(function (item, i) {
                return !_this.getCheckboxPropsByItem(item, i).disabled;
            }).map(function (item, i) {
                return _this.getRecordKey(item, i);
            });
            // 记录变化的列
            var changeRowKeys = [];
            if (checked) {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) < 0) {
                        selectedRowKeys.push(key);
                        changeRowKeys.push(key);
                    }
                });
            } else {
                changableRowKeys.forEach(function (key) {
                    if (selectedRowKeys.indexOf(key) >= 0) {
                        selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
                        changeRowKeys.push(key);
                    }
                });
            }
            _this.store.setState({
                selectionDirty: true
            });
            _this.setSelectedRowKeys(selectedRowKeys, {
                selectWay: 'onSelectAll',
                checked: checked,
                changeRowKeys: changeRowKeys
            });
        };
        _this.handlePageChange = function (current) {
            var props = _this.props;
            var pagination = (0, _objectAssign2["default"])({}, _this.state.pagination);
            if (current) {
                pagination.current = current;
            } else {
                pagination.current = pagination.current || 1;
            }
            pagination.onChange(pagination.current);
            var newState = {
                pagination: pagination
            };
            // Controlled current prop will not respond user interaction
            if ((0, _typeof3["default"])(props.pagination) === 'object' && 'current' in props.pagination) {
                newState.pagination = (0, _objectAssign2["default"])({}, pagination, {
                    current: _this.state.pagination.current
                });
            }
            _this.setState(newState);
            _this.store.setState({
                selectionDirty: false
            });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                    selectionDirty: false,
                    pagination: pagination
                })));
            }
        };
        _this.renderSelectionBox = function (type) {
            return function (_, record, index) {
                var rowIndex = _this.getRecordKey(record, index); // 从 1 开始
                var props = _this.getCheckboxPropsByItem(record, index);
                var handleChange = function handleChange(e) {
                    type === 'radio' ? _this.handleRadioSelect(record, rowIndex, e) : _this.handleSelect(record, rowIndex, e);
                };
                return _react2["default"].createElement(
                    'span',
                    { onClick: stopPropagation },
                    _react2["default"].createElement(_SelectionBox2["default"], { type: type, store: _this.store, rowIndex: rowIndex, disabled: props.disabled, onChange: handleChange, defaultSelection: _this.getDefaultSelection() })
                );
            };
        };
        _this.getRecordKey = function (record, index) {
            var rowKey = _this.props.rowKey;
            var recordKey = typeof rowKey === 'function' ? rowKey(record, index) : record[rowKey];
            (0, _warning2["default"])(recordKey !== undefined, 'Each record in table should have a unique `key` prop, or set `rowKey` to an unique primary key,' + 'see http://u.ant.design/table-row-key');
            return recordKey === undefined ? index : recordKey;
        };
        _this.handleShowSizeChange = function (current, pageSize) {
            var pagination = _this.state.pagination;
            pagination.onShowSizeChange(current, pageSize);
            var nextPagination = (0, _objectAssign2["default"])({}, pagination, { pageSize: pageSize, current: current });
            _this.setState({ pagination: nextPagination });
            var onChange = _this.props.onChange;
            if (onChange) {
                onChange.apply(null, _this.prepareParamsArguments((0, _objectAssign2["default"])({}, _this.state, {
                    pagination: nextPagination
                })));
            }
        };
        (0, _warning2["default"])(!('columnsPageRange' in props || 'columnsPageSize' in props), '`columnsPageRange` and `columnsPageSize` are removed, please use ' + 'fixed columns instead, see: http://u.ant.design/fixed-columns.');
        _this.columns = props.columns || (0, _util.normalizeColumns)(props.children);
        _this.state = (0, _objectAssign2["default"])({}, _this.getSortStateFromColumns(), {
            // 减少状态
            filters: _this.getFiltersFromColumns(),
            pagination: _this.getDefaultPagination(props)
        });
        _this.CheckboxPropsCache = {};
        _this.store = (0, _createStore2["default"])({
            selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
            selectionDirty: false
        });
        return _this;
    }

    Table.prototype.getDefaultSelection = function getDefaultSelection() {
        var _this2 = this;

        var _props$rowSelection = this.props.rowSelection,
            rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

        if (!rowSelection.getCheckboxProps) {
            return [];
        }
        return this.getFlatData().filter(function (item, rowIndex) {
            return _this2.getCheckboxPropsByItem(item, rowIndex).defaultChecked;
        }).map(function (record, rowIndex) {
            return _this2.getRecordKey(record, rowIndex);
        });
    };

    Table.prototype.getDefaultPagination = function getDefaultPagination(props) {
        var pagination = props.pagination || {};
        return this.hasPagination(props) ? (0, _objectAssign2["default"])({}, defaultPagination, pagination, {
            current: pagination.defaultCurrent || pagination.current || 1,
            pageSize: pagination.defaultPageSize || pagination.pageSize || 10
        }) : {};
    };

    Table.prototype.getLocale = function getLocale() {
        var locale = {};
        if (this.context.antLocale && this.context.antLocale.Table) {
            locale = this.context.antLocale.Table;
        }
        return (0, _objectAssign2["default"])({}, defaultLocale, locale, this.props.locale);
    };

    Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.columns = nextProps.columns || (0, _util.normalizeColumns)(nextProps.children);
        if ('pagination' in nextProps || 'pagination' in this.props) {
            this.setState(function (previousState) {
                var newPagination = (0, _objectAssign2["default"])({}, defaultPagination, previousState.pagination, nextProps.pagination);
                newPagination.current = newPagination.current || 1;
                newPagination.pageSize = newPagination.pageSize || 10;
                return { pagination: nextProps.pagination !== false ? newPagination : {} };
            });
        }
        if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
            this.store.setState({
                selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
            });
            var rowSelection = this.props.rowSelection;

            if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
                this.CheckboxPropsCache = {};
            }
        }
        if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
            this.store.setState({
                selectionDirty: false
            });
            this.CheckboxPropsCache = {};
        }
        if (this.getSortOrderColumns(this.columns).length > 0) {
            var sortState = this.getSortStateFromColumns(this.columns);
            if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
                this.setState(sortState);
            }
        }
        var filteredValueColumns = this.getFilteredValueColumns(this.columns);
        if (filteredValueColumns.length > 0) {
            var filtersFromColumns = this.getFiltersFromColumns(this.columns);
            var newFilters = (0, _objectAssign2["default"])({}, this.state.filters);
            Object.keys(filtersFromColumns).forEach(function (key) {
                newFilters[key] = filtersFromColumns[key];
            });
            if (this.isFiltersChanged(newFilters)) {
                this.setState({ filters: newFilters });
            }
        }
    };

    Table.prototype.setSelectedRowKeys = function setSelectedRowKeys(selectedRowKeys, _ref) {
        var _this3 = this;

        var selectWay = _ref.selectWay,
            record = _ref.record,
            checked = _ref.checked,
            changeRowKeys = _ref.changeRowKeys;
        var _props$rowSelection2 = this.props.rowSelection,
            rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

        if (rowSelection && !('selectedRowKeys' in rowSelection)) {
            this.store.setState({ selectedRowKeys: selectedRowKeys });
        }
        var data = this.getFlatData();
        if (!rowSelection.onChange && !rowSelection[selectWay]) {
            return;
        }
        var selectedRows = data.filter(function (row, i) {
            return selectedRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
        });
        if (rowSelection.onChange) {
            rowSelection.onChange(selectedRowKeys, selectedRows);
        }
        if (selectWay === 'onSelect' && rowSelection.onSelect) {
            rowSelection.onSelect(record, checked, selectedRows);
        } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
            var changeRows = data.filter(function (row, i) {
                return changeRowKeys.indexOf(_this3.getRecordKey(row, i)) >= 0;
            });
            rowSelection.onSelectAll(checked, selectedRows, changeRows);
        }
    };

    Table.prototype.hasPagination = function hasPagination(props) {
        return (props || this.props).pagination !== false;
    };

    Table.prototype.isFiltersChanged = function isFiltersChanged(filters) {
        var _this4 = this;

        var filtersChanged = false;
        if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
            filtersChanged = true;
        } else {
            Object.keys(filters).forEach(function (columnKey) {
                if (filters[columnKey] !== _this4.state.filters[columnKey]) {
                    filtersChanged = true;
                }
            });
        }
        return filtersChanged;
    };

    Table.prototype.getSortOrderColumns = function getSortOrderColumns(columns) {
        return (columns || this.columns || []).filter(function (column) {
            return 'sortOrder' in column;
        });
    };

    Table.prototype.getFilteredValueColumns = function getFilteredValueColumns(columns) {
        return (columns || this.columns || []).filter(function (column) {
            return typeof column.filteredValue !== 'undefined';
        });
    };

    Table.prototype.getFiltersFromColumns = function getFiltersFromColumns(columns) {
        var _this5 = this;

        var filters = {};
        this.getFilteredValueColumns(columns).forEach(function (col) {
            filters[_this5.getColumnKey(col)] = col.filteredValue;
        });
        return filters;
    };

    Table.prototype.getSortStateFromColumns = function getSortStateFromColumns(columns) {
        // return fisrt column which sortOrder is not falsy
        var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
            return col.sortOrder;
        })[0];
        if (sortedColumn) {
            return {
                sortColumn: sortedColumn,
                sortOrder: sortedColumn.sortOrder
            };
        }
        return {
            sortColumn: null,
            sortOrder: null
        };
    };

    Table.prototype.getSorterFn = function getSorterFn() {
        var _state = this.state,
            sortOrder = _state.sortOrder,
            sortColumn = _state.sortColumn;

        if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
            return;
        }
        return function (a, b) {
            var result = sortColumn.sorter(a, b);
            if (result !== 0) {
                return sortOrder === 'descend' ? -result : result;
            }
            return 0;
        };
    };

    Table.prototype.toggleSortOrder = function toggleSortOrder(order, column) {
        var _state2 = this.state,
            sortColumn = _state2.sortColumn,
            sortOrder = _state2.sortOrder;
        // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

        var isSortColumn = this.isSortColumn(column);
        if (!isSortColumn) {
            sortOrder = order;
            sortColumn = column;
        } else {
            if (sortOrder === order) {
                sortOrder = '';
                sortColumn = null;
            } else {
                sortOrder = order;
            }
        }
        var newState = {
            sortOrder: sortOrder,
            sortColumn: sortColumn
        };
        // Controlled
        if (this.getSortOrderColumns().length === 0) {
            this.setState(newState);
        }
        var onChange = this.props.onChange;
        if (onChange) {
            onChange.apply(null, this.prepareParamsArguments((0, _objectAssign2["default"])({}, this.state, newState)));
        }
    };

    Table.prototype.renderRowSelection = function renderRowSelection() {
        var _this6 = this;

        var _props = this.props,
            prefixCls = _props.prefixCls,
            rowSelection = _props.rowSelection;

        var columns = this.columns.concat();
        if (rowSelection) {
            var data = this.getFlatCurrentPageData().filter(function (item, index) {
                if (rowSelection.getCheckboxProps) {
                    return !_this6.getCheckboxPropsByItem(item, index).disabled;
                }
                return true;
            });
            var selectionColumn = {
                key: 'selection-column',
                render: this.renderSelectionBox(rowSelection.type),
                className: prefixCls + '-selection-column'
            };
            if (rowSelection.type !== 'radio') {
                var checkboxAllDisabled = data.every(function (item, index) {
                    return _this6.getCheckboxPropsByItem(item, index).disabled;
                });
                selectionColumn.title = _react2["default"].createElement(_SelectionCheckboxAll2["default"], { store: this.store, data: data, getCheckboxPropsByItem: this.getCheckboxPropsByItem, getRecordKey: this.getRecordKey, disabled: checkboxAllDisabled, onChange: this.handleSelectAllRow });
            }
            if (columns.some(function (column) {
                return column.fixed === 'left' || column.fixed === true;
            })) {
                selectionColumn.fixed = 'left';
            }
            if (columns[0] && columns[0].key === 'selection-column') {
                columns[0] = selectionColumn;
            } else {
                columns.unshift(selectionColumn);
            }
        }
        return columns;
    };

    Table.prototype.getColumnKey = function getColumnKey(column, index) {
        return column.key || column.dataIndex || index;
    };

    Table.prototype.getMaxCurrent = function getMaxCurrent(total) {
        var _state$pagination = this.state.pagination,
            current = _state$pagination.current,
            pageSize = _state$pagination.pageSize;

        if ((current - 1) * pageSize >= total) {
            return current - 1;
        }
        return current;
    };

    Table.prototype.isSortColumn = function isSortColumn(column) {
        var sortColumn = this.state.sortColumn;

        if (!column || !sortColumn) {
            return false;
        }
        return this.getColumnKey(sortColumn) === this.getColumnKey(column);
    };

    Table.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
        var _this7 = this;

        var _props2 = this.props,
            prefixCls = _props2.prefixCls,
            dropdownPrefixCls = _props2.dropdownPrefixCls;
        var sortOrder = this.state.sortOrder;

        var locale = this.getLocale();
        return (0, _util.treeMap)(columns, function (originColumn, i) {
            var column = (0, _objectAssign2["default"])({}, originColumn);
            var key = _this7.getColumnKey(column, i);
            var filterDropdown = void 0;
            var sortButton = void 0;
            if (column.filters && column.filters.length > 0 || column.filterDropdown) {
                var colFilters = _this7.state.filters[key] || [];
                filterDropdown = _react2["default"].createElement(_filterDropdown2["default"], { locale: locale, column: column, selectedKeys: colFilters, confirmFilter: _this7.handleFilter, prefixCls: prefixCls + '-filter', dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown' });
            }
            if (column.sorter) {
                var isSortColumn = _this7.isSortColumn(column);
                if (isSortColumn) {
                    column.className = column.className || '';
                    if (sortOrder) {
                        column.className += ' ' + prefixCls + '-column-sort';
                    }
                }
                var isAscend = isSortColumn && sortOrder === 'ascend';
                var isDescend = isSortColumn && sortOrder === 'descend';
                sortButton = _react2["default"].createElement(
                    'div',
                    { className: prefixCls + '-column-sorter' },
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'), title: '\u2191', onClick: function onClick() {
                                return _this7.toggleSortOrder('ascend', column);
                            } },
                        _react2["default"].createElement(_icon2["default"], { type: 'caret-up' })
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'), title: '\u2193', onClick: function onClick() {
                                return _this7.toggleSortOrder('descend', column);
                            } },
                        _react2["default"].createElement(_icon2["default"], { type: 'caret-down' })
                    )
                );
            }
            column.title = _react2["default"].createElement(
                'span',
                null,
                column.title,
                sortButton,
                filterDropdown
            );
            return column;
        });
    };

    Table.prototype.renderPagination = function renderPagination() {
        // 强制不需要分页
        if (!this.hasPagination()) {
            return null;
        }
        var size = 'default';
        var pagination = this.state.pagination;

        if (pagination.size) {
            size = pagination.size;
        } else if (this.props.size === 'middle' || this.props.size === 'small') {
            size = 'small';
        }
        var total = pagination.total || this.getLocalData().length;
        return total > 0 ? _react2["default"].createElement(_pagination2["default"], (0, _extends3["default"])({ key: 'pagination' }, pagination, { className: this.props.prefixCls + '-pagination', onChange: this.handlePageChange, total: total, size: size, current: this.getMaxCurrent(total), onShowSizeChange: this.handleShowSizeChange })) : null;
    };

    Table.prototype.prepareParamsArguments = function prepareParamsArguments(state) {
        // 准备筛选、排序、分页的参数
        var pagination = state.pagination;
        var filters = state.filters;
        var sorter = {};
        if (state.sortColumn && state.sortOrder) {
            sorter.column = state.sortColumn;
            sorter.order = state.sortOrder;
            sorter.field = state.sortColumn.dataIndex;
            sorter.columnKey = this.getColumnKey(state.sortColumn);
        }
        return [pagination, filters, sorter];
    };

    Table.prototype.findColumn = function findColumn(myKey) {
        var _this8 = this;

        var column = void 0;
        (0, _util.treeMap)(this.columns, function (c) {
            if (_this8.getColumnKey(c) === myKey) {
                column = c;
            }
        });
        return column;
    };

    Table.prototype.getCurrentPageData = function getCurrentPageData() {
        var data = this.getLocalData();
        var current = void 0;
        var pageSize = void 0;
        var state = this.state;
        // 如果没有分页的话，默认全部展示
        if (!this.hasPagination()) {
            pageSize = Number.MAX_VALUE;
            current = 1;
        } else {
            pageSize = state.pagination.pageSize;
            current = this.getMaxCurrent(state.pagination.total || data.length);
        }
        // 分页
        // ---
        // 当数据量少于等于每页数量时，直接设置数据
        // 否则进行读取分页数据
        if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
            data = data.filter(function (_, i) {
                return i >= (current - 1) * pageSize && i < current * pageSize;
            });
        }
        return data;
    };

    Table.prototype.getFlatData = function getFlatData() {
        return (0, _util.flatArray)(this.getLocalData());
    };

    Table.prototype.getFlatCurrentPageData = function getFlatCurrentPageData() {
        return (0, _util.flatArray)(this.getCurrentPageData());
    };

    Table.prototype.recursiveSort = function recursiveSort(data, sorterFn) {
        var _this9 = this;

        var _props$childrenColumn = this.props.childrenColumnName,
            childrenColumnName = _props$childrenColumn === undefined ? 'children' : _props$childrenColumn;

        return data.sort(sorterFn).map(function (item) {
            return item[childrenColumnName] ? (0, _objectAssign2["default"])({}, item, (0, _defineProperty3["default"])({}, childrenColumnName, _this9.recursiveSort(item[childrenColumnName], sorterFn))) : item;
        });
    };

    Table.prototype.getLocalData = function getLocalData() {
        var _this10 = this;

        var state = this.state;
        var dataSource = this.props.dataSource;

        var data = dataSource || [];
        // 优化本地排序
        data = data.slice(0);
        var sorterFn = this.getSorterFn();
        if (sorterFn) {
            data = this.recursiveSort(data, sorterFn);
        }
        // 筛选
        if (state.filters) {
            Object.keys(state.filters).forEach(function (columnKey) {
                var col = _this10.findColumn(columnKey);
                if (!col) {
                    return;
                }
                var values = state.filters[columnKey] || [];
                if (values.length === 0) {
                    return;
                }
                var onFilter = col.onFilter;
                data = onFilter ? data.filter(function (record) {
                    return values.some(function (v) {
                        return onFilter(v, record);
                    });
                }) : data;
            });
        }
        return data;
    };

    Table.prototype.render = function render() {
        var _classNames,
            _this11 = this;

        var _a = this.props,
            style = _a.style,
            className = _a.className,
            prefixCls = _a.prefixCls,
            showHeader = _a.showHeader,
            loading = _a.loading,
            restProps = __rest(_a, ["style", "className", "prefixCls", "showHeader", "loading"]);
        var data = this.getCurrentPageData();
        var columns = this.renderRowSelection();
        var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
        var locale = this.getLocale();
        var classString = (0, _classnames2["default"])((_classNames = {}, (0, _defineProperty3["default"])(_classNames, prefixCls + '-' + this.props.size, true), (0, _defineProperty3["default"])(_classNames, prefixCls + '-bordered', this.props.bordered), (0, _defineProperty3["default"])(_classNames, prefixCls + '-empty', !data.length), (0, _defineProperty3["default"])(_classNames, prefixCls + '-without-column-header', !showHeader), _classNames));
        columns = this.renderColumnsDropdown(columns);
        columns = columns.map(function (column, i) {
            var newColumn = (0, _objectAssign2["default"])({}, column);
            newColumn.key = _this11.getColumnKey(newColumn, i);
            return newColumn;
        });
        var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
        if ('expandIconColumnIndex' in restProps) {
            expandIconColumnIndex = restProps.expandIconColumnIndex;
        }
        var table = _react2["default"].createElement(_rcTable2["default"], (0, _extends3["default"])({ key: 'table' }, restProps, { prefixCls: prefixCls, data: data, columns: columns, showHeader: showHeader, className: classString, expandIconColumnIndex: expandIconColumnIndex, expandIconAsCell: expandIconAsCell, emptyText: function emptyText() {
                return locale.emptyText;
            } }));
        // if there is no pagination or no data,
        // the height of spin should decrease by half of pagination
        var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
        var tableWithSpin = loading ? _react2["default"].createElement(
            _spin2["default"],
            { className: loading ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '' },
            table,
            this.renderPagination()
        ) : [table, this.renderPagination()];
        return _react2["default"].createElement(
            'div',
            { className: className, style: style },
            tableWithSpin
        );
    };

    return Table;
}(_react2["default"].Component);

exports["default"] = Table;

Table.Column = _Column2["default"];
Table.ColumnGroup = _ColumnGroup2["default"];
Table.propTypes = {
    dataSource: _react2["default"].PropTypes.array,
    columns: _react2["default"].PropTypes.array,
    prefixCls: _react2["default"].PropTypes.string,
    useFixedHeader: _react2["default"].PropTypes.bool,
    rowSelection: _react2["default"].PropTypes.object,
    className: _react2["default"].PropTypes.string,
    size: _react2["default"].PropTypes.string,
    loading: _react2["default"].PropTypes.bool,
    bordered: _react2["default"].PropTypes.bool,
    onChange: _react2["default"].PropTypes.func,
    locale: _react2["default"].PropTypes.object,
    dropdownPrefixCls: _react2["default"].PropTypes.string
};
Table.defaultProps = {
    dataSource: [],
    prefixCls: 'ant-table',
    useFixedHeader: false,
    rowSelection: null,
    className: '',
    size: 'large',
    loading: false,
    bordered: false,
    indentSize: 20,
    locale: {},
    rowKey: 'key',
    showHeader: true
};
Table.contextTypes = {
    antLocale: _react2["default"].PropTypes.object
};
module.exports = exports['default'];