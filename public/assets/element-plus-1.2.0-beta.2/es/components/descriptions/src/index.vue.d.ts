import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
}, {
    descriptionsSize: import("vue").ComputedRef<any>;
    getRows: () => never[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    border?: unknown;
    column?: unknown;
    direction?: unknown;
    size?: unknown;
    title?: unknown;
    extra?: unknown;
} & {
    column: number;
    border: boolean;
    title: string;
    direction: "horizontal" | "vertical";
    extra: string;
} & {
    size?: ComponentSize | undefined;
}>, {
    column: number;
    border: boolean;
    title: string;
    direction: "horizontal" | "vertical";
    extra: string;
}>;
export default _default;
