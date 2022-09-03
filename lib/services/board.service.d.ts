import { Empty } from 'google/protobuf/empty';
import { Observable } from 'rxjs';
import { DeleteNoticeRequest, GetNoticeListRequest, GetNoticeListResponse, GetNoticeRequest, Notice, PartialNotice, UpdateNoticeRequest } from '../transfer/board/notice.dto';
export interface NoticeService {
    getNoticeList(payload: GetNoticeListRequest): Observable<GetNoticeListResponse>;
    getNotice(payload: GetNoticeRequest): Observable<Notice>;
    createNotice(payload: PartialNotice): Observable<Notice>;
    updateNotice(payload: UpdateNoticeRequest): Observable<Empty>;
    deleteNotice(payload: DeleteNoticeRequest): Observable<Empty>;
}
