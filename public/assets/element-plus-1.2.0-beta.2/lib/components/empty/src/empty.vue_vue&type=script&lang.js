'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../../hooks/index.js');
require('./img-empty.js');
var empty = require('./empty.js');
var imgEmpty_vue_vue_type_script_lang = require('./img-empty.vue_vue&type=script&lang.js');
var index = require('../../../hooks/use-locale/index.js');

var script = vue.defineComponent({
  name: "ElEmpty",
  components: {
    ImgEmpty: imgEmpty_vue_vue_type_script_lang["default"]
  },
  props: empty.emptyProps,
  setup(props) {
    const { t } = index.useLocaleInject();
    const emptyDescription = vue.computed(() => props.description || t("el.table.emptyText"));
    const imageStyle = vue.computed(() => ({
      width: props.imageSize ? `${props.imageSize}px` : ""
    }));
    return {
      emptyDescription,
      imageStyle
    };
  }
});

exports["default"] = script;
//# sourceMappingURL=empty.vue_vue&type=script&lang.js.map
