export declare const ElTeleport: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    container: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<string | HTMLElement>, string, unknown, unknown, unknown>;
    style: import("../../utils/props").BuildPropReturn<import("../../utils/props").PropWrapper<import("vue").StyleValue>, unknown, unknown, unknown, unknown>;
    zIndex: import("../../utils/props").BuildPropReturn<StringConstructor, string, unknown, unknown, unknown>;
}, {
    containerRef: import("vue").Ref<HTMLElement | undefined>;
    containerStyle: import("vue").ComputedRef<{}>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    container?: unknown;
    style?: unknown;
    zIndex?: unknown;
} & {
    zIndex: string;
    container: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | HTMLElement>, unknown, unknown>;
} & {
    style?: import("vue").StyleValue | undefined;
}>, {
    zIndex: string;
    style: import("vue").StyleValue;
    container: import("../../utils/props").BuildPropType<import("../../utils/props").PropWrapper<string | HTMLElement>, unknown, unknown>;
}>> & Record<string, any>;
export default ElTeleport;
export * from './src/teleport';
