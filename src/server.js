'use strict';

const express = require('express');
const cors = require('cors');

const servicesRoutes = require('./routes/services.js')
const userRoutes = require('./routes/user.js')

const app = express();

app.use(cors());
app.use(express.json());


app.use(servicesRoutes);
app.use(userRoutes);

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => console.log(`🚦 app is up and running on ${PORT} 🚦`));
  }
}
