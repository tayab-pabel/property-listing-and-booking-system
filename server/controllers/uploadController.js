// External Dependencies:
const createError = require('http-errors')
const multerObjectMaker = require('../utilities/multerObjectMaker')

/**
 * @desc This API End Poient Will Upload Single Image Using Multer.
 * @route POST/api/upload/single
 * @access Protected
 */

const singleUploader = async (req, res, next) => {
  try {
    let name = req.query.name
    const uploadObject = multerObjectMaker(
      `${name}s`,
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      1000000,
      'Unsupported Image format !'
    )
    uploadObject.single(name)(req, res, (error) => {
      if (error) {
        next(createError(500, error.message))
      } else {
        const data = {
          ...req.file,
          link:
            process.env.LIVE_API_URL +
            '/uploads/' +
            name +
            's/' +
            req.file.filename,
        }
        res.json(data)
      }
    })
  } catch (error) {
    next(createError(500, 'File Upload Failed'))
  }
}

/**
 * @desc This API End Poient Will Upload Multiple Image Using Multer.
 * @route POST/api/upload/multiple
 * @access Protected
 */
const multipleUploader = async (req, res, next) => {
  try {
    let name = req.query.name
    const uploadObject = multerObjectMaker(
      `${name}s`,
      ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      1000000,
      'Unsupported Image format !'
    )
    uploadObject.array(name, 5)(req, res, (error) => {
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
