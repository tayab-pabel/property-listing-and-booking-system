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
    marchand_name: { type: String, trim: true, required: true },
    marchand_email: { type: String, trim: true, lowercase: true },
    marchand_phoneNumber: { type: String, trim: true, required: true },
    marchand_address: {
      location: { type: String, trim: true, required: true },
      city: { type: String, trim: true, required: true },
      postCode: { type: String, trim: true, required: true },
      country: { type: String, trim: true, required: true },
      about: { type: String, trim: true, required: true },
    },
    marchant_bannar: String,
    marchand_start_date: { type: Date, default: Date.now },
    marchand_end_date: { type: Date, default: Date.now },
    marchand_period: { type: String, trim: true, required: true },
    marcnahd_status: {
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
