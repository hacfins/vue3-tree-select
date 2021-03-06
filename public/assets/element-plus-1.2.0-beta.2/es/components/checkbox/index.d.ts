export declare const ElCheckbox: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
    id: {
        type: StringConstructor;
        default: undefined;
    };
    controls: {
        type: StringConstructor;
        default: undefined;
    };
    border: BooleanConstructor;
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
}, {
    isChecked: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<boolean | undefined>;
    checkboxSize: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
    focus: import("vue").Ref<boolean>;
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
    id?: unknown;
    controls?: unknown;
    border?: unknown;
    size?: unknown;
} & {
    border: boolean;
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
} & {
    name?: string | undefined;
    size?: import("../../utils/types").ComponentSize | undefined;
    modelValue?: string | number | boolean | undefined;
    label?: string | number | boolean | Record<string, any> | undefined;
    id?: string | undefined;
    trueLabel?: string | number | undefined;
    falseLabel?: string | number | undefined;
    controls?: string | undefined;
}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    border: boolean;
    disabled: boolean;
    modelValue: string | number | boolean;
    id: string;
    indeterminate: boolean;
    checked: boolean;
    trueLabel: string | number;
    falseLabel: string | number;
    controls: string;
}>> & {
    CheckboxButton: import("vue").DefineComponent<{
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
    CheckboxGroup: import("vue").DefineComponent<{
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
            type: import("vue").PropType<import("../../utils/types").ComponentSize>;
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
        size?: import("../../utils/types").ComponentSize | undefined;
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
};
export default ElCheckbox;
export declare const ElCheckboxButton: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
}>>;
export declare const ElCheckboxGroup: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
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
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
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
    size?: import("../../utils/types").ComponentSize | undefined;
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
}>>;
