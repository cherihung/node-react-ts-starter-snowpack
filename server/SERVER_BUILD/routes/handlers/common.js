"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckHandler = exports.defaultSuccessHandler = void 0;
const defaultSuccessHandler = (req, res) => {
    res.send();
};
exports.defaultSuccessHandler = defaultSuccessHandler;
const healthCheckHandler = (req, res) => {
    res.json({
        status: 'healthy',
    });
};
exports.healthCheckHandler = healthCheckHandler;
