import type { PropType } from 'vue';
import type { ComponentSize } from 'element-plus/es/utils/types';
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | ObjectConstructor | ArrayConstructor)[];
        default: () => undefined;
    };
    disabled: BooleanConstructor;
    min: {
        type: NumberConstructor;
        default: undefined;
    };
    max: {
        type: NumberConstructor;
        default: undefined;
    };
    size: {
        type: PropType<ComponentSize>;
        validator: (val: string) => boolean;
    };
    fill: {
        type: StringConstructor;
        default: undefined;
    };
    textColor: {
        type: StringConstructor;
        default: undefined;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    disabled?: unknown;
    min?: unknown;
    max?: unknown;
    size?: unknown;
    fill?: unknown;
    textColor?: unknown;
} & {
    disabled: boolean;
} & {
    fill?: string | undefined;
    size?: ComponentSize | undefined;
    modelValue?: boolean | Record<string, any> | unknown[] | undefined;
    max?: number | undefined;
    min?: number | undefined;
    textColor?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    fill: string;
    disabled: boolean;
    modelValue: boolean | Record<string, any> | unknown[];
    max: number;
    min: number;
    textColor: string;
}>;
export default _default;
