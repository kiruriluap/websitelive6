
import createError from 'http-errors';
import express, { NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//let cors =require('cors;')

//import db package
import mongoose from 'mongoose';

// import modules
import session from 'express-session';
import passport from 'passport';
import passportLocal from 'passport-local';
import flash from 'connect-flash';

let passportJWT = require('passport-jwt')
let JWTStrategy = passportJWT.Strategy;
let ExtractJWT =passportJWT.ExtractJwt;


//modules for JWT
import cors from 'cors';

//DIFINE our auth objects
let localStrategy = passportLocal.Strategy;

import User from '../Models/user';

//import the router data
import indexRouter from '../Routes/index'; 
import businessListRouter from '../Routes/business-list';
import authRouter from '../Routes/auth';

const app = express();

//DB configuration
import * as DBConfig from './db';
mongoose.connect(DBConfig.LocalURI);
const db = mongoose.connection;// alias for the connection

//step 3- listen for connections or errors
db.on("open", function()
{
  console.log('Connected to MongoDB at: ${DBConfig.HostName}');
});

db.on("error", function()
{
  console.error('Connection error');
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


app.use(cors());


app.use(session({
  secret: DBConfig.Secret,
  saveUninitialized: false,
  resave: false
}));

//set up flash
app.use(flash());

//initialize
app.use(passport.initialize());
app.use(passport.session());

//imprement auth
passport.use(User.createStrategy());

//set up serialization
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey= DB.Secret;

let strategy = new JWTStrategy(jwtOptions, (jwt_payload, done) => {
  User.findById(jwt_payload.id)
  .then(user => {
    return done(null, user);
  })
  .catch(err =>{
    return done(err, false);
  });
});




//use routes
app.use('/', indexRouter);
app.use('/', businessListRouter);
app.use('/', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) 
{
  next(createError(404));
});

// error handler
app.use(function(err: createError.HttpError, req: express.Request, res: express.Response, next: NextFunction) 
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;