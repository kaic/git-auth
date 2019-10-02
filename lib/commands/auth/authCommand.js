const utils = require('../../utils')

async function newAuth(name, type, payload) {
  const storage = utils.fs.openStorageFile()
  const newEntry = formatter(name, type, payload)
  utils.fs.writeStorageFile(storage, newEntry)
}

function formatter(name, type, payload) {
  const entry = {
    name,
    type
  }

  if (type === 'Token') entry.token = payload.token
  else {
    entry.username = payload.username
    entry.password = payload.password
  }

  return entry
}

async function auth(env, options) {
  console.log(options)
}

module.exports = {
  auth,
  newAuth
}
