const thumb = require('./thumb-router')
const likeC = require('./likea-router')
class ControllerInit {
  constructor () {
  }
  init (app, router) {
    app.use(router(_ => {
      _.get('/index/index',thumb.index())
      _.get('/like', likeC.updataNum())
      _.get('/index/star', thumb.star());
      _.get('/index/praise', thumb.praise());
      _.get('/index/adv', thumb.advertisement());
    }))
  }
}
module.exports = new ControllerInit()