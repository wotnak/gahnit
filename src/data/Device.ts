import * as mongoose from 'mongoose'

const deviceSchema = mongoose.Schema({
  type: {
    id: String,
    name: String
  },

  serialNumber: String,
  UDTNumber: String,
  VINnumber: String,
  recordNumber: String,
  registrationNumber: String,

  productionYear: String,
  producent: String,

  capacity: String,

  owner: String,

  actions: [String]

})

export const Device = mongoose.model('Device', deviceSchema)
