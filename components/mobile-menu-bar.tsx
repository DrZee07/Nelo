'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function MobileMenuBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 z-50">
      <div className="container max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-500 dark:text-blue-400">NelsonBot</span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 dark:text-gray-300"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {isOpen && (
        <nav className="border-b border-gray-200 dark:border-gray-700">
          <div className="container max-w-lg mx-auto px-4 py-4">
            <ul className="space-y-2">
              {['Home', 'Features', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 dark:text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}

