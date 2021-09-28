"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Album: {
    artists: function artists(parent, args, context, info) {
      return parent.getArtists();
    },
    classes: function classes(parent, args, context, info) {
      return parent.getClasses();
    },
    categories: function categories(parent, args, context, info) {
      return parent.getCategories();
    },
    platforms: function platforms(parent, args, context, info) {
      return parent.getPlatforms({
        order: ['name']
      });
    },
    games: function games(parent, args, context, info) {
      return parent.getGames();
    },
    downloads: function () {
      var _downloads = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", parent.getDownloads());

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function downloads(_x, _x2, _x3, _x4) {
        return _downloads.apply(this, arguments);
      }

      return downloads;
    }(),
    discs: function discs(parent, args, context, info) {
      return parent.getDiscs({
        order: [['number', 'ASC']]
      });
    },
    related: function related(parent, args, context, info) {
      return parent.getRelated();
    },
    stores: function stores(parent) {
      return parent.getStores();
    },
    animations: function animations(parent) {
      return parent.getAnimations();
    }
  },
  Category: {
    albums: function albums(parent) {
      return parent.getOsts();
    }
  },
  Class: {
    albums: function albums(parent) {
      return parent.getOsts();
    }
  },
  Download: {
    links: function () {
      var _links = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(parent, args, _ref, info) {
        var req, db, payload, donator, user, roles, perms;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                req = _ref.req, db = _ref.db, payload = _ref.payload;
                donator = false;

                if (!payload) {
                  _context2.next = 11;
                  break;
                }

                _context2.next = 5;
                return db.models.user.findByPk(payload.username);

              case 5:
                user = _context2.sent;
                _context2.next = 8;
                return user.getRoles();

              case 8:
                roles = _context2.sent;
                perms = roles.map(function (r) {
                  return r.permissions;
                }).flat();
                donator = perms.includes('SKIP_ADS');

              case 11:
                _context2.next = 13;
                return parent.getLinks();

              case 13:
                return _context2.abrupt("return", _context2.sent.map(function (l) {
                  var link = _objectSpread({}, l.dataValues);

                  if (!donator) link.directUrl = '/unauthorized';
                  return link;
                }));

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function links(_x5, _x6, _x7, _x8) {
        return _links.apply(this, arguments);
      }

      return links;
    }()
  },
  Game: {
    albums: function albums(parent, args, context, info) {
      return parent.getOsts();
    },
    series: function series(parent, args, context, info) {
      return parent.getSeries();
    },
    publishers: function publishers(parent, args, context, info) {
      return parent.getPublishers();
    },
    platforms: function platforms(parent, args, context, info) {
      return parent.getPlatforms({
        order: ['name']
      });
    }
  },
  Platform: {
    albums: function albums(parent) {
      return parent.getOsts();
    },
    games: function () {
      var _games = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(parent, args, _ref2) {
        var db, games;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                db = _ref2.db;
                _context3.next = 3;
                return db.models.game.findAll({
                  include: [db.models.platform]
                });

              case 3:
                games = _context3.sent;
                return _context3.abrupt("return", games.filter(function (g) {
                  return g.platforms.filter(function (p) {
                    return p.id === parent.id;
                  }).length > 0;
                }));

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function games(_x9, _x10, _x11) {
        return _games.apply(this, arguments);
      }

      return games;
    }()
  },
  Animation: {
    studios: function studios(parent) {
      return parent.getStudios();
    },
    albums: function albums(parent) {
      return parent.getOsts();
    }
  },
  Studio: {
    animations: function () {
      var _animations = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(parent, args, _ref3) {
        var db, animations;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                db = _ref3.db;
                _context4.next = 3;
                return db.models.animation.findAll({
                  include: [db.models.studio]
                });

              case 3:
                animations = _context4.sent;
                return _context4.abrupt("return", animations.filter(function (a) {
                  return a.studios.filter(function (p) {
                    return p.slug === parent.slug;
                  }).length > 0;
                }));

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function animations(_x12, _x13, _x14) {
        return _animations.apply(this, arguments);
      }

      return animations;
    }()
  },
  Series: {
    games: function games(parent, args, context, info) {
      return parent.getGames();
    }
  },
  Publisher: {
    games: function games(parent, args, context, info) {
      return parent.getGames();
    }
  },
  Disc: {
    album: function album(parent) {
      return parent.getOst();
    }
  },
  Query: {},
  Mutation: {}
};
exports["default"] = _default;