const model = require('../model/model')

class LikeController {
  constructor () {
  }
  updataNum () {
    return async (ctx) => {
      ctx.body = await model.updateNum()
    }
  }
}

module.exports = new LikeController()