import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  const phrases = ["Custom Web Design", "E-commerce Sites", "Website Maintenance", "App Integrations"].map(
    (phrase) => phrase.toUpperCase()
  );

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1000);

    const interval = setInterval(() => {
      setCurrentIndex(nextIndex);
      setNextIndex((nextIndex + 1) % phrases.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimer);
    };
  }, [nextIndex, phrases.length]);

  return (
    <section
      className="min-h-screen flex flex-col justify-center px-8 bg-black overflow-hidden"
      id="home"
    >
      <div className="max-w-6xl mx-auto w-full pt-10">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-500 mb-2">
          <img
            src="./assets/hero-image.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="overflow-hidden">
          <div className={`transform ${isInitialLoad ? 'animate-slideDown' : ''}`}>
            <h1 className="text-white font-exo font-black text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight">
              FREELANCE DEVELOPER
            </h1>
          </div>
        </div>

        <div className="overflow-hidden">
          <div className={`transform ${isInitialLoad ? 'animate-slideDown' : ''} animation-delay-100`}>
            <h1 className="text-white font-exo font-black text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight">
              SPECIALIZING IN
            </h1>
          </div>
        </div>

        <div className="overflow-hidden h-[4.5rem] md:h-[6rem] lg:h-[8rem] relative">
          <div 
            key={currentIndex}
            className="absolute w-full animate-wordChange"
          >
            <h1 className="text-pink-500 font-alegreya font-black text-3xl md:text-5xl lg:text-7xl tracking-tight leading-tight">
              {phrases[currentIndex]}
            </h1>
          </div>
        </div>

        <div className={`mt-12 transform ${isInitialLoad ? 'animate-slideDown' : ''} animation-delay-200`}>
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-4 bg-pink-500 text-white font-semibold rounded-lg hover:bg-pink-600 transition-colors text-lg inline-block"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;