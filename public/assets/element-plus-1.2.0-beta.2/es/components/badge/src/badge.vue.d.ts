declare const _default: import("vue").DefineComponent<{
    readonly value: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], "", unknown, unknown, unknown>;
    readonly max: import("../../../utils/props").BuildPropReturn<NumberConstructor, 99, unknown, unknown, unknown>;
    readonly isDot: BooleanConstructor;
    readonly hidden: BooleanConstructor;
    readonly type: import("../../../utils/props").BuildPropReturn<StringConstructor, "danger", unknown, "success" | "warning" | "info" | "primary" | "danger", unknown>;
}, {
    content: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly value?: unknown;
    readonly max?: unknown;
    readonly isDot?: unknown;
    readonly hidden?: unknown;
    readonly type?: unknown;
} & {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>;
    hidden: boolean;
    value: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    max: number;
    isDot: boolean;
} & {}>, {
    type: import("../../../utils/props").BuildPropType<StringConstructor, "success" | "warning" | "info" | "primary" | "danger", unknown>;
    hidden: boolean;
    value: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    max: number;
    isDot: boolean;
}>;
export default _default;
