'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var index = require('../../checkbox/index.js');
var index$3 = require('../../icon/index.js');
var icons = require('@element-plus/icons');
require('../../../directives/index.js');
require('../../../hooks/index.js');
var index$2 = require('../../popper/index.js');
var index$1 = require('../../scrollbar/index.js');
var index$4 = require('../../../directives/click-outside/index.js');
var index$5 = require('../../../hooks/use-locale/index.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

const { CheckboxGroup: ElCheckboxGroup } = index.ElCheckbox;
var script = vue.defineComponent({
  name: "ElTableFilterPanel",
  components: {
    ElCheckbox: index.ElCheckbox,
    ElCheckboxGroup,
    ElScrollbar: index$1["default"],
    ElPopper: index$2["default"],
    ElIcon: index$3.ElIcon,
    ArrowDown: icons.ArrowDown,
    ArrowUp: icons.ArrowUp
  },
  directives: { ClickOutside: index$4["default"] },
  props: {
    placement: {
      type: String,
      default: "bottom-start"
    },
    store: {
      type: Object
    },
    column: {
      type: Object
    },
    upDataColumn: {
      type: Function
    }
  },
  setup(props) {
    const instance = vue.getCurrentInstance();
    const { t } = index$5.useLocaleInject();
    const parent = instance.parent;
    if (!parent.filterPanels.value[props.column.id]) {
      parent.filterPanels.value[props.column.id] = instance;
    }
    const tooltipVisible = vue.ref(false);
    const tooltip = vue.ref(null);
    const filters = vue.computed(() => {
      return props.column && props.column.filters;
    });
    const filterValue = vue.computed({
      get: () => (props.column.filteredValue || [])[0],
      set: (value) => {
        if (filteredValue.value) {
          if (typeof value !== "undefined" && value !== null) {
            filteredValue.value.splice(0, 1, value);
          } else {
            filteredValue.value.splice(0, 1);
          }
        }
      }
    });
    const filteredValue = vue.computed({
      get() {
        if (props.column) {
          return props.column.filteredValue || [];
        }
        return [];
      },
      set(value) {
        if (props.column) {
          props.upDataColumn("filteredValue", value);
        }
      }
    });
    const multiple = vue.computed(() => {
      if (props.column) {
        return props.column.filterMultiple;
      }
      return true;
    });
    const isActive = (filter) => {
      return filter.value === filterValue.value;
    };
    const hidden = () => {
      tooltipVisible.value = false;
    };
    const showFilterPanel = (e) => {
      e.stopPropagation();
      tooltipVisible.value = !tooltipVisible.value;
    };
    const hideFilterPanel = () => {
      tooltipVisible.value = false;
    };
    const handleConfirm = () => {
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleReset = () => {
      filteredValue.value = [];
      confirmFilter(filteredValue.value);
      hidden();
    };
    const handleSelect = (_filterValue) => {
      filterValue.value = _filterValue;
      if (typeof _filterValue !== "undefined" && _filterValue !== null) {
        confirmFilter(filteredValue.value);
      } else {
        confirmFilter([]);
      }
      hidden();
    };
    const confirmFilter = (filteredValue2) => {
      props.store.commit("filterChange", {
        column: props.column,
        values: filteredValue2
      });
      props.store.updateAllSelected();
    };
    vue.watch(tooltipVisible, (value) => {
      if (props.column) {
        props.upDataColumn("filterOpened", value);
      }
    }, {
      immediate: true
    });
    const popperPaneRef = vue.computed(() => {
      var _a;
      return (_a = tooltip.value) == null ? void 0 : _a.popperRef;
    });
    return {
      tooltipVisible,
      multiple,
      filteredValue,
      filterValue,
      filters,
      handleConfirm,
      handleReset,
      handleSelect,
      isActive,
      t,
      showFilterPanel,
      hideFilterPanel,
      popperPaneRef,
      tooltip,
      Effect: defaults.Effect
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=filter-panel.vue_vue&type=script&lang.js.map
