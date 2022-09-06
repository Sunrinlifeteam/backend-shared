import { Observable } from "rxjs";
export declare const protobufPackage = "upload";
export interface FileRequest {
    mimetype: string;
    buffer: Uint8Array;
}
export interface FileResponse {
    url: string;
}
export declare const UPLOAD_PACKAGE_NAME = "upload";
export interface UploadServiceClient {
    uploadImage(request: FileRequest): Observable<FileResponse>;
}
export interface UploadServiceController {
    uploadImage(request: FileRequest): Promise<FileResponse> | Observable<FileResponse> | FileResponse;
}
export declare function UploadServiceControllerMethods(): (constructor: Function) => void;
export declare const UPLOAD_SERVICE_NAME = "UploadService";
