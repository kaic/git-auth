const { Password } = require('enquirer')
const utils = require('../../utils')

async function getPassword() {
  const passwordPrompt = new Password({
    message: 'Enter with your new password',
    initial: ''
  })

  const confirmationPrompt = new Password({
    message: 'Confirm your new password',
    initial: ''
  })

  const password = await passwordPrompt.run()
  const confirmation = await confirmationPrompt.run()

  if (password === confirmation) return password
  else return null
}

async function run() {
  let password = await getPassword()
  while (!password) {
    utils.logger.error('The passwords doesnt match, lets try again')
    password = await getPassword()
  }
  return password
}

module.exports = { run }
