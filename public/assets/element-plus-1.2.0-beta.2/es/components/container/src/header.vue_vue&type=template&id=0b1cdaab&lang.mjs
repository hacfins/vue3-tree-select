import { openBlock, createElementBlock, normalizeStyle, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("header", {
    class: "el-header",
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}

export { render };
//# sourceMappingURL=header.vue_vue&type=template&id=0b1cdaab&lang.mjs.map
