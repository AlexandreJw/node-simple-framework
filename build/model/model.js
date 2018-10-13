"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var rp = require('request-promise');

var config = require('../config/config');

var Model =
/*#__PURE__*/
function () {
  function Model() {
    _classCallCheck(this, Model);

    this.options = {
      url: config.get('uri'),
      methods: 'GET'
    };
  }

  _createClass(Model, [{
    key: "updateNum",
    value: function updateNum() {
      return rp(this.options).then(function (data) {
        return data;
      }).catch(function (err) {
        return err;
      });
    }
  }]);

  return Model;
}();

module.exports = new Model();