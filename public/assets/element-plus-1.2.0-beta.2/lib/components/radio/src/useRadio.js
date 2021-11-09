'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index.js');
var util = require('../../../utils/util.js');
var token = require('./token.js');
var form = require('../../../tokens/form.js');

const useRadio = () => {
  const ELEMENT = util.useGlobalConfig();
  const elForm = vue.inject(form.elFormKey, {});
  const elFormItem = vue.inject(form.elFormItemKey, {});
  const radioGroup = vue.inject(token["default"], {});
  const focus = vue.ref(false);
  const isGroup = vue.computed(() => (radioGroup == null ? void 0 : radioGroup.name) === "ElRadioGroup");
  const elFormItemSize = vue.computed(() => elFormItem.size || ELEMENT.size);
  return {
    isGroup,
    focus,
    radioGroup,
    elForm,
    ELEMENT,
    elFormItemSize
  };
};
const useRadioAttrs = (props, { isGroup, radioGroup, elForm, model }) => {
  const isDisabled = vue.computed(() => {
    return isGroup.value ? radioGroup.disabled || props.disabled || elForm.disabled : props.disabled || elForm.disabled;
  });
  const tabIndex = vue.computed(() => {
    return isDisabled.value || isGroup.value && model.value !== props.label ? -1 : 0;
  });
  return {
    isDisabled,
    tabIndex
  };
};

exports.useRadio = useRadio;
exports.useRadioAttrs = useRadioAttrs;
//# sourceMappingURL=useRadio.js.map
