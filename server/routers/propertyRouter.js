// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const {
  allProperty,
  singleProperty,
  createProperty,
  currentAgentProperties,
} = require('../controllers/propertyController')
const loginChecker = require('../middlewares/auth/loginChecker')
const roleChecker = require('../middlewares/auth/roleChecker')

// Public Routings:
router.route('/').get(allProperty)
router.route('/:id').get(singleProperty)

// Private Routing
router
  .route('/currentagent')
  .get(loginChecker, roleChecker('agent'), currentAgentProperties)
router.route('/').post(loginChecker, roleChecker('agent'), createProperty)

// Module Exports:
module.exports = router
