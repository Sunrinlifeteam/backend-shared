import { Observable } from 'rxjs';
import {
  DeleteNoticeRequest,
  GetNoticeListRequest,
  GetNoticeListResponse,
  GetNoticeRequest,
  Notice,
  PartialNotice,
} from '../transfer/board/notice.dto';

export interface NoticeService {
  getNoticeList(
    payload: GetNoticeListRequest,
  ): Observable<GetNoticeListResponse>;
  getNotice(payload: GetNoticeRequest): Observable<Notice>;
  createNotice(payload: PartialNotice): Observable<Notice>;
  updateNotice(payload: PartialNotice): Observable<void>;
  deleteNotice(payload: DeleteNoticeRequest): Observable<void>;
}
