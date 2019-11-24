import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const deviceSchema = mongoose.Schema({
  type: String,

  serialNumber: String,
  UDTNumber: String,
  registrationNumber: String,

  productionYear: String,
  producent: String,
  producentNumber: String,

  capacity: String,

  owner: String,

  notes: [{
    revisions: [{
      author: String,
      timestamp: String,
      content: String
    }]
  }],

  actions: [String]

})

deviceSchema.index({
  serialNumber: 'text',
  UDTNumber: 'text',
  registrationNumber: 'text',
  productionYear: 'text',
  producent: 'text',
  producentNumber: 'text',
});
 
deviceSchema.plugin(mongooseLeanId)

export const Device = mongoose.model('Device', deviceSchema)
