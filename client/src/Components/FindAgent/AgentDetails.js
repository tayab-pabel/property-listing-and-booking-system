import React, { Fragment } from 'react'
import { LocationMarkerIcon, PhoneIcon } from '@heroicons/react/outline'
import { Tab } from '@headlessui/react'
import AgentContact from '../Sections/AgentContact'
import Header from '../Sections/Header'
import Footer from '../Sections/Footer'

const AgentDetails = () => {
  const agent = {
    role: 'Agent',
    name: 'Benham and Reeves',
    branch: 'Hampstead',
    email: 'info@benhams.com',
    phoneNumber: '+44 20 3463 7502',
    logoUrl: 'https://st.zoocdn.com/zoopla_static_agent_logo_(634289).png',
    address: {
      location: 'Dhanmondi R/A',
      city: 'Dhaka',
      postalCode: '1209',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14608.614033009866!2d90.37326543776177!3d23.741904695242088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4d3068e8a1%3A0xcbebaedd39043ca6!2sUniversity%20of%20Development%20Alternative!5e0!3m2!1sen!2sbd!4v1638872109573!5m2!1sen!2sbd',
    },
    overview:
      'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
    about: {
      photos: [
        'https://st.zoocdn.com/zpg_agent_static_agent_profile_images_(62759558).jpg',
        'https://st.zoocdn.com/zpg_agent_static_agent_profile_images_(62759558).jpg',
      ],
      teamMembers: [
        {
          id: '01',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '02',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '03',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: '04',
          name: 'Dele Lawal Marla',
          phoneNumber: '123456789',
          email: 'dele@benhams.com',
          designation: 'Manager',
          avatar:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
    property: [
      {
        purpose: 'Sale',
        title: 'Property For Sale',
        totalProperty: '50',
        avgAskingPrice: '5,00,000',
        avgListingTime: '20',
      },
      {
        purpose: 'Rent',
        title: 'Property For Rent',
        totalProperty: '70',
        avgAskingPrice: '40,000',
        avgListingTime: '10',
      },
    ],
  }
  const properties = {
    sale: [
      {
        id: 1,
        purpose: 'sale',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
      {
        id: 2,
        purpose: 'sale',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
      {
        id: 1,
        purpose: 'sale',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
    ],
    rent: [
      {
        id: 1,
        purpose: 'rent',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
      {
        id: 2,
        purpose: 'rent',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
      {
        id: 1,
        purpose: 'rent',
        propertType: 'Apartment',
        name: 'Two bedrooms appertment',
        address: {
          location: 'Dhanmondi',
          city: 'Dhaka',
          postalCode: '1215',
        },
        size: '1200',
        price: '25,000',
        beds: '3',
        baths: '3',
        featuredImage:
          'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
      },
    ],
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <Header/>
      <div className='relative bg-gray-100 py-10'>
        <div className='max-w-screen-lg mx-auto'>
          <div className='bg-white rounded-lg shadow'>
            <div className=''>
              <div className='mx-auto py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 xl:gap-x-10'>
                  <div className='lg:col-span-8'>
                    <div className=''>
                      <img
                        className='w-28'
                        src={agent.logoUrl}
                        alt='Agent Logo'
                      />
                    </div>
                    <div className='mt-2'>
                      <h1 className='text-2xl font-extrabold tracking-tight text-blue-dark'>
                        {agent.name} - {agent.branch}
                      </h1>

                      <div className='mt-1 flex items-center'>
                        <LocationMarkerIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                          aria-hidden='true'
                        />
                        <p className='text-sm text-blue-dark capitalize'>
                          {agent.address.location}, {agent.address.city} -{' '}
                          {agent.address.postalCode}
                        </p>
                      </div>

                      <div className='mt-1 flex items-center'>
                        <PhoneIcon
                          className='flex-shrink-0 mr-1.5 h-5 w-5 text-blue-light'
                          aria-hidden='true'
                        />
                        <p className='text-sm text-blue-dark capitalize'>
                          {agent.phoneNumber}
                        </p>
                      </div>
                      <div className='mt-3'>
                        <h3 className='text-sm font-bold text-blue-dark'>
                          Follow on
                        </h3>
                        <ul
                          role='list'
                          className='flex items-center space-x-3 mt-2'
                        >
                          <li>
                            <a
                              href='#'
                              className='flex items-center justify-center w-6 h-6 text-blue-dark hover:text-blue-light'
                            >
                              <span className='sr-only'>Web</span>
                              <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fas'
                                data-icon='globe'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 496 512'
                              >
                                <path
                                  fill='currentColor'
                                  d='M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z'
                                  class=''
                                ></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center justify-center w-6 h-6 text-blue-dark hover:text-blue-light'
                            >
                              <span className='sr-only'>Facebook</span>
                              <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center justify-center w-6 h-6 text-blue-dark hover:text-blue-light'
                            >
                              <span className='sr-only'>Instagram</span>
                              <svg
                                className='w-6 h-6'
                                aria-hidden='true'
                                fill='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  fillRule='evenodd'
                                  d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                  clipRule='evenodd'
                                />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center justify-center w-6 h-6 text-blue-dark hover:text-blue-light'
                            >
                              <span className='sr-only'>Twitter</span>
                              <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                fill='currentColor'
                                viewBox='0 0 20 20'
                              >
                                <path d='M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84' />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href='#'
                              className='flex items-center justify-center w-6 h-6 text-blue-dark hover:text-blue-light'
                            >
                              <span className='sr-only'>Linkedin</span>
                              <svg
                                className='w-5 h-5'
                                aria-hidden='true'
                                focusable='false'
                                data-prefix='fab'
                                data-icon='linkedin-in'
                                role='img'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 448 512'
                              >
                                <path
                                  fill='currentColor'
                                  d='M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z'
                                  class=''
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-full mt-5'>
                      <Tab.Group as='div'>
                        <div className='border-b border-gray-200'>
                          <Tab.List className='-mb-px flex space-x-8'>
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? 'border-blue-light text-blue-light'
                                    : 'border-transparent text-blue-dark hover:border-gray-300',
                                  'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                                )
                              }
                            >
                              Overview
                            </Tab>
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? 'border-blue-light text-blue-light'
                                    : 'border-transparent text-blue-dark hover:border-gray-300',
                                  'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                                )
                              }
                            >
                              About Us
                            </Tab>
                            <Tab
                              className={({ selected }) =>
                                classNames(
                                  selected
                                    ? 'border-blue-light text-blue-light'
                                    : 'border-transparent text-blue-dark hover:border-gray-300',
                                  'whitespace-nowrap py-3 border-b-2 font-medium text-sm'
                                )
                              }
                            >
                              Location
                            </Tab>
                          </Tab.List>
                        </div>
                        <Tab.Panels as={Fragment}>
                          <Tab.Panel className='mt-5'>
                            <h3 className='sr-only'>Overview</h3>
                            <p className='text-sm text-blue-dark'>
                              {agent.overview}
                            </p>

                            <div className='mt-5 flex flex-col'>
                              <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                                <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                                  <div className='overflow-hidden border border-blue-dark shadow rounded-lg'>
                                    <table className='min-w-full divide-y divide-blue-dark'>
                                      <thead className='bg-gray-100'>
                                        <tr>
                                          <th
                                            scope='col'
                                            className='p-3 text-left text-xs font-bold text-blue-dark'
                                          >
                                            Properties
                                          </th>
                                          <th
                                            scope='col'
                                            className='p-3 text-left text-xs font-bold text-blue-dark'
                                          >
                                            Number of properties
                                          </th>
                                          <th
                                            scope='col'
                                            className='p-3 text-left text-xs font-bold text-blue-dark'
                                          >
                                            Avg. asking price
                                          </th>
                                          <th
                                            scope='col'
                                            className='p-3 text-left text-xs font-bold text-blue-dark'
                                          >
                                            Avg. listing time
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className='bg-white divide-y divide-blue-dark'>
                                        {agent.property.map((property) => (
                                          <tr key={property.email}>
                                            <td className='p-3 text-xs font-medium text-blue-dark'>
                                              {property.title}
                                            </td>
                                            <td className='p-3 text-xs font-medium text-center text-blue-dark'>
                                              {property.totalProperty}
                                            </td>
                                            <td className='p-3 text-xs font-medium text-center text-blue-dark'>
                                              {property.avgAskingPrice}
                                            </td>
                                            <td className='p-3 text-xs font-medium text-center text-blue-dark'>
                                              {property.avgListingTime}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className='mt-5'>
                              <h2 className='text-xl font-bold tracking-tight text-blue-dark mb-2'>
                                Properties for sale
                              </h2>
                              <div className='mt-1 shadow rounded-lg border border-blue-dark'>
                                <ul
                                  role='list'
                                  className='divide-y divide-blue-dark'
                                >
                                  {properties.sale.map((property) => (
                                    <li key={property.id}>
                                      <a href='#' className='block'>
                                        <div className='p-4'>
                                          <div className='sm:flex items-center'>
                                            <div className=''>
                                              <img
                                                className='sm:w-40 rounded-lg'
                                                src={property.featuredImage}
                                                alt='Agent Logo'
                                              />
                                            </div>
                                            <div className='sm:ml-3 mt-3 sm:mt-0'>
                                              <p className='text-lg font-bold text-blue-dark'>
                                                {property.price} BDT
                                              </p>
                                              <p className='text-base font-medium text-blue-dark truncate'>
                                                {property.address.location},{' '}
                                                {property.address.city},{' '}
                                                {property.address.postalCode}
                                              </p>
                                              <p className='text-sm font-medium text-blue-dark truncate'>
                                                {property.name}
                                              </p>
                                              <p className='text-xs font-medium text-blue-dark truncate'>
                                                {property.beds} Beds,{' '}
                                                {property.baths} Bats,{' '}
                                                {property.size} Sqft
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>

                            <div className='mt-5'>
                              <h2 className='text-xl font-bold tracking-tight text-blue-dark mb-2'>
                                Properties for rent
                              </h2>
                              <div className='mt-1 shadow rounded-lg border border-blue-dark'>
                                <ul
                                  role='list'
                                  className='divide-y divide-blue-dark'
                                >
                                  {properties.rent.map((property) => (
                                    <li key={property.id}>
                                      <a href='#' className='block'>
                                        <div className='p-4'>
                                          <div className='flex items-center'>
                                            <div className=''>
                                              <img
                                                className='w-40 rounded-lg'
                                                src={property.featuredImage}
                                                alt='Agent Logo'
                                              />
                                            </div>
                                            <div className='ml-3'>
                                              <p className='text-lg font-bold text-blue-dark'>
                                                {property.price} BDT
                                              </p>
                                              <p className='text-base font-medium text-blue-dark truncate'>
                                                {property.address.location},{' '}
                                                {property.address.city},{' '}
                                                {property.address.postalCode}
                                              </p>
                                              <p className='text-sm font-medium text-blue-dark truncate'>
                                                {property.name}
                                              </p>
                                              <p className='text-xs font-medium text-blue-dark truncate'>
                                                {property.beds} Beds,{' '}
                                                {property.baths} Bats,{' '}
                                                {property.size} Sqft
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </Tab.Panel>

                          <Tab.Panel className='mt-5'>
                            <h3 className='sr-only'>About Us</h3>
                            <div>
                              <h2 className='text-xl font-bold tracking-tight text-blue-dark mb-2'>
                                Photos
                              </h2>
                              <img
                                className='w-full shadow rounded-lg'
                                src={agent.about.photos[0]}
                                alt='Agent Logo'
                              />
                            </div>
                            <div className='mt-5'>
                              <h2 className='text-xl font-bold tracking-tight text-blue-dark mb-2'>
                                Team Members
                              </h2>
                              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                                {agent.about.teamMembers.map((member) => (
                                  <div
                                    key={member.email}
                                    className='relative rounded-lg border border-blue-dark bg-white px-6 py-5 shadow flex items-center space-x-3'
                                  >
                                    <div className='flex-shrink-0'>
                                      <img
                                        className='h-10 w-10 rounded-full'
                                        src={member.avatar}
                                        alt=''
                                      />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                      <p className='text-sm font-bold text-blue-dark'>
                                        {member.name}
                                      </p>
                                      <p className='text-xs text-blue-light truncate'>
                                        {member.designation}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </Tab.Panel>

                          <Tab.Panel className='mt-5'>
                            <h3 className='sr-only'>Branch Location</h3>
                            <div>
                              <iframe
                                className='border-none w-full h-96 shadow rounded-lg'
                                src={agent.address.map}
                              ></iframe>
                            </div>
                          </Tab.Panel>
                        </Tab.Panels>
                      </Tab.Group>
                    </div>
                  </div>

                  <div className='lg:col-span-4 mt-10 lg:mt-0'>
                    <AgentContact />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AgentDetails
