"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var OstHistory = sequelize.define('ostHistory', {
    updatedData: DataTypes.JSON
  });
  return OstHistory;
};