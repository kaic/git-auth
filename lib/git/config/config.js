const Config = require('nodegit').Config

async function getUserName() {
  const config = await Config.openDefault()

  try {
    const userInfo = await config.getStringBuf('user.name')

    return userInfo
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
    console.log(error)
  }
}

module.exports = {
  getUserName,
  setUserName
}
