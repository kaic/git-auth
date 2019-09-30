const gitConfig = require('../gitConfig')
const prompt = require('../../prompt')
const utils = require('../../utils')

async function init(env, options) {
  await gitConfig.getUserName()
  const authType = await prompt.authTypeSelect.run()

  if (authType === 'Token') await prompt.token.run()
  else if (authType === 'User and Password')
    await prompt.usernameAndPassword.run()

  const authNickname = await prompt.authNickname.run()

  utils.logger.success(authNickname)
}

module.exports = init
