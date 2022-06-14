import express from 'express';

// passport fun
import passport from 'passport';

// include user model for authentification
import User from '../Models/user';

//display functions
export function DisplayLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: '' });
}

export function DisplayRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: ''});
}

//processing
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    passport.authenticate('local')
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
