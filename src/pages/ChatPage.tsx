import React from 'react'
import ChatInterface from '../components/ChatInterface'

const ChatPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Chat with NelsonBot</h1>
      <ChatInterface />
    </div>
  )
}

export default ChatPage

