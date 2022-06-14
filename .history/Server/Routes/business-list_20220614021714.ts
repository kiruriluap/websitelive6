import express from 'express';
const router = express.Router();

import {DisplayBusinessList} from './Contr'
router.get('/business-list',DisplayBusinessList)

export default router;