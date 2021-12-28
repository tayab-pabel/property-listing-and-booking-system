import { FilterIcon, StarIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {
  baths,
  beds,
  locationRadius,
  postAddedTime,
  propertTypes,
  propertyArea,
  purposes,
  sort,
} from '../../Data/Filter'
import { filterProperty } from '../../utilities/helperFunctions'
import CustomDrawer from '../Elements/CustomDrawer'
import CustomInput from '../Elements/CustomInput'
import CustomMinMaxRangeSelectOption from '../Elements/CustomMinMaxRangeSelectOption'
import CustomSingleSelectOption from '../Elements/CustomSingleSelectOption'
import ErrorMessage from '../Elements/ErrorMessage'
import Loader from '../Elements/Loader'
import PropertyTypeSelectOption from '../Elements/PropertyTypeSelectOption'
import { propertyPricing } from './../../Data/Filter'
import CallToAction from './../Sections/CallToAction'
import Properties from './Properties'

const FindProperty = () => {
  // Get Purpose and Location from URL
  const location = useLocation().search
  const searchedPurpose = new URLSearchParams(location).get('prupose') || ''
  const searchedLocation = new URLSearchParams(location).get('location') || ''

  // Get Properties from API
  const [properties, setProperties] = useState([])

  // Property Location:
  const [propertyLocation, setPropertyLocation] = useState(searchedLocation)

  // Property Search Keyword:
  const [searchKeyword, setSearchKeyword] = useState('')

  // Property Search Radius:
  const [searchRadius, setSearchRadius] = useState(locationRadius[0].value)

  // Property Purpose:
  const [selectedPurpose, setSelectedPurpose] = useState(searchedPurpose)

  // Property Added to site
  const [selectedPostAddedTime, setSelectedPostAddedTime] = useState(
    postAddedTime[0].value
  )

  // Property BEDS:
  const [selectedBed, setSelectedBeds] = useState(beds[0].value)

  // Property Baths:
  const [selectedBath, setSelectedBaths] = useState(baths[0].value)

  // Property Sort:
  const [selectedSort, setSelectedSort] = useState(sort[0].value)

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
  const {
    minimum: minimumPrices,
    maximum: maximumPrices,
  } = propertyPricing.find((x) => x.purpose === selectedPurpose)
  const [propertyMinimumPrice, setPropertyMinimumPrice] = useState(0)
  const [propertyMaximumPrice, setPropertyMaximumPrice] = useState(0)

  // Property Area (Sqft):
  const {
    minimum: propertyMinimumAreas,
    maximum: propertyMaximumAreas,
  } = propertyArea
  const [propertyMinimumArea, setPropertyMinimumArea] = useState(0)
  const [propertyMaximumArea, setPropertyMaximumArea] = useState(0)

  // Fildered Properties
  const filteredProperties = filterProperty(
    searchKeyword,
    selectedProperty.toLowerCase(),
    selectedBed,
    selectedBath,
    propertyMinimumPrice,
    propertyMaximumPrice,
    propertyMinimumArea,
    propertyMaximumArea,
    selectedSort,
    properties
  )

  // Filter Drawer for Mobile Devices:
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen)

  useEffect(async () => {
    try {
      let purpose = selectedPurpose.toLowerCase()
      const result = await axios.get(
        `https://propertymarketbd.herokuapp.com/api/property?purpose=${purpose}`
      )
      setProperties(result.data)
    } catch (error) {
      alert(error.message)
    }
  }, [selectedPurpose])

  return (
    <div className=''>
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg mx-auto px-4 md:px-6'>
          {/* Dextop Filter */}
          <section className='py-6 hidden lg:block'>
            <div className='grid grid-cols-12 grid-rows-2 gap-2'>
              <div className='purpose col-span-2'>
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
              <div className='radius col-span-2'>
                <CustomSingleSelectOption
                  title='Search Radius'
                  data={locationRadius}
                  option={searchRadius}
                  setOption={setSearchRadius}
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
              <div className='beds col-span-1'>
                <CustomSingleSelectOption
                  title='Beds'
                  data={beds}
                  option={selectedBed}
                  setOption={setSelectedBeds}
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
              <div className='search col-span-3'>
                <CustomInput
                  title='Search'
                  data={searchKeyword}
                  setData={setSearchKeyword}
                />
              </div>
              <div className='PostAddedTime col-span-3'>
                <CustomSingleSelectOption
                  title='Added To Site'
                  data={postAddedTime}
                  option={selectedPostAddedTime}
                  setOption={setSelectedPostAddedTime}
                />
              </div>
            </div>
          </section>
          {/* Mobile Filter */}
          <section className='lg:hidden py-4'>
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
      <div className='bg-white max-w-screen-lg mx-auto px-4 pt-2 md:px-6'>
        <div className='flex justify-between'>
          <div className='sort'>
            <CustomSingleSelectOption
              title='Sort'
              data={sort}
              option={selectedSort}
              setOption={setSelectedSort}
            />
          </div>
          <div>
            <button
              type='button'
              className='flex mt-2 w-full px-4 py-2 border bg-blue-light border-blue-light text-white font-medium rounded-lg text-sm shadow'
            >
              <StarIcon className='h-5 w-5 mr-1.5'></StarIcon>
              <span aria-hidden='true'>Save Search</span>
            </button>
          </div>
        </div>
      </div>
      <div className=''>
        {filteredProperties && filteredProperties.length === 0 ? (
          <ErrorMessage error='No Property Found' />
        ) : filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <Properties property={property} />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <CallToAction />
      {/* Filter Drawer For mobile Devices */}
      <section className='lg:hidden'>
        <CustomDrawer
          showDrawer={isDrawerOpen}
          drawerHandler={toggleDrawer}
          title='Filter'
        >
          <div className='grid grid-cols-4 grid-rows-5 gap-2'>
            <div className='purpose col-span-4'>
              <CustomSingleSelectOption
                title='Purpose'
                data={purposes}
                option={selectedPurpose}
                setOption={setSelectedPurpose}
              />
            </div>
            <div className='location col-span-4'>
              <CustomInput
                title='Location'
                data={propertyLocation}
                setData={setPropertyLocation}
              />
            </div>
            <div className='radious col-span-4'>
              <CustomSingleSelectOption
                title='Search Radious'
                data={locationRadius}
                option={searchRadius}
                setOption={setSearchRadius}
              />
            </div>
            <div className='PropertyType col-span-4'>
              <PropertyTypeSelectOption
                propertyTypes={selectedPropertyTypes}
                selectedProperty={selectedProperty}
                setSelectedProperty={setSelectedProperty}
                propertyCategories={propertyCategoies}
                selectedCategory={selectedPropertyCategory}
                setSelectedCategory={setSelectedPropertyCategory}
              />
            </div>
            <div className='beds col-span-2'>
              <CustomSingleSelectOption
                title='Beds'
                data={beds}
                option={selectedBed}
                setOption={setSelectedBeds}
              />
            </div>
            <div className='baths col-span-2'>
              <CustomSingleSelectOption
                title='Baths'
                data={baths}
                option={selectedBath}
                setOption={setSelectedBaths}
              />
            </div>
            <div className='area col-span-4'>
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
            <div className='Price col-span-4'>
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
            <div className='keyword col-span-4'>
              <CustomInput
                title='Keyword'
                data={searchKeyword}
                setData={setSearchKeyword}
              />
            </div>
          </div>
        </CustomDrawer>
      </section>
    </div>
  )
}

export default FindProperty
