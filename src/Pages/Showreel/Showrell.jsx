import React, { useRef, useState } from 'react'

function Showrell() {
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/video.mp4"
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        {/* Bottom gradient overlay for video */}
        <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      </div>
      {/* Centered Play Button and Text */}
      {!isPlaying && (
        <div className="relative z-20 flex flex-col items-center justify-center">
          <button
            onClick={handlePlay}
            className="flex items-center justify-center w-20 h-20 rounded-full border-2 border-white shadow-2xl bg-gradient-to-br from-blue-500/30 via-white/10 to-blue-400/10 hover:from-blue-400/60 hover:via-white/20 hover:to-blue-400/30 active:scale-95 focus:ring-4 focus:ring-blue-300/40 transition-all duration-300 hover:scale-110 group relative overflow-visible"
            aria-label="Play Video"
          >
            {/* Animated radial gradient ring */}
            <span className="absolute inset-0 rounded-full bg-gradient-radial from-blue-400/40 via-transparent to-transparent opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500 pointer-events-none"></span>
            {/* Play icon with glassmorphism effect */}
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-white/30 backdrop-blur-md shadow-inner border border-white/30">
              <svg className="w-10 h-10 z-10 transition-transform duration-300 group-hover:scale-125 group-active:scale-95" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <polygon points="28,22 28,42 44,32" fill="white" />
              </svg>
            </span>
            {/* Subtle floating shimmer */}
            <span className="absolute left-1/4 top-2 w-8 h-1 rounded-full bg-white/40 blur-sm opacity-70 animate-shimmer"></span>
            <style>{`
              @keyframes shimmer { 0% { transform: translateY(0) scaleX(1); opacity: 0.7; } 50% { transform: translateY(10px) scaleX(1.2); opacity: 1; } 100% { transform: translateY(0) scaleX(1); opacity: 0.7; } }
              .animate-shimmer { animation: shimmer 2.2s infinite; }
              .bg-gradient-radial { background: radial-gradient(circle, var(--tw-gradient-stops)); }
            `}</style>
          </button>
        </div>
      )}
    </div>
  )
}

export default Showrell