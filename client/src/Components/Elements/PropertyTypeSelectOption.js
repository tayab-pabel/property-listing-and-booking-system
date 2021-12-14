import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

const PropertyTypeSelectOption = ({
  propertyTypes,
  selectedProperty,
  setSelectedProperty,
  propertyCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <Menu as='div' className='relative text-left cursor-pointer'>
      {({ open }) => (
        <>
          <Menu.Button as='div'>
            {/* Large Device */}
            <div className='hidden lg:block'>
              <div className='bg-white px-4 py-2 rounded-lg space-y-2 border border-blue-dark w-full'>
                <p className='text-sm text-left font-bold text-blue-dark'>
                  Property Type
                </p>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark capitalize'>
                    {selectedProperty ? selectedProperty : selectedCategory}
                  </p>
                  <p className='text-sm font-medium text-blue-dark'>
                    {open ? (
                      <ChevronUpIcon className='w-5 h-5' />
                    ) : (
                      <ChevronDownIcon className='w-5 h-5' />
                    )}
                  </p>
                </div>
              </div>
            </div>
            {/* Small Device */}
            <div className='lg:hidden'>
              <p className='text-sm text-left font-bold text-blue-dark mb-1'>
                Property Type
              </p>
              <div className='bg-white px-4 py-2 rounded-lg space-y-2 border border-blue-dark w-full'>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark capitalize'>
                    {selectedProperty ? selectedProperty : selectedCategory}
                  </p>
                  <p className='text-sm font-medium text-blue-dark'>
                    {open ? (
                      <ChevronUpIcon className='w-5 h-5' />
                    ) : (
                      <ChevronDownIcon className='w-5 h-5' />
                    )}
                  </p>
                </div>
              </div>
            </div>
          </Menu.Button>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute z-20 w-full mt-1 origin-top-right bg-white rounded-lg shadow-2xl border border-blue-dark px-4 pt-2 pb-4 space-y-1'>
              <div className='grid grid-cols-2 gap-1 capitalize text-sm text-center mt-2 mb-2'>
                {propertyCategories.map((item, index) => (
                  <p
                    key={index}
                    onClick={() => setSelectedCategory(item)}
                    className={`${
                      item === selectedCategory
                        ? 'border border-blue-light rounded-lg text-blue-dark'
                        : 'text-blue-dark'
                    } cursor-pointer font-bold p-1`}
                  >
                    {item}
                  </p>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-1'>
                {propertyTypes.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <p
                        onClick={() => setSelectedProperty(item.type)}
                        className={`${
                          item.type === selectedProperty
                            ? 'bg-blue-light text-white'
                            : active && 'bg-gray-100 text-blue-dark'
                        } text-center w-full rounded-lg p-2 text-xs font-medium cursor-pointer border`}
                      >
                        {item.type}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default PropertyTypeSelectOption
