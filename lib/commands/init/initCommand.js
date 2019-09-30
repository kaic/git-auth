const gitConfig = require('../gitConfig')

async function init(env, options) {
  await gitConfig.getUserName()
}

module.exports = init
