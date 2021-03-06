'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var shared = require('@vue/shared');
var debounce = require('lodash/debounce');
require('../../../hooks/index.js');
require('../../../directives/index.js');
var util = require('../../../utils/util.js');
var constants = require('../../../utils/constants.js');
var error = require('../../../utils/error.js');
var index$1 = require('../../input/index.js');
var index$2 = require('../../scrollbar/index.js');
var index = require('../../popper/index.js');
var index$3 = require('../../icon/index.js');
var icons = require('@element-plus/icons');
var index$4 = require('../../../directives/click-outside/index.js');
var index$5 = require('../../../hooks/use-attrs/index.js');
var defaults = require('../../popper/src/use-popper/defaults.js');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);

var script = vue.defineComponent({
  name: "ElAutocomplete",
  components: {
    ElPopper: index["default"],
    ElInput: index$1.ElInput,
    ElScrollbar: index$2["default"],
    ElIcon: index$3.ElIcon,
    Loading: icons.Loading
  },
  directives: {
    clickoutside: index$4["default"]
  },
  inheritAttrs: false,
  props: {
    valueKey: {
      type: String,
      default: "value"
    },
    modelValue: {
      type: [String, Number],
      default: ""
    },
    debounce: {
      type: Number,
      default: 300
    },
    placement: {
      type: String,
      validator: (val) => {
        return [
          "top",
          "top-start",
          "top-end",
          "bottom",
          "bottom-start",
          "bottom-end"
        ].includes(val);
      },
      default: "bottom-start"
    },
    fetchSuggestions: {
      type: Function,
      default: shared.NOOP
    },
    popperClass: {
      type: String,
      default: ""
    },
    triggerOnFocus: {
      type: Boolean,
      default: true
    },
    selectWhenUnmatched: {
      type: Boolean,
      default: false
    },
    hideLoading: {
      type: Boolean,
      default: false
    },
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    highlightFirstItem: {
      type: Boolean,
      default: false
    }
  },
  emits: [
    constants.UPDATE_MODEL_EVENT,
    "input",
    "change",
    "focus",
    "blur",
    "clear",
    "select"
  ],
  setup(props, ctx) {
    const attrs = index$5["default"]();
    const suggestions = vue.ref([]);
    const highlightedIndex = vue.ref(-1);
    const dropdownWidth = vue.ref("");
    const activated = vue.ref(false);
    const suggestionDisabled = vue.ref(false);
    const loading = vue.ref(false);
    const inputRef = vue.ref(null);
    const regionRef = vue.ref(null);
    const popper = vue.ref(null);
    const id = vue.computed(() => {
      return `el-autocomplete-${util.generateId()}`;
    });
    const suggestionVisible = vue.computed(() => {
      const isValidData = shared.isArray(suggestions.value) && suggestions.value.length > 0;
      return (isValidData || loading.value) && activated.value;
    });
    const suggestionLoading = vue.computed(() => {
      return !props.hideLoading && loading.value;
    });
    const updatePopperPosition = () => {
      vue.nextTick(popper.value.update);
    };
    vue.watch(suggestionVisible, () => {
      dropdownWidth.value = `${inputRef.value.$el.offsetWidth}px`;
    });
    vue.onMounted(() => {
      inputRef.value.inputOrTextarea.setAttribute("role", "textbox");
      inputRef.value.inputOrTextarea.setAttribute("aria-autocomplete", "list");
      inputRef.value.inputOrTextarea.setAttribute("aria-controls", "id");
      inputRef.value.inputOrTextarea.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
      const $ul = regionRef.value.querySelector(".el-autocomplete-suggestion__list");
      $ul.setAttribute("role", "listbox");
      $ul.setAttribute("id", id.value);
    });
    vue.onUpdated(updatePopperPosition);
    const getData = (queryString) => {
      if (suggestionDisabled.value) {
        return;
      }
      loading.value = true;
      updatePopperPosition();
      props.fetchSuggestions(queryString, (suggestionsArg) => {
        loading.value = false;
        if (suggestionDisabled.value) {
          return;
        }
        if (shared.isArray(suggestionsArg)) {
          suggestions.value = suggestionsArg;
          highlightedIndex.value = props.highlightFirstItem ? 0 : -1;
        } else {
          error.throwError("ElAutocomplete", "autocomplete suggestions must be an array");
        }
      });
    };
    const debouncedGetData = debounce__default["default"](getData, props.debounce);
    const handleInput = (value) => {
      ctx.emit("input", value);
      ctx.emit(constants.UPDATE_MODEL_EVENT, value);
      suggestionDisabled.value = false;
      if (!props.triggerOnFocus && !value) {
        suggestionDisabled.value = true;
        suggestions.value = [];
        return;
      }
      debouncedGetData(value);
    };
    const handleChange = (value) => {
      ctx.emit("change", value);
    };
    const handleFocus = (e) => {
      activated.value = true;
      ctx.emit("focus", e);
      if (props.triggerOnFocus) {
        debouncedGetData(props.modelValue);
      }
    };
    const handleBlur = (e) => {
      ctx.emit("blur", e);
    };
    const handleClear = () => {
      activated.value = false;
      ctx.emit(constants.UPDATE_MODEL_EVENT, "");
      ctx.emit("clear");
    };
    const handleKeyEnter = () => {
      if (suggestionVisible.value && highlightedIndex.value >= 0 && highlightedIndex.value < suggestions.value.length) {
        select(suggestions.value[highlightedIndex.value]);
      } else if (props.selectWhenUnmatched) {
        ctx.emit("select", { value: props.modelValue });
        vue.nextTick(() => {
          suggestions.value = [];
          highlightedIndex.value = -1;
        });
      }
    };
    const close = () => {
      activated.value = false;
    };
    const focus = () => {
      inputRef.value.focus();
    };
    const select = (item) => {
      ctx.emit("input", item[props.valueKey]);
      ctx.emit(constants.UPDATE_MODEL_EVENT, item[props.valueKey]);
      ctx.emit("select", item);
      vue.nextTick(() => {
        suggestions.value = [];
        highlightedIndex.value = -1;
      });
    };
    const highlight = (index) => {
      if (!suggestionVisible.value || loading.value) {
        return;
      }
      if (index < 0) {
        highlightedIndex.value = -1;
        return;
      }
      if (index >= suggestions.value.length) {
        index = suggestions.value.length - 1;
      }
      const suggestion = regionRef.value.querySelector(".el-autocomplete-suggestion__wrap");
      const suggestionList = suggestion.querySelectorAll(".el-autocomplete-suggestion__list li");
      const highlightItem = suggestionList[index];
      const scrollTop = suggestion.scrollTop;
      const { offsetTop, scrollHeight } = highlightItem;
      if (offsetTop + scrollHeight > scrollTop + suggestion.clientHeight) {
        suggestion.scrollTop += scrollHeight;
      }
      if (offsetTop < scrollTop) {
        suggestion.scrollTop -= scrollHeight;
      }
      highlightedIndex.value = index;
      inputRef.value.inputOrTextarea.setAttribute("aria-activedescendant", `${id.value}-item-${highlightedIndex.value}`);
    };
    return {
      Effect: defaults.Effect,
      attrs,
      suggestions,
      highlightedIndex,
      dropdownWidth,
      activated,
      suggestionDisabled,
      loading,
      inputRef,
      regionRef,
      popper,
      id,
      suggestionVisible,
      suggestionLoading,
      getData,
      handleInput,
      handleChange,
      handleFocus,
      handleBlur,
      handleClear,
      handleKeyEnter,
      close,
      focus,
      select,
      highlight
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=index.vue_vue&type=script&lang.js.map
