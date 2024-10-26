import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex items-center justify-between bg-red-800 text-white h-16 px-4">
      <button onClick={toggleSidebar} className="text-2xl">
        ☰
      </button>
      <h1 className="text-lg font-bold">PITCH <span className='text-black'>╸</span>✕</h1>
      <nav className="flex space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/employers">Employers</a>
        <a href="/talents">Talents</a>
      </nav>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
