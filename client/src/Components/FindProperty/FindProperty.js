import React from 'react'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import CallToAction from '../Sections/CallToAction'
import PropertySearchFilter from './PropertySearchFilter';
import Properties from './Properties';

const FindProperty = () => {
  return (
    <div>
      <Header/>
      <PropertySearchFilter/>
      <Properties/>
      <CallToAction/>
      <Footer/>
    </div>
  );
};

export default FindProperty;