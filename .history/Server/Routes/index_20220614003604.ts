import express from 'express';
const router = express.Router();

//import the controller module
import {DisplayHomePage} from "../controllers/index";

/* Display home page. */
router.get('/', DisplayHomePage);

/* Display home page. */
router.get('/home', DisplayHomePage);

/* Display about page. */
router.get('/about', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
 
});

/* Display projects page. */
router.get('/projects', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Projects', page: 'projects' });
});

/* Display services page. */
router.get('/services', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Services', page: 'services' });
});

/* Display contact page. */
router.get('/contact', function(req: express.Request, res: express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact Me', page: 'contact' });
});

export default router;