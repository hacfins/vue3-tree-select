export declare const ElDescriptions: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    column: {
        type: NumberConstructor;
        default: number;
    };
    direction: {
        type: import("vue").PropType<"horizontal" | "vertical">;
        default: string;
    };
    size: {
        type: import("vue").PropType<import("../../utils/types").ComponentSize>;
        validator: (val: string) => boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    extra: {
        type: StringConstructor;
        default: string;
    };
}, {
    descriptionsSize: import("vue").ComputedRef<any>;
    getRows: () => never[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    border?: unknown;
    column?: unknown;
    direction?: unknown;
    size?: unknown;
    title?: unknown;
    extra?: unknown;
} & {
    column: number;
    border: boolean;
    title: string;
    direction: "horizontal" | "vertical";
    extra: string;
} & {
    size?: import("../../utils/types").ComponentSize | undefined;
}>, {
    column: number;
    border: boolean;
    title: string;
    direction: "horizontal" | "vertical";
    extra: string;
}>> & {
    DescriptionsItem: import("vue").DefineComponent<{
        label: {
            type: StringConstructor;
            default: string;
        };
        span: {
            type: NumberConstructor;
            default: number;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        minWidth: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        align: {
            type: StringConstructor;
            default: string;
        };
        labelAlign: {
            type: StringConstructor;
            default: string;
        };
        className: {
            type: StringConstructor;
            default: string;
        };
        labelClassName: {
            type: StringConstructor;
            default: string;
        };
    }, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        label?: unknown;
        span?: unknown;
        width?: unknown;
        minWidth?: unknown;
        align?: unknown;
        labelAlign?: unknown;
        className?: unknown;
        labelClassName?: unknown;
    } & {
        width: string | number;
        minWidth: string | number;
        label: string;
        span: number;
        align: string;
        labelAlign: string;
        className: string;
        labelClassName: string;
    } & {}>, {
        width: string | number;
        minWidth: string | number;
        label: string;
        span: number;
        align: string;
        labelAlign: string;
        className: string;
        labelClassName: string;
    }>;
};
export default ElDescriptions;
export declare const ElDescriptionsItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    label: {
        type: StringConstructor;
        default: string;
    };
    span: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    minWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    labelClassName: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    label?: unknown;
    span?: unknown;
    width?: unknown;
    minWidth?: unknown;
    align?: unknown;
    labelAlign?: unknown;
    className?: unknown;
    labelClassName?: unknown;
} & {
    width: string | number;
    minWidth: string | number;
    label: string;
    span: number;
    align: string;
    labelAlign: string;
    className: string;
    labelClassName: string;
} & {}>, {
    width: string | number;
    minWidth: string | number;
    label: string;
    span: number;
    align: string;
    labelAlign: string;
    className: string;
    labelClassName: string;
}>>;
