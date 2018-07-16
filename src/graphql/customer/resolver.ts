import * as sql from 'mssql'
import {Device} from '../../data/Device'
import {DeviceType} from '../../data/DeviceType'
import {Action} from '../../data/Action'

import { normalizeCustomer, nextTerms } from '../../utils'

export const resolver = {
  // Queries
  Query: {
    customers: async (parent, args, ctx, info) => {
      const result = await sql.query`SELECT
                                        adr_IdObiektu AS id,
                                        adr_NazwaPelna AS name,
                                        adr_NIP AS nip,
                                        adr_IdPanstwo AS country,
                                        adr_Miejscowosc AS city,
                                        adr_Ulica AS street,
                                        adr_NrDomu AS building,
                                        adr_NrLokalu AS apartment,
                                        adr_Kod AS postCode,
                                        adr_Poczta AS postDepartment
                                      FROM adr__Ewid WHERE adr_TypAdresu=1 ORDER BY name`
      const customers = result.recordset
      await Promise.all(customers.map(async customer => {
        normalizeCustomer(customer)
        customer.devices = await Device.find({owner: customer.id})
        await Promise.all(customer.devices.map(async device => {
          const deviceType = await DeviceType.findById(device.type).lean()
          device.type = deviceType
          const actions = await Action.find({device: device.id}).lean()
          device.actions = actions
          const terms = nextTerms(actions, deviceType.conservationEveryNDays, deviceType.udtEveryNDays)
          device.nextUDT = terms.udt
          device.nextConservation = terms.conservation
        }))
      }))
      customers.forEach(async customer => {
        normalizeCustomer(customer)
        customer.devices = await Device.find({owner: customer.id})

      })
      return customers
    },
    customer: async (parent, { id }, ctx, info) => {
      const result = await sql.query`SELECT
                                        adr_IdObiektu AS id,
                                        adr_NazwaPelna AS name,
                                        adr_NIP AS nip,
                                        adr_IdPanstwo AS country,
                                        adr_Miejscowosc AS city,
                                        adr_Ulica AS street,
                                        adr_NrDomu AS building,
                                        adr_NrLokalu AS apartment,
                                        adr_Kod AS postCode,
                                        adr_Poczta AS postDepartment
                                      FROM adr__Ewid WHERE adr_TypAdresu=1 AND adr_IdObiektu=${id}`
      const customer = result.recordset[0]
      normalizeCustomer(customer)
      customer.devices = await Device.find({owner: customer.id})
      await Promise.all(customer.devices.map(async device => {
        const deviceType = await DeviceType.findById(device.type).lean()
        device.type = deviceType
        const actions = await Action.find({device: device.id}).lean()
        device.actions = actions
        const terms = nextTerms(actions, deviceType.conservationEveryNDays, deviceType.udtEveryNDays)
        device.nextUDT = terms.udt
        device.nextConservation = terms.conservation
      }))
      return customer
    }
  },

}
