import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import React, { Fragment } from 'react'

const CustomSingleSelectOption = ({ title, data, option, setOption }) => {
  return (
    <Menu as='div' className='relative cursor-pointer '>
      {({ open }) => (
        <>
          <Menu.Button as='div'>
            {/* Large Device */}
            <div className='hidden lg:block'>
              <div className='bg-white px-4 py-2 rounded-lg space-y-2 border border-blue-dark'>
                <p className='text-sm font-bold text-blue-dark text-left'>
                  {title}
                </p>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark'>
                    {data.filter((x) => x.value === option)[0].title}
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
              <p className='text-sm font-bold text-blue-dark text-left mb-1'>
                {title}
              </p>
              <div className='bg-white px-4 py-2 rounded-lg space-y-2 border border-blue-dark'>
                <div className='flex justify-between'>
                  <p className='text-sm font-medium text-blue-dark'>
                    {data.filter((x) => x.value === option)[0].title}
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
            <Menu.Items className='absolute z-20 w-full mt-1 origin-top-right bg-white rounded-lg shadow-2xl border border-blue-dark px-4 py-2 space-y-1'>
              {data.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <div
                      onClick={() => setOption(item.value)}
                      className={`${
                        item.value === option
                          ? 'bg-blue-light text-white'
                          : active && 'bg-gray-100'
                      } text-center rounded-lg w-full p-2 text-xs font-medium cursor-pointer border`}
                    >
                      <span>{item.title}</span>
                    </div>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}

export default CustomSingleSelectOption
