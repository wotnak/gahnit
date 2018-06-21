import * as bcrypt from 'bcryptjs'

export const user = {
  async createUser(parent, args, ctx, info) {
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: { ...args, password },
    })

    return user
  },


  async updateUser(parent, {id, username, displayName, password}, ctx, info) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return ctx.db.mutation.updateDevice(
      {
        data: {
          username,
          displayName,
          password: hashedPassword,
        },
        where: { id }
      },
      info
    )
  },

  deleteUser(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteUser({ where: { id } })
  },
}
