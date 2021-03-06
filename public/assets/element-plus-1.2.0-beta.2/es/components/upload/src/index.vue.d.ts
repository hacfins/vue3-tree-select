/// <reference types="node" />
import ajax from './ajax';
import type { PropType } from 'vue';
import type { Nullable } from 'element-plus/es/utils/types';
import type { ListType, UploadFile, FileHandler, FileResultHandler } from './upload.type';
declare type PFileHandler<T> = PropType<FileHandler<T>>;
declare type PFileResultHandler<T = any> = PropType<FileResultHandler<T>>;
declare const _default: import("vue").DefineComponent<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: PropType<Headers>;
        default: () => {};
    };
    method: {
        type: StringConstructor;
        default: string;
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: PFileHandler<void>;
        default: () => void;
    };
    beforeRemove: {
        type: PFileHandler<boolean>;
        default: () => void;
    };
    onRemove: {
        type: PFileHandler<void>;
        default: () => void;
    };
    onChange: {
        type: PFileHandler<void>;
        default: () => void;
    };
    onPreview: {
        type: PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: PFileResultHandler<any>;
        default: () => void;
    };
    onProgress: {
        type: PFileResultHandler<ProgressEvent<EventTarget>>;
        default: () => void;
    };
    onError: {
        type: PFileResultHandler<Error>;
        default: () => void;
    };
    fileList: {
        type: PropType<UploadFile[]>;
        default: () => UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: PropType<ListType>;
        default: ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof ajax;
    };
    disabled: BooleanConstructor;
    limit: {
        type: PropType<Nullable<number>>;
        default: null;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}, {
    abort: (file: UploadFile) => void;
    dragOver: import("vue").Ref<boolean>;
    draging: import("vue").Ref<boolean>;
    handleError: (err: Error, rawFile: import("./upload.type").ElFile) => void;
    handleProgress: (ev: import("./upload.type").ElUploadProgressEvent, rawFile: import("./upload.type").ElFile) => void;
    handleRemove: (file: UploadFile, raw: import("./upload.type").ElFile) => void;
    handleStart: (rawFile: import("./upload.type").ElFile) => void;
    handleSuccess: (res: any, rawFile: import("./upload.type").ElFile) => void;
    uploadDisabled: import("vue").ComputedRef<boolean | undefined>;
    uploadFiles: import("vue").Ref<{
        name: string;
        percentage?: number | undefined;
        status: import("./upload.type").UploadStatus;
        size: number;
        response?: unknown;
        uid: number;
        url?: string | undefined;
        raw: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly webkitRelativePath: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: {
                (): Promise<ArrayBuffer>;
                (): Promise<ArrayBuffer>;
            };
            slice: {
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
                (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob;
            };
            stream: {
                (): ReadableStream<any>;
                (): NodeJS.ReadableStream;
            };
            text: {
                (): Promise<string>;
                (): Promise<string>;
            };
        };
    }[]>;
    uploadRef: import("vue").Ref<{
        abort: (file: UploadFile) => void;
        upload: (file: import("./upload.type").ElFile) => void;
    }>;
    submit: () => void;
    clearFiles: (status?: import("./upload.type").UploadStatus[]) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action?: unknown;
    headers?: unknown;
    method?: unknown;
    data?: unknown;
    multiple?: unknown;
    name?: unknown;
    drag?: unknown;
    withCredentials?: unknown;
    showFileList?: unknown;
    accept?: unknown;
    type?: unknown;
    beforeUpload?: unknown;
    beforeRemove?: unknown;
    onRemove?: unknown;
    onChange?: unknown;
    onPreview?: unknown;
    onSuccess?: unknown;
    onProgress?: unknown;
    onError?: unknown;
    fileList?: unknown;
    autoUpload?: unknown;
    listType?: unknown;
    httpRequest?: unknown;
    disabled?: unknown;
    limit?: unknown;
    onExceed?: unknown;
} & {
    type: string;
    name: string;
    onChange: FileHandler<void>;
    drag: boolean;
    multiple: boolean;
    disabled: boolean;
    data: Record<string, any>;
    onError: FileResultHandler<Error>;
    onProgress: FileResultHandler<ProgressEvent<EventTarget>>;
    action: string;
    headers: Headers;
    method: string;
    withCredentials: boolean;
    accept: string;
    onSuccess: FileResultHandler<any>;
    beforeUpload: FileHandler<void>;
    onPreview: () => void;
    onRemove: FileHandler<void>;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: Function;
    limit: Nullable<number>;
    onExceed: Function;
    showFileList: boolean;
    beforeRemove: FileHandler<boolean>;
} & {}>, {
    type: string;
    name: string;
    onChange: FileHandler<void>;
    drag: boolean;
    multiple: boolean;
    disabled: boolean;
    data: Record<string, any>;
    onError: FileResultHandler<Error>;
    onProgress: FileResultHandler<ProgressEvent<EventTarget>>;
    headers: Headers;
    method: string;
    withCredentials: boolean;
    accept: string;
    onSuccess: FileResultHandler<any>;
    beforeUpload: FileHandler<void>;
    onPreview: () => void;
    onRemove: FileHandler<void>;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: Function;
    limit: Nullable<number>;
    onExceed: Function;
    showFileList: boolean;
    beforeRemove: FileHandler<boolean>;
}>;
export default _default;
