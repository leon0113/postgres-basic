"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../error/apiError"));
const app_1 = require("../../app");
const createUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email } = payload;
    if (!name || !email)
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, 'Please Provide all required credentials');
    const existedUser = yield app_1.prisma.user.findUnique({
        where: { email: email }
    });
    if (existedUser)
        throw new apiError_1.default(http_status_1.default.BAD_REQUEST, 'User already exists');
    const data = {
        name,
        email
    };
    const newUser = yield app_1.prisma.user.create({ data });
    return newUser;
});
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield app_1.prisma.user.findMany();
    return allUser;
});
exports.UserService = {
    createUser,
    getAllUser
};
