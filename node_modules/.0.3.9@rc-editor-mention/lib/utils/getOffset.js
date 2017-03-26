"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getOffset;
function getOffset(element, container) {
  var rect = element.getBoundingClientRect();
  if (rect.width || rect.height) {
    var _container = container || element.parentElement;
    return {
      top: rect.top - _container.clientTop,
      left: rect.left - _container.clientLeft
    };
  }
  return rect;
}
module.exports = exports['default'];