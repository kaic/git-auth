const { Input } = require('enquirer')

const prompt = new Input({
  message: 'Enter with your token',
  initial: ''
})

module.exports = prompt
