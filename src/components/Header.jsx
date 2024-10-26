import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between bg-white text-black h-16 px-4">
      <button onClick={toggleSidebar} className="text-2xl">
        ☰
      </button>
      <h1 className="text-4xl font-extrabold text-blue-800">PITCH╸✕</h1>
      <nav className="flex space-x-4 w-1/3 justify-between">
        <a href="/" className="text-1/5xl font-extrabold text-black-500">Home</a>
        <a href="/about" className="text-1/5xl font-extrabold text-black-500">About</a>
        <a href="/employers" className="text-1/5xl font-extrabold text-black-500">Employers</a>
        <a href="/talents" className="text-1/5xl font-extrabold text-black-500">Talents</a>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
