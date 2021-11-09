export declare const ElPopconfirm: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    readonly title: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly confirmButtonText: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly cancelButtonText: import("../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    readonly confirmButtonType: import("../../utils/props").BuildPropReturn<StringConstructor, "primary", unknown, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly cancelButtonType: import("../../utils/props").BuildPropReturn<StringConstructor, "text", unknown, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly icon: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, any, unknown, unknown, unknown>;
    readonly iconColor: import("../../utils/props").BuildPropReturn<StringConstructor, "#f90", unknown, unknown, unknown>;
    readonly hideIcon: import("../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
}, {
    Effect: typeof import("..").Effect;
    visible: import("vue").Ref<boolean>;
    finalConfirmButtonText: import("vue").ComputedRef<string>;
    finalCancelButtonText: import("vue").ComputedRef<string>;
    confirm: () => void;
    cancel: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    confirm: () => boolean;
    cancel: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly title?: unknown;
    readonly confirmButtonText?: unknown;
    readonly cancelButtonText?: unknown;
    readonly confirmButtonType?: unknown;
    readonly cancelButtonType?: unknown;
    readonly icon?: unknown;
    readonly iconColor?: unknown;
    readonly hideIcon?: unknown;
} & {
    confirmButtonType: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    cancelButtonType: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    iconColor: string;
    hideIcon: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
} & {
    icon?: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown> | undefined;
    title?: string | undefined;
    confirmButtonText?: string | undefined;
    cancelButtonText?: string | undefined;
}> & {
    onCancel?: (() => any) | undefined;
    onConfirm?: (() => any) | undefined;
}, {
    icon: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, unknown, unknown>;
    title: string;
    confirmButtonText: string;
    cancelButtonText: string;
    confirmButtonType: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    cancelButtonType: import("../../utils/props").BuildPropType<StringConstructor, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    iconColor: string;
    hideIcon: import("../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
}>> & Record<string, any>;
export default ElPopconfirm;
export * from './src/popconfirm';
