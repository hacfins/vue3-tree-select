import Loading from './index.mjs';

const INSTANCE_NAME = "ElLoading";
const createInstance = (el, binding) => {
  const textExr = el.getAttribute("element-loading-text");
  const spinnerExr = el.getAttribute("element-loading-spinner");
  const svgExr = el.getAttribute("element-loading-svg");
  const svgViewBoxExr = el.getAttribute("element-loading-svg-view-box");
  const backgroundExr = el.getAttribute("element-loading-background");
  const customClassExr = el.getAttribute("element-loading-custom-class");
  const vm = binding.instance;
  el[INSTANCE_NAME] = Loading({
    text: vm && vm[textExr] || textExr,
    svg: vm && vm[svgExr] || svgExr,
    svgViewBox: vm && vm[svgViewBoxExr] || svgViewBoxExr,
    spinner: vm && vm[spinnerExr] || spinnerExr,
    background: vm && vm[backgroundExr] || backgroundExr,
    customClass: vm && vm[customClassExr] || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    target: binding.modifiers.fullscreen ? null : el,
    body: !!binding.modifiers.body,
    visible: true,
    lock: !!binding.modifiers.lock
  });
};
const vLoading = {
  mounted(el, binding) {
    if (binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el[INSTANCE_NAME];
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding);
      } else {
        instance == null ? void 0 : instance.close();
      }
    }
  },
  unmounted(el) {
    var _a;
    (_a = el[INSTANCE_NAME]) == null ? void 0 : _a.close();
  }
};

export { vLoading as default };
//# sourceMappingURL=directive.mjs.map
