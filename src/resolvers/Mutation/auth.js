const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const auth = {
  async login(parent, { username, password }, ctx, info) {
    const user = await ctx.db.query.user({ where: { username } })
    if (!user) {
      throw new Error(`No such user found for username: ${username}`)
    }

    const valid = await bcrypt.compare(password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }

    return {
      token: jwt.sign({ userId: user.id }, process.env.APP_SECRET),
      user,
    }
  },
}

module.exports = { auth }
