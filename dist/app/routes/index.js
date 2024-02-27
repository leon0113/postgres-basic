"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../models/user.routes");
const router = express_1.default.Router();
const moduleRoutes = [{
        path: '/user',
        route: user_routes_1.userRoutes
    }];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.routes = router;
