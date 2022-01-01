import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Sections/Footer'
import Header from '../Sections/Header'
import AddProperty from './AddProperty'
import AgentOverview from './AgentOverview'
import AgentPlans from './AgentPlans'
import AgentProfile from './AgentProfile'
import AgentProperties from './AgentProperties'
import AgentSidebar from './AgentSidebar'

const AgentDashboard = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'overview'

  const renderSection = (params) => {
    switch (params) {
      case 'overview':
        return <AgentOverview />
      case 'profile':
        return <AgentProfile />
      case 'properties':
        return <AgentProperties />
      case 'addProperty':
        return <AddProperty />
      case 'plans':
        return <AgentPlans />
      default:
        return <AgentOverview />
    }
  }

  return (
    <div>
      <Header />
      <div className='h-full'>
        <main className='max-w-full mx-auto'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen'>
              <AgentSidebar redirect={redirect}></AgentSidebar>
            </div>

            <div className='bg-blue-soft lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen'>
              <div className='max-w-full'>{renderSection(redirect)}</div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default AgentDashboard
