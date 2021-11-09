'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-divider", `el-divider--${_ctx.direction}`])
  }, [
    _ctx.$slots.default && _ctx.direction !== "vertical" ? (vue.openBlock(), vue.createElementBlock("div", {
      key: 0,
      class: vue.normalizeClass(["el-divider__text", `is-${_ctx.contentPosition}`])
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 2)) : vue.createCommentVNode("v-if", true)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=divider.vue_vue&type=template&id=6ddd3543&lang.js.map
