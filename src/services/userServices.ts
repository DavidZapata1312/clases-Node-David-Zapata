import { type IUsers } from "../interfaces/users.interface.ts";

// "DB" en memoria
const users: IUsers[] = [];

// Crear usuario
export const createUser = async (userData: IUsers): Promise<IUsers> => {
    if (!userData.email.includes("@")) {
        throw new Error("Invalid email");
    }

    users.push(userData);
    return userData;
};

// Listar usuarios
export const getUsers = async (): Promise<IUsers[]> => {
    return users;
};

export const loginUser = async (email: string, password: string): Promise<IUsers> => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
        throw new Error("Invalid credentials");
    }
    return user;
};