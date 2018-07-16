import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const actionSchema = mongoose.Schema({
  date: Date,
  description: String,
  device: String,
  customer: String,
  type: String,

  // Conservation
  elements: [{
    name: String,
    amount: Number,
    price: Number
  }],
  employee: String,
  start: String,
  end: String,

  // UDT
  inspector: String
})

actionSchema.plugin(mongooseLeanId)

export const Action = mongoose.model('Action', actionSchema)
