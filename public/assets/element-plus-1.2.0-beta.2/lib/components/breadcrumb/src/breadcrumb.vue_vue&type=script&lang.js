'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index.js');
var breadcrumb = require('./breadcrumb.js');
var breadcrumb$1 = require('../../../tokens/breadcrumb.js');

var script = vue.defineComponent({
  name: "ElBreadcrumb",
  props: breadcrumb.breadcrumbProps,
  setup(props) {
    const breadcrumb = vue.ref();
    vue.provide(breadcrumb$1.elBreadcrumbKey, props);
    vue.onMounted(() => {
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

exports["default"] = script;
//# sourceMappingURL=breadcrumb.vue_vue&type=script&lang.js.map
