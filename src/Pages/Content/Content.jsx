import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Content() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
      gsap.from(paragraphRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: paragraphRef.current,
          start: "top 85%",
        },
      });
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: "power3.out",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 90%",
        },
      });
      gsap.from(imageRef.current, {
        x: 80,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row bg-black text-white p-8 md:p-16 gap-8 min-h-screen items-center mb-5"
      >
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col justify-center font-['Cinzel'] relative items-center">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-light leading-tight text-center"
          >
            Crafted by <em>Nature</em>,<br />
            Curated with —— <em>Soul</em>
          </h1>

          <p
            ref={paragraphRef}
            className="mt-8 text-lg text-gray-300 leading-relaxed max-w-lg text-center relative static w-auto left-auto top-auto"
          >
            Each piece in the <em>Karya Kala</em> collection is more than a work
            of art — it is a story.
            <br />
            <br />
            A moment in time.
            <br />
            <br />
            Karya Kala is a sanctuary for rare and meaningful creations born
            from raw natural elements, refined by skilled hands, and shared
            through an annual celebration of artistry. We collect unique,
            hand-crafted pieces shaped by talented artists who turn natural
            materials into quiet masterpieces — each one meant to be felt, not
            just seen.
          </p>

          <button
            ref={buttonRef}
            className="mt-8 px-6 py-3 border border-white hover:bg-white hover:text-black transition duration-300 w-fit"
          >
            Explore Collection →
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex justify-end items-center">
          <img
            ref={imageRef}
            src="https://images.unsplash.com/photo-1605046267463-288b96926f46?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Crafted Art"
            className="w-full max-w-md shadow-xl"
          />
        </div>
      </div>
    </>
  );
}

export default Content;
