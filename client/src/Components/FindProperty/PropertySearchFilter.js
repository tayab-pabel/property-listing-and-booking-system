import { useState } from 'react'
import {
  baths,
  beds,
  postAddedTime,
  locationRadius,
  propertTypes,
  propertyArea,
  purposes,
} from '../../Data/Filter'
import CustomSingleSelectOption from '../Elements/CustomSingleSelectOption'
import PropertyTypeSelectOption from '../Elements/PropertyTypeSelectOption'
import CustomMinMaxRangeSelectOption from '../Elements/CustomMinMaxRangeSelectOption'
import { propertyPricing } from './../../Data/Filter'
import CustomInput from '../Elements/CustomInput'

const PropertySearchFilter = () => {
  // Property Location:
  const [propertyLocation, setPropertyLocation] = useState('')

  // Property Search Keyword:
  const [searchKeyword, setSearchKeyword] = useState('')

  // Property Search Radious:
  const [searchRadius, setSearchRadius] = useState(locationRadius[0])

  // Property Purpose:
  const [selectedPurpose, setSelectedPurpose] = useState(purposes[0])

  // Property Added to site
  const [selectedPostAddedTime, setSelectedPostAddedTime] = useState(postAddedTime[0])

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

  return (
    <div className=''>
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg mx-auto sm:px-6'>
          <section className='py-6'>
            <div className='grid grid-cols-12 grid-rows-2 gap-2'>
              <div className='purpose col-span-2'>
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
              <div className='keyword col-span-3'>
                <CustomInput
                  title='Keyword'
                  data={searchKeyword}
                  setData={setSearchKeyword}
                />
              </div>
              <div className='PostAddedTime col-span-2'>
                <CustomSingleSelectOption
                  title='Added To Site'
                  data={postAddedTime}
                  option={selectedPostAddedTime}
                  setOption={setSelectedPostAddedTime}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PropertySearchFilter
