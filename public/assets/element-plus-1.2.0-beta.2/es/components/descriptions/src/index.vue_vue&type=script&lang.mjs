import { defineComponent, provide, computed } from 'vue';
import { useGlobalConfig } from '../../../utils/util.mjs';
import { isValidComponentSize } from '../../../utils/validators.mjs';
import './descriptions-row.mjs';
import { elDescriptionsKey } from './token.mjs';
import script$1 from './descriptions-row.vue_vue&type=script&lang.mjs';

var script = defineComponent({
  name: "ElDescriptions",
  components: {
    [script$1.name]: script$1
  },
  props: {
    border: {
      type: Boolean,
      default: false
    },
    column: {
      type: Number,
      default: 3
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String,
      validator: isValidComponentSize
    },
    title: {
      type: String,
      default: ""
    },
    extra: {
      type: String,
      default: ""
    }
  },
  setup(props, { slots }) {
    provide(elDescriptionsKey, props);
    const $ELEMENT = useGlobalConfig();
    const descriptionsSize = computed(() => {
      return props.size || $ELEMENT.size;
    });
    const flattedChildren = (children) => {
      const temp = Array.isArray(children) ? children : [children];
      const res = [];
      temp.forEach((child) => {
        if (Array.isArray(child.children)) {
          res.push(...flattedChildren(child.children));
        } else {
          res.push(child);
        }
      });
      return res;
    };
    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = span;
      }
      return node;
    };
    const getRows = () => {
      var _a;
      const children = flattedChildren((_a = slots.default) == null ? void 0 : _a.call(slots)).filter((node) => {
        var _a2;
        return ((_a2 = node == null ? void 0 : node.type) == null ? void 0 : _a2.name) === "ElDescriptionsItem";
      });
      const rows = [];
      let temp = [];
      let count = props.column;
      let totalSpan = 0;
      children.forEach((node, index) => {
        var _a2;
        const span = ((_a2 = node.props) == null ? void 0 : _a2.span) || 1;
        if (index < children.length - 1) {
          totalSpan += span > count ? count : span;
        }
        if (index === children.length - 1) {
          const lastSpan = props.column - totalSpan % props.column;
          temp.push(filledNode(node, lastSpan, count, true));
          rows.push(temp);
          return;
        }
        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(filledNode(node, span, count));
          rows.push(temp);
          count = props.column;
          temp = [];
        }
      });
      return rows;
    };
    return {
      descriptionsSize,
      getRows
    };
  }
});

export { script as default };
//# sourceMappingURL=index.vue_vue&type=script&lang.mjs.map
