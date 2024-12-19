interface MessageProps {
  role: 'user' | 'assistant'
  content: string
}

export default function Message({ role, content }: MessageProps) {
  const isUser = role === 'user'
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-lg p-3 ${
          isUser ? 'bg-green-500 text-white' : 'bg-white text-gray-800 border border-gray-300'
        }`}
      >
        <p className="text-sm font-semibold mb-1">{isUser ? 'You' : 'NelsonBot'}</p>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  )
}

