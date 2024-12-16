import React from 'react'

const Resources: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Resources</h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-400">
        Here you can find additional resources and information about pediatrics.
      </p>
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Nelson Textbook of Pediatrics</li>
        <li>American Academy of Pediatrics Guidelines</li>
        <li>World Health Organization - Child Health</li>
        <li>Centers for Disease Control and Prevention - Children's Health</li>
      </ul>
    </div>
  )
}

export default Resources

