import * as mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  displayName: String,
  permissions: [String]
})

export const User = mongoose.model('User', userSchema)
