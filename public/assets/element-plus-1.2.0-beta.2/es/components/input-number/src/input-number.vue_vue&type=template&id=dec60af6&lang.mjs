import { resolveComponent, resolveDirective, openBlock, createElementBlock, normalizeClass, withModifiers, withDirectives, withKeys, createVNode, withCtx, createBlock, createCommentVNode } from 'vue';

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arrow_down = resolveComponent("arrow-down");
  const _component_minus = resolveComponent("minus");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_arrow_up = resolveComponent("arrow-up");
  const _component_plus = resolveComponent("plus");
  const _component_el_input = resolveComponent("el-input");
  const _directive_repeat_click = resolveDirective("repeat-click");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass([
      "el-input-number",
      _ctx.inputNumberSize ? "el-input-number--" + _ctx.inputNumberSize : "",
      { "is-disabled": _ctx.inputNumberDisabled },
      { "is-without-controls": !_ctx.controls },
      { "is-controls-right": _ctx.controlsAtRight }
    ]),
    onDragstart: _cache[4] || (_cache[4] = withModifiers(() => {
    }, ["prevent"]))
  }, [
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["el-input-number__decrease", { "is-disabled": _ctx.minDisabled }]),
      role: "button",
      onKeydown: _cache[0] || (_cache[0] = withKeys((...args) => _ctx.decrease && _ctx.decrease(...args), ["enter"]))
    }, [
      createVNode(_component_el_icon, null, {
        default: withCtx(() => [
          _ctx.controlsAtRight ? (openBlock(), createBlock(_component_arrow_down, { key: 0 })) : (openBlock(), createBlock(_component_minus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.decrease]
    ]) : createCommentVNode("v-if", true),
    _ctx.controls ? withDirectives((openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(["el-input-number__increase", { "is-disabled": _ctx.maxDisabled }]),
      role: "button",
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.increase && _ctx.increase(...args), ["enter"]))
    }, [
      createVNode(_component_el_icon, null, {
        default: withCtx(() => [
          _ctx.controlsAtRight ? (openBlock(), createBlock(_component_arrow_up, { key: 0 })) : (openBlock(), createBlock(_component_plus, { key: 1 }))
        ]),
        _: 1
      })
    ], 34)), [
      [_directive_repeat_click, _ctx.increase]
    ]) : createCommentVNode("v-if", true),
    createVNode(_component_el_input, {
      ref: "input",
      type: "number",
      "model-value": _ctx.displayValue,
      placeholder: _ctx.placeholder,
      disabled: _ctx.inputNumberDisabled,
      size: _ctx.inputNumberSize,
      max: _ctx.max,
      min: _ctx.min,
      name: _ctx.name,
      label: _ctx.label,
      onKeydown: [
        withKeys(withModifiers(_ctx.increase, ["prevent"]), ["up"]),
        withKeys(withModifiers(_ctx.decrease, ["prevent"]), ["down"])
      ],
      onBlur: _cache[2] || (_cache[2] = (event) => _ctx.$emit("blur", event)),
      onFocus: _cache[3] || (_cache[3] = (event) => _ctx.$emit("focus", event)),
      onInput: _ctx.handleInput,
      onChange: _ctx.handleInputChange
    }, null, 8, ["model-value", "placeholder", "disabled", "size", "max", "min", "name", "label", "onKeydown", "onInput", "onChange"])
  ], 34);
}

export { render };
//# sourceMappingURL=input-number.vue_vue&type=template&id=dec60af6&lang.mjs.map
