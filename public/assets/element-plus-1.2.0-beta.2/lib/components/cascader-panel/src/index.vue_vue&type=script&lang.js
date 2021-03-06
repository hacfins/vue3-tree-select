'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var isEqual = require('lodash/isEqual');
var aria = require('../../../utils/aria.js');
var constants = require('../../../utils/constants.js');
var isServer = require('../../../utils/isServer.js');
var scrollIntoView = require('../../../utils/scroll-into-view.js');
var util = require('../../../utils/util.js');
require('./menu.js');
var store = require('./store.js');
var node = require('./node.js');
var config = require('./config.js');
var utils = require('./utils.js');
var types = require('./types.js');
var menu_vue_vue_type_script_lang = require('./menu.vue_vue&type=script&lang.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

var script = vue.defineComponent({
  name: "ElCascaderPanel",
  components: {
    ElCascaderMenu: menu_vue_vue_type_script_lang["default"]
  },
  props: {
    ...config.CommonProps,
    border: {
      type: Boolean,
      default: true
    },
    renderLabel: Function
  },
  emits: [constants.UPDATE_MODEL_EVENT, constants.CHANGE_EVENT, "close", "expand-change"],
  setup(props, { emit, slots }) {
    let initialLoaded = true;
    let manualChecked = false;
    const config$1 = config.useCascaderConfig(props);
    const store$1 = vue.ref(null);
    const menuList = vue.ref([]);
    const checkedValue = vue.ref(null);
    const menus = vue.ref([]);
    const expandingNode = vue.ref(null);
    const checkedNodes = vue.ref([]);
    const isHoverMenu = vue.computed(() => config$1.value.expandTrigger === node.ExpandTrigger.HOVER);
    const renderLabelFn = vue.computed(() => props.renderLabel || slots.default);
    const initStore = () => {
      const { options } = props;
      const cfg = config$1.value;
      manualChecked = false;
      store$1.value = new store["default"](options, cfg);
      menus.value = [store$1.value.getNodes()];
      if (cfg.lazy && util.isEmpty(props.options)) {
        initialLoaded = false;
        lazyLoad(void 0, () => {
          initialLoaded = true;
          syncCheckedValue(false, true);
        });
      } else {
        syncCheckedValue(false, true);
      }
    };
    const lazyLoad = (node$1, cb) => {
      const cfg = config$1.value;
      node$1 = node$1 || new node["default"]({}, cfg, void 0, true);
      node$1.loading = true;
      const resolve = (dataList) => {
        var _a;
        const _node = node$1;
        const parent = _node.root ? null : _node;
        dataList && ((_a = store$1.value) == null ? void 0 : _a.appendNodes(dataList, parent));
        _node.loading = false;
        _node.loaded = true;
        _node.childrenData = _node.childrenData || [];
        cb && cb(dataList);
      };
      cfg.lazyLoad(node$1, resolve);
    };
    const expandNode = (node, silent) => {
      var _a;
      const { level } = node;
      const newMenus = menus.value.slice(0, level);
      let newExpandingNode;
      if (node.isLeaf) {
        newExpandingNode = node.pathNodes[level - 2];
      } else {
        newExpandingNode = node;
        newMenus.push(node.children);
      }
      if (((_a = expandingNode.value) == null ? void 0 : _a.uid) !== (newExpandingNode == null ? void 0 : newExpandingNode.uid)) {
        expandingNode.value = node;
        menus.value = newMenus;
        !silent && emit("expand-change", (node == null ? void 0 : node.pathValues) || []);
      }
    };
    const handleCheckChange = (node, checked, emitClose = true) => {
      const { checkStrictly, multiple } = config$1.value;
      const oldNode = checkedNodes.value[0];
      manualChecked = true;
      !multiple && (oldNode == null ? void 0 : oldNode.doCheck(false));
      node.doCheck(checked);
      calculateCheckedValue();
      emitClose && !multiple && !checkStrictly && emit("close");
      !emitClose && !multiple && !checkStrictly && expandParentNode(node);
    };
    const expandParentNode = (node) => {
      if (!node)
        return;
      node = node.parent;
      expandParentNode(node);
      node && expandNode(node);
    };
    const getFlattedNodes = (leafOnly) => {
      var _a;
      return (_a = store$1.value) == null ? void 0 : _a.getFlattedNodes(leafOnly);
    };
    const getCheckedNodes = (leafOnly) => {
      var _a;
      return (_a = getFlattedNodes(leafOnly)) == null ? void 0 : _a.filter((node) => node.checked !== false);
    };
    const clearCheckedNodes = () => {
      checkedNodes.value.forEach((node) => node.doCheck(false));
      calculateCheckedValue();
    };
    const calculateCheckedValue = () => {
      var _a;
      const { checkStrictly, multiple } = config$1.value;
      const oldNodes = checkedNodes.value;
      const newNodes = getCheckedNodes(!checkStrictly);
      const nodes = utils.sortByOriginalOrder(oldNodes, newNodes);
      const values = nodes.map((node) => node.valueByOption);
      checkedNodes.value = nodes;
      checkedValue.value = multiple ? values : (_a = values[0]) != null ? _a : null;
    };
    const syncCheckedValue = (loaded = false, forced = false) => {
      const { modelValue } = props;
      const { lazy, multiple, checkStrictly } = config$1.value;
      const leafOnly = !checkStrictly;
      if (!initialLoaded || manualChecked || !forced && isEqual__default["default"](modelValue, checkedValue.value))
        return;
      if (lazy && !loaded) {
        const values = util.deduplicate(util.arrayFlat(util.coerceTruthyValueToArray(modelValue)));
        const nodes = values.map((val) => {
          var _a;
          return (_a = store$1.value) == null ? void 0 : _a.getNodeByValue(val);
        }).filter((node) => !!node && !node.loaded && !node.loading);
        if (nodes.length) {
          nodes.forEach((node) => {
            lazyLoad(node, () => syncCheckedValue(false, forced));
          });
        } else {
          syncCheckedValue(true, forced);
        }
      } else {
        const values = multiple ? util.coerceTruthyValueToArray(modelValue) : [modelValue];
        const nodes = util.deduplicate(values.map((val) => {
          var _a;
          return (_a = store$1.value) == null ? void 0 : _a.getNodeByValue(val, leafOnly);
        }));
        syncMenuState(nodes, false);
        checkedValue.value = modelValue;
      }
    };
    const syncMenuState = (newCheckedNodes, reserveExpandingState = true) => {
      var _a;
      const { checkStrictly } = config$1.value;
      const oldNodes = checkedNodes.value;
      const newNodes = newCheckedNodes.filter((node) => !!node && (checkStrictly || node.isLeaf));
      const oldExpandingNode = (_a = store$1.value) == null ? void 0 : _a.getSameNode(expandingNode.value);
      const newExpandingNode = reserveExpandingState && oldExpandingNode || newNodes[0];
      if (newExpandingNode) {
        newExpandingNode.pathNodes.forEach((node) => expandNode(node, true));
      } else {
        expandingNode.value = null;
      }
      oldNodes.forEach((node) => node.doCheck(false));
      newNodes.forEach((node) => node.doCheck(true));
      checkedNodes.value = newNodes;
      vue.nextTick(scrollToExpandingNode);
    };
    const scrollToExpandingNode = () => {
      if (isServer["default"])
        return;
      menuList.value.forEach((menu) => {
        const menuElement = menu == null ? void 0 : menu.$el;
        if (menuElement) {
          const container = menuElement.querySelector(".el-scrollbar__wrap");
          const activeNode = menuElement.querySelector(".el-cascader-node.is-active") || menuElement.querySelector(".el-cascader-node.in-active-path");
          scrollIntoView["default"](container, activeNode);
        }
      });
    };
    const handleKeyDown = (e) => {
      const target = e.target;
      const { code } = e;
      switch (code) {
        case aria.EVENT_CODE.up:
        case aria.EVENT_CODE.down: {
          const distance = code === aria.EVENT_CODE.up ? -1 : 1;
          aria.focusNode(aria.getSibling(target, distance, '.el-cascader-node[tabindex="-1"]'));
          break;
        }
        case aria.EVENT_CODE.left: {
          const preMenu = menuList.value[utils.getMenuIndex(target) - 1];
          const expandedNode = preMenu == null ? void 0 : preMenu.$el.querySelector('.el-cascader-node[aria-expanded="true"]');
          aria.focusNode(expandedNode);
          break;
        }
        case aria.EVENT_CODE.right: {
          const nextMenu = menuList.value[utils.getMenuIndex(target) + 1];
          const firstNode = nextMenu == null ? void 0 : nextMenu.$el.querySelector('.el-cascader-node[tabindex="-1"]');
          aria.focusNode(firstNode);
          break;
        }
        case aria.EVENT_CODE.enter:
          utils.checkNode(target);
          break;
        case aria.EVENT_CODE.esc:
        case aria.EVENT_CODE.tab:
          emit("close");
          break;
      }
    };
    vue.provide(types.CASCADER_PANEL_INJECTION_KEY, vue.reactive({
      config: config$1,
      expandingNode,
      checkedNodes,
      isHoverMenu,
      renderLabelFn,
      lazyLoad,
      expandNode,
      handleCheckChange
    }));
    vue.watch([config$1, () => props.options], initStore, {
      deep: true,
      immediate: true
    });
    vue.watch(() => props.modelValue, () => {
      manualChecked = false;
      syncCheckedValue();
    });
    vue.watch(checkedValue, (val) => {
      if (!isEqual__default["default"](val, props.modelValue)) {
        emit(constants.UPDATE_MODEL_EVENT, val);
        emit(constants.CHANGE_EVENT, val);
      }
    });
    vue.onBeforeUpdate(() => menuList.value = []);
    vue.onMounted(() => !util.isEmpty(props.modelValue) && syncCheckedValue());
    return {
      menuList,
      menus,
      checkedNodes,
      handleKeyDown,
      handleCheckChange,
      getFlattedNodes,
      getCheckedNodes,
      clearCheckedNodes,
      calculateCheckedValue,
      scrollToExpandingNode
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
