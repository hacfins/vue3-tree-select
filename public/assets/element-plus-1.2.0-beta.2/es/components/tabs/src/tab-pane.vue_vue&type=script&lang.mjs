import { defineComponent, ref, inject, computed, watch, getCurrentInstance } from 'vue';

var script = defineComponent({
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
    const index = ref(null);
    const loaded = ref(false);
    const rootTabs = inject("rootTabs");
    const updatePaneState = inject("updatePaneState");
    if (!rootTabs || !updatePaneState) {
      throw new Error(`ElTabPane must use with ElTabs`);
    }
    const isClosable = computed(() => {
      return props.closable || rootTabs.props.closable;
    });
    const active = computed(() => {
      return rootTabs.currentName.value === (props.name || index.value);
    });
    const paneName = computed(() => {
      return props.name || index.value;
    });
    const shouldBeRender = computed(() => {
      return !props.lazy || loaded.value || active.value;
    });
    watch(active, (val) => {
      if (val)
        loaded.value = true;
    });
    const instance = getCurrentInstance();
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

export { script as default };
//# sourceMappingURL=tab-pane.vue_vue&type=script&lang.mjs.map
