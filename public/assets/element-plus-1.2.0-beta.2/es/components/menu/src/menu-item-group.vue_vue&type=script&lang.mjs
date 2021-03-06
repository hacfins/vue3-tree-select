import { defineComponent, getCurrentInstance, inject, computed } from 'vue';
import { throwError } from '../../../utils/error.mjs';
import { menuItemGroupProps } from './menu-item-group.mjs';

const COMPONENT_NAME = "ElMenuItemGroup";
var script = defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroupProps,
  setup() {
    const instance = getCurrentInstance();
    const menu = inject("rootMenu");
    if (!menu)
      throwError(COMPONENT_NAME, "can not inject root menu");
    const levelPadding = computed(() => {
      if (menu.props.collapse)
        return 20;
      let padding = 20;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding
    };
  }
});

export { script as default };
//# sourceMappingURL=menu-item-group.vue_vue&type=script&lang.mjs.map
