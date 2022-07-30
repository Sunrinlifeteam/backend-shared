export interface FileRequest {
  mimetype: string;
  buffer: Buffer;
}

export interface FileResponse {
  url: string;
}
