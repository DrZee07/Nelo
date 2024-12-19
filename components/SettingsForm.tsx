import { useState } from 'react'

export default function SettingsForm() {
  const [theme, setTheme] = useState('light')
  const [fontSize, setFontSize] = useState('medium')
  const [notifications, setNotifications] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would save these settings to an API or local storage
    console.log('Settings saved:', { theme, fontSize, notifications })
    alert('Settings saved successfully!')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="theme" className="block text-sm font-medium text-gray-700">
          Theme
        </label>
        <select
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <div>
        <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700">
          Font Size
        </label>
        <select
          id="fontSize"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <div>
        <label htmlFor="notifications" className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
          />
          <span className="ml-2 text-sm text-gray-700">Enable notifications</span>
        </label>
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Save Settings
        </button>
      </div>
    </form>
  )
}

