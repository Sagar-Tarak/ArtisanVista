import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Showcase() {
  // Refs for animations
  const subtitleRef = useRef(null);
  const titleRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Subtitle animation
    tl.fromTo(subtitleRef.current,
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1 
      }
    );

    // Title animations with stagger
    tl.fromTo(titleRefs.current,
      { 
        y: 50, 
        opacity: 0,
        rotateX: -15
      },
      { 
        y: 0, 
        opacity: 1,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.2
      },
      "-=0.5"
    );

    // Images animation with stagger
    tl.fromTo(imageRefs.current,
      { 
        scale: 1.2,
        opacity: 0,
        y: 30
      },
      { 
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: 0.3
      },
      "-=1"
    );

  }, []);

  const artworks = [
    {
      image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=2070&auto=format&fit=crop",
      alt: "Artistic piece 1"
    },
    {
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
      alt: "Artistic piece 2"
    },
    {
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1974&auto=format&fit=crop",
      alt: "Artistic piece 3"
    }
  ];

  return (
    <>
      {/* Showcase Section */}
      <section className="h-screen bg-black text-white relative py-10">
        {/* Subtitle */}
        <div className="text-center">
          <span 
            ref={subtitleRef} 
            className="text-xl tracking-widest font-['Cinzel'] italic opacity-0"
          >
            Full collections
          </span>
        </div>

        {/* Main Title Container */}
        <div className="max-w-7xl mx-auto px-4 mt-20 relative">
          {/* Top Image */}
          <div 
            ref={el => imageRefs.current[0] = el}
            className="absolute top-70 left-5 w-52 h-52 opacity-0"
          >
            <img 
              src={artworks[0].image}
              alt={artworks[0].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Title */}
          <div className="text-center space-y-4 relative z-10">
            <h1 
              ref={el => titleRefs.current[0] = el}
              className="text-7xl font-light font-['Cinzel'] opacity-0"
            >
              The Living
            </h1>
            <h1 
              ref={el => titleRefs.current[1] = el}
              className="text-7xl font-light font-['Cinzel'] opacity-0"
            >
              Archive <span className="italic font-thin">of</span> Karya
            </h1>
            <h1 
              ref={el => titleRefs.current[2] = el}
              className="text-7xl font-light font-['Cinzel'] opacity-0"
            >
              Kala
            </h1>
          </div>

          {/* Center Image */}
          <div 
            ref={el => imageRefs.current[1] = el}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-0"
          >
            <img 
              src={artworks[1].image}
              alt={artworks[1].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right Image */}
          <div 
            ref={el => imageRefs.current[2] = el}
            className="absolute top-80 right-0 w-80 h-80 opacity-0"
          >
            <img 
              src={artworks[2].image}
              alt={artworks[2].alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Background Text Section */}
      <section 
        className="h-[70vh] flex items-center justify-center bg-black -mt-20"
        style={{
          background: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)'
        }}
      >
        <h1 
          className="text-[12vw] font-['Cinzel'] leading-none tracking-tighter text-center"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          THE SOUL OF THE<br />GALLERY
        </h1>
      </section>

      {/* Featured Artwork Section */}
      <section className="min-h-screen bg-black text-white px-4 py-32">
        <div className="max-w-6xl mx-auto">
          {/* Top Description */}
          <div className="text-center mb-32 space-y-6">
            <p className="text-4xl font-['Cinzel'] font-light leading-relaxed text-gray-300">
              From stone to sculpture, vessel to<br />
              vision discover the full spectrum of<br />
              works that celebrate form, texture, and<br />
              time.
            </p>
            
            <div className="w-full h-px bg-gray-300 mx-auto my-12"></div>
            
            <div className="space-y-3">
              <p className="text-xl tracking-wide font-['Cinzel']">
                A study <span className="text-gray-400 text-xl font-['Cinzel'] italic">of</span> nature's form <span className="italic">encased in stillness</span>.
              </p>
              <p className="text-gray-500 text-sm">2025</p>
            </div>
            
            <h2 className="text-5xl font-light mt-8 font-['Cinzel']">Forest Cross</h2>
          </div>

          {/* Artwork Display */}
          <div className="relative aspect-[16/9] w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1598838073192-05c942ede858?q=80&w=2934&auto=format&fit=crop" 
              alt="Forest Cross Artwork"
              className="w-full h-full object-cover rounded-sm"
            />
          </div>

          {/* View Artwork Button */}
          <div className="text-center mt-12 flex items-center justify-center gap-6">
            <button className="px-3 py-4 border border-white/20 rounded-2xl hover:bg-white/5 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            </button>
            <span className="text-sm tracking-wide">View Artwork</span>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Showcase;