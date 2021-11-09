'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
require('../../../directives/index.js');
var index = require('../../../directives/resize/index.js');

var script = vue.defineComponent({
  name: "ElTabBar",
  directives: {
    Resize: index["default"]
  },
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const rootTabs = vue.inject("rootTabs");
    if (!rootTabs) {
      throw new Error(`ElTabBar must use with ElTabs`);
    }
    const instance = vue.getCurrentInstance();
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
          tabSize = $el[`client${shared.capitalize(sizeName)}`];
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
      const transform = `translate${shared.capitalize(sizeDir)}(${offset}px)`;
      style[sizeName] = `${tabSize}px`;
      style.transform = transform;
      style.msTransform = transform;
      style.webkitTransform = transform;
      return style;
    };
    const barStyle = vue.ref(getBarStyle());
    const update = () => {
      barStyle.value = getBarStyle();
    };
    vue.watch(() => props.tabs, () => {
      vue.nextTick(() => {
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

exports["default"] = script;
//# sourceMappingURL=tab-bar.vue_vue&type=script&lang.js.map
