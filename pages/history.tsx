import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'

interface ChatHistory {
  id: string
  timestamp: string
  preview: string
}

export default function History() {
  const [chatHistory, setChatHistory] = useState<ChatHistory[]>([])

  useEffect(() => {
    // In a real app, you would fetch the chat history from an API or local storage
    const mockHistory: ChatHistory[] = [
      { id: '1', timestamp: '2023-05-01 10:30', preview: 'What are the symptoms of...' },
      { id: '2', timestamp: '2023-05-02 14:15', preview: 'How to treat a fever in...' },
      { id: '3', timestamp: '2023-05-03 09:45', preview: 'Is it normal for a baby to...' },
    ]
    setChatHistory(mockHistory)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Chat History - NelsonBot</title>
      </Head>
      <h1 className="text-2xl font-bold mb-4">Chat History</h1>
      <ul className="space-y-4">
        {chatHistory.map((chat) => (
          <li key={chat.id} className="bg-white shadow rounded-lg p-4">
            <Link href={`/chat/${chat.id}`} className="block hover:bg-gray-50">
              <div className="text-sm text-gray-500">{chat.timestamp}</div>
              <div className="mt-2 text-gray-900">{chat.preview}</div>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="mt-8 inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Back to Chat
      </Link>
    </div>
  )
}

