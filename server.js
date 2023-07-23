const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes'); 
const Handlebars = require('handlebars');
const moment = require('moment');

Handlebars.registerHelper('formatDate', function(date, format) {
  return moment(date).format(format);
});


const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;