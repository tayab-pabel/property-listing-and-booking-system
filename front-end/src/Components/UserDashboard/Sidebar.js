import { BellIcon, HeartIcon, HomeIcon, UserIcon, ViewGridIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const user = {
    name: 'Chelsea Hagon',
    email: 'chelseahagon@gmail.com',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }

  const subNavigation = [
    { name: 'Overview', href: '/account/overview', icon: ViewGridIcon, current: false },
    { name: 'Edit Profile', href: '/account/edit-profile', icon: UserIcon, current: true },
    { name: 'Saved Properties', href: '/account/saved-properties', icon: HeartIcon, current: false },
    { name: 'Saved Searches', href: '/account/saved-searches', icon: HomeIcon, current: false },
    { name: 'Notifications', href: '/account/notifications', icon: BellIcon, current: false },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div>
      
      <div className="mt-2">
        <img className="mx-auto mb-2 h-20 w-20 border-2 border-white rounded-full lg:w-24 lg:h-24" src={user.imageUrl} alt="" />
        <h3 className="my-4 text-center text-white font-medium">{user.name}</h3> 
      </div>

      <nav className="space-y-1">
        {subNavigation.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={classNames(
          item.current
          ? 'bg-white text-blue-dark'
          : 'text-white hover:text-blue-dark hover:bg-white',
          'group rounded-lg px-3 py-2 flex items-center text-sm font-medium'
          )}
          aria-current={item.current ? 'page' : undefined}
        >
          <item.icon
          className={classNames(
          item.current ? 'text-blue-dark' : 'text-white group-hover:text-blue-dark',
          'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
          )}
          aria-hidden="true"
          />
        <span className="truncate">{item.name}</span>
        </Link>
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;