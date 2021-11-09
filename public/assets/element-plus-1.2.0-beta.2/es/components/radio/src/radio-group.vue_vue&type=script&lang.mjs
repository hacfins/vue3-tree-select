import { defineComponent, ref, inject, computed, nextTick, provide, reactive, toRefs, watch, onMounted } from 'vue';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import '../../../tokens/index.mjs';
import radioGroupKey from './token.mjs';
import { elFormItemKey } from '../../../tokens/form.mjs';

var script = defineComponent({
  name: "ElRadioGroup",
  componentName: "ElRadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    fill: {
      type: String,
      default: ""
    },
    textColor: {
      type: String,
      default: ""
    },
    disabled: Boolean
  },
  emits: [UPDATE_MODEL_EVENT, "change"],
  setup(props, ctx) {
    const radioGroup = ref(null);
    const elFormItem = inject(elFormItemKey, {});
    const radioGroupSize = computed(() => {
      return props.size || elFormItem.size;
    });
    const changeEvent = (value) => {
      ctx.emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => {
        ctx.emit("change", value);
      });
    };
    provide(radioGroupKey, reactive({
      name: "ElRadioGroup",
      ...toRefs(props),
      radioGroupSize,
      changeEvent
    }));
    watch(() => props.modelValue, () => {
      var _a;
      (_a = elFormItem.validate) == null ? void 0 : _a.call(elFormItem, "change");
    });
    const handleKeydown = (e) => {
      const target = e.target;
      const className = target.nodeName === "INPUT" ? "[type=radio]" : "[role=radio]";
      const radios = radioGroup.value.querySelectorAll(className);
      const length = radios.length;
      const index = Array.from(radios).indexOf(target);
      const roleRadios = radioGroup.value.querySelectorAll("[role=radio]");
      let nextIndex = null;
      switch (e.code) {
        case EVENT_CODE.left:
        case EVENT_CODE.up:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === 0 ? length - 1 : index - 1;
          break;
        case EVENT_CODE.right:
        case EVENT_CODE.down:
          e.stopPropagation();
          e.preventDefault();
          nextIndex = index === length - 1 ? 0 : index + 1;
          break;
        default:
          break;
      }
      if (nextIndex === null)
        return;
      roleRadios[nextIndex].click();
      roleRadios[nextIndex].focus();
    };
    onMounted(() => {
      const radios = radioGroup.value.querySelectorAll("[type=radio]");
      const firstLabel = radios[0];
      if (!Array.from(radios).some((radio) => radio.checked) && firstLabel) {
        firstLabel.tabIndex = 0;
      }
    });
    return {
      handleKeydown,
      radioGroupSize,
      radioGroup
    };
  }
});

export { script as default };
//# sourceMappingURL=radio-group.vue_vue&type=script&lang.mjs.map
