import { defineComponent, inject, ref, computed, onUpdated, onMounted, onBeforeUnmount, h } from 'vue';
import { NOOP, capitalize } from '@vue/shared';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { on, off } from '../../../utils/dom.mjs';
import { throwError } from '../../../utils/error.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { ArrowLeft, ArrowRight, Close } from '@element-plus/icons';
import './tab-bar.mjs';
import script$1 from './tab-bar.vue_vue&type=script&lang.mjs';

var script = defineComponent({
  name: "ElTabNav",
  components: {
    TabBar: script$1
  },
  props: {
    panes: {
      type: Array,
      default: () => []
    },
    currentName: {
      type: String,
      default: ""
    },
    editable: Boolean,
    onTabClick: {
      type: Function,
      default: NOOP
    },
    onTabRemove: {
      type: Function,
      default: NOOP
    },
    type: {
      type: String,
      default: ""
    },
    stretch: Boolean
  },
  setup() {
    const rootTabs = inject("rootTabs");
    if (!rootTabs) {
      throwError("[ElTabNav]", `ElTabNav must be nested inside ElTabs`);
    }
    const scrollable = ref(false);
    const navOffset = ref(0);
    const isFocus = ref(false);
    const focusable = ref(true);
    const navScroll$ = ref(null);
    const nav$ = ref(null);
    const el$ = ref(null);
    const sizeName = computed(() => {
      return ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "width" : "height";
    });
    const navStyle = computed(() => {
      const dir = sizeName.value === "width" ? "X" : "Y";
      return {
        transform: `translate${dir}(-${navOffset.value}px)`
      };
    });
    const scrollPrev = () => {
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (!currentOffset)
        return;
      const newOffset = currentOffset > containerSize ? currentOffset - containerSize : 0;
      navOffset.value = newOffset;
    };
    const scrollNext = () => {
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (navSize - currentOffset <= containerSize)
        return;
      const newOffset = navSize - currentOffset > containerSize * 2 ? currentOffset + containerSize : navSize - containerSize;
      navOffset.value = newOffset;
    };
    const scrollToActiveTab = () => {
      if (!scrollable.value)
        return;
      const nav = nav$.value;
      const activeTab = el$.value.querySelector(".is-active");
      if (!activeTab)
        return;
      const navScroll = navScroll$.value;
      const isHorizontal = ["top", "bottom"].includes(rootTabs.props.tabPosition);
      const activeTabBounding = activeTab.getBoundingClientRect();
      const navScrollBounding = navScroll.getBoundingClientRect();
      const maxOffset = isHorizontal ? nav.offsetWidth - navScrollBounding.width : nav.offsetHeight - navScrollBounding.height;
      const currentOffset = navOffset.value;
      let newOffset = currentOffset;
      if (isHorizontal) {
        if (activeTabBounding.left < navScrollBounding.left) {
          newOffset = currentOffset - (navScrollBounding.left - activeTabBounding.left);
        }
        if (activeTabBounding.right > navScrollBounding.right) {
          newOffset = currentOffset + activeTabBounding.right - navScrollBounding.right;
        }
      } else {
        if (activeTabBounding.top < navScrollBounding.top) {
          newOffset = currentOffset - (navScrollBounding.top - activeTabBounding.top);
        }
        if (activeTabBounding.bottom > navScrollBounding.bottom) {
          newOffset = currentOffset + (activeTabBounding.bottom - navScrollBounding.bottom);
        }
      }
      newOffset = Math.max(newOffset, 0);
      navOffset.value = Math.min(newOffset, maxOffset);
    };
    const update = () => {
      if (!nav$.value)
        return;
      const navSize = nav$.value[`offset${capitalize(sizeName.value)}`];
      const containerSize = navScroll$.value[`offset${capitalize(sizeName.value)}`];
      const currentOffset = navOffset.value;
      if (containerSize < navSize) {
        const currentOffset2 = navOffset.value;
        scrollable.value = scrollable.value || {};
        scrollable.value.prev = currentOffset2;
        scrollable.value.next = currentOffset2 + containerSize < navSize;
        if (navSize - currentOffset2 < containerSize) {
          navOffset.value = navSize - containerSize;
        }
      } else {
        scrollable.value = false;
        if (currentOffset > 0) {
          navOffset.value = 0;
        }
      }
    };
    const changeTab = (e) => {
      const code = e.code;
      let nextIndex;
      let currentIndex, tabList;
      const { up, down, left, right } = EVENT_CODE;
      if ([up, down, left, right].indexOf(code) !== -1) {
        tabList = e.currentTarget.querySelectorAll("[role=tab]");
        currentIndex = Array.prototype.indexOf.call(tabList, e.target);
      } else {
        return;
      }
      if (code === left || code === up) {
        if (currentIndex === 0) {
          nextIndex = tabList.length - 1;
        } else {
          nextIndex = currentIndex - 1;
        }
      } else {
        if (currentIndex < tabList.length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
      }
      tabList[nextIndex].focus();
      tabList[nextIndex].click();
      setFocus();
    };
    const setFocus = () => {
      if (focusable.value) {
        isFocus.value = true;
      }
    };
    const removeFocus = () => {
      isFocus.value = false;
    };
    const visibilityChangeHandler = () => {
      const visibility = document.visibilityState;
      if (visibility === "hidden") {
        focusable.value = false;
      } else if (visibility === "visible") {
        setTimeout(() => {
          focusable.value = true;
        }, 50);
      }
    };
    const windowBlurHandler = () => {
      focusable.value = false;
    };
    const windowFocusHandler = () => {
      setTimeout(() => {
        focusable.value = true;
      }, 50);
    };
    onUpdated(() => {
      update();
    });
    onMounted(() => {
      addResizeListener(el$.value, update);
      on(document, "visibilitychange", visibilityChangeHandler);
      on(window, "blur", windowBlurHandler);
      on(window, "focus", windowFocusHandler);
      setTimeout(() => {
        scrollToActiveTab();
      }, 0);
    });
    onBeforeUnmount(() => {
      if (el$.value) {
        removeResizeListener(el$.value, update);
      }
      off(document, "visibilitychange", visibilityChangeHandler);
      off(window, "blur", windowBlurHandler);
      off(window, "focus", windowFocusHandler);
    });
    return {
      rootTabs,
      scrollable,
      navOffset,
      isFocus,
      focusable,
      navScroll$,
      nav$,
      el$,
      sizeName,
      navStyle,
      scrollPrev,
      scrollNext,
      scrollToActiveTab,
      update,
      changeTab,
      setFocus,
      removeFocus,
      visibilityChangeHandler,
      windowBlurHandler,
      windowFocusHandler
    };
  },
  render() {
    const {
      type,
      panes,
      editable,
      stretch,
      onTabClick,
      onTabRemove,
      navStyle,
      scrollable,
      scrollNext,
      scrollPrev,
      changeTab,
      setFocus,
      removeFocus,
      rootTabs,
      isFocus
    } = this;
    const scrollBtn = scrollable ? [
      h("span", {
        class: [
          "el-tabs__nav-prev",
          scrollable.prev ? "" : "is-disabled"
        ],
        onClick: scrollPrev
      }, [h(ElIcon, {}, { default: () => h(ArrowLeft) })]),
      h("span", {
        class: [
          "el-tabs__nav-next",
          scrollable.next ? "" : "is-disabled"
        ],
        onClick: scrollNext
      }, [h(ElIcon, {}, { default: () => h(ArrowRight) })])
    ] : null;
    const tabs = panes.map((pane, index) => {
      var _a, _b;
      const tabName = pane.props.name || pane.index || `${index}`;
      const closable = pane.isClosable || editable;
      pane.index = `${index}`;
      const btnClose = closable ? h(ElIcon, {
        class: "is-icon-close",
        onClick: (ev) => {
          onTabRemove(pane, ev);
        }
      }, { default: () => h(Close) }) : null;
      const tabLabelContent = ((_b = (_a = pane.instance.slots).label) == null ? void 0 : _b.call(_a)) || pane.props.label;
      const tabindex = pane.active ? 0 : -1;
      return h("div", {
        class: {
          "el-tabs__item": true,
          [`is-${rootTabs.props.tabPosition}`]: true,
          "is-active": pane.active,
          "is-disabled": pane.props.disabled,
          "is-closable": closable,
          "is-focus": isFocus
        },
        id: `tab-${tabName}`,
        key: `tab-${tabName}`,
        "aria-controls": `pane-${tabName}`,
        role: "tab",
        "aria-selected": pane.active,
        ref: `tab-${tabName}`,
        tabindex,
        onFocus: () => {
          setFocus();
        },
        onBlur: () => {
          removeFocus();
        },
        onClick: (ev) => {
          removeFocus();
          onTabClick(pane, tabName, ev);
        },
        onKeydown: (ev) => {
          if (closable && (ev.code === EVENT_CODE.delete || ev.code === EVENT_CODE.backspace)) {
            onTabRemove(pane, ev);
          }
        }
      }, [tabLabelContent, btnClose]);
    });
    return h("div", {
      ref: "el$",
      class: [
        "el-tabs__nav-wrap",
        scrollable ? "is-scrollable" : "",
        `is-${rootTabs.props.tabPosition}`
      ]
    }, [
      scrollBtn,
      h("div", {
        class: "el-tabs__nav-scroll",
        ref: "navScroll$"
      }, [
        h("div", {
          class: [
            "el-tabs__nav",
            `is-${rootTabs.props.tabPosition}`,
            stretch && ["top", "bottom"].includes(rootTabs.props.tabPosition) ? "is-stretch" : ""
          ],
          ref: "nav$",
          style: navStyle,
          role: "tablist",
          onKeydown: changeTab
        }, [
          !type ? h(script$1, {
            tabs: [...panes]
          }) : null,
          tabs
        ])
      ])
    ]);
  }
});

export { script as default };
//# sourceMappingURL=tab-nav.vue_vue&type=script&lang.mjs.map
