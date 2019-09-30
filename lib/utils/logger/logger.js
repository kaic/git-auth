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

module.exports = {
  error,
  success,
  message
}
