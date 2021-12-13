import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

const CustomMinMaxRangeSelectOption = ({
  title,
  mimimumRangeArray,
  maximumRangeArray,
  selectedMinimumValue,
  selectedMaximumValue,
  setMinimumValue,
  setMaximumValue,
}) => {
  return (
    <Menu as='div' className='relative'>
      {({ open }) => (
        <>
          <Menu.Button as='div'>
            <div className='bg-white px-4 py-2 rounded-lg space-y-2 ring-1 ring-blue-dark ring-opacity-50'>
              <p className='text-sm text-left font-bold text-blue-dark'>
                {title}
              </p>
              <div className='grid grid-cols-2 gap-3'>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark capitalize'>
                    {selectedMinimumValue || 0}
                  </p>
                  <p className='text-sm font-medium text-blue-dark'>to</p>
                </div>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark capitalize'>
                    {selectedMaximumValue || 'Any'}
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
            <Menu.Items
              as='div'
              className='absolute z-10 w-full mt-1 origin-top-right bg-white rounded-lg shadow-sm ring-1 ring-blue-dark ring-opacity-50 focus:outline-none px-4 py-2 overflow-hidden'
            >
              <div className='grid grid-cols-2 gap-1 capitalize text-sm text-center mb-2'>
                <p
                  className={`'border border-blue-light rounded-lg text-blue-dark cursor-pointer font-bold p-1 border-opacity-50`}
                >
                  Minimum
                </p>
                <p
                  className={`'border border-blue-light rounded-lg text-blue-dark cursor-pointer font-bold p-1 border-opacity-50`}
                >
                  Maximum
                </p>
              </div>
              <div className='grid grid-cols-2 gap-1'>
                <div className='max-h-48 overflow-y-scroll divide-y scrollbar scrollbar-thin scrollbar-thumb-blue-light scrollbar-track-gray-200'>
                  {mimimumRangeArray.map((item, index) => (
                    <Menu.Item key={index} as='div'>
                      {({ active }) => (
                        <div
                          onClick={() => setMinimumValue(item)}
                          className={`${
                            item === selectedMinimumValue
                              ? 'bg-blue-light text-white'
                              : active && 'bg-gray-100 text-blue-dark'
                          } text-center py-2 text-xs font-medium cursor-pointer`}
                        >
                          {item}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
                <div className='max-h-48 overflow-y-scroll divide-y scrollbar scrollbar-thin scrollbar-thumb-blue-light scrollbar-track-gray-200'>
                  {maximumRangeArray.map((item, index) => (
                    <Menu.Item key={index} as='div'>
                      {({ active }) => (
                        <div
                          onClick={() => setMaximumValue(item)}
                          className={`${
                            item === selectedMaximumValue
                              ? 'bg-blue-light text-white'
                              : active && 'bg-gray-100 text-blue-dark'
                          } text-center py-2 text-xs font-medium cursor-pointer`}
                        >
                          {item}
                        </div>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default CustomMinMaxRangeSelectOption
