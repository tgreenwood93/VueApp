const AuthenticationContoller = require('./controllers/AuthenticationContoller')

module.exports = (app) => {
  app.post('/register',
    AuthenticationContoller.register)
}
