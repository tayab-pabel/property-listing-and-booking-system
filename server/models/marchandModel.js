// External Module:
const mongoose = require('mongoose')

// User Schema:
const marchandSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'People',
    },
    marchandName: { type: String, trim: true, required: true },
    marchandEmail: { type: String, trim: true, lowercase: true },
    marchandPhoneNumber: { type: String, trim: true, required: true },
    marchandAddress: {
      addressLine1: { type: String, trim: true, required: true },
      addressLine2: { type: String, trim: true, required: true },
      city: { type: String, trim: true, required: true },
      postCode: { type: String, trim: true, required: true },
      country: { type: String, trim: true, required: true },
      coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
      },
    },
    marchandSocialProfile: {
      website: String,
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
    },
    marchandWebsite: String,
    marchandDescription: { type: String, trim: true, required: true },
    marchandFeaturedImage: { type: String, trim: true },
    marchandPeriod: { type: String, trim: true, required: true },
    marchandPeriodDuration: { type: String, trim: true, required: true },
    marchandPeriodStart: { type: Date, default: Date.now },
    marchandBranchLimit: { type: Number, default: 0 },
    marcnahdStatus: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive',
    },
  },
  { timestamps: true }
)

// Make User Model:
const Marchand = mongoose.model('Marchand', marchandSchema)

// Export Module:
module.exports = Marchand
