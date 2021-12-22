import React, { Component } from 'react'
import CallToAction from '../Sections/CallToAction'
import Hero from '../Sections/Hero'
import Locations from '../Sections/Locations'

export class Home extends Component {
  render() {
    return (
      <div>
        <Hero></Hero>
        <Locations></Locations>
        <CallToAction></CallToAction>
      </div>
    )
  }
}

export default Home
