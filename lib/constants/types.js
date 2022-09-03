"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROLE_FLAG = exports.CLUB_TYPE = exports.ACCOUNT_TYPE = void 0;
var ACCOUNT_TYPE;
(function (ACCOUNT_TYPE) {
    ACCOUNT_TYPE[ACCOUNT_TYPE["STUDENT"] = 0] = "STUDENT";
    ACCOUNT_TYPE[ACCOUNT_TYPE["TEACHER"] = 1] = "TEACHER";
})(ACCOUNT_TYPE = exports.ACCOUNT_TYPE || (exports.ACCOUNT_TYPE = {}));
var CLUB_TYPE;
(function (CLUB_TYPE) {
    CLUB_TYPE[CLUB_TYPE["MAJOR"] = 0] = "MAJOR";
    CLUB_TYPE[CLUB_TYPE["MINOR"] = 1] = "MINOR";
    CLUB_TYPE[CLUB_TYPE["AUTONOMY"] = 2] = "AUTONOMY";
})(CLUB_TYPE = exports.CLUB_TYPE || (exports.CLUB_TYPE = {}));
exports.ROLE_FLAG = {
    ADMIN: 1 << 0,
};
//# sourceMappingURL=types.js.map