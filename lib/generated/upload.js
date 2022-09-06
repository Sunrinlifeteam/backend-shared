"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPLOAD_SERVICE_NAME = exports.UploadServiceControllerMethods = exports.UPLOAD_PACKAGE_NAME = exports.protobufPackage = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.protobufPackage = "upload";
exports.UPLOAD_PACKAGE_NAME = "upload";
function UploadServiceControllerMethods() {
    return function (constructor) {
        const grpcMethods = ["uploadImage"];
        for (const method of grpcMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcMethod)("UploadService", method)(constructor.prototype[method], method, descriptor);
        }
        const grpcStreamMethods = [];
        for (const method of grpcStreamMethods) {
            const descriptor = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
            (0, microservices_1.GrpcStreamMethod)("UploadService", method)(constructor.prototype[method], method, descriptor);
        }
    };
}
exports.UploadServiceControllerMethods = UploadServiceControllerMethods;
exports.UPLOAD_SERVICE_NAME = "UploadService";
//# sourceMappingURL=upload.js.map