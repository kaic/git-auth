const { Input } = require('enquirer')

const prompt = new Input({
  message: 'What is your email?',
  initial: ''
})

module.exports = prompt
