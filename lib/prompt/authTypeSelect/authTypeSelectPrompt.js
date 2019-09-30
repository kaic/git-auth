const { Select } = require('enquirer')

const prompt = new Select({
  name: 'authType',
  message: 'How would you like to authenticate? You can add more later',
  choices: ['User and Password', 'Token']
})

module.exports = prompt
