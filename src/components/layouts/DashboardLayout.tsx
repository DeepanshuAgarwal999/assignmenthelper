import React from 'react'
import LeftSidebar from '../dashboard/LeftSidebar'
import DashNavBar from '../dashboard/DashNavBar'
import ProtectedRoute from './ProtectedRoute'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProtectedRoute>
      <LeftSidebar />
      <DashNavBar />
      <main className="lg:pl-80 lg:pt-16">
        <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-8 relative">{children}</div>
      </main>
    </ProtectedRoute>
  )
}

export default DashboardLayout