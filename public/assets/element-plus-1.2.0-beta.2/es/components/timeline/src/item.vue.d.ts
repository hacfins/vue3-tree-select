import type { PropType, Component } from 'vue';
declare const _default: import("vue").DefineComponent<{
    timestamp: {
        type: StringConstructor;
        default: string;
    };
    hideTimestamp: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    timestamp?: unknown;
    hideTimestamp?: unknown;
    center?: unknown;
    placement?: unknown;
    type?: unknown;
    color?: unknown;
    size?: unknown;
    icon?: unknown;
    hollow?: unknown;
} & {
    type: string;
    size: string;
    color: string;
    center: boolean;
    icon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    placement: string;
    timestamp: string;
    hideTimestamp: boolean;
    hollow: boolean;
} & {}>, {
    type: string;
    size: string;
    color: string;
    center: boolean;
    icon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    placement: string;
    timestamp: string;
    hideTimestamp: boolean;
    hollow: boolean;
}>;
export default _default;
