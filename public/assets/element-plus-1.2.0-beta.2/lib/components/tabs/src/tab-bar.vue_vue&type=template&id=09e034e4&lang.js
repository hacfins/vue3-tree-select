'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_resize = vue.resolveDirective("resize");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: vue.normalizeStyle(_ctx.barStyle)
  }, null, 6)), [
    [_directive_resize, _ctx.update]
  ]);
}

exports.render = render;
//# sourceMappingURL=tab-bar.vue_vue&type=template&id=09e034e4&lang.js.map
