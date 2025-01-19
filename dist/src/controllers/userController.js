import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
export const createUser = async (req, res) => {
    try {
        const { name, email, phone, password, role } = req.body;
        const newUser = await prisma.user.create({
            data: { name, email, phone, password, role },
        });
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
