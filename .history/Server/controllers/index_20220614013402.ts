import express from 'express';

export function DisplayHomePage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Home', page: 'home' });
}
export function DisplayAboutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'About Me', page: 'about' });
}
export function DisplayProjectsPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Projects', page: 'projects' });
}
export function DisplayServicesPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Services', page: 'services' });
}
export function DisplayContactPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', { title: 'Contact Me', page: 'contact' });
}
/*** */
import Business from '../Models/Business';
export function DisplayBusinessList(req: express.Request, res: express.Response, next: express.NextFunction)
{
    Business.find()
}