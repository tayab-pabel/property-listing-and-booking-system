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

router
  .route('/')
  .get(allProperty)
  .post(loginChecker, roleChecker('agent'), createProperty)
router.route('/:id').get(singleProperty)

// Module Exports:
module.exports = router
