"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var thumb = require('./thumb-router');

var likeC = require('./likea-router');

var ControllerInit =
/*#__PURE__*/
function () {
  function ControllerInit() {
    _classCallCheck(this, ControllerInit);
  }

  _createClass(ControllerInit, [{
    key: "init",
    value: function init(app, router) {
      app.use(router(function (_) {
        _.get('/index/index', thumb.index());

        _.get('/like', likeC.updataNum());

        _.get('/index/star', thumb.star());

        _.get('/index/praise', thumb.praise());

        _.get('/index/adv', thumb.advertisement());
      }));
    }
  }]);

  return ControllerInit;
}();

module.exports = new ControllerInit();