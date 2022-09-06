import { Observable } from "rxjs";
import { DeleteNoticeRequest, GetNoticeListRequest, GetNoticeListResponse, GetNoticeRequest, Notice, PartialNotice, UpdateNoticeRequest } from "./board/notice";
import { Empty } from "./google/protobuf/empty";
export declare const protobufPackage = "board";
export declare const BOARD_PACKAGE_NAME = "board";
export interface NoticeServiceClient {
    getNoticeList(request: GetNoticeListRequest): Observable<GetNoticeListResponse>;
    getNotice(request: GetNoticeRequest): Observable<Notice>;
    createNotice(request: PartialNotice): Observable<Notice>;
    updateNotice(request: UpdateNoticeRequest): Observable<Empty>;
    deleteNotice(request: DeleteNoticeRequest): Observable<Empty>;
}
export interface NoticeServiceController {
    getNoticeList(request: GetNoticeListRequest): Promise<GetNoticeListResponse> | Observable<GetNoticeListResponse> | GetNoticeListResponse;
    getNotice(request: GetNoticeRequest): Promise<Notice> | Observable<Notice> | Notice;
    createNotice(request: PartialNotice): Promise<Notice> | Observable<Notice> | Notice;
    updateNotice(request: UpdateNoticeRequest): void;
    deleteNotice(request: DeleteNoticeRequest): void;
}
export declare function NoticeServiceControllerMethods(): (constructor: Function) => void;
export declare const NOTICE_SERVICE_NAME = "NoticeService";
