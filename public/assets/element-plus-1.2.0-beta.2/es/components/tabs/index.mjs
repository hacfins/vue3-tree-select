import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import Tabs from './src/tabs.mjs';
import './src/tab-pane.mjs';
import script from './src/tab-pane.vue_vue&type=script&lang.mjs';

const ElTabs = withInstall(Tabs, {
  TabPane: script
});
const ElTabPane = withNoopInstall(script);

export { ElTabPane, ElTabs, ElTabs as default };
//# sourceMappingURL=index.mjs.map
