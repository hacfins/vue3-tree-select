import { inject, ref, computed } from 'vue';
import '../../../tokens/index.mjs';
import { useGlobalConfig } from '../../../utils/util.mjs';
import radioGroupKey from './token.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';

const useRadio = () => {
  const ELEMENT = useGlobalConfig();
  const elForm = inject(elFormKey, {});
  const elFormItem = inject(elFormItemKey, {});
  const radioGroup = inject(radioGroupKey, {});
  const focus = ref(false);
  const isGroup = computed(() => (radioGroup == null ? void 0 : radioGroup.name) === "ElRadioGroup");
  const elFormItemSize = computed(() => elFormItem.size || ELEMENT.size);
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
  const isDisabled = computed(() => {
    return isGroup.value ? radioGroup.disabled || props.disabled || elForm.disabled : props.disabled || elForm.disabled;
  });
  const tabIndex = computed(() => {
    return isDisabled.value || isGroup.value && model.value !== props.label ? -1 : 0;
  });
  return {
    isDisabled,
    tabIndex
  };
};

export { useRadio, useRadioAttrs };
//# sourceMappingURL=useRadio.mjs.map
