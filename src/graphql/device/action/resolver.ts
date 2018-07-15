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
      const action = new Action({ ...conservation, ...udt })
      const device = await Device.findById(deviceId)
      action.customer = device.owner
      action.device = device._id
      await action.save()
      device.actions.push(action._id)
      await device.save()
      return action
    },
    updateAction: async (parent, {id, data}, ctx, info) => {
      return {}
    },
    removeAction: async (parent, { id }, ctx, info) => {
      const action = await Action.findById(id)
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

const actionSchema = mongoose.Schema({
  date: Date,
  description: String,
  device: String,
  customer: String,

  // Conservation
  elements: [{
    name: String,
    amount: Number,
    price: Number
  }],
  employee: String,
  start: String,
  end: String,

  // UDT
  inspector: String,
  results: String,
  notes: String
})
