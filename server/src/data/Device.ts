import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const deviceSchema = mongoose.Schema({
  type: String,

  serialNumber: { type: String, text: true },
  UDTNumber: { type: String, text: true },
  registrationNumber: { type: String, text: true },

  productionYear: { type: String, text: true },
  producent: { type: String, text: true },
  producentNumber: { type: String, text: true },

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
 
deviceSchema.plugin(mongooseLeanId)

export const Device = mongoose.model('Device', deviceSchema)
