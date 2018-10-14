"use strict";

require('@babel/polyfill');

var Koa = require('koa');

var router = require('koa-simple-router');

var controllerInit = require('./controller/index-router');

var render = require('koa-swig');

var co = require('co');

var config = require('./config/config');

var serve = require('koa-static');

var app = new Koa();
app.use(serve(config.get('pubilcDir')));
app.context.render = co.wrap(render({
  root: config.get('viewsDir'),
  autoescape: true,
  cache: false,
  // disable, set to false
  ext: 'html'
}));
controllerInit.init(app, router);
app.listen(3000, function () {
  console.info('Server start');
});
module.exports = app;