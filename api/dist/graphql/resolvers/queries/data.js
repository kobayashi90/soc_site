"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  Query: {
    Album: function Album(parent, _ref, _ref2) {
      var id = _ref.id;
      var db = _ref2.db;
      return db.models.ost.findByPk(id);
    }
  }
};
exports["default"] = _default;