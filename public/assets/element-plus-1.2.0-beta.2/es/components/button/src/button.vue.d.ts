declare const _default: import("vue").DefineComponent<{
    readonly type: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly icon: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly nativeType: import("../../../utils/props").BuildPropReturn<StringConstructor, "button", unknown, "button" | "reset" | "submit", unknown>;
    readonly loading: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly autoInsertSpace: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "small" | "medium" | "large" | "mini", unknown>;
    readonly disabled: BooleanConstructor;
}, {
    buttonSize: import("vue").ComputedRef<any>;
    buttonType: import("vue").ComputedRef<"default" | "text" | "success" | "warning" | "info" | "primary" | "danger">;
    buttonDisabled: import("vue").ComputedRef<boolean>;
    shouldAddSpace: import("vue").ComputedRef<boolean>;
    handleClick: (evt: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly type?: unknown;
    readonly icon?: unknown;
    readonly nativeType?: unknown;
    readonly loading?: unknown;
    readonly plain?: unknown;
    readonly autofocus?: unknown;
    readonly round?: unknown;
    readonly circle?: unknown;
    readonly autoInsertSpace?: unknown;
    readonly size?: unknown;
    readonly disabled?: unknown;
} & {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "medium" | "large" | "mini", unknown>;
    round: boolean;
    circle: boolean;
    icon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabled: boolean;
    loading: boolean;
    nativeType: import("../../../utils/props").BuildPropType<StringConstructor, "button" | "reset" | "submit", unknown>;
    plain: boolean;
    autofocus: boolean;
} & {
    autoInsertSpace?: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown> | undefined;
}> & {
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    size: import("../../../utils/props").BuildPropType<StringConstructor, "" | "small" | "medium" | "large" | "mini", unknown>;
    round: boolean;
    circle: boolean;
    icon: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    disabled: boolean;
    loading: boolean;
    nativeType: import("../../../utils/props").BuildPropType<StringConstructor, "button" | "reset" | "submit", unknown>;
    autoInsertSpace: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    plain: boolean;
    autofocus: boolean;
}>;
export default _default;
