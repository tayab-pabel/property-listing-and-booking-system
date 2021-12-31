// External Module:
const mongoose = require('mongoose')

// User Schema:
const agentSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'People',
    },
    agentName: { type: String, trim: true, required: true },
    agentEmail: { type: String, trim: true, lowercase: true },
    agentPhoneNumber: { type: String, trim: true, required: true },
    agentWebsite: String,
    agentAddress: {
      addressLine1: String,
      addressLine2: String,
      city: String,
      postCode: String,
      country: String,
      coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
      },
    },
    agentSocialProfile: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
    },
    agentDescription: String,
    agentLogo: String,
    agentGallery: [String],
    agentStatus: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive',
    },
  },
  { timestamps: true, versionKey: false }
)

// Make User Model:
const Agent = mongoose.model('Agent', agentSchema)

// Export Module:
module.exports = Agent
