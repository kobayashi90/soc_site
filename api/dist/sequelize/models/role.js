"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Role = sequelize.define('role', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    permissions: DataTypes.JSON
  });
  return Role;
};