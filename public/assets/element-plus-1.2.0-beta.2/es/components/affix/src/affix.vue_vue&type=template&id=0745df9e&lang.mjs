import { openBlock, createElementBlock, normalizeStyle, createElementVNode, normalizeClass, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "root",
    class: "el-affix",
    style: normalizeStyle(_ctx.rootStyle)
  }, [
    createElementVNode("div", {
      class: normalizeClass({ "el-affix--fixed": _ctx.state.fixed }),
      style: normalizeStyle(_ctx.affixStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ], 4);
}

export { render };
//# sourceMappingURL=affix.vue_vue&type=template&id=0745df9e&lang.mjs.map
