import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/button2.mjs';
import './src/button-group2.mjs';
export { buttonEmits, buttonNativeType, buttonProps, buttonSize, buttonType } from './src/button.mjs';
import script from './src/button.vue_vue&type=script&lang.mjs';
import script$1 from './src/button-group.vue_vue&type=script&lang.mjs';

const ElButton = withInstall(script, {
  ButtonGroup: script$1
});
const ElButtonGroup = withNoopInstall(script$1);

export { ElButton, ElButtonGroup, ElButton as default };
//# sourceMappingURL=index.mjs.map
