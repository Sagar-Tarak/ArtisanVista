import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useRef } from "react";
import Content from "../Content/Content";
import Highlights from "../Highlights/Hightlights";
import Showcase from "../Showcase/Showcase";
import Artists from "../Artists/Artists";
import Showrell from "../Showreel/Showrell";

export default function HomePage() {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsRevealed(true), 500); // Simulate reveal delay
    return () => clearTimeout(timer);
  }, []);

  const leftImageRef = useRef(null);
  const centerImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [leftImageRef.current, centerImageRef.current, rightImageRef.current],
      {
        y: 50,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        delay: 0.3,
      }
    );
  }, []);

  return (
    <>
      <main className="min-h-screen bg-black text-white relative overflow-hidden px-4 py-6 md:px-8 md:py-10">
        {/* Background texture (optional) */}
        <div className="absolute inset-0 z-0 bg-[url('/bg-texture.jpg')] bg-cover bg-center opacity-20" />

        {/* Mobile: Centralized hero section with overlay text */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center gap-6 md:hidden min-h-[80vh]">
          {/* Main Image with overlay effect */}
          <div className="relative w-full flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1622976187016-473a59974d23?q=80&w=1972&auto=format&fit=crop"
              alt="Main Artwork"
              className="rounded-md w-72 h-56 object-cover mx-auto shadow-lg"
            />
            {/* Optional: Layered effect (white border rectangles) */}
            <div className="absolute top-2 left-4 w-2/3 h-2/3 border-2 border-white opacity-60 rounded-md -z-10" />
            <div className="absolute bottom-2 right-4 w-1/2 h-1/2 border-2 border-white opacity-30 rounded-md -z-10" />
          </div>
          {/* Overlay Text */}
          <div className="w-full px-2 flex flex-col items-center">
            <span className="text-lg font-light mb-1">Discover</span>
            <span className="text-5xl font-['Cinzel'] leading-none">Timeless</span>
            <span className="text-5xl font-['Cinzel'] italic leading-none mb-2">Art</span>
            <p className="text-xs text-gray-200 max-w-xs mb-4">
              Discover exclusive, hand-crafted pieces shaped from raw materials and deep intention only at Kanya Kalla's annual showcase.
            </p>
          </div>
          {/* View Gallery Button */}
          <button className="w-full max-w-xs mt-2 py-3 bg-white/10 border border-white rounded-full text-white font-medium flex items-center justify-center gap-2 backdrop-blur-md">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            View Gallery
          </button>
        </div>

        {/* Desktop: Original layout remains unchanged */}
        <div className="hidden md:block">
          {/* Main content */}
          <div className="relative z-10 flex flex-col justify-center text-center gap-20">
            {/* Top Hero Section */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start flex-wrap gap-8 text-left">
              {/* Left: Thumbnail + Text */}
              <div className="flex flex-col gap-6 max-w-xs">
                <img
                  src="https://images.unsplash.com/photo-1686466282438-97011367641d?w=500&auto=format&fit=crop&q=60"
                  alt="Thumbnail Left"
                  width={150}
                  height={150}
                  className="rounded-md"
                  ref={leftImageRef}
                />
                <p className="text-sm text-gray-300 leading-relaxed">
                  Discover exclusive, hand-crafted pieces shaped from raw
                  materials and deep intention...
                </p>
              </div>

              {/* Center: Main Image */}
              <div className="flex-1 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1622976187016-473a59974d23?q=80&w=1972&auto=format&fit=crop"
                  alt="Main Artwork"
                  width={400}
                  height={500}
                  className="rounded-md"
                  ref={centerImageRef}
                />
              </div>

              {/* Right: Thumbnail */}
              <div className="flex flex-col items-end">
                <img
                  src="https://images.unsplash.com/photo-1697053489519-764a4de817f1?w=500&auto=format&fit=crop&q=60"
                  alt="Thumbnail Right"
                  width={200}
                  height={200}
                  className="rounded-md"
                  ref={rightImageRef}
                />
              </div>
            </div>

            <div>
              <div>
                <h1
                  className="text-5xl absolute left-15 bottom-60 text-left font-thin font-['Cinzel'] mb-5 opacity-0 animate-fade-in"
                  style={{
                    animation: "fadeIn 1.5s ease-in-out forwards",
                  }}
                >
                  Discover
                </h1>
                <button
                  onClick={() => setIsRevealed(!isRevealed)}
                  className={`mt-8 px-1 py-1 backdrop-blur-md border rounded-full shadow-lg flex items-center justify-center transition-transform duration-700 group ${
                    isRevealed ? "rotate-180 scale-110" : "rotate-0 scale-100"
                  } animate-bounce-custom`}
                  style={{
                    animation: "bounce-custom 1.2s infinite alternate",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-white transition-transform duration-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <style>
                  {`
                  @keyframes bounce-custom {
                    0% {
                      transform: translateY(0);
                    }
                    50% {
                      transform: translateY(-10px);
                    }
                    100% {
                      transform: translateY(0);
                    }
                  }
                `}
                </style>
                <p className="text-lg absolute left-14 bottom-2">View Gallery</p>
              </div>
              <div>
                <h1
                  className="text-[220px] absolute top-110 left-70 font-['Cinzel'] opacity-0 animate-fade-in"
                  style={{
                    animation: "fadeIn 2s ease-in-out forwards",
                  }}
                >
                  TimeLess <span className="italic">Art</span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
        </style>
      </main>
      <Content />
      <Highlights />
      <Showcase/>
      <Artists/>
      <Showrell/>
    </>
  );
}
