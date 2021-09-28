"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return User;
};