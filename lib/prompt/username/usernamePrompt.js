const { Input } = require('enquirer')

const prompt = new Input({
  message: 'What is your username?',
  initial: ''
})

module.exports = prompt
