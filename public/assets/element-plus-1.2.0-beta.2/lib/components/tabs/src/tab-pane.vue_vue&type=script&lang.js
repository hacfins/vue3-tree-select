'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');

var script = vue.defineComponent({
  name: "ElTabPane",
  props: {
    label: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      default: ""
    },
    closable: Boolean,
    disabled: Boolean,
    lazy: Boolean
  },
  setup(props) {
    const index = vue.ref(null);
    const loaded = vue.ref(false);
    const rootTabs = vue.inject("rootTabs");
    const updatePaneState = vue.inject("updatePaneState");
    if (!rootTabs || !updatePaneState) {
      throw new Error(`ElTabPane must use with ElTabs`);
    }
    const isClosable = vue.computed(() => {
      return props.closable || rootTabs.props.closable;
    });
    const active = vue.computed(() => {
      return rootTabs.currentName.value === (props.name || index.value);
    });
    const paneName = vue.computed(() => {
      return props.name || index.value;
    });
    const shouldBeRender = vue.computed(() => {
      return !props.lazy || loaded.value || active.value;
    });
    vue.watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const instance = vue.getCurrentInstance();
    updatePaneState({
      uid: instance.uid,
      instance,
      props,
      paneName,
      active,
      index,
      isClosable
    });
    return {
      index,
      loaded,
      isClosable,
      active,
      paneName,
      shouldBeRender
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=tab-pane.vue_vue&type=script&lang.js.map
