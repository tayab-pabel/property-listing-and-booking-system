// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const {
  allProperty,
  singleProperty,
  createProperty,
} = require('../controllers/propertyController')
const loginChecker = require('../middlewares/auth/loginChecker')
const roleChecker = require('../middlewares/auth/roleChecker')

// Routing:
router.route('/').get(allProperty)
router.route('/:id').get(singleProperty)
router.route('/').post(loginChecker, roleChecker('marchand'), createProperty)

// Module Exports:
module.exports = router
