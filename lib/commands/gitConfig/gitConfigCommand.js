const logger = require('../../utils/logger')
const git = require('../../git')
const prompt = require('../../prompt')

async function getUserName() {
  const gitUserName = await git.config.getUserName()
  if (gitUserName) return gitUserName
  else {
    logger.error(`You haven't set your git name yet. Let's do it`)

    const newGitUserName = await prompt.name.run()

    try {
      await git.config.setUserName(newGitUserName)
      logger.success(`Your new git name: ${newGitUserName}`)

      return newGitUserName
    } catch (error) {
      logger.error(error)
    }
  }
}

async function getUserEmail() {
  const gitUserEmail = await git.config.getUserEmail()
  if (gitUserEmail) return gitUserEmail
  else {
    logger.error(`You haven't set your git user email yet. Let's do it`)

    const newGitUserEmail = await prompt.email.run()

    try {
      await git.config.setUserEmail(newGitUserEmail)
      logger.success(`Your new git user email: ${newGitUserEmail}`)

      return newGitUserEmail
    } catch (error) {
      logger.error(error)
    }
  }
}

module.exports = {
  getUserName,
  getUserEmail
}
