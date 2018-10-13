const path = require('path')
const config = new Map();
config.set('viewsDir', path.join(__dirname, '../', 'views'))
config.set('pubilcDir', path.join(__dirname, '../', 'pubilc'))
config.set('uri', 'http://127.0.0.1:9090/php+sql/index.php?id=29&num=190')
module.exports = config