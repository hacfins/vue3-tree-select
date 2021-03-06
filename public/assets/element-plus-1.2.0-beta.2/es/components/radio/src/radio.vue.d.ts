import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    border: BooleanConstructor;
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    model: import("vue").WritableComputedRef<string | number | boolean>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    radioSize: import("vue").ComputedRef<any>;
    handleChange: () => void;
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    label?: unknown;
    disabled?: unknown;
    name?: unknown;
    border?: unknown;
    size?: unknown;
} & {
    name: string;
    border: boolean;
    disabled: boolean;
    modelValue: string | number | boolean;
    label: string | number | boolean;
} & {
    size?: ComponentSize | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    border: boolean;
    disabled: boolean;
    modelValue: string | number | boolean;
    label: string | number | boolean;
}>;
export default _default;
