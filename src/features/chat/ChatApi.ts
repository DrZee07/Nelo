import { Message } from './types'

export const sendChatMessage = async (message: string): Promise<Message> => {
  // In a real application, this would be an API call to your backend
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })

  if (!response.ok) {
    throw new Error('Failed to send message')
  }

  return response.json()
}

