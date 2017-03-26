'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getComponentLocale = getComponentLocale;
exports.getLocaleCode = getLocaleCode;

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getComponentLocale(props, context, componentName, getDefaultLocale) {
    var locale = context && context.antLocale && context.antLocale[componentName] ? context.antLocale[componentName] : getDefaultLocale();
    var result = (0, _objectAssign2["default"])({}, locale, props.locale);
    result.lang = (0, _objectAssign2["default"])({}, locale.lang, props.locale.lang);
    return result;
}
function getLocaleCode(context) {
    var localeCode = context.antLocale && context.antLocale.locale;
    // Had use LocaleProvide but didn't set locale
    if (context.antLocale && context.antLocale.exist && !localeCode) {
        return 'zh-cn';
    }
    return localeCode;
}