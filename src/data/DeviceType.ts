import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const deviceTypeSchema = mongoose.Schema({
  name: String,
  preferedName: String,
  conservationEveryNDays: Number,
  udtEveryNDays: Number

})

deviceTypeSchema.plugin(mongooseLeanId)

export const DeviceType = mongoose.model('DeviceType', deviceTypeSchema)
