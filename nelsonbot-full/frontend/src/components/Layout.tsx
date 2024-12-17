import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { ChatBox } from './ChatBox';
import { cn } from '../utils/cn';

export const Layout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex flex-col flex-1">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "md:ml-64" : "ml-0"
        )}>
          <ChatBox />
        </main>
      </div>
    </div>
  );
};

