import { openBlock, createBlock, Transition, mergeProps, withCtx, renderSlot } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, mergeProps({ mode: "out-in" }, _ctx.listeners), {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 16);
}

export { render };
//# sourceMappingURL=menu-collapse-transition.vue_vue&type=template&id=db8e3ce6&lang.mjs.map
