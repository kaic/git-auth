#!/usr/bin/env node

const program = require('commander')
const commands = require('../lib/commands')

program.version('0.0.0')

program
  .command('init')
  .description('run setup for git auth')
  .action(commands.init)

program.parse(process.argv)
