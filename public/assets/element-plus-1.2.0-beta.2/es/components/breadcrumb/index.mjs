import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/breadcrumb2.mjs';
import './src/breadcrumb-item2.mjs';
export { breadcrumbProps } from './src/breadcrumb.mjs';
export { breadcrumbItemProps } from './src/breadcrumb-item.mjs';
import script from './src/breadcrumb.vue_vue&type=script&lang.mjs';
import script$1 from './src/breadcrumb-item.vue_vue&type=script&lang.mjs';

const ElBreadcrumb = withInstall(script, {
  BreadcrumbItem: script$1
});
const ElBreadcrumbItem = withNoopInstall(script$1);

export { ElBreadcrumb, ElBreadcrumbItem, ElBreadcrumb as default };
//# sourceMappingURL=index.mjs.map
