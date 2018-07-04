export const resolvers = {
  // Queries
  Query: {
    devices(parent, { type }, ctx, info) {
      if (type != undefined)
        return ctx.db.query.devices({ where: { type: { id: type } } }, info)
      return ctx.db.query.devices({}, info)
    },
    device(parent, { id }, ctx, info) {
      return ctx.db.query.device({ where: { id } }, info)
    },
  },

  // Mutations
  Mutation: {
    createDevice(parent, {
      serialNumber,
      UDTNumber,
      productionYear,
      producent,
      type,
      owner
    }, ctx, info) {
      return ctx.db.mutation.createDevice(
        {
          data: {
            serialNumber,
            UDTNumber,
            productionYear,
            producent,
            type:  { connect: {id: type } },
            owner: { connect: {id: owner} }
          }
        },
        info
      )
    },
    updateDevice(parent, {id, data}, ctx, info) {
      const {serialNumber, UDTNumber, productionYear, producent, type, owner} = data
      return ctx.db.mutation.updateDevice(
        {
          data: {
            serialNumber,
            UDTNumber,
            productionYear,
            producent,
            type:  { connect: {id: type } },
            owner: { connect: {id: owner } }
          },
          where: { id }
        },
        info
      )
    },
    deleteDevice(parent, { id }, ctx, info) {
      return ctx.db.mutation.deleteDevice({ where: { id } })
    },
  }

}
