#!/usr/bin/env node

const program = require('commander')
const commands = require('../lib/commands')

program.version('0.0.0')

program
  .command('init')
  .description('run setup for git auth')
  .action(commands.init)

program
  .command('auth')
  .description('git-auth authentication')
  .option('-l, --list', 'List all authentications')
  .action(commands.init)

program
  .command('clone')
  .description('clone with auth enabled')
  .action(commands.init)

program.parse(process.argv)
