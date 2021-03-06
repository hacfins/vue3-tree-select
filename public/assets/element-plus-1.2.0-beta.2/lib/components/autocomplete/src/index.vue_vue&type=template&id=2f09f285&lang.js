'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-expanded", "aria-owns"];
const _hoisted_2 = { key: 0 };
const _hoisted_3 = ["id", "aria-selected", "onClick"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_loading = vue.resolveComponent("loading");
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_el_scrollbar = vue.resolveComponent("el-scrollbar");
  const _component_el_popper = vue.resolveComponent("el-popper");
  const _directive_clickoutside = vue.resolveDirective("clickoutside");
  return vue.openBlock(), vue.createBlock(_component_el_popper, {
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
    trigger: vue.withCtx(() => [
      vue.withDirectives(vue.createElementVNode("div", {
        class: vue.normalizeClass(["el-autocomplete", _ctx.$attrs.class]),
        style: vue.normalizeStyle(_ctx.$attrs.style),
        role: "combobox",
        "aria-haspopup": "listbox",
        "aria-expanded": _ctx.suggestionVisible,
        "aria-owns": _ctx.id
      }, [
        vue.createVNode(_component_el_input, vue.mergeProps({ ref: "inputRef" }, _ctx.attrs, {
          "model-value": _ctx.modelValue,
          onInput: _ctx.handleInput,
          onChange: _ctx.handleChange,
          onFocus: _ctx.handleFocus,
          onBlur: _ctx.handleBlur,
          onClear: _ctx.handleClear,
          onKeydown: [
            _cache[0] || (_cache[0] = vue.withKeys(vue.withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex - 1), ["prevent"]), ["up"])),
            _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(($event) => _ctx.highlight(_ctx.highlightedIndex + 1), ["prevent"]), ["down"])),
            vue.withKeys(_ctx.handleKeyEnter, ["enter"]),
            vue.withKeys(_ctx.close, ["tab"])
          ]
        }), vue.createSlots({ _: 2 }, [
          _ctx.$slots.prepend ? {
            name: "prepend",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "prepend")
            ])
          } : void 0,
          _ctx.$slots.append ? {
            name: "append",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "append")
            ])
          } : void 0,
          _ctx.$slots.prefix ? {
            name: "prefix",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "prefix")
            ])
          } : void 0,
          _ctx.$slots.suffix ? {
            name: "suffix",
            fn: vue.withCtx(() => [
              vue.renderSlot(_ctx.$slots, "suffix")
            ])
          } : void 0
        ]), 1040, ["model-value", "onInput", "onChange", "onFocus", "onBlur", "onClear", "onKeydown"])
      ], 14, _hoisted_1), [
        [_directive_clickoutside, _ctx.close]
      ])
    ]),
    default: vue.withCtx(() => [
      vue.createElementVNode("div", {
        ref: "regionRef",
        class: vue.normalizeClass([
          "el-autocomplete-suggestion",
          _ctx.suggestionLoading && "is-loading"
        ]),
        style: vue.normalizeStyle({ minWidth: _ctx.dropdownWidth, outline: "none" }),
        role: "region"
      }, [
        vue.createVNode(_component_el_scrollbar, {
          tag: "ul",
          "wrap-class": "el-autocomplete-suggestion__wrap",
          "view-class": "el-autocomplete-suggestion__list"
        }, {
          default: vue.withCtx(() => [
            _ctx.suggestionLoading ? (vue.openBlock(), vue.createElementBlock("li", _hoisted_2, [
              vue.createVNode(_component_el_icon, { class: "is-loading" }, {
                default: vue.withCtx(() => [
                  vue.createVNode(_component_loading)
                ]),
                _: 1
              })
            ])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(_ctx.suggestions, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("li", {
                id: `${_ctx.id}-item-${index}`,
                key: index,
                class: vue.normalizeClass({ highlighted: _ctx.highlightedIndex === index }),
                role: "option",
                "aria-selected": _ctx.highlightedIndex === index,
                onClick: ($event) => _ctx.select(item)
              }, [
                vue.renderSlot(_ctx.$slots, "default", { item }, () => [
                  vue.createTextVNode(vue.toDisplayString(item[_ctx.valueKey]), 1)
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

exports.render = render;
//# sourceMappingURL=index.vue_vue&type=template&id=2f09f285&lang.js.map
