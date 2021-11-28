// External Dependencies:

// Internal Dependencies:

/**
 * @desc This route will provide an array of all listed Properties.
 * @route GET/api/user
 * @access Public
 */

const allProperty = (req, res, next) => {
  res.status(200).json({ property: 'Resedential' })
}

// Module Exports:
module.exports = { allProperty }
