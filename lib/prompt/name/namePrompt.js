const { Input } = require('enquirer')

const prompt = new Input({
  message: 'What is your name?',
  initial: ''
})

module.exports = prompt
