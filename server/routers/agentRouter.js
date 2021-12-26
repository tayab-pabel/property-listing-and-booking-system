// External Dependencies:
const express = require('express')
const router = express.Router()

// Internal Dependencies:
const { agentDetails } = require('../controllers/agentController')

// Routing:
router.route('/:id').get(agentDetails)

// Module Exports:
module.exports = router
