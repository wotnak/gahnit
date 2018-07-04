export const resolvers = {
  // Queries
  Query: {
    deviceTypes(parent, args, ctx, info) {
      return ctx.db.query.deviceTypes({}, info)
    },

    deviceType(parent, { id }, ctx, info) {
      return ctx.db.query.deviceType({ where: { id } }, info)
    },
  },

  // Mutations
  Mutation: {

  }

}
