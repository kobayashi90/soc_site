"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Disc = sequelize.define('disc', {
    number: DataTypes.INTEGER,
    body: DataTypes.TEXT
  });
  return Disc;
};