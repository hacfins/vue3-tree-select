import { defineComponent, inject, getCurrentInstance, ref, watch, nextTick } from 'vue';
import { capitalize } from '@vue/shared';
import '../../../directives/index.mjs';
import Resize from '../../../directives/resize/index.mjs';

var script = defineComponent({
  name: "ElTabBar",
  directives: {
    Resize
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const rootTabs = inject("rootTabs");
    if (!rootTabs) {
      throw new Error(`ElTabBar must use with ElTabs`);
    }
    const instance = getCurrentInstance();
    const getBarStyle = () => {
      const style = {};
      let offset = 0;
      let tabSize = 0;
      const sizeName = ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
      const sizeDir = sizeName === "width" ? "x" : "y";
      props.tabs.every((tab) => {
        var _a;
        const $el = (_a = instance.parent.refs) == null ? void 0 : _a[`tab-${tab.paneName}`];
        if (!$el) {
          return false;
        }
        if (!tab.active) {
          return true;
        } else {
          tabSize = $el[`client${capitalize(sizeName)}`];
          const position = sizeDir === "x" ? "left" : "top";
          offset = $el.getBoundingClientRect()[position] - $el.parentElement.getBoundingClientRect()[position];
          const tabStyles = window.getComputedStyle($el);
          if (sizeName === "width") {
            if (props.tabs.length > 1) {
              tabSize -= parseFloat(tabStyles.paddingLeft) + parseFloat(tabStyles.paddingRight);
            }
            offset += parseFloat(tabStyles.paddingLeft);
          }
          return false;
        }
      });
      const transform = `translate${capitalize(sizeDir)}(${offset}px)`;
      style[sizeName] = `${tabSize}px`;
      style.transform = transform;
      style.msTransform = transform;
      style.webkitTransform = transform;
      return style;
    };
    const barStyle = ref(getBarStyle());
    const update = () => {
      barStyle.value = getBarStyle();
    };
    watch(() => props.tabs, () => {
      nextTick(() => {
        update();
      });
    });
    return {
      rootTabs,
      barStyle,
      update
    };
  }
});

export { script as default };
//# sourceMappingURL=tab-bar.vue_vue&type=script&lang.mjs.map
