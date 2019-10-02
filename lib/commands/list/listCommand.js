const utils = require('../../utils')

async function list(env, options) {
  const authList = utils.fs.openStorageFile()

  utils.logger.table(authList.entries)

  /* authList.entries.forEach(entry => {
    utils.logger.message(`${entry.name} - ${entry.type} | `)
  }) */
}

module.exports = list
