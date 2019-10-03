const bcrypt = require('bcrypt')
const utils = require('../../utils')
const prompt = require('../../prompt')

async function setPassword(password) {
  const newGitAuthPassword = await prompt.password.setNewGitAuthPass.run()
  const hash = bcrypt.hashSync(newGitAuthPassword, 10)
  utils.fs.writePasswordFile(hash)
}

module.exports = {
  setPassword
}
