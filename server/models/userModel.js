// External Module:
const mongoose = require('mongoose')

// User Schema:
const peopleSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true },
    mobile: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    avatar: String,
    role: {
      type: String,
      enum: ['marchand', 'admin'],
      default: 'marchand',
    },
  },
  { timestamps: true, versionKey: false }
)

// Make User Model:
const People = mongoose.model('People', peopleSchema)

// Export Module:
module.exports = People
