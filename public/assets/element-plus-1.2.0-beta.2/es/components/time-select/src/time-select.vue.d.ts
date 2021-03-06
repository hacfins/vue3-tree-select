import type { PropType, Component } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<ComponentSize>;
        default: string;
        validator: (value: string) => boolean;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    start: {
        type: StringConstructor;
        default: string;
    };
    end: {
        type: StringConstructor;
        default: string;
    };
    step: {
        type: StringConstructor;
        default: string;
    };
    minTime: {
        type: StringConstructor;
        default: string;
    };
    maxTime: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    clearIcon: {
        type: PropType<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
}, {
    select: import("vue").Ref<null>;
    value: import("vue").ComputedRef<string | undefined>;
    items: import("vue").ComputedRef<never[]>;
    blur: () => void;
    focus: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("focus" | "update:modelValue" | "change" | "blur")[], "change" | "focus" | "update:modelValue" | "blur", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    editable?: unknown;
    clearable?: unknown;
    size?: unknown;
    placeholder?: unknown;
    start?: unknown;
    end?: unknown;
    step?: unknown;
    minTime?: unknown;
    maxTime?: unknown;
    name?: unknown;
    prefixIcon?: unknown;
    clearIcon?: unknown;
} & {
    name: string;
    size: ComponentSize;
    end: string;
    start: string;
    disabled: boolean;
    placeholder: string;
    clearable: boolean;
    prefixIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    editable: boolean;
    step: string;
    minTime: string;
    maxTime: string;
} & {
    modelValue?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    size: ComponentSize;
    end: string;
    start: string;
    disabled: boolean;
    placeholder: string;
    clearable: boolean;
    prefixIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    clearIcon: string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    editable: boolean;
    step: string;
    minTime: string;
    maxTime: string;
}>;
export default _default;
