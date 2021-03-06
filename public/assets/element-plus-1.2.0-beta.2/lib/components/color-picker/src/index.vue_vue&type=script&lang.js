'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var debounce = require('lodash/debounce');
var index = require('../../button/index.js');
var index$3 = require('../../icon/index.js');
require('../../../directives/index.js');
require('../../../tokens/index.js');
require('../../../hooks/index.js');
var index$1 = require('../../popper/index.js');
var index$2 = require('../../input/index.js');
var constants = require('../../../utils/constants.js');
var util = require('../../../utils/util.js');
var validators = require('../../../utils/validators.js');
var icons = require('@element-plus/icons');
require('./components/alpha-slider.js');
require('./components/hue-slider.js');
require('./components/predefine.js');
require('./components/sv-panel.js');
var color = require('./color.js');
var useOption = require('./useOption.js');
var svPanel_vue_vue_type_script_lang = require('./components/sv-panel.vue_vue&type=script&lang.js');
var hueSlider_vue_vue_type_script_lang = require('./components/hue-slider.vue_vue&type=script&lang.js');
var alphaSlider_vue_vue_type_script_lang = require('./components/alpha-slider.vue_vue&type=script&lang.js');
var predefine_vue_vue_type_script_lang = require('./components/predefine.vue_vue&type=script&lang.js');
var index$4 = require('../../../directives/click-outside/index.js');
var index$5 = require('../../../hooks/use-locale/index.js');
var form = require('../../../tokens/form.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

var script = vue.defineComponent({
  name: "ElColorPicker",
  components: {
    ElButton: index.ElButton,
    ElPopper: index$1["default"],
    ElInput: index$2.ElInput,
    ElIcon: index$3.ElIcon,
    Close: icons.Close,
    ArrowDown: icons.ArrowDown,
    SvPanel: svPanel_vue_vue_type_script_lang["default"],
    HueSlider: hueSlider_vue_vue_type_script_lang["default"],
    AlphaSlider: alphaSlider_vue_vue_type_script_lang["default"],
    Predefine: predefine_vue_vue_type_script_lang["default"]
  },
  directives: {
    ClickOutside: index$4["default"]
  },
  props: {
    modelValue: String,
    showAlpha: Boolean,
    colorFormat: String,
    disabled: Boolean,
    size: {
      type: String,
      validator: validators.isValidComponentSize
    },
    popperClass: String,
    predefine: Array
  },
  emits: ["change", "active-change", constants.UPDATE_MODEL_EVENT],
  setup(props, { emit }) {
    const ELEMENT = util.useGlobalConfig();
    const { t } = index$5.useLocaleInject();
    const elForm = vue.inject(form.elFormKey, {});
    const elFormItem = vue.inject(form.elFormItemKey, {});
    const hue = vue.ref(null);
    const svPanel = vue.ref(null);
    const alpha = vue.ref(null);
    const popper = vue.ref(null);
    const color$1 = vue.reactive(new color["default"]({
      enableAlpha: props.showAlpha,
      format: props.colorFormat
    }));
    const showPicker = vue.ref(false);
    const showPanelColor = vue.ref(false);
    const customInput = vue.ref("");
    const displayedColor = vue.computed(() => {
      if (!props.modelValue && !showPanelColor.value) {
        return "transparent";
      }
      return displayedRgb(color$1, props.showAlpha);
    });
    const colorSize = vue.computed(() => {
      return props.size || elFormItem.size || ELEMENT.size;
    });
    const colorDisabled = vue.computed(() => {
      return props.disabled || elForm.disabled;
    });
    const currentColor = vue.computed(() => {
      return !props.modelValue && !showPanelColor.value ? "" : color$1.value;
    });
    vue.watch(() => props.modelValue, (newVal) => {
      if (!newVal) {
        showPanelColor.value = false;
      } else if (newVal && newVal !== color$1.value) {
        color$1.fromString(newVal);
      }
    });
    vue.watch(() => currentColor.value, (val) => {
      customInput.value = val;
      emit("active-change", val);
    });
    vue.watch(() => color$1.value, () => {
      if (!props.modelValue && !showPanelColor.value) {
        showPanelColor.value = true;
      }
    });
    function displayedRgb(color2, showAlpha) {
      if (!(color2 instanceof color["default"])) {
        throw Error("color should be instance of _color Class");
      }
      const { r, g, b } = color2.toRgb();
      return showAlpha ? `rgba(${r}, ${g}, ${b}, ${color2.get("alpha") / 100})` : `rgb(${r}, ${g}, ${b})`;
    }
    function setShowPicker(value) {
      showPicker.value = value;
    }
    const debounceSetShowPicker = debounce__default["default"](setShowPicker, 100);
    function hide() {
      debounceSetShowPicker(false);
      resetColor();
    }
    function resetColor() {
      vue.nextTick(() => {
        if (props.modelValue) {
          color$1.fromString(props.modelValue);
        } else {
          showPanelColor.value = false;
        }
      });
    }
    function handleTrigger() {
      if (colorDisabled.value)
        return;
      debounceSetShowPicker(!showPicker.value);
    }
    function handleConfirm() {
      color$1.fromString(customInput.value);
    }
    function confirmValue() {
      var _a;
      const value = color$1.value;
      emit(constants.UPDATE_MODEL_EVENT, value);
      emit("change", value);
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      debounceSetShowPicker(false);
      vue.nextTick(() => {
        const newColor = new color["default"]({
          enableAlpha: props.showAlpha,
          format: props.colorFormat
        });
        newColor.fromString(props.modelValue);
        if (!color$1.compare(newColor)) {
          resetColor();
        }
      });
    }
    function clear() {
      var _a;
      debounceSetShowPicker(false);
      emit(constants.UPDATE_MODEL_EVENT, null);
      emit("change", null);
      if (props.modelValue !== null) {
        (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
      resetColor();
    }
    vue.onMounted(() => {
      if (props.modelValue) {
        color$1.fromString(props.modelValue);
        customInput.value = currentColor.value;
      }
    });
    vue.watch(() => showPicker.value, () => {
      vue.nextTick(() => {
        var _a, _b, _c;
        (_a = hue.value) == null ? void 0 : _a.update();
        (_b = svPanel.value) == null ? void 0 : _b.update();
        (_c = alpha.value) == null ? void 0 : _c.update();
      });
    });
    vue.provide(useOption.OPTIONS_KEY, {
      currentColor
    });
    return {
      Effect: defaults.Effect,
      color: color$1,
      colorDisabled,
      colorSize,
      displayedColor,
      showPanelColor,
      showPicker,
      customInput,
      handleConfirm,
      hide,
      handleTrigger,
      clear,
      confirmValue,
      t,
      hue,
      svPanel,
      alpha,
      popper
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
