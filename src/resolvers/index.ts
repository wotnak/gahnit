import { Query } from './Query'
import { auth } from './Mutation/auth'
import { customer } from './Mutation/customer'
import { device } from './Mutation/device'
import { action } from './Mutation/action'
import { user } from './Mutation/user'
import { AuthPayload } from './AuthPayload'

export default {
  Query,
  Mutation: {
    ...auth,
    ...customer,
    ...device,
    ...action,
    ...user
  },
  AuthPayload
}
