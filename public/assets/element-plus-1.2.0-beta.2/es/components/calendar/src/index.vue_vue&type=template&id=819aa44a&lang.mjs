import { resolveComponent, openBlock, createElementBlock, createElementVNode, renderSlot, toDisplayString, createVNode, withCtx, createTextVNode, createCommentVNode, createSlots, normalizeProps, guardReactiveProps, Fragment, renderList, createBlock } from 'vue';

const _hoisted_1 = { class: "el-calendar" };
const _hoisted_2 = { class: "el-calendar__header" };
const _hoisted_3 = { class: "el-calendar__title" };
const _hoisted_4 = {
  key: 0,
  class: "el-calendar__button-group"
};
const _hoisted_5 = {
  key: 0,
  class: "el-calendar__body"
};
const _hoisted_6 = {
  key: 1,
  class: "el-calendar__body"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");
  const _component_el_button_group = resolveComponent("el-button-group");
  const _component_date_table = resolveComponent("date-table");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      renderSlot(_ctx.$slots, "header", { date: _ctx.i18nDate }, () => [
        createElementVNode("div", _hoisted_3, toDisplayString(_ctx.i18nDate), 1),
        _ctx.validatedRange.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_4, [
          createVNode(_component_el_button_group, null, {
            default: withCtx(() => [
              createVNode(_component_el_button, {
                size: "mini",
                onClick: _cache[0] || (_cache[0] = ($event) => _ctx.selectDate("prev-month"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.t("el.datepicker.prevMonth")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                size: "mini",
                onClick: _cache[1] || (_cache[1] = ($event) => _ctx.selectDate("today"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.t("el.datepicker.today")), 1)
                ]),
                _: 1
              }),
              createVNode(_component_el_button, {
                size: "mini",
                onClick: _cache[2] || (_cache[2] = ($event) => _ctx.selectDate("next-month"))
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(_ctx.t("el.datepicker.nextMonth")), 1)
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ])) : createCommentVNode("v-if", true)
      ])
    ]),
    _ctx.validatedRange.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
      createVNode(_component_date_table, {
        date: _ctx.date,
        "selected-day": _ctx.realSelectedDay,
        onPick: _ctx.pickDay
      }, createSlots({ _: 2 }, [
        _ctx.$slots.dateCell ? {
          name: "dateCell",
          fn: withCtx((data) => [
            renderSlot(_ctx.$slots, "dateCell", normalizeProps(guardReactiveProps(data)))
          ])
        } : void 0
      ]), 1032, ["date", "selected-day", "onPick"])
    ])) : (openBlock(), createElementBlock("div", _hoisted_6, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.validatedRange, (range_, index) => {
        return openBlock(), createBlock(_component_date_table, {
          key: index,
          date: range_[0],
          "selected-day": _ctx.realSelectedDay,
          range: range_,
          "hide-header": index !== 0,
          onPick: _ctx.pickDay
        }, createSlots({ _: 2 }, [
          _ctx.$slots.dateCell ? {
            name: "dateCell",
            fn: withCtx((data) => [
              renderSlot(_ctx.$slots, "dateCell", normalizeProps(guardReactiveProps(data)))
            ])
          } : void 0
        ]), 1032, ["date", "selected-day", "range", "hide-header", "onPick"]);
      }), 128))
    ]))
  ]);
}

export { render };
//# sourceMappingURL=index.vue_vue&type=template&id=819aa44a&lang.mjs.map
