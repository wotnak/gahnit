export const action = {

  addAction(parent, {deviceID, data}, ctx, info) {
    if (data.service) {
      const { date, device, customer, employee, start, end, elements} = data.service
      return ctx.db.mutation.createAction({
        type: "service",
        date,
        employee,
        start,
        end,
        device: { connect: { id: device } },
        customer: { connect: { id: customer } },
        elements: { create: elements }
      }, info)
    }
    if (data.protocol) {
      const { date, device, customer, inspector, results, notes} = data.protocol
      return ctx.db.mutation.createAction({
        type: "protocol",
        date,
        device: { connect: { id: device } },
        customer: { connect: { id: customer } },
        inspector,
        results,
        notes
      }, info)
    }
  },

  updateAction(parent, {id, data}, ctx, info) {
    if (data.service) {
      const { date, device, customer, employee, start, end } = data.service
      return ctx.db.mutation.createAction({
        data: {
          date,
          employee,
          start,
          end,
          device: { connect: { id: device } },
          customer: { connect: { id: customer } }
        },
        where: { id }
      }, info)
    }
    if (data.protocol) {
      const { date, device, customer, inspector, results, notes} = data.protocol
      return ctx.db.mutation.createAction({
        data: {
          date,
          inspector,
          results,
          notes,
          device: { connect: { id: device } },
          customer: { connect: { id: customer } }
        },
        where: { id }
      }, info)
    }
  },

  removeAction(parent, { id }, ctx, info) {
    return ctx.db.mutation.deleteAction({ where: { id } }, info)
  }

}
