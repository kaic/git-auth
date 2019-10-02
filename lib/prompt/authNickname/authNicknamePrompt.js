const { Input } = require('enquirer')

const prompt = new Input({
  message: 'How would you like to identify your authentication?',
  initial: ''
})

module.exports = prompt
