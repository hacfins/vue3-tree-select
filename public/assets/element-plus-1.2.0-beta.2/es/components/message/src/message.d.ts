import type { VNode, ExtractPropTypes, Component } from 'vue';
export declare const messageTypes: readonly ["success", "info", "warning", "error"];
export declare const messageProps: {
    readonly customClass: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly center: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly dangerouslyUseHTMLString: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly duration: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 3000, unknown, unknown, unknown>;
    readonly icon: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | Component<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions>>, "", unknown, unknown, unknown>;
    readonly id: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "", unknown, unknown, unknown>;
    readonly message: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<string | VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>, "", unknown, unknown, unknown>;
    readonly onClose: import("element-plus/es/utils/props").BuildPropReturn<import("element-plus/es/utils/props").PropWrapper<() => void>, unknown, false, unknown, unknown>;
    readonly showClose: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly type: import("element-plus/es/utils/props").BuildPropReturn<StringConstructor, "info", unknown, "success" | "warning" | "error" | "info", unknown>;
    readonly offset: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 20, unknown, unknown, unknown>;
    readonly zIndex: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 0, unknown, unknown, unknown>;
    readonly grouping: import("element-plus/es/utils/props").BuildPropReturn<BooleanConstructor, false, unknown, unknown, unknown>;
    readonly repeatNum: import("element-plus/es/utils/props").BuildPropReturn<NumberConstructor, 1, unknown, unknown, unknown>;
};
export declare type MessageProps = ExtractPropTypes<typeof messageProps>;
export declare const messageEmits: {
    destroy: () => boolean;
};
export declare type MessageEmits = typeof messageEmits;
export declare type MessageOptions = Omit<MessageProps, 'id'> & {
    appendTo?: HTMLElement | string;
};
export declare type MessageOptionsTyped = Omit<MessageOptions, 'type'>;
export interface MessageHandle {
    close: () => void;
}
export declare type MessageParams = Partial<MessageOptions> | string | VNode;
export declare type MessageParamsTyped = Partial<MessageOptionsTyped> | string | VNode;
export declare type MessageFn = ((options?: MessageParams) => MessageHandle) & {
    closeAll(): void;
};
export declare type MessageTypedFn = (options?: MessageParamsTyped) => MessageHandle;
export interface Message extends MessageFn {
    success: MessageTypedFn;
    warning: MessageTypedFn;
    info: MessageTypedFn;
    error: MessageTypedFn;
}
declare type MessageQueueItem = {
    vm: VNode;
};
export declare type MessageQueue = MessageQueueItem[];
export {};
