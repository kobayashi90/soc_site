"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  var Ost = sequelize.define('ost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: DataTypes.STRING,
    subTitle: DataTypes.TEXT,
    releaseDate: DataTypes.DATEONLY,
    label: DataTypes.STRING,
    vgmdb: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.STRING,
      defaultValue: 'show'
    }
  }, {
    freezeTableName: true
  });
  return Ost;
};