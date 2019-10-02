const auth = require('../auth')
const utils = require('../../utils')
const prompt = require('../../prompt')
const gitConfig = require('../gitConfig')

async function init(env, options) {
  const gitUserName = await gitConfig.getUserName()
  const gitUserEmail = await gitConfig.getUserEmail()
  utils.logger.message(`Hello ${gitUserName} - ${gitUserEmail}`)

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
