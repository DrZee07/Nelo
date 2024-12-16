'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send } from 'lucide-react'

export function ChatInterface() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', content: string }[]>([])
  
  const exampleQuestions = [
    "What are common symptoms of pediatric fever?",
    "How to handle infant vaccination schedules?",
    "Signs of respiratory distress in children",
    "Common childhood allergies and treatments"
  ]

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { role: 'user', content: input }])
      // Here you would typically call an API to get the bot's response
      // For this example, we'll just echo the user's input
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', content: `You asked: ${input}` }])
      }, 1000)
      setInput('')
    }
  }

  return (
    <div className="flex flex-col h-full">
      {messages.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-900 flex items-center justify-center mb-6">
            <span className="text-4xl">👶</span>
          </div>
          <h1 className="text-4xl font-bold text-blue-500 dark:text-blue-400 mb-4">Welcome to NelsonBot</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
            Your AI assistant for pediatric insights, powered by the Nelson Textbook of Pediatrics
          </p>
          <div className="space-y-4 w-full">
            {exampleQuestions.map((question, i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/50 hover:bg-blue-100 dark:hover:bg-blue-900 rounded-2xl p-6 h-auto"
                onClick={() => setInput(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[75%] rounded-lg p-3 ${
                message.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
              }`}>
                {message.content}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="mt-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about pediatric topics..."
            className="rounded-full"
          />
          <Button size="icon" className="rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700" onClick={handleSend}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

