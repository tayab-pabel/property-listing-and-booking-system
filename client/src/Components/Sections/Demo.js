import { Menu, Popover, Tab, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'
import { baths, beds, propertTypes, purposes } from '../../Data/Filter'
import CustomSingleSelectOption from '../Elements/CustomSingleSelectOption'
import PropertyTypeSelectOption from '../Elements/PropertyTypeSelectOption'

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

  return (
    <div>
      <div className='bg-gray-100'>
        <div className='max-w-full mx-auto px-4 sm:px-6 text-center'>
          <section className='py-6'>
            <div className=''>
              <div className='hidden sm:flex sm:items-baseline sm:space-x-8'>
                <div className='flex gap-4'>
                  <div className='flex-auto'>
                    <CustomSingleSelectOption
                      title='PURPOSE'
                      data={purposes}
                      option={selectedPurpose}
                      setOption={setSelectedPurpose}
                    />
                  </div>
                  <div className='flex-auto'>
                    <CustomSingleSelectOption
                      title='BEDS'
                      data={beds}
                      option={selectedBed}
                      setOption={setSelectedBeds}
                    />
                  </div>
                  <div className='flex-auto'>
                    <CustomSingleSelectOption
                      title='BATHS'
                      data={baths}
                      option={selectedBath}
                      setOption={setSelectedBaths}
                    />
                  </div>
                  <div className='flex-auto'>
                    <PropertyTypeSelectOption
                      propertyTypes={selectedPropertyTypes}
                      selectedProperty={selectedProperty}
                      setSelectedProperty={setSelectedProperty}
                      propertyCategories={propertyCategoies}
                      selectedCategory={selectedPropertyCategory}
                      setSelectedCategory={setSelectedPropertyCategory}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Demo
