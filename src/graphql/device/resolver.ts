import {Device} from '../../data/Device'
import {DeviceType} from '../../data/DeviceType'
import {Action} from '../../data/Action'
import {resolver as Customer} from '../customer/resolver'

export const resolver = {
  // Queries
  Query: {
    devices: async (parent, { type }, ctx, info) => {
      const devices = (type != undefined) ? await Device.find({type}).lean() : await Device.find().lean()
      await Promise.all(devices.map(async device => {
        const deviceType = await DeviceType.findById(device.type).lean()
        device.type = deviceType
        const owner = await Customer.Query.customer({}, { id: device.owner }, {}, {})
        device.owner = owner
        const actions = await Action.find({device: device.id}).lean()
        device.actions = actions 
      }))
      return devices
    },
    device: async (parent, { id }, ctx, info) => {
      const device = await Device.findById(id).lean()
      const type = await DeviceType.findById(device.type).lean()
      device.type = type
      const owner = await Customer.Query.customer({}, { id: device.owner }, {}, {})
      device.owner = owner
      const actions = await Action.find({device: device.id}).lean()
      device.actions = actions 
      return device
    },
  },

  // Mutations
  Mutation: {
    createDevice: async (parent, args, ctx, info) => {
      const newDevice = new Device(args)
      const device = await newDevice.save()
      const normDevice = device.toObject()
      normDevice.id = device._id
      return normDevice
    },
    updateDevice: async (parent, {id, data}, ctx, info) => {
      const device = await Device.findById(id)
      device.set({...data})
      await device.save()
      return device
    },
    deleteDevice: async (parent, { id }, ctx, info) => {
      const device = await Device.findById(id).lean()
      await device.remove()
      return device
    }
  }

}
