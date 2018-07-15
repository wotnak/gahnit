import * as mongoose from 'mongoose'

const actionSchema = mongoose.Schema({
  date: Date,
  description: String,
  device: String,
  customer: String,

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
  inspector: String,
  results: String,
  notes: String
})

export const Action = mongoose.model('Action', actionSchema)
