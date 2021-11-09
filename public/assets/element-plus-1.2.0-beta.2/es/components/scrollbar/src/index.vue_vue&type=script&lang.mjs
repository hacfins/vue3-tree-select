import { defineComponent, ref, provide, computed, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { isNumber, toObject, addUnit } from '../../../utils/util.mjs';
import { debugWarn } from '../../../utils/error.mjs';
import './bar.mjs';
import script$1 from './bar.vue_vue&type=script&lang.mjs';
import { isArray, isString } from '@vue/shared';

var script = defineComponent({
  name: "ElScrollbar",
  components: { Bar: script$1 },
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
    const sizeWidth = ref("0");
    const sizeHeight = ref("0");
    const moveX = ref(0);
    const moveY = ref(0);
    const scrollbar = ref(null);
    const wrap = ref(null);
    const resize = ref(null);
    const ratioY = ref(1);
    const ratioX = ref(1);
    const SCOPE = "ElScrollbar";
    const GAP = 4;
    provide("scrollbar", scrollbar);
    provide("scrollbar-wrap", wrap);
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
      if (!isNumber(value)) {
        debugWarn(SCOPE, "value must be a number");
        return;
      }
      wrap.value.scrollTop = value;
    };
    const setScrollLeft = (value) => {
      if (!isNumber(value)) {
        debugWarn(SCOPE, "value must be a number");
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
    const style = computed(() => {
      let style2 = props.wrapStyle;
      if (isArray(style2)) {
        style2 = toObject(style2);
        style2.height = addUnit(props.height);
        style2.maxHeight = addUnit(props.maxHeight);
      } else if (isString(style2)) {
        style2 += addUnit(props.height) ? `height: ${addUnit(props.height)};` : "";
        style2 += addUnit(props.maxHeight) ? `max-height: ${addUnit(props.maxHeight)};` : "";
      }
      return style2;
    });
    onMounted(() => {
      if (!props.native) {
        nextTick(update);
      }
      if (!props.noresize) {
        addResizeListener(resize.value, update);
        addEventListener("resize", update);
      }
    });
    onBeforeUnmount(() => {
      if (!props.noresize) {
        removeResizeListener(resize.value, update);
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

export { script as default };
//# sourceMappingURL=index.vue_vue&type=script&lang.mjs.map
