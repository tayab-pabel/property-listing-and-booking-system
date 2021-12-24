import React from 'react'
import Sidebar from './Sidebar'
import Profile from './Profile'
import SavedProperties from './SavedProperties'
import SavedSearches from './SavedSearches'
import Notification from './Notification'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'profile'

  const renderSection = (params) => {
    switch (params) {
      case 'profile':
        return <Profile />
      case 'savedProperties':
        return <SavedProperties />
      case 'savedSearches':
        return <SavedSearches />
      case 'notification':
        return <Notification />
      default:
        return <Profile />
    }
  }

  return (
    <div>
      <div className='h-full'>
        <main className='max-w-full mx-auto'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen'>
              <Sidebar redirect={redirect}></Sidebar>
            </div>

            <div className='bg-blue-gray lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen'>
              <div className='max-w-full'>{renderSection(redirect)}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
