'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/breadcrumb2.js');
require('./src/breadcrumb-item2.js');
var breadcrumb = require('./src/breadcrumb.js');
var breadcrumbItem = require('./src/breadcrumb-item.js');
var breadcrumb_vue_vue_type_script_lang = require('./src/breadcrumb.vue_vue&type=script&lang.js');
var breadcrumbItem_vue_vue_type_script_lang = require('./src/breadcrumb-item.vue_vue&type=script&lang.js');

const ElBreadcrumb = withInstall.withInstall(breadcrumb_vue_vue_type_script_lang["default"], {
  BreadcrumbItem: breadcrumbItem_vue_vue_type_script_lang["default"]
});
const ElBreadcrumbItem = withInstall.withNoopInstall(breadcrumbItem_vue_vue_type_script_lang["default"]);

exports.breadcrumbProps = breadcrumb.breadcrumbProps;
exports.breadcrumbItemProps = breadcrumbItem.breadcrumbItemProps;
exports.ElBreadcrumb = ElBreadcrumb;
exports.ElBreadcrumbItem = ElBreadcrumbItem;
exports["default"] = ElBreadcrumb;
//# sourceMappingURL=index.js.map
