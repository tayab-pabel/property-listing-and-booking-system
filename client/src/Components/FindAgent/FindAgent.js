import React from 'react'
import Agents from './Agents'
import CallToAction from '../Sections/CallToAction'
import FindAgentSearchFilter from './FindAgentSearchFilter'

const FindAgent = () => {
  return (
    <div>
      <FindAgentSearchFilter />
      <Agents />
      <CallToAction />
    </div>
  )
}

export default FindAgent
