import { Action } from '../../../data/Action'
import { Device } from '../../../data/Device'

export const resolver = {
  // Queries
  Query: {

  },

  // Mutations
  Mutation: {
    addAction: async (parent, {deviceId, data}, ctx, info) => {
      const {conservation, udt} = data
      const newAction = new Action({ ...conservation, ...udt })
      const device = await Device.findById(deviceId)
      newAction.customer = device.owner
      newAction.device = device._id
      const action = await newAction.save()
      const aa = action.toObject()
      aa.id = aa._id
      console.log(aa)
      device.actions.push(action._id)
      await device.save()
      return aa
    },
    updateAction: async (parent, {id, data}, ctx, info) => {
      return {}
    },
    removeAction: async (parent, { id }, ctx, info) => {
      const action = await Action.findById(id).lean()
      await action.remove()
      return action
    }
  },

  Action: {
    __resolveType(obj, context, info){
      if(obj.inspector) return 'UDT'
      if(obj.elements) return 'Conservation'
      return null
    }
  }

}
