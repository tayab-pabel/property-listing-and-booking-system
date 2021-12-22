import { Popover, Transition } from '@headlessui/react'
import {
  HomeIcon,
  KeyIcon,
  MenuAlt1Icon,
  OfficeBuildingIcon,
  UserIcon,
  XIcon,
} from '@heroicons/react/outline'
import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import logo from '../../images/logo.svg'
import HeaderNavigation from './../Elements/HeaderNavigation'

const Header = () => {
  const { currentUser, logOut } = useAuth()

  const solutions = [
    {
      name: 'For Sale',
      href: '#',
      icon: OfficeBuildingIcon,
    },
    {
      name: 'To Rent',
      href: '#',
      icon: KeyIcon,
    },
    {
      name: 'New Homes',
      href: '#',
      icon: HomeIcon,
    },
    {
      name: 'Find Agent',
      href: '/find-agent',
      icon: UserIcon,
    },
  ]

  return (
    <Popover className='relative bg-white'>
      <div className='flex justify-between items-center px-4 py-3 sm:px-6 lg:justify-start lg:space-x-10'>
        <div className='flex justify-start lg:w-0 lg:flex-1'>
          <Link to='/'>
            <img className='h-12 w-auto' src={logo} alt='' />
          </Link>
        </div>
        <div className='-mr-2 -my-2 lg:hidden'>
          <Popover.Button className='bg-white rounded-lg p-2 inline-flex items-center justify-center text-blue-dark hover:text-blue-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-light'>
            <span className='sr-only'>Open menu</span>
            <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
          </Popover.Button>
        </div>
        <Popover.Group as='nav' className='hidden lg:flex space-x-10'>
          <Link to='/search' className='text-base font-medium text-blue-dark'>
            For Sale
          </Link>
          <Link to='/search' className='text-base font-medium text-blue-dark'>
            To Rent
          </Link>
          <Link to='/search' className='text-base font-medium text-blue-dark'>
            New Homes
          </Link>
          <Link
            to='/find-agent'
            className='text-base font-medium text-blue-dark'
          >
            Find Agent
          </Link>
        </Popover.Group>
        <div className='hidden lg:flex items-center justify-end lg:flex-1 lg:w-0'>
          {currentUser ? (
            <HeaderNavigation logOut={logOut} currentUser={currentUser} />
          ) : (
            <>
              <Link
                to='/signup'
                className='inline-flex items-center px-4 py-2 border border-blue-dark shadow-sm font-medium rounded-lg text-blue-dark bg-white focus:outline-none'
              >
                Sign Up
              </Link>
              <Link
                to='/login'
                className='ml-2 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-light'
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter='duration-200 ease-out'
        enterFrom='opacity-0 scale-95'
        enterTo='opacity-100 scale-100'
        leave='duration-100 ease-in'
        leaveFrom='opacity-100 scale-100'
        leaveTo='opacity-0 scale-95'
      >
        <Popover.Panel
          focus
          className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden z-50'
        >
          <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
            <div className='pt-5 pb-6 px-5'>
              <div className='flex items-center justify-between'>
                <div>
                  <img className='h-12 w-auto' src={logo} alt='Workflow' />
                </div>
                <div className='-mr-2'>
                  <Popover.Button className='bg-white rounded-lg p-2 inline-flex items-center justify-center text-blue-dark hover:text-blue-dark hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-light'>
                    <span className='sr-only'>Close menu</span>
                    <XIcon className='h-6 w-6' aria-hidden='true' />
                  </Popover.Button>
                </div>
              </div>
              <div className='mt-6'>
                <nav className='grid grid-cols-1 gap-7'>
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'
                    >
                      <div className='flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-lg bg-blue-light text-white'>
                        <solution.icon className='h-6 w-6' aria-hidden='true' />
                      </div>
                      <div className='ml-4 text-base font-medium text-blue-dark'>
                        {solution.name}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
            <div className='py-6 px-5'>
              <div className='mt-4'>
                <Link
                  to='/signup'
                  className='w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-light'
                >
                  Sign Up
                </Link>
                <p className='mt-6 text-center text-base text-blue-dark'>
                  Already have an account?{' '}
                  <Link to='/login' className='text-blue-light'>
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
