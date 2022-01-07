// External Dependencies
const createError = require('http-errors')
const bcrypt = require('bcrypt')
const path = require('path')
const { unlink } = require('fs')

// Internal Dependencies
const People = require('../models/userModel')
const jwtTokenGenerator = require('../utilities/jwtTokenGenerator')

/**
 * @description Signup new user && Signin with auth
 * @route POST /api/user/signup
 * @access Public
 */
const userSignup = async (req, res, next) => {
  try {
    let newUser
    // Make Complete User Object
    if (req.files && req.files.length > 0) {
      newUser = new People({
        ...req.body,
        avatar: req.files[0].filename,
      })
    } else {
      newUser = new People({ ...req.body })
    }
    const result = await newUser.save()

    // Login User after successfully registered
    if (result) {
      const userData = {
        _id: result._id,
        name: result.name,
        email: result.email,
        mobile: result.mobile,
        avatar: result.avatar,
        role: result.role,
      }
      // Generate Auth Token
      const token = jwtTokenGenerator(userData)

      // Set Cookie:
      res.cookie(process.env.COOKIE_NAME, token, {
        maxAge: process.env.JWT_EXPIRY,
        httpOnly: true,
        signed: true,
      })
      res.status(200).json({ ...userData, token })
    } else {
      next(createError(500, 'Registration Failed!'))
    }
  } catch (error) {
    next(createError(500, 'Registration Failed!'))
  }
}

/**
 * @description Signin a user with auth token.
 * @route POST /api/user/signin
 * @access Public
 */
const userSignin = async (req, res, next) => {
  const { email, password } = req.body
  try {
    const user = await People.findOne({ email })
    const passwordIsMatched = await bcrypt.compare(password, user.password)
    if (user && passwordIsMatched) {
      const userData = {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile: user.mobile,
        avatar: user.avatar,
        role: user.role,
      }
      // Generate Auth Token
      const token = jwtTokenGenerator(userData)

      // Set Cookie:
      res.cookie(process.env.COOKIE_NAME, token, {
        maxAge: process.env.JWT_EXPIRY,
        httpOnly: true,
        signed: true,
      })

      res.status(200).json({ ...userData, token })
    } else {
      next(createError(401, 'Authentication Failed!'))
    }
  } catch (error) {
    next(createError(401, 'Authentication Failed!'))
  }
}

/**
 * @description Retrun Logged in user profile.
 * @route GET /api/user/profile
 * @access Protected
 */

const userProfile = async (req, res, next) => {
  try {
    const user = await People.findById(req.user._id)
    res.status(200).json(user)
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @description Update Current User Profile.
 * @route PUT /api/user/profile/update
 * @access Protected
 */

const updateProfile = async (req, res, next) => {
  try {
    const user = await People.findById(req.user._id)
    if (user) {
      user.name = req.body.name || user.name
      user.email = req.body.email || user.email
      user.mobile = req.body.mobile || user.mobile
      user.website = req.body.website || user.website
      user.description = req.body.description || user.description
      user.social.facebook = req.body.facebook || user.social.facebook
      user.social.twitter = req.body.twitter || user.social.twitter
      user.social.instagram = req.body.instagram || user.social.instagram
      user.social.linkedin = req.body.linkedin || user.social.linkedin
      user.address.addressLine1 =
        req.body.addressLine1 || user.address.addressLine1
      user.address.addressLine2 =
        req.body.addressLine2 || user.address.addressLine2
      user.address.city = req.body.city || user.address.city
      user.address.postCode = req.body.postCode || user.address.postCode

      // Manage Avatar
      if (req.files && req.files.length > 0) {
        if (user.avatar !== 'demoavatar.png') {
          const filePath = path.join(
            __dirname,
            '../public/uploads/avatars/',
            user.avatar
          )
          unlink(filePath, (err) => {
            if (err) {
              console.log(err)
            } else {
              user.avatar = req.files[0].filename
            }
          })
        } else {
          user.avatar = req.files[0].filename
        }
      }

      const result = await user.save()

      if (result) {
        const userData = {
          _id: result._id,
          name: result.name,
          email: result.email,
          mobile: result.mobile,
          avatar: result.avatar,
          role: result.role,
        }
        // Generate Auth Token
        const token = jwtTokenGenerator(userData)

        // Set Cookie:
        res.cookie(process.env.COOKIE_NAME, token, {
          maxAge: process.env.JWT_EXPIRY,
          httpOnly: true,
          signed: true,
        })
        res.status(200).json({ ...userData, token })
      } else {
        next(createError(400, 'Unknown User!'))
      }
    } else {
      next(createError(400, 'Unknown User!'))
    }
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @description Return All users.
 * @route GET /api/user
 * @access Protected (Admin Only)
 */

const allUser = async (req, res, next) => {
  try {
    const users = await People.find()
    res.status(200).json(users)
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @description Return All Agents
 * @route GET /api/agents
 * @access Public
 */

const allAgents = async (req, res, next) => {
  try {
    const agents = await People.find({ role: 'agent' })
    res.status(200).json(agents)
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

/**
 * @description Delete a user.
 * @route DELETE /api/user
 * @access Protected (Admin Only)
 */

const deleteUser = async (req, res, next) => {
  try {
    const user = await People.findById(req.params.id)
    if (user) {
      if (user.avatar !== 'demoavatar.png') {
        const filePath = path.join(
          __dirname,
          '../public/uploads/avatars/',
          user.avatar
        )
        unlink(filePath, (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      user.remove()
      res.status(200).json({ msg: 'User Successfully Deleted!' })
    } else {
      next(createError(400, 'Unknown User!'))
    }
  } catch (error) {
    next(createError(500, 'Server Error!'))
  }
}

// Module Exports
module.exports = {
  userSignup,
  userSignin,
  allUser,
  userProfile,
  updateProfile,
  deleteUser,
  allAgents,
}
