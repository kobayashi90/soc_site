"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Class = sequelize.define('class', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    freezeTableName: true
  });
  return Class;
};