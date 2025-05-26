import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      const items = menuRef.current.querySelectorAll(".menu-item");

      gsap.fromTo(
        menuRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power1.out" }
      );

      gsap.fromTo(
        items,
        {
          y: 30,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.18,
          delay: 0.15,
        }
      );
    }
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = menuOpen ? "auto" : "hidden"; // Prevent background scroll
  };

  const menuItems = ["Home", "Gallery", "Contact", "About"];

  return (
    <>
      {/* Top Nav Bar */}
      <nav
        ref={navRef}
        className={`w-full bg-black text-white flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 relative z-50${
          menuOpen ? " invisible" : ""
        }`}
      >
        {/* Left: Home & Gallery */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/"
            className="hidden md:flex px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group items-center gap-1"
          >
            <span className="relative z-10">HOME</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
              ✧
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/gallery"
            className="hidden md:flex px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group items-center gap-1"
          >
            <span className="relative z-10">GALLERY</span>
            <span className="inline-block transition-transform duration-300 group-hover:rotate-180">
              ✧
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        {/* Center: Logo */}
        <div className="flex-1 flex justify-center items-center">
          <span className="text-2xl font-semibold tracking-widest">
            ArtisanVista
          </span>
        </div>

        {/* Right: Contact & Menu */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            to="/contact"
            className="hidden md:flex px-2 py-1 rounded-full border border-white/50 hover:border-white transition relative overflow-hidden group"
          >
            CONTACT
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
          <button
            onClick={toggleMenu}
            className="w-8 h-8 flex flex-col justify-center items-center space-y-1 group hover:scale-110 transition-transform duration-300 focus:outline-none"
            aria-label="Open menu"
          >
            <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
            <span className="w-5 h-0.5 bg-white group-hover:bg-gray-400 transition"></span>
          </button>
        </div>
      </nav>

      {/* Fullscreen Menu Overlay */}
      {menuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-40"
        >
          <button
            className="absolute top-6 right-6 text-3xl hover:text-gray-400 transition"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>

          <div className="text-8xl md:text-9xl space-y-10 text-center relative font-[Cinzel]">
            {menuItems.map((item, idx) => (
              <div
                className={`menu-item transition-all duration-300 ease-out relative${
                  hoveredIdx === null
                    ? ""
                    : hoveredIdx === idx
                    ? " scale-115 opacity-100 z-20 blur-0"
                    : " scale-90 opacity-50 z-10 blur-sm text-7xl md:text-8xl"
                }`}
                key={item}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  transform:
                    hoveredIdx === null
                      ? ""
                      : hoveredIdx === idx
                      ? "scale(1.15)"
                      : "scale(0.9)",
                  opacity:
                    hoveredIdx === null ? 1 : hoveredIdx === idx ? 1 : 0.5,
                  filter:
                    hoveredIdx === null
                      ? ""
                      : hoveredIdx === idx
                      ? "blur(0px)"
                      : "blur(3px)",
                  zIndex: hoveredIdx === idx ? 2 : 1,
                }}
              >
                {hoveredIdx === idx && (
                  <>
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full h-1 bg-white"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-1 bg-white"></div>
                  </>
                )}
                <Link
                  to={`/${
                    item.toLowerCase() === "home" ? "" : item.toLowerCase()
                  }`}
                  onClick={toggleMenu}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
