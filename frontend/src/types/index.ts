export interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export interface Topic {
  id: number;
  title: string;
  content: string;
  tags: string[];
}

