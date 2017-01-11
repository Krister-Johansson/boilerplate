/**
 * Module dependencies.
 */
const express = require('express');
const logger = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const path = require('path');
/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.load({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Create Express server.
 */
const app = express()

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

app.get('/', homeController.index);

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env')); 
  console.log('\tPress CTRL-C to stop\n');
});

module.exports = app;
