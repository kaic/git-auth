const fs = require('fs')
const path = require('path')

const HOMEDIR = require('os').homedir()
const GIT_AUTH_DIR = path.join(HOMEDIR, '.git-auth/')
const STORAGE_FILE_PATH = path.join(GIT_AUTH_DIR, '.storage')
const INDEX_FILE_PATH = path.join(GIT_AUTH_DIR, '.index')
const PASSWORD_FILE_PATH = path.join(GIT_AUTH_DIR, '.secure')

function openStorageFile() {
  ensureStorageFile()

  return JSON.parse(fs.readFileSync(STORAGE_FILE_PATH))
}

function openIndexFile() {
  ensureIndexFile()

  return JSON.parse(fs.readFileSync(INDEX_FILE_PATH))
}

function createNewStorageFile(name, payload) {
  const newStorageFilePath = path.join(GIT_AUTH_DIR, `.${name}`)
  fs.writeFileSync(newStorageFilePath, JSON.stringify(payload))
}

function writeIndexFile(originalFile, payload) {
  originalFile.entries.push(payload)
  fs.writeFileSync(INDEX_FILE_PATH, JSON.stringify(originalFile))
}

function writePasswordFile(payload) {
  ensurePasswordFile()
  fs.writeFileSync(PASSWORD_FILE_PATH, payload)
}

function ensureGitAuthDir() {
  if (!fs.existsSync(GIT_AUTH_DIR)) {
    fs.mkdirSync(GIT_AUTH_DIR)
  }
}

function ensureStorageFile() {
  const defaultContent = { entries: [] }
  if (!fs.existsSync(STORAGE_FILE_PATH)) {
    fs.writeFileSync(STORAGE_FILE_PATH, JSON.stringify(defaultContent))
  }
}

function ensurePasswordFile() {
  if (!fs.existsSync(PASSWORD_FILE_PATH)) {
    fs.writeFileSync(PASSWORD_FILE_PATH, '')
  }
}

function ensureIndexFile() {
  const defaultContent = { entries: [] }
  if (!fs.existsSync(INDEX_FILE_PATH)) {
    fs.writeFileSync(INDEX_FILE_PATH, JSON.stringify(defaultContent))
  }
}

ensureGitAuthDir()

module.exports = {
  openIndexFile,
  writeIndexFile,
  openStorageFile,
  writePasswordFile,
  createNewStorageFile
}
