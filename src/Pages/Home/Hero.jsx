import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const phrases = ["UX Design", "Web Design", "Web Development", "Custom Websites"].map(phrase => phrase.toUpperCase());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 2000); // Change every 2 seconds
    return () => clearInterval(interval);
  }, [phrases.length]);
  return (
    <section
      className="min-h-screen flex flex-col justify-center px-8 bg-black"
      id="home"
    >
      <div className="max-w-6xl mx-auto w-full ">
        <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-pink-500">
          <img
            src="./assets/hero-image.png"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-white font-raleway font-black text-4xl md:text-6xl lg:text-8xl tracking-tight leading-tight pt-4 mb-8">
          FREELANCE DEVELOPER
          <br />
          SPECIALIZING IN
          <br />
          <span className="font-opensans text-3xl md:text-5xl lg:text-7xl text-pink-500">{phrases[currentIndex]}</span>
        </h1>

        <div className="mt-12">
          <Link
            to="contact"
            smooth={true}
            offset={-70}
            duration={500}
            className="px-8 py-4 bg-pink-500 text-white font-raleway font-semibold rounded-lg hover:bg-pink-600 transition-colors text-lg"
          >
            Work With Me
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
