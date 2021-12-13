import { useState } from 'react'
import {
  baths,
  beds,
  locationRadious,
  propertTypes,
  propertyArea,
  purposes,
} from '../../Data/Filter'
import CustomSingleSelectOption from '../Elements/CustomSingleSelectOption'
import PropertyTypeSelectOption from '../Elements/PropertyTypeSelectOption'
import CustomMinMaxRangeSelectOption from '../Elements/CustomMinMaxRangeSelectOption'
import { propertyPricing } from './../../Data/Filter'
import CustomInput from '../Elements/CustomInput'
import { FilterIcon } from '@heroicons/react/outline'
import Header from './../Sections/Header'
import Properties from './Properties'
import CallToAction from './../Sections/CallToAction'
import Footer from './../Sections/Footer'
import CustomDrawer from '../Elements/CustomDrawer'

const PropertySearchFilter = () => {
  // Property Location:
  const [propertyLocation, setPropertyLocation] = useState('')

  // Property Search Keyword:
  const [searchKeyword, setSearchKeyword] = useState('')

  // Property Search Radious:
  const [searchRadious, setSearchRadious] = useState(locationRadious[0])

  // Property Purpose:
  const [selectedPurpose, setSelectedPurpose] = useState(purposes[0])

  // Property BEDS:
  const [selectedBed, setSelectedBeds] = useState(beds[0])

  // Property Baths:
  const [selectedBath, setSelectedBaths] = useState(baths[0])

  //Property Types:
  const propertyCategoies = propertTypes
    ? [...new Set(propertTypes.map((item) => item.category))]
    : []
  const [selectedPropertyCategory, setSelectedPropertyCategory] = useState(
    propertyCategoies && propertyCategoies[0]
  )
  const [selectedProperty, setSelectedProperty] = useState(
    selectedPropertyCategory
  )
  const selectedPropertyTypes =
    (selectedPropertyCategory &&
      propertTypes.filter(
        (item) => item.category === selectedPropertyCategory
      )) ||
    []

  // Property Picing:
  const { minimum: minimumPrices, maximum: maximumPrices } =
    propertyPricing.find((x) => x.purpose === selectedPurpose)
  const [propertyMinimumPrice, setPropertyMinimumPrice] = useState('')
  const [propertyMaximumPrice, setPropertyMaximumPrice] = useState('')

  // Property Area (Sqft):
  const { minimum: propertyMinimumAreas, maximum: propertyMaximumAreas } =
    propertyArea
  const [propertyMinimumArea, setPropertyMinimumArea] = useState('')
  const [propertyMaximumArea, setPropertyMaximumArea] = useState('')

  // Filter Drawer for Mobile Devices:
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  return (
    <div className=''>
      <Header />
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg mx-auto px-4 md:px-6'>
          {/* Dextop Filter */}
          <section className='py-6 hidden md:block'>
            <div className='grid grid-cols-10 grid-rows-2 gap-2'>
              <div className='purpose col-span-1'>
                <CustomSingleSelectOption
                  title='Purpose'
                  data={purposes}
                  option={selectedPurpose}
                  setOption={setSelectedPurpose}
                />
              </div>
              <div className='location col-span-3'>
                <CustomInput
                  title='Location'
                  data={propertyLocation}
                  setData={setPropertyLocation}
                />
              </div>
              <div className='PropertyType col-span-3'>
                <PropertyTypeSelectOption
                  propertyTypes={selectedPropertyTypes}
                  selectedProperty={selectedProperty}
                  setSelectedProperty={setSelectedProperty}
                  propertyCategories={propertyCategoies}
                  selectedCategory={selectedPropertyCategory}
                  setSelectedCategory={setSelectedPropertyCategory}
                />
              </div>
              <div className='Price col-span-3'>
                <CustomMinMaxRangeSelectOption
                  title='Price (BDT)'
                  mimimumRangeArray={minimumPrices}
                  maximumRangeArray={maximumPrices}
                  selectedMinimumValue={propertyMinimumPrice}
                  selectedMaximumValue={propertyMaximumPrice}
                  setMinimumValue={setPropertyMinimumPrice}
                  setMaximumValue={setPropertyMaximumPrice}
                />
              </div>
              <div className='beds col-span-1'>
                <CustomSingleSelectOption
                  title='Beds'
                  data={beds}
                  option={selectedBed}
                  setOption={setSelectedBeds}
                />
              </div>
              <div className='area col-span-3'>
                <CustomMinMaxRangeSelectOption
                  title='Area (Sqft)'
                  mimimumRangeArray={propertyMinimumAreas}
                  maximumRangeArray={propertyMaximumAreas}
                  selectedMinimumValue={propertyMinimumArea}
                  selectedMaximumValue={propertyMaximumArea}
                  setMinimumValue={setPropertyMinimumArea}
                  setMaximumValue={setPropertyMaximumArea}
                />
              </div>
              <div className='baths col-span-1'>
                <CustomSingleSelectOption
                  title='Baths'
                  data={baths}
                  option={selectedBath}
                  setOption={setSelectedBaths}
                />
              </div>
              <div className='keyword col-span-3'>
                <CustomInput
                  title='Keyword'
                  data={searchKeyword}
                  setData={setSearchKeyword}
                />
              </div>
              <div className='radious col-span-2'>
                <CustomSingleSelectOption
                  title='Search Radious'
                  data={locationRadious}
                  option={searchRadious}
                  setOption={setSearchRadious}
                  optionQuantifier='km'
                />
              </div>
            </div>
          </section>
          {/* Mobile Filter */}
          <section className=' md:hidden py-4'>
            <div>
              <button
                onClick={toggleDrawer}
                className='flex items-center px-3 py-2 border border-blue-dark shadow-sm text-sm leading-4 font-medium rounded-lg text-blue-dark bg-white'
              >
                <FilterIcon
                  className='-ml-0.5 mr-1.5 w-5 h-5 text-blue-light'
                  aria-hidden='true'
                />
                Filter
              </button>
            </div>
          </section>
        </div>
      </div>
      <Properties />
      <CallToAction />
      <Footer />
      {/* Filter Drawer For mobile Devices */}
      <section className='md:hidden'>
        <CustomDrawer
          showDrawer={isDrawerOpen}
          drawerHandler={toggleDrawer}
          title='Filter Property'
        >
          <div className='grid grid-cols-3 grid-rows-5 gap-2'>
            <div className='PropertyType col-span-3'>
              <PropertyTypeSelectOption
                propertyTypes={selectedPropertyTypes}
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                propertyCategories={propertyCategoies}
                selectedCategory={selectedPropertyCategory}
                setSelectedCategory={setSelectedPropertyCategory}
              />
            </div>
            <div className='purpose col-span-1'>
              <CustomSingleSelectOption
                title='Purpose'
                data={purposes}
                option={selectedPurpose}
                setOption={setSelectedPurpose}
              />
            </div>
            <div className='location col-span-2'>
              <CustomInput
                title='Location'
                data={propertyLocation}
                setData={setPropertyLocation}
              />
            </div>
            <div className='area col-span-3'>
              <CustomMinMaxRangeSelectOption
                title='Area (Sqft)'
                mimimumRangeArray={propertyMinimumAreas}
                maximumRangeArray={propertyMaximumAreas}
                selectedMinimumValue={propertyMinimumArea}
                selectedMaximumValue={propertyMaximumArea}
                setMinimumValue={setPropertyMinimumArea}
                setMaximumValue={setPropertyMaximumArea}
              />
            </div>
            <div className='Price col-span-3'>
              <CustomMinMaxRangeSelectOption
                title='Price (BDT)'
                mimimumRangeArray={minimumPrices}
                maximumRangeArray={maximumPrices}
                selectedMinimumValue={propertyMinimumPrice}
                selectedMaximumValue={propertyMaximumPrice}
                setMinimumValue={setPropertyMinimumPrice}
                setMaximumValue={setPropertyMaximumPrice}
              />
            </div>
            <div className='beds col-span-1'>
              <CustomSingleSelectOption
                title='Beds'
                data={beds}
                option={selectedBed}
                setOption={setSelectedBeds}
              />
            </div>
            <div className='keyword col-span-2'>
              <CustomInput
                title='Keyword'
                data={searchKeyword}
                setData={setSearchKeyword}
              />
            </div>
            <div className='baths col-span-1'>
              <CustomSingleSelectOption
                title='Baths'
                data={baths}
                option={selectedBath}
                setOption={setSelectedBaths}
              />
            </div>
            <div className='radious col-span-2'>
              <CustomSingleSelectOption
                title='Search Radious'
                data={locationRadious}
                option={searchRadious}
                setOption={setSearchRadious}
                optionQuantifier='km'
              />
            </div>
          </div>
        </CustomDrawer>
      </section>
    </div>
  )
}

export default PropertySearchFilter
