"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NOTICE_SERVICE_NAME = exports.NoticeServiceControllerMethods = exports.BOARD_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "board";
exports.BOARD_PACKAGE_NAME = "board";
function NoticeServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["getNoticeList", "getNotice", "createNotice", "updateNotice", "deleteNotice"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("NoticeService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("NoticeService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.NoticeServiceControllerMethods = NoticeServiceControllerMethods;
exports.NOTICE_SERVICE_NAME = "NoticeService";
//# sourceMappingURL=board.js.map