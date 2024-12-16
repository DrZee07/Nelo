import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Home, MessageCircle, Book, Settings, HelpCircle, X } from 'lucide-react'

const SlideMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: MessageCircle, label: 'Chat', to: '/chat' },
    { icon: Book, label: 'Resources', to: '/resources' },
    { icon: Settings, label: 'Settings', to: '/settings' },
    { icon: HelpCircle, label: 'Help', to: '/help' },
  ]

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setIsOpen(false)}
      ></div>
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white dark:bg-gray-800 shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-primary dark:text-primary-dark">Menu</h2>
          <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-5">
          <ul>
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="flex items-center py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SlideMenu

