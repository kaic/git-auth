require('console.table')
const Box = require('cli-box')
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

function header(text) {
  console.log(`\n${chalk.yellow(text)}\n`)
}

function json(obj) {
  console.log(JSON.stringify(obj, null, 2))
}

function table(obj) {
  console.table(obj)
}

function box(text) {
  const box = Box('45x10', {
    text: text,
    stretch: true,
    autoEOL: false,
    vAlign: 'center',
    hAlign: 'center'
  })

  console.log(box.toString())
}

module.exports = {
  box,
  json,
  table,
  error,
  header,
  success,
  message
}
