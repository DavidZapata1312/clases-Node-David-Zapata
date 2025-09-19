import { type Request,type Response } from "express";
import { createUser, getUsers, loginUser } from "../services/userServices.ts";
import { type IUsers } from "../interfaces/users.interface.ts";

export const createUserController = async (req: Request, res: Response) => {
    try {
        const userData: IUsers = req.body;
        const newUser = await createUser(userData);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: (error as Error).message });
    }
};

export const getUsersController = async (req: Request, res: Response) => {
    try {
        const allUsers = await getUsers();
        return res.json(allUsers);
    } catch (error) {
        return res.status(500).json({ error: (error as Error).message });
    }
};

export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const user = await loginUser(email, password);
        return res.json({ message: "Login successful", user });
    } catch (error) {
        return res.status(401).json({ error: (error as Error).message });
    }
};