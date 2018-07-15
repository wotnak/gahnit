import { DeviceType } from '../../../data/DeviceType'

export const resolver = {
  // Queries
  Query: {
    deviceTypes: async (parent, args, ctx, info) => {
      return await DeviceType.find()
    },

    deviceType: async (parent, { id }, ctx, info) => {
      return await DeviceType.findById(id)
    },
  },

  // Mutations
  Mutation: {
    createDeviceType: async (parent, args, ctx, info) => {
      const newType = new DeviceType(args)
      await newType.save()
      return newType
    },
    updateDeviceType: async (parent, args, ctx, info) => {
      return {}
    },
    deleteDeviceType: async (parent, {id}, ctx, info) => {
      const type = await DeviceType.findById(id)
      await type.remove()
      return type
    }

  }

}
