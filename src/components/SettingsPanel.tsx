import React from 'react'
import { useTheme } from '../hooks/useTheme'

const SettingsPanel: React.FC = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">App Settings</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <span className="mr-2 text-gray-700 dark:text-gray-300">Dark Mode:</span>
          <input
            type="checkbox"
            checked={theme === 'dark'}
            onChange={toggleTheme}
            className="form-checkbox h-5 w-5 text-primary"
          />
        </label>
      </div>
      {/* Add more settings options here */}
    </div>
  )
}

export default SettingsPanel

