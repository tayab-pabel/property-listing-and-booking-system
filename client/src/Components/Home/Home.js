import React, { Component } from 'react'
import CallToAction from '../Sections/CallToAction'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import Hero from '../Sections/Hero'
import Locations from '../Sections/Locations'

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Hero />
        <Locations />
        <CallToAction />
        <Footer />
      </div>
    )
  }
}

export default Home
