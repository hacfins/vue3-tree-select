'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var aria = require('../../../utils/aria.js');
var index = require('../../icon/index.js');
var icons = require('@element-plus/icons');
require('./tab-nav.js');
var tabNav_vue_vue_type_script_lang = require('./tab-nav.vue_vue&type=script&lang.js');

var Tabs = vue.defineComponent({
  name: "ElTabs",
  components: { TabNav: tabNav_vue_vue_type_script_lang["default"] },
  props: {
    type: {
      type: String,
      default: ""
    },
    activeName: {
      type: String,
      default: ""
    },
    closable: Boolean,
    addable: Boolean,
    modelValue: {
      type: String,
      default: ""
    },
    editable: Boolean,
    tabPosition: {
      type: String,
      default: "top"
    },
    beforeLeave: {
      type: Function,
      default: null
    },
    stretch: Boolean
  },
  emits: [
    "tab-click",
    "edit",
    "tab-remove",
    "tab-add",
    "input",
    "update:modelValue"
  ],
  setup(props, ctx) {
    const nav$ = vue.ref(null);
    const currentName = vue.ref(props.modelValue || props.activeName || "0");
    const panes = vue.ref([]);
    const instance = vue.getCurrentInstance();
    const paneStatesMap = {};
    vue.provide("rootTabs", {
      props,
      currentName
    });
    vue.provide("updatePaneState", (pane) => {
      paneStatesMap[pane.uid] = pane;
    });
    vue.watch(() => props.activeName, (modelValue) => {
      setCurrentName(modelValue);
    });
    vue.watch(() => props.modelValue, (modelValue) => {
      setCurrentName(modelValue);
    });
    vue.watch(currentName, () => {
      vue.nextTick(() => {
        nav$.value && nav$.value.$nextTick(() => {
          nav$.value && nav$.value.scrollToActiveTab();
        });
      });
      setPaneInstances(true);
    });
    const getPaneInstanceFromSlot = (vnode, paneInstanceList = []) => {
      Array.from(vnode.children || []).forEach((node) => {
        let type = node.type;
        type = type.name || type;
        if (type === "ElTabPane" && node.component) {
          paneInstanceList.push(node.component);
        } else if (type === vue.Fragment || type === "template") {
          getPaneInstanceFromSlot(node, paneInstanceList);
        }
      });
      return paneInstanceList;
    };
    const setPaneInstances = (isForceUpdate = false) => {
      if (ctx.slots.default) {
        const children = instance.subTree.children;
        const content = Array.from(children).find(({ props: props2 }) => {
          return props2.class === "el-tabs__content";
        });
        if (!content)
          return;
        const paneInstanceList = getPaneInstanceFromSlot(content).map((paneComponent) => {
          return paneStatesMap[paneComponent.uid];
        });
        const panesChanged = !(paneInstanceList.length === panes.value.length && paneInstanceList.every((pane, index) => pane.uid === panes.value[index].uid));
        if (isForceUpdate || panesChanged) {
          panes.value = paneInstanceList;
        }
      } else if (panes.value.length !== 0) {
        panes.value = [];
      }
    };
    const changeCurrentName = (value) => {
      currentName.value = value;
      ctx.emit("input", value);
      ctx.emit("update:modelValue", value);
    };
    const setCurrentName = (value) => {
      if (currentName.value === value)
        return;
      const beforeLeave = props.beforeLeave;
      const before = beforeLeave && beforeLeave(value, currentName.value);
      if (before && shared.isPromise(before)) {
        before.then(() => {
          var _a, _b;
          changeCurrentName(value);
          (_b = (_a = nav$.value).removeFocus) == null ? void 0 : _b.call(_a);
        }, () => {
        });
      } else if (before !== false) {
        changeCurrentName(value);
      }
    };
    const handleTabClick = (tab, tabName, event) => {
      if (tab.props.disabled)
        return;
      setCurrentName(tabName);
      ctx.emit("tab-click", tab, event);
    };
    const handleTabRemove = (pane, ev) => {
      if (pane.props.disabled)
        return;
      ev.stopPropagation();
      ctx.emit("edit", pane.props.name, "remove");
      ctx.emit("tab-remove", pane.props.name);
    };
    const handleTabAdd = () => {
      ctx.emit("edit", null, "add");
      ctx.emit("tab-add");
    };
    vue.onUpdated(() => {
      setPaneInstances();
    });
    vue.onMounted(() => {
      setPaneInstances();
    });
    return {
      nav$,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes
    };
  },
  render() {
    var _a;
    const {
      type,
      handleTabClick,
      handleTabRemove,
      handleTabAdd,
      currentName,
      panes,
      editable,
      addable,
      tabPosition,
      stretch
    } = this;
    const newButton = editable || addable ? vue.h("span", {
      class: "el-tabs__new-tab",
      tabindex: "0",
      onClick: handleTabAdd,
      onKeydown: (ev) => {
        if (ev.code === aria.EVENT_CODE.enter) {
          handleTabAdd();
        }
      }
    }, [vue.h(index.ElIcon, { class: "is-icon-plus" }, { default: () => vue.h(icons.Plus) })]) : null;
    const header = vue.h("div", {
      class: ["el-tabs__header", `is-${tabPosition}`]
    }, [
      newButton,
      vue.h(tabNav_vue_vue_type_script_lang["default"], {
        currentName,
        editable,
        type,
        panes,
        stretch,
        ref: "nav$",
        onTabClick: handleTabClick,
        onTabRemove: handleTabRemove
      })
    ]);
    const panels = vue.h("div", {
      class: "el-tabs__content"
    }, (_a = this.$slots) == null ? void 0 : _a.default());
    return vue.h("div", {
      class: {
        "el-tabs": true,
        "el-tabs--card": type === "card",
        [`el-tabs--${tabPosition}`]: true,
        "el-tabs--border-card": type === "border-card"
      }
    }, tabPosition !== "bottom" ? [header, panels] : [panels, header]);
  }
});

exports["default"] = Tabs;
//# sourceMappingURL=tabs.js.map
