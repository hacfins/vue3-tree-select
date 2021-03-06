'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var badge = require('./badge.js');

var script = vue.defineComponent({
  name: "ElBadge",
  props: badge.badgeProps,
  setup(props) {
    const content = vue.computed(() => {
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

exports["default"] = script;
//# sourceMappingURL=badge.vue_vue&type=script&lang.js.map
