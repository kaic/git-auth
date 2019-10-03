const utils = require('../../utils')
// const crypt = require('../../utils/crypt/crypt')

async function newAuth(name, type, payload) {
  /* create index file with
      name of auth
      type
      created at
      active
      archiveName

    dont allow save two auths with same name
    
    save auth's info in separate files
  */
  const index = utils.fs.openIndexFile()
  //  const entry = formatter(name, type, payload)
  const auth = {
    name,
    type,
    active: false,
    createdAt: new Date()
  }

  utils.fs.writeIndexFile(index, auth)
  // utils.fs.writeStorageFile(storage, entry)
}

/* function formatter(name, type, payload) {
  const entry = {
    name,
    type
  }

  if (type === 'Token') entry.token = hash(payload.token)
  else {
    entry.username = payload.username
    entry.password = hash(payload.password)
  }

  return entry
} */

/* async function hash(content) {
  const key = crypt.getRandomKey()
  const ciphertext = crypt.encrypt(content, key)

  console.log(ciphertext)

  const decryptOutput = crypt.decrypt(ciphertext, key)

  console.log(decryptOutput)

  // generate hash key from user password (only for git-auth)

  return ciphertext
} */

module.exports = {
  newAuth
}
