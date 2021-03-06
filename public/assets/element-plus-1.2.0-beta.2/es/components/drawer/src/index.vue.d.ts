import type { PropType } from 'vue';
declare type DrawerDirection = 'ltr' | 'rtl' | 'ttb' | 'btt';
declare const _default: import("vue").DefineComponent<{
    direction: {
        type: PropType<DrawerDirection>;
        default: string;
        validator: (val: DrawerDirection) => boolean;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    withHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
    modalFade: {
        type: BooleanConstructor;
        default: boolean;
    };
    appendToBody: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    beforeClose: import("../../../utils/props").BuildPropReturn<import("../../../utils/props").PropWrapper<(...args: any[]) => void>, unknown, unknown, unknown, unknown>;
    destroyOnClose: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    center: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    customClass: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    closeOnClickModal: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    closeOnPressEscape: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    fullscreen: import("../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    lockScroll: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    modal: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    showClose: import("../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    title: import("../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    openDelay: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    closeDelay: import("../../../utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    top: import("../../../utils/props").BuildPropReturn<StringConstructor, unknown, unknown, unknown, unknown>;
    modelValue: import("../../../utils/props").BuildPropReturn<BooleanConstructor, unknown, true, unknown, unknown>;
    modalClass: StringConstructor;
    width: import("../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, unknown, unknown, unknown>;
    zIndex: import("../../../utils/props").BuildPropReturn<NumberConstructor, unknown, unknown, unknown, unknown>;
}, {
    drawerRef: import("vue").Ref<HTMLElement>;
    isHorizontal: import("vue").ComputedRef<boolean>;
    drawerSize: import("vue").ComputedRef<string>;
    afterEnter: () => void;
    afterLeave: () => void;
    beforeLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    closed: import("vue").Ref<boolean>;
    style: import("vue").ComputedRef<import("vue").CSSProperties>;
    rendered: import("vue").Ref<boolean>;
    visible: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    open: () => boolean;
    opened: () => boolean;
    close: () => boolean;
    closed: () => boolean;
    "update:modelValue": (value: boolean) => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    direction?: unknown;
    size?: unknown;
    withHeader?: unknown;
    modalFade?: unknown;
    appendToBody?: unknown;
    beforeClose?: unknown;
    destroyOnClose?: unknown;
    center?: unknown;
    customClass?: unknown;
    closeOnClickModal?: unknown;
    closeOnPressEscape?: unknown;
    fullscreen?: unknown;
    lockScroll?: unknown;
    modal?: unknown;
    showClose?: unknown;
    title?: unknown;
    openDelay?: unknown;
    closeDelay?: unknown;
    top?: unknown;
    modelValue?: unknown;
    modalClass?: unknown;
    width?: unknown;
    zIndex?: unknown;
} & {
    size: string | number;
    center: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    title: string;
    appendToBody: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    direction: DrawerDirection;
    modelValue: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    showClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    destroyOnClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    closeOnClickModal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    fullscreen: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lockScroll: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    withHeader: boolean;
    modalFade: boolean;
} & {
    zIndex?: number | undefined;
    top?: string | undefined;
    width?: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown> | undefined;
    beforeClose?: ((...args: any[]) => void) | undefined;
    modalClass?: string | undefined;
}> & {
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onOpen?: (() => any) | undefined;
    onOpened?: (() => any) | undefined;
    onClosed?: (() => any) | undefined;
}, {
    zIndex: number;
    top: string;
    width: import("../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    size: string | number;
    center: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    title: string;
    appendToBody: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    direction: DrawerDirection;
    showClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    beforeClose: (...args: any[]) => void;
    destroyOnClose: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    customClass: string;
    closeOnClickModal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    closeOnPressEscape: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    fullscreen: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    lockScroll: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    modal: import("../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    openDelay: number;
    closeDelay: number;
    withHeader: boolean;
    modalFade: boolean;
}>;
export default _default;
