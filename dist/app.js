"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const client_1 = require("@prisma/client");
const routes_1 = require("./app/routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
exports.prisma = new client_1.PrismaClient();
app.use('/api/v1', routes_1.routes);
//if no routes found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        message: 'Not Found',
        errorMessage: [
            {
                path: req.originalUrl,
                message: 'API Not Found'
            }
        ]
    });
    // next()
});
exports.default = app;
