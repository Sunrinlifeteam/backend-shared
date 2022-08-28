export class Notice {
  id: number;
  type: 'school' | 'intranet';
  title: string;
  content: string;
  created_at: Date;
  updated_at: Date;
  attachments: string[];
}

export class GetNoticeListRequest {
  search: string;
  page: number;
  per_page: number;
}

export class GetNoticeListResponse {
  total_count: number;
  notice: Notice[];
}

export class GetNoticeRequest {
  id: number;
}

export class PartialNotice {
  type?: string;
  title?: string;
  content?: string;
  attachments?: string[];
}

export class DeleteNoticeRequest {
  id: number;
}
