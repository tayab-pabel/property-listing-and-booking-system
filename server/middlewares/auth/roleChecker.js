// External Dependencies
const createError = require('http-errors')

// Function will Check headers authorization Bearer token
const roleChecker = (role) => (req, res, next) => {
  if (req.user && req.user.role && role.includes(req.user.role)) {
    next()
  } else {
    next(createError(401, `Access Denied! ${role} Only.`))
  }
}

module.exports = roleChecker
