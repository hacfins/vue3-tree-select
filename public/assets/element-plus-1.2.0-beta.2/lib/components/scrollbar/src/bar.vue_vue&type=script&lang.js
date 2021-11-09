'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var dom = require('../../../utils/dom.js');
var util = require('./util.js');

var script = vue.defineComponent({
  name: "Bar",
  props: {
    vertical: Boolean,
    size: String,
    move: Number,
    ratio: Number,
    always: Boolean
  },
  setup(props) {
    const instance = vue.ref(null);
    const thumb = vue.ref(null);
    const scrollbar = vue.inject("scrollbar", {});
    const wrap = vue.inject("scrollbar-wrap", {});
    const bar = vue.computed(() => util.BAR_MAP[props.vertical ? "vertical" : "horizontal"]);
    const barStore = vue.ref({});
    const cursorDown = vue.ref(null);
    const cursorLeave = vue.ref(null);
    const visible = vue.ref(false);
    let onselectstartStore = null;
    const offsetRatio = vue.computed(() => {
      return instance.value[bar.value.offset] ** 2 / wrap.value[bar.value.scrollSize] / props.ratio / thumb.value[bar.value.offset];
    });
    const clickThumbHandler = (e) => {
      e.stopPropagation();
      if (e.ctrlKey || [1, 2].includes(e.button)) {
        return;
      }
      window.getSelection().removeAllRanges();
      startDrag(e);
      barStore.value[bar.value.axis] = e.currentTarget[bar.value.offset] - (e[bar.value.client] - e.currentTarget.getBoundingClientRect()[bar.value.direction]);
    };
    const clickTrackHandler = (e) => {
      const offset = Math.abs(e.target.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]);
      const thumbHalf = thumb.value[bar.value.offset] / 2;
      const thumbPositionPercentage = (offset - thumbHalf) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
    };
    const startDrag = (e) => {
      e.stopImmediatePropagation();
      cursorDown.value = true;
      dom.on(document, "mousemove", mouseMoveDocumentHandler);
      dom.on(document, "mouseup", mouseUpDocumentHandler);
      onselectstartStore = document.onselectstart;
      document.onselectstart = () => false;
    };
    const mouseMoveDocumentHandler = (e) => {
      if (cursorDown.value === false)
        return;
      const prevPage = barStore.value[bar.value.axis];
      if (!prevPage)
        return;
      const offset = (instance.value.getBoundingClientRect()[bar.value.direction] - e[bar.value.client]) * -1;
      const thumbClickPosition = thumb.value[bar.value.offset] - prevPage;
      const thumbPositionPercentage = (offset - thumbClickPosition) * 100 * offsetRatio.value / instance.value[bar.value.offset];
      wrap.value[bar.value.scroll] = thumbPositionPercentage * wrap.value[bar.value.scrollSize] / 100;
    };
    const mouseUpDocumentHandler = () => {
      cursorDown.value = false;
      barStore.value[bar.value.axis] = 0;
      dom.off(document, "mousemove", mouseMoveDocumentHandler);
      dom.off(document, "mouseup", mouseUpDocumentHandler);
      document.onselectstart = onselectstartStore;
      if (cursorLeave.value) {
        visible.value = false;
      }
    };
    const thumbStyle = vue.computed(() => util.renderThumbStyle({
      size: props.size,
      move: props.move,
      bar: bar.value
    }));
    const mouseMoveScrollbarHandler = () => {
      cursorLeave.value = false;
      visible.value = !!props.size;
    };
    const mouseLeaveScrollbarHandler = () => {
      cursorLeave.value = true;
      visible.value = cursorDown.value;
    };
    vue.onMounted(() => {
      dom.on(scrollbar.value, "mousemove", mouseMoveScrollbarHandler);
      dom.on(scrollbar.value, "mouseleave", mouseLeaveScrollbarHandler);
    });
    vue.onBeforeUnmount(() => {
      dom.off(document, "mouseup", mouseUpDocumentHandler);
      dom.off(scrollbar.value, "mousemove", mouseMoveScrollbarHandler);
      dom.off(scrollbar.value, "mouseleave", mouseLeaveScrollbarHandler);
    });
    return {
      instance,
      thumb,
      bar,
      clickTrackHandler,
      clickThumbHandler,
      thumbStyle,
      visible
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=bar.vue_vue&type=script&lang.js.map
