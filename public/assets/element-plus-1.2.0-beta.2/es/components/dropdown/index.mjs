import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/dropdown2.mjs';
import './src/dropdown-item.mjs';
import './src/dropdown-menu.mjs';
import script from './src/dropdown.vue_vue&type=script&lang.mjs';
import script$1 from './src/dropdown-item.vue_vue&type=script&lang.mjs';
import script$2 from './src/dropdown-menu.vue_vue&type=script&lang.mjs';

const ElDropdown = withInstall(script, {
  DropdownItem: script$1,
  DropdownMenu: script$2
});
const ElDropdownItem = withNoopInstall(script$1);
const ElDropdownMenu = withNoopInstall(script$2);

export { ElDropdown, ElDropdownItem, ElDropdownMenu, ElDropdown as default };
//# sourceMappingURL=index.mjs.map
