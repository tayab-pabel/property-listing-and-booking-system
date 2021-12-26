// External Dependencies:
const createError = require('http-errors')

// Internal Dependencies:
const Agent = require('../models/agentModel')

/**
 * @desc This route will provide an array of all listed Properties.
 * @route GET/api/agent/:id
 * @access Public
 */
const agentDetails = async (req, res, next) => {
  try {
    const result = await Agent.findById(req.params.id)
    res.status(200).json(result)
  } catch (error) {
    next(createError(500, 'Data Failed to Fetch'))
  }
}

// Module Exports:
module.exports = { agentDetails }
