// External Dependencies
const colors = require('colors')
require('dotenv').config()

// Internal Module
const mongoConnection = require('../config/db')
const Agent = require('../models/agentModel')
const Property = require('../models/PropertyModel')
const People = require('../models/userModel')
const { defaultUsers, demoProperties, demoAgent } = require('./mockData')

// Database connection
mongoConnection()

// Data Import Function:
const importData = async () => {
  try {
    await People.deleteMany()
    await Property.deleteMany()
    const user = await People.insertMany(defaultUsers)
    const perpareAgent = demoAgent.map((agent) => {
      return { ...agent, user: user[0]._id }
    })
    const agent = await Agent.insertMany(perpareAgent)
    const prepareProperties = demoProperties.map((properties) => {
      return {
        ...properties,
        agent: agent[0]._id,
        agentName: agent[0].agentName,
        agentLogo: agent[0].agentLogo,
        agentPhoneNumber: agent[0].agentPhoneNumber,
      }
    })
    await Property.insertMany(prepareProperties)
    console.log(
      'Default Test User Data Successfully Inserted !'.magenta.inverse
    )
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Data Destroy Function:
const destroyData = async () => {
  try {
    await People.deleteMany()
    await Property.deleteMany()
    console.log(`Default Test User Data Successfully Destroyed !`.magenta.bold)
    process.exit()
  } catch (error) {
    console.log(`Error: ${error}`.red.inverse)
    process.exit(1)
  }
}

// Manage Seeder Command:
if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
