import * as mongoose from 'mongoose'
import * as mongooseLeanId from 'mongoose-lean-id'

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  displayName: String,
  permissions: [String]
})

userSchema.plugin(mongooseLeanId)

export const User = mongoose.model('User', userSchema)
