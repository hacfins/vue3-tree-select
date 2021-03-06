import { resolveComponent, resolveDirective, openBlock, createBlock, withCtx, withDirectives, createElementVNode, normalizeClass, normalizeStyle, createVNode, mergeProps, withKeys, withModifiers, createSlots, renderSlot, createElementBlock, Fragment, renderList, createTextVNode, toDisplayString } from 'vue';

const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "aria-selected", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent("el-input");
  const _component_loading = resolveComponent("loading");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_scrollbar = resolveComponent("el-scrollbar");
  const _component_el_popper = resolveComponent("el-popper");
  const _directive_clickoutside = resolveDirective("clickoutside");
  return openBlock(), createBlock(_component_el_popper, {
    ref: "popper",
    visible: _ctx.suggestionVisible,
    "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => _ctx.suggestionVisible = $event),
    placement: _ctx.placement,
    "popper-class": `el-autocomplete__popper ${_ctx.popperClass}`,
    "append-to-body": _ctx.popperAppendToBody,
    pure: "",
    "manual-mode": "",
    effect: _ctx.Effect.LIGHT,
    trigger: "click",
    transition: "el-zoom-in-top",
    "gpu-acceleration": false
  }, {
    trigger: withCtx(() => [
      withDirectives(createElementVNode("div", {
        class: normalizeClass(["el-autocomplete", _ctx.$attrs.class]),
        style: normalizeStyle(_ctx.$attrs.style),
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": _ctx.suggestionVisible,
        "aria-owns": _ctx.id
      }, [
        createVNode(_component_el_input, mergeProps({ ref: "inputRef" }, _ctx.attrs, {
          "model-value": _ctx.modelValue,
          onInput: _ctx.handleInput,
          onChange: _ctx.handleChange,
          onFocus: _ctx.handleFocus,
          onBlur: _ctx.handleBlur,
          onClear: _ctx.handleClear,
          onKeydown: [
            _cache[0] || (_cache[0] = withKeys(withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex - 1), ["prevent"]), ["up"])),
            _cache[1] || (_cache[1] = withKeys(withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex + 1), ["prevent"]), ["down"])),
            withKeys(_ctx.handleKeyEnter, ["enter"]),
            withKeys(_ctx.close, ["tab"])
          ]
        }), createSlots({ _: 2 }, [
          _ctx.$slots.prepend ? {
            name: "prepend",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "prepend")
            ])
          } : void 0,
          _ctx.$slots.append ? {
            name: "append",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "append")
            ])
          } : void 0,
          _ctx.$slots.prefix ? {
            name: "prefix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "prefix")
            ])
          } : void 0,
          _ctx.$slots.suffix ? {
            name: "suffix",
            fn: withCtx(() => [
              renderSlot(_ctx.$slots, "suffix")
            ])
          } : void 0
        ]), 1040, ["model-value", "onInput", "onChange", "onFocus", "onBlur", "onClear", "onKeydown"])
      ], 14, _hoisted_1), [
        [_directive_clickoutside, _ctx.close]
      ])
    ]),
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "regionRef",
        class: normalizeClass([
          "el-autocomplete-suggestion",
          _ctx.suggestionLoading && "is-loading"
        ]),
        style: normalizeStyle({ minWidth: _ctx.dropdownWidth, outline: "none" }),
        role: "region"
      }, [
        createVNode(_component_el_scrollbar, {
          tag: "ul",
          "wrap-class": "el-autocomplete-suggestion__wrap",
          "view-class": "el-autocomplete-suggestion__list"
        }, {
          default: withCtx(() => [
            _ctx.suggestionLoading ? (openBlock(), createElementBlock("li", _hoisted_2, [
              createVNode(_component_el_icon, { class: "is-loading" }, {
                default: withCtx(() => [
                  createVNode(_component_loading)
                ]),
                _: 1
              })
            ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.suggestions, (item, index) => {
              return openBlock(), createElementBlock("li", {
                id: `${_ctx.id}-item-${index}`,
                key: index,
                class: normalizeClass({ highlighted: _ctx.highlightedIndex === index }),
                role: "option",
                "aria-selected": _ctx.highlightedIndex === index,
                onClick: ($event) => _ctx.select(item)
              }, [
                renderSlot(_ctx.$slots, "default", { item }, () => [
                  createTextVNode(toDisplayString(item[_ctx.valueKey]), 1)
                ])
              ], 10, _hoisted_3);
            }), 128))
          ]),
          _: 3
        })
      ], 6)
    ]),
    _: 3
  }, 8, ["visible", "placement", "popper-class", "append-to-body", "effect"]);
}

export { render };
//# sourceMappingURL=index.vue_vue&type=template&id=2f09f285&lang.mjs.map
