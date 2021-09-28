"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Game = sequelize.define('game', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    releaseDate: DataTypes.DATEONLY
  }, {
    freezeTableName: true
  });
  return Game;
};