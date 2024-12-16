import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import ChatPage from './pages/ChatPage'
import Settings from './pages/Settings'
import Resources from './pages/Resources';
import Help from './pages/Help';
import { ThemeProvider } from './hooks/useTheme'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  )
}

export default App

