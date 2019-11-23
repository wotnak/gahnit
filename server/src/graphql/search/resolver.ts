import { Device } from '../../data/Device'
import { Customer } from '../../data/Customer'

export const resolver = {
  // Queries
  Query: {
    search: async (parent, { query }, ctx, info) => {

      const matchingDevices = await Device.find({$text: {$search: query}})

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
