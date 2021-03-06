'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var core = require('@vueuse/core');
require('../../../hooks/index.js');
var index = require('../../image-viewer/index.js');
var isServer = require('../../../utils/isServer.js');
var dom = require('../../../utils/dom.js');
var image = require('./image.js');
var index$1 = require('../../../hooks/use-locale/index.js');
var index$2 = require('../../../hooks/use-attrs/index.js');

const isHtmlElement = (e) => e && e.nodeType === Node.ELEMENT_NODE;
let prevOverflow = "";
var script = vue.defineComponent({
  name: "ElImage",
  components: {
    ImageViewer: index.ElImageViewer
  },
  inheritAttrs: false,
  props: image.imageProps,
  emits: image.imageEmits,
  setup(props, { emit, attrs: rawAttrs }) {
    const { t } = index$1.useLocaleInject();
    const attrs = index$2["default"]();
    const hasLoadError = vue.ref(false);
    const loading = vue.ref(true);
    const imgWidth = vue.ref(0);
    const imgHeight = vue.ref(0);
    const showViewer = vue.ref(false);
    const container = vue.ref();
    const _scrollContainer = vue.ref();
    let stopScrollListener;
    let stopWheelListener;
    const containerStyle = vue.computed(() => rawAttrs.style);
    const imageStyle = vue.computed(() => {
      const { fit } = props;
      if (!isServer["default"] && fit) {
        return { objectFit: fit };
      }
      return {};
    });
    const preview = vue.computed(() => {
      const { previewSrcList } = props;
      return Array.isArray(previewSrcList) && previewSrcList.length > 0;
    });
    const imageIndex = vue.computed(() => {
      const { src, previewSrcList, initialIndex } = props;
      let previewIndex = initialIndex;
      const srcIndex = previewSrcList.indexOf(src);
      if (srcIndex >= 0) {
        previewIndex = srcIndex;
      }
      return previewIndex;
    });
    const loadImage = () => {
      if (isServer["default"])
        return;
      loading.value = true;
      hasLoadError.value = false;
      const img = new Image();
      img.addEventListener("load", (e) => handleLoad(e, img));
      img.addEventListener("error", handleError);
      Object.entries(attrs.value).forEach(([key, value]) => {
        if (key.toLowerCase() === "onload")
          return;
        img.setAttribute(key, value);
      });
      img.src = props.src;
    };
    function handleLoad(e, img) {
      imgWidth.value = img.width;
      imgHeight.value = img.height;
      loading.value = false;
      hasLoadError.value = false;
    }
    function handleError(event) {
      loading.value = false;
      hasLoadError.value = true;
      emit("error", event);
    }
    function handleLazyLoad() {
      if (dom.isInContainer(container.value, _scrollContainer.value)) {
        loadImage();
        removeLazyLoadListener();
      }
    }
    const lazyLoadHandler = core.useThrottleFn(handleLazyLoad, 200);
    async function addLazyLoadListener() {
      var _a;
      if (isServer["default"])
        return;
      await vue.nextTick();
      const { scrollContainer } = props;
      if (isHtmlElement(scrollContainer)) {
        _scrollContainer.value = scrollContainer;
      } else if (shared.isString(scrollContainer) && scrollContainer !== "") {
        _scrollContainer.value = (_a = document.querySelector(scrollContainer)) != null ? _a : void 0;
      } else if (container.value) {
        _scrollContainer.value = dom.getScrollContainer(container.value);
      }
      if (_scrollContainer.value) {
        stopScrollListener = core.useEventListener(_scrollContainer, "scroll", lazyLoadHandler);
        setTimeout(() => handleLazyLoad(), 100);
      }
    }
    function removeLazyLoadListener() {
      if (isServer["default"] || !_scrollContainer.value || !lazyLoadHandler)
        return;
      stopScrollListener();
      _scrollContainer.value = void 0;
    }
    function wheelHandler(e) {
      if (!e.ctrlKey)
        return;
      if (e.deltaY < 0) {
        e.preventDefault();
        return false;
      } else if (e.deltaY > 0) {
        e.preventDefault();
        return false;
      }
    }
    function clickHandler() {
      if (!preview.value)
        return;
      stopWheelListener = core.useEventListener("wheel", wheelHandler, {
        passive: false
      });
      prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      showViewer.value = true;
    }
    function closeViewer() {
      stopWheelListener == null ? void 0 : stopWheelListener();
      document.body.style.overflow = prevOverflow;
      showViewer.value = false;
      emit("close");
    }
    function switchViewer(val) {
      emit("switch", val);
    }
    vue.watch(() => props.src, () => {
      if (props.lazy) {
        loading.value = true;
        hasLoadError.value = false;
        removeLazyLoadListener();
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    vue.onMounted(() => {
      if (props.lazy) {
        addLazyLoadListener();
      } else {
        loadImage();
      }
    });
    return {
      attrs,
      loading,
      hasLoadError,
      showViewer,
      containerStyle,
      imageStyle,
      preview,
      imageIndex,
      container,
      clickHandler,
      closeViewer,
      switchViewer,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=image.vue_vue&type=script&lang.js.map
