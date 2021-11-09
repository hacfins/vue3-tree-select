export declare const ElInput: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly modelValue: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | number | null | undefined>, "", unknown, unknown, unknown>;
    readonly type: import("../../utils/props").BuildPropReturn<StringConstructor, "text", unknown, unknown, unknown>;
    readonly resize: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "none" | "both" | "horizontal" | "vertical", unknown>;
    readonly autosize: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    }>, false, unknown, unknown, unknown>;
    readonly autocomplete: import("../../utils/props").BuildPropReturn<StringConstructor, "off", unknown, unknown, unknown>;
    readonly placeholder: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly form: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly readonly: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly clearable: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showPassword: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly showWordLimit: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly suffixIcon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly prefixIcon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly label: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly tabindex: import("../../utils/props").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, unknown, unknown, unknown>;
    readonly validateEvent: import("../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly inputStyle: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("../../utils/types").StyleValue>, () => import("../../utils/types").Mutable<{}>, unknown, unknown, unknown>;
    readonly size: import("../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "small" | "medium" | "large" | "mini", unknown>;
    readonly disabled: BooleanConstructor;
}, {
    input: import("vue").Ref<HTMLInputElement | undefined>;
    textarea: import("vue").Ref<HTMLTextAreaElement | undefined>;
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    inputSize: import("vue").ComputedRef<any>;
    validateState: import("vue").ComputedRef<string>;
    validateIcon: import("vue").ComputedRef<any>;
    containerStyle: import("vue").ComputedRef<import("../../utils/types").StyleValue>;
    computedTextareaStyle: import("vue").ComputedRef<import("../../utils/types").StyleValue>;
    inputDisabled: import("vue").ComputedRef<boolean>;
    showClear: import("vue").ComputedRef<boolean>;
    showPwdVisible: import("vue").ComputedRef<boolean>;
    isWordLimitVisible: import("vue").ComputedRef<boolean>;
    textLength: import("vue").ComputedRef<number>;
    hovering: import("vue").Ref<boolean>;
    inputExceed: import("vue").ComputedRef<boolean>;
    passwordVisible: import("vue").Ref<boolean>;
    inputOrTextarea: import("vue").ComputedRef<HTMLInputElement | HTMLTextAreaElement | undefined>;
    suffixVisible: import("vue").ComputedRef<boolean>;
    resizeTextarea: () => void;
    handleInput: (event: Event) => void;
    handleChange: (event: Event) => void;
    handleFocus: (event: FocusEvent) => void;
    handleBlur: (event: FocusEvent) => void;
    handleCompositionStart: (event: CompositionEvent) => void;
    handleCompositionUpdate: (event: CompositionEvent) => void;
    handleCompositionEnd: (event: CompositionEvent) => void;
    handlePasswordVisible: () => void;
    clear: () => void;
    select: () => void;
    focus: () => void;
    blur: () => void;
    onMouseLeave: (evt: MouseEvent) => void;
    onMouseEnter: (evt: MouseEvent) => void;
    handleKeydown: (evt: KeyboardEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: string) => boolean;
    input: (value: string) => boolean;
    change: (value: string) => boolean;
    focus: (evt: FocusEvent) => boolean;
    blur: (evt: FocusEvent) => boolean;
    clear: () => boolean;
    mouseleave: (evt: MouseEvent) => boolean;
    mouseenter: (evt: MouseEvent) => boolean;
    keydown: (evt: KeyboardEvent) => boolean;
    compositionstart: (evt: CompositionEvent) => boolean;
    compositionupdate: (evt: CompositionEvent) => boolean;
    compositionend: (evt: CompositionEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly modelValue?: unknown;
    readonly type?: unknown;
    readonly resize?: unknown;
    readonly autosize?: unknown;
    readonly autocomplete?: unknown;
    readonly placeholder?: unknown;
    readonly form?: unknown;
    readonly readonly?: unknown;
    readonly clearable?: unknown;
    readonly showPassword?: unknown;
    readonly showWordLimit?: unknown;
    readonly suffixIcon?: unknown;
    readonly prefixIcon?: unknown;
    readonly label?: unknown;
    readonly tabindex?: unknown;
    readonly validateEvent?: unknown;
    readonly inputStyle?: unknown;
    readonly size?: unknown;
    readonly disabled?: unknown;
} & {
    type: string;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "medium" | "large" | "mini", unknown>;
    disabled: boolean;
    modelValue: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | number | null | undefined>, unknown, unknown>;
    autosize: boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    };
    autocomplete: string;
    form: string;
    readonly: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    clearable: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showPassword: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showWordLimit: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    suffixIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    prefixIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    validateEvent: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    inputStyle: import("../../utils/types").StyleValue;
} & {
    resize?: import("../../utils/props").BuildPropType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown> | undefined;
    placeholder?: string | undefined;
    label?: string | undefined;
    tabindex?: import("../../utils/props").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown> | undefined;
}> & {
    onChange?: ((value: string) => any) | undefined;
    onClear?: (() => any) | undefined;
    onFocus?: ((evt: FocusEvent) => any) | undefined;
    "onUpdate:modelValue"?: ((value: string) => any) | undefined;
    onInput?: ((value: string) => any) | undefined;
    onBlur?: ((evt: FocusEvent) => any) | undefined;
    onMouseleave?: ((evt: MouseEvent) => any) | undefined;
    onMouseenter?: ((evt: MouseEvent) => any) | undefined;
    onKeydown?: ((evt: KeyboardEvent) => any) | undefined;
    onCompositionstart?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionupdate?: ((evt: CompositionEvent) => any) | undefined;
    onCompositionend?: ((evt: CompositionEvent) => any) | undefined;
}, {
    type: string;
    size: import("../../utils/props").BuildPropType<StringConstructor, "" | "small" | "medium" | "large" | "mini", unknown>;
    disabled: boolean;
    resize: import("../../utils/props").BuildPropType<StringConstructor, "none" | "both" | "horizontal" | "vertical", unknown>;
    modelValue: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | number | null | undefined>, unknown, unknown>;
    autosize: boolean | {
        minRows?: number | undefined;
        maxRows?: number | undefined;
    };
    autocomplete: string;
    placeholder: string;
    form: string;
    readonly: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    clearable: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showPassword: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showWordLimit: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    suffixIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    prefixIcon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    label: string;
    tabindex: import("../../utils/props").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    validateEvent: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    inputStyle: import("../../utils/types").StyleValue;
}>> & Record<string, any>;
export default ElInput;
export * from './src/input';
