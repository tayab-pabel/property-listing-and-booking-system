// External Module:
const mongoose = require('mongoose')

// User Schema:
const PropertySchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Marchand',
    },
    postType: { type: String, enum: ['basic', 'featured'], default: 'basic' },
    purpose: { type: String, enum: ['sale', 'rent'], default: 'rent' },
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
        'plot',
        'duplex',
        'building',
        'office',
        'shop',
        'store',
        'office',
        'warehouse',
        'garage',
        'factory',
        'warehouse',
        'garage',
        'factory',
      ],
      default: 'apartment',
    },
    propertyName: { type: String, required: true },
    property_address: {
      location: { type: String, trim: true, required: true },
      city: { type: String, trim: true, required: true },
      postCode: { type: String, trim: true, required: true },
      country: { type: String, trim: true, required: true },
      about: { type: String, trim: true, required: true },
    },
    propertyDescription: { type: String, required: true },
    property_price: { type: Number, required: true },
    property_area: { type: Number, required: true },
    property_bedrooms: { type: Number, required: true },
    property_bathrooms: { type: Number, required: true },
    property_garages: { type: Number, required: true },
    property_floors: { type: Number, required: true },
    property_furnished: { type: Boolean, required: true },
    property_airConditioning: { type: Boolean, required: true },
    property_parking: { type: Boolean, required: true },
    property_swimmingPool: { type: Boolean, required: true },
    property_gym: { type: Boolean, required: true },
    property_terrace: { type: Boolean, required: true },
    property_balcony: { type: Boolean, required: true },
    property_elevator: { type: Boolean, required: true },
    property_garden: { type: Boolean, required: true },
    property_cableTv: { type: Boolean, required: true },
    property_internet: { type: Boolean, required: true },
    property_images: [{ type: String, trim: true, required: true }],
    property_featured_image: { type: String, trim: true },
  },
  { timestamps: true }
)

// Make User Model:
const Property = mongoose.model('Property', PropertySchema)

// Export Module:
module.exports = Property
