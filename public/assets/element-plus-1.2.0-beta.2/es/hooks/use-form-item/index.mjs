import { getCurrentInstance, inject, computed, unref } from 'vue';
import '../../tokens/index.mjs';
import { buildProps } from '../../utils/props.mjs';
import { useGlobalConfig } from '../../utils/util.mjs';
import { elFormKey, elFormItemKey } from '../../tokens/form.mjs';

const sizes = ["", "large", "medium", "small", "mini"];
const useFormItemProps = buildProps({
  size: {
    type: String,
    values: sizes,
    default: ""
  },
  disabled: Boolean
});
const useFormItem = ({ size, disabled }) => {
  var _a;
  const vm = getCurrentInstance();
  const $ELEMENT = useGlobalConfig();
  const props = (_a = vm.proxy) == null ? void 0 : _a.$props;
  const form = inject(elFormKey, void 0);
  const formItem = inject(elFormItemKey, void 0);
  return {
    size: computed(() => {
      return props.size || unref(size) || (formItem == null ? void 0 : formItem.size) || (form == null ? void 0 : form.size) || $ELEMENT.size || "";
    }),
    disabled: computed(() => {
      return props.disabled === true || unref(disabled) || (form == null ? void 0 : form.disabled) || false;
    })
  };
};

export { useFormItem, useFormItemProps };
//# sourceMappingURL=index.mjs.map
