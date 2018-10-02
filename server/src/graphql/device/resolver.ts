import {Device} from '../../data/Device'
import {DeviceType} from '../../data/DeviceType'
import {Action} from '../../data/Action'
import {User} from '../../data/User'
import {resolver as Customer} from '../customer/resolver'
import { nextTerms, getUserId } from '../../utils'
import {resolver as actionResolver} from './action/resolver'

export const resolver = {
  // Queries
  Query: {
    devices: async (parent, { type, limit, offset }, ctx, info) => {
      const filter = (type != undefined) ? {type} : null
      const devices = (limit && offset) ?
                                  await Device.find(filter).limit(limit).skip(offset).lean()
                                  : await Device.find(filter).lean()
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
      if (!device) throw "Device not found."
      const type = await DeviceType.findById(device.type).lean()
      device.type = type
      const owner = await Customer.Query.customer({}, { id: device.owner }, {}, {})
      device.owner = owner
      const actions = await Action.find({device: device.id}).lean()
      device.actions = actions
      const terms = nextTerms(actions, type.conservationEveryNDays, type.udtEveryNDays)
      device.nextUDT = terms.udt
      device.nextConservation = terms.conservation
      if (!device.notes) device.notes = []
      for (const note of device.notes) {
        note.id = note._id
        delete note._id
        for (const revision of note.revisions) {
          const user = User.findById(revision.author).lean()
          revision.author = user
        }
        note.current = note.revisions[note.revisions.length-1]
      }
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
    createDeviceWithActions: async (parent, args, ctx, info) => {
      const actionsInput = args.actions
      delete args.actions
      const {id} = await resolver.Mutation.createDevice(parent, args, ctx, info)
      await Promise.all(actionsInput.map(async actionInput => {
        await actionResolver.Mutation.addAction(parent, {deviceId: id, data: actionInput}, ctx, info)
      }))
      return await resolver.Query.device(parent, { id }, ctx, info)
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
    },
    addDeviceNote: async (parent, {device, data}, ctx, info) => {
      const notedDevice = await Device.findById(device)
      const now = new Date()
      const note = {
        revisions: [
          {
            author: getUserId(ctx),
            content: data.content,
            timestamp: `${now.toISOString().substring(0, 10)} ${now.toTimeString().substring(0,17)}`
          }
        ]
      }
      notedDevice.notes.push(note)
      await notedDevice.save()
      return notedDevice.notes[0]
    },
    deleteDeviceNote: async (parent, {device, note}, ctx, info) => {
      const notedDevice = await Device.findById(device)
      const deletedNote = notedDevice.notes.find((el) => { return el._id == note } )
      notedDevice.notes.splice(notedDevice.notes.indexOf(deletedNote), 1)
      await notedDevice.save()
      return deletedNote

    },
    modifyDeviceNote: async (parent, {device, note, data}, ctx, info) => {
      const notedDevice = await Device.findById(device)
      const now = new Date()
      const modifiedNote = notedDevice.notes.find((el) => { return el._id == note } )
      modifiedNote.revisions.push({
        author: getUserId(ctx),
        content: data.content,
        timestamp: `${now.toISOString().substring(0, 10)} ${now.toTimeString().substring(0,17)}`
      })
      await notedDevice.save()
      const updatedDevice = await Device.findById(device).lean()
      const almostReadyNote = updatedDevice.notes.find((el) => { return el._id == note } )

      almostReadyNote.id = almostReadyNote._id
      delete almostReadyNote._id
      for (const revision of almostReadyNote.revisions) {
        const user = User.findById(revision.author).lean()
        revision.author = user
      }
      almostReadyNote.current = almostReadyNote.revisions[almostReadyNote.revisions.length-1]

      return almostReadyNote
    }

  }

}
