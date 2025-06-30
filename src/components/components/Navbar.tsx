import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className={`sticky top-0 z-50 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent">
          SUGUMAR M
        </Link>
        <div className="flex items-center gap-6">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 hover:text-blue-500">
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <a href="#home" className="hover:text-blue-500">Home</a>
          <a href="#projects" className="hover:text-blue-500">Projects</a>
          <Link to="/admin" className="hover:text-blue-500">Admin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
