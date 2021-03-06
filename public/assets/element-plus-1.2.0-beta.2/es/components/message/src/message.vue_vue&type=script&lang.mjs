import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import { useTimeoutFn, useEventListener } from '@vueuse/core';
import { EVENT_CODE } from '../../../utils/aria.mjs';
import { ElBadge } from '../../badge/index.mjs';
import { ElIcon } from '../../icon/index.mjs';
import { TypeComponents, TypeComponentsMap } from '../../../utils/icon.mjs';
import { messageProps, messageEmits } from './message.mjs';

var script = defineComponent({
  name: "ElMessage",
  components: {
    ElBadge,
    ElIcon,
    ...TypeComponents
  },
  props: messageProps,
  emits: messageEmits,
  setup(props) {
    const visible = ref(false);
    let stopTimer = void 0;
    const typeClass = computed(() => {
      const type = props.type;
      return type && TypeComponentsMap[type] ? `el-message-icon--${type}` : "";
    });
    const iconComponent = computed(() => {
      return props.icon || TypeComponentsMap[props.type] || "";
    });
    const customStyle = computed(() => ({
      top: `${props.offset}px`,
      zIndex: props.zIndex
    }));
    function startTimer() {
      if (props.duration > 0) {
        ;
        ({ stop: stopTimer } = useTimeoutFn(() => {
          if (visible.value)
            close();
        }, props.duration));
      }
    }
    function clearTimer() {
      stopTimer == null ? void 0 : stopTimer();
    }
    function close() {
      visible.value = false;
    }
    function keydown({ code }) {
      if (code === EVENT_CODE.esc) {
        if (visible.value) {
          close();
        }
      } else {
        startTimer();
      }
    }
    onMounted(() => {
      startTimer();
      visible.value = true;
    });
    watch(() => props.repeatNum, () => {
      clearTimer();
      startTimer();
    });
    useEventListener(document, "keydown", keydown);
    return {
      typeClass,
      iconComponent,
      customStyle,
      visible,
      close,
      clearTimer,
      startTimer
    };
  }
});

export { script as default };
//# sourceMappingURL=message.vue_vue&type=script&lang.mjs.map
