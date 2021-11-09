import { defineComponent, provide, reactive, toRef } from 'vue';
import '../../../tokens/index.mjs';
import { buttonGroupProps } from './button-group.mjs';
import { elButtonGroupKey } from '../../../tokens/button.mjs';

var script = defineComponent({
  name: "ElButtonGroup",
  props: buttonGroupProps,
  setup(props) {
    provide(elButtonGroupKey, reactive({
      size: toRef(props, "size"),
      type: toRef(props, "type")
    }));
  }
});

export { script as default };
//# sourceMappingURL=button-group.vue_vue&type=script&lang.mjs.map
