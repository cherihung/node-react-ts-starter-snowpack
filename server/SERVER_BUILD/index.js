"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const constants_1 = require("./configs/constants");
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
app.use(morgan_1.default(constants_1.LOG_FORMAT));
app.use(cors_1.default(corsOptions));
app.use('/', routes_1.default);
app.listen(constants_1.PORT, () => console.log(`App listening on :${constants_1.PORT}!`));
