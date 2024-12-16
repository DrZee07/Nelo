import { useState, useCallback } from 'react'
import { Message } from './types'
import { sendChatMessage } from './ChatApi'

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([])

  const sendMessage = useCallback(async (content: string) => {
    const userMessage: Message = { role: 'user', content }
    setMessages((prevMessages) => [...prevMessages, userMessage])

    try {
      const botResponse = await sendChatMessage(content)
      setMessages((prevMessages) => [...prevMessages, botResponse])
    } catch (error) {
      console.error('Failed to get bot response:', error)
      // Handle error (e.g., show an error message to the user)
    }
  }, [])

  return { messages, sendMessage }
}

