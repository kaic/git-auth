const { Confirm } = require('enquirer')

const prompt = new Confirm({
  message:
    'Do you want to overwrite the original git clone with git-auth clone? (Can be undone later)'
})

module.exports = prompt
