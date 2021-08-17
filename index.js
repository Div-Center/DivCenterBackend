'use strict';

const server = require('./src/server.js');

// Setup

// require('dotenv').config();
// const express = require('express');
// const error404 = require('./error-handlers/404');
// const error500 = require('./src/error-handlers/500')
// const routes = require('./src/routes/routes')
// const app = express();


const PORT = process.env.PORT || 3000;

server.start(PORT);