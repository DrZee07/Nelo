'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Home, Clock, LogIn, Moon, Menu, X } from 'lucide-react'

interface BottomMenuProps {
  toggleDarkMode: () => void
}

export function BottomMenu({ toggleDarkMode }: BottomMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Clock, label: 'History', href: '/history' },
    { icon: LogIn, label: 'Sign In', href: '/login' },
    { icon: Moon, label: 'Dark Mode', onClick: toggleDarkMode }
  ]

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      <div className={`
        fixed inset-x-0 bottom-0 bg-white dark:bg-gray-800 rounded-t-3xl shadow-lg transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-y-0' : 'translate-y-full'}
      `}>
        <div className="p-6">
          <div 
            className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mx-auto mb-6"
            onClick={() => setIsOpen(!isOpen)}
          />
          
          <h2 className="text-lg font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">Menu</h2>
          
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-4 text-gray-700 dark:text-gray-300"
                  onClick={item.onClick}
                  asChild={!item.onClick}
                >
                  {item.onClick ? (
                    <>
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </>
                  ) : (
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </a>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Button
        size="icon"
        className="fixed right-4 bottom-24 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full shadow-lg z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
    </>
  )
}

