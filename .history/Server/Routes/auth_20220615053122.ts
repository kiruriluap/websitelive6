import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage, Dis} from "../controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);

router.get('/add', DisplayAddPage);
router.get('/edit', DisplayEditPage);

/* Process login page. */
router.post('/login', ProcessLoginPage);

/* process register page. */
router.post('/register', ProcessRegisterPage);

/* process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;