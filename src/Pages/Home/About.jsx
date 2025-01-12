import React from 'react';

function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-8 bg-black text-white py-16">
      {/* Image container */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="./assets/about-me-image.png" 
          alt="About me" 
          className="w-full max-w-md rounded-lg shadow-2xl"
        />
      </div>

      {/* Content container */}
      <div className="w-full md:w-1/2 max-w-2xl">
        <h1 className=" text-pink-500 text-4xl md:text-5xl lg:text-6xl font-black mb-8 tracking-tight">
          About Me
        </h1>
        
        <p className="text-lg text-white leading-relaxed">
          Hi, I'm Sammi, a freelance web developer based in Atlanta, GA, specializing 
          in websites for small businesses and entrepreneurs. I started my journey as 
          a self-taught front-end developer intern and have spent the past five years 
          working as a support engineer, building front-end projects on the side. 
          I'm passionate about providing effective solutions to meet your web development 
          needs. Let's work together to bring your vision to life!
        </p>
      </div>
    </section>
  );
}

export default About;