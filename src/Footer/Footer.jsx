import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Footer() {
  const footerRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef([]);

  useEffect(() => {
    // Footer fade in only (no y movement)
    gsap.fromTo(
      footerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power3.out" }
    );
    // Logo pop-in
    gsap.fromTo(
      logoRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, delay: 0.5, ease: "power3.out" }
    );
    // Nav links staggered fade-in
    gsap.fromTo(
      navLinksRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, delay: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <footer ref={footerRef} className="w-full py-6 px-3 sm:px-8 font-serif border-t border-white/20 bg-black/95 relative min-h-[120px]">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-stretch gap-y-8 md:gap-y-0 gap-8 md:gap-0">
        {/* Left Section: Logo */}
        <div className="flex flex-col justify-start items-start w-full md:w-1/2 pl-0 sm:pl-2 pt-4 sm:pt-10 relative ">
          <div ref={logoRef} className="flex items-end gap-2 sm:gap-4 text-3xl sm:text-5xl md:text-8xl font-light tracking-tight select-none">
            <span className="text-5xl sm:text-8xl">✢</span>
            <span className="font-serif text-2xl sm:text-4xl md:text-8xl">AV</span>
            <span className="text-5xl sm:text-8xl">✢</span>
          </div>
          <div className="absolute bottom-0 left-0">
            <p className="text-2xl sm:text-6xl md:text-6xl font-['Cinzel'] italic opacity-30 hidden md:block">ArtisanVista</p>
          </div>
        </div>
        {/* Right Section: Navigation Links */}
        <div className="flex flex-col w-full md:w-1/2 pr-0 sm:pr-16 ">
          <nav className="flex flex-col items-start gap-1 font-['Cinzel'] pt-6 sm:pt-20">
            {["Home", "Gallery", "Projects", "Team", "Contact"].map((item, idx) => (
              <a
                key={item}
                ref={el => navLinksRef.current[idx] = el}
                href={`#${item.toLowerCase()}`}
                className="text-2xl sm:text-5xl md:text-7xl font-light text-white/80 hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-2 mt-4 sm:mt-10">
            <div className="space-y-2">
              <p className="text-base sm:text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                Facebook
              </p>
              <p className="text-base sm:text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                Instagram
              </p>
              <p className="text-base sm:text-2xl font-extralight text-white flex items-center gap-2">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                LinkedIn
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs sm:text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
              <p className="text-xs sm:text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
              <p className="text-xs sm:text-lg font-light text-white text-left md:text-right flex items-center gap-2 md:justify-end">
                <span className="inline-block text-base sm:text-lg text-white/70">✢</span>
                tarakshubham4@gmail.com
              </p>
            </div>
          </div>

          <div className="w-full border-t border-white/40 my-4 sm:my-8"></div>

          <div className="flex flex-col md:flex-row w-full gap-2">
            <p className="text-xs sm:text-lg font-light text-white text-left md:w-1/2">
              Inspired By: Karya Kala
            </p>
            <p className="text-xs sm:text-lg font-light text-white text-left md:text-right md:w-1/2">
              Site By: Sagar tarak
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
