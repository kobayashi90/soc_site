"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = require("sequelize");

var searchPage = function searchPage(args, options, db) {
  var limit = args.limit,
      page = args.page,
      model = args.model;

  if (limit !== undefined) {
    options.limit = limit;
    options.offset = limit * page;
  }

  return db.models[model].findAndCountAll(options);
};

var info = {
  classes: ['Game', 'Animation']
};
var _default = {
  Query: {
    Album: function Album(parent, _ref, _ref2) {
      var id = _ref.id;
      var db = _ref2.db;
      return db.models.ost.findByPk(id);
    },
    searchAlbums: function searchAlbums(parent, args, _ref3) {
      var _where;

      var db = _ref3.db;
      var _args$title = args.title,
          title = _args$title === void 0 ? '' : _args$title,
          _args$classes = args.classes,
          classes = _args$classes === void 0 ? info.classes : _args$classes,
          limit = args.limit,
          _args$page = args.page,
          page = _args$page === void 0 ? 0 : _args$page,
          _args$order = args.order,
          order = _args$order === void 0 ? ['createdAt'] : _args$order,
          _args$mode = args.mode,
          mode = _args$mode === void 0 ? 'DESC' : _args$mode,
          _args$status = args.status,
          status = _args$status === void 0 ? ['show'] : _args$status;
      var titleWords = title.split(' ');
      return searchPage({
        limit: limit,
        page: page,
        model: 'ost'
      }, {
        where: (_where = {}, (0, _defineProperty2["default"])(_where, _sequelize.Op.or, [(0, _defineProperty2["default"])({}, _sequelize.Op.and, titleWords.map(function (t) {
          return {
            title: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(t, "%"))
          };
        })), (0, _defineProperty2["default"])({}, _sequelize.Op.and, titleWords.map(function (t) {
          return {
            subTitle: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(t, "%"))
          };
        }))]), (0, _defineProperty2["default"])(_where, "status", (0, _defineProperty2["default"])({}, _sequelize.Op["in"], status)), _where),
        include: [{
          model: db.models["class"],
          where: {
            name: (0, _defineProperty2["default"])({}, _sequelize.Op["in"], classes)
          }
        }],
        order: order.map(function (o) {
          return [o, mode];
        })
      }, db);
    }
  }
};
exports["default"] = _default;