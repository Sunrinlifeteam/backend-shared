import {
  DeleteNoticeRequest,
  GetNoticeListRequest,
  GetNoticeListResponse,
  GetNoticeRequest,
  Notice,
  PartialNotice,
} from '../transfer/board/notice.dto';

export interface NoticeService {
  getNoticeList(payload: GetNoticeListRequest): Promise<GetNoticeListResponse>;
  getNotice(payload: GetNoticeRequest): Promise<Notice>;
  createNotice(payload: PartialNotice): Promise<Notice>;
  updateNotice(payload: PartialNotice): Promise<void>;
  deleteNotice(payload: DeleteNoticeRequest): Promise<void>;
}
