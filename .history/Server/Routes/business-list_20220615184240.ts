import express from 'express';
const router = express.Router();

import { AuthGuard } from '../../Util';

import {DisplayBusinessList, DisplayAddList, ProcessAddList, DisplayEditList, ProcessEditList } from '../controllers/business-list';

router.get('/business-list', AuthGuard, DisplayBusinessList)

router.get('/add', AuthGuard, DisplayAddList)

router.post('/add', AuthGuard, ProcessAddList)

router.get('/add', AuthGuard, DisplayEditList)

router.post('/edit', AuthGuard, ProcessEditList)


export default router;