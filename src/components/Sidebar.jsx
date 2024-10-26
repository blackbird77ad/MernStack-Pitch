import React from 'react';



const Sidebar = ({ isOpen, toggleSidebar }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 h-[98vh] w-48 bg-slate-200 text-white z-20 shadow-lg">
      <button onClick={toggleSidebar} className="m-4 text-black">
        ✖</button>
      <nav className="mt-8 flex flex-col space-y-4 pl-4">
        <a href="/" className="text-1/5xl font-extrabold text-black">Home</a>
        <a href="/Talents" className="text-1/5xl font-extrabold text-black">Talents</a>
        <a href="/pitches" className="text-1/5xl font-extrabold text-black">Pitches</a>
        <a href="/companies" className="text-1/5xl font-extrabold text-black">Companies</a>
        <a href="/upskill" className="text-1/5xl font-extrabold text-black">Upskill</a>
        {/* <a href="/" className="text-1/5xl font-extrabold text-black">Companies</a> */}
      </nav>
    </div>
  );
};

export default Sidebar;

