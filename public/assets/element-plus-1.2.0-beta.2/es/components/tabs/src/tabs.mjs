import { defineComponent, ref, getCurrentInstance, provide, watch, nextTick, Fragment, onUpdated, onMounted, h } from 'vue';
import { isPromise } from '@vue/shared';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { Plus } from '@element-plus/icons';
import './tab-nav.mjs';
import script from './tab-nav.vue_vue&type=script&lang.mjs';

var Tabs = defineComponent({
  name: "ElTabs",
  components: { TabNav: script },
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
    const nav$ = ref(null);
    const currentName = ref(props.modelValue || props.activeName || "0");
    const panes = ref([]);
    const instance = getCurrentInstance();
    const paneStatesMap = {};
    provide("rootTabs", {
      props,
      currentName
    });
    provide("updatePaneState", (pane) => {
      paneStatesMap[pane.uid] = pane;
    });
    watch(() => props.activeName, (modelValue) => {
      setCurrentName(modelValue);
    });
    watch(() => props.modelValue, (modelValue) => {
      setCurrentName(modelValue);
    });
    watch(currentName, () => {
      nextTick(() => {
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
        } else if (type === Fragment || type === "template") {
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
      if (before && isPromise(before)) {
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
    onUpdated(() => {
      setPaneInstances();
    });
    onMounted(() => {
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
    const newButton = editable || addable ? h("span", {
      class: "el-tabs__new-tab",
      tabindex: "0",
      onClick: handleTabAdd,
      onKeydown: (ev) => {
        if (ev.code === EVENT_CODE.enter) {
          handleTabAdd();
        }
      }
    }, [h(ElIcon, { class: "is-icon-plus" }, { default: () => h(Plus) })]) : null;
    const header = h("div", {
      class: ["el-tabs__header", `is-${tabPosition}`]
    }, [
      newButton,
      h(script, {
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
    const panels = h("div", {
      class: "el-tabs__content"
    }, (_a = this.$slots) == null ? void 0 : _a.default());
    return h("div", {
      class: {
        "el-tabs": true,
        "el-tabs--card": type === "card",
        [`el-tabs--${tabPosition}`]: true,
        "el-tabs--border-card": type === "border-card"
      }
    }, tabPosition !== "bottom" ? [header, panels] : [panels, header]);
  }
});

export { Tabs as default };
//# sourceMappingURL=tabs.mjs.map
