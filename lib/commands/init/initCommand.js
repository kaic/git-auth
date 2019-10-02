const auth = require('../auth')
const chalk = require('chalk')
const utils = require('../../utils')
const prompt = require('../../prompt')
const gitConfig = require('../gitConfig')

const packageInfo = require('../../../package.json')

async function init(env, options) {
  const boxText = chalk.blue.bold(`
  Welcome to Git Auth 🔒
  \nVersion - ${packageInfo.version}
  \nLet's setup your configuration`)
  utils.logger.box(boxText)

  // refactor
  await gitConfig.getUserName()
  await gitConfig.getUserEmail()

  utils.logger.message(
    `First, let's create your first authentication to allow you to use others commands 👇`
  )

  const authNickname = await prompt.authNickname.run()

  const payload = {}
  const authType = await prompt.authTypeSelect.run()
  if (authType === 'Token') payload.token = await prompt.token.run()
  else if (authType === 'User and Password') {
    payload.username = await prompt.username.run()
    payload.password = await prompt.password.run()
  }

  auth.newAuth(authNickname, authType, payload)

  await prompt.overwriteGitCloneToogle.run()
}

module.exports = init
