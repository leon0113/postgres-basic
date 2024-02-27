import { User } from './../interface/user.interface';
import httpStatus from "http-status";
import ApiError from "../../error/apiError";
import { prisma } from '../../app';

const createUser = async (payload: User) => {
    const { name, email } = payload;
    if (!name || !email) throw new ApiError(httpStatus.BAD_REQUEST, 'Please Provide all required credentials')

    const existedUser = await prisma.user.findUnique({
        where: { email: email }
    })
    if (existedUser) throw new ApiError(httpStatus.BAD_REQUEST, 'User already exists');
    const data = {
        name,
        email
    }
    const newUser = await prisma.user.create({ data });
    return newUser;
}

const getAllUser = async () => {

    const allUser = await prisma.user.findMany();
    return allUser;
}

export const UserService = {
    createUser,
    getAllUser
}