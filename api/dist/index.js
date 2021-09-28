"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _apolloServer = require("apollo-server");

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

var _path = _interopRequireDefault(require("path"));

var _sequelize = _interopRequireDefault(require("sequelize"));

var _glob = _interopRequireDefault(require("glob"));

var _clsHooked = _interopRequireDefault(require("cls-hooked"));

var _relations = _interopRequireDefault(require("./sequelize/relations"));

_dotenv["default"].config({
  path: '../.env'
});

var db = new _sequelize["default"](require('./config/sequelize.json')[process.env.NODE_ENV]);

var _path$parse = _path["default"].parse(__dirname),
    base = _path$parse.base;

var server = new _apolloServer.ApolloServer({
  typeDefs: (0, _merge.mergeTypeDefs)((0, _loadFiles.loadFilesSync)("".concat(base, "/graphql/schemas"))),
  resolvers: (0, _merge.mergeResolvers)((0, _loadFiles.loadFilesSync)("".concat(base, "/graphql/resolvers"))),
  context: function context() {
    return {
      db: db
    };
  }
});

_sequelize["default"].useCLS(_clsHooked["default"].createNamespace('trans-namespace'));

_glob["default"].sync("".concat(base, "/sequelize/models/*")).forEach(function (e) {
  return require(e.replace(base, '.'))(db);
});

(0, _relations["default"])(db);
startServer();

function startServer() {
  return _startServer.apply(this, arguments);
}

function _startServer() {
  _startServer = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var _yield$server$listen, url;

    return _regenerator["default"].wrap(function _callee$(_context) {
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