!function(c) {
    function n(n) {
        for (var e, t, r = n[0], i = n[1], a = n[2], s = 0, o = []; s < r.length; s++) t = r[s], 
        l[t] && o.push(l[t][0]), l[t] = 0;
        for (e in i) Object.prototype.hasOwnProperty.call(i, e) && (c[e] = i[e]);
        for (_ && _(n); o.length; ) o.shift()();
        return p.push.apply(p, a || []), u();
    }
    function u() {
        for (var n, e = 0; e < p.length; e++) {
            for (var t = p[e], r = !0, i = 1; i < t.length; i++) {
                var a = t[i];
                0 !== l[a] && (r = !1);
            }
            r && (p.splice(e--, 1), n = s(s.s = t[0]));
        }
        return n;
    }
    var t = {}, l = {
        tag: 0
    }, p = [];
    function s(n) {
        if (t[n]) return t[n].exports;
        var e = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return c[n].call(e.exports, e, e.exports, s), e.l = !0, e.exports;
    }
    s.m = c, s.c = t, s.d = function(n, e, t) {
        s.o(n, e) || Object.defineProperty(n, e, {
            enumerable: !0,
            get: t
        });
    }, s.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        });
    }, s.t = function(e, n) {
        if (1 & n && (e = s(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
            enumerable: !0,
            value: e
        }), 2 & n && "string" != typeof e) for (var r in e) s.d(t, r, function(n) {
            return e[n];
        }.bind(null, r));
        return t;
    }, s.n = function(n) {
        var e = n && n.__esModule ? function() {
            return n.default;
        } : function() {
            return n;
        };
        return s.d(e, "a", e), e;
    }, s.o = function(n, e) {
        return Object.prototype.hasOwnProperty.call(n, e);
    }, s.p = "";
    var e = window.webpackJsonp = window.webpackJsonp || [], r = e.push.bind(e);
    e.push = n, e = e.slice();
    for (var i = 0; i < e.length; i++) n(e[i]);
    var _ = r;
    p.push([ "./src/pubilc/scripts/tag.es6", "common/vendor" ]), u();
}({
    "./src/pubilc/scripts/tag.es6": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.es6 */ "./src/pubilc/scripts/index.es6");\n\nvar f = new _index_es6__WEBPACK_IMPORTED_MODULE_0__["default"]();\nvar t = "";\nxtag.register(\'x-praise\', {\n  content: "<div class=\'hand\' id=\'thumb\'>" + "<div class=\'finger\'></div>" + "<div class=\'finger\'></div>" + "<div class=\'finger\'></div>" + "<div class=\'finger\'></div>" + "<div class=\'finger thumb\'></div>" + "<div class=\'arm\'></div>" + "</div>" + "<span class=\'hide\' id=\'animation\'>+1</span>",\n  methods: {\n    praise: function praise() {\n      var _this = this;\n\n      f.clickAction();\n\n      var animation = _this.querySelector("#animation");\n\n      animation.className = "hide num";\n      setTimeout(function () {\n        animation.className = "hide";\n      }, 800);\n    }\n  },\n  events: {\n    click: function click(e) {\n      var _this = this;\n\n      if (e.target.id == \'thumb\') {\n        if (t) {\n          clearTimeout(t);\n        }\n\n        t = setTimeout(function () {\n          _this.praise();\n        }, 500);\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/pubilc/scripts/tag.es6?');
    }
});