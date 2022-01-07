// External Dependencies:
const createError = require('http-errors')

// Internal Dependencies:
const Property = require('../models/propertyModel')
const { defaultProperty } = require('../seeder/mockData')
const { unlinkSingleImage } = require('../utilities/singleImageRemover')

/**
 * @desc This route will provide an array of all listed Properties.
 * @route POST/api/property
 * @access Private/agent
 */
const createProperty = async (req, res, next) => {
  try {
    const newProperty = new Property({
      ...defaultProperty,
      agent: req.user._id,
    })
    const result = await newProperty.save()
    res.status(201).json(result)
  } catch (error) {
    next(createError(500, 'Failed to Create Property!'))
  }
}

/**
 * @desc This route will provide an array of all listed Properties.
 * @route GET/api/property
 * @access Public
 */

const allProperty = async (req, res, next) => {
  try {
    let purpose = req.query.purpose || false
    let agentId = req.query.agentId || false

    if (agentId) {
      const result = await Property.find({ agent: agentId })
      res.status(200).json(result)
    } else {
      const result = await Property.find(
        purpose ? { purpose: purpose } : {}
      ).populate('agent', 'name mobile avatar _id description')
      res.status(200).json(result)
    }
  } catch (error) {
    next(createError(500, 'Data Failed to Fetch'))
  }
}

/**
 * @desc This route will provide an array of all listed Properties.
 * @route GET/api/property/:id
 * @access Public
 */
const singleProperty = async (req, res, next) => {
  try {
    const result = await Property.findById(req.params.id).populate(
      'agent',
      'name avatar mobile email _id'
    )
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, 'Data Failed to Fetch'))
  }
}

/**
 * @desc This route will provide an array of all listed Properties.
 * @route PUT/api/property/:id
 * @access Private Agent Only
 */
const updateProperty = async (req, res, next) => {
  try {
    const property = await Property.findById(req.params.id)
    if (property) {
      property.postType = req.body.postType || property.postType
      property.purpose = req.body.purpose || property.purpose
      property.propertyStatus =
        req.body.propertyStatus || property.propertyStatus
      property.propertyCategory =
        req.body.propertyCategory || property.propertyCategory
      property.propertyType = req.body.propertyType || property.propertyType
      property.propertyTitle = req.body.propertyTitle || property.propertyTitle
      property.propertyDescription =
        req.body.propertyDescription || property.propertyDescription
      property.propertyPrice = req.body.propertyPrice || property.propertyPrice
      property.propertyBedrooms =
        req.body.propertyBedrooms || property.propertyBedrooms
      property.propertyBathrooms =
        req.body.propertyBathrooms || property.propertyBathrooms
      property.propertyFloorNumber =
        req.body.propertyFloorNumber || property.propertyFloorNumber
      property.propertySqft = req.body.propertySqft || property.propertySqft
      property.propertyFurnished =
        req.body.propertyFurnished || property.propertyFurnished
      property.propertyFurnished =
        req.body.propertyFurnished || property.propertyFurnished

      if (req.body.propertyFeatures) {
        req.body.propertyFeatures.forEach(
          (feature) => (property.propertyFeatures[feature] = true)
        )
      }
      const result = await property.save()
      res.status(200).json(result)
    } else {
      res.status(400).send('No Property Found')
    }
    res.status(200).json(property)
  } catch (error) {
    next(createError(500, 'Server Side Error'))
  }
}

/**
 * @desc This route will provide an array of all listed Properties.
 * @route POST/api/property/upload/single
 * @access Private Agent Only
 */
const updateFeaturedImage = async (req, res, next) => {
  try {
    let name = req.query.name
    const property = await Property.findById(req.params.id)
    if (name === 'floorPlan') {
      property.propertyFloorPlanImage = req.file.link
    } else {
      property.propertyFeaturedImage = req.file.link
    }
    const result = await property.save()
    res.status(200).json(result)
  } catch (error) {
    res.send('File Failed to Delete')
  }
}

// Module Exports:
module.exports = {
  allProperty,
  singleProperty,
  createProperty,
  updateProperty,
  updateFeaturedImage,
}
