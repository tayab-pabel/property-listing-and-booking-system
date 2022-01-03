// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const {
  singleUploader,
  multipleUploader,
} = require('../controllers/uploadController')

// Routing:
router.route('/single').post(singleUploader)
router.route('/multiple').post(multipleUploader)

// Module Exports:
module.exports = router
