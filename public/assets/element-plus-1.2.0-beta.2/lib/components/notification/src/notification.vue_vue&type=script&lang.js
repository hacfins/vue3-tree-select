'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
var core = require('@vueuse/core');
var aria = require('../../../utils/aria.js');
var index = require('../../icon/index.js');
var icon = require('../../../utils/icon.js');
var notification = require('./notification.js');

var script = vue.defineComponent({
  name: "ElNotification",
  components: {
    ElIcon: index.ElIcon,
    ...icon.TypeComponents
  },
  props: notification.notificationProps,
  emits: notification.notificationEmits,
  setup(props) {
    const visible = vue.ref(false);
    let timer = void 0;
    const typeClass = vue.computed(() => {
      const type = props.type;
      return type && icon.TypeComponentsMap[props.type] ? `el-notification--${type}` : "";
    });
    const iconComponent = vue.computed(() => {
      return icon.TypeComponentsMap[props.type] || props.icon || "";
    });
    const horizontalClass = vue.computed(() => props.position.endsWith("right") ? "right" : "left");
    const verticalProperty = vue.computed(() => props.position.startsWith("top") ? "top" : "bottom");
    const positionStyle = vue.computed(() => {
      return {
        [verticalProperty.value]: `${props.offset}px`,
        zIndex: props.zIndex
      };
    });
    function startTimer() {
      if (props.duration > 0) {
        ;
        ({ stop: timer } = core.useTimeoutFn(() => {
          if (visible.value)
            close();
        }, props.duration));
      }
    }
    function clearTimer() {
      timer == null ? void 0 : timer();
    }
    function close() {
      visible.value = false;
    }
    function onKeydown({ code }) {
      if (code === aria.EVENT_CODE.delete || code === aria.EVENT_CODE.backspace) {
        clearTimer();
      } else if (code === aria.EVENT_CODE.esc) {
        if (visible.value) {
          close();
        }
      } else {
        startTimer();
      }
    }
    vue.onMounted(() => {
      startTimer();
      visible.value = true;
    });
    core.useEventListener(document, "keydown", onKeydown);
    return {
      horizontalClass,
      typeClass,
      iconComponent,
      positionStyle,
      visible,
      close,
      clearTimer,
      startTimer
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=notification.vue_vue&type=script&lang.js.map
