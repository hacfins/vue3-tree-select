import { openBlock, createElementBlock, normalizeClass, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    class: normalizeClass(["el-form", [
      _ctx.labelPosition ? "el-form--label-" + _ctx.labelPosition : "",
      { "el-form--inline": _ctx.inline }
    ]])
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}

export { render };
//# sourceMappingURL=form.vue_vue&type=template&id=602d6cf6&lang.mjs.map
