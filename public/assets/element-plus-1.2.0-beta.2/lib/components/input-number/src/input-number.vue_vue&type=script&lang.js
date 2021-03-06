'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../icon/index.js');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var index = require('../../input/index.js');
var util = require('../../../utils/util.js');
var error = require('../../../utils/error.js');
var icons = require('@element-plus/icons');
var inputNumber = require('./input-number.js');
var index$2 = require('../../../directives/repeat-click/index.js');
var index$3 = require('../../../hooks/use-form-item/index.js');

var script = vue.defineComponent({
  name: "ElInputNumber",
  components: {
    ElInput: index.ElInput,
    ElIcon: index$1.ElIcon,
    ArrowUp: icons.ArrowUp,
    ArrowDown: icons.ArrowDown,
    Plus: icons.Plus,
    Minus: icons.Minus
  },
  directives: {
    RepeatClick: index$2["default"]
  },
  props: inputNumber.inputNumberProps,
  emits: inputNumber.inputNumberEmits,
  setup(props, { emit }) {
    const input = vue.ref();
    const data = vue.reactive({
      currentValue: props.modelValue,
      userInput: null
    });
    const minDisabled = vue.computed(() => _decrease(props.modelValue) < props.min);
    const maxDisabled = vue.computed(() => _increase(props.modelValue) > props.max);
    const numPrecision = vue.computed(() => {
      const stepPrecision = getPrecision(props.step);
      if (props.precision !== void 0) {
        if (stepPrecision > props.precision) {
          error.debugWarn("InputNumber", "precision should not be less than the decimal places of step");
        }
        return props.precision;
      } else {
        return Math.max(getPrecision(props.modelValue), stepPrecision);
      }
    });
    const controlsAtRight = vue.computed(() => {
      return props.controls && props.controlsPosition === "right";
    });
    const { size: inputNumberSize, disabled: inputNumberDisabled } = index$3.useFormItem({});
    const displayValue = vue.computed(() => {
      if (data.userInput !== null) {
        return data.userInput;
      }
      let currentValue = data.currentValue;
      if (util.isNumber(currentValue)) {
        if (Number.isNaN(currentValue))
          return "";
        if (props.precision !== void 0) {
          currentValue = currentValue.toFixed(props.precision);
        }
      }
      return currentValue;
    });
    const toPrecision = (num, pre) => {
      if (pre === void 0)
        pre = numPrecision.value;
      return parseFloat(`${Math.round(num * Math.pow(10, pre)) / Math.pow(10, pre)}`);
    };
    const getPrecision = (value) => {
      if (value === void 0)
        return 0;
      const valueString = value.toString();
      const dotPosition = valueString.indexOf(".");
      let precision = 0;
      if (dotPosition !== -1) {
        precision = valueString.length - dotPosition - 1;
      }
      return precision;
    };
    const _increase = (val) => {
      if (!util.isNumber(val))
        return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      val = util.isNumber(val) ? val : NaN;
      return toPrecision((precisionFactor * val + precisionFactor * props.step) / precisionFactor);
    };
    const _decrease = (val) => {
      if (!util.isNumber(val))
        return data.currentValue;
      const precisionFactor = Math.pow(10, numPrecision.value);
      val = util.isNumber(val) ? val : NaN;
      return toPrecision((precisionFactor * val - precisionFactor * props.step) / precisionFactor);
    };
    const increase = () => {
      if (inputNumberDisabled.value || maxDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = _increase(value);
      setCurrentValue(newVal);
    };
    const decrease = () => {
      if (inputNumberDisabled.value || minDisabled.value)
        return;
      const value = props.modelValue || 0;
      const newVal = _decrease(value);
      setCurrentValue(newVal);
    };
    const setCurrentValue = (newVal) => {
      const oldVal = data.currentValue;
      if (typeof newVal === "number" && props.precision !== void 0) {
        newVal = toPrecision(newVal, props.precision);
      }
      if (newVal !== void 0 && newVal >= props.max)
        newVal = props.max;
      if (newVal !== void 0 && newVal <= props.min)
        newVal = props.min;
      if (oldVal === newVal)
        return;
      if (!util.isNumber(newVal)) {
        newVal = NaN;
      }
      data.userInput = null;
      emit("update:modelValue", newVal);
      emit("input", newVal);
      emit("change", newVal, oldVal);
      data.currentValue = newVal;
    };
    const handleInput = (value) => {
      return data.userInput = value;
    };
    const handleInputChange = (value) => {
      const newVal = Number(value);
      if (util.isNumber(newVal) && !Number.isNaN(newVal) || value === "") {
        setCurrentValue(newVal);
      }
      data.userInput = null;
    };
    const focus = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    };
    const blur = () => {
      var _a, _b;
      (_b = (_a = input.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
    };
    vue.watch(() => props.modelValue, (value) => {
      let newVal = Number(value);
      if (newVal !== void 0) {
        if (isNaN(newVal))
          return;
        if (props.stepStrictly) {
          const stepPrecision = getPrecision(props.step);
          const precisionFactor = Math.pow(10, stepPrecision);
          newVal = Math.round(newVal / props.step) * precisionFactor * props.step / precisionFactor;
        }
        if (props.precision !== void 0) {
          newVal = toPrecision(newVal, props.precision);
        }
      }
      if (newVal !== void 0 && newVal >= props.max) {
        newVal = props.max;
        emit("update:modelValue", newVal);
      }
      if (newVal !== void 0 && newVal <= props.min) {
        newVal = props.min;
        emit("update:modelValue", newVal);
      }
      data.currentValue = newVal;
      data.userInput = null;
    }, { immediate: true });
    vue.onMounted(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput.setAttribute("role", "spinbutton");
      innerInput.setAttribute("aria-valuemax", String(props.max));
      innerInput.setAttribute("aria-valuemin", String(props.min));
      innerInput.setAttribute("aria-valuenow", String(data.currentValue));
      innerInput.setAttribute("aria-disabled", String(inputNumberDisabled.value));
      if (!util.isNumber(props.modelValue)) {
        emit("update:modelValue", Number(props.modelValue));
      }
    });
    vue.onUpdated(() => {
      var _a;
      const innerInput = (_a = input.value) == null ? void 0 : _a.input;
      innerInput.setAttribute("aria-valuenow", data.currentValue);
    });
    return {
      input,
      displayValue,
      handleInput,
      handleInputChange,
      controlsAtRight,
      decrease,
      increase,
      inputNumberSize,
      inputNumberDisabled,
      maxDisabled,
      minDisabled,
      focus,
      blur
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=input-number.vue_vue&type=script&lang.js.map
