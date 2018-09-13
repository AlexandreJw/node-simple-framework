const thumb = require('./thumb-router')
const likeC = require('./likea-router')
class ControllerInit {
  constructor () {
  }
  init (app, router) {
    app.use(router(_ => {
      _.get('/index/index',thumb.index())
      _.get('/like', likeC.updataNum())
    }))
  }
}
module.exports = new ControllerInit()