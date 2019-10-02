const auth = require('../auth')
const chalk = require('chalk')
const utils = require('../../utils')
const prompt = require('../../prompt')
const gitConfig = require('../gitConfig')

const packageInfo = require('../../../package.json')

async function init(env, options) {
  const gitUserName = await gitConfig.getUserName()
  const gitUserEmail = await gitConfig.getUserEmail()

  const boxText = chalk.blue.bold(`Hello ${gitUserName} - ${gitUserEmail}
  \nWelcome to Git Auth 🔒
  \nVersion - ${packageInfo.version}
  \n
  \nLet's setup your configuration`)
  utils.logger.box(boxText)

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
