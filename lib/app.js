const express = require('express'),
      bodyParser = require('body-parser'),
      helmet = require('helmet'),
      cookieParser = require('cookie-parser'),
      favicon = require('serve-favicon'),
      path = require('path'),
      app = express();

let baseURL = process.env.NODE_ENV == 'production'
? 'https://originalportfolio.herokuapp.com/' : 'http://localhost:5000/';

app.set('views','./public');
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


// allow other modules to use the server
module.exports = app;