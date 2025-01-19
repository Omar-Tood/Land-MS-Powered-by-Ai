import { Router } from 'express';
import { getAllUsers, createUser } from '../controllers/userController';
const router = Router();
router.get('/', getAllUsers);
router.post('/', createUser);
export default router;
