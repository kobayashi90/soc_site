"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Platform = sequelize.define('platform', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: 'Game'
    }
  }, {
    freezeTableName: true
  });
  return Platform;
};