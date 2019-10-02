require('console.table')
const chalk = require('chalk')

function error(text) {
  console.error(`\n❌ ${chalk.redBright.bold(text)}\n`)
}

function success(text) {
  console.log(`\n✔ ${chalk.green.bold(text)}\n`)
}

function message(text) {
  console.log(`\n${text}\n`)
}

function json(obj) {
  console.log(JSON.stringify(obj, null, 2))
}

function table(obj) {
  console.table(obj)
}

module.exports = {
  json,
  table,
  error,
  success,
  message
}
