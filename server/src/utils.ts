import * as jwt from 'jsonwebtoken'

import * as moment from 'moment'
import pl from 'moment/locale/pl'
moment.locale('pl')

export const nextTerms = (actions, conservationEveryNDays = 0, udtEveryNDays = 0) => {
  const conservations = actions.filter((a) => { return a.type=="conservation" } ).sort( (a,b) => { return moment(a.date).isBefore(moment(b.date)) } )
  const udts = actions.filter((a) => { return a.type=="udt" } ).sort( (a,b) => { return moment(a.date).isBefore(moment(b.date)) } )
  const nextUDTDate = udts[0] != undefined ? moment(udts[0].date).add(udtEveryNDays, 'd').format("YYYY-MM-DD") : null
  const nextConservationDate = conservations[0] != undefined ? moment(conservations[0].date).add(conservationEveryNDays, 'd').format("YYYY-MM-DD") : null
  return {
    udt: nextUDTDate,
    conservation: nextConservationDate,
  }
}

export function getUserId(ctx) {
  const Authorization = ctx.request.get('Authorization')
  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const { userId } = jwt.verify(token, process.env.APP_SECRET)
    return userId
  }

  throw new AuthError()
}

export class AuthError extends Error {
  constructor() {
    super('Not authorized')
  }
}

export const normalizeCustomer = (customer) => {
  customer.subiektId = customer.id
  customer.symbol = customer.symbol.trim()
  delete customer.id
  customer.address = {
    country: !customer.country || customer.country == 1 ? 'PL' : customer.country,
    city: customer.city,
    street: customer.street,
    building: customer.building,
    apartment: customer.apartment,
    postCode: customer.postCode,
    postDepartment: customer.postDepartment
  }
}
