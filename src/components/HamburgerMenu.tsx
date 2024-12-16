import React from 'react'

const HamburgerMenu: React.FC = () => {
  return (
    <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 md:hidden">
      <svg
        className="w-6 h-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  )
}

export default HamburgerMenu

