import { defineComponent, computed } from 'vue';
import '../../../hooks/index.mjs';
import './item.mjs';
import script$1 from './item.vue_vue&type=script&lang.mjs';
import useThrottleRender from '../../../hooks/use-throttle-render/index.mjs';

var script = defineComponent({
  name: "ElSkeleton",
  components: {
    [script$1.name]: script$1
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  },
  setup(props) {
    const innerLoading = computed(() => {
      return props.loading;
    });
    const uiLoading = useThrottleRender(innerLoading, props.throttle);
    return {
      uiLoading
    };
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue&type=script&lang.mjs.map
