const createError = require('http-errors');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');

const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bodyParser = require('body-parser');
const app = express();

// app.get('*', (req, res, next) => {
//     if (req.headers["x-forwarded-proto"] === "https") {
//         return next();
//     }
//     res.redirect("https://" + req.headers.host + req.url);
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/node_modules/bootstrap', express.static(__dirname + '/node_modules/bootstrap'));
app.use('/node_modules/font-awesome', express.static(__dirname + '/node_modules/font-awesome'));
app.use('/node_modules/animate.css', express.static(__dirname + '/node_modules/animate.css'));
app.use('/node_modules/wowjs', express.static(__dirname + '/node_modules/wowjs'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
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

module.exports = app;
