import { Device } from '../../data/Device'
import { DeviceType } from '../../data/DeviceType'
import { Action } from '../../data/Action'
import { Customer } from '../../data/Customer'
import { nextTerms } from '../../utils'

export const resolver = {
  // Queries
  Query: {
    search: async (parent, { query }, ctx, info) => {

      const matchingDevices = await Device.find({$text: {$search: query}}).lean()
      await Promise.all(matchingDevices.map(async device => {
        const deviceType = await DeviceType.findById(device.type).lean()
        device.type = deviceType
        const owner = await Customer.findOne({subiektId: device.owner }).lean()
        device.owner = owner
        const actions = await Action.find({device: device.id}).lean()
        device.actions = actions
        const terms = nextTerms(actions, deviceType.conservationEveryNDays, deviceType.udtEveryNDays)
        device.nextUDT = terms.udt
        device.nextConservation = terms.conservation
      }))

      const matchingCustomers = await Customer.find({$text: {$search: query}})

      return matchingDevices.concat(matchingCustomers)
    }
  },
  SearchResult: {
    __resolveType(obj, context, info){
      if(obj.owner) return 'Device'
      if(obj.name) return 'Customer'
      return null
    }
  }
}
