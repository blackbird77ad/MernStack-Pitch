import React from 'react';



const Sidebar = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-[98vh] w-56 bg-white text-white z-20 shadow-lg">
      <button onClick={toggleSidebar} className="m-4 text-white">
        ✖</button>
      <nav className="mt-8 flex flex-col space-y-4 pl-4">
        <a href="/" className="text-red-800 ">Home</a>
        <a href="/about" className="text-red-800 w-i">Talents</a>
        <a href="/services" className="text-red-800 w-i">Pitch</a>
        <a href="/contact" className="text-red-800 w-i">Companies</a>
      </nav>
    </div>
  );
};

export default Sidebar;

