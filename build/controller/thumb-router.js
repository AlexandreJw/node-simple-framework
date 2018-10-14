"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ThumbController =
/*#__PURE__*/
function () {
  function ThumbController() {
    _classCallCheck(this, ThumbController);
  }

  _createClass(ThumbController, [{
    key: "index",
    value: function index() {
      return (
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(ctx) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return ctx.render('index.html', {
                      title: 'Tommy'
                    });

                  case 2:
                    ctx.body = _context.sent;

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "star",
    value: function star() {
      return (
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2(ctx) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!ctx.request.headers['x-pjax']) {
                      _context2.next = 4;
                      break;
                    }

                    ctx.body = '<x-star></x-star>';
                    _context2.next = 7;
                    break;

                  case 4:
                    _context2.next = 6;
                    return ctx.render('star.html', {
                      title: '星星点赞'
                    });

                  case 6:
                    ctx.body = _context2.sent;

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x2) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "praise",
    value: function praise() {
      return (
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3(ctx) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (!ctx.request.headers['x-pjax']) {
                      _context3.next = 4;
                      break;
                    }

                    ctx.body = '<x-praise></x-praise>';
                    _context3.next = 7;
                    break;

                  case 4:
                    _context3.next = 6;
                    return ctx.render('index.html', {
                      title: '大拇指点赞'
                    });

                  case 6:
                    ctx.body = _context3.sent;

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          return function (_x3) {
            return _ref3.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "advertisement",
    value: function advertisement() {
      return (
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4(ctx) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    ctx.body = "<div style='height: 200px;background: #b9511b'>aaaaaaaaaaaa</div>";

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          return function (_x4) {
            return _ref4.apply(this, arguments);
          };
        }()
      );
    }
  }]);

  return ThumbController;
}();

module.exports = new ThumbController();