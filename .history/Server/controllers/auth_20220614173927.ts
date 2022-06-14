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
            if(err)
            {
            console.error(err);
            res.end(err);
        }
        return res.redirect('/business-list');
    });
        
    }) (req, res, next);
}
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    //intantiate user
    let newUser = new User({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " "+ req.body.lastName
    })
    User.register(newUser, req.body.password, function(err)
    {
        if(err)
        {
            if(err.name =="UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error!');
            }
            else
            {

            console.error(err.name);
            req.flash('registerMessage', 'Server Error!');            
            }
            return res.redirect('/register')
        }
        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/business-list')
        });
    });
};
export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut();

    res.redirect('')
    
}
