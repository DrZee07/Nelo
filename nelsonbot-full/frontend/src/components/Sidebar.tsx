import React from 'react';
import { X } from 'lucide-react';
import { cn } from '../utils/cn';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <nav className={cn(
      "fixed top-0 left-0 h-full w-64 bg-background border-r shadow-lg transition-transform duration-300 ease-in-out transform z-50",
      isOpen ? "translate-x-0" : "-translate-x-full"
    )}>
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-200">
          <X className="h-6 w-6" />
        </button>
      </div>
      <ul className="p-4 space-y-2">
        <li><button className="w-full text-left p-2 rounded-md hover:bg-gray-200">New Chat</button></li>
        <li><button className="w-full text-left p-2 rounded-md hover:bg-gray-200">History</button></li>
        <li><button className="w-full text-left p-2 rounded-md hover:bg-gray-200">Settings</button></li>
      </ul>
    </nav>
  );
};

