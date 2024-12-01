import { bookRouter } from './bookRoutes.js';
import express from 'express';
import { userRouter } from './userRoutes.js';
const router = express.Router();
router.use('/books', bookRouter);
router.use('/users', userRouter);
export default router;
