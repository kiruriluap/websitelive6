import express from 'express';
const router = express.Router();

//import the controller module
router.get('/add', DisplayaddPage);
import {DisplayAboutPage,  DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage} from "../controllers/index";

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', DisplayAboutPage);

/* Display projects page. */
router.get('/projects', DisplayProjectsPage);

/* Display services page. */
router.get('/services', DisplayServicesPage);

/* Display contact page. */
router.get('/contact', DisplayContactPage);

/* Display contact page. */
router.get('/add', DisplayaddPage);

export default router;