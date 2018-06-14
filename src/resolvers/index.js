const { Query } = require('./Query')
//const { Subscription } = require('./Subscription')
const { auth } = require('./Mutation/auth')
const { customer } = require('./Mutation/customer')
const { device } = require('./Mutation/device')
const { user } = require('./Mutation/user')
const { AuthPayload } = require('./AuthPayload')

module.exports = {
  Query,
  Mutation: {
    ...auth,
    ...customer,
    ...device,
    ...user
  },
  // Subscription,
  AuthPayload,
}
