"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var config = sequelize.define('config', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    freezeTableName: true
  });
  return config;
};