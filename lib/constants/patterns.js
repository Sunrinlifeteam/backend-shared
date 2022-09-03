"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GITHUB_ID_PATTERN = exports.GITHUB_URL_PATTERN = exports.DATE_PATTERN = exports.SEOUL_EDU_EMAIL_PATTERN = exports.SUNRIN_STUDENT_EMAIL_PATTERN = exports.SUNRIN_EMAIL_PATTERN = void 0;
exports.SUNRIN_EMAIL_PATTERN = new RegExp('^[A-Za-z0-9._%+-]+@sunrint.hs.kr$');
exports.SUNRIN_STUDENT_EMAIL_PATTERN = new RegExp('^\\d{2}sunrin\\d{3}@sunrint.hs.kr$');
exports.SEOUL_EDU_EMAIL_PATTERN = new RegExp('^[A-Za-z0-9._%+-]+@sen.go.kr$');
exports.DATE_PATTERN = new RegExp('^[0-9]{4}-[0-9]{2}-[0-9]{2}$');
exports.GITHUB_URL_PATTERN = new RegExp('^(?:http(s)?://)?(?:www\\.)?github\\.com/[A-Za-z0-9_]+$');
exports.GITHUB_ID_PATTERN = new RegExp('^[A-Za-z0-9_]+$');
//# sourceMappingURL=patterns.js.map