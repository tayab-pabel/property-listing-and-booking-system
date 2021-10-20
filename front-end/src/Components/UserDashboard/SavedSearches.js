import React from 'react';
import Header from '../Sections/Header';
import Sidebar from './Sidebar';

const SavedSearches = () => {

  
  return (
    <div>
      <Header></Header>
      <div className="h-full">
        <main className="max-w-full mx-auto">
          <div className="lg:grid lg:grid-cols-12">
            
            <div className="bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen">
              <Sidebar></Sidebar>
            </div>

            <div className="bg-gray-100 lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen ">
              <div className="bg-white shadow sm:rounded-lg py-6 sm:px-0 md:px-6 lg:px-6 lg:py-6">
                <div className="max-w-full">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h2 className="text-2xl font-extrabold text-blue-dark">Saved Searches</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>   
  );
};

export default SavedSearches;