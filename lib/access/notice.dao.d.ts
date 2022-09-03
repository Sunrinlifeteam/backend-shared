export declare class NoticeEntity {
    id: number;
    type: 'school' | 'intranet';
    title: string;
    content: string;
    created_at: Date;
    updated_at: Date;
    attachments: string[];
}
