// External Module:
const mongoose = require('mongoose')

// User Schema:
const branchSchema = mongoose.Schema(
  {
    marchand: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Marchand',
    },
    branchName: { type: String, trim: true, required: true },
    branchEmail: { type: String, trim: true, lowercase: true },
    branchPhoneNumber: { type: String, trim: true, required: true },
    branchAddress: {
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
    branchDescription: { type: String, trim: true, required: true },
    branchFeaturedImage: { type: String, trim: true },
  },
  { timestamps: true }
)

// Make User Model:
const Branch = mongoose.model('Branch', branchSchema)

// Export Module:
module.exports = Branch
