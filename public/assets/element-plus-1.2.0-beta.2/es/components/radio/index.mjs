import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/radio.mjs';
import './src/radio-button.mjs';
import './src/radio-group.mjs';
import './src/token.mjs';
import script from './src/radio.vue_vue&type=script&lang.mjs';
import script$1 from './src/radio-button.vue_vue&type=script&lang.mjs';
import script$2 from './src/radio-group.vue_vue&type=script&lang.mjs';

const ElRadio = withInstall(script, {
  RadioButton: script$1,
  RadioGroup: script$2
});
const ElRadioGroup = withNoopInstall(script$2);
const ElRadioButton = withNoopInstall(script$1);

export { ElRadio, ElRadioButton, ElRadioGroup, ElRadio as default };
//# sourceMappingURL=index.mjs.map
