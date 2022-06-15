import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList} from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/add', AuthGuard, DisplayAddList)

router.post('/add', AuthGuard, ProcessAList)


export default router;