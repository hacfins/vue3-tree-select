'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var vue = require('vue');
require('../../tokens/index.js');
var props = require('../../utils/props.js');
var util = require('../../utils/util.js');
var form = require('../../tokens/form.js');

const sizes = ["", "large", "medium", "small", "mini"];
const useFormItemProps = props.buildProps({
  size: {
    type: String,
    values: sizes,
    default: ""
  },
  disabled: Boolean
});
const useFormItem = ({ size, disabled }) => {
  var _a;
  const vm = vue.getCurrentInstance();
  const $ELEMENT = util.useGlobalConfig();
  const props = (_a = vm.proxy) == null ? void 0 : _a.$props;
  const form$1 = vue.inject(form.elFormKey, void 0);
  const formItem = vue.inject(form.elFormItemKey, void 0);
  return {
    size: vue.computed(() => {
      return props.size || vue.unref(size) || (formItem == null ? void 0 : formItem.size) || (form$1 == null ? void 0 : form$1.size) || $ELEMENT.size || "";
    }),
    disabled: vue.computed(() => {
      return props.disabled === true || vue.unref(disabled) || (form$1 == null ? void 0 : form$1.disabled) || false;
    })
  };
};

exports.useFormItem = useFormItem;
exports.useFormItemProps = useFormItemProps;
//# sourceMappingURL=index.js.map
