#!/usr/bin/env node

const program = require('commander')
const commands = require('../lib/commands')

program.version('0.0.0')

program
  .command('init')
  .description('run setup for git auth')
  .action(commands.init)

program
  .command('list')
  .description('list all git-auth authentications')
  .action(commands.list)

program
  .command('clone')
  .description('clone with auth enabled')
  .action(commands.init)

program.parse(process.argv)
