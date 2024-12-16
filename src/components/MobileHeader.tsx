import React from 'react';
import { FiMenu } from 'react-icons/fi';

interface MobileHeaderProps {
  toggleSidebar: () => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md md:hidden">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          <FiMenu size={24} />
        </button>
        <h1 className="text-xl font-bold text-primary dark:text-primary-dark">NelsonBot</h1>
        <div className="w-6" /> {/* Placeholder for right-side alignment */}
      </div>
    </header>
  );
};

export default MobileHeader;

