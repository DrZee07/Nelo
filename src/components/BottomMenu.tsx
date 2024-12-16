import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHome, FiClock, FiLogIn, FiMoon, FiMenu, FiX } from "react-icons/fi";

interface BottomMenuProps {
  toggleDarkMode: () => void;
}

const BottomMenu: React.FC<BottomMenuProps> = ({ toggleDarkMode }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { icon: FiHome, label: "Home", to: "/" },
    { icon: FiClock, label: "History", to: "/history" },
    { icon: FiLogIn, label: "Sign In", to: "/login" },
    { icon: FiMoon, label: "Dark Mode", onClick: toggleDarkMode },
  ];

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg z-50"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
      </button>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleMenu} />
      )}

      <div
        className={`fixed inset-x-0 bottom-0 bg-white dark:bg-gray-800 shadow-xl rounded-t-3xl z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-6">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-1 bg-gray-300 dark:bg-gray-600 rounded" onClick={toggleMenu} />
          </div>
          <h2 className="text-lg font-semibold text-center mb-6 text-gray-800 dark:text-gray-200">Menu</h2>
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.label} className="flex items-center space-x-4">
                <item.icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                {item.to ? (
                  <Link
                    to={item.to}
                    className="text-gray-800 dark:text-gray-200 text-lg font-medium"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      item.onClick?.();
                      toggleMenu();
                    }}
                    className="text-gray-800 dark:text-gray-200 text-lg font-medium"
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BottomMenu;

