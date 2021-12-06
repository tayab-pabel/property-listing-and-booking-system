import React from 'react'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import Agents from './Agents'
import CallToAction from '../Sections/CallToAction'
import FindAgentSearchFilter from './FindAgentSearchFilter'

const FindAgent = () => {
  return (
    <div>
      <Header/>
      <FindAgentSearchFilter/>
      <Agents/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default FindAgent;