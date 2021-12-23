import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const MobileNavigation = ({ logOut, currentUser }) => {

  const history = useHistory()
  async function handleLogout() {
    try {
      await logOut()
      history.push('/login')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="pt-4 pb-3">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
        {currentUser && currentUser.photoURL ? (
            <img
              className='h-10 w-10 rounded-full'
              src={currentUser.photoURL}
              alt=''
            />
          ) : (
            <span className='inline-block h-10 w-10 rounded-full overflow-hidden bg-blue-soft'>
              <svg
                className='h-full w-full text-blue-300'
                fill='currentColor'
                viewBox='0 0 24 24'
              >
                <path d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z' />
              </svg>
            </span>
          )}
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-blue-dark">{currentUser.displayName}</div>
          <div className="text-sm text-blue-dark">{currentUser.email}</div>
        </div>
      </div>
      <div className="mt-3 space-y-1">
        <Link
          to="/account"
          className="block rounded-lg py-2 px-3 text-base font-medium text-blue-dark hover:bg-gray-100"
        >
          My Profile
        </Link>
        <Link
          onClick={handleLogout}
          className="block rounded-lg py-2 px-3 text-base font-medium text-blue-dark hover:bg-gray-100"
        >
          Sign out
        </Link>
      </div>
    </div>
  )
}

export default MobileNavigation
