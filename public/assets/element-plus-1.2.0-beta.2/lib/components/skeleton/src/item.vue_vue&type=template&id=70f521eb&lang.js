'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_img_placeholder = vue.resolveComponent("img-placeholder");
  return vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-skeleton__item", `el-skeleton__${_ctx.variant}`])
  }, [
    _ctx.variant === "image" ? (vue.openBlock(), vue.createBlock(_component_img_placeholder, { key: 0 })) : vue.createCommentVNode("v-if", true)
  ], 2);
}

exports.render = render;
//# sourceMappingURL=item.vue_vue&type=template&id=70f521eb&lang.js.map
