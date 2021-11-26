import React, { Component } from 'react'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import Hero from '../Sections/Hero'

export class Home extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Hero></Hero>
        <Footer></Footer>
      </div>
    )
  }
}

export default Home
