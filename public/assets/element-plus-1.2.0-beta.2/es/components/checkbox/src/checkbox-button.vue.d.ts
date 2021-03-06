declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: () => undefined;
    };
    label: {
        type: (BooleanConstructor | ObjectConstructor | NumberConstructor | StringConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: undefined;
    };
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    size: StringConstructor;
}, {
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    activeStyle: import("vue").ComputedRef<{
        backgroundColor: string;
        borderColor: string;
        color: string;
        boxShadow: string | null;
    }>;
    size: import("vue").ComputedRef<string | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    label?: unknown;
    indeterminate?: unknown;
    disabled?: unknown;
    checked?: unknown;
    name?: unknown;
    trueLabel?: unknown;
    falseLabel?: unknown;
    size?: unknown;
} & {
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
} & {
    name?: string | undefined;
    size?: string | undefined;
    modelValue?: string | number | boolean | undefined;
    label?: string | number | boolean | Record<string, any> | undefined;
    trueLabel?: string | number | undefined;
    falseLabel?: string | number | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    modelValue: string | number | boolean;
    indeterminate: boolean;
    checked: boolean;
    trueLabel: string | number;
    falseLabel: string | number;
}>;
export default _default;
