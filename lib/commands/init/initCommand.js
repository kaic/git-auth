const auth = require('../auth')
const chalk = require('chalk')
const utils = require('../../utils')
const prompt = require('../../prompt')
const password = require('../password')
const gitConfig = require('../gitConfig')

const packageInfo = require('../../../package.json')

async function init(env, options) {
  const boxText = chalk.blue.bold(`
  Welcome to Git Auth 🔒
  \nVersion - ${packageInfo.version}`)
  utils.logger.box(boxText)

  await gitConfig.getUserName()
  await gitConfig.getUserEmail()

  utils.logger.message(
    `Let's setup your configuration
First, let's create your git-auth password`
  )

  await password.setPassword()

  const authNickname = await prompt.authNickname.run()

  const payload = {}
  const authType = await prompt.authTypeSelect.run()
  if (authType === 'Token') payload.token = await prompt.token.run()
  else if (authType === 'User and Password') {
    payload.username = await prompt.username.run()
    payload.password = await prompt.password.setNewAuthPass.run()
  }

  auth.newAuth(authNickname, authType, payload)

  await prompt.overwriteGitCloneToogle.run()
}

module.exports = init
