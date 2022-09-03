export declare class Notice {
    id: number;
    type: 'school' | 'intranet';
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    attachments: string[];
}
export declare class GetNoticeListRequest {
    search?: string;
    page: number;
    pageSize: number;
}
export declare class GetNoticeListResponse {
    totalCount: number;
    notice: Notice[];
}
export declare class GetNoticeRequest {
    id: number;
}
export declare class PartialNotice {
    type: 'school' | 'intranet';
    title: string;
    content: string;
    attachments?: string[];
}
export declare class PartialNoticeForCreate implements PartialNotice {
    type: 'school' | 'intranet';
    title: string;
    content: string;
    attachments?: string[];
}
export declare class PartialNoticeForUpdate implements PartialNotice {
    type: 'school' | 'intranet';
    title: string;
    content: string;
    attachments?: string[];
}
export declare class UpdateNoticeRequest {
    id: number;
    notice: PartialNotice;
}
export declare class DeleteNoticeRequest {
    id: number;
}
export declare class SearchQuery {
    search?: any;
    page?: number;
    pageSize?: number;
}
