/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";
import {
  DeleteNoticeRequest,
  GetNoticeListRequest,
  GetNoticeListResponse,
  GetNoticeRequest,
  Notice,
  PartialNotice,
  UpdateNoticeRequest,
} from "./board/notice";
import { Empty } from "./google/protobuf/empty";

export const protobufPackage = "board";

export const BOARD_PACKAGE_NAME = "board";

export interface NoticeServiceClient {
  getNoticeList(request: GetNoticeListRequest): Observable<GetNoticeListResponse>;

  getNotice(request: GetNoticeRequest): Observable<Notice>;

  createNotice(request: PartialNotice): Observable<Notice>;

  updateNotice(request: UpdateNoticeRequest): Observable<Empty>;

  deleteNotice(request: DeleteNoticeRequest): Observable<Empty>;
}

export interface NoticeServiceController {
  getNoticeList(
    request: GetNoticeListRequest,
  ): Promise<GetNoticeListResponse> | Observable<GetNoticeListResponse> | GetNoticeListResponse;

  getNotice(request: GetNoticeRequest): Promise<Notice> | Observable<Notice> | Notice;

  createNotice(request: PartialNotice): Promise<Notice> | Observable<Notice> | Notice;

  updateNotice(request: UpdateNoticeRequest): void;

  deleteNotice(request: DeleteNoticeRequest): void;
}

export function NoticeServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["getNoticeList", "getNotice", "createNotice", "updateNotice", "deleteNotice"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("NoticeService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("NoticeService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const NOTICE_SERVICE_NAME = "NoticeService";
