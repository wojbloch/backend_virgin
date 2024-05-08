import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export class UserDataAccess {

    static async getUserById(userId: number) {
        return await prisma.user.findUnique({
            where: { id: userId }
        });
    }

    static async getAllUsers() {
        return await prisma.user.findMany();
    }

    static async createUser(data: any) {
        return await prisma.user.create({
            data: data
        });
    }
}