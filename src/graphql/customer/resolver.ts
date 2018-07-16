import * as sql from 'mssql'
import {Device} from '../../data/Device'

import { normalizeCustomer } from '../../utils'

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
      return customer
    }
  },

}
