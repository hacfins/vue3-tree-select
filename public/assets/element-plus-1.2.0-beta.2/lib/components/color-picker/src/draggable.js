'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var isServer = require('../../../utils/isServer.js');
var dom = require('../../../utils/dom.js');

let isDragging = false;
function draggable(element, options) {
  if (isServer["default"])
    return;
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    dom.off(document, "mousemove", moveFn);
    dom.off(document, "mouseup", upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  dom.on(element, "mousedown", function(event) {
    var _a;
    if (isDragging)
      return;
    document.onselectstart = () => false;
    document.ondragstart = () => false;
    dom.on(document, "mousemove", moveFn);
    dom.on(document, "mouseup", upFn);
    isDragging = true;
    (_a = options.start) == null ? void 0 : _a.call(options, event);
  });
}

exports["default"] = draggable;
//# sourceMappingURL=draggable.js.map
