declare const _default: import("vue").DefineComponent<{
    readonly icon: {
        readonly type: import("vue").PropType<string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>;
        readonly default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>;
    };
    readonly title: StringConstructor;
    readonly content: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, {
    handleClick: () => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    back: () => boolean;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    readonly icon?: unknown;
    readonly title?: unknown;
    readonly content?: unknown;
} & {
    content: string;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
} & {
    title?: string | undefined;
}> & {
    onBack?: (() => any) | undefined;
}, {
    content: string;
    icon: string | import("vue").Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>;
}>;
export default _default;
