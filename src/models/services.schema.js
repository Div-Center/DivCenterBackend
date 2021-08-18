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
      defaultValue: 'Misc',
    },
    price: {
      type: DataTypes.INTEGER,
      required: true,
    },
    details: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    }
  })
}
