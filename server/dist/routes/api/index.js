import { bookRouter } from './bookRoutes.js';
import express from 'express';
const router = express.Router();
router.use('/books', bookRouter);
export default router;
