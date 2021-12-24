// External Dependencies:
const createError = require('http-errors')

// Internal Dependencies:
const Property = require('../models/propertyModel')

/**
 * @desc This route will provide an array of all listed Properties.
 * @route GET/api/user
 * @access Public
 */

const allProperty = async (req, res, next) => {
  try {
    const result = await Property.find()
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, 'Data Failed to Fetch'))
  }
}

// Module Exports:
module.exports = { allProperty }
