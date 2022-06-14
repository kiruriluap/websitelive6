import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList} from '../controllers/business-list';

router.get('/business-list',DisplayBusinessList)

export default router;