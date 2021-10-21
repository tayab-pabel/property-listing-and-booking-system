import React from 'react'
import Header from '../Sections/Header'
import Sidebar from './Sidebar'
import OverviewSection from './OverviewSection'
import ProfileSection from './ProfileSection'
import SavedPropertiesSection from './SavedPropertiesSection'
import SavedSearchesSection from './SavedSearchesSection'
import NotificationSection from './NotificationSection'
import { useLocation } from 'react-router-dom'

const Dashboard = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'overview'

  const renderSection = (params) => {
    switch (params) {
      case 'overview':
        return <OverviewSection />
      case 'profile':
        return <ProfileSection />
      case 'savedProperties':
        return <SavedPropertiesSection />
      case 'savedSearches':
        return <SavedSearchesSection />
      case 'notification':
        return <NotificationSection />
      default:
        return <OverviewSection />
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='h-full'>
        <main className='max-w-full mx-auto'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen'>
              <Sidebar redirect={redirect}></Sidebar>
            </div>

            <div className='bg-gray-100 lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen '>
              <div className='bg-white shadow sm:rounded-lg py-6 sm:px-0 md:px-6 lg:px-6 lg:py-6'>
                <div className='max-w-full'>{renderSection(redirect)}</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
