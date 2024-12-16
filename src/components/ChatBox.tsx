import React from 'react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

interface ChatBoxProps {
  messages: Message[]
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages }) => {
  return (
    <div className="h-96 overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4">
      {messages.map((message, index) => (
        <div
          key={index}
          className={`mb-2 ${
            message.role === 'user' ? 'text-right' : 'text-left'
          }`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${
              message.role === 'user'
                ? 'bg-primary text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
            }`}
          >
            {message.content}
          </span>
        </div>
      ))}
    </div>
  )
}

export default ChatBox

