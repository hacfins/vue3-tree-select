'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
require('../../../tokens/index.js');
var breadcrumbItem = require('./breadcrumb-item.js');
var breadcrumb = require('../../../tokens/breadcrumb.js');

const COMPONENT_NAME = "ElBreadcrumbItem";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  components: {
    ElIcon: index.ElIcon
  },
  props: breadcrumbItem.breadcrumbItemProps,
  setup(props) {
    const instance = vue.getCurrentInstance();
    const router = instance.appContext.config.globalProperties.$router;
    const parent = vue.inject(breadcrumb.elBreadcrumbKey, void 0);
    const link = vue.ref();
    vue.onMounted(() => {
      link.value.setAttribute("role", "link");
      link.value.addEventListener("click", () => {
        if (!props.to || !router)
          return;
        props.replace ? router.replace(props.to) : router.push(props.to);
      });
    });
    return {
      link,
      separator: parent == null ? void 0 : parent.separator,
      separatorIcon: parent == null ? void 0 : parent.separatorIcon
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=breadcrumb-item.vue_vue&type=script&lang.js.map
