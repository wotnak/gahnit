import * as sql from 'mssql'
import {Device} from '../../data/Device'
import {DeviceType} from '../../data/DeviceType'
import {Action} from '../../data/Action'
import {Customer} from '../../data/Customer'

import { normalizeCustomer, nextTerms } from '../../utils'

export const resolver = {
  // Queries
  Query: {
    customers: async (parent, {limit, offset}, ctx, info) => {
      const customers = (limit !== undefined && offset !== undefined) ?
                                  await Customer.find().limit(limit).skip(offset).lean()
                                  : await Customer.find().lean()

      await Promise.all(customers.map(async customer => {
        customer.devices = await Device.find({owner: customer.subiektId})
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
        customer.devices = await Device.find({owner: customer.id})

      })
      return customers
    },
    customer: async (parent, { id }, ctx, info) => {
      const customer = await Customer.findById(id).lean()
      customer.devices = await Device.find({owner: customer.subiektId}).lean()
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

  Mutation: {
    syncWithSubiekt: async (parent, data, ctx, info) => {
      /*
      let query = `SELECT
                      adr_IdObiektu AS id,
                      adr_Nazwa AS name,
                      adr_Symbol AS symbol,
                      adr_NIP AS nip,
                      adr_IdPanstwo AS country,
                      adr_Miejscowosc AS city,
                      adr_Ulica AS street,
                      adr_NrDomu AS building,
                      adr_NrLokalu AS apartment,
                      adr_Kod AS postCode,
                      adr_Poczta AS postDepartment
                    FROM adr__Ewid WHERE adr_TypAdresu=1`

      const request = new sql.Request()
      const result = await request.query(query)

      const customers = result.recordset
      await Promise.all(customers.map(async customer => {
        normalizeCustomer(customer)
        Customer.update({subiektId: customer.subiektId}, customer , {upsert: true, setDefaultsOnInsert: true}).exec()
        const c = await Customer.findOne({subiektId: customer.subiektId})
        const devices = await Device.find({owner: c.subiektId})
        await Promise.all(devices.map(async device => {
          device.set({owner: c.id})
          await device.save()
        }))
        const actions = await Action.find({customer: c.subiektId})
        await Promise.all(actions.map(async action => {
          action.set({customer: c.id})
          await action.save()
        }))
      }))
      */
    }
  }

}
