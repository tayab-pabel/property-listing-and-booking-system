// External Module:
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// User Schema:
const peopleSchema = mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true },
    mobile: { type: String, trim: true, required: true },
    password: { type: String, required: true },
    website: { type: String, default: '' },
    avatar: { type: String, default: 'demoavatar.png' },
    address: {
      addressLine1: { type: String, default: '' },
      addressLine2: { type: String, default: '' },
      city: { type: String, default: '' },
      postCode: { type: String, default: '' },
      country: { type: String, default: '' },
      coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
      },
    },
    social: {
      facebook: { type: String, default: '' },
      twitter: { type: String, default: '' },
      instagram: { type: String, default: '' },
      linkedin: { type: String, default: '' },
    },
    description: { type: String, default: '' },
    gallery: [String],
    role: {
      type: String,
      enum: ['agent', 'admin'],
      default: 'agent',
    },
    agentStauts: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive',
    },
  },
  { timestamps: true, versionKey: false }
)

peopleSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 10)
})

// Make User Model:
const People = mongoose.model('People', peopleSchema)

// Export Module:
module.exports = People
