var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./ts/tscOut/routes/products');
var manufacturersRouter = require('./ts/tscOut/routes/manufacturers');
var suppliersRouter =     require('./ts/tscOut/routes/suppliers');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use(app.router);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter); // products router //
app.use('/manufacturers', manufacturersRouter); // manufacturers router //
app.use('/suppliers', suppliersRouter);

// eAccount code //
var mangoose = require('mongoose');
mangoose.connect('mongodb://127.0.0.1:27017/eAccount');
//end eAccount code//

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

exports.mangoose = mangoose;
module.exports = app;
