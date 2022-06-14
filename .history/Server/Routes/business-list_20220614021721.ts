import express from 'express';
const router = express.Router();

import {DisplayBusinessList} from './controllers/b'
router.get('/business-list',DisplayBusinessList)

export default router;