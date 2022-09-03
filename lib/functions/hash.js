"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MD5 = exports.SHA256 = exports.SHA1 = void 0;
const crypto_1 = require("crypto");
function SHA1(data) {
    return (0, crypto_1.createHash)('sha1').update(data).digest('hex');
}
exports.SHA1 = SHA1;
function SHA256(data) {
    return (0, crypto_1.createHash)('sha256').update(data).digest('hex');
}
exports.SHA256 = SHA256;
function MD5(data) {
    return (0, crypto_1.createHash)('md5').update(data).digest('hex');
}
exports.MD5 = MD5;
//# sourceMappingURL=hash.js.map