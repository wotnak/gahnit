import { getUserId } from '../../utils'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { User } from '../../data/User'

export const resolver = {
  // Queries
  Query: {
    users: async (parent, {limit, offset}, ctx, info) => {
      const users = (limit && offset) ? await User.find().limit(limit).skip(offset).lean() : await User.find().lean()
      return users
    },
    user: async (parent, { id }, ctx, info) => {
      const user = await User.findById(id).lean()
      return user
    },
    me: async (parent, args, ctx, info) => {
      const id = getUserId(ctx)
      const me = await User.findById(id).lean()
      return me
    },
  },

  // Mutations
  Mutation: {
    createUser: async (parent, { username, displayName, password }, ctx, info) => {
      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new User({ username, displayName, password: passwordHash })
      const user = await newUser.save()
      const normUser = user.toObject()
      normUser.id = user._id
      return normUser
    },
    updateUser: async (parent, { id, password, displayName }, ctx, info) => {
      const user = await User.findById(id).lean()
      if (password) user.password = await bcrypt.hash(password, 10)
      if (displayName) user.displayName = displayName
      await user.save()
      return user
    },
    deleteUser: async (parent, { id }, ctx, info) => {
      const user = await User.findById(id).lean()
      await user.remove()
      return user
    },
    login: async (parent, { username, password }, ctx, info) => {
      const user = await User.findOne({username}).lean()
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
      const user = await User.findById(id).lean()
      return user
    }
  }

}
