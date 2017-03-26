'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _de_DE = require('rc-calendar/lib/locale/de_DE');

var _de_DE2 = _interopRequireDefault(_de_DE);

var _de_DE3 = require('../../time-picker/locale/de_DE');

var _de_DE4 = _interopRequireDefault(_de_DE3);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 统一合并为完整的 Locale
var locale = {
    lang: (0, _objectAssign2["default"])({
        placeholder: 'Datum auswählen',
        rangePlaceholder: ['Startdatum', 'Enddatum']
    }, _de_DE2["default"]),
    timePickerLocale: (0, _objectAssign2["default"])({}, _de_DE4["default"])
};
// All settings at:
// https://github.com/ant-design/ant-design/issues/424
exports["default"] = locale;
module.exports = exports['default'];