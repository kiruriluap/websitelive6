import express from 'express';
const router = express.Router();

import {DisplayBusinessList} from './controllers/'
router.get('/business-list',DisplayBusinessList)

export default router;