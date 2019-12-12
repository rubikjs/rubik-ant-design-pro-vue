const ERROR_CODE = {
  UNAUTHORIZED: 401,
}
module.exports = function (app) {
  app.get('/api/user', function (req, res) {
    res.json({
      'user': {
        name: 'Fancy',
        avatar: 'https://avatars0.githubusercontent.com/u/1636927?s=40&v=4',
      },
    })
  })
  app.get('/api/unauthorized', function (req, res) {
    res.status(ERROR_CODE.UNAUTHORIZED).send({
      message: '未授权!' ,
      code: ERROR_CODE.UNAUTHORIZED
    })
  })
}
