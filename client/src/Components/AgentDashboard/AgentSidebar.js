import {
  CurrencyDollarIcon,
  OfficeBuildingIcon,
  UserIcon,
  ViewGridIcon,
} from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

const AgentSidebar = ({ redirect }) => {
  const subNavigation = [
    {
      name: 'Overview',
      path: 'overview',
      icon: ViewGridIcon,
    },
    {
      name: 'Profile',
      path: 'profile',
      icon: UserIcon,
    },
    {
      name: 'All Properties',
      path: 'properties',
      icon: OfficeBuildingIcon,
    },
    {
      name: 'Plans',
      path: 'plans',
      icon: CurrencyDollarIcon,
    },
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

export default AgentSidebar
