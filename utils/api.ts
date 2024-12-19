export async function queryNelsonBot(question: string): Promise<string> {
  try {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('API error:', errorData)
      throw new Error(errorData.error || 'An error occurred while fetching the response')
    }

    const data = await response.json()
    return data.response
  } catch (error) {
    console.error('Error querying NelsonBot:', error)
    throw error
  }
}

