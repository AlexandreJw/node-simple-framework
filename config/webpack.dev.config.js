const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin');
// the path(s) that should be cleaned
let pathsToClean = [
  path.join(__dirname, '../build/pubilc/script/*.js')
]

// the clean options to use
let cleanOptions = {
  root:     '/full/webpack/root/path',
  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
}
module.exports = {
  entry: {
    index: [
      path.join(__dirname, '../src/pubilc/scripts/index.es6'),
      path.join(__dirname, '../src/pubilc/scripts/indexadd.es6'),
    ],
    tag: [
      path.join(__dirname, '../src/public/scripts/tag.es6'),
    ]
  },
  output: {
    filename: 'public/scripts/[name]-[hash:5].js',
    path: path.join(__dirname, '../build')
  },
  plugins:[
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
  ]
}