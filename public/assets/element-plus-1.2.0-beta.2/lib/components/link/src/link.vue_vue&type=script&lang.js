'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../icon/index.js');
var link = require('./link.js');

var script = vue.defineComponent({
  name: "ElLink",
  components: { ElIcon: index.ElIcon },
  props: link.linkProps,
  emits: link.linkEmits,
  setup(props, { emit }) {
    function handleClick(event) {
      if (!props.disabled)
        emit("click", event);
    }
    return {
      handleClick
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=link.vue_vue&type=script&lang.js.map
