import { UserDataAccess } from '../data_access/repos';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class UserService{
    static async fetchUserById(userId: number){
        return await UserDataAccess.getUserById(userId);
    }

    static async fetchAllUsers(){
        return await UserDataAccess.getAllUsers();
    }

    static async createUser(userData: { name: string; email: string }) {
        return await prisma.user.create({
            data: userData
        });
    }
}

