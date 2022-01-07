import {
  BellIcon,
  HeartIcon,
  HomeIcon,
  UserIcon,
} from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = ({ redirect }) => {

  const subNavigation = [
    {
      name: 'Profile',
      path: 'profile',
      icon: UserIcon,
    },
    {
      name: 'Saved Properties',
      path: 'savedProperties',
      icon: HeartIcon,
    },
    // {
    //   name: 'Saved Searches',
    //   path: 'savedSearches',
    //   icon: HomeIcon,
    // },
    // {
    //   name: 'Notifications',
    //   path: 'notification',
    //   icon: BellIcon,
    // },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      <nav className='space-y-1'>
        {subNavigation.map((item) => (
          <Link
            key={item.name}
            to={`?tab=${item.path}`}
            className={classNames(
              redirect && redirect === item.path
              ? 'bg-white text-blue-dark'
              : 'text-white hover:text-blue-dark hover:bg-white',
              'group rounded-lg px-3 py-2 flex items-center font-medium'
            )}
            aria-current={
              redirect && redirect === item.path ? 'page' : undefined
            }
          >
            <item.icon
              className={classNames(
                redirect && redirect === item.path
                  ? 'text-blue-dark'
                  : 'text-white group-hover:text-blue-dark',
                'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
              )}
              aria-hidden='true'
            />
            <span className='truncate'>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default Sidebar
