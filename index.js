'use strict';

// 3rd Party Resources

require('dotenv').config();
const app = require('./src/server.js');
const { db } = require('./src/models/index.js');

db.sync().then(() => {
  app.start(process.env.PORT || 3000);
  
});