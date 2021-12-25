import React from 'react'
import { useLocation } from 'react-router-dom'
import AddAdmin from './AddAdmin'
import AdminOverview from './AdminOverview'
import AdminProfile from './AdminProfile'
import AdminSidebar from './AdminSidebar'
import AgentsCollection from './AgentsCollection'
import UsersCollection from './UsersCollection'

const AdminDashboard = () => {
  const location = useLocation()
  const redirect = location.search ? location.search.split('=')[1] : 'overview'

  const renderSection = (params) => {
    switch (params) {
      case 'overview':
        return <AdminOverview />
      case 'profile':
        return <AdminProfile />
      case 'users':
        return <UsersCollection />
      case 'agents':
        return <AgentsCollection />
      case 'addAdmin':
        return <AddAdmin />
      default:
        return <AdminOverview />
    }
  }

  return (
    <div>
      <div className='h-full'>
        <main className='max-w-full mx-auto'>
          <div className='lg:grid lg:grid-cols-12'>
            <div className='bg-blue-dark lg:col-span-3 py-6 px-4 sm:px-6 lg:px-6 lg:py-6 lg:min-h-screen'>
              <AdminSidebar redirect={redirect}></AdminSidebar>
            </div>

            <div className='bg-blue-soft lg:col-span-9 lg:py-6 lg:px-6 lg:min-h-screen'>
              <div className='max-w-full'>{renderSection(redirect)}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDashboard
