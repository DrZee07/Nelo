import { useState, useCallback, useEffect } from 'react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const sendMessage = useCallback(async (message: string) => {
    setIsLoading(true)
    try {
      const response = await fetch('/api/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: message }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      return data.response
    } catch (error) {
      console.error('Error:', error)
      return 'Sorry, I encountered an error. Please try again.'
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prevMessages => [...prevMessages, userMessage])
    setInput('')

    const assistantResponse = await sendMessage(input)
    const assistantMessage: Message = { role: 'assistant', content: assistantResponse }
    setMessages(prevMessages => [...prevMessages, assistantMessage])
  }, [input, isLoading, sendMessage])

  return { messages, input, setInput, handleSubmit, isLoading }
}

