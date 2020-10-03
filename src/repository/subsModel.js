const mongoose = require('mongoose')
const validator = require('validator')

const Schema = mongoose.Schema
const SubscribeSchema = Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email format')
      }
    }
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

const subscribeModel = mongoose.model('subscribe', SubscribeSchema)

module.exports = subscribeModel
