import React from 'react'
import Agents from './Agents'
import CallToAction from '../Sections/CallToAction'
import FindAgentSearchFilter from './FindAgentSearchFilter'
import Header from '../Sections/Header'
import Footer from '../Sections/Footer'

const FindAgent = () => {
  return (
    <div>
      <Header />
      <FindAgentSearchFilter />
      <Agents />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default FindAgent
