import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <nav ref={navRef} className="w-full bg-black text-white flex items-center justify-between px-10 py-4">
      {/* Left: Home & Gallery */}
      <div className="flex items-center gap-4">
        <Link to="/" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group flex items-center gap-1">
          <span className="relative z-10">HOME</span>
          <span className="inline-block transition-transform duration-300 group-hover:rotate-180">✧</span>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link to="/gallery" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group flex items-center gap-1">
          <span className="relative z-10">GALLERY</span>
          <span className="inline-block transition-transform duration-300 group-hover:rotate-180">✧</span>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>

      {/* Center: Logo */}
      <div className="flex-1 flex justify-center items-center">
        <span className="text-2xl font-semibold tracking-widest">ArtisanVista</span>
      </div>

      {/* Right: Contact & Menu */}
      <div className="flex items-center gap-4">
        <Link to="/contact" className="px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group">
          CONTACT
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </Link>
        <button className="w-8 h-8 flex flex-col justify-center items-center space-y-1 group hover:scale-110 transition-transform duration-300">
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
          <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
        </button>
      </div>
    </nav>
  );
}
