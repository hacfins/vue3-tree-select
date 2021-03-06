import { defineComponent, computed } from 'vue';
import { badgeProps } from './badge.mjs';

var script = defineComponent({
  name: "ElBadge",
  props: badgeProps,
  setup(props) {
    const content = computed(() => {
      if (props.isDot)
        return "";
      if (typeof props.value === "number" && typeof props.max === "number") {
        return props.max < props.value ? `${props.max}+` : `${props.value}`;
      }
      return `${props.value}`;
    });
    return {
      content
    };
  }
});

export { script as default };
//# sourceMappingURL=badge.vue_vue&type=script&lang.mjs.map
