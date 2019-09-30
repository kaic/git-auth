const { BasicAuth } = require('enquirer')

const prompt = new BasicAuth({
  name: 'usernameAndPassword',
  message: 'Please enter your username and password',
  showPassword: false
})

module.exports = prompt
