"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Artist = sequelize.define('artist', {
    slug: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING
  }, {
    freezeTableName: true
  });
  return Artist;
};