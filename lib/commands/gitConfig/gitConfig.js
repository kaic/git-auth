const logger = require('../../utils/logger')
const git = require('../../git')
const prompt = require('../../prompt')

async function getUserName() {
  let gitUserName = await git.config.getUserName()
  if (gitUserName) logger.success(`Hello ${gitUserName}`)
  else {
    logger.error(`You havent set your git username yetm lets do it`)

    const newGitUserName = await prompt.name.run()

    try {
      gitUserName = await git.config.setUserName(newGitUserName)

      logger.success(`Your new git username: ${newGitUserName}`)
    } catch (error) {
      logger.error(error)
    }
  }
}

module.exports = {
  getUserName
}
