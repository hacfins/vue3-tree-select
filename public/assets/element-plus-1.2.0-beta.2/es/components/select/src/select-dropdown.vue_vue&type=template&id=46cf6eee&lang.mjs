import { openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-select-dropdown", [{ "is-multiple": _ctx.isMultiple }, _ctx.popperClass]]),
    style: normalizeStyle({ [_ctx.isFitInputWidth ? "width" : "minWidth"]: _ctx.minWidth })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}

export { render };
//# sourceMappingURL=select-dropdown.vue_vue&type=template&id=46cf6eee&lang.mjs.map
