"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Download = sequelize.define('download', {
    title: DataTypes.STRING,
    small: DataTypes.BOOLEAN
  });
  return Download;
};