import type { ExtractPropTypes } from 'vue';
import type { MaybeRef } from '@vueuse/core';
export declare const useFormItemProps: {
    readonly size: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "small" | "medium" | "large" | "mini", unknown>;
    readonly disabled: BooleanConstructor;
};
export declare type UseFormItemProps = ExtractPropTypes<typeof useFormItemProps>;
export declare type LocalFallbacks = {
    size?: MaybeRef<UseFormItemProps['size'] | undefined>;
    disabled?: MaybeRef<UseFormItemProps['disabled'] | undefined>;
};
export declare const useFormItem: ({ size, disabled }: LocalFallbacks) => {
    size: import("vue").ComputedRef<any>;
    disabled: import("vue").ComputedRef<boolean>;
};
