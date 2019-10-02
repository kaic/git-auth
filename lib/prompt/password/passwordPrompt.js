const { Password } = require('enquirer')

const prompt = new Password({
  message: 'What is your password?',
  initial: ''
})

module.exports = prompt
