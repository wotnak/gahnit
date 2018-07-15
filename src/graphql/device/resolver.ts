import {Device} from '../../data/Device'

export const resolver = {
  // Queries
  Query: {
    devices: async (parent, { type }, ctx, info) => {
      if (type != undefined)
        return await Device.find({type})
      return await Device.find()
    },
    device: async (parent, { id }, ctx, info) => {
      return await Device.findById(id)
    },
  },

  // Mutations
  Mutation: {
    createDevice: async (parent, args, ctx, info) => {
      const device = new Device(args)
      await device.save()
      return device
    },
    updateDevice: async (parent, {id, data}, ctx, info) => {
      const device = await Device.findById(id)
      device.set(data)
      await device.save()
      return device
    },
    deleteDevice: async (parent, { id }, ctx, info) => {
      const device = await Device.findById(id)
      await device.remove()
      return device
    }
  }

}
