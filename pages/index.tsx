import { useState } from 'react'
import Head from 'next/head'
import ChatBox from '../components/ChatBox'
import MenuBar from '../components/MenuBar'
import { Menu } from 'lucide-react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Head>
        <title>NelsonBot</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
      </Head>

      <header className="bg-[#8B5CF6] text-white shadow-sm fixed top-0 left-0 right-0 z-10">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold">NelsonBot</h1>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-white/10 rounded-full focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <main className="flex-grow mt-16">
        <ChatBox />
      </main>

      <MenuBar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  )
}

