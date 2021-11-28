import React from 'react';
import Demo from './Demo';
import Footer from './Footer';
import Header from './Header';
import SearchFilter from './SearchFilter';

const Search = () => {
  return (
    <div>
      <Header></Header>
      {/* <SearchFilter></SearchFilter> */}
      <Demo></Demo>
      <Footer></Footer>
    </div>
  );
};

export default Search;