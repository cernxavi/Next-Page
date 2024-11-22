import apiRoutes from './api/index.js'
import express from 'express';

const routes = express.Router();

router.use('/api', apiRoutes);

export default routes;