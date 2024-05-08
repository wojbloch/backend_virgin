import { Request, Response } from 'express';
import { UserService } from '../../services/mainServices';

export class UserController {
    static async fetchUserById(req: Request, res: Response) {
        try {
            const userId = parseInt(req.params.id);
            if (!userId) {
                return res.status(400).send('invalid user ID');
            }

            const user = await UserService.fetchUserById(userId);
            if (user) {
                res.json(user);
            } else {
                res.status(404).send('user not found');
            }
        } catch (error) {
            res.status(500).send('server error');
        }
    }

    static async fetchAllUsers(req: Request, res: Response) {
        try {
            const users = await UserService.fetchAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).send('server error');
        }
    }

    static async createUser(req: Request, res: Response) {
        try {
            const data = req.body;
            const user = await UserService.createUser(data);
            res.json(user);
        } catch (error) {
            res.status(500).send('server error');
        }
    }
}
