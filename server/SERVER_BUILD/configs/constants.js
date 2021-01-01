"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.LOG_FORMAT = void 0;
exports.LOG_FORMAT = process.env.LOG_FORMAT || 'combined';
exports.PORT = process.env.PORT || '3000';
