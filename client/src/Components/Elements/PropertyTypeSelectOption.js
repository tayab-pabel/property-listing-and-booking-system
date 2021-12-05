import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { Fragment, useState } from 'react'

const PropertyTypeSelectOption = ({
  propertyTypes,
  selectedProperty,
  setSelectedProperty,
  propertyCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [show, setShow] = useState(false)
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button>
        <div 
          onClick={() => setShow(!show)} 
          className='bg-white px-4 py-2 rounded-lg space-y-2 ring-1 ring-blue-dark ring-opacity-50'>
          <p className='text-xs text-left font-medium text-blue-dark w-52'>
            PROPERTY TYPE
          </p>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-blue-dark capitalize'>
              {selectedProperty ? selectedProperty : selectedCategory}
            </p>
            <p className='text-sm font-medium text-blue-dark'>
                {show ? (
                  <ChevronUpIcon className='w-5 h-5' />
                  ) : (
                  <ChevronDownIcon className='w-5 h-5' />
                )}
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
        <Menu.Items className='absolute z-10 w-full mt-1 origin-top-right bg-white rounded-lg shadow-sm ring-1 ring-blue-dark ring-opacity-50 focus:outline-none px-4 pt-2 pb-4 space-y-1'>
          <div className='grid grid-cols-2 gap-1 uppercase text-sm text-center mt-2 mb-3'>
            {propertyCategories.map((item, index) => (
              <p
                key={index}
                onClick={() => setSelectedCategory(item)}
                className={`${
                  item === selectedCategory
                    ? 'border-b-2 border-blue-light text-blue-dark'
                    : 'text-blue-dark'
                } cursor-pointer font-medium`}
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
                    } text-center w-full rounded-lg p-2 text-sm cursor-pointer border`}
                  >
                    {item.type}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
          {/* <div className='grid grid-cols-2'>
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
                <span className='bg-blue-dark text-white capitalize text-xs cursor-pointer rounded px-2'>
                  close
                </span>
              </div>
            </Menu.Item>
          </div> */}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default PropertyTypeSelectOption
