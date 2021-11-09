import { openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: "el-footer",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}

export { render };
//# sourceMappingURL=footer.vue_vue&type=template&id=2c2b128e&lang.mjs.map
