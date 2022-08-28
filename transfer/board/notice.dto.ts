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

export class UpdateNoticeRequest {
  @ApiProperty()
  id: number;

  @ApiProperty()
  notice: PartialNotice;
}

export class DeleteNoticeRequest {
  id: number;
}

export class SearchQuery {
  @ApiProperty({
    name: 'query',
    required: false,
    type: String,
  })
  search? = null;

  @ApiProperty({
    name: 'page',
    required: false,
    type: Number,
  })
  page? = 1;

  @ApiProperty({
    name: 'page_size',
    required: false,
    type: Number,
  })
  pageSize? = 25;
}
