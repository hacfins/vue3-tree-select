'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../tokens/index.js');
var buttonGroup = require('./button-group.js');
var button = require('../../../tokens/button.js');

var script = vue.defineComponent({
  name: "ElButtonGroup",
  props: buttonGroup.buttonGroupProps,
  setup(props) {
    vue.provide(button.elButtonGroupKey, vue.reactive({
      size: vue.toRef(props, "size"),
      type: vue.toRef(props, "type")
    }));
  }
});

exports["default"] = script;
//# sourceMappingURL=button-group.vue_vue&type=script&lang.js.map
