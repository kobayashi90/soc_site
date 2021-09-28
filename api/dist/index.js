"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _apolloServer = require("apollo-server");

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

var _sequelize = _interopRequireDefault(require("sequelize"));

var _glob = _interopRequireDefault(require("glob"));

var _clsHooked = _interopRequireDefault(require("cls-hooked"));

var _relations = _interopRequireDefault(require("./sequelize/relations"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config({
  path: '../.env'
});

var db = new _sequelize["default"](require('./config/sequelize.json')[process.env.NODE_ENV]);
var server = new _apolloServer.ApolloServer({
  typeDefs: (0, _merge.mergeTypeDefs)((0, _loadFiles.loadFilesSync)('src/graphql/schemas')),
  resolvers: (0, _merge.mergeResolvers)((0, _loadFiles.loadFilesSync)('src/graphql/resolvers')),
  context: function context() {
    return {
      db: db
    };
  }
});

_sequelize["default"].useCLS(_clsHooked["default"].createNamespace('trans-namespace'));

_glob["default"].sync('src/sequelize/models/*').forEach(function (e) {
  return require(e.replace('src', '.'))(db);
});

(0, _relations["default"])(db);
startServer();

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _yield$server$listen, url;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return db.sync();

          case 2:
            _context.next = 4;
            return server.listen();

          case 4:
            _yield$server$listen = _context.sent;
            url = _yield$server$listen.url;
            console.log("\uD83D\uDE80  Server ready at ".concat(url));

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _startServer.apply(this, arguments);
}