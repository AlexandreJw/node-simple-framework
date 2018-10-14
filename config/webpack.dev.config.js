var path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin') //CSS文件单独提取出来
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin') // 清空打包目录的插件
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin') //css压缩
const WebpackParallelUglifyPlugin = require('webpack-parallel-uglify-plugin') // js格式化-压缩
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html的插件
const LiveReloadPlugin = require('webpack-livereload-plugin');
const Manifest= require('webpack-manifest');
module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    index: [
      './src/pubilc/scripts/index.es6',
      './src/pubilc/scripts/indexadd.es6'
    ],
    tag: [
      './src/pubilc/scripts/tag.es6',
      './src/pubilc/scripts/star.es6'
    ]
  },
  output: {
    filename: 'pubilc/scripts/[name]-[hash:5].js',
    path: path.join(__dirname, '..', 'build')
  },
  module: {
    rules: [
      {test: /\.es6/, use: 'babel-loader'},
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },
  optimization: { //webpack4.x的最新优化配置项，用于提取公共代码
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
          reuseExistingChunk: true // 可设置是否重用该chunk（查看源码没有发现默认值）
        }
      }
    }
  },
  devtool: 'eval-source-map', // 指定加source-map的方式
  devServer: {
    inline:true,//打包后加入一个websocket客户端
    hot:true,//热加载
    contentBase: path.join(__dirname, "..", "build"), //静态文件根目录
    port: 3824, // 端口
    host: 'localhost',
    overlay: true,
    compress: false // 服务器返回浏览器的时候是否启动gzip压缩
  },
  watchOptions: {
    ignored: /node_modules/, //忽略不用监听变更的目录
    aggregateTimeout: 500, //防止重复保存频繁重新编译,500毫米内重复保存不打包
    poll:1000 //每秒询问的文件变更的次数
  },
  plugins: [
    new LiveReloadPlugin({
      appendScriptTag: true
    }),
    new ExtractTextPlugin('pubilc/css/[name].css'),
    new CleanWebpackPlugin(['build/pubilc'], {
      root: path.join(__dirname, '..'),
      exclude: ['manifest.json', 'vendor.dll.js'],
      verbose: true,
      dry: false
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {safe: true}
    }),
    new WebpackParallelUglifyPlugin({
      uglifyJS: {
        output: {
          beautify: true, //不需要格式化
          comments: false //不保留注释
        },
        compress: {
          warnings: false, // 在UglifyJs删除没有用到的代码时不输出警告
          drop_console: true, // 删除所有的 `console` 语句，可以兼容ie浏览器
          collapse_vars: true, // 内嵌定义了但是只用到一次的变量
          reduce_vars: true // 提取出出现多次但是没有定义成变量去引用的静态值
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: './views/layout.html',
      template: 'src/widget/layout.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './views/index.html',
      template: 'src/views/index.js',
      inject: false,
      chunks: ['vendor', 'index', 'tag'],
      cache:false
    }),
    new HtmlWebpackPlugin({
      filename: './widget/index.html',
      template: 'src/widget/index.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      filename: './views/star.html',
      template: 'src/views/star.js',
      inject: false,
      chunks: ['vendor', 'index', 'tag'],
      cache:false
    }),
    new HtmlWebpackPlugin({
      filename: './widget/star.html',
      template: 'src/widget/star.html',
      inject: false
    }),
    new Manifest({
      cache: [
        './pubilc/css/vendor.css'
      ],
      //Add time in comments.
      timestamp: true,
      // 生成的文件名字，选填
      // The generated file name, optional.
      filename:'cache.manifest',
      // 注意*星号前面用空格隔开
      network: [
        ' *'
      ],
      // 注意中间用空格隔开
      // manifest 文件中添加注释
      // Add notes to manifest file.
      headcomment: 'praisethumb4',
      master: ['./views/layout.html']
    })
  ]
}