"use client";
import React from "react";

import {
  useUpload,
  useHandleStreamResponse,
} from "../utilities/runtime-helpers";

function MainComponent() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [streamingMessage, setStreamingMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const chatBoxRef = useRef(null);
  const [imageFile, setImageFile] = useState(null);
  const [upload, { loading: uploading }] = useUpload();
  const handleFinish = useCallback((message) => {
    setMessages((prev) => [...prev, { role: "assistant", content: message }]);
    setStreamingMessage("");
    setLoading(false);
  }, []);
  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: handleFinish,
  });
  const [currentView, setCurrentView] = useState("chat");
  const [theme, setTheme] = useState("dark");
  const [fontSize, setFontSize] = useState("medium");
  const handleSubmit = async () => {
    if ((!inputValue.trim() && !imageFile) || loading) return;

    setLoading(true);
    let content = inputValue;

    if (imageFile) {
      const { url, error } = await upload({ file: imageFile });
      if (!error) {
        content = content ? `${content} [Image: ${url}]` : `[Image: ${url}]`;
      }
      setImageFile(null);
    }

    const newMessage = { role: "user", content };
    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    const response = await fetch("/integrations/chat-gpt/conversationgpt4", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [
          {
            role: "system",
            content:
              "You are Nelson, a chatbot who speaks like a pirate and loves mud. Your responses should be short and always reference mud or dirt in some way.",
          },
          ...messages,
          newMessage,
        ],
        stream: true,
      }),
    });

    handleStreamResponse(response);
  };

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, streamingMessage]);

  const getFontSize = () => {
    switch (fontSize) {
      case "small":
        return "text-sm";
      case "large":
        return "text-lg";
      default:
        return "text-base";
    }
  };

  return (
    <div
      className={`flex flex-col h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      } ${getFontSize()}`}
    >
      <header className="bg-[#00695C] p-4 flex justify-between items-center">
        {currentView === "settings" ? (
          <button onClick={() => setCurrentView("chat")} className="text-white">
            <i className="fas fa-arrow-left text-xl"></i>
          </button>
        ) : (
          <h1 className="text-2xl font-bold text-white">NelsonBot</h1>
        )}
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </header>
      <div
        className={`flex-1 overflow-hidden ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        }`}
      >
        {currentView === "chat" ? (
          <main className="h-full p-4">
            <div
              ref={chatBoxRef}
              className="h-[calc(100%-60px)] overflow-y-auto mb-4"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`${
                      message.role === "user"
                        ? theme === "dark"
                          ? "bg-blue-600"
                          : "bg-blue-500"
                        : theme === "dark"
                        ? "bg-gray-700"
                        : "bg-gray-200"
                    } p-3 rounded-lg max-w-[80%] ${
                      message.role === "user"
                        ? "text-white"
                        : theme === "dark"
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    <p>{message.content}</p>
                  </div>
                </div>
              ))}
              {streamingMessage && (
                <div className="mb-4 flex justify-start">
                  <div
                    className={`${
                      theme === "dark" ? "bg-gray-700" : "bg-gray-200"
                    } p-3 rounded-lg max-w-[80%] ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    <p>{streamingMessage}</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSubmit()}
                placeholder="Chat with Nelson..."
                className={`flex-1 p-3 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                }`}
                disabled={loading}
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && setImageFile(e.target.files[0])
                }
                className="hidden"
                id="camera-input"
              />
              <label
                htmlFor="camera-input"
                className={`px-4 rounded-lg flex items-center justify-center cursor-pointer ${
                  theme === "dark"
                    ? "bg-green-600 hover:bg-green-700"
                    : "bg-green-500 hover:bg-green-600"
                } text-white`}
              >
                <i className="fas fa-camera"></i>
              </label>
              <button
                onClick={handleSubmit}
                disabled={loading || (!inputValue.trim() && !imageFile)}
                className={`px-6 rounded-lg ${
                  theme === "dark"
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {loading ? "..." : "Send"}
              </button>
            </div>
          </main>
        ) : currentView === "settings" ? (
          <div className="p-4 space-y-4">
            <div
              className={`p-4 rounded-lg ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <h2 className="text-xl mb-4">Theme</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setTheme("dark")}
                  className={`p-2 rounded ${
                    theme === "dark" ? "bg-blue-600 text-white" : "bg-gray-300"
                  }`}
                >
                  Dark
                </button>
                <button
                  onClick={() => setTheme("light")}
                  className={`p-2 rounded ${
                    theme === "light" ? "bg-blue-600 text-white" : "bg-gray-300"
                  }`}
                >
                  Light
                </button>
              </div>
            </div>
            <div
              className={`p-4 rounded-lg ${
                theme === "dark" ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <h2 className="text-xl mb-4">Font Size</h2>
              <div className="flex gap-4">
                <button
                  onClick={() => setFontSize("small")}
                  className={`p-2 rounded ${
                    fontSize === "small"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  Small
                </button>
                <button
                  onClick={() => setFontSize("medium")}
                  className={`p-2 rounded ${
                    fontSize === "medium"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  Medium
                </button>
                <button
                  onClick={() => setFontSize("large")}
                  className={`p-2 rounded ${
                    fontSize === "large"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-300"
                  }`}
                >
                  Large
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div
        className={`fixed bottom-0 left-0 right-0 ${
          theme === "dark" ? "bg-gray-800" : "bg-white"
        } transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        } border-t ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
      >
        <div className="p-4 space-y-4">
          <button
            onClick={() => {
              setCurrentView("settings");
              setMenuOpen(false);
            }}
            className={`w-full text-left p-2 rounded ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-cog mr-2"></i>Settings
          </button>
          <button
            onClick={() => {
              setMessages([]);
              setMenuOpen(false);
            }}
            className={`w-full text-left p-2 rounded ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-trash mr-2"></i>Clear Chat
          </button>
          <button
            onClick={() => {
              setCurrentView("chat");
              setMenuOpen(false);
            }}
            className={`w-full text-left p-2 rounded ${
              theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
            }`}
          >
            <i className="fas fa-comment mr-2"></i>Back to Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;