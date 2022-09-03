"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REFRESH_TOKEN_COOKIE_KEY = exports.REFRESH_TOKEN_COOKIE_OPTION = void 0;
const config_1 = require("./config");
exports.REFRESH_TOKEN_COOKIE_OPTION = Object.assign(Object.assign({}, (config_1.isProduction ? { domain: process.env.SERVICE_DOMAIN } : {})), { httpOnly: config_1.isProduction, secure: config_1.isProduction, maxAge: 2592000000 });
exports.REFRESH_TOKEN_COOKIE_KEY = 'Refresh';
//# sourceMappingURL=jwt.js.map