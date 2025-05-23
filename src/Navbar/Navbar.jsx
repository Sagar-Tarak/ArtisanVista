import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full bg-black text-white flex items-center justify-between px-10 py-4">
      {/* Left: Home & Gallery */}
      <div className="flex items-center gap-4">
        <Link to="/" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition">
          HOME ✧
        </Link>
        <Link to="/gallery" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition">
          GALLERY ✧
        </Link>
      </div>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center items-center">
        <span className="text-2xl font-semibold tracking-widest">✧K✧</span>
      </div>

      {/* Right: Contact & Menu */}
      <div className="flex items-center gap-4">
        <Link to="/contact" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition">
          CONTACT
        </Link>
        <button className="w-8 h-8 flex flex-col justify-center items-center space-y-1 group">
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
        </button>
      </div>
    </nav>
  );
}
