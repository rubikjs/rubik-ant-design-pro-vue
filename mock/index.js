const ERROR_CODE = {
  UNAUTHORIZED: 401,
}
module.exports = function (app) {
  app.get('/api/user', function (req, res) {
    res.json({
      name: 'Fancy',
      avatar: 'https://avatars0.githubusercontent.com/u/1636927?s=40&v=4',
      access: []
    })
  })
  app.get('/api/unauthorized', function (req, res) {
    res.status(ERROR_CODE.UNAUTHORIZED).send({
      message: '未授权!' ,
      code: ERROR_CODE.UNAUTHORIZED
    })
  })
  app.get('/api/login', function (req, res) {
    if (req.query.username !== 'admin' && req.query.username !== 'user') return res.status(500).send(`用户名是"admin or user"`)
    if (req.query.password !== 'ant.design') return res.status(500).send('密码是"ant.design"')
    res.json({
      token: 'token string'
    })
  })
}
