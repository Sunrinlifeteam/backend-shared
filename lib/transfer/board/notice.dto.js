"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchQuery = exports.DeleteNoticeRequest = exports.UpdateNoticeRequest = exports.PartialNoticeForUpdate = exports.PartialNoticeForCreate = exports.PartialNotice = exports.GetNoticeRequest = exports.GetNoticeListResponse = exports.GetNoticeListRequest = exports.Notice = void 0;
const swagger_1 = require("@nestjs/swagger");
class Notice {
}
exports.Notice = Notice;
class GetNoticeListRequest {
}
exports.GetNoticeListRequest = GetNoticeListRequest;
class GetNoticeListResponse {
}
exports.GetNoticeListResponse = GetNoticeListResponse;
class GetNoticeRequest {
}
exports.GetNoticeRequest = GetNoticeRequest;
class PartialNotice {
}
exports.PartialNotice = PartialNotice;
class PartialNoticeForCreate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['school', 'intranet'] }),
    __metadata("design:type", String)
], PartialNoticeForCreate.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PartialNoticeForCreate.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PartialNoticeForCreate.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], PartialNoticeForCreate.prototype, "attachments", void 0);
exports.PartialNoticeForCreate = PartialNoticeForCreate;
class PartialNoticeForUpdate {
}
__decorate([
    (0, swagger_1.ApiProperty)({ enum: ['school', 'intranet'], required: false }),
    __metadata("design:type", String)
], PartialNoticeForUpdate.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], PartialNoticeForUpdate.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], PartialNoticeForUpdate.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", Array)
], PartialNoticeForUpdate.prototype, "attachments", void 0);
exports.PartialNoticeForUpdate = PartialNoticeForUpdate;
class UpdateNoticeRequest {
}
exports.UpdateNoticeRequest = UpdateNoticeRequest;
class DeleteNoticeRequest {
}
exports.DeleteNoticeRequest = DeleteNoticeRequest;
class SearchQuery {
    constructor() {
        this.search = null;
        this.page = 1;
        this.pageSize = 25;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: String,
    }),
    __metadata("design:type", Object)
], SearchQuery.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    __metadata("design:type", Object)
], SearchQuery.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        type: Number,
    }),
    __metadata("design:type", Object)
], SearchQuery.prototype, "pageSize", void 0);
exports.SearchQuery = SearchQuery;
//# sourceMappingURL=notice.dto.js.map