import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
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
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button>
        <div className='bg-white px-4 py-2 rounded-md space-y-2 ring-1 ring-blue-light ring-opacity-10'>
          <p className='text-xs text-left font-medium text-gray-600 w-52'>
            PROPERTY TYPE
          </p>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-black capitalize'>
              {selectedProperty ? selectedProperty : selectedCategory}
            </p>
            <p className='text-sm font-medium text-black'>
              <ChevronDownIcon className='w-5 h-5' />
            </p>
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
        <Menu.Items className='absolute z-10 w-full mt-2 origin-top-right bg-white rounded-md shadow-sm ring-1 ring-blue-light ring-opacity-30 focus:outline-none px-4 py-2 space-y-1'>
          <div className=' flex uppercase space-x-2 text-sm mt-2 mb-3'>
            {propertyCategories.map((item, index) => (
              <p
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`${
                  item === selectedCategory
                    ? 'border-b-2 border-blue-light text-gray-800'
                    : 'text-gray-400'
                } cursor-pointer`}
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
                        : active && 'bg-gray-100'
                    } flex rounded-md w-full p-2 text-sm cursor-pointer border`}
                  >
                    {item.type}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className='grid grid-cols-2'>
            <Menu.Item>
              <div
                onClick={() => setSelectedProperty('')}
                className='text-center'
              >
                <span className='capitalize text-xs cursor-pointer rounded px-2'>
                  reset
                </span>
              </div>
            </Menu.Item>
            <Menu.Item>
              <div className='text-center'>
                <span className='bg-black text-white capitalize text-xs cursor-pointer rounded px-2'>
                  close
                </span>
              </div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default PropertyTypeSelectOption
