import isServer from '../../../utils/isServer.mjs';
import { off, on } from '../../../utils/dom.mjs';

let isDragging = false;
function draggable(element, options) {
  if (isServer)
    return;
  const moveFn = function(event) {
    var _a;
    (_a = options.drag) == null ? void 0 : _a.call(options, event);
  };
  const upFn = function(event) {
    var _a;
    off(document, "mousemove", moveFn);
    off(document, "mouseup", upFn);
    document.onselectstart = null;
    document.ondragstart = null;
    isDragging = false;
    (_a = options.end) == null ? void 0 : _a.call(options, event);
  };
  on(element, "mousedown", function(event) {
    var _a;
    if (isDragging)
      return;
    document.onselectstart = () => false;
    document.ondragstart = () => false;
    on(document, "mousemove", moveFn);
    on(document, "mouseup", upFn);
    isDragging = true;
    (_a = options.start) == null ? void 0 : _a.call(options, event);
  });
}

export { draggable as default };
//# sourceMappingURL=draggable.mjs.map
