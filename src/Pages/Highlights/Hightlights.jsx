import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Hightlights() {
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const navButtonsRef = useRef([]);
  const viewGalleryRef = useRef(null);
  
  // Initialize artwork refs
  const numberRefs = useRef([]);
  const titleRefs = useRef([]);
  const artistRefs = useRef([]);
  const imageRefs = useRef([]);

  // Header animation
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top center+=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
    
    tl.fromTo(headerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.7"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.7"
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Artwork details animation
  useEffect(() => {
    imageRefs.current.forEach((imageRef, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      // Image scale animation
      tl.fromTo(imageRef,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power3.out" }
      )
      // Number animation
      .fromTo(numberRefs.current[i],
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      // Title animation
      .fromTo(titleRefs.current[i],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 0.4, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      )
      // Artist name animation
      .fromTo(artistRefs.current[i],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 0.7, duration: 0.8, ease: "power3.out" },
        "-=0.6"
      );
    });
  }, []);

  // Navigation buttons hover animations
  useEffect(() => {
    navButtonsRef.current.forEach(button => {
      if (!button) return;

      const arrow = button.querySelector('.arrow');
      const border = button.querySelector('.button-border');

      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(arrow, {
          scale: 1.2,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
        gsap.to(border, {
          borderColor: 'rgba(255, 255, 255, 0.5)',
          duration: 0.3
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          backgroundColor: 'transparent',
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(arrow, {
          scale: 1,
          duration: 0.3,
          ease: 'back.out(1.7)'
        });
        gsap.to(border, {
          borderColor: 'rgba(255, 255, 255, 0.2)',
          duration: 0.3
        });
      });
    });

    if (viewGalleryRef.current) {
      const arrow = viewGalleryRef.current.querySelector('.arrow');
      const text = viewGalleryRef.current.querySelector('.text');

      viewGalleryRef.current.addEventListener('mouseenter', () => {
        gsap.to(arrow, {
          x: 5,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(text, {
          color: 'rgba(255, 255, 255, 1)',
          duration: 0.3
        });
      });

      viewGalleryRef.current.addEventListener('mouseleave', () => {
        gsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(text, {
          color: 'rgba(255, 255, 255, 0.7)',
          duration: 0.3
        });
      });
    }

    return () => {
      navButtonsRef.current.forEach(button => {
        if (button) {
          button.replaceWith(button.cloneNode(true));
        }
      });
      if (viewGalleryRef.current) {
        viewGalleryRef.current.replaceWith(viewGalleryRef.current.cloneNode(true));
      }
    };
  }, []);

  const artworks = [
    {
      number: "01",
      year: "2024",
      artist: "Amelia Moon",
      title: "Echo of the Earth",
      image: "https://images.unsplash.com/photo-1577638104555-83af2d50b5e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxvYmplY3R8ZW58MHx8MHx8fDA%3D" // You'll need to add these images to your public folder
    },
    {
      number: "02",
      year: "2023",
      artist: "Leila Abbas",
      title: "The Vessel of Memory",
      image: "https://images.unsplash.com/photo-1609094627826-e1275e9a4e4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      number: "03",
      year: "2024",
      artist: "Mason Steinberg",
      title: "Whispering Shell",
      image: "https://images.unsplash.com/photo-1633101635884-93a9992960fa?q=80&w=1993&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white overflow-x-hidden">
      {/* Header Section */}
      <div className="flex flex-col items-center pt-16 mb-20">
        <div ref={headerRef} className='text-xl font-light font-["Cinzel"] mb-4 tracking-wide opacity-0'>
          <h3>Highlights from the Collection</h3>
        </div>
        <div className="text-center font-['Cinzel']">    
          <h1 ref={titleRef} className="text-5xl font-light italic mb-2 opacity-0">A curated selection</h1>
          <div ref={subtitleRef} className="flex items-center justify-center gap-3 opacity-0">
            <span className="text-2xl italic font-extralight">of</span>
            <h1 className="text-5xl font-light">exceptional works</h1>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="flex justify-between px-4 gap-4">
        {artworks.map((artwork, index) => (
          <div key={index} className="relative flex-1">
            <div 
              ref={el => imageRefs.current[index] = el} 
              className="overflow-hidden"
            >
              <img 
                src={artwork.image} 
                alt={artwork.title}
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div>
                <span 
                  ref={el => numberRefs.current[index] = el}
                  className="text-2xl font-light font-['Cinzel'] opacity-0"
                >
                  N° {artwork.number}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm opacity-40">
                <span className="textl-md">{artwork.year}</span>
                <span className="w-4 h-[1px] bg-white/70"></span>
                <h3 
                  ref={el => titleRefs.current[index] = el}
                  className="text-md font-light font-['Cinzel'] italic opacity-0"
                >
                  {artwork.title}
                </h3>
              </div>
              <p 
                ref={el => artistRefs.current[index] = el}
                className="text-2xl opacity-0 font-['Cinzel']"
              >
                {artwork.artist}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center px-8 mt-8">
        <div className="flex gap-4">
          <button 
            ref={el => navButtonsRef.current[0] = el}
            className="w-10 h-12 border border-white/20 rounded-xl flex items-center justify-center transition-colors group relative"
          >
            <span className="arrow">←</span>
            <div className="button-border absolute inset-0 rounded-xl border border-white/20"></div>
          </button>
          <button 
            ref={el => navButtonsRef.current[1] = el}
            className="w-10 h-12 border border-white/20 rounded-xl flex items-center justify-center transition-colors group relative"
          >
            <span className="arrow">→</span>
            <div className="button-border absolute inset-0 rounded-xl border border-white/20"></div>
          </button>
        </div>
        <button 
          ref={viewGalleryRef}
          className="flex items-center gap-2 text-sm text-white/70 hover:text-white  "
        >
          <button className="arrow mr-2 w-10 h-12 border border-white/20 rounded-xl flex items-center justify-center transition-colors group relative">↗</button>
          <div className="button-border absolute inset-0 rounded-xl border border-white/20"></div>
          <span className="text">View Gallery</span>
          
        </button>
      </div>
    </div>
  );
}

export default Hightlights;
