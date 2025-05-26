import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function Artists() {
  const visionaries = [
    {
      id: '01',
      name: 'Shawn Mendes',
      title: 'Stone Carving',
      image: 'https://images.unsplash.com/photo-1675453442429-1ea5b9652743?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFydGlzdCUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '02',
      name: 'Elias Roux',
      title: 'Neo-Romantic Figuration',
      image: 'https://images.unsplash.com/photo-1717672134053-a9b92d61c017?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGFydGlzdCUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '03',
      name: 'James Abassi',
      title: 'Ceramicists',
      image: 'https://images.unsplash.com/photo-1647740356562-085610b8cbc5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fGFydGlzdCUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
      id: '04',
      name: 'Mateo Santiago',
      title: 'Contemporary Sculptor',
      image: 'https://images.unsplash.com/photo-1701463205870-6b6ec3dbed2b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
    );
    // Animate cards with stagger
    gsap.fromTo(
      cardRefs.current,
      { y: 60, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.18, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  return (
    <div className="bg-black min-h-screen pt-10 md:pt-20 pb-16 md:pb-32 px-2 sm:px-4 md:px-8 text-white max-w-[2000px] mx-auto font-['Cinzel']">
      <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-7xl font-light mb-12 md:mb-40 pl-2 md:pl-20 text-center md:text-left">
        Meet <span className="italic">the</span> Visionary
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 sm:gap-x-6 relative px-0 md:px-12">
        {/* First Artist - Ayaka Mori */}
        <div ref={el => cardRefs.current[0] = el} className="col-span-1 pt-6 md:pt-20 flex flex-col items-center md:items-start">
          <div className="space-y-1 md:space-y-2 text-center md:text-left w-full">
            <div className="text-white font-serif text-lg md:text-xl">Nº{visionaries[0].id}</div>
            <p className="text-gray-500 text-xs md:text-sm">{visionaries[0].title}</p>
            <h3 className="text-lg md:text-xl font-light">{visionaries[0].name}</h3>
          </div>
          <img 
            src={visionaries[0].image} 
            alt={visionaries[0].name}
            className="w-full aspect-square object-cover mt-2 md:mt-4 rounded-lg"
          />
        </div>

        {/* Second Artist - Elias Roux */}
        <div ref={el => cardRefs.current[1] = el} className="col-span-1 flex flex-col items-center md:items-start">
          <img 
            src={visionaries[1].image} 
            alt={visionaries[1].name}
            className="w-full aspect-square object-cover mb-2 md:mb-4 rounded-lg" 
          />
          <div className="space-y-1 md:space-y-2 text-center md:text-left w-full">
            <div className="text-gray-400 font-serif text-lg md:text-xl">Nº{visionaries[1].id}</div>
            <p className="text-gray-500 text-xs md:text-sm">{visionaries[1].title}</p>
            <h3 className="text-lg md:text-xl font-light">{visionaries[1].name}</h3>
          </div>
        </div>

        {/* Third Artist - Laila Abassi */}
        <div ref={el => cardRefs.current[2] = el} className="col-span-1 pt-10 md:pt-40 flex flex-col items-center md:items-start">
          <div className="space-y-1 md:space-y-2 mb-2 md:mb-4 text-center md:text-left w-full">
            <div className="text-gray-400 font-serif text-lg md:text-xl">Nº{visionaries[2].id}</div>
            <p className="text-gray-500 text-xs md:text-sm">{visionaries[2].title}</p>
            <h3 className="text-lg md:text-xl font-light">{visionaries[2].name}</h3>
          </div>
          <img 
            src={visionaries[2].image} 
            alt={visionaries[2].name}
            className="w-full aspect-square object-cover rounded-lg" 
          />
        </div>

        {/* Fourth Artist - Mateo Santiago */}
        <div ref={el => cardRefs.current[3] = el} className="col-span-1 flex flex-col items-center md:items-start">
          <img 
            src={visionaries[3].image} 
            alt={visionaries[3].name}
            className="w-full aspect-square object-cover mb-2 md:mb-4 rounded-lg" 
          />
          <div className="space-y-1 md:space-y-2 text-center md:text-left w-full">
            <div className="text-gray-400 font-serif text-lg md:text-xl">Nº{visionaries[3].id}</div>
            <p className="text-gray-500 text-xs md:text-sm">{visionaries[3].title}</p>
            <h3 className="text-lg md:text-xl font-light">{visionaries[3].name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;