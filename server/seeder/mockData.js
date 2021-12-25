// Dummy Users Data:
const defaultUsers = [
  {
    name: 'Nazmul Huda',
    email: 'nazmul@gmail.com',
    phoneNumber: '01746243302',
    password: 'Nazmul@01',
    avatar: 'https://i.ibb.co/phfxcsS/pro-nazmul.webp',
    role: 'admin',
  },
  {
    name: 'Tayab Pabel',
    email: 'pabel@gmail.com',
    phoneNumber: '01746243304',
    password: 'Pabel@01',
    avatar: 'https://i.ibb.co/phfxcsS/pro-nazmul.webp',
  },
]

const demoProperties = [
  {
    postType: 'basic',
    purpose: 'rent',
    propertyCategory: 'residential',
    propertyType: 'apartment',
    propertyTitle: 'Two bedrooms apartment',
    propertyAddress: {
      addressLine1: 'Dhanmondi',
      addressLine2: 'Dhanmondi',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1215',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    propertyAvailability: Date.now(),
    propertyDescription:
      "Recognize the best when youre in Dhanmondi. Filled with restaurants, banks, shopping centers and recreational zones, the area is complete with all the amenities one could ask for. People from various places in the city come to the area on weekends. It makes sense since theres so much to do here. Built in great design with a spectacular outlook, this apartment boasts much more than meets the eye. With creatively structured rooms and intelligent architectural cuts, residents will know what it's like to live in pride. There are three bedrooms here and two of them have washrooms attached. One of them has a balcony attached. You also get separate spaces to be used as the dining and the drawing areas. There is also an attendant's bedroom and bathroom available within the abode",
    propertyPrice: 25000,
    propertyBedrooms: 2,
    propertyBathrooms: 2,
    propertyFloorNumber: 1,
    propertySqft: 1000,
    propertyFurnished: true,
    propertyFeatures: {
      gas: 'line',
      reception: false,
      tiledFloor: true,
      terrace: false,
      balcony: false,
      parking: true,
      garage: false,
      fireExit: true,
      fireProtection: true,
      water: true,
      hotWater: true,
      electricity: true,
      generator: true,
      solar: false,
      airConditioning: false,
      swimmingPool: false,
      garden: true,
      gym: false,
      elevator: false,
      cableTv: true,
      internet: false,
      laundry: false,
      cleaningService: false,
      cafetoria: false,
      securityStaff: true,
      officeRoom: true,
      executiveRoom: true,
      managerRoom: false,
      conferenceRoom: true,
      staffRoom: false,
      servantRoom: false,
    },

    propertyFeaturedImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
    propertyFloorPlanImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_FLP_00_0000.png',
    propertyImages: [
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
    ],
  },
  {
    postType: 'featured',
    purpose: 'sale',
    propertyCategory: 'commercial',
    propertyType: 'office',
    propertyTitle: '1500 sqft office space',
    propertyAddress: {
      addressLine1: 'Motijil',
      addressLine2: 'Motijil',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1215',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    propertyAvailability: Date.now(),
    propertyDescription:
      "Recognize the best when youre in Dhanmondi. Filled with restaurants, banks, shopping centers and recreational zones, the area is complete with all the amenities one could ask for. People from various places in the city come to the area on weekends. It makes sense since theres so much to do here. Built in great design with a spectacular outlook, this apartment boasts much more than meets the eye. With creatively structured rooms and intelligent architectural cuts, residents will know what it's like to live in pride. There are three bedrooms here and two of them have washrooms attached. One of them has a balcony attached. You also get separate spaces to be used as the dining and the drawing areas. There is also an attendant's bedroom and bathroom available within the abode. ",
    propertyPrice: 55000,
    propertyBedrooms: 0,
    propertyBathrooms: 4,
    propertyFloorNumber: 2,
    propertySqft: 5000,
    propertyFurnished: true,
    propertyFeatures: {
      gas: 'cylinder',
      reception: false,
      tiledFloor: true,
      terrace: false,
      balcony: false,
      parking: true,
      garage: false,
      fireExit: true,
      fireProtection: true,
      water: true,
      hotWater: true,
      electricity: true,
      generator: true,
      solar: false,
      airConditioning: false,
      swimmingPool: false,
      garden: true,
      gym: false,
      elevator: false,
      cableTv: true,
      internet: false,
      laundry: false,
      cleaningService: false,
      cafetoria: false,
      securityStaff: true,
      officeRoom: true,
      executiveRoom: true,
      managerRoom: false,
      conferenceRoom: true,
      staffRoom: false,
      servantRoom: false,
    },

    propertyFeaturedImage:
      'https://lid.zoocdn.com/u/1024/768/35e968fad3997c196758e184d205032c0a9f88a1.jpg',
    propertyFloorPlanImage:
      'https://lid.zoocdn.com/u/2400/1800/95c030bedb941240794122f01afd2347c58a9ce3.jpg',
    propertyImages: [
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
    ],
  },
  {
    postType: 'basic',
    purpose: 'rent',
    propertyCategory: 'residential',
    propertyType: 'apartment',
    propertyTitle: 'Two bedrooms apartment',
    propertyAddress: {
      addressLine1: 'Dhanmondi',
      addressLine2: 'Dhanmondi',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1215',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    propertyAvailability: Date.now(),
    propertyDescription:
      "Recognize the best when youre in Dhanmondi. Filled with restaurants, banks, shopping centers and recreational zones, the area is complete with all the amenities one could ask for. People from various places in the city come to the area on weekends. It makes sense since theres so much to do here. Built in great design with a spectacular outlook, this apartment boasts much more than meets the eye. With creatively structured rooms and intelligent architectural cuts, residents will know what it's like to live in pride. There are three bedrooms here and two of them have washrooms attached. One of them has a balcony attached. You also get separate spaces to be used as the dining and the drawing areas. There is also an attendant's bedroom and bathroom available within the abode. ",
    propertyPrice: 25000,
    propertyBedrooms: 2,
    propertyBathrooms: 2,
    propertyFloorNumber: 1,
    propertySqft: 1000,
    propertyFurnished: true,
    propertyFeatures: {
      gas: 'line',
      reception: false,
      tiledFloor: true,
      terrace: false,
      balcony: false,
      parking: true,
      garage: false,
      fireExit: true,
      fireProtection: true,
      water: true,
      hotWater: true,
      electricity: true,
      generator: true,
      solar: false,
      airConditioning: false,
      swimmingPool: false,
      garden: true,
      gym: false,
      elevator: false,
      cableTv: true,
      internet: false,
      laundry: false,
      cleaningService: false,
      cafetoria: false,
      securityStaff: true,
      officeRoom: true,
      executiveRoom: true,
      managerRoom: false,
      conferenceRoom: true,
      staffRoom: false,
      servantRoom: false,
    },

    propertyFeaturedImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_19_0000.jpg',
    propertyFloorPlanImage:
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_FLP_00_0000.png',
    propertyImages: [
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',

      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
    ],
  },
  {
    postType: 'featured',
    purpose: 'sale',
    propertyCategory: 'commercial',
    propertyType: 'office',
    propertyTitle: '1500 sqft office space',
    propertyAddress: {
      addressLine1: 'Motijil',
      addressLine2: 'Motijil',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1215',
      coordinates: {
        lat: 0,
        lng: 0,
      },
    },
    propertyAvailability: Date.now(),
    propertyDescription:
      "Recognize the best when youre in Dhanmondi. Filled with restaurants, banks, shopping centers and recreational zones, the area is complete with all the amenities one could ask for. People from various places in the city come to the area on weekends. It makes sense since theres so much to do here. Built in great design with a spectacular outlook, this apartment boasts much more than meets the eye. With creatively structured rooms and intelligent architectural cuts, residents will know what it's like to live in pride. There are three bedrooms here and two of them have washrooms attached. One of them has a balcony attached. You also get separate spaces to be used as the dining and the drawing areas. There is also an attendant's bedroom and bathroom available within the abode. ",
    propertyPrice: 55000,
    propertyBedrooms: 0,
    propertyBathrooms: 4,
    propertyFloorNumber: 2,
    propertySqft: 5000,
    propertyFurnished: true,
    propertyFeatures: {
      gas: 'cylinder',
      reception: false,
      tiledFloor: true,
      terrace: false,
      balcony: false,
      parking: true,
      garage: false,
      fireExit: true,
      fireProtection: true,
      water: true,
      hotWater: true,
      electricity: true,
      generator: true,
      solar: false,
      airConditioning: false,
      swimmingPool: false,
      garden: true,
      gym: false,
      elevator: false,
      cableTv: true,
      internet: false,
      laundry: false,
      cleaningService: false,
      cafetoria: false,
      securityStaff: true,
      officeRoom: true,
      executiveRoom: true,
      managerRoom: false,
      conferenceRoom: true,
      staffRoom: false,
      servantRoom: false,
    },

    propertyFeaturedImage:
      'https://lid.zoocdn.com/u/1024/768/35e968fad3997c196758e184d205032c0a9f88a1.jpg',
    propertyFloorPlanImage:
      'https://lid.zoocdn.com/u/2400/1800/95c030bedb941240794122f01afd2347c58a9ce3.jpg',
    propertyImages: [
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_01_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_02_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_03_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_04_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_05_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_06_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_07_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_08_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_09_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_11_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_12_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_13_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_14_0000.jpg',
      'https://media.rightmove.co.uk/223k/222812/93269894/222812_Deluxestudiotolet2_IMG_15_0000.jpg',
    ],
  },
]

const demoAgent = [
  {
    agentName: 'Benham and Reeves',
    agentEmail: 'info@benhams.com',
    agentPhoneNumber: '+44 20 3463 7502',
    agentWebsite: 'https://www.benhams.com/',
    agentLogo: 'https://st.zoocdn.com/zoopla_static_agent_logo_(634289).png',
    agentAddress: {
      addressLine1: 'Agargaon, Radio',
      addressLine2: '',
      city: 'Dhaka',
      country: 'Bangladesh',
      postCode: '1215',
      coordinates: {
        lat: 0,
        lng: 0,
      },
      agentSocialProfile: {
        facebook: 'https://www.facebook.com/benhams.com',
        twitter: 'https://twitter.com/benhams',
        instagram: 'https://www.instagram.com/benhams/',
        linkedin: 'https://www.linkedin.com/company/benhams/',
      },
      agentDescription:
        'Established in 1958, Benham and Reeves are one of the oldest independent agents in Hampstead. With coverage across Hampstead, West Hampstead, St Johns Wood and Belsize Park, tenants and landlords can be assured that they will find here an experienced lettings, sales and property management service. With our flagship office in Heath Street, we know that executives from FTSE and Fortune 500 companies like to live in the very best period conversions, apartments and family houses. Making up over two thirds of our tenants, they benefit from our extensive knowledge of the NW3, NW6 and NW8 postcodes. Many local landlords have been our clients for 20+ years.',
      agentGallery: [
        'https://st.zoocdn.com/zpg_agent_static_agent_profile_images_(62759558).jpg',
      ],
    },
  },
]

const demoPlans = [
  {
    name: 'silver',
    price: 5000,
    duration: 1,
    features: {
      branch: {
        basic: 50,
        featured: 10,
      },
    },
  },
  {
    name: 'gold',
    price: 10000,
    duration: 2,
    features: {
      branch: {
        basic: 100,
        featured: 20,
      },
    },
  },
  {
    name: 'platinum',
    price: 15000,
    duration: 5,
    features: {
      branch: {
        basic: 150,
        featured: 30,
      },
    },
  },
]

module.exports = { defaultUsers, demoProperties, demoAgent }
