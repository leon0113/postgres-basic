import { Request, Response } from "express";
import { UserService } from "./user.service";

const createUser = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
        const result = await UserService.createUser(payload);
        res.status(200).json({ message: 'User created successfully', data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while creating the user' });
    }
}

const getAllUser = async (req: Request, res: Response) => {
    try {
        const result = await UserService.getAllUser();
        res.status(200).json({ message: 'All users fetched successfully', data: result })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while getting all the users' });
    }
}

export const UserController = {
    createUser,
    getAllUser
}