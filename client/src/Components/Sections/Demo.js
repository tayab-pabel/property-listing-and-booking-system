import { useState } from 'react'
import {
  baths,
  beds,
  propertTypes,
  propertyArea,
  purposes,
} from '../../Data/Filter'
import CustomSingleSelectOption from '../Elements/CustomSingleSelectOption'
import PropertyTypeSelectOption from '../Elements/PropertyTypeSelectOption'
import CustomMinMaxRangeSelectOption from '../Elements/CustomMinMaxRangeSelectOption'
import { propertyPricing } from './../../Data/Filter'

const Demo = () => {
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

  return (
    <div className=''>
      <div className='bg-gray-100'>
        <div className='max-w-screen-lg mx-auto px-4 sm:px-6 text-center'>
          <section className='py-6'>
            <div className='flex justify-around'>
              <div className=''>
                <CustomSingleSelectOption
                  title='Purpose'
                  data={purposes}
                  option={selectedPurpose}
                  setOption={setSelectedPurpose}
                />
              </div>
              <div className=''>
                <CustomSingleSelectOption
                  title='Beds'
                  data={beds}
                  option={selectedBed}
                  setOption={setSelectedBeds}
                />
              </div>
              <div className=''>
                <CustomSingleSelectOption
                  title='Baths'
                  data={baths}
                  option={selectedBath}
                  setOption={setSelectedBaths}
                />
              </div>
              <div className=''>
                <PropertyTypeSelectOption
                  propertyTypes={selectedPropertyTypes}
                  selectedProperty={selectedProperty}
                  setSelectedProperty={setSelectedProperty}
                  propertyCategories={propertyCategoies}
                  selectedCategory={selectedPropertyCategory}
                  setSelectedCategory={setSelectedPropertyCategory}
                />
              </div>
              <div className=''>
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
              <div className=''>
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
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Demo