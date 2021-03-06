export declare const ElTimeline: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {} & {}>, {}>> & {
    TimelineItem: import("vue").DefineComponent<{
        timestamp: {
            type: StringConstructor;
            default: string;
        };
        hideTimestamp: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        placement: {
            type: StringConstructor;
            default: string;
        };
        type: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        icon: {
            type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
            default: string;
        };
        hollow: {
            type: BooleanConstructor;
            default: boolean;
        };
    }, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        timestamp?: unknown;
        hideTimestamp?: unknown;
        center?: unknown;
        placement?: unknown;
        type?: unknown;
        color?: unknown;
        size?: unknown;
        icon?: unknown;
        hollow?: unknown;
    } & {
        type: string;
        size: string;
        color: string;
        center: boolean;
        icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        placement: string;
        timestamp: string;
        hideTimestamp: boolean;
        hollow: boolean;
    } & {}>, {
        type: string;
        size: string;
        color: string;
        center: boolean;
        icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
        placement: string;
        timestamp: string;
        hideTimestamp: boolean;
        hollow: boolean;
    }>;
};
export default ElTimeline;
export declare const ElTimelineItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    timestamp: {
        type: StringConstructor;
        default: string;
    };
    hideTimestamp: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        default: string;
    };
    hollow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, void, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    timestamp?: unknown;
    hideTimestamp?: unknown;
    center?: unknown;
    placement?: unknown;
    type?: unknown;
    color?: unknown;
    size?: unknown;
    icon?: unknown;
    hollow?: unknown;
} & {
    type: string;
    size: string;
    color: string;
    center: boolean;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    placement: string;
    timestamp: string;
    hideTimestamp: boolean;
    hollow: boolean;
} & {}>, {
    type: string;
    size: string;
    color: string;
    center: boolean;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
    placement: string;
    timestamp: string;
    hideTimestamp: boolean;
    hollow: boolean;
}>>;
