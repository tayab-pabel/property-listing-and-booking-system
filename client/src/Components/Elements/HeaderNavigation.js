import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const HeaderNavigation = ({ logOut, user, setUser }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const history = useHistory()
  async function handleLogout() {
    try {
      localStorage.removeItem('loggedInUser')
      if (user.role === 'user') {
        await logOut()
        localStorage.removeItem('loggedInUser')
        setUser({})
      } else {
        localStorage.removeItem('loggedInUser')
        setUser({})
      }
      history.push('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <Menu as='div' className='ml-4 relative flex-shrink-0'>
      <div>
        <Menu.Button className='bg-blue-light flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-light focus:ring-white'>
          <span className='sr-only'>Open user menu</span>
          {user && user.avatar ? (
            <img
              className='h-8 w-8 rounded-full'
              src={`https://propertymarketbd.herokuapp.com/uploads/avatars/${user.avatar}`}
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
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30'>
          <Menu.Item>
            {({ active }) => (
              <Link
                to={user.role === 'user' ? '/account' : '/agent-account'}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-blue-dark'
                )}
              >
                My Profile
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <Link
                onClick={handleLogout}
                className={classNames(
                  active ? 'bg-gray-100' : '',
                  'block px-4 py-2 text-sm text-blue-dark'
                )}
              >
                Sign Out
              </Link>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default HeaderNavigation
