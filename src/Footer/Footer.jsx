import React from "react";
import { PrefetchPageLinks } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full py-6 px-8 font-serif border-t border-white/10 relative min-h-[120px] ">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-stretch min-h-[400px]">
        {/* Left Section: Logo */}
        <div className="flex flex-col justify-start items-start w-full md:w-1/2 pl-2 pt-10 relative ">
          <div className="flex items-end gap-4 text-5xl font-light tracking-tight select-none">
            <span className="text-8xl">✢</span>
            <span className="font-serif text-4xl md:text-8xl">AV</span>
            <span className="text-8xl">✢</span>
          </div>

          <div className="absolute bottom-0 left-0">
            <p className="text-6xl font-['Cinzel'] italic opacity-30">ArtisanVista</p>
          </div>
        </div>
        {/* Right Section: Navigation Links */}
        <div className="flex flex-col  w-full md:w-1/2 pr-16 ">
          <nav className="flex flex-col items-start gap-1 font-['Cinzel'] pt-35">
            {["Home", "Gallery", "Projects", "Team", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-7xl font-light text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex flex-col md:flex-row w-full gap-2 mt-10">
            <div className="w-full md:w-1/2">
              <p className="text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-lg text-white/70">✢</span>
                Facebook
              </p>
              <p className="text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-lg text-white/70">✢</span>
                Instagram
              </p>
              <p className="text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-lg text-white/70">✢</span>
                Linkdin
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
              <p className="text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
              <p className="text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
            </div>
          </div>

          <div className="w-full border-t border-white/40 my-8"></div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <p className="text-lg font-light text-white text-left md:w-1/2">
              Inspired By: Karya Kala
            </p>
            <p className="text-lg font-light text-white text-left md:text-right md:w-1/2">
              Site By: Sagar tarak
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
