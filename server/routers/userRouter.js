// External Dependencies
const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

// Internal Dependencies
const {
  allUser,
  userSignin,
  userProfile,
  userSignup,
  updateProfile,
  deleteUser,
  allAgents,
} = require('../controllers/userController')
const loginChecker = require('../middlewares/auth/loginChecker')
const roleChecker = require('../middlewares/auth/roleChecker')
const {
  userProfileUpdateValidator,
} = require('../middlewares/dataValidation/userValidator')
const {
  validationHandler,
} = require('../middlewares/dataValidation/validationHandler')
const avatarUpload = require('../middlewares/upload/avatarUpload')

router.route('/signup').post(avatarUpload, userSignup)
router.route('/signin').post(userSignin)
router.route('/profile').get(loginChecker, userProfile)
router.route('/agents').get(allAgents)
router
  .route('/profile/update')
  .put(
    loginChecker,
    avatarUpload,
    userProfileUpdateValidator,
    validationHandler,
    updateProfile
  )
router.route('/').get(loginChecker, roleChecker('admin'), allUser)
router
  .route('/delete/:id')
  .delete(loginChecker, roleChecker('admin'), deleteUser)

// Module Exports
module.exports = router
