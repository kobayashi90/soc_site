"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Store = sequelize.define('store', {
    url: DataTypes.STRING,
    provider: DataTypes.STRING
  });
  return Store;
};