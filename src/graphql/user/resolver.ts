import  { getUserId } from '../../utils'
import * as bcrypt from 'bcryptjs'
import * as jwt from 'jsonwebtoken'
import { User } from '../../data/User'

export const resolver = {
  // Queries
  Query: {
    users: async (parent, args, ctx, info) => {
      return await User.find()
    },
    user: async (parent, { id }, ctx, info) => {
      return await User.findById(id)
    },
    me: async (parent, args, ctx, info) => {
      const id = getUserId(ctx)
      return await User.findById(id)
    },
  },

  // Mutations
  Mutation: {
    createUser: async (parent, { username, displayName, password }, ctx, info) => {
      const passwordHash = await bcrypt.hash(password, 10)
      const newUser = new User({ username, displayName, password: passwordHash })
      await newUser.save()
      return newUser
    },
    updateUser: async (parent, { id, password, displayName }, ctx, info) => {
      const user = await User.findById(id)
      if (password) user.password = await bcrypt.hash(password, 10)
      if (displayName) user.displayName = displayName
      await user.save()
      return user
    },
    deleteUser: async (parent, { id }, ctx, info) => {
      const user = await User.findById(id)
      await user.remove()
      return user
    },
    login: async (parent, { username, password }, ctx, info) => {
      const user = await User.findOne({username})
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
      return await User.findById(id)
    },
  }

}
