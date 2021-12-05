import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/outline'
import { Fragment, useState } from 'react'

const CustomSingleSelectOption = ({ title, data, option, setOption }) => {
  const [show, setShow] = useState(false)
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <Menu.Button>
        <div 
          onClick={() => setShow(!show)} 
          className='bg-white px-4 py-2 rounded-lg space-y-2 ring-1 ring-blue-dark ring-opacity-50 w-28 min-w-full'>
          <p className='text-sm font-bold text-blue-dark text-left'>{title}</p>
          <div className='flex justify-between'>
            <p className='text-sm font-medium text-blue-dark'>{option}</p>
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
        <Menu.Items className='absolute z-10 w-full mt-1 origin-top-right bg-white rounded-lg shadow-sm ring-1 ring-blue-dark ring-opacity-50 focus:outline-none px-4 py-2 space-y-1'>
          {data.map((item, index) => (
            <Menu.Item key={index}>
              {({ active }) => (
                <p
                  onClick={() => setOption(item)}
                  className={`${
                    item === option
                      ? 'bg-blue-light text-white'
                      : active && 'bg-gray-100'
                  } text-center rounded-lg w-full p-2 text-sm cursor-pointer border`}
                >
                  {item}
                </p>
              )}
            </Menu.Item>
          ))}
          {/* <Menu.Item>
            <div className='text-center'>
              <span className='bg-blue-dark text-white text-xs cursor-pointer rounded px-2'>
                close
              </span>
            </div>
          </Menu.Item> */}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default CustomSingleSelectOption
