// External Dependencies:
const createError = require('http-errors')
const multerObjectMaker = require('../../utilities/multerObjectMaker')

/**
 * @desc Single Image Upload Middleware
 * @MaxFileSize 1000000kb
 * @MaxFileLimit 1
 * @Supprted ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']/**
 * @RequiredQueryParams  ['avatar', 'property', 'floorPlan']
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
        req.file = data
        next()
      }
    })
  } catch (error) {
    next(createError(500, 'File Upload Failed'))
  }
}

/**
 * @desc Multiple Image Upload Middleware
 * @MaxFileSize 1000000kb
 * @MaxFileLimit 5
 * @Supprted ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
 * @RequiredQueryParams  ['avatar', 'property', 'floorPlan']
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
        const data = req.files.map((file) => {
          return {
            ...file,
            link:
              process.env.LIVE_API_URL +
              '/uploads/' +
              name +
              's/' +
              file.filename,
          }
        })
        res.json(data)
      }
    })
  } catch (error) {
    next(createError(500, 'File Upload Failed'))
  }
}

// Module Exports:
module.exports = { singleUploader, multipleUploader }
