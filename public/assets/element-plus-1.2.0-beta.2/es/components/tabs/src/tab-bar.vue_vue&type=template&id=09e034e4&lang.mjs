import { resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, normalizeStyle } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_resize = resolveDirective("resize");
  return withDirectives((openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-tabs__active-bar", `is-${_ctx.rootTabs.props.tabPosition}`]),
    style: normalizeStyle(_ctx.barStyle)
  }, null, 6)), [
    [_directive_resize, _ctx.update]
  ]);
}

export { render };
//# sourceMappingURL=tab-bar.vue_vue&type=template&id=09e034e4&lang.mjs.map
