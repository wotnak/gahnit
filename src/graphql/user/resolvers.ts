import  { getUserId } from '../../utils'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

export const resolvers = {
  // Queries
  Query: {
    users(parent, args, ctx, info) {
      return ctx.db.query.users({}, info)
    },
    user(parent, { id }, ctx, info) {
      return ctx.db.query.user({ where: { id } }, info)
    },

    me(parent, args, ctx, info) {
      const id = getUserId(ctx)
      return ctx.db.query.user({ where: { id } }, info)
    },
  },

  // Mutations
  Mutation: {
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
  },

  // Types
  AuthPayload: {
    user: async ({ user: { id } }, args, ctx, info) => {
      return ctx.db.query.user({ where: { id } }, info)
    },
  }

}
