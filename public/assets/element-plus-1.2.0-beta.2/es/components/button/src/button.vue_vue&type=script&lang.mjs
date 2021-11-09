import { defineComponent, inject, computed, Text } from 'vue';
import { ElIcon } from '../../icon/index.mjs';
import '../../../hooks/index.mjs';
import '../../../tokens/index.mjs';
import { Loading } from '@element-plus/icons';
import { buttonProps, buttonEmits } from './button.mjs';
import { elButtonGroupKey } from '../../../tokens/button.mjs';
import { useGlobalConfig } from '../../../hooks/use-global-config/index.mjs';
import { useFormItem } from '../../../hooks/use-form-item/index.mjs';
import { elFormKey } from '../../../tokens/form.mjs';

var script = defineComponent({
  name: "ElButton",
  components: {
    ElIcon,
    Loading
  },
  props: buttonProps,
  emits: buttonEmits,
  setup(props, { emit, slots }) {
    const elBtnGroup = inject(elButtonGroupKey, void 0);
    const globalConfig = useGlobalConfig();
    const autoInsertSpace = computed(() => {
      var _a;
      return (_a = props.autoInsertSpace) != null ? _a : globalConfig == null ? void 0 : globalConfig.button.autoInsertSpace;
    });
    const shouldAddSpace = computed(() => {
      var _a;
      const defaultSlot = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (autoInsertSpace.value && (defaultSlot == null ? void 0 : defaultSlot.length) === 1) {
        const slot = defaultSlot[0];
        if ((slot == null ? void 0 : slot.type) === Text) {
          const text = slot.children;
          return /^\p{Unified_Ideograph}{2}$/u.test(text);
        }
      }
      return false;
    });
    const { size: buttonSize, disabled: buttonDisabled } = useFormItem({
      size: computed(() => elBtnGroup == null ? void 0 : elBtnGroup.size)
    });
    const buttonType = computed(() => props.type || (elBtnGroup == null ? void 0 : elBtnGroup.type) || "default");
    const elForm = inject(elFormKey, void 0);
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

export { script as default };
//# sourceMappingURL=button.vue_vue&type=script&lang.mjs.map
