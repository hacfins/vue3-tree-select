import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "el-steps",
      _ctx.simple ? "el-steps--simple" : `el-steps--${_ctx.direction}`
    ])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

export { render };
//# sourceMappingURL=index.vue_vue&type=template&id=882d196c&lang.mjs.map
