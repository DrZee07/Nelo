import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import SlideMenu from '../components/SlideMenu'
import { useTheme } from '../hooks/useTheme'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <div className={`flex h-screen bg-gray-100 ${theme === 'dark' ? 'dark' : ''}`}>
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 dark:bg-gray-900">
          {children}
        </main>
        <Footer />
      </div>
      <SlideMenu />
    </div>
  )
}

export default MainLayout

