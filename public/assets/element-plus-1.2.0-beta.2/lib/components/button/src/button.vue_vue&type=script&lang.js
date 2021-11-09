'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
require('../../../hooks/index.js');
require('../../../tokens/index.js');
var icons = require('@element-plus/icons');
var button = require('./button.js');
var button$1 = require('../../../tokens/button.js');
var index$1 = require('../../../hooks/use-global-config/index.js');
var index$2 = require('../../../hooks/use-form-item/index.js');
var form = require('../../../tokens/form.js');

var script = vue.defineComponent({
  name: "ElButton",
  components: {
    ElIcon: index.ElIcon,
    Loading: icons.Loading
  },
  props: button.buttonProps,
  emits: button.buttonEmits,
  setup(props, { emit, slots }) {
    const elBtnGroup = vue.inject(button$1.elButtonGroupKey, void 0);
    const globalConfig = index$1.useGlobalConfig();
    const autoInsertSpace = vue.computed(() => {
      var _a;
      return (_a = props.autoInsertSpace) != null ? _a : globalConfig == null ? void 0 : globalConfig.button.autoInsertSpace;
    });
    const shouldAddSpace = vue.computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === vue.Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const { size: buttonSize, disabled: buttonDisabled } = index$2.useFormItem({
      size: vue.computed(() => elBtnGroup == null ? void 0 : elBtnGroup.size)
    });
    const buttonType = vue.computed(() => props.type || (elBtnGroup == null ? void 0 : elBtnGroup.type) || "default");
    const elForm = vue.inject(form.elFormKey, void 0);
    const handleClick = (evt) => {
      if (props.nativeType === "reset") {
        elForm == null ? void 0 : elForm.resetFields();
      }
      emit("click", evt);
    };
    return {
      buttonSize,
      buttonType,
      buttonDisabled,
      shouldAddSpace,
      handleClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=button.vue_vue&type=script&lang.js.map
