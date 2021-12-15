// External Module:
const mongoose = require('mongoose')

// User Schema:
const peopleSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true },
    phoneNumber: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    avatar: String,
    role: {
      type: String,
      enum: ['user', 'marchand', 'admin'],
      default: 'user',
    },
    // address: {
    //   addressLine1: { type: String, trim: true, required: true },
    //   addressLine2: { type: String, trim: true, required: true },
    //   city: { type: String, trim: true, required: true },
    //   postCode: { type: String, trim: true, required: true },
    //   country: { type: String, trim: true, required: true },
    //   coordinates: {
    //     lat: { type: Number, default: 0 },
    //     lng: { type: Number, default: 0 },
    //   },
    // },
  },
  { timestamps: true }
)

// Make User Model:
const People = mongoose.model('People', peopleSchema)

// Export Module:
module.exports = People
