import { resolveComponent, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, withKeys, createBlock, withCtx, resolveDynamicComponent, createCommentVNode, toDisplayString, normalizeStyle, Fragment, createVNode } from 'vue';

const _hoisted_1 = ["aria-checked", "aria-disabled"];
const _hoisted_2 = ["id", "name", "true-value", "false-value", "disabled"];
const _hoisted_3 = ["aria-hidden"];
const _hoisted_4 = {
  key: 0,
  class: "el-switch__inner"
};
const _hoisted_5 = ["aria-hidden"];
const _hoisted_6 = ["aria-hidden"];
const _hoisted_7 = { class: "el-switch__action" };
const _hoisted_8 = ["aria-hidden"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = resolveComponent("el-icon");
  const _component_loading = resolveComponent("loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["el-switch", { "is-disabled": _ctx.switchDisabled, "is-checked": _ctx.checked }]),
    role: "switch",
    "aria-checked": _ctx.checked,
    "aria-disabled": _ctx.switchDisabled,
    onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["prevent"]))
  }, [
    createElementVNode("input", {
      id: _ctx.id,
      ref: "input",
      class: "el-switch__input",
      type: "checkbox",
      name: _ctx.name,
      "true-value": _ctx.activeValue,
      "false-value": _ctx.inactiveValue,
      disabled: _ctx.switchDisabled,
      onChange: _cache[0] || (_cache[0] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
      onKeydown: _cache[1] || (_cache[1] = withKeys((...args) => _ctx.switchValue && _ctx.switchValue(...args), ["enter"]))
    }, null, 40, _hoisted_2),
    !_ctx.inlinePrompt && (_ctx.inactiveIcon || _ctx.inactiveText) ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([
        "el-switch__label",
        "el-switch__label--left",
        !_ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.inactiveIcon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      !_ctx.inactiveIcon && _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": _ctx.checked
      }, toDisplayString(_ctx.inactiveText), 9, _hoisted_3)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true),
    createElementVNode("span", {
      ref: "core",
      class: "el-switch__core",
      style: normalizeStyle({ width: (_ctx.width || 40) + "px" })
    }, [
      _ctx.inlinePrompt ? (openBlock(), createElementBlock("div", _hoisted_4, [
        _ctx.activeIcon || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          _ctx.activeIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 0,
            class: normalizeClass(["is-icon", _ctx.checked ? "is-show" : "is-hide"])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true),
          _ctx.inactiveIcon ? (openBlock(), createBlock(_component_el_icon, {
            key: 1,
            class: normalizeClass(["is-icon", !_ctx.checked ? "is-show" : "is-hide"])
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(_ctx.inactiveIcon)))
            ]),
            _: 1
          }, 8, ["class"])) : createCommentVNode("v-if", true)
        ], 64)) : _ctx.activeText || _ctx.inactiveIcon ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          _ctx.activeText ? (openBlock(), createElementBlock("span", {
            key: 0,
            class: normalizeClass(["is-text", _ctx.checked ? "is-show" : "is-hide"]),
            "aria-hidden": !_ctx.checked
          }, toDisplayString(_ctx.activeText.substr(0, 1)), 11, _hoisted_5)) : createCommentVNode("v-if", true),
          _ctx.inactiveText ? (openBlock(), createElementBlock("span", {
            key: 1,
            class: normalizeClass(["is-text", !_ctx.checked ? "is-show" : "is-hide"]),
            "aria-hidden": _ctx.checked
          }, toDisplayString(_ctx.inactiveText.substr(0, 1)), 11, _hoisted_6)) : createCommentVNode("v-if", true)
        ], 64)) : createCommentVNode("v-if", true)
      ])) : createCommentVNode("v-if", true),
      createElementVNode("div", _hoisted_7, [
        _ctx.loading ? (openBlock(), createBlock(_component_el_icon, {
          key: 0,
          class: "is-loading"
        }, {
          default: withCtx(() => [
            createVNode(_component_loading)
          ]),
          _: 1
        })) : createCommentVNode("v-if", true)
      ])
    ], 4),
    !_ctx.inlinePrompt && (_ctx.activeIcon || _ctx.activeText) ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass([
        "el-switch__label",
        "el-switch__label--right",
        _ctx.checked ? "is-active" : ""
      ])
    }, [
      _ctx.activeIcon ? (openBlock(), createBlock(_component_el_icon, { key: 0 }, {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.activeIcon)))
        ]),
        _: 1
      })) : createCommentVNode("v-if", true),
      !_ctx.activeIcon && _ctx.activeText ? (openBlock(), createElementBlock("span", {
        key: 1,
        "aria-hidden": !_ctx.checked
      }, toDisplayString(_ctx.activeText), 9, _hoisted_8)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}

export { render };
//# sourceMappingURL=index.vue_vue&type=template&id=ee4fcade&lang.mjs.map
