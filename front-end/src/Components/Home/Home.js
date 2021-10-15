import React, { Component } from 'react'
import Hero from '../Sections/Hero/Hero'
import Header from '../Sections/Header/Header'

export class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
      </div>
    )
  }
}

export default Home
