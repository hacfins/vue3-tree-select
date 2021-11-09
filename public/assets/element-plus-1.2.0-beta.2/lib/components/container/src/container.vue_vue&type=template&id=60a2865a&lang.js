'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("section", {
    class: vue.normalizeClass(["el-container", { "is-vertical": _ctx.isVertical }])
  }, [
    vue.renderSlot(_ctx.$slots, "default")
  ], 2);
}

exports.render = render;
//# sourceMappingURL=container.vue_vue&type=template&id=60a2865a&lang.js.map
