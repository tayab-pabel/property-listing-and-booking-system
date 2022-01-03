// External Dependencies:
const createError = require('http-errors')
const multerObjectMaker = require('../utilities/multerObjectMaker')

/**
 * @desc This API End Poient Will Upload Single Image Using Multer.
 * @route POST/api/upload/single
 * @access Public
 */

const singleUploader = async (req, res, next) => {
  try {
    const uploadObject = multerObjectMaker(
      'single',
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      1000000,
      'Unsupported Image format !'
    )
    uploadObject.single('avatar')(req, res, (error) => {
      if (error) {
        next(createError(500, error.message))
      } else {
        res.json(req.file)
      }
    })
  } catch (error) {
    next(createError(500, 'File Upload Failed'))
  }
}

/**
 * @desc This API End Poient Will Upload Multiple Image Using Multer.
 * @route POST/api/upload/multiple
 * @access Public
 */
const multipleUploader = async (req, res, next) => {
  try {
    const uploadObject = multerObjectMaker(
      'multiple',
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      1000000,
      'Unsupported Image format !'
    )
    uploadObject.array('avatars', 5)(req, res, (error) => {
      if (error) {
        next(createError(500, error.message))
      } else {
        res.json(req.files)
      }
    })
  } catch (error) {
    next(createError(500, 'File Upload Failed'))
  }
}

// Module Exports:
module.exports = { singleUploader, multipleUploader }
