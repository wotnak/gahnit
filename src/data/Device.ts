import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const deviceSchema = mongoose.Schema({
  type: String,

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
 
deviceSchema.plugin(mongooseLeanId)

export const Device = mongoose.model('Device', deviceSchema)
