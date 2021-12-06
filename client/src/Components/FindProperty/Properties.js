import { LocationMarkerIcon } from '@heroicons/react/solid';
import { HeartIcon, MailIcon, PhoneIcon } from '@heroicons/react/outline';
import React from 'react';
import ImageGallery from 'react-image-gallery';

const Properties = () => {
  
  const property = [{
    id: '001',
    postType: 'basic',
    purpose: 'rent',
    propertType: 'Apartment',
    furnishType: 'Unfurnished',
    postedDate: '3rd Dec 2021',
    availableDate: '1st Jan 2022',
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
    floor: '4',
    floorPlanImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_FLP_00_0000.png',
    featuredImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
    imageGallery: [
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_10_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_10_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',
      },
      {
        original: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
        thumbnail: 'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
      },
    ],
    featuresAndAmenities: [
      'Reception Area',
      'Lobby in Building',
      'Tiled Floor',
      'Flooring',
      'Balcony or Terrace',
      'Elevator',
      'Parking',
      'Guest Parking',
      'Fire Exit',
      'Fire Protection',
      'Gas',
      'Cylinder Gas',
      'Water',
      'Hot Water',
      'Electricity',
      'Electricity Backup',
      'Pool',
      'Gymnasium',
      'Garden',
      'Solar Panels',
      'Servant Room',
      'Servant Toilet',
      'Well Ventilated',
      'Conference Room',
      'Stuff Watch Station',
      'Manager Room',
      'Executive Room',
      'Supervisor Room',
      'Cafeteria',
      'File Cabinet',
      'Coffee Table',
      'Office Sofa',
      'Training Chair',
      'Storage Cabinet',
      'Maintenance Staff',
      'Cleaning Service',
    ],
    businessAndCommunication: ['Intercom', 'Broadband', 'Satellite or Cable TV'],
    security: ['Security Alarm System', 'Electronic Security', 'CCTV Camera'],
    descriptions:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat, maiores!',
    agentInfo: {
      name: 'Benham and Reeves',
      phoneNumber: '+44 20 3463 7502',
      email: 'info@benhams.com',
      address: {
        location: 'Dhanmondi',
        city: 'Dhaka',
        postalCode: '1215',
      },
      about:
        'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St John’s Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
      logoUrl: 'https://st.zoocdn.com/zoopla_static_agent_logo_(634289).png',
    },
  }]

  return (
    <div className="relative bg-white py-10">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6">
        <div className="lg:grid lg:grid-cols-2 rounded-lg border border-blue-dark z-10 cursor-pointer">
          <div>
            <ImageGallery
              items={property[0].imageGallery} 
              showFullscreenButton={false}
              showNav={false}
              showThumbnails={false}
              showPlayButton={false}
              useBrowserFullscreen={false}
              showBullets={true}
            />
          </div>
          <div className='p-5'>
            <span className="flex-shrink-0 inline-block px-2 py-0.5 text-white text-xs bg-blue-light rounded-full">
              {property[0].propertType}
            </span>

            <h2 className="mt-1 text-2xl font-bold text-blue-dark">
              {property[0].price} BDT
            </h2>
            
            <div className='flex'>
              <div className='flex flex-wrap content-center h-8'>
                <span>
                  <svg class="w-5 fill-current text-blue-dark" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23222'>
                    <path d='M5.56 10.2a1.83 1.83 0 011.77-1.86 1.87 1.87 0 010 3.73 1.83 1.83 0 01-1.77-1.87zm16 2.8H4.66V6.47A.46.46 0 004.23 6H2.44a.46.46 0 00-.44.47v11.21h2.67v-1.87h14.66v1.87H22v-4.2a.46.46 0 00-.44-.47zm-3.12-4.2h-8a.46.46 0 00-.44.47v2.8h11.56a3.2 3.2 0 00-3.12-3.27z'/>
                  </svg>
                </span>
                <p className='text-sm text-blue-dark ml-1 font-medium'>{property[0].beds} Beds</p>
              </div>
              <div className='flex flex-wrap content-center ml-3 h-8'>
                <span>
                  <svg class="w-5 fill-current text-blue-dark" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23222'><path d='M2 14c0-.5.5-1 1-1h18c.5 0 1 .5 1 1s-.5 1-1 1H3a1 1 0 01-1-1z'/>
                    <path d='M3 13h18v4.4a1.6 1.6 0 01-1.6 1.6H4.7A1.6 1.6 0 013 17.4V13zm3 6h2v1.4a.6.6 0 01-.5.6h-1a.6.6 0 01-.5-.6zm10 0h2v1.4a.6.6 0 01-.5.6h-1a.6.6 0 01-.5-.6zM5.8 4.7l2.6-1.5a.6.6 0 01.7.2l.7 1.3-3.4 2-.8-1.3a.6.6 0 01.2-.7z'/>
                    <path d='M2.5 13.5V4.8A2.5 2.5 0 014.8 2a2.6 2.6 0 01.4 0c2.9 0 3 1.6 3 1.7a11 11 0 01-.6 1s-.9.5-1 0S6 4 5.4 4s-.9.4-.9 1.2v8.3z'/>
                  </svg>
                </span>
                <p className='text-sm text-blue-dark ml-1 font-medium'>{property[0].beds} Baths</p>
              </div>
              <div className='flex flex-wrap content-center ml-3 h-8'>
                <span className=''>
                  <svg class="w-5 fill-current text-blue-dark" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23222'><path d='M20.1 3H3.9a.9.9 0 00-.9.9v16.2a.9.9 0 00.9.9h16.2a.9.9 0 00.9-.9V3.9a.9.9 0 00-.9-.9zm-.9 8.1h-6.3V4.8h6.3zm-8.1-6.3v6.3H4.8V4.8zm-6.3 8.1h6.3v6.3H4.8zm8.1 6.3v-6.3h6.3v6.3z'/></svg>
                </span>
                <p className='text-sm text-blue-dark ml-1 font-medium'>{property[0].size} Sqft</p>
              </div>
            </div>

            <h3 className="text-lg font-bold text-blue-dark">
              {property[0].name}
            </h3>

            <div className="flex flex-wrap content-center text-sm text-blue-dark capitalize">
              <LocationMarkerIcon 
                className="w-5 text-blue-dark"
                aria-hidden="true"
              />
              <p className='text-sm text-blue-dark ml-1'>
                {property[0].address.location}, {property[0].address.city} - {property[0].address.postalCode}
              </p>
            </div>

            <div className='mt-2'>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-blue-dark shadow-sm text-sm leading-4 font-medium rounded-lg text-blue-dark bg-white"
              >
                <PhoneIcon className="-ml-0.5 mr-1.5 w-5 text-blue-light" aria-hidden="true" />
                Call
              </button>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-blue-dark shadow-sm text-sm leading-4 font-medium rounded-lg text-blue-dark bg-white ml-3"
              >
                <MailIcon className="-ml-0.5 mr-1.5 w-5 text-blue-light" aria-hidden="true" />
                Email
              </button>
              <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-blue-dark shadow-sm text-sm leading-4 font-medium rounded-lg text-blue-dark bg-white ml-3"
              >
                <HeartIcon className="-ml-0.5 mr-1.5 w-5 text-blue-light" aria-hidden="true" />
                Save
              </button>
            </div>

            <div className="mt-1">
              <p className='text-sm text-blue-dark font-bold'>Posted By:</p>
              <img
                className="w-24 mt-1"
                src= {property[0].agentInfo.logoUrl}
                alt="Agent Logo"
              />
            </div>

            <div className="mt-3">
              <p className='text-xs text-blue-dark'>Posted on {property[0].postedDate}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;