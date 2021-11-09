'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
require('./item.js');
var item_vue_vue_type_script_lang = require('./item.vue_vue&type=script&lang.js');
var index = require('../../../hooks/use-throttle-render/index.js');

var script = vue.defineComponent({
  name: "ElSkeleton",
  components: {
    [item_vue_vue_type_script_lang["default"].name]: item_vue_vue_type_script_lang["default"]
  },
  props: {
    animated: {
      type: Boolean,
      default: false
    },
    count: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 3
    },
    loading: {
      type: Boolean,
      default: true
    },
    throttle: {
      type: Number
    }
  },
  setup(props) {
    const innerLoading = vue.computed(() => {
      return props.loading;
    });
    const uiLoading = index["default"](innerLoading, props.throttle);
    return {
      uiLoading
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
