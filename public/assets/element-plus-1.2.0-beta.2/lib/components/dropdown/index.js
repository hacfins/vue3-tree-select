'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var withInstall = require('../../utils/with-install.js');
require('./src/dropdown2.js');
require('./src/dropdown-item.js');
require('./src/dropdown-menu.js');
var dropdown_vue_vue_type_script_lang = require('./src/dropdown.vue_vue&type=script&lang.js');
var dropdownItem_vue_vue_type_script_lang = require('./src/dropdown-item.vue_vue&type=script&lang.js');
var dropdownMenu_vue_vue_type_script_lang = require('./src/dropdown-menu.vue_vue&type=script&lang.js');

const ElDropdown = withInstall.withInstall(dropdown_vue_vue_type_script_lang["default"], {
  DropdownItem: dropdownItem_vue_vue_type_script_lang["default"],
  DropdownMenu: dropdownMenu_vue_vue_type_script_lang["default"]
});
const ElDropdownItem = withInstall.withNoopInstall(dropdownItem_vue_vue_type_script_lang["default"]);
const ElDropdownMenu = withInstall.withNoopInstall(dropdownMenu_vue_vue_type_script_lang["default"]);

exports.ElDropdown = ElDropdown;
exports.ElDropdownItem = ElDropdownItem;
exports.ElDropdownMenu = ElDropdownMenu;
exports["default"] = ElDropdown;
//# sourceMappingURL=index.js.map
