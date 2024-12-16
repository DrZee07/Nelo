import React from 'react'

const Help: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Help & FAQ</h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
        Find answers to common questions and learn how to use NelsonBot effectively.
      </p>
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">How do I start a chat?</h2>
          <p className="text-gray-600 dark:text-gray-400">Navigate to the Chat page and type your question in the input field at the bottom of the chat interface.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">What kind of questions can I ask?</h2>
          <p className="text-gray-600 dark:text-gray-400">You can ask any pediatrics-related questions. NelsonBot is powered by the Nelson Textbook of Pediatrics and can provide information on various pediatric topics.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Is the information provided by NelsonBot up to date?</h2>
          <p className="text-gray-600 dark:text-gray-400">NelsonBot's knowledge is based on the latest edition of the Nelson Textbook of Pediatrics. However, always consult with a healthcare professional for medical advice.</p>
        </div>
      </div>
    </div>
  )
}

export default Help

