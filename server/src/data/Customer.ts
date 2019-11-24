import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const customerSchema = mongoose.Schema({
  subiektId: String,
  name: String,
  symbol: String,
  nip: String,
  regon: String,
  address: {
    country: String,
    city: String,
    street: String,
    building: String,
    apartment: String,
    postCode: String,
    postDepartment: String
  }
})

customerSchema.index({
  name: 'text',
  symbol: 'text',
  nip: 'text',
  regon: 'text',
  'address.city': 'text',
});

customerSchema.plugin(mongooseLeanId)

export const Customer = mongoose.model('Customer', customerSchema)
