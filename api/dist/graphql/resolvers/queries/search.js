"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sequelize = require("sequelize");

var _info = _interopRequireDefault(require("../../../config/info.json"));

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

var _default = {
  Query: {
    searchAlbum: function searchAlbum(parent, args, _ref) {
      var _where;

      var db = _ref.db;
      var _args$title = args.title,
          title = _args$title === void 0 ? '' : _args$title,
          _args$classes = args.classes,
          classes = _args$classes === void 0 ? _info["default"].classes : _args$classes,
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
    },
    searchAlbumByArtist: function () {
      var _searchAlbumByArtist = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, _ref4, _ref5) {
        var name, _ref4$classes, classes, limit, _ref4$page, page, _ref4$order, order, _ref4$mode, mode, _ref4$status, status, db;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref4.name, _ref4$classes = _ref4.classes, classes = _ref4$classes === void 0 ? _info["default"].classes : _ref4$classes, limit = _ref4.limit, _ref4$page = _ref4.page, page = _ref4$page === void 0 ? 0 : _ref4$page, _ref4$order = _ref4.order, order = _ref4$order === void 0 ? ['createdAt'] : _ref4$order, _ref4$mode = _ref4.mode, mode = _ref4$mode === void 0 ? 'DESC' : _ref4$mode, _ref4$status = _ref4.status, status = _ref4$status === void 0 ? ['show'] : _ref4$status;
                db = _ref5.db;
                return _context.abrupt("return", searchPage({
                  limit: limit,
                  page: page,
                  model: 'ost'
                }, {
                  where: {
                    status: (0, _defineProperty2["default"])({}, _sequelize.Op["in"], status)
                  },
                  include: [{
                    model: db.models["class"],
                    where: {
                      name: (0, _defineProperty2["default"])({}, _sequelize.Op["in"], classes)
                    }
                  }, {
                    model: db.models.artist,
                    where: {
                      name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
                    }
                  }],
                  order: order.map(function (o) {
                    return [o, mode];
                  })
                }, db));

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchAlbumByArtist(_x, _x2, _x3) {
        return _searchAlbumByArtist.apply(this, arguments);
      }

      return searchAlbumByArtist;
    }(),
    searchAnimation: function searchAnimation(parent, _ref6, _ref7) {
      var _ref6$title = _ref6.title,
          title = _ref6$title === void 0 ? '' : _ref6$title,
          limit = _ref6.limit,
          _ref6$page = _ref6.page,
          page = _ref6$page === void 0 ? 0 : _ref6$page,
          _ref6$order = _ref6.order,
          order = _ref6$order === void 0 ? 'createdAt' : _ref6$order,
          _ref6$mode = _ref6.mode,
          mode = _ref6$mode === void 0 ? 'DESC' : _ref6$mode;
      var db = _ref7.db;
      return searchPage({
        title: title,
        limit: limit,
        page: page,
        model: 'animation'
      }, {
        where: {
          title: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(title, "%"))
        },
        order: [[order, mode]]
      }, db);
    },
    searchStudio: function searchStudio(parent, _ref8, _ref9) {
      var _ref8$name = _ref8.name,
          name = _ref8$name === void 0 ? '' : _ref8$name,
          limit = _ref8.limit,
          _ref8$page = _ref8.page,
          page = _ref8$page === void 0 ? 0 : _ref8$page,
          _ref8$order = _ref8.order,
          order = _ref8$order === void 0 ? 'createdAt' : _ref8$order,
          _ref8$mode = _ref8.mode,
          mode = _ref8$mode === void 0 ? 'DESC' : _ref8$mode;
      var db = _ref9.db;
      return searchPage({
        name: name,
        limit: limit,
        page: page,
        model: 'studio'
      }, {
        where: {
          name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
        },
        order: [[order, mode]]
      }, db);
    },
    searchGame: function searchGame(parent, _ref10, _ref11) {
      var _ref10$name = _ref10.name,
          name = _ref10$name === void 0 ? '' : _ref10$name,
          limit = _ref10.limit,
          _ref10$page = _ref10.page,
          page = _ref10$page === void 0 ? 0 : _ref10$page,
          _ref10$order = _ref10.order,
          order = _ref10$order === void 0 ? 'createdAt' : _ref10$order,
          _ref10$mode = _ref10.mode,
          mode = _ref10$mode === void 0 ? 'DESC' : _ref10$mode;
      var db = _ref11.db;
      return searchPage({
        name: name,
        limit: limit,
        page: page,
        model: 'game'
      }, {
        where: {
          name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
        },
        order: [[order, mode]]
      }, db);
    },
    searchSeries: function searchSeries(parent, _ref12, _ref13) {
      var _ref12$name = _ref12.name,
          name = _ref12$name === void 0 ? '' : _ref12$name,
          limit = _ref12.limit,
          _ref12$page = _ref12.page,
          page = _ref12$page === void 0 ? 0 : _ref12$page,
          _ref12$order = _ref12.order,
          order = _ref12$order === void 0 ? 'createdAt' : _ref12$order,
          _ref12$mode = _ref12.mode,
          mode = _ref12$mode === void 0 ? 'DESC' : _ref12$mode;
      var db = _ref13.db;
      return searchPage({
        name: name,
        limit: limit,
        page: page,
        model: 'series'
      }, {
        where: {
          name: (0, _defineProperty2["default"])({}, _sequelize.Op.like, "%".concat(name, "%"))
        },
        order: [[order, mode]]
      }, db);
    }
  }
};
exports["default"] = _default;