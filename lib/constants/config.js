"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isProduction = void 0;
const config_1 = require("@nestjs/config");
const config = new config_1.ConfigService();
exports.isProduction = config.get('NODE_ENV') === 'production';
//# sourceMappingURL=config.js.map