import * as jwt from 'jsonwebtoken'

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
