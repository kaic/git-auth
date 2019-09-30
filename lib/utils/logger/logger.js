const chalk = require('chalk')

function error(text) {
  console.error(`❌ ${chalk.red.bold(text)}`)
}

function success(text) {
  console.log(`✅ ${chalk.green.bold(text)}`)
}

module.exports = {
  error,
  success
}
