import React from 'react';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';
import FindAgentSearchFilter from './FindAgentSearchFilter';

const FindAgent = () => {
  return (
    <div>
      <Header/>
      <FindAgentSearchFilter/>
      <Footer/>
    </div>
  );
};

export default FindAgent;