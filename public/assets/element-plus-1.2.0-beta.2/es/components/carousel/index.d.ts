/// <reference types="node" />
export declare const ElCarousel: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    initialIndex: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    interval: {
        type: NumberConstructor;
        default: number;
    };
    indicatorPosition: {
        type: StringConstructor;
        default: string;
    };
    indicator: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrow: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator(val: string): boolean;
    };
    pauseOnHover: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    data: {
        activeIndex: number;
        containerWidth: number;
        timer: {
            hasRef: () => boolean;
            refresh: () => NodeJS.Timer;
            [Symbol.toPrimitive]: () => number;
            ref: () => NodeJS.Timer;
            unref: () => NodeJS.Timer;
        } | null;
        hover: boolean;
    };
    props: import("./src/carousel").ICarouselProps;
    items: import("vue").Ref<{
        uid: number;
        translateItem: (index: number, activeIndex: number, oldIndex: number) => void;
        name: string;
        label: string | number;
        key: string;
        hover: boolean;
        translate: number;
        scale: number;
        active: boolean;
        ready: boolean;
        inStage: boolean;
        animating: boolean;
    }[]>;
    arrowDisplay: import("vue").ComputedRef<boolean>;
    carouselClasses: import("vue").ComputedRef<string[]>;
    indicatorsClasses: import("vue").ComputedRef<string[]>;
    hasLabel: import("vue").ComputedRef<boolean>;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleIndicatorClick: (index: any) => void;
    throttledArrowClick: import("lodash").DebouncedFunc<(index: any) => void>;
    throttledIndicatorHover: import("lodash").DebouncedFunc<(index: any) => void>;
    handleButtonEnter: (arrow: any) => void;
    handleButtonLeave: () => void;
    prev: () => void;
    next: () => void;
    setActiveItem: (index: any) => void;
    root: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    initialIndex?: unknown;
    height?: unknown;
    trigger?: unknown;
    autoplay?: unknown;
    interval?: unknown;
    indicatorPosition?: unknown;
    indicator?: unknown;
    arrow?: unknown;
    type?: unknown;
    loop?: unknown;
    direction?: unknown;
    pauseOnHover?: unknown;
} & {
    type: string;
    height: string;
    trigger: string;
    direction: string;
    initialIndex: number;
    autoplay: boolean;
    interval: number;
    indicatorPosition: string;
    indicator: boolean;
    arrow: string;
    loop: boolean;
    pauseOnHover: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    height: string;
    trigger: string;
    direction: string;
    initialIndex: number;
    autoplay: boolean;
    interval: number;
    indicatorPosition: string;
    indicator: boolean;
    arrow: string;
    loop: boolean;
    pauseOnHover: boolean;
}>> & {
    CarouselItem: import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>;
};
export default ElCarousel;
export declare const ElCarouselItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<unknown, object, {}, import("vue").ComputedOptions, import("vue").MethodOptions, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<unknown>, {}>>;
