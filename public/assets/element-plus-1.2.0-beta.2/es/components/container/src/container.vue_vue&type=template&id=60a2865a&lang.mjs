import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", {
    class: normalizeClass(["el-container", { "is-vertical": _ctx.isVertical }])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

export { render };
//# sourceMappingURL=container.vue_vue&type=template&id=60a2865a&lang.mjs.map
