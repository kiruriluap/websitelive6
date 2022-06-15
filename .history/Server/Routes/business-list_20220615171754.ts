import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList} from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.post('/business-list', AuthGuard, DisplayBusinessList)


export default router;