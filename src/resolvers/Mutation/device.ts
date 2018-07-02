export const device = {
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
