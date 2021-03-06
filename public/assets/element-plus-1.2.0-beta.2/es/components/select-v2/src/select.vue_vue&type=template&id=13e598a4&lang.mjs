import { resolveComponent, resolveDirective, withDirectives, openBlock, createElementBlock, normalizeClass, withModifiers, createVNode, withCtx, createElementVNode, renderSlot, createCommentVNode, normalizeStyle, toDisplayString, createBlock, Fragment, renderList, withKeys, resolveDynamicComponent, vShow, normalizeProps, guardReactiveProps } from 'vue';

const _hoisted_1 = { key: 0 };
const _hoisted_2 = {
  key: 1,
  class: "el-select-v2__selection"
};
const _hoisted_3 = {
  key: 0,
  class: "el-select-v2__selected-item"
};
const _hoisted_4 = ["id", "autocomplete", "aria-expanded", "aria-labelledby", "disabled", "readonly", "name", "unselectable"];
const _hoisted_5 = ["textContent"];
const _hoisted_6 = { class: "el-select-v2__selected-item el-select-v2__input-wrapper" };
const _hoisted_7 = ["id", "aria-labelledby", "aria-expanded", "autocomplete", "disabled", "name", "readonly", "unselectable"];
const _hoisted_8 = ["textContent"];
const _hoisted_9 = { class: "el-select-v2__suffix" };
const _hoisted_10 = { class: "el-select-v2__empty" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_tag = resolveComponent("el-tag");
  const _component_el_icon = resolveComponent("el-icon");
  const _component_el_select_menu = resolveComponent("el-select-menu");
  const _component_el_popper = resolveComponent("el-popper");
  const _directive_model_text = resolveDirective("model-text");
  const _directive_click_outside = resolveDirective("click-outside");
  return withDirectives((openBlock(), createElementBlock("div", {
    ref: "selectRef",
    class: normalizeClass([[_ctx.selectSize ? "el-select-v2--" + _ctx.selectSize : ""], "el-select-v2"]),
    onClick: _cache[24] || (_cache[24] = withModifiers((...args) => _ctx.toggleMenu && _ctx.toggleMenu(...args), ["stop"])),
    onMouseenter: _cache[25] || (_cache[25] = ($event) => _ctx.states.comboBoxHovering = true),
    onMouseleave: _cache[26] || (_cache[26] = ($event) => _ctx.states.comboBoxHovering = false)
  }, [
    createVNode(_component_el_popper, {
      ref: "popper",
      visible: _ctx.dropdownMenuVisible,
      "onUpdate:visible": _cache[22] || (_cache[22] = ($event) => _ctx.dropdownMenuVisible = $event),
      "append-to-body": _ctx.popperAppendToBody,
      "popper-class": `el-select-v2__popper ${_ctx.popperClass}`,
      "gpu-acceleration": false,
      "stop-popper-mouse-event": false,
      "popper-options": _ctx.popperOptions,
      "fallback-placements": ["bottom-start", "top-start", "right", "left"],
      effect: _ctx.Effect.LIGHT,
      "manual-mode": "",
      placement: "bottom-start",
      pure: "",
      transition: "el-zoom-in-top",
      trigger: "click",
      onBeforeEnter: _ctx.handleMenuEnter,
      onAfterLeave: _cache[23] || (_cache[23] = ($event) => _ctx.states.inputValue = _ctx.states.displayInputValue)
    }, {
      trigger: withCtx(() => {
        var _a;
        return [
          createElementVNode("div", {
            ref: "selectionRef",
            class: normalizeClass(["el-select-v2__wrapper", {
              "is-focused": _ctx.states.isComposing,
              "is-hovering": _ctx.states.comboBoxHovering,
              "is-filterable": _ctx.filterable,
              "is-disabled": _ctx.disabled
            }])
          }, [
            _ctx.$slots.prefix ? (openBlock(), createElementBlock("div", _hoisted_1, [
              renderSlot(_ctx.$slots, "prefix")
            ])) : createCommentVNode("v-if", true),
            _ctx.multiple ? (openBlock(), createElementBlock("div", _hoisted_2, [
              _ctx.collapseTags && _ctx.modelValue.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(_component_el_tag, {
                  closable: !_ctx.selectDisabled && !((_a = _ctx.states.cachedOptions[0]) == null ? void 0 : _a.disable),
                  size: _ctx.collapseTagSize,
                  type: "info",
                  "disable-transitions": "",
                  onClose: _cache[0] || (_cache[0] = ($event) => _ctx.deleteTag($event, _ctx.states.cachedOptions[0]))
                }, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createElementVNode("span", {
                        class: "el-select-v2__tags-text",
                        style: normalizeStyle({
                          maxWidth: `${_ctx.tagMaxWidth}px`
                        })
                      }, toDisplayString((_a2 = _ctx.states.cachedOptions[0]) == null ? void 0 : _a2.label), 5)
                    ];
                  }),
                  _: 1
                }, 8, ["closable", "size"]),
                _ctx.modelValue.length > 1 ? (openBlock(), createBlock(_component_el_tag, {
                  key: 0,
                  closable: false,
                  size: _ctx.collapseTagSize,
                  type: "info",
                  "disable-transitions": ""
                }, {
                  default: withCtx(() => [
                    createElementVNode("span", {
                      class: "el-select-v2__tags-text",
                      style: normalizeStyle({
                        maxWidth: `${_ctx.tagMaxWidth}px`
                      })
                    }, "+ " + toDisplayString(_ctx.modelValue.length - 1), 5)
                  ]),
                  _: 1
                }, 8, ["size"])) : createCommentVNode("v-if", true)
              ])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(_ctx.states.cachedOptions, (selected, idx) => {
                return openBlock(), createElementBlock("div", {
                  key: idx,
                  class: "el-select-v2__selected-item"
                }, [
                  createVNode(_component_el_tag, {
                    key: _ctx.getValueKey(selected),
                    closable: !_ctx.selectDisabled && !selected.disabled,
                    size: _ctx.collapseTagSize,
                    type: "info",
                    "disable-transitions": "",
                    onClose: ($event) => _ctx.deleteTag($event, selected)
                  }, {
                    default: withCtx(() => [
                      createElementVNode("span", {
                        class: "el-select-v2__tags-text",
                        style: normalizeStyle({
                          maxWidth: `${_ctx.tagMaxWidth}px`
                        })
                      }, toDisplayString(_ctx.getLabel(selected)), 5)
                    ]),
                    _: 2
                  }, 1032, ["closable", "size", "onClose"])
                ]);
              }), 128)),
              createElementVNode("div", {
                class: "el-select-v2__selected-item el-select-v2__input-wrapper",
                style: normalizeStyle(_ctx.inputWrapperStyle)
              }, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.id,
                  ref: "inputRef",
                  autocomplete: _ctx.autocomplete,
                  "aria-autocomplete": "list",
                  "aria-haspopup": "listbox",
                  autocapitalize: "off",
                  "aria-expanded": _ctx.expanded,
                  "aria-labelledby": _ctx.label,
                  class: normalizeClass(["el-select-v2__combobox-input", [_ctx.selectSize ? `is-${_ctx.selectSize}` : ""]]),
                  disabled: _ctx.disabled,
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  type: "text",
                  name: _ctx.name,
                  unselectable: _ctx.expanded ? "on" : void 0,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = (...args) => _ctx.onUpdateInputValue && _ctx.onUpdateInputValue(...args)),
                  onFocus: _cache[2] || (_cache[2] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                  onInput: _cache[3] || (_cache[3] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                  onCompositionstart: _cache[4] || (_cache[4] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                  onCompositionupdate: _cache[5] || (_cache[5] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                  onCompositionend: _cache[6] || (_cache[6] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                  onKeydown: [
                    _cache[7] || (_cache[7] = withKeys(withModifiers(($event) => _ctx.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
                    _cache[8] || (_cache[8] = withKeys(withModifiers(($event) => _ctx.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
                    _cache[9] || (_cache[9] = withKeys(withModifiers((...args) => _ctx.onKeyboardSelect && _ctx.onKeyboardSelect(...args), ["stop", "prevent"]), ["enter"])),
                    _cache[10] || (_cache[10] = withKeys(withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"])),
                    _cache[11] || (_cache[11] = withKeys(withModifiers((...args) => _ctx.handleDel && _ctx.handleDel(...args), ["stop"]), ["delete"]))
                  ]
                }, null, 42, _hoisted_4), [
                  [_directive_model_text, _ctx.states.displayInputValue]
                ]),
                _ctx.filterable ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  ref: "calculatorRef",
                  "aria-hidden": "true",
                  class: "el-select-v2__input-calculator",
                  textContent: toDisplayString(_ctx.states.displayInputValue)
                }, null, 8, _hoisted_5)) : createCommentVNode("v-if", true)
              ], 4)
            ])) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
              createElementVNode("div", _hoisted_6, [
                withDirectives(createElementVNode("input", {
                  id: _ctx.id,
                  ref: "inputRef",
                  "aria-autocomplete": "list",
                  "aria-haspopup": "listbox",
                  "aria-labelledby": _ctx.label,
                  "aria-expanded": _ctx.expanded,
                  autocapitalize: "off",
                  autocomplete: _ctx.autocomplete,
                  class: "el-select-v2__combobox-input",
                  disabled: _ctx.disabled,
                  name: _ctx.name,
                  role: "combobox",
                  readonly: !_ctx.filterable,
                  spellcheck: "false",
                  type: "text",
                  unselectable: _ctx.expanded ? "on" : void 0,
                  onCompositionstart: _cache[12] || (_cache[12] = (...args) => _ctx.handleCompositionStart && _ctx.handleCompositionStart(...args)),
                  onCompositionupdate: _cache[13] || (_cache[13] = (...args) => _ctx.handleCompositionUpdate && _ctx.handleCompositionUpdate(...args)),
                  onCompositionend: _cache[14] || (_cache[14] = (...args) => _ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args)),
                  onFocus: _cache[15] || (_cache[15] = (...args) => _ctx.handleFocus && _ctx.handleFocus(...args)),
                  onInput: _cache[16] || (_cache[16] = (...args) => _ctx.onInput && _ctx.onInput(...args)),
                  onKeydown: [
                    _cache[17] || (_cache[17] = withKeys(withModifiers(($event) => _ctx.onKeyboardNavigate("backward"), ["stop", "prevent"]), ["up"])),
                    _cache[18] || (_cache[18] = withKeys(withModifiers(($event) => _ctx.onKeyboardNavigate("forward"), ["stop", "prevent"]), ["down"])),
                    _cache[19] || (_cache[19] = withKeys(withModifiers((...args) => _ctx.onKeyboardSelect && _ctx.onKeyboardSelect(...args), ["stop", "prevent"]), ["enter"])),
                    _cache[20] || (_cache[20] = withKeys(withModifiers((...args) => _ctx.handleEsc && _ctx.handleEsc(...args), ["stop", "prevent"]), ["esc"]))
                  ],
                  "onUpdate:modelValue": _cache[21] || (_cache[21] = (...args) => _ctx.onUpdateInputValue && _ctx.onUpdateInputValue(...args))
                }, null, 40, _hoisted_7), [
                  [_directive_model_text, _ctx.states.displayInputValue]
                ])
              ]),
              _ctx.filterable ? (openBlock(), createElementBlock("span", {
                key: 0,
                ref: "calculatorRef",
                "aria-hidden": "true",
                class: "el-select-v2__selected-item el-select-v2__input-calculator",
                textContent: toDisplayString(_ctx.states.displayInputValue)
              }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true)
            ], 64)),
            _ctx.shouldShowPlaceholder ? (openBlock(), createElementBlock("span", {
              key: 3,
              class: normalizeClass({
                "el-select-v2__placeholder": true,
                "is-transparent": _ctx.states.isComposing || (_ctx.placeholder && _ctx.multiple ? _ctx.modelValue.length === 0 : !_ctx.modelValue)
              })
            }, toDisplayString(_ctx.currentPlaceholder), 3)) : createCommentVNode("v-if", true),
            createElementVNode("span", _hoisted_9, [
              _ctx.iconComponent ? withDirectives((openBlock(), createBlock(_component_el_icon, {
                key: 0,
                class: normalizeClass(["el-select-v2__caret", "el-input__icon", _ctx.iconReverse])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.iconComponent)))
                ]),
                _: 1
              }, 8, ["class"])), [
                [vShow, !_ctx.showClearBtn]
              ]) : createCommentVNode("v-if", true),
              _ctx.showClearBtn && _ctx.clearIcon ? (openBlock(), createBlock(_component_el_icon, {
                key: 1,
                class: "el-select-v2__caret el-input__icon",
                onClick: withModifiers(_ctx.handleClear, ["prevent", "stop"])
              }, {
                default: withCtx(() => [
                  (openBlock(), createBlock(resolveDynamicComponent(_ctx.clearIcon)))
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("v-if", true)
            ])
          ], 2)
        ];
      }),
      default: withCtx(() => [
        createVNode(_component_el_select_menu, {
          ref: "menuRef",
          data: _ctx.filteredOptions,
          width: _ctx.popperSize,
          "hovering-index": _ctx.states.hoveringIndex,
          "scrollbar-always-on": _ctx.scrollbarAlwaysOn
        }, {
          default: withCtx((scope) => [
            renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(scope)))
          ]),
          empty: withCtx(() => [
            renderSlot(_ctx.$slots, "empty", {}, () => [
              createElementVNode("p", _hoisted_10, toDisplayString(_ctx.emptyText ? _ctx.emptyText : ""), 1)
            ])
          ]),
          _: 3
        }, 8, ["data", "width", "hovering-index", "scrollbar-always-on"])
      ]),
      _: 3
    }, 8, ["visible", "append-to-body", "popper-class", "popper-options", "effect", "onBeforeEnter"])
  ], 34)), [
    [_directive_click_outside, _ctx.handleClickOutside, _ctx.popperRef]
  ]);
}

export { render };
//# sourceMappingURL=select.vue_vue&type=template&id=13e598a4&lang.mjs.map
