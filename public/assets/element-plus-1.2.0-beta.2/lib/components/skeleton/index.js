'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/index.js');
require('./src/item.js');
require('./src/types.js');
var index_vue_vue_type_script_lang = require('./src/index.vue_vue&type=script&lang.js');
var item_vue_vue_type_script_lang = require('./src/item.vue_vue&type=script&lang.js');

const ElSkeleton = withInstall.withInstall(index_vue_vue_type_script_lang["default"], {
  SkeletonItem: item_vue_vue_type_script_lang["default"]
});
const ElSkeletonItem = withInstall.withNoopInstall(item_vue_vue_type_script_lang["default"]);

exports.ElSkeleton = ElSkeleton;
exports.ElSkeletonItem = ElSkeletonItem;
exports["default"] = ElSkeleton;
//# sourceMappingURL=index.js.map
