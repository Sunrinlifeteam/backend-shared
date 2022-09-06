/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "upload";

export interface FileRequest {
  mimetype: string;
  buffer: Uint8Array;
}

export interface FileResponse {
  url: string;
}

export const UPLOAD_PACKAGE_NAME = "upload";

export interface UploadServiceClient {
  uploadImage(request: FileRequest): Observable<FileResponse>;
}

export interface UploadServiceController {
  uploadImage(request: FileRequest): Promise<FileResponse> | Observable<FileResponse> | FileResponse;
}

export function UploadServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["uploadImage"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UploadService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UploadService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const UPLOAD_SERVICE_NAME = "UploadService";
