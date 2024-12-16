'use client'

import { useState } from 'react'
import { MobileMenuBar } from '@/components/mobile-menu-bar'
import { BottomMenu } from '@/components/bottom-menu'
import { ChatInterface } from '@/components/chat-interface'

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark' : ''}`}>
      <MobileMenuBar />
      <main className="flex-1 container max-w-lg mx-auto px-4 pt-20 pb-24">
        <ChatInterface />
      </main>
      <BottomMenu toggleDarkMode={() => setIsDarkMode(!isDarkMode)} />
    </div>
  )
}

