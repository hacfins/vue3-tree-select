import { inject, reactive, ref, computed, nextTick, watch, onMounted, onBeforeMount } from 'vue';
import { isArray, isFunction, isObject } from '@vue/shared';
import isEqual from 'lodash/isEqual';
import debounce from 'lodash/debounce';
import '../../../tokens/index.mjs';
import '../../../hooks/index.mjs';
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '../../../utils/constants.mjs';
import { addResizeListener, removeResizeListener } from '../../../utils/resize-event.mjs';
import { useGlobalConfig, getValueByPath } from '../../../utils/util.mjs';
import '../../popper/index.mjs';
import { ArrowUp } from '@element-plus/icons';
import { useAllowCreate } from './useAllowCreate.mjs';
import { flattenOptions } from './util.mjs';
import { useInput } from './useInput.mjs';
import { useLocaleInject } from '../../../hooks/use-locale/index.mjs';
import { elFormKey, elFormItemKey } from '../../../tokens/form.mjs';
import { Effect } from '../../popper/src/use-popper/defaults.mjs';

const DEFAULT_INPUT_PLACEHOLDER = "";
const MINIMUM_INPUT_WIDTH = 11;
const TAG_BASE_WIDTH = {
  small: 42,
  mini: 33
};
const useSelect = (props, emit) => {
  const { t } = useLocaleInject();
  const elForm = inject(elFormKey, {});
  const elFormItem = inject(elFormItemKey, {});
  const $ELEMENT = useGlobalConfig();
  const states = reactive({
    inputValue: DEFAULT_INPUT_PLACEHOLDER,
    displayInputValue: DEFAULT_INPUT_PLACEHOLDER,
    calculatedWidth: 0,
    cachedPlaceholder: "",
    cachedOptions: [],
    createdOptions: [],
    createdLabel: "",
    createdSelected: false,
    currentPlaceholder: "",
    hoveringIndex: -1,
    comboBoxHovering: false,
    isOnComposition: false,
    isSilentBlur: false,
    isComposing: false,
    inputLength: 20,
    selectWidth: 200,
    initialInputHeight: 0,
    previousQuery: null,
    previousValue: "",
    query: "",
    selectedLabel: "",
    softFocus: false,
    tagInMultiLine: false
  });
  const selectedIndex = ref(-1);
  const popperSize = ref(-1);
  const controlRef = ref(null);
  const inputRef = ref(null);
  const menuRef = ref(null);
  const popper = ref(null);
  const selectRef = ref(null);
  const selectionRef = ref(null);
  const calculatorRef = ref(null);
  const expanded = ref(false);
  const selectDisabled = computed(() => props.disabled || elForm.disabled);
  const popupHeight = computed(() => {
    const totalHeight = filteredOptions.value.length * 34;
    return totalHeight > props.height ? props.height : totalHeight;
  });
  const showClearBtn = computed(() => {
    const hasValue = props.multiple ? Array.isArray(props.modelValue) && props.modelValue.length > 0 : props.modelValue !== void 0 && props.modelValue !== null && props.modelValue !== "";
    const criteria = props.clearable && !selectDisabled.value && states.comboBoxHovering && hasValue;
    return criteria;
  });
  const iconComponent = computed(() => props.remote && props.filterable ? "" : ArrowUp);
  const iconReverse = computed(() => iconComponent.value && expanded.value ? "is-reverse" : "");
  const debounce$1 = computed(() => props.remote ? 300 : 0);
  const emptyText = computed(() => {
    const options = filteredOptions.value;
    if (props.loading) {
      return props.loadingText || t("el.select.loading");
    } else {
      if (props.remote && states.inputValue === "" && options.length === 0)
        return false;
      if (props.filterable && states.inputValue && options.length > 0) {
        return props.noMatchText || t("el.select.noMatch");
      }
      if (options.length === 0) {
        return props.noDataText || t("el.select.noData");
      }
    }
    return null;
  });
  const filteredOptions = computed(() => {
    const isValidOption = (o) => {
      const query = states.inputValue;
      const containsQueryString = query ? o.label.includes(query) : true;
      return containsQueryString;
    };
    if (props.loading) {
      return [];
    }
    return flattenOptions(props.options.concat(states.createdOptions).map((v) => {
      if (isArray(v.options)) {
        const filtered = v.options.filter(isValidOption);
        if (filtered.length > 0) {
          return {
            ...v,
            options: filtered
          };
        }
      } else {
        if (props.remote || isValidOption(v)) {
          return v;
        }
      }
      return null;
    }).filter((v) => v !== null));
  });
  const optionsAllDisabled = computed(() => filteredOptions.value.every((option) => option.disabled));
  const selectSize = computed(() => props.size || elFormItem.size || $ELEMENT.size);
  const collapseTagSize = computed(() => ["small", "mini"].indexOf(selectSize.value) > -1 ? "mini" : "small");
  const tagMaxWidth = computed(() => {
    const select = selectionRef.value;
    const size = collapseTagSize.value;
    const paddingLeft = select ? parseInt(getComputedStyle(select).paddingLeft) : 0;
    const paddingRight = select ? parseInt(getComputedStyle(select).paddingRight) : 0;
    return states.selectWidth - paddingRight - paddingLeft - TAG_BASE_WIDTH[size];
  });
  const calculatePopperSize = () => {
    var _a, _b, _c;
    popperSize.value = ((_c = (_b = (_a = selectRef.value) == null ? void 0 : _a.getBoundingClientRect) == null ? void 0 : _b.call(_a)) == null ? void 0 : _c.width) || 200;
  };
  const inputWrapperStyle = computed(() => {
    return {
      width: `${states.calculatedWidth === 0 ? MINIMUM_INPUT_WIDTH : Math.ceil(states.calculatedWidth) + MINIMUM_INPUT_WIDTH}px`
    };
  });
  const shouldShowPlaceholder = computed(() => {
    if (isArray(props.modelValue)) {
      return props.modelValue.length === 0 && !states.displayInputValue;
    }
    return props.filterable ? states.displayInputValue.length === 0 : true;
  });
  const currentPlaceholder = computed(() => {
    const _placeholder = props.placeholder || t("el.select.placeholder");
    return props.multiple ? _placeholder : states.selectedLabel || _placeholder;
  });
  const popperRef = computed(() => {
    var _a;
    return (_a = popper.value) == null ? void 0 : _a.popperRef;
  });
  const indexRef = computed(() => {
    if (props.multiple) {
      const len = props.modelValue.length;
      if (props.modelValue.length > 0) {
        return filteredOptions.value.findIndex((o) => o.value === props.modelValue[len - 1]);
      }
    } else {
      if (props.modelValue) {
        return filteredOptions.value.findIndex((o) => o.value === props.modelValue);
      }
    }
    return -1;
  });
  const dropdownMenuVisible = computed(() => {
    return expanded.value && emptyText.value !== false;
  });
  const {
    createNewOption,
    removeNewOption,
    selectNewOption,
    clearAllNewOption
  } = useAllowCreate(props, states);
  const {
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd
  } = useInput((e) => onInput(e));
  const focusAndUpdatePopup = () => {
    var _a, _b, _c, _d;
    (_b = (_a = inputRef.value).focus) == null ? void 0 : _b.call(_a);
    (_d = (_c = popper.value).update) == null ? void 0 : _d.call(_c);
  };
  const toggleMenu = () => {
    if (props.automaticDropdown)
      return;
    if (!selectDisabled.value) {
      if (states.isComposing)
        states.softFocus = true;
      return nextTick(() => {
        var _a, _b;
        expanded.value = !expanded.value;
        (_b = (_a = inputRef.value) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
      });
    }
  };
  const onInputChange = () => {
    if (props.filterable && states.inputValue !== states.selectedLabel) {
      states.query = states.selectedLabel;
    }
    handleQueryChange(states.inputValue);
    return nextTick(() => {
      createNewOption(states.inputValue);
    });
  };
  const debouncedOnInputChange = debounce(onInputChange, debounce$1.value);
  const handleQueryChange = (val) => {
    if (states.previousQuery === val) {
      return;
    }
    states.previousQuery = val;
    if (props.filterable && isFunction(props.filterMethod)) {
      props.filterMethod(val);
    } else if (props.filterable && props.remote && isFunction(props.remoteMethod)) {
      props.remoteMethod(val);
    }
  };
  const emitChange = (val) => {
    if (!isEqual(props.modelValue, val)) {
      emit(CHANGE_EVENT, val);
    }
  };
  const update = (val) => {
    emit(UPDATE_MODEL_EVENT, val);
    emitChange(val);
    states.previousValue = val.toString();
  };
  const getValueIndex = (arr = [], value) => {
    if (!isObject(value)) {
      return arr.indexOf(value);
    }
    const valueKey = props.valueKey;
    let index = -1;
    arr.some((item, i) => {
      if (getValueByPath(item, valueKey) === getValueByPath(value, valueKey)) {
        index = i;
        return true;
      }
      return false;
    });
    return index;
  };
  const getValueKey = (item) => {
    return isObject(item) ? getValueByPath(item, props.valueKey) : item;
  };
  const getLabel = (item) => {
    return isObject(item) ? item.label : item;
  };
  const resetInputHeight = () => {
    if (props.collapseTags && !props.filterable) {
      return;
    }
    return nextTick(() => {
      var _a, _b;
      if (!inputRef.value)
        return;
      const selection = selectionRef.value;
      selectRef.value.height = selection.offsetHeight;
      if (expanded.value && emptyText.value !== false) {
        (_b = (_a = popper.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
      }
    });
  };
  const handleResize = () => {
    var _a, _b;
    resetInputWidth();
    calculatePopperSize();
    (_b = (_a = popper.value) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a);
    if (props.multiple) {
      return resetInputHeight();
    }
  };
  const resetInputWidth = () => {
    const select = selectionRef.value;
    if (select) {
      states.selectWidth = select.getBoundingClientRect().width;
    }
  };
  const onSelect = (option, idx, byClick = true) => {
    var _a, _b;
    if (props.multiple) {
      let selectedOptions = props.modelValue.slice();
      const index = getValueIndex(selectedOptions, getValueKey(option));
      if (index > -1) {
        selectedOptions = [
          ...selectedOptions.slice(0, index),
          ...selectedOptions.slice(index + 1)
        ];
        states.cachedOptions.splice(index, 1);
        removeNewOption(option);
      } else if (props.multipleLimit <= 0 || selectedOptions.length < props.multipleLimit) {
        selectedOptions = [...selectedOptions, getValueKey(option)];
        states.cachedOptions.push(option);
        selectNewOption(option);
        updateHoveringIndex(idx);
      }
      update(selectedOptions);
      if (option.created) {
        states.query = "";
        handleQueryChange("");
        states.inputLength = 20;
      }
      if (props.filterable) {
        (_b = (_a = inputRef.value).focus) == null ? void 0 : _b.call(_a);
        onUpdateInputValue("");
      }
      if (props.filterable) {
        states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
      }
      resetInputHeight();
      setSoftFocus();
    } else {
      selectedIndex.value = idx;
      states.selectedLabel = option.label;
      update(getValueKey(option));
      expanded.value = false;
      states.isComposing = false;
      states.isSilentBlur = byClick;
      selectNewOption(option);
      if (!option.created) {
        clearAllNewOption();
      }
      updateHoveringIndex(idx);
    }
  };
  const deleteTag = (event, tag) => {
    const index = props.modelValue.indexOf(tag.value);
    if (index > -1 && !selectDisabled.value) {
      const value = [
        ...props.modelValue.slice(0, index),
        ...props.modelValue.slice(index + 1)
      ];
      states.cachedOptions.splice(index, 1);
      update(value);
      emit("remove-tag", tag.value);
      states.softFocus = true;
      removeNewOption(tag);
      return nextTick(focusAndUpdatePopup);
    }
    event.stopPropagation();
  };
  const handleFocus = (event) => {
    const focused = states.isComposing;
    states.isComposing = true;
    if (!states.softFocus) {
      if (!focused)
        emit("focus", event);
    } else {
      states.softFocus = false;
    }
  };
  const handleBlur = () => {
    states.softFocus = false;
    return nextTick(() => {
      var _a, _b;
      (_b = (_a = inputRef.value) == null ? void 0 : _a.blur) == null ? void 0 : _b.call(_a);
      if (calculatorRef.value) {
        states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
      }
      if (states.isSilentBlur) {
        states.isSilentBlur = false;
      } else {
        if (states.isComposing) {
          emit("blur");
        }
      }
      states.isComposing = false;
    });
  };
  const handleEsc = () => {
    if (states.displayInputValue.length > 0) {
      onUpdateInputValue("");
    } else {
      expanded.value = false;
    }
  };
  const handleDel = (e) => {
    if (states.displayInputValue.length === 0) {
      e.preventDefault();
      const selected = props.modelValue.slice();
      selected.pop();
      removeNewOption(states.cachedOptions.pop());
      update(selected);
    }
  };
  const handleClear = () => {
    let emptyValue;
    if (isArray(props.modelValue)) {
      emptyValue = [];
    } else {
      emptyValue = "";
    }
    states.softFocus = true;
    if (props.multiple) {
      states.cachedOptions = [];
    } else {
      states.selectedLabel = "";
    }
    expanded.value = false;
    update(emptyValue);
    emit("clear");
    clearAllNewOption();
    return nextTick(focusAndUpdatePopup);
  };
  const onUpdateInputValue = (val) => {
    states.displayInputValue = val;
    states.inputValue = val;
  };
  const onKeyboardNavigate = (direction, hoveringIndex = void 0) => {
    const options = filteredOptions.value;
    if (!["forward", "backward"].includes(direction) || selectDisabled.value || options.length <= 0 || optionsAllDisabled.value) {
      return;
    }
    if (!expanded.value) {
      return toggleMenu();
    }
    if (hoveringIndex === void 0) {
      hoveringIndex = states.hoveringIndex;
    }
    let newIndex = -1;
    if (direction === "forward") {
      newIndex = hoveringIndex + 1;
      if (newIndex >= options.length) {
        newIndex = 0;
      }
    } else if (direction === "backward") {
      newIndex = hoveringIndex - 1;
      if (newIndex < 0) {
        newIndex = options.length - 1;
      }
    }
    const option = options[newIndex];
    if (option.disabled || option.type === "Group") {
      return onKeyboardNavigate(direction, newIndex);
    } else {
      updateHoveringIndex(newIndex);
      scrollToItem(newIndex);
    }
  };
  const onKeyboardSelect = () => {
    if (!expanded.value) {
      return toggleMenu();
    } else if (~states.hoveringIndex) {
      onSelect(filteredOptions.value[states.hoveringIndex], states.hoveringIndex, false);
    }
  };
  const updateHoveringIndex = (idx) => {
    states.hoveringIndex = idx;
  };
  const resetHoveringIndex = () => {
    states.hoveringIndex = -1;
  };
  const setSoftFocus = () => {
    var _a;
    const _input = inputRef.value;
    if (_input) {
      (_a = _input.focus) == null ? void 0 : _a.call(_input);
    }
  };
  const onInput = (event) => {
    const value = event.target.value;
    onUpdateInputValue(value);
    if (states.displayInputValue.length > 0 && !expanded.value) {
      expanded.value = true;
    }
    states.calculatedWidth = calculatorRef.value.getBoundingClientRect().width;
    if (props.multiple) {
      resetInputHeight();
    }
    if (props.remote) {
      debouncedOnInputChange();
    } else {
      return onInputChange();
    }
  };
  const handleClickOutside = () => {
    expanded.value = false;
    return handleBlur();
  };
  const handleMenuEnter = () => {
    states.inputValue = states.displayInputValue;
    return nextTick(() => {
      if (~indexRef.value) {
        updateHoveringIndex(indexRef.value);
        scrollToItem(states.hoveringIndex);
      }
    });
  };
  const scrollToItem = (index) => {
    menuRef.value.scrollToItem(index);
  };
  const initStates = () => {
    resetHoveringIndex();
    if (props.multiple) {
      if (props.modelValue.length > 0) {
        let initHovering = false;
        states.cachedOptions.length = 0;
        props.modelValue.map((selected) => {
          const itemIndex = filteredOptions.value.findIndex((option) => getValueKey(option) === selected);
          if (~itemIndex) {
            states.cachedOptions.push(filteredOptions.value[itemIndex]);
            if (!initHovering) {
              updateHoveringIndex(itemIndex);
            }
            initHovering = true;
          }
        });
      } else {
        states.cachedOptions = [];
      }
    } else {
      if (props.modelValue) {
        const options = filteredOptions.value;
        const selectedItemIndex = options.findIndex((option) => getValueKey(option) === props.modelValue);
        if (~selectedItemIndex) {
          states.selectedLabel = options[selectedItemIndex].label;
          updateHoveringIndex(selectedItemIndex);
        } else {
          states.selectedLabel = `${props.modelValue}`;
        }
      } else {
        states.selectedLabel = "";
      }
    }
    calculatePopperSize();
  };
  watch(expanded, (val) => {
    var _a, _b;
    emit("visible-change", val);
    if (val) {
      (_b = (_a = popper.value).update) == null ? void 0 : _b.call(_a);
    } else {
      states.displayInputValue = "";
      createNewOption("");
    }
  });
  watch(() => props.modelValue, (val) => {
    if (!val || val.toString() !== states.previousValue) {
      initStates();
    }
  }, {
    deep: true
  });
  watch(() => props.options, () => {
    const input = inputRef.value;
    if (!input || input && document.activeElement !== input) {
      initStates();
    }
  }, {
    deep: true
  });
  watch(filteredOptions, () => {
    return nextTick(menuRef.value.resetScrollTop);
  });
  onMounted(() => {
    initStates();
    addResizeListener(selectRef.value, handleResize);
  });
  onBeforeMount(() => {
    removeResizeListener(selectRef.value, handleResize);
  });
  return {
    collapseTagSize,
    currentPlaceholder,
    expanded,
    emptyText,
    popupHeight,
    debounce: debounce$1,
    filteredOptions,
    iconComponent,
    iconReverse,
    inputWrapperStyle,
    popperSize,
    dropdownMenuVisible,
    shouldShowPlaceholder,
    selectDisabled,
    selectSize,
    showClearBtn,
    states,
    tagMaxWidth,
    calculatorRef,
    controlRef,
    inputRef,
    menuRef,
    popper,
    selectRef,
    selectionRef,
    popperRef,
    Effect,
    debouncedOnInputChange,
    deleteTag,
    getLabel,
    getValueKey,
    handleBlur,
    handleClear,
    handleClickOutside,
    handleDel,
    handleEsc,
    handleFocus,
    handleMenuEnter,
    handleResize,
    toggleMenu,
    scrollTo: scrollToItem,
    onInput,
    onKeyboardNavigate,
    onKeyboardSelect,
    onSelect,
    onHover: updateHoveringIndex,
    onUpdateInputValue,
    handleCompositionStart,
    handleCompositionEnd,
    handleCompositionUpdate
  };
};

export { useSelect as default };
//# sourceMappingURL=useSelect.mjs.map
