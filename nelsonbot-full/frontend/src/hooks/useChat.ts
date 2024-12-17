import { useState, useCallback } from 'react';
import { Message } from '../types';
import { sendMessage as sendMessageApi } from '../services/api';

export const useChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const sendMessage = useCallback(async () => {
    if (input.trim()) {
      const userMessage: Message = { text: input, sender: 'user' };
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      try {
        const response = await sendMessageApi(input);
        const botMessage: Message = { text: response.response, sender: 'bot' };
        setMessages(prev => [...prev, botMessage]);
      } catch (error) {
        console.error('Error sending message:', error);
        const errorMessage: Message = { text: 'Sorry, there was an error processing your request.', sender: 'bot' };
        setMessages(prev => [...prev, errorMessage]);
      }
    }
  }, [input]);

  return { messages, input, setInput, sendMessage };
};

