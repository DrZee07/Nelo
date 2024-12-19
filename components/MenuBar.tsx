import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Home, History, Settings, Info } from 'lucide-react'

interface MenuBarProps {
  isOpen: boolean
  onClose: () => void
}

export default function MenuBar({ isOpen, onClose }: MenuBarProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  const menuItems = [
    { icon: <Home size={24} />, text: 'Home', href: '/' },
    { icon: <History size={24} />, text: 'History', href: '/history' },
    { icon: <Settings size={24} />, text: 'Settings', href: '/settings' },
    { icon: <Info size={24} />, text: 'About', href: '/about' },
  ]

  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-50 ${
        isOpen ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onClose}
    >
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.text}
              href={item.href}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50"
            >
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center mr-3">
                <div className="text-purple-500">{item.icon}</div>
              </div>
              <span className="text-gray-700 text-lg">{item.text}</span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

