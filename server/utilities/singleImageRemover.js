// External Dependencies:
const path = require('path')
const { unlink } = require('fs')

/**
 * @desc Unlink Single Image User Defined Function
 * @AcceptedParams (FullImagePath)
 * @returns {Boolean}
 */

const unlinkSingleImage = async (imagePath) => {
  try {
    let slicedPath = imagePath.split('/').slice(3).join('/')

    let filePath = path.join(__dirname, '../public/', slicedPath)
    await unlink(filePath, (error) => {
      if (error) {
        console.log(error)
      }
    })
    return true
  } catch (error) {
    return false
  }
}

// Module Exports
module.exports = { unlinkSingleImage }
