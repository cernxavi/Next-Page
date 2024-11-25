import apiRoutes from './api/index.js'
import authRoutes from './authRoutes.js'
import express from 'express';

const router = express.Router();

router.use('/api', apiRoutes);
router.use('/auth', authRoutes);

export default router;