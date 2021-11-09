'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('./image-placeholder.js');
var imagePlaceholder_vue_vue_type_script_lang = require('./image-placeholder.vue_vue&type=script&lang.js');

var script = vue.defineComponent({
  name: "ElSkeletonItem",
  components: {
    [imagePlaceholder_vue_vue_type_script_lang["default"].name]: imagePlaceholder_vue_vue_type_script_lang["default"]
  },
  props: {
    variant: {
      type: String,
      default: "text"
    }
  }
});

exports["default"] = script;
//# sourceMappingURL=item.vue_vue&type=script&lang.js.map
