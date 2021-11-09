import type { ExtractPropTypes } from 'vue';
export declare const buttonGroupProps: {
    readonly size: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "small" | "medium" | "large" | "mini", unknown>;
    readonly type: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "default" | "text" | "success" | "warning" | "info" | "primary" | "danger", unknown>;
};
export declare type ButtonGroupProps = ExtractPropTypes<typeof buttonGroupProps>;
