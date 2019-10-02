const utils = require('../../utils')

async function list(env, options) {
  const authList = utils.fs.openStorageFile()

  const tokenAuths = authList.entries.filter(entry => entry.type === 'Token')
  const userAndPassAuths = authList.entries.filter(
    entry => entry.type === 'User and Password'
  )
  tokenAuths.forEach(a => delete a.type)
  userAndPassAuths.forEach(a => delete a.type)

  utils.logger.header('🔒 Token')
  utils.logger.table(tokenAuths)
  utils.logger.header('🔑 User and Password')
  utils.logger.table(userAndPassAuths)
}

module.exports = list
