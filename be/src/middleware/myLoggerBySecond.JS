export const myLoggerBySecond = function (req, res, next) {
    console.log('LOGGED',new Date().getSeconds())
    next()
  }