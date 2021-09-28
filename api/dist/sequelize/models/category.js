"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    freezeTableName: true
  });
  return Category;
};