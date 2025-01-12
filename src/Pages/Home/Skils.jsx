import React from 'react';
import data from "../../data/index.json";

function MySkills() {
  return (
    <section className="min-h-screen bg-black py-20 px-8" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-system text-4xl md:text-5xl font-black mb-16 text-center">
          Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {data?.skills?.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Service Counter */}
              <span className="text-pink-500 font-system text-lg mb-4">
                S / {index + 1}
              </span>
              
              {/* Title */}
              <h3 className="font-system text-white text-2xl md:text-3xl font-black mb-4">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-white font-system text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MySkills;