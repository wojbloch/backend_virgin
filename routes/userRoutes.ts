import express from 'express';
import { UserController } from '../api/controllers/overseer';

const router = express.Router();

router.get('/all', UserController.fetchAllUsers);
router.get('/:id', UserController.fetchUserById);
router.post('/create', UserController.createUser);


export default router;