export declare const protobufPackage = "board";
export interface Notice {
    id: number;
    type: string;
    title: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    attachments: string[];
}
export interface GetNoticeListRequest {
    search: string;
    page: number;
    pageSize: number;
}
export interface GetNoticeListResponse {
    notice: Notice[];
    totalCount: number;
}
export interface GetNoticeRequest {
    id: string;
}
export interface PartialNotice {
    type: string;
    title: string;
    content: string;
    attachments: string[];
}
export interface UpdateNoticeRequest {
    id: string;
    notice: PartialNotice | undefined;
}
export interface DeleteNoticeRequest {
    id: string;
}
export declare const BOARD_PACKAGE_NAME = "board";
