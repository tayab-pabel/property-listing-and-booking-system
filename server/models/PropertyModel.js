// External Module:
const mongoose = require('mongoose')

// User Schema:
const PropertySchema = mongoose.Schema(
  {
    agent: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Agent',
    },
    postType: { type: String, enum: ['basic', 'featured'], default: 'basic' },
    purpose: { type: String, enum: ['buy', 'rent'], default: 'rent' },
    propertyStatus: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    propertyCategory: {
      type: String,
      enum: ['residential', 'commercial'],
      default: 'residential',
    },
    propertyType: {
      type: String,
      enum: [
        'apartment',
        'plaza',
        'plot',
        'room',
        'duplex',
        'building',
        'office',
        'shop',
        'factory',
        'warehouse',
        'garage',
        'floor',
      ],
      default: 'apartment',
    },
    propertyTitle: { type: String, required: true },
    propertyAddress: {
      addressLine1: { type: String, trim: true, required: true },
      addressLine2: { type: String, trim: true },
      city: { type: String, trim: true, required: true },
      country: { type: String, trim: true, required: true },
      postCode: { type: String, trim: true, required: true },
      coordinates: {
        lat: { type: Number, default: 0 },
        lng: { type: Number, default: 0 },
      },
    },
    propertyAvailability: { type: Date, default: Date.now },
    propertyDescription: { type: String, required: true },
    propertyPrice: { type: Number, required: true },
    propertyBedrooms: { type: Number, required: true },
    propertyBathrooms: { type: Number, required: true },
    propertyFloorNumber: { type: Number, required: true },
    propertySqft: { type: Number, required: true },
    propertyFurnished: { type: Boolean, default: false },
    propertyFeatures: {
      gasline: { type: Boolean, default: false },
      reception: { type: Boolean, default: false },
      tiledFloor: { type: Boolean, default: false },
      terrace: { type: Boolean, default: false },
      balcony: { type: Boolean, default: false },
      parking: { type: Boolean, default: false },
      garage: { type: Boolean, default: false },
      fireExit: { type: Boolean, default: false },
      fireProtection: { type: Boolean, default: false },
      water: { type: Boolean, default: false },
      hotWater: { type: Boolean, default: false },
      electricity: { type: Boolean, default: false },
      generator: { type: Boolean, default: false },
      solar: { type: Boolean, default: false },
      airConditioning: { type: Boolean, default: false },
      swimmingPool: { type: Boolean, default: false },
      garden: { type: Boolean, default: false },
      gym: { type: Boolean, default: false },
      elevator: { type: Boolean, default: false },
      cableTv: { type: Boolean, default: false },
      internet: { type: Boolean, default: false },
      laundry: { type: Boolean, default: false },
      cleaningService: { type: Boolean, default: false },
      cafetoria: { type: Boolean, default: false },
      securityStaff: { type: Boolean, default: false },
      officeRoom: { type: Boolean, default: false },
      executiveRoom: { type: Boolean, default: false },
      managerRoom: { type: Boolean, default: false },
      conferenceRoom: { type: Boolean, default: false },
      staffRoom: { type: Boolean, default: false },
      servantRoom: { type: Boolean, default: false },
    },
    propertyFeaturedImage: String,
    propertyFloorPlanImage: String,
    propertyImages: [String],
    agentName: String,
    agentLogo: String,
    agentPhoneNumber: String,
  },
  { timestamps: true, versionKey: false }
)

// Make User Model:
const Property = mongoose.model('Property', PropertySchema)

// Export Module:
module.exports = Property
