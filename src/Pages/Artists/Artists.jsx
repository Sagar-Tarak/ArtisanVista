import React from 'react';

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

  return (
    <div className="bg-black min-h-screen pt-20 pb-32 px-8 text-white max-w-[2000px] mx-auto font-['Cinzel']">
      <h1 className="text-7xl font-light mb-40 pl-20">
        Meet <span className="italic">the</span> Visionary
      </h1>
      
      <div className="grid grid-cols-4 gap-x-6 relative px-12">
        {/* First Artist - Ayaka Mori */}
        <div className="col-span-1 pt-20">
          <div className="space-y-2">
            <div className="text-white font-serif text-xl">Nº{visionaries[0].id}</div>
            <p className="text-gray-500 text-sm">{visionaries[0].title}</p>
            <h3 className="text-xl font-light">{visionaries[0].name}</h3>
          </div>
          <img 
            src={visionaries[0].image} 
            alt={visionaries[0].name}
            className="w-full aspect-square object-cover mt-4" 
          />
        </div>

        {/* Second Artist - Elias Roux */}
        <div className="col-span-1">
          <img 
            src={visionaries[1].image} 
            alt={visionaries[1].name}
            className="w-full aspect-square object-cover mb-4" 
          />
          <div className="space-y-2">
            <div className="text-gray-400 font-serif text-xl">Nº{visionaries[1].id}</div>
            <p className="text-gray-500 text-sm">{visionaries[1].title}</p>
            <h3 className="text-xl font-light">{visionaries[1].name}</h3>
          </div>
        </div>

        {/* Third Artist - Laila Abassi */}
        <div className="col-span-1 pt-40">
          <div className="space-y-2 mb-4">
            <div className="text-gray-400 font-serif text-xl">Nº{visionaries[2].id}</div>
            <p className="text-gray-500 text-sm">{visionaries[2].title}</p>
            <h3 className="text-xl font-light">{visionaries[2].name}</h3>
          </div>
          <img 
            src={visionaries[2].image} 
            alt={visionaries[2].name}
            className="w-full aspect-square object-cover" 
          />
        </div>

        {/* Fourth Artist - Mateo Santiago */}
        <div className="col-span-1">
          <img 
            src={visionaries[3].image} 
            alt={visionaries[3].name}
            className="w-full aspect-square object-cover mb-4" 
          />
          <div className="space-y-2">
            <div className="text-gray-400 font-serif text-xl">Nº{visionaries[3].id}</div>
            <p className="text-gray-500 text-sm">{visionaries[3].title}</p>
            <h3 className="text-xl font-light">{visionaries[3].name}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artists;