import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-gray-200">Welcome to NelsonBot</h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
        Your AI assistant for pediatric insights, powered by the Nelson Textbook of Pediatrics.
      </p>
      <Link
        to="/chat"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded"
      >
        Start Chatting
      </Link>
    </div>
  )
}

export default Home

