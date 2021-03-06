import type { CSSProperties, StyleValue } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly appendToBody: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly hideOnClickModal: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly src: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly fit: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    readonly lazy: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly scrollContainer: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string | HTMLElement | undefined>, unknown, unknown, unknown, unknown>;
    readonly previewSrcList: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<string[]>, () => [], unknown, unknown, unknown>;
    readonly zIndex: import("../../../utils/props").BuildPropReturn<NumberConstructor, 2000, unknown, unknown, unknown>;
    readonly initialIndex: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
}, {
    attrs: import("vue").ComputedRef<Record<string, unknown>>;
    loading: import("vue").Ref<boolean>;
    hasLoadError: import("vue").Ref<boolean>;
    showViewer: import("vue").Ref<boolean>;
    containerStyle: import("vue").ComputedRef<StyleValue>;
    imageStyle: import("vue").ComputedRef<CSSProperties>;
    preview: import("vue").ComputedRef<boolean>;
    imageIndex: import("vue").ComputedRef<number>;
    container: import("vue").Ref<HTMLElement | undefined>;
    clickHandler: () => void;
    closeViewer: () => void;
    switchViewer: (val: number) => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    error: (evt: Event) => boolean;
    switch: (val: number) => boolean;
    close: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly appendToBody?: unknown;
    readonly hideOnClickModal?: unknown;
    readonly src?: unknown;
    readonly fit?: unknown;
    readonly lazy?: unknown;
    readonly scrollContainer?: unknown;
    readonly previewSrcList?: unknown;
    readonly zIndex?: unknown;
    readonly initialIndex?: unknown;
} & {
    zIndex: number;
    appendToBody: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    src: string;
    fit: import("../../../utils/props").BuildPropType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    initialIndex: number;
    lazy: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    hideOnClickModal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    previewSrcList: string[];
} & {
    scrollContainer?: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | HTMLElement | undefined>, unknown, unknown>;
}> & {
    onClose?: (() => any) | undefined;
    onError?: ((evt: Event) => any) | undefined;
    onSwitch?: ((val: number) => any) | undefined;
}, {
    zIndex: number;
    appendToBody: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    src: string;
    fit: import("../../../utils/props").BuildPropType<StringConstructor, "" | "fill" | "none" | "contain" | "cover" | "scale-down", unknown>;
    initialIndex: number;
    lazy: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    hideOnClickModal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    scrollContainer: import("../../../utils/props").BuildPropType<import("../../../utils/props").PropWrapper<string | HTMLElement | undefined>, unknown, unknown>;
    previewSrcList: string[];
}>;
export default _default;
