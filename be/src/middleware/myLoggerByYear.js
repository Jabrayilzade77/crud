export const myLoggerByYear = function (req, res, next) {
    console.log('LOGGED',new Date().getFullYear())
    next()
  }