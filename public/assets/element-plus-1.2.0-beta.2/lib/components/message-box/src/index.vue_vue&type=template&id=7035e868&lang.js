'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

const _hoisted_1 = ["aria-label"];
const _hoisted_2 = {
  key: 0,
  class: "el-message-box__header"
};
const _hoisted_3 = { class: "el-message-box__title" };
const _hoisted_4 = { class: "el-message-box__content" };
const _hoisted_5 = { class: "el-message-box__container" };
const _hoisted_6 = {
  key: 1,
  class: "el-message-box__message"
};
const _hoisted_7 = { key: 0 };
const _hoisted_8 = ["innerHTML"];
const _hoisted_9 = { class: "el-message-box__input" };
const _hoisted_10 = { class: "el-message-box__btns" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_icon = vue.resolveComponent("el-icon");
  const _component_close = vue.resolveComponent("close");
  const _component_el_input = vue.resolveComponent("el-input");
  const _component_el_button = vue.resolveComponent("el-button");
  const _component_el_overlay = vue.resolveComponent("el-overlay");
  const _directive_trap_focus = vue.resolveDirective("trap-focus");
  return vue.openBlock(), vue.createBlock(vue.Transition, {
    name: "fade-in-linear",
    onAfterLeave: _cache[7] || (_cache[7] = ($event) => _ctx.$emit("vanish"))
  }, {
    default: vue.withCtx(() => [
      vue.withDirectives(vue.createVNode(_component_el_overlay, {
        "z-index": _ctx.zIndex,
        "overlay-class": ["is-message-box", _ctx.modalClass],
        mask: _ctx.modal,
        onClick: vue.withModifiers(_ctx.handleWrapperClick, ["self"])
      }, {
        default: vue.withCtx(() => [
          vue.withDirectives(vue.createElementVNode("div", {
            ref: "root",
            "aria-label": _ctx.title || "dialog",
            "aria-modal": "true",
            class: vue.normalizeClass([
              "el-message-box",
              _ctx.customClass,
              { "el-message-box--center": _ctx.center }
            ]),
            style: vue.normalizeStyle(_ctx.customStyle)
          }, [
            _ctx.title !== null && _ctx.title !== void 0 ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_2, [
              vue.createElementVNode("div", _hoisted_3, [
                _ctx.iconComponent && _ctx.center ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                  key: 0,
                  class: vue.normalizeClass(["el-message-box__status", _ctx.typeClass])
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                vue.createElementVNode("span", null, vue.toDisplayString(_ctx.title), 1)
              ]),
              _ctx.showClose ? (vue.openBlock(), vue.createElementBlock("button", {
                key: 0,
                type: "button",
                class: "el-message-box__headerbtn",
                "aria-label": "Close",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel")),
                onKeydown: _cache[1] || (_cache[1] = vue.withKeys(vue.withModifiers(($event) => _ctx.handleAction(_ctx.distinguishCancelAndClose ? "close" : "cancel"), ["prevent"]), ["enter"]))
              }, [
                vue.createVNode(_component_el_icon, { class: "el-message-box__close" }, {
                  default: vue.withCtx(() => [
                    vue.createVNode(_component_close)
                  ]),
                  _: 1
                })
              ], 32)) : vue.createCommentVNode("v-if", true)
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("div", _hoisted_4, [
              vue.createElementVNode("div", _hoisted_5, [
                _ctx.iconComponent && !_ctx.center && _ctx.hasMessage ? (vue.openBlock(), vue.createBlock(_component_el_icon, {
                  key: 0,
                  class: vue.normalizeClass(["el-message-box__status", _ctx.typeClass])
                }, {
                  default: vue.withCtx(() => [
                    (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(_ctx.iconComponent)))
                  ]),
                  _: 1
                }, 8, ["class"])) : vue.createCommentVNode("v-if", true),
                _ctx.hasMessage ? (vue.openBlock(), vue.createElementBlock("div", _hoisted_6, [
                  vue.renderSlot(_ctx.$slots, "default", {}, () => [
                    !_ctx.dangerouslyUseHTMLString ? (vue.openBlock(), vue.createElementBlock("p", _hoisted_7, vue.toDisplayString(_ctx.message), 1)) : (vue.openBlock(), vue.createElementBlock("p", {
                      key: 1,
                      innerHTML: _ctx.message
                    }, null, 8, _hoisted_8))
                  ])
                ])) : vue.createCommentVNode("v-if", true)
              ]),
              vue.withDirectives(vue.createElementVNode("div", _hoisted_9, [
                vue.createVNode(_component_el_input, {
                  ref: "inputRef",
                  modelValue: _ctx.inputValue,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => _ctx.inputValue = $event),
                  type: _ctx.inputType,
                  placeholder: _ctx.inputPlaceholder,
                  class: vue.normalizeClass({ invalid: _ctx.validateError }),
                  onKeydown: vue.withKeys(vue.withModifiers(_ctx.handleInputEnter, ["prevent"]), ["enter"])
                }, null, 8, ["modelValue", "type", "placeholder", "class", "onKeydown"]),
                vue.createElementVNode("div", {
                  class: "el-message-box__errormsg",
                  style: vue.normalizeStyle({
                    visibility: !!_ctx.editorErrorMessage ? "visible" : "hidden"
                  })
                }, vue.toDisplayString(_ctx.editorErrorMessage), 5)
              ], 512), [
                [vue.vShow, _ctx.showInput]
              ])
            ]),
            vue.createElementVNode("div", _hoisted_10, [
              _ctx.showCancelButton ? (vue.openBlock(), vue.createBlock(_component_el_button, {
                key: 0,
                loading: _ctx.cancelButtonLoading,
                class: vue.normalizeClass([_ctx.cancelButtonClass]),
                round: _ctx.roundButton,
                size: _ctx.buttonSize || "small",
                onClick: _cache[3] || (_cache[3] = ($event) => _ctx.handleAction("cancel")),
                onKeydown: _cache[4] || (_cache[4] = vue.withKeys(vue.withModifiers(($event) => _ctx.handleAction("cancel"), ["prevent"]), ["enter"]))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.cancelButtonText || _ctx.t("el.messagebox.cancel")), 1)
                ]),
                _: 1
              }, 8, ["loading", "class", "round", "size"])) : vue.createCommentVNode("v-if", true),
              vue.withDirectives(vue.createVNode(_component_el_button, {
                ref: "confirmRef",
                loading: _ctx.confirmButtonLoading,
                class: vue.normalizeClass([_ctx.confirmButtonClasses]),
                round: _ctx.roundButton,
                disabled: _ctx.confirmButtonDisabled,
                size: _ctx.buttonSize || "small",
                onClick: _cache[5] || (_cache[5] = ($event) => _ctx.handleAction("confirm")),
                onKeydown: _cache[6] || (_cache[6] = vue.withKeys(vue.withModifiers(($event) => _ctx.handleAction("confirm"), ["prevent"]), ["enter"]))
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(_ctx.confirmButtonText || _ctx.t("el.messagebox.confirm")), 1)
                ]),
                _: 1
              }, 8, ["loading", "class", "round", "disabled", "size"]), [
                [vue.vShow, _ctx.showConfirmButton]
              ])
            ])
          ], 14, _hoisted_1), [
            [_directive_trap_focus]
          ])
        ]),
        _: 3
      }, 8, ["z-index", "overlay-class", "mask", "onClick"]), [
        [vue.vShow, _ctx.visible]
      ])
    ]),
    _: 3
  });
}

exports.render = render;
//# sourceMappingURL=index.vue_vue&type=template&id=7035e868&lang.js.map
