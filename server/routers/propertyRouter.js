// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const {
  allProperty,
  singleProperty,
  createProperty,
  updateProperty,
  updateFeaturedImage,
} = require('../controllers/propertyController')
const loginChecker = require('../middlewares/auth/loginChecker')
const roleChecker = require('../middlewares/auth/roleChecker')
const {
  singleUploader,
  multipleUploader,
} = require('../middlewares/upload/imageUploader')

router
  .route('/')
  .get(allProperty)
  .post(loginChecker, roleChecker('agent'), createProperty)

router
  .route('/:id')
  .get(singleProperty)
  .put(loginChecker, roleChecker('agent'), updateProperty)

// router
//   .route('/upload/single')
//   .post(loginChecker, (req, res) => res.send('Single Property Upload'))
// router
//   .route('/upload/multiple')
//   .post(loginChecker, (req, res) => res.send('Multiple Property Upload'))

router
  .route('/upload/single/:id')
  .post(loginChecker, singleUploader, updateFeaturedImage)
// router.route('/upload/multiple').post(loginChecker, multipleUploader)

// Module Exports:
module.exports = router
