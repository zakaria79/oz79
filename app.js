var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var keys = require('./config/keys');

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

var contactsRouter = require('./routes/contacts');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const store = new MongoDBStore({
  uri: keys.mongodbURI,
  collection: 'sessions',
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: keys.sessionSecret,
    resave: false,
    saveUninitialized: false,
    store,
  }),
);

// app.use((req, res, next) => {
//   mongoose
//     .connect(keys.mongodbURI)
//     .then(result => next())
//     .catch(err => console.error(err));
// });

app.use('/contacts', contactsRouter);
app.use('/users', usersRouter);
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
