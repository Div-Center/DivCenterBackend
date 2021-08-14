'use strict';

//express server
// const {Server} = require(express);
const cors = require('cors');
const express = require('express');
const app = express();
const httpServer = require('http').createServer(app);

// error Resources
const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/auth/routes.js');


//socketServer
const chat = server.of('/chat');