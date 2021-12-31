// External Dependencies:
const createError = require('http-errors')

// Internal Dependencies:
const Property = require('../models/propertyModel')
const { defaultProperty } = require('../seeder/mockData')

/**
 * @desc This route will provide an array of all listed Properties.
 * @route POST/api/property
 * @access Private/agent
 */
const createProperty = async (req, res, next) => {
  try {
    console.log(req.user)
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
    let purpose = req.query.purpose || 'rent'
    const result = await Property.find({ purpose: purpose })
    res.status(200).json(result)
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
    const result = await Property.findById(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, 'Data Failed to Fetch'))
  }
}

// Module Exports:
module.exports = { allProperty, singleProperty, createProperty }
