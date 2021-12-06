import { LocationMarkerIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';

const Agents = () => {
  // const agents = [
  //   {
  //     role: 'Agent',
  //     name: 'Benham and Reeves',
  //     branch: 'Hampstead',
  //     email: 'contact@benhams.com',
  //     phoneNumber: '+44 20 3463 7502',
  //     logoUrl:
  //       'https://st.zoocdn.com/zoopla_static_agent_logo_(634288).png',
  //     address: {
  //       location: '80, Satmasjid Road, Dhanmondi R/A',
  //       city: 'Dhaka',
  //       postalCode: '1209'
  //     },
  //     overview: 'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
  //     totalPropertyForSale: '50',
  //     avgAskingPriceForSale: '5,00,000',
  //     avgListingTimeForSale: '20',
  //     totalPropertyForRent: '70',
  //     avgAskingPriceForRent: '40,000',
  //     avgListingTimeForRent: '10',
  //   },
  //   {
  //     role: 'Agent',
  //     name: 'Benham and Reeves',
  //     branch: 'Hampstead',
  //     email: 'contact@benhams.com',
  //     phoneNumber: '+44 20 3463 7502',
  //     logoUrl:
  //       'https://st.zoocdn.com/zoopla_static_agent_logo_(634288).png',
  //     address: {
  //       location: '80, Satmasjid Road, Dhanmondi R/A',
  //       city: 'Dhaka',
  //       postalCode: '1209'
  //     },
  //     overview: 'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
  //     totalPropertyForSale: '50',
  //     avgAskingPriceForSale: '5,00,000',
  //     avgListingTimeForSale: '20',
  //     totalPropertyForRent: '70',
  //     avgAskingPriceForRent: '40,000',
  //     avgListingTimeForRent: '10',
  //   },
  //   {
  //     role: 'Agent',
  //     name: 'Benham and Reeves',
  //     branch: 'Hampstead',
  //     email: 'contact@benhams.com',
  //     phoneNumber: '+44 20 3463 7502',
  //     logoUrl:
  //       'https://st.zoocdn.com/zoopla_static_agent_logo_(634288).png',
  //     address: {
  //       location: '80, Satmasjid Road, Dhanmondi R/A',
  //       city: 'Dhaka',
  //       postalCode: '1209'
  //     },
  //     overview: 'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
  //     totalPropertyForSale: '50',
  //     avgAskingPriceForSale: '5,00,000',
  //     avgListingTimeForSale: '20',
  //     totalPropertyForRent: '70',
  //     avgAskingPriceForRent: '40,000',
  //     avgListingTimeForRent: '10',
  //   },
    
  // ]

  const agent = {
    role: 'Agent',
    name: 'Benham and Reeves',
    branch: 'Hampstead',
    email: 'info@benhams.com',
    phoneNumber: '+44 20 3463 7502',
    logoUrl:
      'https://st.zoocdn.com/zoopla_static_agent_logo_(634289).png',
    address: {
      location: 'Dhanmondi R/A',
      city: 'Dhaka',
      postalCode: '1209'
    },
    overview: 'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
    totalPropertyForSale: '50',
    avgAskingPriceForSale: '5,00,000',
    avgListingTimeForSale: '20',
    totalPropertyForRent: '70',
    avgAskingPriceForRent: '40,000',
    avgListingTimeForRent: '10',
  }

  return (
    <div> 
      {/* <div role="list" className="max-w-6xl mx-auto px-4 py-10 lg:py-10">
        {agents.map((agent) => (
          <div key={agent.email} className="border border-blue-dark mt-5 bg-white rounded-lg shadow">
            <div className="w-full p-6">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <img className="w-28" src={agent.logoUrl} alt="" />
                  <div></div>
                  <h3 className="text-2xl text-blue-dark font-medium truncate">{agent.name} - {agent.branch}</h3>
                  
                </div>
                <p className="mt-3 text-blue-dark text-sm truncate">{agent.overview}</p>
              </div>
              
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="w-0 flex-1 flex">
                  <a
                    href={`mailto:${agent.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-blue-dark"
                  >
                    <MailIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Email</span>
                  </a>
                </div>
                <div className="-ml-px w-0 flex-1 flex">
                  <a
                    href={`tel:${agent.phoneNumber}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-blue-dark"
                  >
                    <PhoneIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">Call</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    
    <div class="max-w-screen-xl mx-auto px-5 py-10 lg:py-10">
      <div className="bg-white border border-blue-dark lg:grid lg:grid-cols-10 shadow p-5 rounded-lg">

        <div className="lg:col-span-1">
          <img
            className="w-28"
            src= {agent.logoUrl}
            alt="Agent Logo"
          />
        </div>

        <div className="lg:col-span-4 mt-5 lg:mt-0 lg:ml-4">
          <h2 className="text-2xl font-bold text-blue-dark">
            {agent.name} - {agent.branch}
          </h2>
          <div className="mt-1 flex items-center font-medium text-blue-dark capitalize">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light"
              aria-hidden="true"
            />
            {agent.address.location}, {agent.address.city} - {agent.address.postalCode}
          </div>
          <p className="mt-2 text-sm text-blue-dark">{agent.overview.split(' ').slice(0, 25).join(' ')}</p>
        </div>
        
        <div className="lg:col-span-3 mt-5 lg:mt-0 lg:ml-4">
          
          <h3 className="text-lg font-bold text-blue-dark">
            Properties on Property Market
          </h3>

          <div className="mt-2 flex">
            <div className="">
              <h1 className="text-lg font-semibold text-blue-light">{agent.totalPropertyForRent}</h1>
              <p className="text-sm text-blue-dark font-medium">For Rent</p>
            </div>
            <div className="ml-5">
              <h1 className="text-lg font-semibold text-blue-light">{agent.avgAskingPriceForRent}</h1>
              <p className="text-sm text-blue-dark font-medium">Avg. asking price</p>
            </div>
            <div className="ml-5">
              <h1 className="text-lg font-semibold text-blue-light">{agent.avgListingTimeForRent} weeks</h1>
              <p className="text-sm text-blue-dark font-medium">Avg. posting time</p>
            </div>
          </div>
          
          <div className="mt-2 flex">
            <div className="">
              <h1 className="text-lg font-semibold text-blue-light">{agent.totalPropertyForSale}</h1>
              <p className="text-sm text-blue-dark font-medium">For Rent</p>
            </div>
            <div className="ml-5">
              <h1 className="text-lg font-semibold text-blue-light">{agent.avgAskingPriceForSale}</h1>
              <p className="text-sm text-blue-dark font-medium">Avg. asking price</p>
            </div>
            <div className="ml-5">
              <h1 className="text-lg font-semibold text-blue-light">{agent.avgListingTimeForSale} weeks</h1>
              <p className="text-sm text-blue-dark font-medium">Avg. posting time</p>
            </div>
          </div>
          
        </div>

        <div className="lg:col-span-2 mt-5 lg:mt-0 lg:ml-4">
          <h3 className="text-lg font-bold text-blue-dark">
            Contact Information
          </h3>
          <div className="mt-2 flex text-blue-dark">
            <button
              type="button"
              className="w-full inline-flex items-center px-3 py-2 shadow-sm leading-4 font-medium rounded-full text-white bg-blue-light"
            >
              <PhoneIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {agent.phoneNumber}
            </button>
          </div>
          <div className="mt-1 items-center flex text-blue-dark">
            <button
              type="button"
              className="w-full inline-flex items-center px-3 py-2 shadow-sm leading-4 font-medium rounded-full text-white bg-blue-light"
              >
              <MailIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
              {agent.email}
            </button>
          </div>
        </div>

      </div>
    </div>
      

    </div>
  );
};

export default Agents;