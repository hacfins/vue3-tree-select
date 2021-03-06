export declare const ElSteps: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    space: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    active: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    alignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    simple: {
        type: BooleanConstructor;
        default: boolean;
    };
    finishStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    processStatus: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    steps: import("vue").Ref<never[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    space?: unknown;
    active?: unknown;
    direction?: unknown;
    alignCenter?: unknown;
    simple?: unknown;
    finishStatus?: unknown;
    processStatus?: unknown;
} & {
    space: string | number;
    active: number;
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    space: string | number;
    active: number;
    direction: string;
    alignCenter: boolean;
    simple: boolean;
    finishStatus: string;
    processStatus: string;
}>> & {
    Step: import("vue").DefineComponent<{
        title: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: string;
        };
        description: {
            type: StringConstructor;
            default: string;
        };
        status: {
            type: StringConstructor;
            default: string;
            validator: (val: string) => boolean;
        };
    }, {
        index: import("vue").Ref<number>;
        lineStyle: import("vue").Ref<{}>;
        currentStatus: import("vue").ComputedRef<string>;
        isCenter: import("vue").ComputedRef<boolean>;
        isVertical: import("vue").ComputedRef<boolean>;
        isSimple: import("vue").ComputedRef<boolean>;
        isLast: import("vue").ComputedRef<boolean>;
        space: import("vue").ComputedRef<string | number>;
        style: import("vue").ComputedRef<Record<string, unknown>>;
        parent: import("./src/item.vue").IStepsInject;
        setIndex: (val: any) => void;
        calcProgress: (status: any) => void;
        updateStatus: (activeIndex: any) => void;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title?: unknown;
        icon?: unknown;
        description?: unknown;
        status?: unknown;
    } & {
        description: string;
        icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        title: string;
        status: string;
    } & {}>, {
        description: string;
        icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        title: string;
        status: string;
    }>;
};
export default ElSteps;
export declare const ElStep: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    status: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    index: import("vue").Ref<number>;
    lineStyle: import("vue").Ref<{}>;
    currentStatus: import("vue").ComputedRef<string>;
    isCenter: import("vue").ComputedRef<boolean>;
    isVertical: import("vue").ComputedRef<boolean>;
    isSimple: import("vue").ComputedRef<boolean>;
    isLast: import("vue").ComputedRef<boolean>;
    space: import("vue").ComputedRef<string | number>;
    style: import("vue").ComputedRef<Record<string, unknown>>;
    parent: import("./src/item.vue").IStepsInject;
    setIndex: (val: any) => void;
    calcProgress: (status: any) => void;
    updateStatus: (activeIndex: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    icon?: unknown;
    description?: unknown;
    status?: unknown;
} & {
    description: string;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    title: string;
    status: string;
} & {}>, {
    description: string;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    title: string;
    status: string;
}>>;
