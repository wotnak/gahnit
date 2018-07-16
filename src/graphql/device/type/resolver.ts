import { DeviceType } from '../../../data/DeviceType'

export const resolver = {
  // Queries
  Query: {
    deviceTypes: async (parent, args, ctx, info) => {
      const types = await DeviceType.find().lean()
      return types
    },

    deviceType: async (parent, { id }, ctx, info) => {
      const type = await DeviceType.findById(id).lean()
      return type
    },
  },

  // Mutations
  Mutation: {
    createDeviceType: async (parent, args, ctx, info) => {
      const newType = new DeviceType(args)
      const type = await newType.save()
      const normType = type.toObject()
      normType.id = type._id
      return normType
    },
    updateDeviceType: async (parent, args, ctx, info) => {
      return {}
    },
    deleteDeviceType: async (parent, {id}, ctx, info) => {
      const type = await DeviceType.findById(id).lean()
      await type.remove()
      return type
    }

  }

}
