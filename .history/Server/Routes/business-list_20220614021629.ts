import express from 'express';
const router = express.Router();

router.get('/business-list',DisplayBusinessList)

export default router;