const express = require('express'),
      bodyParser = require('body-parser'),
      helmet = require('helmet'),
      cookieParser = require('cookie-parser'),
      favicon = require('serve-favicon'),
      path = require('path'),
      app = express();

app.set('view engine', "ejs");
app.set('views','./src');
app.use(cookieParser());
app.use(express.static('public'));
app.use(helmet.frameguard());
app.use(helmet.hsts());
app.use(helmet.noSniff());
//app.use(favicon(path.join(__dirname, '/assets', 'favicon.ico')));

// to extract form data from POST bodies
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  require('express-debug')(app);
}

app.set('port', process.env.PORT || 3000);

// allow other modules to use the server
//module.exports = app;