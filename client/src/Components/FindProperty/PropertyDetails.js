import React from 'react';
import AgentContact from '../Sections/AgentContact';
import Footer from '../Sections/Footer';
import Header from '../Sections/Header';
import ImageGallery from 'react-image-gallery';

const PropertyDetails = () => {

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
        original: 'https://lid.zoocdn.com/u/1600/1200/add9afffa1283af1895050b8ab2e7b18d0f92c25.jpg:p',
        thumbnail: 'https://lid.zoocdn.com/u/1600/1200/add9afffa1283af1895050b8ab2e7b18d0f92c25.jpg:p',
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
    <div>
      <Header/>
      <div className="relative bg-gray-100 py-10">
        <div className="max-w-screen-lg mx-auto">
          <div className="bg-white rounded-lg shadow py-6 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-10 xl:gap-x-10">
              <div className="lg:col-span-8">
                <div className=''>
                  <ImageGallery
                    items={property[0].imageGallery} 
                    showIndex= {true}
                  />
                </div>
              </div>
              <div className="lg:col-span-4">
                <AgentContact/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default PropertyDetails;