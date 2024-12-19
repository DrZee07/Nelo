import { useChat } from '../hooks/useChat'
import Message from './Message'
import { Send } from 'lucide-react'

export default function ChatBox() {
  const { messages, input, setInput, handleSubmit, isLoading } = useChat()

  return (
    <div className="flex flex-col h-[calc(100vh-64px)]">
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        <Message
          role="assistant"
          content="Hi! I'm Nelson, your AI assistant. How can I help you today?"
        />
        {messages.map((message, index) => (
          <Message key={index} role={message.role} content={message.content} />
        ))}
        {isLoading && (
          <div className="flex justify-center">
            <div className="animate-pulse bg-gray-300 h-8 w-8 rounded-full"></div>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-50">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-grow px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            disabled={isLoading}
          />
          <button
            type="submit"
            className="p-3 bg-purple-500 text-white rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 disabled:bg-gray-400"
            disabled={isLoading}
          >
            <Send size={20} />
            <span className="sr-only">Send message</span>
          </button>
        </form>
      </div>
    </div>
  )
}

