'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = {
  key: 0,
  class: "el-input-group__prepend"
};
const _hoisted_2 = ["type", "disabled", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"];
const _hoisted_3 = {
  key: 1,
  class: "el-input__prefix"
};
const _hoisted_4 = { class: "el-input__prefix-inner" };
const _hoisted_5 = {
  key: 2,
  class: "el-input__suffix"
};
const _hoisted_6 = { class: "el-input__suffix-inner" };
const _hoisted_7 = {
  key: 3,
  class: "el-input__count"
};
const _hoisted_8 = { class: "el-input__count-inner" };
const _hoisted_9 = {
  key: 3,
  class: "el-input-group__append"
};
const _hoisted_10 = ["tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"];
const _hoisted_11 = {
  key: 0,
  class: "el-input__count"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_circle_close = vue.resolveComponent("circle-close");
  const _component_icon_view = vue.resolveComponent("icon-view");
  return vue.withDirectives((vue.openBlock(), vue.createElementBlock("div", {
    class: vue.normalizeClass([
      _ctx.type === "textarea" ? "el-textarea" : "el-input",
      _ctx.inputSize ? "el-input--" + _ctx.inputSize : "",
      {
        "is-disabled": _ctx.inputDisabled,
        "is-exceed": _ctx.inputExceed,
        "el-input-group": _ctx.$slots.prepend || _ctx.$slots.append,
        "el-input-group--append": _ctx.$slots.append,
        "el-input-group--prepend": _ctx.$slots.prepend,
        "el-input--prefix": _ctx.$slots.prefix || _ctx.prefixIcon,
        "el-input--suffix": _ctx.$slots.suffix || _ctx.suffixIcon || _ctx.clearable || _ctx.showPassword,
        "el-input--suffix--password-clear": _ctx.clearable && _ctx.showPassword
      },
      _ctx.$attrs.class
    ]),
    style: vue.normalizeStyle(_ctx.containerStyle),
    onMouseenter: _cache[17] || (_cache[17] = (...args) => _ctx.onMouseEnter && _ctx.onMouseEnter(...args)),
    onMouseleave: _cache[18] || (_cache[18] = (...args) => _ctx.onMouseLeave && _ctx.onMouseLeave(...args))
  }, [
    vue.createCommentVNode(" input "),
    _ctx.type !== "textarea" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
      vue.createCommentVNode(" prepend slot "),
      _ctx.$slots.prepend ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
        vue.renderSlot(_ctx.$slots, "prepend")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createElementVNode("input", vue.mergeProps({
        ref: "input",
        class: "el-input__inner"
      }, _ctx.attrs, {
        type: _ctx.showPassword ? _ctx.passwordVisible ? "text" : "password" : _ctx.type,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        tabindex: _ctx.tabindex,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        style: _ctx.inputStyle,
        onCompositionstart: _cache[0] || (_cache[0] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[1] || (_cache[1] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[2] || (_cache[2] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[4] || (_cache[4] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[5] || (_cache[5] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[6] || (_cache[6] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[7] || (_cache[7] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_2),
      vue.createCommentVNode(" prefix slot "),
      _ctx.$slots.prefix || _ctx.prefixIcon ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_3, [
        vue.createElementVNode("span", _hoisted_4, [
          vue.renderSlot(_ctx.$slots, "prefix"),
          _ctx.prefixIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 0,
            class: "el-input__icon"
          }, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.prefixIcon)))
            ]),
            _: 1
          })) : vue.createCommentVNode("v-if", true)
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" suffix slot "),
      _ctx.suffixVisible ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_5, [
        vue.createElementVNode("span", _hoisted_6, [
          !_ctx.showClear || !_ctx.showPwdVisible || !_ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 0 }, [
            vue.renderSlot(_ctx.$slots, "suffix"),
            _ctx.suffixIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
              key: 0,
              class: "el-input__icon"
            }, {
              default: vue.withCtx(() => [
                (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.suffixIcon)))
              ]),
              _: 1
            })) : vue.createCommentVNode("v-if", true)
          ], 64)) : vue.createCommentVNode("v-if", true),
          _ctx.showClear ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 1,
            class: "el-input__icon el-input__clear",
            onMousedown: _cache[8] || (_cache[8] = vue.withModifiers(() => {
            }, ["prevent"])),
            onClick: _ctx.clear
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_circle_close)
            ]),
            _: 1
          }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          _ctx.showPwdVisible ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
            key: 2,
            class: "el-input__icon el-input__clear",
            onClick: _ctx.handlePasswordVisible
          }, {
            default: vue.withCtx(() => [
              vue.createVNode(_component_icon_view)
            ]),
            _: 1
          }, 8, ["onClick"])) : vue.createCommentVNode("v-if", true),
          _ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_7, [
            vue.createElementVNode("span", _hoisted_8, vue.toDisplayString(_ctx.textLength) + " / " + vue.toDisplayString(_ctx.attrs.maxlength), 1)
          ])) : vue.createCommentVNode("v-if", true)
        ]),
        _ctx.validateState && _ctx.validateIcon ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
          key: 0,
          class: "el-input__icon el-input__validateIcon"
        }, {
          default: vue.withCtx(() => [
            (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.validateIcon)))
          ]),
          _: 1
        })) : vue.createCommentVNode("v-if", true)
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" append slot "),
      _ctx.$slots.append ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_9, [
        vue.renderSlot(_ctx.$slots, "append")
      ])) : vue.createCommentVNode("v-if", true)
    ], 64)) : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
      vue.createCommentVNode(" textarea "),
      vue.createElementVNode("textarea", vue.mergeProps({
        ref: "textarea",
        class: "el-textarea__inner"
      }, _ctx.attrs, {
        tabindex: _ctx.tabindex,
        disabled: _ctx.inputDisabled,
        readonly: _ctx.readonly,
        autocomplete: _ctx.autocomplete,
        style: _ctx.computedTextareaStyle,
        "aria-label": _ctx.label,
        placeholder: _ctx.placeholder,
        onCompositionstart: _cache[9] || (_cache[9] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
        onCompositionupdate: _cache[10] || (_cache[10] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
        onCompositionend: _cache[11] || (_cache[11] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
        onInput: _cache[12] || (_cache[12] = (...args) => _ctx.handleInput && _ctx.handleInput(...args)),
        onFocus: _cache[13] || (_cache[13] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
        onBlur: _cache[14] || (_cache[14] = (...args) => _ctx.handleBlur && _ctx.handleBlur(...args)),
        onChange: _cache[15] || (_cache[15] = (...args) => _ctx.handleChange && _ctx.handleChange(...args)),
        onKeydown: _cache[16] || (_cache[16] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
      }), null, 16, _hoisted_10),
      _ctx.isWordLimitVisible ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_11, vue.toDisplayString(_ctx.textLength) + " / " + vue.toDisplayString(_ctx.attrs.maxlength), 1)) : vue.createCommentVNode("v-if", true)
    ], 64))
  ], 38)), [
    [vue.vShow, _ctx.type !== "hidden"]
  ]);
}

exports.render = render;
//# sourceMappingURL=input.vue_vue&type=template&id=3290dcb6&lang.js.map
