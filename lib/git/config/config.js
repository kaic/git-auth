const Config = require('nodegit').Config

async function getUserName() {
  const config = await Config.openDefault()

  try {
    const userName = await config.getStringBuf('user.name')

    return userName
  } catch (error) {
    return null
  }
}

async function getUserEmail() {
  const config = await Config.openDefault()

  try {
    const userEmail = await config.getStringBuf('user.email')

    return userEmail
  } catch (error) {
    return null
  }
}

async function setUserName(username) {
  const config = await Config.openDefault()

  try {
    const result = await config.setString('user.name', username)

    return result
  } catch (error) {
    return error
  }
}

async function setUserEmail(userEmail) {
  const config = await Config.openDefault()

  try {
    const result = await config.setString('user.email', userEmail)

    return result
  } catch (error) {
    return error
  }
}

module.exports = {
  getUserName,
  setUserName,
  getUserEmail,
  setUserEmail
}
