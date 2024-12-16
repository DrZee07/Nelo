import React from 'react'
import { Link } from 'react-router-dom'
import { Home, MessageCircle, Book, Settings, HelpCircle } from 'lucide-react'

const Sidebar: React.FC = () => {
  const menuItems = [
    { icon: Home, label: 'Home', to: '/' },
    { icon: MessageCircle, label: 'Chat', to: '/chat' },
    { icon: Book, label: 'Resources', to: '/resources' },
    { icon: Settings, label: 'Settings', to: '/settings' },
    { icon: HelpCircle, label: 'Help', to: '/help' },
  ]

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 shadow-md hidden md:block">
      <div className="p-4">
        <h2 className="text-2xl font-bold text-primary dark:text-primary-dark">NelsonBot</h2>
      </div>
      <nav className="mt-5">
        <ul>
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="flex items-center py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar

