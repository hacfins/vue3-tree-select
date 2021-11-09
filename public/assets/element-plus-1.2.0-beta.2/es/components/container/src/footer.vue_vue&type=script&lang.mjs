import { defineComponent, computed } from 'vue';

var script = defineComponent({
  name: "ElFooter",
  props: {
    height: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => props.height ? {
        "--el-footer-height": props.height
      } : {})
    };
  }
});

export { script as default };
//# sourceMappingURL=footer.vue_vue&type=script&lang.mjs.map
