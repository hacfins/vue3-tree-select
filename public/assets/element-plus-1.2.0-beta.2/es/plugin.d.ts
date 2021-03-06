declare const _default: ((import("vue").ObjectDirective<HTMLElement & {
    ElInfiniteScroll: {
        container: Window | HTMLElement;
        containerEl: HTMLElement;
        instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        delay: number;
        lastScrollTop: number;
        cb: () => void;
        onScroll: () => void;
        observer?: MutationObserver | undefined;
    };
}, () => void> & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | (import("vue").ObjectDirective<HTMLElement & {
    ElInfiniteScroll: {
        container: Window | HTMLElement;
        containerEl: HTMLElement;
        instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        delay: number;
        lastScrollTop: number;
        cb: () => void;
        onScroll: () => void;
        observer?: MutationObserver | undefined;
    };
}, () => void> & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | {
    install(app: import("vue").App<any>): void;
    directive: {
        mounted(el: import("../components/loading/src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
        updated(el: import("../components/loading/src/directive").ElementLoading, binding: import("vue").DirectiveBinding<any>): void;
        unmounted(el: import("../components/loading/src/directive").ElementLoading): void;
    };
    service: (options?: import("element-plus/es/components/loading").ILoadingOptions) => import("element-plus/es/components/loading").ILoadingInstance;
} | (import("element-plus/es/components/message").Message & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | (import("element-plus/es/components/message").Message & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | (import("element-plus/es/components/message-box").IElMessageBox & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | (import("element-plus/es/components/message-box").IElMessageBox & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}) | (import("element-plus/es/components/notification").Notify & ((app: import("vue").App<any>, ...options: any[]) => any) & {
    install?: ((app: import("vue").App<any>, ...options: any[]) => any) | undefined;
}) | (import("element-plus/es/components/notification").Notify & {
    install: (app: import("vue").App<any>, ...options: any[]) => any;
}))[];
export default _default;
