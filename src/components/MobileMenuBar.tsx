import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenuBar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary text-white shadow-md fixed top-0 w-full z-50">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="text-2xl font-bold">NelsonBot</div>
        <button
          onClick={toggleMenu}
          className="focus:outline-none focus:ring-2 focus:ring-primary-light"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <nav className="bg-primary-dark">
          <ul className="flex flex-col text-center py-4 space-y-2">
            {["Home", "Features", "Services", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="block text-white text-lg hover:bg-primary-light py-2 rounded"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MobileMenuBar;

