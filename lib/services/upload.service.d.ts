import { Observable } from 'rxjs';
import { FileRequest, FileResponse } from '../transfer/upload.dto';
export interface UploadService {
    uploadImage(message: FileRequest): Observable<FileResponse>;
}
