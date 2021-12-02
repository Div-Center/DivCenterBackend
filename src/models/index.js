'use strict';

require('dotenv').config();

// const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
// const DATABASE_URL = 'postgres://postgres@localhost:5432';

// below: throw a !== instead of === if you want to connect to ElephantSQL database (instead of local)
const DATABASE_URL = process.env.NODE_ENV !== 'production' ? process.env.DATABASE_PROD : process.env.DATABASE_DEV

const { Sequelize, DataTypes } = require('sequelize');

const userSchema = require('./user.schema.js');
const servicesSchema = require('./services.schema.js')



// Heroku needs this to run Sequelize
let sequelize = new Sequelize(DATABASE_URL, {
  // dialectOptions: {
  //   ssl: {
  //     require: false,
  //     rejectUnauthorized: false,
  //   }
  // }
});

const user = userSchema(sequelize, DataTypes);
const services = servicesSchema(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  user: user,
  services: services,
}
