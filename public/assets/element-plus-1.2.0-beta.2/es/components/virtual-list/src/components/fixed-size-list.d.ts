declare const FixedSizeList: import("vue").DefineComponent<{
    readonly className: import("../../../../utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly containerElement: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<string | Element>, "div", unknown, unknown, unknown>;
    readonly data: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<any[]>, () => [], unknown, unknown, unknown>;
    readonly direction: import("../../../../utils/props").BuildPropReturn<StringConstructor, "ltr", false, "ltr" | "rtl", never>;
    readonly height: import("../../../../utils/props").BuildPropReturn<readonly [StringConstructor, NumberConstructor], unknown, true, unknown, unknown>;
    readonly innerElement: import("../../../../utils/props").BuildPropReturn<readonly [StringConstructor, ObjectConstructor], "div", unknown, unknown, unknown>;
    readonly style: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<import("../../../../utils/types").StyleValue>, unknown, unknown, unknown, unknown>;
    readonly useIsScrolling: import("../../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly width: import("../../../../utils/props").BuildPropReturn<readonly [NumberConstructor, StringConstructor], unknown, false, unknown, unknown>;
    readonly perfMode: import("../../../../utils/props").BuildPropReturn<BooleanConstructor, true, unknown, unknown, unknown>;
    readonly scrollbarAlwaysOn: import("../../../../utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly cache: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 2, false, never, never>;
    readonly estimatedItemSize: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, false, never, never>;
    readonly layout: import("../../../../utils/props").BuildPropReturn<StringConstructor, "vertical", false, "horizontal" | "vertical", never>;
    readonly initScrollOffset: import("../../../../utils/props").BuildPropReturn<NumberConstructor, 0, false, never, never>;
    readonly total: import("../../../../utils/props").BuildPropReturn<NumberConstructor, never, true, never, never>;
    readonly itemSize: import("../../../../utils/props").BuildPropReturn<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, true, never, never>;
}, {
    clientSize: import("vue").ComputedRef<string | number | undefined>;
    estimatedTotalSize: import("vue").ComputedRef<number>;
    windowStyle: import("vue").ComputedRef<(string | import("vue").CSSProperties | import("../../../../utils/types").StyleValue[] | {
        position: string;
        overflow: string;
        WebkitOverflowScrolling: string;
        willChange: string;
    } | undefined)[]>;
    windowRef: import("vue").Ref<HTMLElement | undefined>;
    innerRef: import("vue").Ref<HTMLElement | undefined>;
    innerStyle: import("vue").ComputedRef<{
        height: string;
        pointerEvents: string | undefined;
        width: string;
    }>;
    itemsToRender: import("vue").ComputedRef<number[]>;
    scrollbarRef: import("vue").Ref<any>;
    states: import("vue").Ref<{
        isScrolling: boolean;
        scrollDir: string;
        scrollOffset: number;
        updateRequested: boolean;
        isScrollbarDragging: boolean;
        scrollbarAlwaysOn: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    }>;
    getItemStyle: (idx: number) => import("vue").CSSProperties;
    onScroll: (e: Event) => void;
    onScrollbarScroll: (distanceToGo: number, totalSteps: number) => void;
    onWheel: (e: WheelEvent) => void;
    scrollTo: (offset: number) => void;
    scrollToItem: (idx: number, alignment?: import("../types").Alignment) => void;
    resetScrollTop: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scroll" | "item-rendered")[], "scroll" | "item-rendered", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly className?: unknown;
    readonly containerElement?: unknown;
    readonly data?: unknown;
    readonly direction?: unknown;
    readonly height?: unknown;
    readonly innerElement?: unknown;
    readonly style?: unknown;
    readonly useIsScrolling?: unknown;
    readonly width?: unknown;
    readonly perfMode?: unknown;
    readonly scrollbarAlwaysOn?: unknown;
    readonly cache?: unknown;
    readonly estimatedItemSize?: unknown;
    readonly layout?: unknown;
    readonly initScrollOffset?: unknown;
    readonly total?: unknown;
    readonly itemSize?: unknown;
} & {
    height: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
    layout: import("../../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
    data: any[];
    direction: import("../../../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    className: string;
    total: number;
    scrollbarAlwaysOn: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    perfMode: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    cache: number;
    initScrollOffset: number;
    itemSize: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<number | import("../types").ItemSize>, never, never>;
} & {
    width?: import("../../../../utils/props").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown> | undefined;
    style?: import("../../../../utils/types").StyleValue | undefined;
    estimatedItemSize?: number | undefined;
}> & {
    onScroll?: ((...args: any[]) => any) | undefined;
    "onItem-rendered"?: ((...args: any[]) => any) | undefined;
}, {
    width: import("../../../../utils/props").BuildPropType<readonly [NumberConstructor, StringConstructor], unknown, unknown>;
    layout: import("../../../../utils/props").BuildPropType<StringConstructor, "horizontal" | "vertical", never>;
    style: import("../../../../utils/types").StyleValue;
    data: any[];
    direction: import("../../../../utils/props").BuildPropType<StringConstructor, "ltr" | "rtl", never>;
    className: string;
    scrollbarAlwaysOn: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    perfMode: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    containerElement: import("../../../../utils/props").BuildPropType<import("../../../../utils/props").PropWrapper<string | Element>, unknown, unknown>;
    innerElement: import("../../../../utils/props").BuildPropType<readonly [StringConstructor, ObjectConstructor], unknown, unknown>;
    useIsScrolling: import("../../../../utils/props").BuildPropType<BooleanConstructor, unknown, unknown>;
    cache: number;
    estimatedItemSize: number;
    initScrollOffset: number;
}>;
export default FixedSizeList;
