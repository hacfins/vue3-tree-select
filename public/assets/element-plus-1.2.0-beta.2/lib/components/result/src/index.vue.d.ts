import type { Component } from 'vue';
declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
}, {
    resultIcon: import("vue").ComputedRef<{
        class: string;
        component: Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    subTitle?: unknown;
    icon?: unknown;
} & {
    icon: string;
    title: string;
    subTitle: string;
} & {}>, {
    icon: string;
    title: string;
    subTitle: string;
}>;
export default _default;
