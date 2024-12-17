import React from 'react';
import { Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <button onClick={onMenuClick} className="p-2 rounded-md hover:bg-gray-200">
        <Menu className="h-6 w-6" />
      </button>
      <h1 className="text-xl font-bold">NelsonBot</h1>
    </header>
  );
};

