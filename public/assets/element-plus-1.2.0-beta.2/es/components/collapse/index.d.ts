export declare const ElCollapse: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    accordion: BooleanConstructor;
    modelValue: {
        type: import("vue").PropType<string | number | (string | number)[]>;
        default: () => never[];
    };
}, {
    activeNames: import("vue").Ref<never[]>;
    setActiveNames: (_activeNames: any) => void;
    handleItemClick: (name: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    accordion?: unknown;
    modelValue?: unknown;
} & {
    modelValue: string | number | (string | number)[];
    accordion: boolean;
} & {}> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | (string | number)[];
    accordion: boolean;
}>> & {
    CollapseItem: import("vue").DefineComponent<{
        title: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: import("vue").PropType<string | number>;
            default: () => number;
        };
        disabled: BooleanConstructor;
    }, {
        isActive: import("vue").ComputedRef<boolean>;
        contentWrapStyle: import("vue").Ref<{
            height: string;
            display: string;
        }>;
        contentHeight: import("vue").Ref<number>;
        focusing: import("vue").Ref<boolean>;
        isClick: import("vue").Ref<boolean>;
        id: import("vue").Ref<number>;
        handleFocus: () => void;
        handleHeaderClick: () => void;
        handleEnterClick: () => void;
        collapse: import("./src/collapse.type").CollapseProvider | undefined;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
        title?: unknown;
        name?: unknown;
        disabled?: unknown;
    } & {
        name: string | number;
        disabled: boolean;
        title: string;
    } & {}>, {
        name: string | number;
        disabled: boolean;
        title: string;
    }>;
};
export default ElCollapse;
export declare const ElCollapseItem: import("../../utils/types").SFCWithInstall<import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: import("vue").PropType<string | number>;
        default: () => number;
    };
    disabled: BooleanConstructor;
}, {
    isActive: import("vue").ComputedRef<boolean>;
    contentWrapStyle: import("vue").Ref<{
        height: string;
        display: string;
    }>;
    contentHeight: import("vue").Ref<number>;
    focusing: import("vue").Ref<boolean>;
    isClick: import("vue").Ref<boolean>;
    id: import("vue").Ref<number>;
    handleFocus: () => void;
    handleHeaderClick: () => void;
    handleEnterClick: () => void;
    collapse: import("./src/collapse.type").CollapseProvider | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    name?: unknown;
    disabled?: unknown;
} & {
    name: string | number;
    disabled: boolean;
    title: string;
} & {}>, {
    name: string | number;
    disabled: boolean;
    title: string;
}>>;
