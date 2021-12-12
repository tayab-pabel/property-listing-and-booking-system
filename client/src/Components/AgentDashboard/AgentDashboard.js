import React from 'react'
import Header from '../Sections/Header'
import AgentSidebar from './AgentSidebar'
import AgentProfile from './AgentProfile'
import { useLocation } from 'react-router-dom'
import AgentOverview from './AgentOverview'
import AddProperty from './AddProperty'

const AgentDashboard = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'overview'

  const renderSection = (params) => {
    switch (params) {
      case 'overview':
        return <AgentOverview />
      case 'profile':
        return <AgentProfile />
      case 'addProperty':
        return <AddProperty />
      default:
        return <AgentOverview />
    }
  }

  return (
    <div>
      <Header></Header>
      <div className='h-full'>
        <main className='max-w-full mx-auto'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen'>
              <AgentSidebar redirect={redirect}></AgentSidebar>
            </div>

            <div className='bg-blue-soft lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen'>
              <div className='max-w-full'>
                {renderSection(redirect)}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AgentDashboard