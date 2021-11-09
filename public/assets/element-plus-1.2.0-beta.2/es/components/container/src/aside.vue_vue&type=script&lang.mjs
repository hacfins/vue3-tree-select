import { defineComponent, computed } from 'vue';

var script = defineComponent({
  name: "ElAside",
  props: {
    width: {
      type: String,
      default: null
    }
  },
  setup(props) {
    return {
      style: computed(() => {
        return props.width ? { "--el-aside-width": props.width } : {};
      })
    };
  }
});

export { script as default };
//# sourceMappingURL=aside.vue_vue&type=script&lang.mjs.map
