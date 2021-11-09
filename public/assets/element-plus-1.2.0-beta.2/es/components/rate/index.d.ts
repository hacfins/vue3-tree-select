import type { SFCWithInstall } from 'element-plus/es/utils/types';
declare const _Rate: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    lowThreshold: {
        type: NumberConstructor;
        default: number;
    };
    highThreshold: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    disabledVoidColor: {
        type: StringConstructor;
        default: string;
    };
    icons: {
        type: import("vue").PropType<string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>[];
    };
    voidIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    disabledvoidIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showScore: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    scoreTemplate: {
        type: StringConstructor;
        default: string;
    };
}, {
    hoverIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    rateDisabled: import("vue").ComputedRef<boolean | undefined>;
    text: import("vue").ComputedRef<string>;
    decimalStyle: import("vue").ComputedRef<{
        color: any;
        width: string;
    }>;
    decimalIconComponent: import("vue").ComputedRef<any>;
    iconComponents: import("vue").ComputedRef<any[]>;
    showDecimalIcon: (item: number) => boolean;
    getIconStyle: (item: number) => {
        color: any;
    };
    selectValue: (value: number) => void;
    handleKey: (e: KeyboardEvent) => number | undefined;
    setCurrentValue: (value: number, event: MouseEvent) => void;
    resetCurrentValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    lowThreshold?: unknown;
    highThreshold?: unknown;
    max?: unknown;
    colors?: unknown;
    voidColor?: unknown;
    disabledVoidColor?: unknown;
    icons?: unknown;
    voidIcon?: unknown;
    disabledvoidIcon?: unknown;
    disabled?: unknown;
    allowHalf?: unknown;
    showText?: unknown;
    showScore?: unknown;
    textColor?: unknown;
    texts?: unknown;
    scoreTemplate?: unknown;
} & {
    disabled: boolean;
    modelValue: number;
    max: number;
    textColor: string;
    colors: Record<string, any> | unknown[];
    showText: boolean;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    voidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    disabledvoidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    allowHalf: boolean;
    showScore: boolean;
    texts: string[];
    scoreTemplate: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: number;
    max: number;
    textColor: string;
    colors: Record<string, any> | unknown[];
    showText: boolean;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    voidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    disabledvoidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    allowHalf: boolean;
    showScore: boolean;
    texts: string[];
    scoreTemplate: string;
}>>;
export default _Rate;
export declare const ElRate: SFCWithInstall<import("vue").DefineComponent<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    lowThreshold: {
        type: NumberConstructor;
        default: number;
    };
    highThreshold: {
        type: NumberConstructor;
        default: number;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default: () => string[];
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    disabledVoidColor: {
        type: StringConstructor;
        default: string;
    };
    icons: {
        type: import("vue").PropType<string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: () => import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>[];
    };
    voidIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    disabledvoidIcon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    showScore: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    texts: {
        type: import("vue").PropType<string[]>;
        default: () => string[];
    };
    scoreTemplate: {
        type: StringConstructor;
        default: string;
    };
}, {
    hoverIndex: import("vue").Ref<number>;
    currentValue: import("vue").Ref<number>;
    rateDisabled: import("vue").ComputedRef<boolean | undefined>;
    text: import("vue").ComputedRef<string>;
    decimalStyle: import("vue").ComputedRef<{
        color: any;
        width: string;
    }>;
    decimalIconComponent: import("vue").ComputedRef<any>;
    iconComponents: import("vue").ComputedRef<any[]>;
    showDecimalIcon: (item: number) => boolean;
    getIconStyle: (item: number) => {
        color: any;
    };
    selectValue: (value: number) => void;
    handleKey: (e: KeyboardEvent) => number | undefined;
    setCurrentValue: (value: number, event: MouseEvent) => void;
    resetCurrentValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue?: unknown;
    lowThreshold?: unknown;
    highThreshold?: unknown;
    max?: unknown;
    colors?: unknown;
    voidColor?: unknown;
    disabledVoidColor?: unknown;
    icons?: unknown;
    voidIcon?: unknown;
    disabledvoidIcon?: unknown;
    disabled?: unknown;
    allowHalf?: unknown;
    showText?: unknown;
    showScore?: unknown;
    textColor?: unknown;
    texts?: unknown;
    scoreTemplate?: unknown;
} & {
    disabled: boolean;
    modelValue: number;
    max: number;
    textColor: string;
    colors: Record<string, any> | unknown[];
    showText: boolean;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    voidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    disabledvoidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    allowHalf: boolean;
    showScore: boolean;
    texts: string[];
    scoreTemplate: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: number;
    max: number;
    textColor: string;
    colors: Record<string, any> | unknown[];
    showText: boolean;
    lowThreshold: number;
    highThreshold: number;
    voidColor: string;
    disabledVoidColor: string;
    icons: string[] | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    voidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    disabledvoidIcon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    allowHalf: boolean;
    showScore: boolean;
    texts: string[];
    scoreTemplate: string;
}>>;
