declare const _default: import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default(): never[];
    };
    optionRender: FunctionConstructor;
    placeholder: StringConstructor;
    title: StringConstructor;
    filterable: BooleanConstructor;
    format: ObjectConstructor;
    filterMethod: FunctionConstructor;
    defaultChecked: ArrayConstructor;
    props: ObjectConstructor;
}, {
    labelProp: import("vue").ComputedRef<any>;
    keyProp: import("vue").ComputedRef<any>;
    disabledProp: import("vue").ComputedRef<any>;
    filteredData: import("vue").ComputedRef<unknown[]>;
    checkedSummary: import("vue").ComputedRef<any>;
    isIndeterminate: import("vue").ComputedRef<boolean>;
    handleAllCheckedChange: (value: import("./transfer").Key[]) => void;
    checked: import("vue").Ref<never[]>;
    allChecked: import("vue").Ref<boolean>;
    query: import("vue").Ref<string>;
    inputHover: import("vue").Ref<boolean>;
    checkChangeByUser: import("vue").Ref<boolean>;
    hasNoMatch: import("vue").ComputedRef<boolean>;
    inputIcon: import("vue").ComputedRef<import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{}>, {}>>;
    hasFooter: import("vue").ComputedRef<boolean>;
    clearQuery: () => void;
    t: (...args: any[]) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "checked-change"[], "checked-change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    data?: unknown;
    optionRender?: unknown;
    placeholder?: unknown;
    title?: unknown;
    filterable?: unknown;
    format?: unknown;
    filterMethod?: unknown;
    defaultChecked?: unknown;
    props?: unknown;
} & {
    data: unknown[];
    filterable: boolean;
} & {
    props?: Record<string, any> | undefined;
    title?: string | undefined;
    placeholder?: string | undefined;
    filterMethod?: Function | undefined;
    format?: Record<string, any> | undefined;
    optionRender?: Function | undefined;
    defaultChecked?: unknown[] | undefined;
}> & {
    "onChecked-change"?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    filterable: boolean;
}>;
export default _default;
