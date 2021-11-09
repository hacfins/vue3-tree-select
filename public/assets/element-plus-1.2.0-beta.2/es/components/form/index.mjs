import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/form.mjs';
import './src/form-item.mjs';
import script from './src/form.vue_vue&type=script&lang.mjs';
import script$1 from './src/form-item.vue_vue&type=script&lang.mjs';

const ElForm = withInstall(script, {
  FormItem: script$1
});
const ElFormItem = withNoopInstall(script$1);

export { ElForm, ElFormItem, ElForm as default };
//# sourceMappingURL=index.mjs.map
