'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var error = require('../../../utils/error.js');
var menuItemGroup = require('./menu-item-group.js');

const COMPONENT_NAME = "ElMenuItemGroup";
var script = vue.defineComponent({
  name: COMPONENT_NAME,
  props: menuItemGroup.menuItemGroupProps,
  setup() {
    const instance = vue.getCurrentInstance();
    const menu = vue.inject("rootMenu");
    if (!menu)
      error.throwError(COMPONENT_NAME, "can not inject root menu");
    const levelPadding = vue.computed(() => {
      if (menu.props.collapse)
        return 20;
      let padding = 20;
      let parent = instance.parent;
      while (parent && parent.type.name !== "ElMenu") {
        if (parent.type.name === "ElSubMenu") {
          padding += 20;
        }
        parent = parent.parent;
      }
      return padding;
    });
    return {
      levelPadding
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=menu-item-group.vue_vue&type=script&lang.js.map
