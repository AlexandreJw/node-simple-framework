class ThumbController {
  constructor () {
  }

  index () {
    return async (ctx) => {
      ctx.body = await ctx.render('index.html', {title: 'Tommy'})
    }
  }

  star () {
    return async (ctx) => {
      if (ctx.request.headers['x-pjax']) {
        ctx.body = '<x-star></x-star>'
      } else {
        ctx.body = await ctx.render('star.html', {
          title: '星星点赞'
        })
      }
    }
  }

  praise () {
    return async (ctx) => {
      if (ctx.request.headers['x-pjax']) {
        ctx.body = '<x-praise></x-praise>'
      } else {
        ctx.body = await ctx.render('index.html', {
          title: '大拇指点赞'
        })
      }
    }
  }
  advertisement () {
    return async (ctx) => {
      ctx.body = "<div style='height: 200px;background: #b9511b'>aaaaaaaaaaaa</div>"
    }
  }
}

module.exports = new ThumbController()