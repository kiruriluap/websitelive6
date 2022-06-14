import express from 'express';
const router = express.Router();

import 

import {DisplayBusinessList} from '../controllers/business-list';

router.get('/business-list',DisplayBusinessList)

export default router;