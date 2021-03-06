'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var props = require('../../../utils/props.js');

const ROOT_TREE_INJECTION_KEY = Symbol();
const EMPTY_NODE = {
  key: -1,
  level: -1,
  data: {}
};
exports.TreeOptionsEnum = void 0;
(function(TreeOptionsEnum2) {
  TreeOptionsEnum2["KEY"] = "id";
  TreeOptionsEnum2["LABEL"] = "label";
  TreeOptionsEnum2["CHILDREN"] = "children";
  TreeOptionsEnum2["DISABLED"] = "disabled";
})(exports.TreeOptionsEnum || (exports.TreeOptionsEnum = {}));
exports.SetOperationEnum = void 0;
(function(SetOperationEnum2) {
  SetOperationEnum2["ADD"] = "add";
  SetOperationEnum2["DELETE"] = "delete";
})(exports.SetOperationEnum || (exports.SetOperationEnum = {}));
const treeProps = props.buildProps({
  data: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  emptyText: {
    type: String
  },
  height: {
    type: Number,
    default: 200
  },
  props: {
    type: props.definePropType(Object),
    default: () => props.mutable({
      children: exports.TreeOptionsEnum.CHILDREN,
      label: exports.TreeOptionsEnum.LABEL,
      disabled: exports.TreeOptionsEnum.DISABLED,
      value: exports.TreeOptionsEnum.KEY
    })
  },
  highlightCurrent: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  defaultCheckedKeys: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  checkStrictly: {
    type: Boolean,
    default: false
  },
  defaultExpandedKeys: {
    type: props.definePropType(Array),
    default: () => props.mutable([])
  },
  indent: {
    type: Number,
    default: 16
  },
  icon: {
    type: String
  },
  expandOnClickNode: {
    type: Boolean,
    default: true
  },
  checkOnClickNode: {
    type: Boolean,
    default: false
  },
  currentNodeKey: {
    type: props.definePropType([String, Number])
  },
  accordion: {
    type: Boolean,
    default: false
  },
  filterMethod: {
    type: props.definePropType(Function)
  },
  perfMode: {
    type: Boolean,
    default: true
  }
});
const treeNodeProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    default: () => props.mutable(EMPTY_NODE)
  },
  expanded: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  indeterminate: {
    type: Boolean,
    default: false
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  current: {
    type: Boolean,
    default: false
  },
  hiddenExpandIcon: {
    type: Boolean,
    default: false
  }
});
const treeNodeContentProps = props.buildProps({
  node: {
    type: props.definePropType(Object),
    required: true
  }
});
const NODE_CLICK = "node-click";
const NODE_EXPAND = "node-expand";
const NODE_COLLAPSE = "node-collapse";
const CURRENT_CHANGE = "current-change";
const NODE_CHECK = "check";
const NODE_CHECK_CHANGE = "check-change";
const NODE_CONTEXTMENU = "node-contextmenu";
const treeEmits = {
  [NODE_CLICK]: (data, node) => data && node,
  [NODE_EXPAND]: (data, node) => data && node,
  [NODE_COLLAPSE]: (data, node) => data && node,
  [CURRENT_CHANGE]: (data, node) => data && node,
  [NODE_CHECK]: (data, checkedInfo) => data && checkedInfo,
  [NODE_CHECK_CHANGE]: (data, checked) => data && typeof checked === "boolean",
  [NODE_CONTEXTMENU]: (event, data, node) => event && data && node
};
const treeNodeEmits = {
  click: (node) => !!node,
  toggle: (node) => !!node,
  check: (node, checked) => node && typeof checked === "boolean"
};

exports.CURRENT_CHANGE = CURRENT_CHANGE;
exports.NODE_CHECK = NODE_CHECK;
exports.NODE_CHECK_CHANGE = NODE_CHECK_CHANGE;
exports.NODE_CLICK = NODE_CLICK;
exports.NODE_COLLAPSE = NODE_COLLAPSE;
exports.NODE_CONTEXTMENU = NODE_CONTEXTMENU;
exports.NODE_EXPAND = NODE_EXPAND;
exports.ROOT_TREE_INJECTION_KEY = ROOT_TREE_INJECTION_KEY;
exports.treeEmits = treeEmits;
exports.treeNodeContentProps = treeNodeContentProps;
exports.treeNodeEmits = treeNodeEmits;
exports.treeNodeProps = treeNodeProps;
exports.treeProps = treeProps;
//# sourceMappingURL=virtual-tree.js.map
