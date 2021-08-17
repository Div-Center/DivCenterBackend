'use strict';

require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const { Sequelize, DataTypes } = require('sequelize');

const userSchema = require('./user.schema.js');



// Heroku needs this to run Sequelize
let sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    }
  }
});

const user = userSchema(sequelize, DataTypes);


module.exports = {
  db: sequelize,
  user: user,
}
