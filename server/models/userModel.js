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
    avatar: String,
    role: {
      type: String,
      enum: ['agent', 'admin'],
      default: 'agent',
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
