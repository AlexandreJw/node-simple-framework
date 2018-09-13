class ThumbController {
  constructor () {
  }
  index () {
    return async (ctx) => {
      ctx.body = await ctx.render('index.html',{title: 'Tommy'})
    }
  }
}
module.exports = new ThumbController()