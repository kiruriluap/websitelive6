import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, ProcessLogoutPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage, DisplayAddPage, DisplayEditPage} from "../controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display Register page. */
router.get('/register', DisplayRegisterPage);



/* Process login page. */
router.post('/login', ProcessLoginPage);

/* process register page. */
router.post('/register', ProcessRegisterPage);

/* process logout page. */
router.get('/logout', ProcessLogoutPage);


/* Display add page. */
router.get('/add', DisplayAddPage);

/* Display edit page. */
router.get('/edit', DisplayEditPage);

/* Display add page. */
router.post('/add', DisplayAddPage);

/* Display edit page. */
router.get('/edit', DisplayEditPage);



export default router;