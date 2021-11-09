import { defineComponent } from 'vue';

let id = 0;
var script = defineComponent({
  name: "ImgEmpty",
  setup() {
    return {
      id: ++id
    };
  }
});

export { script as default };
//# sourceMappingURL=img-empty.vue_vue&type=script&lang.mjs.map
