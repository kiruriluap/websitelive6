import express from 'express';

// passport fun
import passport from 'passport';

// include user model for authentification
import User from '../Models/user';

//display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title})
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}

//processing
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
