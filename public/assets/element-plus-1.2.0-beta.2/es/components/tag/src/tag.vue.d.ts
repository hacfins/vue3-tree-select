declare const _default: import("vue").DefineComponent<{
    readonly closable: BooleanConstructor;
    readonly type: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "success" | "warning" | "info" | "danger", unknown>;
    readonly hit: BooleanConstructor;
    readonly disableTransitions: BooleanConstructor;
    readonly color: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, "small" | "medium" | "large" | "mini", unknown>;
    readonly effect: import("../../../utils/props").BuildPropReturn<StringConstructor, "light", unknown, "dark" | "light" | "plain", unknown>;
}, {
    classes: import("vue").ComputedRef<(string | false)[]>;
    handleClose: (event: MouseEvent) => void;
    handleClick: (event: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    close: (evt: MouseEvent) => boolean;
    click: (evt: MouseEvent) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly closable?: unknown;
    readonly type?: unknown;
    readonly hit?: unknown;
    readonly disableTransitions?: unknown;
    readonly color?: unknown;
    readonly size?: unknown;
    readonly effect?: unknown;
} & {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    color: string;
    closable: boolean;
    effect: import("../../../utils/props").BuildPropType<StringConstructor, "dark" | "light" | "plain", unknown>;
    hit: boolean;
    disableTransitions: boolean;
} & {
    size?: import("../../../utils/props").BuildPropType<StringConstructor, "small" | "medium" | "large" | "mini", unknown> | undefined;
}> & {
    onClose?: ((evt: MouseEvent) => any) | undefined;
    onClick?: ((evt: MouseEvent) => any) | undefined;
}, {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "" | "success" | "warning" | "info" | "danger", unknown>;
    size: import("../../../utils/props").BuildPropType<StringConstructor, "small" | "medium" | "large" | "mini", unknown>;
    color: string;
    closable: boolean;
    effect: import("../../../utils/props").BuildPropType<StringConstructor, "dark" | "light" | "plain", unknown>;
    hit: boolean;
    disableTransitions: boolean;
}>;
export default _default;
