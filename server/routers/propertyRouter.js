// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const {
  allProperty,
  singleProperty,
} = require('../controllers/propertyController')

// Routing:
router.route('/').get(allProperty)
router.route('/:id').get(singleProperty)

// Module Exports:
module.exports = router
