'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index$1 = require('../../button/index.js');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var index$2 = require('../../input/index.js');
var index$3 = require('../../overlay/index.js');
var popupManager = require('../../../utils/popup-manager.js');
var dom = require('../../../utils/dom.js');
var aria = require('../../../utils/aria.js');
var validators = require('../../../utils/validators.js');
var index$4 = require('../../icon/index.js');
var icon = require('../../../utils/icon.js');
var index = require('../../../directives/trap-focus/index.js');
var index$5 = require('../../../hooks/use-locale/index.js');
var index$6 = require('../../../hooks/use-modal/index.js');
var index$7 = require('../../../hooks/use-prevent-global/index.js');
var index$8 = require('../../../hooks/use-lockscreen/index.js');
var index$9 = require('../../../hooks/use-restore-active/index.js');

var script = vue.defineComponent({
  name: "ElMessageBox",
  directives: {
    TrapFocus: index["default"]
  },
  components: {
    ElButton: index$1.ElButton,
    ElInput: index$2.ElInput,
    ElOverlay: index$3.ElOverlay,
    ElIcon: index$4.ElIcon,
    ...icon.TypeComponents
  },
  inheritAttrs: false,
  props: {
    buttonSize: {
      type: String,
      validator: validators.isValidComponentSize
    },
    modal: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    closeOnPressEscape: {
      type: Boolean,
      default: true
    },
    closeOnHashChange: {
      type: Boolean,
      default: true
    },
    center: Boolean,
    roundButton: {
      default: false,
      type: Boolean
    },
    container: {
      type: String,
      default: "body"
    },
    boxType: {
      type: String,
      default: ""
    }
  },
  emits: ["vanish", "action"],
  setup(props, { emit }) {
    const { t } = index$5.useLocaleInject();
    const visible = vue.ref(false);
    const state = vue.reactive({
      beforeClose: null,
      callback: null,
      cancelButtonText: "",
      cancelButtonClass: "",
      confirmButtonText: "",
      confirmButtonClass: "",
      customClass: "",
      customStyle: {},
      dangerouslyUseHTMLString: false,
      distinguishCancelAndClose: false,
      icon: "",
      inputPattern: null,
      inputPlaceholder: "",
      inputType: "text",
      inputValue: null,
      inputValidator: null,
      inputErrorMessage: "",
      message: null,
      modalFade: true,
      modalClass: "",
      showCancelButton: false,
      showConfirmButton: true,
      type: "",
      title: void 0,
      showInput: false,
      action: "",
      confirmButtonLoading: false,
      cancelButtonLoading: false,
      confirmButtonDisabled: false,
      editorErrorMessage: "",
      validateError: false,
      zIndex: popupManager["default"].nextZIndex()
    });
    const typeClass = vue.computed(() => {
      const type = state.type;
      return type && icon.TypeComponentsMap[type] ? `el-message-box-icon--${type}` : "";
    });
    const iconComponent = vue.computed(() => state.icon || icon.TypeComponentsMap[state.type] || "");
    const hasMessage = vue.computed(() => !!state.message);
    const inputRef = vue.ref(null);
    const confirmRef = vue.ref(null);
    const confirmButtonClasses = vue.computed(() => `el-button--primary ${state.confirmButtonClass}`);
    vue.watch(() => state.inputValue, async (val) => {
      await vue.nextTick();
      if (props.boxType === "prompt" && val !== null) {
        validate();
      }
    }, { immediate: true });
    vue.watch(() => visible.value, (val) => {
      if (val) {
        if (props.boxType === "alert" || props.boxType === "confirm") {
          vue.nextTick().then(() => {
            var _a, _b, _c;
            (_c = (_b = (_a = confirmRef.value) == null ? void 0 : _a.$el) == null ? void 0 : _b.focus) == null ? void 0 : _c.call(_b);
          });
        }
        state.zIndex = popupManager["default"].nextZIndex();
      }
      if (props.boxType !== "prompt")
        return;
      if (val) {
        vue.nextTick().then(() => {
          if (inputRef.value && inputRef.value.$el) {
            getInputElement().focus();
          }
        });
      } else {
        state.editorErrorMessage = "";
        state.validateError = false;
      }
    });
    vue.onMounted(async () => {
      await vue.nextTick();
      if (props.closeOnHashChange) {
        dom.on(window, "hashchange", doClose);
      }
    });
    vue.onBeforeUnmount(() => {
      if (props.closeOnHashChange) {
        dom.off(window, "hashchange", doClose);
      }
    });
    function doClose() {
      if (!visible.value)
        return;
      visible.value = false;
      vue.nextTick(() => {
        if (state.action)
          emit("action", state.action);
      });
    }
    const handleWrapperClick = () => {
      if (props.closeOnClickModal) {
        handleAction(state.distinguishCancelAndClose ? "close" : "cancel");
      }
    };
    const handleInputEnter = () => {
      if (state.inputType !== "textarea") {
        return handleAction("confirm");
      }
    };
    const handleAction = (action) => {
      var _a;
      if (props.boxType === "prompt" && action === "confirm" && !validate()) {
        return;
      }
      state.action = action;
      if (state.beforeClose) {
        (_a = state.beforeClose) == null ? void 0 : _a.call(state, action, state, doClose);
      } else {
        doClose();
      }
    };
    const validate = () => {
      if (props.boxType === "prompt") {
        const inputPattern = state.inputPattern;
        if (inputPattern && !inputPattern.test(state.inputValue || "")) {
          state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
          state.validateError = true;
          return false;
        }
        const inputValidator = state.inputValidator;
        if (typeof inputValidator === "function") {
          const validateResult = inputValidator(state.inputValue);
          if (validateResult === false) {
            state.editorErrorMessage = state.inputErrorMessage || t("el.messagebox.error");
            state.validateError = true;
            return false;
          }
          if (typeof validateResult === "string") {
            state.editorErrorMessage = validateResult;
            state.validateError = true;
            return false;
          }
        }
      }
      state.editorErrorMessage = "";
      state.validateError = false;
      return true;
    };
    const getInputElement = () => {
      const inputRefs = inputRef.value.$refs;
      return inputRefs.input || inputRefs.textarea;
    };
    const handleClose = () => {
      handleAction("close");
    };
    if (props.closeOnPressEscape) {
      index$6["default"]({
        handleClose
      }, visible);
    } else {
      index$7["default"](visible, "keydown", (e) => e.code === aria.EVENT_CODE.esc);
    }
    if (props.lockScroll) {
      index$8["default"](visible);
    }
    index$9["default"](visible);
    return {
      ...vue.toRefs(state),
      visible,
      hasMessage,
      typeClass,
      iconComponent,
      confirmButtonClasses,
      inputRef,
      confirmRef,
      doClose,
      handleClose,
      handleWrapperClick,
      handleInputEnter,
      handleAction,
      t
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
