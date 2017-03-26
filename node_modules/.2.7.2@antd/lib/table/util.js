'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatArray = flatArray;
exports.treeMap = treeMap;
exports.normalizeColumns = normalizeColumns;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _ColumnGroup = require('./ColumnGroup');

var _ColumnGroup2 = _interopRequireDefault(_ColumnGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function flatArray() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var childrenName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'children';

    var result = [];
    var loop = function loop(array) {
        array.forEach(function (item) {
            var newItem = (0, _objectAssign2["default"])({}, item);
            delete newItem[childrenName];
            result.push(newItem);
            if (item[childrenName] && item[childrenName].length > 0) {
                loop(item[childrenName]);
            }
        });
    };
    loop(data);
    return result;
}
function treeMap(tree, mapper) {
    var childrenName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'children';

    return tree.map(function (node, index) {
        var extra = {};
        if (node[childrenName]) {
            extra[childrenName] = treeMap(node[childrenName], mapper, childrenName);
        }
        return (0, _objectAssign2["default"])({}, mapper(node, index), extra);
    });
}
function normalizeColumns(elements) {
    var columns = [];
    _react2["default"].Children.forEach(elements, function (element) {
        if (!_react2["default"].isValidElement(element)) {
            return;
        }
        var column = (0, _objectAssign2["default"])({}, element.props);
        if (element.key) {
            column.key = element.key;
        }
        if (element.type === _ColumnGroup2["default"]) {
            column.children = normalizeColumns(column.children);
        }
        columns.push(column);
    });
    return columns;
}