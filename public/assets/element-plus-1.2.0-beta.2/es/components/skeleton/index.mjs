import { withInstall, withNoopInstall } from '../../utils/with-install.mjs';
import './src/index.mjs';
import './src/item.mjs';
import './src/types.mjs';
import script from './src/index.vue_vue&type=script&lang.mjs';
import script$1 from './src/item.vue_vue&type=script&lang.mjs';

const ElSkeleton = withInstall(script, {
  SkeletonItem: script$1
});
const ElSkeletonItem = withNoopInstall(script$1);

export { ElSkeleton, ElSkeletonItem, ElSkeleton as default };
//# sourceMappingURL=index.mjs.map
