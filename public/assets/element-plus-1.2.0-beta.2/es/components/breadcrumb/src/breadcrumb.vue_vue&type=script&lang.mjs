import { defineComponent, ref, provide, onMounted } from 'vue';
import '../../../tokens/index.mjs';
import { breadcrumbProps } from './breadcrumb.mjs';
import { elBreadcrumbKey } from '../../../tokens/breadcrumb.mjs';

var script = defineComponent({
  name: "ElBreadcrumb",
  props: breadcrumbProps,
  setup(props) {
    const breadcrumb = ref();
    provide(elBreadcrumbKey, props);
    onMounted(() => {
      const items = breadcrumb.value.querySelectorAll(".el-breadcrumb__item");
      if (items.length) {
        items[items.length - 1].setAttribute("aria-current", "page");
      }
    });
    return {
      breadcrumb
    };
  }
});

export { script as default };
//# sourceMappingURL=breadcrumb.vue_vue&type=script&lang.mjs.map
