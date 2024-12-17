import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export const sendMessage = async (message: string): Promise<{ response: string }> => {
  const response = await axios.post(`${API_BASE_URL}/chat`, { message });
  return response.data;
};

export const getTopics = async (): Promise<any[]> => {
  const response = await axios.get(`${API_BASE_URL}/topics`);
  return response.data;
};

export const getTopic = async (id: number): Promise<any> => {
  const response = await axios.get(`${API_BASE_URL}/topics/${id}`);
  return response.data;
};

export const searchTopics = async (query: string): Promise<any[]> => {
  const response = await axios.get(`${API_BASE_URL}/topics/search`, { params: { query } });
  return response.data;
};

