import { Message } from './types'

export const formatChatHistory = (messages: Message[]): string => {
  return messages
    .map((msg) => `${msg.role.toUpperCase()}: ${msg.content}`)
    .join('\n')
}

