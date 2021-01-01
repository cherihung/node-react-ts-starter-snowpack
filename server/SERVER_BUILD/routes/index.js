"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const common_1 = require("./handlers/common");
const router = express_1.default();
router.get('/', common_1.defaultSuccessHandler);
router.get('/health', common_1.healthCheckHandler);
exports.default = router;
