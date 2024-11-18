var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/model2024');
var session = require("express-session")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var models = require('./routes/models');


var app = express();

// view engine setup
app.engine('ejs',require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var MongoStore = require('connect-mongo');
app.use(session({
  secret: "Models",
  cookie:{maxAge:60*1000},
  proxy: true,
  resave: true,
  saveUninitialized: true,
  store: MongoStore.create({mongoUrl: 'mongodb://localhost/model2024'})
}))

app.use(function(req,res,next){
  req.session.counter = req.session.counter + 1 || 1
  next()
  })

  app.use(require("./middlewares/createMenu.js"))

  
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/models', models);



// обработка 404 ошибки и перенаправление на обработчик
// Обработчик 404 ошибки
app.use(function(req, res, next) {
  var err = new Error('Страница не найдена');
  err.status = 404;
  next(err);
});

// обработчик ошибок
app.use(function(err, req, res, next) {
  // устанавливаем локальные переменные, только вывод ошибки в разработке
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // рендерим страницу ошибки
  res.status(err.status || 500);
  
  // передаем заголовок "Model" и рендерим шаблон error.ejs
  res.render('error', { title: 'Error Page' });
});

module.exports = app;
