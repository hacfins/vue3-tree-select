import { openBlock, createElementBlock, mergeProps, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", mergeProps({
    class: "el-icon",
    style: _ctx.style
  }, _ctx.$attrs), [
    renderSlot(_ctx.$slots, "default")
  ], 16);
}

export { render };
//# sourceMappingURL=icon.vue_vue&type=template&id=89b755b6&lang.mjs.map
