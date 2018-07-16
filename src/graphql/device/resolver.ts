import {Device} from '../../data/Device'
import {DeviceType} from '../../data/DeviceType'
import {Action} from '../../data/Action'
import {resolver as Customer} from '../customer/resolver'
import { nextTerms } from '../../utils'

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
        const terms = nextTerms(actions, deviceType.conservationEveryNDays, deviceType.udtEveryNDays)
        device.nextUDT = terms.udt
        device.nextConservation = terms.conservation
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
      const terms = nextTerms(actions, type.conservationEveryNDays, type.udtEveryNDays)
      device.nextUDT = terms.udt
      device.nextConservation = terms.conservation
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
      const device = await Device.findById(id)
      await device.remove()
      const normDevice = device.toObject()
      normDevice.id = device._id
      return normDevice
    }
  }

}
