'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../scrollbar/index.js');
require('../../../hooks/index.js');
var util = require('../../../utils/util.js');
require('./node2.js');
var types = require('./types.js');
var node_vue_vue_type_script_lang = require('./node.vue_vue&type=script&lang.js');
var index$1 = require('../../../hooks/use-locale/index.js');

var script = vue.defineComponent({
  name: "ElCascaderMenu",
  components: {
    ElScrollbar: index["default"],
    ElCascaderNode: node_vue_vue_type_script_lang["default"]
  },
  props: {
    nodes: {
      type: Array,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
    const { t } = index$1.useLocaleInject();
    const id = util.generateId();
    let activeNode = null;
    let hoverTimer = null;
    const panel = vue.inject(types.CASCADER_PANEL_INJECTION_KEY);
    const hoverZone = vue.ref(null);
    const isEmpty = vue.computed(() => !props.nodes.length);
    const menuId = vue.computed(() => `cascader-menu-${id}-${props.index}`);
    const handleExpand = (e) => {
      activeNode = e.target;
    };
    const handleMouseMove = (e) => {
      if (!panel.isHoverMenu || !activeNode || !hoverZone.value)
        return;
      if (activeNode.contains(e.target)) {
        clearHoverTimer();
        const el = instance.vnode.el;
        const { left } = el.getBoundingClientRect();
        const { offsetWidth, offsetHeight } = el;
        const startX = e.clientX - left;
        const top = activeNode.offsetTop;
        const bottom = top + activeNode.offsetHeight;
        hoverZone.value.innerHTML = `
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${top} L${offsetWidth} 0 V${top} Z" />
          <path style="pointer-events: auto;" fill="transparent" d="M${startX} ${bottom} L${offsetWidth} ${offsetHeight} V${bottom} Z" />
        `;
      } else if (!hoverTimer) {
        hoverTimer = window.setTimeout(clearHoverZone, panel.config.hoverThreshold);
      }
    };
    const clearHoverTimer = () => {
      if (!hoverTimer)
        return;
      clearTimeout(hoverTimer);
      hoverTimer = null;
    };
    const clearHoverZone = () => {
      if (!hoverZone.value)
        return;
      hoverZone.value.innerHTML = "";
      clearHoverTimer();
    };
    return {
      panel,
      hoverZone,
      isEmpty,
      menuId,
      t,
      handleExpand,
      handleMouseMove,
      clearHoverZone
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=menu.vue_vue&type=script&lang.js.map
