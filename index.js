var identity = require('identity')

module.exports = function inherit(len) {
  return function(d) {
    return new Array((len||1)+1)
      .join('0')
      .split('')
      .map(function(){
        return identity(d)
      })
  }
}