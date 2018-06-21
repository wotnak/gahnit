import  { getUserId } from '../utils'

export const Query = {
  customers(parent, args, ctx, info) {
    return ctx.db.query.customers({orderBy: 'createdAt_DESC'}, info)
  },
  customer(parent, { id }, ctx, info) {
    return ctx.db.query.customer({ where: { id } }, info)
  },
  devices(parent, args, ctx, info) {
    return ctx.db.query.devices({}, info)
  },
  device(parent, { id }, ctx, info) {
    return ctx.db.query.device({ where: { id } }, info)
  },

  deviceTypes(parent, args, ctx, info) {
    return ctx.db.query.deviceTypes({}, info)
  },

  deviceType(parent, { id }, ctx, info) {
    return ctx.db.query.deviceType({ where: { id } }, info)
  },

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
}
