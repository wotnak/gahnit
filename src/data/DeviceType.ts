import * as mongoose from 'mongoose'

const deviceTypeSchema = mongoose.Schema({
  name: String,
  preferedName: String,
  conservationEveryNDays: Number,
  udtEveryNDays: Number

})

export const Device = mongoose.model('DeviceType', deviceTypeSchema)
