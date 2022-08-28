import { ApiProperty } from '@nestjs/swagger';

export class Notice {
  id: number;
  type: 'school' | 'intranet';
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  attachments: string[];
}

export class GetNoticeListRequest {
  search?: string;
  page: number;
  pageSize: number;
}

export class GetNoticeListResponse {
  totalCount: number;
  notice: Notice[];
}

export class GetNoticeRequest {
  id: number;
}

export class PartialNotice {
  @ApiProperty({ enum: ['school', 'intranet'] })
  type: 'school' | 'intranet';

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty({ required: false })
  attachments?: string[];
}

export class DeleteNoticeRequest {
  id: number;
}
