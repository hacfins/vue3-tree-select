'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var icons = require('@element-plus/icons');

const IconMap = {
  success: "icon-success",
  warning: "icon-warning",
  error: "icon-error",
  info: "icon-info"
};
const IconComponentMap = {
  [IconMap.success]: icons.CircleCheckFilled,
  [IconMap.warning]: icons.WarningFilled,
  [IconMap.error]: icons.CircleCloseFilled,
  [IconMap.info]: icons.InfoFilled
};
var script = vue.defineComponent({
  name: "ElResult",
  props: {
    title: {
      type: String,
      default: ""
    },
    subTitle: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: "info"
    }
  },
  setup(props) {
    const resultIcon = vue.computed(() => {
      const icon = props.icon;
      const iconClass = icon && IconMap[icon] ? IconMap[icon] : "icon-info";
      const iconComponent = IconComponentMap[iconClass] || IconComponentMap["icon-info"];
      return {
        class: iconClass,
        component: iconComponent
      };
    });
    return {
      resultIcon
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
