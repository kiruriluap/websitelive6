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
    passport.authenticate('local', function(err, user, info)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }
        if(!user)
        {
            req.flash('loginMessage', 'Authentication Error, Try again!');
            return res.redirect('./login');
        }
        req.login(user, function(err)
        {
            console.
        })
    })
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    
}
