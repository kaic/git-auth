const fs = require('fs')
const path = require('path')

const HOMEDIR = require('os').homedir()
const GIT_AUTH_DIR = path.join(HOMEDIR, '.git-auth/')
const STORAGE_FILE_PATH = path.join(GIT_AUTH_DIR, '.storage')

function openStorageFile() {
  ensureGitAuthDir()
  ensureStorageFile()

  return JSON.parse(fs.readFileSync(STORAGE_FILE_PATH))
}

function writeStorageFile(originalFile, payload) {
  originalFile.entries.push(payload)
  fs.writeFileSync(STORAGE_FILE_PATH, JSON.stringify(originalFile))
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

module.exports = {
  openStorageFile,
  writeStorageFile
}
