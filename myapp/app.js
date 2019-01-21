var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var winston = require('winston');
const cors = require('cors');

var indexRouter = require('./controllers');
var login = require('./controllers/login');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())
app.use('/', (req, res, next) => res.json({ message: "hello world" }))
app.use('/', indexRouter);
app.use('/', login);
app.use('/test', (req, res, next) => {
  logger.info(`${new Date()}`)
  res.json({ message: 'test' })
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// Logger
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: `${__dirname}/logs/weblog.log` })
  ]
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

logger.info(`${new Date()}`)


module.exports = app;

