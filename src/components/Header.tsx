import React from 'react'
import { Link } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'
import { useTheme } from '../hooks/useTheme'

const Header: React.FC = () => {
  const { toggleTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary dark:text-primary-dark">
          NelsonBot
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
          >
            Toggle Theme
          </button>
          <HamburgerMenu />
        </div>
      </div>
    </header>
  )
}

export default Header

