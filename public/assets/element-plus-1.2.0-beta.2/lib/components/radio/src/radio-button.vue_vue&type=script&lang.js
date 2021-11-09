'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var useRadio = require('./useRadio.js');

var script = vue.defineComponent({
  name: "ElRadioButton",
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ""
    },
    disabled: Boolean,
    name: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const { isGroup, radioGroup, elFormItemSize, ELEMENT, focus, elForm } = useRadio.useRadio();
    const size = vue.computed(() => {
      return radioGroup.radioGroupSize || elFormItemSize.value || ELEMENT.size;
    });
    const radioRef = vue.ref();
    const value = vue.computed({
      get() {
        return radioGroup.modelValue;
      },
      set(value2) {
        radioGroup.changeEvent(value2);
        radioRef.value.checked = radioGroup.modelValue === props.label;
      }
    });
    const { isDisabled, tabIndex } = useRadio.useRadioAttrs(props, {
      model: value,
      elForm,
      radioGroup,
      isGroup
    });
    const activeStyle = vue.computed(() => {
      return {
        backgroundColor: radioGroup.fill || "",
        borderColor: radioGroup.fill || "",
        boxShadow: radioGroup.fill ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: radioGroup.textColor || ""
      };
    });
    return {
      isGroup,
      size,
      isDisabled,
      tabIndex,
      value,
      focus,
      activeStyle,
      radioRef
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=radio-button.vue_vue&type=script&lang.js.map
