const { Input } = require('enquirer')

const prompt = new Input({
  message: 'How would you like to identify this authentication?',
  initial: ''
})

module.exports = prompt
