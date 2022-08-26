import { ApiProperty } from '@nestjs/swagger';

export class StorageObject {
  @ApiProperty({ type: 'string', format: 'binary' })
  image: Express.Multer.File;
}

export interface FileRequest {
  mimetype: string;
  buffer: Buffer;
}

export interface FileResponse {
  url: string;
}
