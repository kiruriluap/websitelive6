import express from 'express';
const router = express.Router();

import {DisplayBusinessList} 
router.get('/business-list',DisplayBusinessList)

export default router;