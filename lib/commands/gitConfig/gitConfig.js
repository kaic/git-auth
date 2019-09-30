const logger = require('../../utils/logger')
const git = require('../../git')
const prompt = require('../../prompt')

async function getUserName() {
  let gitUserName = await git.config.getUserName()
  if (gitUserName) logger.message(`Hello ${gitUserName}`)
  else {
    logger.error(`You haven't set your git username yet. Let's do it`)

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
