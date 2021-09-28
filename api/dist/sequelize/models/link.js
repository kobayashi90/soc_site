"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Link = sequelize.define('link', {
    url: DataTypes.STRING,
    directUrl: DataTypes.STRING,
    provider: DataTypes.STRING,
    custom: DataTypes.STRING
  });
  return Link;
};