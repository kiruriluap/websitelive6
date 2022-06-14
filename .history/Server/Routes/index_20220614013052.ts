import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayAboutPage, DisplayBusinessPage, DisplayContactPage, DisplayHomePage, DisplayProjectsPage, DisplayServicesPage} from "../controllers/index";

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

/**/
router.get('/business-list',DisplayBusiness)

export default router;