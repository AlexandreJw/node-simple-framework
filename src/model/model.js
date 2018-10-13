const rp = require('request-promise')
const config = require('../config/config')

class Model {
  constructor () {
    this.options = {
      url: config.get('uri'),
      methods: 'GET'
    }
  }
  updateNum () {
    return rp(this.options)
      .then(function (data) {
        return data
      })
      .catch(function (err) {
        return err
      })
  }
}

module.exports = new Model()