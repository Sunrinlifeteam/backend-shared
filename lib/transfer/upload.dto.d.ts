/// <reference types="multer" />
/// <reference types="node" />
export declare class StorageObject {
    image: Express.Multer.File;
}
export interface FileRequest {
    mimetype: string;
    buffer: Buffer;
}
export interface FileResponse {
    url: string;
}
