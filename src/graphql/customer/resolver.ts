import * as sql from 'mssql'
import {Device} from '../../data/Device'

const normalizeCustomer = (customer) => {
  customer.address = {
    country: !customer.country || customer.country == 1 ? 'Polska' : customer.country,
    city: customer.city,
    street: customer.street,
    building: customer.building,
    apartment: customer.apartment,
    postCode: customer.postCode,
    postDepartment: customer.postDepartment
  }
}

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
                                      FROM adr__Ewid WHERE adr_TypAdresu=1`
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
