'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var icons = require('@element-plus/icons');
var icon = require('../../../utils/icon.js');
require('../../../tokens/index.js');
require('../../../hooks/index.js');
var constants = require('../../../utils/constants.js');
require('../../../utils/util.js');
var isServer = require('../../../utils/isServer.js');
var isDef = require('../../../utils/isDef.js');
var calcTextareaHeight = require('./calc-textarea-height.js');
var input = require('./input.js');
var index$1 = require('../../../hooks/use-attrs/index.js');
var form = require('../../../tokens/form.js');
var index$2 = require('../../../hooks/use-form-item/index.js');
var shared = require('@vue/shared');

const PENDANT_MAP = {
  suffix: "append",
  prefix: "prepend"
};
var script = vue.defineComponent({
  name: "ElInput",
  components: { ElIcon: index.ElIcon, CircleClose: icons.CircleClose, IconView: icons.View },
  inheritAttrs: false,
  props: input.inputProps,
  emits: input.inputEmits,
  setup(props, { slots, emit, attrs: rawAttrs }) {
    const instance = vue.getCurrentInstance();
    const attrs = index$1["default"]();
    const elForm = vue.inject(form.elFormKey, void 0);
    const elFormItem = vue.inject(form.elFormItemKey, void 0);
    const { size: inputSize, disabled: inputDisabled } = index$2.useFormItem({});
    const input = vue.ref();
    const textarea = vue.ref();
    const focused = vue.ref(false);
    const hovering = vue.ref(false);
    const isComposing = vue.ref(false);
    const passwordVisible = vue.ref(false);
    const _textareaCalcStyle = vue.shallowRef(props.inputStyle);
    const inputOrTextarea = vue.computed(() => input.value || textarea.value);
    const needStatusIcon = vue.computed(() => {
      var _a;
      return (_a = elForm == null ? void 0 : elForm.statusIcon) != null ? _a : false;
    });
    const validateState = vue.computed(() => (elFormItem == null ? void 0 : elFormItem.validateState) || "");
    const validateIcon = vue.computed(() => icon.ValidateComponentsMap[validateState.value]);
    const containerStyle = vue.computed(() => rawAttrs.style);
    const computedTextareaStyle = vue.computed(() => [
      props.inputStyle,
      _textareaCalcStyle.value,
      { resize: props.resize }
    ]);
    const nativeInputValue = vue.computed(() => props.modelValue === null || props.modelValue === void 0 ? "" : String(props.modelValue));
    const showClear = vue.computed(() => props.clearable && !inputDisabled.value && !props.readonly && !!nativeInputValue.value && (focused.value || hovering.value));
    const showPwdVisible = vue.computed(() => props.showPassword && !inputDisabled.value && !props.readonly && (!!nativeInputValue.value || focused.value));
    const isWordLimitVisible = vue.computed(() => props.showWordLimit && !!attrs.value.maxlength && (props.type === "text" || props.type === "textarea") && !inputDisabled.value && !props.readonly && !props.showPassword);
    const textLength = vue.computed(() => Array.from(nativeInputValue.value).length);
    const inputExceed = vue.computed(() => !!isWordLimitVisible.value && textLength.value > Number(attrs.value.maxlength));
    const resizeTextarea = () => {
      const { type, autosize } = props;
      if (isServer["default"] || type !== "textarea")
        return;
      if (autosize) {
        const minRows = shared.isObject(autosize) ? autosize.minRows : void 0;
        const maxRows = shared.isObject(autosize) ? autosize.maxRows : void 0;
        _textareaCalcStyle.value = {
          ...calcTextareaHeight.calcTextareaHeight(textarea.value, minRows, maxRows)
        };
      } else {
        _textareaCalcStyle.value = {
          minHeight: calcTextareaHeight.calcTextareaHeight(textarea.value).minHeight
        };
      }
    };
    const setNativeInputValue = () => {
      const input2 = inputOrTextarea.value;
      if (!input2 || input2.value === nativeInputValue.value)
        return;
      input2.value = nativeInputValue.value;
    };
    const calcIconOffset = (place) => {
      const { el } = instance.vnode;
      if (!el)
        return;
      const elList = Array.from(el.querySelectorAll(`.el-input__${place}`));
      const target = elList.find((item) => item.parentNode === el);
      if (!target)
        return;
      const pendant = PENDANT_MAP[place];
      if (slots[pendant]) {
        target.style.transform = `translateX(${place === "suffix" ? "-" : ""}${el.querySelector(`.el-input-group__${pendant}`).offsetWidth}px)`;
      } else {
        target.removeAttribute("style");
      }
    };
    const updateIconOffset = () => {
      calcIconOffset("prefix");
      calcIconOffset("suffix");
    };
    const handleInput = (event) => {
      const { value } = event.target;
      if (isComposing.value)
        return;
      if (value === nativeInputValue.value)
        return;
      emit(constants.UPDATE_MODEL_EVENT, value);
      emit("input", value);
      vue.nextTick(setNativeInputValue);
    };
    const handleChange = (event) => {
      emit("change", event.target.value);
    };
    const focus = () => {
      vue.nextTick(() => {
        var _a;
        (_a = inputOrTextarea.value) == null ? void 0 : _a.focus();
      });
    };
    const blur = () => {
      var _a;
      (_a = inputOrTextarea.value) == null ? void 0 : _a.blur();
    };
    const handleFocus = (event) => {
      focused.value = true;
      emit("focus", event);
    };
    const handleBlur = (event) => {
      var _a;
      focused.value = false;
      emit("blur", event);
      if (props.validateEvent) {
        (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "blur");
      }
    };
    const select = () => {
      var _a;
      (_a = inputOrTextarea.value) == null ? void 0 : _a.select();
    };
    const handleCompositionStart = (event) => {
      emit("compositionstart", event);
      isComposing.value = true;
    };
    const handleCompositionUpdate = (event) => {
      var _a;
      emit("compositionupdate", event);
      const text = (_a = event.target) == null ? void 0 : _a.value;
      const lastCharacter = text[text.length - 1] || "";
      isComposing.value = !isDef.isKorean(lastCharacter);
    };
    const handleCompositionEnd = (event) => {
      emit("compositionend", event);
      if (isComposing.value) {
        isComposing.value = false;
        handleInput(event);
      }
    };
    const clear = () => {
      emit(constants.UPDATE_MODEL_EVENT, "");
      emit("change", "");
      emit("clear");
      emit("input", "");
    };
    const handlePasswordVisible = () => {
      passwordVisible.value = !passwordVisible.value;
      focus();
    };
    const suffixVisible = vue.computed(() => !!slots.suffix || !!props.suffixIcon || showClear.value || props.showPassword || isWordLimitVisible.value || !!validateState.value && needStatusIcon.value);
    vue.watch(() => props.modelValue, () => {
      var _a;
      vue.nextTick(resizeTextarea);
      if (props.validateEvent) {
        (_a = elFormItem == null ? void 0 : elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
      }
    });
    vue.watch(nativeInputValue, () => setNativeInputValue());
    vue.watch(() => props.type, () => {
      vue.nextTick(() => {
        setNativeInputValue();
        resizeTextarea();
        updateIconOffset();
      });
    });
    vue.onMounted(() => {
      setNativeInputValue();
      updateIconOffset();
      vue.nextTick(resizeTextarea);
    });
    vue.onUpdated(() => {
      vue.nextTick(updateIconOffset);
    });
    const onMouseLeave = (evt) => {
      hovering.value = false;
      emit("mouseleave", evt);
    };
    const onMouseEnter = (evt) => {
      hovering.value = true;
      emit("mouseenter", evt);
    };
    const handleKeydown = (evt) => {
      emit("keydown", evt);
    };
    return {
      input,
      textarea,
      attrs,
      inputSize,
      validateState,
      validateIcon,
      containerStyle,
      computedTextareaStyle,
      inputDisabled,
      showClear,
      showPwdVisible,
      isWordLimitVisible,
      textLength,
      hovering,
      inputExceed,
      passwordVisible,
      inputOrTextarea,
      suffixVisible,
      resizeTextarea,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleCompositionStart,
      handleCompositionUpdate,
      handleCompositionEnd,
      handlePasswordVisible,
      clear,
      select,
      focus,
      blur,
      onMouseLeave,
      onMouseEnter,
      handleKeydown
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=input.vue_vue&type=script&lang.js.map
