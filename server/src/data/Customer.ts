import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const customerSchema = mongoose.Schema({
  subiektId: String,
  name: { type: String, text: true },
  symbol: { type: String, text: true },
  nip: { type: String, text: true },
  regon: { type: String, text: true },
  address: {
    country: String,
    city: { type: String, text: true },
    street: String,
    building: String,
    apartment: String,
    postCode: String,
    postDepartment: String
  }
})

customerSchema.plugin(mongooseLeanId)

export const Customer = mongoose.model('Customer', customerSchema)
