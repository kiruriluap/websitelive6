import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayRegisterPage, DisplayContactPage, DisplayLoginPage, ProcessLoginPage, ProcessRegisterPage} from "../controllers/auth";

/* Display home page. */
router.get('/', DisplayLoginPage);

/* Display home page. */
router.get('/home', DisplayLoginPage);

/* Display about page. */
router.get('/about', DisplayRegisterPage);

/* Display projects page. */
router.get('/projects', ProcessLoginPage);

/* Display services page. */
router.get('/services', ProcessRegisterPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

export default router;