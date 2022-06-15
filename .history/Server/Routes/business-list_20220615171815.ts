import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList} from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/add', AuthGuard, DisplayBusinessList)

router.post('/add', AuthGuard, DisplayBusinessList)


export default router;