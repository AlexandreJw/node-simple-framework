const Koa  = require('koa')
const router = require('koa-simple-router')
const controllerInit = require('./controller/index-router')
const render = require('koa-swig');
const co = require('co');
const config = require('./config/config')
const serve = require('koa-static')
let app = new Koa()

app.use(serve(config.get('pubilcDir')));
app.context.render = co.wrap(render({
  root: config.get('viewsDir'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html'
}));

controllerInit.init(app, router)

app.listen(3000, () => {
  console.info('Server start')
})
module.exports = app