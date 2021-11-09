'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var resizeEvent = require('../../../utils/resize-event.js');
var util = require('../../../utils/util.js');
var error = require('../../../utils/error.js');
require('./bar.js');
var bar_vue_vue_type_script_lang = require('./bar.vue_vue&type=script&lang.js');
var shared = require('@vue/shared');

var script = vue.defineComponent({
  name: "ElScrollbar",
  components: { Bar: bar_vue_vue_type_script_lang["default"] },
  props: {
    height: {
      type: [String, Number],
      default: ""
    },
    maxHeight: {
      type: [String, Number],
      default: ""
    },
    native: {
      type: Boolean,
      default: false
    },
    wrapStyle: {
      type: [String, Array],
      default: ""
    },
    wrapClass: {
      type: [String, Array],
      default: ""
    },
    viewClass: {
      type: [String, Array],
      default: ""
    },
    viewStyle: {
      type: [String, Array],
      default: ""
    },
    noresize: Boolean,
    tag: {
      type: String,
      default: "div"
    },
    always: {
      type: Boolean,
      default: false
    },
    minSize: {
      type: Number,
      default: 20
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const sizeWidth = vue.ref("0");
    const sizeHeight = vue.ref("0");
    const moveX = vue.ref(0);
    const moveY = vue.ref(0);
    const scrollbar = vue.ref(null);
    const wrap = vue.ref(null);
    const resize = vue.ref(null);
    const ratioY = vue.ref(1);
    const ratioX = vue.ref(1);
    const SCOPE = "ElScrollbar";
    const GAP = 4;
    vue.provide("scrollbar", scrollbar);
    vue.provide("scrollbar-wrap", wrap);
    const handleScroll = () => {
      if (wrap.value) {
        const offsetHeight = wrap.value.offsetHeight - GAP;
        const offsetWidth = wrap.value.offsetWidth - GAP;
        moveY.value = wrap.value.scrollTop * 100 / offsetHeight * ratioY.value;
        moveX.value = wrap.value.scrollLeft * 100 / offsetWidth * ratioX.value;
        emit("scroll", {
          scrollTop: wrap.value.scrollTop,
          scrollLeft: wrap.value.scrollLeft
        });
      }
    };
    const setScrollTop = (value) => {
      if (!util.isNumber(value)) {
        error.debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!util.isNumber(value)) {
        error.debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap.value.scrollLeft = value;
    };
    const update = () => {
      if (!wrap.value)
        return;
      const offsetHeight = wrap.value.offsetHeight - GAP;
      const offsetWidth = wrap.value.offsetWidth - GAP;
      const originalHeight = offsetHeight ** 2 / wrap.value.scrollHeight;
      const originalWidth = offsetWidth ** 2 / wrap.value.scrollWidth;
      const height = Math.max(originalHeight, props.minSize);
      const width = Math.max(originalWidth, props.minSize);
      ratioY.value = originalHeight / (offsetHeight - originalHeight) / (height / (offsetHeight - height));
      ratioX.value = originalWidth / (offsetWidth - originalWidth) / (width / (offsetWidth - width));
      sizeHeight.value = height + GAP < offsetHeight ? `${height}px` : "";
      sizeWidth.value = width + GAP < offsetWidth ? `${width}px` : "";
    };
    const style = vue.computed(() => {
      let style2 = props.wrapStyle;
      if (shared.isArray(style2)) {
        style2 = util.toObject(style2);
        style2.height = util.addUnit(props.height);
        style2.maxHeight = util.addUnit(props.maxHeight);
      } else if (shared.isString(style2)) {
        style2 += util.addUnit(props.height) ? `height: ${util.addUnit(props.height)};` : "";
        style2 += util.addUnit(props.maxHeight) ? `max-height: ${util.addUnit(props.maxHeight)};` : "";
      }
      return style2;
    });
    vue.onMounted(() => {
      if (!props.native) {
        vue.nextTick(update);
      }
      if (!props.noresize) {
        resizeEvent.addResizeListener(resize.value, update);
        addEventListener("resize", update);
      }
    });
    vue.onBeforeUnmount(() => {
      if (!props.noresize) {
        resizeEvent.removeResizeListener(resize.value, update);
        removeEventListener("resize", update);
      }
    });
    return {
      moveX,
      moveY,
      ratioX,
      ratioY,
      sizeWidth,
      sizeHeight,
      style,
      scrollbar,
      wrap,
      resize,
      update,
      handleScroll,
      setScrollTop,
      setScrollLeft
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
