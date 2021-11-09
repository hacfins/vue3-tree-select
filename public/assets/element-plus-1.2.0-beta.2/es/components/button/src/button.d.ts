import type { ExtractPropTypes, Component } from 'vue';
export declare const buttonType: readonly ["default", "primary", "success", "warning", "info", "danger", "text", ""];
export declare const buttonSize: readonly ["", "large", "medium", "small", "mini"];
export declare const buttonNativeType: readonly ["button", "submit", "reset"];
export declare const buttonProps: {
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
    readonly icon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly nativeType: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "button", unknown, "button" | "reset" | "submit", unknown>;
    readonly loading: BooleanConstructor;
    readonly plain: BooleanConstructor;
    readonly autofocus: BooleanConstructor;
    readonly round: BooleanConstructor;
    readonly circle: BooleanConstructor;
    readonly autoInsertSpace: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, unknown, unknown, unknown, unknown>;
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "small" | "medium" | "large" | "mini", unknown>;
    readonly disabled: BooleanConstructor;
};
export interface ButtonConfigContext {
    autoInsertSpace?: boolean;
}
export declare const buttonEmits: {
    click: (evt: MouseEvent) => boolean;
};
export declare type ButtonProps = ExtractPropTypes<typeof buttonProps>;
export declare type ButtonEmits = typeof buttonEmits;
export declare type ButtonType = ButtonProps['type'];
export declare type ButtonNativeType = ButtonProps['nativeType'];
