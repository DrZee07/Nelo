import React from 'react'
import SettingsPanel from '../components/SettingsPanel'

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">Settings</h1>
      <SettingsPanel />
    </div>
  )
}

export default Settings

