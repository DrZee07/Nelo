import React, { useState } from 'react'
import ChatBox from './ChatBox'
import { useChat } from '../features/chat/useChat'

const ChatInterface: React.FC = () => {
  const [input, setInput] = useState('')
  const { messages, sendMessage } = useChat()

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input)
      setInput('')
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <ChatBox messages={messages} />
      <div className="mt-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 rounded-l-lg border border-gray-300 dark:border-gray-600 p-2 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-r-lg"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatInterface

