// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const { allProperty } = require('../controllers/propertyController')

// Routing:
router.route('/').get(allProperty)

// Module Exports:
module.exports = router
