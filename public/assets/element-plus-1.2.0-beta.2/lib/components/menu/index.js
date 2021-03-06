'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
var menu = require('./src/menu.js');
require('./src/menu-item2.js');
require('./src/menu-item-group2.js');
var subMenu = require('./src/sub-menu.js');
var menuItem = require('./src/menu-item.js');
var menuItemGroup = require('./src/menu-item-group.js');
require('./src/types.js');
var menuItem_vue_vue_type_script_lang = require('./src/menu-item.vue_vue&type=script&lang.js');
var menuItemGroup_vue_vue_type_script_lang = require('./src/menu-item-group.vue_vue&type=script&lang.js');

const ElMenu = withInstall.withInstall(menu["default"], {
  MenuItem: menuItem_vue_vue_type_script_lang["default"],
  MenuItemGroup: menuItemGroup_vue_vue_type_script_lang["default"],
  SubMenu: subMenu["default"]
});
const ElMenuItem = withInstall.withNoopInstall(menuItem_vue_vue_type_script_lang["default"]);
const ElMenuItemGroup = withInstall.withNoopInstall(menuItemGroup_vue_vue_type_script_lang["default"]);
const ElSubMenu = withInstall.withNoopInstall(subMenu["default"]);

exports.menuEmits = menu.menuEmits;
exports.menuProps = menu.menuProps;
exports.subMenuProps = subMenu.subMenuProps;
exports.menuItemEmits = menuItem.menuItemEmits;
exports.menuItemProps = menuItem.menuItemProps;
exports.menuItemGroupProps = menuItemGroup.menuItemGroupProps;
exports.ElMenu = ElMenu;
exports.ElMenuItem = ElMenuItem;
exports.ElMenuItemGroup = ElMenuItemGroup;
exports.ElSubMenu = ElSubMenu;
exports["default"] = ElMenu;
//# sourceMappingURL=index.js.map
