'use strict';

module.exports = (sequelize, DataTypes) => {

  // defining the column data
  return sequelize.define('Services', {
    name: {
      type: DataTypes.STRING,
      required: true,
    },
    freelancer: {
      type: DataTypes.INTEGER,
      required: false,
    },
    title: {
      type: DataTypes.STRING,
      required: false,
    },
    category: {
      type: DataTypes.STRING,
      required: true,
      defaultValue: true,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    details: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  })
}
