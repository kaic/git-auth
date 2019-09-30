const config = require('./config')

describe('config', () => {
  it('return user name', async done => {
    const userName = await config.getUserName()

    console.log(userName)

    expect(typeof userName).toBe('string')

    done()
  })
})
